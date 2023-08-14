// ==UserScript==
// @name          Emby danmuku
// @namespace     Violentmonkey Scripts
// @version       1.0.3
// @author        delichik
// @downloadURL   https://raw.githubusercontent.com/delichik/my-script/main/emby-danmuku.js
// @description   2023/8/11 23:14:11
// @run-at        document-end
// @match         *://*/web/index.html
// @grant         GM_xmlhttpRequest
// @grant         GM_addStyle
// ==/UserScript==

(function () {
  'use strict';
  GM_xmlhttpRequest({
    url: 'https://danmaku.movie.kg/ext.js',
    onload: (response) => {
      eval(response.responseText);
    },
  });
  GM_xmlhttpRequest({
    url: 'https://danmaku.movie.kg/ext.css',
    onload: (response) => {
      GM_addStyle(response.responseText);
    },
  });
})();
