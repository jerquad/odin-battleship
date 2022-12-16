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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --main-bg: rgb(167, 171, 175);\n    --bg-grid: black;\n    --bg-cell: rgb(172, 239, 241);\n    --font-guide-lg: 1.5rem;\n    --font-guide-sm: .7rem;\n    --gap-lg: 3px;\n    --gap-sm: 2px;\n    --button-fg-disable: grey;\n    --button-fg-normal: black;\n    --button-bg-disable: darkgrey;\n    --button-bg-normal: white;\n    --button-font-size: 2rem;\n    --board-hit: darkred;\n    --board-hover: aqua;\n    --board-miss: grey;\n    --board-selected: yellow;\n    --board-ship: green;\n    --side-size: 10;\n    --check-outter: rgb(215, 244, 252);\n    --check-inner: rgb(252, 210, 132);\n    --head-bg: rgb(235, 230, 230);\n    --toggle: rgb(255, 187, 0);\n}\n\nhtml,\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n    margin: 0;\n    height: 100%;\n    /* min-height: 100vh; */\n    width: 100vw;\n}\n\nbutton {\n    background-color: var(--button-bg-normal);\n    color: var(--button-fg-normal);\n    border: 5px solid var(--button-fg-normal);\n    font-size: var(--button-font-size);\n    width: 100%;\n}\n\nbutton:disabled {\n    background-color: var(--button-bg-disable);\n    color: var(--button-fg-disable);\n    border-color: var(--button-fg-disable);\n}\n\n#main-container {\n    background-color: var(--main-bg);\n    height: 100%;\n    width: 100%;\n    box-sizing: border-box;\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    margin: 0;\n}\n\n#header,\n#footer {\n    max-height: 100px;\n    background-color: var(--head-bg);\n    display: flex;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n}\n\n#header {\n    align-self: flex-start;\n    min-height: min-content;\n    grid-row: 1 / 2;\n    padding: 0 2rem;\n}\n\n#header > h1 {\n    font-family: 'Bungee Shade', sans-serif;\n    color: rgb(179, 116, 0);\n    font-size: 3rem;\n    margin: 0;\n}\n\n#footer {\n    align-self: flex-end;\n    color:rgb(148, 147, 147);\n    justify-content: center;\n    grid-row: 3/ 4;\n}\n\n/* styling for all grid displays */\n.grid-box {\n    font-size: var(--font-guide-lg);\n    aspect-ratio: 1 / 1;\n    background-color: var(--bg-grid);\n    display: grid;\n    grid-template-columns: repeat(var(--side-size), 1fr);\n    gap: var(--gap-lg);\n}\n\n.grid-box > div {\n    padding: 0;\n    position: relative;\n    user-select: none;\n    background-color: var(--bg-cell);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#set-container > .grid-box > div{\n    width: 2rem;\n    height: 2rem;\n}\n\n.guide-top,\n.guide-corner {\n    margin-bottom: calc(var(--gap-lg) * .66);\n}\n\n.guide-left,\n.guide-corner {\n    margin-right: calc(var(--gap-lg) * .66);\n}\n\n.guide-corner {\n    background-color: var(--bg-grid) !important;\n}\n\n/* Styling for all grid icons */\n.ship {\n    background-color: var(--board-ship) !important;\n}\n\n.miss {\n    background-color: var(--board-miss) !important;\n}\n\n.hit {\n    background-color: var(--board-hit) !important;\n}\n\n.selected {\n    background-color: var(--board-selected) !important;\n}\n\n.hover {\n    background-color: yellow !important;\n}\n\n.set {\n    background-color: green !important;\n}\n\n.set.hover {\n    background-color: darkgrey !important;\n}\n\n/* Styling for notifications */\n.gameover-container,\n.turn-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n}\n\n.gameover-container {\n    background-color: transparent;\n}\n\n.turn-container {\n    background-color: white;\n}\n\n.gameover-content,\n.turn-content {\n    text-align: center;\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    padding: 2rem;\n}\n\n/* Styling for set display */\n#set-container {\n    /* height: 100%; */\n    justify-self: center;\n    grid-row: 2 / 3;\n    width: min-content;\n    display: flex;\n    flex-direction: column;\n    flex: 0 1 100%;\n    gap: .5rem;\n    margin: .5rem 0;\n}\n\n.set-tray {\n    background-color: lightgrey;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n\n}\n\n.tray-item {\n    position: relative;\n    display: grid;\n    justify-content:left;\n    align-items: center;\n    padding: 1rem;\n}\n\n.icon-piece {\n    position: relative;\n    grid-column: 1 / -1;\n    grid-row: 1 / -1;\n    border: var(--gap-sm) solid black;\n    background-color: black;\n    display: flex;\n    gap: var(--gap-sm);\n}\n\n.icon-piece.icon-disable>div:not(#dragged) {\n    background-color: grey !important;\n}\n\n.icon-cell {\n    background-color: var(--bg-cell);\n    aspect-ratio: 1 / 1;\n}\n\n.drag-cell {\n    opacity: 0.5;\n    background-color: grey;\n}\n\n#dragged {\n    z-index: 9;\n    opacity: 0.5;\n    position: absolute !important;\n}\n\n.drag-y {\n    flex-direction: column;\n}\n\n.toggle-rotate {\n    transform: rotate(90deg);\n}\n\n#toggle-bar {\n    width: min-content;\n    display: flex;\n    width: 100%;\n    gap: 1rem;\n}\n\n#toggle-container {\n    position: relative;\n}\n\n#toggle-text {\n    font-size: 2rem;\n    user-select: none;\n    position: absolute;\n    left: 50%;\n    top:  50%;\n    transform: translate(-50%, -50%);\n}\n\n\n#toggle-body {\n    position: relative;\n    height: 80px;\n    width: 80px;\n    background-color: var(--toggle);\n    /* border: 3px solid black; */\n    border-radius: 40px;\n}\n\n#toggle-body:after {\n    position: absolute;\n    height: 0;\n    width: 0;\n    top: 20px;\n    left: 70px;\n    content: '';\n    border: 20px solid transparent;\n    border-left-color: var(--toggle);\n}\n\n#inst-container {\n    width: 100%;\n    background-color: var(--head-bg);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 5px solid var(--button-fg-disable);\n}\n\n#inst-ul {\n    padding: 0;\n    margin: 0;\n    user-select: none;\n    font-family: 'Concert One', cursive;\n    color: var(--button-fg-disable);\n    /* list-style: none; */\n}\n\n/* #toggle-body:before {\n    position: absolute;\n    height: 0;\n    width: 0;\n    top: 24px;\n    left: 81px;\n    content: '';\n    border: 16px solid transparent;\n    border-left-color: black;\n} */\n\n#submit-bar {\n    display: flex;\n}\n\n#submit-bar button {\n    height: 100%;\n}\n\n#submit-bc {\n    width: 100%;\n}\n\n#submit-mc {\n    background-color: var(--check-inner);\n    font-family: 'Anton', sans-serif;\n    width: min-content;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    border: 5px solid black;\n}\n\n#submit-mc-2,\n#submit-mc-m {\n    font-size: 1.25rem;\n    background-color: var(--check-outter);\n}\n\n#submit-mc-2 {\n    display: flex;\n    flex-direction: column;\n    padding: 3px 5px;\n    display: flex;\n    align-items: center;\n    grid-column: 1 / 2;\n    grid-row: 1 / 3;\n    line-height: 1.2;\n}\n\n#submit-mc-m {\n    padding: 5px;\n    line-height: 1;\n    grid-column: 2 / 3;\n    grid-row: 1 /2;\n}\n\n\n#submit-chk {\n    margin: 1rem;\n    height: 1.25rem;\n    width: 1.25rem;\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n}\n\n\n\n/* Styling for play displays */\n.play-container {\n    grid-row: 2 / 3;\n    margin: 0 .5rem;\n    width: 100%;\n    height: min-content;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr;\n    position: relative;\n    gap: 1rem;\n}\n\n.play-status {\n    grid-row: 1 / 2;\n    font-size: var(--font-guide-sm);\n    aspect-ratio: 1 / 1;\n    width: 50%;\n    gap: var(--gap-sm);\n}\n\n.play-status .guide-left {\n    margin-right: calc(var(--gap-sm) * .66);\n}\n\n.play-status .guide-top {\n    margin-bottom: calc(var(--gap-sm) * .66);\n}\n\n.play-area {\n    font-size: var(--font-guide-lg);\n    aspect-ratio: 1 / 1;\n    width: 100%;\n    gap: var(--gap-lg);\n}\n\n.play-area > .open-cell:hover {\n    background-color: var(--board-hover) !important;\n}\n\n.play-button {\n    width: 100%;\n}\n\n@media (min-width: 1050px) {\n    #set-container {\n        display: grid;\n        grid-column: 1fr 1fr;\n        align-items: center;\n    }\n\n    #set-container > .grid-box {\n        grid-column: 1 / 2;\n        grid-row: 1 / 4;\n    }\n\n    .set-tray {\n        grid-row: 2 / 3;\n        grid-column: 2 / 3;\n    }\n\n    #toggle-bar {\n        height: min-content;\n        grid-row: 1 / 2;\n        grid-column: 2 / 3;\n    }\n\n    #set-container > .grid-box > div {\n        width: 3rem;\n        height: 3rem;\n    }\n\n    #toggle-container {\n        display: flex;\n        align-items: center;\n    }\n\n    #inst-container { \n        padding: 1rem;\n    }\n\n    #submit-bar {\n        max-height: 100px;\n        grid-row: 3 / 4;\n        grid-column: 2 / 3;\n    }\n\n}\n\n/* Styling for wide views of play display  */\n@media (min-width: 570px) {\n    .play-container {\n        justify-self: center;\n        max-width: 1000px;\n        display: grid;\n        grid-template-columns: 2fr 1fr;\n        grid-template-rows: 1fr;\n    }\n\n    .play-area {\n        grid-row: 1 / 3;\n        grid-column: 1 / 2;\n    }\n\n    .play-status {\n        grid-row: 1 / 2;\n        grid-column: 2 / 3;\n        width: 100%;\n    }\n\n    .play-button {\n        grid-row: 3 / 4;\n        grid-column: 1 / 2;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Anton&family=Bungee+Shade&family=Concert+One&display=swap');\n:root {\n    --main-bg: rgb(167, 171, 175);\n    --bg-grid: black;\n    --bg-cell: rgb(172, 239, 241);\n    --font-guide-lg: 1.5rem;\n    --font-guide-sm: .7rem;\n    --gap-lg: 3px;\n    --gap-sm: 2px;\n    --button-fg-disable: grey;\n    --button-fg-normal: black;\n    --button-bg-disable: darkgrey;\n    --button-bg-normal: white;\n    --button-font-size: 2rem;\n    --board-hit: darkred;\n    --board-hover: aqua;\n    --board-miss: grey;\n    --board-selected: yellow;\n    --board-ship: green;\n    --side-size: 10;\n    --check-outter: rgb(215, 244, 252);\n    --check-inner: rgb(252, 210, 132);\n    --head-bg: rgb(235, 230, 230);\n    --toggle: rgb(255, 187, 0);\n}\n\nhtml,\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n    margin: 0;\n    height: 100%;\n    /* min-height: 100vh; */\n    width: 100vw;\n}\n\nbutton {\n    background-color: var(--button-bg-normal);\n    color: var(--button-fg-normal);\n    border: 5px solid var(--button-fg-normal);\n    font-size: var(--button-font-size);\n    width: 100%;\n}\n\nbutton:disabled {\n    background-color: var(--button-bg-disable);\n    color: var(--button-fg-disable);\n    border-color: var(--button-fg-disable);\n}\n\n#main-container {\n    background-color: var(--main-bg);\n    height: 100%;\n    width: 100%;\n    box-sizing: border-box;\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    margin: 0;\n}\n\n#header,\n#footer {\n    max-height: 100px;\n    background-color: var(--head-bg);\n    display: flex;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n}\n\n#header {\n    align-self: flex-start;\n    min-height: min-content;\n    grid-row: 1 / 2;\n    padding: 0 2rem;\n}\n\n#header > h1 {\n    font-family: 'Bungee Shade', sans-serif;\n    color: rgb(179, 116, 0);\n    font-size: 3rem;\n    margin: 0;\n}\n\n#footer {\n    align-self: flex-end;\n    color:rgb(148, 147, 147);\n    justify-content: center;\n    grid-row: 3/ 4;\n}\n\n/* styling for all grid displays */\n.grid-box {\n    font-size: var(--font-guide-lg);\n    aspect-ratio: 1 / 1;\n    background-color: var(--bg-grid);\n    display: grid;\n    grid-template-columns: repeat(var(--side-size), 1fr);\n    gap: var(--gap-lg);\n}\n\n.grid-box > div {\n    padding: 0;\n    position: relative;\n    user-select: none;\n    background-color: var(--bg-cell);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#set-container > .grid-box > div{\n    width: 2rem;\n    height: 2rem;\n}\n\n.guide-top,\n.guide-corner {\n    margin-bottom: calc(var(--gap-lg) * .66);\n}\n\n.guide-left,\n.guide-corner {\n    margin-right: calc(var(--gap-lg) * .66);\n}\n\n.guide-corner {\n    background-color: var(--bg-grid) !important;\n}\n\n/* Styling for all grid icons */\n.ship {\n    background-color: var(--board-ship) !important;\n}\n\n.miss {\n    background-color: var(--board-miss) !important;\n}\n\n.hit {\n    background-color: var(--board-hit) !important;\n}\n\n.selected {\n    background-color: var(--board-selected) !important;\n}\n\n.hover {\n    background-color: yellow !important;\n}\n\n.set {\n    background-color: green !important;\n}\n\n.set.hover {\n    background-color: darkgrey !important;\n}\n\n/* Styling for notifications */\n.gameover-container,\n.turn-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n}\n\n.gameover-container {\n    background-color: transparent;\n}\n\n.turn-container {\n    background-color: white;\n}\n\n.gameover-content,\n.turn-content {\n    text-align: center;\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    padding: 2rem;\n}\n\n/* Styling for set display */\n#set-container {\n    /* height: 100%; */\n    justify-self: center;\n    grid-row: 2 / 3;\n    width: min-content;\n    display: flex;\n    flex-direction: column;\n    flex: 0 1 100%;\n    gap: .5rem;\n    margin: .5rem 0;\n}\n\n.set-tray {\n    background-color: lightgrey;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n\n}\n\n.tray-item {\n    position: relative;\n    display: grid;\n    justify-content:left;\n    align-items: center;\n    padding: 1rem;\n}\n\n.icon-piece {\n    position: relative;\n    grid-column: 1 / -1;\n    grid-row: 1 / -1;\n    border: var(--gap-sm) solid black;\n    background-color: black;\n    display: flex;\n    gap: var(--gap-sm);\n}\n\n.icon-piece.icon-disable>div:not(#dragged) {\n    background-color: grey !important;\n}\n\n.icon-cell {\n    background-color: var(--bg-cell);\n    aspect-ratio: 1 / 1;\n}\n\n.drag-cell {\n    opacity: 0.5;\n    background-color: grey;\n}\n\n#dragged {\n    z-index: 9;\n    opacity: 0.5;\n    position: absolute !important;\n}\n\n.drag-y {\n    flex-direction: column;\n}\n\n.toggle-rotate {\n    transform: rotate(90deg);\n}\n\n#toggle-bar {\n    width: min-content;\n    display: flex;\n    width: 100%;\n    gap: 1rem;\n}\n\n#toggle-container {\n    position: relative;\n}\n\n#toggle-text {\n    font-size: 2rem;\n    user-select: none;\n    position: absolute;\n    left: 50%;\n    top:  50%;\n    transform: translate(-50%, -50%);\n}\n\n\n#toggle-body {\n    position: relative;\n    height: 80px;\n    width: 80px;\n    background-color: var(--toggle);\n    /* border: 3px solid black; */\n    border-radius: 40px;\n}\n\n#toggle-body:after {\n    position: absolute;\n    height: 0;\n    width: 0;\n    top: 20px;\n    left: 70px;\n    content: '';\n    border: 20px solid transparent;\n    border-left-color: var(--toggle);\n}\n\n#inst-container {\n    width: 100%;\n    background-color: var(--head-bg);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 5px solid var(--button-fg-disable);\n}\n\n#inst-ul {\n    padding: 0;\n    margin: 0;\n    user-select: none;\n    font-family: 'Concert One', cursive;\n    color: var(--button-fg-disable);\n    /* list-style: none; */\n}\n\n/* #toggle-body:before {\n    position: absolute;\n    height: 0;\n    width: 0;\n    top: 24px;\n    left: 81px;\n    content: '';\n    border: 16px solid transparent;\n    border-left-color: black;\n} */\n\n#submit-bar {\n    display: flex;\n}\n\n#submit-bar button {\n    height: 100%;\n}\n\n#submit-bc {\n    width: 100%;\n}\n\n#submit-mc {\n    background-color: var(--check-inner);\n    font-family: 'Anton', sans-serif;\n    width: min-content;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    border: 5px solid black;\n}\n\n#submit-mc-2,\n#submit-mc-m {\n    font-size: 1.25rem;\n    background-color: var(--check-outter);\n}\n\n#submit-mc-2 {\n    display: flex;\n    flex-direction: column;\n    padding: 3px 5px;\n    display: flex;\n    align-items: center;\n    grid-column: 1 / 2;\n    grid-row: 1 / 3;\n    line-height: 1.2;\n}\n\n#submit-mc-m {\n    padding: 5px;\n    line-height: 1;\n    grid-column: 2 / 3;\n    grid-row: 1 /2;\n}\n\n\n#submit-chk {\n    margin: 1rem;\n    height: 1.25rem;\n    width: 1.25rem;\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n}\n\n\n\n/* Styling for play displays */\n.play-container {\n    grid-row: 2 / 3;\n    margin: 0 .5rem;\n    width: 100%;\n    height: min-content;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr;\n    position: relative;\n    gap: 1rem;\n}\n\n.play-status {\n    grid-row: 1 / 2;\n    font-size: var(--font-guide-sm);\n    aspect-ratio: 1 / 1;\n    width: 50%;\n    gap: var(--gap-sm);\n}\n\n.play-status .guide-left {\n    margin-right: calc(var(--gap-sm) * .66);\n}\n\n.play-status .guide-top {\n    margin-bottom: calc(var(--gap-sm) * .66);\n}\n\n.play-area {\n    font-size: var(--font-guide-lg);\n    aspect-ratio: 1 / 1;\n    width: 100%;\n    gap: var(--gap-lg);\n}\n\n.play-area > .open-cell:hover {\n    background-color: var(--board-hover) !important;\n}\n\n.play-button {\n    width: 100%;\n}\n\n@media (min-width: 1050px) {\n    #set-container {\n        display: grid;\n        grid-column: 1fr 1fr;\n        align-items: center;\n    }\n\n    #set-container > .grid-box {\n        grid-column: 1 / 2;\n        grid-row: 1 / 4;\n    }\n\n    .set-tray {\n        grid-row: 2 / 3;\n        grid-column: 2 / 3;\n    }\n\n    #toggle-bar {\n        height: min-content;\n        grid-row: 1 / 2;\n        grid-column: 2 / 3;\n    }\n\n    #set-container > .grid-box > div {\n        width: 3rem;\n        height: 3rem;\n    }\n\n    #toggle-container {\n        display: flex;\n        align-items: center;\n    }\n\n    #inst-container { \n        padding: 1rem;\n    }\n\n    #submit-bar {\n        max-height: 100px;\n        grid-row: 3 / 4;\n        grid-column: 2 / 3;\n    }\n\n}\n\n/* Styling for wide views of play display  */\n@media (min-width: 570px) {\n    .play-container {\n        justify-self: center;\n        max-width: 1000px;\n        display: grid;\n        grid-template-columns: 2fr 1fr;\n        grid-template-rows: 1fr;\n    }\n\n    .play-area {\n        grid-row: 1 / 3;\n        grid-column: 1 / 2;\n    }\n\n    .play-status {\n        grid-row: 1 / 2;\n        grid-column: 2 / 3;\n        width: 100%;\n    }\n\n    .play-button {\n        grid-row: 3 / 4;\n        grid-column: 1 / 2;\n    }\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _SetPlayer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SetPlayer.js */ "./src/SetPlayer.js");



function initializeDOM() {
    document.querySelector('body').setAttribute('ondragstart', 'return false;');
    document.querySelector('body').setAttribute('ondrop', 'return false');
    const container = (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', { id: 'main-container' });

    container.appendChild((0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', { id: 'header' }));
    container.querySelector('#header').appendChild((0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('h1', {}, 'BATTLESHIP'));
    container.appendChild((0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', { id: 'footer' }));
    container.querySelector('#footer').appendChild((0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('p', {}, '&copy; 2022 Jimmy Quadros'));

    document.body.appendChild(container);
    // const setPlayer = new SetPlayer(10, [5, 4, 3, 3, 2]);
    // setPlayer.display();
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

    // Find a better home for this
    document.querySelector(':root').style.setProperty('--side-size', sideSize + 1);
    
    return gridBox;
}

// setPlayer DOM builders

// container for icons indexes the icons on order added
function buildSetPlayer(size, pieces) {
    const container = makeElement('div', { id: 'set-container' });
    container.appendChild(buildGrid(size));
    container.appendChild(buildToggleBar());
    container.appendChild(makeTray(pieces));
    container.appendChild(buildSubmitBar());
    return container;
}

function buildSubmitBar() {
    const container = makeElement('div', { id: 'submit-bar' });
    const buttonContainer = makeElement('div', { id: 'submit-bc' });
    buttonContainer.appendChild(makeElement('button', { id: 'submit-btn', disabled: 'true' }, 'CONTINUE'));
    container.appendChild(buttonContainer);
    container.appendChild(buildSetMulti());
    return container;
}

function buildSetMulti() {
    const container = makeElement('div', { id: 'submit-mc' });
    const two = makeElement('div', { id: 'submit-mc-2' });
    two.appendChild(makeElement('div', {}, 'T'));
    two.appendChild(makeElement('div', {}, 'W'));
    two.appendChild(makeElement('div', {}, 'O'));
    container.appendChild(two);
    container.appendChild(makeElement('div', { id: 'submit-mc-m' }, 'PLAY'));
    container.appendChild(makeElement('input', { type: 'checkbox', id: 'submit-chk' }))
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
    // icon.addEventListener('mousedown', (e) => this.dragStart(e));
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
let element;
let xOff;
let yOff;
const moveHandler = move.bind(undefined);
const endHandler = end.bind(undefined);


function DragElement(e, x, y) {
    element = e;
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
            if (this.board[toPlace[i]].ship) return false;
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
/* harmony import */ var _DOMControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMControl */ "./src/DOMControl.js");


// holds player's gameboard, can determine next move if cpu 
// pass an array of arrays in [ship size, ship index, is vertical(true/false)] format
// to populate the gameboard
class Player {
    constructor(name, toAdd = []) {
        this.SIZE = 10;
        this.name = name;
        this.board = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard(this.SIZE);
        this.nextMove = [];
        toAdd.forEach(ship => this.board.addShip(ship[0], ship[1], ship[2]) );
        this.display = new _DOMControl__WEBPACK_IMPORTED_MODULE_1__.PlayBoard(this.SIZE, this.getAllShipIndex());
    };

    getName() {
        return this.name;
    }

    getDisplay() {
        return this.display;
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
        // const result = this.takeHit(move);
        return move;
    }

    // elect a valid free space to attack from the gameboard
    randomMove() {
        const move = Math.floor(Math.random() * Math.pow(this.SIZE, 2));
        return (this.isValidMove(move)) ? move : this.randomMove();
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
    constructor(size, pieces) {
        this.SIZE = size;
        this.container = (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.buildSetPlayer)(size, pieces);
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
        this.player1 = null;
        this.player2 = null;
        this.multiplayer = false;
        this.selectMove = null;
        this.turnNumber = 0;
    }

    // begin the gameloop
    startGame() {
        (0,_DOMControl_js__WEBPACK_IMPORTED_MODULE_0__.initializeDOM)();
        this.createPlayer();
        
        // initializeDOM();

        // this.dummySetPlayer();
        // const board = this.getPlayer().getDisplay();
        // if (this.multiplayer) {
        //     board.createTurnCover(this.getPlayer()
        //         .getName())
        //         .addEventListener('click', (e) => board.clearTurnCover());
        // };
        // board.displayBoard();
    }

    createPlayer() {
        const setPlayer = new _SetPlayer_js__WEBPACK_IMPORTED_MODULE_1__.SetPlayer(10, [5, 4, 3, 3, 2]);
        setPlayer.getButton().addEventListener('click', (e) => {
            const data = setPlayer.getData();
            setPlayer.remove();
            if (this.player1) { 
                this.player2 = new _Player_js__WEBPACK_IMPORTED_MODULE_2__.Player('player2', data.board);
                const board = this.getPlayer().getDisplay();
                board.createTurnCover(this.getPlayer()
                .getName())
                .addEventListener('click', (e) => board.clearTurnCover());
                board.displayBoard();
            } else if (data.multi) {
                this.player1 = new _Player_js__WEBPACK_IMPORTED_MODULE_2__.Player('player1', data.board);
                this.bindBoard(this.player1);
                this.multiplayer = true;
                this.createPlayer();
            } else {
                this.player1 = new _Player_js__WEBPACK_IMPORTED_MODULE_2__.Player('player1', data.board);
                this.bindBoard(this.player1);
                this.dummySetPlayer();
                this.getPlayer().getDisplay().displayBoard();
            }
        });
        setPlayer.display();
    }

    // testing values
    dummySetPlayer() {
        const dummy1 = [
            [5, 25, true],
            [4, 83, false],
            [3, 0, false],
            [3, 51, true],
            [2, 48, false]
        ];
        const dummy2 = [
            [5, 95, false],
            [4, 16, false],
            [3, 53, false],
            [3, 68, true],
            [2, 12, true]
        ]
        // this.player1 = new Player('player1', dummy1);
        // this.bindBoard(this.player1);
        this.player2 = new _Player_js__WEBPACK_IMPORTED_MODULE_2__.Player('player2', dummy2);
        this.bindBoard(this.player2)
    }

    // Determine the active player
    getPlayer() {
        return (this.turnNumber % 2 === 0) ? this.player1 : this.player2; 
    }

    // Determine the current non player
    getAdversary() {
        return (this.turnNumber % 2 === 0) ? this.player2 : this.player1;
    }

    // bindings for play area
    bindBoard(player) {
        const display = player.getDisplay();
        const button = player.getDisplay().getButton();
        
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
        this.getPlayer().getDisplay().updatePlay(this.selectMove, result);
        if (this.getAdversary().isDefeated()) { 
            this.getPlayer()
                .getDisplay()
                .createGameOver('YOU WIN!')
                .addEventListener('click', (e) => {
                    this.getPlayer().getDisplay().removeBoard();
                    this.resetGame();
                    this.startGame();
            }); 
        }
        else if (this.multiplayer) { this.switchTurn(result); }
        else { this.cpuTurn(); }
    }

    // Renders move taken on player and reset selectMove
    startTurn(result) {
        this.getPlayer().getDisplay().updateStatus(this.selectMove, result);
        this.selectMove = null;
    }

    // Prepares the play area to exchange players
    switchTurn(result) {
        const board = this.getAdversary().getDisplay();
        board.createTurnCover(this.getAdversary()
        .getName())
        .addEventListener('click', (e) => {
            board.clearTurnCover();
            this.startTurn(result);
        });
        board.displayBoard();
        this.getAdversary().getDisplay().removeBoard();
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
            this.player1 = null;
            this.player2 = null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksUUFBUSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxRQUFRLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFNBQVMsWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFX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Ozs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3dCOztBQUU3QyxpQkFBaUIsd0RBQVc7QUFDNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL0RPTUNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL0RPTUhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL0RyYWdFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL1BsYXllci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvU2V0UGxheWVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9TaGlwLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9nYW1lQ29udHJvbC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbnRvbiZmYW1pbHk9QnVuZ2VlK1NoYWRlJmZhbWlseT1Db25jZXJ0K09uZSZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tbWFpbi1iZzogcmdiKDE2NywgMTcxLCAxNzUpO1xcbiAgICAtLWJnLWdyaWQ6IGJsYWNrO1xcbiAgICAtLWJnLWNlbGw6IHJnYigxNzIsIDIzOSwgMjQxKTtcXG4gICAgLS1mb250LWd1aWRlLWxnOiAxLjVyZW07XFxuICAgIC0tZm9udC1ndWlkZS1zbTogLjdyZW07XFxuICAgIC0tZ2FwLWxnOiAzcHg7XFxuICAgIC0tZ2FwLXNtOiAycHg7XFxuICAgIC0tYnV0dG9uLWZnLWRpc2FibGU6IGdyZXk7XFxuICAgIC0tYnV0dG9uLWZnLW5vcm1hbDogYmxhY2s7XFxuICAgIC0tYnV0dG9uLWJnLWRpc2FibGU6IGRhcmtncmV5O1xcbiAgICAtLWJ1dHRvbi1iZy1ub3JtYWw6IHdoaXRlO1xcbiAgICAtLWJ1dHRvbi1mb250LXNpemU6IDJyZW07XFxuICAgIC0tYm9hcmQtaGl0OiBkYXJrcmVkO1xcbiAgICAtLWJvYXJkLWhvdmVyOiBhcXVhO1xcbiAgICAtLWJvYXJkLW1pc3M6IGdyZXk7XFxuICAgIC0tYm9hcmQtc2VsZWN0ZWQ6IHllbGxvdztcXG4gICAgLS1ib2FyZC1zaGlwOiBncmVlbjtcXG4gICAgLS1zaWRlLXNpemU6IDEwO1xcbiAgICAtLWNoZWNrLW91dHRlcjogcmdiKDIxNSwgMjQ0LCAyNTIpO1xcbiAgICAtLWNoZWNrLWlubmVyOiByZ2IoMjUyLCAyMTAsIDEzMik7XFxuICAgIC0taGVhZC1iZzogcmdiKDIzNSwgMjMwLCAyMzApO1xcbiAgICAtLXRvZ2dsZTogcmdiKDI1NSwgMTg3LCAwKTtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAvKiBtaW4taGVpZ2h0OiAxMDB2aDsgKi9cXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmctbm9ybWFsKTtcXG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1mZy1ub3JtYWwpO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1idXR0b24tZmctbm9ybWFsKTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1idXR0b24tZm9udC1zaXplKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJ1dHRvbjpkaXNhYmxlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iZy1kaXNhYmxlKTtcXG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1mZy1kaXNhYmxlKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tZmctZGlzYWJsZSk7XFxufVxcblxcbiNtYWluLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmcpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jaGVhZGVyLFxcbiNmb290ZXIge1xcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZC1iZyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBtaW4taGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBwYWRkaW5nOiAwIDJyZW07XFxufVxcblxcbiNoZWFkZXIgPiBoMSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQnVuZ2VlIFNoYWRlJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHJnYigxNzksIDExNiwgMCk7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGNvbG9yOnJnYigxNDgsIDE0NywgMTQ3KTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdyaWQtcm93OiAzLyA0O1xcbn1cXG5cXG4vKiBzdHlsaW5nIGZvciBhbGwgZ3JpZCBkaXNwbGF5cyAqL1xcbi5ncmlkLWJveCB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1ndWlkZS1sZyk7XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWdyaWQpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1zaWRlLXNpemUpLCAxZnIpO1xcbiAgICBnYXA6IHZhcigtLWdhcC1sZyk7XFxufVxcblxcbi5ncmlkLWJveCA+IGRpdiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNlbGwpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3NldC1jb250YWluZXIgPiAuZ3JpZC1ib3ggPiBkaXZ7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi5ndWlkZS10b3AsXFxuLmd1aWRlLWNvcm5lciB7XFxuICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tZ2FwLWxnKSAqIC42Nik7XFxufVxcblxcbi5ndWlkZS1sZWZ0LFxcbi5ndWlkZS1jb3JuZXIge1xcbiAgICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tZ2FwLWxnKSAqIC42Nik7XFxufVxcblxcbi5ndWlkZS1jb3JuZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1ncmlkKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciBhbGwgZ3JpZCBpY29ucyAqL1xcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtc2hpcCkgIWltcG9ydGFudDtcXG59XFxuXFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1taXNzKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtaGl0KSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1zZWxlY3RlZCkgIWltcG9ydGFudDtcXG59XFxuXFxuLmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zZXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbiAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc2V0LmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXkgIWltcG9ydGFudDtcXG59XFxuXFxuLyogU3R5bGluZyBmb3Igbm90aWZpY2F0aW9ucyAqL1xcbi5nYW1lb3Zlci1jb250YWluZXIsXFxuLnR1cm4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmdhbWVvdmVyLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4udHVybi1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmdhbWVvdmVyLWNvbnRlbnQsXFxuLnR1cm4tY29udGVudCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIHNldCBkaXNwbGF5ICovXFxuI3NldC1jb250YWluZXIge1xcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMCAxIDEwMCU7XFxuICAgIGdhcDogLjVyZW07XFxuICAgIG1hcmdpbjogLjVyZW0gMDtcXG59XFxuXFxuLnNldC10cmF5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuXFxufVxcblxcbi50cmF5LWl0ZW0ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDpsZWZ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uaWNvbi1waWVjZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAtMTtcXG4gICAgYm9yZGVyOiB2YXIoLS1nYXAtc20pIHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiB2YXIoLS1nYXAtc20pO1xcbn1cXG5cXG4uaWNvbi1waWVjZS5pY29uLWRpc2FibGU+ZGl2Om5vdCgjZHJhZ2dlZCkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5pY29uLWNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jZWxsKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG59XFxuXFxuLmRyYWctY2VsbCB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuI2RyYWdnZWQge1xcbiAgICB6LWluZGV4OiA5O1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZHJhZy15IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZ2dsZS1yb3RhdGUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbiN0b2dnbGUtYmFyIHtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jdG9nZ2xlLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI3RvZ2dsZS10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRvcDogIDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcblxcbiN0b2dnbGUtYm9keSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9nZ2xlKTtcXG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgYmxhY2s7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxufVxcblxcbiN0b2dnbGUtYm9keTphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gICAgdG9wOiAyMHB4O1xcbiAgICBsZWZ0OiA3MHB4O1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYm9yZGVyOiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tdG9nZ2xlKTtcXG59XFxuXFxuI2luc3QtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWQtYmcpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tYnV0dG9uLWZnLWRpc2FibGUpO1xcbn1cXG5cXG4jaW5zdC11bCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ29uY2VydCBPbmUnLCBjdXJzaXZlO1xcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWZnLWRpc2FibGUpO1xcbiAgICAvKiBsaXN0LXN0eWxlOiBub25lOyAqL1xcbn1cXG5cXG4vKiAjdG9nZ2xlLWJvZHk6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHdpZHRoOiAwO1xcbiAgICB0b3A6IDI0cHg7XFxuICAgIGxlZnQ6IDgxcHg7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBib3JkZXI6IDE2cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBibGFjaztcXG59ICovXFxuXFxuI3N1Ym1pdC1iYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jc3VibWl0LWJhciBidXR0b24ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNzdWJtaXQtYmMge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3N1Ym1pdC1tYyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoZWNrLWlubmVyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdBbnRvbicsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI3N1Ym1pdC1tYy0yLFxcbiNzdWJtaXQtbWMtbSB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hlY2stb3V0dGVyKTtcXG59XFxuXFxuI3N1Ym1pdC1tYy0yIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogM3B4IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XFxufVxcblxcbiNzdWJtaXQtbWMtbSB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLzI7XFxufVxcblxcblxcbiNzdWJtaXQtY2hrIHtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDEuMjVyZW07XFxuICAgIHdpZHRoOiAxLjI1cmVtO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuXFxuXFxuLyogU3R5bGluZyBmb3IgcGxheSBkaXNwbGF5cyAqL1xcbi5wbGF5LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgbWFyZ2luOiAwIC41cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnBsYXktc3RhdHVzIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtZ3VpZGUtc20pO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBnYXA6IHZhcigtLWdhcC1zbSk7XFxufVxcblxcbi5wbGF5LXN0YXR1cyAuZ3VpZGUtbGVmdCB7XFxuICAgIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1nYXAtc20pICogLjY2KTtcXG59XFxuXFxuLnBsYXktc3RhdHVzIC5ndWlkZS10b3Age1xcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLWdhcC1zbSkgKiAuNjYpO1xcbn1cXG5cXG4ucGxheS1hcmVhIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LWd1aWRlLWxnKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogdmFyKC0tZ2FwLWxnKTtcXG59XFxuXFxuLnBsYXktYXJlYSA+IC5vcGVuLWNlbGw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1ob3ZlcikgIWltcG9ydGFudDtcXG59XFxuXFxuLnBsYXktYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDUwcHgpIHtcXG4gICAgI3NldC1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxZnIgMWZyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAjc2V0LWNvbnRhaW5lciA+IC5ncmlkLWJveCB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgICAgICBncmlkLXJvdzogMSAvIDQ7XFxuICAgIH1cXG5cXG4gICAgLnNldC10cmF5IHtcXG4gICAgICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgfVxcblxcbiAgICAjdG9nZ2xlLWJhciB7XFxuICAgICAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICB9XFxuXFxuICAgICNzZXQtY29udGFpbmVyID4gLmdyaWQtYm94ID4gZGl2IHtcXG4gICAgICAgIHdpZHRoOiAzcmVtO1xcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB9XFxuXFxuICAgICN0b2dnbGUtY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICNpbnN0LWNvbnRhaW5lciB7IFxcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgfVxcblxcbiAgICAjc3VibWl0LWJhciB7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDBweDtcXG4gICAgICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgfVxcblxcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciB3aWRlIHZpZXdzIG9mIHBsYXkgZGlzcGxheSAgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNTcwcHgpIHtcXG4gICAgLnBsYXktY29udGFpbmVyIHtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIH1cXG5cXG4gICAgLnBsYXktYXJlYSB7XFxuICAgICAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIH1cXG5cXG4gICAgLnBsYXktc3RhdHVzIHtcXG4gICAgICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC5wbGF5LWJ1dHRvbiB7XFxuICAgICAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtJQUNJLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGFBQWE7SUFDYix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxpQ0FBaUM7SUFDakMsNkJBQTZCO0lBQzdCLDBCQUEwQjtBQUM5Qjs7QUFFQTs7SUFFSSx5Q0FBeUM7SUFDekMsU0FBUztJQUNULFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlDQUF5QztJQUN6Qyw4QkFBOEI7SUFDOUIseUNBQXlDO0lBQ3pDLGtDQUFrQztJQUNsQyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsK0JBQStCO0lBQy9CLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGdDQUFnQztJQUNo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QUFtQjtJQUNuQixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksK0NBQStDO0FBQ25EOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0k7UUFDSSxhQUFhO1FBQ2Isb0JBQW9CO1FBQ3BCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2Ysa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2Ysa0JBQWtCO0lBQ3RCOztBQUVKOztBQUVBLDRDQUE0QztBQUM1QztJQUNJO1FBQ0ksb0JBQW9CO1FBQ3BCLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2IsOEJBQThCO1FBQzlCLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbnRvbiZmYW1pbHk9QnVuZ2VlK1NoYWRlJmZhbWlseT1Db25jZXJ0K09uZSZkaXNwbGF5PXN3YXAnKTtcXG46cm9vdCB7XFxuICAgIC0tbWFpbi1iZzogcmdiKDE2NywgMTcxLCAxNzUpO1xcbiAgICAtLWJnLWdyaWQ6IGJsYWNrO1xcbiAgICAtLWJnLWNlbGw6IHJnYigxNzIsIDIzOSwgMjQxKTtcXG4gICAgLS1mb250LWd1aWRlLWxnOiAxLjVyZW07XFxuICAgIC0tZm9udC1ndWlkZS1zbTogLjdyZW07XFxuICAgIC0tZ2FwLWxnOiAzcHg7XFxuICAgIC0tZ2FwLXNtOiAycHg7XFxuICAgIC0tYnV0dG9uLWZnLWRpc2FibGU6IGdyZXk7XFxuICAgIC0tYnV0dG9uLWZnLW5vcm1hbDogYmxhY2s7XFxuICAgIC0tYnV0dG9uLWJnLWRpc2FibGU6IGRhcmtncmV5O1xcbiAgICAtLWJ1dHRvbi1iZy1ub3JtYWw6IHdoaXRlO1xcbiAgICAtLWJ1dHRvbi1mb250LXNpemU6IDJyZW07XFxuICAgIC0tYm9hcmQtaGl0OiBkYXJrcmVkO1xcbiAgICAtLWJvYXJkLWhvdmVyOiBhcXVhO1xcbiAgICAtLWJvYXJkLW1pc3M6IGdyZXk7XFxuICAgIC0tYm9hcmQtc2VsZWN0ZWQ6IHllbGxvdztcXG4gICAgLS1ib2FyZC1zaGlwOiBncmVlbjtcXG4gICAgLS1zaWRlLXNpemU6IDEwO1xcbiAgICAtLWNoZWNrLW91dHRlcjogcmdiKDIxNSwgMjQ0LCAyNTIpO1xcbiAgICAtLWNoZWNrLWlubmVyOiByZ2IoMjUyLCAyMTAsIDEzMik7XFxuICAgIC0taGVhZC1iZzogcmdiKDIzNSwgMjMwLCAyMzApO1xcbiAgICAtLXRvZ2dsZTogcmdiKDI1NSwgMTg3LCAwKTtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAvKiBtaW4taGVpZ2h0OiAxMDB2aDsgKi9cXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmctbm9ybWFsKTtcXG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1mZy1ub3JtYWwpO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1idXR0b24tZmctbm9ybWFsKTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1idXR0b24tZm9udC1zaXplKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJ1dHRvbjpkaXNhYmxlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iZy1kaXNhYmxlKTtcXG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1mZy1kaXNhYmxlKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tZmctZGlzYWJsZSk7XFxufVxcblxcbiNtYWluLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmcpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jaGVhZGVyLFxcbiNmb290ZXIge1xcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZC1iZyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBtaW4taGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBwYWRkaW5nOiAwIDJyZW07XFxufVxcblxcbiNoZWFkZXIgPiBoMSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQnVuZ2VlIFNoYWRlJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHJnYigxNzksIDExNiwgMCk7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGNvbG9yOnJnYigxNDgsIDE0NywgMTQ3KTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdyaWQtcm93OiAzLyA0O1xcbn1cXG5cXG4vKiBzdHlsaW5nIGZvciBhbGwgZ3JpZCBkaXNwbGF5cyAqL1xcbi5ncmlkLWJveCB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1ndWlkZS1sZyk7XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWdyaWQpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1zaWRlLXNpemUpLCAxZnIpO1xcbiAgICBnYXA6IHZhcigtLWdhcC1sZyk7XFxufVxcblxcbi5ncmlkLWJveCA+IGRpdiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNlbGwpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3NldC1jb250YWluZXIgPiAuZ3JpZC1ib3ggPiBkaXZ7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi5ndWlkZS10b3AsXFxuLmd1aWRlLWNvcm5lciB7XFxuICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tZ2FwLWxnKSAqIC42Nik7XFxufVxcblxcbi5ndWlkZS1sZWZ0LFxcbi5ndWlkZS1jb3JuZXIge1xcbiAgICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tZ2FwLWxnKSAqIC42Nik7XFxufVxcblxcbi5ndWlkZS1jb3JuZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1ncmlkKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciBhbGwgZ3JpZCBpY29ucyAqL1xcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtc2hpcCkgIWltcG9ydGFudDtcXG59XFxuXFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1taXNzKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtaGl0KSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1zZWxlY3RlZCkgIWltcG9ydGFudDtcXG59XFxuXFxuLmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zZXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbiAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc2V0LmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXkgIWltcG9ydGFudDtcXG59XFxuXFxuLyogU3R5bGluZyBmb3Igbm90aWZpY2F0aW9ucyAqL1xcbi5nYW1lb3Zlci1jb250YWluZXIsXFxuLnR1cm4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmdhbWVvdmVyLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4udHVybi1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmdhbWVvdmVyLWNvbnRlbnQsXFxuLnR1cm4tY29udGVudCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIHNldCBkaXNwbGF5ICovXFxuI3NldC1jb250YWluZXIge1xcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMCAxIDEwMCU7XFxuICAgIGdhcDogLjVyZW07XFxuICAgIG1hcmdpbjogLjVyZW0gMDtcXG59XFxuXFxuLnNldC10cmF5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuXFxufVxcblxcbi50cmF5LWl0ZW0ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDpsZWZ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uaWNvbi1waWVjZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAtMTtcXG4gICAgYm9yZGVyOiB2YXIoLS1nYXAtc20pIHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiB2YXIoLS1nYXAtc20pO1xcbn1cXG5cXG4uaWNvbi1waWVjZS5pY29uLWRpc2FibGU+ZGl2Om5vdCgjZHJhZ2dlZCkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5pY29uLWNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jZWxsKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG59XFxuXFxuLmRyYWctY2VsbCB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuI2RyYWdnZWQge1xcbiAgICB6LWluZGV4OiA5O1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZHJhZy15IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZ2dsZS1yb3RhdGUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbiN0b2dnbGUtYmFyIHtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jdG9nZ2xlLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI3RvZ2dsZS10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRvcDogIDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcblxcbiN0b2dnbGUtYm9keSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9nZ2xlKTtcXG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgYmxhY2s7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxufVxcblxcbiN0b2dnbGUtYm9keTphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gICAgdG9wOiAyMHB4O1xcbiAgICBsZWZ0OiA3MHB4O1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYm9yZGVyOiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tdG9nZ2xlKTtcXG59XFxuXFxuI2luc3QtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWQtYmcpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tYnV0dG9uLWZnLWRpc2FibGUpO1xcbn1cXG5cXG4jaW5zdC11bCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ29uY2VydCBPbmUnLCBjdXJzaXZlO1xcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWZnLWRpc2FibGUpO1xcbiAgICAvKiBsaXN0LXN0eWxlOiBub25lOyAqL1xcbn1cXG5cXG4vKiAjdG9nZ2xlLWJvZHk6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHdpZHRoOiAwO1xcbiAgICB0b3A6IDI0cHg7XFxuICAgIGxlZnQ6IDgxcHg7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBib3JkZXI6IDE2cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBibGFjaztcXG59ICovXFxuXFxuI3N1Ym1pdC1iYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jc3VibWl0LWJhciBidXR0b24ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNzdWJtaXQtYmMge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3N1Ym1pdC1tYyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoZWNrLWlubmVyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdBbnRvbicsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI3N1Ym1pdC1tYy0yLFxcbiNzdWJtaXQtbWMtbSB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hlY2stb3V0dGVyKTtcXG59XFxuXFxuI3N1Ym1pdC1tYy0yIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogM3B4IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XFxufVxcblxcbiNzdWJtaXQtbWMtbSB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLzI7XFxufVxcblxcblxcbiNzdWJtaXQtY2hrIHtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDEuMjVyZW07XFxuICAgIHdpZHRoOiAxLjI1cmVtO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuXFxuXFxuLyogU3R5bGluZyBmb3IgcGxheSBkaXNwbGF5cyAqL1xcbi5wbGF5LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgbWFyZ2luOiAwIC41cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnBsYXktc3RhdHVzIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtZ3VpZGUtc20pO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBnYXA6IHZhcigtLWdhcC1zbSk7XFxufVxcblxcbi5wbGF5LXN0YXR1cyAuZ3VpZGUtbGVmdCB7XFxuICAgIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1nYXAtc20pICogLjY2KTtcXG59XFxuXFxuLnBsYXktc3RhdHVzIC5ndWlkZS10b3Age1xcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLWdhcC1zbSkgKiAuNjYpO1xcbn1cXG5cXG4ucGxheS1hcmVhIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LWd1aWRlLWxnKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogdmFyKC0tZ2FwLWxnKTtcXG59XFxuXFxuLnBsYXktYXJlYSA+IC5vcGVuLWNlbGw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1ob3ZlcikgIWltcG9ydGFudDtcXG59XFxuXFxuLnBsYXktYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDUwcHgpIHtcXG4gICAgI3NldC1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxZnIgMWZyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAjc2V0LWNvbnRhaW5lciA+IC5ncmlkLWJveCB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgICAgICBncmlkLXJvdzogMSAvIDQ7XFxuICAgIH1cXG5cXG4gICAgLnNldC10cmF5IHtcXG4gICAgICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgfVxcblxcbiAgICAjdG9nZ2xlLWJhciB7XFxuICAgICAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICB9XFxuXFxuICAgICNzZXQtY29udGFpbmVyID4gLmdyaWQtYm94ID4gZGl2IHtcXG4gICAgICAgIHdpZHRoOiAzcmVtO1xcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB9XFxuXFxuICAgICN0b2dnbGUtY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICNpbnN0LWNvbnRhaW5lciB7IFxcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgfVxcblxcbiAgICAjc3VibWl0LWJhciB7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDBweDtcXG4gICAgICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgfVxcblxcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciB3aWRlIHZpZXdzIG9mIHBsYXkgZGlzcGxheSAgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNTcwcHgpIHtcXG4gICAgLnBsYXktY29udGFpbmVyIHtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIH1cXG5cXG4gICAgLnBsYXktYXJlYSB7XFxuICAgICAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIH1cXG5cXG4gICAgLnBsYXktc3RhdHVzIHtcXG4gICAgICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC5wbGF5LWJ1dHRvbiB7XFxuICAgICAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgbWFrZUVsZW1lbnQsIGFkanVzdFRvSW5kZXgsIGJ1aWxkR3JpZCB9IGZyb20gJy4vRE9NSGVscGVycy5qcyc7XG5pbXBvcnQgeyBTZXRQbGF5ZXIgfSBmcm9tICcuL1NldFBsYXllci5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplRE9NKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5zZXRBdHRyaWJ1dGUoJ29uZHJhZ3N0YXJ0JywgJ3JldHVybiBmYWxzZTsnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jykuc2V0QXR0cmlidXRlKCdvbmRyb3AnLCAncmV0dXJuIGZhbHNlJyk7XG4gICAgY29uc3QgY29udGFpbmVyID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgaWQ6ICdtYWluLWNvbnRhaW5lcicgfSk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2RpdicsIHsgaWQ6ICdoZWFkZXInIH0pKTtcbiAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcignI2hlYWRlcicpLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdoMScsIHt9LCAnQkFUVExFU0hJUCcpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2RpdicsIHsgaWQ6ICdmb290ZXInIH0pKTtcbiAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcignI2Zvb3RlcicpLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdwJywge30sICcmY29weTsgMjAyMiBKaW1teSBRdWFkcm9zJykpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIC8vIGNvbnN0IHNldFBsYXllciA9IG5ldyBTZXRQbGF5ZXIoMTAsIFs1LCA0LCAzLCAzLCAyXSk7XG4gICAgLy8gc2V0UGxheWVyLmRpc3BsYXkoKTtcbn1cblxuLy8gRGlzcGxheSBmb3IgdGhlIGdlbmVyYWwgcGxheSBhcmVhXG5leHBvcnQgY2xhc3MgUGxheUJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihzaXplLCBhbGxTaGlwcykge1xuICAgICAgICB0aGlzLlNJWkUgPSBzaXplO1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAncGxheS1jb250YWluZXInIH0pO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZEdyaWQoc2l6ZSwgJ3BsYXktYXJlYScpKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRHcmlkKHNpemUsICdwbGF5LXN0YXR1cycpKVxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnYnV0dG9uJywgeyBjbGFzczogJ3BsYXktYnV0dG9uJywgZGlzYWJsZWQ6ICd0cnVlJyB9LCAnU0VMRUNUIFRBUkdFVCcpKTtcbiAgICAgICAgYWxsU2hpcHMuZm9yRWFjaChpbmRleCA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXR1cyhpbmRleCwgJ3NoaXAnKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgLy8gZ2V0dGVycyBmb3IgYm9hcmQgZWxlbWVudHNcbiAgICBnZXRDb250YWluZXIoKSB7IHJldHVybiB0aGlzLmNvbnRhaW5lcjsgfVxuICAgIGdldFBsYXkoKSB7IHJldHVybiB0aGlzLmdldENvbnRhaW5lcigpLnF1ZXJ5U2VsZWN0b3IoJy5wbGF5LWFyZWEnKTsgfVxuICAgIGdldFN0YXR1cygpIHsgcmV0dXJuIHRoaXMuZ2V0Q29udGFpbmVyKCkucXVlcnlTZWxlY3RvcignLnBsYXktc3RhdHVzJyk7IH1cbiAgICBnZXRCdXR0b24oKSB7IHJldHVybiB0aGlzLmdldENvbnRhaW5lcigpLnF1ZXJ5U2VsZWN0b3IoJy5wbGF5LWJ1dHRvbicpOyB9XG4gICAgXG4gICAgLy8gSGVscGVycyB0byBoYW5kbGUgdGhlIGRpc3BsYXllZCBndWlkZXNcbiAgICBnZXRHdWlkZUluZGV4KGluZGV4KSB7IHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgKGluZGV4ICUgdGhpcy5TSVpFKSkuY29uY2F0KE1hdGguZmxvb3IoaW5kZXggLyB0aGlzLlNJWkUpICsgMSk7IH1cblxuICAgIGRpc3BsYXlCb2FyZCgpIHsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGFpbmVyJykuYXBwZW5kQ2hpbGQodGhpcy5nZXRDb250YWluZXIoKSk7IH1cbiAgICByZW1vdmVCb2FyZCgpIHsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXktY29udGFpbmVyJykucmVtb3ZlKCk7IH1cblxuICAgIC8vIHNldCB0aGUgZGlzcGxheSdzIGJ1dHRvbiB0ZXh0IGFuZCBkaXNhYmxlZCBzdGF0dXNcbiAgICBzZXRCdXR0b24oaW5kZXgpIHtcbiAgICAgICAgdGhpcy5nZXRCdXR0b24oKS5kaXNhYmxlZCA9IChpbmRleCkgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgIHRoaXMuZ2V0QnV0dG9uKCkuaW5uZXJIVE1MID0gKGluZGV4KSA/IGBBVFRBQ0sgJHt0aGlzLmdldEd1aWRlSW5kZXgoaW5kZXgpfWAgOiBgU0VMRUNUIFRBUkdFVGA7IFxuICAgIH07XG5cbiAgICAvLyBzd2l0Y2hlcyBhIGNlbGwgZnJvbSBvcGVuIHRvIHNlbGVjdGVkXG4gICAgdG9nZ2xlU2VsZWN0ZWQoaW5kZXgpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuZ2V0UGxheSgpLmNoaWxkcmVuLml0ZW0oYWRqdXN0VG9JbmRleChpbmRleCwgdGhpcy5TSVpFKSk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnRvZ2dsZSgnb3Blbi1jZWxsJyk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcbiAgICB9XG5cbiAgICAvLyBzZXQgY2xhc3MgZm9yIGNlbGwgaW4gdGhlIHBsYXkgZ3JpZFxuICAgIHVwZGF0ZVBsYXkoaW5kZXgsIHRvVXBkYXRlKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmdldFBsYXkoKS5jaGlsZHJlbi5pdGVtKGFkanVzdFRvSW5kZXgoaW5kZXgsIHRoaXMuU0laRSkpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCh0b1VwZGF0ZSk7XG4gICAgfVxuXG4gICAgLy8gc2V0IGNsYXNzIGZvciBjZWxsIGluIHRoZSBzdGF0dXMgZ3JpZFxuICAgIHVwZGF0ZVN0YXR1cyhpbmRleCwgdG9VcGRhdGUpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuZ2V0U3RhdHVzKCkuY2hpbGRyZW4uaXRlbShhZGp1c3RUb0luZGV4KGluZGV4LCB0aGlzLlNJWkUpKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKHRvVXBkYXRlKTtcbiAgICB9XG5cbiAgICAvLyBkaXNwbGF5IGEgcHJpdmFjeSBjb3ZlciBvbiB0dXJuIHN3aXRjaC1vZmZzLCB0YWtlcyBhIHN0cmluZyBmb3IgcGxheWVyJ3MgbmFtZSwgcmV0dXJucyBidXR0b25cbiAgICBjcmVhdGVUdXJuQ292ZXIocGxheWVyKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAndHVybi1jb250YWluZXInIH0pO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICd0dXJuLWNvbnRlbnQnIH0pO1xuICAgICAgICBjb25zdCBidXR0b24gPSBtYWtlRWxlbWVudCgnYnV0dG9uJywgeyBjbGFzczogJ3R1cm4tYnV0dG9uJyB9LCAnUkVBRFknKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnaDEnLCB7fSwgYCR7cGxheWVyLnRvVXBwZXJDYXNlKCl9J3NgKSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2gxJywge30sICdUVVJOJykpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgICAgdGhpcy5nZXRDb250YWluZXIoKS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH1cblxuICAgIGNsZWFyVHVybkNvdmVyKCkge1xuICAgICAgICB0aGlzLmdldENvbnRhaW5lcigpLnF1ZXJ5U2VsZWN0b3IoJy50dXJuLWNvbnRhaW5lcicpLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIC8vIGRpc3BsYXkgYSBnYW1lb3ZlciBtZXNzYWdlIHdpdGggY3VzdG9uIHJlc3VsdCBzdHJpbmcsIHJldHVybnMgYnV0dG9uIGZvciBiaW5kaW5nXG4gICAgY3JlYXRlR2FtZU92ZXIocmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnZ2FtZW92ZXItY29udGFpbmVyJyB9KTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnZ2FtZW92ZXItY29udGVudCcgfSk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IG1ha2VFbGVtZW50KCdidXR0b24nLCB7IGNsYXNzOiAnZ2FtZW92ZXItYnV0dG9uJyB9LCAnUExBWSBBR0FJTj8nKVxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdoMScsIHt9LCByZXN1bHQpKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9XG59IiwiLy8gSGVscGVyIGZ1bmN0aW9uIGZvciBlYXN5IGVsZW1lbnQgY3JlYXRpb25cbi8vIHVzZTogKDxzdHJpbmc+LCA8b2JqZWN0PiBvZiBwcm9wZXJ0aWVzIGFzIHlvdSB3b3VsZCB1c2Ugc2V0QXR0cmlidXRlLCA8c3RyaW5nPmlubmVySFRNTClcbmV4cG9ydCBmdW5jdGlvbiBtYWtlRWxlbWVudCh0eXBlLCBwcm9wZXJ0aWVzID0ge30sIGlubmVyID0gbnVsbCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGZvciAobGV0IGtleSBpbiBwcm9wZXJ0aWVzKSB7IGVsZW1lbnQuc2V0QXR0cmlidXRlKGAke2tleX1gLCBgJHtwcm9wZXJ0aWVzW2tleV19YCkgfTtcbiAgICBpZiAoaW5uZXIpIHsgZWxlbWVudC5pbm5lckhUTUwgPSBpbm5lciB9O1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRqdXN0VG9JbmRleChpbmRleCwgc2l6ZSkgeyBcbiAgICByZXR1cm4gKHNpemUgKyAxKSAqIChpbmRleCAvIHNpemUgKyAxKSArIDE7XG59XG5cbi8vIGNyZWF0ZSBhIHZhcmlhYmx5IHNpemVkIGdyaWQgd2l0aCBndWlkZSBtZWFzdXJlcyBvbiB0b3AgYW5kIGxlZnQgaGFuZCBzaWRlXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRHcmlkKHNpZGVTaXplLCBhZGRDbGFzcykge1xuICAgIGNvbnN0IFNJWkUgPSBNYXRoLnBvdyhzaWRlU2l6ZSArIDEsIDIpO1xuICAgIGNvbnN0IGdyaWRCb3ggPSBtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2dyaWQtYm94JyB9KTtcbiAgICBpZiAoYWRkQ2xhc3MpIHsgZ3JpZEJveC5jbGFzc0xpc3QuYWRkKGFkZENsYXNzKTsgfVxuICAgIGxldCBjb2xWYWx1ZSA9IDY1O1xuICAgIGxldCByb3dWYWx1ZSA9IDE7XG4gICAgbGV0IGNlbGxJbmRleCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBTSVpFOyBpKyspIHsgXG4gICAgICAgIGlmIChpID09PSAwKSB7IGdyaWRCb3guYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdndWlkZS1jb3JuZXInIH0pKSB9XG4gICAgICAgIGVsc2UgaWYgKGkgPD0gc2lkZVNpemUpIHsgZ3JpZEJveC5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2d1aWRlLXRvcCcgfSwgU3RyaW5nLmZyb21DaGFyQ29kZShjb2xWYWx1ZSsrKSkpIH1cbiAgICAgICAgZWxzZSBpZiAoaSAlIChzaWRlU2l6ZSArIDEpID09PSAwKSB7IGdyaWRCb3guYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdndWlkZS1sZWZ0J30sIHJvd1ZhbHVlKyspKSB9XG4gICAgICAgIGVsc2UgeyBncmlkQm94LmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnb3Blbi1jZWxsIHNlbGVjdGFibGUnLCAnZGF0YS1pbmRleCc6IGNlbGxJbmRleCsrIH0pKSB9O1xuICAgIH1cblxuICAgIC8vIEZpbmQgYSBiZXR0ZXIgaG9tZSBmb3IgdGhpc1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jykuc3R5bGUuc2V0UHJvcGVydHkoJy0tc2lkZS1zaXplJywgc2lkZVNpemUgKyAxKTtcbiAgICBcbiAgICByZXR1cm4gZ3JpZEJveDtcbn1cblxuLy8gc2V0UGxheWVyIERPTSBidWlsZGVyc1xuXG4vLyBjb250YWluZXIgZm9yIGljb25zIGluZGV4ZXMgdGhlIGljb25zIG9uIG9yZGVyIGFkZGVkXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRTZXRQbGF5ZXIoc2l6ZSwgcGllY2VzKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgaWQ6ICdzZXQtY29udGFpbmVyJyB9KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRHcmlkKHNpemUpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRUb2dnbGVCYXIoKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1ha2VUcmF5KHBpZWNlcykpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZFN1Ym1pdEJhcigpKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBidWlsZFN1Ym1pdEJhcigpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBpZDogJ3N1Ym1pdC1iYXInIH0pO1xuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGlkOiAnc3VibWl0LWJjJyB9KTtcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2J1dHRvbicsIHsgaWQ6ICdzdWJtaXQtYnRuJywgZGlzYWJsZWQ6ICd0cnVlJyB9LCAnQ09OVElOVUUnKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkU2V0TXVsdGkoKSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gYnVpbGRTZXRNdWx0aSgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBpZDogJ3N1Ym1pdC1tYycgfSk7XG4gICAgY29uc3QgdHdvID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgaWQ6ICdzdWJtaXQtbWMtMicgfSk7XG4gICAgdHdvLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdkaXYnLCB7fSwgJ1QnKSk7XG4gICAgdHdvLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdkaXYnLCB7fSwgJ1cnKSk7XG4gICAgdHdvLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdkaXYnLCB7fSwgJ08nKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHR3byk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdkaXYnLCB7IGlkOiAnc3VibWl0LW1jLW0nIH0sICdQTEFZJykpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnaW5wdXQnLCB7IHR5cGU6ICdjaGVja2JveCcsIGlkOiAnc3VibWl0LWNoaycgfSkpXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gYnVpbGRUb2dnbGVCYXIoKSB7XG4gICAgY29uc3QgdG9nZ2xlYmFyID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgaWQ6ICd0b2dnbGUtYmFyJyB9KTtcbiAgICBjb25zdCB0b2dnbGVDb250YWluZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBpZDogJ3RvZ2dsZS1jb250YWluZXInIH0pXG4gICAgY29uc3QgdG9nZ2xlQm9keSA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGlkOiAndG9nZ2xlLWJvZHknLCAnZGF0YS15JzogJ2ZhbHNlJyB9KTtcbiAgICBjb25zdCB0b2dnbGVUZXh0ID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgaWQ6ICd0b2dnbGUtdGV4dCcgfSwgJ1gnKTtcbiAgICBjb25zdCBpbnN0cnVjdENvbnQgPSBtYWtlRWxlbWVudCgnZGl2Jywge2lkOiAnaW5zdC1jb250YWluZXInIH0pO1xuICAgIGNvbnN0IGluc3RydWN0VUwgPSBtYWtlRWxlbWVudCgndWwnLCB7aWQ6ICdpbnN0LXVsJyB9KTtcbiAgICBpbnN0cnVjdFVMLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdsaScsIHt9LCAnRFJBRyBQSUVDRVMgQkVMT1cgVE8gR1JJRCcpKTtcbiAgICBpbnN0cnVjdFVMLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdsaScsIHt9LCAnTEVGVCBUT0dHTEUgVE8gU0VUIERJUkVDVElPTicpKTtcbiAgICBpbnN0cnVjdFVMLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdsaScsIHt9LCAnT05DRSBBTEwgU0VUIFBSRVNTIENPTlRJTlVFJykpO1xuICAgIHRvZ2dsZUJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2dnbGUtcm90YXRlJykpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS15JywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCd0b2dnbGUtcm90YXRlJyk7XG4gICAgICAgICAgICB0b2dnbGVUZXh0LmlubmVySFRNTCA9ICdYJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS15JywgJ3RydWUnKTtcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS1yb3RhdGUnKTtcbiAgICAgICAgICAgIHRvZ2dsZVRleHQuaW5uZXJIVE1MID0gJ1knO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgdG9nZ2xlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZ2dsZUJvZHkpO1xuICAgIHRvZ2dsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2dnbGVUZXh0KTtcbiAgICB0b2dnbGViYXIuYXBwZW5kQ2hpbGQodG9nZ2xlQ29udGFpbmVyKVxuICAgIGluc3RydWN0Q29udC5hcHBlbmRDaGlsZChpbnN0cnVjdFVMKTtcbiAgICB0b2dnbGViYXIuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3RDb250KTtcbiAgICByZXR1cm4gdG9nZ2xlYmFyO1xufVxuXG5mdW5jdGlvbiBtYWtlVHJheShwaWVjZXMpIHtcbiAgICBjb25zdCB0cmF5ID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdzZXQtdHJheScgfSk7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMCwgaiA9IE1hdGguZmxvb3IoKHBpZWNlcy5sZW5ndGgpIC8gMik7IGogPCBwaWVjZXMubGVuZ3RoOyBpKyssIGorKykge1xuICAgICAgICBpZiAoaSA8IE1hdGguZmxvb3IocGllY2VzLmxlbmd0aCAvIDIpKSB7IFxuICAgICAgICAgICAgdHJheS5hcHBlbmRDaGlsZChtYWtlVHJheUl0ZW0ocGllY2VzW2ldKSk7XG4gICAgICAgICAgICB0cmF5Lmxhc3RDaGlsZC5maXJzdENoaWxkLnNldEF0dHJpYnV0ZSgnZGF0YS10cmF5JywgYCR7aW5kZXgrK31gKTtcbiAgICAgICAgfVxuICAgICAgICB0cmF5LmFwcGVuZENoaWxkKG1ha2VUcmF5SXRlbShwaWVjZXNbal0pKTtcbiAgICAgICAgdHJheS5sYXN0Q2hpbGQuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJheScsIGAke2luZGV4Kyt9YCk7XG4gICAgfVxuICAgIHJldHVybiB0cmF5O1xufVxuXG4vLyBjcmVhdGUgaG9sZGVyIGZvciBpY29uc1xuZnVuY3Rpb24gbWFrZVRyYXlJdGVtKHBpZWNlKSB7XG4gICAgY29uc3QgaXRlbSA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAndHJheS1pdGVtJyB9KVxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQobWFrZVBpZWNlSWNvbihwaWVjZSkpO1xuICAgIHJldHVybiBpdGVtO1xufVxuXG4vLyBjcmVhdGUgaWNvbnNcbmZ1bmN0aW9uIG1ha2VQaWVjZUljb24oc2l6ZSkge1xuICAgIGNvbnN0IGljb24gPSBtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2ljb24tcGllY2UnIH0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2ljb24tY2VsbCcgfSk7XG4gICAgICAgIGljb24uYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxuICAgIGljb24uZGF0YXNldC5zaXplID0gc2l6ZTtcbiAgICAvLyBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB0aGlzLmRyYWdTdGFydChlKSk7XG4gICAgcmV0dXJuIGljb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRHJhZ0ljb24oc2l6ZSwgdmVydGljYWwsIHRyYXksIGNlbGxTaXplKSB7XG4gICAgY29uc3QgZHJhZ0ljb24gPSBtYWtlUGllY2VJY29uKE51bWJlcihzaXplKSk7XG4gICAgZHJhZ0ljb24uc2V0QXR0cmlidXRlKCdpZCcsICdkcmFnZ2VkJyk7XG4gICAgZHJhZ0ljb24uc2V0QXR0cmlidXRlKCdkYXRhLXRyYXknLCB0cmF5KTtcbiAgICBpZiAodmVydGljYWwpIHsgZHJhZ0ljb24uY2xhc3NMaXN0LmFkZCgnZHJhZy15JykgfVxuICAgIFsuLi5kcmFnSWNvbi5jaGlsZHJlbl0uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIGNoaWxkLnN0eWxlLmhlaWdodCA9IGNlbGxTaXplO1xuICAgICAgICBjaGlsZC5jbGFzc0xpc3QuYWRkKCdkcmFnLWNlbGwnKVxuICAgIH0pO1xuICAgIHJldHVybiBkcmFnSWNvbjsgXG59IiwibGV0IGVsZW1lbnQ7XG5sZXQgeE9mZjtcbmxldCB5T2ZmO1xuY29uc3QgbW92ZUhhbmRsZXIgPSBtb3ZlLmJpbmQodGhpcyk7XG5jb25zdCBlbmRIYW5kbGVyID0gZW5kLmJpbmQodGhpcyk7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIERyYWdFbGVtZW50KGUsIHgsIHkpIHtcbiAgICBlbGVtZW50ID0gZTtcbiAgICB4T2ZmID0geDtcbiAgICB5T2ZmID0geTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW92ZUhhbmRsZXIsIHRydWUpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZW5kSGFuZGxlciwgdHJ1ZSk7XG59XG5cblxuZnVuY3Rpb24gbW92ZShlKSB7XG4gICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlbGVtZW50LnN0eWxlLnRvcCA9IChlLmNsaWVudFkgLSB5T2ZmKSArICdweCc7XG4gICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gKGUuY2xpZW50WCAtIHhPZmYpICsgJ3B4Jztcbn1cblxuZnVuY3Rpb24gZW5kKGUpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW92ZUhhbmRsZXIsIHRydWUpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZW5kSGFuZGxlciwgdHJ1ZSk7XG59IiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gJy4vU2hpcC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBHYW1lYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKHNpemUpIHtcbiAgICAgICAgdGhpcy5TSVpFID0gc2l6ZTtcbiAgICAgICAgdGhpcy5hbGxTaGlwcyA9IFtdO1xuICAgICAgICB0aGlzLmJvYXJkID0gW107XG4gICAgICAgIHRoaXMuYWxsSGl0ID0gW107XG4gICAgICAgIHRoaXMuYWxsTWlzcyA9IFtdO1xuICAgICAgICB0aGlzLmFsbFBsYWNlZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemUgKiBzaXplOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmQucHVzaCh7c2hpcDogbnVsbCwgaGl0OiBmYWxzZX0pXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZ2V0SGl0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hbGxIaXQ7XG4gICAgfVxuXG4gICAgZ2V0TWlzcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxsTWlzcztcbiAgICB9XG5cbiAgICBnZXRQbGFjZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFsbFBsYWNlZDtcbiAgICB9XG5cbiAgICBnZXRTaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5TSVpFICogdGhpcy5TSVpFO1xuICAgIH1cblxuICAgIGlzSGl0KGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkW2luZGV4XS5oaXQ7XG4gICAgfVxuXG4gICAgLy8gcGxhY2UgbmV3IHNoaXAgb24gZ2FtZWJvYXJkIHJldHVybnMgc2hpcCBvciBmYWxzZSBpZiBub3QgbGVnYWwgcGxhY2VtZW50XG4gICAgYWRkU2hpcChzaGlwU2l6ZSwgaGVhZCwgdmVydGljYWwgPSBmYWxzZSkge1xuICAgICAgICAvLyBkaXNhbGxvdyBwbGFjZW1lbnQgYmV5b25kIGJvYXJkJ3MgYm91bmRhcmllc1xuICAgICAgICBpZiAoIXZlcnRpY2FsICYmICgoaGVhZCAlIHRoaXMuU0laRSkgKyBzaGlwU2l6ZSA+IHRoaXMuU0laRSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHZlcnRpY2FsICYmIChNYXRoLmZsb29yKGhlYWQgLyB0aGlzLlNJWkUpKSArIHNoaXBTaXplID4gdGhpcy5TSVpFKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgdG9QbGFjZSA9IHRoaXMuZ2V0SW5kZWNlcyhzaGlwU2l6ZSwgaGVhZCwgdmVydGljYWwpO1xuICAgICAgICBcbiAgICAgICAgLy8gaW5zcGVjdCBmb3IgYW55IG92ZXJsYXBwaW5nIGNvbmZsaWN0XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9QbGFjZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbdG9QbGFjZVtpXV0uc2hpcCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG5ld1NoaXAgPSBuZXcgU2hpcChzaGlwU2l6ZSk7XG4gICAgICAgIHRvUGxhY2UuZm9yRWFjaChpbmRleCA9PiB7XG4gICAgICAgICAgICB0aGlzLmFsbFBsYWNlZC5wdXNoKGluZGV4KTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbaW5kZXhdLnNoaXAgPSBuZXdTaGlwXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFsbFNoaXBzLnB1c2godG9QbGFjZSk7XG4gICAgICAgIHJldHVybiBuZXdTaGlwO1xuICAgIH1cblxuICAgIC8vIHJldHVybnMgYW4gYXJyYXkgb2YgYSBzaGlwJ3Mgc2VxdWVudGlhbCBwb3NpdGlvbmluZ1xuICAgIGdldEluZGVjZXMoc2l6ZSwgaGVhZCwgdmVydGljYWwpIHtcbiAgICAgICAgY29uc3QgaW5kZWNlcyA9IFtdO1xuICAgICAgICBpZiAodmVydGljYWwpIHtcbiAgICAgICAgICAgIHdoaWxlIChzaXplLS0gPiAwKSB7XG4gICAgICAgICAgICAgICAgaW5kZWNlcy5wdXNoKGhlYWQpO1xuICAgICAgICAgICAgICAgIGhlYWQgKz0gdGhpcy5TSVpFO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdoaWxlIChzaXplLS0gPiAwKSB7XG4gICAgICAgICAgICAgICAgaW5kZWNlcy5wdXNoKGhlYWQrKyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluZGVjZXM7XG4gICAgfVxuXG4gICAgLy8gc2V0cyBhdHRhY2sgYWN0aW9ucywgbXVzdCBiZSBpbnRlZ2VyIGFuZCB3aXRoaW4gdGhlIGdhbWVib2FyZCwgaWdub3JlcyBzcGFjZXMgYWxyZWFkeSBoaXRcbiAgICByZWNlaXZlQXR0YWNrKGluZGV4KSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5kZXggIT0gJ251bWJlcicpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcigndmFsdWUgbXVzdCBiZSBOdW1iZXInKSB9O1xuICAgICAgICBpZiAoIU51bWJlci5pc0ludGVnZXIoaW5kZXgpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ09ubHkgaW50ZWdlciB2YWx1ZXMnKSB9O1xuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMuYm9hcmQubGVuZ3RoKSB7IHRocm93IG5ldyBSYW5nZUVycm9yKGB2YWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgJHt0aGlzLmJvYXJkLmxlbmd0aCAtIDF9YCk7IH1cbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbaW5kZXhdLmhpdCkgeyByZXR1cm47IH1cblxuICAgICAgICB0aGlzLmJvYXJkW2luZGV4XS5oaXQgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5ib2FyZFtpbmRleF0uc2hpcCkge1xuICAgICAgICAgICAgdGhpcy5ib2FyZFtpbmRleF0uc2hpcC5oaXQoKTtcbiAgICAgICAgICAgIHRoaXMuYWxsSGl0LnB1c2goaW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRbaW5kZXhdLnNoaXA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFsbE1pc3MucHVzaChpbmRleCk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNvbmZpcm1zIHRoYXQgdGhlIHNoaXAgYXQgZWFjaCBmcm9udCBwb3NpdGlvbiBpbiBhbGxTaGlwcyBpcyBzdW5rXG4gICAgaXNTdW5rKCkge1xuICAgICAgICBsZXQgc3VuayA9IHRydWU7XG4gICAgICAgIHRoaXMuYWxsU2hpcHMuZm9yRWFjaChzaGlwID0+IHsgXG4gICAgICAgICAgICBpZiAoIXRoaXMuYm9hcmRbc2hpcFswXV0uc2hpcC5pc1N1bmsoKSkgeyBzdW5rID0gZmFsc2U7IH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzdW5rO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9HYW1lYm9hcmRcIjtcbmltcG9ydCB7IFBsYXlCb2FyZCB9IGZyb20gXCIuL0RPTUNvbnRyb2xcIjtcbi8vIGhvbGRzIHBsYXllcidzIGdhbWVib2FyZCwgY2FuIGRldGVybWluZSBuZXh0IG1vdmUgaWYgY3B1IFxuLy8gcGFzcyBhbiBhcnJheSBvZiBhcnJheXMgaW4gW3NoaXAgc2l6ZSwgc2hpcCBpbmRleCwgaXMgdmVydGljYWwodHJ1ZS9mYWxzZSldIGZvcm1hdFxuLy8gdG8gcG9wdWxhdGUgdGhlIGdhbWVib2FyZFxuZXhwb3J0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgdG9BZGQgPSBbXSkge1xuICAgICAgICB0aGlzLlNJWkUgPSAxMDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBHYW1lYm9hcmQodGhpcy5TSVpFKTtcbiAgICAgICAgdGhpcy5uZXh0TW92ZSA9IFtdO1xuICAgICAgICB0b0FkZC5mb3JFYWNoKHNoaXAgPT4gdGhpcy5ib2FyZC5hZGRTaGlwKHNoaXBbMF0sIHNoaXBbMV0sIHNoaXBbMl0pICk7XG4gICAgICAgIHRoaXMuZGlzcGxheSA9IG5ldyBQbGF5Qm9hcmQodGhpcy5TSVpFLCB0aGlzLmdldEFsbFNoaXBJbmRleCgpKTtcbiAgICB9O1xuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG5cbiAgICBnZXREaXNwbGF5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXNwbGF5O1xuICAgIH1cblxuICAgIGdldEFsbFNoaXBJbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQuZ2V0UGxhY2VkKCk7XG4gICAgfVxuXG4gICAgZ2V0TWlzc0luZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZC5nZXRNaXNzKCk7XG4gICAgfVxuXG4gICAgZ2V0SGl0SW5kZXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkLmdldEhpdCgpO1xuICAgIH1cblxuICAgIC8vIGNvbmZpcm1zIGlmIHBsYXllciBpcyBkZWZlYXRlZFxuICAgIGlzRGVmZWF0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkLmlzU3VuaygpO1xuICAgIH1cblxuICAgIC8vIHJldHVybnMgZWl0aGVyIHRoZSBoaXQgc2hpcCBvciBudWxsXG4gICAgdGFrZUhpdChpbmRleCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuYm9hcmQucmVjZWl2ZUF0dGFjayhpbmRleCkpID8gJ2hpdCcgOiAnbWlzcyc7XG4gICAgfVxuXG4gICAgLy8gY29uZmlybXMgaWYgYSBtb3ZlIGlzIHZhbGlkXG4gICAgaXNWYWxpZE1vdmUoaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLmJvYXJkLmdldFNpemUoKSkgeyByZXR1cm4gZmFsc2UgfTtcbiAgICAgICAgcmV0dXJuICF0aGlzLmJvYXJkLmlzSGl0KGluZGV4KTtcbiAgICB9XG5cbiAgICAvLyB0YWtlcyBhIGNwdSB0dXJuIGFnYWluc3QgcGxheWVyLCByZXR1cm5zIG1vdmUgdGFrZW5cbiAgICBjcHVUdXJuKCkge1xuICAgICAgICBsZXQgbW92ZTtcbiAgICAgICAgaWYgKHRoaXMubmV4dE1vdmUubGVuZ3RoID09PSAwKSB7IG1vdmUgPSB0aGlzLnJhbmRvbU1vdmUoKTsgfVxuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSB0aGlzLnRha2VIaXQobW92ZSk7XG4gICAgICAgIHJldHVybiBtb3ZlO1xuICAgIH1cblxuICAgIC8vIGVsZWN0IGEgdmFsaWQgZnJlZSBzcGFjZSB0byBhdHRhY2sgZnJvbSB0aGUgZ2FtZWJvYXJkXG4gICAgcmFuZG9tTW92ZSgpIHtcbiAgICAgICAgY29uc3QgbW92ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGgucG93KHRoaXMuU0laRSwgMikpO1xuICAgICAgICByZXR1cm4gKHRoaXMuaXNWYWxpZE1vdmUobW92ZSkpID8gbW92ZSA6IHRoaXMucmFuZG9tTW92ZSgpO1xuICAgIH1cbn07XG4iLCJpbXBvcnQgeyBEcmFnRWxlbWVudCB9IGZyb20gJy4vRHJhZ0VsZW1lbnQuanMnO1xuaW1wb3J0IHsgYWRqdXN0VG9JbmRleCwgYnVpbGRTZXRQbGF5ZXIsIG1ha2VEcmFnSWNvbiB9IGZyb20gJy4vRE9NSGVscGVycy5qcyc7XG5cbi8vIERpc3BsYXkgZm9yIGluaXRpYWx6aWluZyBhIHBsYXllclxuZXhwb3J0IGNsYXNzIFNldFBsYXllciB7XG4gICAgY29uc3RydWN0b3Ioc2l6ZSwgcGllY2VzKSB7XG4gICAgICAgIHRoaXMuU0laRSA9IHNpemU7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gYnVpbGRTZXRQbGF5ZXIoc2l6ZSwgcGllY2VzKTtcbiAgICAgICAgdGhpcy5iaW5kVHJheSgpO1xuICAgICAgICB0aGlzLmRyYWdFdmVudCA9IHtcbiAgICAgICAgICAgIGRyYWdPdmVyOiBudWxsLFxuICAgICAgICAgICAgZHJhZ0dyb3VwOiBbXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldEl0ZW0gPSBbXTtcbiAgICAgICAgdGhpcy5kcmFnUGlja1VwU3RhcnRIYW5kbGVyID0gdGhpcy5kcmFnUGlja1VwU3RhcnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmFnTW92ZUhhbmRsZXIgPSB0aGlzLmRyYWdNb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhZ0VuZEhhbmRsZXIgPSB0aGlzLmRyYWdFbmQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBiaW5kVHJheSgpIHtcbiAgICAgICAgdGhpcy5nZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yQWxsKCcuaWNvbi1waWVjZScpLmZvckVhY2goaWNvbiA9PiB7XG4gICAgICAgICAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB0aGlzLmRyYWdTdGFydChlKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldENvbnRhaW5lcigpIHsgcmV0dXJuIHRoaXMuY29udGFpbmVyOyB9XG4gICAgZ2V0R3JpZCgpIHsgcmV0dXJuIHRoaXMuZ2V0Q29udGFpbmVyKCkucXVlcnlTZWxlY3RvcignLmdyaWQtYm94Jyk7IH1cbiAgICBnZXRUcmF5KCkgeyByZXR1cm4gdGhpcy5nZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yKCcuc2V0LXRyYXknKTsgfVxuICAgIGdldEJ1dHRvbigpIHsgcmV0dXJuIHRoaXMuZ2V0Q29udGFpbmVyKCkucXVlcnlTZWxlY3RvcignI3N1Ym1pdC1idG4nKTsgfVxuICAgIGdldE11bHRpKCkgeyByZXR1cm4gdGhpcy5nZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LWNoaycpLmNoZWNrZWQgfVxuICAgIGdldERhdGEoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBtdWx0aTogdGhpcy5nZXRNdWx0aSgpLFxuICAgICAgICAgICAgYm9hcmQ6IFtdXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRJdGVtLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhZGQgPSBbXTtcbiAgICAgICAgICAgIGFkZC5wdXNoKGl0ZW0uc2l6ZSk7XG4gICAgICAgICAgICBhZGQucHVzaChpdGVtLmhlYWQpO1xuICAgICAgICAgICAgYWRkLnB1c2goaXRlbS5zZXRZKTtcbiAgICAgICAgICAgIGRhdGEuYm9hcmQucHVzaChhZGQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgLy8gYXBwZW5kIHNldHBsYXllciB0byBtYWluIGNvbnRhaW5lciwgc2V0cyBpbml0aWFsIGhlaWdodCBvZiBhbGwgaWNvbiBjZWxsc1xuICAgIC8vIGJpbmRzIHdpbmRvdyByZXNpemluZyB0byByZXNpemUgaWNvbnMgdG8gbWF0Y2ggZ3JpZCBzaXplXG4gICAgZGlzcGxheSgpIHsgXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKHRoaXMuZ2V0Q29udGFpbmVyKCkpOyBcbiAgICAgICAgdGhpcy5zZXRUcmF5SWNvblNpemUoKVxuICAgICAgICB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkLWJveCcpLmNoaWxkcmVuLml0ZW0oMTEpLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pY29uLWNlbGwnKS5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIGNsZWFyIHNldHBsYXllclxuICAgIHJlbW92ZSgpIHsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NldC1jb250YWluZXInKS5yZW1vdmUoKTsgfVxuXG4gICAgLy8gc2V0IHRoZSBpY29uJ3MgY2VsbCBzaXplIHRvIG1hdGNoIHRoZSBncmlkJ3MgY2VsbCBzaXplXG4gICAgc2V0VHJheUljb25TaXplKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaWNvbi1jZWxsJykuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgIGNlbGwuc3R5bGUuaGVpZ2h0ID0gdGhpcy5HZXRUcmF5SWNvblNpemUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgR2V0VHJheUljb25TaXplKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5nZXRHcmlkKCkuY2hpbGRyZW4uaXRlbShhZGp1c3RUb0luZGV4KDAsIHRoaXMuU0laRSkpLmNsaWVudEhlaWdodH1weGA7XG4gICAgfVxuXG4gICAgLy8gQWxsIGRyYWcvZHJvcCBhY3Rpb25zIHRvIGZvbGxvd1xuICAgIC8vIGNyZWF0ZXMgYW5kIGFwcGVuZHMgZHJhZ2dlZCBpY29uLCBzZXRzIGRyYWcgYmluZGluZ3NcbiAgICBkcmFnU3RhcnQoZSkge1xuICAgICAgICBjb25zdCBpY29uID0gKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaWNvbi1jZWxsJykpID8gZS50YXJnZXQucGFyZW50Tm9kZSA6IGUudGFyZ2V0O1xuICAgICAgICBpZiAoaWNvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2ljb24tZGlzYWJsZScpKSB7IHJldHVybiB9XG4gICAgICAgIGNvbnN0IGRyYWdJY29uID0gbWFrZURyYWdJY29uKFxuICAgICAgICAgICAgTnVtYmVyKGljb24uZGF0YXNldC5zaXplKSxcbiAgICAgICAgICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9nZ2xlLWJvZHknKS5kYXRhc2V0LnkgPT09ICd0cnVlJyksXG4gICAgICAgICAgICBpY29uLmRhdGFzZXQudHJheSxcbiAgICAgICAgICAgIHRoaXMuR2V0VHJheUljb25TaXplKClcbiAgICAgICAgICAgICk7XG4gICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnaWNvbi1kaXNhYmxlJyk7XG4gICAgICAgIGljb24uYXBwZW5kQ2hpbGQoZHJhZ0ljb24pO1xuICAgICAgICBjb25zdCBvZmZzZXQgPSAoZHJhZ0ljb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdkcmFnLXknKSlcbiAgICAgICAgICAgID8gdGhpcy5nZXRZb2Zmc2V0KGRyYWdJY29uLCBlLmNsaWVudFggLSBkcmFnSWNvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KVxuICAgICAgICAgICAgOiAwO1xuICAgICAgICBpZiAoIWRyYWdJY29uLmNsYXNzTGlzdC5jb250YWlucygnZHJhZy15JykpIHsgXG4gICAgICAgICAgICB0aGlzLnNldFhBdHRyaWJ1dGUoZHJhZ0ljb24sIGUuY2xpZW50WCAtIGRyYWdJY29uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQpOyBcbiAgICAgICAgfTtcbiAgICAgICAgRHJhZ0VsZW1lbnQoZHJhZ0ljb24sIGUuY2xpZW50WCAtIG9mZnNldCwgZS5jbGllbnRZKTsgXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmRyYWdFbmRIYW5kbGVyKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGFpbmVyJykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5kcmFnTW92ZUhhbmRsZXIsIHRydWUpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5kcmFnRW5kSGFuZGxlciwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgZHJhZ1BpY2tVcFN0YXJ0KGUpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgd2hpbGUgKHRoaXMuc2V0SXRlbVtpbmRleF0udHJheSAhPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC5nZXR0cmF5KSkgeyBpbmRleCsrOyB9XG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IHRoaXMuc2V0SXRlbVtpbmRleF07XG4gICAgICAgIGNvbnN0IGRyYWdJdGVtID0gbWFrZURyYWdJY29uKFxuICAgICAgICAgICAgc2VsZWN0LnNpemUsXG4gICAgICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZ2dsZS1ib2R5JykuZGF0YXNldC55ID09PSAndHJ1ZScpLFxuICAgICAgICAgICAgc2VsZWN0LnRyYXksXG4gICAgICAgICAgICB0aGlzLkdldFRyYXlJY29uU2l6ZSgpXG4gICAgICAgIClcbiAgICAgICAgZS50YXJnZXQuYXBwZW5kQ2hpbGQoZHJhZ0l0ZW0pO1xuICAgICAgICB0aGlzLmNvbmZpZ1BpY2tVcChkcmFnSXRlbSwgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2dnbGUtYm9keScpLmRhdGFzZXQueSA9PT0gJ3RydWUnKSk7XG4gICAgICAgIERyYWdFbGVtZW50KGRyYWdJdGVtLCBlLmNsaWVudFgsIGUuY2xpZW50WSk7XG4gICAgICAgIHRoaXMucmVtb3ZlUGxhY2VkKHNlbGVjdC5oZWFkLCBzZWxlY3Quc2l6ZSwgc2VsZWN0LnNldFkpO1xuICAgICAgICB0aGlzLnNldEl0ZW0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGFpbmVyJykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMuZHJhZ0VuZEhhbmRsZXIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmRyYWdNb3ZlSGFuZGxlciwgdHJ1ZSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmRyYWdFbmRIYW5kbGVyLCB0cnVlKTtcblxuICAgICAgICB0aGlzLmdldEJ1dHRvbigpLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBDb25maWd1cmUgcG9zaXRpb24gYW5kIGRhdGEgYXR0cmlidXRlcyB3aGVuIHBpY2tpbmcgdXAgZnJvbSB0aGUgYm9hcmRcbiAgICBjb25maWdQaWNrVXAoZWxlbWVudCwgaXNZKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gJzBweCc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgICAgICB0aGlzLnNldFhBdHRyaWJ1dGUoZWxlbWVudCwgMCk7XG4gICAgfVxuXG4gICAgLy8gY2xlYXJzIGFsbCBjZWxscyBvZiBwbGFjZWQgb2JqZWN0J3MgYmluZGluZ3NcbiAgICByZW1vdmVQbGFjZWQoaGVhZEluZGV4LCBsZW5ndGgsIGlzWSkge1xuICAgICAgICBsZXQgY2VsbCA9IHRoaXMuZ2V0R3JpZCgpLmNoaWxkcmVuLml0ZW0oYWRqdXN0VG9JbmRleChoZWFkSW5kZXgsIHRoaXMuU0laRSkpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3NldCcpO1xuICAgICAgICAgICAgY2VsbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtZ2V0dHJheScpO1xuICAgICAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmRyYWdQaWNrVXBTdGFydEhhbmRsZXIsIHRydWUpO1xuICAgICAgICAgICAgY29uc3QgbmV4dENlbGwgPSAoaXNZKSBcbiAgICAgICAgICAgICAgICA/IE51bWJlcihjZWxsLmRhdGFzZXQuaW5kZXgpICsgdGhpcy5TSVpFIFxuICAgICAgICAgICAgICAgIDogTnVtYmVyKGNlbGwuZGF0YXNldC5pbmRleCkgKyAxO1xuICAgICAgICAgICAgY2VsbCA9IHRoaXMuZ2V0R3JpZCgpLmNoaWxkcmVuLml0ZW0oYWRqdXN0VG9JbmRleChuZXh0Q2VsbCwgdGhpcy5TSVpFKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRYQXR0cmlidXRlKGVsZW1lbnQsIHhQb3MpIHtcbiAgICAgICAgY29uc3QgbGVmdCA9IE1hdGguZmxvb3IoeFBvcyAvIGVsZW1lbnQuZmlyc3RDaGlsZC5jbGllbnRXaWR0aCk7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWxlZnQnLCBsZWZ0KTtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcmlnaHQnLCBlbGVtZW50LmNoaWxkRWxlbWVudENvdW50IC0gbGVmdCAtIDEpO1xuICAgIH1cblxuICAgIGdldFlvZmZzZXQoZWxlbWVudCwgeFBvcykge1xuICAgICAgICBjb25zdCBvZmZzZXQgPSB4UG9zIC0gKGVsZW1lbnQuY2xpZW50V2lkdGggLyAyKVxuICAgICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSBgJHtvZmZzZXR9cHhgO1xuICAgICAgICByZXR1cm4gb2Zmc2V0O1xuICAgIH1cblxuICAgIC8vIG9uIGRyYWcgaW52ZXN0aWdhdGUgaWYgZWxlbWVudCBiZWxvdyBjdXJzb3IgaXMgYSB2YWxpZCBob3ZlciB0YXJnZXRcbiAgICAvLyBhbmQgYWRqdXN0IGRpc3BsYXllZCBob3ZlciB0YXJnZXRzXG4gICAgZHJhZ01vdmUoZSkge1xuICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcmFnZ2VkJyk7XG4gICAgICAgIGljb24uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICBsZXQgYmVsb3cgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGUuY2xpZW50WCwgZS5jbGllbnRZKTtcbiAgICAgICAgaWNvbi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICBpZiAoYmVsb3cuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RhYmxlJykgXG4gICAgICAgICAgICAmJiB0aGlzLmRyYWdFdmVudC5kcmFnT3ZlciAhPSBiZWxvdykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJIb3ZlcigpO1xuICAgICAgICAgICAgICAgIGlmIChpY29uLmNsYXNzTGlzdC5jb250YWlucygnZHJhZy15JykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRIb3ZlclkoXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWxvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb24uY2hpbGRFbGVtZW50Q291bnQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SG92ZXJYKFxuICAgICAgICAgICAgICAgICAgICAgICAgYmVsb3csIFxuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGljb24uZGF0YXNldC5sZWZ0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihpY29uLmRhdGFzZXQucmlnaHQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIWJlbG93LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0YWJsZScpKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFySG92ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZ1bmN0aW9uIHRvIGNsZWFyIGRyYWdnZWQgYWN0aW9uc1xuICAgIGRyYWdFbmQoZSkge1xuICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHZhbGlkU2V0ID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgZHJhZ0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHJhZ2dlZCcpO1xuICAgICAgICBpZiAoZHJhZ0l0ZW0uY2hpbGRFbGVtZW50Q291bnQgPT09IHRoaXMuZHJhZ0V2ZW50LmRyYWdHcm91cC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhZ0V2ZW50LmRyYWdHcm91cC5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2V0JykpIHsgdmFsaWRTZXQgPSBmYWxzZTt9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgeyB2YWxpZFNldCA9IGZhbHNlOyB9XG4gICAgICAgIGlmICh2YWxpZFNldCkge1xuICAgICAgICAgICAgdGhpcy5kcmFnRXZlbnQuZHJhZ0dyb3VwLmZvckVhY2goY2VsbCA9PiB7IFxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2V0Jyk7IFxuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLWdldHRyYXknLCBkcmFnSXRlbS5kYXRhc2V0LnRyYXkpO1xuICAgICAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5kcmFnUGlja1VwU3RhcnRIYW5kbGVyLCB0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5zZXRJdGVtLnB1c2goe1xuICAgICAgICAgICAgICAgIHRyYXk6IE51bWJlcihkcmFnSXRlbS5kYXRhc2V0LnRyYXkpLFxuICAgICAgICAgICAgICAgIGhlYWQ6IChkcmFnSXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2RyYWcteScpKSBcbiAgICAgICAgICAgICAgICAgICAgPyBOdW1iZXIodGhpcy5kcmFnRXZlbnQuZHJhZ0dyb3VwWzBdLmRhdGFzZXQuaW5kZXgpIFxuICAgICAgICAgICAgICAgICAgICA6IE51bWJlcih0aGlzLmRyYWdFdmVudC5kcmFnR3JvdXBbMF0uZGF0YXNldC5pbmRleCAtIGRyYWdJdGVtLmRhdGFzZXQubGVmdCksXG4gICAgICAgICAgICAgICAgc2V0WTogZHJhZ0l0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdkcmFnLXknKSxcbiAgICAgICAgICAgICAgICBzaXplOiBkcmFnSXRlbS5jaGlsZEVsZW1lbnRDb3VudFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXQtdHJheScpXG4gICAgICAgICAgICAuY2hpbGRyZW4uaXRlbShOdW1iZXIoZHJhZ0l0ZW0uZGF0YXNldC50cmF5KSlcbiAgICAgICAgICAgIC5maXJzdENoaWxkLmNsYXNzTGlzdFxuICAgICAgICAgICAgLnJlbW92ZSgnaWNvbi1kaXNhYmxlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5nZXRUcmF5KCkuY2hpbGRFbGVtZW50Q291bnQgPT09IHRoaXMuc2V0SXRlbS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0QnV0dG9uKCkuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0QnV0dG9uKCkuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RyYWdnZWQnKS5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5jbGVhckhvdmVyKCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRhaW5lcicpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmRyYWdFbmRIYW5kbGVyKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGFpbmVyJykucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5kcmFnTW92ZUhhbmRsZXIsIHRydWUpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250YWluZXInKS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5kcmFnRW5kSGFuZGxlciwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIGFkZGluZyBob3ZlciBldmVudFxuICAgIHNldEhvdmVyWChjZWxsLCBsZWZ0LCByaWdodCkgeyAgXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcbiAgICAgICAgdGhpcy5kcmFnRXZlbnQuZHJhZ092ZXIgPSBjZWxsOyAgICAgICAgXG4gICAgICAgIHRoaXMuZHJhZ0V2ZW50LmRyYWdHcm91cC5wdXNoKGNlbGwpO1xuICAgICAgICB0aGlzLmhvdmVyU2libGluZ3MoY2VsbCwgbGVmdCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuaG92ZXJTaWJsaW5ncyhjZWxsLCByaWdodCwgZmFsc2UpOyAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIH1cblxuICAgIHNldEhvdmVyWShyb290LCBudW1TaWIpIHtcbiAgICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkLWJveCcpO1xuICAgICAgICBsZXQgaW5kZXggPSBOdW1iZXIocm9vdC5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgbGV0IHRvQWRkID0gcm9vdDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1TaWI7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRvQWRkKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBOdW1iZXIodG9BZGQuZGF0YXNldC5pbmRleCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnRXZlbnQuZHJhZ0dyb3VwLnB1c2godG9BZGQpO1xuICAgICAgICAgICAgICAgIHRvQWRkLmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XG4gICAgICAgICAgICAgICAgdG9BZGQgPSBncmlkLmNoaWxkcmVuLml0ZW0oYWRqdXN0VG9JbmRleChpbmRleCArIHRoaXMuU0laRSwgdGhpcy5TSVpFKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGhpZ2hsaWdodCB0aGUgY29ycmVjdCBuZWlnaGJvcmluZyBzaWJsaW5ncyBvbiBob3ZlclxuICAgIGhvdmVyU2libGluZ3Mocm9vdCwgbnVtU2liLCBsZWZ0KSB7XG4gICAgICAgIGxldCB0b0FkZCA9IHJvb3Q7XG4gICAgICAgIGxldCBpbmRleCA9IE51bWJlcihyb290LmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKGluZGV4IC8gdGhpcy5TSVpFKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1TaWI7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2hlY2sgPSAobGVmdCkgPyAoKGluZGV4IC0gKGkgKyAxKSkgLyB0aGlzLlNJWkUpIDogKChpbmRleCArIChpICsgMSkpIC8gdGhpcy5TSVpFKTtcbiAgICAgICAgICAgIGlmIChyb3cgPT09IE1hdGguZmxvb3IoY2hlY2spKSB7XG4gICAgICAgICAgICAgICAgdG9BZGQgPSAobGVmdCkgPyB0b0FkZC5wcmV2aW91c1NpYmxpbmcgOiB0b0FkZC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICB0b0FkZC5jbGFzc0xpc3QuYWRkKCdob3ZlcicpOyBcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdFdmVudC5kcmFnR3JvdXAucHVzaCh0b0FkZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZXNldHMgc2V0IGhvdmVyIGFjdGlvbnNcbiAgICBjbGVhckhvdmVyKCkge1xuICAgICAgICB0aGlzLmRyYWdFdmVudC5kcmFnT3ZlciA9IG51bGw7XG4gICAgICAgIHRoaXMuZHJhZ0V2ZW50LmRyYWdHcm91cC5mb3JFYWNoKGNlbGwgPT4gY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpKTtcbiAgICAgICAgdGhpcy5kcmFnRXZlbnQuZHJhZ0dyb3VwLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgXG59IiwiLy8gYmFzaWMgdW5pdCB1c2VkIGluIGdhbWUsIG11c3QgcGFzcyBpbnRlZ2VyIHZhbHVlIHRvIGRldGVybWluZSBzaXplXG5cbmV4cG9ydCBjbGFzcyBTaGlwIHtcbiAgICAvLyB0ZXN0cyB0byBlbnN1cmUgdmFsdWUgaXMgYW4gaW50ZWdlciBudW1iZXIgb3ZlciAwXG4gICAgY29uc3RydWN0b3Ioc2l6ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHNpemUgIT0gJ251bWJlcicpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcigndmFsdWUgbXVzdCBiZSBOdW1iZXInKSB9O1xuICAgICAgICBpZiAoc2l6ZSA8PSAwKSB7IHRocm93IG5ldyBSYW5nZUVycm9yKCdWYWx1ZSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwJykgfTtcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKHNpemUpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ09ubHkgaW50ZWdlciB2YWx1ZXMnKSB9O1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICB0aGlzLmhpdHMgPSAwO1xuICAgIH1cblxuICAgIGdldEhpdHMoKSB7IHJldHVybiB0aGlzLmhpdHM7IH1cblxuICAgIC8vIGluY3JlYXNlcyBzaGlwcyBoaXQgdmFsdWVcbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMuaGl0cyArPSAxO1xuICAgIH1cblxuICAgIC8vIGRldGVybWluZXMgdGhlIHN0YXRlIG9mIHRoZSBzaGlwXG4gICAgaXNTdW5rKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oaXRzID49IHRoaXMuc2l6ZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgaW5pdGlhbGl6ZURPTSB9IGZyb20gXCIuL0RPTUNvbnRyb2wuanNcIjtcbmltcG9ydCB7IFNldFBsYXllciB9IGZyb20gXCIuL1NldFBsYXllci5qc1wiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9QbGF5ZXIuanMnO1xuXG5leHBvcnQgY2xhc3MgR2FtZUNvbnRyb2wge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLlNJWkUgPSAxMDtcbiAgICAgICAgdGhpcy5wbGF5ZXIxID0gbnVsbDtcbiAgICAgICAgdGhpcy5wbGF5ZXIyID0gbnVsbDtcbiAgICAgICAgdGhpcy5tdWx0aXBsYXllciA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNlbGVjdE1vdmUgPSBudWxsO1xuICAgICAgICB0aGlzLnR1cm5OdW1iZXIgPSAwO1xuICAgIH1cblxuICAgIC8vIGJlZ2luIHRoZSBnYW1lbG9vcFxuICAgIHN0YXJ0R2FtZSgpIHtcbiAgICAgICAgaW5pdGlhbGl6ZURPTSgpO1xuICAgICAgICB0aGlzLmNyZWF0ZVBsYXllcigpO1xuICAgICAgICBcbiAgICAgICAgLy8gaW5pdGlhbGl6ZURPTSgpO1xuXG4gICAgICAgIC8vIHRoaXMuZHVtbXlTZXRQbGF5ZXIoKTtcbiAgICAgICAgLy8gY29uc3QgYm9hcmQgPSB0aGlzLmdldFBsYXllcigpLmdldERpc3BsYXkoKTtcbiAgICAgICAgLy8gaWYgKHRoaXMubXVsdGlwbGF5ZXIpIHtcbiAgICAgICAgLy8gICAgIGJvYXJkLmNyZWF0ZVR1cm5Db3Zlcih0aGlzLmdldFBsYXllcigpXG4gICAgICAgIC8vICAgICAgICAgLmdldE5hbWUoKSlcbiAgICAgICAgLy8gICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gYm9hcmQuY2xlYXJUdXJuQ292ZXIoKSk7XG4gICAgICAgIC8vIH07XG4gICAgICAgIC8vIGJvYXJkLmRpc3BsYXlCb2FyZCgpO1xuICAgIH1cblxuICAgIGNyZWF0ZVBsYXllcigpIHtcbiAgICAgICAgY29uc3Qgc2V0UGxheWVyID0gbmV3IFNldFBsYXllcigxMCwgWzUsIDQsIDMsIDMsIDJdKTtcbiAgICAgICAgc2V0UGxheWVyLmdldEJ1dHRvbigpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBzZXRQbGF5ZXIuZ2V0RGF0YSgpO1xuICAgICAgICAgICAgc2V0UGxheWVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyMSkgeyBcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcjIgPSBuZXcgUGxheWVyKCdwbGF5ZXIyJywgZGF0YS5ib2FyZCk7XG4gICAgICAgICAgICAgICAgY29uc3QgYm9hcmQgPSB0aGlzLmdldFBsYXllcigpLmdldERpc3BsYXkoKTtcbiAgICAgICAgICAgICAgICBib2FyZC5jcmVhdGVUdXJuQ292ZXIodGhpcy5nZXRQbGF5ZXIoKVxuICAgICAgICAgICAgICAgIC5nZXROYW1lKCkpXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGJvYXJkLmNsZWFyVHVybkNvdmVyKCkpO1xuICAgICAgICAgICAgICAgIGJvYXJkLmRpc3BsYXlCb2FyZCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLm11bHRpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIxID0gbmV3IFBsYXllcigncGxheWVyMScsIGRhdGEuYm9hcmQpO1xuICAgICAgICAgICAgICAgIHRoaXMuYmluZEJvYXJkKHRoaXMucGxheWVyMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllciA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVQbGF5ZXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIxID0gbmV3IFBsYXllcigncGxheWVyMScsIGRhdGEuYm9hcmQpO1xuICAgICAgICAgICAgICAgIHRoaXMuYmluZEJvYXJkKHRoaXMucGxheWVyMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kdW1teVNldFBsYXllcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVyKCkuZ2V0RGlzcGxheSgpLmRpc3BsYXlCb2FyZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc2V0UGxheWVyLmRpc3BsYXkoKTtcbiAgICB9XG5cbiAgICAvLyB0ZXN0aW5nIHZhbHVlc1xuICAgIGR1bW15U2V0UGxheWVyKCkge1xuICAgICAgICBjb25zdCBkdW1teTEgPSBbXG4gICAgICAgICAgICBbNSwgMjUsIHRydWVdLFxuICAgICAgICAgICAgWzQsIDgzLCBmYWxzZV0sXG4gICAgICAgICAgICBbMywgMCwgZmFsc2VdLFxuICAgICAgICAgICAgWzMsIDUxLCB0cnVlXSxcbiAgICAgICAgICAgIFsyLCA0OCwgZmFsc2VdXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IGR1bW15MiA9IFtcbiAgICAgICAgICAgIFs1LCA5NSwgZmFsc2VdLFxuICAgICAgICAgICAgWzQsIDE2LCBmYWxzZV0sXG4gICAgICAgICAgICBbMywgNTMsIGZhbHNlXSxcbiAgICAgICAgICAgIFszLCA2OCwgdHJ1ZV0sXG4gICAgICAgICAgICBbMiwgMTIsIHRydWVdXG4gICAgICAgIF1cbiAgICAgICAgLy8gdGhpcy5wbGF5ZXIxID0gbmV3IFBsYXllcigncGxheWVyMScsIGR1bW15MSk7XG4gICAgICAgIC8vIHRoaXMuYmluZEJvYXJkKHRoaXMucGxheWVyMSk7XG4gICAgICAgIHRoaXMucGxheWVyMiA9IG5ldyBQbGF5ZXIoJ3BsYXllcjInLCBkdW1teTIpO1xuICAgICAgICB0aGlzLmJpbmRCb2FyZCh0aGlzLnBsYXllcjIpXG4gICAgfVxuXG4gICAgLy8gRGV0ZXJtaW5lIHRoZSBhY3RpdmUgcGxheWVyXG4gICAgZ2V0UGxheWVyKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMudHVybk51bWJlciAlIDIgPT09IDApID8gdGhpcy5wbGF5ZXIxIDogdGhpcy5wbGF5ZXIyOyBcbiAgICB9XG5cbiAgICAvLyBEZXRlcm1pbmUgdGhlIGN1cnJlbnQgbm9uIHBsYXllclxuICAgIGdldEFkdmVyc2FyeSgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnR1cm5OdW1iZXIgJSAyID09PSAwKSA/IHRoaXMucGxheWVyMiA6IHRoaXMucGxheWVyMTtcbiAgICB9XG5cbiAgICAvLyBiaW5kaW5ncyBmb3IgcGxheSBhcmVhXG4gICAgYmluZEJvYXJkKHBsYXllcikge1xuICAgICAgICBjb25zdCBkaXNwbGF5ID0gcGxheWVyLmdldERpc3BsYXkoKTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gcGxheWVyLmdldERpc3BsYXkoKS5nZXRCdXR0b24oKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGJpbmQgY2xpY2thYmxlIGNlbGxzXG4gICAgICAgIGRpc3BsYXkuZ2V0UGxheSgpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuLWNlbGwnKSkgeyByZXR1cm4gfTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdE1vdmUpIHsgZGlzcGxheS50b2dnbGVTZWxlY3RlZCh0aGlzLnNlbGVjdE1vdmUpOyB9XG4gICAgICAgICAgICBkaXNwbGF5LnRvZ2dsZVNlbGVjdGVkKGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RNb3ZlID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICAgICAgZGlzcGxheS5zZXRCdXR0b24oZS50YXJnZXQuZGF0YXNldC5pbmRleCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGJpbmQgYXR0YWNrIGJ1dHRvblxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZGlzcGxheS5zZXRCdXR0b24oKTtcbiAgICAgICAgICAgIHRoaXMudGFrZVR1cm4oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gRnVuY3Rpb24gZm9yIGFjdGlvbiBidXR0b24sIHRha2VzIGEgcGxheWVyIHNlbGVjdGVkIHR1cm5cbiAgICB0YWtlVHVybigpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5nZXRBZHZlcnNhcnkoKS50YWtlSGl0KHRoaXMuc2VsZWN0TW92ZSk7XG4gICAgICAgIHRoaXMuZ2V0UGxheWVyKCkuZ2V0RGlzcGxheSgpLnVwZGF0ZVBsYXkodGhpcy5zZWxlY3RNb3ZlLCByZXN1bHQpO1xuICAgICAgICBpZiAodGhpcy5nZXRBZHZlcnNhcnkoKS5pc0RlZmVhdGVkKCkpIHsgXG4gICAgICAgICAgICB0aGlzLmdldFBsYXllcigpXG4gICAgICAgICAgICAgICAgLmdldERpc3BsYXkoKVxuICAgICAgICAgICAgICAgIC5jcmVhdGVHYW1lT3ZlcignWU9VIFdJTiEnKVxuICAgICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVyKCkuZ2V0RGlzcGxheSgpLnJlbW92ZUJvYXJkKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRHYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XG4gICAgICAgICAgICB9KTsgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5tdWx0aXBsYXllcikgeyB0aGlzLnN3aXRjaFR1cm4ocmVzdWx0KTsgfVxuICAgICAgICBlbHNlIHsgdGhpcy5jcHVUdXJuKCk7IH1cbiAgICB9XG5cbiAgICAvLyBSZW5kZXJzIG1vdmUgdGFrZW4gb24gcGxheWVyIGFuZCByZXNldCBzZWxlY3RNb3ZlXG4gICAgc3RhcnRUdXJuKHJlc3VsdCkge1xuICAgICAgICB0aGlzLmdldFBsYXllcigpLmdldERpc3BsYXkoKS51cGRhdGVTdGF0dXModGhpcy5zZWxlY3RNb3ZlLCByZXN1bHQpO1xuICAgICAgICB0aGlzLnNlbGVjdE1vdmUgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFByZXBhcmVzIHRoZSBwbGF5IGFyZWEgdG8gZXhjaGFuZ2UgcGxheWVyc1xuICAgIHN3aXRjaFR1cm4ocmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gdGhpcy5nZXRBZHZlcnNhcnkoKS5nZXREaXNwbGF5KCk7XG4gICAgICAgIGJvYXJkLmNyZWF0ZVR1cm5Db3Zlcih0aGlzLmdldEFkdmVyc2FyeSgpXG4gICAgICAgIC5nZXROYW1lKCkpXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBib2FyZC5jbGVhclR1cm5Db3ZlcigpO1xuICAgICAgICAgICAgdGhpcy5zdGFydFR1cm4ocmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJvYXJkLmRpc3BsYXlCb2FyZCgpO1xuICAgICAgICB0aGlzLmdldEFkdmVyc2FyeSgpLmdldERpc3BsYXkoKS5yZW1vdmVCb2FyZCgpO1xuICAgICAgICB0aGlzLnR1cm5OdW1iZXIrKztcbiAgICB9XG5cbiAgICAvLyBTaW11bGF0ZSBhbiBhZHZlcnNhcnkncyB0dXJuXG4gICAgY3B1VHVybigpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RNb3ZlID0gdGhpcy5nZXRQbGF5ZXIoKS5jcHVUdXJuKCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZ2V0UGxheWVyKCkudGFrZUhpdCh0aGlzLnNlbGVjdE1vdmUpO1xuICAgICAgICBpZiAodGhpcy5nZXRQbGF5ZXIoKS5pc0RlZmVhdGVkKCkpIHsgXG4gICAgICAgICAgICB0aGlzLmdldFBsYXllcigpLmdldERpc3BsYXkoKS5jcmVhdGVHYW1lT3ZlcignWU9VIExPU0UhJyk7IFxuICAgICAgICB9IGVsc2UgeyB0aGlzLnN0YXJ0VHVybihyZXN1bHQpOyB9XG4gICAgfVxuXG4gICAgLy8gY2xlYXIgYWxsIHZhcmlhYmxlIHRvIGRlZmF1bHRcbiAgICByZXNldEdhbWUoKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllcjEgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIyID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0TW92ZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnR1cm5OdW1iZXIgPSAwO1xuICAgIH1cbn1cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge0dhbWVDb250cm9sfSBmcm9tICcuL2dhbWVDb250cm9sLmpzJztcblxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lQ29udHJvbCgpO1xuZ2FtZS5zdGFydEdhbWUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==