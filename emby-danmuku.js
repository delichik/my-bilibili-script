// ==UserScript==
// @name        Emby danmuku
// @namespace   Violentmonkey Scripts
// @grant       none
// @version     1.0.1
// @author      delichik
// @downloadURL     https://raw.githubusercontent.com/delichik/my-script/main/emby-danmuku.js
// @description 2023/8/11 23:14:11
// @match        *://*/web/index.html
// ==/UserScript==


(function () {
  'use strict';

  function loadJs(srcUrl) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = srcUrl
      document.body.appendChild(script)
      script.onload = () => {
        resolve()
      }
      script.onerror = (err) => {
        reject(err)
      }
    })
  }

  function loadCss(hrefUrl) {
    return new Promise((resolve, reject) => {
      const linkNodes = [].slice.call(document.querySelectorAll('link')).map(item => item.href)
      if (linkNodes.includes(hrefUrl)) return resolve()
      const link = document.createElement('link')
      link.type = 'text/css'
      link.rel = 'stylesheet'
      link.href = hrefUrl
      document.head.appendChild(link)
      link.onload = () => {
        resolve()
      }
      link.onerror = (err) => {
        reject(err)
      }
    })
  }

  var old = window.onload
  window.onload = function() {
    old();
    loadJs('https://danmaku.movie.kg/ext.js');
    loadCss('https://danmaku.movie.kg/ext.css');
  }
})();
