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
        if (toAdd) { toAdd.forEach(ship => this.board.addShip(ship[0], ship[1], ship[2]) ); }
        else { this.randomBoard().forEach(ship => this.board.addShip(ship[0], ship[1], ship[2]) ); }
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

    createPlayer(isMulti) {
        const setPlayer = new _SetPlayer_js__WEBPACK_IMPORTED_MODULE_1__.SetPlayer(10, [5, 4, 3, 3, 2], isMulti);
        setPlayer.getButton().addEventListener('click', (e) => {
            const data = setPlayer.getData();
            setPlayer.remove();
            // set second player
            if (this.player1) { 
                this.player2 = new _Player_js__WEBPACK_IMPORTED_MODULE_2__.Player('player2', data.board);
                this.bindBoard(this.player2);
                const board = this.getPlayer().getDisplay();
                board.createTurnCover(this.getPlayer()
                .getName())
                .addEventListener('click', (e) => board.clearTurnCover());
                board.displayBoard();
            // set first player and prompt for second
            } else if (data.multi) {
                this.player1 = new _Player_js__WEBPACK_IMPORTED_MODULE_2__.Player('player1', data.board);
                this.bindBoard(this.player1);
                this.multiplayer = true;
                this.createPlayer(true);
            // set single player and set cpu player
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTZCLE9BQU8sSUFBSSxXQUFXLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxRQUFRLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsUUFBUSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxTQUFTLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxPQUFPLE1BQU0sWUFBWSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLE9BQU8sS0FBSyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLFFBQVEsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sNkJBQTZCLDRJQUE0SSxTQUFTLG9DQUFvQyx1QkFBdUIsb0NBQW9DLDhCQUE4Qiw2QkFBNkIsb0JBQW9CLG9CQUFvQixnQ0FBZ0MsZ0NBQWdDLG9DQUFvQyxnQ0FBZ0MsK0JBQStCLDJCQUEyQiwwQkFBMEIseUJBQXlCLCtCQUErQiwwQkFBMEIsc0JBQXNCLHlDQUF5Qyx3Q0FBd0Msb0NBQW9DLGlDQUFpQyxHQUFHLGlCQUFpQixnREFBZ0QsZ0JBQWdCLG9CQUFvQiw0QkFBNEIscUJBQXFCLEdBQUcsWUFBWSxnREFBZ0QscUNBQXFDLGdEQUFnRCx5Q0FBeUMsa0JBQWtCLEdBQUcscUJBQXFCLGlEQUFpRCxzQ0FBc0MsNkNBQTZDLEdBQUcscUJBQXFCLHVDQUF1QyxtQkFBbUIsa0JBQWtCLDZCQUE2QixvQkFBb0IsaUNBQWlDLDhCQUE4QiwwQkFBMEIseUJBQXlCLGdCQUFnQixHQUFHLHVCQUF1Qix3QkFBd0IsdUNBQXVDLG9CQUFvQiwwQkFBMEIsbUJBQW1CLGtCQUFrQixHQUFHLGFBQWEsNkJBQTZCLDhCQUE4QixzQkFBc0Isc0JBQXNCLEdBQUcsa0JBQWtCLDhDQUE4Qyw4QkFBOEIsc0JBQXNCLGdCQUFnQixHQUFHLGFBQWEsMkJBQTJCLCtCQUErQiw4QkFBOEIscUJBQXFCLEdBQUcsb0RBQW9ELHNDQUFzQywwQkFBMEIsdUNBQXVDLG9CQUFvQiwyREFBMkQseUJBQXlCLEdBQUcscUJBQXFCLGlCQUFpQix5QkFBeUIsd0JBQXdCLHVDQUF1QyxvQkFBb0IsOEJBQThCLDBCQUEwQixHQUFHLHFDQUFxQyxrQkFBa0IsbUJBQW1CLEdBQUcsZ0NBQWdDLCtDQUErQyxHQUFHLGlDQUFpQyw4Q0FBOEMsR0FBRyxtQkFBbUIsa0RBQWtELEdBQUcsNkNBQTZDLHFEQUFxRCxHQUFHLFdBQVcscURBQXFELEdBQUcsVUFBVSxvREFBb0QsR0FBRyxlQUFlLHlEQUF5RCxHQUFHLFlBQVksMENBQTBDLEdBQUcsVUFBVSx5Q0FBeUMsR0FBRyxnQkFBZ0IsNENBQTRDLEdBQUcsNEVBQTRFLG9CQUFvQiw4QkFBOEIsMEJBQTBCLHlCQUF5QixrQkFBa0IsbUJBQW1CLEdBQUcseUJBQXlCLG9DQUFvQyxHQUFHLHFCQUFxQix1Q0FBdUMsR0FBRyx1Q0FBdUMseUJBQXlCLHVDQUF1QyxvQkFBb0IsNkJBQTZCLG9CQUFvQixHQUFHLG1EQUFtRCwyQkFBMkIsc0JBQXNCLHlCQUF5QixvQkFBb0IsNkJBQTZCLHFCQUFxQixpQkFBaUIsc0JBQXNCLEdBQUcsZUFBZSxrQ0FBa0Msb0JBQW9CLHFDQUFxQyxLQUFLLGdCQUFnQix5QkFBeUIsb0JBQW9CLDJCQUEyQiwwQkFBMEIsb0JBQW9CLEdBQUcsaUJBQWlCLHlCQUF5QiwwQkFBMEIsdUJBQXVCLHdDQUF3Qyw4QkFBOEIsb0JBQW9CLHlCQUF5QixHQUFHLGdEQUFnRCx3Q0FBd0MsR0FBRyxnQkFBZ0IsdUNBQXVDLDBCQUEwQixHQUFHLGdCQUFnQixtQkFBbUIsNkJBQTZCLEdBQUcsY0FBYyxpQkFBaUIsbUJBQW1CLG9DQUFvQyxHQUFHLGFBQWEsNkJBQTZCLEdBQUcsb0JBQW9CLCtCQUErQixHQUFHLGlCQUFpQix5QkFBeUIsb0JBQW9CLGtCQUFrQixnQkFBZ0IsR0FBRyx1QkFBdUIseUJBQXlCLEdBQUcsa0JBQWtCLHNCQUFzQix3QkFBd0IseUJBQXlCLGdCQUFnQixnQkFBZ0IsdUNBQXVDLEdBQUcsb0JBQW9CLGtDQUFrQyx5QkFBeUIsbUJBQW1CLGtCQUFrQixzQ0FBc0Msa0NBQWtDLDRCQUE0QixHQUFHLHdCQUF3Qix5QkFBeUIsZ0JBQWdCLGVBQWUsZ0JBQWdCLGlCQUFpQixrQkFBa0IscUNBQXFDLHVDQUF1QyxHQUFHLHFCQUFxQixrQkFBa0IsdUNBQXVDLG9CQUFvQiwwQkFBMEIsOEJBQThCLGlEQUFpRCxHQUFHLGNBQWMsaUJBQWlCLGdCQUFnQix3QkFBd0IsMENBQTBDLHNDQUFzQyxHQUFHLGlCQUFpQixvQkFBb0IsR0FBRyx3QkFBd0IsbUJBQW1CLEdBQUcsZ0JBQWdCLGtCQUFrQixHQUFHLGdCQUFnQiwyQ0FBMkMsdUNBQXVDLHlCQUF5QixvQkFBb0IscUNBQXFDLDhCQUE4QixHQUFHLHlCQUF5Qix1Q0FBdUMsR0FBRyw2RUFBNkUsaURBQWlELEdBQUcsaUNBQWlDLHlCQUF5Qiw0Q0FBNEMsR0FBRyxrQkFBa0Isb0JBQW9CLDZCQUE2Qix1QkFBdUIsb0JBQW9CLDBCQUEwQix5QkFBeUIsc0JBQXNCLHVCQUF1QixHQUFHLGtCQUFrQixtQkFBbUIscUJBQXFCLHlCQUF5QixxQkFBcUIsR0FBRyxtQkFBbUIsbUJBQW1CLHNCQUFzQixxQkFBcUIseUJBQXlCLHNCQUFzQixHQUFHLDBEQUEwRCwyQkFBMkIsc0JBQXNCLHNCQUFzQix5QkFBeUIsMEJBQTBCLG9CQUFvQixpQ0FBaUMsOEJBQThCLHlCQUF5QixnQkFBZ0IsR0FBRyxrREFBa0Qsd0NBQXdDLG1CQUFtQixrQkFBa0IsR0FBRyxtREFBbUQsc0NBQXNDLEdBQUcsZ0RBQWdELG1CQUFtQixrQkFBa0IsR0FBRyxrQkFBa0Isc0JBQXNCLHNDQUFzQywwQkFBMEIseUJBQXlCLHlCQUF5QixHQUFHLDhCQUE4Qiw4Q0FBOEMsR0FBRyw2QkFBNkIsK0NBQStDLEdBQUcsZ0JBQWdCLHNDQUFzQywwQkFBMEIsa0JBQWtCLHlCQUF5QixHQUFHLG1DQUFtQyxzREFBc0QsR0FBRyxrQkFBa0Isa0JBQWtCLEdBQUcsK0JBQStCLHlDQUF5Qyx3QkFBd0IseUJBQXlCLE9BQU8sR0FBRyxnSEFBZ0gsb0JBQW9CLDBCQUEwQixPQUFPLHdDQUF3QywyQkFBMkIsT0FBTyx1Q0FBdUMsMEJBQTBCLHdCQUF3Qix5QkFBeUIsT0FBTyxvQkFBb0IsdUJBQXVCLHNCQUFzQiw4QkFBOEIsT0FBTywwQkFBMEIsb0JBQW9CLHFCQUFxQiw2QkFBNkIsT0FBTyxrQkFBa0IseUJBQXlCLE9BQU8sS0FBSyx1RkFBdUYsOENBQThDLHdCQUF3QiwrQkFBK0IsOEJBQThCLE9BQU8sa0NBQWtDLDZCQUE2QiwwQkFBMEIsT0FBTyxpQkFBaUIsMEJBQTBCLDZCQUE2QixPQUFPLG1CQUFtQiw4QkFBOEIsMEJBQTBCLDZCQUE2QixPQUFPLHlCQUF5Qix3QkFBd0IsOEJBQThCLE9BQU8sK0VBQStFLHVCQUF1QixzQkFBc0IsT0FBTyx3REFBd0QseUJBQXlCLHdCQUF3QixPQUFPLHVCQUF1QiwrQkFBK0IsNEJBQTRCLHdCQUF3Qix5Q0FBeUMsa0NBQWtDLE9BQU8sb0JBQW9CLDBCQUEwQiw2QkFBNkIsT0FBTyxzQkFBc0IsMEJBQTBCLDZCQUE2QixzQkFBc0IsT0FBTyxLQUFLLHdEQUF3RCxvQkFBb0IsMEJBQTBCLDZCQUE2QixPQUFPLEdBQUcsZ0NBQWdDLG9CQUFvQiw0QkFBNEIsT0FBTywwQkFBMEIsMEJBQTBCLDZCQUE2QixPQUFPLEdBQUcsMERBQTBELG9EQUFvRCx5QkFBeUIsd0JBQXdCLE9BQU8sd0RBQXdELHVCQUF1QixzQkFBc0IsT0FBTyxHQUFHLHVGQUF1Rix1Q0FBdUMsMEJBQTBCLHdCQUF3Qix5QkFBeUIsT0FBTyxzQkFBc0IsdUJBQXVCLHNCQUFzQiw4QkFBOEIsT0FBTyw0QkFBNEIsb0JBQW9CLHFCQUFxQiw2QkFBNkIsT0FBTyxvQkFBb0IseUJBQXlCLE9BQU8sc0JBQXNCLDBCQUEwQixPQUFPLGdCQUFnQiwyQkFBMkIsT0FBTyxzREFBc0Qsd0JBQXdCLHVCQUF1QixPQUFPLHdEQUF3RCx5QkFBeUIsd0JBQXdCLE9BQU8sR0FBRyw2RUFBNkUsd0NBQXdDLHNCQUFzQix1QkFBdUIsT0FBTywwQkFBMEIsd0JBQXdCLE9BQU8scUJBQXFCLDRCQUE0QiwwQkFBMEIsNkJBQTZCLE9BQU8sS0FBSywyRUFBMkUsdUJBQXVCLCtCQUErQiw0QkFBNEIsd0JBQXdCLHlDQUF5QyxrQ0FBa0MsT0FBTyxvQkFBb0IsMEJBQTBCLDZCQUE2QixPQUFPLHNCQUFzQiwwQkFBMEIsNkJBQTZCLHNCQUFzQixPQUFPLHNCQUFzQiwwQkFBMEIsNkJBQTZCLE9BQU8sSUFBSSx1QkFBdUI7QUFDcGs3QjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1IxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZndFO0FBQzdCOztBQUVwQztBQUNQLDZFQUE2RTtBQUM3RTtBQUNBLHNCQUFzQiwyREFBVyxVQUFVLHNCQUFzQjs7QUFFakUsMEJBQTBCLDJEQUFXLFVBQVUsY0FBYztBQUM3RCxtREFBbUQsMkRBQVcsU0FBUztBQUN2RSwwQkFBMEIsMkRBQVcsVUFBVSxjQUFjO0FBQzdELG1EQUFtRCwyREFBVyxRQUFRLFVBQVU7O0FBRWhGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0EseUJBQXlCLDJEQUFXLFVBQVUseUJBQXlCO0FBQ3ZFLG1DQUFtQyx5REFBUztBQUM1QyxtQ0FBbUMseURBQVM7QUFDNUMsbUNBQW1DLDJEQUFXLGFBQWEsd0NBQXdDO0FBQ25HO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSwyQkFBMkI7O0FBRTNCLHFCQUFxQjtBQUNyQixvQkFBb0I7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCwwQkFBMEI7QUFDbkY7O0FBRUE7QUFDQTtBQUNBLGtEQUFrRCw2REFBYTtBQUMvRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtEQUFrRCw2REFBYTtBQUMvRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9EQUFvRCw2REFBYTtBQUNqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsMkRBQVcsVUFBVSx5QkFBeUI7QUFDeEUsd0JBQXdCLDJEQUFXLFVBQVUsdUJBQXVCO0FBQ3BFLHVCQUF1QiwyREFBVyxhQUFhLHNCQUFzQjtBQUNyRSw0QkFBNEIsMkRBQVcsU0FBUyxLQUFLLHFCQUFxQjtBQUMxRSw0QkFBNEIsMkRBQVcsU0FBUztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLDJEQUFXLFVBQVUsNkJBQTZCO0FBQzVFLHdCQUF3QiwyREFBVyxVQUFVLDJCQUEyQjtBQUN4RSx1QkFBdUIsMkRBQVcsYUFBYSwwQkFBMEI7QUFDekUsNEJBQTRCLDJEQUFXLFNBQVM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR0E7QUFDQTtBQUNPLDBDQUEwQztBQUNqRDtBQUNBLGtDQUFrQyx3QkFBd0IsSUFBSSxNQUFNLGdCQUFnQjtBQUNwRixpQkFBaUI7QUFDakI7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0EseUNBQXlDLG1CQUFtQjtBQUM1RCxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUIsdUJBQXVCLHlDQUF5Qyx1QkFBdUI7QUFDdkYsa0NBQWtDLHlDQUF5QyxvQkFBb0I7QUFDL0YsNkNBQTZDLHlDQUF5QyxvQkFBb0I7QUFDMUcsZUFBZSx5Q0FBeUMsMERBQTBEO0FBQ2xIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDTztBQUNQLDJDQUEyQyxxQkFBcUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkNBQTJDLGtCQUFrQjtBQUM3RCxpREFBaUQsaUJBQWlCO0FBQ2xFLHdEQUF3RCxvQ0FBb0M7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQ0FBMkMsaUJBQWlCO0FBQzVELHFDQUFxQyxtQkFBbUI7QUFDeEQseUNBQXlDLG9DQUFvQztBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6Qyx5Q0FBeUM7QUFDekMseUNBQXlDO0FBQ3pDO0FBQ0EsK0NBQStDLG1CQUFtQjtBQUNsRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQ0FBMkMsa0JBQWtCO0FBQzdELGlEQUFpRCx3QkFBd0I7QUFDekUsNENBQTRDLHNDQUFzQztBQUNsRiw0Q0FBNEMsbUJBQW1CO0FBQy9ELDZDQUE2QyxzQkFBc0I7QUFDbkUsMENBQTBDLGVBQWU7QUFDekQsK0NBQStDO0FBQy9DLCtDQUErQztBQUMvQywrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNDQUFzQyxtQkFBbUI7QUFDekQ7QUFDQSx5REFBeUQsbUJBQW1CO0FBQzVFO0FBQ0E7QUFDQSxtRUFBbUUsUUFBUTtBQUMzRTtBQUNBO0FBQ0EsK0RBQStELFFBQVE7QUFDdkU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQ0FBc0Msb0JBQW9CO0FBQzFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXNDLHFCQUFxQjtBQUMzRCxvQkFBb0IsVUFBVTtBQUM5QiwwQ0FBMEMsb0JBQW9CO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNoSkE7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFNBQUk7QUFDbEMsNEJBQTRCLFNBQUk7OztBQUd6QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxQmlDOztBQUUxQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6Qyw2QkFBNkIsdUJBQXVCO0FBQ3BEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvQkFBb0I7QUFDNUM7QUFDQTs7QUFFQSw0QkFBNEIsMENBQUk7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLHdDQUF3QztBQUN4Qyx1REFBdUQsb0RBQW9ELHNCQUFzQjtBQUNqSSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQsU0FBUztBQUNUO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25Hd0M7QUFDQztBQUN6QztBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixpREFBUztBQUNsQztBQUNBLHFCQUFxQjtBQUNyQixlQUFlO0FBQ2YsMkJBQTJCLGtEQUFTO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RFK0M7QUFDK0I7O0FBRTlFO0FBQ087QUFDUDtBQUNBO0FBQ0EseUJBQXlCLDhEQUFjO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQSxxQkFBcUI7QUFDckIsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLE9BQU87QUFDOUMsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQSxlQUFlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0Esa0JBQWtCLDZCQUE2Qiw2REFBYSw2QkFBNkI7QUFDekY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQseUJBQXlCLDREQUFZO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0REFBVztBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0VBQStFO0FBQy9FO0FBQ0EseUJBQXlCLDREQUFZO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0REFBVztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnREFBZ0QsNkRBQWE7QUFDN0Qsd0JBQXdCLFlBQVk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELDZEQUFhO0FBQzdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDLE9BQU87QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3RELGFBQWE7QUFDYixVQUFVLE9BQU87QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyw2REFBYTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzlRQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMseUJBQXlCO0FBQ3pCLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCZ0Q7QUFDTDtBQUNOOztBQUU5QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsNkRBQWE7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixvREFBUztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDhDQUFNO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLG1DQUFtQyw4Q0FBTTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxtQ0FBbUMsOENBQU07QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsOENBQU07QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RCxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxxQ0FBcUM7QUFDckMsZUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLE9BQU87QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQzFLQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN3Qjs7QUFFN0MsaUJBQWlCLHdEQUFXO0FBQzVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9ET01Db250cm9sLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9ET01IZWxwZXJzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9EcmFnRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL1NldFBsYXllci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvU2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZUNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW50b24mZmFtaWx5PUJ1bmdlZStTaGFkZSZmYW1pbHk9Q29uY2VydCtPbmUmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLW1haW4tYmc6IHJnYigxNjcsIDE3MSwgMTc1KTtcXG4gICAgLS1iZy1ncmlkOiBibGFjaztcXG4gICAgLS1iZy1jZWxsOiByZ2IoMTcyLCAyMzksIDI0MSk7XFxuICAgIC0tZm9udC1ndWlkZS1sZzogMS41cmVtO1xcbiAgICAtLWZvbnQtZ3VpZGUtc206IC43cmVtO1xcbiAgICAtLWdhcC1sZzogM3B4O1xcbiAgICAtLWdhcC1zbTogMnB4O1xcbiAgICAtLWJ1dHRvbi1mZy1kaXNhYmxlOiBncmV5O1xcbiAgICAtLWJ1dHRvbi1mZy1ub3JtYWw6IGJsYWNrO1xcbiAgICAtLWJ1dHRvbi1iZy1kaXNhYmxlOiBkYXJrZ3JleTtcXG4gICAgLS1idXR0b24tYmctbm9ybWFsOiB3aGl0ZTtcXG4gICAgLS1idXR0b24tZm9udC1zaXplOiAycmVtO1xcbiAgICAtLWJvYXJkLWhpdDogZGFya3JlZDtcXG4gICAgLS1ib2FyZC1ob3ZlcjogYXF1YTtcXG4gICAgLS1ib2FyZC1taXNzOiBncmV5O1xcbiAgICAtLWJvYXJkLXNlbGVjdGVkOiB5ZWxsb3c7XFxuICAgIC0tYm9hcmQtc2hpcDogZ3JlZW47XFxuICAgIC0tc2lkZS1zaXplOiAxMDtcXG4gICAgLS1jaGVjay1vdXR0ZXI6IHJnYigyMTUsIDI0NCwgMjUyKTtcXG4gICAgLS1jaGVjay1pbm5lcjogcmdiKDI1MiwgMjEwLCAxMzIpO1xcbiAgICAtLWhlYWQtYmc6IHJnYigyMzUsIDIzMCwgMjMwKTtcXG4gICAgLS10b2dnbGU6IHJnYigyNTUsIDE4NywgMCk7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIC8qIG1pbi1oZWlnaHQ6IDEwMHZoOyAqL1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iZy1ub3JtYWwpO1xcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWZnLW5vcm1hbCk7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLWJ1dHRvbi1mZy1ub3JtYWwpO1xcbiAgICBmb250LXNpemU6IHZhcigtLWJ1dHRvbi1mb250LXNpemUpO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYnV0dG9uOmRpc2FibGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJnLWRpc2FibGUpO1xcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWZnLWRpc2FibGUpO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1mZy1kaXNhYmxlKTtcXG59XFxuXFxuI21haW4tY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZyk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiNoZWFkZXIsXFxuI2Zvb3RlciB7XFxuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkLWJnKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIG1pbi1oZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIHBhZGRpbmc6IDAgMnJlbTtcXG59XFxuXFxuI2hlYWRlciA+IGgxIHtcXG4gICAgZm9udC1mYW1pbHk6ICdCdW5nZWUgU2hhZGUnLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogcmdiKDE3OSwgMTE2LCAwKTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiNmb290ZXIge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgY29sb3I6cmdiKDE0OCwgMTQ3LCAxNDcpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC1yb3c6IDMvIDQ7XFxufVxcblxcbi8qIHN0eWxpbmcgZm9yIGFsbCBncmlkIGRpc3BsYXlzICovXFxuLmdyaWQtYm94IHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LWd1aWRlLWxnKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctZ3JpZCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLXNpZGUtc2l6ZSksIDFmcik7XFxuICAgIGdhcDogdmFyKC0tZ2FwLWxnKTtcXG59XFxuXFxuLmdyaWQtYm94ID4gZGl2IHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY2VsbCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jc2V0LWNvbnRhaW5lciA+IC5ncmlkLWJveCA+IGRpdntcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG59XFxuXFxuLmd1aWRlLXRvcCxcXG4uZ3VpZGUtY29ybmVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1nYXAtbGcpICogLjY2KTtcXG59XFxuXFxuLmd1aWRlLWxlZnQsXFxuLmd1aWRlLWNvcm5lciB7XFxuICAgIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1nYXAtbGcpICogLjY2KTtcXG59XFxuXFxuLmd1aWRlLWNvcm5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWdyaWQpICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIGFsbCBncmlkIGljb25zICovXFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1zaGlwKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLW1pc3MpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1oaXQpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLXNlbGVjdGVkKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3cgIWltcG9ydGFudDtcXG59XFxuXFxuLnNldCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zZXQuaG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleSAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciBub3RpZmljYXRpb25zICovXFxuLmdhbWVvdmVyLWNvbnRhaW5lcixcXG4udHVybi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uZ2FtZW92ZXItY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi50dXJuLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmcpO1xcbn1cXG5cXG4uZ2FtZW92ZXItY29udGVudCxcXG4udHVybi1jb250ZW50IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLyogU3R5bGluZyBmb3Igc2V0IGRpc3BsYXkgKi9cXG4jc2V0LWNvbnRhaW5lciB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMCAxIDEwMCU7XFxuICAgIGdhcDogLjVyZW07XFxuICAgIG1hcmdpbjogLjVyZW0gMDtcXG59XFxuXFxuLnNldC10cmF5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuXFxufVxcblxcbi50cmF5LWl0ZW0ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDpsZWZ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uaWNvbi1waWVjZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAtMTtcXG4gICAgYm9yZGVyOiB2YXIoLS1nYXAtc20pIHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiB2YXIoLS1nYXAtc20pO1xcbn1cXG5cXG4uaWNvbi1waWVjZS5pY29uLWRpc2FibGU+ZGl2Om5vdCgjZHJhZ2dlZCkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5pY29uLWNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jZWxsKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG59XFxuXFxuLmRyYWctY2VsbCB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuI2RyYWdnZWQge1xcbiAgICB6LWluZGV4OiA5O1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZHJhZy15IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZ2dsZS1yb3RhdGUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbiN0b2dnbGUtYmFyIHtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jdG9nZ2xlLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI3RvZ2dsZS10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRvcDogIDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcblxcbiN0b2dnbGUtYm9keSB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b2dnbGUpO1xcbiAgICAvKiBib3JkZXI6IDNweCBzb2xpZCBibGFjazsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG59XFxuXFxuI3RvZ2dsZS1ib2R5OmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHdpZHRoOiAwO1xcbiAgICB0b3A6IDIwcHg7XFxuICAgIGxlZnQ6IDcwcHg7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBib3JkZXI6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB2YXIoLS10b2dnbGUpO1xcbn1cXG5cXG4jaW5zdC1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZC1iZyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1idXR0b24tZmctZGlzYWJsZSk7XFxufVxcblxcbiNpbnN0LXVsIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6ICdDb25jZXJ0IE9uZScsIGN1cnNpdmU7XFxuICAgIGNvbG9yOiB2YXIoLS1idXR0b24tZmctZGlzYWJsZSk7XFxufVxcblxcbiNzdWJtaXQtYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3N1Ym1pdC1iYXIgYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jc3VibWl0LWJjIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNzdWJtaXQtbWMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGVjay1pbm5lcik7XFxuICAgIGZvbnQtZmFtaWx5OiAnQW50b24nLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxufVxcblxcbiNzdWJtaXQtbWMuaXMtbXVsdGkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnKTtcXG59XFxuXFxuI3N1Ym1pdC1tYy5pcy1tdWx0aSA+ICNzdWJtaXQtbWMtMixcXG4jc3VibWl0LW1jLmlzLW11bHRpID4gI3N1Ym1pdC1tYy1tIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWZnLWRpc2FibGUpO1xcbn1cXG5cXG4jc3VibWl0LW1jLTIsXFxuI3N1Ym1pdC1tYy1tIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGVjay1vdXR0ZXIpO1xcbn1cXG5cXG4jc3VibWl0LW1jLTIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAzcHggNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcXG59XFxuXFxuI3N1Ym1pdC1tYy1tIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvMjtcXG59XFxuXFxuXFxuI3N1Ym1pdC1jaGsge1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGhlaWdodDogMS4yNXJlbTtcXG4gICAgd2lkdGg6IDEuMjVyZW07XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG5cXG5cXG4vKiBTdHlsaW5nIGZvciBwbGF5IGRpc3BsYXlzICovXFxuLnBsYXktY29udGFpbmVyIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgbWFyZ2luOiAwIC41cmVtO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5wbGF5LWNvbnRhaW5lciA+IC5ncmlkLWJveC5wbGF5LXN0YXR1cyA+IGRpdntcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuNzVzO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIHdpZHRoOiAxcmVtO1xcbn1cXG4ucGxheS1jb250YWluZXIgPiAuZ3JpZC1ib3gucGxheS1hcmVhID4gZGl2LmhpdCB7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXM7XFxufVxcblxcbi5wbGF5LWNvbnRhaW5lciA+IC5ncmlkLWJveC5wbGF5LWFyZWEgPiBkaXZ7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDJyZW07XFxufVxcblxcbi5wbGF5LXN0YXR1cyB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LWd1aWRlLXNtKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBnYXA6IHZhcigtLWdhcC1zbSk7XFxufVxcblxcbi5wbGF5LXN0YXR1cyAuZ3VpZGUtbGVmdCB7XFxuICAgIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1nYXAtc20pICogLjY2KTtcXG59XFxuXFxuLnBsYXktc3RhdHVzIC5ndWlkZS10b3Age1xcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLWdhcC1zbSkgKiAuNjYpO1xcbn1cXG5cXG4ucGxheS1hcmVhIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LWd1aWRlLWxnKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogdmFyKC0tZ2FwLWxnKTtcXG59XFxuXFxuLnBsYXktYXJlYSA+IC5vcGVuLWNlbGw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1ob3ZlcikgIWltcG9ydGFudDtcXG59XFxuXFxuLnBsYXktYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAzOTBweCkge1xcbiAgICAjc2V0LWNvbnRhaW5lciA+IC5ncmlkLWJveCA+IGRpdiB7IFxcbiAgICAgICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB9XFxufVxcblxcbi8qIHNldCBjb25maWd1cmF0aW9uIGZvciB0aGlubmVyIHBob25lcyAqL1xcblxcbi8qIG1vYmlsZSBob3Jpem9udGFsIHNldHRpbmdzICovXFxuQG1lZGlhIChtYXgtaGVpZ2h0OiA0NTBweCkge1xcbiAgICAjaGVhZGVyID4gaDEge1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB9XFxuICAgIC8qIHNldCBzZXR0aW5ncyAqL1xcbiAgICAjaW5zdC11bCB7XFxuICAgICAgICBmb250LXNpemU6IC43cmVtO1xcbiAgICB9XFxuICAgICNzZXQtY29udGFpbmVyID4gLmdyaWQtYm94ID4gZGl2e1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB9XFxuICAgICN0b2dnbGUtYm9keSB7XFxuICAgICAgICBoZWlnaHQ6IDYwcHg7XFxuICAgICAgICB3aWR0aDogNjBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIH1cXG4gICAgI3RvZ2dsZS1ib2R5OmFmdGVyIHtcXG4gICAgICAgIHRvcDogMTVweDtcXG4gICAgICAgIGxlZnQ6IDUwcHg7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDE1cHg7XFxuICAgIH1cXG4gICAgLnRyYXktaXRlbSB7XFxuICAgICAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgfVxcblxcbn1cXG5cXG4vKiBob3Jpem9udGFsIGNvbmZpZ3VyYXRpb24gKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogMTA1MHB4KSBvciAobWF4LWhlaWdodDogNjUwcHgpIHtcXG4gICAgLyogc2V0IHNldHRpbmdzICovXFxuICAgICNzZXQtY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLWNvbHVtbjogMWZyIDFmcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgI3NldC1jb250YWluZXIgPiAuZ3JpZC1ib3gge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyA0O1xcbiAgICB9XFxuICAgIC5zZXQtdHJheSB7XFxuICAgICAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIH1cXG4gICAgI3RvZ2dsZS1iYXIge1xcbiAgICAgICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgfVxcbiAgICAjdG9nZ2xlLWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAvKiBwbGF5IHNldHRpbmdzICovXFxuICAgIC5wbGF5LWNvbnRhaW5lciA+IC5ncmlkLWJveC5wbGF5LXN0YXR1cyA+IGRpdntcXG4gICAgICAgIGhlaWdodDogMXJlbTtcXG4gICAgICAgIHdpZHRoOiAxcmVtO1xcbiAgICB9XFxuICAgIFxcbiAgICAucGxheS1jb250YWluZXIgPiAuZ3JpZC1ib3gucGxheS1hcmVhID4gZGl2e1xcbiAgICAgICAgaGVpZ2h0OiAxLjRyZW07XFxuICAgICAgICB3aWR0aDogMS40cmVtO1xcbiAgICB9XFxuICAgIC5wbGF5LWNvbnRhaW5lciB7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICB9XFxuXFxuICAgIC5wbGF5LWFyZWEge1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICB9XFxuXFxuICAgIC5wbGF5LXN0YXR1cyB7XFxuICAgICAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTA1MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDY1MXB4KSB7XFxuICAgIC5wbGF5LWJ1dHRvbiB7XFxuICAgICAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtaGVpZ2h0OiA2NTBweCkge1xcbiAgICAucGxheS1idXR0b24ge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIH1cXG4gICAgXFxuICAgIC5wbGF5LWJ1dHRvbiB7XFxuICAgICAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIH1cXG59XFxuXFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwNTBweCkgYW5kIChtaW4taGVpZ2h0OiA2NTFweCkge1xcbiAgICAucGxheS1jb250YWluZXIgPiAuZ3JpZC1ib3gucGxheS1zdGF0dXMgPiBkaXZ7XFxuICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIH1cXG4gICAgXFxuICAgIC5wbGF5LWNvbnRhaW5lciA+IC5ncmlkLWJveC5wbGF5LWFyZWEgPiBkaXZ7XFxuICAgICAgICBoZWlnaHQ6IDNyZW07XFxuICAgICAgICB3aWR0aDogM3JlbTtcXG4gICAgfVxcbn1cXG5cXG4vKiBtb2JpbGUgdmVydGljYWwgc2V0dGluZ3MgKi9cXG5AbWVkaWEgKG1heC13aWR0aDogMzkwcHgpIGFuZCAobWF4LWhlaWdodDogODU1cHgpIHtcXG4gICAgI3NldC1jb250YWluZXIgPiAuZ3JpZC1ib3ggPiBkaXZ7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICB3aWR0aDogMS40cmVtO1xcbiAgICAgICAgaGVpZ2h0OiAxLjRyZW07XFxuICAgIH1cXG5cXG4gICAgI3RvZ2dsZS1ib2R5IHtcXG4gICAgICAgIGhlaWdodDogNjBweDtcXG4gICAgICAgIHdpZHRoOiA2MHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgfVxcblxcbiAgICAjdG9nZ2xlLWJvZHk6YWZ0ZXIge1xcbiAgICAgICAgdG9wOiAxNXB4O1xcbiAgICAgICAgbGVmdDogNTBweDtcXG4gICAgICAgIGJvcmRlci13aWR0aDogMTVweDtcXG4gICAgfVxcblxcbiAgICAudHJheS1pdGVtIHtcXG4gICAgICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICB9XFxuXFxuICAgICNoZWFkZXIgPiBoMSB7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgIH1cXG4gICAgI2luc3QtdWwge1xcbiAgICAgICAgZm9udC1zaXplOiAuN3JlbTtcXG4gICAgfVxcblxcbiAgICAucGxheS1jb250YWluZXIgPiAuZ3JpZC1ib3gucGxheS1zdGF0dXMgPiBkaXZ7XFxuICAgICAgICBoZWlnaHQ6IC45cmVtO1xcbiAgICAgICAgd2lkdGg6IC45cmVtO1xcbiAgICB9XFxuICAgIFxcbiAgICAucGxheS1jb250YWluZXIgPiAuZ3JpZC1ib3gucGxheS1hcmVhID4gZGl2e1xcbiAgICAgICAgaGVpZ2h0OiAxLjhyZW07XFxuICAgICAgICB3aWR0aDogMS44cmVtO1xcbiAgICB9XFxufVxcblxcblxcblxcbi8qIHNldCBjb25maWd1cmF0aW9uIGZvciBmdWxsIHNjcmVlbiAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiAxMDUwcHgpIHtcXG4gICAgI3NldC1jb250YWluZXIgPiAuZ3JpZC1ib3ggPiBkaXYge1xcbiAgICAgICAgd2lkdGg6IDNyZW07XFxuICAgICAgICBoZWlnaHQ6IDNyZW07XFxuICAgIH1cXG5cXG4gICAgI2luc3QtY29udGFpbmVyIHsgXFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgICNzdWJtaXQtYmFyIHtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xcbiAgICAgICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICB9XFxuXFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIHdpZGUgdmlld3Mgb2YgcGxheSBkaXNwbGF5IFxcbkBtZWRpYSAobWluLXdpZHRoOiA1NzBweCkge1xcbiAgICAucGxheS1jb250YWluZXIge1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgICAgICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgfVxcblxcbiAgICAucGxheS1hcmVhIHtcXG4gICAgICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgfVxcblxcbiAgICAucGxheS1zdGF0dXMge1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLnBsYXktYnV0dG9uIHtcXG4gICAgICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgfVxcbn0gKi9cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsYUFBYTtJQUNiLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFD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OztJQUVBO1FBQ0ksY0FBYztRQUNkLGFBQWE7SUFDakI7QUFDSjs7OztBQUlBLHNDQUFzQztBQUN0QztJQUNJO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7O0FBRUo7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5QkdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW50b24mZmFtaWx5PUJ1bmdlZStTaGFkZSZmYW1pbHk9Q29uY2VydCtPbmUmZGlzcGxheT1zd2FwJyk7XFxuOnJvb3Qge1xcbiAgICAtLW1haW4tYmc6IHJnYigxNjcsIDE3MSwgMTc1KTtcXG4gICAgLS1iZy1ncmlkOiBibGFjaztcXG4gICAgLS1iZy1jZWxsOiByZ2IoMTcyLCAyMzksIDI0MSk7XFxuICAgIC0tZm9udC1ndWlkZS1sZzogMS41cmVtO1xcbiAgICAtLWZvbnQtZ3VpZGUtc206IC43cmVtO1xcbiAgICAtLWdhcC1sZzogM3B4O1xcbiAgICAtLWdhcC1zbTogMnB4O1xcbiAgICAtLWJ1dHRvbi1mZy1kaXNhYmxlOiBncmV5O1xcbiAgICAtLWJ1dHRvbi1mZy1ub3JtYWw6IGJsYWNrO1xcbiAgICAtLWJ1dHRvbi1iZy1kaXNhYmxlOiBkYXJrZ3JleTtcXG4gICAgLS1idXR0b24tYmctbm9ybWFsOiB3aGl0ZTtcXG4gICAgLS1idXR0b24tZm9udC1zaXplOiAycmVtO1xcbiAgICAtLWJvYXJkLWhpdDogZGFya3JlZDtcXG4gICAgLS1ib2FyZC1ob3ZlcjogYXF1YTtcXG4gICAgLS1ib2FyZC1taXNzOiBncmV5O1xcbiAgICAtLWJvYXJkLXNlbGVjdGVkOiB5ZWxsb3c7XFxuICAgIC0tYm9hcmQtc2hpcDogZ3JlZW47XFxuICAgIC0tc2lkZS1zaXplOiAxMDtcXG4gICAgLS1jaGVjay1vdXR0ZXI6IHJnYigyMTUsIDI0NCwgMjUyKTtcXG4gICAgLS1jaGVjay1pbm5lcjogcmdiKDI1MiwgMjEwLCAxMzIpO1xcbiAgICAtLWhlYWQtYmc6IHJnYigyMzUsIDIzMCwgMjMwKTtcXG4gICAgLS10b2dnbGU6IHJnYigyNTUsIDE4NywgMCk7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIC8qIG1pbi1oZWlnaHQ6IDEwMHZoOyAqL1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iZy1ub3JtYWwpO1xcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWZnLW5vcm1hbCk7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLWJ1dHRvbi1mZy1ub3JtYWwpO1xcbiAgICBmb250LXNpemU6IHZhcigtLWJ1dHRvbi1mb250LXNpemUpO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYnV0dG9uOmRpc2FibGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJnLWRpc2FibGUpO1xcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWZnLWRpc2FibGUpO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1mZy1kaXNhYmxlKTtcXG59XFxuXFxuI21haW4tY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZyk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiNoZWFkZXIsXFxuI2Zvb3RlciB7XFxuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkLWJnKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIG1pbi1oZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIHBhZGRpbmc6IDAgMnJlbTtcXG59XFxuXFxuI2hlYWRlciA+IGgxIHtcXG4gICAgZm9udC1mYW1pbHk6ICdCdW5nZWUgU2hhZGUnLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogcmdiKDE3OSwgMTE2LCAwKTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiNmb290ZXIge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgY29sb3I6cmdiKDE0OCwgMTQ3LCAxNDcpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC1yb3c6IDMvIDQ7XFxufVxcblxcbi8qIHN0eWxpbmcgZm9yIGFsbCBncmlkIGRpc3BsYXlzICovXFxuLmdyaWQtYm94IHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LWd1aWRlLWxnKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctZ3JpZCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLXNpZGUtc2l6ZSksIDFmcik7XFxuICAgIGdhcDogdmFyKC0tZ2FwLWxnKTtcXG59XFxuXFxuLmdyaWQtYm94ID4gZGl2IHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY2VsbCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jc2V0LWNvbnRhaW5lciA+IC5ncmlkLWJveCA+IGRpdntcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG59XFxuXFxuLmd1aWRlLXRvcCxcXG4uZ3VpZGUtY29ybmVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1nYXAtbGcpICogLjY2KTtcXG59XFxuXFxuLmd1aWRlLWxlZnQsXFxuLmd1aWRlLWNvcm5lciB7XFxuICAgIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1nYXAtbGcpICogLjY2KTtcXG59XFxuXFxuLmd1aWRlLWNvcm5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWdyaWQpICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIGFsbCBncmlkIGljb25zICovXFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1zaGlwKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLW1pc3MpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1oaXQpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLXNlbGVjdGVkKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3cgIWltcG9ydGFudDtcXG59XFxuXFxuLnNldCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zZXQuaG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleSAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciBub3RpZmljYXRpb25zICovXFxuLmdhbWVvdmVyLWNvbnRhaW5lcixcXG4udHVybi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uZ2FtZW92ZXItY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi50dXJuLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmcpO1xcbn1cXG5cXG4uZ2FtZW92ZXItY29udGVudCxcXG4udHVybi1jb250ZW50IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLyogU3R5bGluZyBmb3Igc2V0IGRpc3BsYXkgKi9cXG4jc2V0LWNvbnRhaW5lciB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMCAxIDEwMCU7XFxuICAgIGdhcDogLjVyZW07XFxuICAgIG1hcmdpbjogLjVyZW0gMDtcXG59XFxuXFxuLnNldC10cmF5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuXFxufVxcblxcbi50cmF5LWl0ZW0ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDpsZWZ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uaWNvbi1waWVjZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAtMTtcXG4gICAgYm9yZGVyOiB2YXIoLS1nYXAtc20pIHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiB2YXIoLS1nYXAtc20pO1xcbn1cXG5cXG4uaWNvbi1waWVjZS5pY29uLWRpc2FibGU+ZGl2Om5vdCgjZHJhZ2dlZCkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5pY29uLWNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jZWxsKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG59XFxuXFxuLmRyYWctY2VsbCB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuI2RyYWdnZWQge1xcbiAgICB6LWluZGV4OiA5O1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZHJhZy15IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZ2dsZS1yb3RhdGUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbiN0b2dnbGUtYmFyIHtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jdG9nZ2xlLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI3RvZ2dsZS10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRvcDogIDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcblxcbiN0b2dnbGUtYm9keSB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b2dnbGUpO1xcbiAgICAvKiBib3JkZXI6IDNweCBzb2xpZCBibGFjazsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG59XFxuXFxuI3RvZ2dsZS1ib2R5OmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHdpZHRoOiAwO1xcbiAgICB0b3A6IDIwcHg7XFxuICAgIGxlZnQ6IDcwcHg7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBib3JkZXI6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB2YXIoLS10b2dnbGUpO1xcbn1cXG5cXG4jaW5zdC1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZC1iZyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1idXR0b24tZmctZGlzYWJsZSk7XFxufVxcblxcbiNpbnN0LXVsIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6ICdDb25jZXJ0IE9uZScsIGN1cnNpdmU7XFxuICAgIGNvbG9yOiB2YXIoLS1idXR0b24tZmctZGlzYWJsZSk7XFxufVxcblxcbiNzdWJtaXQtYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3N1Ym1pdC1iYXIgYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jc3VibWl0LWJjIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNzdWJtaXQtbWMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGVjay1pbm5lcik7XFxuICAgIGZvbnQtZmFtaWx5OiAnQW50b24nLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxufVxcblxcbiNzdWJtaXQtbWMuaXMtbXVsdGkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnKTtcXG59XFxuXFxuI3N1Ym1pdC1tYy5pcy1tdWx0aSA+ICNzdWJtaXQtbWMtMixcXG4jc3VibWl0LW1jLmlzLW11bHRpID4gI3N1Ym1pdC1tYy1tIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWZnLWRpc2FibGUpO1xcbn1cXG5cXG4jc3VibWl0LW1jLTIsXFxuI3N1Ym1pdC1tYy1tIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGVjay1vdXR0ZXIpO1xcbn1cXG5cXG4jc3VibWl0LW1jLTIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAzcHggNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcXG59XFxuXFxuI3N1Ym1pdC1tYy1tIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvMjtcXG59XFxuXFxuXFxuI3N1Ym1pdC1jaGsge1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGhlaWdodDogMS4yNXJlbTtcXG4gICAgd2lkdGg6IDEuMjVyZW07XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG5cXG5cXG4vKiBTdHlsaW5nIGZvciBwbGF5IGRpc3BsYXlzICovXFxuLnBsYXktY29udGFpbmVyIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgbWFyZ2luOiAwIC41cmVtO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5wbGF5LWNvbnRhaW5lciA+IC5ncmlkLWJveC5wbGF5LXN0YXR1cyA+IGRpdntcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuNzVzO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIHdpZHRoOiAxcmVtO1xcbn1cXG4ucGxheS1jb250YWluZXIgPiAuZ3JpZC1ib3gucGxheS1hcmVhID4gZGl2LmhpdCB7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXM7XFxufVxcblxcbi5wbGF5LWNvbnRhaW5lciA+IC5ncmlkLWJveC5wbGF5LWFyZWEgPiBkaXZ7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDJyZW07XFxufVxcblxcbi5wbGF5LXN0YXR1cyB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LWd1aWRlLXNtKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBnYXA6IHZhcigtLWdhcC1zbSk7XFxufVxcblxcbi5wbGF5LXN0YXR1cyAuZ3VpZGUtbGVmdCB7XFxuICAgIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1nYXAtc20pICogLjY2KTtcXG59XFxuXFxuLnBsYXktc3RhdHVzIC5ndWlkZS10b3Age1xcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLWdhcC1zbSkgKiAuNjYpO1xcbn1cXG5cXG4ucGxheS1hcmVhIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LWd1aWRlLWxnKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogdmFyKC0tZ2FwLWxnKTtcXG59XFxuXFxuLnBsYXktYXJlYSA+IC5vcGVuLWNlbGw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1ob3ZlcikgIWltcG9ydGFudDtcXG59XFxuXFxuLnBsYXktYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAzOTBweCkge1xcbiAgICAjc2V0LWNvbnRhaW5lciA+IC5ncmlkLWJveCA+IGRpdiB7IFxcbiAgICAgICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB9XFxufVxcblxcbi8qIHNldCBjb25maWd1cmF0aW9uIGZvciB0aGlubmVyIHBob25lcyAqL1xcblxcbi8qIG1vYmlsZSBob3Jpem9udGFsIHNldHRpbmdzICovXFxuQG1lZGlhIChtYXgtaGVpZ2h0OiA0NTBweCkge1xcbiAgICAjaGVhZGVyID4gaDEge1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB9XFxuICAgIC8qIHNldCBzZXR0aW5ncyAqL1xcbiAgICAjaW5zdC11bCB7XFxuICAgICAgICBmb250LXNpemU6IC43cmVtO1xcbiAgICB9XFxuICAgICNzZXQtY29udGFpbmVyID4gLmdyaWQtYm94ID4gZGl2e1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB9XFxuICAgICN0b2dnbGUtYm9keSB7XFxuICAgICAgICBoZWlnaHQ6IDYwcHg7XFxuICAgICAgICB3aWR0aDogNjBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIH1cXG4gICAgI3RvZ2dsZS1ib2R5OmFmdGVyIHtcXG4gICAgICAgIHRvcDogMTVweDtcXG4gICAgICAgIGxlZnQ6IDUwcHg7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDE1cHg7XFxuICAgIH1cXG4gICAgLnRyYXktaXRlbSB7XFxuICAgICAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgfVxcblxcbn1cXG5cXG4vKiBob3Jpem9udGFsIGNvbmZpZ3VyYXRpb24gKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogMTA1MHB4KSBvciAobWF4LWhlaWdodDogNjUwcHgpIHtcXG4gICAgLyogc2V0IHNldHRpbmdzICovXFxuICAgICNzZXQtY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLWNvbHVtbjogMWZyIDFmcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgI3NldC1jb250YWluZXIgPiAuZ3JpZC1ib3gge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyA0O1xcbiAgICB9XFxuICAgIC5zZXQtdHJheSB7XFxuICAgICAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIH1cXG4gICAgI3RvZ2dsZS1iYXIge1xcbiAgICAgICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgfVxcbiAgICAjdG9nZ2xlLWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAvKiBwbGF5IHNldHRpbmdzICovXFxuICAgIC5wbGF5LWNvbnRhaW5lciA+IC5ncmlkLWJveC5wbGF5LXN0YXR1cyA+IGRpdntcXG4gICAgICAgIGhlaWdodDogMXJlbTtcXG4gICAgICAgIHdpZHRoOiAxcmVtO1xcbiAgICB9XFxuICAgIFxcbiAgICAucGxheS1jb250YWluZXIgPiAuZ3JpZC1ib3gucGxheS1hcmVhID4gZGl2e1xcbiAgICAgICAgaGVpZ2h0OiAxLjRyZW07XFxuICAgICAgICB3aWR0aDogMS40cmVtO1xcbiAgICB9XFxuICAgIC5wbGF5LWNvbnRhaW5lciB7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICB9XFxuXFxuICAgIC5wbGF5LWFyZWEge1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICB9XFxuXFxuICAgIC5wbGF5LXN0YXR1cyB7XFxuICAgICAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTA1MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDY1MXB4KSB7XFxuICAgIC5wbGF5LWJ1dHRvbiB7XFxuICAgICAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtaGVpZ2h0OiA2NTBweCkge1xcbiAgICAucGxheS1idXR0b24ge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIH1cXG4gICAgXFxuICAgIC5wbGF5LWJ1dHRvbiB7XFxuICAgICAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIH1cXG59XFxuXFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwNTBweCkgYW5kIChtaW4taGVpZ2h0OiA2NTFweCkge1xcbiAgICAucGxheS1jb250YWluZXIgPiAuZ3JpZC1ib3gucGxheS1zdGF0dXMgPiBkaXZ7XFxuICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIH1cXG4gICAgXFxuICAgIC5wbGF5LWNvbnRhaW5lciA+IC5ncmlkLWJveC5wbGF5LWFyZWEgPiBkaXZ7XFxuICAgICAgICBoZWlnaHQ6IDNyZW07XFxuICAgICAgICB3aWR0aDogM3JlbTtcXG4gICAgfVxcbn1cXG5cXG4vKiBtb2JpbGUgdmVydGljYWwgc2V0dGluZ3MgKi9cXG5AbWVkaWEgKG1heC13aWR0aDogMzkwcHgpIGFuZCAobWF4LWhlaWdodDogODU1cHgpIHtcXG4gICAgI3NldC1jb250YWluZXIgPiAuZ3JpZC1ib3ggPiBkaXZ7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICB3aWR0aDogMS40cmVtO1xcbiAgICAgICAgaGVpZ2h0OiAxLjRyZW07XFxuICAgIH1cXG5cXG4gICAgI3RvZ2dsZS1ib2R5IHtcXG4gICAgICAgIGhlaWdodDogNjBweDtcXG4gICAgICAgIHdpZHRoOiA2MHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgfVxcblxcbiAgICAjdG9nZ2xlLWJvZHk6YWZ0ZXIge1xcbiAgICAgICAgdG9wOiAxNXB4O1xcbiAgICAgICAgbGVmdDogNTBweDtcXG4gICAgICAgIGJvcmRlci13aWR0aDogMTVweDtcXG4gICAgfVxcblxcbiAgICAudHJheS1pdGVtIHtcXG4gICAgICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICB9XFxuXFxuICAgICNoZWFkZXIgPiBoMSB7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgIH1cXG4gICAgI2luc3QtdWwge1xcbiAgICAgICAgZm9udC1zaXplOiAuN3JlbTtcXG4gICAgfVxcblxcbiAgICAucGxheS1jb250YWluZXIgPiAuZ3JpZC1ib3gucGxheS1zdGF0dXMgPiBkaXZ7XFxuICAgICAgICBoZWlnaHQ6IC45cmVtO1xcbiAgICAgICAgd2lkdGg6IC45cmVtO1xcbiAgICB9XFxuICAgIFxcbiAgICAucGxheS1jb250YWluZXIgPiAuZ3JpZC1ib3gucGxheS1hcmVhID4gZGl2e1xcbiAgICAgICAgaGVpZ2h0OiAxLjhyZW07XFxuICAgICAgICB3aWR0aDogMS44cmVtO1xcbiAgICB9XFxufVxcblxcblxcblxcbi8qIHNldCBjb25maWd1cmF0aW9uIGZvciBmdWxsIHNjcmVlbiAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiAxMDUwcHgpIHtcXG4gICAgI3NldC1jb250YWluZXIgPiAuZ3JpZC1ib3ggPiBkaXYge1xcbiAgICAgICAgd2lkdGg6IDNyZW07XFxuICAgICAgICBoZWlnaHQ6IDNyZW07XFxuICAgIH1cXG5cXG4gICAgI2luc3QtY29udGFpbmVyIHsgXFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgICNzdWJtaXQtYmFyIHtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xcbiAgICAgICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICB9XFxuXFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIHdpZGUgdmlld3Mgb2YgcGxheSBkaXNwbGF5IFxcbkBtZWRpYSAobWluLXdpZHRoOiA1NzBweCkge1xcbiAgICAucGxheS1jb250YWluZXIge1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgICAgICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgfVxcblxcbiAgICAucGxheS1hcmVhIHtcXG4gICAgICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgfVxcblxcbiAgICAucGxheS1zdGF0dXMge1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLnBsYXktYnV0dG9uIHtcXG4gICAgICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgfVxcbn0gKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBtYWtlRWxlbWVudCwgYWRqdXN0VG9JbmRleCwgYnVpbGRHcmlkIH0gZnJvbSAnLi9ET01IZWxwZXJzLmpzJztcbmltcG9ydCB7IFNldFBsYXllciB9IGZyb20gJy4vU2V0UGxheWVyLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVET00oKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnNldEF0dHJpYnV0ZSgnb25kcmFnc3RhcnQnLCAncmV0dXJuIGZhbHNlOycpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5zZXRBdHRyaWJ1dGUoJ29uZHJvcCcsICdyZXR1cm4gZmFsc2UnKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBpZDogJ21haW4tY29udGFpbmVyJyB9KTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnZGl2JywgeyBpZDogJ2hlYWRlcicgfSkpO1xuICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjaGVhZGVyJykuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2gxJywge30sICdCQVRUTEVTSElQJykpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnZGl2JywgeyBpZDogJ2Zvb3RlcicgfSkpO1xuICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjZm9vdGVyJykuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ3AnLCB7fSwgJyZjb3B5OyAyMDIyIEppbW15IFF1YWRyb3MnKSk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgLy8gY29uc3Qgc2V0UGxheWVyID0gbmV3IFNldFBsYXllcigxMCwgWzUsIDQsIDMsIDMsIDJdKTtcbiAgICAvLyBzZXRQbGF5ZXIuZGlzcGxheSgpO1xufVxuXG4vLyBEaXNwbGF5IGZvciB0aGUgZ2VuZXJhbCBwbGF5IGFyZWFcbmV4cG9ydCBjbGFzcyBQbGF5Qm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKHNpemUsIGFsbFNoaXBzKSB7XG4gICAgICAgIHRoaXMuU0laRSA9IHNpemU7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdwbGF5LWNvbnRhaW5lcicgfSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkR3JpZChzaXplLCAncGxheS1hcmVhJykpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZEdyaWQoc2l6ZSwgJ3BsYXktc3RhdHVzJykpXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdidXR0b24nLCB7IGNsYXNzOiAncGxheS1idXR0b24nLCBkaXNhYmxlZDogJ3RydWUnIH0sICdTRUxFQ1QgVEFSR0VUJykpO1xuICAgICAgICBhbGxTaGlwcy5mb3JFYWNoKGluZGV4ID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHVzKGluZGV4LCAnc2hpcCcpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICAvLyBnZXR0ZXJzIGZvciBib2FyZCBlbGVtZW50c1xuICAgIGdldENvbnRhaW5lcigpIHsgcmV0dXJuIHRoaXMuY29udGFpbmVyOyB9XG4gICAgZ2V0UGxheSgpIHsgcmV0dXJuIHRoaXMuZ2V0Q29udGFpbmVyKCkucXVlcnlTZWxlY3RvcignLnBsYXktYXJlYScpOyB9XG4gICAgZ2V0U3RhdHVzKCkgeyByZXR1cm4gdGhpcy5nZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yKCcucGxheS1zdGF0dXMnKTsgfVxuICAgIGdldEJ1dHRvbigpIHsgcmV0dXJuIHRoaXMuZ2V0Q29udGFpbmVyKCkucXVlcnlTZWxlY3RvcignLnBsYXktYnV0dG9uJyk7IH1cbiAgICBcbiAgICAvLyBIZWxwZXJzIHRvIGhhbmRsZSB0aGUgZGlzcGxheWVkIGd1aWRlc1xuICAgIGdldEd1aWRlSW5kZXgoaW5kZXgpIHsgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyAoaW5kZXggJSB0aGlzLlNJWkUpKS5jb25jYXQoTWF0aC5mbG9vcihpbmRleCAvIHRoaXMuU0laRSkgKyAxKTsgfVxuXG4gICAgZGlzcGxheUJvYXJkKCkgeyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250YWluZXInKS5hcHBlbmRDaGlsZCh0aGlzLmdldENvbnRhaW5lcigpKTsgfVxuICAgIHJlbW92ZUJvYXJkKCkgeyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheS1jb250YWluZXInKS5yZW1vdmUoKTsgfVxuXG4gICAgLy8gc2V0IHRoZSBkaXNwbGF5J3MgYnV0dG9uIHRleHQgYW5kIGRpc2FibGVkIHN0YXR1c1xuICAgIHNldEJ1dHRvbihpbmRleCkge1xuICAgICAgICB0aGlzLmdldEJ1dHRvbigpLmRpc2FibGVkID0gKGluZGV4KSA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgdGhpcy5nZXRCdXR0b24oKS5pbm5lckhUTUwgPSAoaW5kZXgpID8gYEFUVEFDSyAke3RoaXMuZ2V0R3VpZGVJbmRleChpbmRleCl9YCA6IGBTRUxFQ1QgVEFSR0VUYDsgXG4gICAgfTtcblxuICAgIC8vIHN3aXRjaGVzIGEgY2VsbCBmcm9tIG9wZW4gdG8gc2VsZWN0ZWRcbiAgICB0b2dnbGVTZWxlY3RlZChpbmRleCkge1xuICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5nZXRQbGF5KCkuY2hpbGRyZW4uaXRlbShhZGp1c3RUb0luZGV4KGluZGV4LCB0aGlzLlNJWkUpKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuLWNlbGwnKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZCcpO1xuICAgIH1cblxuICAgIC8vIHNldCBjbGFzcyBmb3IgY2VsbCBpbiB0aGUgcGxheSBncmlkXG4gICAgdXBkYXRlUGxheShpbmRleCwgdG9VcGRhdGUpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuZ2V0UGxheSgpLmNoaWxkcmVuLml0ZW0oYWRqdXN0VG9JbmRleChpbmRleCwgdGhpcy5TSVpFKSk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKHRvVXBkYXRlKTtcbiAgICB9XG5cbiAgICAvLyBzZXQgY2xhc3MgZm9yIGNlbGwgaW4gdGhlIHN0YXR1cyBncmlkXG4gICAgdXBkYXRlU3RhdHVzKGluZGV4LCB0b1VwZGF0ZSkge1xuICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5nZXRTdGF0dXMoKS5jaGlsZHJlbi5pdGVtKGFkanVzdFRvSW5kZXgoaW5kZXgsIHRoaXMuU0laRSkpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQodG9VcGRhdGUpO1xuICAgIH1cblxuICAgIC8vIGRpc3BsYXkgYSBwcml2YWN5IGNvdmVyIG9uIHR1cm4gc3dpdGNoLW9mZnMsIHRha2VzIGEgc3RyaW5nIGZvciBwbGF5ZXIncyBuYW1lLCByZXR1cm5zIGJ1dHRvblxuICAgIGNyZWF0ZVR1cm5Db3ZlcihwbGF5ZXIpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICd0dXJuLWNvbnRhaW5lcicgfSk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ3R1cm4tY29udGVudCcgfSk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IG1ha2VFbGVtZW50KCdidXR0b24nLCB7IGNsYXNzOiAndHVybi1idXR0b24nIH0sICdSRUFEWScpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdoMScsIHt9LCBgJHtwbGF5ZXIudG9VcHBlckNhc2UoKX0nc2ApKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnaDEnLCB7fSwgJ1RVUk4nKSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICB0aGlzLmdldENvbnRhaW5lcigpLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgIHJldHVybiBidXR0b247XG4gICAgfVxuXG4gICAgY2xlYXJUdXJuQ292ZXIoKSB7XG4gICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkucXVlcnlTZWxlY3RvcignLnR1cm4tY29udGFpbmVyJykucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgLy8gZGlzcGxheSBhIGdhbWVvdmVyIG1lc3NhZ2Ugd2l0aCBjdXN0b24gcmVzdWx0IHN0cmluZywgcmV0dXJucyBidXR0b24gZm9yIGJpbmRpbmdcbiAgICBjcmVhdGVHYW1lT3ZlcihyZXN1bHQpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdnYW1lb3Zlci1jb250YWluZXInIH0pO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdnYW1lb3Zlci1jb250ZW50JyB9KTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gbWFrZUVsZW1lbnQoJ2J1dHRvbicsIHsgY2xhc3M6ICdnYW1lb3Zlci1idXR0b24nIH0sICdQTEFZIEFHQUlOPycpXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2gxJywge30sIHJlc3VsdCkpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgICAgdGhpcy5nZXRDb250YWluZXIoKS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH1cbn0iLCIvLyBIZWxwZXIgZnVuY3Rpb24gZm9yIGVhc3kgZWxlbWVudCBjcmVhdGlvblxuLy8gdXNlOiAoPHN0cmluZz4sIDxvYmplY3Q+IG9mIHByb3BlcnRpZXMgYXMgeW91IHdvdWxkIHVzZSBzZXRBdHRyaWJ1dGUsIDxzdHJpbmc+aW5uZXJIVE1MKVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VFbGVtZW50KHR5cGUsIHByb3BlcnRpZXMgPSB7fSwgaW5uZXIgPSBudWxsKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgZm9yIChsZXQga2V5IGluIHByb3BlcnRpZXMpIHsgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYCR7a2V5fWAsIGAke3Byb3BlcnRpZXNba2V5XX1gKSB9O1xuICAgIGlmIChpbm5lcikgeyBlbGVtZW50LmlubmVySFRNTCA9IGlubmVyIH07XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGp1c3RUb0luZGV4KGluZGV4LCBzaXplKSB7IFxuICAgIHJldHVybiAoc2l6ZSArIDEpICogKGluZGV4IC8gc2l6ZSArIDEpICsgMTtcbn1cblxuLy8gY3JlYXRlIGEgdmFyaWFibHkgc2l6ZWQgZ3JpZCB3aXRoIGd1aWRlIG1lYXN1cmVzIG9uIHRvcCBhbmQgbGVmdCBoYW5kIHNpZGVcbmV4cG9ydCBmdW5jdGlvbiBidWlsZEdyaWQoc2lkZVNpemUsIGFkZENsYXNzKSB7XG4gICAgY29uc3QgU0laRSA9IE1hdGgucG93KHNpZGVTaXplICsgMSwgMik7XG4gICAgY29uc3QgZ3JpZEJveCA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnZ3JpZC1ib3gnIH0pO1xuICAgIGlmIChhZGRDbGFzcykgeyBncmlkQm94LmNsYXNzTGlzdC5hZGQoYWRkQ2xhc3MpOyB9XG4gICAgbGV0IGNvbFZhbHVlID0gNjU7XG4gICAgbGV0IHJvd1ZhbHVlID0gMTtcbiAgICBsZXQgY2VsbEluZGV4ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IFNJWkU7IGkrKykgeyBcbiAgICAgICAgaWYgKGkgPT09IDApIHsgZ3JpZEJveC5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2d1aWRlLWNvcm5lcicgfSkpIH1cbiAgICAgICAgZWxzZSBpZiAoaSA8PSBzaWRlU2l6ZSkgeyBncmlkQm94LmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnZ3VpZGUtdG9wJyB9LCBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvbFZhbHVlKyspKSkgfVxuICAgICAgICBlbHNlIGlmIChpICUgKHNpZGVTaXplICsgMSkgPT09IDApIHsgZ3JpZEJveC5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2d1aWRlLWxlZnQnfSwgcm93VmFsdWUrKykpIH1cbiAgICAgICAgZWxzZSB7IGdyaWRCb3guYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdvcGVuLWNlbGwgc2VsZWN0YWJsZScsICdkYXRhLWluZGV4JzogY2VsbEluZGV4KysgfSkpIH07XG4gICAgfVxuXG4gICAgLy8gRmluZCBhIGJldHRlciBob21lIGZvciB0aGlzXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zaWRlLXNpemUnLCBzaWRlU2l6ZSArIDEpO1xuICAgIFxuICAgIHJldHVybiBncmlkQm94O1xufVxuXG4vLyBzZXRQbGF5ZXIgRE9NIGJ1aWxkZXJzXG5cbi8vIGNvbnRhaW5lciBmb3IgaWNvbnMgaW5kZXhlcyB0aGUgaWNvbnMgb24gb3JkZXIgYWRkZWRcbmV4cG9ydCBmdW5jdGlvbiBidWlsZFNldFBsYXllcihzaXplLCBwaWVjZXMsIGlzTXVsdGkpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBpZDogJ3NldC1jb250YWluZXInIH0pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZEdyaWQoc2l6ZSkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZFRvZ2dsZUJhcigpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFrZVRyYXkocGllY2VzKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkU3VibWl0QmFyKGlzTXVsdGkpKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBidWlsZFN1Ym1pdEJhcihpc011bHRpKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgaWQ6ICdzdWJtaXQtYmFyJyB9KTtcbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBpZDogJ3N1Ym1pdC1iYycgfSk7XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdidXR0b24nLCB7IGlkOiAnc3VibWl0LWJ0bicsIGRpc2FibGVkOiAndHJ1ZScgfSwgJ0NPTlRJTlVFJykpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZFNldE11bHRpKGlzTXVsdGkpKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBidWlsZFNldE11bHRpKGlzTXVsdGkpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBpZDogJ3N1Ym1pdC1tYycgfSk7XG4gICAgY29uc3QgdHdvID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgaWQ6ICdzdWJtaXQtbWMtMicgfSk7XG4gICAgY29uc3QgY2hlY2sgPSBtYWtlRWxlbWVudCgnaW5wdXQnLCB7IHR5cGU6ICdjaGVja2JveCcsIGlkOiAnc3VibWl0LWNoaycgfSk7XG4gICAgaWYgKGlzTXVsdGkpIHsgXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpcy1tdWx0aScpO1xuICAgICAgICBjaGVjay5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ3RydWUnKSBcbiAgICB9O1xuICAgIHR3by5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnZGl2Jywge30sICdUJykpO1xuICAgIHR3by5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnZGl2Jywge30sICdXJykpO1xuICAgIHR3by5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnZGl2Jywge30sICdPJykpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0d28pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnZGl2JywgeyBpZDogJ3N1Ym1pdC1tYy1tJyB9LCAnUExBWScpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2spO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkVG9nZ2xlQmFyKCkge1xuICAgIGNvbnN0IHRvZ2dsZWJhciA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGlkOiAndG9nZ2xlLWJhcicgfSk7XG4gICAgY29uc3QgdG9nZ2xlQ29udGFpbmVyID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgaWQ6ICd0b2dnbGUtY29udGFpbmVyJyB9KVxuICAgIGNvbnN0IHRvZ2dsZUJvZHkgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBpZDogJ3RvZ2dsZS1ib2R5JywgJ2RhdGEteSc6ICdmYWxzZScgfSk7XG4gICAgY29uc3QgdG9nZ2xlVGV4dCA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGlkOiAndG9nZ2xlLXRleHQnIH0sICdYJyk7XG4gICAgY29uc3QgaW5zdHJ1Y3RDb250ID0gbWFrZUVsZW1lbnQoJ2RpdicsIHtpZDogJ2luc3QtY29udGFpbmVyJyB9KTtcbiAgICBjb25zdCBpbnN0cnVjdFVMID0gbWFrZUVsZW1lbnQoJ3VsJywge2lkOiAnaW5zdC11bCcgfSk7XG4gICAgaW5zdHJ1Y3RVTC5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnbGknLCB7fSwgJ0RSQUcgUElFQ0VTIEJFTE9XIFRPIEdSSUQnKSk7XG4gICAgaW5zdHJ1Y3RVTC5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnbGknLCB7fSwgJ0xFRlQgVE9HR0xFIFRPIFNFVCBESVJFQ1RJT04nKSk7XG4gICAgaW5zdHJ1Y3RVTC5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnbGknLCB7fSwgJ09OQ0UgQUxMIFNFVCBQUkVTUyBDT05USU5VRScpKTtcbiAgICB0b2dnbGVCb2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndG9nZ2xlLXJvdGF0ZScpKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5zZXRBdHRyaWJ1dGUoJ2RhdGEteScsICdmYWxzZScpO1xuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgndG9nZ2xlLXJvdGF0ZScpO1xuICAgICAgICAgICAgdG9nZ2xlVGV4dC5pbm5lckhUTUwgPSAnWCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlLnRhcmdldC5zZXRBdHRyaWJ1dGUoJ2RhdGEteScsICd0cnVlJyk7XG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtcm90YXRlJyk7XG4gICAgICAgICAgICB0b2dnbGVUZXh0LmlubmVySFRNTCA9ICdZJztcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHRvZ2dsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2dnbGVCb2R5KTtcbiAgICB0b2dnbGVDb250YWluZXIuYXBwZW5kQ2hpbGQodG9nZ2xlVGV4dCk7XG4gICAgdG9nZ2xlYmFyLmFwcGVuZENoaWxkKHRvZ2dsZUNvbnRhaW5lcilcbiAgICBpbnN0cnVjdENvbnQuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3RVTCk7XG4gICAgdG9nZ2xlYmFyLmFwcGVuZENoaWxkKGluc3RydWN0Q29udCk7XG4gICAgcmV0dXJuIHRvZ2dsZWJhcjtcbn1cblxuZnVuY3Rpb24gbWFrZVRyYXkocGllY2VzKSB7XG4gICAgY29uc3QgdHJheSA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnc2V0LXRyYXknIH0pO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDAsIGogPSBNYXRoLmZsb29yKChwaWVjZXMubGVuZ3RoKSAvIDIpOyBqIDwgcGllY2VzLmxlbmd0aDsgaSsrLCBqKyspIHtcbiAgICAgICAgaWYgKGkgPCBNYXRoLmZsb29yKHBpZWNlcy5sZW5ndGggLyAyKSkgeyBcbiAgICAgICAgICAgIHRyYXkuYXBwZW5kQ2hpbGQobWFrZVRyYXlJdGVtKHBpZWNlc1tpXSkpO1xuICAgICAgICAgICAgdHJheS5sYXN0Q2hpbGQuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJheScsIGAke2luZGV4Kyt9YCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJheS5hcHBlbmRDaGlsZChtYWtlVHJheUl0ZW0ocGllY2VzW2pdKSk7XG4gICAgICAgIHRyYXkubGFzdENoaWxkLmZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKCdkYXRhLXRyYXknLCBgJHtpbmRleCsrfWApO1xuICAgIH1cbiAgICByZXR1cm4gdHJheTtcbn1cblxuLy8gY3JlYXRlIGhvbGRlciBmb3IgaWNvbnNcbmZ1bmN0aW9uIG1ha2VUcmF5SXRlbShwaWVjZSkge1xuICAgIGNvbnN0IGl0ZW0gPSBtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ3RyYXktaXRlbScgfSlcbiAgICBpdGVtLmFwcGVuZENoaWxkKG1ha2VQaWVjZUljb24ocGllY2UpKTtcbiAgICByZXR1cm4gaXRlbTtcbn1cblxuLy8gY3JlYXRlIGljb25zXG5mdW5jdGlvbiBtYWtlUGllY2VJY29uKHNpemUpIHtcbiAgICBjb25zdCBpY29uID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdpY29uLXBpZWNlJyB9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICBjb25zdCBjZWxsID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdpY29uLWNlbGwnIH0pO1xuICAgICAgICBpY29uLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIH1cbiAgICBpY29uLmRhdGFzZXQuc2l6ZSA9IHNpemU7XG4gICAgLy8gaWNvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4gdGhpcy5kcmFnU3RhcnQoZSkpO1xuICAgIHJldHVybiBpY29uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZURyYWdJY29uKHNpemUsIHZlcnRpY2FsLCB0cmF5LCBjZWxsU2l6ZSkge1xuICAgIGNvbnN0IGRyYWdJY29uID0gbWFrZVBpZWNlSWNvbihOdW1iZXIoc2l6ZSkpO1xuICAgIGRyYWdJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZHJhZ2dlZCcpO1xuICAgIGRyYWdJY29uLnNldEF0dHJpYnV0ZSgnZGF0YS10cmF5JywgdHJheSk7XG4gICAgaWYgKHZlcnRpY2FsKSB7IGRyYWdJY29uLmNsYXNzTGlzdC5hZGQoJ2RyYWcteScpIH1cbiAgICBbLi4uZHJhZ0ljb24uY2hpbGRyZW5dLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICBjaGlsZC5zdHlsZS5oZWlnaHQgPSBjZWxsU2l6ZTtcbiAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmFkZCgnZHJhZy1jZWxsJylcbiAgICB9KTtcbiAgICByZXR1cm4gZHJhZ0ljb247IFxufSIsImxldCBlbGVtZW50O1xubGV0IHhPZmY7XG5sZXQgeU9mZjtcbmNvbnN0IG1vdmVIYW5kbGVyID0gbW92ZS5iaW5kKHRoaXMpO1xuY29uc3QgZW5kSGFuZGxlciA9IGVuZC5iaW5kKHRoaXMpO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBEcmFnRWxlbWVudChlLCB4LCB5KSB7XG4gICAgZWxlbWVudCA9IGU7XG4gICAgeE9mZiA9IHg7XG4gICAgeU9mZiA9IHk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdmVIYW5kbGVyLCB0cnVlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGVuZEhhbmRsZXIsIHRydWUpO1xufVxuXG5cbmZ1bmN0aW9uIG1vdmUoZSkge1xuICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZWxlbWVudC5zdHlsZS50b3AgPSAoZS5jbGllbnRZIC0geU9mZikgKyAncHgnO1xuICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IChlLmNsaWVudFggLSB4T2ZmKSArICdweCc7XG59XG5cbmZ1bmN0aW9uIGVuZChlKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdmVIYW5kbGVyLCB0cnVlKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGVuZEhhbmRsZXIsIHRydWUpO1xufSIsImltcG9ydCB7IFNoaXAgfSBmcm9tICcuL1NoaXAuanMnO1xuXG5leHBvcnQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihzaXplKSB7XG4gICAgICAgIHRoaXMuU0laRSA9IHNpemU7XG4gICAgICAgIHRoaXMuYWxsU2hpcHMgPSBbXTtcbiAgICAgICAgdGhpcy5ib2FyZCA9IFtdO1xuICAgICAgICB0aGlzLmFsbEhpdCA9IFtdO1xuICAgICAgICB0aGlzLmFsbE1pc3MgPSBbXTtcbiAgICAgICAgdGhpcy5hbGxQbGFjZWQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplICogc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkLnB1c2goe3NoaXA6IG51bGwsIGhpdDogZmFsc2V9KVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGdldEhpdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxsSGl0O1xuICAgIH1cblxuICAgIGdldE1pc3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFsbE1pc3M7XG4gICAgfVxuXG4gICAgZ2V0UGxhY2VkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hbGxQbGFjZWQ7XG4gICAgfVxuXG4gICAgZ2V0U2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuU0laRSAqIHRoaXMuU0laRTtcbiAgICB9XG5cbiAgICBpc0hpdChpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFtpbmRleF0uaGl0O1xuICAgIH1cblxuICAgIC8vIHBsYWNlIG5ldyBzaGlwIG9uIGdhbWVib2FyZCByZXR1cm5zIHNoaXAgb3IgZmFsc2UgaWYgbm90IGxlZ2FsIHBsYWNlbWVudFxuICAgIGFkZFNoaXAoc2hpcFNpemUsIGhlYWQsIHZlcnRpY2FsID0gZmFsc2UpIHtcbiAgICAgICAgLy8gZGlzYWxsb3cgcGxhY2VtZW50IGJleW9uZCBib2FyZCdzIGJvdW5kYXJpZXNcbiAgICAgICAgaWYgKCF2ZXJ0aWNhbCAmJiAoKGhlYWQgJSB0aGlzLlNJWkUpICsgc2hpcFNpemUgPiB0aGlzLlNJWkUpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICh2ZXJ0aWNhbCAmJiAoTWF0aC5mbG9vcihoZWFkIC8gdGhpcy5TSVpFKSkgKyBzaGlwU2l6ZSA+IHRoaXMuU0laRSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHRvUGxhY2UgPSB0aGlzLmdldEluZGVjZXMoc2hpcFNpemUsIGhlYWQsIHZlcnRpY2FsKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGluc3BlY3QgZm9yIGFueSBvdmVybGFwcGluZyBjb25mbGljdFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvUGxhY2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3RvUGxhY2VbaV1dLnNoaXApIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBuZXdTaGlwID0gbmV3IFNoaXAoc2hpcFNpemUpO1xuICAgICAgICB0b1BsYWNlLmZvckVhY2goaW5kZXggPT4ge1xuICAgICAgICAgICAgdGhpcy5hbGxQbGFjZWQucHVzaChpbmRleCk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW2luZGV4XS5zaGlwID0gbmV3U2hpcFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hbGxTaGlwcy5wdXNoKHRvUGxhY2UpO1xuICAgICAgICByZXR1cm4gbmV3U2hpcDtcbiAgICB9XG5cbiAgICAvLyByZXR1cm5zIGFuIGFycmF5IG9mIGEgc2hpcCdzIHNlcXVlbnRpYWwgcG9zaXRpb25pbmdcbiAgICBnZXRJbmRlY2VzKHNpemUsIGhlYWQsIHZlcnRpY2FsKSB7XG4gICAgICAgIGNvbnN0IGluZGVjZXMgPSBbXTtcbiAgICAgICAgaWYgKHZlcnRpY2FsKSB7XG4gICAgICAgICAgICB3aGlsZSAoc2l6ZS0tID4gMCkge1xuICAgICAgICAgICAgICAgIGluZGVjZXMucHVzaChoZWFkKTtcbiAgICAgICAgICAgICAgICBoZWFkICs9IHRoaXMuU0laRTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aGlsZSAoc2l6ZS0tID4gMCkge1xuICAgICAgICAgICAgICAgIGluZGVjZXMucHVzaChoZWFkKyspO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbmRlY2VzO1xuICAgIH1cblxuICAgIC8vIHNldHMgYXR0YWNrIGFjdGlvbnMsIG11c3QgYmUgaW50ZWdlciBhbmQgd2l0aGluIHRoZSBnYW1lYm9hcmQsIGlnbm9yZXMgc3BhY2VzIGFscmVhZHkgaGl0XG4gICAgcmVjZWl2ZUF0dGFjayhpbmRleCkge1xuICAgICAgICBpZiAodHlwZW9mIGluZGV4ICE9ICdudW1iZXInKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbHVlIG11c3QgYmUgTnVtYmVyJykgfTtcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKGluZGV4KSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdPbmx5IGludGVnZXIgdmFsdWVzJykgfTtcbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLmJvYXJkLmxlbmd0aCkgeyB0aHJvdyBuZXcgUmFuZ2VFcnJvcihgdmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kICR7dGhpcy5ib2FyZC5sZW5ndGggLSAxfWApOyB9XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW2luZGV4XS5oaXQpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgdGhpcy5ib2FyZFtpbmRleF0uaGl0ID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbaW5kZXhdLnNoaXApIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbaW5kZXhdLnNoaXAuaGl0KCk7XG4gICAgICAgICAgICB0aGlzLmFsbEhpdC5wdXNoKGluZGV4KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkW2luZGV4XS5zaGlwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hbGxNaXNzLnB1c2goaW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjb25maXJtcyB0aGF0IHRoZSBzaGlwIGF0IGVhY2ggZnJvbnQgcG9zaXRpb24gaW4gYWxsU2hpcHMgaXMgc3Vua1xuICAgIGlzU3VuaygpIHtcbiAgICAgICAgbGV0IHN1bmsgPSB0cnVlO1xuICAgICAgICB0aGlzLmFsbFNoaXBzLmZvckVhY2goc2hpcCA9PiB7IFxuICAgICAgICAgICAgaWYgKCF0aGlzLmJvYXJkW3NoaXBbMF1dLnNoaXAuaXNTdW5rKCkpIHsgc3VuayA9IGZhbHNlOyB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc3VuaztcbiAgICB9XG59IiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vR2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBQbGF5Qm9hcmQgfSBmcm9tIFwiLi9ET01Db250cm9sXCI7XG4vLyBob2xkcyBwbGF5ZXIncyBnYW1lYm9hcmQsIGNhbiBkZXRlcm1pbmUgbmV4dCBtb3ZlIGlmIGNwdSBcbi8vIHBhc3MgYW4gYXJyYXkgb2YgYXJyYXlzIGluIFtzaGlwIHNpemUsIHNoaXAgaW5kZXgsIGlzIHZlcnRpY2FsKHRydWUvZmFsc2UpXSBmb3JtYXRcbi8vIHRvIHBvcHVsYXRlIHRoZSBnYW1lYm9hcmRcbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHRvQWRkID0gW10pIHtcbiAgICAgICAgdGhpcy5TSVpFID0gMTA7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgR2FtZWJvYXJkKHRoaXMuU0laRSk7XG4gICAgICAgIHRoaXMubmV4dE1vdmUgPSBbXTtcbiAgICAgICAgaWYgKHRvQWRkKSB7IHRvQWRkLmZvckVhY2goc2hpcCA9PiB0aGlzLmJvYXJkLmFkZFNoaXAoc2hpcFswXSwgc2hpcFsxXSwgc2hpcFsyXSkgKTsgfVxuICAgICAgICBlbHNlIHsgdGhpcy5yYW5kb21Cb2FyZCgpLmZvckVhY2goc2hpcCA9PiB0aGlzLmJvYXJkLmFkZFNoaXAoc2hpcFswXSwgc2hpcFsxXSwgc2hpcFsyXSkgKTsgfVxuICAgICAgICB0aGlzLmRpc3BsYXkgPSBuZXcgUGxheUJvYXJkKHRoaXMuU0laRSwgdGhpcy5nZXRBbGxTaGlwSW5kZXgoKSk7XG4gICAgfTtcblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgZ2V0RGlzcGxheSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzcGxheTtcbiAgICB9XG5cbiAgICBnZXRBbGxTaGlwSW5kZXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkLmdldFBsYWNlZCgpO1xuICAgIH1cblxuICAgIGdldE1pc3NJbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQuZ2V0TWlzcygpO1xuICAgIH1cblxuICAgIGdldEhpdEluZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZC5nZXRIaXQoKTtcbiAgICB9XG5cbiAgICAvLyBjb25maXJtcyBpZiBwbGF5ZXIgaXMgZGVmZWF0ZWRcbiAgICBpc0RlZmVhdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZC5pc1N1bmsoKTtcbiAgICB9XG5cbiAgICAvLyByZXR1cm5zIGVpdGhlciB0aGUgaGl0IHNoaXAgb3IgbnVsbFxuICAgIHRha2VIaXQoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmJvYXJkLnJlY2VpdmVBdHRhY2soaW5kZXgpKSA/ICdoaXQnIDogJ21pc3MnO1xuICAgIH1cblxuICAgIC8vIGNvbmZpcm1zIGlmIGEgbW92ZSBpcyB2YWxpZFxuICAgIGlzVmFsaWRNb3ZlKGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5ib2FyZC5nZXRTaXplKCkpIHsgcmV0dXJuIGZhbHNlIH07XG4gICAgICAgIHJldHVybiAhdGhpcy5ib2FyZC5pc0hpdChpbmRleCk7XG4gICAgfVxuXG4gICAgLy8gdGFrZXMgYSBjcHUgdHVybiBhZ2FpbnN0IHBsYXllciwgcmV0dXJucyBtb3ZlIHRha2VuXG4gICAgY3B1VHVybigpIHtcbiAgICAgICAgbGV0IG1vdmU7XG4gICAgICAgIGlmICh0aGlzLm5leHRNb3ZlLmxlbmd0aCA9PT0gMCkgeyBtb3ZlID0gdGhpcy5yYW5kb21Nb3ZlKCk7IH1cbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0gdGhpcy50YWtlSGl0KG1vdmUpO1xuICAgICAgICByZXR1cm4gbW92ZTtcbiAgICB9XG5cbiAgICAvLyBlbGVjdCBhIHZhbGlkIGZyZWUgc3BhY2UgdG8gYXR0YWNrIGZyb20gdGhlIGdhbWVib2FyZFxuICAgIHJhbmRvbU1vdmUoKSB7XG4gICAgICAgIGNvbnN0IG1vdmUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLnBvdyh0aGlzLlNJWkUsIDIpKTtcbiAgICAgICAgcmV0dXJuICh0aGlzLmlzVmFsaWRNb3ZlKG1vdmUpKSA/IG1vdmUgOiB0aGlzLnJhbmRvbU1vdmUoKTtcbiAgICB9XG5cbiAgICByYW5kb21Cb2FyZCgpIHtcbiAgICAgICAgY29uc3QgYWxsU2hpcHMgPSBbXTtcbiAgICAgICAgcmV0dXJuIGFsbFNoaXBzO1xuICAgIH1cbn07XG4iLCJpbXBvcnQgeyBEcmFnRWxlbWVudCB9IGZyb20gJy4vRHJhZ0VsZW1lbnQuanMnO1xuaW1wb3J0IHsgYWRqdXN0VG9JbmRleCwgYnVpbGRTZXRQbGF5ZXIsIG1ha2VEcmFnSWNvbiB9IGZyb20gJy4vRE9NSGVscGVycy5qcyc7XG5cbi8vIERpc3BsYXkgZm9yIGluaXRpYWx6aWluZyBhIHBsYXllclxuZXhwb3J0IGNsYXNzIFNldFBsYXllciB7XG4gICAgY29uc3RydWN0b3Ioc2l6ZSwgcGllY2VzLCBpc011bHRpKSB7XG4gICAgICAgIHRoaXMuU0laRSA9IHNpemU7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gYnVpbGRTZXRQbGF5ZXIoc2l6ZSwgcGllY2VzLCBpc011bHRpKTtcbiAgICAgICAgdGhpcy5iaW5kVHJheSgpO1xuICAgICAgICB0aGlzLmRyYWdFdmVudCA9IHtcbiAgICAgICAgICAgIGRyYWdPdmVyOiBudWxsLFxuICAgICAgICAgICAgZHJhZ0dyb3VwOiBbXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldEl0ZW0gPSBbXTtcbiAgICAgICAgdGhpcy5kcmFnUGlja1VwU3RhcnRIYW5kbGVyID0gdGhpcy5kcmFnUGlja1VwU3RhcnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmFnTW92ZUhhbmRsZXIgPSB0aGlzLmRyYWdNb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhZ0VuZEhhbmRsZXIgPSB0aGlzLmRyYWdFbmQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBiaW5kVHJheSgpIHtcbiAgICAgICAgdGhpcy5nZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yQWxsKCcuaWNvbi1waWVjZScpLmZvckVhY2goaWNvbiA9PiB7XG4gICAgICAgICAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB0aGlzLmRyYWdTdGFydChlKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldENvbnRhaW5lcigpIHsgcmV0dXJuIHRoaXMuY29udGFpbmVyOyB9XG4gICAgZ2V0R3JpZCgpIHsgcmV0dXJuIHRoaXMuZ2V0Q29udGFpbmVyKCkucXVlcnlTZWxlY3RvcignLmdyaWQtYm94Jyk7IH1cbiAgICBnZXRUcmF5KCkgeyByZXR1cm4gdGhpcy5nZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yKCcuc2V0LXRyYXknKTsgfVxuICAgIGdldEJ1dHRvbigpIHsgcmV0dXJuIHRoaXMuZ2V0Q29udGFpbmVyKCkucXVlcnlTZWxlY3RvcignI3N1Ym1pdC1idG4nKTsgfVxuICAgIGdldE11bHRpKCkgeyByZXR1cm4gdGhpcy5nZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LWNoaycpLmNoZWNrZWQgfVxuICAgIGdldERhdGEoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBtdWx0aTogdGhpcy5nZXRNdWx0aSgpLFxuICAgICAgICAgICAgYm9hcmQ6IFtdXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRJdGVtLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhZGQgPSBbXTtcbiAgICAgICAgICAgIGFkZC5wdXNoKGl0ZW0uc2l6ZSk7XG4gICAgICAgICAgICBhZGQucHVzaChpdGVtLmhlYWQpO1xuICAgICAgICAgICAgYWRkLnB1c2goaXRlbS5zZXRZKTtcbiAgICAgICAgICAgIGRhdGEuYm9hcmQucHVzaChhZGQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgLy8gYXBwZW5kIHNldHBsYXllciB0byBtYWluIGNvbnRhaW5lciwgc2V0cyBpbml0aWFsIGhlaWdodCBvZiBhbGwgaWNvbiBjZWxsc1xuICAgIC8vIGJpbmRzIHdpbmRvdyByZXNpemluZyB0byByZXNpemUgaWNvbnMgdG8gbWF0Y2ggZ3JpZCBzaXplXG4gICAgZGlzcGxheSgpIHsgXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKHRoaXMuZ2V0Q29udGFpbmVyKCkpOyBcbiAgICAgICAgdGhpcy5zZXRUcmF5SWNvblNpemUoKVxuICAgICAgICB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkLWJveCcpLmNoaWxkcmVuLml0ZW0oMTEpLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pY29uLWNlbGwnKS5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIGNsZWFyIHNldHBsYXllclxuICAgIHJlbW92ZSgpIHsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NldC1jb250YWluZXInKS5yZW1vdmUoKTsgfVxuXG4gICAgLy8gc2V0IHRoZSBpY29uJ3MgY2VsbCBzaXplIHRvIG1hdGNoIHRoZSBncmlkJ3MgY2VsbCBzaXplXG4gICAgc2V0VHJheUljb25TaXplKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaWNvbi1jZWxsJykuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgIGNlbGwuc3R5bGUuaGVpZ2h0ID0gdGhpcy5HZXRUcmF5SWNvblNpemUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgR2V0VHJheUljb25TaXplKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5nZXRHcmlkKCkuY2hpbGRyZW4uaXRlbShhZGp1c3RUb0luZGV4KDAsIHRoaXMuU0laRSkpLmNsaWVudEhlaWdodH1weGA7XG4gICAgfVxuXG4gICAgLy8gQWxsIGRyYWcvZHJvcCBhY3Rpb25zIHRvIGZvbGxvd1xuICAgIC8vIGNyZWF0ZXMgYW5kIGFwcGVuZHMgZHJhZ2dlZCBpY29uLCBzZXRzIGRyYWcgYmluZGluZ3NcbiAgICBkcmFnU3RhcnQoZSkge1xuICAgICAgICBjb25zdCBpY29uID0gKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaWNvbi1jZWxsJykpID8gZS50YXJnZXQucGFyZW50Tm9kZSA6IGUudGFyZ2V0O1xuICAgICAgICBpZiAoaWNvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2ljb24tZGlzYWJsZScpKSB7IHJldHVybiB9XG4gICAgICAgIGNvbnN0IGRyYWdJY29uID0gbWFrZURyYWdJY29uKFxuICAgICAgICAgICAgTnVtYmVyKGljb24uZGF0YXNldC5zaXplKSxcbiAgICAgICAgICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9nZ2xlLWJvZHknKS5kYXRhc2V0LnkgPT09ICd0cnVlJyksXG4gICAgICAgICAgICBpY29uLmRhdGFzZXQudHJheSxcbiAgICAgICAgICAgIHRoaXMuR2V0VHJheUljb25TaXplKClcbiAgICAgICAgICAgICk7XG4gICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnaWNvbi1kaXNhYmxlJyk7XG4gICAgICAgIGljb24uYXBwZW5kQ2hpbGQoZHJhZ0ljb24pO1xuICAgICAgICBjb25zdCBvZmZzZXQgPSAoZHJhZ0ljb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdkcmFnLXknKSlcbiAgICAgICAgICAgID8gdGhpcy5nZXRZb2Zmc2V0KGRyYWdJY29uLCBlLmNsaWVudFggLSBkcmFnSWNvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KVxuICAgICAgICAgICAgOiAwO1xuICAgICAgICBpZiAoIWRyYWdJY29uLmNsYXNzTGlzdC5jb250YWlucygnZHJhZy15JykpIHsgXG4gICAgICAgICAgICB0aGlzLnNldFhBdHRyaWJ1dGUoZHJhZ0ljb24sIGUuY2xpZW50WCAtIGRyYWdJY29uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQpOyBcbiAgICAgICAgfTtcbiAgICAgICAgRHJhZ0VsZW1lbnQoZHJhZ0ljb24sIGUuY2xpZW50WCAtIG9mZnNldCwgZS5jbGllbnRZKTsgXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmRyYWdFbmRIYW5kbGVyKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGFpbmVyJykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5kcmFnTW92ZUhhbmRsZXIsIHRydWUpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5kcmFnRW5kSGFuZGxlciwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgZHJhZ1BpY2tVcFN0YXJ0KGUpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgd2hpbGUgKHRoaXMuc2V0SXRlbVtpbmRleF0udHJheSAhPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC5nZXR0cmF5KSkgeyBpbmRleCsrOyB9XG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IHRoaXMuc2V0SXRlbVtpbmRleF07XG4gICAgICAgIGNvbnN0IGRyYWdJdGVtID0gbWFrZURyYWdJY29uKFxuICAgICAgICAgICAgc2VsZWN0LnNpemUsXG4gICAgICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZ2dsZS1ib2R5JykuZGF0YXNldC55ID09PSAndHJ1ZScpLFxuICAgICAgICAgICAgc2VsZWN0LnRyYXksXG4gICAgICAgICAgICB0aGlzLkdldFRyYXlJY29uU2l6ZSgpXG4gICAgICAgIClcbiAgICAgICAgZS50YXJnZXQuYXBwZW5kQ2hpbGQoZHJhZ0l0ZW0pO1xuICAgICAgICB0aGlzLmNvbmZpZ1BpY2tVcChkcmFnSXRlbSwgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2dnbGUtYm9keScpLmRhdGFzZXQueSA9PT0gJ3RydWUnKSk7XG4gICAgICAgIERyYWdFbGVtZW50KGRyYWdJdGVtLCBlLmNsaWVudFgsIGUuY2xpZW50WSk7XG4gICAgICAgIHRoaXMucmVtb3ZlUGxhY2VkKHNlbGVjdC5oZWFkLCBzZWxlY3Quc2l6ZSwgc2VsZWN0LnNldFkpO1xuICAgICAgICB0aGlzLnNldEl0ZW0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGFpbmVyJykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMuZHJhZ0VuZEhhbmRsZXIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmRyYWdNb3ZlSGFuZGxlciwgdHJ1ZSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmRyYWdFbmRIYW5kbGVyLCB0cnVlKTtcblxuICAgICAgICB0aGlzLmdldEJ1dHRvbigpLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBDb25maWd1cmUgcG9zaXRpb24gYW5kIGRhdGEgYXR0cmlidXRlcyB3aGVuIHBpY2tpbmcgdXAgZnJvbSB0aGUgYm9hcmRcbiAgICBjb25maWdQaWNrVXAoZWxlbWVudCwgaXNZKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gJzBweCc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgICAgICB0aGlzLnNldFhBdHRyaWJ1dGUoZWxlbWVudCwgMCk7XG4gICAgfVxuXG4gICAgLy8gY2xlYXJzIGFsbCBjZWxscyBvZiBwbGFjZWQgb2JqZWN0J3MgYmluZGluZ3NcbiAgICByZW1vdmVQbGFjZWQoaGVhZEluZGV4LCBsZW5ndGgsIGlzWSkge1xuICAgICAgICBsZXQgY2VsbCA9IHRoaXMuZ2V0R3JpZCgpLmNoaWxkcmVuLml0ZW0oYWRqdXN0VG9JbmRleChoZWFkSW5kZXgsIHRoaXMuU0laRSkpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3NldCcpO1xuICAgICAgICAgICAgY2VsbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtZ2V0dHJheScpO1xuICAgICAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmRyYWdQaWNrVXBTdGFydEhhbmRsZXIsIHRydWUpO1xuICAgICAgICAgICAgY29uc3QgbmV4dENlbGwgPSAoaXNZKSBcbiAgICAgICAgICAgICAgICA/IE51bWJlcihjZWxsLmRhdGFzZXQuaW5kZXgpICsgdGhpcy5TSVpFIFxuICAgICAgICAgICAgICAgIDogTnVtYmVyKGNlbGwuZGF0YXNldC5pbmRleCkgKyAxO1xuICAgICAgICAgICAgY2VsbCA9IHRoaXMuZ2V0R3JpZCgpLmNoaWxkcmVuLml0ZW0oYWRqdXN0VG9JbmRleChuZXh0Q2VsbCwgdGhpcy5TSVpFKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRYQXR0cmlidXRlKGVsZW1lbnQsIHhQb3MpIHtcbiAgICAgICAgY29uc3QgbGVmdCA9IE1hdGguZmxvb3IoeFBvcyAvIGVsZW1lbnQuZmlyc3RDaGlsZC5jbGllbnRXaWR0aCk7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWxlZnQnLCBsZWZ0KTtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcmlnaHQnLCBlbGVtZW50LmNoaWxkRWxlbWVudENvdW50IC0gbGVmdCAtIDEpO1xuICAgIH1cblxuICAgIGdldFlvZmZzZXQoZWxlbWVudCwgeFBvcykge1xuICAgICAgICBjb25zdCBvZmZzZXQgPSB4UG9zIC0gKGVsZW1lbnQuY2xpZW50V2lkdGggLyAyKVxuICAgICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSBgJHtvZmZzZXR9cHhgO1xuICAgICAgICByZXR1cm4gb2Zmc2V0O1xuICAgIH1cblxuICAgIC8vIG9uIGRyYWcgaW52ZXN0aWdhdGUgaWYgZWxlbWVudCBiZWxvdyBjdXJzb3IgaXMgYSB2YWxpZCBob3ZlciB0YXJnZXRcbiAgICAvLyBhbmQgYWRqdXN0IGRpc3BsYXllZCBob3ZlciB0YXJnZXRzXG4gICAgZHJhZ01vdmUoZSkge1xuICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcmFnZ2VkJyk7XG4gICAgICAgIGljb24uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICBsZXQgYmVsb3cgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGUuY2xpZW50WCwgZS5jbGllbnRZKTtcbiAgICAgICAgaWNvbi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICBpZiAoYmVsb3cuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RhYmxlJykgXG4gICAgICAgICAgICAmJiB0aGlzLmRyYWdFdmVudC5kcmFnT3ZlciAhPSBiZWxvdykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJIb3ZlcigpO1xuICAgICAgICAgICAgICAgIGlmIChpY29uLmNsYXNzTGlzdC5jb250YWlucygnZHJhZy15JykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRIb3ZlclkoXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWxvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb24uY2hpbGRFbGVtZW50Q291bnQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SG92ZXJYKFxuICAgICAgICAgICAgICAgICAgICAgICAgYmVsb3csIFxuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGljb24uZGF0YXNldC5sZWZ0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihpY29uLmRhdGFzZXQucmlnaHQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIWJlbG93LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0YWJsZScpKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFySG92ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZ1bmN0aW9uIHRvIGNsZWFyIGRyYWdnZWQgYWN0aW9uc1xuICAgIGRyYWdFbmQoZSkge1xuICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHZhbGlkU2V0ID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgZHJhZ0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHJhZ2dlZCcpO1xuICAgICAgICBpZiAoZHJhZ0l0ZW0uY2hpbGRFbGVtZW50Q291bnQgPT09IHRoaXMuZHJhZ0V2ZW50LmRyYWdHcm91cC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhZ0V2ZW50LmRyYWdHcm91cC5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2V0JykpIHsgdmFsaWRTZXQgPSBmYWxzZTt9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgeyB2YWxpZFNldCA9IGZhbHNlOyB9XG4gICAgICAgIGlmICh2YWxpZFNldCkge1xuICAgICAgICAgICAgdGhpcy5kcmFnRXZlbnQuZHJhZ0dyb3VwLmZvckVhY2goY2VsbCA9PiB7IFxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2V0Jyk7IFxuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLWdldHRyYXknLCBkcmFnSXRlbS5kYXRhc2V0LnRyYXkpO1xuICAgICAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5kcmFnUGlja1VwU3RhcnRIYW5kbGVyLCB0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5zZXRJdGVtLnB1c2goe1xuICAgICAgICAgICAgICAgIHRyYXk6IE51bWJlcihkcmFnSXRlbS5kYXRhc2V0LnRyYXkpLFxuICAgICAgICAgICAgICAgIGhlYWQ6IChkcmFnSXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2RyYWcteScpKSBcbiAgICAgICAgICAgICAgICAgICAgPyBOdW1iZXIodGhpcy5kcmFnRXZlbnQuZHJhZ0dyb3VwWzBdLmRhdGFzZXQuaW5kZXgpIFxuICAgICAgICAgICAgICAgICAgICA6IE51bWJlcih0aGlzLmRyYWdFdmVudC5kcmFnR3JvdXBbMF0uZGF0YXNldC5pbmRleCAtIGRyYWdJdGVtLmRhdGFzZXQubGVmdCksXG4gICAgICAgICAgICAgICAgc2V0WTogZHJhZ0l0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdkcmFnLXknKSxcbiAgICAgICAgICAgICAgICBzaXplOiBkcmFnSXRlbS5jaGlsZEVsZW1lbnRDb3VudFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXQtdHJheScpXG4gICAgICAgICAgICAuY2hpbGRyZW4uaXRlbShOdW1iZXIoZHJhZ0l0ZW0uZGF0YXNldC50cmF5KSlcbiAgICAgICAgICAgIC5maXJzdENoaWxkLmNsYXNzTGlzdFxuICAgICAgICAgICAgLnJlbW92ZSgnaWNvbi1kaXNhYmxlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5nZXRUcmF5KCkuY2hpbGRFbGVtZW50Q291bnQgPT09IHRoaXMuc2V0SXRlbS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0QnV0dG9uKCkuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0QnV0dG9uKCkuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RyYWdnZWQnKS5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5jbGVhckhvdmVyKCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRhaW5lcicpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmRyYWdFbmRIYW5kbGVyKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGFpbmVyJykucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5kcmFnTW92ZUhhbmRsZXIsIHRydWUpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250YWluZXInKS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5kcmFnRW5kSGFuZGxlciwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIGFkZGluZyBob3ZlciBldmVudFxuICAgIHNldEhvdmVyWChjZWxsLCBsZWZ0LCByaWdodCkgeyAgXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcbiAgICAgICAgdGhpcy5kcmFnRXZlbnQuZHJhZ092ZXIgPSBjZWxsOyAgICAgICAgXG4gICAgICAgIHRoaXMuZHJhZ0V2ZW50LmRyYWdHcm91cC5wdXNoKGNlbGwpO1xuICAgICAgICB0aGlzLmhvdmVyU2libGluZ3MoY2VsbCwgbGVmdCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuaG92ZXJTaWJsaW5ncyhjZWxsLCByaWdodCwgZmFsc2UpOyAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIH1cblxuICAgIHNldEhvdmVyWShyb290LCBudW1TaWIpIHtcbiAgICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkLWJveCcpO1xuICAgICAgICBsZXQgaW5kZXggPSBOdW1iZXIocm9vdC5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgbGV0IHRvQWRkID0gcm9vdDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1TaWI7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRvQWRkKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBOdW1iZXIodG9BZGQuZGF0YXNldC5pbmRleCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnRXZlbnQuZHJhZ0dyb3VwLnB1c2godG9BZGQpO1xuICAgICAgICAgICAgICAgIHRvQWRkLmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XG4gICAgICAgICAgICAgICAgdG9BZGQgPSBncmlkLmNoaWxkcmVuLml0ZW0oYWRqdXN0VG9JbmRleChpbmRleCArIHRoaXMuU0laRSwgdGhpcy5TSVpFKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGhpZ2hsaWdodCB0aGUgY29ycmVjdCBuZWlnaGJvcmluZyBzaWJsaW5ncyBvbiBob3ZlclxuICAgIGhvdmVyU2libGluZ3Mocm9vdCwgbnVtU2liLCBsZWZ0KSB7XG4gICAgICAgIGxldCB0b0FkZCA9IHJvb3Q7XG4gICAgICAgIGxldCBpbmRleCA9IE51bWJlcihyb290LmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKGluZGV4IC8gdGhpcy5TSVpFKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1TaWI7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2hlY2sgPSAobGVmdCkgPyAoKGluZGV4IC0gKGkgKyAxKSkgLyB0aGlzLlNJWkUpIDogKChpbmRleCArIChpICsgMSkpIC8gdGhpcy5TSVpFKTtcbiAgICAgICAgICAgIGlmIChyb3cgPT09IE1hdGguZmxvb3IoY2hlY2spKSB7XG4gICAgICAgICAgICAgICAgdG9BZGQgPSAobGVmdCkgPyB0b0FkZC5wcmV2aW91c1NpYmxpbmcgOiB0b0FkZC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICB0b0FkZC5jbGFzc0xpc3QuYWRkKCdob3ZlcicpOyBcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdFdmVudC5kcmFnR3JvdXAucHVzaCh0b0FkZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZXNldHMgc2V0IGhvdmVyIGFjdGlvbnNcbiAgICBjbGVhckhvdmVyKCkge1xuICAgICAgICB0aGlzLmRyYWdFdmVudC5kcmFnT3ZlciA9IG51bGw7XG4gICAgICAgIHRoaXMuZHJhZ0V2ZW50LmRyYWdHcm91cC5mb3JFYWNoKGNlbGwgPT4gY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpKTtcbiAgICAgICAgdGhpcy5kcmFnRXZlbnQuZHJhZ0dyb3VwLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgXG59IiwiLy8gYmFzaWMgdW5pdCB1c2VkIGluIGdhbWUsIG11c3QgcGFzcyBpbnRlZ2VyIHZhbHVlIHRvIGRldGVybWluZSBzaXplXG5cbmV4cG9ydCBjbGFzcyBTaGlwIHtcbiAgICAvLyB0ZXN0cyB0byBlbnN1cmUgdmFsdWUgaXMgYW4gaW50ZWdlciBudW1iZXIgb3ZlciAwXG4gICAgY29uc3RydWN0b3Ioc2l6ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHNpemUgIT0gJ251bWJlcicpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcigndmFsdWUgbXVzdCBiZSBOdW1iZXInKSB9O1xuICAgICAgICBpZiAoc2l6ZSA8PSAwKSB7IHRocm93IG5ldyBSYW5nZUVycm9yKCdWYWx1ZSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwJykgfTtcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKHNpemUpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ09ubHkgaW50ZWdlciB2YWx1ZXMnKSB9O1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICB0aGlzLmhpdHMgPSAwO1xuICAgIH1cblxuICAgIGdldEhpdHMoKSB7IHJldHVybiB0aGlzLmhpdHM7IH1cblxuICAgIC8vIGluY3JlYXNlcyBzaGlwcyBoaXQgdmFsdWVcbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMuaGl0cyArPSAxO1xuICAgIH1cblxuICAgIC8vIGRldGVybWluZXMgdGhlIHN0YXRlIG9mIHRoZSBzaGlwXG4gICAgaXNTdW5rKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oaXRzID49IHRoaXMuc2l6ZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgaW5pdGlhbGl6ZURPTSB9IGZyb20gXCIuL0RPTUNvbnRyb2wuanNcIjtcbmltcG9ydCB7IFNldFBsYXllciB9IGZyb20gXCIuL1NldFBsYXllci5qc1wiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9QbGF5ZXIuanMnO1xuXG5leHBvcnQgY2xhc3MgR2FtZUNvbnRyb2wge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLlNJWkUgPSAxMDtcbiAgICAgICAgdGhpcy5wbGF5ZXIxID0gbnVsbDtcbiAgICAgICAgdGhpcy5wbGF5ZXIyID0gbnVsbDtcbiAgICAgICAgdGhpcy5tdWx0aXBsYXllciA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNlbGVjdE1vdmUgPSBudWxsO1xuICAgICAgICB0aGlzLnR1cm5OdW1iZXIgPSAwO1xuICAgIH1cblxuICAgIC8vIGJlZ2luIHRoZSBnYW1lbG9vcFxuICAgIHN0YXJ0R2FtZSgpIHtcbiAgICAgICAgaW5pdGlhbGl6ZURPTSgpO1xuICAgICAgICB0aGlzLmNyZWF0ZVBsYXllcigpO1xuICAgICAgICBcbiAgICAgICAgLy8gaW5pdGlhbGl6ZURPTSgpO1xuXG4gICAgICAgIC8vIHRoaXMuZHVtbXlTZXRQbGF5ZXIoKTtcbiAgICAgICAgLy8gY29uc3QgYm9hcmQgPSB0aGlzLmdldFBsYXllcigpLmdldERpc3BsYXkoKTtcbiAgICAgICAgLy8gaWYgKHRoaXMubXVsdGlwbGF5ZXIpIHtcbiAgICAgICAgLy8gICAgIGJvYXJkLmNyZWF0ZVR1cm5Db3Zlcih0aGlzLmdldFBsYXllcigpXG4gICAgICAgIC8vICAgICAgICAgLmdldE5hbWUoKSlcbiAgICAgICAgLy8gICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gYm9hcmQuY2xlYXJUdXJuQ292ZXIoKSk7XG4gICAgICAgIC8vIH07XG4gICAgICAgIC8vIGJvYXJkLmRpc3BsYXlCb2FyZCgpO1xuICAgIH1cblxuICAgIGNyZWF0ZVBsYXllcihpc011bHRpKSB7XG4gICAgICAgIGNvbnN0IHNldFBsYXllciA9IG5ldyBTZXRQbGF5ZXIoMTAsIFs1LCA0LCAzLCAzLCAyXSwgaXNNdWx0aSk7XG4gICAgICAgIHNldFBsYXllci5nZXRCdXR0b24oKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gc2V0UGxheWVyLmdldERhdGEoKTtcbiAgICAgICAgICAgIHNldFBsYXllci5yZW1vdmUoKTtcbiAgICAgICAgICAgIC8vIHNldCBzZWNvbmQgcGxheWVyXG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIxKSB7IFxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyMiA9IG5ldyBQbGF5ZXIoJ3BsYXllcjInLCBkYXRhLmJvYXJkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRCb2FyZCh0aGlzLnBsYXllcjIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvYXJkID0gdGhpcy5nZXRQbGF5ZXIoKS5nZXREaXNwbGF5KCk7XG4gICAgICAgICAgICAgICAgYm9hcmQuY3JlYXRlVHVybkNvdmVyKHRoaXMuZ2V0UGxheWVyKClcbiAgICAgICAgICAgICAgICAuZ2V0TmFtZSgpKVxuICAgICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBib2FyZC5jbGVhclR1cm5Db3ZlcigpKTtcbiAgICAgICAgICAgICAgICBib2FyZC5kaXNwbGF5Qm9hcmQoKTtcbiAgICAgICAgICAgIC8vIHNldCBmaXJzdCBwbGF5ZXIgYW5kIHByb21wdCBmb3Igc2Vjb25kXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEubXVsdGkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcjEgPSBuZXcgUGxheWVyKCdwbGF5ZXIxJywgZGF0YS5ib2FyZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kQm9hcmQodGhpcy5wbGF5ZXIxKTtcbiAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVBsYXllcih0cnVlKTtcbiAgICAgICAgICAgIC8vIHNldCBzaW5nbGUgcGxheWVyIGFuZCBzZXQgY3B1IHBsYXllclxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcjEgPSBuZXcgUGxheWVyKCdwbGF5ZXIxJywgZGF0YS5ib2FyZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kQm9hcmQodGhpcy5wbGF5ZXIxKTtcbiAgICAgICAgICAgICAgICB0aGlzLmR1bW15U2V0UGxheWVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXIoKS5nZXREaXNwbGF5KCkuZGlzcGxheUJvYXJkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRQbGF5ZXIuZGlzcGxheSgpO1xuICAgIH1cblxuICAgIC8vIHRlc3RpbmcgdmFsdWVzXG4gICAgZHVtbXlTZXRQbGF5ZXIoKSB7XG4gICAgICAgIGNvbnN0IGR1bW15MSA9IFtcbiAgICAgICAgICAgIFs1LCAyNSwgdHJ1ZV0sXG4gICAgICAgICAgICBbNCwgODMsIGZhbHNlXSxcbiAgICAgICAgICAgIFszLCAwLCBmYWxzZV0sXG4gICAgICAgICAgICBbMywgNTEsIHRydWVdLFxuICAgICAgICAgICAgWzIsIDQ4LCBmYWxzZV1cbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgZHVtbXkyID0gW1xuICAgICAgICAgICAgWzUsIDk1LCBmYWxzZV0sXG4gICAgICAgICAgICBbNCwgMTYsIGZhbHNlXSxcbiAgICAgICAgICAgIFszLCA1MywgZmFsc2VdLFxuICAgICAgICAgICAgWzMsIDY4LCB0cnVlXSxcbiAgICAgICAgICAgIFsyLCAxMiwgdHJ1ZV1cbiAgICAgICAgXVxuICAgICAgICAvLyB0aGlzLnBsYXllcjEgPSBuZXcgUGxheWVyKCdwbGF5ZXIxJywgZHVtbXkxKTtcbiAgICAgICAgLy8gdGhpcy5iaW5kQm9hcmQodGhpcy5wbGF5ZXIxKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIyID0gbmV3IFBsYXllcigncGxheWVyMicsIGR1bW15Mik7XG4gICAgICAgIHRoaXMuYmluZEJvYXJkKHRoaXMucGxheWVyMilcbiAgICB9XG5cbiAgICAvLyBEZXRlcm1pbmUgdGhlIGFjdGl2ZSBwbGF5ZXJcbiAgICBnZXRQbGF5ZXIoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy50dXJuTnVtYmVyICUgMiA9PT0gMCkgPyB0aGlzLnBsYXllcjEgOiB0aGlzLnBsYXllcjI7IFxuICAgIH1cblxuICAgIC8vIERldGVybWluZSB0aGUgY3VycmVudCBub24gcGxheWVyXG4gICAgZ2V0QWR2ZXJzYXJ5KCkge1xuICAgICAgICByZXR1cm4gKHRoaXMudHVybk51bWJlciAlIDIgPT09IDApID8gdGhpcy5wbGF5ZXIyIDogdGhpcy5wbGF5ZXIxO1xuICAgIH1cblxuICAgIC8vIGJpbmRpbmdzIGZvciBwbGF5IGFyZWFcbiAgICBiaW5kQm9hcmQocGxheWVyKSB7XG4gICAgICAgIGNvbnN0IGRpc3BsYXkgPSBwbGF5ZXIuZ2V0RGlzcGxheSgpO1xuICAgICAgICBjb25zdCBidXR0b24gPSBwbGF5ZXIuZ2V0RGlzcGxheSgpLmdldEJ1dHRvbigpO1xuICAgICAgICBcbiAgICAgICAgLy8gYmluZCBjbGlja2FibGUgY2VsbHNcbiAgICAgICAgZGlzcGxheS5nZXRQbGF5KCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4tY2VsbCcpKSB7IHJldHVybiB9O1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0TW92ZSkgeyBkaXNwbGF5LnRvZ2dsZVNlbGVjdGVkKHRoaXMuc2VsZWN0TW92ZSk7IH1cbiAgICAgICAgICAgIGRpc3BsYXkudG9nZ2xlU2VsZWN0ZWQoZS50YXJnZXQuZGF0YXNldC5pbmRleCk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdE1vdmUgPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC5pbmRleCk7XG4gICAgICAgICAgICBkaXNwbGF5LnNldEJ1dHRvbihlLnRhcmdldC5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gYmluZCBhdHRhY2sgYnV0dG9uXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5LnNldEJ1dHRvbigpO1xuICAgICAgICAgICAgdGhpcy50YWtlVHVybigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBGdW5jdGlvbiBmb3IgYWN0aW9uIGJ1dHRvbiwgdGFrZXMgYSBwbGF5ZXIgc2VsZWN0ZWQgdHVyblxuICAgIHRha2VUdXJuKCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmdldEFkdmVyc2FyeSgpLnRha2VIaXQodGhpcy5zZWxlY3RNb3ZlKTtcbiAgICAgICAgdGhpcy5nZXRQbGF5ZXIoKS5nZXREaXNwbGF5KCkudXBkYXRlUGxheSh0aGlzLnNlbGVjdE1vdmUsIHJlc3VsdCk7XG4gICAgICAgIGlmICh0aGlzLmdldEFkdmVyc2FyeSgpLmlzRGVmZWF0ZWQoKSkgeyBcbiAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVyKClcbiAgICAgICAgICAgICAgICAuZ2V0RGlzcGxheSgpXG4gICAgICAgICAgICAgICAgLmNyZWF0ZUdhbWVPdmVyKCdZT1UgV0lOIScpXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXIoKS5nZXREaXNwbGF5KCkucmVtb3ZlQm9hcmQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEdhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcbiAgICAgICAgICAgIH0pOyBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLm11bHRpcGxheWVyKSB7IHRoaXMuc3dpdGNoVHVybihyZXN1bHQpOyB9XG4gICAgICAgIGVsc2UgeyB0aGlzLmNwdVR1cm4oKTsgfVxuICAgIH1cblxuICAgIC8vIFJlbmRlcnMgbW92ZSB0YWtlbiBvbiBwbGF5ZXIgYW5kIHJlc2V0IHNlbGVjdE1vdmVcbiAgICBzdGFydFR1cm4ocmVzdWx0KSB7XG4gICAgICAgIHRoaXMuZ2V0UGxheWVyKCkuZ2V0RGlzcGxheSgpLnVwZGF0ZVN0YXR1cyh0aGlzLnNlbGVjdE1vdmUsIHJlc3VsdCk7XG4gICAgICAgIHRoaXMuc2VsZWN0TW92ZSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gUHJlcGFyZXMgdGhlIHBsYXkgYXJlYSB0byBleGNoYW5nZSBwbGF5ZXJzXG4gICAgc3dpdGNoVHVybihyZXN1bHQpIHtcbiAgICAgICAgY29uc3QgYm9hcmQgPSB0aGlzLmdldEFkdmVyc2FyeSgpLmdldERpc3BsYXkoKTtcbiAgICAgICAgYm9hcmQuY3JlYXRlVHVybkNvdmVyKHRoaXMuZ2V0QWR2ZXJzYXJ5KClcbiAgICAgICAgLmdldE5hbWUoKSlcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGJvYXJkLmNsZWFyVHVybkNvdmVyKCk7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0VHVybihyZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgYm9hcmQuZGlzcGxheUJvYXJkKCk7XG4gICAgICAgIHRoaXMuZ2V0QWR2ZXJzYXJ5KCkuZ2V0RGlzcGxheSgpLnJlbW92ZUJvYXJkKCk7XG4gICAgICAgIHRoaXMudHVybk51bWJlcisrO1xuICAgIH1cblxuICAgIC8vIFNpbXVsYXRlIGFuIGFkdmVyc2FyeSdzIHR1cm5cbiAgICBjcHVUdXJuKCkge1xuICAgICAgICB0aGlzLnNlbGVjdE1vdmUgPSB0aGlzLmdldFBsYXllcigpLmNwdVR1cm4oKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5nZXRQbGF5ZXIoKS50YWtlSGl0KHRoaXMuc2VsZWN0TW92ZSk7XG4gICAgICAgIGlmICh0aGlzLmdldFBsYXllcigpLmlzRGVmZWF0ZWQoKSkgeyBcbiAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVyKCkuZ2V0RGlzcGxheSgpLmNyZWF0ZUdhbWVPdmVyKCdZT1UgTE9TRSEnKTsgXG4gICAgICAgIH0gZWxzZSB7IHRoaXMuc3RhcnRUdXJuKHJlc3VsdCk7IH1cbiAgICB9XG5cbiAgICAvLyBjbGVhciBhbGwgdmFyaWFibGUgdG8gZGVmYXVsdFxuICAgIHJlc2V0R2FtZSgpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyMSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnBsYXllcjIgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllciA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RNb3ZlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMudHVybk51bWJlciA9IDA7XG4gICAgfVxufVxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7R2FtZUNvbnRyb2x9IGZyb20gJy4vZ2FtZUNvbnRyb2wuanMnO1xuXG5jb25zdCBnYW1lID0gbmV3IEdhbWVDb250cm9sKCk7XG5nYW1lLnN0YXJ0R2FtZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9