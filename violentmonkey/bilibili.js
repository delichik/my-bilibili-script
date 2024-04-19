// ==UserScript==
// @name            Bilibili优化
// @namespace       Violentmonkey Scripts
// @match           *://www.bilibili.com/video/*
// @version         1.0.0
// @author          delichik
// @description     2021/7/29 下午10:03:46
// @grant           GM_setValue
// @grant           GM_getValue
// @grant           GM_deleteValue
// @run-at          document-start
// @connect         *
// @require         https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js
// @downloadURL     https://raw.githubusercontent.com/delichik/my-script/main/violentmonkey/bilibili.js
// ==/UserScript==

(function () {
  'use strict';

  setInterval(() => {
    if ($(".bui-collapse-body") && $(".bui-collapse-body").height() == 0) {
      $(".bui-collapse-header").click();
    }

    let items = document.querySelectorAll('.bpx-player-ending-related-item-cancel');
    for (let item of items) {
      if (item.style.display == 'none') {
        continue;
      }
      item.click();
    }
  }, 100);
})();
