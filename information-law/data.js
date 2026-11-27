/* ------------------------------------------------------------------
   教育データ情報法データベース ── データ本体（公開版）

   これは作業用のフル版から、論文の検討メモ（memo / thesis）を
   自動で除いて生成したファイルです。手で編集せず、フル版を直して
   生成し直してください。
   ------------------------------------------------------------------ */

window.DB = {
 "meta": {
  "title": "教育データ情報法データベース",
  "subtitle": "大学の教育データのAI利活用における情報法的考察 ── 比較法データベース",
  "owner": "島崎俊介（一橋大学大学院法学研究科ビジネスロー専攻）",
  "updated": "2026-11-27",
  "note": "条文はすべて抜粋。引用に用いる際は必ず一次資料で確認すること。「要検証」タグの付いた項目は未確認。作成途中の資料であり、内容の正確性は保証しない。"
 },
 "jurisdictions": [
  {
   "id": "jp",
   "label": "日本",
   "short": "JP"
  },
  {
   "id": "eu",
   "label": "EU",
   "short": "EU"
  },
  {
   "id": "uk",
   "label": "英国",
   "short": "UK"
  },
  {
   "id": "us",
   "label": "米国",
   "short": "US"
  },
  {
   "id": "kr",
   "label": "韓国",
   "short": "KR"
  }
 ],
 "instruments": [
  {
   "id": "jp-appi",
   "jur": "jp",
   "kind": "法律",
   "name": "個人情報保護法",
   "full": "個人情報の保護に関する法律（平成15年法律第57号／令和8年法律第56号による改正後）"
  },
  {
   "id": "jp-rule",
   "jur": "jp",
   "kind": "規則",
   "name": "個情法施行規則",
   "full": "個人情報の保護に関する法律施行規則"
  },
  {
   "id": "jp-ai",
   "jur": "jp",
   "kind": "法律",
   "name": "AI推進法",
   "full": "人工知能関連技術の研究開発及び活用の推進に関する法律（令和7年法律第53号・全28条）"
  },
  {
   "id": "jp-mirai",
   "jur": "jp",
   "kind": "法律",
   "name": "次世代医療基盤法",
   "full": "医療分野の研究開発に資するための匿名加工医療情報及び仮名加工医療情報に関する法律（平成29年法律第28号）"
  },
  {
   "id": "jp-policy",
   "jur": "jp",
   "kind": "政策文書",
   "name": "教育DXロードマップ",
   "full": "教育DXロードマップ（令和7年6月13日・デジタル庁／総務省／文部科学省／経済産業省）"
  },
  {
   "id": "jp-std",
   "jur": "jp",
   "kind": "行政文書",
   "name": "教育データ標準",
   "full": "文部科学省「教育データ標準」5.0版・相互運用標準モデル Ver.5.00"
  },
  {
   "id": "eu-gdpr",
   "jur": "eu",
   "kind": "規則",
   "name": "GDPR",
   "full": "一般データ保護規則（規則(EU)2016/679）"
  },
  {
   "id": "eu-aiact",
   "jur": "eu",
   "kind": "規則",
   "name": "EU AI法",
   "full": "人工知能に関する調和された規則（規則(EU)2024/1689）"
  },
  {
   "id": "eu-ehds",
   "jur": "eu",
   "kind": "規則",
   "name": "EHDS",
   "full": "欧州ヘルスデータスペース規則（規則(EU)2025/327）"
  },
  {
   "id": "eu-dga",
   "jur": "eu",
   "kind": "規則",
   "name": "データガバナンス法",
   "full": "欧州データガバナンス法（規則(EU)2022/868）※デジタル・オムニバスにより廃止・統合が提案中"
  },
  {
   "id": "eu-dataact",
   "jur": "eu",
   "kind": "規則",
   "name": "データ法",
   "full": "データ法（規則(EU)2023/2854）"
  },
  {
   "id": "uk-gdpr",
   "jur": "uk",
   "kind": "規則",
   "name": "UK GDPR",
   "full": "UK General Data Protection Regulation"
  },
  {
   "id": "uk-dpa",
   "jur": "uk",
   "kind": "法律",
   "name": "DPA 2018",
   "full": "Data Protection Act 2018"
  },
  {
   "id": "uk-duaa",
   "jur": "uk",
   "kind": "法律",
   "name": "DUAA 2025",
   "full": "Data (Use and Access) Act 2025"
  },
  {
   "id": "us-ferpa",
   "jur": "us",
   "kind": "法律",
   "name": "FERPA",
   "full": "Family Educational Rights and Privacy Act（20 U.S.C. §1232g／34 C.F.R. Part 99）"
  },
  {
   "id": "us-coppa",
   "jur": "us",
   "kind": "法律",
   "name": "COPPA",
   "full": "Children’s Online Privacy Protection Act（15 U.S.C. §§6501-6506）"
  },
  {
   "id": "kr-pipa",
   "jur": "kr",
   "kind": "法律",
   "name": "韓国個人情報保護法",
   "full": "개인정보 보호법（個人情報保護法）"
  },
  {
   "id": "kr-ai",
   "jur": "kr",
   "kind": "法律",
   "name": "韓国AI基本法",
   "full": "인공지능 발전과 신뢰 기반 조성 등에 관한 기본법（AI基本法・2026年1月施行予定）"
  }
 ],
 "axes": [
  {
   "id": "purpose",
   "label": "保護法益・目的規定",
   "q": "法律は何を守るために置かれているか。利活用と権利保護はどう並べられているか。"
  },
  {
   "id": "stat",
   "label": "統計・研究目的の例外",
   "q": "統計作成や学術研究のために、本人同意なしでデータを扱える仕組みがあるか。"
  },
  {
   "id": "exit",
   "label": "出口規制（成果物の個別決定への不使用）",
   "q": "統計・研究目的で作られた成果物を、特定個人への措置・決定に使うことを禁じているか。"
  },
  {
   "id": "auto",
   "label": "自動化された決定",
   "q": "人の関与なく下される決定に対し、本人の権利や事業者の義務が定められているか。"
  },
  {
   "id": "deleg",
   "label": "委任立法の構造",
   "q": "要件の具体化がどこまで法律に書かれ、どこから下位規範に委ねられているか。"
  },
  {
   "id": "eddata",
   "label": "教育データの定義",
   "q": "「教育データ」ないし「教育記録」が法律上定義されているか。"
  },
  {
   "id": "reident",
   "label": "識別行為の禁止",
   "q": "加工済みデータから本人を識別しようとする行為が禁じられているか。"
  },
  {
   "id": "erase",
   "label": "削除・利用停止とモデルへの反映",
   "q": "本人の請求が、学習済みモデルに取り込まれた影響にまで及ぶか。"
  },
  {
   "id": "enforce",
   "label": "監督・執行",
   "q": "違反に対してどんな手段があるか。非営利の教育機関に実効性があるか。"
  },
  {
   "id": "infra",
   "label": "データ共用基盤・データスペース",
   "q": "データが流れる「場」そのものを規律する法律があるか。仲介者の中立性義務はあるか。"
  },
  {
   "id": "minor",
   "label": "未成年・在学関係",
   "q": "未成年の学習者や在学関係に固有の規律があるか。"
  }
 ],
 "cells": [
  {
   "axis": "purpose",
   "jur": "jp",
   "status": "explicit",
   "refs": [
    "jp-appi-1",
    "jp-appi-3"
   ],
   "summary": "1条は「有用性に配慮しつつ、個人の権利利益を保護する」という非対称構造をとる。3条が人格尊重の理念を置く。"
  },
  {
   "axis": "purpose",
   "jur": "eu",
   "status": "explicit",
   "refs": [
    "eu-gdpr-1"
   ],
   "summary": "1条2項が基本権の保護を、3項が自由流通を掲げる。前文4は保護が絶対的権利ではないとして比例性を要求。"
  },
  {
   "axis": "purpose",
   "jur": "uk",
   "status": "explicit",
   "refs": [],
   "summary": "UK GDPR 1条はEU GDPRを継承。DUAA 2025は「成長」を前面に出す方向で改正を加えた。",
   "verified": false
  },
  {
   "axis": "purpose",
   "jur": "us",
   "status": "partial",
   "refs": [
    "us-ferpa-def",
    "us-ferpa-enf"
   ],
   "summary": "FERPAに目的規定はない。連邦資金の交付条件として教育記録の開示を規律する仕組みで、権利章典型の構造をとらない。"
  },
  {
   "axis": "purpose",
   "jur": "kr",
   "status": "explicit",
   "refs": [
    "kr-pipa-1"
   ],
   "summary": "1条は「個人の自由と権利を保護し、さらに個人の尊厳と価値を具現する」ことを目的とし、有用性への配慮を目的規定に書かない。",
   "verified": false
  },
  {
   "axis": "stat",
   "jur": "jp",
   "status": "explicit",
   "refs": [
    "jp-appi-2-13",
    "jp-appi-18-3"
   ],
   "summary": "令和8年改正が2条13項に「統計作成等」を定義し、同意なしの取得・提供を可能にした。要件は委員会規則に委ねられている。"
  },
  {
   "axis": "stat",
   "jur": "eu",
   "status": "explicit",
   "refs": [
    "eu-gdpr-5-1b",
    "eu-gdpr-89",
    "eu-ehds-53"
   ],
   "summary": "5条1項(b)が統計・研究目的の追加処理を目的外としないとし、89条1項が保障措置を要求。EHDS 53条は医療分野の許容目的を列挙。"
  },
  {
   "axis": "stat",
   "jur": "uk",
   "status": "explicit",
   "refs": [
    "uk-gdpr-84c"
   ],
   "summary": "DUAA 2025がUK GDPRに84A〜84C条を挿入し、研究・記録保存・統計目的の処理と保障措置を整理した（2026年2月5日施行）。"
  },
  {
   "axis": "stat",
   "jur": "us",
   "status": "partial",
   "refs": [
    "us-ferpa-studies",
    "us-ferpa-audit"
   ],
   "summary": "FERPAはstudies exception（34 C.F.R. §99.31(a)(6)）とaudit/evaluation exception（§99.35）で同意なし開示を認めるが、教育機関のための研究に限定される。"
  },
  {
   "axis": "stat",
   "jur": "kr",
   "status": "explicit",
   "refs": [
    "kr-pipa-28-2"
   ],
   "summary": "28条の2第1項が「統計作成、科学的研究、公益的記録保存等」のために本人同意なしの仮名情報処理を認める。",
   "verified": false
  },
  {
   "axis": "exit",
   "jur": "jp",
   "status": "absent",
   "refs": [
    "jp-appi-19"
   ],
   "summary": "成果物を特定個人への措置・決定に用いることを禁じる規定がない。19条の不適正利用禁止は「違法又は不当な行為を助長・誘発するおそれ」を要し、ハードルが高い。"
  },
  {
   "axis": "exit",
   "jur": "eu",
   "status": "explicit",
   "refs": [
    "eu-gdpr-r162",
    "eu-ehds-54"
   ],
   "summary": "GDPR前文162が統計処理の結果を特定個人に関する措置・決定に用いないとし、EHDS 54条が禁止目的を条文として列挙する。"
  },
  {
   "axis": "exit",
   "jur": "uk",
   "status": "explicit",
   "refs": [
    "uk-gdpr-84c"
   ],
   "summary": "UK GDPR 84C条3項は、承認された医学研究を除き、特定のデータ主体に関する措置・決定を目的とする処理は保障措置に適合しないとする。"
  },
  {
   "axis": "exit",
   "jur": "us",
   "status": "partial",
   "refs": [
    "us-ferpa-studies"
   ],
   "summary": "明示の出口規制はないが、studies exceptionの目的限定（予測テストの開発・検証、学生援助の実施、指導の改善）とデータ破棄義務が機能的に近い。"
  },
  {
   "axis": "exit",
   "jur": "kr",
   "status": "partial",
   "refs": [
    "kr-pipa-28-5"
   ],
   "summary": "28条の5第1項は「特定の個人を識別する目的」での仮名情報処理を禁じるが、識別せずに個別決定に用いる場合は捉えない。",
   "verified": false
  },
  {
   "axis": "auto",
   "jur": "jp",
   "status": "absent",
   "refs": [
    "jp-appi-19"
   ],
   "summary": "GDPR22条に相当する一般規定がない。令和8年改正でも導入されていない。AI推進法にも本人の権利規定はない。"
  },
  {
   "axis": "auto",
   "jur": "eu",
   "status": "explicit",
   "refs": [
    "eu-gdpr-22",
    "eu-aiact-annex3"
   ],
   "summary": "GDPR22条1項が専ら自動処理に基づく決定に服しない権利を定め、AI法附属書III第3項が教育・職業訓練の用途を高リスクに分類する。"
  },
  {
   "axis": "auto",
   "jur": "uk",
   "status": "partial",
   "refs": [],
   "summary": "DPA 2018が自動化決定の規律を置くが、DUAA 2025が要件を緩和する方向で改正した。",
   "verified": false
  },
  {
   "axis": "auto",
   "jur": "us",
   "status": "absent",
   "refs": [],
   "summary": "連邦法に一般規定がない。州法（採用面接のAI利用規制等）とセクター規制に分散している。",
   "verified": false
  },
  {
   "axis": "auto",
   "jur": "kr",
   "status": "explicit",
   "refs": [
    "kr-pipa-37-2",
    "kr-ai-high"
   ],
   "summary": "2023年改正PIPA 37条の2が自動化決定に対する拒否・説明要求権を創設。AI基本法は教育分野を高影響AIに含める。",
   "verified": false
  },
  {
   "axis": "deleg",
   "jur": "jp",
   "status": "explicit",
   "refs": [
    "jp-appi-2-13",
    "jp-appi-26-1",
    "jp-rule-7"
   ],
   "summary": "2条13項と26条1項はまったく同じ文型で委員会規則に委任するが、26条1項には施行規則7条という具体化があり、2条13項には対応物がない。"
  },
  {
   "axis": "deleg",
   "jur": "eu",
   "status": "explicit",
   "refs": [],
   "summary": "委任法令・実施法令の制度が条約上整備され、委任の範囲・期間・撤回が各規則に明記される。",
   "verified": false
  },
  {
   "axis": "deleg",
   "jur": "uk",
   "status": "explicit",
   "refs": [
    "uk-duaa-86"
   ],
   "summary": "DUAA 2025は国務大臣への規則制定権を広く置きつつ、84C条のように実質要件を本文に書き込む形をとる。",
   "verified": false
  },
  {
   "axis": "deleg",
   "jur": "us",
   "status": "partial",
   "refs": [
    "us-ferpa-def"
   ],
   "summary": "FERPAの実質は34 C.F.R. Part 99に委ねられている。行政解釈への司法の敬譲は2024年の判例変更で後退した。",
   "verified": false
  },
  {
   "axis": "deleg",
   "jur": "kr",
   "status": "todo",
   "refs": [],
   "summary": ""
  },
  {
   "axis": "eddata",
   "jur": "jp",
   "status": "absent",
   "refs": [
    "jp-std",
    "jp-policy-1"
   ],
   "summary": "個情法に教育データの定義はない。文部科学省「教育データ標準」5.0版は行政文書であり法的定義ではない。"
  },
  {
   "axis": "eddata",
   "jur": "eu",
   "status": "absent",
   "refs": [
    "eu-aiact-annex3"
   ],
   "summary": "GDPRに教育データの定義はない。AI法附属書III第3項が教育の場面を列挙するにとどまる。"
  },
  {
   "axis": "eddata",
   "jur": "uk",
   "status": "absent",
   "refs": [],
   "summary": "教育データの法律上の定義はない。"
  },
  {
   "axis": "eddata",
   "jur": "us",
   "status": "explicit",
   "refs": [
    "us-ferpa-def",
    "us-ferpa-dir"
   ],
   "summary": "20 U.S.C. §1232g(a)(4)(A)が「education records」を、学生に直接関係し教育機関が保持する記録として定義する。directory informationの別枠もある。"
  },
  {
   "axis": "eddata",
   "jur": "kr",
   "status": "absent",
   "refs": [],
   "summary": "PIPAに教育データの定義はない。",
   "verified": false
  },
  {
   "axis": "reident",
   "jur": "jp",
   "status": "explicit",
   "refs": [
    "jp-appi-41-7",
    "jp-mirai-42"
   ],
   "summary": "仮名加工情報・匿名加工情報について識別行為の禁止が置かれ、次世代医療基盤法も利用者に照合禁止を課す。"
  },
  {
   "axis": "reident",
   "jur": "eu",
   "status": "partial",
   "refs": [
    "eu-gdpr-89",
    "eu-gdpr-11"
   ],
   "summary": "89条1項が仮名化等の保障措置を要求するが、再識別行為自体を禁じる明文はない。"
  },
  {
   "axis": "reident",
   "jur": "uk",
   "status": "explicit",
   "refs": [
    "uk-dpa-171"
   ],
   "summary": "DPA 2018 s.171が、匿名化された個人データの再識別を刑事犯罪として禁じる。"
  },
  {
   "axis": "reident",
   "jur": "us",
   "status": "partial",
   "refs": [
    "us-ferpa-deid"
   ],
   "summary": "34 C.F.R. §99.31(b)が非識別化記録の開示条件を定め、再識別が合理的に可能でないことを求める。"
  },
  {
   "axis": "reident",
   "jur": "kr",
   "status": "explicit",
   "refs": [
    "kr-pipa-28-5"
   ],
   "summary": "28条の5第1項が「何人も」特定個人を識別する目的で仮名情報を処理してはならないとし、第2項が識別情報発生時の処理中止・回収・破棄を義務づける。",
   "verified": false
  },
  {
   "axis": "erase",
   "jur": "jp",
   "status": "partial",
   "refs": [
    "jp-appi-35"
   ],
   "summary": "35条の利用停止等請求は保有個人データを対象とし、学習済みモデルに反映された影響には届かない。"
  },
  {
   "axis": "erase",
   "jur": "eu",
   "status": "partial",
   "refs": [
    "eu-gdpr-17"
   ],
   "summary": "17条の消去権は個人データを対象とする。学習済みモデルへの反映の扱いは解釈に委ねられ、確立した準則はない。",
   "verified": false
  },
  {
   "axis": "erase",
   "jur": "uk",
   "status": "partial",
   "refs": [],
   "summary": "UK GDPR 17条を継承。モデルへの反映の扱いは同様に未確立。",
   "verified": false
  },
  {
   "axis": "erase",
   "jur": "us",
   "status": "absent",
   "refs": [],
   "summary": "FERPAは記録の訂正請求（§1232g(a)(2)）を置くが、削除請求権はない。モデルへの反映の規律もない。",
   "verified": false
  },
  {
   "axis": "erase",
   "jur": "kr",
   "status": "partial",
   "refs": [
    "kr-pipa-28-7"
   ],
   "summary": "28条の7が仮名情報について閲覧・訂正・削除・処理停止等の権利規定の適用を除外する。",
   "verified": false
  },
  {
   "axis": "enforce",
   "jur": "jp",
   "status": "partial",
   "refs": [
    "jp-appi-146",
    "jp-appi-148",
    "jp-appi-149"
   ],
   "summary": "146〜148条が報告徴収・立入検査・指導助言・勧告・命令を置き、149条1項が学問の自由等への配慮を要求する。課徴金は非営利の教育機関に働きにくい。"
  },
  {
   "axis": "enforce",
   "jur": "eu",
   "status": "explicit",
   "refs": [
    "eu-gdpr-83"
   ],
   "summary": "58条が監督機関の権限を、83条が行政制裁金（最大2000万ユーロ又は全世界年間売上高の4%）を定める。"
  },
  {
   "axis": "enforce",
   "jur": "uk",
   "status": "explicit",
   "refs": [],
   "summary": "DPA 2018 Part 6に基づきICOが執行する。制裁金の上限はUK GDPRが定める。",
   "verified": false
  },
  {
   "axis": "enforce",
   "jur": "us",
   "status": "partial",
   "refs": [
    "us-ferpa-enf"
   ],
   "summary": "執行手段は連邦資金の停止（20 U.S.C. §1232g(f)）であり、Gonzaga University v. Doe, 536 U.S. 273 (2002)は本人の私訴権を否定した。"
  },
  {
   "axis": "enforce",
   "jur": "kr",
   "status": "explicit",
   "refs": [
    "kr-pipa-fine"
   ],
   "summary": "2023年改正により課徴金の算定基礎が全体売上高（上限3%）に拡大された。",
   "verified": false
  },
  {
   "axis": "infra",
   "jur": "jp",
   "status": "absent",
   "refs": [
    "jp-policy-1",
    "jp-policy-2",
    "jp-std"
   ],
   "summary": "教育データの共用基盤を規律する法律がない。教育DXロードマップは技術的相互運用性までで止まり、「国は個人の教育データを一元的に管理せず」と明記する。"
  },
  {
   "axis": "infra",
   "jur": "eu",
   "status": "partial",
   "refs": [
    "eu-dga-12",
    "eu-dataact",
    "eu-ehds-53"
   ],
   "summary": "基盤法（データガバナンス法・データ法）と分野別データスペース法（EHDS、金融、モビリティ）の二層構造をとるが、教育・スキル分野には法律がない。"
  },
  {
   "axis": "infra",
   "jur": "uk",
   "status": "absent",
   "refs": [
    "uk-duaa-86"
   ],
   "summary": "DUAA 2025はスマートデータ制度等を置くが、教育分野のデータ共用基盤法はない。",
   "verified": false
  },
  {
   "axis": "infra",
   "jur": "us",
   "status": "absent",
   "refs": [],
   "summary": "連邦レベルの教育データ基盤法はない。州縦断的データシステムは補助金プログラムとして運用される。",
   "verified": false
  },
  {
   "axis": "infra",
   "jur": "kr",
   "status": "partial",
   "refs": [
    "kr-pipa-28-3"
   ],
   "summary": "28条の3が異なる管理者間の仮名情報の結合を、保護委員会等の指定する結合専門機関に限定する。",
   "verified": false
  },
  {
   "axis": "minor",
   "jur": "jp",
   "status": "absent",
   "refs": [],
   "summary": "個情法に未成年に固有の規定はない。ガイドラインが法定代理人の同意に言及するにとどまる。"
  },
  {
   "axis": "minor",
   "jur": "eu",
   "status": "explicit",
   "refs": [
    "eu-gdpr-8"
   ],
   "summary": "8条が情報社会サービスについて16歳未満（加盟国は13歳まで引下げ可）の子どもの同意に親権者の承諾を要求する。"
  },
  {
   "axis": "minor",
   "jur": "uk",
   "status": "explicit",
   "refs": [],
   "summary": "UK GDPR 8条で13歳。年齢適切設計規範（Age Appropriate Design Code）がある。",
   "verified": false
  },
  {
   "axis": "minor",
   "jur": "us",
   "status": "explicit",
   "refs": [
    "us-coppa-consent",
    "us-ferpa-def"
   ],
   "summary": "COPPAが13歳未満について検証可能な親の同意を要求。FERPAでは権利が18歳又は高等教育機関在学で学生本人に移る。"
  },
  {
   "axis": "minor",
   "jur": "kr",
   "status": "explicit",
   "refs": [],
   "summary": "PIPAが14歳未満について法定代理人の同意を要求する。",
   "verified": false
  }
 ],
 "provisions": [
  {
   "id": "jp-appi-1",
   "inst": "jp-appi",
   "cite": "1条",
   "title": "目的",
   "axes": [
    "purpose"
   ],
   "status": "explicit",
   "verified": true,
   "text": "この法律は、…個人情報の適正かつ効果的な活用が新たな産業の創出並びに活力ある経済社会及び豊かな国民生活の実現に資するものであることその他の個人情報の有用性に配慮しつつ、個人の権利利益を保護することを目的とする。"
  },
  {
   "id": "jp-appi-3",
   "inst": "jp-appi",
   "cite": "3条",
   "title": "基本理念",
   "axes": [
    "purpose"
   ],
   "status": "explicit",
   "verified": true,
   "text": "個人情報は、個人の人格尊重の理念の下に慎重に取り扱われるべきものであることに鑑み、その適正な取扱いが図られなければならない。"
  },
  {
   "id": "jp-appi-2-13",
   "inst": "jp-appi",
   "cite": "2条13項",
   "title": "統計作成等",
   "axes": [
    "stat",
    "deleg"
   ],
   "status": "explicit",
   "verified": false,
   "text": "（令和8年改正により新設）…個人の権利利益を害するおそれが少ないものとして個人情報保護委員会規則で定めるもの"
  },
  {
   "id": "jp-appi-18-3",
   "inst": "jp-appi",
   "cite": "18条3項5号・6号",
   "title": "利用目的による制限の例外",
   "axes": [
    "stat"
   ],
   "status": "explicit",
   "verified": false,
   "text": "（学術研究機関等が学術研究目的で取り扱う必要がある場合等。「個人の権利利益を不当に侵害するおそれがある場合を除く」）"
  },
  {
   "id": "jp-appi-19",
   "inst": "jp-appi",
   "cite": "19条",
   "title": "不適正な利用の禁止",
   "axes": [
    "exit",
    "auto"
   ],
   "status": "partial",
   "verified": true,
   "text": "個人情報取扱事業者は、違法又は不当な行為を助長し、又は誘発するおそれがある方法により個人情報を利用してはならない。"
  },
  {
   "id": "jp-appi-26-1",
   "inst": "jp-appi",
   "cite": "26条1項",
   "title": "漏えい等の報告",
   "axes": [
    "deleg"
   ],
   "status": "explicit",
   "verified": true,
   "text": "個人情報取扱事業者は、その取り扱う個人データの漏えい…その他の個人データの安全の確保に係る事態であって個人の権利利益を害するおそれが大きいものとして個人情報保護委員会規則で定めるものが生じたときは、…個人情報保護委員会に報告しなければならない。"
  },
  {
   "id": "jp-appi-35",
   "inst": "jp-appi",
   "cite": "35条",
   "title": "利用停止等",
   "axes": [
    "erase"
   ],
   "status": "partial",
   "verified": false,
   "text": "本人は、個人情報取扱事業者に対し、当該本人が識別される保有個人データの利用の停止又は消去を請求することができる（一定の要件の下）。"
  },
  {
   "id": "jp-appi-41-7",
   "inst": "jp-appi",
   "cite": "41条7項",
   "title": "仮名加工情報の識別行為の禁止",
   "axes": [
    "reident"
   ],
   "status": "explicit",
   "verified": false,
   "text": "個人情報取扱事業者は、仮名加工情報を取り扱うに当たっては、…削除情報等を取得し、又は当該個人情報を他の情報と照合してはならない。"
  },
  {
   "id": "jp-appi-59",
   "inst": "jp-appi",
   "cite": "59条",
   "title": "学術研究機関等の責務",
   "axes": [
    "enforce"
   ],
   "status": "partial",
   "verified": true,
   "text": "個人情報取扱事業者である学術研究機関等は、学術研究目的で行う個人情報の取扱いについて、…必要な措置を自ら講じ、かつ、当該措置の内容を公表するよう努めなければならない。"
  },
  {
   "id": "jp-appi-146",
   "inst": "jp-appi",
   "cite": "146条",
   "title": "報告及び立入検査",
   "axes": [
    "enforce"
   ],
   "status": "explicit",
   "verified": true,
   "text": "個人情報保護委員会は、…必要な報告若しくは資料の提出を求め、又はその職員に、…立ち入らせ、質問させ、若しくは帳簿書類その他の物件を検査させることができる。"
  },
  {
   "id": "jp-appi-148",
   "inst": "jp-appi",
   "cite": "148条",
   "title": "勧告及び命令",
   "axes": [
    "enforce"
   ],
   "status": "explicit",
   "verified": true,
   "text": "1項 勧告／2項 切迫時の命令／3項 緊急命令"
  },
  {
   "id": "jp-appi-149",
   "inst": "jp-appi",
   "cite": "149条1項",
   "title": "適用上の配慮",
   "axes": [
    "enforce"
   ],
   "status": "explicit",
   "verified": true,
   "text": "個人情報保護委員会は、前三条の規定の適用に当たっては、表現の自由、学問の自由、信教の自由及び政治活動の自由を妨げてはならない。"
  },
  {
   "id": "jp-rule-7",
   "inst": "jp-rule",
   "cite": "7条",
   "title": "報告対象事態",
   "axes": [
    "deleg"
   ],
   "status": "explicit",
   "verified": true,
   "text": "1号 要配慮個人情報を含む個人データの漏えい等／2号 財産的被害が生ずるおそれ／3号 不正の目的によるおそれ／4号 本人の数が千人を超える漏えい等。※1号括弧書の「高度な暗号化その他の措置を講じたものを除く」は各号に共通。"
  },
  {
   "id": "jp-ai-3",
   "inst": "jp-ai",
   "cite": "3条",
   "title": "基本理念",
   "axes": [
    "auto",
    "purpose"
   ],
   "status": "partial",
   "verified": true,
   "text": "国際協調、総合的な推進、関係者の連携のほか、4項が不正・不適切な利用による権利侵害の防止のため過程の透明性確保等の施策を求める。"
  },
  {
   "id": "jp-ai-13",
   "inst": "jp-ai",
   "cite": "13条",
   "title": "適正性の確保",
   "axes": [
    "auto"
   ],
   "status": "partial",
   "verified": true,
   "text": "国は、人工知能関連技術の適正な実施のため、国際的な規範の趣旨に沿った指針の整備等の施策を講ずる。"
  },
  {
   "id": "jp-ai-16",
   "inst": "jp-ai",
   "cite": "16条",
   "title": "調査研究等",
   "axes": [
    "auto",
    "enforce"
   ],
   "status": "partial",
   "verified": true,
   "text": "国は、不正・不適切な利用により権利利益の侵害が生じた事案を分析して対策を検討し、関係者への指導・助言を行う。"
  },
  {
   "id": "jp-mirai-42",
   "inst": "jp-mirai",
   "cite": "42条",
   "title": "仮名加工医療情報の利用目的の制限・照合禁止",
   "axes": [
    "reident",
    "exit"
   ],
   "status": "explicit",
   "verified": true,
   "text": "1項 利用目的による制限／2項・3項 照合の禁止等。43条が第三者提供を制限する。"
  },
  {
   "id": "jp-mirai-57",
   "inst": "jp-mirai",
   "cite": "57条1項",
   "title": "認定事業者への提供（オプトアウト）",
   "axes": [
    "stat"
   ],
   "status": "explicit",
   "verified": false,
   "text": "医療情報取扱事業者は、本人又は遺族の求めがない場合、あらかじめ本人の同意を得ずに認定事業者へ医療情報を提供できる。"
  },
  {
   "id": "jp-policy-1",
   "inst": "jp-policy",
   "cite": "（基盤構想）",
   "title": "分散管理と相互運用性",
   "axes": [
    "infra",
    "eddata"
   ],
   "status": "partial",
   "verified": true,
   "text": "教育データは自治体による分散管理を前提とし、相互運用標準モデル等で相互運用性を確保する。「国は個人の教育データを一元的に管理せず」と明記。"
  },
  {
   "id": "jp-policy-2",
   "inst": "jp-policy",
   "cite": "（制度整備）",
   "title": "ルール整備の到達点",
   "axes": [
    "infra",
    "enforce"
   ],
   "status": "partial",
   "verified": true,
   "text": "「教育データの利活用に係る留意事項」の策定・改訂、教育情報セキュリティポリシーの全自治体作成（令和7年度中）。公教育データ・プラットフォームは研究目的の匿名化データ利用の枠組みとして位置づけられる。"
  },
  {
   "id": "jp-std",
   "inst": "jp-std",
   "cite": "5.0版",
   "title": "教育データ標準",
   "axes": [
    "eddata"
   ],
   "status": "partial",
   "verified": true,
   "text": "主体情報・内容情報・活動情報の区分。相互運用標準モデル Ver.5.00。OneRoster・LTI・xAPI等の標準規格に言及。"
  },
  {
   "id": "eu-gdpr-1",
   "inst": "eu-gdpr",
   "cite": "1条",
   "title": "対象事項及び目的",
   "axes": [
    "purpose"
   ],
   "status": "explicit",
   "verified": false,
   "text": "2項 本規則は、自然人の基本的な権利及び自由、特に個人データの保護についての権利を保護する。／3項 個人データの自由な流通は、制限されてはならない。"
  },
  {
   "id": "eu-gdpr-5-1b",
   "inst": "eu-gdpr",
   "cite": "5条1項(b)",
   "title": "目的の限定",
   "axes": [
    "stat"
   ],
   "status": "explicit",
   "verified": false,
   "text": "個人データは、特定され、明示的で、正当な目的のために収集されなければならず、…公共の利益における記録保存目的、科学的研究目的若しくは歴史的研究目的又は統計目的のための追加的な処理は、89条1項に従う限り、当初の目的と相容れないものとはみなされない。"
  },
  {
   "id": "eu-gdpr-8",
   "inst": "eu-gdpr",
   "cite": "8条",
   "title": "子どもの同意に適用される条件",
   "axes": [
    "minor"
   ],
   "status": "explicit",
   "verified": false,
   "text": "情報社会サービスの提供に関し、子どもが16歳未満の場合、親権者等による承諾がある場合に限り適法である。加盟国は13歳まで引下げ可。"
  },
  {
   "id": "eu-gdpr-11",
   "inst": "eu-gdpr",
   "cite": "11条",
   "title": "本人の識別を要しない処理",
   "axes": [
    "reident"
   ],
   "status": "partial",
   "verified": false,
   "text": "管理者が本人を識別できない場合、15条から20条までは適用されない。"
  },
  {
   "id": "eu-gdpr-17",
   "inst": "eu-gdpr",
   "cite": "17条",
   "title": "消去権",
   "axes": [
    "erase"
   ],
   "status": "partial",
   "verified": false,
   "text": "本人は、自己に関する個人データの消去を求める権利を有する（一定の事由がある場合）。"
  },
  {
   "id": "eu-gdpr-22",
   "inst": "eu-gdpr",
   "cite": "22条1項",
   "title": "自動化された個別の意思決定",
   "axes": [
    "auto"
   ],
   "status": "explicit",
   "verified": false,
   "text": "本人は、プロファイリングを含む専ら自動化された処理に基づき、自己に対する法的効果を生じさせる、又は自己に重大な影響を及ぼす決定に服しない権利を有する。"
  },
  {
   "id": "eu-gdpr-83",
   "inst": "eu-gdpr",
   "cite": "83条5項",
   "title": "行政制裁金",
   "axes": [
    "enforce"
   ],
   "status": "explicit",
   "verified": false,
   "text": "2000万ユーロ以下、又は、企業の場合は前会計年度の全世界年間売上高の4%以下のいずれか高い額。"
  },
  {
   "id": "eu-gdpr-89",
   "inst": "eu-gdpr",
   "cite": "89条1項",
   "title": "研究・統計目的の処理に関する保障措置",
   "axes": [
    "stat",
    "reident"
   ],
   "status": "explicit",
   "verified": false,
   "text": "…処理は、本人の権利及び自由のための適切な保障措置に服さなければならない。当該措置は、データ最小化原則の尊重を確保するものでなければならず、仮名化を含む。"
  },
  {
   "id": "eu-gdpr-r162",
   "inst": "eu-gdpr",
   "cite": "前文162",
   "title": "統計目的の意味",
   "axes": [
    "exit"
   ],
   "status": "partial",
   "verified": false,
   "text": "統計目的とは、処理の結果が個人データではなく集計データであること、及び、この結果又は個人データが特定の自然人に関する措置又は決定を支持するために用いられないことを意味する。"
  },
  {
   "id": "eu-aiact-annex3",
   "inst": "eu-aiact",
   "cite": "附属書III 3項",
   "title": "教育及び職業訓練（高リスク）",
   "axes": [
    "auto",
    "eddata"
   ],
   "status": "explicit",
   "verified": false,
   "text": "(a) 入学の許可又は配置、(b) 学習成果の評価、(c) 適切な教育水準の判定、(d) 試験中の禁止された行動の監視・検知。"
  },
  {
   "id": "eu-ehds-53",
   "inst": "eu-ehds",
   "cite": "53条",
   "title": "二次利用の許容目的",
   "axes": [
    "stat",
    "infra"
   ],
   "status": "explicit",
   "verified": true,
   "text": "1項 (a) 公衆衛生・労働衛生の公益、(b) 公的機関等による政策立案・規制業務、(c) 健康・ケアに関する統計、(d) 保健医療分野の職業教育・高等教育、(e) 科学的研究（アルゴリズム・AIシステムの学習を含む）、(f) 他人の健康データに基づくケアの提供・治療の最適化。／2項 (a)(b)(c)は公的機関等に限る。"
  },
  {
   "id": "eu-ehds-54",
   "inst": "eu-ehds",
   "cite": "54条",
   "title": "禁止される二次利用",
   "axes": [
    "exit"
   ],
   "status": "explicit",
   "verified": true,
   "text": "(a) 健康データに基づき個人・集団に不利益な決定を行うこと（法的・社会的・経済的効果その他重大な影響を伴うもの）、(b) 求人の提供、より不利な財・サービス・保険・与信の条件の提示、その他の差別、(c) 広告又はマーケティング、(d) 個人・公衆衛生・社会に害を及ぼしうる製品・サービスの開発、(e) 国内法の倫理規定に反する活動。"
  },
  {
   "id": "eu-dga-12",
   "inst": "eu-dga",
   "cite": "12条",
   "title": "データ仲介サービスの提供条件",
   "axes": [
    "infra"
   ],
   "status": "explicit",
   "verified": true,
   "text": "(a) 仲介により取得したデータを自己の目的のために用いてはならず、仲介サービスは別法人により提供しなければならない。(b) 料金その他の商業的条件は、提供者・利用者が自己の他のサービスを利用するか否か及びその程度に左右されてはならない。(c) 取得した活動データはサービスの改善（不正防止・セキュリティを含む）にのみ用いる。"
  },
  {
   "id": "eu-dataact",
   "inst": "eu-dataact",
   "cite": "（全体）",
   "title": "データ法の構成",
   "axes": [
    "infra"
   ],
   "status": "explicit",
   "verified": true,
   "text": "2章 IoTデータへの利用者アクセスと第三者共有／3章 データ利用可能化義務者への補償／4章 不公正なB2B契約条項／5章 公共の緊急事態等における公的機関のアクセス／6-7章 クラウドのスイッチングと国際転送／8-11章 相互運用性・執行等。"
  },
  {
   "id": "uk-gdpr-84c",
   "inst": "uk-gdpr",
   "cite": "84C条",
   "title": "研究・記録保存・統計目的の保障措置",
   "axes": [
    "stat",
    "exit"
   ],
   "status": "explicit",
   "verified": true,
   "text": "3項 承認された医学研究を除き、特定のデータ主体に関する措置又は決定を目的とする処理は、本条の保障措置に適合しない。"
  },
  {
   "id": "uk-dpa-171",
   "inst": "uk-dpa",
   "cite": "s.171",
   "title": "再識別の罪",
   "axes": [
    "reident"
   ],
   "status": "explicit",
   "verified": false,
   "text": "匿名化された個人データを、データ管理者の同意なく再識別することは犯罪である。"
  },
  {
   "id": "uk-duaa-86",
   "inst": "uk-duaa",
   "cite": "s.86",
   "title": "研究目的の処理に関する改正",
   "axes": [
    "deleg",
    "infra"
   ],
   "status": "explicit",
   "verified": true,
   "text": "UK GDPRに84A〜84C条を挿入し、DPA 2018 s.19を削除する。"
  },
  {
   "id": "us-ferpa-def",
   "inst": "us-ferpa",
   "cite": "20 U.S.C. §1232g(a)(4)(A)",
   "title": "education records の定義",
   "axes": [
    "eddata",
    "deleg",
    "minor"
   ],
   "status": "explicit",
   "verified": false,
   "text": "\"education records\" とは、(i) 学生に直接関係する情報を含み、かつ (ii) 教育機関又はそのために行為する者が保持する記録、ファイル、文書その他の資料をいう。"
  },
  {
   "id": "us-ferpa-dir",
   "inst": "us-ferpa",
   "cite": "20 U.S.C. §1232g(a)(5)",
   "title": "directory information",
   "axes": [
    "eddata"
   ],
   "status": "explicit",
   "verified": false,
   "text": "氏名、住所、電話番号、生年月日、在籍課程等は、事前の通知とオプトアウトの機会を与えれば開示できる。"
  },
  {
   "id": "us-ferpa-studies",
   "inst": "us-ferpa",
   "cite": "34 C.F.R. §99.31(a)(6)",
   "title": "studies exception",
   "axes": [
    "stat",
    "exit"
   ],
   "status": "partial",
   "verified": false,
   "text": "教育機関のため又はその代わりに、予測テストの開発・検証・実施、学生援助プログラムの運営、又は指導の改善を目的とする研究を行う組織に対し、同意なく開示できる。研究終了後の情報破棄等が条件。"
  },
  {
   "id": "us-ferpa-audit",
   "inst": "us-ferpa",
   "cite": "34 C.F.R. §99.35",
   "title": "audit / evaluation exception",
   "axes": [
    "stat"
   ],
   "status": "partial",
   "verified": false,
   "text": "教育プログラムの監査・評価、又は連邦・州の法令遵守の執行のために、権限ある代表者へ開示できる。"
  },
  {
   "id": "us-ferpa-deid",
   "inst": "us-ferpa",
   "cite": "34 C.F.R. §99.31(b)",
   "title": "非識別化記録の開示",
   "axes": [
    "reident"
   ],
   "status": "partial",
   "verified": false,
   "text": "学生の身元が合理的に判明しないよう、すべての個人識別情報を除去した記録は、同意なく開示できる。"
  },
  {
   "id": "us-ferpa-enf",
   "inst": "us-ferpa",
   "cite": "20 U.S.C. §1232g(f)",
   "title": "執行",
   "axes": [
    "enforce",
    "purpose"
   ],
   "status": "partial",
   "verified": false,
   "text": "長官は本条の遵守を確保するため適切な措置をとる（連邦資金の停止を含む）。"
  },
  {
   "id": "us-coppa-consent",
   "inst": "us-coppa",
   "cite": "15 U.S.C. §6502",
   "title": "検証可能な親の同意",
   "axes": [
    "minor"
   ],
   "status": "explicit",
   "verified": false,
   "text": "13歳未満の子どもから個人情報を収集する運営者は、検証可能な親の同意を得なければならない。"
  },
  {
   "id": "kr-pipa-1",
   "inst": "kr-pipa",
   "cite": "1条",
   "title": "目的",
   "axes": [
    "purpose"
   ],
   "status": "explicit",
   "verified": false,
   "text": "この法律は、個人情報の処理及び保護に関する事項を定めることにより、個人の自由と権利を保護し、さらに個人の尊厳と価値を具現することを目的とする。"
  },
  {
   "id": "kr-pipa-28-2",
   "inst": "kr-pipa",
   "cite": "28条の2",
   "title": "仮名情報の処理等",
   "axes": [
    "stat"
   ],
   "status": "explicit",
   "verified": false,
   "text": "1項 個人情報処理者は、統計作成、科学的研究、公益的記録保存等のために、本人の同意なく仮名情報を処理することができる。／2項 第三者に提供する場合、特定の個人を識別するために用いられうる情報を含めてはならない。"
  },
  {
   "id": "kr-pipa-28-3",
   "inst": "kr-pipa",
   "cite": "28条の3",
   "title": "仮名情報の結合制限",
   "axes": [
    "infra"
   ],
   "status": "explicit",
   "verified": false,
   "text": "異なる個人情報処理者間の仮名情報の結合は、保護委員会又は関係中央行政機関の長が指定する専門機関が行う。"
  },
  {
   "id": "kr-pipa-28-5",
   "inst": "kr-pipa",
   "cite": "28条の5",
   "title": "仮名情報処理時の禁止義務等",
   "axes": [
    "reident",
    "exit"
   ],
   "status": "explicit",
   "verified": false,
   "text": "1項 何人も、特定の個人を識別する目的で仮名情報を処理してはならない。／2項 処理の過程で特定の個人を識別できる情報が生成された場合、直ちに処理を中止し、回収・破棄しなければならない。"
  },
  {
   "id": "kr-pipa-28-7",
   "inst": "kr-pipa",
   "cite": "28条の7",
   "title": "適用範囲",
   "axes": [
    "erase"
   ],
   "status": "explicit",
   "verified": false,
   "text": "仮名情報には、閲覧・訂正・削除・処理停止等の権利に関する規定を適用しない。"
  },
  {
   "id": "kr-pipa-37-2",
   "inst": "kr-pipa",
   "cite": "37条の2",
   "title": "自動化された決定に対する権利",
   "axes": [
    "auto"
   ],
   "status": "explicit",
   "verified": false,
   "text": "（2023年改正）本人は、専ら自動化されたシステムによる決定が自己の権利義務に重大な影響を及ぼす場合、当該決定を拒否し、又は説明を求めることができる。"
  },
  {
   "id": "kr-pipa-fine",
   "inst": "kr-pipa",
   "cite": "（課徴金）",
   "title": "課徴金の算定基礎",
   "axes": [
    "enforce"
   ],
   "status": "explicit",
   "verified": false,
   "text": "2023年改正により、算定基礎が関連売上高から全体売上高（上限3%）に拡大された。"
  },
  {
   "id": "kr-ai-high",
   "inst": "kr-ai",
   "cite": "（高影響AI）",
   "title": "高影響AIの範囲",
   "axes": [
    "auto"
   ],
   "status": "explicit",
   "verified": false,
   "text": "教育分野を含む領域で用いられ、人の生命・身体の安全及び基本的権利に重大な影響を及ぼすおそれのあるAIを「高影響AI」とし、事業者に義務を課す。"
  }
 ]
};
