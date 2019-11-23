'use strict';

let func = function() {
  document.documentElement.requestFullscreen()
}

let funcStr = '(' + func.toString() + ')()'

let cssStr = `
.app_content[class] {
  max-width: 1600px;
}
.readerContent .app_content[class] {
  background-color: transparent;
}
.readerTopBar[class] {
  position: static;
}
.readerChapterContent[class] {
  zoom: 1.25;
  margin: auto 0;
}
.readerChapterContent[class] span[class] {
  zoom: 1
}
.readerControls[class] {
  right: 0;
  margin-left: 0;
  left: initial;
}
body::-webkit-scrollbar {
  width: 0;
}
`

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  if (tab.url.match('weread.qq.com/web/reader/')) {
    chrome.tabs.executeScript({
      code: funcStr
    });
    chrome.tabs.insertCSS({
      code: cssStr
    });
  }
});