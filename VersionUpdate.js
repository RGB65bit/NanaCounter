const NowVersion = "v1.0.2"
document.getElementById("Version").textContent = NowVersion
/*2026-09-21:v1.0
正式版公開
2026-09-28:v1.0.1
index.htmlを仮実装した
2026-09-28:v1.0.2
index.htmlを本実装
それに伴って、index.htmlの内部CSSをCommonCounterStyle.cssに統合
index.htmlにCounterProsessor.jsのscriptタグが抜けていたのを修正
VersionUpdate.js(<-つまり本ファイル)の書き方をちょいと弄った(バージョン表記を一旦変数を介すようにした。)
後々どこかで使うようの配列：UpdateLogの枠を用意した。
*/

/*
const UpdateLog = [
  {
    "Index":,
    "Date":"",
    "Version":"",
    "Description":""
  }
]
*/
