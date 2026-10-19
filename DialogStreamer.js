function DispCredit(){
  document.getElementById("Dialog").showModal()
  document.getElementById("DialogHeader").textContent = "クレジット"
  document.getElementById("DialogCont").textContent = `\n【使用フォント】\nGoogle Fonts（https://fonts.google.com）より\n・Mochiy Pop One（デフォルト）\n・Google Sans（第一段フォント変更時、英数字のみ）\n・Noto Sans JP（第一段フォント変更時、英数字以外）\n・Kaisei Tokumin（第二段フォント変更時）\n\n【顔ドアップ画像（アイコン）、および背景画像】\n・にじさんじ公式サイト内、珠乃井ナナのページより\n（https://www.nijisanji.jp/talents/l/nana-tamanoi）\n\n【プログラミング・設計】\n・RGB65bit / ろこびっと\nhttps://x.com/RGB65bit \n（問い合わせはこちらにお寄せください）\n\n（また、サイトを製作するにあたり、LLMの出力を参考にした部分がございます。特に、URLパラメータの正規判定などです。）`
  document.getElementById("DialogCont").setSelectionRange(0, 0)
}
function DispUpd8Log(){
  document.getElementById("Dialog").showModal()
  document.getElementById("DialogHeader").textContent = "更新情報"
  document.getElementById("DialogCont").textContent = `${UpdateLog.toReversed().map(log => `日時: ${log.Date}\nバージョン: ${log.Version}\n更新内容: ${log.Description}\n\n`).join('')}`//日付ごとにまとめるのもあり
  document.getElementById("DialogCont").setSelectionRange(0, 0)
}
function CloseDialog(){
  document.getElementById("Dialog").close()
}
function DispSetting(){
  document.getElementById("Setting").showModal()
  document.getElementById("SettingDialogHeader").textContent = "各種設定"
}
function CloseSetting(){
  document.getElementById("Setting").close()
}
document.getElementById("CreditButton").addEventListener("click", DispCredit)
document.getElementById("Upd8LogButton").addEventListener("click", DispUpd8Log)
document.getElementById("DialogClose").addEventListener("click", CloseDialog)
document.getElementById("SettingDisp").addEventListener("click",DispSetting)
document.getElementById("SettingClose").addEventListener("click", CloseSetting)

/*
<dialog id="Setting">
  <h2 id="SettingDialogHeader"></h2>
  <h3>外観・デザイン</h3>
  <h4>背景画像</h4>
  <input type="file">
  <h4>アイコン画像</h4>
  <input type="file">
  <div id="ButtonToCenter">
    <button id="SettingClose">閉じる</button>
  </div>
</dialog>
*/