# tools/

`information-law/` の公開版をつくるためのスクリプト。

## 前提：2つの版を分ける

| | 置き場所 | 中身 |
|---|---|---|
| **フル版** | 手元のフォルダ／非公開ページ | 条文＋比較ステータス＋**検討メモ** |
| **公開版** | このリポジトリの `information-law/` | 条文＋比較ステータスのみ |

**フル版はこのリポジトリに置かないこと。** このリポジトリは public なので、
置いた時点でメモが誰でも読める状態になる。`git log -p` で履歴からも読めるため、
あとから消しても手遅れになる。

編集はフル版の `data.js` に対してだけ行い、公開版は必ず下のスクリプトで生成する。
公開版の `data.js` を手で直すと、次の生成で上書きされる。

## 使い方

```bash
# リポジトリのルートで
node tools/build-public.js <フル版フォルダ>

# 例
node tools/build-public.js ~/Documents/edu-infolaw-db
```

フル版フォルダの `index.html` と `data.js` を読み、

- `data.js` から `memo`（比較セル・条文）と `thesis`（論点）と `meta.owner` を除去
- `index.html` はそのままコピー

して `information-law/` に書き出す。

書き出す前に検査が走り、`本稿` `立法提案` `修士論文` `修論` `島崎` のいずれかが
残っていたら **何も書き出さずに異常終了する**。検査に引っかかったら、フル版側の
どのフィールドに入っているかを確認して直す。

生成できたら、

```bash
git add information-law
git commit -m "データベースを更新"
git push
```

## 新しい項目を足すとき

フル版の `data.js` だけを編集する。4種類の配列がある。

```js
axes:        { id, label, q, thesis }                       // 論点
cells:       { axis, jur, status, refs, summary, memo, verified }  // 論点 × 法域
provisions:  { id, inst, cite, title, axes, status, text, memo, src, verified }
instruments: { id, jur, kind, name, full, src }             // 法令・文書
```

- `status` … `explicit`（明文の規定）／`partial`（部分的・解釈）／`absent`（規定なし）／`na`（対象外）／`todo`（未記入）
- `verified` … 省略すると「確認済み」。一次資料で未確認のものに `verified:false` を付けると「要検証」タグが出る
- `src` … 条文ごとの出典URL。省略するとその法令（`instruments` の `src`）にフォールバックする
- 書かなかった論点 × 法域の組み合わせは自動的に「未記入」になるので、埋まっていなくても壊れない

`memo` と `thesis` は公開版には出ない。検討のメモはここに書いてよい。
`summary` と `text` は公開されるので、ここには検討メモを書かないこと。
