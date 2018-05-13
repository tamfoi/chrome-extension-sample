console.log("contentascript");

chrome.runtime.sendMessage({
  method: "setLocalStrageItem",
  argument: {
    key: "contentscript",
    value: "contentscript",
  }
});

chrome.runtime.sendMessage({method: "getLocalStorageAllItem"}, function (response) {
  console.log(`contentscript : ${response.contentscript} , background : ${response.background} , optionspage : ${response.optionspage} `);  
});
