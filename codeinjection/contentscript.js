console.log("contentscript");

/**
 * インラインスクリプトとしてJavaScriptを注入する
 * @param {String} scriptText 注入するJavaScript
 */
const injectScriptText = (scriptText) => {
  const body = document.getElementsByTagName("body")[0];
  const script = document.createElement("script");
  script.innerHTML = scriptText;
  body.appendChild(script);
};

/**
 * JavaScriptファイルを注入する
 * @param {String} filePath 注入するファイルのパス
 */
const injectScriptFile = (filePath) => {
  const body = document.getElementsByTagName("body")[0];
  const script = document.createElement("script");
  script.setAttribute("src", chrome.extension.getURL(filePath));
  body.appendChild(script);
};

/**
 * styleタグでCSSを注入する
 * @param {String} styleText 注入するCSS
 */
const injectStyleText = (styleText) => {
  const head = document.getElementsByTagName("head")[0];
  const style = document.createElement("style");
  style.innerHTML = styleText;
  head.appendChild(style);
};

/**
 * CSSファイルを注入する
 * @param {String} filePath 注入するファイルのパス
 */
const injectStyleFile = (filePath) => {
  const head = document.getElementsByTagName("head")[0];
  const link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("href", chrome.extension.getURL(filePath));
  head.appendChild(link);
};

injectScriptText("console.log('injectScriptText');");
injectScriptFile("injectscript.js");
injectStyleText("body{background-color: #efefef;}");
injectStyleFile("injectstyle.css");
