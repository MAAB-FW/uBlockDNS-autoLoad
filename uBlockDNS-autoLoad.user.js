// ==UserScript==
// @name         uBlockDNS Auto Load More
// @namespace    https://github.com/MAAB-FW/uBlockDNS-autoLoad
// @version      1.0.0
// @description  Automatically click Load more for infinite scrolling.
// @match        https://ublockdns.com/*
// @grant        none
// @run-at       document-idle
// @license      MIT
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ublockdns.com
// @downloadURL  https://github.com/MAAB-FW/uBlockDNS-autoLoad/raw/main/uBlockDNS-autoLoad.user.js
// @updateURL    https://github.com/MAAB-FW/uBlockDNS-autoLoad/raw/main/uBlockDNS-autoLoad.user.js
// ==/UserScript==

(() => {
  "use strict";

  const BUTTON_SELECTOR = "button[data-slot='button']";
  const BUTTON_TEXT = "Load more";
  const CLICK_DELAY = 1000;

  let timeoutId = null;

  function clickLoadMore() {
    const buttons = document.querySelectorAll(BUTTON_SELECTOR);

    for (const button of buttons) {
      if (
        button.textContent.trim() === BUTTON_TEXT &&
        !button.disabled
      ) {
        button.click();
        return;
      }
    }
  }

  function scheduleClick() {
    if (timeoutId !== null) return;

    timeoutId = setTimeout(() => {
      timeoutId = null;
      clickLoadMore();
    }, CLICK_DELAY);
  }

  const observer = new MutationObserver(scheduleClick);

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  scheduleClick();
})();
