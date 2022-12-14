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
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --bg-grid: black;\n    --bg-cell: red;\n    --font-guide-lg: 1.5rem;\n    --font-guide-sm: .7rem;\n    --gap-lg: 3px;\n    --gap-sm: 2px;\n    --button-fg-disable: grey;\n    --button-fg-normal: black;\n    --button-bg-disable: darkgrey;\n    --button-bg-normal: white;\n    --button-font-size: 2rem;\n    --board-hit: darkred;\n    --board-hover: aqua;\n    --board-miss: grey;\n    --board-selected: yellow;\n    --board-ship: green;\n    --side-size: 10;\n}\n\nhtml,\nbody {\n    margin: 0;\n    height: 100%;\n    /* min-height: 100vh; */\n    width: 100vw;\n}\n\nbutton {\n    background-color: var(--button-bg-normal);\n    color: var(--button-fg-normal);\n    border: 5px solid var(--button-fg-normal);\n    font-size: var(--button-font-size);\n    width: 100%;\n}\n\nbutton:disabled {\n    background-color: var(--button-bg-disable);\n    color: var(--button-fg-disable);\n    border-color: var(--button-fg-disable);\n}\n\n#main-container {\n    /* min-height: 100vh; */\n    height: 100%;\n    width: 100%;\n    box-sizing: border-box;\n    /* display: flex;\n    flex-direction: column; */\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-content: center;\n    align-items: center;\n\n    position: relative;\n\n    margin: 0;\n}\n\n#header,\n#footer {\n    min-height: 10px;\n    height: 100%;\n    width: 100%;\n}\n\n#header {\n    grid-row: 1 / 2;\n    background-color: bisque;\n}\n\n#footer {\n    grid-row: 3/ 4;\n    background-color: aqua;\n}\n\n/* styling for all grid displays */\n.grid-box {\n    font-size: var(--font-guide-lg);\n    aspect-ratio: 1 / 1;\n    background-color: var(--bg-grid);\n    display: grid;\n    grid-template-columns: repeat(var(--side-size), 1fr);\n    gap: var(--gap-lg);\n}\n\n.grid-box > div {\n    padding: 0;\n    position: relative;\n    user-select: none;\n    background-color: var(--bg-cell);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#set-container > .grid-box > div{\n    width: 2rem;\n    height: 2rem;\n}\n\n.guide-top,\n.guide-corner {\n    margin-bottom: calc(var(--gap-lg) * .66);\n}\n\n.guide-left,\n.guide-corner {\n    margin-right: calc(var(--gap-lg) * .66);\n}\n\n.guide-corner {\n    background-color: var(--bg-grid) !important;\n}\n\n/* Styling for all grid icons */\n.ship {\n    background-color: var(--board-ship) !important;\n}\n\n.miss {\n    background-color: var(--board-miss) !important;\n}\n\n.hit {\n    background-color: var(--board-hit) !important;\n}\n\n.selected {\n    background-color: var(--board-selected) !important;\n}\n\n.hover {\n    background-color: yellow !important;\n}\n\n.set {\n    background-color: green !important;\n}\n\n.set.hover {\n    background-color: darkgrey !important;\n}\n\n/* Styling for notifications */\n.gameover-container,\n.turn-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n}\n\n.gameover-container {\n    background-color: transparent;\n}\n\n.turn-container {\n    background-color: white;\n}\n\n.gameover-content,\n.turn-content {\n    text-align: center;\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    padding: 2rem;\n}\n\n/* Styling for set display */\n#set-container {\n    /* height: 100%; */\n    justify-self: center;\n    grid-row: 2 / 3;\n    width: min-content;\n    display: flex;\n    flex-direction: column;\n    flex: 0 1 100%;\n    gap: 1rem;   \n}\n\n.set-tray {\n    background-color: lightgrey;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n\n}\n\n.tray-item {\n    position: relative;\n    display: grid;\n    justify-content:left;\n    align-items: center;\n    padding: 1rem;\n}\n\n.icon-piece {\n    position: relative;\n    grid-column: 1 / -1;\n    grid-row: 1 / -1;\n    border: var(--gap-sm) solid black;\n    background-color: black;\n    display: flex;\n    gap: var(--gap-sm);\n}\n\n.icon-piece.icon-disable>div:not(#dragged) {\n    background-color: grey !important;\n}\n\n.icon-cell {\n    background-color: var(--bg-cell);\n    aspect-ratio: 1 / 1;\n}\n\n.drag-cell {\n    opacity: 0.5;\n    background-color: grey;\n}\n\n#dragged {\n    z-index: 9;\n    opacity: 0.5;\n    position: absolute !important;\n}\n\n.drag-y {\n    flex-direction: column;\n}\n\n.toggle-rotate {\n    transform: rotate(90deg);\n}\n\n#toggle-bar {\n    width: min-content;\n    display: flex;\n}\n\n#toggle-container {\n    position: relative;\n    margin: 10px;\n}\n\n#toggle-text {\n    user-select: none;\n    position: absolute;\n    left: 50%;\n    top:  50%;\n    transform: translate(-50%, -50%);\n}\n\n#toggle-body {\n    height: 80px;\n    width: 80px;\n    background-color: red;\n    border-radius: 40px;\n}\n\n#toggle-body:after {\n    position: absolute;\n    height: 0;\n    width: 0;\n    top: 20px;\n    left: 70px;\n    content: '';\n    border: 20px solid transparent;\n    border-left-color: red;\n}\n\n#submit-bar {\n    display: flex;\n}\n\n#submit-bc {\n    width: 100%;\n}\n\n#submit-mc {\n    width: min-content;\n}\n\n/* Styling for play displays */\n.play-container {\n    grid-row: 2 / 3;\n    margin: 0 .5rem;\n    width: 100%;\n    height: min-content;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr;\n    position: relative;\n    gap: 1rem;\n}\n\n.play-status {\n    grid-row: 1 / 2;\n    font-size: var(--font-guide-sm);\n    aspect-ratio: 1 / 1;\n    width: 50%;\n    gap: var(--gap-sm);\n}\n\n.play-status .guide-left {\n    margin-right: calc(var(--gap-sm) * .66);\n}\n\n.play-status .guide-top {\n    margin-bottom: calc(var(--gap-sm) * .66);\n}\n\n.play-area {\n    font-size: var(--font-guide-lg);\n    aspect-ratio: 1 / 1;\n    width: 100%;\n    gap: var(--gap-lg);\n}\n\n.play-area > .open-cell:hover {\n    background-color: var(--board-hover) !important;\n}\n\n.play-button {\n    width: 100%;\n}\n\n/* Styling for wide views of play display  */\n@media (min-width: 570px) {\n    .play-container {\n        justify-self: center;\n        max-width: 1000px;\n        display: grid;\n        grid-template-columns: 2fr 1fr;\n        grid-template-rows: 1fr;\n    }\n\n    .play-area {\n        grid-row: 1 / 3;\n        grid-column: 1 / 2;\n    }\n\n    .play-status {\n        grid-row: 1 / 2;\n        grid-column: 2 / 3;\n        width: 100%;\n    }\n\n    .play-button {\n        grid-row: 3 / 4;\n        grid-column: 1 / 2;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,cAAc;IACd,uBAAuB;IACvB,sBAAsB;IACtB,aAAa;IACb,aAAa;IACb,yBAAyB;IACzB,yBAAyB;IACzB,6BAA6B;IAC7B,yBAAyB;IACzB,wBAAwB;IACxB,oBAAoB;IACpB,mBAAmB;IACnB,kBAAkB;IAClB,wBAAwB;IACxB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;;IAEI,SAAS;IACT,YAAY;IACZ,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,yCAAyC;IACzC,8BAA8B;IAC9B,yCAAyC;IACzC,kCAAkC;IAClC,WAAW;AACf;;AAEA;IACI,0CAA0C;IAC1C,+BAA+B;IAC/B,sCAAsC;AAC1C;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,WAAW;IACX,sBAAsB;IACtB;6BACyB;IACzB,aAAa;IACb,0BAA0B;IAC1B,uBAAuB;IACvB,mBAAmB;;IAEnB,kBAAkB;;IAElB,SAAS;AACb;;AAEA;;IAEI,gBAAgB;IAChB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,eAAe;IACf,wBAAwB;AAC5B;;AAEA;IACI,cAAc;IACd,sBAAsB;AAC1B;;AAEA,kCAAkC;AAClC;IACI,+BAA+B;IAC/B,mBAAmB;IACnB,gCAAgC;IAChC,aAAa;IACb,oDAAoD;IACpD,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,kBAAkB;IAClB,iBAAiB;IACjB,gCAAgC;IAChC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;;IAEI,wCAAwC;AAC5C;;AAEA;;IAEI,uCAAuC;AAC3C;;AAEA;IACI,2CAA2C;AAC/C;;AAEA,+BAA+B;AAC/B;IACI,8CAA8C;AAClD;;AAEA;IACI,8CAA8C;AAClD;;AAEA;IACI,6CAA6C;AACjD;;AAEA;IACI,kDAAkD;AACtD;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,qCAAqC;AACzC;;AAEA,8BAA8B;AAC9B;;IAEI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;;IAEI,kBAAkB;IAClB,uBAAuB;IACvB,aAAa;IACb,sBAAsB;IACtB,aAAa;AACjB;;AAEA,4BAA4B;AAC5B;IACI,kBAAkB;IAClB,oBAAoB;IACpB,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,cAAc;IACd,SAAS;AACb;;AAEA;IACI,2BAA2B;IAC3B,aAAa;IACb,8BAA8B;;AAElC;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,oBAAoB;IACpB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,iCAAiC;IACjC,uBAAuB;IACvB,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,gCAAgC;IAChC,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,6BAA6B;AACjC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,SAAS;IACT,SAAS;IACT,gCAAgC;AACpC;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,SAAS;IACT,UAAU;IACV,WAAW;IACX,8BAA8B;IAC9B,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,kBAAkB;AACtB;;AAEA,8BAA8B;AAC9B;IACI,eAAe;IACf,eAAe;IACf,WAAW;IACX,mBAAmB;IACnB,aAAa;IACb,0BAA0B;IAC1B,uBAAuB;IACvB,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,eAAe;IACf,+BAA+B;IAC/B,mBAAmB;IACnB,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,+BAA+B;IAC/B,mBAAmB;IACnB,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,+CAA+C;AACnD;;AAEA;IACI,WAAW;AACf;;AAEA,4CAA4C;AAC5C;IACI;QACI,oBAAoB;QACpB,iBAAiB;QACjB,aAAa;QACb,8BAA8B;QAC9B,uBAAuB;IAC3B;;IAEA;QACI,eAAe;QACf,kBAAkB;IACtB;;IAEA;QACI,eAAe;QACf,kBAAkB;QAClB,WAAW;IACf;;IAEA;QACI,eAAe;QACf,kBAAkB;IACtB;AACJ","sourcesContent":[":root {\n    --bg-grid: black;\n    --bg-cell: red;\n    --font-guide-lg: 1.5rem;\n    --font-guide-sm: .7rem;\n    --gap-lg: 3px;\n    --gap-sm: 2px;\n    --button-fg-disable: grey;\n    --button-fg-normal: black;\n    --button-bg-disable: darkgrey;\n    --button-bg-normal: white;\n    --button-font-size: 2rem;\n    --board-hit: darkred;\n    --board-hover: aqua;\n    --board-miss: grey;\n    --board-selected: yellow;\n    --board-ship: green;\n    --side-size: 10;\n}\n\nhtml,\nbody {\n    margin: 0;\n    height: 100%;\n    /* min-height: 100vh; */\n    width: 100vw;\n}\n\nbutton {\n    background-color: var(--button-bg-normal);\n    color: var(--button-fg-normal);\n    border: 5px solid var(--button-fg-normal);\n    font-size: var(--button-font-size);\n    width: 100%;\n}\n\nbutton:disabled {\n    background-color: var(--button-bg-disable);\n    color: var(--button-fg-disable);\n    border-color: var(--button-fg-disable);\n}\n\n#main-container {\n    /* min-height: 100vh; */\n    height: 100%;\n    width: 100%;\n    box-sizing: border-box;\n    /* display: flex;\n    flex-direction: column; */\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-content: center;\n    align-items: center;\n\n    position: relative;\n\n    margin: 0;\n}\n\n#header,\n#footer {\n    min-height: 10px;\n    height: 100%;\n    width: 100%;\n}\n\n#header {\n    grid-row: 1 / 2;\n    background-color: bisque;\n}\n\n#footer {\n    grid-row: 3/ 4;\n    background-color: aqua;\n}\n\n/* styling for all grid displays */\n.grid-box {\n    font-size: var(--font-guide-lg);\n    aspect-ratio: 1 / 1;\n    background-color: var(--bg-grid);\n    display: grid;\n    grid-template-columns: repeat(var(--side-size), 1fr);\n    gap: var(--gap-lg);\n}\n\n.grid-box > div {\n    padding: 0;\n    position: relative;\n    user-select: none;\n    background-color: var(--bg-cell);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#set-container > .grid-box > div{\n    width: 2rem;\n    height: 2rem;\n}\n\n.guide-top,\n.guide-corner {\n    margin-bottom: calc(var(--gap-lg) * .66);\n}\n\n.guide-left,\n.guide-corner {\n    margin-right: calc(var(--gap-lg) * .66);\n}\n\n.guide-corner {\n    background-color: var(--bg-grid) !important;\n}\n\n/* Styling for all grid icons */\n.ship {\n    background-color: var(--board-ship) !important;\n}\n\n.miss {\n    background-color: var(--board-miss) !important;\n}\n\n.hit {\n    background-color: var(--board-hit) !important;\n}\n\n.selected {\n    background-color: var(--board-selected) !important;\n}\n\n.hover {\n    background-color: yellow !important;\n}\n\n.set {\n    background-color: green !important;\n}\n\n.set.hover {\n    background-color: darkgrey !important;\n}\n\n/* Styling for notifications */\n.gameover-container,\n.turn-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n}\n\n.gameover-container {\n    background-color: transparent;\n}\n\n.turn-container {\n    background-color: white;\n}\n\n.gameover-content,\n.turn-content {\n    text-align: center;\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    padding: 2rem;\n}\n\n/* Styling for set display */\n#set-container {\n    /* height: 100%; */\n    justify-self: center;\n    grid-row: 2 / 3;\n    width: min-content;\n    display: flex;\n    flex-direction: column;\n    flex: 0 1 100%;\n    gap: 1rem;   \n}\n\n.set-tray {\n    background-color: lightgrey;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n\n}\n\n.tray-item {\n    position: relative;\n    display: grid;\n    justify-content:left;\n    align-items: center;\n    padding: 1rem;\n}\n\n.icon-piece {\n    position: relative;\n    grid-column: 1 / -1;\n    grid-row: 1 / -1;\n    border: var(--gap-sm) solid black;\n    background-color: black;\n    display: flex;\n    gap: var(--gap-sm);\n}\n\n.icon-piece.icon-disable>div:not(#dragged) {\n    background-color: grey !important;\n}\n\n.icon-cell {\n    background-color: var(--bg-cell);\n    aspect-ratio: 1 / 1;\n}\n\n.drag-cell {\n    opacity: 0.5;\n    background-color: grey;\n}\n\n#dragged {\n    z-index: 9;\n    opacity: 0.5;\n    position: absolute !important;\n}\n\n.drag-y {\n    flex-direction: column;\n}\n\n.toggle-rotate {\n    transform: rotate(90deg);\n}\n\n#toggle-bar {\n    width: min-content;\n    display: flex;\n}\n\n#toggle-container {\n    position: relative;\n    margin: 10px;\n}\n\n#toggle-text {\n    user-select: none;\n    position: absolute;\n    left: 50%;\n    top:  50%;\n    transform: translate(-50%, -50%);\n}\n\n#toggle-body {\n    height: 80px;\n    width: 80px;\n    background-color: red;\n    border-radius: 40px;\n}\n\n#toggle-body:after {\n    position: absolute;\n    height: 0;\n    width: 0;\n    top: 20px;\n    left: 70px;\n    content: '';\n    border: 20px solid transparent;\n    border-left-color: red;\n}\n\n#submit-bar {\n    display: flex;\n}\n\n#submit-bc {\n    width: 100%;\n}\n\n#submit-mc {\n    width: min-content;\n}\n\n/* Styling for play displays */\n.play-container {\n    grid-row: 2 / 3;\n    margin: 0 .5rem;\n    width: 100%;\n    height: min-content;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr;\n    position: relative;\n    gap: 1rem;\n}\n\n.play-status {\n    grid-row: 1 / 2;\n    font-size: var(--font-guide-sm);\n    aspect-ratio: 1 / 1;\n    width: 50%;\n    gap: var(--gap-sm);\n}\n\n.play-status .guide-left {\n    margin-right: calc(var(--gap-sm) * .66);\n}\n\n.play-status .guide-top {\n    margin-bottom: calc(var(--gap-sm) * .66);\n}\n\n.play-area {\n    font-size: var(--font-guide-lg);\n    aspect-ratio: 1 / 1;\n    width: 100%;\n    gap: var(--gap-lg);\n}\n\n.play-area > .open-cell:hover {\n    background-color: var(--board-hover) !important;\n}\n\n.play-button {\n    width: 100%;\n}\n\n/* Styling for wide views of play display  */\n@media (min-width: 570px) {\n    .play-container {\n        justify-self: center;\n        max-width: 1000px;\n        display: grid;\n        grid-template-columns: 2fr 1fr;\n        grid-template-rows: 1fr;\n    }\n\n    .play-area {\n        grid-row: 1 / 3;\n        grid-column: 1 / 2;\n    }\n\n    .play-status {\n        grid-row: 1 / 2;\n        grid-column: 2 / 3;\n        width: 100%;\n    }\n\n    .play-button {\n        grid-row: 3 / 4;\n        grid-column: 1 / 2;\n    }\n}\n"],"sourceRoot":""}]);
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
    container.appendChild((0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', { id: 'footer' }));

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
    const multiContainer = makeElement('div', { id: 'submit-mc' });
    buttonContainer.appendChild(makeElement('button', { id: 'submit-btn', disabled: 'true' }, 'CONTINUE'));
    multiContainer.appendChild(makeElement('input', { type: 'checkbox', id: 'submit-chk' }))
    container.appendChild(buttonContainer);
    container.appendChild(multiContainer);
    return container;
}

function buildToggleBar() {
    const togglebar = makeElement('div', { id: 'toggle-bar' });
    const toggleContainer = makeElement('div', { id: 'toggle-container' })
    const toggleBody = makeElement('div', { id: 'toggle-body', 'data-y': 'false' });
    const toggleText = makeElement('div', { id: 'toggle-text' }, 'X');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O1VDdEtBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3dCOztBQUU3QyxpQkFBaUIsd0RBQVc7QUFDNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL0RPTUNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL0RPTUhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL0RyYWdFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL1BsYXllci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvU2V0UGxheWVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9TaGlwLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9nYW1lQ29udHJvbC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tYmctZ3JpZDogYmxhY2s7XFxuICAgIC0tYmctY2VsbDogcmVkO1xcbiAgICAtLWZvbnQtZ3VpZGUtbGc6IDEuNXJlbTtcXG4gICAgLS1mb250LWd1aWRlLXNtOiAuN3JlbTtcXG4gICAgLS1nYXAtbGc6IDNweDtcXG4gICAgLS1nYXAtc206IDJweDtcXG4gICAgLS1idXR0b24tZmctZGlzYWJsZTogZ3JleTtcXG4gICAgLS1idXR0b24tZmctbm9ybWFsOiBibGFjaztcXG4gICAgLS1idXR0b24tYmctZGlzYWJsZTogZGFya2dyZXk7XFxuICAgIC0tYnV0dG9uLWJnLW5vcm1hbDogd2hpdGU7XFxuICAgIC0tYnV0dG9uLWZvbnQtc2l6ZTogMnJlbTtcXG4gICAgLS1ib2FyZC1oaXQ6IGRhcmtyZWQ7XFxuICAgIC0tYm9hcmQtaG92ZXI6IGFxdWE7XFxuICAgIC0tYm9hcmQtbWlzczogZ3JleTtcXG4gICAgLS1ib2FyZC1zZWxlY3RlZDogeWVsbG93O1xcbiAgICAtLWJvYXJkLXNoaXA6IGdyZWVuO1xcbiAgICAtLXNpZGUtc2l6ZTogMTA7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAvKiBtaW4taGVpZ2h0OiAxMDB2aDsgKi9cXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmctbm9ybWFsKTtcXG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1mZy1ub3JtYWwpO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1idXR0b24tZmctbm9ybWFsKTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1idXR0b24tZm9udC1zaXplKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJ1dHRvbjpkaXNhYmxlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iZy1kaXNhYmxlKTtcXG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1mZy1kaXNhYmxlKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tZmctZGlzYWJsZSk7XFxufVxcblxcbiNtYWluLWNvbnRhaW5lciB7XFxuICAgIC8qIG1pbi1oZWlnaHQ6IDEwMHZoOyAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jaGVhZGVyLFxcbiNmb290ZXIge1xcbiAgICBtaW4taGVpZ2h0OiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XFxufVxcblxcbiNmb290ZXIge1xcbiAgICBncmlkLXJvdzogMy8gNDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG59XFxuXFxuLyogc3R5bGluZyBmb3IgYWxsIGdyaWQgZGlzcGxheXMgKi9cXG4uZ3JpZC1ib3gge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtZ3VpZGUtbGcpO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1ncmlkKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tc2lkZS1zaXplKSwgMWZyKTtcXG4gICAgZ2FwOiB2YXIoLS1nYXAtbGcpO1xcbn1cXG5cXG4uZ3JpZC1ib3ggPiBkaXYge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jZWxsKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNzZXQtY29udGFpbmVyID4gLmdyaWQtYm94ID4gZGl2e1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4uZ3VpZGUtdG9wLFxcbi5ndWlkZS1jb3JuZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLWdhcC1sZykgKiAuNjYpO1xcbn1cXG5cXG4uZ3VpZGUtbGVmdCxcXG4uZ3VpZGUtY29ybmVyIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLWdhcC1sZykgKiAuNjYpO1xcbn1cXG5cXG4uZ3VpZGUtY29ybmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctZ3JpZCkgIWltcG9ydGFudDtcXG59XFxuXFxuLyogU3R5bGluZyBmb3IgYWxsIGdyaWQgaWNvbnMgKi9cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLXNoaXApICFpbXBvcnRhbnQ7XFxufVxcblxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtbWlzcykgIWltcG9ydGFudDtcXG59XFxuXFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWhpdCkgIWltcG9ydGFudDtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtc2VsZWN0ZWQpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdyAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc2V0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW4gIWltcG9ydGFudDtcXG59XFxuXFxuLnNldC5ob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5ICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIG5vdGlmaWNhdGlvbnMgKi9cXG4uZ2FtZW92ZXItY29udGFpbmVyLFxcbi50dXJuLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5nYW1lb3Zlci1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnR1cm4tY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5nYW1lb3Zlci1jb250ZW50LFxcbi50dXJuLWNvbnRlbnQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciBzZXQgZGlzcGxheSAqL1xcbiNzZXQtY29udGFpbmVyIHtcXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDAgMSAxMDAlO1xcbiAgICBnYXA6IDFyZW07ICAgXFxufVxcblxcbi5zZXQtdHJheSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcblxcbn1cXG5cXG4udHJheS1pdGVtIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6bGVmdDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmljb24tcGllY2Uge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGdyaWQtcm93OiAxIC8gLTE7XFxuICAgIGJvcmRlcjogdmFyKC0tZ2FwLXNtKSBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogdmFyKC0tZ2FwLXNtKTtcXG59XFxuXFxuLmljb24tcGllY2UuaWNvbi1kaXNhYmxlPmRpdjpub3QoI2RyYWdnZWQpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaWNvbi1jZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY2VsbCk7XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxufVxcblxcbi5kcmFnLWNlbGwge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbiNkcmFnZ2VkIHtcXG4gICAgei1pbmRleDogOTtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcXG59XFxuXFxuLmRyYWcteSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b2dnbGUtcm90YXRlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4jdG9nZ2xlLWJhciB7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3RvZ2dsZS1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuI3RvZ2dsZS10ZXh0IHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0b3A6ICA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4jdG9nZ2xlLWJvZHkge1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxufVxcblxcbiN0b2dnbGUtYm9keTphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gICAgdG9wOiAyMHB4O1xcbiAgICBsZWZ0OiA3MHB4O1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYm9yZGVyOiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItbGVmdC1jb2xvcjogcmVkO1xcbn1cXG5cXG4jc3VibWl0LWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNzdWJtaXQtYmMge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3N1Ym1pdC1tYyB7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG59XFxuXFxuLyogU3R5bGluZyBmb3IgcGxheSBkaXNwbGF5cyAqL1xcbi5wbGF5LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgbWFyZ2luOiAwIC41cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnBsYXktc3RhdHVzIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtZ3VpZGUtc20pO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBnYXA6IHZhcigtLWdhcC1zbSk7XFxufVxcblxcbi5wbGF5LXN0YXR1cyAuZ3VpZGUtbGVmdCB7XFxuICAgIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1nYXAtc20pICogLjY2KTtcXG59XFxuXFxuLnBsYXktc3RhdHVzIC5ndWlkZS10b3Age1xcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLWdhcC1zbSkgKiAuNjYpO1xcbn1cXG5cXG4ucGxheS1hcmVhIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LWd1aWRlLWxnKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogdmFyKC0tZ2FwLWxnKTtcXG59XFxuXFxuLnBsYXktYXJlYSA+IC5vcGVuLWNlbGw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1ob3ZlcikgIWltcG9ydGFudDtcXG59XFxuXFxuLnBsYXktYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIHdpZGUgdmlld3Mgb2YgcGxheSBkaXNwbGF5ICAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA1NzBweCkge1xcbiAgICAucGxheS1jb250YWluZXIge1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgICAgICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgfVxcblxcbiAgICAucGxheS1hcmVhIHtcXG4gICAgICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgfVxcblxcbiAgICAucGxheS1zdGF0dXMge1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLnBsYXktYnV0dG9uIHtcXG4gICAgICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksU0FBUztJQUNULFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlDQUF5QztJQUN6Qyw4QkFBOEI7SUFDOUIseUNBQXlDO0lBQ3pDLGtDQUFrQztJQUNsQyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsK0JBQStCO0lBQy9CLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtJQUN0Qjs2QkFDeUI7SUFDekIsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQixrQkFBa0I7O0lBRWxCLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsc0JBQXNCO0FBQzFCOztBQUVBLGtDQUFrQztBQUNsQztJQUNJLCtCQUErQjtJQUMvQixtQkFBbUI7SUFDbkIsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixvREFBb0Q7SUFDcEQsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksd0NBQXdDO0FBQzVDOztBQUVBOztJQUVJLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLDJDQUEyQztBQUMvQzs7QUFFQSwrQkFBK0I7QUFDL0I7SUFDSSw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSxrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxxQ0FBcUM7QUFDekM7O0FBRUEsOEJBQThCO0FBQzlCOztJQUVJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjs7QUFFQSw0QkFBNEI7QUFDNUI7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsU0FBUztBQUNiOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGFBQWE7SUFDYiw4QkFBOEI7O0FBRWxDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQSw4QkFBOEI7QUFDOUI7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7SUFDZiwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwrQ0FBK0M7QUFDbkQ7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUEsNENBQTRDO0FBQzVDO0lBQ0k7UUFDSSxvQkFBb0I7UUFDcEIsaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYiw4QkFBOEI7UUFDOUIsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsV0FBVztJQUNmOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtJQUN0QjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1iZy1ncmlkOiBibGFjaztcXG4gICAgLS1iZy1jZWxsOiByZWQ7XFxuICAgIC0tZm9udC1ndWlkZS1sZzogMS41cmVtO1xcbiAgICAtLWZvbnQtZ3VpZGUtc206IC43cmVtO1xcbiAgICAtLWdhcC1sZzogM3B4O1xcbiAgICAtLWdhcC1zbTogMnB4O1xcbiAgICAtLWJ1dHRvbi1mZy1kaXNhYmxlOiBncmV5O1xcbiAgICAtLWJ1dHRvbi1mZy1ub3JtYWw6IGJsYWNrO1xcbiAgICAtLWJ1dHRvbi1iZy1kaXNhYmxlOiBkYXJrZ3JleTtcXG4gICAgLS1idXR0b24tYmctbm9ybWFsOiB3aGl0ZTtcXG4gICAgLS1idXR0b24tZm9udC1zaXplOiAycmVtO1xcbiAgICAtLWJvYXJkLWhpdDogZGFya3JlZDtcXG4gICAgLS1ib2FyZC1ob3ZlcjogYXF1YTtcXG4gICAgLS1ib2FyZC1taXNzOiBncmV5O1xcbiAgICAtLWJvYXJkLXNlbGVjdGVkOiB5ZWxsb3c7XFxuICAgIC0tYm9hcmQtc2hpcDogZ3JlZW47XFxuICAgIC0tc2lkZS1zaXplOiAxMDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIC8qIG1pbi1oZWlnaHQ6IDEwMHZoOyAqL1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iZy1ub3JtYWwpO1xcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWZnLW5vcm1hbCk7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLWJ1dHRvbi1mZy1ub3JtYWwpO1xcbiAgICBmb250LXNpemU6IHZhcigtLWJ1dHRvbi1mb250LXNpemUpO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYnV0dG9uOmRpc2FibGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJnLWRpc2FibGUpO1xcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWZnLWRpc2FibGUpO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1mZy1kaXNhYmxlKTtcXG59XFxuXFxuI21haW4tY29udGFpbmVyIHtcXG4gICAgLyogbWluLWhlaWdodDogMTAwdmg7ICovXFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiNoZWFkZXIsXFxuI2Zvb3RlciB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICAgIGdyaWQtcm93OiAzLyA0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbn1cXG5cXG4vKiBzdHlsaW5nIGZvciBhbGwgZ3JpZCBkaXNwbGF5cyAqL1xcbi5ncmlkLWJveCB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1ndWlkZS1sZyk7XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWdyaWQpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1zaWRlLXNpemUpLCAxZnIpO1xcbiAgICBnYXA6IHZhcigtLWdhcC1sZyk7XFxufVxcblxcbi5ncmlkLWJveCA+IGRpdiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNlbGwpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3NldC1jb250YWluZXIgPiAuZ3JpZC1ib3ggPiBkaXZ7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi5ndWlkZS10b3AsXFxuLmd1aWRlLWNvcm5lciB7XFxuICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tZ2FwLWxnKSAqIC42Nik7XFxufVxcblxcbi5ndWlkZS1sZWZ0LFxcbi5ndWlkZS1jb3JuZXIge1xcbiAgICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tZ2FwLWxnKSAqIC42Nik7XFxufVxcblxcbi5ndWlkZS1jb3JuZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1ncmlkKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciBhbGwgZ3JpZCBpY29ucyAqL1xcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtc2hpcCkgIWltcG9ydGFudDtcXG59XFxuXFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1taXNzKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtaGl0KSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1zZWxlY3RlZCkgIWltcG9ydGFudDtcXG59XFxuXFxuLmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zZXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbiAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc2V0LmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXkgIWltcG9ydGFudDtcXG59XFxuXFxuLyogU3R5bGluZyBmb3Igbm90aWZpY2F0aW9ucyAqL1xcbi5nYW1lb3Zlci1jb250YWluZXIsXFxuLnR1cm4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmdhbWVvdmVyLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4udHVybi1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmdhbWVvdmVyLWNvbnRlbnQsXFxuLnR1cm4tY29udGVudCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIHNldCBkaXNwbGF5ICovXFxuI3NldC1jb250YWluZXIge1xcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMCAxIDEwMCU7XFxuICAgIGdhcDogMXJlbTsgICBcXG59XFxuXFxuLnNldC10cmF5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuXFxufVxcblxcbi50cmF5LWl0ZW0ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDpsZWZ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uaWNvbi1waWVjZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAtMTtcXG4gICAgYm9yZGVyOiB2YXIoLS1nYXAtc20pIHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiB2YXIoLS1nYXAtc20pO1xcbn1cXG5cXG4uaWNvbi1waWVjZS5pY29uLWRpc2FibGU+ZGl2Om5vdCgjZHJhZ2dlZCkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5pY29uLWNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jZWxsKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG59XFxuXFxuLmRyYWctY2VsbCB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuI2RyYWdnZWQge1xcbiAgICB6LWluZGV4OiA5O1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZHJhZy15IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZ2dsZS1yb3RhdGUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbiN0b2dnbGUtYmFyIHtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jdG9nZ2xlLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4jdG9nZ2xlLXRleHQge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRvcDogIDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbiN0b2dnbGUtYm9keSB7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG59XFxuXFxuI3RvZ2dsZS1ib2R5OmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHdpZHRoOiAwO1xcbiAgICB0b3A6IDIwcHg7XFxuICAgIGxlZnQ6IDcwcHg7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBib3JkZXI6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZWQ7XFxufVxcblxcbiNzdWJtaXQtYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3N1Ym1pdC1iYyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jc3VibWl0LW1jIHtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciBwbGF5IGRpc3BsYXlzICovXFxuLnBsYXktY29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBtYXJnaW46IDAgLjVyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ucGxheS1zdGF0dXMge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1ndWlkZS1zbSk7XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGdhcDogdmFyKC0tZ2FwLXNtKTtcXG59XFxuXFxuLnBsYXktc3RhdHVzIC5ndWlkZS1sZWZ0IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLWdhcC1zbSkgKiAuNjYpO1xcbn1cXG5cXG4ucGxheS1zdGF0dXMgLmd1aWRlLXRvcCB7XFxuICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tZ2FwLXNtKSAqIC42Nik7XFxufVxcblxcbi5wbGF5LWFyZWEge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtZ3VpZGUtbGcpO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiB2YXIoLS1nYXAtbGcpO1xcbn1cXG5cXG4ucGxheS1hcmVhID4gLm9wZW4tY2VsbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWhvdmVyKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucGxheS1idXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogU3R5bGluZyBmb3Igd2lkZSB2aWV3cyBvZiBwbGF5IGRpc3BsYXkgICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDU3MHB4KSB7XFxuICAgIC5wbGF5LWNvbnRhaW5lciB7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICB9XFxuXFxuICAgIC5wbGF5LWFyZWEge1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICB9XFxuXFxuICAgIC5wbGF5LXN0YXR1cyB7XFxuICAgICAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAucGxheS1idXR0b24ge1xcbiAgICAgICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IG1ha2VFbGVtZW50LCBhZGp1c3RUb0luZGV4LCBidWlsZEdyaWQgfSBmcm9tICcuL0RPTUhlbHBlcnMuanMnO1xuaW1wb3J0IHsgU2V0UGxheWVyIH0gZnJvbSAnLi9TZXRQbGF5ZXIuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZURPTSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jykuc2V0QXR0cmlidXRlKCdvbmRyYWdzdGFydCcsICdyZXR1cm4gZmFsc2U7Jyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnNldEF0dHJpYnV0ZSgnb25kcm9wJywgJ3JldHVybiBmYWxzZScpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGlkOiAnbWFpbi1jb250YWluZXInIH0pO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdkaXYnLCB7IGlkOiAnaGVhZGVyJyB9KSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdkaXYnLCB7IGlkOiAnZm9vdGVyJyB9KSk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgLy8gY29uc3Qgc2V0UGxheWVyID0gbmV3IFNldFBsYXllcigxMCwgWzUsIDQsIDMsIDMsIDJdKTtcbiAgICAvLyBzZXRQbGF5ZXIuZGlzcGxheSgpO1xufVxuXG4vLyBEaXNwbGF5IGZvciB0aGUgZ2VuZXJhbCBwbGF5IGFyZWFcbmV4cG9ydCBjbGFzcyBQbGF5Qm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKHNpemUsIGFsbFNoaXBzKSB7XG4gICAgICAgIHRoaXMuU0laRSA9IHNpemU7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdwbGF5LWNvbnRhaW5lcicgfSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkR3JpZChzaXplLCAncGxheS1hcmVhJykpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZEdyaWQoc2l6ZSwgJ3BsYXktc3RhdHVzJykpXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdidXR0b24nLCB7IGNsYXNzOiAncGxheS1idXR0b24nLCBkaXNhYmxlZDogJ3RydWUnIH0sICdTRUxFQ1QgVEFSR0VUJykpO1xuICAgICAgICBhbGxTaGlwcy5mb3JFYWNoKGluZGV4ID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHVzKGluZGV4LCAnc2hpcCcpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICAvLyBnZXR0ZXJzIGZvciBib2FyZCBlbGVtZW50c1xuICAgIGdldENvbnRhaW5lcigpIHsgcmV0dXJuIHRoaXMuY29udGFpbmVyOyB9XG4gICAgZ2V0UGxheSgpIHsgcmV0dXJuIHRoaXMuZ2V0Q29udGFpbmVyKCkucXVlcnlTZWxlY3RvcignLnBsYXktYXJlYScpOyB9XG4gICAgZ2V0U3RhdHVzKCkgeyByZXR1cm4gdGhpcy5nZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yKCcucGxheS1zdGF0dXMnKTsgfVxuICAgIGdldEJ1dHRvbigpIHsgcmV0dXJuIHRoaXMuZ2V0Q29udGFpbmVyKCkucXVlcnlTZWxlY3RvcignLnBsYXktYnV0dG9uJyk7IH1cbiAgICBcbiAgICAvLyBIZWxwZXJzIHRvIGhhbmRsZSB0aGUgZGlzcGxheWVkIGd1aWRlc1xuICAgIGdldEd1aWRlSW5kZXgoaW5kZXgpIHsgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyAoaW5kZXggJSB0aGlzLlNJWkUpKS5jb25jYXQoTWF0aC5mbG9vcihpbmRleCAvIHRoaXMuU0laRSkgKyAxKTsgfVxuXG4gICAgZGlzcGxheUJvYXJkKCkgeyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250YWluZXInKS5hcHBlbmRDaGlsZCh0aGlzLmdldENvbnRhaW5lcigpKTsgfVxuICAgIHJlbW92ZUJvYXJkKCkgeyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheS1jb250YWluZXInKS5yZW1vdmUoKTsgfVxuXG4gICAgLy8gc2V0IHRoZSBkaXNwbGF5J3MgYnV0dG9uIHRleHQgYW5kIGRpc2FibGVkIHN0YXR1c1xuICAgIHNldEJ1dHRvbihpbmRleCkge1xuICAgICAgICB0aGlzLmdldEJ1dHRvbigpLmRpc2FibGVkID0gKGluZGV4KSA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgdGhpcy5nZXRCdXR0b24oKS5pbm5lckhUTUwgPSAoaW5kZXgpID8gYEFUVEFDSyAke3RoaXMuZ2V0R3VpZGVJbmRleChpbmRleCl9YCA6IGBTRUxFQ1QgVEFSR0VUYDsgXG4gICAgfTtcblxuICAgIC8vIHN3aXRjaGVzIGEgY2VsbCBmcm9tIG9wZW4gdG8gc2VsZWN0ZWRcbiAgICB0b2dnbGVTZWxlY3RlZChpbmRleCkge1xuICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5nZXRQbGF5KCkuY2hpbGRyZW4uaXRlbShhZGp1c3RUb0luZGV4KGluZGV4LCB0aGlzLlNJWkUpKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuLWNlbGwnKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZCcpO1xuICAgIH1cblxuICAgIC8vIHNldCBjbGFzcyBmb3IgY2VsbCBpbiB0aGUgcGxheSBncmlkXG4gICAgdXBkYXRlUGxheShpbmRleCwgdG9VcGRhdGUpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuZ2V0UGxheSgpLmNoaWxkcmVuLml0ZW0oYWRqdXN0VG9JbmRleChpbmRleCwgdGhpcy5TSVpFKSk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKHRvVXBkYXRlKTtcbiAgICB9XG5cbiAgICAvLyBzZXQgY2xhc3MgZm9yIGNlbGwgaW4gdGhlIHN0YXR1cyBncmlkXG4gICAgdXBkYXRlU3RhdHVzKGluZGV4LCB0b1VwZGF0ZSkge1xuICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5nZXRTdGF0dXMoKS5jaGlsZHJlbi5pdGVtKGFkanVzdFRvSW5kZXgoaW5kZXgsIHRoaXMuU0laRSkpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQodG9VcGRhdGUpO1xuICAgIH1cblxuICAgIC8vIGRpc3BsYXkgYSBwcml2YWN5IGNvdmVyIG9uIHR1cm4gc3dpdGNoLW9mZnMsIHRha2VzIGEgc3RyaW5nIGZvciBwbGF5ZXIncyBuYW1lLCByZXR1cm5zIGJ1dHRvblxuICAgIGNyZWF0ZVR1cm5Db3ZlcihwbGF5ZXIpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICd0dXJuLWNvbnRhaW5lcicgfSk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ3R1cm4tY29udGVudCcgfSk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IG1ha2VFbGVtZW50KCdidXR0b24nLCB7IGNsYXNzOiAndHVybi1idXR0b24nIH0sICdSRUFEWScpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdoMScsIHt9LCBgJHtwbGF5ZXIudG9VcHBlckNhc2UoKX0nc2ApKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnaDEnLCB7fSwgJ1RVUk4nKSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICB0aGlzLmdldENvbnRhaW5lcigpLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgIHJldHVybiBidXR0b247XG4gICAgfVxuXG4gICAgY2xlYXJUdXJuQ292ZXIoKSB7XG4gICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkucXVlcnlTZWxlY3RvcignLnR1cm4tY29udGFpbmVyJykucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgLy8gZGlzcGxheSBhIGdhbWVvdmVyIG1lc3NhZ2Ugd2l0aCBjdXN0b24gcmVzdWx0IHN0cmluZywgcmV0dXJucyBidXR0b24gZm9yIGJpbmRpbmdcbiAgICBjcmVhdGVHYW1lT3ZlcihyZXN1bHQpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdnYW1lb3Zlci1jb250YWluZXInIH0pO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdnYW1lb3Zlci1jb250ZW50JyB9KTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gbWFrZUVsZW1lbnQoJ2J1dHRvbicsIHsgY2xhc3M6ICdnYW1lb3Zlci1idXR0b24nIH0sICdQTEFZIEFHQUlOPycpXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2gxJywge30sIHJlc3VsdCkpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgICAgdGhpcy5nZXRDb250YWluZXIoKS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH1cbn0iLCIvLyBIZWxwZXIgZnVuY3Rpb24gZm9yIGVhc3kgZWxlbWVudCBjcmVhdGlvblxuLy8gdXNlOiAoPHN0cmluZz4sIDxvYmplY3Q+IG9mIHByb3BlcnRpZXMgYXMgeW91IHdvdWxkIHVzZSBzZXRBdHRyaWJ1dGUsIDxzdHJpbmc+aW5uZXJIVE1MKVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VFbGVtZW50KHR5cGUsIHByb3BlcnRpZXMgPSB7fSwgaW5uZXIgPSBudWxsKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgZm9yIChsZXQga2V5IGluIHByb3BlcnRpZXMpIHsgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYCR7a2V5fWAsIGAke3Byb3BlcnRpZXNba2V5XX1gKSB9O1xuICAgIGlmIChpbm5lcikgeyBlbGVtZW50LmlubmVySFRNTCA9IGlubmVyIH07XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGp1c3RUb0luZGV4KGluZGV4LCBzaXplKSB7IFxuICAgIHJldHVybiAoc2l6ZSArIDEpICogKGluZGV4IC8gc2l6ZSArIDEpICsgMTtcbn1cblxuLy8gY3JlYXRlIGEgdmFyaWFibHkgc2l6ZWQgZ3JpZCB3aXRoIGd1aWRlIG1lYXN1cmVzIG9uIHRvcCBhbmQgbGVmdCBoYW5kIHNpZGVcbmV4cG9ydCBmdW5jdGlvbiBidWlsZEdyaWQoc2lkZVNpemUsIGFkZENsYXNzKSB7XG4gICAgY29uc3QgU0laRSA9IE1hdGgucG93KHNpZGVTaXplICsgMSwgMik7XG4gICAgY29uc3QgZ3JpZEJveCA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnZ3JpZC1ib3gnIH0pO1xuICAgIGlmIChhZGRDbGFzcykgeyBncmlkQm94LmNsYXNzTGlzdC5hZGQoYWRkQ2xhc3MpOyB9XG4gICAgbGV0IGNvbFZhbHVlID0gNjU7XG4gICAgbGV0IHJvd1ZhbHVlID0gMTtcbiAgICBsZXQgY2VsbEluZGV4ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IFNJWkU7IGkrKykgeyBcbiAgICAgICAgaWYgKGkgPT09IDApIHsgZ3JpZEJveC5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2d1aWRlLWNvcm5lcicgfSkpIH1cbiAgICAgICAgZWxzZSBpZiAoaSA8PSBzaWRlU2l6ZSkgeyBncmlkQm94LmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnZ3VpZGUtdG9wJyB9LCBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvbFZhbHVlKyspKSkgfVxuICAgICAgICBlbHNlIGlmIChpICUgKHNpZGVTaXplICsgMSkgPT09IDApIHsgZ3JpZEJveC5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2d1aWRlLWxlZnQnfSwgcm93VmFsdWUrKykpIH1cbiAgICAgICAgZWxzZSB7IGdyaWRCb3guYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdvcGVuLWNlbGwgc2VsZWN0YWJsZScsICdkYXRhLWluZGV4JzogY2VsbEluZGV4KysgfSkpIH07XG4gICAgfVxuXG4gICAgLy8gRmluZCBhIGJldHRlciBob21lIGZvciB0aGlzXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zaWRlLXNpemUnLCBzaWRlU2l6ZSArIDEpO1xuICAgIFxuICAgIHJldHVybiBncmlkQm94O1xufVxuXG4vLyBzZXRQbGF5ZXIgRE9NIGJ1aWxkZXJzXG5cbi8vIGNvbnRhaW5lciBmb3IgaWNvbnMgaW5kZXhlcyB0aGUgaWNvbnMgb24gb3JkZXIgYWRkZWRcbmV4cG9ydCBmdW5jdGlvbiBidWlsZFNldFBsYXllcihzaXplLCBwaWVjZXMpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBpZDogJ3NldC1jb250YWluZXInIH0pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZEdyaWQoc2l6ZSkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZFRvZ2dsZUJhcigpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFrZVRyYXkocGllY2VzKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkU3VibWl0QmFyKCkpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkU3VibWl0QmFyKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGlkOiAnc3VibWl0LWJhcicgfSk7XG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgaWQ6ICdzdWJtaXQtYmMnIH0pO1xuICAgIGNvbnN0IG11bHRpQ29udGFpbmVyID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgaWQ6ICdzdWJtaXQtbWMnIH0pO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnYnV0dG9uJywgeyBpZDogJ3N1Ym1pdC1idG4nLCBkaXNhYmxlZDogJ3RydWUnIH0sICdDT05USU5VRScpKTtcbiAgICBtdWx0aUNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnaW5wdXQnLCB7IHR5cGU6ICdjaGVja2JveCcsIGlkOiAnc3VibWl0LWNoaycgfSkpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG11bHRpQ29udGFpbmVyKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBidWlsZFRvZ2dsZUJhcigpIHtcbiAgICBjb25zdCB0b2dnbGViYXIgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBpZDogJ3RvZ2dsZS1iYXInIH0pO1xuICAgIGNvbnN0IHRvZ2dsZUNvbnRhaW5lciA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGlkOiAndG9nZ2xlLWNvbnRhaW5lcicgfSlcbiAgICBjb25zdCB0b2dnbGVCb2R5ID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgaWQ6ICd0b2dnbGUtYm9keScsICdkYXRhLXknOiAnZmFsc2UnIH0pO1xuICAgIGNvbnN0IHRvZ2dsZVRleHQgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBpZDogJ3RvZ2dsZS10ZXh0JyB9LCAnWCcpO1xuICAgIHRvZ2dsZUJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2dnbGUtcm90YXRlJykpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS15JywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCd0b2dnbGUtcm90YXRlJyk7XG4gICAgICAgICAgICB0b2dnbGVUZXh0LmlubmVySFRNTCA9ICdYJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS15JywgJ3RydWUnKTtcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS1yb3RhdGUnKTtcbiAgICAgICAgICAgIHRvZ2dsZVRleHQuaW5uZXJIVE1MID0gJ1knO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgdG9nZ2xlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZ2dsZUJvZHkpO1xuICAgIHRvZ2dsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2dnbGVUZXh0KTtcbiAgICB0b2dnbGViYXIuYXBwZW5kQ2hpbGQodG9nZ2xlQ29udGFpbmVyKVxuICAgIHJldHVybiB0b2dnbGViYXI7XG59XG5cbmZ1bmN0aW9uIG1ha2VUcmF5KHBpZWNlcykge1xuICAgIGNvbnN0IHRyYXkgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ3NldC10cmF5JyB9KTtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGZvciAobGV0IGkgPSAwLCBqID0gTWF0aC5mbG9vcigocGllY2VzLmxlbmd0aCkgLyAyKTsgaiA8IHBpZWNlcy5sZW5ndGg7IGkrKywgaisrKSB7XG4gICAgICAgIGlmIChpIDwgTWF0aC5mbG9vcihwaWVjZXMubGVuZ3RoIC8gMikpIHsgXG4gICAgICAgICAgICB0cmF5LmFwcGVuZENoaWxkKG1ha2VUcmF5SXRlbShwaWVjZXNbaV0pKTtcbiAgICAgICAgICAgIHRyYXkubGFzdENoaWxkLmZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKCdkYXRhLXRyYXknLCBgJHtpbmRleCsrfWApO1xuICAgICAgICB9XG4gICAgICAgIHRyYXkuYXBwZW5kQ2hpbGQobWFrZVRyYXlJdGVtKHBpZWNlc1tqXSkpO1xuICAgICAgICB0cmF5Lmxhc3RDaGlsZC5maXJzdENoaWxkLnNldEF0dHJpYnV0ZSgnZGF0YS10cmF5JywgYCR7aW5kZXgrK31gKTtcbiAgICB9XG4gICAgcmV0dXJuIHRyYXk7XG59XG5cbi8vIGNyZWF0ZSBob2xkZXIgZm9yIGljb25zXG5mdW5jdGlvbiBtYWtlVHJheUl0ZW0ocGllY2UpIHtcbiAgICBjb25zdCBpdGVtID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICd0cmF5LWl0ZW0nIH0pXG4gICAgaXRlbS5hcHBlbmRDaGlsZChtYWtlUGllY2VJY29uKHBpZWNlKSk7XG4gICAgcmV0dXJuIGl0ZW07XG59XG5cbi8vIGNyZWF0ZSBpY29uc1xuZnVuY3Rpb24gbWFrZVBpZWNlSWNvbihzaXplKSB7XG4gICAgY29uc3QgaWNvbiA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnaWNvbi1waWVjZScgfSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnaWNvbi1jZWxsJyB9KTtcbiAgICAgICAgaWNvbi5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICB9XG4gICAgaWNvbi5kYXRhc2V0LnNpemUgPSBzaXplO1xuICAgIC8vIGljb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHRoaXMuZHJhZ1N0YXJ0KGUpKTtcbiAgICByZXR1cm4gaWNvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VEcmFnSWNvbihzaXplLCB2ZXJ0aWNhbCwgdHJheSwgY2VsbFNpemUpIHtcbiAgICBjb25zdCBkcmFnSWNvbiA9IG1ha2VQaWVjZUljb24oTnVtYmVyKHNpemUpKTtcbiAgICBkcmFnSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RyYWdnZWQnKTtcbiAgICBkcmFnSWNvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJheScsIHRyYXkpO1xuICAgIGlmICh2ZXJ0aWNhbCkgeyBkcmFnSWNvbi5jbGFzc0xpc3QuYWRkKCdkcmFnLXknKSB9XG4gICAgWy4uLmRyYWdJY29uLmNoaWxkcmVuXS5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgY2hpbGQuc3R5bGUuaGVpZ2h0ID0gY2VsbFNpemU7XG4gICAgICAgIGNoaWxkLmNsYXNzTGlzdC5hZGQoJ2RyYWctY2VsbCcpXG4gICAgfSk7XG4gICAgcmV0dXJuIGRyYWdJY29uOyBcbn0iLCJsZXQgZWxlbWVudDtcbmxldCB4T2ZmO1xubGV0IHlPZmY7XG5jb25zdCBtb3ZlSGFuZGxlciA9IG1vdmUuYmluZCh0aGlzKTtcbmNvbnN0IGVuZEhhbmRsZXIgPSBlbmQuYmluZCh0aGlzKTtcblxuXG5leHBvcnQgZnVuY3Rpb24gRHJhZ0VsZW1lbnQoZSwgeCwgeSkge1xuICAgIGVsZW1lbnQgPSBlO1xuICAgIHhPZmYgPSB4O1xuICAgIHlPZmYgPSB5O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3ZlSGFuZGxlciwgdHJ1ZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBlbmRIYW5kbGVyLCB0cnVlKTtcbn1cblxuXG5mdW5jdGlvbiBtb3ZlKGUpIHtcbiAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGVsZW1lbnQuc3R5bGUudG9wID0gKGUuY2xpZW50WSAtIHlPZmYpICsgJ3B4JztcbiAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSAoZS5jbGllbnRYIC0geE9mZikgKyAncHgnO1xufVxuXG5mdW5jdGlvbiBlbmQoZSkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3ZlSGFuZGxlciwgdHJ1ZSk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBlbmRIYW5kbGVyLCB0cnVlKTtcbn0iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9TaGlwLmpzJztcblxuZXhwb3J0IGNsYXNzIEdhbWVib2FyZCB7XG4gICAgY29uc3RydWN0b3Ioc2l6ZSkge1xuICAgICAgICB0aGlzLlNJWkUgPSBzaXplO1xuICAgICAgICB0aGlzLmFsbFNoaXBzID0gW107XG4gICAgICAgIHRoaXMuYm9hcmQgPSBbXTtcbiAgICAgICAgdGhpcy5hbGxIaXQgPSBbXTtcbiAgICAgICAgdGhpcy5hbGxNaXNzID0gW107XG4gICAgICAgIHRoaXMuYWxsUGxhY2VkID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZSAqIHNpemU7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5ib2FyZC5wdXNoKHtzaGlwOiBudWxsLCBoaXQ6IGZhbHNlfSlcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBnZXRIaXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFsbEhpdDtcbiAgICB9XG5cbiAgICBnZXRNaXNzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hbGxNaXNzO1xuICAgIH1cblxuICAgIGdldFBsYWNlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxsUGxhY2VkO1xuICAgIH1cblxuICAgIGdldFNpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLlNJWkUgKiB0aGlzLlNJWkU7XG4gICAgfVxuXG4gICAgaXNIaXQoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRbaW5kZXhdLmhpdDtcbiAgICB9XG5cbiAgICAvLyBwbGFjZSBuZXcgc2hpcCBvbiBnYW1lYm9hcmQgcmV0dXJucyBzaGlwIG9yIGZhbHNlIGlmIG5vdCBsZWdhbCBwbGFjZW1lbnRcbiAgICBhZGRTaGlwKHNoaXBTaXplLCBoZWFkLCB2ZXJ0aWNhbCA9IGZhbHNlKSB7XG4gICAgICAgIC8vIGRpc2FsbG93IHBsYWNlbWVudCBiZXlvbmQgYm9hcmQncyBib3VuZGFyaWVzXG4gICAgICAgIGlmICghdmVydGljYWwgJiYgKChoZWFkICUgdGhpcy5TSVpFKSArIHNoaXBTaXplID4gdGhpcy5TSVpFKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAodmVydGljYWwgJiYgKE1hdGguZmxvb3IoaGVhZCAvIHRoaXMuU0laRSkpICsgc2hpcFNpemUgPiB0aGlzLlNJWkUpIHJldHVybiBmYWxzZTtcblxuICAgICAgICBjb25zdCB0b1BsYWNlID0gdGhpcy5nZXRJbmRlY2VzKHNoaXBTaXplLCBoZWFkLCB2ZXJ0aWNhbCk7XG4gICAgICAgIFxuICAgICAgICAvLyBpbnNwZWN0IGZvciBhbnkgb3ZlcmxhcHBpbmcgY29uZmxpY3RcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b1BsYWNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZFt0b1BsYWNlW2ldXS5zaGlwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgbmV3U2hpcCA9IG5ldyBTaGlwKHNoaXBTaXplKTtcbiAgICAgICAgdG9QbGFjZS5mb3JFYWNoKGluZGV4ID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWxsUGxhY2VkLnB1c2goaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5ib2FyZFtpbmRleF0uc2hpcCA9IG5ld1NoaXBcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWxsU2hpcHMucHVzaCh0b1BsYWNlKTtcbiAgICAgICAgcmV0dXJuIG5ld1NoaXA7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJucyBhbiBhcnJheSBvZiBhIHNoaXAncyBzZXF1ZW50aWFsIHBvc2l0aW9uaW5nXG4gICAgZ2V0SW5kZWNlcyhzaXplLCBoZWFkLCB2ZXJ0aWNhbCkge1xuICAgICAgICBjb25zdCBpbmRlY2VzID0gW107XG4gICAgICAgIGlmICh2ZXJ0aWNhbCkge1xuICAgICAgICAgICAgd2hpbGUgKHNpemUtLSA+IDApIHtcbiAgICAgICAgICAgICAgICBpbmRlY2VzLnB1c2goaGVhZCk7XG4gICAgICAgICAgICAgICAgaGVhZCArPSB0aGlzLlNJWkU7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2hpbGUgKHNpemUtLSA+IDApIHtcbiAgICAgICAgICAgICAgICBpbmRlY2VzLnB1c2goaGVhZCsrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5kZWNlcztcbiAgICB9XG5cbiAgICAvLyBzZXRzIGF0dGFjayBhY3Rpb25zLCBtdXN0IGJlIGludGVnZXIgYW5kIHdpdGhpbiB0aGUgZ2FtZWJvYXJkLCBpZ25vcmVzIHNwYWNlcyBhbHJlYWR5IGhpdFxuICAgIHJlY2VpdmVBdHRhY2soaW5kZXgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpbmRleCAhPSAnbnVtYmVyJykgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCd2YWx1ZSBtdXN0IGJlIE51bWJlcicpIH07XG4gICAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihpbmRleCkpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignT25seSBpbnRlZ2VyIHZhbHVlcycpIH07XG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5ib2FyZC5sZW5ndGgpIHsgdGhyb3cgbmV3IFJhbmdlRXJyb3IoYHZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAke3RoaXMuYm9hcmQubGVuZ3RoIC0gMX1gKTsgfVxuICAgICAgICBpZiAodGhpcy5ib2FyZFtpbmRleF0uaGl0KSB7IHJldHVybjsgfVxuXG4gICAgICAgIHRoaXMuYm9hcmRbaW5kZXhdLmhpdCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW2luZGV4XS5zaGlwKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW2luZGV4XS5zaGlwLmhpdCgpO1xuICAgICAgICAgICAgdGhpcy5hbGxIaXQucHVzaChpbmRleCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFtpbmRleF0uc2hpcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWxsTWlzcy5wdXNoKGluZGV4KTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gY29uZmlybXMgdGhhdCB0aGUgc2hpcCBhdCBlYWNoIGZyb250IHBvc2l0aW9uIGluIGFsbFNoaXBzIGlzIHN1bmtcbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIGxldCBzdW5rID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbGxTaGlwcy5mb3JFYWNoKHNoaXAgPT4geyBcbiAgICAgICAgICAgIGlmICghdGhpcy5ib2FyZFtzaGlwWzBdXS5zaGlwLmlzU3VuaygpKSB7IHN1bmsgPSBmYWxzZTsgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHN1bms7XG4gICAgfVxufSIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL0dhbWVib2FyZFwiO1xuaW1wb3J0IHsgUGxheUJvYXJkIH0gZnJvbSBcIi4vRE9NQ29udHJvbFwiO1xuLy8gaG9sZHMgcGxheWVyJ3MgZ2FtZWJvYXJkLCBjYW4gZGV0ZXJtaW5lIG5leHQgbW92ZSBpZiBjcHUgXG4vLyBwYXNzIGFuIGFycmF5IG9mIGFycmF5cyBpbiBbc2hpcCBzaXplLCBzaGlwIGluZGV4LCBpcyB2ZXJ0aWNhbCh0cnVlL2ZhbHNlKV0gZm9ybWF0XG4vLyB0byBwb3B1bGF0ZSB0aGUgZ2FtZWJvYXJkXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB0b0FkZCA9IFtdKSB7XG4gICAgICAgIHRoaXMuU0laRSA9IDEwO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEdhbWVib2FyZCh0aGlzLlNJWkUpO1xuICAgICAgICB0aGlzLm5leHRNb3ZlID0gW107XG4gICAgICAgIHRvQWRkLmZvckVhY2goc2hpcCA9PiB0aGlzLmJvYXJkLmFkZFNoaXAoc2hpcFswXSwgc2hpcFsxXSwgc2hpcFsyXSkgKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5ID0gbmV3IFBsYXlCb2FyZCh0aGlzLlNJWkUsIHRoaXMuZ2V0QWxsU2hpcEluZGV4KCkpO1xuICAgIH07XG5cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIGdldERpc3BsYXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpc3BsYXk7XG4gICAgfVxuXG4gICAgZ2V0QWxsU2hpcEluZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZC5nZXRQbGFjZWQoKTtcbiAgICB9XG5cbiAgICBnZXRNaXNzSW5kZXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkLmdldE1pc3MoKTtcbiAgICB9XG5cbiAgICBnZXRIaXRJbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQuZ2V0SGl0KCk7XG4gICAgfVxuXG4gICAgLy8gY29uZmlybXMgaWYgcGxheWVyIGlzIGRlZmVhdGVkXG4gICAgaXNEZWZlYXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQuaXNTdW5rKCk7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJucyBlaXRoZXIgdGhlIGhpdCBzaGlwIG9yIG51bGxcbiAgICB0YWtlSGl0KGluZGV4KSB7XG4gICAgICAgIHJldHVybiAodGhpcy5ib2FyZC5yZWNlaXZlQXR0YWNrKGluZGV4KSkgPyAnaGl0JyA6ICdtaXNzJztcbiAgICB9XG5cbiAgICAvLyBjb25maXJtcyBpZiBhIG1vdmUgaXMgdmFsaWRcbiAgICBpc1ZhbGlkTW92ZShpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMuYm9hcmQuZ2V0U2l6ZSgpKSB7IHJldHVybiBmYWxzZSB9O1xuICAgICAgICByZXR1cm4gIXRoaXMuYm9hcmQuaXNIaXQoaW5kZXgpO1xuICAgIH1cblxuICAgIC8vIHRha2VzIGEgY3B1IHR1cm4gYWdhaW5zdCBwbGF5ZXIsIHJldHVybnMgbW92ZSB0YWtlblxuICAgIGNwdVR1cm4oKSB7XG4gICAgICAgIGxldCBtb3ZlO1xuICAgICAgICBpZiAodGhpcy5uZXh0TW92ZS5sZW5ndGggPT09IDApIHsgbW92ZSA9IHRoaXMucmFuZG9tTW92ZSgpOyB9XG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHRoaXMudGFrZUhpdChtb3ZlKTtcbiAgICAgICAgcmV0dXJuIG1vdmU7XG4gICAgfVxuXG4gICAgLy8gZWxlY3QgYSB2YWxpZCBmcmVlIHNwYWNlIHRvIGF0dGFjayBmcm9tIHRoZSBnYW1lYm9hcmRcbiAgICByYW5kb21Nb3ZlKCkge1xuICAgICAgICBjb25zdCBtb3ZlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5wb3codGhpcy5TSVpFLCAyKSk7XG4gICAgICAgIHJldHVybiAodGhpcy5pc1ZhbGlkTW92ZShtb3ZlKSkgPyBtb3ZlIDogdGhpcy5yYW5kb21Nb3ZlKCk7XG4gICAgfVxufTtcbiIsImltcG9ydCB7IERyYWdFbGVtZW50IH0gZnJvbSAnLi9EcmFnRWxlbWVudC5qcyc7XG5pbXBvcnQgeyBhZGp1c3RUb0luZGV4LCBidWlsZFNldFBsYXllciwgbWFrZURyYWdJY29uIH0gZnJvbSAnLi9ET01IZWxwZXJzLmpzJztcblxuLy8gRGlzcGxheSBmb3IgaW5pdGlhbHppaW5nIGEgcGxheWVyXG5leHBvcnQgY2xhc3MgU2V0UGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihzaXplLCBwaWVjZXMpIHtcbiAgICAgICAgdGhpcy5TSVpFID0gc2l6ZTtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBidWlsZFNldFBsYXllcihzaXplLCBwaWVjZXMpO1xuICAgICAgICB0aGlzLmJpbmRUcmF5KCk7XG4gICAgICAgIHRoaXMuZHJhZ0V2ZW50ID0ge1xuICAgICAgICAgICAgZHJhZ092ZXI6IG51bGwsXG4gICAgICAgICAgICBkcmFnR3JvdXA6IFtdXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0SXRlbSA9IFtdO1xuICAgICAgICB0aGlzLmRyYWdQaWNrVXBTdGFydEhhbmRsZXIgPSB0aGlzLmRyYWdQaWNrVXBTdGFydC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYWdNb3ZlSGFuZGxlciA9IHRoaXMuZHJhZ01vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmFnRW5kSGFuZGxlciA9IHRoaXMuZHJhZ0VuZC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGJpbmRUcmF5KCkge1xuICAgICAgICB0aGlzLmdldENvbnRhaW5lcigpLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pY29uLXBpZWNlJykuZm9yRWFjaChpY29uID0+IHtcbiAgICAgICAgICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHRoaXMuZHJhZ1N0YXJ0KGUpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0Q29udGFpbmVyKCkgeyByZXR1cm4gdGhpcy5jb250YWluZXI7IH1cbiAgICBnZXRHcmlkKCkgeyByZXR1cm4gdGhpcy5nZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yKCcuZ3JpZC1ib3gnKTsgfVxuICAgIGdldFRyYXkoKSB7IHJldHVybiB0aGlzLmdldENvbnRhaW5lcigpLnF1ZXJ5U2VsZWN0b3IoJy5zZXQtdHJheScpOyB9XG4gICAgZ2V0QnV0dG9uKCkgeyByZXR1cm4gdGhpcy5nZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LWJ0bicpOyB9XG4gICAgZ2V0TXVsdGkoKSB7IHJldHVybiB0aGlzLmdldENvbnRhaW5lcigpLnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtY2hrJykuY2hlY2tlZCB9XG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIG11bHRpOiB0aGlzLmdldE11bHRpKCksXG4gICAgICAgICAgICBib2FyZDogW11cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEl0ZW0uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFkZCA9IFtdO1xuICAgICAgICAgICAgYWRkLnB1c2goaXRlbS5zaXplKTtcbiAgICAgICAgICAgIGFkZC5wdXNoKGl0ZW0uaGVhZCk7XG4gICAgICAgICAgICBhZGQucHVzaChpdGVtLnNldFkpO1xuICAgICAgICAgICAgZGF0YS5ib2FyZC5wdXNoKGFkZCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICAvLyBhcHBlbmQgc2V0cGxheWVyIHRvIG1haW4gY29udGFpbmVyLCBzZXRzIGluaXRpYWwgaGVpZ2h0IG9mIGFsbCBpY29uIGNlbGxzXG4gICAgLy8gYmluZHMgd2luZG93IHJlc2l6aW5nIHRvIHJlc2l6ZSBpY29ucyB0byBtYXRjaCBncmlkIHNpemVcbiAgICBkaXNwbGF5KCkgeyBcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGFpbmVyJykuYXBwZW5kQ2hpbGQodGhpcy5nZXRDb250YWluZXIoKSk7IFxuICAgICAgICB0aGlzLnNldFRyYXlJY29uU2l6ZSgpXG4gICAgICAgIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWQtYm94JykuY2hpbGRyZW4uaXRlbSgxMSkuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmljb24tY2VsbCcpLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gY2xlYXIgc2V0cGxheWVyXG4gICAgcmVtb3ZlKCkgeyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2V0LWNvbnRhaW5lcicpLnJlbW92ZSgpOyB9XG5cbiAgICAvLyBzZXQgdGhlIGljb24ncyBjZWxsIHNpemUgdG8gbWF0Y2ggdGhlIGdyaWQncyBjZWxsIHNpemVcbiAgICBzZXRUcmF5SWNvblNpemUoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pY29uLWNlbGwnKS5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgY2VsbC5zdHlsZS5oZWlnaHQgPSB0aGlzLkdldFRyYXlJY29uU2l6ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBHZXRUcmF5SWNvblNpemUoKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmdldEdyaWQoKS5jaGlsZHJlbi5pdGVtKGFkanVzdFRvSW5kZXgoMCwgdGhpcy5TSVpFKSkuY2xpZW50SGVpZ2h0fXB4YDtcbiAgICB9XG5cbiAgICAvLyBBbGwgZHJhZy9kcm9wIGFjdGlvbnMgdG8gZm9sbG93XG4gICAgLy8gY3JlYXRlcyBhbmQgYXBwZW5kcyBkcmFnZ2VkIGljb24sIHNldHMgZHJhZyBiaW5kaW5nc1xuICAgIGRyYWdTdGFydChlKSB7XG4gICAgICAgIGNvbnN0IGljb24gPSAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpY29uLWNlbGwnKSkgPyBlLnRhcmdldC5wYXJlbnROb2RlIDogZS50YXJnZXQ7XG4gICAgICAgIGlmIChpY29uLmNsYXNzTGlzdC5jb250YWlucygnaWNvbi1kaXNhYmxlJykpIHsgcmV0dXJuIH1cbiAgICAgICAgY29uc3QgZHJhZ0ljb24gPSBtYWtlRHJhZ0ljb24oXG4gICAgICAgICAgICBOdW1iZXIoaWNvbi5kYXRhc2V0LnNpemUpLFxuICAgICAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2dnbGUtYm9keScpLmRhdGFzZXQueSA9PT0gJ3RydWUnKSxcbiAgICAgICAgICAgIGljb24uZGF0YXNldC50cmF5LFxuICAgICAgICAgICAgdGhpcy5HZXRUcmF5SWNvblNpemUoKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdpY29uLWRpc2FibGUnKTtcbiAgICAgICAgaWNvbi5hcHBlbmRDaGlsZChkcmFnSWNvbik7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IChkcmFnSWNvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2RyYWcteScpKVxuICAgICAgICAgICAgPyB0aGlzLmdldFlvZmZzZXQoZHJhZ0ljb24sIGUuY2xpZW50WCAtIGRyYWdJY29uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQpXG4gICAgICAgICAgICA6IDA7XG4gICAgICAgIGlmICghZHJhZ0ljb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdkcmFnLXknKSkgeyBcbiAgICAgICAgICAgIHRoaXMuc2V0WEF0dHJpYnV0ZShkcmFnSWNvbiwgZS5jbGllbnRYIC0gZHJhZ0ljb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCk7IFxuICAgICAgICB9O1xuICAgICAgICBEcmFnRWxlbWVudChkcmFnSWNvbiwgZS5jbGllbnRYIC0gb2Zmc2V0LCBlLmNsaWVudFkpOyBcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGFpbmVyJykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMuZHJhZ0VuZEhhbmRsZXIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmRyYWdNb3ZlSGFuZGxlciwgdHJ1ZSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmRyYWdFbmRIYW5kbGVyLCB0cnVlKTtcbiAgICB9XG5cbiAgICBkcmFnUGlja1VwU3RhcnQoZSkge1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICB3aGlsZSAodGhpcy5zZXRJdGVtW2luZGV4XS50cmF5ICE9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LmdldHRyYXkpKSB7IGluZGV4Kys7IH1cbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gdGhpcy5zZXRJdGVtW2luZGV4XTtcbiAgICAgICAgY29uc3QgZHJhZ0l0ZW0gPSBtYWtlRHJhZ0ljb24oXG4gICAgICAgICAgICBzZWxlY3Quc2l6ZSxcbiAgICAgICAgICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9nZ2xlLWJvZHknKS5kYXRhc2V0LnkgPT09ICd0cnVlJyksXG4gICAgICAgICAgICBzZWxlY3QudHJheSxcbiAgICAgICAgICAgIHRoaXMuR2V0VHJheUljb25TaXplKClcbiAgICAgICAgKVxuICAgICAgICBlLnRhcmdldC5hcHBlbmRDaGlsZChkcmFnSXRlbSk7XG4gICAgICAgIHRoaXMuY29uZmlnUGlja1VwKGRyYWdJdGVtLCAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZ2dsZS1ib2R5JykuZGF0YXNldC55ID09PSAndHJ1ZScpKTtcbiAgICAgICAgRHJhZ0VsZW1lbnQoZHJhZ0l0ZW0sIGUuY2xpZW50WCwgZS5jbGllbnRZKTtcbiAgICAgICAgdGhpcy5yZW1vdmVQbGFjZWQoc2VsZWN0LmhlYWQsIHNlbGVjdC5zaXplLCBzZWxlY3Quc2V0WSk7XG4gICAgICAgIHRoaXMuc2V0SXRlbS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5kcmFnRW5kSGFuZGxlcik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZHJhZ01vdmVIYW5kbGVyLCB0cnVlKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGFpbmVyJykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuZHJhZ0VuZEhhbmRsZXIsIHRydWUpO1xuXG4gICAgICAgIHRoaXMuZ2V0QnV0dG9uKCkuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIENvbmZpZ3VyZSBwb3NpdGlvbiBhbmQgZGF0YSBhdHRyaWJ1dGVzIHdoZW4gcGlja2luZyB1cCBmcm9tIHRoZSBib2FyZFxuICAgIGNvbmZpZ1BpY2tVcChlbGVtZW50LCBpc1kpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSAnMHB4JztcbiAgICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gICAgICAgIHRoaXMuc2V0WEF0dHJpYnV0ZShlbGVtZW50LCAwKTtcbiAgICB9XG5cbiAgICAvLyBjbGVhcnMgYWxsIGNlbGxzIG9mIHBsYWNlZCBvYmplY3QncyBiaW5kaW5nc1xuICAgIHJlbW92ZVBsYWNlZChoZWFkSW5kZXgsIGxlbmd0aCwgaXNZKSB7XG4gICAgICAgIGxldCBjZWxsID0gdGhpcy5nZXRHcmlkKCkuY2hpbGRyZW4uaXRlbShhZGp1c3RUb0luZGV4KGhlYWRJbmRleCwgdGhpcy5TSVpFKSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnc2V0Jyk7XG4gICAgICAgICAgICBjZWxsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1nZXR0cmF5Jyk7XG4gICAgICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuZHJhZ1BpY2tVcFN0YXJ0SGFuZGxlciwgdHJ1ZSk7XG4gICAgICAgICAgICBjb25zdCBuZXh0Q2VsbCA9IChpc1kpIFxuICAgICAgICAgICAgICAgID8gTnVtYmVyKGNlbGwuZGF0YXNldC5pbmRleCkgKyB0aGlzLlNJWkUgXG4gICAgICAgICAgICAgICAgOiBOdW1iZXIoY2VsbC5kYXRhc2V0LmluZGV4KSArIDE7XG4gICAgICAgICAgICBjZWxsID0gdGhpcy5nZXRHcmlkKCkuY2hpbGRyZW4uaXRlbShhZGp1c3RUb0luZGV4KG5leHRDZWxsLCB0aGlzLlNJWkUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFhBdHRyaWJ1dGUoZWxlbWVudCwgeFBvcykge1xuICAgICAgICBjb25zdCBsZWZ0ID0gTWF0aC5mbG9vcih4UG9zIC8gZWxlbWVudC5maXJzdENoaWxkLmNsaWVudFdpZHRoKTtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGVmdCcsIGxlZnQpO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1yaWdodCcsIGVsZW1lbnQuY2hpbGRFbGVtZW50Q291bnQgLSBsZWZ0IC0gMSk7XG4gICAgfVxuXG4gICAgZ2V0WW9mZnNldChlbGVtZW50LCB4UG9zKSB7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHhQb3MgLSAoZWxlbWVudC5jbGllbnRXaWR0aCAvIDIpXG4gICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGAke29mZnNldH1weGA7XG4gICAgICAgIHJldHVybiBvZmZzZXQ7XG4gICAgfVxuXG4gICAgLy8gb24gZHJhZyBpbnZlc3RpZ2F0ZSBpZiBlbGVtZW50IGJlbG93IGN1cnNvciBpcyBhIHZhbGlkIGhvdmVyIHRhcmdldFxuICAgIC8vIGFuZCBhZGp1c3QgZGlzcGxheWVkIGhvdmVyIHRhcmdldHNcbiAgICBkcmFnTW92ZShlKSB7XG4gICAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RyYWdnZWQnKTtcbiAgICAgICAgaWNvbi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIGxldCBiZWxvdyA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoZS5jbGllbnRYLCBlLmNsaWVudFkpO1xuICAgICAgICBpY29uLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgIGlmIChiZWxvdy5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGFibGUnKSBcbiAgICAgICAgICAgICYmIHRoaXMuZHJhZ0V2ZW50LmRyYWdPdmVyICE9IGJlbG93KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckhvdmVyKCk7XG4gICAgICAgICAgICAgICAgaWYgKGljb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdkcmFnLXknKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEhvdmVyWShcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlbG93LFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5jaGlsZEVsZW1lbnRDb3VudCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRIb3ZlclgoXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWxvdywgXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoaWNvbi5kYXRhc2V0LmxlZnQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGljb24uZGF0YXNldC5yaWdodCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghYmVsb3cuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RhYmxlJykpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJIb3ZlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRnVuY3Rpb24gdG8gY2xlYXIgZHJhZ2dlZCBhY3Rpb25zXG4gICAgZHJhZ0VuZChlKSB7XG4gICAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgdmFsaWRTZXQgPSB0cnVlO1xuICAgICAgICBjb25zdCBkcmFnSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcmFnZ2VkJyk7XG4gICAgICAgIGlmIChkcmFnSXRlbS5jaGlsZEVsZW1lbnRDb3VudCA9PT0gdGhpcy5kcmFnRXZlbnQuZHJhZ0dyb3VwLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5kcmFnRXZlbnQuZHJhZ0dyb3VwLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZXQnKSkgeyB2YWxpZFNldCA9IGZhbHNlO31cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7IHZhbGlkU2V0ID0gZmFsc2U7IH1cbiAgICAgICAgaWYgKHZhbGlkU2V0KSB7XG4gICAgICAgICAgICB0aGlzLmRyYWdFdmVudC5kcmFnR3JvdXAuZm9yRWFjaChjZWxsID0+IHsgXG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzZXQnKTsgXG4gICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZ2V0dHJheScsIGRyYWdJdGVtLmRhdGFzZXQudHJheSk7XG4gICAgICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmRyYWdQaWNrVXBTdGFydEhhbmRsZXIsIHRydWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnNldEl0ZW0ucHVzaCh7XG4gICAgICAgICAgICAgICAgdHJheTogTnVtYmVyKGRyYWdJdGVtLmRhdGFzZXQudHJheSksXG4gICAgICAgICAgICAgICAgaGVhZDogKGRyYWdJdGVtLmNsYXNzTGlzdC5jb250YWlucygnZHJhZy15JykpIFxuICAgICAgICAgICAgICAgICAgICA/IE51bWJlcih0aGlzLmRyYWdFdmVudC5kcmFnR3JvdXBbMF0uZGF0YXNldC5pbmRleCkgXG4gICAgICAgICAgICAgICAgICAgIDogTnVtYmVyKHRoaXMuZHJhZ0V2ZW50LmRyYWdHcm91cFswXS5kYXRhc2V0LmluZGV4IC0gZHJhZ0l0ZW0uZGF0YXNldC5sZWZ0KSxcbiAgICAgICAgICAgICAgICBzZXRZOiBkcmFnSXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2RyYWcteScpLFxuICAgICAgICAgICAgICAgIHNpemU6IGRyYWdJdGVtLmNoaWxkRWxlbWVudENvdW50XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldC10cmF5JylcbiAgICAgICAgICAgIC5jaGlsZHJlbi5pdGVtKE51bWJlcihkcmFnSXRlbS5kYXRhc2V0LnRyYXkpKVxuICAgICAgICAgICAgLmZpcnN0Q2hpbGQuY2xhc3NMaXN0XG4gICAgICAgICAgICAucmVtb3ZlKCdpY29uLWRpc2FibGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdldFRyYXkoKS5jaGlsZEVsZW1lbnRDb3VudCA9PT0gdGhpcy5zZXRJdGVtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5nZXRCdXR0b24oKS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nZXRCdXR0b24oKS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHJhZ2dlZCcpLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLmNsZWFySG92ZXIoKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGFpbmVyJykucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMuZHJhZ0VuZEhhbmRsZXIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250YWluZXInKS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmRyYWdNb3ZlSGFuZGxlciwgdHJ1ZSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRhaW5lcicpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmRyYWdFbmRIYW5kbGVyLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgYWRkaW5nIGhvdmVyIGV2ZW50XG4gICAgc2V0SG92ZXJYKGNlbGwsIGxlZnQsIHJpZ2h0KSB7ICBcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xuICAgICAgICB0aGlzLmRyYWdFdmVudC5kcmFnT3ZlciA9IGNlbGw7ICAgICAgICBcbiAgICAgICAgdGhpcy5kcmFnRXZlbnQuZHJhZ0dyb3VwLnB1c2goY2VsbCk7XG4gICAgICAgIHRoaXMuaG92ZXJTaWJsaW5ncyhjZWxsLCBsZWZ0LCB0cnVlKTtcbiAgICAgICAgdGhpcy5ob3ZlclNpYmxpbmdzKGNlbGwsIHJpZ2h0LCBmYWxzZSk7ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgfVxuXG4gICAgc2V0SG92ZXJZKHJvb3QsIG51bVNpYikge1xuICAgICAgICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWQtYm94Jyk7XG4gICAgICAgIGxldCBpbmRleCA9IE51bWJlcihyb290LmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICBsZXQgdG9BZGQgPSByb290O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVNpYjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodG9BZGQpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IE51bWJlcih0b0FkZC5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdFdmVudC5kcmFnR3JvdXAucHVzaCh0b0FkZCk7XG4gICAgICAgICAgICAgICAgdG9BZGQuY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcbiAgICAgICAgICAgICAgICB0b0FkZCA9IGdyaWQuY2hpbGRyZW4uaXRlbShhZGp1c3RUb0luZGV4KGluZGV4ICsgdGhpcy5TSVpFLCB0aGlzLlNJWkUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gaGlnaGxpZ2h0IHRoZSBjb3JyZWN0IG5laWdoYm9yaW5nIHNpYmxpbmdzIG9uIGhvdmVyXG4gICAgaG92ZXJTaWJsaW5ncyhyb290LCBudW1TaWIsIGxlZnQpIHtcbiAgICAgICAgbGV0IHRvQWRkID0gcm9vdDtcbiAgICAgICAgbGV0IGluZGV4ID0gTnVtYmVyKHJvb3QuZGF0YXNldC5pbmRleCk7XG4gICAgICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoaW5kZXggLyB0aGlzLlNJWkUpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVNpYjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjaGVjayA9IChsZWZ0KSA/ICgoaW5kZXggLSAoaSArIDEpKSAvIHRoaXMuU0laRSkgOiAoKGluZGV4ICsgKGkgKyAxKSkgLyB0aGlzLlNJWkUpO1xuICAgICAgICAgICAgaWYgKHJvdyA9PT0gTWF0aC5mbG9vcihjaGVjaykpIHtcbiAgICAgICAgICAgICAgICB0b0FkZCA9IChsZWZ0KSA/IHRvQWRkLnByZXZpb3VzU2libGluZyA6IHRvQWRkLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIHRvQWRkLmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7IFxuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ0V2ZW50LmRyYWdHcm91cC5wdXNoKHRvQWRkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJlc2V0cyBzZXQgaG92ZXIgYWN0aW9uc1xuICAgIGNsZWFySG92ZXIoKSB7XG4gICAgICAgIHRoaXMuZHJhZ0V2ZW50LmRyYWdPdmVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5kcmFnRXZlbnQuZHJhZ0dyb3VwLmZvckVhY2goY2VsbCA9PiBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJykpO1xuICAgICAgICB0aGlzLmRyYWdFdmVudC5kcmFnR3JvdXAubGVuZ3RoID0gMDtcbiAgICB9XG5cbiAgICBcbn0iLCIvLyBiYXNpYyB1bml0IHVzZWQgaW4gZ2FtZSwgbXVzdCBwYXNzIGludGVnZXIgdmFsdWUgdG8gZGV0ZXJtaW5lIHNpemVcblxuZXhwb3J0IGNsYXNzIFNoaXAge1xuICAgIC8vIHRlc3RzIHRvIGVuc3VyZSB2YWx1ZSBpcyBhbiBpbnRlZ2VyIG51bWJlciBvdmVyIDBcbiAgICBjb25zdHJ1Y3RvcihzaXplKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2l6ZSAhPSAnbnVtYmVyJykgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCd2YWx1ZSBtdXN0IGJlIE51bWJlcicpIH07XG4gICAgICAgIGlmIChzaXplIDw9IDApIHsgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1ZhbHVlIG11c3QgYmUgZ3JlYXRlciB0aGFuIDAnKSB9O1xuICAgICAgICBpZiAoIU51bWJlci5pc0ludGVnZXIoc2l6ZSkpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignT25seSBpbnRlZ2VyIHZhbHVlcycpIH07XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgfVxuXG4gICAgZ2V0SGl0cygpIHsgcmV0dXJuIHRoaXMuaGl0czsgfVxuXG4gICAgLy8gaW5jcmVhc2VzIHNoaXBzIGhpdCB2YWx1ZVxuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy5oaXRzICs9IDE7XG4gICAgfVxuXG4gICAgLy8gZGV0ZXJtaW5lcyB0aGUgc3RhdGUgb2YgdGhlIHNoaXBcbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhpdHMgPj0gdGhpcy5zaXplO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBpbml0aWFsaXplRE9NIH0gZnJvbSBcIi4vRE9NQ29udHJvbC5qc1wiO1xuaW1wb3J0IHsgU2V0UGxheWVyIH0gZnJvbSBcIi4vU2V0UGxheWVyLmpzXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL1BsYXllci5qcyc7XG5cbmV4cG9ydCBjbGFzcyBHYW1lQ29udHJvbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuU0laRSA9IDEwO1xuICAgICAgICB0aGlzLnBsYXllcjEgPSBudWxsO1xuICAgICAgICB0aGlzLnBsYXllcjIgPSBudWxsO1xuICAgICAgICB0aGlzLm11bHRpcGxheWVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2VsZWN0TW92ZSA9IG51bGw7XG4gICAgICAgIHRoaXMudHVybk51bWJlciA9IDA7XG4gICAgfVxuXG4gICAgLy8gYmVnaW4gdGhlIGdhbWVsb29wXG4gICAgc3RhcnRHYW1lKCkge1xuICAgICAgICBpbml0aWFsaXplRE9NKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlUGxheWVyKCk7XG4gICAgICAgIFxuICAgICAgICAvLyBpbml0aWFsaXplRE9NKCk7XG5cbiAgICAgICAgLy8gdGhpcy5kdW1teVNldFBsYXllcigpO1xuICAgICAgICAvLyBjb25zdCBib2FyZCA9IHRoaXMuZ2V0UGxheWVyKCkuZ2V0RGlzcGxheSgpO1xuICAgICAgICAvLyBpZiAodGhpcy5tdWx0aXBsYXllcikge1xuICAgICAgICAvLyAgICAgYm9hcmQuY3JlYXRlVHVybkNvdmVyKHRoaXMuZ2V0UGxheWVyKClcbiAgICAgICAgLy8gICAgICAgICAuZ2V0TmFtZSgpKVxuICAgICAgICAvLyAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBib2FyZC5jbGVhclR1cm5Db3ZlcigpKTtcbiAgICAgICAgLy8gfTtcbiAgICAgICAgLy8gYm9hcmQuZGlzcGxheUJvYXJkKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlUGxheWVyKCkge1xuICAgICAgICBjb25zdCBzZXRQbGF5ZXIgPSBuZXcgU2V0UGxheWVyKDEwLCBbNSwgNCwgMywgMywgMl0pO1xuICAgICAgICBzZXRQbGF5ZXIuZ2V0QnV0dG9uKCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHNldFBsYXllci5nZXREYXRhKCk7XG4gICAgICAgICAgICBzZXRQbGF5ZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIxKSB7IFxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyMiA9IG5ldyBQbGF5ZXIoJ3BsYXllcjInLCBkYXRhLmJvYXJkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBib2FyZCA9IHRoaXMuZ2V0UGxheWVyKCkuZ2V0RGlzcGxheSgpO1xuICAgICAgICAgICAgICAgIGJvYXJkLmNyZWF0ZVR1cm5Db3Zlcih0aGlzLmdldFBsYXllcigpXG4gICAgICAgICAgICAgICAgLmdldE5hbWUoKSlcbiAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gYm9hcmQuY2xlYXJUdXJuQ292ZXIoKSk7XG4gICAgICAgICAgICAgICAgYm9hcmQuZGlzcGxheUJvYXJkKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEubXVsdGkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcjEgPSBuZXcgUGxheWVyKCdwbGF5ZXIxJywgZGF0YS5ib2FyZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kQm9hcmQodGhpcy5wbGF5ZXIxKTtcbiAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVBsYXllcigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcjEgPSBuZXcgUGxheWVyKCdwbGF5ZXIxJywgZGF0YS5ib2FyZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kQm9hcmQodGhpcy5wbGF5ZXIxKTtcbiAgICAgICAgICAgICAgICB0aGlzLmR1bW15U2V0UGxheWVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXIoKS5nZXREaXNwbGF5KCkuZGlzcGxheUJvYXJkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRQbGF5ZXIuZGlzcGxheSgpO1xuICAgIH1cblxuICAgIC8vIHRlc3RpbmcgdmFsdWVzXG4gICAgZHVtbXlTZXRQbGF5ZXIoKSB7XG4gICAgICAgIGNvbnN0IGR1bW15MSA9IFtcbiAgICAgICAgICAgIFs1LCAyNSwgdHJ1ZV0sXG4gICAgICAgICAgICBbNCwgODMsIGZhbHNlXSxcbiAgICAgICAgICAgIFszLCAwLCBmYWxzZV0sXG4gICAgICAgICAgICBbMywgNTEsIHRydWVdLFxuICAgICAgICAgICAgWzIsIDQ4LCBmYWxzZV1cbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgZHVtbXkyID0gW1xuICAgICAgICAgICAgWzUsIDk1LCBmYWxzZV0sXG4gICAgICAgICAgICBbNCwgMTYsIGZhbHNlXSxcbiAgICAgICAgICAgIFszLCA1MywgZmFsc2VdLFxuICAgICAgICAgICAgWzMsIDY4LCB0cnVlXSxcbiAgICAgICAgICAgIFsyLCAxMiwgdHJ1ZV1cbiAgICAgICAgXVxuICAgICAgICAvLyB0aGlzLnBsYXllcjEgPSBuZXcgUGxheWVyKCdwbGF5ZXIxJywgZHVtbXkxKTtcbiAgICAgICAgLy8gdGhpcy5iaW5kQm9hcmQodGhpcy5wbGF5ZXIxKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIyID0gbmV3IFBsYXllcigncGxheWVyMicsIGR1bW15Mik7XG4gICAgICAgIHRoaXMuYmluZEJvYXJkKHRoaXMucGxheWVyMilcbiAgICB9XG5cbiAgICAvLyBEZXRlcm1pbmUgdGhlIGFjdGl2ZSBwbGF5ZXJcbiAgICBnZXRQbGF5ZXIoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy50dXJuTnVtYmVyICUgMiA9PT0gMCkgPyB0aGlzLnBsYXllcjEgOiB0aGlzLnBsYXllcjI7IFxuICAgIH1cblxuICAgIC8vIERldGVybWluZSB0aGUgY3VycmVudCBub24gcGxheWVyXG4gICAgZ2V0QWR2ZXJzYXJ5KCkge1xuICAgICAgICByZXR1cm4gKHRoaXMudHVybk51bWJlciAlIDIgPT09IDApID8gdGhpcy5wbGF5ZXIyIDogdGhpcy5wbGF5ZXIxO1xuICAgIH1cblxuICAgIC8vIGJpbmRpbmdzIGZvciBwbGF5IGFyZWFcbiAgICBiaW5kQm9hcmQocGxheWVyKSB7XG4gICAgICAgIGNvbnN0IGRpc3BsYXkgPSBwbGF5ZXIuZ2V0RGlzcGxheSgpO1xuICAgICAgICBjb25zdCBidXR0b24gPSBwbGF5ZXIuZ2V0RGlzcGxheSgpLmdldEJ1dHRvbigpO1xuICAgICAgICBcbiAgICAgICAgLy8gYmluZCBjbGlja2FibGUgY2VsbHNcbiAgICAgICAgZGlzcGxheS5nZXRQbGF5KCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4tY2VsbCcpKSB7IHJldHVybiB9O1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0TW92ZSkgeyBkaXNwbGF5LnRvZ2dsZVNlbGVjdGVkKHRoaXMuc2VsZWN0TW92ZSk7IH1cbiAgICAgICAgICAgIGRpc3BsYXkudG9nZ2xlU2VsZWN0ZWQoZS50YXJnZXQuZGF0YXNldC5pbmRleCk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdE1vdmUgPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC5pbmRleCk7XG4gICAgICAgICAgICBkaXNwbGF5LnNldEJ1dHRvbihlLnRhcmdldC5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gYmluZCBhdHRhY2sgYnV0dG9uXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5LnNldEJ1dHRvbigpO1xuICAgICAgICAgICAgdGhpcy50YWtlVHVybigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBGdW5jdGlvbiBmb3IgYWN0aW9uIGJ1dHRvbiwgdGFrZXMgYSBwbGF5ZXIgc2VsZWN0ZWQgdHVyblxuICAgIHRha2VUdXJuKCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmdldEFkdmVyc2FyeSgpLnRha2VIaXQodGhpcy5zZWxlY3RNb3ZlKTtcbiAgICAgICAgdGhpcy5nZXRQbGF5ZXIoKS5nZXREaXNwbGF5KCkudXBkYXRlUGxheSh0aGlzLnNlbGVjdE1vdmUsIHJlc3VsdCk7XG4gICAgICAgIGlmICh0aGlzLmdldEFkdmVyc2FyeSgpLmlzRGVmZWF0ZWQoKSkgeyBcbiAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVyKClcbiAgICAgICAgICAgICAgICAuZ2V0RGlzcGxheSgpXG4gICAgICAgICAgICAgICAgLmNyZWF0ZUdhbWVPdmVyKCdZT1UgV0lOIScpXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXIoKS5nZXREaXNwbGF5KCkucmVtb3ZlQm9hcmQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEdhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcbiAgICAgICAgICAgIH0pOyBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLm11bHRpcGxheWVyKSB7IHRoaXMuc3dpdGNoVHVybihyZXN1bHQpOyB9XG4gICAgICAgIGVsc2UgeyB0aGlzLmNwdVR1cm4oKTsgfVxuICAgIH1cblxuICAgIC8vIFJlbmRlcnMgbW92ZSB0YWtlbiBvbiBwbGF5ZXIgYW5kIHJlc2V0IHNlbGVjdE1vdmVcbiAgICBzdGFydFR1cm4ocmVzdWx0KSB7XG4gICAgICAgIHRoaXMuZ2V0UGxheWVyKCkuZ2V0RGlzcGxheSgpLnVwZGF0ZVN0YXR1cyh0aGlzLnNlbGVjdE1vdmUsIHJlc3VsdCk7XG4gICAgICAgIHRoaXMuc2VsZWN0TW92ZSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gUHJlcGFyZXMgdGhlIHBsYXkgYXJlYSB0byBleGNoYW5nZSBwbGF5ZXJzXG4gICAgc3dpdGNoVHVybihyZXN1bHQpIHtcbiAgICAgICAgY29uc3QgYm9hcmQgPSB0aGlzLmdldEFkdmVyc2FyeSgpLmdldERpc3BsYXkoKTtcbiAgICAgICAgYm9hcmQuY3JlYXRlVHVybkNvdmVyKHRoaXMuZ2V0QWR2ZXJzYXJ5KClcbiAgICAgICAgLmdldE5hbWUoKSlcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGJvYXJkLmNsZWFyVHVybkNvdmVyKCk7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0VHVybihyZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgYm9hcmQuZGlzcGxheUJvYXJkKCk7XG4gICAgICAgIHRoaXMuZ2V0QWR2ZXJzYXJ5KCkuZ2V0RGlzcGxheSgpLnJlbW92ZUJvYXJkKCk7XG4gICAgICAgIHRoaXMudHVybk51bWJlcisrO1xuICAgIH1cblxuICAgIC8vIFNpbXVsYXRlIGFuIGFkdmVyc2FyeSdzIHR1cm5cbiAgICBjcHVUdXJuKCkge1xuICAgICAgICB0aGlzLnNlbGVjdE1vdmUgPSB0aGlzLmdldFBsYXllcigpLmNwdVR1cm4oKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5nZXRQbGF5ZXIoKS50YWtlSGl0KHRoaXMuc2VsZWN0TW92ZSk7XG4gICAgICAgIGlmICh0aGlzLmdldFBsYXllcigpLmlzRGVmZWF0ZWQoKSkgeyBcbiAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVyKCkuZ2V0RGlzcGxheSgpLmNyZWF0ZUdhbWVPdmVyKCdZT1UgTE9TRSEnKTsgXG4gICAgICAgIH0gZWxzZSB7IHRoaXMuc3RhcnRUdXJuKHJlc3VsdCk7IH1cbiAgICB9XG5cbiAgICAvLyBjbGVhciBhbGwgdmFyaWFibGUgdG8gZGVmYXVsdFxuICAgIHJlc2V0R2FtZSgpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyMSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnBsYXllcjIgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllciA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RNb3ZlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMudHVybk51bWJlciA9IDA7XG4gICAgfVxufVxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7R2FtZUNvbnRyb2x9IGZyb20gJy4vZ2FtZUNvbnRyb2wuanMnO1xuXG5jb25zdCBnYW1lID0gbmV3IEdhbWVDb250cm9sKCk7XG5nYW1lLnN0YXJ0R2FtZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9