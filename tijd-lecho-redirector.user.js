// ==UserScript==
// @name         Tijd & Lecho Article Redirector
// @namespace    https://github.com/LucasConchuela/tijd-echo-sanitizer
// @version      1.2
// @description  Automatically appends a 1 to article URLs on tijd.be and lecho.be to bypass restrictions
// @author       LucasConchuela
// @match        *://www.tijd.be/*
// @match        *://www.lecho.be/*
// @run-at       document-start
// @grant        none
// @homepageURL  https://github.com/LucasConchuela/tijd-echo-sanitizer
// @supportURL   https://github.com/LucasConchuela/tijd-echo-sanitizer/issues
// @updateURL    https://raw.githubusercontent.com/LucasConchuela/tijd-echo-sanitizer/main/tijd-lecho-redirector.user.js
// @downloadURL  https://raw.githubusercontent.com/LucasConchuela/tijd-echo-sanitizer/main/tijd-lecho-redirector.user.js
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    const currentUrl = window.location.href;
    const pathname = window.location.pathname;

    // Only redirect actual article pages, not section/category pages.
    // Articles live under subdirectories (e.g. /entreprises/.../article.html),
    // while section pages sit at the root (e.g. /monargent.html).
    // Also checks for .html to prevent infinite loops on .html1 pages.
    const isArticle = pathname.split('/').length > 2;

    if (isArticle && currentUrl.endsWith('.html')) {
        // Stop page loading first — required for Chrome, where location.replace
        // at document-start can be ignored if the page hasn't committed yet
        window.stop();
        window.location.replace(currentUrl + '1');
    }
})();
