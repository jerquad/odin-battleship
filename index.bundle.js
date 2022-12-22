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

    isSunkAt(index) {
        return this.board[index].ship.isSunk();
    }

    isSameShip(a, b) {
        return this.board[a].ship === this.board[b].ship;
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
        const hit = this.board.receiveAttack(index);
        const target = (this.nextMove.length === 0) ? null : this.nextMove[0][0];
        console.log(target);
        if (hit && (!target || !this.board.isSameShip(target, index))) {
            this.nextMove.push([
                index,
                index - 1,
                index + this.SIZE,
                index + 1,
                index - this.SIZE,
            ]);
        } else if (hit && this.isXTo(target, index)) {
            console.log('bingo x');
            this.nextMove[0].concat([
                index - 1,
                target - 1,
                index + 1]);
        } else if (hit) {
            console.log('bingo y');
            this.nextMove[0].concat([
                index - this.SIZE,
                target - this.SIZE,
                this.index + this.SIZE]);
        }
        return (hit) ? 'hit' : 'miss';
    }

    // confirms if a move is valid
    isValidMove(index) {
        if (index < 0 || index >= this.board.getSize()) { return false };
        return !this.board.isHit(index);
    }

    // confirms if indices is on the same row or column
    isValidTo(from, to) {
        if (this.isXTo(from, to)) { return true; }
        if (this.isYTo(from, to)) { return true; }
        return false;
    }

    isXTo(from, to) {
        return Math.floor(from / this.SIZE) === Math.floor(to / this.SIZE);
    }

    isYTo(from, to) {
        return from % this.SIZE === to % this.SIZE
    }

    // takes a cpu turn against player, returns move taken
    cpuTurn() {
        const move = this.getNextMove();
        return { move: move, result: this.takeHit(move) };
    }

    // if no queued moves make a random move, clear a sunk ship, or return the next valid move
    getNextMove() {
        if (this.nextMove.length === 0) { return this.randomMove() 
        } else if (this.board.isSunkAt(this.nextMove[0][0])) {
            this.nextMove.shift();
            return this.getNextMove();
        } else {
            const move = this.nextMove[0].pop();
            if (!this.isValidMove(move) || !this.isValidTo(this.nextMove[0][0], move)) {
                return this.getNextMove();
            }
            return move;
        }
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
                if (toPlace[toPlace.length - 1] < Math.pow(this.SIZE, 2) && this.validShip(toPlace, isY) && this.validPlace(board, toPlace)) {
                        toPlace.forEach(cell => { board[cell] = true });
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
        const cpu = this.getPlayer().cpuTurn()
        this.selectMove = cpu.move;
        if (this.getPlayer().isDefeated()) { 
            this.getPlayer().getDisplay().createGameOver('YOU LOSE!'); 
        } else { this.startTurn(cpu.result); }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxPQUFPLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFFBQVEsS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsUUFBUSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxTQUFTLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVB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QW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLHFDQUFxQztBQUNyQyxlQUFlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsT0FBTztBQUNqQjs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3JKQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN3Qjs7QUFFN0MsaUJBQWlCLHdEQUFXO0FBQzVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9ET01Db250cm9sLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9ET01IZWxwZXJzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9EcmFnRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL1NldFBsYXllci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvU2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZUNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW50b24mZmFtaWx5PUJ1bmdlZStTaGFkZSZmYW1pbHk9Q29uY2VydCtPbmUmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLW1haW4tYmc6IHJnYigxNjcsIDE3MSwgMTc1KTtcXG4gICAgLS1iZy1ncmlkOiBibGFjaztcXG4gICAgLS1iZy1jZWxsOiByZ2IoMTcyLCAyMzksIDI0MSk7XFxuICAgIC0tZm9udC1ndWlkZS1sZzogMS41cmVtO1xcbiAgICAtLWZvbnQtZ3VpZGUtc206IC43cmVtO1xcbiAgICAtLWdhcC1sZzogM3B4O1xcbiAgICAtLWdhcC1zbTogMnB4O1xcbiAgICAtLWJ1dHRvbi1mZy1kaXNhYmxlOiBncmV5O1xcbiAgICAtLWJ1dHRvbi1mZy1ub3JtYWw6IGJsYWNrO1xcbiAgICAtLWJ1dHRvbi1iZy1kaXNhYmxlOiBkYXJrZ3JleTtcXG4gICAgLS1idXR0b24tYmctbm9ybWFsOiB3aGl0ZTtcXG4gICAgLS1idXR0b24tZm9udC1zaXplOiAycmVtO1xcbiAgICAtLWJvYXJkLWhpdDogZGFya3JlZDtcXG4gICAgLS1ib2FyZC1ob3ZlcjogYXF1YTtcXG4gICAgLS1ib2FyZC1taXNzOiBncmV5O1xcbiAgICAtLWJvYXJkLXNlbGVjdGVkOiB5ZWxsb3c7XFxuICAgIC0tYm9hcmQtc2hpcDogZ3JlZW47XFxuICAgIC0tc2lkZS1zaXplOiAxMDtcXG4gICAgLS1jaGVjay1vdXR0ZXI6IHJnYigyMTUsIDI0NCwgMjUyKTtcXG4gICAgLS1jaGVjay1pbm5lcjogcmdiKDI1MiwgMjEwLCAxMzIpO1xcbiAgICAtLWhlYWQtYmc6IHJnYigyMzUsIDIzMCwgMjMwKTtcXG4gICAgLS10b2dnbGU6IHJnYigyNTUsIDE4NywgMCk7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJnLW5vcm1hbCk7XFxuICAgIGNvbG9yOiB2YXIoLS1idXR0b24tZmctbm9ybWFsKTtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tYnV0dG9uLWZnLW5vcm1hbCk7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tYnV0dG9uLWZvbnQtc2l6ZSk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5idXR0b246ZGlzYWJsZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmctZGlzYWJsZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1idXR0b24tZmctZGlzYWJsZSk7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWZnLWRpc2FibGUpO1xcbn1cXG5cXG4jbWFpbi1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI2hlYWRlcixcXG4jZm9vdGVyIHtcXG4gICAgbWF4LWhlaWdodDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWQtYmcpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgbWluLWhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgcGFkZGluZzogMCAycmVtO1xcbn1cXG5cXG4jaGVhZGVyID4gaDEge1xcbiAgICBmb250LWZhbWlseTogJ0J1bmdlZSBTaGFkZScsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiByZ2IoMTc5LCAxMTYsIDApO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBjb2xvcjpyZ2IoMTQ4LCAxNDcsIDE0Nyk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLXJvdzogMy8gNDtcXG59XFxuXFxuLyogc3R5bGluZyBmb3IgYWxsIGdyaWQgZGlzcGxheXMgKi9cXG4uZ3JpZC1ib3gge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtZ3VpZGUtbGcpO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1ncmlkKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tc2lkZS1zaXplKSwgMWZyKTtcXG4gICAgZ2FwOiB2YXIoLS1nYXAtbGcpO1xcbn1cXG5cXG4uZ3JpZC1ib3ggPiBkaXYge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jZWxsKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNzZXQtY29udGFpbmVyID4gLmdyaWQtYm94ID4gZGl2e1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4uZ3VpZGUtdG9wLFxcbi5ndWlkZS1jb3JuZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLWdhcC1sZykgKiAuNjYpO1xcbn1cXG5cXG4uZ3VpZGUtbGVmdCxcXG4uZ3VpZGUtY29ybmVyIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLWdhcC1sZykgKiAuNjYpO1xcbn1cXG5cXG4uZ3VpZGUtY29ybmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctZ3JpZCkgIWltcG9ydGFudDtcXG59XFxuXFxuLyogU3R5bGluZyBmb3IgYWxsIGdyaWQgaWNvbnMgKi9cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLXNoaXApICFpbXBvcnRhbnQ7XFxufVxcblxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtbWlzcykgIWltcG9ydGFudDtcXG59XFxuXFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWhpdCkgIWltcG9ydGFudDtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtc2VsZWN0ZWQpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdyAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc2V0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW4gIWltcG9ydGFudDtcXG59XFxuXFxuLnNldC5ob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5ICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIG5vdGlmaWNhdGlvbnMgKi9cXG4uZ2FtZW92ZXItY29udGFpbmVyLFxcbi50dXJuLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5nYW1lb3Zlci1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnR1cm4tY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZyk7XFxufVxcblxcbi5nYW1lb3Zlci1jb250ZW50LFxcbi50dXJuLWNvbnRlbnQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmcpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciBzZXQgZGlzcGxheSAqL1xcbiNzZXQtY29udGFpbmVyIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OiAwIDEgMTAwJTtcXG4gICAgZ2FwOiAuNXJlbTtcXG4gICAgbWFyZ2luOiAuNXJlbSAwO1xcbn1cXG5cXG4uc2V0LXRyYXkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG5cXG59XFxuXFxuLnRyYXktaXRlbSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OmxlZnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5pY29uLXBpZWNlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBncmlkLXJvdzogMSAvIC0xO1xcbiAgICBib3JkZXI6IHZhcigtLWdhcC1zbSkgc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IHZhcigtLWdhcC1zbSk7XFxufVxcblxcbi5pY29uLXBpZWNlLmljb24tZGlzYWJsZT5kaXY6bm90KCNkcmFnZ2VkKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXkgIWltcG9ydGFudDtcXG59XFxuXFxuLmljb24tY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNlbGwpO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbn1cXG5cXG4uZHJhZy1jZWxsIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4jZHJhZ2dlZCB7XFxuICAgIHotaW5kZXg6IDk7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kcmFnLXkge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9nZ2xlLXJvdGF0ZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuI3RvZ2dsZS1iYXIge1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbiN0b2dnbGUtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jdG9nZ2xlLXRleHQge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdG9wOiAgNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuXFxuI3RvZ2dsZS1ib2R5IHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvZ2dsZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxufVxcblxcbiN0b2dnbGUtYm9keTphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gICAgdG9wOiAyMHB4O1xcbiAgICBsZWZ0OiA3MHB4O1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYm9yZGVyOiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tdG9nZ2xlKTtcXG59XFxuXFxuI2luc3QtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWQtYmcpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tYnV0dG9uLWZnLWRpc2FibGUpO1xcbn1cXG5cXG4jaW5zdC11bCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ29uY2VydCBPbmUnLCBjdXJzaXZlO1xcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWZnLWRpc2FibGUpO1xcbn1cXG5cXG4jc3VibWl0LWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNzdWJtaXQtYmFyIGJ1dHRvbiB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI3N1Ym1pdC1iYyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jc3VibWl0LW1jIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hlY2staW5uZXIpO1xcbiAgICBmb250LWZhbWlseTogJ0FudG9uJywgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jc3VibWl0LW1jLmlzLW11bHRpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZyk7XFxufVxcblxcbiNzdWJtaXQtbWMuaXMtbXVsdGkgPiAjc3VibWl0LW1jLTIsXFxuI3N1Ym1pdC1tYy5pcy1tdWx0aSA+ICNzdWJtaXQtbWMtbSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1mZy1kaXNhYmxlKTtcXG59XFxuXFxuI3N1Ym1pdC1tYy0yLFxcbiNzdWJtaXQtbWMtbSB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hlY2stb3V0dGVyKTtcXG59XFxuXFxuI3N1Ym1pdC1tYy0yIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogM3B4IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XFxufVxcblxcbiNzdWJtaXQtbWMtbSB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLzI7XFxufVxcblxcblxcbiNzdWJtaXQtY2hrIHtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDEuMjVyZW07XFxuICAgIHdpZHRoOiAxLjI1cmVtO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuXFxuXFxuLyogU3R5bGluZyBmb3IgcGxheSBkaXNwbGF5cyAqL1xcbi5wbGF5LWNvbnRhaW5lciB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIG1hcmdpbjogMCAuNXJlbTtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ucGxheS1jb250YWluZXIgPiAuZ3JpZC1ib3gucGxheS1zdGF0dXMgPiBkaXZ7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjc1cztcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICB3aWR0aDogMXJlbTtcXG59XFxuLnBsYXktY29udGFpbmVyID4gLmdyaWQtYm94LnBsYXktYXJlYSA+IGRpdi5oaXQge1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzO1xcbn1cXG5cXG4ucGxheS1jb250YWluZXIgPiAuZ3JpZC1ib3gucGxheS1hcmVhID4gZGl2e1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAycmVtO1xcbn1cXG5cXG4ucGxheS1zdGF0dXMge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1ndWlkZS1zbSk7XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgZ2FwOiB2YXIoLS1nYXAtc20pO1xcbn1cXG5cXG4ucGxheS1zdGF0dXMgLmd1aWRlLWxlZnQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tZ2FwLXNtKSAqIC42Nik7XFxufVxcblxcbi5wbGF5LXN0YXR1cyAuZ3VpZGUtdG9wIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1nYXAtc20pICogLjY2KTtcXG59XFxuXFxuLnBsYXktYXJlYSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1ndWlkZS1sZyk7XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IHZhcigtLWdhcC1sZyk7XFxufVxcblxcbi5wbGF5LWFyZWEgPiAub3Blbi1jZWxsOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtaG92ZXIpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wbGF5LWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMzkwcHgpIHtcXG4gICAgI3NldC1jb250YWluZXIgPiAuZ3JpZC1ib3ggPiBkaXYgeyBcXG4gICAgICAgIHdpZHRoOiAxLjVyZW07XFxuICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgfVxcbn1cXG5cXG4vKiBzZXQgY29uZmlndXJhdGlvbiBmb3IgdGhpbm5lciBwaG9uZXMgKi9cXG5cXG4vKiBtb2JpbGUgaG9yaXpvbnRhbCBzZXR0aW5ncyAqL1xcbkBtZWRpYSAobWF4LWhlaWdodDogNDUwcHgpIHtcXG4gICAgI2hlYWRlciA+IGgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgfVxcbiAgICAvKiBzZXQgc2V0dGluZ3MgKi9cXG4gICAgI2luc3QtdWwge1xcbiAgICAgICAgZm9udC1zaXplOiAuN3JlbTtcXG4gICAgfVxcbiAgICAjc2V0LWNvbnRhaW5lciA+IC5ncmlkLWJveCA+IGRpdntcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIHdpZHRoOiAxLjVyZW07XFxuICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgfVxcbiAgICAjdG9nZ2xlLWJvZHkge1xcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xcbiAgICAgICAgd2lkdGg6IDYwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICB9XFxuICAgICN0b2dnbGUtYm9keTphZnRlciB7XFxuICAgICAgICB0b3A6IDE1cHg7XFxuICAgICAgICBsZWZ0OiA1MHB4O1xcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxNXB4O1xcbiAgICB9XFxuICAgIC50cmF5LWl0ZW0ge1xcbiAgICAgICAgcGFkZGluZzogLjVyZW07XFxuICAgIH1cXG5cXG59XFxuXFxuLyogaG9yaXpvbnRhbCBjb25maWd1cmF0aW9uICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwNTBweCkgb3IgKG1heC1oZWlnaHQ6IDY1MHB4KSB7XFxuICAgIC8qIHNldCBzZXR0aW5ncyAqL1xcbiAgICAjc2V0LWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDFmciAxZnI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuICAgICNzZXQtY29udGFpbmVyID4gLmdyaWQtYm94IHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgICAgIGdyaWQtcm93OiAxIC8gNDtcXG4gICAgfVxcbiAgICAuc2V0LXRyYXkge1xcbiAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICB9XFxuICAgICN0b2dnbGUtYmFyIHtcXG4gICAgICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgICAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIH1cXG4gICAgI3RvZ2dsZS1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLyogcGxheSBzZXR0aW5ncyAqL1xcbiAgICAucGxheS1jb250YWluZXIgPiAuZ3JpZC1ib3gucGxheS1zdGF0dXMgPiBkaXZ7XFxuICAgICAgICBoZWlnaHQ6IDFyZW07XFxuICAgICAgICB3aWR0aDogMXJlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgLnBsYXktY29udGFpbmVyID4gLmdyaWQtYm94LnBsYXktYXJlYSA+IGRpdntcXG4gICAgICAgIGhlaWdodDogMS40cmVtO1xcbiAgICAgICAgd2lkdGg6IDEuNHJlbTtcXG4gICAgfVxcbiAgICAucGxheS1jb250YWluZXIge1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgICAgICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgfVxcblxcbiAgICAucGxheS1hcmVhIHtcXG4gICAgICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgfVxcblxcbiAgICAucGxheS1zdGF0dXMge1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwNTBweCkgYW5kIChtaW4taGVpZ2h0OiA2NTFweCkge1xcbiAgICAucGxheS1idXR0b24ge1xcbiAgICAgICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LWhlaWdodDogNjUwcHgpIHtcXG4gICAgLnBsYXktYnV0dG9uIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB9XFxuICAgIFxcbiAgICAucGxheS1idXR0b24ge1xcbiAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICB9XFxufVxcblxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDUwcHgpIGFuZCAobWluLWhlaWdodDogNjUxcHgpIHtcXG4gICAgLnBsYXktY29udGFpbmVyID4gLmdyaWQtYm94LnBsYXktc3RhdHVzID4gZGl2e1xcbiAgICAgICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgICAgICB3aWR0aDogMS41cmVtO1xcbiAgICB9XFxuICAgIFxcbiAgICAucGxheS1jb250YWluZXIgPiAuZ3JpZC1ib3gucGxheS1hcmVhID4gZGl2e1xcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xcbiAgICAgICAgd2lkdGg6IDNyZW07XFxuICAgIH1cXG59XFxuXFxuLyogbW9iaWxlIHZlcnRpY2FsIHNldHRpbmdzICovXFxuQG1lZGlhIChtYXgtd2lkdGg6IDM5MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDg1NXB4KSB7XFxuICAgICNzZXQtY29udGFpbmVyID4gLmdyaWQtYm94ID4gZGl2e1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgd2lkdGg6IDEuNHJlbTtcXG4gICAgICAgIGhlaWdodDogMS40cmVtO1xcbiAgICB9XFxuXFxuICAgICN0b2dnbGUtYm9keSB7XFxuICAgICAgICBoZWlnaHQ6IDYwcHg7XFxuICAgICAgICB3aWR0aDogNjBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIH1cXG5cXG4gICAgI3RvZ2dsZS1ib2R5OmFmdGVyIHtcXG4gICAgICAgIHRvcDogMTVweDtcXG4gICAgICAgIGxlZnQ6IDUwcHg7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDE1cHg7XFxuICAgIH1cXG5cXG4gICAgLnRyYXktaXRlbSB7XFxuICAgICAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgfVxcblxcbiAgICAjaGVhZGVyID4gaDEge1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB9XFxuICAgICNpbnN0LXVsIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogLjdyZW07XFxuICAgIH1cXG5cXG4gICAgLnBsYXktY29udGFpbmVyID4gLmdyaWQtYm94LnBsYXktc3RhdHVzID4gZGl2e1xcbiAgICAgICAgaGVpZ2h0OiAuOXJlbTtcXG4gICAgICAgIHdpZHRoOiAuOXJlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgLnBsYXktY29udGFpbmVyID4gLmdyaWQtYm94LnBsYXktYXJlYSA+IGRpdntcXG4gICAgICAgIGhlaWdodDogMS44cmVtO1xcbiAgICAgICAgd2lkdGg6IDEuOHJlbTtcXG4gICAgfVxcbn1cXG5cXG5cXG5cXG4vKiBzZXQgY29uZmlndXJhdGlvbiBmb3IgZnVsbCBzY3JlZW4gKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogMTA1MHB4KSB7XFxuICAgICNzZXQtY29udGFpbmVyID4gLmdyaWQtYm94ID4gZGl2IHtcXG4gICAgICAgIHdpZHRoOiAzcmVtO1xcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB9XFxuXFxuICAgICNpbnN0LWNvbnRhaW5lciB7IFxcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgfVxcblxcbiAgICAjc3VibWl0LWJhciB7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDBweDtcXG4gICAgICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgfVxcblxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsYUFBYTtJQUNiLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0NBQWtDO0lBQ2xDLGlDQUFpQztJQUNqQyw2QkFBNkI7SUFDN0IsMEJBQTBCO0FBQzlCOztBQUVBOztJQUVJLHlDQUF5QztJQUN6QyxTQUFTO0lBQ1QsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsOEJBQThCO0lBQzlCLHlDQUF5QztJQUN6QyxrQ0FBa0M7SUFDbEMsV0FBVztBQUNmOztBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLCtCQUErQjtJQUMvQixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IsbUJBQW1C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UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7QUFDSjs7O0FBR0E7SUFDSTtRQUNJLGNBQWM7UUFDZCxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLFdBQVc7SUFDZjtBQUNKOztBQUVBLDZCQUE2QjtBQUM3QjtJQUNJO1FBQ0ksZUFBZTtRQUNmLGFBQWE7UUFDYixjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxTQUFTO1FBQ1QsVUFBVTtRQUNWLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxhQUFhO0lBQ2pCO0FBQ0o7Ozs7QUFJQSxzQ0FBc0M7QUFDdEM7SUFDSTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2Ysa0JBQWtCO0lBQ3RCOztBQUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFudG9uJmZhbWlseT1CdW5nZWUrU2hhZGUmZmFtaWx5PUNvbmNlcnQrT25lJmRpc3BsYXk9c3dhcCcpO1xcbjpyb290IHtcXG4gICAgLS1tYWluLWJnOiByZ2IoMTY3LCAxNzEsIDE3NSk7XFxuICAgIC0tYmctZ3JpZDogYmxhY2s7XFxuICAgIC0tYmctY2VsbDogcmdiKDE3MiwgMjM5LCAyNDEpO1xcbiAgICAtLWZvbnQtZ3VpZGUtbGc6IDEuNXJlbTtcXG4gICAgLS1mb250LWd1aWRlLXNtOiAuN3JlbTtcXG4gICAgLS1nYXAtbGc6IDNweDtcXG4gICAgLS1nYXAtc206IDJweDtcXG4gICAgLS1idXR0b24tZmctZGlzYWJsZTogZ3JleTtcXG4gICAgLS1idXR0b24tZmctbm9ybWFsOiBibGFjaztcXG4gICAgLS1idXR0b24tYmctZGlzYWJsZTogZGFya2dyZXk7XFxuICAgIC0tYnV0dG9uLWJnLW5vcm1hbDogd2hpdGU7XFxuICAgIC0tYnV0dG9uLWZvbnQtc2l6ZTogMnJlbTtcXG4gICAgLS1ib2FyZC1oaXQ6IGRhcmtyZWQ7XFxuICAgIC0tYm9hcmQtaG92ZXI6IGFxdWE7XFxuICAgIC0tYm9hcmQtbWlzczogZ3JleTtcXG4gICAgLS1ib2FyZC1zZWxlY3RlZDogeWVsbG93O1xcbiAgICAtLWJvYXJkLXNoaXA6IGdyZWVuO1xcbiAgICAtLXNpZGUtc2l6ZTogMTA7XFxuICAgIC0tY2hlY2stb3V0dGVyOiByZ2IoMjE1LCAyNDQsIDI1Mik7XFxuICAgIC0tY2hlY2staW5uZXI6IHJnYigyNTIsIDIxMCwgMTMyKTtcXG4gICAgLS1oZWFkLWJnOiByZ2IoMjM1LCAyMzAsIDIzMCk7XFxuICAgIC0tdG9nZ2xlOiByZ2IoMjU1LCAxODcsIDApO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iZy1ub3JtYWwpO1xcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWZnLW5vcm1hbCk7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLWJ1dHRvbi1mZy1ub3JtYWwpO1xcbiAgICBmb250LXNpemU6IHZhcigtLWJ1dHRvbi1mb250LXNpemUpO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYnV0dG9uOmRpc2FibGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJnLWRpc2FibGUpO1xcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWZnLWRpc2FibGUpO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1mZy1kaXNhYmxlKTtcXG59XFxuXFxuI21haW4tY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZyk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiNoZWFkZXIsXFxuI2Zvb3RlciB7XFxuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkLWJnKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIG1pbi1oZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIHBhZGRpbmc6IDAgMnJlbTtcXG59XFxuXFxuI2hlYWRlciA+IGgxIHtcXG4gICAgZm9udC1mYW1pbHk6ICdCdW5nZWUgU2hhZGUnLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogcmdiKDE3OSwgMTE2LCAwKTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiNmb290ZXIge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgY29sb3I6cmdiKDE0OCwgMTQ3LCAxNDcpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC1yb3c6IDMvIDQ7XFxufVxcblxcbi8qIHN0eWxpbmcgZm9yIGFsbCBncmlkIGRpc3BsYXlzICovXFxuLmdyaWQtYm94IHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LWd1aWRlLWxnKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctZ3JpZCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLXNpZGUtc2l6ZSksIDFmcik7XFxuICAgIGdhcDogdmFyKC0tZ2FwLWxnKTtcXG59XFxuXFxuLmdyaWQtYm94ID4gZGl2IHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY2VsbCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jc2V0LWNvbnRhaW5lciA+IC5ncmlkLWJveCA+IGRpdntcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG59XFxuXFxuLmd1aWRlLXRvcCxcXG4uZ3VpZGUtY29ybmVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1nYXAtbGcpICogLjY2KTtcXG59XFxuXFxuLmd1aWRlLWxlZnQsXFxuLmd1aWRlLWNvcm5lciB7XFxuICAgIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1nYXAtbGcpICogLjY2KTtcXG59XFxuXFxuLmd1aWRlLWNvcm5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWdyaWQpICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIGFsbCBncmlkIGljb25zICovXFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1zaGlwKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLW1pc3MpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1oaXQpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLXNlbGVjdGVkKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3cgIWltcG9ydGFudDtcXG59XFxuXFxuLnNldCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zZXQuaG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleSAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciBub3RpZmljYXRpb25zICovXFxuLmdhbWVvdmVyLWNvbnRhaW5lcixcXG4udHVybi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uZ2FtZW92ZXItY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi50dXJuLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmcpO1xcbn1cXG5cXG4uZ2FtZW92ZXItY29udGVudCxcXG4udHVybi1jb250ZW50IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLyogU3R5bGluZyBmb3Igc2V0IGRpc3BsYXkgKi9cXG4jc2V0LWNvbnRhaW5lciB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMCAxIDEwMCU7XFxuICAgIGdhcDogLjVyZW07XFxuICAgIG1hcmdpbjogLjVyZW0gMDtcXG59XFxuXFxuLnNldC10cmF5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuXFxufVxcblxcbi50cmF5LWl0ZW0ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDpsZWZ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uaWNvbi1waWVjZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAtMTtcXG4gICAgYm9yZGVyOiB2YXIoLS1nYXAtc20pIHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiB2YXIoLS1nYXAtc20pO1xcbn1cXG5cXG4uaWNvbi1waWVjZS5pY29uLWRpc2FibGU+ZGl2Om5vdCgjZHJhZ2dlZCkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5pY29uLWNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jZWxsKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG59XFxuXFxuLmRyYWctY2VsbCB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuI2RyYWdnZWQge1xcbiAgICB6LWluZGV4OiA5O1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZHJhZy15IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZ2dsZS1yb3RhdGUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbiN0b2dnbGUtYmFyIHtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jdG9nZ2xlLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI3RvZ2dsZS10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRvcDogIDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcblxcbiN0b2dnbGUtYm9keSB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b2dnbGUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbn1cXG5cXG4jdG9nZ2xlLWJvZHk6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIHRvcDogMjBweDtcXG4gICAgbGVmdDogNzBweDtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJvcmRlcjogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHZhcigtLXRvZ2dsZSk7XFxufVxcblxcbiNpbnN0LWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkLWJnKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLWJ1dHRvbi1mZy1kaXNhYmxlKTtcXG59XFxuXFxuI2luc3QtdWwge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBmb250LWZhbWlseTogJ0NvbmNlcnQgT25lJywgY3Vyc2l2ZTtcXG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1mZy1kaXNhYmxlKTtcXG59XFxuXFxuI3N1Ym1pdC1iYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jc3VibWl0LWJhciBidXR0b24ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNzdWJtaXQtYmMge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3N1Ym1pdC1tYyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoZWNrLWlubmVyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdBbnRvbicsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI3N1Ym1pdC1tYy5pcy1tdWx0aSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmcpO1xcbn1cXG5cXG4jc3VibWl0LW1jLmlzLW11bHRpID4gI3N1Ym1pdC1tYy0yLFxcbiNzdWJtaXQtbWMuaXMtbXVsdGkgPiAjc3VibWl0LW1jLW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tZmctZGlzYWJsZSk7XFxufVxcblxcbiNzdWJtaXQtbWMtMixcXG4jc3VibWl0LW1jLW0ge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoZWNrLW91dHRlcik7XFxufVxcblxcbiNzdWJtaXQtbWMtMiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDNweCA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICBsaW5lLWhlaWdodDogMS4yO1xcbn1cXG5cXG4jc3VibWl0LW1jLW0ge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAxIC8yO1xcbn1cXG5cXG5cXG4jc3VibWl0LWNoayB7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgaGVpZ2h0OiAxLjI1cmVtO1xcbiAgICB3aWR0aDogMS4yNXJlbTtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcblxcblxcbi8qIFN0eWxpbmcgZm9yIHBsYXkgZGlzcGxheXMgKi9cXG4ucGxheS1jb250YWluZXIge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBtYXJnaW46IDAgLjVyZW07XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnBsYXktY29udGFpbmVyID4gLmdyaWQtYm94LnBsYXktc3RhdHVzID4gZGl2e1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC43NXM7XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgd2lkdGg6IDFyZW07XFxufVxcbi5wbGF5LWNvbnRhaW5lciA+IC5ncmlkLWJveC5wbGF5LWFyZWEgPiBkaXYuaGl0IHtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcztcXG59XFxuXFxuLnBsYXktY29udGFpbmVyID4gLmdyaWQtYm94LnBsYXktYXJlYSA+IGRpdntcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMnJlbTtcXG59XFxuXFxuLnBsYXktc3RhdHVzIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtZ3VpZGUtc20pO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGdhcDogdmFyKC0tZ2FwLXNtKTtcXG59XFxuXFxuLnBsYXktc3RhdHVzIC5ndWlkZS1sZWZ0IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLWdhcC1zbSkgKiAuNjYpO1xcbn1cXG5cXG4ucGxheS1zdGF0dXMgLmd1aWRlLXRvcCB7XFxuICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tZ2FwLXNtKSAqIC42Nik7XFxufVxcblxcbi5wbGF5LWFyZWEge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtZ3VpZGUtbGcpO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiB2YXIoLS1nYXAtbGcpO1xcbn1cXG5cXG4ucGxheS1hcmVhID4gLm9wZW4tY2VsbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWhvdmVyKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucGxheS1idXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDM5MHB4KSB7XFxuICAgICNzZXQtY29udGFpbmVyID4gLmdyaWQtYm94ID4gZGl2IHsgXFxuICAgICAgICB3aWR0aDogMS41cmVtO1xcbiAgICAgICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIH1cXG59XFxuXFxuLyogc2V0IGNvbmZpZ3VyYXRpb24gZm9yIHRoaW5uZXIgcGhvbmVzICovXFxuXFxuLyogbW9iaWxlIGhvcml6b250YWwgc2V0dGluZ3MgKi9cXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XFxuICAgICNoZWFkZXIgPiBoMSB7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgIH1cXG4gICAgLyogc2V0IHNldHRpbmdzICovXFxuICAgICNpbnN0LXVsIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogLjdyZW07XFxuICAgIH1cXG4gICAgI3NldC1jb250YWluZXIgPiAuZ3JpZC1ib3ggPiBkaXZ7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICB3aWR0aDogMS41cmVtO1xcbiAgICAgICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIH1cXG4gICAgI3RvZ2dsZS1ib2R5IHtcXG4gICAgICAgIGhlaWdodDogNjBweDtcXG4gICAgICAgIHdpZHRoOiA2MHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgfVxcbiAgICAjdG9nZ2xlLWJvZHk6YWZ0ZXIge1xcbiAgICAgICAgdG9wOiAxNXB4O1xcbiAgICAgICAgbGVmdDogNTBweDtcXG4gICAgICAgIGJvcmRlci13aWR0aDogMTVweDtcXG4gICAgfVxcbiAgICAudHJheS1pdGVtIHtcXG4gICAgICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICB9XFxuXFxufVxcblxcbi8qIGhvcml6b250YWwgY29uZmlndXJhdGlvbiAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiAxMDUwcHgpIG9yIChtYXgtaGVpZ2h0OiA2NTBweCkge1xcbiAgICAvKiBzZXQgc2V0dGluZ3MgKi9cXG4gICAgI3NldC1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxZnIgMWZyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcbiAgICAjc2V0LWNvbnRhaW5lciA+IC5ncmlkLWJveCB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgICAgICBncmlkLXJvdzogMSAvIDQ7XFxuICAgIH1cXG4gICAgLnNldC10cmF5IHtcXG4gICAgICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgfVxcbiAgICAjdG9nZ2xlLWJhciB7XFxuICAgICAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICB9XFxuICAgICN0b2dnbGUtY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC8qIHBsYXkgc2V0dGluZ3MgKi9cXG4gICAgLnBsYXktY29udGFpbmVyID4gLmdyaWQtYm94LnBsYXktc3RhdHVzID4gZGl2e1xcbiAgICAgICAgaGVpZ2h0OiAxcmVtO1xcbiAgICAgICAgd2lkdGg6IDFyZW07XFxuICAgIH1cXG4gICAgXFxuICAgIC5wbGF5LWNvbnRhaW5lciA+IC5ncmlkLWJveC5wbGF5LWFyZWEgPiBkaXZ7XFxuICAgICAgICBoZWlnaHQ6IDEuNHJlbTtcXG4gICAgICAgIHdpZHRoOiAxLjRyZW07XFxuICAgIH1cXG4gICAgLnBsYXktY29udGFpbmVyIHtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIH1cXG5cXG4gICAgLnBsYXktYXJlYSB7XFxuICAgICAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIH1cXG5cXG4gICAgLnBsYXktc3RhdHVzIHtcXG4gICAgICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDUwcHgpIGFuZCAobWluLWhlaWdodDogNjUxcHgpIHtcXG4gICAgLnBsYXktYnV0dG9uIHtcXG4gICAgICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDY1MHB4KSB7XFxuICAgIC5wbGF5LWJ1dHRvbiB7XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgLnBsYXktYnV0dG9uIHtcXG4gICAgICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgfVxcbn1cXG5cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTA1MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDY1MXB4KSB7XFxuICAgIC5wbGF5LWNvbnRhaW5lciA+IC5ncmlkLWJveC5wbGF5LXN0YXR1cyA+IGRpdntcXG4gICAgICAgIGhlaWdodDogMS41cmVtO1xcbiAgICAgICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgLnBsYXktY29udGFpbmVyID4gLmdyaWQtYm94LnBsYXktYXJlYSA+IGRpdntcXG4gICAgICAgIGhlaWdodDogM3JlbTtcXG4gICAgICAgIHdpZHRoOiAzcmVtO1xcbiAgICB9XFxufVxcblxcbi8qIG1vYmlsZSB2ZXJ0aWNhbCBzZXR0aW5ncyAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiAzOTBweCkgYW5kIChtYXgtaGVpZ2h0OiA4NTVweCkge1xcbiAgICAjc2V0LWNvbnRhaW5lciA+IC5ncmlkLWJveCA+IGRpdntcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIHdpZHRoOiAxLjRyZW07XFxuICAgICAgICBoZWlnaHQ6IDEuNHJlbTtcXG4gICAgfVxcblxcbiAgICAjdG9nZ2xlLWJvZHkge1xcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xcbiAgICAgICAgd2lkdGg6IDYwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICB9XFxuXFxuICAgICN0b2dnbGUtYm9keTphZnRlciB7XFxuICAgICAgICB0b3A6IDE1cHg7XFxuICAgICAgICBsZWZ0OiA1MHB4O1xcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxNXB4O1xcbiAgICB9XFxuXFxuICAgIC50cmF5LWl0ZW0ge1xcbiAgICAgICAgcGFkZGluZzogLjVyZW07XFxuICAgIH1cXG5cXG4gICAgI2hlYWRlciA+IGgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgfVxcbiAgICAjaW5zdC11bCB7XFxuICAgICAgICBmb250LXNpemU6IC43cmVtO1xcbiAgICB9XFxuXFxuICAgIC5wbGF5LWNvbnRhaW5lciA+IC5ncmlkLWJveC5wbGF5LXN0YXR1cyA+IGRpdntcXG4gICAgICAgIGhlaWdodDogLjlyZW07XFxuICAgICAgICB3aWR0aDogLjlyZW07XFxuICAgIH1cXG4gICAgXFxuICAgIC5wbGF5LWNvbnRhaW5lciA+IC5ncmlkLWJveC5wbGF5LWFyZWEgPiBkaXZ7XFxuICAgICAgICBoZWlnaHQ6IDEuOHJlbTtcXG4gICAgICAgIHdpZHRoOiAxLjhyZW07XFxuICAgIH1cXG59XFxuXFxuXFxuXFxuLyogc2V0IGNvbmZpZ3VyYXRpb24gZm9yIGZ1bGwgc2NyZWVuICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwNTBweCkge1xcbiAgICAjc2V0LWNvbnRhaW5lciA+IC5ncmlkLWJveCA+IGRpdiB7XFxuICAgICAgICB3aWR0aDogM3JlbTtcXG4gICAgICAgIGhlaWdodDogM3JlbTtcXG4gICAgfVxcblxcbiAgICAjaW5zdC1jb250YWluZXIgeyBcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIH1cXG5cXG4gICAgI3N1Ym1pdC1iYXIge1xcbiAgICAgICAgbWF4LWhlaWdodDogMTAwcHg7XFxuICAgICAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIH1cXG5cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgbWFrZUVsZW1lbnQsIGFkanVzdFRvSW5kZXgsIGJ1aWxkR3JpZCB9IGZyb20gJy4vRE9NSGVscGVycy5qcyc7XG5cbi8vIEZpcnN0IHBhZ2UgbG9hZCBidWlsZGVyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZURPTShzaXplKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgaWQ6ICdtYWluLWNvbnRhaW5lcicgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zaWRlLXNpemUnLCBzaXplICsgMSk7XG4gICAgLy8gaGFjayB0byBwcmV2ZW50IHVud2FudGVkIGRyYWdnaW5nXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnNldEF0dHJpYnV0ZSgnb25kcmFnc3RhcnQnLCAncmV0dXJuIGZhbHNlOycpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5zZXRBdHRyaWJ1dGUoJ29uZHJvcCcsICdyZXR1cm4gZmFsc2UnKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2RpdicsIHsgaWQ6ICdoZWFkZXInIH0pKTtcbiAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcignI2hlYWRlcicpLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdoMScsIHt9LCAnQkFUVExFU0hJUCcpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2RpdicsIHsgaWQ6ICdmb290ZXInIH0pKTtcbiAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcignI2Zvb3RlcicpLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdwJywge30sICcmY29weTsgMjAyMiBKaW1teSBRdWFkcm9zJykpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn1cblxuLy8gRGlzcGxheSBmb3IgdGhlIGdlbmVyYWwgcGxheSBhcmVhXG5leHBvcnQgY2xhc3MgUGxheUJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihzaXplLCBhbGxTaGlwcykge1xuICAgICAgICB0aGlzLlNJWkUgPSBzaXplO1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAncGxheS1jb250YWluZXInIH0pO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZEdyaWQoc2l6ZSwgJ3BsYXktYXJlYScpKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRHcmlkKHNpemUsICdwbGF5LXN0YXR1cycpKVxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnYnV0dG9uJywgeyBjbGFzczogJ3BsYXktYnV0dG9uJywgZGlzYWJsZWQ6ICd0cnVlJyB9LCAnU0VMRUNUIFRBUkdFVCcpKTtcbiAgICAgICAgYWxsU2hpcHMuZm9yRWFjaChpbmRleCA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXR1cyhpbmRleCwgJ3NoaXAnKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgLy8gZ2V0dGVycyBmb3IgYm9hcmQgZWxlbWVudHNcbiAgICBnZXRDb250YWluZXIoKSB7IHJldHVybiB0aGlzLmNvbnRhaW5lcjsgfVxuICAgIGdldFBsYXkoKSB7IHJldHVybiB0aGlzLmdldENvbnRhaW5lcigpLnF1ZXJ5U2VsZWN0b3IoJy5wbGF5LWFyZWEnKTsgfVxuICAgIGdldFN0YXR1cygpIHsgcmV0dXJuIHRoaXMuZ2V0Q29udGFpbmVyKCkucXVlcnlTZWxlY3RvcignLnBsYXktc3RhdHVzJyk7IH1cbiAgICBnZXRCdXR0b24oKSB7IHJldHVybiB0aGlzLmdldENvbnRhaW5lcigpLnF1ZXJ5U2VsZWN0b3IoJy5wbGF5LWJ1dHRvbicpOyB9XG4gICAgXG4gICAgLy8gSGVscGVycyB0byBoYW5kbGUgdGhlIGRpc3BsYXllZCBndWlkZXNcbiAgICBnZXRHdWlkZUluZGV4KGluZGV4KSB7IHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgKGluZGV4ICUgdGhpcy5TSVpFKSkuY29uY2F0KE1hdGguZmxvb3IoaW5kZXggLyB0aGlzLlNJWkUpICsgMSk7IH1cblxuICAgIGRpc3BsYXlCb2FyZCgpIHsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGFpbmVyJykuYXBwZW5kQ2hpbGQodGhpcy5nZXRDb250YWluZXIoKSk7IH1cbiAgICByZW1vdmVCb2FyZCgpIHsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXktY29udGFpbmVyJykucmVtb3ZlKCk7IH1cblxuICAgIC8vIHNldCB0aGUgZGlzcGxheSdzIGJ1dHRvbiB0ZXh0IGFuZCBkaXNhYmxlZCBzdGF0dXNcbiAgICBzZXRCdXR0b24oaW5kZXgpIHtcbiAgICAgICAgdGhpcy5nZXRCdXR0b24oKS5kaXNhYmxlZCA9IChpbmRleCkgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgIHRoaXMuZ2V0QnV0dG9uKCkuaW5uZXJIVE1MID0gKGluZGV4KSA/IGBBVFRBQ0sgJHt0aGlzLmdldEd1aWRlSW5kZXgoaW5kZXgpfWAgOiBgU0VMRUNUIFRBUkdFVGA7IFxuICAgIH07XG5cbiAgICAvLyBzd2l0Y2hlcyBhIGNlbGwgZnJvbSBvcGVuIHRvIHNlbGVjdGVkXG4gICAgdG9nZ2xlU2VsZWN0ZWQoaW5kZXgpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuZ2V0UGxheSgpLmNoaWxkcmVuLml0ZW0oYWRqdXN0VG9JbmRleChpbmRleCwgdGhpcy5TSVpFKSk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnRvZ2dsZSgnb3Blbi1jZWxsJyk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcbiAgICB9XG5cbiAgICAvLyBzZXQgY2xhc3MgZm9yIGNlbGwgaW4gdGhlIHBsYXkgZ3JpZFxuICAgIHVwZGF0ZVBsYXkoaW5kZXgsIHRvVXBkYXRlKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmdldFBsYXkoKS5jaGlsZHJlbi5pdGVtKGFkanVzdFRvSW5kZXgoaW5kZXgsIHRoaXMuU0laRSkpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCh0b1VwZGF0ZSk7XG4gICAgfVxuXG4gICAgLy8gc2V0IGNsYXNzIGZvciBjZWxsIGluIHRoZSBzdGF0dXMgZ3JpZFxuICAgIHVwZGF0ZVN0YXR1cyhpbmRleCwgdG9VcGRhdGUpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuZ2V0U3RhdHVzKCkuY2hpbGRyZW4uaXRlbShhZGp1c3RUb0luZGV4KGluZGV4LCB0aGlzLlNJWkUpKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKHRvVXBkYXRlKTtcbiAgICB9XG5cbiAgICAvLyBkaXNwbGF5IGEgcHJpdmFjeSBjb3ZlciBvbiB0dXJuIHN3aXRjaC1vZmZzLCB0YWtlcyBhIHN0cmluZyBmb3IgcGxheWVyJ3MgbmFtZSwgcmV0dXJucyBidXR0b25cbiAgICBjcmVhdGVUdXJuQ292ZXIocGxheWVyKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAndHVybi1jb250YWluZXInIH0pO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICd0dXJuLWNvbnRlbnQnIH0pO1xuICAgICAgICBjb25zdCBidXR0b24gPSBtYWtlRWxlbWVudCgnYnV0dG9uJywgeyBjbGFzczogJ3R1cm4tYnV0dG9uJyB9LCAnUkVBRFknKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnaDEnLCB7fSwgYCR7cGxheWVyLnRvVXBwZXJDYXNlKCl9J3NgKSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2gxJywge30sICdUVVJOJykpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgICAgdGhpcy5nZXRDb250YWluZXIoKS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH1cblxuICAgIGNsZWFyVHVybkNvdmVyKCkge1xuICAgICAgICB0aGlzLmdldENvbnRhaW5lcigpLnF1ZXJ5U2VsZWN0b3IoJy50dXJuLWNvbnRhaW5lcicpLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIC8vIGRpc3BsYXkgYSBnYW1lb3ZlciBtZXNzYWdlIHdpdGggY3VzdG9uIHJlc3VsdCBzdHJpbmcsIHJldHVybnMgYnV0dG9uIGZvciBiaW5kaW5nXG4gICAgY3JlYXRlR2FtZU92ZXIocmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnZ2FtZW92ZXItY29udGFpbmVyJyB9KTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnZ2FtZW92ZXItY29udGVudCcgfSk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IG1ha2VFbGVtZW50KCdidXR0b24nLCB7IGNsYXNzOiAnZ2FtZW92ZXItYnV0dG9uJyB9LCAnUExBWSBBR0FJTj8nKVxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdoMScsIHt9LCByZXN1bHQpKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9XG59IiwiLy8gSGVscGVyIGZ1bmN0aW9uIGZvciBlYXN5IGVsZW1lbnQgY3JlYXRpb25cbi8vIHVzZTogKDxzdHJpbmc+LCA8b2JqZWN0PiBvZiBwcm9wZXJ0aWVzIGFzIHlvdSB3b3VsZCB1c2Ugc2V0QXR0cmlidXRlLCA8c3RyaW5nPmlubmVySFRNTClcbmV4cG9ydCBmdW5jdGlvbiBtYWtlRWxlbWVudCh0eXBlLCBwcm9wZXJ0aWVzID0ge30sIGlubmVyID0gbnVsbCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGZvciAobGV0IGtleSBpbiBwcm9wZXJ0aWVzKSB7IGVsZW1lbnQuc2V0QXR0cmlidXRlKGAke2tleX1gLCBgJHtwcm9wZXJ0aWVzW2tleV19YCkgfTtcbiAgICBpZiAoaW5uZXIpIHsgZWxlbWVudC5pbm5lckhUTUwgPSBpbm5lciB9O1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG4vLyBBZGp1c3QgYW4gaW5kZXggdmFsdWUgdG8gY29tcGVuc2F0ZSBmb3IgYW55IGFkZGVkIGd1aWRlIHZhbHVlc1xuZXhwb3J0IGZ1bmN0aW9uIGFkanVzdFRvSW5kZXgoaW5kZXgsIHNpemUpIHsgXG4gICAgcmV0dXJuIChzaXplICsgMSkgKiAoaW5kZXggLyBzaXplICsgMSkgKyAxO1xufVxuXG4vLyBjcmVhdGUgYSB2YXJpYWJseSBzaXplZCBncmlkIHdpdGggZ3VpZGUgbWVhc3VyZXMgb24gdG9wIGFuZCBsZWZ0IGhhbmQgc2lkZVxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkR3JpZChzaWRlU2l6ZSwgYWRkQ2xhc3MpIHtcbiAgICBjb25zdCBTSVpFID0gTWF0aC5wb3coc2lkZVNpemUgKyAxLCAyKTtcbiAgICBjb25zdCBncmlkQm94ID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdncmlkLWJveCcgfSk7XG4gICAgaWYgKGFkZENsYXNzKSB7IGdyaWRCb3guY2xhc3NMaXN0LmFkZChhZGRDbGFzcyk7IH1cbiAgICBsZXQgY29sVmFsdWUgPSA2NTtcbiAgICBsZXQgcm93VmFsdWUgPSAxO1xuICAgIGxldCBjZWxsSW5kZXggPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgU0laRTsgaSsrKSB7IFxuICAgICAgICBpZiAoaSA9PT0gMCkgeyBncmlkQm94LmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnZ3VpZGUtY29ybmVyJyB9KSkgfVxuICAgICAgICBlbHNlIGlmIChpIDw9IHNpZGVTaXplKSB7IGdyaWRCb3guYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdndWlkZS10b3AnIH0sIFN0cmluZy5mcm9tQ2hhckNvZGUoY29sVmFsdWUrKykpKSB9XG4gICAgICAgIGVsc2UgaWYgKGkgJSAoc2lkZVNpemUgKyAxKSA9PT0gMCkgeyBncmlkQm94LmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnZ3VpZGUtbGVmdCd9LCByb3dWYWx1ZSsrKSkgfVxuICAgICAgICBlbHNlIHsgZ3JpZEJveC5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ29wZW4tY2VsbCBzZWxlY3RhYmxlJywgJ2RhdGEtaW5kZXgnOiBjZWxsSW5kZXgrKyB9KSkgfTtcbiAgICB9XG4gICAgcmV0dXJuIGdyaWRCb3g7XG59XG5cbi8vIHNldFBsYXllciBET00gYnVpbGRlcnNcblxuLy8gY29udGFpbmVyIGZvciBpY29ucyBpbmRleGVzIHRoZSBpY29ucyBvbiBvcmRlciBhZGRlZFxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkU2V0UGxheWVyKHNpemUsIHBpZWNlcywgaXNNdWx0aSkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGlkOiAnc2V0LWNvbnRhaW5lcicgfSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkR3JpZChzaXplKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkVG9nZ2xlQmFyKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWtlVHJheShwaWVjZXMpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRTdWJtaXRCYXIoaXNNdWx0aSkpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkU3VibWl0QmFyKGlzTXVsdGkpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBpZDogJ3N1Ym1pdC1iYXInIH0pO1xuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGlkOiAnc3VibWl0LWJjJyB9KTtcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2J1dHRvbicsIHsgaWQ6ICdzdWJtaXQtYnRuJywgZGlzYWJsZWQ6ICd0cnVlJyB9LCAnQ09OVElOVUUnKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkU2V0TXVsdGkoaXNNdWx0aSkpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkU2V0TXVsdGkoaXNNdWx0aSkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGlkOiAnc3VibWl0LW1jJyB9KTtcbiAgICBjb25zdCB0d28gPSBtYWtlRWxlbWVudCgnZGl2JywgeyBpZDogJ3N1Ym1pdC1tYy0yJyB9KTtcbiAgICBjb25zdCBjaGVjayA9IG1ha2VFbGVtZW50KCdpbnB1dCcsIHsgdHlwZTogJ2NoZWNrYm94JywgaWQ6ICdzdWJtaXQtY2hrJyB9KTtcbiAgICBpZiAoaXNNdWx0aSkgeyBcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lzLW11bHRpJyk7XG4gICAgICAgIGNoZWNrLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAndHJ1ZScpIFxuICAgIH07XG4gICAgdHdvLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdkaXYnLCB7fSwgJ1QnKSk7XG4gICAgdHdvLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdkaXYnLCB7fSwgJ1cnKSk7XG4gICAgdHdvLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdkaXYnLCB7fSwgJ08nKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHR3byk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdkaXYnLCB7IGlkOiAnc3VibWl0LW1jLW0nIH0sICdQTEFZJykpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVjayk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gYnVpbGRUb2dnbGVCYXIoKSB7XG4gICAgY29uc3QgdG9nZ2xlYmFyID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgaWQ6ICd0b2dnbGUtYmFyJyB9KTtcbiAgICBjb25zdCB0b2dnbGVDb250YWluZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBpZDogJ3RvZ2dsZS1jb250YWluZXInIH0pXG4gICAgY29uc3QgdG9nZ2xlQm9keSA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGlkOiAndG9nZ2xlLWJvZHknLCAnZGF0YS15JzogJ2ZhbHNlJyB9KTtcbiAgICBjb25zdCB0b2dnbGVUZXh0ID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgaWQ6ICd0b2dnbGUtdGV4dCcgfSwgJ1gnKTtcbiAgICBjb25zdCBpbnN0cnVjdENvbnQgPSBtYWtlRWxlbWVudCgnZGl2Jywge2lkOiAnaW5zdC1jb250YWluZXInIH0pO1xuICAgIGNvbnN0IGluc3RydWN0VUwgPSBtYWtlRWxlbWVudCgndWwnLCB7aWQ6ICdpbnN0LXVsJyB9KTtcbiAgICBpbnN0cnVjdFVMLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdsaScsIHt9LCAnRFJBRyBQSUVDRVMgQkVMT1cgVE8gR1JJRCcpKTtcbiAgICBpbnN0cnVjdFVMLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdsaScsIHt9LCAnTEVGVCBUT0dHTEUgVE8gU0VUIERJUkVDVElPTicpKTtcbiAgICBpbnN0cnVjdFVMLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdsaScsIHt9LCAnT05DRSBBTEwgU0VUIFBSRVNTIENPTlRJTlVFJykpO1xuICAgIHRvZ2dsZUJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2dnbGUtcm90YXRlJykpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS15JywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCd0b2dnbGUtcm90YXRlJyk7XG4gICAgICAgICAgICB0b2dnbGVUZXh0LmlubmVySFRNTCA9ICdYJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS15JywgJ3RydWUnKTtcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS1yb3RhdGUnKTtcbiAgICAgICAgICAgIHRvZ2dsZVRleHQuaW5uZXJIVE1MID0gJ1knO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgdG9nZ2xlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZ2dsZUJvZHkpO1xuICAgIHRvZ2dsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2dnbGVUZXh0KTtcbiAgICB0b2dnbGViYXIuYXBwZW5kQ2hpbGQodG9nZ2xlQ29udGFpbmVyKVxuICAgIGluc3RydWN0Q29udC5hcHBlbmRDaGlsZChpbnN0cnVjdFVMKTtcbiAgICB0b2dnbGViYXIuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3RDb250KTtcbiAgICByZXR1cm4gdG9nZ2xlYmFyO1xufVxuXG5mdW5jdGlvbiBtYWtlVHJheShwaWVjZXMpIHtcbiAgICBjb25zdCB0cmF5ID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdzZXQtdHJheScgfSk7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMCwgaiA9IE1hdGguZmxvb3IoKHBpZWNlcy5sZW5ndGgpIC8gMik7IGogPCBwaWVjZXMubGVuZ3RoOyBpKyssIGorKykge1xuICAgICAgICBpZiAoaSA8IE1hdGguZmxvb3IocGllY2VzLmxlbmd0aCAvIDIpKSB7IFxuICAgICAgICAgICAgdHJheS5hcHBlbmRDaGlsZChtYWtlVHJheUl0ZW0ocGllY2VzW2ldKSk7XG4gICAgICAgICAgICB0cmF5Lmxhc3RDaGlsZC5maXJzdENoaWxkLnNldEF0dHJpYnV0ZSgnZGF0YS10cmF5JywgYCR7aW5kZXgrK31gKTtcbiAgICAgICAgfVxuICAgICAgICB0cmF5LmFwcGVuZENoaWxkKG1ha2VUcmF5SXRlbShwaWVjZXNbal0pKTtcbiAgICAgICAgdHJheS5sYXN0Q2hpbGQuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJheScsIGAke2luZGV4Kyt9YCk7XG4gICAgfVxuICAgIHJldHVybiB0cmF5O1xufVxuXG4vLyBjcmVhdGUgaG9sZGVyIGZvciBpY29uc1xuZnVuY3Rpb24gbWFrZVRyYXlJdGVtKHBpZWNlKSB7XG4gICAgY29uc3QgaXRlbSA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAndHJheS1pdGVtJyB9KVxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQobWFrZVBpZWNlSWNvbihwaWVjZSkpO1xuICAgIHJldHVybiBpdGVtO1xufVxuXG4vLyBjcmVhdGUgaWNvbnNcbmZ1bmN0aW9uIG1ha2VQaWVjZUljb24oc2l6ZSkge1xuICAgIGNvbnN0IGljb24gPSBtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2ljb24tcGllY2UnIH0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2ljb24tY2VsbCcgfSk7XG4gICAgICAgIGljb24uYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxuICAgIGljb24uZGF0YXNldC5zaXplID0gc2l6ZTtcbiAgICByZXR1cm4gaWNvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VEcmFnSWNvbihzaXplLCB2ZXJ0aWNhbCwgdHJheSwgY2VsbFNpemUpIHtcbiAgICBjb25zdCBkcmFnSWNvbiA9IG1ha2VQaWVjZUljb24oTnVtYmVyKHNpemUpKTtcbiAgICBkcmFnSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RyYWdnZWQnKTtcbiAgICBkcmFnSWNvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJheScsIHRyYXkpO1xuICAgIGlmICh2ZXJ0aWNhbCkgeyBkcmFnSWNvbi5jbGFzc0xpc3QuYWRkKCdkcmFnLXknKSB9XG4gICAgWy4uLmRyYWdJY29uLmNoaWxkcmVuXS5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgY2hpbGQuc3R5bGUuaGVpZ2h0ID0gY2VsbFNpemU7XG4gICAgICAgIGNoaWxkLmNsYXNzTGlzdC5hZGQoJ2RyYWctY2VsbCcpXG4gICAgfSk7XG4gICAgcmV0dXJuIGRyYWdJY29uOyBcbn0iLCIvLyBDcmVhdGUgYSBkcmFnZ2FibGUgaXRlbVxuXG5sZXQgZWxlbWVudDtcbmxldCB4T2ZmO1xubGV0IHlPZmY7XG5jb25zdCBtb3ZlSGFuZGxlciA9IG1vdmUuYmluZCh0aGlzKTtcbmNvbnN0IGVuZEhhbmRsZXIgPSBlbmQuYmluZCh0aGlzKTtcblxuXG5leHBvcnQgZnVuY3Rpb24gRHJhZ0VsZW1lbnQoZWxlbSwgeCwgeSkge1xuICAgIGVsZW1lbnQgPSBlbGVtO1xuICAgIHhPZmYgPSB4O1xuICAgIHlPZmYgPSB5O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3ZlSGFuZGxlciwgdHJ1ZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBlbmRIYW5kbGVyLCB0cnVlKTtcbn1cblxuXG5mdW5jdGlvbiBtb3ZlKGUpIHtcbiAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGVsZW1lbnQuc3R5bGUudG9wID0gKGUuY2xpZW50WSAtIHlPZmYpICsgJ3B4JztcbiAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSAoZS5jbGllbnRYIC0geE9mZikgKyAncHgnO1xufVxuXG5mdW5jdGlvbiBlbmQoZSkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3ZlSGFuZGxlciwgdHJ1ZSk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBlbmRIYW5kbGVyLCB0cnVlKTtcbn0iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9TaGlwLmpzJztcblxuZXhwb3J0IGNsYXNzIEdhbWVib2FyZCB7XG4gICAgY29uc3RydWN0b3Ioc2l6ZSkge1xuICAgICAgICB0aGlzLlNJWkUgPSBzaXplO1xuICAgICAgICB0aGlzLmFsbFNoaXBzID0gW107XG4gICAgICAgIHRoaXMuYm9hcmQgPSBbXTtcbiAgICAgICAgdGhpcy5hbGxIaXQgPSBbXTtcbiAgICAgICAgdGhpcy5hbGxNaXNzID0gW107XG4gICAgICAgIHRoaXMuYWxsUGxhY2VkID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZSAqIHNpemU7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5ib2FyZC5wdXNoKHtzaGlwOiBudWxsLCBoaXQ6IGZhbHNlfSlcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBnZXRIaXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFsbEhpdDtcbiAgICB9XG5cbiAgICBnZXRNaXNzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hbGxNaXNzO1xuICAgIH1cblxuICAgIGdldFBsYWNlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxsUGxhY2VkO1xuICAgIH1cblxuICAgIGdldFNpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLlNJWkUgKiB0aGlzLlNJWkU7XG4gICAgfVxuXG4gICAgaXNIaXQoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRbaW5kZXhdLmhpdDtcbiAgICB9XG5cbiAgICBpc1N1bmtBdChpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFtpbmRleF0uc2hpcC5pc1N1bmsoKTtcbiAgICB9XG5cbiAgICBpc1NhbWVTaGlwKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRbYV0uc2hpcCA9PT0gdGhpcy5ib2FyZFtiXS5zaGlwO1xuICAgIH1cblxuICAgIC8vIHBsYWNlIG5ldyBzaGlwIG9uIGdhbWVib2FyZCByZXR1cm5zIHNoaXAgb3IgZmFsc2UgaWYgbm90IGxlZ2FsIHBsYWNlbWVudFxuICAgIGFkZFNoaXAoc2hpcFNpemUsIGhlYWQsIHZlcnRpY2FsID0gZmFsc2UpIHtcbiAgICAgICAgLy8gZGlzYWxsb3cgcGxhY2VtZW50IGJleW9uZCBib2FyZCdzIGJvdW5kYXJpZXNcbiAgICAgICAgaWYgKCF2ZXJ0aWNhbCAmJiAoKGhlYWQgJSB0aGlzLlNJWkUpICsgc2hpcFNpemUgPiB0aGlzLlNJWkUpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICh2ZXJ0aWNhbCAmJiAoTWF0aC5mbG9vcihoZWFkIC8gdGhpcy5TSVpFKSkgKyBzaGlwU2l6ZSA+IHRoaXMuU0laRSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCB0b1BsYWNlID0gdGhpcy5nZXRJbmRlY2VzKHNoaXBTaXplLCBoZWFkLCB2ZXJ0aWNhbCk7XG4gICAgICAgIC8vIGluc3BlY3QgZm9yIGFueSBvdmVybGFwcGluZyBjb25mbGljdFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvUGxhY2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3RvUGxhY2VbaV1dLnNoaXApIHsgcmV0dXJuIGZhbHNlO30gXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG5ld1NoaXAgPSBuZXcgU2hpcChzaGlwU2l6ZSk7XG4gICAgICAgIHRvUGxhY2UuZm9yRWFjaChpbmRleCA9PiB7XG4gICAgICAgICAgICB0aGlzLmFsbFBsYWNlZC5wdXNoKGluZGV4KTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbaW5kZXhdLnNoaXAgPSBuZXdTaGlwXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFsbFNoaXBzLnB1c2godG9QbGFjZSk7XG4gICAgICAgIHJldHVybiBuZXdTaGlwO1xuICAgIH1cblxuICAgIC8vIHJldHVybnMgYW4gYXJyYXkgb2YgYSBzaGlwJ3Mgc2VxdWVudGlhbCBwb3NpdGlvbmluZ1xuICAgIGdldEluZGVjZXMoc2l6ZSwgaGVhZCwgdmVydGljYWwpIHtcbiAgICAgICAgY29uc3QgaW5kZWNlcyA9IFtdO1xuICAgICAgICBpZiAodmVydGljYWwpIHtcbiAgICAgICAgICAgIHdoaWxlIChzaXplLS0gPiAwKSB7XG4gICAgICAgICAgICAgICAgaW5kZWNlcy5wdXNoKGhlYWQpO1xuICAgICAgICAgICAgICAgIGhlYWQgKz0gdGhpcy5TSVpFO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdoaWxlIChzaXplLS0gPiAwKSB7XG4gICAgICAgICAgICAgICAgaW5kZWNlcy5wdXNoKGhlYWQrKyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluZGVjZXM7XG4gICAgfVxuXG4gICAgLy8gc2V0cyBhdHRhY2sgYWN0aW9ucywgbXVzdCBiZSBpbnRlZ2VyIGFuZCB3aXRoaW4gdGhlIGdhbWVib2FyZCwgaWdub3JlcyBzcGFjZXMgYWxyZWFkeSBoaXRcbiAgICByZWNlaXZlQXR0YWNrKGluZGV4KSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5kZXggIT0gJ251bWJlcicpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcigndmFsdWUgbXVzdCBiZSBOdW1iZXInKSB9O1xuICAgICAgICBpZiAoIU51bWJlci5pc0ludGVnZXIoaW5kZXgpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ09ubHkgaW50ZWdlciB2YWx1ZXMnKSB9O1xuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMuYm9hcmQubGVuZ3RoKSB7IHRocm93IG5ldyBSYW5nZUVycm9yKGB2YWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgJHt0aGlzLmJvYXJkLmxlbmd0aCAtIDF9YCk7IH1cbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbaW5kZXhdLmhpdCkgeyByZXR1cm47IH1cblxuICAgICAgICB0aGlzLmJvYXJkW2luZGV4XS5oaXQgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5ib2FyZFtpbmRleF0uc2hpcCkge1xuICAgICAgICAgICAgdGhpcy5ib2FyZFtpbmRleF0uc2hpcC5oaXQoKTtcbiAgICAgICAgICAgIHRoaXMuYWxsSGl0LnB1c2goaW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRbaW5kZXhdLnNoaXA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFsbE1pc3MucHVzaChpbmRleCk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNvbmZpcm1zIHRoYXQgdGhlIHNoaXAgYXQgZWFjaCBmcm9udCBwb3NpdGlvbiBpbiBhbGxTaGlwcyBpcyBzdW5rXG4gICAgaXNTdW5rKCkge1xuICAgICAgICBsZXQgc3VuayA9IHRydWU7XG4gICAgICAgIHRoaXMuYWxsU2hpcHMuZm9yRWFjaChzaGlwID0+IHsgXG4gICAgICAgICAgICBpZiAoIXRoaXMuYm9hcmRbc2hpcFswXV0uc2hpcC5pc1N1bmsoKSkgeyBzdW5rID0gZmFsc2U7IH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzdW5rO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL0dhbWVib2FyZFwiO1xuLy8gaG9sZHMgcGxheWVyJ3MgZ2FtZWJvYXJkLCBjYW4gZGV0ZXJtaW5lIG5leHQgbW92ZSBpZiBjcHUgXG4vLyBwYXNzIGFuIGFycmF5IG9mIGFycmF5cyBpbiBbc2hpcCBzaXplLCBzaGlwIGluZGV4LCBpcyB2ZXJ0aWNhbCh0cnVlL2ZhbHNlKV0gZm9ybWF0XG4vLyB0byBwb3B1bGF0ZSB0aGUgZ2FtZWJvYXJkXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB0b0FkZCkge1xuICAgICAgICB0aGlzLlNJWkUgPSAxMDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBHYW1lYm9hcmQodGhpcy5TSVpFKTtcbiAgICAgICAgdGhpcy5uZXh0TW92ZSA9IFtdO1xuICAgICAgICBpZiAodG9BZGQpIHsgdG9BZGQuZm9yRWFjaChzaGlwID0+IHRoaXMuYm9hcmQuYWRkU2hpcChzaGlwWzBdLCBzaGlwWzFdLCBzaGlwWzJdKSApOyB9XG4gICAgICAgIGVsc2UgeyB0aGlzLnJhbmRvbUJvYXJkKFs1LCA0LCAzLCAzLCAyXSkuZm9yRWFjaChzaGlwID0+IHt0aGlzLmJvYXJkLmFkZFNoaXAoc2hpcFswXSwgc2hpcFsxXSwgc2hpcFsyXSl9ICk7IH1cbiAgICB9O1xuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG5cbiAgICBnZXRBbGxTaGlwSW5kZXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkLmdldFBsYWNlZCgpO1xuICAgIH1cblxuICAgIGdldE1pc3NJbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQuZ2V0TWlzcygpO1xuICAgIH1cblxuICAgIGdldEhpdEluZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZC5nZXRIaXQoKTtcbiAgICB9XG5cbiAgICAvLyBjb25maXJtcyBpZiBwbGF5ZXIgaXMgZGVmZWF0ZWRcbiAgICBpc0RlZmVhdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZC5pc1N1bmsoKTtcbiAgICB9XG5cbiAgICAvLyByZXR1cm5zIGVpdGhlciB0aGUgaGl0IHNoaXAgb3IgbnVsbFxuICAgIHRha2VIaXQoaW5kZXgpIHtcbiAgICAgICAgY29uc3QgaGl0ID0gdGhpcy5ib2FyZC5yZWNlaXZlQXR0YWNrKGluZGV4KTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gKHRoaXMubmV4dE1vdmUubGVuZ3RoID09PSAwKSA/IG51bGwgOiB0aGlzLm5leHRNb3ZlWzBdWzBdO1xuICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xuICAgICAgICBpZiAoaGl0ICYmICghdGFyZ2V0IHx8ICF0aGlzLmJvYXJkLmlzU2FtZVNoaXAodGFyZ2V0LCBpbmRleCkpKSB7XG4gICAgICAgICAgICB0aGlzLm5leHRNb3ZlLnB1c2goW1xuICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgIGluZGV4IC0gMSxcbiAgICAgICAgICAgICAgICBpbmRleCArIHRoaXMuU0laRSxcbiAgICAgICAgICAgICAgICBpbmRleCArIDEsXG4gICAgICAgICAgICAgICAgaW5kZXggLSB0aGlzLlNJWkUsXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfSBlbHNlIGlmIChoaXQgJiYgdGhpcy5pc1hUbyh0YXJnZXQsIGluZGV4KSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2JpbmdvIHgnKTtcbiAgICAgICAgICAgIHRoaXMubmV4dE1vdmVbMF0uY29uY2F0KFtcbiAgICAgICAgICAgICAgICBpbmRleCAtIDEsXG4gICAgICAgICAgICAgICAgdGFyZ2V0IC0gMSxcbiAgICAgICAgICAgICAgICBpbmRleCArIDFdKTtcbiAgICAgICAgfSBlbHNlIGlmIChoaXQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdiaW5nbyB5Jyk7XG4gICAgICAgICAgICB0aGlzLm5leHRNb3ZlWzBdLmNvbmNhdChbXG4gICAgICAgICAgICAgICAgaW5kZXggLSB0aGlzLlNJWkUsXG4gICAgICAgICAgICAgICAgdGFyZ2V0IC0gdGhpcy5TSVpFLFxuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKyB0aGlzLlNJWkVdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGhpdCkgPyAnaGl0JyA6ICdtaXNzJztcbiAgICB9XG5cbiAgICAvLyBjb25maXJtcyBpZiBhIG1vdmUgaXMgdmFsaWRcbiAgICBpc1ZhbGlkTW92ZShpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMuYm9hcmQuZ2V0U2l6ZSgpKSB7IHJldHVybiBmYWxzZSB9O1xuICAgICAgICByZXR1cm4gIXRoaXMuYm9hcmQuaXNIaXQoaW5kZXgpO1xuICAgIH1cblxuICAgIC8vIGNvbmZpcm1zIGlmIGluZGljZXMgaXMgb24gdGhlIHNhbWUgcm93IG9yIGNvbHVtblxuICAgIGlzVmFsaWRUbyhmcm9tLCB0bykge1xuICAgICAgICBpZiAodGhpcy5pc1hUbyhmcm9tLCB0bykpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgaWYgKHRoaXMuaXNZVG8oZnJvbSwgdG8pKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpc1hUbyhmcm9tLCB0bykge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihmcm9tIC8gdGhpcy5TSVpFKSA9PT0gTWF0aC5mbG9vcih0byAvIHRoaXMuU0laRSk7XG4gICAgfVxuXG4gICAgaXNZVG8oZnJvbSwgdG8pIHtcbiAgICAgICAgcmV0dXJuIGZyb20gJSB0aGlzLlNJWkUgPT09IHRvICUgdGhpcy5TSVpFXG4gICAgfVxuXG4gICAgLy8gdGFrZXMgYSBjcHUgdHVybiBhZ2FpbnN0IHBsYXllciwgcmV0dXJucyBtb3ZlIHRha2VuXG4gICAgY3B1VHVybigpIHtcbiAgICAgICAgY29uc3QgbW92ZSA9IHRoaXMuZ2V0TmV4dE1vdmUoKTtcbiAgICAgICAgcmV0dXJuIHsgbW92ZTogbW92ZSwgcmVzdWx0OiB0aGlzLnRha2VIaXQobW92ZSkgfTtcbiAgICB9XG5cbiAgICAvLyBpZiBubyBxdWV1ZWQgbW92ZXMgbWFrZSBhIHJhbmRvbSBtb3ZlLCBjbGVhciBhIHN1bmsgc2hpcCwgb3IgcmV0dXJuIHRoZSBuZXh0IHZhbGlkIG1vdmVcbiAgICBnZXROZXh0TW92ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubmV4dE1vdmUubGVuZ3RoID09PSAwKSB7IHJldHVybiB0aGlzLnJhbmRvbU1vdmUoKSBcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJvYXJkLmlzU3Vua0F0KHRoaXMubmV4dE1vdmVbMF1bMF0pKSB7XG4gICAgICAgICAgICB0aGlzLm5leHRNb3ZlLnNoaWZ0KCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXROZXh0TW92ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbW92ZSA9IHRoaXMubmV4dE1vdmVbMF0ucG9wKCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZE1vdmUobW92ZSkgfHwgIXRoaXMuaXNWYWxpZFRvKHRoaXMubmV4dE1vdmVbMF1bMF0sIG1vdmUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TmV4dE1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtb3ZlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZWxlY3QgYSB2YWxpZCBmcmVlIHNwYWNlIHRvIGF0dGFjayBmcm9tIHRoZSBnYW1lYm9hcmRcbiAgICByYW5kb21Nb3ZlKCkge1xuICAgICAgICBjb25zdCBtb3ZlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5wb3codGhpcy5TSVpFLCAyKSk7XG4gICAgICAgIHJldHVybiAodGhpcy5pc1ZhbGlkTW92ZShtb3ZlKSkgPyBtb3ZlIDogdGhpcy5yYW5kb21Nb3ZlKCk7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJucyBhIHNldCBvZiBbc2hpcCBzaXplLCBzaGlwIGluZGV4LCBpcyB2ZXJ0aWNhbCh0cnVlL2ZhbHNlKV0gc3VjaCB0aGF0IFxuICAgIC8vIHRoZXJlIGlzIG5vIG92ZXJsYXAgb3IgY29uZmxpY3NcbiAgICByYW5kb21Cb2FyZCh0b0FkZCkge1xuICAgICAgICBjb25zdCBhbGxTaGlwcyA9IFtdO1xuICAgICAgICBjb25zdCBib2FyZCA9IG5ldyBBcnJheShNYXRoLnBvdyh0aGlzLlNJWkUsIDIpKTtcbiAgICAgICAgdG9BZGQuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrID0gYWxsU2hpcHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKGFsbFNoaXBzLmxlbmd0aCA9PT0gY2hlY2spIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc1kgPSAoTWF0aC5yYW5kb20oKSA8IDAuNSk7XG4gICAgICAgICAgICAgICAgY29uc3QgaGVhZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGgucG93KHRoaXMuU0laRSwgMikpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvUGxhY2UgPSB0aGlzLmdldENvb3JkKHNoaXAsIGhlYWQsIGlzWSk7XG4gICAgICAgICAgICAgICAgaWYgKHRvUGxhY2VbdG9QbGFjZS5sZW5ndGggLSAxXSA8IE1hdGgucG93KHRoaXMuU0laRSwgMikgJiYgdGhpcy52YWxpZFNoaXAodG9QbGFjZSwgaXNZKSAmJiB0aGlzLnZhbGlkUGxhY2UoYm9hcmQsIHRvUGxhY2UpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b1BsYWNlLmZvckVhY2goY2VsbCA9PiB7IGJvYXJkW2NlbGxdID0gdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFNoaXBzLnB1c2goW3NoaXAsIGhlYWQsIGlzWV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGFsbFNoaXBzO1xuICAgIH1cblxuICAgIC8vIHJldHVybiBhbiBhcnJheSBvZiBncmlkIGNvb3JkaW5hdGVzIGVpdGhlciB4IG9yIHkgYWxpZ25lZFxuICAgIGdldENvb3JkKHNpemUsIGhlYWQsIGlzWSkge1xuICAgICAgICBjb25zdCBhcnIgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgIGFyci5wdXNoKGhlYWQpO1xuICAgICAgICAgICAgaWYgKGlzWSkgeyBoZWFkICs9IHRoaXMuU0laRTsgfVxuICAgICAgICAgICAgZWxzZSB7IGhlYWQgKz0gMSB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICAvLyBjb25maXJtIGlmIGEgc2VxdWVuY2Ugb2YgaW5kaWNlcyBhcmUgdmFsaWQgb24gYSBncmlkXG4gICAgdmFsaWRTaGlwKGFyciwgaXNZKSB7XG4gICAgICAgIHJldHVybiAoaXNZKSBcbiAgICAgICAgICAgID8gKGFyclswXSAlIHRoaXMuU0laRSA9PT0gYXJyW2Fyci5sZW5ndGggLSAxXSAlIHRoaXMuU0laRSlcbiAgICAgICAgICAgIDogKE1hdGguZmxvb3IoYXJyWzBdIC8gdGhpcy5TSVpFKSA9PT0gTWF0aC5mbG9vcihhcnJbYXJyLmxlbmd0aCAtIDFdIC8gdGhpcy5TSVpFKSk7IFxuICAgIH1cblxuICAgIC8vIGNoZWNrIGlmIGFueSBvdmVybGFwIGV4aXN0cyBiZXR3ZWVuIGJvYXJkIGFuZCBjYW5kaWRhdGVkIGluZGljZXNcbiAgICB2YWxpZFBsYWNlKGJvYXJkLCBhcnIpIHtcbiAgICAgICAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgYXJyLmZvckVhY2goaW5kZXggPT4ge1xuICAgICAgICAgICAgaWYgKGJvYXJkW2luZGV4XSkgeyB2YWxpZCA9IGZhbHNlIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHZhbGlkO1xuICAgIH1cbn07XG4iLCJpbXBvcnQgeyBEcmFnRWxlbWVudCB9IGZyb20gJy4vRHJhZ0VsZW1lbnQuanMnO1xuaW1wb3J0IHsgYWRqdXN0VG9JbmRleCwgYnVpbGRTZXRQbGF5ZXIsIG1ha2VEcmFnSWNvbiB9IGZyb20gJy4vRE9NSGVscGVycy5qcyc7XG5cbi8vIERpc3BsYXkgZm9yIGluaXRpYWx6aWluZyBhIHBsYXllclxuZXhwb3J0IGNsYXNzIFNldFBsYXllciB7XG4gICAgY29uc3RydWN0b3Ioc2l6ZSwgcGllY2VzLCBpc011bHRpKSB7XG4gICAgICAgIHRoaXMuU0laRSA9IHNpemU7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gYnVpbGRTZXRQbGF5ZXIoc2l6ZSwgcGllY2VzLCBpc011bHRpKTtcbiAgICAgICAgdGhpcy5iaW5kVHJheSgpO1xuICAgICAgICB0aGlzLmRyYWdFdmVudCA9IHtcbiAgICAgICAgICAgIGRyYWdPdmVyOiBudWxsLFxuICAgICAgICAgICAgZHJhZ0dyb3VwOiBbXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldEl0ZW0gPSBbXTtcbiAgICAgICAgdGhpcy5kcmFnUGlja1VwU3RhcnRIYW5kbGVyID0gdGhpcy5kcmFnUGlja1VwU3RhcnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmFnTW92ZUhhbmRsZXIgPSB0aGlzLmRyYWdNb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhZ0VuZEhhbmRsZXIgPSB0aGlzLmRyYWdFbmQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBiaW5kVHJheSgpIHtcbiAgICAgICAgdGhpcy5nZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yQWxsKCcuaWNvbi1waWVjZScpLmZvckVhY2goaWNvbiA9PiB7XG4gICAgICAgICAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB0aGlzLmRyYWdTdGFydChlKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldENvbnRhaW5lcigpIHsgcmV0dXJuIHRoaXMuY29udGFpbmVyOyB9XG4gICAgZ2V0R3JpZCgpIHsgcmV0dXJuIHRoaXMuZ2V0Q29udGFpbmVyKCkucXVlcnlTZWxlY3RvcignLmdyaWQtYm94Jyk7IH1cbiAgICBnZXRUcmF5KCkgeyByZXR1cm4gdGhpcy5nZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yKCcuc2V0LXRyYXknKTsgfVxuICAgIGdldEJ1dHRvbigpIHsgcmV0dXJuIHRoaXMuZ2V0Q29udGFpbmVyKCkucXVlcnlTZWxlY3RvcignI3N1Ym1pdC1idG4nKTsgfVxuICAgIGdldE11bHRpKCkgeyByZXR1cm4gdGhpcy5nZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LWNoaycpLmNoZWNrZWQgfVxuICAgIGdldERhdGEoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBtdWx0aTogdGhpcy5nZXRNdWx0aSgpLFxuICAgICAgICAgICAgYm9hcmQ6IFtdXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRJdGVtLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhZGQgPSBbXTtcbiAgICAgICAgICAgIGFkZC5wdXNoKGl0ZW0uc2l6ZSk7XG4gICAgICAgICAgICBhZGQucHVzaChpdGVtLmhlYWQpO1xuICAgICAgICAgICAgYWRkLnB1c2goaXRlbS5zZXRZKTtcbiAgICAgICAgICAgIGRhdGEuYm9hcmQucHVzaChhZGQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgLy8gYXBwZW5kIHNldHBsYXllciB0byBtYWluIGNvbnRhaW5lciwgc2V0cyBpbml0aWFsIGhlaWdodCBvZiBhbGwgaWNvbiBjZWxsc1xuICAgIC8vIGJpbmRzIHdpbmRvdyByZXNpemluZyB0byByZXNpemUgaWNvbnMgdG8gbWF0Y2ggZ3JpZCBzaXplXG4gICAgZGlzcGxheSgpIHsgXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKHRoaXMuZ2V0Q29udGFpbmVyKCkpOyBcbiAgICAgICAgdGhpcy5zZXRUcmF5SWNvblNpemUoKVxuICAgICAgICB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkLWJveCcpLmNoaWxkcmVuLml0ZW0oMTEpLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pY29uLWNlbGwnKS5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIGNsZWFyIHNldHBsYXllclxuICAgIHJlbW92ZSgpIHsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NldC1jb250YWluZXInKS5yZW1vdmUoKTsgfVxuXG4gICAgLy8gc2V0IHRoZSBpY29uJ3MgY2VsbCBzaXplIHRvIG1hdGNoIHRoZSBncmlkJ3MgY2VsbCBzaXplXG4gICAgc2V0VHJheUljb25TaXplKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaWNvbi1jZWxsJykuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgIGNlbGwuc3R5bGUuaGVpZ2h0ID0gdGhpcy5HZXRUcmF5SWNvblNpemUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgR2V0VHJheUljb25TaXplKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5nZXRHcmlkKCkuY2hpbGRyZW4uaXRlbShhZGp1c3RUb0luZGV4KDAsIHRoaXMuU0laRSkpLmNsaWVudEhlaWdodH1weGA7XG4gICAgfVxuXG4gICAgLy8gQWxsIGRyYWcvZHJvcCBhY3Rpb25zIHRvIGZvbGxvd1xuICAgIC8vIGNyZWF0ZXMgYW5kIGFwcGVuZHMgZHJhZ2dlZCBpY29uLCBzZXRzIGRyYWcgYmluZGluZ3NcbiAgICBkcmFnU3RhcnQoZSkge1xuICAgICAgICBjb25zdCBpY29uID0gKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaWNvbi1jZWxsJykpID8gZS50YXJnZXQucGFyZW50Tm9kZSA6IGUudGFyZ2V0O1xuICAgICAgICBpZiAoaWNvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2ljb24tZGlzYWJsZScpKSB7IHJldHVybiB9XG4gICAgICAgIGNvbnN0IGRyYWdJY29uID0gbWFrZURyYWdJY29uKFxuICAgICAgICAgICAgTnVtYmVyKGljb24uZGF0YXNldC5zaXplKSxcbiAgICAgICAgICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9nZ2xlLWJvZHknKS5kYXRhc2V0LnkgPT09ICd0cnVlJyksXG4gICAgICAgICAgICBpY29uLmRhdGFzZXQudHJheSxcbiAgICAgICAgICAgIHRoaXMuR2V0VHJheUljb25TaXplKClcbiAgICAgICAgICAgICk7XG4gICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnaWNvbi1kaXNhYmxlJyk7XG4gICAgICAgIGljb24uYXBwZW5kQ2hpbGQoZHJhZ0ljb24pO1xuICAgICAgICBjb25zdCBvZmZzZXQgPSAoZHJhZ0ljb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdkcmFnLXknKSlcbiAgICAgICAgICAgID8gdGhpcy5nZXRZb2Zmc2V0KGRyYWdJY29uLCBlLmNsaWVudFggLSBkcmFnSWNvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KVxuICAgICAgICAgICAgOiAwO1xuICAgICAgICBpZiAoIWRyYWdJY29uLmNsYXNzTGlzdC5jb250YWlucygnZHJhZy15JykpIHsgXG4gICAgICAgICAgICB0aGlzLnNldFhBdHRyaWJ1dGUoZHJhZ0ljb24sIGUuY2xpZW50WCAtIGRyYWdJY29uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQpOyBcbiAgICAgICAgfTtcbiAgICAgICAgRHJhZ0VsZW1lbnQoZHJhZ0ljb24sIGUuY2xpZW50WCAtIG9mZnNldCwgZS5jbGllbnRZKTsgXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmRyYWdFbmRIYW5kbGVyKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGFpbmVyJykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5kcmFnTW92ZUhhbmRsZXIsIHRydWUpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5kcmFnRW5kSGFuZGxlciwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgZHJhZ1BpY2tVcFN0YXJ0KGUpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgd2hpbGUgKHRoaXMuc2V0SXRlbVtpbmRleF0udHJheSAhPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC5nZXR0cmF5KSkgeyBpbmRleCsrOyB9XG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IHRoaXMuc2V0SXRlbVtpbmRleF07XG4gICAgICAgIGNvbnN0IGRyYWdJdGVtID0gbWFrZURyYWdJY29uKFxuICAgICAgICAgICAgc2VsZWN0LnNpemUsXG4gICAgICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZ2dsZS1ib2R5JykuZGF0YXNldC55ID09PSAndHJ1ZScpLFxuICAgICAgICAgICAgc2VsZWN0LnRyYXksXG4gICAgICAgICAgICB0aGlzLkdldFRyYXlJY29uU2l6ZSgpXG4gICAgICAgIClcbiAgICAgICAgZS50YXJnZXQuYXBwZW5kQ2hpbGQoZHJhZ0l0ZW0pO1xuICAgICAgICB0aGlzLmNvbmZpZ1BpY2tVcChkcmFnSXRlbSwgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2dnbGUtYm9keScpLmRhdGFzZXQueSA9PT0gJ3RydWUnKSk7XG4gICAgICAgIERyYWdFbGVtZW50KGRyYWdJdGVtLCBlLmNsaWVudFgsIGUuY2xpZW50WSk7XG4gICAgICAgIHRoaXMucmVtb3ZlUGxhY2VkKHNlbGVjdC5oZWFkLCBzZWxlY3Quc2l6ZSwgc2VsZWN0LnNldFkpO1xuICAgICAgICB0aGlzLnNldEl0ZW0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGFpbmVyJykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMuZHJhZ0VuZEhhbmRsZXIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmRyYWdNb3ZlSGFuZGxlciwgdHJ1ZSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmRyYWdFbmRIYW5kbGVyLCB0cnVlKTtcblxuICAgICAgICB0aGlzLmdldEJ1dHRvbigpLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBDb25maWd1cmUgcG9zaXRpb24gYW5kIGRhdGEgYXR0cmlidXRlcyB3aGVuIHBpY2tpbmcgdXAgZnJvbSB0aGUgYm9hcmRcbiAgICBjb25maWdQaWNrVXAoZWxlbWVudCwgaXNZKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gJzBweCc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgICAgICB0aGlzLnNldFhBdHRyaWJ1dGUoZWxlbWVudCwgMCk7XG4gICAgfVxuXG4gICAgLy8gY2xlYXJzIGFsbCBjZWxscyBvZiBwbGFjZWQgb2JqZWN0J3MgYmluZGluZ3NcbiAgICByZW1vdmVQbGFjZWQoaGVhZEluZGV4LCBsZW5ndGgsIGlzWSkge1xuICAgICAgICBsZXQgY2VsbCA9IHRoaXMuZ2V0R3JpZCgpLmNoaWxkcmVuLml0ZW0oYWRqdXN0VG9JbmRleChoZWFkSW5kZXgsIHRoaXMuU0laRSkpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3NldCcpO1xuICAgICAgICAgICAgY2VsbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtZ2V0dHJheScpO1xuICAgICAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmRyYWdQaWNrVXBTdGFydEhhbmRsZXIsIHRydWUpO1xuICAgICAgICAgICAgY29uc3QgbmV4dENlbGwgPSAoaXNZKSBcbiAgICAgICAgICAgICAgICA/IE51bWJlcihjZWxsLmRhdGFzZXQuaW5kZXgpICsgdGhpcy5TSVpFIFxuICAgICAgICAgICAgICAgIDogTnVtYmVyKGNlbGwuZGF0YXNldC5pbmRleCkgKyAxO1xuICAgICAgICAgICAgY2VsbCA9IHRoaXMuZ2V0R3JpZCgpLmNoaWxkcmVuLml0ZW0oYWRqdXN0VG9JbmRleChuZXh0Q2VsbCwgdGhpcy5TSVpFKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRYQXR0cmlidXRlKGVsZW1lbnQsIHhQb3MpIHtcbiAgICAgICAgY29uc3QgbGVmdCA9IE1hdGguZmxvb3IoeFBvcyAvIGVsZW1lbnQuZmlyc3RDaGlsZC5jbGllbnRXaWR0aCk7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWxlZnQnLCBsZWZ0KTtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcmlnaHQnLCBlbGVtZW50LmNoaWxkRWxlbWVudENvdW50IC0gbGVmdCAtIDEpO1xuICAgIH1cblxuICAgIGdldFlvZmZzZXQoZWxlbWVudCwgeFBvcykge1xuICAgICAgICBjb25zdCBvZmZzZXQgPSB4UG9zIC0gKGVsZW1lbnQuY2xpZW50V2lkdGggLyAyKVxuICAgICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSBgJHtvZmZzZXR9cHhgO1xuICAgICAgICByZXR1cm4gb2Zmc2V0O1xuICAgIH1cblxuICAgIC8vIG9uIGRyYWcgaW52ZXN0aWdhdGUgaWYgZWxlbWVudCBiZWxvdyBjdXJzb3IgaXMgYSB2YWxpZCBob3ZlciB0YXJnZXRcbiAgICAvLyBhbmQgYWRqdXN0IGRpc3BsYXllZCBob3ZlciB0YXJnZXRzXG4gICAgZHJhZ01vdmUoZSkge1xuICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcmFnZ2VkJyk7XG4gICAgICAgIGljb24uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICBsZXQgYmVsb3cgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGUuY2xpZW50WCwgZS5jbGllbnRZKTtcbiAgICAgICAgaWNvbi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICBpZiAoYmVsb3cuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RhYmxlJykgXG4gICAgICAgICAgICAmJiB0aGlzLmRyYWdFdmVudC5kcmFnT3ZlciAhPSBiZWxvdykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJIb3ZlcigpO1xuICAgICAgICAgICAgICAgIGlmIChpY29uLmNsYXNzTGlzdC5jb250YWlucygnZHJhZy15JykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRIb3ZlclkoXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWxvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb24uY2hpbGRFbGVtZW50Q291bnQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SG92ZXJYKFxuICAgICAgICAgICAgICAgICAgICAgICAgYmVsb3csIFxuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGljb24uZGF0YXNldC5sZWZ0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihpY29uLmRhdGFzZXQucmlnaHQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIWJlbG93LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0YWJsZScpKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFySG92ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZ1bmN0aW9uIHRvIGNsZWFyIGRyYWdnZWQgYWN0aW9uc1xuICAgIGRyYWdFbmQoZSkge1xuICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHZhbGlkU2V0ID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgZHJhZ0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHJhZ2dlZCcpO1xuICAgICAgICBpZiAoZHJhZ0l0ZW0uY2hpbGRFbGVtZW50Q291bnQgPT09IHRoaXMuZHJhZ0V2ZW50LmRyYWdHcm91cC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhZ0V2ZW50LmRyYWdHcm91cC5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2V0JykpIHsgdmFsaWRTZXQgPSBmYWxzZTt9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgeyB2YWxpZFNldCA9IGZhbHNlOyB9XG4gICAgICAgIGlmICh2YWxpZFNldCkge1xuICAgICAgICAgICAgdGhpcy5kcmFnRXZlbnQuZHJhZ0dyb3VwLmZvckVhY2goY2VsbCA9PiB7IFxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2V0Jyk7IFxuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLWdldHRyYXknLCBkcmFnSXRlbS5kYXRhc2V0LnRyYXkpO1xuICAgICAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5kcmFnUGlja1VwU3RhcnRIYW5kbGVyLCB0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5zZXRJdGVtLnB1c2goe1xuICAgICAgICAgICAgICAgIHRyYXk6IE51bWJlcihkcmFnSXRlbS5kYXRhc2V0LnRyYXkpLFxuICAgICAgICAgICAgICAgIGhlYWQ6IChkcmFnSXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2RyYWcteScpKSBcbiAgICAgICAgICAgICAgICAgICAgPyBOdW1iZXIodGhpcy5kcmFnRXZlbnQuZHJhZ0dyb3VwWzBdLmRhdGFzZXQuaW5kZXgpIFxuICAgICAgICAgICAgICAgICAgICA6IE51bWJlcih0aGlzLmRyYWdFdmVudC5kcmFnR3JvdXBbMF0uZGF0YXNldC5pbmRleCAtIGRyYWdJdGVtLmRhdGFzZXQubGVmdCksXG4gICAgICAgICAgICAgICAgc2V0WTogZHJhZ0l0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdkcmFnLXknKSxcbiAgICAgICAgICAgICAgICBzaXplOiBkcmFnSXRlbS5jaGlsZEVsZW1lbnRDb3VudFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXQtdHJheScpXG4gICAgICAgICAgICAuY2hpbGRyZW4uaXRlbShOdW1iZXIoZHJhZ0l0ZW0uZGF0YXNldC50cmF5KSlcbiAgICAgICAgICAgIC5maXJzdENoaWxkLmNsYXNzTGlzdFxuICAgICAgICAgICAgLnJlbW92ZSgnaWNvbi1kaXNhYmxlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5nZXRUcmF5KCkuY2hpbGRFbGVtZW50Q291bnQgPT09IHRoaXMuc2V0SXRlbS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0QnV0dG9uKCkuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0QnV0dG9uKCkuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RyYWdnZWQnKS5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5jbGVhckhvdmVyKCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRhaW5lcicpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmRyYWdFbmRIYW5kbGVyKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGFpbmVyJykucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5kcmFnTW92ZUhhbmRsZXIsIHRydWUpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250YWluZXInKS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5kcmFnRW5kSGFuZGxlciwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIGFkZGluZyBob3ZlciBldmVudFxuICAgIHNldEhvdmVyWChjZWxsLCBsZWZ0LCByaWdodCkgeyAgXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcbiAgICAgICAgdGhpcy5kcmFnRXZlbnQuZHJhZ092ZXIgPSBjZWxsOyAgICAgICAgXG4gICAgICAgIHRoaXMuZHJhZ0V2ZW50LmRyYWdHcm91cC5wdXNoKGNlbGwpO1xuICAgICAgICB0aGlzLmhvdmVyU2libGluZ3MoY2VsbCwgbGVmdCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuaG92ZXJTaWJsaW5ncyhjZWxsLCByaWdodCwgZmFsc2UpOyAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIH1cblxuICAgIHNldEhvdmVyWShyb290LCBudW1TaWIpIHtcbiAgICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkLWJveCcpO1xuICAgICAgICBsZXQgaW5kZXggPSBOdW1iZXIocm9vdC5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgbGV0IHRvQWRkID0gcm9vdDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1TaWI7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRvQWRkKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBOdW1iZXIodG9BZGQuZGF0YXNldC5pbmRleCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnRXZlbnQuZHJhZ0dyb3VwLnB1c2godG9BZGQpO1xuICAgICAgICAgICAgICAgIHRvQWRkLmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XG4gICAgICAgICAgICAgICAgdG9BZGQgPSBncmlkLmNoaWxkcmVuLml0ZW0oYWRqdXN0VG9JbmRleChpbmRleCArIHRoaXMuU0laRSwgdGhpcy5TSVpFKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGhpZ2hsaWdodCB0aGUgY29ycmVjdCBuZWlnaGJvcmluZyBzaWJsaW5ncyBvbiBob3ZlclxuICAgIGhvdmVyU2libGluZ3Mocm9vdCwgbnVtU2liLCBsZWZ0KSB7XG4gICAgICAgIGxldCB0b0FkZCA9IHJvb3Q7XG4gICAgICAgIGxldCBpbmRleCA9IE51bWJlcihyb290LmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKGluZGV4IC8gdGhpcy5TSVpFKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1TaWI7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2hlY2sgPSAobGVmdCkgPyAoKGluZGV4IC0gKGkgKyAxKSkgLyB0aGlzLlNJWkUpIDogKChpbmRleCArIChpICsgMSkpIC8gdGhpcy5TSVpFKTtcbiAgICAgICAgICAgIGlmIChyb3cgPT09IE1hdGguZmxvb3IoY2hlY2spKSB7XG4gICAgICAgICAgICAgICAgdG9BZGQgPSAobGVmdCkgPyB0b0FkZC5wcmV2aW91c1NpYmxpbmcgOiB0b0FkZC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICB0b0FkZC5jbGFzc0xpc3QuYWRkKCdob3ZlcicpOyBcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdFdmVudC5kcmFnR3JvdXAucHVzaCh0b0FkZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZXNldHMgc2V0IGhvdmVyIGFjdGlvbnNcbiAgICBjbGVhckhvdmVyKCkge1xuICAgICAgICB0aGlzLmRyYWdFdmVudC5kcmFnT3ZlciA9IG51bGw7XG4gICAgICAgIHRoaXMuZHJhZ0V2ZW50LmRyYWdHcm91cC5mb3JFYWNoKGNlbGwgPT4gY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpKTtcbiAgICAgICAgdGhpcy5kcmFnRXZlbnQuZHJhZ0dyb3VwLmxlbmd0aCA9IDA7XG4gICAgfSAgIFxufVxuIiwiLy8gYmFzaWMgdW5pdCB1c2VkIGluIGdhbWUsIG11c3QgcGFzcyBpbnRlZ2VyIHZhbHVlIHRvIGRldGVybWluZSBzaXplXG5cbmV4cG9ydCBjbGFzcyBTaGlwIHtcbiAgICAvLyB0ZXN0cyB0byBlbnN1cmUgdmFsdWUgaXMgYW4gaW50ZWdlciBudW1iZXIgb3ZlciAwXG4gICAgY29uc3RydWN0b3Ioc2l6ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHNpemUgIT0gJ251bWJlcicpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcigndmFsdWUgbXVzdCBiZSBOdW1iZXInKSB9O1xuICAgICAgICBpZiAoc2l6ZSA8PSAwKSB7IHRocm93IG5ldyBSYW5nZUVycm9yKCdWYWx1ZSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwJykgfTtcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKHNpemUpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ09ubHkgaW50ZWdlciB2YWx1ZXMnKSB9O1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICB0aGlzLmhpdHMgPSAwO1xuICAgIH1cblxuICAgIGdldEhpdHMoKSB7IHJldHVybiB0aGlzLmhpdHM7IH1cblxuICAgIC8vIGluY3JlYXNlcyBzaGlwcyBoaXQgdmFsdWVcbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMuaGl0cyArPSAxO1xuICAgIH1cblxuICAgIC8vIGRldGVybWluZXMgdGhlIHN0YXRlIG9mIHRoZSBzaGlwXG4gICAgaXNTdW5rKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oaXRzID49IHRoaXMuc2l6ZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgaW5pdGlhbGl6ZURPTSwgUGxheUJvYXJkIH0gZnJvbSBcIi4vRE9NQ29udHJvbC5qc1wiO1xuaW1wb3J0IHsgU2V0UGxheWVyIH0gZnJvbSBcIi4vU2V0UGxheWVyLmpzXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL1BsYXllci5qcyc7XG5cbmV4cG9ydCBjbGFzcyBHYW1lQ29udHJvbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuU0laRSA9IDEwO1xuICAgICAgICB0aGlzLnBsYXllcjEgPSB7IHBsYXllcjogbnVsbCwgYm9hcmQ6IG51bGwgfTtcbiAgICAgICAgdGhpcy5wbGF5ZXIyID0geyBwbGF5ZXI6IG51bGwsIGJvYXJkOiBudWxsIH07XG4gICAgICAgIHRoaXMubXVsdGlwbGF5ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZWxlY3RNb3ZlID0gbnVsbDtcbiAgICAgICAgdGhpcy50dXJuTnVtYmVyID0gMDtcbiAgICB9XG5cbiAgICAvLyBiZWdpbiB0aGUgZ2FtZWxvb3BcbiAgICBzdGFydEdhbWUoKSB7XG4gICAgICAgIGluaXRpYWxpemVET00odGhpcy5TSVpFKTtcbiAgICAgICAgdGhpcy5jcmVhdGVQbGF5ZXIoKTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGVzIGZpcnN0IHBsYXllciwgZGV0ZXJtaW5lcyBpZiBzZWNvbmQgcGxheWVyIGlzIHBsYXllciBvciBDUFVcbiAgICBjcmVhdGVQbGF5ZXIoaXNNdWx0aSkge1xuICAgICAgICBjb25zdCBzZXRQbGF5ZXIgPSBuZXcgU2V0UGxheWVyKDEwLCBbNSwgNCwgMywgMywgMl0sIGlzTXVsdGkpO1xuICAgICAgICBzZXRQbGF5ZXIuZ2V0QnV0dG9uKCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHNldFBsYXllci5nZXREYXRhKCk7XG4gICAgICAgICAgICBzZXRQbGF5ZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICAvLyBzZXQgc2Vjb25kIHBsYXllclxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyMS5wbGF5ZXIpIHsgXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIyLnBsYXllciA9IG5ldyBQbGF5ZXIoJ3BsYXllcjInLCBkYXRhLmJvYXJkKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcjIuYm9hcmQgPSBuZXcgUGxheUJvYXJkKHRoaXMuU0laRSwgdGhpcy5wbGF5ZXIyLnBsYXllci5nZXRBbGxTaGlwSW5kZXgoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kQm9hcmQodGhpcy5wbGF5ZXIyKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckJvYXJkKClcbiAgICAgICAgICAgICAgICAgICAgLmNyZWF0ZVR1cm5Db3Zlcih0aGlzLmdldFBsYXllcigpLmdldE5hbWUoKSlcbiAgICAgICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRoaXMuZ2V0UGxheWVyQm9hcmQoKS5jbGVhclR1cm5Db3ZlcigpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckJvYXJkKCkuZGlzcGxheUJvYXJkKCk7XG4gICAgICAgICAgICAvLyBzZXQgZmlyc3QgcGxheWVyIGFuZCBwcm9tcHQgZm9yIHNlY29uZFxuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLm11bHRpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIxLnBsYXllciA9IG5ldyBQbGF5ZXIoJ3BsYXllcjEnLCBkYXRhLmJvYXJkKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcjEuYm9hcmQgPSBuZXcgUGxheUJvYXJkKHRoaXMuU0laRSwgdGhpcy5wbGF5ZXIxLnBsYXllci5nZXRBbGxTaGlwSW5kZXgoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kQm9hcmQodGhpcy5wbGF5ZXIxKTtcbiAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVBsYXllcih0cnVlKTtcbiAgICAgICAgICAgIC8vIHNldCBzaW5nbGUgcGxheWVyIGFuZCBzZXQgY3B1IHBsYXllclxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcjEucGxheWVyID0gbmV3IFBsYXllcigncGxheWVyMScsIGRhdGEuYm9hcmQpO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyMS5ib2FyZCA9IG5ldyBQbGF5Qm9hcmQodGhpcy5TSVpFLCB0aGlzLnBsYXllcjEucGxheWVyLmdldEFsbFNoaXBJbmRleCgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRCb2FyZCh0aGlzLnBsYXllcjEpO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyMi5wbGF5ZXIgPSBuZXcgUGxheWVyKCdwbGF5ZXIyJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIyLmJvYXJkID0gbmV3IFBsYXlCb2FyZCh0aGlzLlNJWkUsIHRoaXMucGxheWVyMi5wbGF5ZXIuZ2V0QWxsU2hpcEluZGV4KCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuYmluZEJvYXJkKHRoaXMucGxheWVyMik7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJCb2FyZCgpLmRpc3BsYXlCb2FyZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc2V0UGxheWVyLmRpc3BsYXkoKTtcbiAgICB9XG5cbiAgICAvLyBEZXRlcm1pbmUgdGhlIGFjdGl2ZSBwbGF5ZXJcbiAgICBnZXRQbGF5ZXIoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy50dXJuTnVtYmVyICUgMiA9PT0gMCkgPyB0aGlzLnBsYXllcjEucGxheWVyIDogdGhpcy5wbGF5ZXIyLnBsYXllcjsgXG4gICAgfVxuXG4gICAgZ2V0UGxheWVyQm9hcmQoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy50dXJuTnVtYmVyICUgMiA9PT0gMCkgPyB0aGlzLnBsYXllcjEuYm9hcmQgOiB0aGlzLnBsYXllcjIuYm9hcmQ7IFxuICAgIH1cblxuICAgIC8vIERldGVybWluZSB0aGUgY3VycmVudCBub24gcGxheWVyXG4gICAgZ2V0QWR2ZXJzYXJ5KCkge1xuICAgICAgICByZXR1cm4gKHRoaXMudHVybk51bWJlciAlIDIgPT09IDApID8gdGhpcy5wbGF5ZXIyLnBsYXllciA6IHRoaXMucGxheWVyMS5wbGF5ZXI7XG4gICAgfVxuXG4gICAgZ2V0QWR2ZXJzYXJ5Qm9hcmQoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy50dXJuTnVtYmVyICUgMiA9PT0gMCkgPyB0aGlzLnBsYXllcjIuYm9hcmQgOiB0aGlzLnBsYXllcjEuYm9hcmQ7XG4gICAgfVxuXG4gICAgLy8gYmluZGluZ3MgZm9yIHBsYXkgYXJlYVxuICAgIGJpbmRCb2FyZChwbGF5ZXIpIHtcbiAgICAgICAgY29uc3QgZGlzcGxheSA9IHBsYXllci5ib2FyZDtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZGlzcGxheS5nZXRCdXR0b24oKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGJpbmQgY2xpY2thYmxlIGNlbGxzXG4gICAgICAgIGRpc3BsYXkuZ2V0UGxheSgpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuLWNlbGwnKSkgeyByZXR1cm4gfTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdE1vdmUpIHsgZGlzcGxheS50b2dnbGVTZWxlY3RlZCh0aGlzLnNlbGVjdE1vdmUpOyB9XG4gICAgICAgICAgICBkaXNwbGF5LnRvZ2dsZVNlbGVjdGVkKGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RNb3ZlID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICAgICAgZGlzcGxheS5zZXRCdXR0b24oZS50YXJnZXQuZGF0YXNldC5pbmRleCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGJpbmQgYXR0YWNrIGJ1dHRvblxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZGlzcGxheS5zZXRCdXR0b24oKTtcbiAgICAgICAgICAgIHRoaXMudGFrZVR1cm4oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gRnVuY3Rpb24gZm9yIGFjdGlvbiBidXR0b24sIHRha2VzIGEgcGxheWVyIHNlbGVjdGVkIHR1cm5cbiAgICB0YWtlVHVybigpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5nZXRBZHZlcnNhcnkoKS50YWtlSGl0KHRoaXMuc2VsZWN0TW92ZSk7XG4gICAgICAgIHRoaXMuZ2V0UGxheWVyQm9hcmQoKS51cGRhdGVQbGF5KHRoaXMuc2VsZWN0TW92ZSwgcmVzdWx0KTtcbiAgICAgICAgaWYgKHRoaXMuZ2V0QWR2ZXJzYXJ5KCkuaXNEZWZlYXRlZCgpKSB7IFxuICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJCb2FyZCgpXG4gICAgICAgICAgICAgICAgLmNyZWF0ZUdhbWVPdmVyKCdZT1UgV0lOIScpXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJCb2FyZCgpLnJlbW92ZUJvYXJkKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRHYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XG4gICAgICAgICAgICB9KTsgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5tdWx0aXBsYXllcikgeyB0aGlzLnN3aXRjaFR1cm4ocmVzdWx0KTsgfVxuICAgICAgICBlbHNlIHsgdGhpcy5jcHVUdXJuKCk7IH1cbiAgICB9XG5cbiAgICAvLyBSZW5kZXJzIG1vdmUgdGFrZW4gb24gcGxheWVyIGFuZCByZXNldCBzZWxlY3RNb3ZlXG4gICAgc3RhcnRUdXJuKHJlc3VsdCkge1xuICAgICAgICB0aGlzLmdldFBsYXllckJvYXJkKCkudXBkYXRlU3RhdHVzKHRoaXMuc2VsZWN0TW92ZSwgcmVzdWx0KTtcbiAgICAgICAgdGhpcy5zZWxlY3RNb3ZlID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBQcmVwYXJlcyB0aGUgcGxheSBhcmVhIHRvIGV4Y2hhbmdlIHBsYXllcnNcbiAgICBzd2l0Y2hUdXJuKHJlc3VsdCkge1xuICAgICAgICBjb25zdCBib2FyZCA9IHRoaXMuZ2V0QWR2ZXJzYXJ5Qm9hcmQoKTtcbiAgICAgICAgYm9hcmQuY3JlYXRlVHVybkNvdmVyKHRoaXMuZ2V0QWR2ZXJzYXJ5KClcbiAgICAgICAgICAgIC5nZXROYW1lKCkpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGJvYXJkLmNsZWFyVHVybkNvdmVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFR1cm4ocmVzdWx0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBib2FyZC5kaXNwbGF5Qm9hcmQoKTtcbiAgICAgICAgdGhpcy5nZXRBZHZlcnNhcnlCb2FyZCgpLnJlbW92ZUJvYXJkKCk7XG4gICAgICAgIHRoaXMudHVybk51bWJlcisrO1xuICAgIH1cblxuICAgIC8vIFNpbXVsYXRlIGFuIGFkdmVyc2FyeSdzIHR1cm5cbiAgICBjcHVUdXJuKCkge1xuICAgICAgICBjb25zdCBjcHUgPSB0aGlzLmdldFBsYXllcigpLmNwdVR1cm4oKVxuICAgICAgICB0aGlzLnNlbGVjdE1vdmUgPSBjcHUubW92ZTtcbiAgICAgICAgaWYgKHRoaXMuZ2V0UGxheWVyKCkuaXNEZWZlYXRlZCgpKSB7IFxuICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXIoKS5nZXREaXNwbGF5KCkuY3JlYXRlR2FtZU92ZXIoJ1lPVSBMT1NFIScpOyBcbiAgICAgICAgfSBlbHNlIHsgdGhpcy5zdGFydFR1cm4oY3B1LnJlc3VsdCk7IH1cbiAgICB9XG5cbiAgICAvLyBjbGVhciBhbGwgdmFyaWFibGUgdG8gZGVmYXVsdFxuICAgIHJlc2V0R2FtZSgpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyMSA9IHsgcGxheWVyOiBudWxsLCBib2FyZDogbnVsbCB9O1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIyID0geyBwbGF5ZXI6IG51bGwsIGJvYXJkOiBudWxsIH07XG4gICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdE1vdmUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy50dXJuTnVtYmVyID0gMDtcbiAgICB9XG59XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtHYW1lQ29udHJvbH0gZnJvbSAnLi9nYW1lQ29udHJvbC5qcyc7XG5cbmNvbnN0IGdhbWUgPSBuZXcgR2FtZUNvbnRyb2woKTtcbmdhbWUuc3RhcnRHYW1lKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=