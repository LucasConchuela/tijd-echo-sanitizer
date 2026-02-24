// ==UserScript==
// @name         Tijd & Lecho Article Redirector
// @namespace    https://github.com/LucasConchuela/tijd-echo-sanitizer
// @version      1.0
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

    // Check if the URL ends exactly with .html
    // This automatically prevents an infinite loop on .html1 pages
    if (currentUrl.endsWith('.html')) {
        // Instantly replace the current URL with the new one
        window.location.replace(currentUrl + '1');
    }
})();
