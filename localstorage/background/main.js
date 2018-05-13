console.log("background");

localStorage.background = "background";

console.log(`contentscript : ${localStorage.contentscript} , background : ${localStorage.background} , optionspage : ${localStorage.optionspage} `);

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  switch(message.method){
    case "getLocalStorageAllItem": 
      sendResponse(localStorage);
      break;
    case "setLocalStrageItem":
      localStorage.setItem(message.argument.key,message.argument.value);
      break;
    default:
      console.log(`${message.method} is not defined`);
      break;
  }
});