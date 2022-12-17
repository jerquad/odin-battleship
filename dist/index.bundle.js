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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --main-bg: rgb(167, 171, 175);\n    --bg-grid: black;\n    --bg-cell: rgb(172, 239, 241);\n    --font-guide-lg: 1.5rem;\n    --font-guide-sm: .7rem;\n    --gap-lg: 3px;\n    --gap-sm: 2px;\n    --button-fg-disable: grey;\n    --button-fg-normal: black;\n    --button-bg-disable: darkgrey;\n    --button-bg-normal: white;\n    --button-font-size: 2rem;\n    --board-hit: darkred;\n    --board-hover: aqua;\n    --board-miss: grey;\n    --board-selected: yellow;\n    --board-ship: green;\n    --side-size: 10;\n    --check-outter: rgb(215, 244, 252);\n    --check-inner: rgb(252, 210, 132);\n    --head-bg: rgb(235, 230, 230);\n    --toggle: rgb(255, 187, 0);\n}\n\nhtml,\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n    margin: 0;\n    height: 100vh;\n    /* min-height: 100vh; */\n    width: 100vw;\n}\n\nbutton {\n    background-color: var(--button-bg-normal);\n    color: var(--button-fg-normal);\n    border: 5px solid var(--button-fg-normal);\n    font-size: var(--button-font-size);\n    width: 100%;\n}\n\nbutton:disabled {\n    background-color: var(--button-bg-disable);\n    color: var(--button-fg-disable);\n    border-color: var(--button-fg-disable);\n}\n\n#main-container {\n    background-color: var(--main-bg);\n    height: 100%;\n    width: 100%;\n    box-sizing: border-box;\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    margin: 0;\n}\n\n#header,\n#footer {\n    max-height: 100px;\n    background-color: var(--head-bg);\n    display: flex;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n}\n\n#header {\n    align-self: flex-start;\n    min-height: min-content;\n    grid-row: 1 / 2;\n    padding: 0 2rem;\n}\n\n#header > h1 {\n    font-family: 'Bungee Shade', sans-serif;\n    color: rgb(179, 116, 0);\n    font-size: 3rem;\n    margin: 0;\n}\n\n#footer {\n    align-self: flex-end;\n    color:rgb(148, 147, 147);\n    justify-content: center;\n    grid-row: 3/ 4;\n}\n\n/* styling for all grid displays */\n.grid-box {\n    font-size: var(--font-guide-lg);\n    aspect-ratio: 1 / 1;\n    background-color: var(--bg-grid);\n    display: grid;\n    grid-template-columns: repeat(var(--side-size), 1fr);\n    gap: var(--gap-lg);\n}\n\n.grid-box > div {\n    padding: 0;\n    position: relative;\n    user-select: none;\n    background-color: var(--bg-cell);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#set-container > .grid-box > div{\n    width: 2rem;\n    height: 2rem;\n}\n\n.guide-top,\n.guide-corner {\n    margin-bottom: calc(var(--gap-lg) * .66);\n}\n\n.guide-left,\n.guide-corner {\n    margin-right: calc(var(--gap-lg) * .66);\n}\n\n.guide-corner {\n    background-color: var(--bg-grid) !important;\n}\n\n/* Styling for all grid icons */\n.ship {\n    background-color: var(--board-ship) !important;\n}\n\n.miss {\n    background-color: var(--board-miss) !important;\n}\n\n.hit {\n    background-color: var(--board-hit) !important;\n}\n\n.selected {\n    background-color: var(--board-selected) !important;\n}\n\n.hover {\n    background-color: yellow !important;\n}\n\n.set {\n    background-color: green !important;\n}\n\n.set.hover {\n    background-color: darkgrey !important;\n}\n\n/* Styling for notifications */\n.gameover-container,\n.turn-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n}\n\n.gameover-container {\n    background-color: transparent;\n}\n\n.turn-container {\n    background-color: var(--main-bg);\n}\n\n.gameover-content,\n.turn-content {\n    text-align: center;\n    background-color: var(--main-bg);\n    display: flex;\n    flex-direction: column;\n    padding: 2rem;\n}\n\n/* Styling for set display */\n#set-container {\n    justify-self: center;\n    grid-row: 2 / 3;\n    width: min-content;\n    display: flex;\n    flex-direction: column;\n    flex: 0 1 100%;\n    gap: .5rem;\n    margin: .5rem 0;\n}\n\n.set-tray {\n    background-color: lightgrey;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n\n}\n\n.tray-item {\n    position: relative;\n    display: grid;\n    justify-content:left;\n    align-items: center;\n    padding: 1rem;\n}\n\n.icon-piece {\n    position: relative;\n    grid-column: 1 / -1;\n    grid-row: 1 / -1;\n    border: var(--gap-sm) solid black;\n    background-color: black;\n    display: flex;\n    gap: var(--gap-sm);\n}\n\n.icon-piece.icon-disable>div:not(#dragged) {\n    background-color: grey !important;\n}\n\n.icon-cell {\n    background-color: var(--bg-cell);\n    aspect-ratio: 1 / 1;\n}\n\n.drag-cell {\n    opacity: 0.5;\n    background-color: grey;\n}\n\n#dragged {\n    z-index: 9;\n    opacity: 0.5;\n    position: absolute !important;\n}\n\n.drag-y {\n    flex-direction: column;\n}\n\n.toggle-rotate {\n    transform: rotate(90deg);\n}\n\n#toggle-bar {\n    width: min-content;\n    display: flex;\n    width: 100%;\n    gap: 1rem;\n}\n\n#toggle-container {\n    position: relative;\n}\n\n#toggle-text {\n    font-size: 2rem;\n    user-select: none;\n    position: absolute;\n    left: 50%;\n    top:  50%;\n    transform: translate(-50%, -50%);\n}\n\n\n#toggle-body {\n    transition: transform 0.25s;\n    position: relative;\n    height: 80px;\n    width: 80px;\n    background-color: var(--toggle);\n    /* border: 3px solid black; */\n    border-radius: 40px;\n}\n\n#toggle-body:after {\n    position: absolute;\n    height: 0;\n    width: 0;\n    top: 20px;\n    left: 70px;\n    content: '';\n    border: 20px solid transparent;\n    border-left-color: var(--toggle);\n}\n\n#inst-container {\n    width: 100%;\n    background-color: var(--head-bg);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 5px solid var(--button-fg-disable);\n}\n\n#inst-ul {\n    padding: 0;\n    margin: 0;\n    user-select: none;\n    font-family: 'Concert One', cursive;\n    color: var(--button-fg-disable);\n}\n\n#submit-bar {\n    display: flex;\n}\n\n#submit-bar button {\n    height: 100%;\n}\n\n#submit-bc {\n    width: 100%;\n}\n\n#submit-mc {\n    background-color: var(--check-inner);\n    font-family: 'Anton', sans-serif;\n    width: min-content;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    border: 5px solid black;\n}\n\n#submit-mc.is-multi {\n    background-color: var(--main-bg);\n}\n\n#submit-mc.is-multi > #submit-mc-2,\n#submit-mc.is-multi > #submit-mc-m {\n    background-color: var(--button-fg-disable);\n}\n\n#submit-mc-2,\n#submit-mc-m {\n    font-size: 1.25rem;\n    background-color: var(--check-outter);\n}\n\n#submit-mc-2 {\n    display: flex;\n    flex-direction: column;\n    padding: 3px 5px;\n    display: flex;\n    align-items: center;\n    grid-column: 1 / 2;\n    grid-row: 1 / 3;\n    line-height: 1.2;\n}\n\n#submit-mc-m {\n    padding: 5px;\n    line-height: 1;\n    grid-column: 2 / 3;\n    grid-row: 1 /2;\n}\n\n\n#submit-chk {\n    margin: 1rem;\n    height: 1.25rem;\n    width: 1.25rem;\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n}\n\n\n\n/* Styling for play displays */\n.play-container {\n    justify-self: center;\n    grid-row: 2 / 3;\n    margin: 0 .5rem;\n    width: min-content;\n    height: min-content;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr;\n    position: relative;\n    gap: 1rem;\n}\n\n.play-container > .grid-box.play-status > div{\n    transition: background-color .75s;\n    height: 1rem;\n    width: 1rem;\n}\n.play-container > .grid-box.play-area > div.hit {\n    transition: background-color 1s;\n}\n\n.play-container > .grid-box.play-area > div{\n    height: 2rem;\n    width: 2rem;\n}\n\n.play-status {\n    grid-row: 1 / 2;\n    font-size: var(--font-guide-sm);\n    aspect-ratio: 1 / 1;\n    width: min-content;\n    gap: var(--gap-sm);\n}\n\n.play-status .guide-left {\n    margin-right: calc(var(--gap-sm) * .66);\n}\n\n.play-status .guide-top {\n    margin-bottom: calc(var(--gap-sm) * .66);\n}\n\n.play-area {\n    font-size: var(--font-guide-lg);\n    aspect-ratio: 1 / 1;\n    width: 100%;\n    gap: var(--gap-lg);\n}\n\n.play-area > .open-cell:hover {\n    background-color: var(--board-hover) !important;\n}\n\n.play-button {\n    width: 100%;\n}\n\n@media (max-width: 390px) {\n    #set-container > .grid-box > div { \n        width: 1.5rem;\n        height: 1.5rem;\n    }\n}\n\n/* set configuration for thinner phones */\n\n/* mobile horizontal settings */\n@media (max-height: 450px) {\n    #header > h1 {\n        font-size: 2rem;\n    }\n    /* set settings */\n    #inst-ul {\n        font-size: .7rem;\n    }\n    #set-container > .grid-box > div{\n        font-size: 1rem;\n        width: 1.5rem;\n        height: 1.5rem;\n    }\n    #toggle-body {\n        height: 60px;\n        width: 60px;\n        border-radius: 30px;\n    }\n    #toggle-body:after {\n        top: 15px;\n        left: 50px;\n        border-width: 15px;\n    }\n    .tray-item {\n        padding: .5rem;\n    }\n\n}\n\n/* horizontal configuration */\n@media (min-width: 1050px) or (max-height: 650px) {\n    /* set settings */\n    #set-container {\n        display: grid;\n        grid-column: 1fr 1fr;\n        align-items: center;\n    }\n    #set-container > .grid-box {\n        grid-column: 1 / 2;\n        grid-row: 1 / 4;\n    }\n    .set-tray {\n        grid-row: 2 / 3;\n        grid-column: 2 / 3;\n    }\n    #toggle-bar {\n        height: min-content;\n        grid-row: 1 / 2;\n        grid-column: 2 / 3;\n    }\n    #toggle-container {\n        display: flex;\n        align-items: center;\n    }\n\n    /* play settings */\n    .play-container > .grid-box.play-status > div{\n        height: 1rem;\n        width: 1rem;\n    }\n    \n    .play-container > .grid-box.play-area > div{\n        height: 1.4rem;\n        width: 1.4rem;\n    }\n    .play-container {\n        justify-self: center;\n        max-width: 1000px;\n        display: grid;\n        grid-template-columns: 2fr 1fr;\n        grid-template-rows: 1fr;\n    }\n\n    .play-area {\n        grid-row: 1 / 3;\n        grid-column: 1 / 2;\n    }\n\n    .play-status {\n        grid-row: 1 / 2;\n        grid-column: 2 / 3;\n        width: 100%;\n    }\n\n}\n\n@media (min-width: 1050px) and (min-height: 651px) {\n    .play-button {\n        grid-row: 3 / 4;\n        grid-column: 1 / 2;\n    }\n}\n\n@media (max-height: 650px) {\n    .play-button {\n        font-size: 1.5rem;\n    }\n    \n    .play-button {\n        grid-row: 2 / 3;\n        grid-column: 2 / 3;\n    }\n}\n\n\n@media (min-width: 1050px) and (min-height: 651px) {\n    .play-container > .grid-box.play-status > div{\n        height: 1.5rem;\n        width: 1.5rem;\n    }\n    \n    .play-container > .grid-box.play-area > div{\n        height: 3rem;\n        width: 3rem;\n    }\n}\n\n/* mobile vertical settings */\n@media (max-width: 390px) and (max-height: 855px) {\n    #set-container > .grid-box > div{\n        font-size: 1rem;\n        width: 1.4rem;\n        height: 1.4rem;\n    }\n\n    #toggle-body {\n        height: 60px;\n        width: 60px;\n        border-radius: 30px;\n    }\n\n    #toggle-body:after {\n        top: 15px;\n        left: 50px;\n        border-width: 15px;\n    }\n\n    .tray-item {\n        padding: .5rem;\n    }\n\n    #header > h1 {\n        font-size: 2rem;\n    }\n    #inst-ul {\n        font-size: .7rem;\n    }\n\n    .play-container > .grid-box.play-status > div{\n        height: .9rem;\n        width: .9rem;\n    }\n    \n    .play-container > .grid-box.play-area > div{\n        height: 1.8rem;\n        width: 1.8rem;\n    }\n}\n\n\n\n/* set configuration for full screen */\n@media (min-width: 1050px) {\n    #set-container > .grid-box > div {\n        width: 3rem;\n        height: 3rem;\n    }\n\n    #inst-container { \n        padding: 1rem;\n    }\n\n    #submit-bar {\n        max-height: 100px;\n        grid-row: 3 / 4;\n        grid-column: 2 / 3;\n    }\n\n}\n\n/* Styling for wide views of play display \n@media (min-width: 570px) {\n    .play-container {\n        justify-self: center;\n        max-width: 1000px;\n        display: grid;\n        grid-template-columns: 2fr 1fr;\n        grid-template-rows: 1fr;\n    }\n\n    .play-area {\n        grid-row: 1 / 3;\n        grid-column: 1 / 2;\n    }\n\n    .play-status {\n        grid-row: 1 / 2;\n        grid-column: 2 / 3;\n        width: 100%;\n    }\n\n    .play-button {\n        grid-row: 3 / 4;\n        grid-column: 1 / 2;\n    }\n} */\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Anton&family=Bungee+Shade&family=Concert+One&display=swap');\n:root {\n    --main-bg: rgb(167, 171, 175);\n    --bg-grid: black;\n    --bg-cell: rgb(172, 239, 241);\n    --font-guide-lg: 1.5rem;\n    --font-guide-sm: .7rem;\n    --gap-lg: 3px;\n    --gap-sm: 2px;\n    --button-fg-disable: grey;\n    --button-fg-normal: black;\n    --button-bg-disable: darkgrey;\n    --button-bg-normal: white;\n    --button-font-size: 2rem;\n    --board-hit: darkred;\n    --board-hover: aqua;\n    --board-miss: grey;\n    --board-selected: yellow;\n    --board-ship: green;\n    --side-size: 10;\n    --check-outter: rgb(215, 244, 252);\n    --check-inner: rgb(252, 210, 132);\n    --head-bg: rgb(235, 230, 230);\n    --toggle: rgb(255, 187, 0);\n}\n\nhtml,\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n    margin: 0;\n    height: 100vh;\n    /* min-height: 100vh; */\n    width: 100vw;\n}\n\nbutton {\n    background-color: var(--button-bg-normal);\n    color: var(--button-fg-normal);\n    border: 5px solid var(--button-fg-normal);\n    font-size: var(--button-font-size);\n    width: 100%;\n}\n\nbutton:disabled {\n    background-color: var(--button-bg-disable);\n    color: var(--button-fg-disable);\n    border-color: var(--button-fg-disable);\n}\n\n#main-container {\n    background-color: var(--main-bg);\n    height: 100%;\n    width: 100%;\n    box-sizing: border-box;\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    margin: 0;\n}\n\n#header,\n#footer {\n    max-height: 100px;\n    background-color: var(--head-bg);\n    display: flex;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n}\n\n#header {\n    align-self: flex-start;\n    min-height: min-content;\n    grid-row: 1 / 2;\n    padding: 0 2rem;\n}\n\n#header > h1 {\n    font-family: 'Bungee Shade', sans-serif;\n    color: rgb(179, 116, 0);\n    font-size: 3rem;\n    margin: 0;\n}\n\n#footer {\n    align-self: flex-end;\n    color:rgb(148, 147, 147);\n    justify-content: center;\n    grid-row: 3/ 4;\n}\n\n/* styling for all grid displays */\n.grid-box {\n    font-size: var(--font-guide-lg);\n    aspect-ratio: 1 / 1;\n    background-color: var(--bg-grid);\n    display: grid;\n    grid-template-columns: repeat(var(--side-size), 1fr);\n    gap: var(--gap-lg);\n}\n\n.grid-box > div {\n    padding: 0;\n    position: relative;\n    user-select: none;\n    background-color: var(--bg-cell);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#set-container > .grid-box > div{\n    width: 2rem;\n    height: 2rem;\n}\n\n.guide-top,\n.guide-corner {\n    margin-bottom: calc(var(--gap-lg) * .66);\n}\n\n.guide-left,\n.guide-corner {\n    margin-right: calc(var(--gap-lg) * .66);\n}\n\n.guide-corner {\n    background-color: var(--bg-grid) !important;\n}\n\n/* Styling for all grid icons */\n.ship {\n    background-color: var(--board-ship) !important;\n}\n\n.miss {\n    background-color: var(--board-miss) !important;\n}\n\n.hit {\n    background-color: var(--board-hit) !important;\n}\n\n.selected {\n    background-color: var(--board-selected) !important;\n}\n\n.hover {\n    background-color: yellow !important;\n}\n\n.set {\n    background-color: green !important;\n}\n\n.set.hover {\n    background-color: darkgrey !important;\n}\n\n/* Styling for notifications */\n.gameover-container,\n.turn-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n}\n\n.gameover-container {\n    background-color: transparent;\n}\n\n.turn-container {\n    background-color: var(--main-bg);\n}\n\n.gameover-content,\n.turn-content {\n    text-align: center;\n    background-color: var(--main-bg);\n    display: flex;\n    flex-direction: column;\n    padding: 2rem;\n}\n\n/* Styling for set display */\n#set-container {\n    justify-self: center;\n    grid-row: 2 / 3;\n    width: min-content;\n    display: flex;\n    flex-direction: column;\n    flex: 0 1 100%;\n    gap: .5rem;\n    margin: .5rem 0;\n}\n\n.set-tray {\n    background-color: lightgrey;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n\n}\n\n.tray-item {\n    position: relative;\n    display: grid;\n    justify-content:left;\n    align-items: center;\n    padding: 1rem;\n}\n\n.icon-piece {\n    position: relative;\n    grid-column: 1 / -1;\n    grid-row: 1 / -1;\n    border: var(--gap-sm) solid black;\n    background-color: black;\n    display: flex;\n    gap: var(--gap-sm);\n}\n\n.icon-piece.icon-disable>div:not(#dragged) {\n    background-color: grey !important;\n}\n\n.icon-cell {\n    background-color: var(--bg-cell);\n    aspect-ratio: 1 / 1;\n}\n\n.drag-cell {\n    opacity: 0.5;\n    background-color: grey;\n}\n\n#dragged {\n    z-index: 9;\n    opacity: 0.5;\n    position: absolute !important;\n}\n\n.drag-y {\n    flex-direction: column;\n}\n\n.toggle-rotate {\n    transform: rotate(90deg);\n}\n\n#toggle-bar {\n    width: min-content;\n    display: flex;\n    width: 100%;\n    gap: 1rem;\n}\n\n#toggle-container {\n    position: relative;\n}\n\n#toggle-text {\n    font-size: 2rem;\n    user-select: none;\n    position: absolute;\n    left: 50%;\n    top:  50%;\n    transform: translate(-50%, -50%);\n}\n\n\n#toggle-body {\n    transition: transform 0.25s;\n    position: relative;\n    height: 80px;\n    width: 80px;\n    background-color: var(--toggle);\n    /* border: 3px solid black; */\n    border-radius: 40px;\n}\n\n#toggle-body:after {\n    position: absolute;\n    height: 0;\n    width: 0;\n    top: 20px;\n    left: 70px;\n    content: '';\n    border: 20px solid transparent;\n    border-left-color: var(--toggle);\n}\n\n#inst-container {\n    width: 100%;\n    background-color: var(--head-bg);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 5px solid var(--button-fg-disable);\n}\n\n#inst-ul {\n    padding: 0;\n    margin: 0;\n    user-select: none;\n    font-family: 'Concert One', cursive;\n    color: var(--button-fg-disable);\n}\n\n#submit-bar {\n    display: flex;\n}\n\n#submit-bar button {\n    height: 100%;\n}\n\n#submit-bc {\n    width: 100%;\n}\n\n#submit-mc {\n    background-color: var(--check-inner);\n    font-family: 'Anton', sans-serif;\n    width: min-content;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    border: 5px solid black;\n}\n\n#submit-mc.is-multi {\n    background-color: var(--main-bg);\n}\n\n#submit-mc.is-multi > #submit-mc-2,\n#submit-mc.is-multi > #submit-mc-m {\n    background-color: var(--button-fg-disable);\n}\n\n#submit-mc-2,\n#submit-mc-m {\n    font-size: 1.25rem;\n    background-color: var(--check-outter);\n}\n\n#submit-mc-2 {\n    display: flex;\n    flex-direction: column;\n    padding: 3px 5px;\n    display: flex;\n    align-items: center;\n    grid-column: 1 / 2;\n    grid-row: 1 / 3;\n    line-height: 1.2;\n}\n\n#submit-mc-m {\n    padding: 5px;\n    line-height: 1;\n    grid-column: 2 / 3;\n    grid-row: 1 /2;\n}\n\n\n#submit-chk {\n    margin: 1rem;\n    height: 1.25rem;\n    width: 1.25rem;\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n}\n\n\n\n/* Styling for play displays */\n.play-container {\n    justify-self: center;\n    grid-row: 2 / 3;\n    margin: 0 .5rem;\n    width: min-content;\n    height: min-content;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr;\n    position: relative;\n    gap: 1rem;\n}\n\n.play-container > .grid-box.play-status > div{\n    transition: background-color .75s;\n    height: 1rem;\n    width: 1rem;\n}\n.play-container > .grid-box.play-area > div.hit {\n    transition: background-color 1s;\n}\n\n.play-container > .grid-box.play-area > div{\n    height: 2rem;\n    width: 2rem;\n}\n\n.play-status {\n    grid-row: 1 / 2;\n    font-size: var(--font-guide-sm);\n    aspect-ratio: 1 / 1;\n    width: min-content;\n    gap: var(--gap-sm);\n}\n\n.play-status .guide-left {\n    margin-right: calc(var(--gap-sm) * .66);\n}\n\n.play-status .guide-top {\n    margin-bottom: calc(var(--gap-sm) * .66);\n}\n\n.play-area {\n    font-size: var(--font-guide-lg);\n    aspect-ratio: 1 / 1;\n    width: 100%;\n    gap: var(--gap-lg);\n}\n\n.play-area > .open-cell:hover {\n    background-color: var(--board-hover) !important;\n}\n\n.play-button {\n    width: 100%;\n}\n\n@media (max-width: 390px) {\n    #set-container > .grid-box > div { \n        width: 1.5rem;\n        height: 1.5rem;\n    }\n}\n\n/* set configuration for thinner phones */\n\n/* mobile horizontal settings */\n@media (max-height: 450px) {\n    #header > h1 {\n        font-size: 2rem;\n    }\n    /* set settings */\n    #inst-ul {\n        font-size: .7rem;\n    }\n    #set-container > .grid-box > div{\n        font-size: 1rem;\n        width: 1.5rem;\n        height: 1.5rem;\n    }\n    #toggle-body {\n        height: 60px;\n        width: 60px;\n        border-radius: 30px;\n    }\n    #toggle-body:after {\n        top: 15px;\n        left: 50px;\n        border-width: 15px;\n    }\n    .tray-item {\n        padding: .5rem;\n    }\n\n}\n\n/* horizontal configuration */\n@media (min-width: 1050px) or (max-height: 650px) {\n    /* set settings */\n    #set-container {\n        display: grid;\n        grid-column: 1fr 1fr;\n        align-items: center;\n    }\n    #set-container > .grid-box {\n        grid-column: 1 / 2;\n        grid-row: 1 / 4;\n    }\n    .set-tray {\n        grid-row: 2 / 3;\n        grid-column: 2 / 3;\n    }\n    #toggle-bar {\n        height: min-content;\n        grid-row: 1 / 2;\n        grid-column: 2 / 3;\n    }\n    #toggle-container {\n        display: flex;\n        align-items: center;\n    }\n\n    /* play settings */\n    .play-container > .grid-box.play-status > div{\n        height: 1rem;\n        width: 1rem;\n    }\n    \n    .play-container > .grid-box.play-area > div{\n        height: 1.4rem;\n        width: 1.4rem;\n    }\n    .play-container {\n        justify-self: center;\n        max-width: 1000px;\n        display: grid;\n        grid-template-columns: 2fr 1fr;\n        grid-template-rows: 1fr;\n    }\n\n    .play-area {\n        grid-row: 1 / 3;\n        grid-column: 1 / 2;\n    }\n\n    .play-status {\n        grid-row: 1 / 2;\n        grid-column: 2 / 3;\n        width: 100%;\n    }\n\n}\n\n@media (min-width: 1050px) and (min-height: 651px) {\n    .play-button {\n        grid-row: 3 / 4;\n        grid-column: 1 / 2;\n    }\n}\n\n@media (max-height: 650px) {\n    .play-button {\n        font-size: 1.5rem;\n    }\n    \n    .play-button {\n        grid-row: 2 / 3;\n        grid-column: 2 / 3;\n    }\n}\n\n\n@media (min-width: 1050px) and (min-height: 651px) {\n    .play-container > .grid-box.play-status > div{\n        height: 1.5rem;\n        width: 1.5rem;\n    }\n    \n    .play-container > .grid-box.play-area > div{\n        height: 3rem;\n        width: 3rem;\n    }\n}\n\n/* mobile vertical settings */\n@media (max-width: 390px) and (max-height: 855px) {\n    #set-container > .grid-box > div{\n        font-size: 1rem;\n        width: 1.4rem;\n        height: 1.4rem;\n    }\n\n    #toggle-body {\n        height: 60px;\n        width: 60px;\n        border-radius: 30px;\n    }\n\n    #toggle-body:after {\n        top: 15px;\n        left: 50px;\n        border-width: 15px;\n    }\n\n    .tray-item {\n        padding: .5rem;\n    }\n\n    #header > h1 {\n        font-size: 2rem;\n    }\n    #inst-ul {\n        font-size: .7rem;\n    }\n\n    .play-container > .grid-box.play-status > div{\n        height: .9rem;\n        width: .9rem;\n    }\n    \n    .play-container > .grid-box.play-area > div{\n        height: 1.8rem;\n        width: 1.8rem;\n    }\n}\n\n\n\n/* set configuration for full screen */\n@media (min-width: 1050px) {\n    #set-container > .grid-box > div {\n        width: 3rem;\n        height: 3rem;\n    }\n\n    #inst-container { \n        padding: 1rem;\n    }\n\n    #submit-bar {\n        max-height: 100px;\n        grid-row: 3 / 4;\n        grid-column: 2 / 3;\n    }\n\n}\n\n/* Styling for wide views of play display \n@media (min-width: 570px) {\n    .play-container {\n        justify-self: center;\n        max-width: 1000px;\n        display: grid;\n        grid-template-columns: 2fr 1fr;\n        grid-template-rows: 1fr;\n    }\n\n    .play-area {\n        grid-row: 1 / 3;\n        grid-column: 1 / 2;\n    }\n\n    .play-status {\n        grid-row: 1 / 2;\n        grid-column: 2 / 3;\n        width: 100%;\n    }\n\n    .play-button {\n        grid-row: 3 / 4;\n        grid-column: 1 / 2;\n    }\n} */\n"],"sourceRoot":""}]);
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

// holds player's gameboard, can determine next move if cpu 
// pass an array of arrays in [ship size, ship index, is vertical(true/false)] format
// to populate the gameboard
class Player {
    constructor(name, toAdd = []) {
        this.SIZE = 10;
        this.name = name;
        this.board = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard(this.SIZE);
        this.nextMove = [];
        if (toAdd) { toAdd.forEach(ship => this.board.addShip(ship[0], ship[1], ship[2]) ); }
        else { this.randomBoard().forEach(ship => this.board.addShip(ship[0], ship[1], ship[2]) ); }
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
        // const result = this.takeHit(move);
        return move;
    }

    // elect a valid free space to attack from the gameboard
    randomMove() {
        const move = Math.floor(Math.random() * Math.pow(this.SIZE, 2));
        return (this.isValidMove(move)) ? move : this.randomMove();
    }

    randomBoard() {
        const allShips = [];
        return allShips;
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
        (0,_DOMControl_js__WEBPACK_IMPORTED_MODULE_0__.initializeDOM)();
        this.createPlayer();
    }

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
                this.dummySetPlayer();
                this.getPlayerBoard().displayBoard();
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
        this.player2.player = new _Player_js__WEBPACK_IMPORTED_MODULE_2__.Player('player2', dummy2);
        this.player2.board = new _DOMControl_js__WEBPACK_IMPORTED_MODULE_0__.PlayBoard(this.SIZE, this.player2.player.getAllShipIndex());
        this.bindBoard(this.player2)
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
            this.getPlayer()
                .board
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTZCLE9BQU8sSUFBSSxXQUFXLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxRQUFRLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsUUFBUSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxTQUFTLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFL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Q0EscUNBQXFDO0FBQ3JDLGVBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxPQUFPO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDMUtBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3dCOztBQUU3QyxpQkFBaUIsd0RBQVc7QUFDNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL0RPTUNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL0RPTUhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL0RyYWdFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL1BsYXllci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvU2V0UGxheWVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9TaGlwLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9nYW1lQ29udHJvbC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbnRvbiZmYW1pbHk9QnVuZ2VlK1NoYWRlJmZhbWlseT1Db25jZXJ0K09uZSZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tbWFpbi1iZzogcmdiKDE2NywgMTcxLCAxNzUpO1xcbiAgICAtLWJnLWdyaWQ6IGJsYWNrO1xcbiAgICAtLWJnLWNlbGw6IHJnYigxNzIsIDIzOSwgMjQxKTtcXG4gICAgLS1mb250LWd1aWRlLWxnOiAxLjVyZW07XFxuICAgIC0tZm9udC1ndWlkZS1zbTogLjdyZW07XFxuICAgIC0tZ2FwLWxnOiAzcHg7XFxuICAgIC0tZ2FwLXNtOiAycHg7XFxuICAgIC0tYnV0dG9uLWZnLWRpc2FibGU6IGdyZXk7XFxuICAgIC0tYnV0dG9uLWZnLW5vcm1hbDogYmxhY2s7XFxuICAgIC0tYnV0dG9uLWJnLWRpc2FibGU6IGRhcmtncmV5O1xcbiAgICAtLWJ1dHRvbi1iZy1ub3JtYWw6IHdoaXRlO1xcbiAgICAtLWJ1dHRvbi1mb250LXNpemU6IDJyZW07XFxuICAgIC0tYm9hcmQtaGl0OiBkYXJrcmVkO1xcbiAgICAtLWJvYXJkLWhvdmVyOiBhcXVhO1xcbiAgICAtLWJvYXJkLW1pc3M6IGdyZXk7XFxuICAgIC0tYm9hcmQtc2VsZWN0ZWQ6IHllbGxvdztcXG4gICAgLS1ib2FyZC1zaGlwOiBncmVlbjtcXG4gICAgLS1zaWRlLXNpemU6IDEwO1xcbiAgICAtLWNoZWNrLW91dHRlcjogcmdiKDIxNSwgMjQ0LCAyNTIpO1xcbiAgICAtLWNoZWNrLWlubmVyOiByZ2IoMjUyLCAyMTAsIDEzMik7XFxuICAgIC0taGVhZC1iZzogcmdiKDIzNSwgMjMwLCAyMzApO1xcbiAgICAtLXRvZ2dsZTogcmdiKDI1NSwgMTg3LCAwKTtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgLyogbWluLWhlaWdodDogMTAwdmg7ICovXFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJnLW5vcm1hbCk7XFxuICAgIGNvbG9yOiB2YXIoLS1idXR0b24tZmctbm9ybWFsKTtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tYnV0dG9uLWZnLW5vcm1hbCk7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tYnV0dG9uLWZvbnQtc2l6ZSk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5idXR0b246ZGlzYWJsZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmctZGlzYWJsZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1idXR0b24tZmctZGlzYWJsZSk7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWZnLWRpc2FibGUpO1xcbn1cXG5cXG4jbWFpbi1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI2hlYWRlcixcXG4jZm9vdGVyIHtcXG4gICAgbWF4LWhlaWdodDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWQtYmcpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgbWluLWhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgcGFkZGluZzogMCAycmVtO1xcbn1cXG5cXG4jaGVhZGVyID4gaDEge1xcbiAgICBmb250LWZhbWlseTogJ0J1bmdlZSBTaGFkZScsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiByZ2IoMTc5LCAxMTYsIDApO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBjb2xvcjpyZ2IoMTQ4LCAxNDcsIDE0Nyk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLXJvdzogMy8gNDtcXG59XFxuXFxuLyogc3R5bGluZyBmb3IgYWxsIGdyaWQgZGlzcGxheXMgKi9cXG4uZ3JpZC1ib3gge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtZ3VpZGUtbGcpO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1ncmlkKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tc2lkZS1zaXplKSwgMWZyKTtcXG4gICAgZ2FwOiB2YXIoLS1nYXAtbGcpO1xcbn1cXG5cXG4uZ3JpZC1ib3ggPiBkaXYge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jZWxsKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNzZXQtY29udGFpbmVyID4gLmdyaWQtYm94ID4gZGl2e1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4uZ3VpZGUtdG9wLFxcbi5ndWlkZS1jb3JuZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLWdhcC1sZykgKiAuNjYpO1xcbn1cXG5cXG4uZ3VpZGUtbGVmdCxcXG4uZ3VpZGUtY29ybmVyIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLWdhcC1sZykgKiAuNjYpO1xcbn1cXG5cXG4uZ3VpZGUtY29ybmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctZ3JpZCkgIWltcG9ydGFudDtcXG59XFxuXFxuLyogU3R5bGluZyBmb3IgYWxsIGdyaWQgaWNvbnMgKi9cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLXNoaXApICFpbXBvcnRhbnQ7XFxufVxcblxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtbWlzcykgIWltcG9ydGFudDtcXG59XFxuXFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWhpdCkgIWltcG9ydGFudDtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtc2VsZWN0ZWQpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdyAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc2V0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW4gIWltcG9ydGFudDtcXG59XFxuXFxuLnNldC5ob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5ICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIG5vdGlmaWNhdGlvbnMgKi9cXG4uZ2FtZW92ZXItY29udGFpbmVyLFxcbi50dXJuLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5nYW1lb3Zlci1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnR1cm4tY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZyk7XFxufVxcblxcbi5nYW1lb3Zlci1jb250ZW50LFxcbi50dXJuLWNvbnRlbnQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmcpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciBzZXQgZGlzcGxheSAqL1xcbiNzZXQtY29udGFpbmVyIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OiAwIDEgMTAwJTtcXG4gICAgZ2FwOiAuNXJlbTtcXG4gICAgbWFyZ2luOiAuNXJlbSAwO1xcbn1cXG5cXG4uc2V0LXRyYXkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG5cXG59XFxuXFxuLnRyYXktaXRlbSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OmxlZnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5pY29uLXBpZWNlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBncmlkLXJvdzogMSAvIC0xO1xcbiAgICBib3JkZXI6IHZhcigtLWdhcC1zbSkgc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IHZhcigtLWdhcC1zbSk7XFxufVxcblxcbi5pY29uLXBpZWNlLmljb24tZGlzYWJsZT5kaXY6bm90KCNkcmFnZ2VkKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXkgIWltcG9ydGFudDtcXG59XFxuXFxuLmljb24tY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNlbGwpO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbn1cXG5cXG4uZHJhZy1jZWxsIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4jZHJhZ2dlZCB7XFxuICAgIHotaW5kZXg6IDk7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kcmFnLXkge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9nZ2xlLXJvdGF0ZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuI3RvZ2dsZS1iYXIge1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbiN0b2dnbGUtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jdG9nZ2xlLXRleHQge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdG9wOiAgNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuXFxuI3RvZ2dsZS1ib2R5IHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvZ2dsZSk7XFxuICAgIC8qIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbn1cXG5cXG4jdG9nZ2xlLWJvZHk6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIHRvcDogMjBweDtcXG4gICAgbGVmdDogNzBweDtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJvcmRlcjogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHZhcigtLXRvZ2dsZSk7XFxufVxcblxcbiNpbnN0LWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkLWJnKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLWJ1dHRvbi1mZy1kaXNhYmxlKTtcXG59XFxuXFxuI2luc3QtdWwge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBmb250LWZhbWlseTogJ0NvbmNlcnQgT25lJywgY3Vyc2l2ZTtcXG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1mZy1kaXNhYmxlKTtcXG59XFxuXFxuI3N1Ym1pdC1iYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jc3VibWl0LWJhciBidXR0b24ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNzdWJtaXQtYmMge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3N1Ym1pdC1tYyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoZWNrLWlubmVyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdBbnRvbicsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI3N1Ym1pdC1tYy5pcy1tdWx0aSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmcpO1xcbn1cXG5cXG4jc3VibWl0LW1jLmlzLW11bHRpID4gI3N1Ym1pdC1tYy0yLFxcbiNzdWJtaXQtbWMuaXMtbXVsdGkgPiAjc3VibWl0LW1jLW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tZmctZGlzYWJsZSk7XFxufVxcblxcbiNzdWJtaXQtbWMtMixcXG4jc3VibWl0LW1jLW0ge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoZWNrLW91dHRlcik7XFxufVxcblxcbiNzdWJtaXQtbWMtMiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDNweCA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICBsaW5lLWhlaWdodDogMS4yO1xcbn1cXG5cXG4jc3VibWl0LW1jLW0ge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAxIC8yO1xcbn1cXG5cXG5cXG4jc3VibWl0LWNoayB7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgaGVpZ2h0OiAxLjI1cmVtO1xcbiAgICB3aWR0aDogMS4yNXJlbTtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcblxcblxcbi8qIFN0eWxpbmcgZm9yIHBsYXkgZGlzcGxheXMgKi9cXG4ucGxheS1jb250YWluZXIge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBtYXJnaW46IDAgLjVyZW07XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnBsYXktY29udGFpbmVyID4gLmdyaWQtYm94LnBsYXktc3RhdHVzID4gZGl2e1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC43NXM7XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgd2lkdGg6IDFyZW07XFxufVxcbi5wbGF5LWNvbnRhaW5lciA+IC5ncmlkLWJveC5wbGF5LWFyZWEgPiBkaXYuaGl0IHtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcztcXG59XFxuXFxuLnBsYXktY29udGFpbmVyID4gLmdyaWQtYm94LnBsYXktYXJlYSA+IGRpdntcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMnJlbTtcXG59XFxuXFxuLnBsYXktc3RhdHVzIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtZ3VpZGUtc20pO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGdhcDogdmFyKC0tZ2FwLXNtKTtcXG59XFxuXFxuLnBsYXktc3RhdHVzIC5ndWlkZS1sZWZ0IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLWdhcC1zbSkgKiAuNjYpO1xcbn1cXG5cXG4ucGxheS1zdGF0dXMgLmd1aWRlLXRvcCB7XFxuICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tZ2FwLXNtKSAqIC42Nik7XFxufVxcblxcbi5wbGF5LWFyZWEge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtZ3VpZGUtbGcpO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiB2YXIoLS1nYXAtbGcpO1xcbn1cXG5cXG4ucGxheS1hcmVhID4gLm9wZW4tY2VsbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWhvdmVyKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucGxheS1idXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDM5MHB4KSB7XFxuICAgICNzZXQtY29udGFpbmVyID4gLmdyaWQtYm94ID4gZGl2IHsgXFxuICAgICAgICB3aWR0aDogMS41cmVtO1xcbiAgICAgICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIH1cXG59XFxuXFxuLyogc2V0IGNvbmZpZ3VyYXRpb24gZm9yIHRoaW5uZXIgcGhvbmVzICovXFxuXFxuLyogbW9iaWxlIGhvcml6b250YWwgc2V0dGluZ3MgKi9cXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XFxuICAgICNoZWFkZXIgPiBoMSB7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgIH1cXG4gICAgLyogc2V0IHNldHRpbmdzICovXFxuICAgICNpbnN0LXVsIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogLjdyZW07XFxuICAgIH1cXG4gICAgI3NldC1jb250YWluZXIgPiAuZ3JpZC1ib3ggPiBkaXZ7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICB3aWR0aDogMS41cmVtO1xcbiAgICAgICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIH1cXG4gICAgI3RvZ2dsZS1ib2R5IHtcXG4gICAgICAgIGhlaWdodDogNjBweDtcXG4gICAgICAgIHdpZHRoOiA2MHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgfVxcbiAgICAjdG9nZ2xlLWJvZHk6YWZ0ZXIge1xcbiAgICAgICAgdG9wOiAxNXB4O1xcbiAgICAgICAgbGVmdDogNTBweDtcXG4gICAgICAgIGJvcmRlci13aWR0aDogMTVweDtcXG4gICAgfVxcbiAgICAudHJheS1pdGVtIHtcXG4gICAgICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICB9XFxuXFxufVxcblxcbi8qIGhvcml6b250YWwgY29uZmlndXJhdGlvbiAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiAxMDUwcHgpIG9yIChtYXgtaGVpZ2h0OiA2NTBweCkge1xcbiAgICAvKiBzZXQgc2V0dGluZ3MgKi9cXG4gICAgI3NldC1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxZnIgMWZyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcbiAgICAjc2V0LWNvbnRhaW5lciA+IC5ncmlkLWJveCB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgICAgICBncmlkLXJvdzogMSAvIDQ7XFxuICAgIH1cXG4gICAgLnNldC10cmF5IHtcXG4gICAgICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgfVxcbiAgICAjdG9nZ2xlLWJhciB7XFxuICAgICAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICB9XFxuICAgICN0b2dnbGUtY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC8qIHBsYXkgc2V0dGluZ3MgKi9cXG4gICAgLnBsYXktY29udGFpbmVyID4gLmdyaWQtYm94LnBsYXktc3RhdHVzID4gZGl2e1xcbiAgICAgICAgaGVpZ2h0OiAxcmVtO1xcbiAgICAgICAgd2lkdGg6IDFyZW07XFxuICAgIH1cXG4gICAgXFxuICAgIC5wbGF5LWNvbnRhaW5lciA+IC5ncmlkLWJveC5wbGF5LWFyZWEgPiBkaXZ7XFxuICAgICAgICBoZWlnaHQ6IDEuNHJlbTtcXG4gICAgICAgIHdpZHRoOiAxLjRyZW07XFxuICAgIH1cXG4gICAgLnBsYXktY29udGFpbmVyIHtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIH1cXG5cXG4gICAgLnBsYXktYXJlYSB7XFxuICAgICAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIH1cXG5cXG4gICAgLnBsYXktc3RhdHVzIHtcXG4gICAgICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDUwcHgpIGFuZCAobWluLWhlaWdodDogNjUxcHgpIHtcXG4gICAgLnBsYXktYnV0dG9uIHtcXG4gICAgICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDY1MHB4KSB7XFxuICAgIC5wbGF5LWJ1dHRvbiB7XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgLnBsYXktYnV0dG9uIHtcXG4gICAgICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgfVxcbn1cXG5cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTA1MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDY1MXB4KSB7XFxuICAgIC5wbGF5LWNvbnRhaW5lciA+IC5ncmlkLWJveC5wbGF5LXN0YXR1cyA+IGRpdntcXG4gICAgICAgIGhlaWdodDogMS41cmVtO1xcbiAgICAgICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgLnBsYXktY29udGFpbmVyID4gLmdyaWQtYm94LnBsYXktYXJlYSA+IGRpdntcXG4gICAgICAgIGhlaWdodDogM3JlbTtcXG4gICAgICAgIHdpZHRoOiAzcmVtO1xcbiAgICB9XFxufVxcblxcbi8qIG1vYmlsZSB2ZXJ0aWNhbCBzZXR0aW5ncyAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiAzOTBweCkgYW5kIChtYXgtaGVpZ2h0OiA4NTVweCkge1xcbiAgICAjc2V0LWNvbnRhaW5lciA+IC5ncmlkLWJveCA+IGRpdntcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIHdpZHRoOiAxLjRyZW07XFxuICAgICAgICBoZWlnaHQ6IDEuNHJlbTtcXG4gICAgfVxcblxcbiAgICAjdG9nZ2xlLWJvZHkge1xcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xcbiAgICAgICAgd2lkdGg6IDYwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICB9XFxuXFxuICAgICN0b2dnbGUtYm9keTphZnRlciB7XFxuICAgICAgICB0b3A6IDE1cHg7XFxuICAgICAgICBsZWZ0OiA1MHB4O1xcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxNXB4O1xcbiAgICB9XFxuXFxuICAgIC50cmF5LWl0ZW0ge1xcbiAgICAgICAgcGFkZGluZzogLjVyZW07XFxuICAgIH1cXG5cXG4gICAgI2hlYWRlciA+IGgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgfVxcbiAgICAjaW5zdC11bCB7XFxuICAgICAgICBmb250LXNpemU6IC43cmVtO1xcbiAgICB9XFxuXFxuICAgIC5wbGF5LWNvbnRhaW5lciA+IC5ncmlkLWJveC5wbGF5LXN0YXR1cyA+IGRpdntcXG4gICAgICAgIGhlaWdodDogLjlyZW07XFxuICAgICAgICB3aWR0aDogLjlyZW07XFxuICAgIH1cXG4gICAgXFxuICAgIC5wbGF5LWNvbnRhaW5lciA+IC5ncmlkLWJveC5wbGF5LWFyZWEgPiBkaXZ7XFxuICAgICAgICBoZWlnaHQ6IDEuOHJlbTtcXG4gICAgICAgIHdpZHRoOiAxLjhyZW07XFxuICAgIH1cXG59XFxuXFxuXFxuXFxuLyogc2V0IGNvbmZpZ3VyYXRpb24gZm9yIGZ1bGwgc2NyZWVuICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwNTBweCkge1xcbiAgICAjc2V0LWNvbnRhaW5lciA+IC5ncmlkLWJveCA+IGRpdiB7XFxuICAgICAgICB3aWR0aDogM3JlbTtcXG4gICAgICAgIGhlaWdodDogM3JlbTtcXG4gICAgfVxcblxcbiAgICAjaW5zdC1jb250YWluZXIgeyBcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIH1cXG5cXG4gICAgI3N1Ym1pdC1iYXIge1xcbiAgICAgICAgbWF4LWhlaWdodDogMTAwcHg7XFxuICAgICAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIH1cXG5cXG59XFxuXFxuLyogU3R5bGluZyBmb3Igd2lkZSB2aWV3cyBvZiBwbGF5IGRpc3BsYXkgXFxuQG1lZGlhIChtaW4td2lkdGg6IDU3MHB4KSB7XFxuICAgIC5wbGF5LWNvbnRhaW5lciB7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICB9XFxuXFxuICAgIC5wbGF5LWFyZWEge1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICB9XFxuXFxuICAgIC5wbGF5LXN0YXR1cyB7XFxuICAgICAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAucGxheS1idXR0b24ge1xcbiAgICAgICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICB9XFxufSAqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLHdCQUF3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Z0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsYUFBYTtJQUNqQjtBQUNKOzs7O0FBSUEsc0NBQXNDO0FBQ3RDO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGtCQUFrQjtJQUN0Qjs7QUFFSjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlCR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbnRvbiZmYW1pbHk9QnVuZ2VlK1NoYWRlJmZhbWlseT1Db25jZXJ0K09uZSZkaXNwbGF5PXN3YXAnKTtcXG46cm9vdCB7XFxuICAgIC0tbWFpbi1iZzogcmdiKDE2NywgMTcxLCAxNzUpO1xcbiAgICAtLWJnLWdyaWQ6IGJsYWNrO1xcbiAgICAtLWJnLWNlbGw6IHJnYigxNzIsIDIzOSwgMjQxKTtcXG4gICAgLS1mb250LWd1aWRlLWxnOiAxLjVyZW07XFxuICAgIC0tZm9udC1ndWlkZS1zbTogLjdyZW07XFxuICAgIC0tZ2FwLWxnOiAzcHg7XFxuICAgIC0tZ2FwLXNtOiAycHg7XFxuICAgIC0tYnV0dG9uLWZnLWRpc2FibGU6IGdyZXk7XFxuICAgIC0tYnV0dG9uLWZnLW5vcm1hbDogYmxhY2s7XFxuICAgIC0tYnV0dG9uLWJnLWRpc2FibGU6IGRhcmtncmV5O1xcbiAgICAtLWJ1dHRvbi1iZy1ub3JtYWw6IHdoaXRlO1xcbiAgICAtLWJ1dHRvbi1mb250LXNpemU6IDJyZW07XFxuICAgIC0tYm9hcmQtaGl0OiBkYXJrcmVkO1xcbiAgICAtLWJvYXJkLWhvdmVyOiBhcXVhO1xcbiAgICAtLWJvYXJkLW1pc3M6IGdyZXk7XFxuICAgIC0tYm9hcmQtc2VsZWN0ZWQ6IHllbGxvdztcXG4gICAgLS1ib2FyZC1zaGlwOiBncmVlbjtcXG4gICAgLS1zaWRlLXNpemU6IDEwO1xcbiAgICAtLWNoZWNrLW91dHRlcjogcmdiKDIxNSwgMjQ0LCAyNTIpO1xcbiAgICAtLWNoZWNrLWlubmVyOiByZ2IoMjUyLCAyMTAsIDEzMik7XFxuICAgIC0taGVhZC1iZzogcmdiKDIzNSwgMjMwLCAyMzApO1xcbiAgICAtLXRvZ2dsZTogcmdiKDI1NSwgMTg3LCAwKTtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgLyogbWluLWhlaWdodDogMTAwdmg7ICovXFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJnLW5vcm1hbCk7XFxuICAgIGNvbG9yOiB2YXIoLS1idXR0b24tZmctbm9ybWFsKTtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tYnV0dG9uLWZnLW5vcm1hbCk7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tYnV0dG9uLWZvbnQtc2l6ZSk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5idXR0b246ZGlzYWJsZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmctZGlzYWJsZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1idXR0b24tZmctZGlzYWJsZSk7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWZnLWRpc2FibGUpO1xcbn1cXG5cXG4jbWFpbi1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI2hlYWRlcixcXG4jZm9vdGVyIHtcXG4gICAgbWF4LWhlaWdodDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWQtYmcpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgbWluLWhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgcGFkZGluZzogMCAycmVtO1xcbn1cXG5cXG4jaGVhZGVyID4gaDEge1xcbiAgICBmb250LWZhbWlseTogJ0J1bmdlZSBTaGFkZScsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiByZ2IoMTc5LCAxMTYsIDApO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBjb2xvcjpyZ2IoMTQ4LCAxNDcsIDE0Nyk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLXJvdzogMy8gNDtcXG59XFxuXFxuLyogc3R5bGluZyBmb3IgYWxsIGdyaWQgZGlzcGxheXMgKi9cXG4uZ3JpZC1ib3gge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtZ3VpZGUtbGcpO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1ncmlkKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tc2lkZS1zaXplKSwgMWZyKTtcXG4gICAgZ2FwOiB2YXIoLS1nYXAtbGcpO1xcbn1cXG5cXG4uZ3JpZC1ib3ggPiBkaXYge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jZWxsKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNzZXQtY29udGFpbmVyID4gLmdyaWQtYm94ID4gZGl2e1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4uZ3VpZGUtdG9wLFxcbi5ndWlkZS1jb3JuZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLWdhcC1sZykgKiAuNjYpO1xcbn1cXG5cXG4uZ3VpZGUtbGVmdCxcXG4uZ3VpZGUtY29ybmVyIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLWdhcC1sZykgKiAuNjYpO1xcbn1cXG5cXG4uZ3VpZGUtY29ybmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctZ3JpZCkgIWltcG9ydGFudDtcXG59XFxuXFxuLyogU3R5bGluZyBmb3IgYWxsIGdyaWQgaWNvbnMgKi9cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLXNoaXApICFpbXBvcnRhbnQ7XFxufVxcblxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtbWlzcykgIWltcG9ydGFudDtcXG59XFxuXFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWhpdCkgIWltcG9ydGFudDtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtc2VsZWN0ZWQpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdyAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc2V0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW4gIWltcG9ydGFudDtcXG59XFxuXFxuLnNldC5ob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5ICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIG5vdGlmaWNhdGlvbnMgKi9cXG4uZ2FtZW92ZXItY29udGFpbmVyLFxcbi50dXJuLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5nYW1lb3Zlci1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnR1cm4tY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZyk7XFxufVxcblxcbi5nYW1lb3Zlci1jb250ZW50LFxcbi50dXJuLWNvbnRlbnQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmcpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciBzZXQgZGlzcGxheSAqL1xcbiNzZXQtY29udGFpbmVyIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OiAwIDEgMTAwJTtcXG4gICAgZ2FwOiAuNXJlbTtcXG4gICAgbWFyZ2luOiAuNXJlbSAwO1xcbn1cXG5cXG4uc2V0LXRyYXkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG5cXG59XFxuXFxuLnRyYXktaXRlbSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OmxlZnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5pY29uLXBpZWNlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBncmlkLXJvdzogMSAvIC0xO1xcbiAgICBib3JkZXI6IHZhcigtLWdhcC1zbSkgc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IHZhcigtLWdhcC1zbSk7XFxufVxcblxcbi5pY29uLXBpZWNlLmljb24tZGlzYWJsZT5kaXY6bm90KCNkcmFnZ2VkKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXkgIWltcG9ydGFudDtcXG59XFxuXFxuLmljb24tY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNlbGwpO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbn1cXG5cXG4uZHJhZy1jZWxsIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4jZHJhZ2dlZCB7XFxuICAgIHotaW5kZXg6IDk7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kcmFnLXkge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9nZ2xlLXJvdGF0ZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuI3RvZ2dsZS1iYXIge1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbiN0b2dnbGUtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jdG9nZ2xlLXRleHQge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdG9wOiAgNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuXFxuI3RvZ2dsZS1ib2R5IHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvZ2dsZSk7XFxuICAgIC8qIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbn1cXG5cXG4jdG9nZ2xlLWJvZHk6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIHRvcDogMjBweDtcXG4gICAgbGVmdDogNzBweDtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJvcmRlcjogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHZhcigtLXRvZ2dsZSk7XFxufVxcblxcbiNpbnN0LWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkLWJnKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLWJ1dHRvbi1mZy1kaXNhYmxlKTtcXG59XFxuXFxuI2luc3QtdWwge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBmb250LWZhbWlseTogJ0NvbmNlcnQgT25lJywgY3Vyc2l2ZTtcXG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1mZy1kaXNhYmxlKTtcXG59XFxuXFxuI3N1Ym1pdC1iYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jc3VibWl0LWJhciBidXR0b24ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNzdWJtaXQtYmMge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3N1Ym1pdC1tYyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoZWNrLWlubmVyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdBbnRvbicsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI3N1Ym1pdC1tYy5pcy1tdWx0aSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmcpO1xcbn1cXG5cXG4jc3VibWl0LW1jLmlzLW11bHRpID4gI3N1Ym1pdC1tYy0yLFxcbiNzdWJtaXQtbWMuaXMtbXVsdGkgPiAjc3VibWl0LW1jLW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tZmctZGlzYWJsZSk7XFxufVxcblxcbiNzdWJtaXQtbWMtMixcXG4jc3VibWl0LW1jLW0ge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoZWNrLW91dHRlcik7XFxufVxcblxcbiNzdWJtaXQtbWMtMiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDNweCA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICBsaW5lLWhlaWdodDogMS4yO1xcbn1cXG5cXG4jc3VibWl0LW1jLW0ge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAxIC8yO1xcbn1cXG5cXG5cXG4jc3VibWl0LWNoayB7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgaGVpZ2h0OiAxLjI1cmVtO1xcbiAgICB3aWR0aDogMS4yNXJlbTtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcblxcblxcbi8qIFN0eWxpbmcgZm9yIHBsYXkgZGlzcGxheXMgKi9cXG4ucGxheS1jb250YWluZXIge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBtYXJnaW46IDAgLjVyZW07XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnBsYXktY29udGFpbmVyID4gLmdyaWQtYm94LnBsYXktc3RhdHVzID4gZGl2e1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC43NXM7XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgd2lkdGg6IDFyZW07XFxufVxcbi5wbGF5LWNvbnRhaW5lciA+IC5ncmlkLWJveC5wbGF5LWFyZWEgPiBkaXYuaGl0IHtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcztcXG59XFxuXFxuLnBsYXktY29udGFpbmVyID4gLmdyaWQtYm94LnBsYXktYXJlYSA+IGRpdntcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMnJlbTtcXG59XFxuXFxuLnBsYXktc3RhdHVzIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtZ3VpZGUtc20pO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGdhcDogdmFyKC0tZ2FwLXNtKTtcXG59XFxuXFxuLnBsYXktc3RhdHVzIC5ndWlkZS1sZWZ0IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLWdhcC1zbSkgKiAuNjYpO1xcbn1cXG5cXG4ucGxheS1zdGF0dXMgLmd1aWRlLXRvcCB7XFxuICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tZ2FwLXNtKSAqIC42Nik7XFxufVxcblxcbi5wbGF5LWFyZWEge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtZ3VpZGUtbGcpO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiB2YXIoLS1nYXAtbGcpO1xcbn1cXG5cXG4ucGxheS1hcmVhID4gLm9wZW4tY2VsbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWhvdmVyKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucGxheS1idXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDM5MHB4KSB7XFxuICAgICNzZXQtY29udGFpbmVyID4gLmdyaWQtYm94ID4gZGl2IHsgXFxuICAgICAgICB3aWR0aDogMS41cmVtO1xcbiAgICAgICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIH1cXG59XFxuXFxuLyogc2V0IGNvbmZpZ3VyYXRpb24gZm9yIHRoaW5uZXIgcGhvbmVzICovXFxuXFxuLyogbW9iaWxlIGhvcml6b250YWwgc2V0dGluZ3MgKi9cXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XFxuICAgICNoZWFkZXIgPiBoMSB7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgIH1cXG4gICAgLyogc2V0IHNldHRpbmdzICovXFxuICAgICNpbnN0LXVsIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogLjdyZW07XFxuICAgIH1cXG4gICAgI3NldC1jb250YWluZXIgPiAuZ3JpZC1ib3ggPiBkaXZ7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICB3aWR0aDogMS41cmVtO1xcbiAgICAgICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIH1cXG4gICAgI3RvZ2dsZS1ib2R5IHtcXG4gICAgICAgIGhlaWdodDogNjBweDtcXG4gICAgICAgIHdpZHRoOiA2MHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgfVxcbiAgICAjdG9nZ2xlLWJvZHk6YWZ0ZXIge1xcbiAgICAgICAgdG9wOiAxNXB4O1xcbiAgICAgICAgbGVmdDogNTBweDtcXG4gICAgICAgIGJvcmRlci13aWR0aDogMTVweDtcXG4gICAgfVxcbiAgICAudHJheS1pdGVtIHtcXG4gICAgICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICB9XFxuXFxufVxcblxcbi8qIGhvcml6b250YWwgY29uZmlndXJhdGlvbiAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiAxMDUwcHgpIG9yIChtYXgtaGVpZ2h0OiA2NTBweCkge1xcbiAgICAvKiBzZXQgc2V0dGluZ3MgKi9cXG4gICAgI3NldC1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxZnIgMWZyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcbiAgICAjc2V0LWNvbnRhaW5lciA+IC5ncmlkLWJveCB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgICAgICBncmlkLXJvdzogMSAvIDQ7XFxuICAgIH1cXG4gICAgLnNldC10cmF5IHtcXG4gICAgICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgfVxcbiAgICAjdG9nZ2xlLWJhciB7XFxuICAgICAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICB9XFxuICAgICN0b2dnbGUtY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC8qIHBsYXkgc2V0dGluZ3MgKi9cXG4gICAgLnBsYXktY29udGFpbmVyID4gLmdyaWQtYm94LnBsYXktc3RhdHVzID4gZGl2e1xcbiAgICAgICAgaGVpZ2h0OiAxcmVtO1xcbiAgICAgICAgd2lkdGg6IDFyZW07XFxuICAgIH1cXG4gICAgXFxuICAgIC5wbGF5LWNvbnRhaW5lciA+IC5ncmlkLWJveC5wbGF5LWFyZWEgPiBkaXZ7XFxuICAgICAgICBoZWlnaHQ6IDEuNHJlbTtcXG4gICAgICAgIHdpZHRoOiAxLjRyZW07XFxuICAgIH1cXG4gICAgLnBsYXktY29udGFpbmVyIHtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIH1cXG5cXG4gICAgLnBsYXktYXJlYSB7XFxuICAgICAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIH1cXG5cXG4gICAgLnBsYXktc3RhdHVzIHtcXG4gICAgICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDUwcHgpIGFuZCAobWluLWhlaWdodDogNjUxcHgpIHtcXG4gICAgLnBsYXktYnV0dG9uIHtcXG4gICAgICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDY1MHB4KSB7XFxuICAgIC5wbGF5LWJ1dHRvbiB7XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgLnBsYXktYnV0dG9uIHtcXG4gICAgICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgfVxcbn1cXG5cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTA1MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDY1MXB4KSB7XFxuICAgIC5wbGF5LWNvbnRhaW5lciA+IC5ncmlkLWJveC5wbGF5LXN0YXR1cyA+IGRpdntcXG4gICAgICAgIGhlaWdodDogMS41cmVtO1xcbiAgICAgICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgLnBsYXktY29udGFpbmVyID4gLmdyaWQtYm94LnBsYXktYXJlYSA+IGRpdntcXG4gICAgICAgIGhlaWdodDogM3JlbTtcXG4gICAgICAgIHdpZHRoOiAzcmVtO1xcbiAgICB9XFxufVxcblxcbi8qIG1vYmlsZSB2ZXJ0aWNhbCBzZXR0aW5ncyAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiAzOTBweCkgYW5kIChtYXgtaGVpZ2h0OiA4NTVweCkge1xcbiAgICAjc2V0LWNvbnRhaW5lciA+IC5ncmlkLWJveCA+IGRpdntcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIHdpZHRoOiAxLjRyZW07XFxuICAgICAgICBoZWlnaHQ6IDEuNHJlbTtcXG4gICAgfVxcblxcbiAgICAjdG9nZ2xlLWJvZHkge1xcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xcbiAgICAgICAgd2lkdGg6IDYwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICB9XFxuXFxuICAgICN0b2dnbGUtYm9keTphZnRlciB7XFxuICAgICAgICB0b3A6IDE1cHg7XFxuICAgICAgICBsZWZ0OiA1MHB4O1xcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxNXB4O1xcbiAgICB9XFxuXFxuICAgIC50cmF5LWl0ZW0ge1xcbiAgICAgICAgcGFkZGluZzogLjVyZW07XFxuICAgIH1cXG5cXG4gICAgI2hlYWRlciA+IGgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgfVxcbiAgICAjaW5zdC11bCB7XFxuICAgICAgICBmb250LXNpemU6IC43cmVtO1xcbiAgICB9XFxuXFxuICAgIC5wbGF5LWNvbnRhaW5lciA+IC5ncmlkLWJveC5wbGF5LXN0YXR1cyA+IGRpdntcXG4gICAgICAgIGhlaWdodDogLjlyZW07XFxuICAgICAgICB3aWR0aDogLjlyZW07XFxuICAgIH1cXG4gICAgXFxuICAgIC5wbGF5LWNvbnRhaW5lciA+IC5ncmlkLWJveC5wbGF5LWFyZWEgPiBkaXZ7XFxuICAgICAgICBoZWlnaHQ6IDEuOHJlbTtcXG4gICAgICAgIHdpZHRoOiAxLjhyZW07XFxuICAgIH1cXG59XFxuXFxuXFxuXFxuLyogc2V0IGNvbmZpZ3VyYXRpb24gZm9yIGZ1bGwgc2NyZWVuICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwNTBweCkge1xcbiAgICAjc2V0LWNvbnRhaW5lciA+IC5ncmlkLWJveCA+IGRpdiB7XFxuICAgICAgICB3aWR0aDogM3JlbTtcXG4gICAgICAgIGhlaWdodDogM3JlbTtcXG4gICAgfVxcblxcbiAgICAjaW5zdC1jb250YWluZXIgeyBcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIH1cXG5cXG4gICAgI3N1Ym1pdC1iYXIge1xcbiAgICAgICAgbWF4LWhlaWdodDogMTAwcHg7XFxuICAgICAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIH1cXG5cXG59XFxuXFxuLyogU3R5bGluZyBmb3Igd2lkZSB2aWV3cyBvZiBwbGF5IGRpc3BsYXkgXFxuQG1lZGlhIChtaW4td2lkdGg6IDU3MHB4KSB7XFxuICAgIC5wbGF5LWNvbnRhaW5lciB7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICB9XFxuXFxuICAgIC5wbGF5LWFyZWEge1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICB9XFxuXFxuICAgIC5wbGF5LXN0YXR1cyB7XFxuICAgICAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAucGxheS1idXR0b24ge1xcbiAgICAgICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICB9XFxufSAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IG1ha2VFbGVtZW50LCBhZGp1c3RUb0luZGV4LCBidWlsZEdyaWQgfSBmcm9tICcuL0RPTUhlbHBlcnMuanMnO1xuaW1wb3J0IHsgU2V0UGxheWVyIH0gZnJvbSAnLi9TZXRQbGF5ZXIuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZURPTSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jykuc2V0QXR0cmlidXRlKCdvbmRyYWdzdGFydCcsICdyZXR1cm4gZmFsc2U7Jyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnNldEF0dHJpYnV0ZSgnb25kcm9wJywgJ3JldHVybiBmYWxzZScpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGlkOiAnbWFpbi1jb250YWluZXInIH0pO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdkaXYnLCB7IGlkOiAnaGVhZGVyJyB9KSk7XG4gICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyNoZWFkZXInKS5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnaDEnLCB7fSwgJ0JBVFRMRVNISVAnKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdkaXYnLCB7IGlkOiAnZm9vdGVyJyB9KSk7XG4gICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyNmb290ZXInKS5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgncCcsIHt9LCAnJmNvcHk7IDIwMjIgSmltbXkgUXVhZHJvcycpKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAvLyBjb25zdCBzZXRQbGF5ZXIgPSBuZXcgU2V0UGxheWVyKDEwLCBbNSwgNCwgMywgMywgMl0pO1xuICAgIC8vIHNldFBsYXllci5kaXNwbGF5KCk7XG59XG5cbi8vIERpc3BsYXkgZm9yIHRoZSBnZW5lcmFsIHBsYXkgYXJlYVxuZXhwb3J0IGNsYXNzIFBsYXlCb2FyZCB7XG4gICAgY29uc3RydWN0b3Ioc2l6ZSwgYWxsU2hpcHMpIHtcbiAgICAgICAgdGhpcy5TSVpFID0gc2l6ZTtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ3BsYXktY29udGFpbmVyJyB9KTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRHcmlkKHNpemUsICdwbGF5LWFyZWEnKSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkR3JpZChzaXplLCAncGxheS1zdGF0dXMnKSlcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2J1dHRvbicsIHsgY2xhc3M6ICdwbGF5LWJ1dHRvbicsIGRpc2FibGVkOiAndHJ1ZScgfSwgJ1NFTEVDVCBUQVJHRVQnKSk7XG4gICAgICAgIGFsbFNoaXBzLmZvckVhY2goaW5kZXggPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0dXMoaW5kZXgsICdzaGlwJyk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIC8vIGdldHRlcnMgZm9yIGJvYXJkIGVsZW1lbnRzXG4gICAgZ2V0Q29udGFpbmVyKCkgeyByZXR1cm4gdGhpcy5jb250YWluZXI7IH1cbiAgICBnZXRQbGF5KCkgeyByZXR1cm4gdGhpcy5nZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yKCcucGxheS1hcmVhJyk7IH1cbiAgICBnZXRTdGF0dXMoKSB7IHJldHVybiB0aGlzLmdldENvbnRhaW5lcigpLnF1ZXJ5U2VsZWN0b3IoJy5wbGF5LXN0YXR1cycpOyB9XG4gICAgZ2V0QnV0dG9uKCkgeyByZXR1cm4gdGhpcy5nZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yKCcucGxheS1idXR0b24nKTsgfVxuICAgIFxuICAgIC8vIEhlbHBlcnMgdG8gaGFuZGxlIHRoZSBkaXNwbGF5ZWQgZ3VpZGVzXG4gICAgZ2V0R3VpZGVJbmRleChpbmRleCkgeyByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIChpbmRleCAlIHRoaXMuU0laRSkpLmNvbmNhdChNYXRoLmZsb29yKGluZGV4IC8gdGhpcy5TSVpFKSArIDEpOyB9XG5cbiAgICBkaXNwbGF5Qm9hcmQoKSB7IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKHRoaXMuZ2V0Q29udGFpbmVyKCkpOyB9XG4gICAgcmVtb3ZlQm9hcmQoKSB7IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5LWNvbnRhaW5lcicpLnJlbW92ZSgpOyB9XG5cbiAgICAvLyBzZXQgdGhlIGRpc3BsYXkncyBidXR0b24gdGV4dCBhbmQgZGlzYWJsZWQgc3RhdHVzXG4gICAgc2V0QnV0dG9uKGluZGV4KSB7XG4gICAgICAgIHRoaXMuZ2V0QnV0dG9uKCkuZGlzYWJsZWQgPSAoaW5kZXgpID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICB0aGlzLmdldEJ1dHRvbigpLmlubmVySFRNTCA9IChpbmRleCkgPyBgQVRUQUNLICR7dGhpcy5nZXRHdWlkZUluZGV4KGluZGV4KX1gIDogYFNFTEVDVCBUQVJHRVRgOyBcbiAgICB9O1xuXG4gICAgLy8gc3dpdGNoZXMgYSBjZWxsIGZyb20gb3BlbiB0byBzZWxlY3RlZFxuICAgIHRvZ2dsZVNlbGVjdGVkKGluZGV4KSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmdldFBsYXkoKS5jaGlsZHJlbi5pdGVtKGFkanVzdFRvSW5kZXgoaW5kZXgsIHRoaXMuU0laRSkpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4tY2VsbCcpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XG4gICAgfVxuXG4gICAgLy8gc2V0IGNsYXNzIGZvciBjZWxsIGluIHRoZSBwbGF5IGdyaWRcbiAgICB1cGRhdGVQbGF5KGluZGV4LCB0b1VwZGF0ZSkge1xuICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5nZXRQbGF5KCkuY2hpbGRyZW4uaXRlbShhZGp1c3RUb0luZGV4KGluZGV4LCB0aGlzLlNJWkUpKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQodG9VcGRhdGUpO1xuICAgIH1cblxuICAgIC8vIHNldCBjbGFzcyBmb3IgY2VsbCBpbiB0aGUgc3RhdHVzIGdyaWRcbiAgICB1cGRhdGVTdGF0dXMoaW5kZXgsIHRvVXBkYXRlKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmdldFN0YXR1cygpLmNoaWxkcmVuLml0ZW0oYWRqdXN0VG9JbmRleChpbmRleCwgdGhpcy5TSVpFKSk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCh0b1VwZGF0ZSk7XG4gICAgfVxuXG4gICAgLy8gZGlzcGxheSBhIHByaXZhY3kgY292ZXIgb24gdHVybiBzd2l0Y2gtb2ZmcywgdGFrZXMgYSBzdHJpbmcgZm9yIHBsYXllcidzIG5hbWUsIHJldHVybnMgYnV0dG9uXG4gICAgY3JlYXRlVHVybkNvdmVyKHBsYXllcikge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ3R1cm4tY29udGFpbmVyJyB9KTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAndHVybi1jb250ZW50JyB9KTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gbWFrZUVsZW1lbnQoJ2J1dHRvbicsIHsgY2xhc3M6ICd0dXJuLWJ1dHRvbicgfSwgJ1JFQURZJyk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2gxJywge30sIGAke3BsYXllci50b1VwcGVyQ2FzZSgpfSdzYCkpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdoMScsIHt9LCAnVFVSTicpKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9XG5cbiAgICBjbGVhclR1cm5Db3ZlcigpIHtcbiAgICAgICAgdGhpcy5nZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yKCcudHVybi1jb250YWluZXInKS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICAvLyBkaXNwbGF5IGEgZ2FtZW92ZXIgbWVzc2FnZSB3aXRoIGN1c3RvbiByZXN1bHQgc3RyaW5nLCByZXR1cm5zIGJ1dHRvbiBmb3IgYmluZGluZ1xuICAgIGNyZWF0ZUdhbWVPdmVyKHJlc3VsdCkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2dhbWVvdmVyLWNvbnRhaW5lcicgfSk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2dhbWVvdmVyLWNvbnRlbnQnIH0pO1xuICAgICAgICBjb25zdCBidXR0b24gPSBtYWtlRWxlbWVudCgnYnV0dG9uJywgeyBjbGFzczogJ2dhbWVvdmVyLWJ1dHRvbicgfSwgJ1BMQVkgQUdBSU4/JylcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnaDEnLCB7fSwgcmVzdWx0KSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICB0aGlzLmdldENvbnRhaW5lcigpLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgIHJldHVybiBidXR0b247XG4gICAgfVxufSIsIi8vIEhlbHBlciBmdW5jdGlvbiBmb3IgZWFzeSBlbGVtZW50IGNyZWF0aW9uXG4vLyB1c2U6ICg8c3RyaW5nPiwgPG9iamVjdD4gb2YgcHJvcGVydGllcyBhcyB5b3Ugd291bGQgdXNlIHNldEF0dHJpYnV0ZSwgPHN0cmluZz5pbm5lckhUTUwpXG5leHBvcnQgZnVuY3Rpb24gbWFrZUVsZW1lbnQodHlwZSwgcHJvcGVydGllcyA9IHt9LCBpbm5lciA9IG51bGwpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBmb3IgKGxldCBrZXkgaW4gcHJvcGVydGllcykgeyBlbGVtZW50LnNldEF0dHJpYnV0ZShgJHtrZXl9YCwgYCR7cHJvcGVydGllc1trZXldfWApIH07XG4gICAgaWYgKGlubmVyKSB7IGVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXIgfTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkanVzdFRvSW5kZXgoaW5kZXgsIHNpemUpIHsgXG4gICAgcmV0dXJuIChzaXplICsgMSkgKiAoaW5kZXggLyBzaXplICsgMSkgKyAxO1xufVxuXG4vLyBjcmVhdGUgYSB2YXJpYWJseSBzaXplZCBncmlkIHdpdGggZ3VpZGUgbWVhc3VyZXMgb24gdG9wIGFuZCBsZWZ0IGhhbmQgc2lkZVxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkR3JpZChzaWRlU2l6ZSwgYWRkQ2xhc3MpIHtcbiAgICBjb25zdCBTSVpFID0gTWF0aC5wb3coc2lkZVNpemUgKyAxLCAyKTtcbiAgICBjb25zdCBncmlkQm94ID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdncmlkLWJveCcgfSk7XG4gICAgaWYgKGFkZENsYXNzKSB7IGdyaWRCb3guY2xhc3NMaXN0LmFkZChhZGRDbGFzcyk7IH1cbiAgICBsZXQgY29sVmFsdWUgPSA2NTtcbiAgICBsZXQgcm93VmFsdWUgPSAxO1xuICAgIGxldCBjZWxsSW5kZXggPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgU0laRTsgaSsrKSB7IFxuICAgICAgICBpZiAoaSA9PT0gMCkgeyBncmlkQm94LmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnZ3VpZGUtY29ybmVyJyB9KSkgfVxuICAgICAgICBlbHNlIGlmIChpIDw9IHNpZGVTaXplKSB7IGdyaWRCb3guYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdndWlkZS10b3AnIH0sIFN0cmluZy5mcm9tQ2hhckNvZGUoY29sVmFsdWUrKykpKSB9XG4gICAgICAgIGVsc2UgaWYgKGkgJSAoc2lkZVNpemUgKyAxKSA9PT0gMCkgeyBncmlkQm94LmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnZ3VpZGUtbGVmdCd9LCByb3dWYWx1ZSsrKSkgfVxuICAgICAgICBlbHNlIHsgZ3JpZEJveC5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ29wZW4tY2VsbCBzZWxlY3RhYmxlJywgJ2RhdGEtaW5kZXgnOiBjZWxsSW5kZXgrKyB9KSkgfTtcbiAgICB9XG5cbiAgICAvLyBGaW5kIGEgYmV0dGVyIGhvbWUgZm9yIHRoaXNcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6cm9vdCcpLnN0eWxlLnNldFByb3BlcnR5KCctLXNpZGUtc2l6ZScsIHNpZGVTaXplICsgMSk7XG4gICAgXG4gICAgcmV0dXJuIGdyaWRCb3g7XG59XG5cbi8vIHNldFBsYXllciBET00gYnVpbGRlcnNcblxuLy8gY29udGFpbmVyIGZvciBpY29ucyBpbmRleGVzIHRoZSBpY29ucyBvbiBvcmRlciBhZGRlZFxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkU2V0UGxheWVyKHNpemUsIHBpZWNlcywgaXNNdWx0aSkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGlkOiAnc2V0LWNvbnRhaW5lcicgfSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkR3JpZChzaXplKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkVG9nZ2xlQmFyKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWtlVHJheShwaWVjZXMpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRTdWJtaXRCYXIoaXNNdWx0aSkpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkU3VibWl0QmFyKGlzTXVsdGkpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBpZDogJ3N1Ym1pdC1iYXInIH0pO1xuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGlkOiAnc3VibWl0LWJjJyB9KTtcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2J1dHRvbicsIHsgaWQ6ICdzdWJtaXQtYnRuJywgZGlzYWJsZWQ6ICd0cnVlJyB9LCAnQ09OVElOVUUnKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkU2V0TXVsdGkoaXNNdWx0aSkpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkU2V0TXVsdGkoaXNNdWx0aSkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGlkOiAnc3VibWl0LW1jJyB9KTtcbiAgICBjb25zdCB0d28gPSBtYWtlRWxlbWVudCgnZGl2JywgeyBpZDogJ3N1Ym1pdC1tYy0yJyB9KTtcbiAgICBjb25zdCBjaGVjayA9IG1ha2VFbGVtZW50KCdpbnB1dCcsIHsgdHlwZTogJ2NoZWNrYm94JywgaWQ6ICdzdWJtaXQtY2hrJyB9KTtcbiAgICBpZiAoaXNNdWx0aSkgeyBcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lzLW11bHRpJyk7XG4gICAgICAgIGNoZWNrLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAndHJ1ZScpIFxuICAgIH07XG4gICAgdHdvLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdkaXYnLCB7fSwgJ1QnKSk7XG4gICAgdHdvLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdkaXYnLCB7fSwgJ1cnKSk7XG4gICAgdHdvLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdkaXYnLCB7fSwgJ08nKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHR3byk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdkaXYnLCB7IGlkOiAnc3VibWl0LW1jLW0nIH0sICdQTEFZJykpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVjayk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gYnVpbGRUb2dnbGVCYXIoKSB7XG4gICAgY29uc3QgdG9nZ2xlYmFyID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgaWQ6ICd0b2dnbGUtYmFyJyB9KTtcbiAgICBjb25zdCB0b2dnbGVDb250YWluZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBpZDogJ3RvZ2dsZS1jb250YWluZXInIH0pXG4gICAgY29uc3QgdG9nZ2xlQm9keSA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGlkOiAndG9nZ2xlLWJvZHknLCAnZGF0YS15JzogJ2ZhbHNlJyB9KTtcbiAgICBjb25zdCB0b2dnbGVUZXh0ID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgaWQ6ICd0b2dnbGUtdGV4dCcgfSwgJ1gnKTtcbiAgICBjb25zdCBpbnN0cnVjdENvbnQgPSBtYWtlRWxlbWVudCgnZGl2Jywge2lkOiAnaW5zdC1jb250YWluZXInIH0pO1xuICAgIGNvbnN0IGluc3RydWN0VUwgPSBtYWtlRWxlbWVudCgndWwnLCB7aWQ6ICdpbnN0LXVsJyB9KTtcbiAgICBpbnN0cnVjdFVMLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdsaScsIHt9LCAnRFJBRyBQSUVDRVMgQkVMT1cgVE8gR1JJRCcpKTtcbiAgICBpbnN0cnVjdFVMLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdsaScsIHt9LCAnTEVGVCBUT0dHTEUgVE8gU0VUIERJUkVDVElPTicpKTtcbiAgICBpbnN0cnVjdFVMLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdsaScsIHt9LCAnT05DRSBBTEwgU0VUIFBSRVNTIENPTlRJTlVFJykpO1xuICAgIHRvZ2dsZUJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2dnbGUtcm90YXRlJykpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS15JywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCd0b2dnbGUtcm90YXRlJyk7XG4gICAgICAgICAgICB0b2dnbGVUZXh0LmlubmVySFRNTCA9ICdYJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS15JywgJ3RydWUnKTtcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS1yb3RhdGUnKTtcbiAgICAgICAgICAgIHRvZ2dsZVRleHQuaW5uZXJIVE1MID0gJ1knO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgdG9nZ2xlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZ2dsZUJvZHkpO1xuICAgIHRvZ2dsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2dnbGVUZXh0KTtcbiAgICB0b2dnbGViYXIuYXBwZW5kQ2hpbGQodG9nZ2xlQ29udGFpbmVyKVxuICAgIGluc3RydWN0Q29udC5hcHBlbmRDaGlsZChpbnN0cnVjdFVMKTtcbiAgICB0b2dnbGViYXIuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3RDb250KTtcbiAgICByZXR1cm4gdG9nZ2xlYmFyO1xufVxuXG5mdW5jdGlvbiBtYWtlVHJheShwaWVjZXMpIHtcbiAgICBjb25zdCB0cmF5ID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdzZXQtdHJheScgfSk7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMCwgaiA9IE1hdGguZmxvb3IoKHBpZWNlcy5sZW5ndGgpIC8gMik7IGogPCBwaWVjZXMubGVuZ3RoOyBpKyssIGorKykge1xuICAgICAgICBpZiAoaSA8IE1hdGguZmxvb3IocGllY2VzLmxlbmd0aCAvIDIpKSB7IFxuICAgICAgICAgICAgdHJheS5hcHBlbmRDaGlsZChtYWtlVHJheUl0ZW0ocGllY2VzW2ldKSk7XG4gICAgICAgICAgICB0cmF5Lmxhc3RDaGlsZC5maXJzdENoaWxkLnNldEF0dHJpYnV0ZSgnZGF0YS10cmF5JywgYCR7aW5kZXgrK31gKTtcbiAgICAgICAgfVxuICAgICAgICB0cmF5LmFwcGVuZENoaWxkKG1ha2VUcmF5SXRlbShwaWVjZXNbal0pKTtcbiAgICAgICAgdHJheS5sYXN0Q2hpbGQuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJheScsIGAke2luZGV4Kyt9YCk7XG4gICAgfVxuICAgIHJldHVybiB0cmF5O1xufVxuXG4vLyBjcmVhdGUgaG9sZGVyIGZvciBpY29uc1xuZnVuY3Rpb24gbWFrZVRyYXlJdGVtKHBpZWNlKSB7XG4gICAgY29uc3QgaXRlbSA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAndHJheS1pdGVtJyB9KVxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQobWFrZVBpZWNlSWNvbihwaWVjZSkpO1xuICAgIHJldHVybiBpdGVtO1xufVxuXG4vLyBjcmVhdGUgaWNvbnNcbmZ1bmN0aW9uIG1ha2VQaWVjZUljb24oc2l6ZSkge1xuICAgIGNvbnN0IGljb24gPSBtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2ljb24tcGllY2UnIH0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2ljb24tY2VsbCcgfSk7XG4gICAgICAgIGljb24uYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxuICAgIGljb24uZGF0YXNldC5zaXplID0gc2l6ZTtcbiAgICAvLyBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB0aGlzLmRyYWdTdGFydChlKSk7XG4gICAgcmV0dXJuIGljb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRHJhZ0ljb24oc2l6ZSwgdmVydGljYWwsIHRyYXksIGNlbGxTaXplKSB7XG4gICAgY29uc3QgZHJhZ0ljb24gPSBtYWtlUGllY2VJY29uKE51bWJlcihzaXplKSk7XG4gICAgZHJhZ0ljb24uc2V0QXR0cmlidXRlKCdpZCcsICdkcmFnZ2VkJyk7XG4gICAgZHJhZ0ljb24uc2V0QXR0cmlidXRlKCdkYXRhLXRyYXknLCB0cmF5KTtcbiAgICBpZiAodmVydGljYWwpIHsgZHJhZ0ljb24uY2xhc3NMaXN0LmFkZCgnZHJhZy15JykgfVxuICAgIFsuLi5kcmFnSWNvbi5jaGlsZHJlbl0uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIGNoaWxkLnN0eWxlLmhlaWdodCA9IGNlbGxTaXplO1xuICAgICAgICBjaGlsZC5jbGFzc0xpc3QuYWRkKCdkcmFnLWNlbGwnKVxuICAgIH0pO1xuICAgIHJldHVybiBkcmFnSWNvbjsgXG59IiwibGV0IGVsZW1lbnQ7XG5sZXQgeE9mZjtcbmxldCB5T2ZmO1xuY29uc3QgbW92ZUhhbmRsZXIgPSBtb3ZlLmJpbmQodGhpcyk7XG5jb25zdCBlbmRIYW5kbGVyID0gZW5kLmJpbmQodGhpcyk7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIERyYWdFbGVtZW50KGUsIHgsIHkpIHtcbiAgICBlbGVtZW50ID0gZTtcbiAgICB4T2ZmID0geDtcbiAgICB5T2ZmID0geTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW92ZUhhbmRsZXIsIHRydWUpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZW5kSGFuZGxlciwgdHJ1ZSk7XG59XG5cblxuZnVuY3Rpb24gbW92ZShlKSB7XG4gICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlbGVtZW50LnN0eWxlLnRvcCA9IChlLmNsaWVudFkgLSB5T2ZmKSArICdweCc7XG4gICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gKGUuY2xpZW50WCAtIHhPZmYpICsgJ3B4Jztcbn1cblxuZnVuY3Rpb24gZW5kKGUpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW92ZUhhbmRsZXIsIHRydWUpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZW5kSGFuZGxlciwgdHJ1ZSk7XG59IiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gJy4vU2hpcC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBHYW1lYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKHNpemUpIHtcbiAgICAgICAgdGhpcy5TSVpFID0gc2l6ZTtcbiAgICAgICAgdGhpcy5hbGxTaGlwcyA9IFtdO1xuICAgICAgICB0aGlzLmJvYXJkID0gW107XG4gICAgICAgIHRoaXMuYWxsSGl0ID0gW107XG4gICAgICAgIHRoaXMuYWxsTWlzcyA9IFtdO1xuICAgICAgICB0aGlzLmFsbFBsYWNlZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemUgKiBzaXplOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmQucHVzaCh7c2hpcDogbnVsbCwgaGl0OiBmYWxzZX0pXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZ2V0SGl0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hbGxIaXQ7XG4gICAgfVxuXG4gICAgZ2V0TWlzcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxsTWlzcztcbiAgICB9XG5cbiAgICBnZXRQbGFjZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFsbFBsYWNlZDtcbiAgICB9XG5cbiAgICBnZXRTaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5TSVpFICogdGhpcy5TSVpFO1xuICAgIH1cblxuICAgIGlzSGl0KGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkW2luZGV4XS5oaXQ7XG4gICAgfVxuXG4gICAgLy8gcGxhY2UgbmV3IHNoaXAgb24gZ2FtZWJvYXJkIHJldHVybnMgc2hpcCBvciBmYWxzZSBpZiBub3QgbGVnYWwgcGxhY2VtZW50XG4gICAgYWRkU2hpcChzaGlwU2l6ZSwgaGVhZCwgdmVydGljYWwgPSBmYWxzZSkge1xuICAgICAgICAvLyBkaXNhbGxvdyBwbGFjZW1lbnQgYmV5b25kIGJvYXJkJ3MgYm91bmRhcmllc1xuICAgICAgICBpZiAoIXZlcnRpY2FsICYmICgoaGVhZCAlIHRoaXMuU0laRSkgKyBzaGlwU2l6ZSA+IHRoaXMuU0laRSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHZlcnRpY2FsICYmIChNYXRoLmZsb29yKGhlYWQgLyB0aGlzLlNJWkUpKSArIHNoaXBTaXplID4gdGhpcy5TSVpFKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgdG9QbGFjZSA9IHRoaXMuZ2V0SW5kZWNlcyhzaGlwU2l6ZSwgaGVhZCwgdmVydGljYWwpO1xuICAgICAgICBcbiAgICAgICAgLy8gaW5zcGVjdCBmb3IgYW55IG92ZXJsYXBwaW5nIGNvbmZsaWN0XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9QbGFjZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbdG9QbGFjZVtpXV0uc2hpcCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG5ld1NoaXAgPSBuZXcgU2hpcChzaGlwU2l6ZSk7XG4gICAgICAgIHRvUGxhY2UuZm9yRWFjaChpbmRleCA9PiB7XG4gICAgICAgICAgICB0aGlzLmFsbFBsYWNlZC5wdXNoKGluZGV4KTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbaW5kZXhdLnNoaXAgPSBuZXdTaGlwXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFsbFNoaXBzLnB1c2godG9QbGFjZSk7XG4gICAgICAgIHJldHVybiBuZXdTaGlwO1xuICAgIH1cblxuICAgIC8vIHJldHVybnMgYW4gYXJyYXkgb2YgYSBzaGlwJ3Mgc2VxdWVudGlhbCBwb3NpdGlvbmluZ1xuICAgIGdldEluZGVjZXMoc2l6ZSwgaGVhZCwgdmVydGljYWwpIHtcbiAgICAgICAgY29uc3QgaW5kZWNlcyA9IFtdO1xuICAgICAgICBpZiAodmVydGljYWwpIHtcbiAgICAgICAgICAgIHdoaWxlIChzaXplLS0gPiAwKSB7XG4gICAgICAgICAgICAgICAgaW5kZWNlcy5wdXNoKGhlYWQpO1xuICAgICAgICAgICAgICAgIGhlYWQgKz0gdGhpcy5TSVpFO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdoaWxlIChzaXplLS0gPiAwKSB7XG4gICAgICAgICAgICAgICAgaW5kZWNlcy5wdXNoKGhlYWQrKyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluZGVjZXM7XG4gICAgfVxuXG4gICAgLy8gc2V0cyBhdHRhY2sgYWN0aW9ucywgbXVzdCBiZSBpbnRlZ2VyIGFuZCB3aXRoaW4gdGhlIGdhbWVib2FyZCwgaWdub3JlcyBzcGFjZXMgYWxyZWFkeSBoaXRcbiAgICByZWNlaXZlQXR0YWNrKGluZGV4KSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5kZXggIT0gJ251bWJlcicpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcigndmFsdWUgbXVzdCBiZSBOdW1iZXInKSB9O1xuICAgICAgICBpZiAoIU51bWJlci5pc0ludGVnZXIoaW5kZXgpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ09ubHkgaW50ZWdlciB2YWx1ZXMnKSB9O1xuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMuYm9hcmQubGVuZ3RoKSB7IHRocm93IG5ldyBSYW5nZUVycm9yKGB2YWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgJHt0aGlzLmJvYXJkLmxlbmd0aCAtIDF9YCk7IH1cbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbaW5kZXhdLmhpdCkgeyByZXR1cm47IH1cblxuICAgICAgICB0aGlzLmJvYXJkW2luZGV4XS5oaXQgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5ib2FyZFtpbmRleF0uc2hpcCkge1xuICAgICAgICAgICAgdGhpcy5ib2FyZFtpbmRleF0uc2hpcC5oaXQoKTtcbiAgICAgICAgICAgIHRoaXMuYWxsSGl0LnB1c2goaW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRbaW5kZXhdLnNoaXA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFsbE1pc3MucHVzaChpbmRleCk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNvbmZpcm1zIHRoYXQgdGhlIHNoaXAgYXQgZWFjaCBmcm9udCBwb3NpdGlvbiBpbiBhbGxTaGlwcyBpcyBzdW5rXG4gICAgaXNTdW5rKCkge1xuICAgICAgICBsZXQgc3VuayA9IHRydWU7XG4gICAgICAgIHRoaXMuYWxsU2hpcHMuZm9yRWFjaChzaGlwID0+IHsgXG4gICAgICAgICAgICBpZiAoIXRoaXMuYm9hcmRbc2hpcFswXV0uc2hpcC5pc1N1bmsoKSkgeyBzdW5rID0gZmFsc2U7IH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzdW5rO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9HYW1lYm9hcmRcIjtcbi8vIGhvbGRzIHBsYXllcidzIGdhbWVib2FyZCwgY2FuIGRldGVybWluZSBuZXh0IG1vdmUgaWYgY3B1IFxuLy8gcGFzcyBhbiBhcnJheSBvZiBhcnJheXMgaW4gW3NoaXAgc2l6ZSwgc2hpcCBpbmRleCwgaXMgdmVydGljYWwodHJ1ZS9mYWxzZSldIGZvcm1hdFxuLy8gdG8gcG9wdWxhdGUgdGhlIGdhbWVib2FyZFxuZXhwb3J0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgdG9BZGQgPSBbXSkge1xuICAgICAgICB0aGlzLlNJWkUgPSAxMDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBHYW1lYm9hcmQodGhpcy5TSVpFKTtcbiAgICAgICAgdGhpcy5uZXh0TW92ZSA9IFtdO1xuICAgICAgICBpZiAodG9BZGQpIHsgdG9BZGQuZm9yRWFjaChzaGlwID0+IHRoaXMuYm9hcmQuYWRkU2hpcChzaGlwWzBdLCBzaGlwWzFdLCBzaGlwWzJdKSApOyB9XG4gICAgICAgIGVsc2UgeyB0aGlzLnJhbmRvbUJvYXJkKCkuZm9yRWFjaChzaGlwID0+IHRoaXMuYm9hcmQuYWRkU2hpcChzaGlwWzBdLCBzaGlwWzFdLCBzaGlwWzJdKSApOyB9XG4gICAgfTtcblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgZ2V0QWxsU2hpcEluZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZC5nZXRQbGFjZWQoKTtcbiAgICB9XG5cbiAgICBnZXRNaXNzSW5kZXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkLmdldE1pc3MoKTtcbiAgICB9XG5cbiAgICBnZXRIaXRJbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQuZ2V0SGl0KCk7XG4gICAgfVxuXG4gICAgLy8gY29uZmlybXMgaWYgcGxheWVyIGlzIGRlZmVhdGVkXG4gICAgaXNEZWZlYXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQuaXNTdW5rKCk7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJucyBlaXRoZXIgdGhlIGhpdCBzaGlwIG9yIG51bGxcbiAgICB0YWtlSGl0KGluZGV4KSB7XG4gICAgICAgIHJldHVybiAodGhpcy5ib2FyZC5yZWNlaXZlQXR0YWNrKGluZGV4KSkgPyAnaGl0JyA6ICdtaXNzJztcbiAgICB9XG5cbiAgICAvLyBjb25maXJtcyBpZiBhIG1vdmUgaXMgdmFsaWRcbiAgICBpc1ZhbGlkTW92ZShpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMuYm9hcmQuZ2V0U2l6ZSgpKSB7IHJldHVybiBmYWxzZSB9O1xuICAgICAgICByZXR1cm4gIXRoaXMuYm9hcmQuaXNIaXQoaW5kZXgpO1xuICAgIH1cblxuICAgIC8vIHRha2VzIGEgY3B1IHR1cm4gYWdhaW5zdCBwbGF5ZXIsIHJldHVybnMgbW92ZSB0YWtlblxuICAgIGNwdVR1cm4oKSB7XG4gICAgICAgIGxldCBtb3ZlO1xuICAgICAgICBpZiAodGhpcy5uZXh0TW92ZS5sZW5ndGggPT09IDApIHsgbW92ZSA9IHRoaXMucmFuZG9tTW92ZSgpOyB9XG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHRoaXMudGFrZUhpdChtb3ZlKTtcbiAgICAgICAgcmV0dXJuIG1vdmU7XG4gICAgfVxuXG4gICAgLy8gZWxlY3QgYSB2YWxpZCBmcmVlIHNwYWNlIHRvIGF0dGFjayBmcm9tIHRoZSBnYW1lYm9hcmRcbiAgICByYW5kb21Nb3ZlKCkge1xuICAgICAgICBjb25zdCBtb3ZlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5wb3codGhpcy5TSVpFLCAyKSk7XG4gICAgICAgIHJldHVybiAodGhpcy5pc1ZhbGlkTW92ZShtb3ZlKSkgPyBtb3ZlIDogdGhpcy5yYW5kb21Nb3ZlKCk7XG4gICAgfVxuXG4gICAgcmFuZG9tQm9hcmQoKSB7XG4gICAgICAgIGNvbnN0IGFsbFNoaXBzID0gW107XG4gICAgICAgIHJldHVybiBhbGxTaGlwcztcbiAgICB9XG59O1xuIiwiaW1wb3J0IHsgRHJhZ0VsZW1lbnQgfSBmcm9tICcuL0RyYWdFbGVtZW50LmpzJztcbmltcG9ydCB7IGFkanVzdFRvSW5kZXgsIGJ1aWxkU2V0UGxheWVyLCBtYWtlRHJhZ0ljb24gfSBmcm9tICcuL0RPTUhlbHBlcnMuanMnO1xuXG4vLyBEaXNwbGF5IGZvciBpbml0aWFsemlpbmcgYSBwbGF5ZXJcbmV4cG9ydCBjbGFzcyBTZXRQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKHNpemUsIHBpZWNlcywgaXNNdWx0aSkge1xuICAgICAgICB0aGlzLlNJWkUgPSBzaXplO1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGJ1aWxkU2V0UGxheWVyKHNpemUsIHBpZWNlcywgaXNNdWx0aSk7XG4gICAgICAgIHRoaXMuYmluZFRyYXkoKTtcbiAgICAgICAgdGhpcy5kcmFnRXZlbnQgPSB7XG4gICAgICAgICAgICBkcmFnT3ZlcjogbnVsbCxcbiAgICAgICAgICAgIGRyYWdHcm91cDogW11cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRJdGVtID0gW107XG4gICAgICAgIHRoaXMuZHJhZ1BpY2tVcFN0YXJ0SGFuZGxlciA9IHRoaXMuZHJhZ1BpY2tVcFN0YXJ0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhZ01vdmVIYW5kbGVyID0gdGhpcy5kcmFnTW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYWdFbmRIYW5kbGVyID0gdGhpcy5kcmFnRW5kLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgYmluZFRyYXkoKSB7XG4gICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkucXVlcnlTZWxlY3RvckFsbCgnLmljb24tcGllY2UnKS5mb3JFYWNoKGljb24gPT4ge1xuICAgICAgICAgICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4gdGhpcy5kcmFnU3RhcnQoZSkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRDb250YWluZXIoKSB7IHJldHVybiB0aGlzLmNvbnRhaW5lcjsgfVxuICAgIGdldEdyaWQoKSB7IHJldHVybiB0aGlzLmdldENvbnRhaW5lcigpLnF1ZXJ5U2VsZWN0b3IoJy5ncmlkLWJveCcpOyB9XG4gICAgZ2V0VHJheSgpIHsgcmV0dXJuIHRoaXMuZ2V0Q29udGFpbmVyKCkucXVlcnlTZWxlY3RvcignLnNldC10cmF5Jyk7IH1cbiAgICBnZXRCdXR0b24oKSB7IHJldHVybiB0aGlzLmdldENvbnRhaW5lcigpLnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtYnRuJyk7IH1cbiAgICBnZXRNdWx0aSgpIHsgcmV0dXJuIHRoaXMuZ2V0Q29udGFpbmVyKCkucXVlcnlTZWxlY3RvcignI3N1Ym1pdC1jaGsnKS5jaGVja2VkIH1cbiAgICBnZXREYXRhKCkge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgbXVsdGk6IHRoaXMuZ2V0TXVsdGkoKSxcbiAgICAgICAgICAgIGJvYXJkOiBbXVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0SXRlbS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgY29uc3QgYWRkID0gW107XG4gICAgICAgICAgICBhZGQucHVzaChpdGVtLnNpemUpO1xuICAgICAgICAgICAgYWRkLnB1c2goaXRlbS5oZWFkKTtcbiAgICAgICAgICAgIGFkZC5wdXNoKGl0ZW0uc2V0WSk7XG4gICAgICAgICAgICBkYXRhLmJvYXJkLnB1c2goYWRkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIC8vIGFwcGVuZCBzZXRwbGF5ZXIgdG8gbWFpbiBjb250YWluZXIsIHNldHMgaW5pdGlhbCBoZWlnaHQgb2YgYWxsIGljb24gY2VsbHNcbiAgICAvLyBiaW5kcyB3aW5kb3cgcmVzaXppbmcgdG8gcmVzaXplIGljb25zIHRvIG1hdGNoIGdyaWQgc2l6ZVxuICAgIGRpc3BsYXkoKSB7IFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250YWluZXInKS5hcHBlbmRDaGlsZCh0aGlzLmdldENvbnRhaW5lcigpKTsgXG4gICAgICAgIHRoaXMuc2V0VHJheUljb25TaXplKClcbiAgICAgICAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZC1ib3gnKS5jaGlsZHJlbi5pdGVtKDExKS5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaWNvbi1jZWxsJykuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBjbGVhciBzZXRwbGF5ZXJcbiAgICByZW1vdmUoKSB7IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZXQtY29udGFpbmVyJykucmVtb3ZlKCk7IH1cblxuICAgIC8vIHNldCB0aGUgaWNvbidzIGNlbGwgc2l6ZSB0byBtYXRjaCB0aGUgZ3JpZCdzIGNlbGwgc2l6ZVxuICAgIHNldFRyYXlJY29uU2l6ZSgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmljb24tY2VsbCcpLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICBjZWxsLnN0eWxlLmhlaWdodCA9IHRoaXMuR2V0VHJheUljb25TaXplKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIEdldFRyYXlJY29uU2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZ2V0R3JpZCgpLmNoaWxkcmVuLml0ZW0oYWRqdXN0VG9JbmRleCgwLCB0aGlzLlNJWkUpKS5jbGllbnRIZWlnaHR9cHhgO1xuICAgIH1cblxuICAgIC8vIEFsbCBkcmFnL2Ryb3AgYWN0aW9ucyB0byBmb2xsb3dcbiAgICAvLyBjcmVhdGVzIGFuZCBhcHBlbmRzIGRyYWdnZWQgaWNvbiwgc2V0cyBkcmFnIGJpbmRpbmdzXG4gICAgZHJhZ1N0YXJ0KGUpIHtcbiAgICAgICAgY29uc3QgaWNvbiA9IChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ljb24tY2VsbCcpKSA/IGUudGFyZ2V0LnBhcmVudE5vZGUgOiBlLnRhcmdldDtcbiAgICAgICAgaWYgKGljb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdpY29uLWRpc2FibGUnKSkgeyByZXR1cm4gfVxuICAgICAgICBjb25zdCBkcmFnSWNvbiA9IG1ha2VEcmFnSWNvbihcbiAgICAgICAgICAgIE51bWJlcihpY29uLmRhdGFzZXQuc2l6ZSksXG4gICAgICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZ2dsZS1ib2R5JykuZGF0YXNldC55ID09PSAndHJ1ZScpLFxuICAgICAgICAgICAgaWNvbi5kYXRhc2V0LnRyYXksXG4gICAgICAgICAgICB0aGlzLkdldFRyYXlJY29uU2l6ZSgpXG4gICAgICAgICAgICApO1xuICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ2ljb24tZGlzYWJsZScpO1xuICAgICAgICBpY29uLmFwcGVuZENoaWxkKGRyYWdJY29uKTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gKGRyYWdJY29uLmNsYXNzTGlzdC5jb250YWlucygnZHJhZy15JykpXG4gICAgICAgICAgICA/IHRoaXMuZ2V0WW9mZnNldChkcmFnSWNvbiwgZS5jbGllbnRYIC0gZHJhZ0ljb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdClcbiAgICAgICAgICAgIDogMDtcbiAgICAgICAgaWYgKCFkcmFnSWNvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2RyYWcteScpKSB7IFxuICAgICAgICAgICAgdGhpcy5zZXRYQXR0cmlidXRlKGRyYWdJY29uLCBlLmNsaWVudFggLSBkcmFnSWNvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KTsgXG4gICAgICAgIH07XG4gICAgICAgIERyYWdFbGVtZW50KGRyYWdJY29uLCBlLmNsaWVudFggLSBvZmZzZXQsIGUuY2xpZW50WSk7IFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5kcmFnRW5kSGFuZGxlcik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZHJhZ01vdmVIYW5kbGVyLCB0cnVlKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGFpbmVyJykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuZHJhZ0VuZEhhbmRsZXIsIHRydWUpO1xuICAgIH1cblxuICAgIGRyYWdQaWNrVXBTdGFydChlKSB7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIHdoaWxlICh0aGlzLnNldEl0ZW1baW5kZXhdLnRyYXkgIT0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQuZ2V0dHJheSkpIHsgaW5kZXgrKzsgfVxuICAgICAgICBjb25zdCBzZWxlY3QgPSB0aGlzLnNldEl0ZW1baW5kZXhdO1xuICAgICAgICBjb25zdCBkcmFnSXRlbSA9IG1ha2VEcmFnSWNvbihcbiAgICAgICAgICAgIHNlbGVjdC5zaXplLFxuICAgICAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2dnbGUtYm9keScpLmRhdGFzZXQueSA9PT0gJ3RydWUnKSxcbiAgICAgICAgICAgIHNlbGVjdC50cmF5LFxuICAgICAgICAgICAgdGhpcy5HZXRUcmF5SWNvblNpemUoKVxuICAgICAgICApXG4gICAgICAgIGUudGFyZ2V0LmFwcGVuZENoaWxkKGRyYWdJdGVtKTtcbiAgICAgICAgdGhpcy5jb25maWdQaWNrVXAoZHJhZ0l0ZW0sIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9nZ2xlLWJvZHknKS5kYXRhc2V0LnkgPT09ICd0cnVlJykpO1xuICAgICAgICBEcmFnRWxlbWVudChkcmFnSXRlbSwgZS5jbGllbnRYLCBlLmNsaWVudFkpO1xuICAgICAgICB0aGlzLnJlbW92ZVBsYWNlZChzZWxlY3QuaGVhZCwgc2VsZWN0LnNpemUsIHNlbGVjdC5zZXRZKTtcbiAgICAgICAgdGhpcy5zZXRJdGVtLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmRyYWdFbmRIYW5kbGVyKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGFpbmVyJykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5kcmFnTW92ZUhhbmRsZXIsIHRydWUpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5kcmFnRW5kSGFuZGxlciwgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5nZXRCdXR0b24oKS5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gQ29uZmlndXJlIHBvc2l0aW9uIGFuZCBkYXRhIGF0dHJpYnV0ZXMgd2hlbiBwaWNraW5nIHVwIGZyb20gdGhlIGJvYXJkXG4gICAgY29uZmlnUGlja1VwKGVsZW1lbnQsIGlzWSkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICAgICAgdGhpcy5zZXRYQXR0cmlidXRlKGVsZW1lbnQsIDApO1xuICAgIH1cblxuICAgIC8vIGNsZWFycyBhbGwgY2VsbHMgb2YgcGxhY2VkIG9iamVjdCdzIGJpbmRpbmdzXG4gICAgcmVtb3ZlUGxhY2VkKGhlYWRJbmRleCwgbGVuZ3RoLCBpc1kpIHtcbiAgICAgICAgbGV0IGNlbGwgPSB0aGlzLmdldEdyaWQoKS5jaGlsZHJlbi5pdGVtKGFkanVzdFRvSW5kZXgoaGVhZEluZGV4LCB0aGlzLlNJWkUpKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdzZXQnKTtcbiAgICAgICAgICAgIGNlbGwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWdldHRyYXknKTtcbiAgICAgICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5kcmFnUGlja1VwU3RhcnRIYW5kbGVyLCB0cnVlKTtcbiAgICAgICAgICAgIGNvbnN0IG5leHRDZWxsID0gKGlzWSkgXG4gICAgICAgICAgICAgICAgPyBOdW1iZXIoY2VsbC5kYXRhc2V0LmluZGV4KSArIHRoaXMuU0laRSBcbiAgICAgICAgICAgICAgICA6IE51bWJlcihjZWxsLmRhdGFzZXQuaW5kZXgpICsgMTtcbiAgICAgICAgICAgIGNlbGwgPSB0aGlzLmdldEdyaWQoKS5jaGlsZHJlbi5pdGVtKGFkanVzdFRvSW5kZXgobmV4dENlbGwsIHRoaXMuU0laRSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0WEF0dHJpYnV0ZShlbGVtZW50LCB4UG9zKSB7XG4gICAgICAgIGNvbnN0IGxlZnQgPSBNYXRoLmZsb29yKHhQb3MgLyBlbGVtZW50LmZpcnN0Q2hpbGQuY2xpZW50V2lkdGgpO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1sZWZ0JywgbGVmdCk7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXJpZ2h0JywgZWxlbWVudC5jaGlsZEVsZW1lbnRDb3VudCAtIGxlZnQgLSAxKTtcbiAgICB9XG5cbiAgICBnZXRZb2Zmc2V0KGVsZW1lbnQsIHhQb3MpIHtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0geFBvcyAtIChlbGVtZW50LmNsaWVudFdpZHRoIC8gMilcbiAgICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7b2Zmc2V0fXB4YDtcbiAgICAgICAgcmV0dXJuIG9mZnNldDtcbiAgICB9XG5cbiAgICAvLyBvbiBkcmFnIGludmVzdGlnYXRlIGlmIGVsZW1lbnQgYmVsb3cgY3Vyc29yIGlzIGEgdmFsaWQgaG92ZXIgdGFyZ2V0XG4gICAgLy8gYW5kIGFkanVzdCBkaXNwbGF5ZWQgaG92ZXIgdGFyZ2V0c1xuICAgIGRyYWdNb3ZlKGUpIHtcbiAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHJhZ2dlZCcpO1xuICAgICAgICBpY29uLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgbGV0IGJlbG93ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChlLmNsaWVudFgsIGUuY2xpZW50WSk7XG4gICAgICAgIGljb24uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgaWYgKGJlbG93LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0YWJsZScpIFxuICAgICAgICAgICAgJiYgdGhpcy5kcmFnRXZlbnQuZHJhZ092ZXIgIT0gYmVsb3cpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFySG92ZXIoKTtcbiAgICAgICAgICAgICAgICBpZiAoaWNvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2RyYWcteScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SG92ZXJZKFxuICAgICAgICAgICAgICAgICAgICAgICAgYmVsb3csXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uLmNoaWxkRWxlbWVudENvdW50KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEhvdmVyWChcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlbG93LCBcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihpY29uLmRhdGFzZXQubGVmdCksXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoaWNvbi5kYXRhc2V0LnJpZ2h0KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCFiZWxvdy5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGFibGUnKSkge1xuICAgICAgICAgICAgdGhpcy5jbGVhckhvdmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGdW5jdGlvbiB0byBjbGVhciBkcmFnZ2VkIGFjdGlvbnNcbiAgICBkcmFnRW5kKGUpIHtcbiAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCB2YWxpZFNldCA9IHRydWU7XG4gICAgICAgIGNvbnN0IGRyYWdJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RyYWdnZWQnKTtcbiAgICAgICAgaWYgKGRyYWdJdGVtLmNoaWxkRWxlbWVudENvdW50ID09PSB0aGlzLmRyYWdFdmVudC5kcmFnR3JvdXAubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmRyYWdFdmVudC5kcmFnR3JvdXAuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NldCcpKSB7IHZhbGlkU2V0ID0gZmFsc2U7fVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHsgdmFsaWRTZXQgPSBmYWxzZTsgfVxuICAgICAgICBpZiAodmFsaWRTZXQpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhZ0V2ZW50LmRyYWdHcm91cC5mb3JFYWNoKGNlbGwgPT4geyBcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NldCcpOyBcbiAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS1nZXR0cmF5JywgZHJhZ0l0ZW0uZGF0YXNldC50cmF5KTtcbiAgICAgICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuZHJhZ1BpY2tVcFN0YXJ0SGFuZGxlciwgdHJ1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuc2V0SXRlbS5wdXNoKHtcbiAgICAgICAgICAgICAgICB0cmF5OiBOdW1iZXIoZHJhZ0l0ZW0uZGF0YXNldC50cmF5KSxcbiAgICAgICAgICAgICAgICBoZWFkOiAoZHJhZ0l0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdkcmFnLXknKSkgXG4gICAgICAgICAgICAgICAgICAgID8gTnVtYmVyKHRoaXMuZHJhZ0V2ZW50LmRyYWdHcm91cFswXS5kYXRhc2V0LmluZGV4KSBcbiAgICAgICAgICAgICAgICAgICAgOiBOdW1iZXIodGhpcy5kcmFnRXZlbnQuZHJhZ0dyb3VwWzBdLmRhdGFzZXQuaW5kZXggLSBkcmFnSXRlbS5kYXRhc2V0LmxlZnQpLFxuICAgICAgICAgICAgICAgIHNldFk6IGRyYWdJdGVtLmNsYXNzTGlzdC5jb250YWlucygnZHJhZy15JyksXG4gICAgICAgICAgICAgICAgc2l6ZTogZHJhZ0l0ZW0uY2hpbGRFbGVtZW50Q291bnRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0LXRyYXknKVxuICAgICAgICAgICAgLmNoaWxkcmVuLml0ZW0oTnVtYmVyKGRyYWdJdGVtLmRhdGFzZXQudHJheSkpXG4gICAgICAgICAgICAuZmlyc3RDaGlsZC5jbGFzc0xpc3RcbiAgICAgICAgICAgIC5yZW1vdmUoJ2ljb24tZGlzYWJsZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0VHJheSgpLmNoaWxkRWxlbWVudENvdW50ID09PSB0aGlzLnNldEl0ZW0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmdldEJ1dHRvbigpLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdldEJ1dHRvbigpLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcmFnZ2VkJykucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMuY2xlYXJIb3ZlcigpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250YWluZXInKS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5kcmFnRW5kSGFuZGxlcik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRhaW5lcicpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZHJhZ01vdmVIYW5kbGVyLCB0cnVlKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGFpbmVyJykucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuZHJhZ0VuZEhhbmRsZXIsIHRydWUpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBhZGRpbmcgaG92ZXIgZXZlbnRcbiAgICBzZXRIb3ZlclgoY2VsbCwgbGVmdCwgcmlnaHQpIHsgIFxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XG4gICAgICAgIHRoaXMuZHJhZ0V2ZW50LmRyYWdPdmVyID0gY2VsbDsgICAgICAgIFxuICAgICAgICB0aGlzLmRyYWdFdmVudC5kcmFnR3JvdXAucHVzaChjZWxsKTtcbiAgICAgICAgdGhpcy5ob3ZlclNpYmxpbmdzKGNlbGwsIGxlZnQsIHRydWUpO1xuICAgICAgICB0aGlzLmhvdmVyU2libGluZ3MoY2VsbCwgcmlnaHQsIGZhbHNlKTsgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICB9XG5cbiAgICBzZXRIb3Zlclkocm9vdCwgbnVtU2liKSB7XG4gICAgICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZC1ib3gnKTtcbiAgICAgICAgbGV0IGluZGV4ID0gTnVtYmVyKHJvb3QuZGF0YXNldC5pbmRleCk7XG4gICAgICAgIGxldCB0b0FkZCA9IHJvb3Q7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtU2liOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0b0FkZCkge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gTnVtYmVyKHRvQWRkLmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ0V2ZW50LmRyYWdHcm91cC5wdXNoKHRvQWRkKTtcbiAgICAgICAgICAgICAgICB0b0FkZC5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xuICAgICAgICAgICAgICAgIHRvQWRkID0gZ3JpZC5jaGlsZHJlbi5pdGVtKGFkanVzdFRvSW5kZXgoaW5kZXggKyB0aGlzLlNJWkUsIHRoaXMuU0laRSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byBoaWdobGlnaHQgdGhlIGNvcnJlY3QgbmVpZ2hib3Jpbmcgc2libGluZ3Mgb24gaG92ZXJcbiAgICBob3ZlclNpYmxpbmdzKHJvb3QsIG51bVNpYiwgbGVmdCkge1xuICAgICAgICBsZXQgdG9BZGQgPSByb290O1xuICAgICAgICBsZXQgaW5kZXggPSBOdW1iZXIocm9vdC5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihpbmRleCAvIHRoaXMuU0laRSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtU2liOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrID0gKGxlZnQpID8gKChpbmRleCAtIChpICsgMSkpIC8gdGhpcy5TSVpFKSA6ICgoaW5kZXggKyAoaSArIDEpKSAvIHRoaXMuU0laRSk7XG4gICAgICAgICAgICBpZiAocm93ID09PSBNYXRoLmZsb29yKGNoZWNrKSkge1xuICAgICAgICAgICAgICAgIHRvQWRkID0gKGxlZnQpID8gdG9BZGQucHJldmlvdXNTaWJsaW5nIDogdG9BZGQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgdG9BZGQuY2xhc3NMaXN0LmFkZCgnaG92ZXInKTsgXG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnRXZlbnQuZHJhZ0dyb3VwLnB1c2godG9BZGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmVzZXRzIHNldCBob3ZlciBhY3Rpb25zXG4gICAgY2xlYXJIb3ZlcigpIHtcbiAgICAgICAgdGhpcy5kcmFnRXZlbnQuZHJhZ092ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmRyYWdFdmVudC5kcmFnR3JvdXAuZm9yRWFjaChjZWxsID0+IGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKSk7XG4gICAgICAgIHRoaXMuZHJhZ0V2ZW50LmRyYWdHcm91cC5sZW5ndGggPSAwO1xuICAgIH1cblxuICAgIFxufSIsIi8vIGJhc2ljIHVuaXQgdXNlZCBpbiBnYW1lLCBtdXN0IHBhc3MgaW50ZWdlciB2YWx1ZSB0byBkZXRlcm1pbmUgc2l6ZVxuXG5leHBvcnQgY2xhc3MgU2hpcCB7XG4gICAgLy8gdGVzdHMgdG8gZW5zdXJlIHZhbHVlIGlzIGFuIGludGVnZXIgbnVtYmVyIG92ZXIgMFxuICAgIGNvbnN0cnVjdG9yKHNpemUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzaXplICE9ICdudW1iZXInKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbHVlIG11c3QgYmUgTnVtYmVyJykgfTtcbiAgICAgICAgaWYgKHNpemUgPD0gMCkgeyB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVmFsdWUgbXVzdCBiZSBncmVhdGVyIHRoYW4gMCcpIH07XG4gICAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihzaXplKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdPbmx5IGludGVnZXIgdmFsdWVzJykgfTtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy5oaXRzID0gMDtcbiAgICB9XG5cbiAgICBnZXRIaXRzKCkgeyByZXR1cm4gdGhpcy5oaXRzOyB9XG5cbiAgICAvLyBpbmNyZWFzZXMgc2hpcHMgaGl0IHZhbHVlXG4gICAgaGl0KCkge1xuICAgICAgICB0aGlzLmhpdHMgKz0gMTtcbiAgICB9XG5cbiAgICAvLyBkZXRlcm1pbmVzIHRoZSBzdGF0ZSBvZiB0aGUgc2hpcFxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGl0cyA+PSB0aGlzLnNpemU7XG4gICAgfVxufSIsImltcG9ydCB7IGluaXRpYWxpemVET00sIFBsYXlCb2FyZCB9IGZyb20gXCIuL0RPTUNvbnRyb2wuanNcIjtcbmltcG9ydCB7IFNldFBsYXllciB9IGZyb20gXCIuL1NldFBsYXllci5qc1wiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9QbGF5ZXIuanMnO1xuXG5leHBvcnQgY2xhc3MgR2FtZUNvbnRyb2wge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLlNJWkUgPSAxMDtcbiAgICAgICAgdGhpcy5wbGF5ZXIxID0geyBwbGF5ZXI6IG51bGwsIGJvYXJkOiBudWxsIH07XG4gICAgICAgIHRoaXMucGxheWVyMiA9IHsgcGxheWVyOiBudWxsLCBib2FyZDogbnVsbCB9O1xuICAgICAgICB0aGlzLm11bHRpcGxheWVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2VsZWN0TW92ZSA9IG51bGw7XG4gICAgICAgIHRoaXMudHVybk51bWJlciA9IDA7XG4gICAgfVxuXG4gICAgLy8gYmVnaW4gdGhlIGdhbWVsb29wXG4gICAgc3RhcnRHYW1lKCkge1xuICAgICAgICBpbml0aWFsaXplRE9NKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlUGxheWVyKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlUGxheWVyKGlzTXVsdGkpIHtcbiAgICAgICAgY29uc3Qgc2V0UGxheWVyID0gbmV3IFNldFBsYXllcigxMCwgWzUsIDQsIDMsIDMsIDJdLCBpc011bHRpKTtcbiAgICAgICAgc2V0UGxheWVyLmdldEJ1dHRvbigpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBzZXRQbGF5ZXIuZ2V0RGF0YSgpO1xuICAgICAgICAgICAgc2V0UGxheWVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgLy8gc2V0IHNlY29uZCBwbGF5ZXJcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllcjEucGxheWVyKSB7IFxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyMi5wbGF5ZXIgPSBuZXcgUGxheWVyKCdwbGF5ZXIyJywgZGF0YS5ib2FyZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIyLmJvYXJkID0gbmV3IFBsYXlCb2FyZCh0aGlzLlNJWkUsIHRoaXMucGxheWVyMi5wbGF5ZXIuZ2V0QWxsU2hpcEluZGV4KCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuYmluZEJvYXJkKHRoaXMucGxheWVyMik7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJCb2FyZCgpXG4gICAgICAgICAgICAgICAgICAgIC5jcmVhdGVUdXJuQ292ZXIodGhpcy5nZXRQbGF5ZXIoKS5nZXROYW1lKCkpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB0aGlzLmdldFBsYXllckJvYXJkKCkuY2xlYXJUdXJuQ292ZXIoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJCb2FyZCgpLmRpc3BsYXlCb2FyZCgpO1xuICAgICAgICAgICAgLy8gc2V0IGZpcnN0IHBsYXllciBhbmQgcHJvbXB0IGZvciBzZWNvbmRcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5tdWx0aSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyMS5wbGF5ZXIgPSBuZXcgUGxheWVyKCdwbGF5ZXIxJywgZGF0YS5ib2FyZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIxLmJvYXJkID0gbmV3IFBsYXlCb2FyZCh0aGlzLlNJWkUsIHRoaXMucGxheWVyMS5wbGF5ZXIuZ2V0QWxsU2hpcEluZGV4KCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuYmluZEJvYXJkKHRoaXMucGxheWVyMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllciA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVQbGF5ZXIodHJ1ZSk7XG4gICAgICAgICAgICAvLyBzZXQgc2luZ2xlIHBsYXllciBhbmQgc2V0IGNwdSBwbGF5ZXJcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIxLnBsYXllciA9IG5ldyBQbGF5ZXIoJ3BsYXllcjEnLCBkYXRhLmJvYXJkKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcjEuYm9hcmQgPSBuZXcgUGxheUJvYXJkKHRoaXMuU0laRSwgdGhpcy5wbGF5ZXIxLnBsYXllci5nZXRBbGxTaGlwSW5kZXgoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kQm9hcmQodGhpcy5wbGF5ZXIxKTtcbiAgICAgICAgICAgICAgICB0aGlzLmR1bW15U2V0UGxheWVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJCb2FyZCgpLmRpc3BsYXlCb2FyZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc2V0UGxheWVyLmRpc3BsYXkoKTtcbiAgICB9XG5cbiAgICAvLyB0ZXN0aW5nIHZhbHVlc1xuICAgIGR1bW15U2V0UGxheWVyKCkge1xuICAgICAgICBjb25zdCBkdW1teTEgPSBbXG4gICAgICAgICAgICBbNSwgMjUsIHRydWVdLFxuICAgICAgICAgICAgWzQsIDgzLCBmYWxzZV0sXG4gICAgICAgICAgICBbMywgMCwgZmFsc2VdLFxuICAgICAgICAgICAgWzMsIDUxLCB0cnVlXSxcbiAgICAgICAgICAgIFsyLCA0OCwgZmFsc2VdXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IGR1bW15MiA9IFtcbiAgICAgICAgICAgIFs1LCA5NSwgZmFsc2VdLFxuICAgICAgICAgICAgWzQsIDE2LCBmYWxzZV0sXG4gICAgICAgICAgICBbMywgNTMsIGZhbHNlXSxcbiAgICAgICAgICAgIFszLCA2OCwgdHJ1ZV0sXG4gICAgICAgICAgICBbMiwgMTIsIHRydWVdXG4gICAgICAgIF1cbiAgICAgICAgLy8gdGhpcy5wbGF5ZXIxID0gbmV3IFBsYXllcigncGxheWVyMScsIGR1bW15MSk7XG4gICAgICAgIC8vIHRoaXMuYmluZEJvYXJkKHRoaXMucGxheWVyMSk7XG4gICAgICAgIHRoaXMucGxheWVyMi5wbGF5ZXIgPSBuZXcgUGxheWVyKCdwbGF5ZXIyJywgZHVtbXkyKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIyLmJvYXJkID0gbmV3IFBsYXlCb2FyZCh0aGlzLlNJWkUsIHRoaXMucGxheWVyMi5wbGF5ZXIuZ2V0QWxsU2hpcEluZGV4KCkpO1xuICAgICAgICB0aGlzLmJpbmRCb2FyZCh0aGlzLnBsYXllcjIpXG4gICAgfVxuXG4gICAgLy8gRGV0ZXJtaW5lIHRoZSBhY3RpdmUgcGxheWVyXG4gICAgZ2V0UGxheWVyKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMudHVybk51bWJlciAlIDIgPT09IDApID8gdGhpcy5wbGF5ZXIxLnBsYXllciA6IHRoaXMucGxheWVyMi5wbGF5ZXI7IFxuICAgIH1cblxuICAgIGdldFBsYXllckJvYXJkKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMudHVybk51bWJlciAlIDIgPT09IDApID8gdGhpcy5wbGF5ZXIxLmJvYXJkIDogdGhpcy5wbGF5ZXIyLmJvYXJkOyBcbiAgICB9XG5cbiAgICAvLyBEZXRlcm1pbmUgdGhlIGN1cnJlbnQgbm9uIHBsYXllclxuICAgIGdldEFkdmVyc2FyeSgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnR1cm5OdW1iZXIgJSAyID09PSAwKSA/IHRoaXMucGxheWVyMi5wbGF5ZXIgOiB0aGlzLnBsYXllcjEucGxheWVyO1xuICAgIH1cblxuICAgIGdldEFkdmVyc2FyeUJvYXJkKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMudHVybk51bWJlciAlIDIgPT09IDApID8gdGhpcy5wbGF5ZXIyLmJvYXJkIDogdGhpcy5wbGF5ZXIxLmJvYXJkO1xuICAgIH1cblxuICAgIC8vIGJpbmRpbmdzIGZvciBwbGF5IGFyZWFcbiAgICBiaW5kQm9hcmQocGxheWVyKSB7XG4gICAgICAgIGNvbnN0IGRpc3BsYXkgPSBwbGF5ZXIuYm9hcmQ7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRpc3BsYXkuZ2V0QnV0dG9uKCk7XG4gICAgICAgIFxuICAgICAgICAvLyBiaW5kIGNsaWNrYWJsZSBjZWxsc1xuICAgICAgICBkaXNwbGF5LmdldFBsYXkoKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnb3Blbi1jZWxsJykpIHsgcmV0dXJuIH07XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RNb3ZlKSB7IGRpc3BsYXkudG9nZ2xlU2VsZWN0ZWQodGhpcy5zZWxlY3RNb3ZlKTsgfVxuICAgICAgICAgICAgZGlzcGxheS50b2dnbGVTZWxlY3RlZChlLnRhcmdldC5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0TW92ZSA9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgICAgIGRpc3BsYXkuc2V0QnV0dG9uKGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBiaW5kIGF0dGFjayBidXR0b25cbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXkuc2V0QnV0dG9uKCk7XG4gICAgICAgICAgICB0aGlzLnRha2VUdXJuKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEZ1bmN0aW9uIGZvciBhY3Rpb24gYnV0dG9uLCB0YWtlcyBhIHBsYXllciBzZWxlY3RlZCB0dXJuXG4gICAgdGFrZVR1cm4oKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZ2V0QWR2ZXJzYXJ5KCkudGFrZUhpdCh0aGlzLnNlbGVjdE1vdmUpO1xuICAgICAgICB0aGlzLmdldFBsYXllckJvYXJkKCkudXBkYXRlUGxheSh0aGlzLnNlbGVjdE1vdmUsIHJlc3VsdCk7XG4gICAgICAgIGlmICh0aGlzLmdldEFkdmVyc2FyeSgpLmlzRGVmZWF0ZWQoKSkgeyBcbiAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVyKClcbiAgICAgICAgICAgICAgICAuYm9hcmRcbiAgICAgICAgICAgICAgICAuY3JlYXRlR2FtZU92ZXIoJ1lPVSBXSU4hJylcbiAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckJvYXJkKCkucmVtb3ZlQm9hcmQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEdhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcbiAgICAgICAgICAgIH0pOyBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLm11bHRpcGxheWVyKSB7IHRoaXMuc3dpdGNoVHVybihyZXN1bHQpOyB9XG4gICAgICAgIGVsc2UgeyB0aGlzLmNwdVR1cm4oKTsgfVxuICAgIH1cblxuICAgIC8vIFJlbmRlcnMgbW92ZSB0YWtlbiBvbiBwbGF5ZXIgYW5kIHJlc2V0IHNlbGVjdE1vdmVcbiAgICBzdGFydFR1cm4ocmVzdWx0KSB7XG4gICAgICAgIHRoaXMuZ2V0UGxheWVyQm9hcmQoKS51cGRhdGVTdGF0dXModGhpcy5zZWxlY3RNb3ZlLCByZXN1bHQpO1xuICAgICAgICB0aGlzLnNlbGVjdE1vdmUgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFByZXBhcmVzIHRoZSBwbGF5IGFyZWEgdG8gZXhjaGFuZ2UgcGxheWVyc1xuICAgIHN3aXRjaFR1cm4ocmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gdGhpcy5nZXRBZHZlcnNhcnlCb2FyZCgpO1xuICAgICAgICBib2FyZC5jcmVhdGVUdXJuQ292ZXIodGhpcy5nZXRBZHZlcnNhcnkoKVxuICAgICAgICAgICAgLmdldE5hbWUoKSlcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgYm9hcmQuY2xlYXJUdXJuQ292ZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0VHVybihyZXN1bHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIGJvYXJkLmRpc3BsYXlCb2FyZCgpO1xuICAgICAgICB0aGlzLmdldEFkdmVyc2FyeUJvYXJkKCkucmVtb3ZlQm9hcmQoKTtcbiAgICAgICAgdGhpcy50dXJuTnVtYmVyKys7XG4gICAgfVxuXG4gICAgLy8gU2ltdWxhdGUgYW4gYWR2ZXJzYXJ5J3MgdHVyblxuICAgIGNwdVR1cm4oKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0TW92ZSA9IHRoaXMuZ2V0UGxheWVyKCkuY3B1VHVybigpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmdldFBsYXllcigpLnRha2VIaXQodGhpcy5zZWxlY3RNb3ZlKTtcbiAgICAgICAgaWYgKHRoaXMuZ2V0UGxheWVyKCkuaXNEZWZlYXRlZCgpKSB7IFxuICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXIoKS5nZXREaXNwbGF5KCkuY3JlYXRlR2FtZU92ZXIoJ1lPVSBMT1NFIScpOyBcbiAgICAgICAgfSBlbHNlIHsgdGhpcy5zdGFydFR1cm4ocmVzdWx0KTsgfVxuICAgIH1cblxuICAgIC8vIGNsZWFyIGFsbCB2YXJpYWJsZSB0byBkZWZhdWx0XG4gICAgcmVzZXRHYW1lKCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIxID0geyBwbGF5ZXI6IG51bGwsIGJvYXJkOiBudWxsIH07XG4gICAgICAgICAgICB0aGlzLnBsYXllcjIgPSB7IHBsYXllcjogbnVsbCwgYm9hcmQ6IG51bGwgfTtcbiAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0TW92ZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnR1cm5OdW1iZXIgPSAwO1xuICAgIH1cbn1cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge0dhbWVDb250cm9sfSBmcm9tICcuL2dhbWVDb250cm9sLmpzJztcblxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lQ29udHJvbCgpO1xuZ2FtZS5zdGFydEdhbWUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==