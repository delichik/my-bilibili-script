// ==UserScript==
// @name        Emby danmuku
// @namespace   Violentmonkey Scripts
// @grant       none
// @version     1.0.0
// @author      delichik
// @downloadURL     https://raw.githubusercontent.com/delichik/my-script/main/emby-danmuku.js
// @description 2023/8/11 23:14:11
// @match        *://*/web/index.html
// ==/UserScript==


(function () {
  'use strict';
  var script = document.createElement('script');
  script.src = "https://danmaku.movie.kg/ext.js";
  document.body.appendChild(script);
  document.body.innerHTML += '<link rel="stylesheet" href="https://danmaku.movie.kg/ext.css"/>';
})();
