/* ------------------------------------------------------------------
   教育データ情報法データベース ── データ本体（公開版）

   tools/build-public.js がフル版から自動生成したファイルです。
   直接編集しないでください。フル版を直してから生成し直してください。
   ------------------------------------------------------------------ */

window.DB = {
 "meta": {
  "title": "教育データ情報法データベース",
  "subtitle": "大学の教育データのAI利活用における情報法的考察 ── 比較法データベース",
  "updated": "2026-11-27",
  "note": "条文はすべて抜粋。引用に用いる際は必ず一次資料で確認すること。「要検証」タグの付いた項目は未確認。作成途中の資料であり、内容の正確性は保証しない。"
 },
 "sources": [
  {
   "jur": "jp",
   "name": "e-Gov法令検索",
   "url": "https://laws.e-gov.go.jp/",
   "note": "日本の法令の公式本文"
  },
  {
   "jur": "jp",
   "name": "日本法令外国語訳DB",
   "url": "https://www.japaneselawtranslation.go.jp/",
   "note": "法務省。和英対訳"
  },
  {
   "jur": "jp",
   "name": "個人情報保護委員会",
   "url": "https://www.ppc.go.jp/",
   "note": "規則・ガイドライン・QA"
  },
  {
   "jur": "eu",
   "name": "EUR-Lex",
   "url": "https://eur-lex.europa.eu/",
   "note": "EU法の公式官報"
  },
  {
   "jur": "eu",
   "name": "AI法サービスデスク",
   "url": "https://ai-act-service-desk.ec.europa.eu/",
   "note": "欧州委員会。AI法の条文と解説"
  },
  {
   "jur": "uk",
   "name": "legislation.gov.uk",
   "url": "https://www.legislation.gov.uk/",
   "note": "英国法。UK GDPRの条文も"
  },
  {
   "jur": "us",
   "name": "Cornell LII（U.S. Code）",
   "url": "https://www.law.cornell.edu/uscode/text",
   "note": "連邦制定法"
  },
  {
   "jur": "us",
   "name": "eCFR",
   "url": "https://www.ecfr.gov/",
   "note": "連邦規則集の現行版"
  },
  {
   "jur": "us",
   "name": "Student Privacy（ED）",
   "url": "https://studentprivacy.ed.gov/",
   "note": "FERPAの所管省庁の解説"
  },
  {
   "jur": "kr",
   "name": "국가법령정보센터",
   "url": "https://www.law.go.kr/",
   "note": "韓国法令の公式本文"
  },
  {
   "jur": "kr",
   "name": "KLRI 英訳",
   "url": "https://elaw.klri.re.kr/eng_service/main.do",
   "note": "韓国法制研究院の英訳"
  },
  {
   "jur": "jp",
   "name": "データ利活用制度・システム検討会",
   "url": "https://www.cas.go.jp/jp/seisaku/digital_gyozaikaikaku/",
   "note": "内閣官房。データ利活用法制の検討"
  },
  {
   "jur": "jp",
   "name": "公益デジタルPF認定制度",
   "url": "https://www.ipa.go.jp/digital/dx/dpf-nintei.html",
   "note": "IPA。日本版データ仲介者の認定"
  },
  {
   "jur": "jp",
   "name": "文部科学省 教育データ標準",
   "url": "https://www.mext.go.jp/a_menu/other/data_00001.htm",
   "note": "教育データの標準仕様"
  }
 ],
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
   "full": "個人情報の保護に関する法律（平成15年法律第57号／令和8年法律第56号による改正後）",
   "src": "https://laws.e-gov.go.jp/law/415AC0000000057"
  },
  {
   "id": "jp-rule",
   "jur": "jp",
   "kind": "規則",
   "name": "個情法施行規則",
   "full": "個人情報の保護に関する法律施行規則",
   "src": "https://www.ppc.go.jp/personalinfo/legal/"
  },
  {
   "id": "jp-ai",
   "jur": "jp",
   "kind": "法律",
   "name": "AI推進法",
   "full": "人工知能関連技術の研究開発及び活用の推進に関する法律（令和7年法律第53号・全28条）",
   "src": "https://laws.e-gov.go.jp/law/507AC0000000053"
  },
  {
   "id": "jp-mirai",
   "jur": "jp",
   "kind": "法律",
   "name": "次世代医療基盤法",
   "full": "医療分野の研究開発に資するための匿名加工医療情報及び仮名加工医療情報に関する法律（平成29年法律第28号）",
   "src": "https://laws.e-gov.go.jp/law/429AC0000000028"
  },
  {
   "id": "jp-policy",
   "jur": "jp",
   "kind": "政策文書",
   "name": "教育DXロードマップ",
   "full": "教育DXロードマップ（令和7年6月13日・デジタル庁／総務省／文部科学省／経済産業省）",
   "src": "https://www.digital.go.jp/assets/contents/node/information/field_ref_resources/511df327-5ba3-456e-a5cd-2ebeddd8c960/29c4e154/20250613_edu-dx-full.pdf"
  },
  {
   "id": "jp-std",
   "jur": "jp",
   "kind": "行政文書",
   "name": "教育データ標準",
   "full": "文部科学省「教育データ標準」5.0版・相互運用標準モデル Ver.5.00",
   "src": "https://www.mext.go.jp/a_menu/other/data_00001.htm"
  },
  {
   "id": "jp-datautil",
   "jur": "jp",
   "kind": "政策文書",
   "name": "データ利活用基本方針",
   "full": "データ利活用制度の在り方に関する基本方針（令和7年6月13日・デジタル行財政改革会議決定）",
   "src": "https://www.cas.go.jp/jp/seisaku/digital_gyozaikaikaku/pdf/data_houshin_honbun.pdf"
  },
  {
   "id": "jp-dpf",
   "jur": "jp",
   "kind": "認定制度",
   "name": "公益デジタルPF認定制度",
   "full": "公益デジタルプラットフォーム運営事業者認定制度（経済産業省・IPA）",
   "src": "https://www.ipa.go.jp/digital/dx/dpf-nintei.html"
  },
  {
   "id": "eu-gdpr",
   "jur": "eu",
   "kind": "規則",
   "name": "GDPR",
   "full": "一般データ保護規則（規則(EU)2016/679）",
   "src": "https://eur-lex.europa.eu/eli/reg/2016/679/oj"
  },
  {
   "id": "eu-aiact",
   "jur": "eu",
   "kind": "規則",
   "name": "EU AI法",
   "full": "人工知能に関する調和された規則（規則(EU)2024/1689）",
   "src": "https://eur-lex.europa.eu/eli/reg/2024/1689/oj"
  },
  {
   "id": "eu-ehds",
   "jur": "eu",
   "kind": "規則",
   "name": "EHDS",
   "full": "欧州ヘルスデータスペース規則（規則(EU)2025/327）",
   "src": "https://eur-lex.europa.eu/eli/reg/2025/327/oj"
  },
  {
   "id": "eu-dga",
   "jur": "eu",
   "kind": "規則",
   "name": "データガバナンス法",
   "full": "欧州データガバナンス法（規則(EU)2022/868）※デジタル・オムニバスにより廃止・統合が提案中",
   "src": "https://eur-lex.europa.eu/eli/reg/2022/868/oj"
  },
  {
   "id": "eu-dataact",
   "jur": "eu",
   "kind": "規則",
   "name": "データ法",
   "full": "データ法（規則(EU)2023/2854）",
   "src": "https://eur-lex.europa.eu/eli/reg/2023/2854/oj"
  },
  {
   "id": "eu-dsa",
   "jur": "eu",
   "kind": "規則",
   "name": "デジタルサービス法",
   "full": "デジタルサービス法（規則(EU)2022/2065）",
   "src": "https://eur-lex.europa.eu/eli/reg/2022/2065/oj"
  },
  {
   "id": "eu-opendata",
   "jur": "eu",
   "kind": "指令",
   "name": "オープンデータ指令",
   "full": "オープンデータ及び公共セクター情報の再利用に関する指令（指令(EU)2019/1024）",
   "src": "https://eur-lex.europa.eu/eli/dir/2019/1024/oj"
  },
  {
   "id": "eu-omnibus",
   "jur": "eu",
   "kind": "法案",
   "name": "デジタル・オムニバス",
   "full": "デジタル・オムニバス規則案（欧州委員会2025年11月19日提案）※成立前",
   "src": "https://eur-lex.europa.eu/"
  },
  {
   "id": "uk-gdpr",
   "jur": "uk",
   "kind": "規則",
   "name": "UK GDPR",
   "full": "UK General Data Protection Regulation",
   "src": "https://www.legislation.gov.uk/eur/2016/679/contents"
  },
  {
   "id": "uk-dpa",
   "jur": "uk",
   "kind": "法律",
   "name": "DPA 2018",
   "full": "Data Protection Act 2018（2018 c. 12）",
   "src": "https://www.legislation.gov.uk/ukpga/2018/12"
  },
  {
   "id": "uk-duaa",
   "jur": "uk",
   "kind": "法律",
   "name": "DUAA 2025",
   "full": "Data (Use and Access) Act 2025（2025 c. 18）",
   "src": "https://www.legislation.gov.uk/ukpga/2025/18"
  },
  {
   "id": "us-ferpa",
   "jur": "us",
   "kind": "法律",
   "name": "FERPA",
   "full": "Family Educational Rights and Privacy Act（20 U.S.C. §1232g／34 C.F.R. Part 99）",
   "src": "https://www.law.cornell.edu/uscode/text/20/1232g"
  },
  {
   "id": "us-coppa",
   "jur": "us",
   "kind": "法律",
   "name": "COPPA",
   "full": "Children’s Online Privacy Protection Act（15 U.S.C. §§6501-6506）",
   "src": "https://www.law.cornell.edu/uscode/text/15/6502"
  },
  {
   "id": "kr-pipa",
   "jur": "kr",
   "kind": "法律",
   "name": "韓国個人情報保護法",
   "full": "개인정보 보호법（個人情報保護法・法律第19234号／2023年3月14日改正）",
   "src": "https://elaw.klri.re.kr/eng_service/lawViewContent.do?hseq=62389"
  },
  {
   "id": "kr-ai",
   "jur": "kr",
   "kind": "法律",
   "name": "韓国AI基本法",
   "full": "인공지능 발전과 신뢰 기반 조성 등에 관한 기본법（AI基本法・原法は法律第20676号／2025年1月21日公布・2026年1月22日施行。法律第22076号による一部改正が2026年10月20日公布・2027年4月21日施行予定）",
   "src": "https://www.law.go.kr/lsInfoP.do?lsiSeq=291229"
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
  },
  {
   "id": "vendor",
   "label": "委託・第三者提供（AIベンダーへの提供）",
   "q": "大学が外部のAI事業者にデータを渡すとき、どの枠組みで処理されるか。委託と第三者提供はどう分かれるか。"
  },
  {
   "id": "transfer",
   "label": "越境移転",
   "q": "国外の事業者にデータが渡る場合の規律。クラウドAIは海外事業者が多い。"
  },
  {
   "id": "consent",
   "label": "同意の任意性（在学関係の力の不均衡）",
   "q": "学生と大学の間には評価する／されるの関係がある。その下での同意は自由な意思によるものといえるか。"
  },
  {
   "id": "academic",
   "label": "学術研究目的の例外",
   "q": "学術研究目的の例外はどう作られているか。教育改善目的はそこに入るか。"
  },
  {
   "id": "proctor",
   "label": "試験監視・生体データ・要配慮情報",
   "q": "オンライン試験の監視や生体データの利用に固有の規律があるか。"
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
   "refs": [
    "uk-gdpr-retained"
   ],
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
   "summary": "1条は「個人の自由と権利を保護し、さらに個人の尊厳と価値を具現する」ことを目的とし、有用性への配慮を目的規定に書かない。"
  },
  {
   "axis": "stat",
   "jur": "jp",
   "status": "explicit",
   "refs": [
    "jp-appi-2-13",
    "jp-appi-18-3",
    "jp-mirai-57",
    "jp-appi-30-2",
    "jp-appi-31-3"
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
    "eu-ehds-53",
    "eu-omnibus-gdpr"
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
   "summary": "28条の2第1項が「統計作成、科学的研究、公益的記録保存等」のために本人同意なしの仮名情報処理を認める。"
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
   "summary": "28条の5第1項は「特定の個人を識別する目的」での仮名情報処理を禁じるが、識別せずに個別決定に用いる場合は捉えない。"
  },
  {
   "axis": "auto",
   "jur": "jp",
   "status": "absent",
   "refs": [
    "jp-appi-19",
    "jp-ai-3",
    "jp-ai-13",
    "jp-ai-16"
   ],
   "summary": "GDPR22条に相当する一般規定がない。令和8年改正でも導入されていない。AI推進法にも本人の権利規定はない。"
  },
  {
   "axis": "auto",
   "jur": "eu",
   "status": "explicit",
   "refs": [
    "eu-gdpr-22",
    "eu-aiact-annex3",
    "eu-aiact-5-1f",
    "eu-aiact-50"
   ],
   "summary": "GDPR22条1項が専ら自動処理に基づく決定に服しない権利を定め、AI法附属書III第3項が教育・職業訓練の用途を高リスクに分類する。"
  },
  {
   "axis": "auto",
   "jur": "uk",
   "status": "partial",
   "refs": [],
   "summary": "UK GDPRには英国独自の22A条〜22D条が置かれ、EU GDPR 22条をそのまま継承していない。DUAA 2025がこの領域を改正した。",
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
   "summary": "PIPA 4条6号・37条の2が自動化された決定の拒否・説明要求権を定める。AI基本法2条4号の高影響AIは、教育については幼児・初等・中等の学生評価に限られ、高等教育を含まない。"
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
   "refs": [
    "eu-gdpr-92"
   ],
   "summary": "委任法令・実施法令の制度が条約上整備され、委任の範囲・期間・撤回が各規則に明記される。",
   "verified": false
  },
  {
   "axis": "deleg",
   "jur": "uk",
   "status": "explicit",
   "refs": [
    "uk-duaa-86",
    "uk-gdpr-retained"
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
   "status": "partial",
   "refs": [
    "kr-pipa-28-3"
   ],
   "summary": "PIPAは大統領令と個人情報保護委員会の告示に広く委任する。仮名情報の結合手続や結合専門機関の指定基準も下位規範に置かれている。",
   "verified": false
  },
  {
   "axis": "eddata",
   "jur": "jp",
   "status": "absent",
   "refs": [
    "jp-std",
    "jp-policy-1",
    "jp-appi-2-3",
    "jp-datautil-edu"
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
   "summary": "PIPAに教育データの定義はない。"
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
    "kr-pipa-28-5",
    "kr-pipa-28-4"
   ],
   "summary": "28条の5が識別目的の処理を禁じ、識別しうる情報が生成された場合の処理中止・回収・破棄を義務づける。28条の4が追加情報の分離保管と記録の3年保存を求める。"
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
   "refs": [
    "uk-gdpr-retained"
   ],
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
   "summary": "28条の7が、仮名情報には20条・20条の2・27条・34条1項・35条・35条の2・36条・37条を適用しないと定め、閲覧・訂正・削除・処理停止等の権利をまとめて外す。"
  },
  {
   "axis": "enforce",
   "jur": "jp",
   "status": "partial",
   "refs": [
    "jp-appi-146",
    "jp-appi-148",
    "jp-appi-149",
    "jp-appi-148-3"
   ],
   "summary": "146〜148条が報告徴収・立入検査・指導助言・勧告・命令を置き、149条1項が表現・学問・信教・政治活動の自由を妨げてはならないとする。令和8年改正で148条の3〜148条の17の課徴金が新設された。"
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
   "refs": [
    "uk-dpa-part6"
   ],
   "summary": "DPA 2018 Part 6に基づきICOが執行する。制裁金の上限はUK GDPRが定める。"
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
   "summary": "64条の2（2023年新設）が全体売上高の3%を上限とする課徴金を定める。売上高がない又は算定が困難な場合は20億ウォン。",
   "verified": false
  },
  {
   "axis": "infra",
   "jur": "jp",
   "status": "absent",
   "refs": [
    "jp-policy-1",
    "jp-policy-2",
    "jp-std",
    "jp-datautil-edu",
    "jp-datautil-mid",
    "jp-dpf-cert"
   ],
   "summary": "共用基盤を規律する法律はまだない。教育DXロードマップは技術的相互運用性までで止まり「国は個人の教育データを一元的に管理せず」とするが、データ利活用制度の在り方に関する基本方針（2025年6月13日）は、教育データの認証基盤整備と文部科学省による制度検討（2026年度中をめど）を明記し、官民データ活用推進基本法の抜本改正や新法の検討を掲げる。"
  },
  {
   "axis": "infra",
   "jur": "eu",
   "status": "partial",
   "refs": [
    "eu-dga-12",
    "eu-dataact",
    "eu-ehds-53",
    "eu-dga-ch4",
    "eu-opendata-research",
    "eu-dataact-21"
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
   "summary": "28条の3が異なる管理者間の仮名情報の結合を指定の結合専門機関に限定し、結合結果の搬出に専門機関の長の承認を要求する。"
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
    "eu-gdpr-8",
    "eu-dsa-28"
   ],
   "summary": "8条が情報社会サービスについて16歳未満（加盟国は13歳まで引下げ可）の子どもの同意に親権者の承諾を要求する。"
  },
  {
   "axis": "minor",
   "jur": "uk",
   "status": "explicit",
   "refs": [
    "uk-gdpr-retained"
   ],
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
   "refs": [
    "kr-pipa-child"
   ],
   "summary": "22条の2第1項が、満14歳未満の児童の個人情報の処理に法定代理人の同意を要求する。",
   "verified": false
  },
  {
   "axis": "vendor",
   "jur": "jp",
   "status": "explicit",
   "refs": [
    "jp-appi-25",
    "jp-appi-27",
    "jp-appi-30-2",
    "jp-datautil-mid",
    "jp-dpf-cert"
   ],
   "summary": "27条が第三者提供に本人同意を原則とし、27条5項1号により委託に伴う提供は第三者提供にあたらないとされる。25条が委託先の監督を求める。"
  },
  {
   "axis": "vendor",
   "jur": "eu",
   "status": "explicit",
   "refs": [
    "eu-gdpr-28"
   ],
   "summary": "28条が処理者（processor）との契約に必須記載事項を定め、26条が共同管理者を規律する。委託という独立の概念はなく、管理者／処理者の区別で処理される。"
  },
  {
   "axis": "vendor",
   "jur": "uk",
   "status": "explicit",
   "refs": [
    "uk-gdpr-retained"
   ],
   "summary": "UK GDPR 28条を継承する。",
   "verified": false
  },
  {
   "axis": "vendor",
   "jur": "us",
   "status": "partial",
   "refs": [
    "us-ferpa-studies"
   ],
   "summary": "FERPAに「委託」概念はない。外部事業者は34 C.F.R. §99.31(a)(1)の school official に含める運用（outsourcing）で処理される。",
   "verified": false
  },
  {
   "axis": "vendor",
   "jur": "kr",
   "status": "explicit",
   "refs": [
    "kr-pipa-26"
   ],
   "summary": "PIPA 26条が業務委託を規律し、委託者の管理・監督義務と委託事実の公開を求める。"
  },
  {
   "axis": "transfer",
   "jur": "jp",
   "status": "explicit",
   "refs": [
    "jp-appi-28"
   ],
   "summary": "28条が外国にある第三者への提供を制限し、本人の同意、基準適合体制の整備、又は規則で定める国のいずれかを要求する。"
  },
  {
   "axis": "transfer",
   "jur": "eu",
   "status": "explicit",
   "refs": [
    "eu-gdpr-44"
   ],
   "summary": "44条〜49条が十分性認定、適切な保護措置（標準契約条項等）、個別の適用除外という三層で規律する。日本は十分性認定国。"
  },
  {
   "axis": "transfer",
   "jur": "uk",
   "status": "explicit",
   "refs": [
    "uk-transfer"
   ],
   "summary": "UK GDPR 44条以下を継承し、英国独自の adequacy regulations と国際データ移転協定（IDTA）による。",
   "verified": false
  },
  {
   "axis": "transfer",
   "jur": "us",
   "status": "absent",
   "refs": [],
   "summary": "連邦法に一般的な越境移転規制はない。FERPAにも規定がない。",
   "verified": false
  },
  {
   "axis": "transfer",
   "jur": "kr",
   "status": "explicit",
   "refs": [
    "kr-pipa-28-8"
   ],
   "summary": "PIPA 28条の8以下が国外移転を規律し、同意・法律の定め・認証等の根拠を要求する。移転の中止命令の制度もある。"
  },
  {
   "axis": "consent",
   "jur": "jp",
   "status": "absent",
   "refs": [],
   "summary": "同意の有効性に関する一般規定がない。在学関係に固有の規律もなく、ガイドラインとQ&Aで処理される。",
   "verified": false
  },
  {
   "axis": "consent",
   "jur": "eu",
   "status": "explicit",
   "refs": [
    "eu-gdpr-4-11",
    "eu-gdpr-7-4",
    "eu-dga-ch4"
   ],
   "summary": "4条(11)が同意を「自由に与えられた」ものと定義し、7条4項が条件性を戒める。前文43は公的機関との関係など明らかな不均衡がある場合、同意は有効な法的根拠にならないとする。"
  },
  {
   "axis": "consent",
   "jur": "uk",
   "status": "explicit",
   "refs": [
    "uk-gdpr-retained"
   ],
   "summary": "UK GDPR 4条(11)・7条を継承する。",
   "verified": false
  },
  {
   "axis": "consent",
   "jur": "us",
   "status": "partial",
   "refs": [],
   "summary": "34 C.F.R. §99.30が署名入りの書面による同意を要求するが、任意性そのものを審査する枠組みはない。",
   "verified": false
  },
  {
   "axis": "consent",
   "jur": "kr",
   "status": "partial",
   "refs": [],
   "summary": "PIPA 22条が同意の受領方法を定め、必須同意と選択同意を区分することを求める。",
   "verified": false
  },
  {
   "axis": "academic",
   "jur": "jp",
   "status": "explicit",
   "refs": [
    "jp-appi-18-3",
    "jp-appi-59",
    "jp-appi-57"
   ],
   "summary": "18条3項5号6号・20条2項5号6号・27条1項5〜7号が学術研究目的の個別例外を置き、59条が学術研究機関等の責務を定める。いずれも「学術研究目的」に限られる。57条の適用除外は報道・著述・宗教・政治の4類型であり、学術研究機関等は含まれない。"
  },
  {
   "axis": "academic",
   "jur": "eu",
   "status": "explicit",
   "refs": [
    "eu-gdpr-5-1b",
    "eu-gdpr-89",
    "eu-gdpr-9",
    "eu-opendata-research",
    "eu-dataact-21",
    "eu-omnibus-gdpr"
   ],
   "summary": "5条1項(b)が研究目的の追加処理を目的外としないとし、89条が保障措置を要求、9条2項(j)が特別カテゴリの例外を置く。"
  },
  {
   "axis": "academic",
   "jur": "uk",
   "status": "explicit",
   "refs": [
    "uk-gdpr-84c"
   ],
   "summary": "DUAA 2025が挿入したUK GDPR 84A〜84C条が、研究・記録保存・統計目的の定義と保障措置を整理する。",
   "verified": false
  },
  {
   "axis": "academic",
   "jur": "us",
   "status": "partial",
   "refs": [
    "us-ferpa-studies"
   ],
   "summary": "20 U.S.C. §1232g(b)(1)(F)と34 C.F.R. §99.31(a)(6)の studies exception のみ。教育機関のため又はその代わりに行う研究に限られ、研究者の自由な研究は対象外。",
   "verified": false
  },
  {
   "axis": "academic",
   "jur": "kr",
   "status": "explicit",
   "refs": [
    "kr-pipa-28-2"
   ],
   "summary": "28条の2が「科学的研究」を仮名情報処理の目的の一つとして掲げる。PIPA 2条に科学的研究の定義が置かれている。",
   "verified": false
  },
  {
   "axis": "proctor",
   "jur": "jp",
   "status": "partial",
   "refs": [
    "jp-appi-2-2",
    "jp-appi-2-3"
   ],
   "summary": "試験監視に固有の規律はない。生体データは要配慮個人情報（2条3項）ではなく個人識別符号（2条2項）として扱われる。教育機関での感情推認を禁じる規定もない。"
  },
  {
   "axis": "proctor",
   "jur": "eu",
   "status": "explicit",
   "refs": [
    "eu-aiact-annex3",
    "eu-gdpr-9",
    "eu-aiact-5-1f",
    "eu-aiact-50"
   ],
   "summary": "AI法5条1項(f)が職場及び教育機関における感情推認を原則禁止する（医療・安全目的の例外のみ）。加えてGDPR 9条が生体データを特別カテゴリとし、AI法附属書III 3(d)が試験中の禁止行為の監視・検知を、同1が生体認証を高リスクとする。"
  },
  {
   "axis": "proctor",
   "jur": "uk",
   "status": "explicit",
   "refs": [
    "uk-gdpr-retained"
   ],
   "summary": "UK GDPR 9条とDPA 2018 Schedule 1が特別カテゴリを規律する。AI法に相当する横断法はない。",
   "verified": false
  },
  {
   "axis": "proctor",
   "jur": "us",
   "status": "partial",
   "refs": [],
   "summary": "連邦法に特別カテゴリの概念はない。生体情報は州法（イリノイ州BIPA等）が個別に規律する。",
   "verified": false
  },
  {
   "axis": "proctor",
   "jur": "kr",
   "status": "explicit",
   "refs": [
    "kr-pipa-23"
   ],
   "summary": "23条が민감정보（センシティブ情報）の処理を原則禁止し、別個の同意等を要求する。ただし範囲は大統領令に委任されており、条文に生体認識情報の語はない。"
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
   "title": "統計作成等（令和8年法律第56号による新設）",
   "axes": [
    "stat",
    "deleg"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://www.shugiin.go.jp/internet/itdb_housei.nsf/html/housei/22120260717056.htm",
   "text": "統計の作成その他の大量の情報から当該情報を構成する要素に係る情報を抽出して分類、比較その他の解析を行うことにより、大量の情報の傾向又は性質に係る情報（個人に関する情報であるものを除く。）を得ることであって、個人の権利利益を害するおそれが少ないものとして個人情報保護委員会規則で定めるものをいう。"
  },
  {
   "id": "jp-appi-30-2",
   "inst": "jp-appi",
   "cite": "30条の2",
   "title": "統計作成等の特例（要配慮個人情報の取得・個人データの提供）",
   "axes": [
    "stat",
    "vendor"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://www.shugiin.go.jp/internet/itdb_housei.nsf/html/housei/22120260717056.htm",
   "text": "1項 統計作成等目的等のために、現に公開されている要配慮個人情報を取り扱う必要があり、①氏名又は名称、②統計作成等の内容又は提供目的、③規則で定める事項を公表している場合。／5項 提供先が統計作成等目的で取り扱う必要があり、提供元・提供先の双方が所定事項を公表し、両者間で書面（電磁的記録を含む）により合意している場合。本特例による二段階以上の提供は禁止。"
  },
  {
   "id": "jp-appi-31-3",
   "inst": "jp-appi",
   "cite": "31条の3第1項",
   "title": "統計作成等の特例（個人関連情報の第三者提供）",
   "axes": [
    "stat",
    "vendor"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://www.shugiin.go.jp/internet/itdb_housei.nsf/html/housei/22120260717056.htm",
   "text": "30条の2第5項とほぼ同じ構成で、提供元が本人同意の確認を行わずに個人関連情報を提供できる要件（統計作成等目的、双方の公表、書面合意、二段階提供の禁止）を定める。"
  },
  {
   "id": "jp-appi-148-3",
   "inst": "jp-appi",
   "cite": "148条の3〜148条の17",
   "title": "課徴金（令和8年法律第56号による新設）",
   "axes": [
    "enforce"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://www.ppc.go.jp/files/pdf/260407_kisyahaifusiryou.pdf",
   "text": "重大な違反行為により個人の権利利益が侵害された場合等に、違反行為によって得られた財産的利益等に相当する額の納付を命じる。対象は19条（不適正利用）、20条1項（適正取得）、27条1項（第三者提供制限）の違反および統計作成等の特例違反。大規模事案は対象行為に係る本人の数1,000人が基準とされる。"
  },
  {
   "id": "jp-appi-18-3",
   "inst": "jp-appi",
   "cite": "18条3項5号・6号",
   "title": "利用目的による制限の適用除外（学術研究）",
   "axes": [
    "stat",
    "academic"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://www.japaneselawtranslation.go.jp/en/laws/view/4241/ja",
   "text": "5号 学術研究機関等である個人情報取扱事業者が、学術研究目的で個人情報を取り扱う必要があるとき（個人の権利利益を不当に侵害するおそれがある場合を除く）。／6号 個人データを学術研究機関等に提供する場合で、提供先が学術研究目的で取り扱う必要があるとき（同じ除外あり）。"
  },
  {
   "id": "jp-appi-2-2",
   "inst": "jp-appi",
   "cite": "2条2項",
   "title": "個人識別符号",
   "axes": [
    "proctor",
    "eddata"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://www.japaneselawtranslation.go.jp/en/laws/view/4241/ja",
   "text": "1号 特定の個人の身体の一部の特徴を電子計算機の用に供するために変換した文字、番号、記号その他の符号であって、当該特定の個人を識別することができるもの。／2号 個人に割り当てられ、又はカード等に記載された、利用者ごとに異なる符号。いずれも政令で定めるもの。"
  },
  {
   "id": "jp-appi-2-3",
   "inst": "jp-appi",
   "cite": "2条3項",
   "title": "要配慮個人情報",
   "axes": [
    "proctor",
    "eddata"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://www.japaneselawtranslation.go.jp/en/laws/view/4241/ja",
   "text": "本人の人種、信条、社会的身分、病歴、犯罪の経歴、犯罪により害を被った事実その他本人に対する不当な差別、偏見その他の不利益が生じないようにその取扱いに特に配慮を要するものとして政令で定める記述等が含まれる個人情報をいう。"
  },
  {
   "id": "jp-appi-25",
   "inst": "jp-appi",
   "cite": "25条",
   "title": "委託先の監督",
   "axes": [
    "vendor"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://www.japaneselawtranslation.go.jp/en/laws/view/4241/ja",
   "text": "個人情報取扱事業者は、個人データの取扱いの全部又は一部を委託する場合は、その取扱いを委託された個人データの安全管理が図られるよう、委託を受けた者に対する必要かつ適切な監督を行わなければならない。"
  },
  {
   "id": "jp-appi-27",
   "inst": "jp-appi",
   "cite": "27条1項・5項1号",
   "title": "第三者提供の制限",
   "axes": [
    "vendor"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://www.japaneselawtranslation.go.jp/en/laws/view/4241/ja",
   "text": "1項柱書 個人情報取扱事業者は、法令に基づく場合等を除くほか、あらかじめ本人の同意を得ないで、個人データを第三者に提供してはならない。／5項1号 利用目的の達成に必要な範囲内において個人データの取扱いの全部又は一部を委託することに伴って当該個人データが提供される場合、その提供先は第三者に当たらない。"
  },
  {
   "id": "jp-appi-28",
   "inst": "jp-appi",
   "cite": "28条1項",
   "title": "外国にある第三者への提供の制限",
   "axes": [
    "transfer"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://www.japaneselawtranslation.go.jp/en/laws/view/4241/ja",
   "text": "個人情報取扱事業者は、外国にある第三者に個人データを提供する場合には、あらかじめ外国にある第三者への提供を認める旨の本人の同意を得なければならない。委員会規則で定める水準にある国にある第三者、及び基準に適合する体制を整備している者は除く。"
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
   "verified": true,
   "src": "https://www.japaneselawtranslation.go.jp/en/laws/view/4241/ja",
   "text": "1項 本人は、保有個人データが18条若しくは19条に違反して取り扱われているとき、又は20条に違反して取得されたものであるときは、当該保有個人データの利用の停止又は消去を請求することができる。"
  },
  {
   "id": "jp-appi-41-7",
   "inst": "jp-appi",
   "cite": "41条7項",
   "title": "仮名加工情報の取扱いに係る義務（識別のための照合の禁止）",
   "axes": [
    "reident"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://www.japaneselawtranslation.go.jp/en/laws/view/4241/ja",
   "text": "仮名加工情報取扱事業者は、仮名加工情報を取り扱うに当たっては、当該仮名加工情報の作成に用いられた個人情報に係る本人を識別するために、当該仮名加工情報を他の情報と照合してはならない。"
  },
  {
   "id": "jp-appi-59",
   "inst": "jp-appi",
   "cite": "59条",
   "title": "学術研究機関等の責務",
   "axes": [
    "enforce",
    "academic"
   ],
   "status": "partial",
   "verified": true,
   "src": "https://www.japaneselawtranslation.go.jp/en/laws/view/4241/ja",
   "text": "個人情報取扱事業者である学術研究機関等は、学術研究目的で行う個人情報の取扱いについて、この法律の規定を遵守するとともに、その適正を確保するために必要な措置を自ら講じ、かつ、当該措置の内容を公表するよう努めなければならない。"
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
   "title": "委員会の権限の行使の制限",
   "axes": [
    "enforce"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://laws.e-gov.go.jp/law/415AC0000000057",
   "text": "委員会は、前三条の規定により個人情報取扱事業者等に対し報告若しくは資料の提出の要求、立入検査、指導、助言、勧告又は命令を行うに当たっては、表現の自由、学問の自由、信教の自由及び政治活動の自由を妨げてはならない。"
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
   "cite": "52条1項・57条1項",
   "title": "医療情報取扱事業者による医療情報の提供",
   "axes": [
    "stat"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://www.japaneselawtranslation.go.jp/ja/laws/view/4845/ja",
   "text": "52条1項が認定匿名加工医療情報作成事業者への、57条1項が認定仮名加工医療情報作成事業者への提供を定める。いずれも、本人又は遺族の求めに応じて提供を停止する仕組みを前提に、所定事項をあらかじめ本人に通知し主務大臣に届け出た場合に、本人の同意なく提供できる。停止の仕組みは52条1項6号。"
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
   "id": "jp-datautil-edu",
   "inst": "jp-datautil",
   "cite": "（教育分野）",
   "title": "教育データの認証基盤整備と文部科学省の制度検討",
   "axes": [
    "infra",
    "eddata"
   ],
   "status": "partial",
   "verified": true,
   "src": "https://www.cas.go.jp/jp/seisaku/digital_gyozaikaikaku/pdf/data_houshin_honbun.pdf",
   "text": "教育データを本人の意思を踏まえて安全にオンラインでやり取りするため、GビズIDやJPKI（公的個人認証サービス）等の既存基盤の活用を前提に電子的な認証基盤の整備を進める。デジタル庁が2025年度に調査研究、2026年度に技術実証を行い、文部科学省は2025年度中に制度面の検討に着手し、2026年度中をめどに必要な対応を行う。"
  },
  {
   "id": "jp-datautil-mid",
   "inst": "jp-datautil",
   "cite": "（データ仲介者・連携基盤）",
   "title": "データ仲介者の定義と連携基盤の法的規律の検討",
   "axes": [
    "infra",
    "vendor"
   ],
   "status": "partial",
   "verified": true,
   "src": "https://www.cas.go.jp/jp/seisaku/digital_gyozaikaikaku/pdf/data_houshin_honbun.pdf",
   "text": "「データ仲介者」を、多数のデータ保有者からデータを受け、集積・加工して他者に提供する主体として定義する。信頼できるデータ連携プラットフォームの機能整備に向け、法的規律の整備を含めて2025年度に検討するとし、2026年夏までにトラスト基盤のフレームワークを整備する方針を示す。第8章「当面の対応」では、官民データ活用推進基本法の抜本的な改正や新法を含む必要な検討を行い、次期通常国会への法案提出を目指すとする。"
  },
  {
   "id": "jp-dpf-cert",
   "inst": "jp-dpf",
   "cite": "（情報処理促進法施行規則）",
   "title": "公益デジタルプラットフォーム運営事業者認定制度",
   "axes": [
    "infra",
    "vendor"
   ],
   "status": "partial",
   "verified": true,
   "src": "https://www.ipa.go.jp/digital/dx/dpf-nintei.html",
   "text": "経済産業大臣による認定制度。認定基準は情報処理の促進に関する法律施行規則（平成28年経済産業省令第102号）が定め、IPAが申請受付と認定審査事務を担う。DX認定の基準に加え、データ連携システムの運用・管理（IPAガイドライン準拠）、安全性・信頼性（データ管理規定と取引条件の開示、サイバーセキュリティ、接続アプリの認証）、相互運用性（準拠基準の公表と遵守）、事業安定性への適合を求める。"
  },
  {
   "id": "jp-appi-57",
   "inst": "jp-appi",
   "cite": "57条",
   "title": "適用除外",
   "axes": [
    "academic"
   ],
   "status": "na",
   "verified": true,
   "src": "https://www.japaneselawtranslation.go.jp/en/laws/view/4241/ja",
   "text": "1項 個人情報取扱事業者等及び個人関連情報取扱事業者のうち、1号 報道機関（報道を業とする個人を含む）が報道の用に供する目的、2号 著述を業とする者が著述の用に供する目的、3号 宗教団体が宗教活動の用に供する目的、4号 政治団体が政治活動の用に供する目的で個人情報等を取り扱う場合には、第4章の規定を適用しない。／3項 これらの者は、安全管理措置や苦情処理等の必要な措置を自ら講じ、その内容を公表するよう努めなければならない。"
  },
  {
   "id": "jp-std",
   "inst": "jp-std",
   "cite": "5.0版",
   "title": "教育データ標準",
   "axes": [
    "eddata",
    "infra"
   ],
   "status": "partial",
   "verified": true,
   "text": "主体情報・内容情報・活動情報の区分。相互運用標準モデル Ver.5.00。OneRoster・LTI・xAPI等の標準規格に言及。"
  },
  {
   "id": "eu-gdpr-1",
   "inst": "eu-gdpr",
   "cite": "1条",
   "title": "Subject-matter and objectives（対象事項及び目的）",
   "axes": [
    "purpose"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://www.legislation.gov.uk/eur/2016/679/article/1/adopted",
   "text": "2項 本規則は、自然人の基本的な権利及び自由、特に個人データの保護についての権利を保護する。／3項 個人データの自由な流通は、制限されてはならない。"
  },
  {
   "id": "eu-gdpr-4-11",
   "inst": "eu-gdpr",
   "cite": "4条(11)",
   "title": "Definitions ──「consent」の定義",
   "axes": [
    "consent"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://www.legislation.gov.uk/eur/2016/679/article/4/adopted",
   "text": "本人の「同意」とは、自由に与えられ、特定され、情報提供を受けた上での、曖昧さのない意思表示であって、言明又は明確な積極的行為により、自己に関する個人データの取扱いへの同意を示すものをいう。"
  },
  {
   "id": "eu-gdpr-7-4",
   "inst": "eu-gdpr",
   "cite": "7条4項",
   "title": "Conditions for consent（同意の条件）",
   "axes": [
    "consent"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://www.legislation.gov.uk/eur/2016/679/article/7/adopted",
   "text": "同意が自由に与えられたかを評価するに当たっては、とりわけ、契約（サービスの提供を含む）の履行が、その契約の履行に必要でない個人データの取扱いへの同意に条件付けられているか否かを、最大限考慮しなければならない。"
  },
  {
   "id": "eu-gdpr-9",
   "inst": "eu-gdpr",
   "cite": "9条1項・2項(j)",
   "title": "Processing of special categories of personal data",
   "axes": [
    "proctor",
    "academic"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://www.legislation.gov.uk/eur/2016/679/article/9/adopted",
   "text": "1項 人種的又は民族的出自、政治的意見、宗教的又は思想的信条、労働組合への加入、遺伝データ、自然人を一意に識別する目的の生体データ、健康に関するデータ、性生活又は性的指向に関するデータの取扱いは禁止される。／2項(j) 89条1項に基づく措置を伴う、公共の利益におけるアーカイブ目的、科学的・歴史的研究目的又は統計目的の取扱いは例外となる。"
  },
  {
   "id": "eu-gdpr-28",
   "inst": "eu-gdpr",
   "cite": "28条1項・3項",
   "title": "Processor（処理者）",
   "axes": [
    "vendor"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://www.legislation.gov.uk/eur/2016/679/article/28/adopted",
   "text": "1項 管理者は、本規則の要件を満たしデータ主体の権利を保護する適切な技術的・組織的措置を実施できる十分な保証を提供する処理者のみを利用しなければならない。／3項柱書 処理者による取扱いは、取扱いの対象事項・期間・性質・目的、個人データの種類とデータ主体の類型、管理者の義務と権利を定める契約その他の法的行為によって規律されなければならない。"
  },
  {
   "id": "eu-gdpr-44",
   "inst": "eu-gdpr",
   "cite": "44条〜46条",
   "title": "Transfers of personal data to third countries（第三国への移転）",
   "axes": [
    "transfer"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://www.legislation.gov.uk/eur/2016/679/article/44/adopted",
   "text": "44条（移転に関する一般原則）第三国又は国際機関への移転は、本章の条件を管理者と処理者が満たす場合にのみ行うことができ、自然人に保障される保護水準が損なわれないよう適用しなければならない。／45条 十分性認定に基づく移転。／46条 適切な保護措置を条件とする移転。"
  },
  {
   "id": "eu-gdpr-5-1b",
   "inst": "eu-gdpr",
   "cite": "5条1項(b)",
   "title": "Principles relating to processing of personal data（取扱いの原則）── 目的の限定",
   "axes": [
    "stat",
    "academic"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://www.legislation.gov.uk/eur/2016/679/article/5/adopted",
   "text": "個人データは、特定され、明示的で、正当な目的のために収集されなければならず、…公共の利益における記録保存目的、科学的研究目的若しくは歴史的研究目的又は統計目的のための追加的な処理は、89条1項に従う限り、当初の目的と相容れないものとはみなされない。"
  },
  {
   "id": "eu-gdpr-8",
   "inst": "eu-gdpr",
   "cite": "8条",
   "title": "Conditions applicable to child's consent in relation to information society services",
   "axes": [
    "minor"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://www.legislation.gov.uk/eur/2016/679/article/8/adopted",
   "text": "情報社会サービスの提供に関し、子どもが16歳未満の場合、親権者等による承諾がある場合に限り適法である。加盟国は13歳まで引下げ可。"
  },
  {
   "id": "eu-gdpr-11",
   "inst": "eu-gdpr",
   "cite": "11条",
   "title": "Processing which does not require identification（識別を要しない取扱い）",
   "axes": [
    "reident"
   ],
   "status": "partial",
   "verified": true,
   "src": "https://www.legislation.gov.uk/eur/2016/679/article/11/adopted",
   "text": "管理者が本人を識別できない場合、15条から20条までは適用されない。"
  },
  {
   "id": "eu-gdpr-17",
   "inst": "eu-gdpr",
   "cite": "17条",
   "title": "Right to erasure（'right to be forgotten'／消去権）",
   "axes": [
    "erase"
   ],
   "status": "partial",
   "verified": true,
   "src": "https://www.legislation.gov.uk/eur/2016/679/article/17/adopted",
   "text": "本人は、自己に関する個人データの消去を求める権利を有する（一定の事由がある場合）。"
  },
  {
   "id": "eu-gdpr-22",
   "inst": "eu-gdpr",
   "cite": "22条1項",
   "title": "Automated individual decision-making, including profiling",
   "axes": [
    "auto"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://www.legislation.gov.uk/eur/2016/679/article/22/adopted",
   "text": "本人は、プロファイリングを含む専ら自動化された処理に基づき、自己に対する法的効果を生じさせる、又は自己に重大な影響を及ぼす決定に服しない権利を有する。"
  },
  {
   "id": "eu-gdpr-83",
   "inst": "eu-gdpr",
   "cite": "83条5項",
   "title": "General conditions for imposing administrative fines（制裁金の一般的条件）",
   "axes": [
    "enforce"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://www.legislation.gov.uk/eur/2016/679/article/83/adopted",
   "text": "2000万ユーロ以下、又は、企業の場合は前会計年度の全世界年間売上高の4%以下のいずれか高い額。"
  },
  {
   "id": "eu-gdpr-89",
   "inst": "eu-gdpr",
   "cite": "89条1項",
   "title": "Safeguards and derogations relating to processing for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes",
   "axes": [
    "stat",
    "reident",
    "academic"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://www.legislation.gov.uk/eur/2016/679/article/89/adopted",
   "text": "…処理は、本人の権利及び自由のための適切な保障措置に服さなければならない。当該措置は、データ最小化原則の尊重を確保するものでなければならず、仮名化を含む。"
  },
  {
   "id": "eu-gdpr-r162",
   "inst": "eu-gdpr",
   "cite": "前文162",
   "title": "Recital 162 — Processing for statistical purposes",
   "axes": [
    "exit"
   ],
   "status": "partial",
   "verified": true,
   "src": "https://gdpr-info.eu/recitals/no-162/",
   "text": "統計目的とは、処理の結果が個人データではなく集計データであること、及び、この結果又は個人データが特定の自然人に関する措置又は決定を支持するために用いられないことを意味する。"
  },
  {
   "id": "eu-aiact-annex3",
   "inst": "eu-aiact",
   "cite": "附属書III 3項",
   "title": "Annex III(3) Education and vocational training",
   "axes": [
    "auto",
    "eddata",
    "proctor"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://ai-act-service-desk.ec.europa.eu/en/ai-act/annex-3",
   "text": "あらゆる段階（at all levels）の教育・職業訓練機関において用いられる次のAIシステム。(a) 入学・受験の決定又は機関への振り分け、(b) 学習成果の評価（当該成果が学習過程の誘導に用いられる場合を含む）、(c) 個人が受け又は受けられる教育水準の適切さの評価、(d) 試験中の学生の禁止された行動の監視・検知。"
  },
  {
   "id": "eu-aiact-5-1f",
   "inst": "eu-aiact",
   "cite": "5条1項(f)",
   "title": "Prohibited AI practices ── 職場及び教育機関における感情推認の禁止",
   "axes": [
    "proctor",
    "auto"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-5",
   "text": "職場及び教育機関の領域において自然人の感情を推認するAIシステムの上市、当該目的での提供又は使用を禁止する。ただし、医療上又は安全上の理由のために導入され又は上市されることが意図されている場合を除く。（原文「to infer emotions of a natural person in the areas of workplace and education institutions, except where the use of the AI system is intended to be put in place or into the market for medical or safety reasons」）"
  },
  {
   "id": "eu-aiact-50",
   "inst": "eu-aiact",
   "cite": "50条3項",
   "title": "Transparency obligations for providers and deployers of certain AI systems",
   "axes": [
    "auto",
    "proctor"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://ai-act-service-desk.ec.europa.eu/en/ai-act/",
   "text": "3項 感情認識システム又は生体分類システムの配備者は、当該システムに晒される自然人に対し、システムの作動について知らせなければならない。個人データの処理はGDPR等に従う。／1項 自然人と直接対話するAIシステムの設計上の告知義務。／2項 合成生成コンテンツの機械可読なマーキング義務。／4項 ディープフェイクの開示義務。／5項 情報は遅くとも最初の対話又は接触の時点までに提供する。"
  },
  {
   "id": "eu-dsa-28",
   "inst": "eu-dsa",
   "cite": "28条",
   "title": "Online protection of minors（未成年者の保護）",
   "axes": [
    "minor"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://eur-lex.europa.eu/eli/reg/2022/2065/oj",
   "text": "1項 未成年者がアクセスできるオンラインプラットフォームの提供者は、未成年者のプライバシー・安全・保護の高い水準のため、適切かつ比例的な措置を講じなければならない。／2項 当該利用者が未成年者であると相当の確実性をもって知る場合、プロファイリングに基づき個人データを用いた広告をそのインターフェース上に表示してはならない。／3項 本条の遵守のために、利用者の年齢を確定する目的で追加の個人データを処理する義務を負うものではない。／4項 欧州委員会は、理事会との協議を経て、1項の実施を支援するガイドラインを公表することができる。"
  },
  {
   "id": "eu-opendata-research",
   "inst": "eu-opendata",
   "cite": "10条",
   "title": "Research data（研究データ）",
   "axes": [
    "academic",
    "infra"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://eur-lex.europa.eu/eli/dir/2019/1024/oj",
   "text": "1項 加盟国は、公的資金による研究データを公開するための国内政策と措置（オープンアクセス・ポリシー）を採ることで、研究データの利用可能性を支援する。原則はオープン・バイ・デフォルトであり、FAIR原則との整合が求められる。知的財産権、個人データ保護、機密性、安全保障、正当な商業的利益に配慮し、as open as possible, as closed as necessary の考え方に従う。対象は研究を実施する機関と研究資金の提供機関。／2項 公的資金による研究データは、機関リポジトリ又は分野別リポジトリを通じて既に公開されている場合に限り、商用・非商用を問わず再利用できる。"
  },
  {
   "id": "eu-dga-ch4",
   "inst": "eu-dga",
   "cite": "第4章",
   "title": "Data altruism（データ利他主義）",
   "axes": [
    "infra",
    "consent"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://eur-lex.europa.eu/eli/reg/2022/868/oj",
   "text": "データ利他主義組織の登録制度を設ける。登録には、非営利の性格、透明性の要件の充足、データを共有する個人や企業の権利利益を守る保護措置の提供、欧州委員会が関係者と策定するルールブック（情報要件、技術・セキュリティ要件、相互運用性標準に関する推奨事項を含む）の遵守が求められる。加盟国は組織を登録した時点で欧州委員会に通知する。データは一般的利益の目的に用いられ、提供は報酬なしの自発的なものとされる。"
  },
  {
   "id": "eu-omnibus-gdpr",
   "inst": "eu-omnibus",
   "cite": "（GDPR改正部分）",
   "title": "デジタル・オムニバスによるGDPR改正提案",
   "axes": [
    "stat",
    "academic",
    "auto"
   ],
   "status": "partial",
   "verified": false,
   "src": "https://eur-lex.europa.eu/",
   "text": "6条1項(f)の正当な利益を根拠とするAI学習への適用を明確化する条項（88c条）の新設、特別カテゴリデータのAI学習に対応する9条の改正、匿名加工情報に類似する制度の創設（41a条）、データ侵害通知の一本化、ePrivacy指令5条3項のクッキー規制のGDPRへの統合（88a条）が提案されている。"
  },
  {
   "id": "eu-dataact-21",
   "inst": "eu-dataact",
   "cite": "21条",
   "title": "Sharing of data obtained in the context of an exceptional need with research organisations or statistical bodies",
   "axes": [
    "academic",
    "infra"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://eur-lex.europa.eu/eli/reg/2023/2854/oj",
   "text": "1項 公的部門の機関等は、本章に基づき受領したデータを、(a) データ要求時の目的と両立する科学研究・分析を行う者、(b) 公式統計の作成のための各国統計機関及びEurostat と共有できる。／2項 受領者は非営利で行動するか、法令上認められた公益的任務の範囲で行動しなければならず、商業企業が大きな影響力をもち研究結果への優先的アクセスにつながるおそれのある組織は除外される。／4項 受領者は、公的機関によるデータ消去後も最長6か月間データを保持できる。／5項 公的機関は共有前にデータ保有者へ通知しなければならず、データ保有者は所管当局に苦情を申し立てることができる。"
  },
  {
   "id": "eu-ehds-53",
   "inst": "eu-ehds",
   "cite": "53条",
   "title": "Article 53 — Purposes for which electronic health data may be processed for secondary use",
   "axes": [
    "stat",
    "infra"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://eur-lex.europa.eu/eli/reg/2025/327/oj",
   "text": "1項 (a) 公衆衛生・労働衛生の公益、(b) 公的機関等による政策立案・規制業務、(c) 健康・ケアに関する統計、(d) 保健医療分野の職業教育・高等教育、(e) 科学的研究（アルゴリズム・AIシステムの学習を含む）、(f) 他人の健康データに基づくケアの提供・治療の最適化。／2項 (a)(b)(c)は公的機関等に限る。"
  },
  {
   "id": "eu-ehds-54",
   "inst": "eu-ehds",
   "cite": "54条",
   "title": "Article 54 — Prohibited secondary use of electronic health data",
   "axes": [
    "exit"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://eur-lex.europa.eu/eli/reg/2025/327/oj",
   "text": "(a) 健康データに基づき個人・集団に不利益な決定を行うこと（法的・社会的・経済的効果その他重大な影響を伴うもの）、(b) 求人の提供、より不利な財・サービス・保険・与信の条件の提示、その他の差別、(c) 広告又はマーケティング、(d) 個人・公衆衛生・社会に害を及ぼしうる製品・サービスの開発、(e) 国内法の倫理規定に反する活動。"
  },
  {
   "id": "eu-dga-12",
   "inst": "eu-dga",
   "cite": "12条",
   "title": "Article 12 — Conditions for providing data intermediation services",
   "axes": [
    "infra"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://eur-lex.europa.eu/eli/reg/2022/868/oj",
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
   "title": "UK GDPR Article 84C — Safeguards for processing for research etc purposes",
   "axes": [
    "stat",
    "exit",
    "academic"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://www.legislation.gov.uk/ukpga/2025/18/section/86",
   "text": "3項 承認された医学研究を除き、特定のデータ主体に関する措置又は決定を目的とする処理は、本条の保障措置に適合しない。"
  },
  {
   "id": "uk-gdpr-retained",
   "inst": "uk-gdpr",
   "cite": "（全体構成）",
   "title": "UK GDPR ── EU GDPRの継承と英国独自条文",
   "axes": [
    "purpose",
    "consent",
    "vendor",
    "proctor",
    "minor",
    "erase",
    "deleg"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://www.legislation.gov.uk/eur/2016/679/contents",
   "text": "legislation.gov.uk はEU由来法令として、IP completion day（2020年12月31日23時）までの内容に英国による後の改正を反映して提供する。目次は第1条から第99条までを備えるほか、英国独自に 4A条、8ZA条、22A条〜22D条（自動化された意思決定）、44A条、45A条〜45C条、47A条、49A条（国際移転）が加えられている。"
  },
  {
   "id": "uk-transfer",
   "inst": "uk-gdpr",
   "cite": "44A条・45A〜45C条・47A条・49A条",
   "title": "国際移転（英国独自条文）",
   "axes": [
    "transfer"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://www.legislation.gov.uk/eur/2016/679/contents",
   "text": "EU GDPR第5章の構成を維持しつつ、44A条（移転の一般原則）、45A条（regulations による移転の承認）、45B条（データ保護テスト）、45C条（モニタリング）、47A条、49A条（公益による制限）が英国独自に加えられている。"
  },
  {
   "id": "uk-dpa-part6",
   "inst": "uk-dpa",
   "cite": "第6部（142条〜159条）",
   "title": "Enforcement（執行）",
   "axes": [
    "enforce"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://www.legislation.gov.uk/ukpga/2018/12",
   "text": "第6部が情報コミッショナー（ICO）による執行を定める。142条〜145条 情報通知、146条〜148条 評価通知、149条〜153条 執行通知、154条 立入検査の権限、155条〜159条 制裁金（157条が制裁金の上限額を定める）。"
  },
  {
   "id": "eu-gdpr-92",
   "inst": "eu-gdpr",
   "cite": "92条",
   "title": "Exercise of the delegation（委任の行使）",
   "axes": [
    "deleg"
   ],
   "status": "explicit",
   "verified": false,
   "src": "https://www.legislation.gov.uk/eur/2016/679/article/92/adopted",
   "text": "委任法令を採択する権限の行使条件を定め、委任の期間、理事会・議会による撤回、異議申立ての手続を置く。"
  },
  {
   "id": "uk-dpa-171",
   "inst": "uk-dpa",
   "cite": "s.171",
   "title": "Re-identification of de-identified personal data",
   "axes": [
    "reident"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://www.legislation.gov.uk/ukpga/2018/12/section/171",
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
   "src": "https://www.legislation.gov.uk/ukpga/2025/18/section/86",
   "text": "UK GDPRに84A〜84C条を挿入し、DPA 2018 s.19を削除する。"
  },
  {
   "id": "us-ferpa-def",
   "inst": "us-ferpa",
   "cite": "20 U.S.C. §1232g(a)(4)(A)",
   "title": "Family educational and privacy rights ── (a)(4)(A) education records の定義",
   "axes": [
    "eddata",
    "deleg",
    "minor",
    "purpose"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://www.law.cornell.edu/uscode/text/20/1232g",
   "text": "\"education records\" とは、(i) 学生に直接関係する情報を含み、かつ (ii) 教育機関又はそのために行為する者が保持する記録、ファイル、文書その他の資料をいう。"
  },
  {
   "id": "us-ferpa-dir",
   "inst": "us-ferpa",
   "cite": "20 U.S.C. §1232g(a)(5)",
   "title": "(a)(5)(A) directory information の定義",
   "axes": [
    "eddata"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://www.law.cornell.edu/uscode/text/20/1232g",
   "text": "氏名、住所、電話番号、生年月日、在籍課程等は、事前の通知とオプトアウトの機会を与えれば開示できる。"
  },
  {
   "id": "us-ferpa-studies",
   "inst": "us-ferpa",
   "cite": "34 C.F.R. §99.31(a)(6)",
   "title": "Under what conditions is prior consent not required to disclose information? ── (a)(6) studies exception",
   "axes": [
    "stat",
    "exit",
    "vendor",
    "academic"
   ],
   "status": "partial",
   "verified": true,
   "src": "https://www.ecfr.gov/current/title-34/section-99.31",
   "text": "教育機関のため又はその代わりに、予測テストの開発・検証・実施、学生援助プログラムの運営、又は指導の改善を目的とする研究を行う組織に対し、同意なく開示できる。研究終了後の情報破棄等が条件。"
  },
  {
   "id": "us-ferpa-audit",
   "inst": "us-ferpa",
   "cite": "34 C.F.R. §99.35",
   "title": "What conditions apply to disclosure of information for Federal or State program purposes?",
   "axes": [
    "stat"
   ],
   "status": "partial",
   "verified": true,
   "src": "https://www.ecfr.gov/current/title-34/section-99.35",
   "text": "教育プログラムの監査・評価、又は連邦・州の法令遵守の執行のために、権限ある代表者へ開示できる。"
  },
  {
   "id": "us-ferpa-deid",
   "inst": "us-ferpa",
   "cite": "34 C.F.R. §99.31(b)",
   "title": "(b) 非識別化された記録・情報の開示",
   "axes": [
    "reident"
   ],
   "status": "partial",
   "verified": true,
   "src": "https://www.ecfr.gov/current/title-34/section-99.31",
   "text": "学生の身元が合理的に判明しないよう、すべての個人識別情報を除去した記録は、同意なく開示できる。"
  },
  {
   "id": "us-ferpa-enf",
   "inst": "us-ferpa",
   "cite": "20 U.S.C. §1232g(f)",
   "title": "(f) Enforcement（執行）",
   "axes": [
    "enforce",
    "purpose"
   ],
   "status": "partial",
   "verified": true,
   "src": "https://www.law.cornell.edu/uscode/text/20/1232g",
   "text": "長官は本条の遵守を確保するため適切な措置をとる（連邦資金の停止を含む）。"
  },
  {
   "id": "us-coppa-consent",
   "inst": "us-coppa",
   "cite": "15 U.S.C. §6502",
   "title": "Regulation of unfair and deceptive acts and practices in connection with collection and use of personal information from and about children on the Internet",
   "axes": [
    "minor"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://www.law.cornell.edu/uscode/text/15/6502",
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
   "verified": true,
   "text": "この法律は、個人情報の処理及び保護に関する事項を定めることにより、個人の自由と権利を保護し、さらに個人の尊厳と価値を具現することを目的とする。"
  },
  {
   "id": "kr-pipa-23",
   "inst": "kr-pipa",
   "cite": "23条",
   "title": "민감정보의 처리 제한（センシティブ情報の処理制限）",
   "axes": [
    "proctor"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://elaw.klri.re.kr/eng_service/lawViewContent.do?hseq=62389",
   "text": "1項 思想・信条、労働組合や政党への加入・脱退、政治的見解、健康、性生活等に関する情報その他情報主体の私生活を著しく侵害するおそれのある個人情報であって大統領令で定めるものの処理を原則として禁止する。例外は、他の個人情報の処理への同意とは別個に同意を得た場合、及び他の法令が要求又は許容する場合。"
  },
  {
   "id": "kr-pipa-26",
   "inst": "kr-pipa",
   "cite": "26条",
   "title": "Restriction on Personal Information Processing Subsequent to Entrustment of Work（業務委託）",
   "axes": [
    "vendor"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://elaw.klri.re.kr/eng_service/lawViewContent.do?hseq=62389",
   "text": "1項 委託は文書により行い、他目的での処理の防止、技術的・管理的保護措置等を記載する。／2項 委託業務の内容と受託者を、情報主体がいつでも容易に確認できる方法で公開する。／4項 受託者を教育し、処理状況の点検等により監督する。／5項・6項 受託者は委託範囲外の利用・第三者提供を禁じられ、再委託には委託者の同意を要する。／7項 受託者が法に違反して生じた損害については、受託者を委託者の被用者とみなす。"
  },
  {
   "id": "kr-pipa-28-8",
   "inst": "kr-pipa",
   "cite": "28条の8",
   "title": "Cross-Border Transfer of Personal Information（国外移転）",
   "axes": [
    "transfer"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://elaw.klri.re.kr/eng_service/lawViewContent.do?hseq=62389",
   "text": "1項 国外への提供（照会を含む）、業務委託処理、保管を原則として禁止し、次の場合に認める。1号 情報主体から別途の同意を得た場合、2号 法律又は条約に特別の規定がある場合、3号 情報主体との契約の締結・履行に必要な場合（プライバシーポリシーでの開示又は通知が条件）、4号 保護委員会が認定した認証を受け必要な保護措置を講じた場合、5号 委員会が移転先の保護水準を実質的に同等と認めた場合。"
  },
  {
   "id": "kr-pipa-28-2",
   "inst": "kr-pipa",
   "cite": "28条の2",
   "title": "仮名情報の処理等",
   "axes": [
    "stat",
    "academic"
   ],
   "status": "explicit",
   "verified": true,
   "text": "1項 個人情報処理者は、統計作成、科学的研究、公益的記録保存等のために、本人の同意なく仮名情報を処理することができる。／2項 第三者に提供する場合、特定の個人を識別しうる情報を含めてはならない。"
  },
  {
   "id": "kr-pipa-28-3",
   "inst": "kr-pipa",
   "cite": "28条の3",
   "title": "仮名情報の結合制限",
   "axes": [
    "infra",
    "deleg"
   ],
   "status": "explicit",
   "verified": true,
   "text": "異なる個人情報処理者が処理した仮名情報の結合は、保護委員会又は関係中央行政機関の長が指定する専門機関が行う。結合された情報を当該機関の外に搬出するには、専門機関の長の承認を要する。"
  },
  {
   "id": "kr-pipa-28-4",
   "inst": "kr-pipa",
   "cite": "28条の4",
   "title": "仮名情報の安全措置義務等",
   "axes": [
    "reident",
    "erase"
   ],
   "status": "explicit",
   "verified": true,
   "text": "原状に復元するために必要な追加情報を分離して保管・管理するなど、安全性確保のための措置を講じなければならない。処理に関する記録を作成・保管し、仮名情報を破棄した場合も記録を破棄日から3年以上保管しなければならない。"
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
   "verified": true,
   "text": "1項 特定の個人を識別する目的で仮名情報を処理してはならない。／2項 処理の過程で特定の個人を識別しうる情報が生成された場合、直ちに処理を中止し、遅滞なく回収・破棄しなければならない。"
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
   "verified": true,
   "text": "28条の2又は28条の3により処理される仮名情報には、20条、20条の2、27条、34条1項、35条、35条の2、36条及び37条を適用しない。"
  },
  {
   "id": "kr-pipa-37-2",
   "inst": "kr-pipa",
   "cite": "4条6号・37条の2",
   "title": "自動化された決定に対する権利",
   "axes": [
    "auto"
   ],
   "status": "explicit",
   "verified": true,
   "text": "4条6号 本人は、完全に自動化された処理による決定を受け入れないことを求め、又はその説明を求める権利を有する。／37条の2（自動化された決定に対する情報主体の権利）がこれを具体化する。"
  },
  {
   "id": "kr-pipa-fine",
   "inst": "kr-pipa",
   "cite": "64条の2",
   "title": "Imposition of Penalty Surcharges（課徴金の賦課）",
   "axes": [
    "enforce"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://elaw.klri.re.kr/eng_service/lawViewContent.do?hseq=62389",
   "text": "1項 保護委員会は、各号のいずれかに該当する場合、全体売上高の100分の3を超えない範囲で課徴金を賦課することができる。売上高がない場合又は売上高の算定が困難な場合として大統領令で定める場合は、20億ウォンを超えない課徴金を賦課することができる。対象となる違反類型は1項1号〜9号。"
  },
  {
   "id": "kr-pipa-child",
   "inst": "kr-pipa",
   "cite": "22条の2",
   "title": "아동의 개인정보 보호（児童の個人情報の保護）",
   "axes": [
    "minor"
   ],
   "status": "explicit",
   "verified": true,
   "src": "https://elaw.klri.re.kr/eng_service/lawViewContent.do?hseq=62389",
   "text": "1項 満14歳未満の児童の個人情報の処理に同意が必要な場合は、法定代理人の同意を得て、その同意の有無を確認しなければならない。／2項 法定代理人の同意を得るために必要な最小限の情報は、法定代理人の同意なく児童から直接収集できる。／3項 満14歳未満の児童に処理に関する事項を知らせるときは、児童が容易に理解できる形式と言語を用いなければならない。"
  },
  {
   "id": "kr-ai-high",
   "inst": "kr-ai",
   "cite": "2条4号",
   "title": "高影響AIの定義と教育分野の射程",
   "axes": [
    "auto"
   ],
   "status": "explicit",
   "verified": false,
   "text": "人の生命・身体の安全及び基本的権利に重大な影響を及ぼし、又はそのおそれのあるAIであって、同号に列挙された分野で用いられるものをいう。教育については「幼児教育・初等教育・中等教育における学生評価」が列挙される。末尾の号で大統領令による分野の追加が可能。"
  }
 ]
};
