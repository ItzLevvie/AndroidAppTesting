// ==UserScript==
// @name         Android App Testing - Google Play
// @namespace    https://play.google.com/store/apps
// @version      0.0.1
// @description  LOC
// @author       You
// @match        https://play.google.com/apps/testing/*
// @icon         https://www.gstatic.com/android/market_images/web/favicon_v2.ico
// @require      https://releases.jquery.com/git/jquery-git.js
// ==/UserScript==

setTimeout(function() {
    location.reload();
    $("input.action").click();
}, 1000);