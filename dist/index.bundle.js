/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Anton&family=Bungee+Shade&family=Concert+One&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --main-bg: rgb(167, 171, 175);\n    --bg-grid: black;\n    --bg-cell: rgb(172, 239, 241);\n    --font-guide-lg: 1.5rem;\n    --font-guide-sm: .7rem;\n    --gap-lg: 3px;\n    --gap-sm: 2px;\n    --button-fg-disable: grey;\n    --button-fg-normal: black;\n    --button-bg-disable: darkgrey;\n    --button-bg-normal: white;\n    --button-font-size: 2rem;\n    --board-hit: darkred;\n    --board-hover: aqua;\n    --board-miss: grey;\n    --board-selected: yellow;\n    --board-ship: green;\n    --side-size: 10;\n    --check-outter: rgb(215, 244, 252);\n    --check-inner: rgb(252, 210, 132);\n    --head-bg: rgb(235, 230, 230);\n    --toggle: rgb(255, 187, 0);\n}\n\nhtml,\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n    margin: 0;\n    height: 100vh;\n    width: 100vw;\n}\n\nbutton {\n    background-color: var(--button-bg-normal);\n    color: var(--button-fg-normal);\n    border: 5px solid var(--button-fg-normal);\n    font-size: var(--button-font-size);\n    width: 100%;\n}\n\nbutton:disabled {\n    background-color: var(--button-bg-disable);\n    color: var(--button-fg-disable);\n    border-color: var(--button-fg-disable);\n}\n\n#main-container {\n    background-color: var(--main-bg);\n    height: 100%;\n    width: 100%;\n    box-sizing: border-box;\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    margin: 0;\n}\n\n#header,\n#footer {\n    max-height: 100px;\n    background-color: var(--head-bg);\n    display: flex;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n}\n\n#header {\n    align-self: flex-start;\n    min-height: min-content;\n    grid-row: 1 / 2;\n    padding: 0 2rem;\n}\n\n#header > h1 {\n    font-family: 'Bungee Shade', sans-serif;\n    color: rgb(179, 116, 0);\n    font-size: 3rem;\n    margin: 0;\n}\n\n#footer {\n    align-self: flex-end;\n    color:rgb(148, 147, 147);\n    justify-content: center;\n    grid-row: 3/ 4;\n}\n\n/* styling for all grid displays */\n.grid-box {\n    font-size: var(--font-guide-lg);\n    aspect-ratio: 1 / 1;\n    background-color: var(--bg-grid);\n    display: grid;\n    grid-template-columns: repeat(var(--side-size), 1fr);\n    gap: var(--gap-lg);\n}\n\n.grid-box > div {\n    padding: 0;\n    position: relative;\n    user-select: none;\n    background-color: var(--bg-cell);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#set-container > .grid-box > div{\n    width: 2rem;\n    height: 2rem;\n}\n\n.guide-top,\n.guide-corner {\n    margin-bottom: calc(var(--gap-lg) * .66);\n}\n\n.guide-left,\n.guide-corner {\n    margin-right: calc(var(--gap-lg) * .66);\n}\n\n.guide-corner {\n    background-color: var(--bg-grid) !important;\n}\n\n/* Styling for all grid icons */\n.ship {\n    background-color: var(--board-ship) !important;\n}\n\n.miss {\n    background-color: var(--board-miss) !important;\n}\n\n.hit {\n    background-color: var(--board-hit) !important;\n}\n\n.selected {\n    background-color: var(--board-selected) !important;\n}\n\n.hover {\n    background-color: yellow !important;\n}\n\n.set {\n    background-color: green !important;\n}\n\n.set.hover {\n    background-color: darkgrey !important;\n}\n\n/* Styling for notifications */\n.gameover-container,\n.turn-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n}\n\n.gameover-container {\n    background-color: transparent;\n}\n\n.turn-container {\n    background-color: var(--main-bg);\n}\n\n.gameover-content,\n.turn-content {\n    text-align: center;\n    background-color: var(--main-bg);\n    display: flex;\n    flex-direction: column;\n    padding: 2rem;\n}\n\n/* Styling for set display */\n#set-container {\n    justify-self: center;\n    grid-row: 2 / 3;\n    width: min-content;\n    display: flex;\n    flex-direction: column;\n    flex: 0 1 100%;\n    gap: .5rem;\n    margin: .5rem 0;\n}\n\n.set-tray {\n    background-color: lightgrey;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n\n}\n\n.tray-item {\n    position: relative;\n    display: grid;\n    justify-content:left;\n    align-items: center;\n    padding: 1rem;\n}\n\n.icon-piece {\n    position: relative;\n    grid-column: 1 / -1;\n    grid-row: 1 / -1;\n    border: var(--gap-sm) solid black;\n    background-color: black;\n    display: flex;\n    gap: var(--gap-sm);\n}\n\n.icon-piece.icon-disable>div:not(#dragged) {\n    background-color: grey !important;\n}\n\n.icon-cell {\n    background-color: var(--bg-cell);\n    aspect-ratio: 1 / 1;\n}\n\n.drag-cell {\n    opacity: 0.5;\n    background-color: grey;\n}\n\n#dragged {\n    z-index: 9;\n    opacity: 0.5;\n    position: absolute !important;\n}\n\n.drag-y {\n    flex-direction: column;\n}\n\n.toggle-rotate {\n    transform: rotate(90deg);\n}\n\n#toggle-bar {\n    width: min-content;\n    display: flex;\n    width: 100%;\n    gap: 1rem;\n}\n\n#toggle-container {\n    position: relative;\n}\n\n#toggle-text {\n    font-size: 2rem;\n    user-select: none;\n    position: absolute;\n    left: 50%;\n    top:  50%;\n    transform: translate(-50%, -50%);\n}\n\n\n#toggle-body {\n    transition: transform 0.25s;\n    position: relative;\n    height: 80px;\n    width: 80px;\n    background-color: var(--toggle);\n    border-radius: 40px;\n}\n\n#toggle-body:after {\n    position: absolute;\n    height: 0;\n    width: 0;\n    top: 20px;\n    left: 70px;\n    content: '';\n    border: 20px solid transparent;\n    border-left-color: var(--toggle);\n}\n\n#inst-container {\n    width: 100%;\n    background-color: var(--head-bg);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 5px solid var(--button-fg-disable);\n}\n\n#inst-ul {\n    padding: 0;\n    margin: 0;\n    user-select: none;\n    font-family: 'Concert One', cursive;\n    color: var(--button-fg-disable);\n}\n\n#submit-bar {\n    display: flex;\n}\n\n#submit-bar button {\n    height: 100%;\n}\n\n#submit-bc {\n    width: 100%;\n}\n\n#submit-mc {\n    background-color: var(--check-inner);\n    font-family: 'Anton', sans-serif;\n    width: min-content;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    border: 5px solid black;\n}\n\n#submit-mc.is-multi {\n    background-color: var(--main-bg);\n}\n\n#submit-mc.is-multi > #submit-mc-2,\n#submit-mc.is-multi > #submit-mc-m {\n    background-color: var(--button-fg-disable);\n}\n\n#submit-mc-2,\n#submit-mc-m {\n    font-size: 1.25rem;\n    background-color: var(--check-outter);\n}\n\n#submit-mc-2 {\n    display: flex;\n    flex-direction: column;\n    padding: 3px 5px;\n    display: flex;\n    align-items: center;\n    grid-column: 1 / 2;\n    grid-row: 1 / 3;\n    line-height: 1.2;\n}\n\n#submit-mc-m {\n    padding: 5px;\n    line-height: 1;\n    grid-column: 2 / 3;\n    grid-row: 1 /2;\n}\n\n\n#submit-chk {\n    margin: 1rem;\n    height: 1.25rem;\n    width: 1.25rem;\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n}\n\n\n\n/* Styling for play displays */\n.play-container {\n    justify-self: center;\n    grid-row: 2 / 3;\n    margin: 0 .5rem;\n    width: min-content;\n    height: min-content;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr;\n    position: relative;\n    gap: 1rem;\n}\n\n.play-container > .grid-box.play-status > div{\n    transition: background-color .75s;\n    height: 1rem;\n    width: 1rem;\n}\n.play-container > .grid-box.play-area > div.hit {\n    transition: background-color 1s;\n}\n\n.play-container > .grid-box.play-area > div{\n    height: 2rem;\n    width: 2rem;\n}\n\n.play-status {\n    grid-row: 1 / 2;\n    font-size: var(--font-guide-sm);\n    aspect-ratio: 1 / 1;\n    width: min-content;\n    gap: var(--gap-sm);\n}\n\n.play-status .guide-left {\n    margin-right: calc(var(--gap-sm) * .66);\n}\n\n.play-status .guide-top {\n    margin-bottom: calc(var(--gap-sm) * .66);\n}\n\n.play-area {\n    font-size: var(--font-guide-lg);\n    aspect-ratio: 1 / 1;\n    width: 100%;\n    gap: var(--gap-lg);\n}\n\n.play-area > .open-cell:hover {\n    background-color: var(--board-hover) !important;\n}\n\n.play-button {\n    width: 100%;\n}\n\n@media (max-width: 390px) {\n    #set-container > .grid-box > div { \n        width: 1.5rem;\n        height: 1.5rem;\n    }\n}\n\n/* set configuration for thinner phones */\n\n/* mobile horizontal settings */\n@media (max-height: 450px) {\n    #header > h1 {\n        font-size: 2rem;\n    }\n    /* set settings */\n    #inst-ul {\n        font-size: .7rem;\n    }\n    #set-container > .grid-box > div{\n        font-size: 1rem;\n        width: 1.5rem;\n        height: 1.5rem;\n    }\n    #toggle-body {\n        height: 60px;\n        width: 60px;\n        border-radius: 30px;\n    }\n    #toggle-body:after {\n        top: 15px;\n        left: 50px;\n        border-width: 15px;\n    }\n    .tray-item {\n        padding: .5rem;\n    }\n\n}\n\n/* horizontal configuration */\n@media (min-width: 1050px) or (max-height: 650px) {\n    /* set settings */\n    #set-container {\n        display: grid;\n        grid-column: 1fr 1fr;\n        align-items: center;\n    }\n    #set-container > .grid-box {\n        grid-column: 1 / 2;\n        grid-row: 1 / 4;\n    }\n    .set-tray {\n        grid-row: 2 / 3;\n        grid-column: 2 / 3;\n    }\n    #toggle-bar {\n        height: min-content;\n        grid-row: 1 / 2;\n        grid-column: 2 / 3;\n    }\n    #toggle-container {\n        display: flex;\n        align-items: center;\n    }\n\n    /* play settings */\n    .play-container > .grid-box.play-status > div{\n        height: 1rem;\n        width: 1rem;\n    }\n    \n    .play-container > .grid-box.play-area > div{\n        height: 1.4rem;\n        width: 1.4rem;\n    }\n    .play-container {\n        justify-self: center;\n        max-width: 1000px;\n        display: grid;\n        grid-template-columns: 2fr 1fr;\n        grid-template-rows: 1fr;\n    }\n\n    .play-area {\n        grid-row: 1 / 3;\n        grid-column: 1 / 2;\n    }\n\n    .play-status {\n        grid-row: 1 / 2;\n        grid-column: 2 / 3;\n        width: 100%;\n    }\n\n}\n\n@media (min-width: 1050px) and (min-height: 651px) {\n    .play-button {\n        grid-row: 3 / 4;\n        grid-column: 1 / 2;\n    }\n}\n\n@media (max-height: 650px) {\n    .play-button {\n        font-size: 1.5rem;\n    }\n    \n    .play-button {\n        grid-row: 2 / 3;\n        grid-column: 2 / 3;\n    }\n}\n\n\n@media (min-width: 1050px) and (min-height: 651px) {\n    .play-container > .grid-box.play-status > div{\n        height: 1.5rem;\n        width: 1.5rem;\n    }\n    \n    .play-container > .grid-box.play-area > div{\n        height: 3rem;\n        width: 3rem;\n    }\n}\n\n/* mobile vertical settings */\n@media (max-width: 390px) and (max-height: 855px) {\n    #set-container > .grid-box > div{\n        font-size: 1rem;\n        width: 1.4rem;\n        height: 1.4rem;\n    }\n\n    #toggle-body {\n        height: 60px;\n        width: 60px;\n        border-radius: 30px;\n    }\n\n    #toggle-body:after {\n        top: 15px;\n        left: 50px;\n        border-width: 15px;\n    }\n\n    .tray-item {\n        padding: .5rem;\n    }\n\n    #header > h1 {\n        font-size: 2rem;\n    }\n    #inst-ul {\n        font-size: .7rem;\n    }\n\n    .play-container > .grid-box.play-status > div{\n        height: .9rem;\n        width: .9rem;\n    }\n    \n    .play-container > .grid-box.play-area > div{\n        height: 1.8rem;\n        width: 1.8rem;\n    }\n}\n\n\n\n/* set configuration for full screen */\n@media (min-width: 1050px) {\n    #set-container > .grid-box > div {\n        width: 3rem;\n        height: 3rem;\n    }\n\n    #inst-container { \n        padding: 1rem;\n    }\n\n    #submit-bar {\n        max-height: 100px;\n        grid-row: 3 / 4;\n        grid-column: 2 / 3;\n    }\n\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Anton&family=Bungee+Shade&family=Concert+One&display=swap');\n:root {\n    --main-bg: rgb(167, 171, 175);\n    --bg-grid: black;\n    --bg-cell: rgb(172, 239, 241);\n    --font-guide-lg: 1.5rem;\n    --font-guide-sm: .7rem;\n    --gap-lg: 3px;\n    --gap-sm: 2px;\n    --button-fg-disable: grey;\n    --button-fg-normal: black;\n    --button-bg-disable: darkgrey;\n    --button-bg-normal: white;\n    --button-font-size: 2rem;\n    --board-hit: darkred;\n    --board-hover: aqua;\n    --board-miss: grey;\n    --board-selected: yellow;\n    --board-ship: green;\n    --side-size: 10;\n    --check-outter: rgb(215, 244, 252);\n    --check-inner: rgb(252, 210, 132);\n    --head-bg: rgb(235, 230, 230);\n    --toggle: rgb(255, 187, 0);\n}\n\nhtml,\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n    margin: 0;\n    height: 100vh;\n    width: 100vw;\n}\n\nbutton {\n    background-color: var(--button-bg-normal);\n    color: var(--button-fg-normal);\n    border: 5px solid var(--button-fg-normal);\n    font-size: var(--button-font-size);\n    width: 100%;\n}\n\nbutton:disabled {\n    background-color: var(--button-bg-disable);\n    color: var(--button-fg-disable);\n    border-color: var(--button-fg-disable);\n}\n\n#main-container {\n    background-color: var(--main-bg);\n    height: 100%;\n    width: 100%;\n    box-sizing: border-box;\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    margin: 0;\n}\n\n#header,\n#footer {\n    max-height: 100px;\n    background-color: var(--head-bg);\n    display: flex;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n}\n\n#header {\n    align-self: flex-start;\n    min-height: min-content;\n    grid-row: 1 / 2;\n    padding: 0 2rem;\n}\n\n#header > h1 {\n    font-family: 'Bungee Shade', sans-serif;\n    color: rgb(179, 116, 0);\n    font-size: 3rem;\n    margin: 0;\n}\n\n#footer {\n    align-self: flex-end;\n    color:rgb(148, 147, 147);\n    justify-content: center;\n    grid-row: 3/ 4;\n}\n\n/* styling for all grid displays */\n.grid-box {\n    font-size: var(--font-guide-lg);\n    aspect-ratio: 1 / 1;\n    background-color: var(--bg-grid);\n    display: grid;\n    grid-template-columns: repeat(var(--side-size), 1fr);\n    gap: var(--gap-lg);\n}\n\n.grid-box > div {\n    padding: 0;\n    position: relative;\n    user-select: none;\n    background-color: var(--bg-cell);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#set-container > .grid-box > div{\n    width: 2rem;\n    height: 2rem;\n}\n\n.guide-top,\n.guide-corner {\n    margin-bottom: calc(var(--gap-lg) * .66);\n}\n\n.guide-left,\n.guide-corner {\n    margin-right: calc(var(--gap-lg) * .66);\n}\n\n.guide-corner {\n    background-color: var(--bg-grid) !important;\n}\n\n/* Styling for all grid icons */\n.ship {\n    background-color: var(--board-ship) !important;\n}\n\n.miss {\n    background-color: var(--board-miss) !important;\n}\n\n.hit {\n    background-color: var(--board-hit) !important;\n}\n\n.selected {\n    background-color: var(--board-selected) !important;\n}\n\n.hover {\n    background-color: yellow !important;\n}\n\n.set {\n    background-color: green !important;\n}\n\n.set.hover {\n    background-color: darkgrey !important;\n}\n\n/* Styling for notifications */\n.gameover-container,\n.turn-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n}\n\n.gameover-container {\n    background-color: transparent;\n}\n\n.turn-container {\n    background-color: var(--main-bg);\n}\n\n.gameover-content,\n.turn-content {\n    text-align: center;\n    background-color: var(--main-bg);\n    display: flex;\n    flex-direction: column;\n    padding: 2rem;\n}\n\n/* Styling for set display */\n#set-container {\n    justify-self: center;\n    grid-row: 2 / 3;\n    width: min-content;\n    display: flex;\n    flex-direction: column;\n    flex: 0 1 100%;\n    gap: .5rem;\n    margin: .5rem 0;\n}\n\n.set-tray {\n    background-color: lightgrey;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n\n}\n\n.tray-item {\n    position: relative;\n    display: grid;\n    justify-content:left;\n    align-items: center;\n    padding: 1rem;\n}\n\n.icon-piece {\n    position: relative;\n    grid-column: 1 / -1;\n    grid-row: 1 / -1;\n    border: var(--gap-sm) solid black;\n    background-color: black;\n    display: flex;\n    gap: var(--gap-sm);\n}\n\n.icon-piece.icon-disable>div:not(#dragged) {\n    background-color: grey !important;\n}\n\n.icon-cell {\n    background-color: var(--bg-cell);\n    aspect-ratio: 1 / 1;\n}\n\n.drag-cell {\n    opacity: 0.5;\n    background-color: grey;\n}\n\n#dragged {\n    z-index: 9;\n    opacity: 0.5;\n    position: absolute !important;\n}\n\n.drag-y {\n    flex-direction: column;\n}\n\n.toggle-rotate {\n    transform: rotate(90deg);\n}\n\n#toggle-bar {\n    width: min-content;\n    display: flex;\n    width: 100%;\n    gap: 1rem;\n}\n\n#toggle-container {\n    position: relative;\n}\n\n#toggle-text {\n    font-size: 2rem;\n    user-select: none;\n    position: absolute;\n    left: 50%;\n    top:  50%;\n    transform: translate(-50%, -50%);\n}\n\n\n#toggle-body {\n    transition: transform 0.25s;\n    position: relative;\n    height: 80px;\n    width: 80px;\n    background-color: var(--toggle);\n    border-radius: 40px;\n}\n\n#toggle-body:after {\n    position: absolute;\n    height: 0;\n    width: 0;\n    top: 20px;\n    left: 70px;\n    content: '';\n    border: 20px solid transparent;\n    border-left-color: var(--toggle);\n}\n\n#inst-container {\n    width: 100%;\n    background-color: var(--head-bg);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 5px solid var(--button-fg-disable);\n}\n\n#inst-ul {\n    padding: 0;\n    margin: 0;\n    user-select: none;\n    font-family: 'Concert One', cursive;\n    color: var(--button-fg-disable);\n}\n\n#submit-bar {\n    display: flex;\n}\n\n#submit-bar button {\n    height: 100%;\n}\n\n#submit-bc {\n    width: 100%;\n}\n\n#submit-mc {\n    background-color: var(--check-inner);\n    font-family: 'Anton', sans-serif;\n    width: min-content;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    border: 5px solid black;\n}\n\n#submit-mc.is-multi {\n    background-color: var(--main-bg);\n}\n\n#submit-mc.is-multi > #submit-mc-2,\n#submit-mc.is-multi > #submit-mc-m {\n    background-color: var(--button-fg-disable);\n}\n\n#submit-mc-2,\n#submit-mc-m {\n    font-size: 1.25rem;\n    background-color: var(--check-outter);\n}\n\n#submit-mc-2 {\n    display: flex;\n    flex-direction: column;\n    padding: 3px 5px;\n    display: flex;\n    align-items: center;\n    grid-column: 1 / 2;\n    grid-row: 1 / 3;\n    line-height: 1.2;\n}\n\n#submit-mc-m {\n    padding: 5px;\n    line-height: 1;\n    grid-column: 2 / 3;\n    grid-row: 1 /2;\n}\n\n\n#submit-chk {\n    margin: 1rem;\n    height: 1.25rem;\n    width: 1.25rem;\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n}\n\n\n\n/* Styling for play displays */\n.play-container {\n    justify-self: center;\n    grid-row: 2 / 3;\n    margin: 0 .5rem;\n    width: min-content;\n    height: min-content;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr;\n    position: relative;\n    gap: 1rem;\n}\n\n.play-container > .grid-box.play-status > div{\n    transition: background-color .75s;\n    height: 1rem;\n    width: 1rem;\n}\n.play-container > .grid-box.play-area > div.hit {\n    transition: background-color 1s;\n}\n\n.play-container > .grid-box.play-area > div{\n    height: 2rem;\n    width: 2rem;\n}\n\n.play-status {\n    grid-row: 1 / 2;\n    font-size: var(--font-guide-sm);\n    aspect-ratio: 1 / 1;\n    width: min-content;\n    gap: var(--gap-sm);\n}\n\n.play-status .guide-left {\n    margin-right: calc(var(--gap-sm) * .66);\n}\n\n.play-status .guide-top {\n    margin-bottom: calc(var(--gap-sm) * .66);\n}\n\n.play-area {\n    font-size: var(--font-guide-lg);\n    aspect-ratio: 1 / 1;\n    width: 100%;\n    gap: var(--gap-lg);\n}\n\n.play-area > .open-cell:hover {\n    background-color: var(--board-hover) !important;\n}\n\n.play-button {\n    width: 100%;\n}\n\n@media (max-width: 390px) {\n    #set-container > .grid-box > div { \n        width: 1.5rem;\n        height: 1.5rem;\n    }\n}\n\n/* set configuration for thinner phones */\n\n/* mobile horizontal settings */\n@media (max-height: 450px) {\n    #header > h1 {\n        font-size: 2rem;\n    }\n    /* set settings */\n    #inst-ul {\n        font-size: .7rem;\n    }\n    #set-container > .grid-box > div{\n        font-size: 1rem;\n        width: 1.5rem;\n        height: 1.5rem;\n    }\n    #toggle-body {\n        height: 60px;\n        width: 60px;\n        border-radius: 30px;\n    }\n    #toggle-body:after {\n        top: 15px;\n        left: 50px;\n        border-width: 15px;\n    }\n    .tray-item {\n        padding: .5rem;\n    }\n\n}\n\n/* horizontal configuration */\n@media (min-width: 1050px) or (max-height: 650px) {\n    /* set settings */\n    #set-container {\n        display: grid;\n        grid-column: 1fr 1fr;\n        align-items: center;\n    }\n    #set-container > .grid-box {\n        grid-column: 1 / 2;\n        grid-row: 1 / 4;\n    }\n    .set-tray {\n        grid-row: 2 / 3;\n        grid-column: 2 / 3;\n    }\n    #toggle-bar {\n        height: min-content;\n        grid-row: 1 / 2;\n        grid-column: 2 / 3;\n    }\n    #toggle-container {\n        display: flex;\n        align-items: center;\n    }\n\n    /* play settings */\n    .play-container > .grid-box.play-status > div{\n        height: 1rem;\n        width: 1rem;\n    }\n    \n    .play-container > .grid-box.play-area > div{\n        height: 1.4rem;\n        width: 1.4rem;\n    }\n    .play-container {\n        justify-self: center;\n        max-width: 1000px;\n        display: grid;\n        grid-template-columns: 2fr 1fr;\n        grid-template-rows: 1fr;\n    }\n\n    .play-area {\n        grid-row: 1 / 3;\n        grid-column: 1 / 2;\n    }\n\n    .play-status {\n        grid-row: 1 / 2;\n        grid-column: 2 / 3;\n        width: 100%;\n    }\n\n}\n\n@media (min-width: 1050px) and (min-height: 651px) {\n    .play-button {\n        grid-row: 3 / 4;\n        grid-column: 1 / 2;\n    }\n}\n\n@media (max-height: 650px) {\n    .play-button {\n        font-size: 1.5rem;\n    }\n    \n    .play-button {\n        grid-row: 2 / 3;\n        grid-column: 2 / 3;\n    }\n}\n\n\n@media (min-width: 1050px) and (min-height: 651px) {\n    .play-container > .grid-box.play-status > div{\n        height: 1.5rem;\n        width: 1.5rem;\n    }\n    \n    .play-container > .grid-box.play-area > div{\n        height: 3rem;\n        width: 3rem;\n    }\n}\n\n/* mobile vertical settings */\n@media (max-width: 390px) and (max-height: 855px) {\n    #set-container > .grid-box > div{\n        font-size: 1rem;\n        width: 1.4rem;\n        height: 1.4rem;\n    }\n\n    #toggle-body {\n        height: 60px;\n        width: 60px;\n        border-radius: 30px;\n    }\n\n    #toggle-body:after {\n        top: 15px;\n        left: 50px;\n        border-width: 15px;\n    }\n\n    .tray-item {\n        padding: .5rem;\n    }\n\n    #header > h1 {\n        font-size: 2rem;\n    }\n    #inst-ul {\n        font-size: .7rem;\n    }\n\n    .play-container > .grid-box.play-status > div{\n        height: .9rem;\n        width: .9rem;\n    }\n    \n    .play-container > .grid-box.play-area > div{\n        height: 1.8rem;\n        width: 1.8rem;\n    }\n}\n\n\n\n/* set configuration for full screen */\n@media (min-width: 1050px) {\n    #set-container > .grid-box > div {\n        width: 3rem;\n        height: 3rem;\n    }\n\n    #inst-container { \n        padding: 1rem;\n    }\n\n    #submit-bar {\n        max-height: 100px;\n        grid-row: 3 / 4;\n        grid-column: 2 / 3;\n    }\n\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOMControl.js":
/*!***************************!*\
  !*** ./src/DOMControl.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayBoard": () => (/* binding */ PlayBoard),
/* harmony export */   "initializeDOM": () => (/* binding */ initializeDOM)
/* harmony export */ });
/* harmony import */ var _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMHelpers.js */ "./src/DOMHelpers.js");


// First page load builder
function initializeDOM(size) {
    const container = (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', { id: 'main-container' });
    document.querySelector(':root').style.setProperty('--side-size', size + 1);
    // hack to prevent unwanted dragging
    document.querySelector('body').setAttribute('ondragstart', 'return false;');
    document.querySelector('body').setAttribute('ondrop', 'return false');
    container.appendChild((0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', { id: 'header' }));
    container.querySelector('#header').appendChild((0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('h1', {}, 'BATTLESHIP'));
    container.appendChild((0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', { id: 'footer' }));
    container.querySelector('#footer').appendChild((0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('p', {}, '&copy; 2022 Jimmy Quadros'));
    document.body.appendChild(container);
}

// Display for the general play area
class PlayBoard {
    constructor(size, allShips) {
        this.SIZE = size;
        this.container = (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', { class: 'play-container' });
        this.container.appendChild((0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.buildGrid)(size, 'play-area'));
        this.container.appendChild((0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.buildGrid)(size, 'play-status'))
        this.container.appendChild((0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('button', { class: 'play-button', disabled: 'true' }, 'SELECT TARGET'));
        allShips.forEach(index => {
            this.updateStatus(index, 'ship');
        })
    }
    
    // getters for board elements
    getContainer() { return this.container; }
    getPlay() { return this.getContainer().querySelector('.play-area'); }
    getStatus() { return this.getContainer().querySelector('.play-status'); }
    getButton() { return this.getContainer().querySelector('.play-button'); }
    
    // Helpers to handle the displayed guides
    getGuideIndex(index) { return String.fromCharCode(65 + (index % this.SIZE)).concat(Math.floor(index / this.SIZE) + 1); }

    displayBoard() { document.querySelector('#main-container').appendChild(this.getContainer()); }
    removeBoard() { document.querySelector('.play-container').remove(); }

    // set the display's button text and disabled status
    setButton(index) {
        this.getButton().disabled = (index) ? false : true;
        this.getButton().innerHTML = (index) ? `ATTACK ${this.getGuideIndex(index)}` : `SELECT TARGET`; 
    };

    // switches a cell from open to selected
    toggleSelected(index) {
        const cell = this.getPlay().children.item((0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.adjustToIndex)(index, this.SIZE));
        cell.classList.toggle('open-cell');
        cell.classList.toggle('selected');
    }

    // set class for cell in the play grid
    updatePlay(index, toUpdate) {
        const cell = this.getPlay().children.item((0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.adjustToIndex)(index, this.SIZE));
        cell.classList.remove('selected');
        cell.classList.add(toUpdate);
    }

    // set class for cell in the status grid
    updateStatus(index, toUpdate) {
        const cell = this.getStatus().children.item((0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.adjustToIndex)(index, this.SIZE));
        cell.classList.add(toUpdate);
    }

    // display a privacy cover on turn switch-offs, takes a string for player's name, returns button
    createTurnCover(player) {
        const container = (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', { class: 'turn-container' });
        const content = (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', { class: 'turn-content' });
        const button = (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('button', { class: 'turn-button' }, 'READY');
        content.appendChild((0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('h1', {}, `${player.toUpperCase()}'s`));
        content.appendChild((0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('h1', {}, 'TURN'));
        content.appendChild(button);
        container.appendChild(content);
        this.getContainer().appendChild(container);
        return button;
    }

    clearTurnCover() {
        this.getContainer().querySelector('.turn-container').remove();
    }

    // display a gameover message with custon result string, returns button for binding
    createGameOver(result) {
        const container = (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', { class: 'gameover-container' });
        const content = (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', { class: 'gameover-content' });
        const button = (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('button', { class: 'gameover-button' }, 'PLAY AGAIN?')
        content.appendChild((0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('h1', {}, result));
        content.appendChild(button);
        container.appendChild(content);
        this.getContainer().appendChild(container);
        return button;
    }
}

/***/ }),

/***/ "./src/DOMHelpers.js":
/*!***************************!*\
  !*** ./src/DOMHelpers.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adjustToIndex": () => (/* binding */ adjustToIndex),
/* harmony export */   "buildGrid": () => (/* binding */ buildGrid),
/* harmony export */   "buildSetPlayer": () => (/* binding */ buildSetPlayer),
/* harmony export */   "makeDragIcon": () => (/* binding */ makeDragIcon),
/* harmony export */   "makeElement": () => (/* binding */ makeElement)
/* harmony export */ });
// Helper function for easy element creation
// use: (<string>, <object> of properties as you would use setAttribute, <string>innerHTML)
function makeElement(type, properties = {}, inner = null) {
    const element = document.createElement(type);
    for (let key in properties) { element.setAttribute(`${key}`, `${properties[key]}`) };
    if (inner) { element.innerHTML = inner };
    return element;
}

// Adjust an index value to compensate for any added guide values
function adjustToIndex(index, size) { 
    return (size + 1) * (index / size + 1) + 1;
}

// create a variably sized grid with guide measures on top and left hand side
function buildGrid(sideSize, addClass) {
    const SIZE = Math.pow(sideSize + 1, 2);
    const gridBox = makeElement('div', { class: 'grid-box' });
    if (addClass) { gridBox.classList.add(addClass); }
    let colValue = 65;
    let rowValue = 1;
    let cellIndex = 0;
    for (let i = 0; i < SIZE; i++) { 
        if (i === 0) { gridBox.appendChild(makeElement('div', { class: 'guide-corner' })) }
        else if (i <= sideSize) { gridBox.appendChild(makeElement('div', { class: 'guide-top' }, String.fromCharCode(colValue++))) }
        else if (i % (sideSize + 1) === 0) { gridBox.appendChild(makeElement('div', { class: 'guide-left'}, rowValue++)) }
        else { gridBox.appendChild(makeElement('div', { class: 'open-cell selectable', 'data-index': cellIndex++ })) };
    }
    return gridBox;
}

// setPlayer DOM builders

// container for icons indexes the icons on order added
function buildSetPlayer(size, pieces, isMulti) {
    const container = makeElement('div', { id: 'set-container' });
    container.appendChild(buildGrid(size));
    container.appendChild(buildToggleBar());
    container.appendChild(makeTray(pieces));
    container.appendChild(buildSubmitBar(isMulti));
    return container;
}

function buildSubmitBar(isMulti) {
    const container = makeElement('div', { id: 'submit-bar' });
    const buttonContainer = makeElement('div', { id: 'submit-bc' });
    buttonContainer.appendChild(makeElement('button', { id: 'submit-btn', disabled: 'true' }, 'CONTINUE'));
    container.appendChild(buttonContainer);
    container.appendChild(buildSetMulti(isMulti));
    return container;
}

function buildSetMulti(isMulti) {
    const container = makeElement('div', { id: 'submit-mc' });
    const two = makeElement('div', { id: 'submit-mc-2' });
    const check = makeElement('input', { type: 'checkbox', id: 'submit-chk' });
    if (isMulti) { 
        container.classList.add('is-multi');
        check.setAttribute('disabled', 'true') 
    };
    two.appendChild(makeElement('div', {}, 'T'));
    two.appendChild(makeElement('div', {}, 'W'));
    two.appendChild(makeElement('div', {}, 'O'));
    container.appendChild(two);
    container.appendChild(makeElement('div', { id: 'submit-mc-m' }, 'PLAY'));
    container.appendChild(check);
    return container;
}

function buildToggleBar() {
    const togglebar = makeElement('div', { id: 'toggle-bar' });
    const toggleContainer = makeElement('div', { id: 'toggle-container' })
    const toggleBody = makeElement('div', { id: 'toggle-body', 'data-y': 'false' });
    const toggleText = makeElement('div', { id: 'toggle-text' }, 'X');
    const instructCont = makeElement('div', {id: 'inst-container' });
    const instructUL = makeElement('ul', {id: 'inst-ul' });
    instructUL.appendChild(makeElement('li', {}, 'DRAG PIECES BELOW TO GRID'));
    instructUL.appendChild(makeElement('li', {}, 'LEFT TOGGLE TO SET DIRECTION'));
    instructUL.appendChild(makeElement('li', {}, 'ONCE ALL SET PRESS CONTINUE'));
    toggleBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('toggle-rotate')) {
            e.target.setAttribute('data-y', 'false');
            e.target.classList.remove('toggle-rotate');
            toggleText.innerHTML = 'X';
        } else {
            e.target.setAttribute('data-y', 'true');
            e.target.classList.add('toggle-rotate');
            toggleText.innerHTML = 'Y';
        }
    });
    toggleContainer.appendChild(toggleBody);
    toggleContainer.appendChild(toggleText);
    togglebar.appendChild(toggleContainer)
    instructCont.appendChild(instructUL);
    togglebar.appendChild(instructCont);
    return togglebar;
}

function makeTray(pieces) {
    const tray = makeElement('div', { class: 'set-tray' });
    let index = 0;
    for (let i = 0, j = Math.floor((pieces.length) / 2); j < pieces.length; i++, j++) {
        if (i < Math.floor(pieces.length / 2)) { 
            tray.appendChild(makeTrayItem(pieces[i]));
            tray.lastChild.firstChild.setAttribute('data-tray', `${index++}`);
        }
        tray.appendChild(makeTrayItem(pieces[j]));
        tray.lastChild.firstChild.setAttribute('data-tray', `${index++}`);
    }
    return tray;
}

// create holder for icons
function makeTrayItem(piece) {
    const item = makeElement('div', { class: 'tray-item' })
    item.appendChild(makePieceIcon(piece));
    return item;
}

// create icons
function makePieceIcon(size) {
    const icon = makeElement('div', { class: 'icon-piece' });
    for (let i = 0; i < size; i++) {
        const cell = makeElement('div', { class: 'icon-cell' });
        icon.appendChild(cell);
    }
    icon.dataset.size = size;
    return icon;
}

function makeDragIcon(size, vertical, tray, cellSize) {
    const dragIcon = makePieceIcon(Number(size));
    dragIcon.setAttribute('id', 'dragged');
    dragIcon.setAttribute('data-tray', tray);
    if (vertical) { dragIcon.classList.add('drag-y') }
    [...dragIcon.children].forEach(child => {
        child.style.height = cellSize;
        child.classList.add('drag-cell')
    });
    return dragIcon; 
}

/***/ }),

/***/ "./src/DragElement.js":
/*!****************************!*\
  !*** ./src/DragElement.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragElement": () => (/* binding */ DragElement)
/* harmony export */ });
// Create a draggable item

let element;
let xOff;
let yOff;
const moveHandler = move.bind(undefined);
const endHandler = end.bind(undefined);


function DragElement(elem, x, y) {
    element = elem;
    xOff = x;
    yOff = y;
    window.addEventListener('mousemove', moveHandler, true);
    window.addEventListener('mouseup', endHandler, true);
}


function move(e) {
    e = e || window.event;
    e.preventDefault();
    element.style.top = (e.clientY - yOff) + 'px';
    element.style.left = (e.clientX - xOff) + 'px';
}

function end(e) {
    window.removeEventListener('mousemove', moveHandler, true);
    window.removeEventListener('mouseup', endHandler, true);
}

/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship.js */ "./src/Ship.js");


class Gameboard {
    constructor(size) {
        this.SIZE = size;
        this.allShips = [];
        this.board = [];
        this.allHit = [];
        this.allMiss = [];
        this.allPlaced = [];
        for (let i = 0; i < size * size; i++) {
            this.board.push({ship: null, hit: false})
        }
    };

    getHit() {
        return this.allHit;
    }

    getMiss() {
        return this.allMiss;
    }

    getPlaced() {
        return this.allPlaced;
    }

    getSize() {
        return this.SIZE * this.SIZE;
    }

    isHit(index) {
        return this.board[index].hit;
    }

    // place new ship on gameboard returns ship or false if not legal placement
    addShip(shipSize, head, vertical = false) {
        // disallow placement beyond board's boundaries
        if (!vertical && ((head % this.SIZE) + shipSize > this.SIZE)) return false;
        if (vertical && (Math.floor(head / this.SIZE)) + shipSize > this.SIZE) return false;
        const toPlace = this.getIndeces(shipSize, head, vertical);
        // inspect for any overlapping conflict
        for (let i = 0; i < toPlace.length; i++) {
            if (this.board[toPlace[i]].ship) { return false;} 
        };
        const newShip = new _Ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(shipSize);
        toPlace.forEach(index => {
            this.allPlaced.push(index);
            this.board[index].ship = newShip
        });
        this.allShips.push(toPlace);
        return newShip;
    }

    // returns an array of a ship's sequential positioning
    getIndeces(size, head, vertical) {
        const indeces = [];
        if (vertical) {
            while (size-- > 0) {
                indeces.push(head);
                head += this.SIZE;
            };
        } else {
            while (size-- > 0) {
                indeces.push(head++);
            }
        }
        return indeces;
    }

    // sets attack actions, must be integer and within the gameboard, ignores spaces already hit
    receiveAttack(index) {
        if (typeof index != 'number') { throw new TypeError('value must be Number') };
        if (!Number.isInteger(index)) { throw new TypeError('Only integer values') };
        if (index < 0 || index >= this.board.length) { throw new RangeError(`value must be between 0 and ${this.board.length - 1}`); }
        if (this.board[index].hit) { return; }

        this.board[index].hit = true;
        if (this.board[index].ship) {
            this.board[index].ship.hit();
            this.allHit.push(index);
            return this.board[index].ship;
        } else {
            this.allMiss.push(index);
            return null;
        }
    }

    // confirms that the ship at each front position in allShips is sunk
    isSunk() {
        let sunk = true;
        this.allShips.forEach(ship => { 
            if (!this.board[ship[0]].ship.isSunk()) { sunk = false; }
        });
        return sunk;
    }
}


/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js");

// holds player's gameboard, can determine next move if cpu 
// pass an array of arrays in [ship size, ship index, is vertical(true/false)] format
// to populate the gameboard
class Player {
    constructor(name, toAdd) {
        this.SIZE = 10;
        this.name = name;
        this.board = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard(this.SIZE);
        this.nextMove = [];
        if (toAdd) { toAdd.forEach(ship => this.board.addShip(ship[0], ship[1], ship[2]) ); }
        else { this.randomBoard([5, 4, 3, 3, 2]).forEach(ship => {this.board.addShip(ship[0], ship[1], ship[2])} ); }
    };

    getName() {
        return this.name;
    }

    getAllShipIndex() {
        return this.board.getPlaced();
    }

    getMissIndex() {
        return this.board.getMiss();
    }

    getHitIndex() {
        return this.board.getHit();
    }

    // confirms if player is defeated
    isDefeated() {
        return this.board.isSunk();
    }

    // returns either the hit ship or null
    takeHit(index) {
        return (this.board.receiveAttack(index)) ? 'hit' : 'miss';
    }

    // confirms if a move is valid
    isValidMove(index) {
        if (index < 0 || index >= this.board.getSize()) { return false };
        return !this.board.isHit(index);
    }

    // takes a cpu turn against player, returns move taken
    cpuTurn() {
        let move;
        if (this.nextMove.length === 0) { move = this.randomMove(); }
        return move;
    }

    // elect a valid free space to attack from the gameboard
    randomMove() {
        const move = Math.floor(Math.random() * Math.pow(this.SIZE, 2));
        return (this.isValidMove(move)) ? move : this.randomMove();
    }

    // returns a set of [ship size, ship index, is vertical(true/false)] such that 
    // there is no overlap or conflics
    randomBoard(toAdd) {
        const allShips = [];
        const board = new Array(Math.pow(this.SIZE, 2));
        toAdd.forEach(ship => {
            const check = allShips.length;
            while (allShips.length === check) {
                const isY = (Math.random() < 0.5);
                const head = Math.floor(Math.random() * Math.pow(this.SIZE, 2));
                const toPlace = this.getCoord(ship, head, isY);
                if (toPlace[toPlace.length - 1] < Math.pow(this.SIZE, 2) 
                    && this.validShip(toPlace, isY) 
                    && this.validPlace(board, toPlace)) {
                        toPlace.forEach(cell => {
                            board[cell] = true});
                        allShips.push([ship, head, isY]);
                }
            }
        })
        return allShips;
    }

    // return an array of grid coordinates either x or y aligned
    getCoord(size, head, isY) {
        const arr = [];
        for (let i = 0; i < size; i++) {
            arr.push(head);
            if (isY) { head += this.SIZE; }
            else { head += 1 }
        }
        return arr;
    }

    // confirm if a sequence of indices are valid on a grid
    validShip(arr, isY) {
        return (isY) 
            ? (arr[0] % this.SIZE === arr[arr.length - 1] % this.SIZE)
            : (Math.floor(arr[0] / this.SIZE) === Math.floor(arr[arr.length - 1] / this.SIZE)); 
    }

    // check if any overlap exists between board and candidated indices
    validPlace(board, arr) {
        let valid = true;
        arr.forEach(index => {
            if (board[index]) { valid = false }
        })
        return valid;
    }
};


/***/ }),

/***/ "./src/SetPlayer.js":
/*!**************************!*\
  !*** ./src/SetPlayer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetPlayer": () => (/* binding */ SetPlayer)
/* harmony export */ });
/* harmony import */ var _DragElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DragElement.js */ "./src/DragElement.js");
/* harmony import */ var _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMHelpers.js */ "./src/DOMHelpers.js");



// Display for initialziing a player
class SetPlayer {
    constructor(size, pieces, isMulti) {
        this.SIZE = size;
        this.container = (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.buildSetPlayer)(size, pieces, isMulti);
        this.bindTray();
        this.dragEvent = {
            dragOver: null,
            dragGroup: []
        };
        this.setItem = [];
        this.dragPickUpStartHandler = this.dragPickUpStart.bind(this);
        this.dragMoveHandler = this.dragMove.bind(this);
        this.dragEndHandler = this.dragEnd.bind(this);
    }

    bindTray() {
        this.getContainer().querySelectorAll('.icon-piece').forEach(icon => {
            icon.addEventListener('mousedown', (e) => this.dragStart(e));
        });
    }

    getContainer() { return this.container; }
    getGrid() { return this.getContainer().querySelector('.grid-box'); }
    getTray() { return this.getContainer().querySelector('.set-tray'); }
    getButton() { return this.getContainer().querySelector('#submit-btn'); }
    getMulti() { return this.getContainer().querySelector('#submit-chk').checked }
    getData() {
        const data = {
            multi: this.getMulti(),
            board: []
        }
        this.setItem.forEach(item => {
            const add = [];
            add.push(item.size);
            add.push(item.head);
            add.push(item.setY);
            data.board.push(add);
        });
        return data;
    }

    // append setplayer to main container, sets initial height of all icon cells
    // binds window resizing to resize icons to match grid size
    display() { 
        document.querySelector('#main-container').appendChild(this.getContainer()); 
        this.setTrayIconSize()
        window.onresize = function() {
            const height = document.querySelector('.grid-box').children.item(11).clientHeight;
            document.querySelectorAll('.icon-cell').forEach(cell => {
                cell.style.height = `${height}px`;
            });
        };
    }

    // clear setplayer
    remove() { document.querySelector('#set-container').remove(); }

    // set the icon's cell size to match the grid's cell size
    setTrayIconSize() {
        document.querySelectorAll('.icon-cell').forEach(cell => {
            cell.style.height = this.GetTrayIconSize();
        });
    }

    GetTrayIconSize() {
        return `${this.getGrid().children.item((0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.adjustToIndex)(0, this.SIZE)).clientHeight}px`;
    }

    // All drag/drop actions to follow
    // creates and appends dragged icon, sets drag bindings
    dragStart(e) {
        const icon = (e.target.classList.contains('icon-cell')) ? e.target.parentNode : e.target;
        if (icon.classList.contains('icon-disable')) { return }
        const dragIcon = (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeDragIcon)(
            Number(icon.dataset.size),
            (document.querySelector('#toggle-body').dataset.y === 'true'),
            icon.dataset.tray,
            this.GetTrayIconSize()
            );
        icon.classList.add('icon-disable');
        icon.appendChild(dragIcon);
        const offset = (dragIcon.classList.contains('drag-y'))
            ? this.getYoffset(dragIcon, e.clientX - dragIcon.getBoundingClientRect().left)
            : 0;
        if (!dragIcon.classList.contains('drag-y')) { 
            this.setXAttribute(dragIcon, e.clientX - dragIcon.getBoundingClientRect().left); 
        };
        (0,_DragElement_js__WEBPACK_IMPORTED_MODULE_0__.DragElement)(dragIcon, e.clientX - offset, e.clientY); 
        document.querySelector('#main-container').addEventListener('mouseleave', this.dragEndHandler);
        document.querySelector('#main-container').addEventListener('mousemove', this.dragMoveHandler, true);
        document.querySelector('#main-container').addEventListener('mouseup', this.dragEndHandler, true);
    }

    dragPickUpStart(e) {
        let index = 0;
        while (this.setItem[index].tray != Number(e.target.dataset.gettray)) { index++; }
        const select = this.setItem[index];
        const dragItem = (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeDragIcon)(
            select.size,
            (document.querySelector('#toggle-body').dataset.y === 'true'),
            select.tray,
            this.GetTrayIconSize()
        )
        e.target.appendChild(dragItem);
        this.configPickUp(dragItem, (document.querySelector('#toggle-body').dataset.y === 'true'));
        (0,_DragElement_js__WEBPACK_IMPORTED_MODULE_0__.DragElement)(dragItem, e.clientX, e.clientY);
        this.removePlaced(select.head, select.size, select.setY);
        this.setItem.splice(index, 1);
        document.querySelector('#main-container').addEventListener('mouseleave', this.dragEndHandler);
        document.querySelector('#main-container').addEventListener('mousemove', this.dragMoveHandler, true);
        document.querySelector('#main-container').addEventListener('mouseup', this.dragEndHandler, true);

        this.getButton().disabled = true;
    }

    // Configure position and data attributes when picking up from the board
    configPickUp(element, isY) {
        element.style.top = '0px';
        element.style.left = '0px';
        this.setXAttribute(element, 0);
    }

    // clears all cells of placed object's bindings
    removePlaced(headIndex, length, isY) {
        let cell = this.getGrid().children.item((0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.adjustToIndex)(headIndex, this.SIZE));
        for (let i = 0; i < length; i++) {
            cell.classList.remove('set');
            cell.removeAttribute('data-gettray');
            cell.removeEventListener('mousedown', this.dragPickUpStartHandler, true);
            const nextCell = (isY) 
                ? Number(cell.dataset.index) + this.SIZE 
                : Number(cell.dataset.index) + 1;
            cell = this.getGrid().children.item((0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.adjustToIndex)(nextCell, this.SIZE));
        }
    }

    setXAttribute(element, xPos) {
        const left = Math.floor(xPos / element.firstChild.clientWidth);
        element.setAttribute('data-left', left);
        element.setAttribute('data-right', element.childElementCount - left - 1);
    }

    getYoffset(element, xPos) {
        const offset = xPos - (element.clientWidth / 2)
        element.style.left = `${offset}px`;
        return offset;
    }

    // on drag investigate if element below cursor is a valid hover target
    // and adjust displayed hover targets
    dragMove(e) {
        e = e || window.event;
        e.preventDefault();
        const icon = document.querySelector('#dragged');
        icon.style.visibility = 'hidden';
        let below = document.elementFromPoint(e.clientX, e.clientY);
        icon.style.visibility = 'visible';
        if (below.classList.contains('selectable') 
            && this.dragEvent.dragOver != below) {
                this.clearHover();
                if (icon.classList.contains('drag-y')) {
                    this.setHoverY(
                        below,
                        icon.childElementCount);
                } else {
                    this.setHoverX(
                        below, 
                        Number(icon.dataset.left),
                        Number(icon.dataset.right));
                }
        } else if (!below.classList.contains('selectable')) {
            this.clearHover();
        }
    }

    // Function to clear dragged actions
    dragEnd(e) {
        e = e || window.event;
        e.preventDefault();
        let validSet = true;
        const dragItem = document.querySelector('#dragged');
        if (dragItem.childElementCount === this.dragEvent.dragGroup.length) {
            this.dragEvent.dragGroup.forEach(cell => {
                if (cell.classList.contains('set')) { validSet = false;}
            })
        } else { validSet = false; }
        if (validSet) {
            this.dragEvent.dragGroup.forEach(cell => { 
                cell.classList.add('set'); 
                cell.setAttribute('data-gettray', dragItem.dataset.tray);
                cell.addEventListener('mousedown', this.dragPickUpStartHandler, true);
            });
            this.setItem.push({
                tray: Number(dragItem.dataset.tray),
                head: (dragItem.classList.contains('drag-y')) 
                    ? Number(this.dragEvent.dragGroup[0].dataset.index) 
                    : Number(this.dragEvent.dragGroup[0].dataset.index - dragItem.dataset.left),
                setY: dragItem.classList.contains('drag-y'),
                size: dragItem.childElementCount
            })
        } else {
            document.querySelector('.set-tray')
            .children.item(Number(dragItem.dataset.tray))
            .firstChild.classList
            .remove('icon-disable');
        }

        if (this.getTray().childElementCount === this.setItem.length) {
            this.getButton().disabled = false;
        } else {
            this.getButton().disabled = true;
        }

        document.querySelector('#dragged').remove();
        this.clearHover();
        document.querySelector('#main-container').removeEventListener('mouseleave', this.dragEndHandler);
        document.querySelector('#main-container').removeEventListener('mousemove', this.dragMoveHandler, true);
        document.querySelector('#main-container').removeEventListener('mouseup', this.dragEndHandler, true);
    }

    // Handle adding hover event
    setHoverX(cell, left, right) {  
        cell.classList.add('hover');
        this.dragEvent.dragOver = cell;        
        this.dragEvent.dragGroup.push(cell);
        this.hoverSiblings(cell, left, true);
        this.hoverSiblings(cell, right, false);                        
    }

    setHoverY(root, numSib) {
        const grid = document.querySelector('.grid-box');
        let index = Number(root.dataset.index);
        let toAdd = root;
        for (let i = 0; i < numSib; i++) {
            if (toAdd) {
                index = Number(toAdd.dataset.index);
                this.dragEvent.dragGroup.push(toAdd);
                toAdd.classList.add('hover');
                toAdd = grid.children.item((0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.adjustToIndex)(index + this.SIZE, this.SIZE));
            }
        }
    }
    
    // Helper function to highlight the correct neighboring siblings on hover
    hoverSiblings(root, numSib, left) {
        let toAdd = root;
        let index = Number(root.dataset.index);
        const row = Math.floor(index / this.SIZE);
        for (let i = 0; i < numSib; i++) {
            const check = (left) ? ((index - (i + 1)) / this.SIZE) : ((index + (i + 1)) / this.SIZE);
            if (row === Math.floor(check)) {
                toAdd = (left) ? toAdd.previousSibling : toAdd.nextSibling;
                toAdd.classList.add('hover'); 
                this.dragEvent.dragGroup.push(toAdd);
            }
        }
    }

    // resets set hover actions
    clearHover() {
        this.dragEvent.dragOver = null;
        this.dragEvent.dragGroup.forEach(cell => cell.classList.remove('hover'));
        this.dragEvent.dragGroup.length = 0;
    }   
}


/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
// basic unit used in game, must pass integer value to determine size

class Ship {
    // tests to ensure value is an integer number over 0
    constructor(size) {
        if (typeof size != 'number') { throw new TypeError('value must be Number') };
        if (size <= 0) { throw new RangeError('Value must be greater than 0') };
        if (!Number.isInteger(size)) { throw new TypeError('Only integer values') };
        this.size = size;
        this.hits = 0;
    }

    getHits() { return this.hits; }

    // increases ships hit value
    hit() {
        this.hits += 1;
    }

    // determines the state of the ship
    isSunk() {
        return this.hits >= this.size;
    }
}

/***/ }),

/***/ "./src/gameControl.js":
/*!****************************!*\
  !*** ./src/gameControl.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameControl": () => (/* binding */ GameControl)
/* harmony export */ });
/* harmony import */ var _DOMControl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMControl.js */ "./src/DOMControl.js");
/* harmony import */ var _SetPlayer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SetPlayer.js */ "./src/SetPlayer.js");
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player.js */ "./src/Player.js");




class GameControl {
    constructor() {
        this.SIZE = 10;
        this.player1 = { player: null, board: null };
        this.player2 = { player: null, board: null };
        this.multiplayer = false;
        this.selectMove = null;
        this.turnNumber = 0;
    }

    // begin the gameloop
    startGame() {
        (0,_DOMControl_js__WEBPACK_IMPORTED_MODULE_0__.initializeDOM)(this.SIZE);
        this.createPlayer();
    }

    // Creates first player, determines if second player is player or CPU
    createPlayer(isMulti) {
        const setPlayer = new _SetPlayer_js__WEBPACK_IMPORTED_MODULE_1__.SetPlayer(10, [5, 4, 3, 3, 2], isMulti);
        setPlayer.getButton().addEventListener('click', (e) => {
            const data = setPlayer.getData();
            setPlayer.remove();
            // set second player
            if (this.player1.player) { 
                this.player2.player = new _Player_js__WEBPACK_IMPORTED_MODULE_2__.Player('player2', data.board);
                this.player2.board = new _DOMControl_js__WEBPACK_IMPORTED_MODULE_0__.PlayBoard(this.SIZE, this.player2.player.getAllShipIndex());
                this.bindBoard(this.player2);
                this.getPlayerBoard()
                    .createTurnCover(this.getPlayer().getName())
                    .addEventListener('click', (e) => this.getPlayerBoard().clearTurnCover());
                this.getPlayerBoard().displayBoard();
            // set first player and prompt for second
            } else if (data.multi) {
                this.player1.player = new _Player_js__WEBPACK_IMPORTED_MODULE_2__.Player('player1', data.board);
                this.player1.board = new _DOMControl_js__WEBPACK_IMPORTED_MODULE_0__.PlayBoard(this.SIZE, this.player1.player.getAllShipIndex());
                this.bindBoard(this.player1);
                this.multiplayer = true;
                this.createPlayer(true);
            // set single player and set cpu player
            } else {
                this.player1.player = new _Player_js__WEBPACK_IMPORTED_MODULE_2__.Player('player1', data.board);
                this.player1.board = new _DOMControl_js__WEBPACK_IMPORTED_MODULE_0__.PlayBoard(this.SIZE, this.player1.player.getAllShipIndex());
                this.bindBoard(this.player1);
                this.player2.player = new _Player_js__WEBPACK_IMPORTED_MODULE_2__.Player('player2');
                this.player2.board = new _DOMControl_js__WEBPACK_IMPORTED_MODULE_0__.PlayBoard(this.SIZE, this.player2.player.getAllShipIndex());
                this.bindBoard(this.player2);
                this.getPlayerBoard().displayBoard();
            }
        });
        setPlayer.display();
    }

    // Determine the active player
    getPlayer() {
        return (this.turnNumber % 2 === 0) ? this.player1.player : this.player2.player; 
    }

    getPlayerBoard() {
        return (this.turnNumber % 2 === 0) ? this.player1.board : this.player2.board; 
    }

    // Determine the current non player
    getAdversary() {
        return (this.turnNumber % 2 === 0) ? this.player2.player : this.player1.player;
    }

    getAdversaryBoard() {
        return (this.turnNumber % 2 === 0) ? this.player2.board : this.player1.board;
    }

    // bindings for play area
    bindBoard(player) {
        const display = player.board;
        const button = display.getButton();
        
        // bind clickable cells
        display.getPlay().addEventListener('click', (e) => {
            if (!e.target.classList.contains('open-cell')) { return };
            if (this.selectMove) { display.toggleSelected(this.selectMove); }
            display.toggleSelected(e.target.dataset.index);
            this.selectMove = Number(e.target.dataset.index);
            display.setButton(e.target.dataset.index);
        });

        // bind attack button
        button.addEventListener('click', (e) => {
            display.setButton();
            this.takeTurn();
        });
    }

    // Function for action button, takes a player selected turn
    takeTurn() {
        const result = this.getAdversary().takeHit(this.selectMove);
        this.getPlayerBoard().updatePlay(this.selectMove, result);
        if (this.getAdversary().isDefeated()) { 
            this.getPlayerBoard()
                .createGameOver('YOU WIN!')
                .addEventListener('click', (e) => {
                    this.getPlayerBoard().removeBoard();
                    this.resetGame();
                    this.startGame();
            }); 
        }
        else if (this.multiplayer) { this.switchTurn(result); }
        else { this.cpuTurn(); }
    }

    // Renders move taken on player and reset selectMove
    startTurn(result) {
        this.getPlayerBoard().updateStatus(this.selectMove, result);
        this.selectMove = null;
    }

    // Prepares the play area to exchange players
    switchTurn(result) {
        const board = this.getAdversaryBoard();
        board.createTurnCover(this.getAdversary()
            .getName())
            .addEventListener('click', (e) => {
                board.clearTurnCover();
                this.startTurn(result);
            });
        board.displayBoard();
        this.getAdversaryBoard().removeBoard();
        this.turnNumber++;
    }

    // Simulate an adversary's turn
    cpuTurn() {
        this.selectMove = this.getPlayer().cpuTurn();
        const result = this.getPlayer().takeHit(this.selectMove);
        if (this.getPlayer().isDefeated()) { 
            this.getPlayer().getDisplay().createGameOver('YOU LOSE!'); 
        } else { this.startTurn(result); }
    }

    // clear all variable to default
    resetGame() {
            this.player1 = { player: null, board: null };
            this.player2 = { player: null, board: null };
            this.multiplayer = false;
            this.selectMove = null;
            this.turnNumber = 0;
    }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _gameControl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameControl.js */ "./src/gameControl.js");



const game = new _gameControl_js__WEBPACK_IMPORTED_MODULE_1__.GameControl();
game.startGame();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxPQUFPLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFFBQVEsS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsUUFBUSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxTQUFTLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVB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RUE7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUNySkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDd0I7O0FBRTdDLGlCQUFpQix3REFBVztBQUM1QiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvRE9NQ29udHJvbC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvRE9NSGVscGVycy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvRHJhZ0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvUGxheWVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9TZXRQbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL1NoaXAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWVDb250cm9sLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFudG9uJmZhbWlseT1CdW5nZWUrU2hhZGUmZmFtaWx5PUNvbmNlcnQrT25lJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1tYWluLWJnOiByZ2IoMTY3LCAxNzEsIDE3NSk7XFxuICAgIC0tYmctZ3JpZDogYmxhY2s7XFxuICAgIC0tYmctY2VsbDogcmdiKDE3MiwgMjM5LCAyNDEpO1xcbiAgICAtLWZvbnQtZ3VpZGUtbGc6IDEuNXJlbTtcXG4gICAgLS1mb250LWd1aWRlLXNtOiAuN3JlbTtcXG4gICAgLS1nYXAtbGc6IDNweDtcXG4gICAgLS1nYXAtc206IDJweDtcXG4gICAgLS1idXR0b24tZmctZGlzYWJsZTogZ3JleTtcXG4gICAgLS1idXR0b24tZmctbm9ybWFsOiBibGFjaztcXG4gICAgLS1idXR0b24tYmctZGlzYWJsZTogZGFya2dyZXk7XFxuICAgIC0tYnV0dG9uLWJnLW5vcm1hbDogd2hpdGU7XFxuICAgIC0tYnV0dG9uLWZvbnQtc2l6ZTogMnJlbTtcXG4gICAgLS1ib2FyZC1oaXQ6IGRhcmtyZWQ7XFxuICAgIC0tYm9hcmQtaG92ZXI6IGFxdWE7XFxuICAgIC0tYm9hcmQtbWlzczogZ3JleTtcXG4gICAgLS1ib2FyZC1zZWxlY3RlZDogeWVsbG93O1xcbiAgICAtLWJvYXJkLXNoaXA6IGdyZWVuO1xcbiAgICAtLXNpZGUtc2l6ZTogMTA7XFxuICAgIC0tY2hlY2stb3V0dGVyOiByZ2IoMjE1LCAyNDQsIDI1Mik7XFxuICAgIC0tY2hlY2staW5uZXI6IHJnYigyNTIsIDIxMCwgMTMyKTtcXG4gICAgLS1oZWFkLWJnOiByZ2IoMjM1LCAyMzAsIDIzMCk7XFxuICAgIC0tdG9nZ2xlOiByZ2IoMjU1LCAxODcsIDApO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iZy1ub3JtYWwpO1xcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWZnLW5vcm1hbCk7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLWJ1dHRvbi1mZy1ub3JtYWwpO1xcbiAgICBmb250LXNpemU6IHZhcigtLWJ1dHRvbi1mb250LXNpemUpO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYnV0dG9uOmRpc2FibGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJnLWRpc2FibGUpO1xcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWZnLWRpc2FibGUpO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1mZy1kaXNhYmxlKTtcXG59XFxuXFxuI21haW4tY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZyk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiNoZWFkZXIsXFxuI2Zvb3RlciB7XFxuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkLWJnKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIG1pbi1oZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIHBhZGRpbmc6IDAgMnJlbTtcXG59XFxuXFxuI2hlYWRlciA+IGgxIHtcXG4gICAgZm9udC1mYW1pbHk6ICdCdW5nZWUgU2hhZGUnLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogcmdiKDE3OSwgMTE2LCAwKTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiNmb290ZXIge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgY29sb3I6cmdiKDE0OCwgMTQ3LCAxNDcpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC1yb3c6IDMvIDQ7XFxufVxcblxcbi8qIHN0eWxpbmcgZm9yIGFsbCBncmlkIGRpc3BsYXlzICovXFxuLmdyaWQtYm94IHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LWd1aWRlLWxnKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctZ3JpZCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLXNpZGUtc2l6ZSksIDFmcik7XFxuICAgIGdhcDogdmFyKC0tZ2FwLWxnKTtcXG59XFxuXFxuLmdyaWQtYm94ID4gZGl2IHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY2VsbCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jc2V0LWNvbnRhaW5lciA+IC5ncmlkLWJveCA+IGRpdntcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG59XFxuXFxuLmd1aWRlLXRvcCxcXG4uZ3VpZGUtY29ybmVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1nYXAtbGcpICogLjY2KTtcXG59XFxuXFxuLmd1aWRlLWxlZnQsXFxuLmd1aWRlLWNvcm5lciB7XFxuICAgIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1nYXAtbGcpICogLjY2KTtcXG59XFxuXFxuLmd1aWRlLWNvcm5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWdyaWQpICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIGFsbCBncmlkIGljb25zICovXFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1zaGlwKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLW1pc3MpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1oaXQpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLXNlbGVjdGVkKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3cgIWltcG9ydGFudDtcXG59XFxuXFxuLnNldCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zZXQuaG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleSAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciBub3RpZmljYXRpb25zICovXFxuLmdhbWVvdmVyLWNvbnRhaW5lcixcXG4udHVybi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uZ2FtZW92ZXItY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi50dXJuLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmcpO1xcbn1cXG5cXG4uZ2FtZW92ZXItY29udGVudCxcXG4udHVybi1jb250ZW50IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLyogU3R5bGluZyBmb3Igc2V0IGRpc3BsYXkgKi9cXG4jc2V0LWNvbnRhaW5lciB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMCAxIDEwMCU7XFxuICAgIGdhcDogLjVyZW07XFxuICAgIG1hcmdpbjogLjVyZW0gMDtcXG59XFxuXFxuLnNldC10cmF5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuXFxufVxcblxcbi50cmF5LWl0ZW0ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDpsZWZ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uaWNvbi1waWVjZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAtMTtcXG4gICAgYm9yZGVyOiB2YXIoLS1nYXAtc20pIHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiB2YXIoLS1nYXAtc20pO1xcbn1cXG5cXG4uaWNvbi1waWVjZS5pY29uLWRpc2FibGU+ZGl2Om5vdCgjZHJhZ2dlZCkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5pY29uLWNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jZWxsKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG59XFxuXFxuLmRyYWctY2VsbCB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuI2RyYWdnZWQge1xcbiAgICB6LWluZGV4OiA5O1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZHJhZy15IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZ2dsZS1yb3RhdGUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbiN0b2dnbGUtYmFyIHtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jdG9nZ2xlLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI3RvZ2dsZS10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRvcDogIDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcblxcbiN0b2dnbGUtYm9keSB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b2dnbGUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbn1cXG5cXG4jdG9nZ2xlLWJvZHk6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIHRvcDogMjBweDtcXG4gICAgbGVmdDogNzBweDtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJvcmRlcjogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHZhcigtLXRvZ2dsZSk7XFxufVxcblxcbiNpbnN0LWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkLWJnKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLWJ1dHRvbi1mZy1kaXNhYmxlKTtcXG59XFxuXFxuI2luc3QtdWwge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBmb250LWZhbWlseTogJ0NvbmNlcnQgT25lJywgY3Vyc2l2ZTtcXG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1mZy1kaXNhYmxlKTtcXG59XFxuXFxuI3N1Ym1pdC1iYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jc3VibWl0LWJhciBidXR0b24ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNzdWJtaXQtYmMge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3N1Ym1pdC1tYyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoZWNrLWlubmVyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdBbnRvbicsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI3N1Ym1pdC1tYy5pcy1tdWx0aSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmcpO1xcbn1cXG5cXG4jc3VibWl0LW1jLmlzLW11bHRpID4gI3N1Ym1pdC1tYy0yLFxcbiNzdWJtaXQtbWMuaXMtbXVsdGkgPiAjc3VibWl0LW1jLW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tZmctZGlzYWJsZSk7XFxufVxcblxcbiNzdWJtaXQtbWMtMixcXG4jc3VibWl0LW1jLW0ge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoZWNrLW91dHRlcik7XFxufVxcblxcbiNzdWJtaXQtbWMtMiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDNweCA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICBsaW5lLWhlaWdodDogMS4yO1xcbn1cXG5cXG4jc3VibWl0LW1jLW0ge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAxIC8yO1xcbn1cXG5cXG5cXG4jc3VibWl0LWNoayB7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgaGVpZ2h0OiAxLjI1cmVtO1xcbiAgICB3aWR0aDogMS4yNXJlbTtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcblxcblxcbi8qIFN0eWxpbmcgZm9yIHBsYXkgZGlzcGxheXMgKi9cXG4ucGxheS1jb250YWluZXIge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBtYXJnaW46IDAgLjVyZW07XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnBsYXktY29udGFpbmVyID4gLmdyaWQtYm94LnBsYXktc3RhdHVzID4gZGl2e1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC43NXM7XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgd2lkdGg6IDFyZW07XFxufVxcbi5wbGF5LWNvbnRhaW5lciA+IC5ncmlkLWJveC5wbGF5LWFyZWEgPiBkaXYuaGl0IHtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcztcXG59XFxuXFxuLnBsYXktY29udGFpbmVyID4gLmdyaWQtYm94LnBsYXktYXJlYSA+IGRpdntcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMnJlbTtcXG59XFxuXFxuLnBsYXktc3RhdHVzIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtZ3VpZGUtc20pO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGdhcDogdmFyKC0tZ2FwLXNtKTtcXG59XFxuXFxuLnBsYXktc3RhdHVzIC5ndWlkZS1sZWZ0IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLWdhcC1zbSkgKiAuNjYpO1xcbn1cXG5cXG4ucGxheS1zdGF0dXMgLmd1aWRlLXRvcCB7XFxuICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tZ2FwLXNtKSAqIC42Nik7XFxufVxcblxcbi5wbGF5LWFyZWEge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtZ3VpZGUtbGcpO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiB2YXIoLS1nYXAtbGcpO1xcbn1cXG5cXG4ucGxheS1hcmVhID4gLm9wZW4tY2VsbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWhvdmVyKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucGxheS1idXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDM5MHB4KSB7XFxuICAgICNzZXQtY29udGFpbmVyID4gLmdyaWQtYm94ID4gZGl2IHsgXFxuICAgICAgICB3aWR0aDogMS41cmVtO1xcbiAgICAgICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIH1cXG59XFxuXFxuLyogc2V0IGNvbmZpZ3VyYXRpb24gZm9yIHRoaW5uZXIgcGhvbmVzICovXFxuXFxuLyogbW9iaWxlIGhvcml6b250YWwgc2V0dGluZ3MgKi9cXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XFxuICAgICNoZWFkZXIgPiBoMSB7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgIH1cXG4gICAgLyogc2V0IHNldHRpbmdzICovXFxuICAgICNpbnN0LXVsIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogLjdyZW07XFxuICAgIH1cXG4gICAgI3NldC1jb250YWluZXIgPiAuZ3JpZC1ib3ggPiBkaXZ7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICB3aWR0aDogMS41cmVtO1xcbiAgICAgICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIH1cXG4gICAgI3RvZ2dsZS1ib2R5IHtcXG4gICAgICAgIGhlaWdodDogNjBweDtcXG4gICAgICAgIHdpZHRoOiA2MHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgfVxcbiAgICAjdG9nZ2xlLWJvZHk6YWZ0ZXIge1xcbiAgICAgICAgdG9wOiAxNXB4O1xcbiAgICAgICAgbGVmdDogNTBweDtcXG4gICAgICAgIGJvcmRlci13aWR0aDogMTVweDtcXG4gICAgfVxcbiAgICAudHJheS1pdGVtIHtcXG4gICAgICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICB9XFxuXFxufVxcblxcbi8qIGhvcml6b250YWwgY29uZmlndXJhdGlvbiAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiAxMDUwcHgpIG9yIChtYXgtaGVpZ2h0OiA2NTBweCkge1xcbiAgICAvKiBzZXQgc2V0dGluZ3MgKi9cXG4gICAgI3NldC1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxZnIgMWZyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcbiAgICAjc2V0LWNvbnRhaW5lciA+IC5ncmlkLWJveCB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgICAgICBncmlkLXJvdzogMSAvIDQ7XFxuICAgIH1cXG4gICAgLnNldC10cmF5IHtcXG4gICAgICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgfVxcbiAgICAjdG9nZ2xlLWJhciB7XFxuICAgICAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICB9XFxuICAgICN0b2dnbGUtY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC8qIHBsYXkgc2V0dGluZ3MgKi9cXG4gICAgLnBsYXktY29udGFpbmVyID4gLmdyaWQtYm94LnBsYXktc3RhdHVzID4gZGl2e1xcbiAgICAgICAgaGVpZ2h0OiAxcmVtO1xcbiAgICAgICAgd2lkdGg6IDFyZW07XFxuICAgIH1cXG4gICAgXFxuICAgIC5wbGF5LWNvbnRhaW5lciA+IC5ncmlkLWJveC5wbGF5LWFyZWEgPiBkaXZ7XFxuICAgICAgICBoZWlnaHQ6IDEuNHJlbTtcXG4gICAgICAgIHdpZHRoOiAxLjRyZW07XFxuICAgIH1cXG4gICAgLnBsYXktY29udGFpbmVyIHtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIH1cXG5cXG4gICAgLnBsYXktYXJlYSB7XFxuICAgICAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIH1cXG5cXG4gICAgLnBsYXktc3RhdHVzIHtcXG4gICAgICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDUwcHgpIGFuZCAobWluLWhlaWdodDogNjUxcHgpIHtcXG4gICAgLnBsYXktYnV0dG9uIHtcXG4gICAgICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDY1MHB4KSB7XFxuICAgIC5wbGF5LWJ1dHRvbiB7XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgLnBsYXktYnV0dG9uIHtcXG4gICAgICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgfVxcbn1cXG5cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTA1MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDY1MXB4KSB7XFxuICAgIC5wbGF5LWNvbnRhaW5lciA+IC5ncmlkLWJveC5wbGF5LXN0YXR1cyA+IGRpdntcXG4gICAgICAgIGhlaWdodDogMS41cmVtO1xcbiAgICAgICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgLnBsYXktY29udGFpbmVyID4gLmdyaWQtYm94LnBsYXktYXJlYSA+IGRpdntcXG4gICAgICAgIGhlaWdodDogM3JlbTtcXG4gICAgICAgIHdpZHRoOiAzcmVtO1xcbiAgICB9XFxufVxcblxcbi8qIG1vYmlsZSB2ZXJ0aWNhbCBzZXR0aW5ncyAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiAzOTBweCkgYW5kIChtYXgtaGVpZ2h0OiA4NTVweCkge1xcbiAgICAjc2V0LWNvbnRhaW5lciA+IC5ncmlkLWJveCA+IGRpdntcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIHdpZHRoOiAxLjRyZW07XFxuICAgICAgICBoZWlnaHQ6IDEuNHJlbTtcXG4gICAgfVxcblxcbiAgICAjdG9nZ2xlLWJvZHkge1xcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xcbiAgICAgICAgd2lkdGg6IDYwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICB9XFxuXFxuICAgICN0b2dnbGUtYm9keTphZnRlciB7XFxuICAgICAgICB0b3A6IDE1cHg7XFxuICAgICAgICBsZWZ0OiA1MHB4O1xcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxNXB4O1xcbiAgICB9XFxuXFxuICAgIC50cmF5LWl0ZW0ge1xcbiAgICAgICAgcGFkZGluZzogLjVyZW07XFxuICAgIH1cXG5cXG4gICAgI2hlYWRlciA+IGgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgfVxcbiAgICAjaW5zdC11bCB7XFxuICAgICAgICBmb250LXNpemU6IC43cmVtO1xcbiAgICB9XFxuXFxuICAgIC5wbGF5LWNvbnRhaW5lciA+IC5ncmlkLWJveC5wbGF5LXN0YXR1cyA+IGRpdntcXG4gICAgICAgIGhlaWdodDogLjlyZW07XFxuICAgICAgICB3aWR0aDogLjlyZW07XFxuICAgIH1cXG4gICAgXFxuICAgIC5wbGF5LWNvbnRhaW5lciA+IC5ncmlkLWJveC5wbGF5LWFyZWEgPiBkaXZ7XFxuICAgICAgICBoZWlnaHQ6IDEuOHJlbTtcXG4gICAgICAgIHdpZHRoOiAxLjhyZW07XFxuICAgIH1cXG59XFxuXFxuXFxuXFxuLyogc2V0IGNvbmZpZ3VyYXRpb24gZm9yIGZ1bGwgc2NyZWVuICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwNTBweCkge1xcbiAgICAjc2V0LWNvbnRhaW5lciA+IC5ncmlkLWJveCA+IGRpdiB7XFxuICAgICAgICB3aWR0aDogM3JlbTtcXG4gICAgICAgIGhlaWdodDogM3JlbTtcXG4gICAgfVxcblxcbiAgICAjaW5zdC1jb250YWluZXIgeyBcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIH1cXG5cXG4gICAgI3N1Ym1pdC1iYXIge1xcbiAgICAgICAgbWF4LWhlaWdodDogMTAwcHg7XFxuICAgICAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIH1cXG5cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtJQUNJLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixzQkFB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SUFDdEI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsYUFBYTtJQUNqQjtBQUNKOzs7O0FBSUEsc0NBQXNDO0FBQ3RDO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGtCQUFrQjtJQUN0Qjs7QUFFSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbnRvbiZmYW1pbHk9QnVuZ2VlK1NoYWRlJmZhbWlseT1Db25jZXJ0K09uZSZkaXNwbGF5PXN3YXAnKTtcXG46cm9vdCB7XFxuICAgIC0tbWFpbi1iZzogcmdiKDE2NywgMTcxLCAxNzUpO1xcbiAgICAtLWJnLWdyaWQ6IGJsYWNrO1xcbiAgICAtLWJnLWNlbGw6IHJnYigxNzIsIDIzOSwgMjQxKTtcXG4gICAgLS1mb250LWd1aWRlLWxnOiAxLjVyZW07XFxuICAgIC0tZm9udC1ndWlkZS1zbTogLjdyZW07XFxuICAgIC0tZ2FwLWxnOiAzcHg7XFxuICAgIC0tZ2FwLXNtOiAycHg7XFxuICAgIC0tYnV0dG9uLWZnLWRpc2FibGU6IGdyZXk7XFxuICAgIC0tYnV0dG9uLWZnLW5vcm1hbDogYmxhY2s7XFxuICAgIC0tYnV0dG9uLWJnLWRpc2FibGU6IGRhcmtncmV5O1xcbiAgICAtLWJ1dHRvbi1iZy1ub3JtYWw6IHdoaXRlO1xcbiAgICAtLWJ1dHRvbi1mb250LXNpemU6IDJyZW07XFxuICAgIC0tYm9hcmQtaGl0OiBkYXJrcmVkO1xcbiAgICAtLWJvYXJkLWhvdmVyOiBhcXVhO1xcbiAgICAtLWJvYXJkLW1pc3M6IGdyZXk7XFxuICAgIC0tYm9hcmQtc2VsZWN0ZWQ6IHllbGxvdztcXG4gICAgLS1ib2FyZC1zaGlwOiBncmVlbjtcXG4gICAgLS1zaWRlLXNpemU6IDEwO1xcbiAgICAtLWNoZWNrLW91dHRlcjogcmdiKDIxNSwgMjQ0LCAyNTIpO1xcbiAgICAtLWNoZWNrLWlubmVyOiByZ2IoMjUyLCAyMTAsIDEzMik7XFxuICAgIC0taGVhZC1iZzogcmdiKDIzNSwgMjMwLCAyMzApO1xcbiAgICAtLXRvZ2dsZTogcmdiKDI1NSwgMTg3LCAwKTtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmctbm9ybWFsKTtcXG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1mZy1ub3JtYWwpO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1idXR0b24tZmctbm9ybWFsKTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1idXR0b24tZm9udC1zaXplKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJ1dHRvbjpkaXNhYmxlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iZy1kaXNhYmxlKTtcXG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1mZy1kaXNhYmxlKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tZmctZGlzYWJsZSk7XFxufVxcblxcbiNtYWluLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmcpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jaGVhZGVyLFxcbiNmb290ZXIge1xcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZC1iZyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBtaW4taGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBwYWRkaW5nOiAwIDJyZW07XFxufVxcblxcbiNoZWFkZXIgPiBoMSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQnVuZ2VlIFNoYWRlJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHJnYigxNzksIDExNiwgMCk7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGNvbG9yOnJnYigxNDgsIDE0NywgMTQ3KTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdyaWQtcm93OiAzLyA0O1xcbn1cXG5cXG4vKiBzdHlsaW5nIGZvciBhbGwgZ3JpZCBkaXNwbGF5cyAqL1xcbi5ncmlkLWJveCB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1ndWlkZS1sZyk7XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWdyaWQpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1zaWRlLXNpemUpLCAxZnIpO1xcbiAgICBnYXA6IHZhcigtLWdhcC1sZyk7XFxufVxcblxcbi5ncmlkLWJveCA+IGRpdiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNlbGwpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3NldC1jb250YWluZXIgPiAuZ3JpZC1ib3ggPiBkaXZ7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi5ndWlkZS10b3AsXFxuLmd1aWRlLWNvcm5lciB7XFxuICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tZ2FwLWxnKSAqIC42Nik7XFxufVxcblxcbi5ndWlkZS1sZWZ0LFxcbi5ndWlkZS1jb3JuZXIge1xcbiAgICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tZ2FwLWxnKSAqIC42Nik7XFxufVxcblxcbi5ndWlkZS1jb3JuZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1ncmlkKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciBhbGwgZ3JpZCBpY29ucyAqL1xcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtc2hpcCkgIWltcG9ydGFudDtcXG59XFxuXFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1taXNzKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtaGl0KSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1zZWxlY3RlZCkgIWltcG9ydGFudDtcXG59XFxuXFxuLmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zZXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbiAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc2V0LmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXkgIWltcG9ydGFudDtcXG59XFxuXFxuLyogU3R5bGluZyBmb3Igbm90aWZpY2F0aW9ucyAqL1xcbi5nYW1lb3Zlci1jb250YWluZXIsXFxuLnR1cm4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmdhbWVvdmVyLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4udHVybi1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnKTtcXG59XFxuXFxuLmdhbWVvdmVyLWNvbnRlbnQsXFxuLnR1cm4tY29udGVudCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIHNldCBkaXNwbGF5ICovXFxuI3NldC1jb250YWluZXIge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDAgMSAxMDAlO1xcbiAgICBnYXA6IC41cmVtO1xcbiAgICBtYXJnaW46IC41cmVtIDA7XFxufVxcblxcbi5zZXQtdHJheSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcblxcbn1cXG5cXG4udHJheS1pdGVtIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6bGVmdDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmljb24tcGllY2Uge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGdyaWQtcm93OiAxIC8gLTE7XFxuICAgIGJvcmRlcjogdmFyKC0tZ2FwLXNtKSBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogdmFyKC0tZ2FwLXNtKTtcXG59XFxuXFxuLmljb24tcGllY2UuaWNvbi1kaXNhYmxlPmRpdjpub3QoI2RyYWdnZWQpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaWNvbi1jZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY2VsbCk7XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxufVxcblxcbi5kcmFnLWNlbGwge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbiNkcmFnZ2VkIHtcXG4gICAgei1pbmRleDogOTtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcXG59XFxuXFxuLmRyYWcteSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b2dnbGUtcm90YXRlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4jdG9nZ2xlLWJhciB7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuI3RvZ2dsZS1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiN0b2dnbGUtdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0b3A6ICA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG5cXG4jdG9nZ2xlLWJvZHkge1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXM7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9nZ2xlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG59XFxuXFxuI3RvZ2dsZS1ib2R5OmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHdpZHRoOiAwO1xcbiAgICB0b3A6IDIwcHg7XFxuICAgIGxlZnQ6IDcwcHg7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBib3JkZXI6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB2YXIoLS10b2dnbGUpO1xcbn1cXG5cXG4jaW5zdC1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZC1iZyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1idXR0b24tZmctZGlzYWJsZSk7XFxufVxcblxcbiNpbnN0LXVsIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6ICdDb25jZXJ0IE9uZScsIGN1cnNpdmU7XFxuICAgIGNvbG9yOiB2YXIoLS1idXR0b24tZmctZGlzYWJsZSk7XFxufVxcblxcbiNzdWJtaXQtYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3N1Ym1pdC1iYXIgYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jc3VibWl0LWJjIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNzdWJtaXQtbWMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGVjay1pbm5lcik7XFxuICAgIGZvbnQtZmFtaWx5OiAnQW50b24nLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxufVxcblxcbiNzdWJtaXQtbWMuaXMtbXVsdGkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnKTtcXG59XFxuXFxuI3N1Ym1pdC1tYy5pcy1tdWx0aSA+ICNzdWJtaXQtbWMtMixcXG4jc3VibWl0LW1jLmlzLW11bHRpID4gI3N1Ym1pdC1tYy1tIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWZnLWRpc2FibGUpO1xcbn1cXG5cXG4jc3VibWl0LW1jLTIsXFxuI3N1Ym1pdC1tYy1tIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGVjay1vdXR0ZXIpO1xcbn1cXG5cXG4jc3VibWl0LW1jLTIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAzcHggNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcXG59XFxuXFxuI3N1Ym1pdC1tYy1tIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvMjtcXG59XFxuXFxuXFxuI3N1Ym1pdC1jaGsge1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGhlaWdodDogMS4yNXJlbTtcXG4gICAgd2lkdGg6IDEuMjVyZW07XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG5cXG5cXG4vKiBTdHlsaW5nIGZvciBwbGF5IGRpc3BsYXlzICovXFxuLnBsYXktY29udGFpbmVyIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgbWFyZ2luOiAwIC41cmVtO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5wbGF5LWNvbnRhaW5lciA+IC5ncmlkLWJveC5wbGF5LXN0YXR1cyA+IGRpdntcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuNzVzO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIHdpZHRoOiAxcmVtO1xcbn1cXG4ucGxheS1jb250YWluZXIgPiAuZ3JpZC1ib3gucGxheS1hcmVhID4gZGl2LmhpdCB7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXM7XFxufVxcblxcbi5wbGF5LWNvbnRhaW5lciA+IC5ncmlkLWJveC5wbGF5LWFyZWEgPiBkaXZ7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDJyZW07XFxufVxcblxcbi5wbGF5LXN0YXR1cyB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LWd1aWRlLXNtKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBnYXA6IHZhcigtLWdhcC1zbSk7XFxufVxcblxcbi5wbGF5LXN0YXR1cyAuZ3VpZGUtbGVmdCB7XFxuICAgIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1nYXAtc20pICogLjY2KTtcXG59XFxuXFxuLnBsYXktc3RhdHVzIC5ndWlkZS10b3Age1xcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLWdhcC1zbSkgKiAuNjYpO1xcbn1cXG5cXG4ucGxheS1hcmVhIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LWd1aWRlLWxnKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogdmFyKC0tZ2FwLWxnKTtcXG59XFxuXFxuLnBsYXktYXJlYSA+IC5vcGVuLWNlbGw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1ob3ZlcikgIWltcG9ydGFudDtcXG59XFxuXFxuLnBsYXktYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAzOTBweCkge1xcbiAgICAjc2V0LWNvbnRhaW5lciA+IC5ncmlkLWJveCA+IGRpdiB7IFxcbiAgICAgICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB9XFxufVxcblxcbi8qIHNldCBjb25maWd1cmF0aW9uIGZvciB0aGlubmVyIHBob25lcyAqL1xcblxcbi8qIG1vYmlsZSBob3Jpem9udGFsIHNldHRpbmdzICovXFxuQG1lZGlhIChtYXgtaGVpZ2h0OiA0NTBweCkge1xcbiAgICAjaGVhZGVyID4gaDEge1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB9XFxuICAgIC8qIHNldCBzZXR0aW5ncyAqL1xcbiAgICAjaW5zdC11bCB7XFxuICAgICAgICBmb250LXNpemU6IC43cmVtO1xcbiAgICB9XFxuICAgICNzZXQtY29udGFpbmVyID4gLmdyaWQtYm94ID4gZGl2e1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB9XFxuICAgICN0b2dnbGUtYm9keSB7XFxuICAgICAgICBoZWlnaHQ6IDYwcHg7XFxuICAgICAgICB3aWR0aDogNjBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIH1cXG4gICAgI3RvZ2dsZS1ib2R5OmFmdGVyIHtcXG4gICAgICAgIHRvcDogMTVweDtcXG4gICAgICAgIGxlZnQ6IDUwcHg7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDE1cHg7XFxuICAgIH1cXG4gICAgLnRyYXktaXRlbSB7XFxuICAgICAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgfVxcblxcbn1cXG5cXG4vKiBob3Jpem9udGFsIGNvbmZpZ3VyYXRpb24gKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogMTA1MHB4KSBvciAobWF4LWhlaWdodDogNjUwcHgpIHtcXG4gICAgLyogc2V0IHNldHRpbmdzICovXFxuICAgICNzZXQtY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLWNvbHVtbjogMWZyIDFmcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgI3NldC1jb250YWluZXIgPiAuZ3JpZC1ib3gge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyA0O1xcbiAgICB9XFxuICAgIC5zZXQtdHJheSB7XFxuICAgICAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIH1cXG4gICAgI3RvZ2dsZS1iYXIge1xcbiAgICAgICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgfVxcbiAgICAjdG9nZ2xlLWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAvKiBwbGF5IHNldHRpbmdzICovXFxuICAgIC5wbGF5LWNvbnRhaW5lciA+IC5ncmlkLWJveC5wbGF5LXN0YXR1cyA+IGRpdntcXG4gICAgICAgIGhlaWdodDogMXJlbTtcXG4gICAgICAgIHdpZHRoOiAxcmVtO1xcbiAgICB9XFxuICAgIFxcbiAgICAucGxheS1jb250YWluZXIgPiAuZ3JpZC1ib3gucGxheS1hcmVhID4gZGl2e1xcbiAgICAgICAgaGVpZ2h0OiAxLjRyZW07XFxuICAgICAgICB3aWR0aDogMS40cmVtO1xcbiAgICB9XFxuICAgIC5wbGF5LWNvbnRhaW5lciB7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICB9XFxuXFxuICAgIC5wbGF5LWFyZWEge1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICB9XFxuXFxuICAgIC5wbGF5LXN0YXR1cyB7XFxuICAgICAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTA1MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDY1MXB4KSB7XFxuICAgIC5wbGF5LWJ1dHRvbiB7XFxuICAgICAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtaGVpZ2h0OiA2NTBweCkge1xcbiAgICAucGxheS1idXR0b24ge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIH1cXG4gICAgXFxuICAgIC5wbGF5LWJ1dHRvbiB7XFxuICAgICAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIH1cXG59XFxuXFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwNTBweCkgYW5kIChtaW4taGVpZ2h0OiA2NTFweCkge1xcbiAgICAucGxheS1jb250YWluZXIgPiAuZ3JpZC1ib3gucGxheS1zdGF0dXMgPiBkaXZ7XFxuICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIH1cXG4gICAgXFxuICAgIC5wbGF5LWNvbnRhaW5lciA+IC5ncmlkLWJveC5wbGF5LWFyZWEgPiBkaXZ7XFxuICAgICAgICBoZWlnaHQ6IDNyZW07XFxuICAgICAgICB3aWR0aDogM3JlbTtcXG4gICAgfVxcbn1cXG5cXG4vKiBtb2JpbGUgdmVydGljYWwgc2V0dGluZ3MgKi9cXG5AbWVkaWEgKG1heC13aWR0aDogMzkwcHgpIGFuZCAobWF4LWhlaWdodDogODU1cHgpIHtcXG4gICAgI3NldC1jb250YWluZXIgPiAuZ3JpZC1ib3ggPiBkaXZ7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICB3aWR0aDogMS40cmVtO1xcbiAgICAgICAgaGVpZ2h0OiAxLjRyZW07XFxuICAgIH1cXG5cXG4gICAgI3RvZ2dsZS1ib2R5IHtcXG4gICAgICAgIGhlaWdodDogNjBweDtcXG4gICAgICAgIHdpZHRoOiA2MHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgfVxcblxcbiAgICAjdG9nZ2xlLWJvZHk6YWZ0ZXIge1xcbiAgICAgICAgdG9wOiAxNXB4O1xcbiAgICAgICAgbGVmdDogNTBweDtcXG4gICAgICAgIGJvcmRlci13aWR0aDogMTVweDtcXG4gICAgfVxcblxcbiAgICAudHJheS1pdGVtIHtcXG4gICAgICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICB9XFxuXFxuICAgICNoZWFkZXIgPiBoMSB7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgIH1cXG4gICAgI2luc3QtdWwge1xcbiAgICAgICAgZm9udC1zaXplOiAuN3JlbTtcXG4gICAgfVxcblxcbiAgICAucGxheS1jb250YWluZXIgPiAuZ3JpZC1ib3gucGxheS1zdGF0dXMgPiBkaXZ7XFxuICAgICAgICBoZWlnaHQ6IC45cmVtO1xcbiAgICAgICAgd2lkdGg6IC45cmVtO1xcbiAgICB9XFxuICAgIFxcbiAgICAucGxheS1jb250YWluZXIgPiAuZ3JpZC1ib3gucGxheS1hcmVhID4gZGl2e1xcbiAgICAgICAgaGVpZ2h0OiAxLjhyZW07XFxuICAgICAgICB3aWR0aDogMS44cmVtO1xcbiAgICB9XFxufVxcblxcblxcblxcbi8qIHNldCBjb25maWd1cmF0aW9uIGZvciBmdWxsIHNjcmVlbiAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiAxMDUwcHgpIHtcXG4gICAgI3NldC1jb250YWluZXIgPiAuZ3JpZC1ib3ggPiBkaXYge1xcbiAgICAgICAgd2lkdGg6IDNyZW07XFxuICAgICAgICBoZWlnaHQ6IDNyZW07XFxuICAgIH1cXG5cXG4gICAgI2luc3QtY29udGFpbmVyIHsgXFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgICNzdWJtaXQtYmFyIHtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xcbiAgICAgICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICB9XFxuXFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IG1ha2VFbGVtZW50LCBhZGp1c3RUb0luZGV4LCBidWlsZEdyaWQgfSBmcm9tICcuL0RPTUhlbHBlcnMuanMnO1xuXG4vLyBGaXJzdCBwYWdlIGxvYWQgYnVpbGRlclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVET00oc2l6ZSkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGlkOiAnbWFpbi1jb250YWluZXInIH0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jykuc3R5bGUuc2V0UHJvcGVydHkoJy0tc2lkZS1zaXplJywgc2l6ZSArIDEpO1xuICAgIC8vIGhhY2sgdG8gcHJldmVudCB1bndhbnRlZCBkcmFnZ2luZ1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5zZXRBdHRyaWJ1dGUoJ29uZHJhZ3N0YXJ0JywgJ3JldHVybiBmYWxzZTsnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jykuc2V0QXR0cmlidXRlKCdvbmRyb3AnLCAncmV0dXJuIGZhbHNlJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdkaXYnLCB7IGlkOiAnaGVhZGVyJyB9KSk7XG4gICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyNoZWFkZXInKS5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnaDEnLCB7fSwgJ0JBVFRMRVNISVAnKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdkaXYnLCB7IGlkOiAnZm9vdGVyJyB9KSk7XG4gICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyNmb290ZXInKS5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgncCcsIHt9LCAnJmNvcHk7IDIwMjIgSmltbXkgUXVhZHJvcycpKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG59XG5cbi8vIERpc3BsYXkgZm9yIHRoZSBnZW5lcmFsIHBsYXkgYXJlYVxuZXhwb3J0IGNsYXNzIFBsYXlCb2FyZCB7XG4gICAgY29uc3RydWN0b3Ioc2l6ZSwgYWxsU2hpcHMpIHtcbiAgICAgICAgdGhpcy5TSVpFID0gc2l6ZTtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ3BsYXktY29udGFpbmVyJyB9KTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRHcmlkKHNpemUsICdwbGF5LWFyZWEnKSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkR3JpZChzaXplLCAncGxheS1zdGF0dXMnKSlcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2J1dHRvbicsIHsgY2xhc3M6ICdwbGF5LWJ1dHRvbicsIGRpc2FibGVkOiAndHJ1ZScgfSwgJ1NFTEVDVCBUQVJHRVQnKSk7XG4gICAgICAgIGFsbFNoaXBzLmZvckVhY2goaW5kZXggPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0dXMoaW5kZXgsICdzaGlwJyk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIC8vIGdldHRlcnMgZm9yIGJvYXJkIGVsZW1lbnRzXG4gICAgZ2V0Q29udGFpbmVyKCkgeyByZXR1cm4gdGhpcy5jb250YWluZXI7IH1cbiAgICBnZXRQbGF5KCkgeyByZXR1cm4gdGhpcy5nZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yKCcucGxheS1hcmVhJyk7IH1cbiAgICBnZXRTdGF0dXMoKSB7IHJldHVybiB0aGlzLmdldENvbnRhaW5lcigpLnF1ZXJ5U2VsZWN0b3IoJy5wbGF5LXN0YXR1cycpOyB9XG4gICAgZ2V0QnV0dG9uKCkgeyByZXR1cm4gdGhpcy5nZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yKCcucGxheS1idXR0b24nKTsgfVxuICAgIFxuICAgIC8vIEhlbHBlcnMgdG8gaGFuZGxlIHRoZSBkaXNwbGF5ZWQgZ3VpZGVzXG4gICAgZ2V0R3VpZGVJbmRleChpbmRleCkgeyByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIChpbmRleCAlIHRoaXMuU0laRSkpLmNvbmNhdChNYXRoLmZsb29yKGluZGV4IC8gdGhpcy5TSVpFKSArIDEpOyB9XG5cbiAgICBkaXNwbGF5Qm9hcmQoKSB7IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKHRoaXMuZ2V0Q29udGFpbmVyKCkpOyB9XG4gICAgcmVtb3ZlQm9hcmQoKSB7IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5LWNvbnRhaW5lcicpLnJlbW92ZSgpOyB9XG5cbiAgICAvLyBzZXQgdGhlIGRpc3BsYXkncyBidXR0b24gdGV4dCBhbmQgZGlzYWJsZWQgc3RhdHVzXG4gICAgc2V0QnV0dG9uKGluZGV4KSB7XG4gICAgICAgIHRoaXMuZ2V0QnV0dG9uKCkuZGlzYWJsZWQgPSAoaW5kZXgpID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICB0aGlzLmdldEJ1dHRvbigpLmlubmVySFRNTCA9IChpbmRleCkgPyBgQVRUQUNLICR7dGhpcy5nZXRHdWlkZUluZGV4KGluZGV4KX1gIDogYFNFTEVDVCBUQVJHRVRgOyBcbiAgICB9O1xuXG4gICAgLy8gc3dpdGNoZXMgYSBjZWxsIGZyb20gb3BlbiB0byBzZWxlY3RlZFxuICAgIHRvZ2dsZVNlbGVjdGVkKGluZGV4KSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmdldFBsYXkoKS5jaGlsZHJlbi5pdGVtKGFkanVzdFRvSW5kZXgoaW5kZXgsIHRoaXMuU0laRSkpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4tY2VsbCcpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XG4gICAgfVxuXG4gICAgLy8gc2V0IGNsYXNzIGZvciBjZWxsIGluIHRoZSBwbGF5IGdyaWRcbiAgICB1cGRhdGVQbGF5KGluZGV4LCB0b1VwZGF0ZSkge1xuICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5nZXRQbGF5KCkuY2hpbGRyZW4uaXRlbShhZGp1c3RUb0luZGV4KGluZGV4LCB0aGlzLlNJWkUpKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQodG9VcGRhdGUpO1xuICAgIH1cblxuICAgIC8vIHNldCBjbGFzcyBmb3IgY2VsbCBpbiB0aGUgc3RhdHVzIGdyaWRcbiAgICB1cGRhdGVTdGF0dXMoaW5kZXgsIHRvVXBkYXRlKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmdldFN0YXR1cygpLmNoaWxkcmVuLml0ZW0oYWRqdXN0VG9JbmRleChpbmRleCwgdGhpcy5TSVpFKSk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCh0b1VwZGF0ZSk7XG4gICAgfVxuXG4gICAgLy8gZGlzcGxheSBhIHByaXZhY3kgY292ZXIgb24gdHVybiBzd2l0Y2gtb2ZmcywgdGFrZXMgYSBzdHJpbmcgZm9yIHBsYXllcidzIG5hbWUsIHJldHVybnMgYnV0dG9uXG4gICAgY3JlYXRlVHVybkNvdmVyKHBsYXllcikge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ3R1cm4tY29udGFpbmVyJyB9KTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAndHVybi1jb250ZW50JyB9KTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gbWFrZUVsZW1lbnQoJ2J1dHRvbicsIHsgY2xhc3M6ICd0dXJuLWJ1dHRvbicgfSwgJ1JFQURZJyk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2gxJywge30sIGAke3BsYXllci50b1VwcGVyQ2FzZSgpfSdzYCkpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdoMScsIHt9LCAnVFVSTicpKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9XG5cbiAgICBjbGVhclR1cm5Db3ZlcigpIHtcbiAgICAgICAgdGhpcy5nZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yKCcudHVybi1jb250YWluZXInKS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICAvLyBkaXNwbGF5IGEgZ2FtZW92ZXIgbWVzc2FnZSB3aXRoIGN1c3RvbiByZXN1bHQgc3RyaW5nLCByZXR1cm5zIGJ1dHRvbiBmb3IgYmluZGluZ1xuICAgIGNyZWF0ZUdhbWVPdmVyKHJlc3VsdCkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2dhbWVvdmVyLWNvbnRhaW5lcicgfSk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2dhbWVvdmVyLWNvbnRlbnQnIH0pO1xuICAgICAgICBjb25zdCBidXR0b24gPSBtYWtlRWxlbWVudCgnYnV0dG9uJywgeyBjbGFzczogJ2dhbWVvdmVyLWJ1dHRvbicgfSwgJ1BMQVkgQUdBSU4/JylcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnaDEnLCB7fSwgcmVzdWx0KSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICB0aGlzLmdldENvbnRhaW5lcigpLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgIHJldHVybiBidXR0b247XG4gICAgfVxufSIsIi8vIEhlbHBlciBmdW5jdGlvbiBmb3IgZWFzeSBlbGVtZW50IGNyZWF0aW9uXG4vLyB1c2U6ICg8c3RyaW5nPiwgPG9iamVjdD4gb2YgcHJvcGVydGllcyBhcyB5b3Ugd291bGQgdXNlIHNldEF0dHJpYnV0ZSwgPHN0cmluZz5pbm5lckhUTUwpXG5leHBvcnQgZnVuY3Rpb24gbWFrZUVsZW1lbnQodHlwZSwgcHJvcGVydGllcyA9IHt9LCBpbm5lciA9IG51bGwpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBmb3IgKGxldCBrZXkgaW4gcHJvcGVydGllcykgeyBlbGVtZW50LnNldEF0dHJpYnV0ZShgJHtrZXl9YCwgYCR7cHJvcGVydGllc1trZXldfWApIH07XG4gICAgaWYgKGlubmVyKSB7IGVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXIgfTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuLy8gQWRqdXN0IGFuIGluZGV4IHZhbHVlIHRvIGNvbXBlbnNhdGUgZm9yIGFueSBhZGRlZCBndWlkZSB2YWx1ZXNcbmV4cG9ydCBmdW5jdGlvbiBhZGp1c3RUb0luZGV4KGluZGV4LCBzaXplKSB7IFxuICAgIHJldHVybiAoc2l6ZSArIDEpICogKGluZGV4IC8gc2l6ZSArIDEpICsgMTtcbn1cblxuLy8gY3JlYXRlIGEgdmFyaWFibHkgc2l6ZWQgZ3JpZCB3aXRoIGd1aWRlIG1lYXN1cmVzIG9uIHRvcCBhbmQgbGVmdCBoYW5kIHNpZGVcbmV4cG9ydCBmdW5jdGlvbiBidWlsZEdyaWQoc2lkZVNpemUsIGFkZENsYXNzKSB7XG4gICAgY29uc3QgU0laRSA9IE1hdGgucG93KHNpZGVTaXplICsgMSwgMik7XG4gICAgY29uc3QgZ3JpZEJveCA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnZ3JpZC1ib3gnIH0pO1xuICAgIGlmIChhZGRDbGFzcykgeyBncmlkQm94LmNsYXNzTGlzdC5hZGQoYWRkQ2xhc3MpOyB9XG4gICAgbGV0IGNvbFZhbHVlID0gNjU7XG4gICAgbGV0IHJvd1ZhbHVlID0gMTtcbiAgICBsZXQgY2VsbEluZGV4ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IFNJWkU7IGkrKykgeyBcbiAgICAgICAgaWYgKGkgPT09IDApIHsgZ3JpZEJveC5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2d1aWRlLWNvcm5lcicgfSkpIH1cbiAgICAgICAgZWxzZSBpZiAoaSA8PSBzaWRlU2l6ZSkgeyBncmlkQm94LmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnZ3VpZGUtdG9wJyB9LCBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvbFZhbHVlKyspKSkgfVxuICAgICAgICBlbHNlIGlmIChpICUgKHNpZGVTaXplICsgMSkgPT09IDApIHsgZ3JpZEJveC5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2d1aWRlLWxlZnQnfSwgcm93VmFsdWUrKykpIH1cbiAgICAgICAgZWxzZSB7IGdyaWRCb3guYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdvcGVuLWNlbGwgc2VsZWN0YWJsZScsICdkYXRhLWluZGV4JzogY2VsbEluZGV4KysgfSkpIH07XG4gICAgfVxuICAgIHJldHVybiBncmlkQm94O1xufVxuXG4vLyBzZXRQbGF5ZXIgRE9NIGJ1aWxkZXJzXG5cbi8vIGNvbnRhaW5lciBmb3IgaWNvbnMgaW5kZXhlcyB0aGUgaWNvbnMgb24gb3JkZXIgYWRkZWRcbmV4cG9ydCBmdW5jdGlvbiBidWlsZFNldFBsYXllcihzaXplLCBwaWVjZXMsIGlzTXVsdGkpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBpZDogJ3NldC1jb250YWluZXInIH0pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZEdyaWQoc2l6ZSkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZFRvZ2dsZUJhcigpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFrZVRyYXkocGllY2VzKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkU3VibWl0QmFyKGlzTXVsdGkpKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBidWlsZFN1Ym1pdEJhcihpc011bHRpKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgaWQ6ICdzdWJtaXQtYmFyJyB9KTtcbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBpZDogJ3N1Ym1pdC1iYycgfSk7XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdidXR0b24nLCB7IGlkOiAnc3VibWl0LWJ0bicsIGRpc2FibGVkOiAndHJ1ZScgfSwgJ0NPTlRJTlVFJykpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZFNldE11bHRpKGlzTXVsdGkpKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBidWlsZFNldE11bHRpKGlzTXVsdGkpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBpZDogJ3N1Ym1pdC1tYycgfSk7XG4gICAgY29uc3QgdHdvID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgaWQ6ICdzdWJtaXQtbWMtMicgfSk7XG4gICAgY29uc3QgY2hlY2sgPSBtYWtlRWxlbWVudCgnaW5wdXQnLCB7IHR5cGU6ICdjaGVja2JveCcsIGlkOiAnc3VibWl0LWNoaycgfSk7XG4gICAgaWYgKGlzTXVsdGkpIHsgXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpcy1tdWx0aScpO1xuICAgICAgICBjaGVjay5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ3RydWUnKSBcbiAgICB9O1xuICAgIHR3by5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnZGl2Jywge30sICdUJykpO1xuICAgIHR3by5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnZGl2Jywge30sICdXJykpO1xuICAgIHR3by5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnZGl2Jywge30sICdPJykpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0d28pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnZGl2JywgeyBpZDogJ3N1Ym1pdC1tYy1tJyB9LCAnUExBWScpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2spO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkVG9nZ2xlQmFyKCkge1xuICAgIGNvbnN0IHRvZ2dsZWJhciA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGlkOiAndG9nZ2xlLWJhcicgfSk7XG4gICAgY29uc3QgdG9nZ2xlQ29udGFpbmVyID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgaWQ6ICd0b2dnbGUtY29udGFpbmVyJyB9KVxuICAgIGNvbnN0IHRvZ2dsZUJvZHkgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBpZDogJ3RvZ2dsZS1ib2R5JywgJ2RhdGEteSc6ICdmYWxzZScgfSk7XG4gICAgY29uc3QgdG9nZ2xlVGV4dCA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGlkOiAndG9nZ2xlLXRleHQnIH0sICdYJyk7XG4gICAgY29uc3QgaW5zdHJ1Y3RDb250ID0gbWFrZUVsZW1lbnQoJ2RpdicsIHtpZDogJ2luc3QtY29udGFpbmVyJyB9KTtcbiAgICBjb25zdCBpbnN0cnVjdFVMID0gbWFrZUVsZW1lbnQoJ3VsJywge2lkOiAnaW5zdC11bCcgfSk7XG4gICAgaW5zdHJ1Y3RVTC5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnbGknLCB7fSwgJ0RSQUcgUElFQ0VTIEJFTE9XIFRPIEdSSUQnKSk7XG4gICAgaW5zdHJ1Y3RVTC5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnbGknLCB7fSwgJ0xFRlQgVE9HR0xFIFRPIFNFVCBESVJFQ1RJT04nKSk7XG4gICAgaW5zdHJ1Y3RVTC5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnbGknLCB7fSwgJ09OQ0UgQUxMIFNFVCBQUkVTUyBDT05USU5VRScpKTtcbiAgICB0b2dnbGVCb2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndG9nZ2xlLXJvdGF0ZScpKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5zZXRBdHRyaWJ1dGUoJ2RhdGEteScsICdmYWxzZScpO1xuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgndG9nZ2xlLXJvdGF0ZScpO1xuICAgICAgICAgICAgdG9nZ2xlVGV4dC5pbm5lckhUTUwgPSAnWCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlLnRhcmdldC5zZXRBdHRyaWJ1dGUoJ2RhdGEteScsICd0cnVlJyk7XG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtcm90YXRlJyk7XG4gICAgICAgICAgICB0b2dnbGVUZXh0LmlubmVySFRNTCA9ICdZJztcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHRvZ2dsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2dnbGVCb2R5KTtcbiAgICB0b2dnbGVDb250YWluZXIuYXBwZW5kQ2hpbGQodG9nZ2xlVGV4dCk7XG4gICAgdG9nZ2xlYmFyLmFwcGVuZENoaWxkKHRvZ2dsZUNvbnRhaW5lcilcbiAgICBpbnN0cnVjdENvbnQuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3RVTCk7XG4gICAgdG9nZ2xlYmFyLmFwcGVuZENoaWxkKGluc3RydWN0Q29udCk7XG4gICAgcmV0dXJuIHRvZ2dsZWJhcjtcbn1cblxuZnVuY3Rpb24gbWFrZVRyYXkocGllY2VzKSB7XG4gICAgY29uc3QgdHJheSA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnc2V0LXRyYXknIH0pO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDAsIGogPSBNYXRoLmZsb29yKChwaWVjZXMubGVuZ3RoKSAvIDIpOyBqIDwgcGllY2VzLmxlbmd0aDsgaSsrLCBqKyspIHtcbiAgICAgICAgaWYgKGkgPCBNYXRoLmZsb29yKHBpZWNlcy5sZW5ndGggLyAyKSkgeyBcbiAgICAgICAgICAgIHRyYXkuYXBwZW5kQ2hpbGQobWFrZVRyYXlJdGVtKHBpZWNlc1tpXSkpO1xuICAgICAgICAgICAgdHJheS5sYXN0Q2hpbGQuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJheScsIGAke2luZGV4Kyt9YCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJheS5hcHBlbmRDaGlsZChtYWtlVHJheUl0ZW0ocGllY2VzW2pdKSk7XG4gICAgICAgIHRyYXkubGFzdENoaWxkLmZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKCdkYXRhLXRyYXknLCBgJHtpbmRleCsrfWApO1xuICAgIH1cbiAgICByZXR1cm4gdHJheTtcbn1cblxuLy8gY3JlYXRlIGhvbGRlciBmb3IgaWNvbnNcbmZ1bmN0aW9uIG1ha2VUcmF5SXRlbShwaWVjZSkge1xuICAgIGNvbnN0IGl0ZW0gPSBtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ3RyYXktaXRlbScgfSlcbiAgICBpdGVtLmFwcGVuZENoaWxkKG1ha2VQaWVjZUljb24ocGllY2UpKTtcbiAgICByZXR1cm4gaXRlbTtcbn1cblxuLy8gY3JlYXRlIGljb25zXG5mdW5jdGlvbiBtYWtlUGllY2VJY29uKHNpemUpIHtcbiAgICBjb25zdCBpY29uID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdpY29uLXBpZWNlJyB9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICBjb25zdCBjZWxsID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdpY29uLWNlbGwnIH0pO1xuICAgICAgICBpY29uLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIH1cbiAgICBpY29uLmRhdGFzZXQuc2l6ZSA9IHNpemU7XG4gICAgcmV0dXJuIGljb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRHJhZ0ljb24oc2l6ZSwgdmVydGljYWwsIHRyYXksIGNlbGxTaXplKSB7XG4gICAgY29uc3QgZHJhZ0ljb24gPSBtYWtlUGllY2VJY29uKE51bWJlcihzaXplKSk7XG4gICAgZHJhZ0ljb24uc2V0QXR0cmlidXRlKCdpZCcsICdkcmFnZ2VkJyk7XG4gICAgZHJhZ0ljb24uc2V0QXR0cmlidXRlKCdkYXRhLXRyYXknLCB0cmF5KTtcbiAgICBpZiAodmVydGljYWwpIHsgZHJhZ0ljb24uY2xhc3NMaXN0LmFkZCgnZHJhZy15JykgfVxuICAgIFsuLi5kcmFnSWNvbi5jaGlsZHJlbl0uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIGNoaWxkLnN0eWxlLmhlaWdodCA9IGNlbGxTaXplO1xuICAgICAgICBjaGlsZC5jbGFzc0xpc3QuYWRkKCdkcmFnLWNlbGwnKVxuICAgIH0pO1xuICAgIHJldHVybiBkcmFnSWNvbjsgXG59IiwiLy8gQ3JlYXRlIGEgZHJhZ2dhYmxlIGl0ZW1cblxubGV0IGVsZW1lbnQ7XG5sZXQgeE9mZjtcbmxldCB5T2ZmO1xuY29uc3QgbW92ZUhhbmRsZXIgPSBtb3ZlLmJpbmQodGhpcyk7XG5jb25zdCBlbmRIYW5kbGVyID0gZW5kLmJpbmQodGhpcyk7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIERyYWdFbGVtZW50KGVsZW0sIHgsIHkpIHtcbiAgICBlbGVtZW50ID0gZWxlbTtcbiAgICB4T2ZmID0geDtcbiAgICB5T2ZmID0geTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW92ZUhhbmRsZXIsIHRydWUpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZW5kSGFuZGxlciwgdHJ1ZSk7XG59XG5cblxuZnVuY3Rpb24gbW92ZShlKSB7XG4gICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlbGVtZW50LnN0eWxlLnRvcCA9IChlLmNsaWVudFkgLSB5T2ZmKSArICdweCc7XG4gICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gKGUuY2xpZW50WCAtIHhPZmYpICsgJ3B4Jztcbn1cblxuZnVuY3Rpb24gZW5kKGUpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW92ZUhhbmRsZXIsIHRydWUpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZW5kSGFuZGxlciwgdHJ1ZSk7XG59IiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gJy4vU2hpcC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBHYW1lYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKHNpemUpIHtcbiAgICAgICAgdGhpcy5TSVpFID0gc2l6ZTtcbiAgICAgICAgdGhpcy5hbGxTaGlwcyA9IFtdO1xuICAgICAgICB0aGlzLmJvYXJkID0gW107XG4gICAgICAgIHRoaXMuYWxsSGl0ID0gW107XG4gICAgICAgIHRoaXMuYWxsTWlzcyA9IFtdO1xuICAgICAgICB0aGlzLmFsbFBsYWNlZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemUgKiBzaXplOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmQucHVzaCh7c2hpcDogbnVsbCwgaGl0OiBmYWxzZX0pXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZ2V0SGl0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hbGxIaXQ7XG4gICAgfVxuXG4gICAgZ2V0TWlzcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxsTWlzcztcbiAgICB9XG5cbiAgICBnZXRQbGFjZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFsbFBsYWNlZDtcbiAgICB9XG5cbiAgICBnZXRTaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5TSVpFICogdGhpcy5TSVpFO1xuICAgIH1cblxuICAgIGlzSGl0KGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkW2luZGV4XS5oaXQ7XG4gICAgfVxuXG4gICAgLy8gcGxhY2UgbmV3IHNoaXAgb24gZ2FtZWJvYXJkIHJldHVybnMgc2hpcCBvciBmYWxzZSBpZiBub3QgbGVnYWwgcGxhY2VtZW50XG4gICAgYWRkU2hpcChzaGlwU2l6ZSwgaGVhZCwgdmVydGljYWwgPSBmYWxzZSkge1xuICAgICAgICAvLyBkaXNhbGxvdyBwbGFjZW1lbnQgYmV5b25kIGJvYXJkJ3MgYm91bmRhcmllc1xuICAgICAgICBpZiAoIXZlcnRpY2FsICYmICgoaGVhZCAlIHRoaXMuU0laRSkgKyBzaGlwU2l6ZSA+IHRoaXMuU0laRSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHZlcnRpY2FsICYmIChNYXRoLmZsb29yKGhlYWQgLyB0aGlzLlNJWkUpKSArIHNoaXBTaXplID4gdGhpcy5TSVpFKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IHRvUGxhY2UgPSB0aGlzLmdldEluZGVjZXMoc2hpcFNpemUsIGhlYWQsIHZlcnRpY2FsKTtcbiAgICAgICAgLy8gaW5zcGVjdCBmb3IgYW55IG92ZXJsYXBwaW5nIGNvbmZsaWN0XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9QbGFjZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbdG9QbGFjZVtpXV0uc2hpcCkgeyByZXR1cm4gZmFsc2U7fSBcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbmV3U2hpcCA9IG5ldyBTaGlwKHNoaXBTaXplKTtcbiAgICAgICAgdG9QbGFjZS5mb3JFYWNoKGluZGV4ID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWxsUGxhY2VkLnB1c2goaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5ib2FyZFtpbmRleF0uc2hpcCA9IG5ld1NoaXBcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWxsU2hpcHMucHVzaCh0b1BsYWNlKTtcbiAgICAgICAgcmV0dXJuIG5ld1NoaXA7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJucyBhbiBhcnJheSBvZiBhIHNoaXAncyBzZXF1ZW50aWFsIHBvc2l0aW9uaW5nXG4gICAgZ2V0SW5kZWNlcyhzaXplLCBoZWFkLCB2ZXJ0aWNhbCkge1xuICAgICAgICBjb25zdCBpbmRlY2VzID0gW107XG4gICAgICAgIGlmICh2ZXJ0aWNhbCkge1xuICAgICAgICAgICAgd2hpbGUgKHNpemUtLSA+IDApIHtcbiAgICAgICAgICAgICAgICBpbmRlY2VzLnB1c2goaGVhZCk7XG4gICAgICAgICAgICAgICAgaGVhZCArPSB0aGlzLlNJWkU7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2hpbGUgKHNpemUtLSA+IDApIHtcbiAgICAgICAgICAgICAgICBpbmRlY2VzLnB1c2goaGVhZCsrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5kZWNlcztcbiAgICB9XG5cbiAgICAvLyBzZXRzIGF0dGFjayBhY3Rpb25zLCBtdXN0IGJlIGludGVnZXIgYW5kIHdpdGhpbiB0aGUgZ2FtZWJvYXJkLCBpZ25vcmVzIHNwYWNlcyBhbHJlYWR5IGhpdFxuICAgIHJlY2VpdmVBdHRhY2soaW5kZXgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpbmRleCAhPSAnbnVtYmVyJykgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCd2YWx1ZSBtdXN0IGJlIE51bWJlcicpIH07XG4gICAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihpbmRleCkpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignT25seSBpbnRlZ2VyIHZhbHVlcycpIH07XG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5ib2FyZC5sZW5ndGgpIHsgdGhyb3cgbmV3IFJhbmdlRXJyb3IoYHZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAke3RoaXMuYm9hcmQubGVuZ3RoIC0gMX1gKTsgfVxuICAgICAgICBpZiAodGhpcy5ib2FyZFtpbmRleF0uaGl0KSB7IHJldHVybjsgfVxuXG4gICAgICAgIHRoaXMuYm9hcmRbaW5kZXhdLmhpdCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW2luZGV4XS5zaGlwKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW2luZGV4XS5zaGlwLmhpdCgpO1xuICAgICAgICAgICAgdGhpcy5hbGxIaXQucHVzaChpbmRleCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFtpbmRleF0uc2hpcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWxsTWlzcy5wdXNoKGluZGV4KTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gY29uZmlybXMgdGhhdCB0aGUgc2hpcCBhdCBlYWNoIGZyb250IHBvc2l0aW9uIGluIGFsbFNoaXBzIGlzIHN1bmtcbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIGxldCBzdW5rID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbGxTaGlwcy5mb3JFYWNoKHNoaXAgPT4geyBcbiAgICAgICAgICAgIGlmICghdGhpcy5ib2FyZFtzaGlwWzBdXS5zaGlwLmlzU3VuaygpKSB7IHN1bmsgPSBmYWxzZTsgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHN1bms7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vR2FtZWJvYXJkXCI7XG4vLyBob2xkcyBwbGF5ZXIncyBnYW1lYm9hcmQsIGNhbiBkZXRlcm1pbmUgbmV4dCBtb3ZlIGlmIGNwdSBcbi8vIHBhc3MgYW4gYXJyYXkgb2YgYXJyYXlzIGluIFtzaGlwIHNpemUsIHNoaXAgaW5kZXgsIGlzIHZlcnRpY2FsKHRydWUvZmFsc2UpXSBmb3JtYXRcbi8vIHRvIHBvcHVsYXRlIHRoZSBnYW1lYm9hcmRcbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHRvQWRkKSB7XG4gICAgICAgIHRoaXMuU0laRSA9IDEwO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEdhbWVib2FyZCh0aGlzLlNJWkUpO1xuICAgICAgICB0aGlzLm5leHRNb3ZlID0gW107XG4gICAgICAgIGlmICh0b0FkZCkgeyB0b0FkZC5mb3JFYWNoKHNoaXAgPT4gdGhpcy5ib2FyZC5hZGRTaGlwKHNoaXBbMF0sIHNoaXBbMV0sIHNoaXBbMl0pICk7IH1cbiAgICAgICAgZWxzZSB7IHRoaXMucmFuZG9tQm9hcmQoWzUsIDQsIDMsIDMsIDJdKS5mb3JFYWNoKHNoaXAgPT4ge3RoaXMuYm9hcmQuYWRkU2hpcChzaGlwWzBdLCBzaGlwWzFdLCBzaGlwWzJdKX0gKTsgfVxuICAgIH07XG5cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIGdldEFsbFNoaXBJbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQuZ2V0UGxhY2VkKCk7XG4gICAgfVxuXG4gICAgZ2V0TWlzc0luZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZC5nZXRNaXNzKCk7XG4gICAgfVxuXG4gICAgZ2V0SGl0SW5kZXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkLmdldEhpdCgpO1xuICAgIH1cblxuICAgIC8vIGNvbmZpcm1zIGlmIHBsYXllciBpcyBkZWZlYXRlZFxuICAgIGlzRGVmZWF0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkLmlzU3VuaygpO1xuICAgIH1cblxuICAgIC8vIHJldHVybnMgZWl0aGVyIHRoZSBoaXQgc2hpcCBvciBudWxsXG4gICAgdGFrZUhpdChpbmRleCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuYm9hcmQucmVjZWl2ZUF0dGFjayhpbmRleCkpID8gJ2hpdCcgOiAnbWlzcyc7XG4gICAgfVxuXG4gICAgLy8gY29uZmlybXMgaWYgYSBtb3ZlIGlzIHZhbGlkXG4gICAgaXNWYWxpZE1vdmUoaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLmJvYXJkLmdldFNpemUoKSkgeyByZXR1cm4gZmFsc2UgfTtcbiAgICAgICAgcmV0dXJuICF0aGlzLmJvYXJkLmlzSGl0KGluZGV4KTtcbiAgICB9XG5cbiAgICAvLyB0YWtlcyBhIGNwdSB0dXJuIGFnYWluc3QgcGxheWVyLCByZXR1cm5zIG1vdmUgdGFrZW5cbiAgICBjcHVUdXJuKCkge1xuICAgICAgICBsZXQgbW92ZTtcbiAgICAgICAgaWYgKHRoaXMubmV4dE1vdmUubGVuZ3RoID09PSAwKSB7IG1vdmUgPSB0aGlzLnJhbmRvbU1vdmUoKTsgfVxuICAgICAgICByZXR1cm4gbW92ZTtcbiAgICB9XG5cbiAgICAvLyBlbGVjdCBhIHZhbGlkIGZyZWUgc3BhY2UgdG8gYXR0YWNrIGZyb20gdGhlIGdhbWVib2FyZFxuICAgIHJhbmRvbU1vdmUoKSB7XG4gICAgICAgIGNvbnN0IG1vdmUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLnBvdyh0aGlzLlNJWkUsIDIpKTtcbiAgICAgICAgcmV0dXJuICh0aGlzLmlzVmFsaWRNb3ZlKG1vdmUpKSA/IG1vdmUgOiB0aGlzLnJhbmRvbU1vdmUoKTtcbiAgICB9XG5cbiAgICAvLyByZXR1cm5zIGEgc2V0IG9mIFtzaGlwIHNpemUsIHNoaXAgaW5kZXgsIGlzIHZlcnRpY2FsKHRydWUvZmFsc2UpXSBzdWNoIHRoYXQgXG4gICAgLy8gdGhlcmUgaXMgbm8gb3ZlcmxhcCBvciBjb25mbGljc1xuICAgIHJhbmRvbUJvYXJkKHRvQWRkKSB7XG4gICAgICAgIGNvbnN0IGFsbFNoaXBzID0gW107XG4gICAgICAgIGNvbnN0IGJvYXJkID0gbmV3IEFycmF5KE1hdGgucG93KHRoaXMuU0laRSwgMikpO1xuICAgICAgICB0b0FkZC5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hlY2sgPSBhbGxTaGlwcy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoYWxsU2hpcHMubGVuZ3RoID09PSBjaGVjaykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzWSA9IChNYXRoLnJhbmRvbSgpIDwgMC41KTtcbiAgICAgICAgICAgICAgICBjb25zdCBoZWFkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5wb3codGhpcy5TSVpFLCAyKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9QbGFjZSA9IHRoaXMuZ2V0Q29vcmQoc2hpcCwgaGVhZCwgaXNZKTtcbiAgICAgICAgICAgICAgICBpZiAodG9QbGFjZVt0b1BsYWNlLmxlbmd0aCAtIDFdIDwgTWF0aC5wb3codGhpcy5TSVpFLCAyKSBcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy52YWxpZFNoaXAodG9QbGFjZSwgaXNZKSBcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy52YWxpZFBsYWNlKGJvYXJkLCB0b1BsYWNlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9QbGFjZS5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkW2NlbGxdID0gdHJ1ZX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsU2hpcHMucHVzaChbc2hpcCwgaGVhZCwgaXNZXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gYWxsU2hpcHM7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIGFuIGFycmF5IG9mIGdyaWQgY29vcmRpbmF0ZXMgZWl0aGVyIHggb3IgeSBhbGlnbmVkXG4gICAgZ2V0Q29vcmQoc2l6ZSwgaGVhZCwgaXNZKSB7XG4gICAgICAgIGNvbnN0IGFyciA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgYXJyLnB1c2goaGVhZCk7XG4gICAgICAgICAgICBpZiAoaXNZKSB7IGhlYWQgKz0gdGhpcy5TSVpFOyB9XG4gICAgICAgICAgICBlbHNlIHsgaGVhZCArPSAxIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIC8vIGNvbmZpcm0gaWYgYSBzZXF1ZW5jZSBvZiBpbmRpY2VzIGFyZSB2YWxpZCBvbiBhIGdyaWRcbiAgICB2YWxpZFNoaXAoYXJyLCBpc1kpIHtcbiAgICAgICAgcmV0dXJuIChpc1kpIFxuICAgICAgICAgICAgPyAoYXJyWzBdICUgdGhpcy5TSVpFID09PSBhcnJbYXJyLmxlbmd0aCAtIDFdICUgdGhpcy5TSVpFKVxuICAgICAgICAgICAgOiAoTWF0aC5mbG9vcihhcnJbMF0gLyB0aGlzLlNJWkUpID09PSBNYXRoLmZsb29yKGFyclthcnIubGVuZ3RoIC0gMV0gLyB0aGlzLlNJWkUpKTsgXG4gICAgfVxuXG4gICAgLy8gY2hlY2sgaWYgYW55IG92ZXJsYXAgZXhpc3RzIGJldHdlZW4gYm9hcmQgYW5kIGNhbmRpZGF0ZWQgaW5kaWNlc1xuICAgIHZhbGlkUGxhY2UoYm9hcmQsIGFycikge1xuICAgICAgICBsZXQgdmFsaWQgPSB0cnVlO1xuICAgICAgICBhcnIuZm9yRWFjaChpbmRleCA9PiB7XG4gICAgICAgICAgICBpZiAoYm9hcmRbaW5kZXhdKSB7IHZhbGlkID0gZmFsc2UgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gdmFsaWQ7XG4gICAgfVxufTtcbiIsImltcG9ydCB7IERyYWdFbGVtZW50IH0gZnJvbSAnLi9EcmFnRWxlbWVudC5qcyc7XG5pbXBvcnQgeyBhZGp1c3RUb0luZGV4LCBidWlsZFNldFBsYXllciwgbWFrZURyYWdJY29uIH0gZnJvbSAnLi9ET01IZWxwZXJzLmpzJztcblxuLy8gRGlzcGxheSBmb3IgaW5pdGlhbHppaW5nIGEgcGxheWVyXG5leHBvcnQgY2xhc3MgU2V0UGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihzaXplLCBwaWVjZXMsIGlzTXVsdGkpIHtcbiAgICAgICAgdGhpcy5TSVpFID0gc2l6ZTtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBidWlsZFNldFBsYXllcihzaXplLCBwaWVjZXMsIGlzTXVsdGkpO1xuICAgICAgICB0aGlzLmJpbmRUcmF5KCk7XG4gICAgICAgIHRoaXMuZHJhZ0V2ZW50ID0ge1xuICAgICAgICAgICAgZHJhZ092ZXI6IG51bGwsXG4gICAgICAgICAgICBkcmFnR3JvdXA6IFtdXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0SXRlbSA9IFtdO1xuICAgICAgICB0aGlzLmRyYWdQaWNrVXBTdGFydEhhbmRsZXIgPSB0aGlzLmRyYWdQaWNrVXBTdGFydC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYWdNb3ZlSGFuZGxlciA9IHRoaXMuZHJhZ01vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmFnRW5kSGFuZGxlciA9IHRoaXMuZHJhZ0VuZC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGJpbmRUcmF5KCkge1xuICAgICAgICB0aGlzLmdldENvbnRhaW5lcigpLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pY29uLXBpZWNlJykuZm9yRWFjaChpY29uID0+IHtcbiAgICAgICAgICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHRoaXMuZHJhZ1N0YXJ0KGUpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0Q29udGFpbmVyKCkgeyByZXR1cm4gdGhpcy5jb250YWluZXI7IH1cbiAgICBnZXRHcmlkKCkgeyByZXR1cm4gdGhpcy5nZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yKCcuZ3JpZC1ib3gnKTsgfVxuICAgIGdldFRyYXkoKSB7IHJldHVybiB0aGlzLmdldENvbnRhaW5lcigpLnF1ZXJ5U2VsZWN0b3IoJy5zZXQtdHJheScpOyB9XG4gICAgZ2V0QnV0dG9uKCkgeyByZXR1cm4gdGhpcy5nZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LWJ0bicpOyB9XG4gICAgZ2V0TXVsdGkoKSB7IHJldHVybiB0aGlzLmdldENvbnRhaW5lcigpLnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtY2hrJykuY2hlY2tlZCB9XG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIG11bHRpOiB0aGlzLmdldE11bHRpKCksXG4gICAgICAgICAgICBib2FyZDogW11cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEl0ZW0uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFkZCA9IFtdO1xuICAgICAgICAgICAgYWRkLnB1c2goaXRlbS5zaXplKTtcbiAgICAgICAgICAgIGFkZC5wdXNoKGl0ZW0uaGVhZCk7XG4gICAgICAgICAgICBhZGQucHVzaChpdGVtLnNldFkpO1xuICAgICAgICAgICAgZGF0YS5ib2FyZC5wdXNoKGFkZCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICAvLyBhcHBlbmQgc2V0cGxheWVyIHRvIG1haW4gY29udGFpbmVyLCBzZXRzIGluaXRpYWwgaGVpZ2h0IG9mIGFsbCBpY29uIGNlbGxzXG4gICAgLy8gYmluZHMgd2luZG93IHJlc2l6aW5nIHRvIHJlc2l6ZSBpY29ucyB0byBtYXRjaCBncmlkIHNpemVcbiAgICBkaXNwbGF5KCkgeyBcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGFpbmVyJykuYXBwZW5kQ2hpbGQodGhpcy5nZXRDb250YWluZXIoKSk7IFxuICAgICAgICB0aGlzLnNldFRyYXlJY29uU2l6ZSgpXG4gICAgICAgIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWQtYm94JykuY2hpbGRyZW4uaXRlbSgxMSkuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmljb24tY2VsbCcpLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gY2xlYXIgc2V0cGxheWVyXG4gICAgcmVtb3ZlKCkgeyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2V0LWNvbnRhaW5lcicpLnJlbW92ZSgpOyB9XG5cbiAgICAvLyBzZXQgdGhlIGljb24ncyBjZWxsIHNpemUgdG8gbWF0Y2ggdGhlIGdyaWQncyBjZWxsIHNpemVcbiAgICBzZXRUcmF5SWNvblNpemUoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pY29uLWNlbGwnKS5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgY2VsbC5zdHlsZS5oZWlnaHQgPSB0aGlzLkdldFRyYXlJY29uU2l6ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBHZXRUcmF5SWNvblNpemUoKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmdldEdyaWQoKS5jaGlsZHJlbi5pdGVtKGFkanVzdFRvSW5kZXgoMCwgdGhpcy5TSVpFKSkuY2xpZW50SGVpZ2h0fXB4YDtcbiAgICB9XG5cbiAgICAvLyBBbGwgZHJhZy9kcm9wIGFjdGlvbnMgdG8gZm9sbG93XG4gICAgLy8gY3JlYXRlcyBhbmQgYXBwZW5kcyBkcmFnZ2VkIGljb24sIHNldHMgZHJhZyBiaW5kaW5nc1xuICAgIGRyYWdTdGFydChlKSB7XG4gICAgICAgIGNvbnN0IGljb24gPSAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpY29uLWNlbGwnKSkgPyBlLnRhcmdldC5wYXJlbnROb2RlIDogZS50YXJnZXQ7XG4gICAgICAgIGlmIChpY29uLmNsYXNzTGlzdC5jb250YWlucygnaWNvbi1kaXNhYmxlJykpIHsgcmV0dXJuIH1cbiAgICAgICAgY29uc3QgZHJhZ0ljb24gPSBtYWtlRHJhZ0ljb24oXG4gICAgICAgICAgICBOdW1iZXIoaWNvbi5kYXRhc2V0LnNpemUpLFxuICAgICAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2dnbGUtYm9keScpLmRhdGFzZXQueSA9PT0gJ3RydWUnKSxcbiAgICAgICAgICAgIGljb24uZGF0YXNldC50cmF5LFxuICAgICAgICAgICAgdGhpcy5HZXRUcmF5SWNvblNpemUoKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdpY29uLWRpc2FibGUnKTtcbiAgICAgICAgaWNvbi5hcHBlbmRDaGlsZChkcmFnSWNvbik7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IChkcmFnSWNvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2RyYWcteScpKVxuICAgICAgICAgICAgPyB0aGlzLmdldFlvZmZzZXQoZHJhZ0ljb24sIGUuY2xpZW50WCAtIGRyYWdJY29uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQpXG4gICAgICAgICAgICA6IDA7XG4gICAgICAgIGlmICghZHJhZ0ljb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdkcmFnLXknKSkgeyBcbiAgICAgICAgICAgIHRoaXMuc2V0WEF0dHJpYnV0ZShkcmFnSWNvbiwgZS5jbGllbnRYIC0gZHJhZ0ljb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCk7IFxuICAgICAgICB9O1xuICAgICAgICBEcmFnRWxlbWVudChkcmFnSWNvbiwgZS5jbGllbnRYIC0gb2Zmc2V0LCBlLmNsaWVudFkpOyBcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGFpbmVyJykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMuZHJhZ0VuZEhhbmRsZXIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmRyYWdNb3ZlSGFuZGxlciwgdHJ1ZSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmRyYWdFbmRIYW5kbGVyLCB0cnVlKTtcbiAgICB9XG5cbiAgICBkcmFnUGlja1VwU3RhcnQoZSkge1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICB3aGlsZSAodGhpcy5zZXRJdGVtW2luZGV4XS50cmF5ICE9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LmdldHRyYXkpKSB7IGluZGV4Kys7IH1cbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gdGhpcy5zZXRJdGVtW2luZGV4XTtcbiAgICAgICAgY29uc3QgZHJhZ0l0ZW0gPSBtYWtlRHJhZ0ljb24oXG4gICAgICAgICAgICBzZWxlY3Quc2l6ZSxcbiAgICAgICAgICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9nZ2xlLWJvZHknKS5kYXRhc2V0LnkgPT09ICd0cnVlJyksXG4gICAgICAgICAgICBzZWxlY3QudHJheSxcbiAgICAgICAgICAgIHRoaXMuR2V0VHJheUljb25TaXplKClcbiAgICAgICAgKVxuICAgICAgICBlLnRhcmdldC5hcHBlbmRDaGlsZChkcmFnSXRlbSk7XG4gICAgICAgIHRoaXMuY29uZmlnUGlja1VwKGRyYWdJdGVtLCAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZ2dsZS1ib2R5JykuZGF0YXNldC55ID09PSAndHJ1ZScpKTtcbiAgICAgICAgRHJhZ0VsZW1lbnQoZHJhZ0l0ZW0sIGUuY2xpZW50WCwgZS5jbGllbnRZKTtcbiAgICAgICAgdGhpcy5yZW1vdmVQbGFjZWQoc2VsZWN0LmhlYWQsIHNlbGVjdC5zaXplLCBzZWxlY3Quc2V0WSk7XG4gICAgICAgIHRoaXMuc2V0SXRlbS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5kcmFnRW5kSGFuZGxlcik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZHJhZ01vdmVIYW5kbGVyLCB0cnVlKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGFpbmVyJykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuZHJhZ0VuZEhhbmRsZXIsIHRydWUpO1xuXG4gICAgICAgIHRoaXMuZ2V0QnV0dG9uKCkuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIENvbmZpZ3VyZSBwb3NpdGlvbiBhbmQgZGF0YSBhdHRyaWJ1dGVzIHdoZW4gcGlja2luZyB1cCBmcm9tIHRoZSBib2FyZFxuICAgIGNvbmZpZ1BpY2tVcChlbGVtZW50LCBpc1kpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSAnMHB4JztcbiAgICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gICAgICAgIHRoaXMuc2V0WEF0dHJpYnV0ZShlbGVtZW50LCAwKTtcbiAgICB9XG5cbiAgICAvLyBjbGVhcnMgYWxsIGNlbGxzIG9mIHBsYWNlZCBvYmplY3QncyBiaW5kaW5nc1xuICAgIHJlbW92ZVBsYWNlZChoZWFkSW5kZXgsIGxlbmd0aCwgaXNZKSB7XG4gICAgICAgIGxldCBjZWxsID0gdGhpcy5nZXRHcmlkKCkuY2hpbGRyZW4uaXRlbShhZGp1c3RUb0luZGV4KGhlYWRJbmRleCwgdGhpcy5TSVpFKSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnc2V0Jyk7XG4gICAgICAgICAgICBjZWxsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1nZXR0cmF5Jyk7XG4gICAgICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuZHJhZ1BpY2tVcFN0YXJ0SGFuZGxlciwgdHJ1ZSk7XG4gICAgICAgICAgICBjb25zdCBuZXh0Q2VsbCA9IChpc1kpIFxuICAgICAgICAgICAgICAgID8gTnVtYmVyKGNlbGwuZGF0YXNldC5pbmRleCkgKyB0aGlzLlNJWkUgXG4gICAgICAgICAgICAgICAgOiBOdW1iZXIoY2VsbC5kYXRhc2V0LmluZGV4KSArIDE7XG4gICAgICAgICAgICBjZWxsID0gdGhpcy5nZXRHcmlkKCkuY2hpbGRyZW4uaXRlbShhZGp1c3RUb0luZGV4KG5leHRDZWxsLCB0aGlzLlNJWkUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFhBdHRyaWJ1dGUoZWxlbWVudCwgeFBvcykge1xuICAgICAgICBjb25zdCBsZWZ0ID0gTWF0aC5mbG9vcih4UG9zIC8gZWxlbWVudC5maXJzdENoaWxkLmNsaWVudFdpZHRoKTtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGVmdCcsIGxlZnQpO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1yaWdodCcsIGVsZW1lbnQuY2hpbGRFbGVtZW50Q291bnQgLSBsZWZ0IC0gMSk7XG4gICAgfVxuXG4gICAgZ2V0WW9mZnNldChlbGVtZW50LCB4UG9zKSB7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHhQb3MgLSAoZWxlbWVudC5jbGllbnRXaWR0aCAvIDIpXG4gICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGAke29mZnNldH1weGA7XG4gICAgICAgIHJldHVybiBvZmZzZXQ7XG4gICAgfVxuXG4gICAgLy8gb24gZHJhZyBpbnZlc3RpZ2F0ZSBpZiBlbGVtZW50IGJlbG93IGN1cnNvciBpcyBhIHZhbGlkIGhvdmVyIHRhcmdldFxuICAgIC8vIGFuZCBhZGp1c3QgZGlzcGxheWVkIGhvdmVyIHRhcmdldHNcbiAgICBkcmFnTW92ZShlKSB7XG4gICAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RyYWdnZWQnKTtcbiAgICAgICAgaWNvbi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIGxldCBiZWxvdyA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoZS5jbGllbnRYLCBlLmNsaWVudFkpO1xuICAgICAgICBpY29uLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgIGlmIChiZWxvdy5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGFibGUnKSBcbiAgICAgICAgICAgICYmIHRoaXMuZHJhZ0V2ZW50LmRyYWdPdmVyICE9IGJlbG93KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckhvdmVyKCk7XG4gICAgICAgICAgICAgICAgaWYgKGljb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdkcmFnLXknKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEhvdmVyWShcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlbG93LFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5jaGlsZEVsZW1lbnRDb3VudCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRIb3ZlclgoXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWxvdywgXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoaWNvbi5kYXRhc2V0LmxlZnQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGljb24uZGF0YXNldC5yaWdodCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghYmVsb3cuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RhYmxlJykpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJIb3ZlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRnVuY3Rpb24gdG8gY2xlYXIgZHJhZ2dlZCBhY3Rpb25zXG4gICAgZHJhZ0VuZChlKSB7XG4gICAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgdmFsaWRTZXQgPSB0cnVlO1xuICAgICAgICBjb25zdCBkcmFnSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcmFnZ2VkJyk7XG4gICAgICAgIGlmIChkcmFnSXRlbS5jaGlsZEVsZW1lbnRDb3VudCA9PT0gdGhpcy5kcmFnRXZlbnQuZHJhZ0dyb3VwLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5kcmFnRXZlbnQuZHJhZ0dyb3VwLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZXQnKSkgeyB2YWxpZFNldCA9IGZhbHNlO31cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7IHZhbGlkU2V0ID0gZmFsc2U7IH1cbiAgICAgICAgaWYgKHZhbGlkU2V0KSB7XG4gICAgICAgICAgICB0aGlzLmRyYWdFdmVudC5kcmFnR3JvdXAuZm9yRWFjaChjZWxsID0+IHsgXG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzZXQnKTsgXG4gICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZ2V0dHJheScsIGRyYWdJdGVtLmRhdGFzZXQudHJheSk7XG4gICAgICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmRyYWdQaWNrVXBTdGFydEhhbmRsZXIsIHRydWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnNldEl0ZW0ucHVzaCh7XG4gICAgICAgICAgICAgICAgdHJheTogTnVtYmVyKGRyYWdJdGVtLmRhdGFzZXQudHJheSksXG4gICAgICAgICAgICAgICAgaGVhZDogKGRyYWdJdGVtLmNsYXNzTGlzdC5jb250YWlucygnZHJhZy15JykpIFxuICAgICAgICAgICAgICAgICAgICA/IE51bWJlcih0aGlzLmRyYWdFdmVudC5kcmFnR3JvdXBbMF0uZGF0YXNldC5pbmRleCkgXG4gICAgICAgICAgICAgICAgICAgIDogTnVtYmVyKHRoaXMuZHJhZ0V2ZW50LmRyYWdHcm91cFswXS5kYXRhc2V0LmluZGV4IC0gZHJhZ0l0ZW0uZGF0YXNldC5sZWZ0KSxcbiAgICAgICAgICAgICAgICBzZXRZOiBkcmFnSXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2RyYWcteScpLFxuICAgICAgICAgICAgICAgIHNpemU6IGRyYWdJdGVtLmNoaWxkRWxlbWVudENvdW50XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldC10cmF5JylcbiAgICAgICAgICAgIC5jaGlsZHJlbi5pdGVtKE51bWJlcihkcmFnSXRlbS5kYXRhc2V0LnRyYXkpKVxuICAgICAgICAgICAgLmZpcnN0Q2hpbGQuY2xhc3NMaXN0XG4gICAgICAgICAgICAucmVtb3ZlKCdpY29uLWRpc2FibGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdldFRyYXkoKS5jaGlsZEVsZW1lbnRDb3VudCA9PT0gdGhpcy5zZXRJdGVtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5nZXRCdXR0b24oKS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nZXRCdXR0b24oKS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHJhZ2dlZCcpLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLmNsZWFySG92ZXIoKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGFpbmVyJykucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMuZHJhZ0VuZEhhbmRsZXIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250YWluZXInKS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmRyYWdNb3ZlSGFuZGxlciwgdHJ1ZSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRhaW5lcicpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmRyYWdFbmRIYW5kbGVyLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgYWRkaW5nIGhvdmVyIGV2ZW50XG4gICAgc2V0SG92ZXJYKGNlbGwsIGxlZnQsIHJpZ2h0KSB7ICBcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xuICAgICAgICB0aGlzLmRyYWdFdmVudC5kcmFnT3ZlciA9IGNlbGw7ICAgICAgICBcbiAgICAgICAgdGhpcy5kcmFnRXZlbnQuZHJhZ0dyb3VwLnB1c2goY2VsbCk7XG4gICAgICAgIHRoaXMuaG92ZXJTaWJsaW5ncyhjZWxsLCBsZWZ0LCB0cnVlKTtcbiAgICAgICAgdGhpcy5ob3ZlclNpYmxpbmdzKGNlbGwsIHJpZ2h0LCBmYWxzZSk7ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgfVxuXG4gICAgc2V0SG92ZXJZKHJvb3QsIG51bVNpYikge1xuICAgICAgICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWQtYm94Jyk7XG4gICAgICAgIGxldCBpbmRleCA9IE51bWJlcihyb290LmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICBsZXQgdG9BZGQgPSByb290O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVNpYjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodG9BZGQpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IE51bWJlcih0b0FkZC5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdFdmVudC5kcmFnR3JvdXAucHVzaCh0b0FkZCk7XG4gICAgICAgICAgICAgICAgdG9BZGQuY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcbiAgICAgICAgICAgICAgICB0b0FkZCA9IGdyaWQuY2hpbGRyZW4uaXRlbShhZGp1c3RUb0luZGV4KGluZGV4ICsgdGhpcy5TSVpFLCB0aGlzLlNJWkUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gaGlnaGxpZ2h0IHRoZSBjb3JyZWN0IG5laWdoYm9yaW5nIHNpYmxpbmdzIG9uIGhvdmVyXG4gICAgaG92ZXJTaWJsaW5ncyhyb290LCBudW1TaWIsIGxlZnQpIHtcbiAgICAgICAgbGV0IHRvQWRkID0gcm9vdDtcbiAgICAgICAgbGV0IGluZGV4ID0gTnVtYmVyKHJvb3QuZGF0YXNldC5pbmRleCk7XG4gICAgICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoaW5kZXggLyB0aGlzLlNJWkUpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVNpYjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjaGVjayA9IChsZWZ0KSA/ICgoaW5kZXggLSAoaSArIDEpKSAvIHRoaXMuU0laRSkgOiAoKGluZGV4ICsgKGkgKyAxKSkgLyB0aGlzLlNJWkUpO1xuICAgICAgICAgICAgaWYgKHJvdyA9PT0gTWF0aC5mbG9vcihjaGVjaykpIHtcbiAgICAgICAgICAgICAgICB0b0FkZCA9IChsZWZ0KSA/IHRvQWRkLnByZXZpb3VzU2libGluZyA6IHRvQWRkLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIHRvQWRkLmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7IFxuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ0V2ZW50LmRyYWdHcm91cC5wdXNoKHRvQWRkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJlc2V0cyBzZXQgaG92ZXIgYWN0aW9uc1xuICAgIGNsZWFySG92ZXIoKSB7XG4gICAgICAgIHRoaXMuZHJhZ0V2ZW50LmRyYWdPdmVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5kcmFnRXZlbnQuZHJhZ0dyb3VwLmZvckVhY2goY2VsbCA9PiBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJykpO1xuICAgICAgICB0aGlzLmRyYWdFdmVudC5kcmFnR3JvdXAubGVuZ3RoID0gMDtcbiAgICB9ICAgXG59XG4iLCIvLyBiYXNpYyB1bml0IHVzZWQgaW4gZ2FtZSwgbXVzdCBwYXNzIGludGVnZXIgdmFsdWUgdG8gZGV0ZXJtaW5lIHNpemVcblxuZXhwb3J0IGNsYXNzIFNoaXAge1xuICAgIC8vIHRlc3RzIHRvIGVuc3VyZSB2YWx1ZSBpcyBhbiBpbnRlZ2VyIG51bWJlciBvdmVyIDBcbiAgICBjb25zdHJ1Y3RvcihzaXplKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2l6ZSAhPSAnbnVtYmVyJykgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCd2YWx1ZSBtdXN0IGJlIE51bWJlcicpIH07XG4gICAgICAgIGlmIChzaXplIDw9IDApIHsgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1ZhbHVlIG11c3QgYmUgZ3JlYXRlciB0aGFuIDAnKSB9O1xuICAgICAgICBpZiAoIU51bWJlci5pc0ludGVnZXIoc2l6ZSkpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignT25seSBpbnRlZ2VyIHZhbHVlcycpIH07XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgfVxuXG4gICAgZ2V0SGl0cygpIHsgcmV0dXJuIHRoaXMuaGl0czsgfVxuXG4gICAgLy8gaW5jcmVhc2VzIHNoaXBzIGhpdCB2YWx1ZVxuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy5oaXRzICs9IDE7XG4gICAgfVxuXG4gICAgLy8gZGV0ZXJtaW5lcyB0aGUgc3RhdGUgb2YgdGhlIHNoaXBcbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhpdHMgPj0gdGhpcy5zaXplO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBpbml0aWFsaXplRE9NLCBQbGF5Qm9hcmQgfSBmcm9tIFwiLi9ET01Db250cm9sLmpzXCI7XG5pbXBvcnQgeyBTZXRQbGF5ZXIgfSBmcm9tIFwiLi9TZXRQbGF5ZXIuanNcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vUGxheWVyLmpzJztcblxuZXhwb3J0IGNsYXNzIEdhbWVDb250cm9sIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5TSVpFID0gMTA7XG4gICAgICAgIHRoaXMucGxheWVyMSA9IHsgcGxheWVyOiBudWxsLCBib2FyZDogbnVsbCB9O1xuICAgICAgICB0aGlzLnBsYXllcjIgPSB7IHBsYXllcjogbnVsbCwgYm9hcmQ6IG51bGwgfTtcbiAgICAgICAgdGhpcy5tdWx0aXBsYXllciA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNlbGVjdE1vdmUgPSBudWxsO1xuICAgICAgICB0aGlzLnR1cm5OdW1iZXIgPSAwO1xuICAgIH1cblxuICAgIC8vIGJlZ2luIHRoZSBnYW1lbG9vcFxuICAgIHN0YXJ0R2FtZSgpIHtcbiAgICAgICAgaW5pdGlhbGl6ZURPTSh0aGlzLlNJWkUpO1xuICAgICAgICB0aGlzLmNyZWF0ZVBsYXllcigpO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZXMgZmlyc3QgcGxheWVyLCBkZXRlcm1pbmVzIGlmIHNlY29uZCBwbGF5ZXIgaXMgcGxheWVyIG9yIENQVVxuICAgIGNyZWF0ZVBsYXllcihpc011bHRpKSB7XG4gICAgICAgIGNvbnN0IHNldFBsYXllciA9IG5ldyBTZXRQbGF5ZXIoMTAsIFs1LCA0LCAzLCAzLCAyXSwgaXNNdWx0aSk7XG4gICAgICAgIHNldFBsYXllci5nZXRCdXR0b24oKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gc2V0UGxheWVyLmdldERhdGEoKTtcbiAgICAgICAgICAgIHNldFBsYXllci5yZW1vdmUoKTtcbiAgICAgICAgICAgIC8vIHNldCBzZWNvbmQgcGxheWVyXG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIxLnBsYXllcikgeyBcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcjIucGxheWVyID0gbmV3IFBsYXllcigncGxheWVyMicsIGRhdGEuYm9hcmQpO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyMi5ib2FyZCA9IG5ldyBQbGF5Qm9hcmQodGhpcy5TSVpFLCB0aGlzLnBsYXllcjIucGxheWVyLmdldEFsbFNoaXBJbmRleCgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRCb2FyZCh0aGlzLnBsYXllcjIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVyQm9hcmQoKVxuICAgICAgICAgICAgICAgICAgICAuY3JlYXRlVHVybkNvdmVyKHRoaXMuZ2V0UGxheWVyKCkuZ2V0TmFtZSgpKVxuICAgICAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gdGhpcy5nZXRQbGF5ZXJCb2FyZCgpLmNsZWFyVHVybkNvdmVyKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVyQm9hcmQoKS5kaXNwbGF5Qm9hcmQoKTtcbiAgICAgICAgICAgIC8vIHNldCBmaXJzdCBwbGF5ZXIgYW5kIHByb21wdCBmb3Igc2Vjb25kXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEubXVsdGkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcjEucGxheWVyID0gbmV3IFBsYXllcigncGxheWVyMScsIGRhdGEuYm9hcmQpO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyMS5ib2FyZCA9IG5ldyBQbGF5Qm9hcmQodGhpcy5TSVpFLCB0aGlzLnBsYXllcjEucGxheWVyLmdldEFsbFNoaXBJbmRleCgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRCb2FyZCh0aGlzLnBsYXllcjEpO1xuICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlUGxheWVyKHRydWUpO1xuICAgICAgICAgICAgLy8gc2V0IHNpbmdsZSBwbGF5ZXIgYW5kIHNldCBjcHUgcGxheWVyXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyMS5wbGF5ZXIgPSBuZXcgUGxheWVyKCdwbGF5ZXIxJywgZGF0YS5ib2FyZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIxLmJvYXJkID0gbmV3IFBsYXlCb2FyZCh0aGlzLlNJWkUsIHRoaXMucGxheWVyMS5wbGF5ZXIuZ2V0QWxsU2hpcEluZGV4KCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuYmluZEJvYXJkKHRoaXMucGxheWVyMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIyLnBsYXllciA9IG5ldyBQbGF5ZXIoJ3BsYXllcjInKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcjIuYm9hcmQgPSBuZXcgUGxheUJvYXJkKHRoaXMuU0laRSwgdGhpcy5wbGF5ZXIyLnBsYXllci5nZXRBbGxTaGlwSW5kZXgoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kQm9hcmQodGhpcy5wbGF5ZXIyKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckJvYXJkKCkuZGlzcGxheUJvYXJkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRQbGF5ZXIuZGlzcGxheSgpO1xuICAgIH1cblxuICAgIC8vIERldGVybWluZSB0aGUgYWN0aXZlIHBsYXllclxuICAgIGdldFBsYXllcigpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnR1cm5OdW1iZXIgJSAyID09PSAwKSA/IHRoaXMucGxheWVyMS5wbGF5ZXIgOiB0aGlzLnBsYXllcjIucGxheWVyOyBcbiAgICB9XG5cbiAgICBnZXRQbGF5ZXJCb2FyZCgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnR1cm5OdW1iZXIgJSAyID09PSAwKSA/IHRoaXMucGxheWVyMS5ib2FyZCA6IHRoaXMucGxheWVyMi5ib2FyZDsgXG4gICAgfVxuXG4gICAgLy8gRGV0ZXJtaW5lIHRoZSBjdXJyZW50IG5vbiBwbGF5ZXJcbiAgICBnZXRBZHZlcnNhcnkoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy50dXJuTnVtYmVyICUgMiA9PT0gMCkgPyB0aGlzLnBsYXllcjIucGxheWVyIDogdGhpcy5wbGF5ZXIxLnBsYXllcjtcbiAgICB9XG5cbiAgICBnZXRBZHZlcnNhcnlCb2FyZCgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnR1cm5OdW1iZXIgJSAyID09PSAwKSA/IHRoaXMucGxheWVyMi5ib2FyZCA6IHRoaXMucGxheWVyMS5ib2FyZDtcbiAgICB9XG5cbiAgICAvLyBiaW5kaW5ncyBmb3IgcGxheSBhcmVhXG4gICAgYmluZEJvYXJkKHBsYXllcikge1xuICAgICAgICBjb25zdCBkaXNwbGF5ID0gcGxheWVyLmJvYXJkO1xuICAgICAgICBjb25zdCBidXR0b24gPSBkaXNwbGF5LmdldEJ1dHRvbigpO1xuICAgICAgICBcbiAgICAgICAgLy8gYmluZCBjbGlja2FibGUgY2VsbHNcbiAgICAgICAgZGlzcGxheS5nZXRQbGF5KCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4tY2VsbCcpKSB7IHJldHVybiB9O1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0TW92ZSkgeyBkaXNwbGF5LnRvZ2dsZVNlbGVjdGVkKHRoaXMuc2VsZWN0TW92ZSk7IH1cbiAgICAgICAgICAgIGRpc3BsYXkudG9nZ2xlU2VsZWN0ZWQoZS50YXJnZXQuZGF0YXNldC5pbmRleCk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdE1vdmUgPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC5pbmRleCk7XG4gICAgICAgICAgICBkaXNwbGF5LnNldEJ1dHRvbihlLnRhcmdldC5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gYmluZCBhdHRhY2sgYnV0dG9uXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5LnNldEJ1dHRvbigpO1xuICAgICAgICAgICAgdGhpcy50YWtlVHVybigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBGdW5jdGlvbiBmb3IgYWN0aW9uIGJ1dHRvbiwgdGFrZXMgYSBwbGF5ZXIgc2VsZWN0ZWQgdHVyblxuICAgIHRha2VUdXJuKCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmdldEFkdmVyc2FyeSgpLnRha2VIaXQodGhpcy5zZWxlY3RNb3ZlKTtcbiAgICAgICAgdGhpcy5nZXRQbGF5ZXJCb2FyZCgpLnVwZGF0ZVBsYXkodGhpcy5zZWxlY3RNb3ZlLCByZXN1bHQpO1xuICAgICAgICBpZiAodGhpcy5nZXRBZHZlcnNhcnkoKS5pc0RlZmVhdGVkKCkpIHsgXG4gICAgICAgICAgICB0aGlzLmdldFBsYXllckJvYXJkKClcbiAgICAgICAgICAgICAgICAuY3JlYXRlR2FtZU92ZXIoJ1lPVSBXSU4hJylcbiAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckJvYXJkKCkucmVtb3ZlQm9hcmQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEdhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcbiAgICAgICAgICAgIH0pOyBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLm11bHRpcGxheWVyKSB7IHRoaXMuc3dpdGNoVHVybihyZXN1bHQpOyB9XG4gICAgICAgIGVsc2UgeyB0aGlzLmNwdVR1cm4oKTsgfVxuICAgIH1cblxuICAgIC8vIFJlbmRlcnMgbW92ZSB0YWtlbiBvbiBwbGF5ZXIgYW5kIHJlc2V0IHNlbGVjdE1vdmVcbiAgICBzdGFydFR1cm4ocmVzdWx0KSB7XG4gICAgICAgIHRoaXMuZ2V0UGxheWVyQm9hcmQoKS51cGRhdGVTdGF0dXModGhpcy5zZWxlY3RNb3ZlLCByZXN1bHQpO1xuICAgICAgICB0aGlzLnNlbGVjdE1vdmUgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFByZXBhcmVzIHRoZSBwbGF5IGFyZWEgdG8gZXhjaGFuZ2UgcGxheWVyc1xuICAgIHN3aXRjaFR1cm4ocmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gdGhpcy5nZXRBZHZlcnNhcnlCb2FyZCgpO1xuICAgICAgICBib2FyZC5jcmVhdGVUdXJuQ292ZXIodGhpcy5nZXRBZHZlcnNhcnkoKVxuICAgICAgICAgICAgLmdldE5hbWUoKSlcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgYm9hcmQuY2xlYXJUdXJuQ292ZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0VHVybihyZXN1bHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIGJvYXJkLmRpc3BsYXlCb2FyZCgpO1xuICAgICAgICB0aGlzLmdldEFkdmVyc2FyeUJvYXJkKCkucmVtb3ZlQm9hcmQoKTtcbiAgICAgICAgdGhpcy50dXJuTnVtYmVyKys7XG4gICAgfVxuXG4gICAgLy8gU2ltdWxhdGUgYW4gYWR2ZXJzYXJ5J3MgdHVyblxuICAgIGNwdVR1cm4oKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0TW92ZSA9IHRoaXMuZ2V0UGxheWVyKCkuY3B1VHVybigpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmdldFBsYXllcigpLnRha2VIaXQodGhpcy5zZWxlY3RNb3ZlKTtcbiAgICAgICAgaWYgKHRoaXMuZ2V0UGxheWVyKCkuaXNEZWZlYXRlZCgpKSB7IFxuICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXIoKS5nZXREaXNwbGF5KCkuY3JlYXRlR2FtZU92ZXIoJ1lPVSBMT1NFIScpOyBcbiAgICAgICAgfSBlbHNlIHsgdGhpcy5zdGFydFR1cm4ocmVzdWx0KTsgfVxuICAgIH1cblxuICAgIC8vIGNsZWFyIGFsbCB2YXJpYWJsZSB0byBkZWZhdWx0XG4gICAgcmVzZXRHYW1lKCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIxID0geyBwbGF5ZXI6IG51bGwsIGJvYXJkOiBudWxsIH07XG4gICAgICAgICAgICB0aGlzLnBsYXllcjIgPSB7IHBsYXllcjogbnVsbCwgYm9hcmQ6IG51bGwgfTtcbiAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0TW92ZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnR1cm5OdW1iZXIgPSAwO1xuICAgIH1cbn1cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge0dhbWVDb250cm9sfSBmcm9tICcuL2dhbWVDb250cm9sLmpzJztcblxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lQ29udHJvbCgpO1xuZ2FtZS5zdGFydEdhbWUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==