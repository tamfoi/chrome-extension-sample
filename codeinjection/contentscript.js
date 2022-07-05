console.log("contentscript");

/**
 * JavaScriptファイルを注入する
 * @param {String} filePath 注入するファイルのパス
 */
const injectScriptFile = (filePath) => {
  const body = document.getElementsByTagName("body")[0];
  const script = document.createElement("script");
  script.setAttribute("src", chrome.runtime.getURL(filePath));
  body.appendChild(script);
};

/**
 * CSSファイルを注入する
 * @param {String} filePath 注入するファイルのパス
 */
const injectStyleFile = (filePath) => {
  const head = document.getElementsByTagName("head")[0];
  const link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("href", chrome.runtime.getURL(filePath));
  head.appendChild(link);
};

injectScriptFile("injectscript.js");
injectStyleFile("injectstyle.css");
