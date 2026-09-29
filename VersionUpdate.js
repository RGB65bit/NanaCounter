const UpdateLog = [
  {
    Date:"20260921",
    Version:"v1.0.0",
    Description:"完成"
  },
  {
    Date:"20260928",
    Version:"v1.1.0",
    Description:"index.htmlを仮実装した"
  },
  {
    Date:"20260928",
    Version:"v1.1.1",
    Description:"index.htmlを本実装。それに伴って、index.htmlの内部CSSをCommonCounterStyle.cssに統合。index.htmlにCounterProsessor.jsのscriptタグが抜けていたのを修正。VersionUpdate.js(<-つまり本ファイル)の書き方をちょいと弄った(バージョン表記を一旦変数を介すようにした。)。後々どこかで使うようの配列：UpdateLogの枠を用意した。"
  },
  {
    Date:"20260928",
    Version:"v1.1.2",
    Description:"このJSがバグっていたので修正"
  },
  {
    Date:"20260928",
    Version:"v1.1.3",
    Description:"このログの書式をいじくった。バージョンをどうやって扱うかを変更し、このログを定義してからこのログの最後の、キーVersionの値を読むようにした。"
  },
  {
    Date:"20260929",
    Version:"v1.1.4",
    Description:"まーだなんか書式がおかしかったので修正。ついでにconsole.debugで全部出力するようにした。"
  }
]

const NowVersion = UpdateLog[UpdateLog.length - 1].Version
document.getElementById("Version").textContent = NowVersion
console.debug(UpdateLog)
