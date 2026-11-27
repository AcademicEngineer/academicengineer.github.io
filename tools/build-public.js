#!/usr/bin/env node
/*
 * 教育データ情報法データベース ── 公開版ビルドスクリプト
 *
 *   node tools/build-public.js <フル版フォルダ>
 *
 * フル版フォルダの index.html と data.js を読み、data.js から
 * 検討メモ（memo / thesis）を取り除いたものを information-law/ に書き出す。
 *
 * フル版（メモ入り）はこのリポジトリに置かないこと。リポジトリは public。
 * フル版は手元のフォルダか非公開のページにだけ置く。
 *
 * 漏れを検知したら書き出さずに異常終了する。
 */

'use strict';
const fs = require('fs');
const path = require('path');

const SRC = process.argv[2];
const OUT = path.join(__dirname, '..', 'information-law');

if (!SRC) {
  console.error('使い方: node tools/build-public.js <フル版フォルダ>');
  console.error('例:     node tools/build-public.js ~/Documents/edu-infolaw-db');
  process.exit(1);
}

const srcData = path.join(SRC, 'data.js');
const srcHtml = path.join(SRC, 'index.html');
for (const f of [srcData, srcHtml]) {
  if (!fs.existsSync(f)) { console.error('見つかりません: ' + f); process.exit(1); }
}

/* ---- 1. フル版を読む ---------------------------------------------- */
global.window = {};
new Function(fs.readFileSync(srcData, 'utf8'))();
const DB = global.window.DB;
if (!DB || !DB.provisions) { console.error('data.js の形式が想定と違います'); process.exit(1); }

/* ---- 2. メモを落とす ---------------------------------------------- */
const removed = { thesis: 0, cellMemo: 0, provMemo: 0 };
DB.axes.forEach(a => { if (a.thesis !== undefined) { delete a.thesis; removed.thesis++; } });
DB.cells.forEach(c => { if (c.memo) removed.cellMemo++; delete c.memo; });
DB.provisions.forEach(p => { if (p.memo) removed.provMemo++; delete p.memo; });
delete DB.meta.owner;   // 氏名・所属は公開版に載せない

DB.meta.note = '条文はすべて抜粋。引用に用いる際は必ず一次資料で確認すること。'
             + '「要検証」タグの付いた項目は未確認。作成途中の資料であり、内容の正確性は保証しない。';

const header = `/* ------------------------------------------------------------------
   教育データ情報法データベース ── データ本体（公開版）

   tools/build-public.js がフル版から自動生成したファイルです。
   直接編集しないでください。フル版を直してから生成し直してください。
   ------------------------------------------------------------------ */

window.DB = `;
const out = header + JSON.stringify(DB, null, 1) + ';\n';

/* ---- 3. 漏れの検査（ここで止める） --------------------------------- */
// 公開版に出てはいけない語。氏名など個別の語を足したいときはここに追加する
// （このファイルもリポジトリに入るので、氏名そのものは書かないこと）。
const BANNED = ['本稿', '立法提案', '修士論文', '修論'];
const problems = [];

BANNED.forEach(w => { if (out.includes(w)) problems.push('data.js に「' + w + '」が残っています'); });
['"memo"', '"thesis"', '"owner"'].forEach(k => {
  if (out.includes(k)) problems.push('data.js に ' + k + ' キーが残っています');
});

const html = fs.readFileSync(srcHtml, 'utf8');
// index.html 側は、データを持たないラベル文字列だけ許容する
const allowedInHtml = ["content:'本稿メモ　'", '<b>本稿との接続　</b>'];
let htmlCheck = html;
allowedInHtml.forEach(s => { htmlCheck = htmlCheck.split(s).join(''); });
BANNED.forEach(w => { if (htmlCheck.includes(w)) problems.push('index.html に「' + w + '」が残っています'); });

if (problems.length) {
  console.error('\n公開版を書き出しませんでした。次を直してください:');
  problems.forEach(p => console.error('  - ' + p));
  process.exit(1);
}

/* ---- 4. 書き出す --------------------------------------------------- */
fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'data.js'), out);
fs.copyFileSync(srcHtml, path.join(OUT, 'index.html'));

const unver = DB.provisions.filter(p => p.verified === false).length;
console.log('公開版を書き出しました: ' + OUT);
console.log('  除去 … thesis ' + removed.thesis + ' / セルのメモ ' + removed.cellMemo
          + ' / 条文のメモ ' + removed.provMemo);
console.log('  収録 … 論点 ' + DB.axes.length + ' / 法令等 ' + DB.instruments.length
          + ' / 条文 ' + DB.provisions.length + '（うち要検証 ' + unver + '）');
console.log('  検査 … 漏れなし');
console.log('\n次: git add information-law && git commit && git push');
