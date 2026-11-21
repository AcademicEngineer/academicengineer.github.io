#!/usr/bin/env python3
"""Download the UEC 2004–2009 syllabus archive and merge it by year and course type."""
from concurrent.futures import ThreadPoolExecutor
from html.parser import HTMLParser
from pathlib import Path
from time import sleep
from urllib.parse import urljoin, urlsplit
from urllib.request import urlopen
import argparse
import re

BASE = "https://kyoumu.office.uec.ac.jp/syllabus/old-syllabus/"
NAME = "uec_syllabus_2004-2009.pdf"
GROUPS = {"A": "Undergraduate day", "B": "Undergraduate evening", "G": "Graduate"}


class Links(HTMLParser):
    def __init__(self):
        super().__init__()
        self.hrefs = []

    def handle_starttag(self, tag, attrs):
        href = dict(attrs).get("href")
        if tag == "a" and href:
            self.hrefs.append(href)


def read_url(url):
    for attempt in range(3):
        try:
            with urlopen(url, timeout=30) as response:
                return response.read()
        except OSError:
            if attempt == 2:
                raise
            sleep(2 ** attempt)


def read_links(url):
    parser = Links()
    parser.feed(read_url(url).decode("cp932", errors="replace"))
    return parser.hrefs


def catalogue():
    groups = {}
    for href in read_links(urljoin(BASE, "index.htm")):
        match = re.fullmatch(r"(1[6-9]|2[01])([ABG])\.htm", href, re.I)
        if not match:
            continue
        era, kind = match.groups()
        url = urljoin(BASE, href)
        links = []
        for item in read_links(url):
            absolute = urljoin(url, item)
            if re.fullmatch(re.escape(BASE) + r"page/\d+\.pdf", absolute, re.I):
                links.append(absolute)
        if not links:
            raise RuntimeError(f"No syllabus PDF links found in {url}")
        groups[(1988 + int(era), kind.upper())] = links
    if len(groups) != 18:
        raise RuntimeError(f"Expected 18 archive groups, found {len(groups)}")
    return dict(sorted(groups.items()))


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--cache", type=Path, default=Path("uec-syllabus-cache"))
    parser.add_argument("--output", type=Path, default=Path(NAME))
    args = parser.parse_args()
    from pypdf import PdfReader, PdfWriter

    args.cache.mkdir(parents=True, exist_ok=True)
    groups = catalogue()
    sources = list(dict.fromkeys(url for links in groups.values() for url in links))
    expected = (8643, 8459)
    actual = (sum(map(len, groups.values())), len(sources))
    print(f"Catalogue: {actual[0]} links, {actual[1]} distinct PDFs", flush=True)
    if actual != expected:
        print(f"Catalogue has changed since the checked snapshot {expected}.", flush=True)

    def fetch(url):
        path = args.cache / Path(urlsplit(url).path).name
        try:
            if path.exists() and path.open("rb").read(5) == b"%PDF-":
                return path
            payload = read_url(url)
            if not payload.startswith(b"%PDF-"):
                raise ValueError("response is not a PDF")
            temporary = path.with_suffix(".part")
            temporary.write_bytes(payload)
            temporary.replace(path)
            return path
        except (OSError, ValueError) as exc:
            return f"{url}\t{exc}"

    paths = {}
    failures = []
    with ThreadPoolExecutor(max_workers=4) as pool:
        for i, (url, result) in enumerate(zip(sources, pool.map(fetch, sources)), 1):
            if isinstance(result, Path):
                paths[url] = result
            else:
                failures.append(result)
            if i % 250 == 0 or i == len(sources):
                print(f"Checked {i}/{len(sources)}", flush=True)
    if failures:
        log = args.cache / "failed.tsv"
        log.write_text("\n".join(failures) + "\n", encoding="utf-8")
        raise SystemExit(f"{len(failures)} PDFs unavailable. See {log}. Retry to reuse the cached files.")

    writer = PdfWriter()
    writer.add_metadata({"/Title": "UEC syllabus archive 2004–2009"})
    for (year, kind), links in groups.items():
        start = len(writer.pages)
        for source in dict.fromkeys(links):
            try:
                writer.append(PdfReader(paths[source]), import_outline=False)
            except Exception as exc:
                raise RuntimeError(f"Cannot merge {source}") from exc
        writer.add_outline_item(f"{year} — {GROUPS[kind]}", start)
    count = len(writer.pages)
    args.output.parent.mkdir(parents=True, exist_ok=True)
    temporary = args.output.with_suffix(".tmp.pdf")
    writer.write(str(temporary))
    writer.close()
    with temporary.open("rb") as handle:
        verified = PdfReader(handle)
        if len(verified.pages) != count or len(verified.outline) != len(groups):
            raise RuntimeError("Output page or outline count differs")
    temporary.replace(args.output)
    print(f"{args.output}: {count} pages", flush=True)


if __name__ == "__main__":
    main()
