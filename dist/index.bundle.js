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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --bg-grid: black;\n    --bg-cell: red;\n    --font-guide-lg: 1.5rem;\n    --font-guide-sm: .7rem;\n    --gap-lg: 3px;\n    --gap-sm: 2px;\n    --button-fg-disable: grey;\n    --button-fg-normal: black;\n    --button-bg-disable: darkgrey;\n    --button-bg-normal: white;\n    --button-font-size: 2rem;\n    --board-hit: darkred;\n    --board-hover: aqua;\n    --board-miss: grey;\n    --board-selected: yellow;\n    --board-ship: green;\n    --side-size: 10;\n}\n\n\nbody, html {\n    margin: 0;\n    height: 100%;\n    width: 100%;\n    /* width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: center; */\n}\n\nbutton {\n    background-color: var(--button-bg-normal);\n    color: var(--button-fg-normal);\n    border: 5px solid var(--button-fg-normal);\n    font-size: var(--button-font-size);\n}\n\nbutton:disabled {\n    background-color: var(--button-bg-disable);\n    color: var(--button-fg-disable);\n    border-color: var(--button-fg-disable);\n}\n\n/* styling for all grid displays */\n.grid-box {\n    background-color: var(--bg-grid);\n    display: grid;\n    grid-template-columns: repeat(var(--side-size), 1fr);\n    gap: var(--gap-lg);\n}\n\n.grid-box > div {\n    user-select: none;\n    background-color: var(--bg-cell);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.guide-top,\n.guide-corner {\n    margin-bottom: calc(var(--gap-lg) * .66);\n}\n\n.guide-left,\n.guide-corner {\n    margin-right: calc(var(--gap-lg) * .66);\n}\n\n.guide-corner {\n    background-color: var(--bg-grid) !important;\n}\n\n/* Styling for all grid icons */\n.ship {\n    background-color: var(--board-ship) !important;\n}\n\n.miss {\n    background-color: var(--board-miss) !important;\n}\n\n.hit {\n    background-color: var(--board-hit) !important;\n}\n\n.selected {\n    background-color: var(--board-selected) !important;\n}\n\n/* Styling for notifications */\n.gameover-container,\n.turn-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n}\n\n.gameover-container {\n    background-color: transparent;\n}\n\n.turn-container {\n    background-color: white;\n}\n\n.gameover-content,\n.turn-content {\n    text-align: center;\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    padding: 2rem;\n}\n\n#main-container {\n    height: 100%;\n    width: 100vw;\n    min-height: 100%;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n/* Styling for set display */\n#set-container {\n    display: flex;\n    flex-direction: column;\n    flex: 0 1 70vh;\n    gap: 1rem;\n    \n}\n\n.set-grid {\n    font-size: var(--font-guide-lg);\n    aspect-ratio: 1 / 1;\n    gap: var(--gap-lg);\n    min-height: 0;\n}\n\n.set-tray {\n    background-color: lightgrey;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n\n}\n\n.tray-item {\n    display: flex;\n    justify-content:left;\n    align-items: center;\n    padding: 1rem;\n}\n\n.icon-piece {\n    border: var(--gap-sm) solid black;\n    background-color: black;\n    display: flex;\n    gap: var(--gap-sm);\n}\n\n.icon-cell {\n    background-color: var(--bg-cell);\n    aspect-ratio: 1 / 1;\n}\n\n/* Styling for play displays */\n.play-container {\n    margin: 0 .5rem;\n    width: 100%;\n    height: min-content;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr;\n    position: relative;\n    gap: 1rem;\n}\n\n.play-status {\n    grid-row: 1 / 2;\n    font-size: var(--font-guide-sm);\n    aspect-ratio: 1 / 1;\n    width: 50%;\n    gap: var(--gap-sm);\n}\n\n.play-status .guide-left {\n    margin-right: calc(var(--gap-sm) * .66);\n}\n\n.play-status .guide-top {\n    margin-bottom: calc(var(--gap-sm) * .66);\n}\n\n.play-area {\n    font-size: var(--font-guide-lg);\n    aspect-ratio: 1 / 1;\n    width: 100%;\n    gap: var(--gap-lg);\n}\n\n.play-area > .open-cell:hover {\n    background-color: var(--board-hover) !important;\n}\n\n.play-button {\n    width: 100%;\n}\n\n/* Styling for wide views of play display  */\n@media (min-width: 570px) {\n    .play-container {\n        max-width: 1000px;\n        display: grid;\n        grid-template-columns: 2fr 1fr;\n        grid-template-rows: 1fr;\n    }\n\n    .play-area {\n        grid-row: 1 / 3;\n        grid-column: 1 / 2;\n    }\n\n    .play-status {\n        grid-row: 1 / 2;\n        grid-column: 2 / 3;\n        width: 100%;\n    }\n\n    .play-button {\n        grid-row: 3 / 4;\n        grid-column: 1 / 2;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,cAAc;IACd,uBAAuB;IACvB,sBAAsB;IACtB,aAAa;IACb,aAAa;IACb,yBAAyB;IACzB,yBAAyB;IACzB,6BAA6B;IAC7B,yBAAyB;IACzB,wBAAwB;IACxB,oBAAoB;IACpB,mBAAmB;IACnB,kBAAkB;IAClB,wBAAwB;IACxB,mBAAmB;IACnB,eAAe;AACnB;;;AAGA;IACI,SAAS;IACT,YAAY;IACZ,WAAW;IACX;;;0BAGsB;AAC1B;;AAEA;IACI,yCAAyC;IACzC,8BAA8B;IAC9B,yCAAyC;IACzC,kCAAkC;AACtC;;AAEA;IACI,0CAA0C;IAC1C,+BAA+B;IAC/B,sCAAsC;AAC1C;;AAEA,kCAAkC;AAClC;IACI,gCAAgC;IAChC,aAAa;IACb,oDAAoD;IACpD,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,gCAAgC;IAChC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;;IAEI,wCAAwC;AAC5C;;AAEA;;IAEI,uCAAuC;AAC3C;;AAEA;IACI,2CAA2C;AAC/C;;AAEA,+BAA+B;AAC/B;IACI,8CAA8C;AAClD;;AAEA;IACI,8CAA8C;AAClD;;AAEA;IACI,6CAA6C;AACjD;;AAEA;IACI,kDAAkD;AACtD;;AAEA,8BAA8B;AAC9B;;IAEI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;;IAEI,kBAAkB;IAClB,uBAAuB;IACvB,aAAa;IACb,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,gBAAgB;IAChB,sBAAsB;IACtB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA,4BAA4B;AAC5B;IACI,aAAa;IACb,sBAAsB;IACtB,cAAc;IACd,SAAS;;AAEb;;AAEA;IACI,+BAA+B;IAC/B,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,2BAA2B;IAC3B,aAAa;IACb,8BAA8B;;AAElC;;AAEA;IACI,aAAa;IACb,oBAAoB;IACpB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,iCAAiC;IACjC,uBAAuB;IACvB,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,gCAAgC;IAChC,mBAAmB;AACvB;;AAEA,8BAA8B;AAC9B;IACI,eAAe;IACf,WAAW;IACX,mBAAmB;IACnB,aAAa;IACb,0BAA0B;IAC1B,uBAAuB;IACvB,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,eAAe;IACf,+BAA+B;IAC/B,mBAAmB;IACnB,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,+BAA+B;IAC/B,mBAAmB;IACnB,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,+CAA+C;AACnD;;AAEA;IACI,WAAW;AACf;;AAEA,4CAA4C;AAC5C;IACI;QACI,iBAAiB;QACjB,aAAa;QACb,8BAA8B;QAC9B,uBAAuB;IAC3B;;IAEA;QACI,eAAe;QACf,kBAAkB;IACtB;;IAEA;QACI,eAAe;QACf,kBAAkB;QAClB,WAAW;IACf;;IAEA;QACI,eAAe;QACf,kBAAkB;IACtB;AACJ","sourcesContent":[":root {\n    --bg-grid: black;\n    --bg-cell: red;\n    --font-guide-lg: 1.5rem;\n    --font-guide-sm: .7rem;\n    --gap-lg: 3px;\n    --gap-sm: 2px;\n    --button-fg-disable: grey;\n    --button-fg-normal: black;\n    --button-bg-disable: darkgrey;\n    --button-bg-normal: white;\n    --button-font-size: 2rem;\n    --board-hit: darkred;\n    --board-hover: aqua;\n    --board-miss: grey;\n    --board-selected: yellow;\n    --board-ship: green;\n    --side-size: 10;\n}\n\n\nbody, html {\n    margin: 0;\n    height: 100%;\n    width: 100%;\n    /* width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: center; */\n}\n\nbutton {\n    background-color: var(--button-bg-normal);\n    color: var(--button-fg-normal);\n    border: 5px solid var(--button-fg-normal);\n    font-size: var(--button-font-size);\n}\n\nbutton:disabled {\n    background-color: var(--button-bg-disable);\n    color: var(--button-fg-disable);\n    border-color: var(--button-fg-disable);\n}\n\n/* styling for all grid displays */\n.grid-box {\n    background-color: var(--bg-grid);\n    display: grid;\n    grid-template-columns: repeat(var(--side-size), 1fr);\n    gap: var(--gap-lg);\n}\n\n.grid-box > div {\n    user-select: none;\n    background-color: var(--bg-cell);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.guide-top,\n.guide-corner {\n    margin-bottom: calc(var(--gap-lg) * .66);\n}\n\n.guide-left,\n.guide-corner {\n    margin-right: calc(var(--gap-lg) * .66);\n}\n\n.guide-corner {\n    background-color: var(--bg-grid) !important;\n}\n\n/* Styling for all grid icons */\n.ship {\n    background-color: var(--board-ship) !important;\n}\n\n.miss {\n    background-color: var(--board-miss) !important;\n}\n\n.hit {\n    background-color: var(--board-hit) !important;\n}\n\n.selected {\n    background-color: var(--board-selected) !important;\n}\n\n/* Styling for notifications */\n.gameover-container,\n.turn-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n}\n\n.gameover-container {\n    background-color: transparent;\n}\n\n.turn-container {\n    background-color: white;\n}\n\n.gameover-content,\n.turn-content {\n    text-align: center;\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    padding: 2rem;\n}\n\n#main-container {\n    height: 100%;\n    width: 100vw;\n    min-height: 100%;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n/* Styling for set display */\n#set-container {\n    display: flex;\n    flex-direction: column;\n    flex: 0 1 70vh;\n    gap: 1rem;\n    \n}\n\n.set-grid {\n    font-size: var(--font-guide-lg);\n    aspect-ratio: 1 / 1;\n    gap: var(--gap-lg);\n    min-height: 0;\n}\n\n.set-tray {\n    background-color: lightgrey;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n\n}\n\n.tray-item {\n    display: flex;\n    justify-content:left;\n    align-items: center;\n    padding: 1rem;\n}\n\n.icon-piece {\n    border: var(--gap-sm) solid black;\n    background-color: black;\n    display: flex;\n    gap: var(--gap-sm);\n}\n\n.icon-cell {\n    background-color: var(--bg-cell);\n    aspect-ratio: 1 / 1;\n}\n\n/* Styling for play displays */\n.play-container {\n    margin: 0 .5rem;\n    width: 100%;\n    height: min-content;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr;\n    position: relative;\n    gap: 1rem;\n}\n\n.play-status {\n    grid-row: 1 / 2;\n    font-size: var(--font-guide-sm);\n    aspect-ratio: 1 / 1;\n    width: 50%;\n    gap: var(--gap-sm);\n}\n\n.play-status .guide-left {\n    margin-right: calc(var(--gap-sm) * .66);\n}\n\n.play-status .guide-top {\n    margin-bottom: calc(var(--gap-sm) * .66);\n}\n\n.play-area {\n    font-size: var(--font-guide-lg);\n    aspect-ratio: 1 / 1;\n    width: 100%;\n    gap: var(--gap-lg);\n}\n\n.play-area > .open-cell:hover {\n    background-color: var(--board-hover) !important;\n}\n\n.play-button {\n    width: 100%;\n}\n\n/* Styling for wide views of play display  */\n@media (min-width: 570px) {\n    .play-container {\n        max-width: 1000px;\n        display: grid;\n        grid-template-columns: 2fr 1fr;\n        grid-template-rows: 1fr;\n    }\n\n    .play-area {\n        grid-row: 1 / 3;\n        grid-column: 1 / 2;\n    }\n\n    .play-status {\n        grid-row: 1 / 2;\n        grid-column: 2 / 3;\n        width: 100%;\n    }\n\n    .play-button {\n        grid-row: 3 / 4;\n        grid-column: 1 / 2;\n    }\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "SetPlayer": () => (/* binding */ SetPlayer),
/* harmony export */   "initializeDOM": () => (/* binding */ initializeDOM)
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

function initializeDOM() {
    const container = makeElement('div', { id: 'main-container' });
    const setPlayer = new SetPlayer(10, [5, 4, 3, 3, 2]);
    document.body.appendChild(container);
    setPlayer.display();
}

// Display for initialziing a player
class SetPlayer {
    constructor(size, pieces) {
        this.SIZE = size;
        this.container = makeElement('div', { id: 'set-container' });
        this.container.appendChild(buildGrid(size, 'set-grid'));
        this.container.appendChild(this.makeTray(pieces));
    }

    getContainer() { return this.container; }
    getGrid() { return this.getContainer().querySelector('.set-grid'); }
    getTray() { return this.getContainer().querySelector('.set-tray'); }

    display() { 
        document.querySelector('#main-container').appendChild(this.getContainer()); 
        this.setTrayIconSize()
        window.onresize = function() {
            const height = document.querySelector('.set-grid').children.item(11).clientHeight;
            document.querySelectorAll('.icon-cell').forEach(cell => {
                cell.style.height = `${height}px`;
            })
        }
    }
    remove() { document.querySelector('#set-container').remove(); }

    setTrayIconSize() {
        const height = this.getGrid().children.item(adjustToIndex(0, this.SIZE)).clientHeight;
        document.querySelectorAll('.icon-cell').forEach(cell => {
            cell.style.height = `${height}px`;
        })
    }

    makeTray(pieces) {
        const tray = makeElement('div', { class: 'set-tray' });
        for (let i = 0, j = Math.floor((pieces.length) / 2); j < pieces.length; i++, j++) {
            if (i < Math.floor(pieces.length) / 2) { 
                tray.appendChild(this.makeTrayItem(pieces[i]));
            }
            tray.appendChild(this.makeTrayItem(pieces[j]));
        }
        return tray;
    }

    makeTrayItem(piece) {
        const item = makeElement('div', { id: 'test', class: 'tray-item' })
        item.appendChild(this.makePieceIcon(piece));
        return item;
    }

    makePieceIcon(size) {
        const icon = makeElement('div', { class: 'icon-piece' });
        for (let i = 0; i < size; i++) {
            const cell = makeElement('div', { class: 'icon-cell' });

            // cell.style.height = '50px'
            // console.log(this.getGrid().children.item(adjustToIndex(0, this.SIZE)));
            // cell.addEventListener('')
            // cell.style.height = `${this.getGrid().children.item(adjustToIndex(0, this.SIZE)).clientHeight}px`;
            icon.appendChild(cell);
        }
        return icon;
    }

}

// Display for the general play area
class PlayBoard {
    constructor(size, allShips) {
        this.SIZE = size;
        this.container = makeElement('div', { class: 'play-container' });
        this.container.appendChild(buildGrid(size, 'play-area'));
        this.container.appendChild(buildGrid(size, 'play-status'))
        this.container.appendChild(makeElement('button', { class: 'play-button', disabled: 'true' }, 'SELECT TARGET'));
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

    displayBoard() { document.body.appendChild(this.getContainer()); }
    removeBoard() { document.querySelector('.play-container').remove(); }

    // set the display's button text and disabled status
    setButton(index) {
        this.getButton().disabled = (index) ? false : true;
        this.getButton().innerHTML = (index) ? `ATTACK ${this.getGuideIndex(index)}` : `SELECT TARGET`; 
    };

    // switches a cell from open to selected
    toggleSelected(index) {
        const cell = this.getPlay().children.item(adjustToIndex(index, this.SIZE));
        cell.classList.toggle('open-cell');
        cell.classList.toggle('selected');
    }

    // set class for cell in the play grid
    updatePlay(index, toUpdate) {
        const cell = this.getPlay().children.item(adjustToIndex(index, this.SIZE));
        cell.classList.remove('selected');
        cell.classList.add(toUpdate);
    }

    // set class for cell in the status grid
    updateStatus(index, toUpdate) {
        const cell = this.getStatus().children.item(adjustToIndex(index, this.SIZE));
        cell.classList.add(toUpdate);
    }

    // display a privacy cover on turn switch-offs, takes a string for player's name, returns button
    createTurnCover(player) {
        const container = makeElement('div', { class: 'turn-container' });
        const content = makeElement('div', { class: 'turn-content' });
        const button = makeElement('button', { class: 'turn-button' }, 'READY');
        content.appendChild(makeElement('h1', {}, `${player.toUpperCase()}'s`));
        content.appendChild(makeElement('h1', {}, 'TURN'));
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
        const container = makeElement('div', { class: 'gameover-container' });
        const content = makeElement('div', { class: 'gameover-content' });
        const button = makeElement('button', { class: 'gameover-button' }, 'PLAY AGAIN?')
        content.appendChild(makeElement('h1', {}, result));
        content.appendChild(button);
        container.appendChild(content);
        this.getContainer().appendChild(container);
        return button;
    }
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
        else { gridBox.appendChild(makeElement('div', { class: 'open-cell', 'data-index': cellIndex++ })) };
    }

    // Find a better home for this
    document.querySelector(':root').style.setProperty('--side-size', sideSize + 1);
    
    return gridBox;
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
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player.js */ "./src/Player.js");



class GameControl {
    constructor() {
        this.SIZE = 10;
        this.player1;
        this.player2;
        this.multiplayer = false;
        this.selectMove = null;
        this.turnNumber = 0;
    }

    // begin the gameloop
    startGame() {
        (0,_DOMControl_js__WEBPACK_IMPORTED_MODULE_0__.initializeDOM)();

        // this.dummySetPlayer();
        // const board = this.getPlayer().getDisplay();
        // if (this.multiplayer) {
        //     board.createTurnCover(this.getPlayer()
        //         .getName())
        //         .addEventListener('click', (e) => board.clearTurnCover());
        // };
        // board.displayBoard();
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
        this.player1 = new _Player_js__WEBPACK_IMPORTED_MODULE_1__.Player('player1', dummy1);
        this.bindBoard(this.player1);
        this.player2 = new _Player_js__WEBPACK_IMPORTED_MODULE_1__.Player('player2', dummy2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxpREFBaUQsdUJBQXVCLHFCQUFxQiw4QkFBOEIsNkJBQTZCLG9CQUFvQixvQkFBb0IsZ0NBQWdDLGdDQUFnQyxvQ0FBb0MsZ0NBQWdDLCtCQUErQiwyQkFBMkIsMEJBQTBCLHlCQUF5QiwrQkFBK0IsMEJBQTBCLHNCQUFzQixHQUFHLGtCQUFrQixnQkFBZ0IsbUJBQW1CLGtCQUFrQixzQkFBc0Isb0JBQW9CLDhCQUE4QiwyQkFBMkIsS0FBSyxZQUFZLGdEQUFnRCxxQ0FBcUMsZ0RBQWdELHlDQUF5QyxHQUFHLHFCQUFxQixpREFBaUQsc0NBQXNDLDZDQUE2QyxHQUFHLG9EQUFvRCx1Q0FBdUMsb0JBQW9CLDJEQUEyRCx5QkFBeUIsR0FBRyxxQkFBcUIsd0JBQXdCLHVDQUF1QyxvQkFBb0IsOEJBQThCLDBCQUEwQixHQUFHLGdDQUFnQywrQ0FBK0MsR0FBRyxpQ0FBaUMsOENBQThDLEdBQUcsbUJBQW1CLGtEQUFrRCxHQUFHLDZDQUE2QyxxREFBcUQsR0FBRyxXQUFXLHFEQUFxRCxHQUFHLFVBQVUsb0RBQW9ELEdBQUcsZUFBZSx5REFBeUQsR0FBRyw0RUFBNEUsb0JBQW9CLDhCQUE4QiwwQkFBMEIseUJBQXlCLGtCQUFrQixtQkFBbUIsR0FBRyx5QkFBeUIsb0NBQW9DLEdBQUcscUJBQXFCLDhCQUE4QixHQUFHLHVDQUF1Qyx5QkFBeUIsOEJBQThCLG9CQUFvQiw2QkFBNkIsb0JBQW9CLEdBQUcscUJBQXFCLG1CQUFtQixtQkFBbUIsdUJBQXVCLDZCQUE2QixvQkFBb0IsOEJBQThCLDBCQUEwQixHQUFHLG1EQUFtRCxvQkFBb0IsNkJBQTZCLHFCQUFxQixnQkFBZ0IsU0FBUyxlQUFlLHNDQUFzQywwQkFBMEIseUJBQXlCLG9CQUFvQixHQUFHLGVBQWUsa0NBQWtDLG9CQUFvQixxQ0FBcUMsS0FBSyxnQkFBZ0Isb0JBQW9CLDJCQUEyQiwwQkFBMEIsb0JBQW9CLEdBQUcsaUJBQWlCLHdDQUF3Qyw4QkFBOEIsb0JBQW9CLHlCQUF5QixHQUFHLGdCQUFnQix1Q0FBdUMsMEJBQTBCLEdBQUcsc0RBQXNELHNCQUFzQixrQkFBa0IsMEJBQTBCLG9CQUFvQixpQ0FBaUMsOEJBQThCLHlCQUF5QixnQkFBZ0IsR0FBRyxrQkFBa0Isc0JBQXNCLHNDQUFzQywwQkFBMEIsaUJBQWlCLHlCQUF5QixHQUFHLDhCQUE4Qiw4Q0FBOEMsR0FBRyw2QkFBNkIsK0NBQStDLEdBQUcsZ0JBQWdCLHNDQUFzQywwQkFBMEIsa0JBQWtCLHlCQUF5QixHQUFHLG1DQUFtQyxzREFBc0QsR0FBRyxrQkFBa0Isa0JBQWtCLEdBQUcsOEVBQThFLHVCQUF1Qiw0QkFBNEIsd0JBQXdCLHlDQUF5QyxrQ0FBa0MsT0FBTyxvQkFBb0IsMEJBQTBCLDZCQUE2QixPQUFPLHNCQUFzQiwwQkFBMEIsNkJBQTZCLHNCQUFzQixPQUFPLHNCQUFzQiwwQkFBMEIsNkJBQTZCLE9BQU8sR0FBRyxTQUFTLGdGQUFnRixZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsUUFBUSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sT0FBTyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE9BQU8sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sZ0NBQWdDLHVCQUF1QixxQkFBcUIsOEJBQThCLDZCQUE2QixvQkFBb0Isb0JBQW9CLGdDQUFnQyxnQ0FBZ0Msb0NBQW9DLGdDQUFnQywrQkFBK0IsMkJBQTJCLDBCQUEwQix5QkFBeUIsK0JBQStCLDBCQUEwQixzQkFBc0IsR0FBRyxrQkFBa0IsZ0JBQWdCLG1CQUFtQixrQkFBa0Isc0JBQXNCLG9CQUFvQiw4QkFBOEIsMkJBQTJCLEtBQUssWUFBWSxnREFBZ0QscUNBQXFDLGdEQUFnRCx5Q0FBeUMsR0FBRyxxQkFBcUIsaURBQWlELHNDQUFzQyw2Q0FBNkMsR0FBRyxvREFBb0QsdUNBQXVDLG9CQUFvQiwyREFBMkQseUJBQXlCLEdBQUcscUJBQXFCLHdCQUF3Qix1Q0FBdUMsb0JBQW9CLDhCQUE4QiwwQkFBMEIsR0FBRyxnQ0FBZ0MsK0NBQStDLEdBQUcsaUNBQWlDLDhDQUE4QyxHQUFHLG1CQUFtQixrREFBa0QsR0FBRyw2Q0FBNkMscURBQXFELEdBQUcsV0FBVyxxREFBcUQsR0FBRyxVQUFVLG9EQUFvRCxHQUFHLGVBQWUseURBQXlELEdBQUcsNEVBQTRFLG9CQUFvQiw4QkFBOEIsMEJBQTBCLHlCQUF5QixrQkFBa0IsbUJBQW1CLEdBQUcseUJBQXlCLG9DQUFvQyxHQUFHLHFCQUFxQiw4QkFBOEIsR0FBRyx1Q0FBdUMseUJBQXlCLDhCQUE4QixvQkFBb0IsNkJBQTZCLG9CQUFvQixHQUFHLHFCQUFxQixtQkFBbUIsbUJBQW1CLHVCQUF1Qiw2QkFBNkIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsR0FBRyxtREFBbUQsb0JBQW9CLDZCQUE2QixxQkFBcUIsZ0JBQWdCLFNBQVMsZUFBZSxzQ0FBc0MsMEJBQTBCLHlCQUF5QixvQkFBb0IsR0FBRyxlQUFlLGtDQUFrQyxvQkFBb0IscUNBQXFDLEtBQUssZ0JBQWdCLG9CQUFvQiwyQkFBMkIsMEJBQTBCLG9CQUFvQixHQUFHLGlCQUFpQix3Q0FBd0MsOEJBQThCLG9CQUFvQix5QkFBeUIsR0FBRyxnQkFBZ0IsdUNBQXVDLDBCQUEwQixHQUFHLHNEQUFzRCxzQkFBc0Isa0JBQWtCLDBCQUEwQixvQkFBb0IsaUNBQWlDLDhCQUE4Qix5QkFBeUIsZ0JBQWdCLEdBQUcsa0JBQWtCLHNCQUFzQixzQ0FBc0MsMEJBQTBCLGlCQUFpQix5QkFBeUIsR0FBRyw4QkFBOEIsOENBQThDLEdBQUcsNkJBQTZCLCtDQUErQyxHQUFHLGdCQUFnQixzQ0FBc0MsMEJBQTBCLGtCQUFrQix5QkFBeUIsR0FBRyxtQ0FBbUMsc0RBQXNELEdBQUcsa0JBQWtCLGtCQUFrQixHQUFHLDhFQUE4RSx1QkFBdUIsNEJBQTRCLHdCQUF3Qix5Q0FBeUMsa0NBQWtDLE9BQU8sb0JBQW9CLDBCQUEwQiw2QkFBNkIsT0FBTyxzQkFBc0IsMEJBQTBCLDZCQUE2QixzQkFBc0IsT0FBTyxzQkFBc0IsMEJBQTBCLDZCQUE2QixPQUFPLEdBQUcscUJBQXFCO0FBQzlpVztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0Esa0NBQWtDLHdCQUF3QixJQUFJLE1BQU0sZ0JBQWdCO0FBQ3BGLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLDJDQUEyQyxzQkFBc0I7QUFDakU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQSw4Q0FBOEMscUJBQXFCO0FBQ25FO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUI7QUFDckIsZ0JBQWdCO0FBQ2hCLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLE9BQU87QUFDOUMsYUFBYTtBQUNiO0FBQ0E7QUFDQSxlQUFlOztBQUVmO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDLFNBQVM7QUFDVDs7QUFFQTtBQUNBLDBDQUEwQyxtQkFBbUI7QUFDN0QsNkRBQTZELG1CQUFtQjtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDLHFCQUFxQjtBQUMvRCx3QkFBd0IsVUFBVTtBQUNsQyw4Q0FBOEMsb0JBQW9COztBQUVsRTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsdUVBQXVFO0FBQzdHO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0EsOENBQThDLHlCQUF5QjtBQUN2RTtBQUNBO0FBQ0EsMkRBQTJELHdDQUF3QztBQUNuRztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsMkJBQTJCOztBQUUzQixxQkFBcUI7QUFDckIsb0JBQW9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsMEJBQTBCO0FBQ25GOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0NBQStDLHlCQUF5QjtBQUN4RSw2Q0FBNkMsdUJBQXVCO0FBQ3BFLCtDQUErQyxzQkFBc0I7QUFDckUsZ0RBQWdELEtBQUsscUJBQXFCO0FBQzFFLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0NBQStDLDZCQUE2QjtBQUM1RSw2Q0FBNkMsMkJBQTJCO0FBQ3hFLCtDQUErQywwQkFBMEI7QUFDekUsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsbUJBQW1CO0FBQzVELG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5Qix1QkFBdUIseUNBQXlDLHVCQUF1QjtBQUN2RixrQ0FBa0MseUNBQXlDLG9CQUFvQjtBQUMvRiw2Q0FBNkMseUNBQXlDLG9CQUFvQjtBQUMxRyxlQUFlLHlDQUF5QywrQ0FBK0M7QUFDdkc7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6TGlDOztBQUUxQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6Qyw2QkFBNkIsdUJBQXVCO0FBQ3BEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvQkFBb0I7QUFDNUM7QUFDQTs7QUFFQSw0QkFBNEIsMENBQUk7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLHdDQUF3QztBQUN4Qyx1REFBdUQsb0RBQW9ELHNCQUFzQjtBQUNqSSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQsU0FBUztBQUNUO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25Hd0M7QUFDQztBQUN6QztBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixpREFBUztBQUNsQztBQUNBO0FBQ0EsMkJBQTJCLGtEQUFTO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7O0FBRU87QUFDUDtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLHlCQUF5QjtBQUN6Qix1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBOztBQUVBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCZ0Q7QUFDWDs7QUFFOUI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLDZEQUFhOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsOENBQU07QUFDakM7QUFDQSwyQkFBMkIsOENBQU07QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RCxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxxQ0FBcUM7QUFDckMsZUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLE9BQU87QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3ZJQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN3Qjs7QUFFN0MsaUJBQWlCLHdEQUFXO0FBQzVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9ET01Db250cm9sLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL1BsYXllci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvU2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZUNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWJnLWdyaWQ6IGJsYWNrO1xcbiAgICAtLWJnLWNlbGw6IHJlZDtcXG4gICAgLS1mb250LWd1aWRlLWxnOiAxLjVyZW07XFxuICAgIC0tZm9udC1ndWlkZS1zbTogLjdyZW07XFxuICAgIC0tZ2FwLWxnOiAzcHg7XFxuICAgIC0tZ2FwLXNtOiAycHg7XFxuICAgIC0tYnV0dG9uLWZnLWRpc2FibGU6IGdyZXk7XFxuICAgIC0tYnV0dG9uLWZnLW5vcm1hbDogYmxhY2s7XFxuICAgIC0tYnV0dG9uLWJnLWRpc2FibGU6IGRhcmtncmV5O1xcbiAgICAtLWJ1dHRvbi1iZy1ub3JtYWw6IHdoaXRlO1xcbiAgICAtLWJ1dHRvbi1mb250LXNpemU6IDJyZW07XFxuICAgIC0tYm9hcmQtaGl0OiBkYXJrcmVkO1xcbiAgICAtLWJvYXJkLWhvdmVyOiBhcXVhO1xcbiAgICAtLWJvYXJkLW1pc3M6IGdyZXk7XFxuICAgIC0tYm9hcmQtc2VsZWN0ZWQ6IHllbGxvdztcXG4gICAgLS1ib2FyZC1zaGlwOiBncmVlbjtcXG4gICAgLS1zaWRlLXNpemU6IDEwO1xcbn1cXG5cXG5cXG5ib2R5LCBodG1sIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmctbm9ybWFsKTtcXG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1mZy1ub3JtYWwpO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1idXR0b24tZmctbm9ybWFsKTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1idXR0b24tZm9udC1zaXplKTtcXG59XFxuXFxuYnV0dG9uOmRpc2FibGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJnLWRpc2FibGUpO1xcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWZnLWRpc2FibGUpO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1mZy1kaXNhYmxlKTtcXG59XFxuXFxuLyogc3R5bGluZyBmb3IgYWxsIGdyaWQgZGlzcGxheXMgKi9cXG4uZ3JpZC1ib3gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1ncmlkKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tc2lkZS1zaXplKSwgMWZyKTtcXG4gICAgZ2FwOiB2YXIoLS1nYXAtbGcpO1xcbn1cXG5cXG4uZ3JpZC1ib3ggPiBkaXYge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY2VsbCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ3VpZGUtdG9wLFxcbi5ndWlkZS1jb3JuZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLWdhcC1sZykgKiAuNjYpO1xcbn1cXG5cXG4uZ3VpZGUtbGVmdCxcXG4uZ3VpZGUtY29ybmVyIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLWdhcC1sZykgKiAuNjYpO1xcbn1cXG5cXG4uZ3VpZGUtY29ybmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctZ3JpZCkgIWltcG9ydGFudDtcXG59XFxuXFxuLyogU3R5bGluZyBmb3IgYWxsIGdyaWQgaWNvbnMgKi9cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLXNoaXApICFpbXBvcnRhbnQ7XFxufVxcblxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtbWlzcykgIWltcG9ydGFudDtcXG59XFxuXFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWhpdCkgIWltcG9ydGFudDtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtc2VsZWN0ZWQpICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIG5vdGlmaWNhdGlvbnMgKi9cXG4uZ2FtZW92ZXItY29udGFpbmVyLFxcbi50dXJuLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5nYW1lb3Zlci1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnR1cm4tY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5nYW1lb3Zlci1jb250ZW50LFxcbi50dXJuLWNvbnRlbnQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4jbWFpbi1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIHNldCBkaXNwbGF5ICovXFxuI3NldC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OiAwIDEgNzB2aDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBcXG59XFxuXFxuLnNldC1ncmlkIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LWd1aWRlLWxnKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gICAgZ2FwOiB2YXIoLS1nYXAtbGcpO1xcbiAgICBtaW4taGVpZ2h0OiAwO1xcbn1cXG5cXG4uc2V0LXRyYXkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG5cXG59XFxuXFxuLnRyYXktaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDpsZWZ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uaWNvbi1waWVjZSB7XFxuICAgIGJvcmRlcjogdmFyKC0tZ2FwLXNtKSBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogdmFyKC0tZ2FwLXNtKTtcXG59XFxuXFxuLmljb24tY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNlbGwpO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciBwbGF5IGRpc3BsYXlzICovXFxuLnBsYXktY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAwIC41cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnBsYXktc3RhdHVzIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtZ3VpZGUtc20pO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBnYXA6IHZhcigtLWdhcC1zbSk7XFxufVxcblxcbi5wbGF5LXN0YXR1cyAuZ3VpZGUtbGVmdCB7XFxuICAgIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1nYXAtc20pICogLjY2KTtcXG59XFxuXFxuLnBsYXktc3RhdHVzIC5ndWlkZS10b3Age1xcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLWdhcC1zbSkgKiAuNjYpO1xcbn1cXG5cXG4ucGxheS1hcmVhIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LWd1aWRlLWxnKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogdmFyKC0tZ2FwLWxnKTtcXG59XFxuXFxuLnBsYXktYXJlYSA+IC5vcGVuLWNlbGw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1ob3ZlcikgIWltcG9ydGFudDtcXG59XFxuXFxuLnBsYXktYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIHdpZGUgdmlld3Mgb2YgcGxheSBkaXNwbGF5ICAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA1NzBweCkge1xcbiAgICAucGxheS1jb250YWluZXIge1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIH1cXG5cXG4gICAgLnBsYXktYXJlYSB7XFxuICAgICAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIH1cXG5cXG4gICAgLnBsYXktc3RhdHVzIHtcXG4gICAgICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC5wbGF5LWJ1dHRvbiB7XFxuICAgICAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsYUFBYTtJQUNiLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COzs7QUFHQTtJQUNJLFNBQVM7SUFDVCxZQUFZO0lBQ1osV0FBVztJQUNYOzs7MEJBR3NCO0FBQzFCOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLDhCQUE4QjtJQUM5Qix5Q0FBeUM7SUFDekMsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLCtCQUErQjtJQUMvQixzQ0FBc0M7QUFDMUM7O0FBRUEsa0NBQWtDO0FBQ2xDO0lBQ0ksZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixvREFBb0Q7SUFDcEQsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSx3Q0FBd0M7QUFDNUM7O0FBRUE7O0lBRUksdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksMkNBQTJDO0FBQy9DOztBQUVBLCtCQUErQjtBQUMvQjtJQUNJLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLGtEQUFrRDtBQUN0RDs7QUFFQSw4QkFBOEI7QUFDOUI7O0lBRUksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBLDRCQUE0QjtBQUM1QjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLFNBQVM7O0FBRWI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGFBQWE7SUFDYiw4QkFBOEI7O0FBRWxDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxtQkFBbUI7QUFDdkI7O0FBRUEsOEJBQThCO0FBQzlCO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7SUFDZiwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwrQ0FBK0M7QUFDbkQ7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUEsNENBQTRDO0FBQzVDO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsYUFBYTtRQUNiLDhCQUE4QjtRQUM5Qix1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO0lBQ3RCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWJnLWdyaWQ6IGJsYWNrO1xcbiAgICAtLWJnLWNlbGw6IHJlZDtcXG4gICAgLS1mb250LWd1aWRlLWxnOiAxLjVyZW07XFxuICAgIC0tZm9udC1ndWlkZS1zbTogLjdyZW07XFxuICAgIC0tZ2FwLWxnOiAzcHg7XFxuICAgIC0tZ2FwLXNtOiAycHg7XFxuICAgIC0tYnV0dG9uLWZnLWRpc2FibGU6IGdyZXk7XFxuICAgIC0tYnV0dG9uLWZnLW5vcm1hbDogYmxhY2s7XFxuICAgIC0tYnV0dG9uLWJnLWRpc2FibGU6IGRhcmtncmV5O1xcbiAgICAtLWJ1dHRvbi1iZy1ub3JtYWw6IHdoaXRlO1xcbiAgICAtLWJ1dHRvbi1mb250LXNpemU6IDJyZW07XFxuICAgIC0tYm9hcmQtaGl0OiBkYXJrcmVkO1xcbiAgICAtLWJvYXJkLWhvdmVyOiBhcXVhO1xcbiAgICAtLWJvYXJkLW1pc3M6IGdyZXk7XFxuICAgIC0tYm9hcmQtc2VsZWN0ZWQ6IHllbGxvdztcXG4gICAgLS1ib2FyZC1zaGlwOiBncmVlbjtcXG4gICAgLS1zaWRlLXNpemU6IDEwO1xcbn1cXG5cXG5cXG5ib2R5LCBodG1sIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmctbm9ybWFsKTtcXG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1mZy1ub3JtYWwpO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1idXR0b24tZmctbm9ybWFsKTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1idXR0b24tZm9udC1zaXplKTtcXG59XFxuXFxuYnV0dG9uOmRpc2FibGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJnLWRpc2FibGUpO1xcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWZnLWRpc2FibGUpO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1mZy1kaXNhYmxlKTtcXG59XFxuXFxuLyogc3R5bGluZyBmb3IgYWxsIGdyaWQgZGlzcGxheXMgKi9cXG4uZ3JpZC1ib3gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1ncmlkKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tc2lkZS1zaXplKSwgMWZyKTtcXG4gICAgZ2FwOiB2YXIoLS1nYXAtbGcpO1xcbn1cXG5cXG4uZ3JpZC1ib3ggPiBkaXYge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY2VsbCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ3VpZGUtdG9wLFxcbi5ndWlkZS1jb3JuZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLWdhcC1sZykgKiAuNjYpO1xcbn1cXG5cXG4uZ3VpZGUtbGVmdCxcXG4uZ3VpZGUtY29ybmVyIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLWdhcC1sZykgKiAuNjYpO1xcbn1cXG5cXG4uZ3VpZGUtY29ybmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctZ3JpZCkgIWltcG9ydGFudDtcXG59XFxuXFxuLyogU3R5bGluZyBmb3IgYWxsIGdyaWQgaWNvbnMgKi9cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLXNoaXApICFpbXBvcnRhbnQ7XFxufVxcblxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtbWlzcykgIWltcG9ydGFudDtcXG59XFxuXFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWhpdCkgIWltcG9ydGFudDtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtc2VsZWN0ZWQpICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIG5vdGlmaWNhdGlvbnMgKi9cXG4uZ2FtZW92ZXItY29udGFpbmVyLFxcbi50dXJuLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5nYW1lb3Zlci1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnR1cm4tY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5nYW1lb3Zlci1jb250ZW50LFxcbi50dXJuLWNvbnRlbnQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4jbWFpbi1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIHNldCBkaXNwbGF5ICovXFxuI3NldC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OiAwIDEgNzB2aDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBcXG59XFxuXFxuLnNldC1ncmlkIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LWd1aWRlLWxnKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gICAgZ2FwOiB2YXIoLS1nYXAtbGcpO1xcbiAgICBtaW4taGVpZ2h0OiAwO1xcbn1cXG5cXG4uc2V0LXRyYXkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG5cXG59XFxuXFxuLnRyYXktaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDpsZWZ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uaWNvbi1waWVjZSB7XFxuICAgIGJvcmRlcjogdmFyKC0tZ2FwLXNtKSBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogdmFyKC0tZ2FwLXNtKTtcXG59XFxuXFxuLmljb24tY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNlbGwpO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciBwbGF5IGRpc3BsYXlzICovXFxuLnBsYXktY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAwIC41cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnBsYXktc3RhdHVzIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtZ3VpZGUtc20pO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBnYXA6IHZhcigtLWdhcC1zbSk7XFxufVxcblxcbi5wbGF5LXN0YXR1cyAuZ3VpZGUtbGVmdCB7XFxuICAgIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1nYXAtc20pICogLjY2KTtcXG59XFxuXFxuLnBsYXktc3RhdHVzIC5ndWlkZS10b3Age1xcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLWdhcC1zbSkgKiAuNjYpO1xcbn1cXG5cXG4ucGxheS1hcmVhIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LWd1aWRlLWxnKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogdmFyKC0tZ2FwLWxnKTtcXG59XFxuXFxuLnBsYXktYXJlYSA+IC5vcGVuLWNlbGw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1ob3ZlcikgIWltcG9ydGFudDtcXG59XFxuXFxuLnBsYXktYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIHdpZGUgdmlld3Mgb2YgcGxheSBkaXNwbGF5ICAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA1NzBweCkge1xcbiAgICAucGxheS1jb250YWluZXIge1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIH1cXG5cXG4gICAgLnBsYXktYXJlYSB7XFxuICAgICAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIH1cXG5cXG4gICAgLnBsYXktc3RhdHVzIHtcXG4gICAgICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC5wbGF5LWJ1dHRvbiB7XFxuICAgICAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gSGVscGVyIGZ1bmN0aW9uIGZvciBlYXN5IGVsZW1lbnQgY3JlYXRpb25cbi8vIHVzZTogKDxzdHJpbmc+LCA8b2JqZWN0PiBvZiBwcm9wZXJ0aWVzIGFzIHlvdSB3b3VsZCB1c2Ugc2V0QXR0cmlidXRlLCA8c3RyaW5nPmlubmVySFRNTClcbmZ1bmN0aW9uIG1ha2VFbGVtZW50KHR5cGUsIHByb3BlcnRpZXMgPSB7fSwgaW5uZXIgPSBudWxsKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgZm9yIChsZXQga2V5IGluIHByb3BlcnRpZXMpIHsgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYCR7a2V5fWAsIGAke3Byb3BlcnRpZXNba2V5XX1gKSB9O1xuICAgIGlmIChpbm5lcikgeyBlbGVtZW50LmlubmVySFRNTCA9IGlubmVyIH07XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGFkanVzdFRvSW5kZXgoaW5kZXgsIHNpemUpIHsgXG4gICAgcmV0dXJuIChzaXplICsgMSkgKiAoaW5kZXggLyBzaXplICsgMSkgKyAxO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZURPTSgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBpZDogJ21haW4tY29udGFpbmVyJyB9KTtcbiAgICBjb25zdCBzZXRQbGF5ZXIgPSBuZXcgU2V0UGxheWVyKDEwLCBbNSwgNCwgMywgMywgMl0pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBzZXRQbGF5ZXIuZGlzcGxheSgpO1xufVxuXG4vLyBEaXNwbGF5IGZvciBpbml0aWFsemlpbmcgYSBwbGF5ZXJcbmV4cG9ydCBjbGFzcyBTZXRQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKHNpemUsIHBpZWNlcykge1xuICAgICAgICB0aGlzLlNJWkUgPSBzaXplO1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGlkOiAnc2V0LWNvbnRhaW5lcicgfSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkR3JpZChzaXplLCAnc2V0LWdyaWQnKSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWFrZVRyYXkocGllY2VzKSk7XG4gICAgfVxuXG4gICAgZ2V0Q29udGFpbmVyKCkgeyByZXR1cm4gdGhpcy5jb250YWluZXI7IH1cbiAgICBnZXRHcmlkKCkgeyByZXR1cm4gdGhpcy5nZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yKCcuc2V0LWdyaWQnKTsgfVxuICAgIGdldFRyYXkoKSB7IHJldHVybiB0aGlzLmdldENvbnRhaW5lcigpLnF1ZXJ5U2VsZWN0b3IoJy5zZXQtdHJheScpOyB9XG5cbiAgICBkaXNwbGF5KCkgeyBcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGFpbmVyJykuYXBwZW5kQ2hpbGQodGhpcy5nZXRDb250YWluZXIoKSk7IFxuICAgICAgICB0aGlzLnNldFRyYXlJY29uU2l6ZSgpXG4gICAgICAgIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldC1ncmlkJykuY2hpbGRyZW4uaXRlbSgxMSkuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmljb24tY2VsbCcpLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW1vdmUoKSB7IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZXQtY29udGFpbmVyJykucmVtb3ZlKCk7IH1cblxuICAgIHNldFRyYXlJY29uU2l6ZSgpIHtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5nZXRHcmlkKCkuY2hpbGRyZW4uaXRlbShhZGp1c3RUb0luZGV4KDAsIHRoaXMuU0laRSkpLmNsaWVudEhlaWdodDtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmljb24tY2VsbCcpLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICBjZWxsLnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgbWFrZVRyYXkocGllY2VzKSB7XG4gICAgICAgIGNvbnN0IHRyYXkgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ3NldC10cmF5JyB9KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGogPSBNYXRoLmZsb29yKChwaWVjZXMubGVuZ3RoKSAvIDIpOyBqIDwgcGllY2VzLmxlbmd0aDsgaSsrLCBqKyspIHtcbiAgICAgICAgICAgIGlmIChpIDwgTWF0aC5mbG9vcihwaWVjZXMubGVuZ3RoKSAvIDIpIHsgXG4gICAgICAgICAgICAgICAgdHJheS5hcHBlbmRDaGlsZCh0aGlzLm1ha2VUcmF5SXRlbShwaWVjZXNbaV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyYXkuYXBwZW5kQ2hpbGQodGhpcy5tYWtlVHJheUl0ZW0ocGllY2VzW2pdKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRyYXk7XG4gICAgfVxuXG4gICAgbWFrZVRyYXlJdGVtKHBpZWNlKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBtYWtlRWxlbWVudCgnZGl2JywgeyBpZDogJ3Rlc3QnLCBjbGFzczogJ3RyYXktaXRlbScgfSlcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZCh0aGlzLm1ha2VQaWVjZUljb24ocGllY2UpKTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuXG4gICAgbWFrZVBpZWNlSWNvbihzaXplKSB7XG4gICAgICAgIGNvbnN0IGljb24gPSBtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2ljb24tcGllY2UnIH0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnaWNvbi1jZWxsJyB9KTtcblxuICAgICAgICAgICAgLy8gY2VsbC5zdHlsZS5oZWlnaHQgPSAnNTBweCdcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZ2V0R3JpZCgpLmNoaWxkcmVuLml0ZW0oYWRqdXN0VG9JbmRleCgwLCB0aGlzLlNJWkUpKSk7XG4gICAgICAgICAgICAvLyBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJycpXG4gICAgICAgICAgICAvLyBjZWxsLnN0eWxlLmhlaWdodCA9IGAke3RoaXMuZ2V0R3JpZCgpLmNoaWxkcmVuLml0ZW0oYWRqdXN0VG9JbmRleCgwLCB0aGlzLlNJWkUpKS5jbGllbnRIZWlnaHR9cHhgO1xuICAgICAgICAgICAgaWNvbi5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaWNvbjtcbiAgICB9XG5cbn1cblxuLy8gRGlzcGxheSBmb3IgdGhlIGdlbmVyYWwgcGxheSBhcmVhXG5leHBvcnQgY2xhc3MgUGxheUJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihzaXplLCBhbGxTaGlwcykge1xuICAgICAgICB0aGlzLlNJWkUgPSBzaXplO1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAncGxheS1jb250YWluZXInIH0pO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZEdyaWQoc2l6ZSwgJ3BsYXktYXJlYScpKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRHcmlkKHNpemUsICdwbGF5LXN0YXR1cycpKVxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnYnV0dG9uJywgeyBjbGFzczogJ3BsYXktYnV0dG9uJywgZGlzYWJsZWQ6ICd0cnVlJyB9LCAnU0VMRUNUIFRBUkdFVCcpKTtcbiAgICAgICAgYWxsU2hpcHMuZm9yRWFjaChpbmRleCA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXR1cyhpbmRleCwgJ3NoaXAnKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgLy8gZ2V0dGVycyBmb3IgYm9hcmQgZWxlbWVudHNcbiAgICBnZXRDb250YWluZXIoKSB7IHJldHVybiB0aGlzLmNvbnRhaW5lcjsgfVxuICAgIGdldFBsYXkoKSB7IHJldHVybiB0aGlzLmdldENvbnRhaW5lcigpLnF1ZXJ5U2VsZWN0b3IoJy5wbGF5LWFyZWEnKTsgfVxuICAgIGdldFN0YXR1cygpIHsgcmV0dXJuIHRoaXMuZ2V0Q29udGFpbmVyKCkucXVlcnlTZWxlY3RvcignLnBsYXktc3RhdHVzJyk7IH1cbiAgICBnZXRCdXR0b24oKSB7IHJldHVybiB0aGlzLmdldENvbnRhaW5lcigpLnF1ZXJ5U2VsZWN0b3IoJy5wbGF5LWJ1dHRvbicpOyB9XG4gICAgXG4gICAgLy8gSGVscGVycyB0byBoYW5kbGUgdGhlIGRpc3BsYXllZCBndWlkZXNcbiAgICBnZXRHdWlkZUluZGV4KGluZGV4KSB7IHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgKGluZGV4ICUgdGhpcy5TSVpFKSkuY29uY2F0KE1hdGguZmxvb3IoaW5kZXggLyB0aGlzLlNJWkUpICsgMSk7IH1cblxuICAgIGRpc3BsYXlCb2FyZCgpIHsgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdldENvbnRhaW5lcigpKTsgfVxuICAgIHJlbW92ZUJvYXJkKCkgeyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheS1jb250YWluZXInKS5yZW1vdmUoKTsgfVxuXG4gICAgLy8gc2V0IHRoZSBkaXNwbGF5J3MgYnV0dG9uIHRleHQgYW5kIGRpc2FibGVkIHN0YXR1c1xuICAgIHNldEJ1dHRvbihpbmRleCkge1xuICAgICAgICB0aGlzLmdldEJ1dHRvbigpLmRpc2FibGVkID0gKGluZGV4KSA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgdGhpcy5nZXRCdXR0b24oKS5pbm5lckhUTUwgPSAoaW5kZXgpID8gYEFUVEFDSyAke3RoaXMuZ2V0R3VpZGVJbmRleChpbmRleCl9YCA6IGBTRUxFQ1QgVEFSR0VUYDsgXG4gICAgfTtcblxuICAgIC8vIHN3aXRjaGVzIGEgY2VsbCBmcm9tIG9wZW4gdG8gc2VsZWN0ZWRcbiAgICB0b2dnbGVTZWxlY3RlZChpbmRleCkge1xuICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5nZXRQbGF5KCkuY2hpbGRyZW4uaXRlbShhZGp1c3RUb0luZGV4KGluZGV4LCB0aGlzLlNJWkUpKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuLWNlbGwnKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZCcpO1xuICAgIH1cblxuICAgIC8vIHNldCBjbGFzcyBmb3IgY2VsbCBpbiB0aGUgcGxheSBncmlkXG4gICAgdXBkYXRlUGxheShpbmRleCwgdG9VcGRhdGUpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuZ2V0UGxheSgpLmNoaWxkcmVuLml0ZW0oYWRqdXN0VG9JbmRleChpbmRleCwgdGhpcy5TSVpFKSk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKHRvVXBkYXRlKTtcbiAgICB9XG5cbiAgICAvLyBzZXQgY2xhc3MgZm9yIGNlbGwgaW4gdGhlIHN0YXR1cyBncmlkXG4gICAgdXBkYXRlU3RhdHVzKGluZGV4LCB0b1VwZGF0ZSkge1xuICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5nZXRTdGF0dXMoKS5jaGlsZHJlbi5pdGVtKGFkanVzdFRvSW5kZXgoaW5kZXgsIHRoaXMuU0laRSkpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQodG9VcGRhdGUpO1xuICAgIH1cblxuICAgIC8vIGRpc3BsYXkgYSBwcml2YWN5IGNvdmVyIG9uIHR1cm4gc3dpdGNoLW9mZnMsIHRha2VzIGEgc3RyaW5nIGZvciBwbGF5ZXIncyBuYW1lLCByZXR1cm5zIGJ1dHRvblxuICAgIGNyZWF0ZVR1cm5Db3ZlcihwbGF5ZXIpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICd0dXJuLWNvbnRhaW5lcicgfSk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ3R1cm4tY29udGVudCcgfSk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IG1ha2VFbGVtZW50KCdidXR0b24nLCB7IGNsYXNzOiAndHVybi1idXR0b24nIH0sICdSRUFEWScpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdoMScsIHt9LCBgJHtwbGF5ZXIudG9VcHBlckNhc2UoKX0nc2ApKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnaDEnLCB7fSwgJ1RVUk4nKSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICB0aGlzLmdldENvbnRhaW5lcigpLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgIHJldHVybiBidXR0b247XG4gICAgfVxuXG4gICAgY2xlYXJUdXJuQ292ZXIoKSB7XG4gICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkucXVlcnlTZWxlY3RvcignLnR1cm4tY29udGFpbmVyJykucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgLy8gZGlzcGxheSBhIGdhbWVvdmVyIG1lc3NhZ2Ugd2l0aCBjdXN0b24gcmVzdWx0IHN0cmluZywgcmV0dXJucyBidXR0b24gZm9yIGJpbmRpbmdcbiAgICBjcmVhdGVHYW1lT3ZlcihyZXN1bHQpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdnYW1lb3Zlci1jb250YWluZXInIH0pO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdnYW1lb3Zlci1jb250ZW50JyB9KTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gbWFrZUVsZW1lbnQoJ2J1dHRvbicsIHsgY2xhc3M6ICdnYW1lb3Zlci1idXR0b24nIH0sICdQTEFZIEFHQUlOPycpXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2gxJywge30sIHJlc3VsdCkpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgICAgdGhpcy5nZXRDb250YWluZXIoKS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH1cbn1cblxuLy8gY3JlYXRlIGEgdmFyaWFibHkgc2l6ZWQgZ3JpZCB3aXRoIGd1aWRlIG1lYXN1cmVzIG9uIHRvcCBhbmQgbGVmdCBoYW5kIHNpZGVcbmZ1bmN0aW9uIGJ1aWxkR3JpZChzaWRlU2l6ZSwgYWRkQ2xhc3MpIHtcbiAgICBjb25zdCBTSVpFID0gTWF0aC5wb3coc2lkZVNpemUgKyAxLCAyKTtcbiAgICBjb25zdCBncmlkQm94ID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdncmlkLWJveCcgfSk7XG4gICAgaWYgKGFkZENsYXNzKSB7IGdyaWRCb3guY2xhc3NMaXN0LmFkZChhZGRDbGFzcyk7IH1cbiAgICBsZXQgY29sVmFsdWUgPSA2NTtcbiAgICBsZXQgcm93VmFsdWUgPSAxO1xuICAgIGxldCBjZWxsSW5kZXggPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgU0laRTsgaSsrKSB7IFxuICAgICAgICBpZiAoaSA9PT0gMCkgeyBncmlkQm94LmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnZ3VpZGUtY29ybmVyJyB9KSkgfVxuICAgICAgICBlbHNlIGlmIChpIDw9IHNpZGVTaXplKSB7IGdyaWRCb3guYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdndWlkZS10b3AnIH0sIFN0cmluZy5mcm9tQ2hhckNvZGUoY29sVmFsdWUrKykpKSB9XG4gICAgICAgIGVsc2UgaWYgKGkgJSAoc2lkZVNpemUgKyAxKSA9PT0gMCkgeyBncmlkQm94LmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnZ3VpZGUtbGVmdCd9LCByb3dWYWx1ZSsrKSkgfVxuICAgICAgICBlbHNlIHsgZ3JpZEJveC5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ29wZW4tY2VsbCcsICdkYXRhLWluZGV4JzogY2VsbEluZGV4KysgfSkpIH07XG4gICAgfVxuXG4gICAgLy8gRmluZCBhIGJldHRlciBob21lIGZvciB0aGlzXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zaWRlLXNpemUnLCBzaWRlU2l6ZSArIDEpO1xuICAgIFxuICAgIHJldHVybiBncmlkQm94O1xufVxuXG4iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9TaGlwLmpzJztcblxuZXhwb3J0IGNsYXNzIEdhbWVib2FyZCB7XG4gICAgY29uc3RydWN0b3Ioc2l6ZSkge1xuICAgICAgICB0aGlzLlNJWkUgPSBzaXplO1xuICAgICAgICB0aGlzLmFsbFNoaXBzID0gW107XG4gICAgICAgIHRoaXMuYm9hcmQgPSBbXTtcbiAgICAgICAgdGhpcy5hbGxIaXQgPSBbXTtcbiAgICAgICAgdGhpcy5hbGxNaXNzID0gW107XG4gICAgICAgIHRoaXMuYWxsUGxhY2VkID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZSAqIHNpemU7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5ib2FyZC5wdXNoKHtzaGlwOiBudWxsLCBoaXQ6IGZhbHNlfSlcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBnZXRIaXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFsbEhpdDtcbiAgICB9XG5cbiAgICBnZXRNaXNzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hbGxNaXNzO1xuICAgIH1cblxuICAgIGdldFBsYWNlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxsUGxhY2VkO1xuICAgIH1cblxuICAgIGdldFNpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLlNJWkUgKiB0aGlzLlNJWkU7XG4gICAgfVxuXG4gICAgaXNIaXQoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRbaW5kZXhdLmhpdDtcbiAgICB9XG5cbiAgICAvLyBwbGFjZSBuZXcgc2hpcCBvbiBnYW1lYm9hcmQgcmV0dXJucyBzaGlwIG9yIGZhbHNlIGlmIG5vdCBsZWdhbCBwbGFjZW1lbnRcbiAgICBhZGRTaGlwKHNoaXBTaXplLCBoZWFkLCB2ZXJ0aWNhbCA9IGZhbHNlKSB7XG4gICAgICAgIC8vIGRpc2FsbG93IHBsYWNlbWVudCBiZXlvbmQgYm9hcmQncyBib3VuZGFyaWVzXG4gICAgICAgIGlmICghdmVydGljYWwgJiYgKChoZWFkICUgdGhpcy5TSVpFKSArIHNoaXBTaXplID4gdGhpcy5TSVpFKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAodmVydGljYWwgJiYgKE1hdGguZmxvb3IoaGVhZCAvIHRoaXMuU0laRSkpICsgc2hpcFNpemUgPiB0aGlzLlNJWkUpIHJldHVybiBmYWxzZTtcblxuICAgICAgICBjb25zdCB0b1BsYWNlID0gdGhpcy5nZXRJbmRlY2VzKHNoaXBTaXplLCBoZWFkLCB2ZXJ0aWNhbCk7XG4gICAgICAgIFxuICAgICAgICAvLyBpbnNwZWN0IGZvciBhbnkgb3ZlcmxhcHBpbmcgY29uZmxpY3RcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b1BsYWNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZFt0b1BsYWNlW2ldXS5zaGlwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgbmV3U2hpcCA9IG5ldyBTaGlwKHNoaXBTaXplKTtcbiAgICAgICAgdG9QbGFjZS5mb3JFYWNoKGluZGV4ID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWxsUGxhY2VkLnB1c2goaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5ib2FyZFtpbmRleF0uc2hpcCA9IG5ld1NoaXBcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWxsU2hpcHMucHVzaCh0b1BsYWNlKTtcbiAgICAgICAgcmV0dXJuIG5ld1NoaXA7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJucyBhbiBhcnJheSBvZiBhIHNoaXAncyBzZXF1ZW50aWFsIHBvc2l0aW9uaW5nXG4gICAgZ2V0SW5kZWNlcyhzaXplLCBoZWFkLCB2ZXJ0aWNhbCkge1xuICAgICAgICBjb25zdCBpbmRlY2VzID0gW107XG4gICAgICAgIGlmICh2ZXJ0aWNhbCkge1xuICAgICAgICAgICAgd2hpbGUgKHNpemUtLSA+IDApIHtcbiAgICAgICAgICAgICAgICBpbmRlY2VzLnB1c2goaGVhZCk7XG4gICAgICAgICAgICAgICAgaGVhZCArPSB0aGlzLlNJWkU7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2hpbGUgKHNpemUtLSA+IDApIHtcbiAgICAgICAgICAgICAgICBpbmRlY2VzLnB1c2goaGVhZCsrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5kZWNlcztcbiAgICB9XG5cbiAgICAvLyBzZXRzIGF0dGFjayBhY3Rpb25zLCBtdXN0IGJlIGludGVnZXIgYW5kIHdpdGhpbiB0aGUgZ2FtZWJvYXJkLCBpZ25vcmVzIHNwYWNlcyBhbHJlYWR5IGhpdFxuICAgIHJlY2VpdmVBdHRhY2soaW5kZXgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpbmRleCAhPSAnbnVtYmVyJykgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCd2YWx1ZSBtdXN0IGJlIE51bWJlcicpIH07XG4gICAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihpbmRleCkpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignT25seSBpbnRlZ2VyIHZhbHVlcycpIH07XG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5ib2FyZC5sZW5ndGgpIHsgdGhyb3cgbmV3IFJhbmdlRXJyb3IoYHZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAke3RoaXMuYm9hcmQubGVuZ3RoIC0gMX1gKTsgfVxuICAgICAgICBpZiAodGhpcy5ib2FyZFtpbmRleF0uaGl0KSB7IHJldHVybjsgfVxuXG4gICAgICAgIHRoaXMuYm9hcmRbaW5kZXhdLmhpdCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW2luZGV4XS5zaGlwKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW2luZGV4XS5zaGlwLmhpdCgpO1xuICAgICAgICAgICAgdGhpcy5hbGxIaXQucHVzaChpbmRleCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFtpbmRleF0uc2hpcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWxsTWlzcy5wdXNoKGluZGV4KTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gY29uZmlybXMgdGhhdCB0aGUgc2hpcCBhdCBlYWNoIGZyb250IHBvc2l0aW9uIGluIGFsbFNoaXBzIGlzIHN1bmtcbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIGxldCBzdW5rID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbGxTaGlwcy5mb3JFYWNoKHNoaXAgPT4geyBcbiAgICAgICAgICAgIGlmICghdGhpcy5ib2FyZFtzaGlwWzBdXS5zaGlwLmlzU3VuaygpKSB7IHN1bmsgPSBmYWxzZTsgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHN1bms7XG4gICAgfVxufSIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL0dhbWVib2FyZFwiO1xuaW1wb3J0IHsgUGxheUJvYXJkIH0gZnJvbSBcIi4vRE9NQ29udHJvbFwiO1xuLy8gaG9sZHMgcGxheWVyJ3MgZ2FtZWJvYXJkLCBjYW4gZGV0ZXJtaW5lIG5leHQgbW92ZSBpZiBjcHUgXG4vLyBwYXNzIGFuIGFycmF5IG9mIGFycmF5cyBpbiBbc2hpcCBzaXplLCBzaGlwIGluZGV4LCBpcyB2ZXJ0aWNhbCh0cnVlL2ZhbHNlKV0gZm9ybWF0XG4vLyB0byBwb3B1bGF0ZSB0aGUgZ2FtZWJvYXJkXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB0b0FkZCA9IFtdKSB7XG4gICAgICAgIHRoaXMuU0laRSA9IDEwO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEdhbWVib2FyZCh0aGlzLlNJWkUpO1xuICAgICAgICB0aGlzLm5leHRNb3ZlID0gW107XG4gICAgICAgIHRvQWRkLmZvckVhY2goc2hpcCA9PiB0aGlzLmJvYXJkLmFkZFNoaXAoc2hpcFswXSwgc2hpcFsxXSwgc2hpcFsyXSkgKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5ID0gbmV3IFBsYXlCb2FyZCh0aGlzLlNJWkUsIHRoaXMuZ2V0QWxsU2hpcEluZGV4KCkpO1xuICAgIH07XG5cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIGdldERpc3BsYXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpc3BsYXk7XG4gICAgfVxuXG4gICAgZ2V0QWxsU2hpcEluZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZC5nZXRQbGFjZWQoKTtcbiAgICB9XG5cbiAgICBnZXRNaXNzSW5kZXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkLmdldE1pc3MoKTtcbiAgICB9XG5cbiAgICBnZXRIaXRJbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQuZ2V0SGl0KCk7XG4gICAgfVxuXG4gICAgLy8gY29uZmlybXMgaWYgcGxheWVyIGlzIGRlZmVhdGVkXG4gICAgaXNEZWZlYXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQuaXNTdW5rKCk7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJucyBlaXRoZXIgdGhlIGhpdCBzaGlwIG9yIG51bGxcbiAgICB0YWtlSGl0KGluZGV4KSB7XG4gICAgICAgIHJldHVybiAodGhpcy5ib2FyZC5yZWNlaXZlQXR0YWNrKGluZGV4KSkgPyAnaGl0JyA6ICdtaXNzJztcbiAgICB9XG5cbiAgICAvLyBjb25maXJtcyBpZiBhIG1vdmUgaXMgdmFsaWRcbiAgICBpc1ZhbGlkTW92ZShpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMuYm9hcmQuZ2V0U2l6ZSgpKSB7IHJldHVybiBmYWxzZSB9O1xuICAgICAgICByZXR1cm4gIXRoaXMuYm9hcmQuaXNIaXQoaW5kZXgpO1xuICAgIH1cblxuICAgIC8vIHRha2VzIGEgY3B1IHR1cm4gYWdhaW5zdCBwbGF5ZXIsIHJldHVybnMgbW92ZSB0YWtlblxuICAgIGNwdVR1cm4oKSB7XG4gICAgICAgIGxldCBtb3ZlO1xuICAgICAgICBpZiAodGhpcy5uZXh0TW92ZS5sZW5ndGggPT09IDApIHsgbW92ZSA9IHRoaXMucmFuZG9tTW92ZSgpOyB9XG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHRoaXMudGFrZUhpdChtb3ZlKTtcbiAgICAgICAgcmV0dXJuIG1vdmU7XG4gICAgfVxuXG4gICAgLy8gZWxlY3QgYSB2YWxpZCBmcmVlIHNwYWNlIHRvIGF0dGFjayBmcm9tIHRoZSBnYW1lYm9hcmRcbiAgICByYW5kb21Nb3ZlKCkge1xuICAgICAgICBjb25zdCBtb3ZlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5wb3codGhpcy5TSVpFLCAyKSk7XG4gICAgICAgIHJldHVybiAodGhpcy5pc1ZhbGlkTW92ZShtb3ZlKSkgPyBtb3ZlIDogdGhpcy5yYW5kb21Nb3ZlKCk7XG4gICAgfVxufTtcbiIsIi8vIGJhc2ljIHVuaXQgdXNlZCBpbiBnYW1lLCBtdXN0IHBhc3MgaW50ZWdlciB2YWx1ZSB0byBkZXRlcm1pbmUgc2l6ZVxuXG5leHBvcnQgY2xhc3MgU2hpcCB7XG4gICAgLy8gdGVzdHMgdG8gZW5zdXJlIHZhbHVlIGlzIGFuIGludGVnZXIgbnVtYmVyIG92ZXIgMFxuICAgIGNvbnN0cnVjdG9yKHNpemUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzaXplICE9ICdudW1iZXInKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbHVlIG11c3QgYmUgTnVtYmVyJykgfTtcbiAgICAgICAgaWYgKHNpemUgPD0gMCkgeyB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVmFsdWUgbXVzdCBiZSBncmVhdGVyIHRoYW4gMCcpIH07XG4gICAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihzaXplKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdPbmx5IGludGVnZXIgdmFsdWVzJykgfTtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy5oaXRzID0gMDtcbiAgICB9XG5cbiAgICBnZXRIaXRzKCkgeyByZXR1cm4gdGhpcy5oaXRzOyB9XG5cbiAgICAvLyBpbmNyZWFzZXMgc2hpcHMgaGl0IHZhbHVlXG4gICAgaGl0KCkge1xuICAgICAgICB0aGlzLmhpdHMgKz0gMTtcbiAgICB9XG5cbiAgICAvLyBkZXRlcm1pbmVzIHRoZSBzdGF0ZSBvZiB0aGUgc2hpcFxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGl0cyA+PSB0aGlzLnNpemU7XG4gICAgfVxufSIsImltcG9ydCB7IGluaXRpYWxpemVET00gfSBmcm9tIFwiLi9ET01Db250cm9sLmpzXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL1BsYXllci5qcyc7XG5cbmV4cG9ydCBjbGFzcyBHYW1lQ29udHJvbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuU0laRSA9IDEwO1xuICAgICAgICB0aGlzLnBsYXllcjE7XG4gICAgICAgIHRoaXMucGxheWVyMjtcbiAgICAgICAgdGhpcy5tdWx0aXBsYXllciA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNlbGVjdE1vdmUgPSBudWxsO1xuICAgICAgICB0aGlzLnR1cm5OdW1iZXIgPSAwO1xuICAgIH1cblxuICAgIC8vIGJlZ2luIHRoZSBnYW1lbG9vcFxuICAgIHN0YXJ0R2FtZSgpIHtcbiAgICAgICAgaW5pdGlhbGl6ZURPTSgpO1xuXG4gICAgICAgIC8vIHRoaXMuZHVtbXlTZXRQbGF5ZXIoKTtcbiAgICAgICAgLy8gY29uc3QgYm9hcmQgPSB0aGlzLmdldFBsYXllcigpLmdldERpc3BsYXkoKTtcbiAgICAgICAgLy8gaWYgKHRoaXMubXVsdGlwbGF5ZXIpIHtcbiAgICAgICAgLy8gICAgIGJvYXJkLmNyZWF0ZVR1cm5Db3Zlcih0aGlzLmdldFBsYXllcigpXG4gICAgICAgIC8vICAgICAgICAgLmdldE5hbWUoKSlcbiAgICAgICAgLy8gICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gYm9hcmQuY2xlYXJUdXJuQ292ZXIoKSk7XG4gICAgICAgIC8vIH07XG4gICAgICAgIC8vIGJvYXJkLmRpc3BsYXlCb2FyZCgpO1xuICAgIH1cblxuICAgIC8vIHRlc3RpbmcgdmFsdWVzXG4gICAgZHVtbXlTZXRQbGF5ZXIoKSB7XG4gICAgICAgIGNvbnN0IGR1bW15MSA9IFtcbiAgICAgICAgICAgIFs1LCAyNSwgdHJ1ZV0sXG4gICAgICAgICAgICBbNCwgODMsIGZhbHNlXSxcbiAgICAgICAgICAgIFszLCAwLCBmYWxzZV0sXG4gICAgICAgICAgICBbMywgNTEsIHRydWVdLFxuICAgICAgICAgICAgWzIsIDQ4LCBmYWxzZV1cbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgZHVtbXkyID0gW1xuICAgICAgICAgICAgWzUsIDk1LCBmYWxzZV0sXG4gICAgICAgICAgICBbNCwgMTYsIGZhbHNlXSxcbiAgICAgICAgICAgIFszLCA1MywgZmFsc2VdLFxuICAgICAgICAgICAgWzMsIDY4LCB0cnVlXSxcbiAgICAgICAgICAgIFsyLCAxMiwgdHJ1ZV1cbiAgICAgICAgXVxuICAgICAgICB0aGlzLnBsYXllcjEgPSBuZXcgUGxheWVyKCdwbGF5ZXIxJywgZHVtbXkxKTtcbiAgICAgICAgdGhpcy5iaW5kQm9hcmQodGhpcy5wbGF5ZXIxKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIyID0gbmV3IFBsYXllcigncGxheWVyMicsIGR1bW15Mik7XG4gICAgICAgIHRoaXMuYmluZEJvYXJkKHRoaXMucGxheWVyMilcbiAgICB9XG5cbiAgICAvLyBEZXRlcm1pbmUgdGhlIGFjdGl2ZSBwbGF5ZXJcbiAgICBnZXRQbGF5ZXIoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy50dXJuTnVtYmVyICUgMiA9PT0gMCkgPyB0aGlzLnBsYXllcjEgOiB0aGlzLnBsYXllcjI7IFxuICAgIH1cblxuICAgIC8vIERldGVybWluZSB0aGUgY3VycmVudCBub24gcGxheWVyXG4gICAgZ2V0QWR2ZXJzYXJ5KCkge1xuICAgICAgICByZXR1cm4gKHRoaXMudHVybk51bWJlciAlIDIgPT09IDApID8gdGhpcy5wbGF5ZXIyIDogdGhpcy5wbGF5ZXIxO1xuICAgIH1cblxuICAgIC8vIGJpbmRpbmdzIGZvciBwbGF5IGFyZWFcbiAgICBiaW5kQm9hcmQocGxheWVyKSB7XG4gICAgICAgIGNvbnN0IGRpc3BsYXkgPSBwbGF5ZXIuZ2V0RGlzcGxheSgpO1xuICAgICAgICBjb25zdCBidXR0b24gPSBwbGF5ZXIuZ2V0RGlzcGxheSgpLmdldEJ1dHRvbigpO1xuICAgICAgICBcbiAgICAgICAgLy8gYmluZCBjbGlja2FibGUgY2VsbHNcbiAgICAgICAgZGlzcGxheS5nZXRQbGF5KCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4tY2VsbCcpKSB7IHJldHVybiB9O1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0TW92ZSkgeyBkaXNwbGF5LnRvZ2dsZVNlbGVjdGVkKHRoaXMuc2VsZWN0TW92ZSk7IH1cbiAgICAgICAgICAgIGRpc3BsYXkudG9nZ2xlU2VsZWN0ZWQoZS50YXJnZXQuZGF0YXNldC5pbmRleCk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdE1vdmUgPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC5pbmRleCk7XG4gICAgICAgICAgICBkaXNwbGF5LnNldEJ1dHRvbihlLnRhcmdldC5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gYmluZCBhdHRhY2sgYnV0dG9uXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5LnNldEJ1dHRvbigpO1xuICAgICAgICAgICAgdGhpcy50YWtlVHVybigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBGdW5jdGlvbiBmb3IgYWN0aW9uIGJ1dHRvbiwgdGFrZXMgYSBwbGF5ZXIgc2VsZWN0ZWQgdHVyblxuICAgIHRha2VUdXJuKCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmdldEFkdmVyc2FyeSgpLnRha2VIaXQodGhpcy5zZWxlY3RNb3ZlKTtcbiAgICAgICAgdGhpcy5nZXRQbGF5ZXIoKS5nZXREaXNwbGF5KCkudXBkYXRlUGxheSh0aGlzLnNlbGVjdE1vdmUsIHJlc3VsdCk7XG4gICAgICAgIGlmICh0aGlzLmdldEFkdmVyc2FyeSgpLmlzRGVmZWF0ZWQoKSkgeyBcbiAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVyKClcbiAgICAgICAgICAgICAgICAuZ2V0RGlzcGxheSgpXG4gICAgICAgICAgICAgICAgLmNyZWF0ZUdhbWVPdmVyKCdZT1UgV0lOIScpXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXIoKS5nZXREaXNwbGF5KCkucmVtb3ZlQm9hcmQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEdhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcbiAgICAgICAgICAgIH0pOyBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLm11bHRpcGxheWVyKSB7IHRoaXMuc3dpdGNoVHVybihyZXN1bHQpOyB9XG4gICAgICAgIGVsc2UgeyB0aGlzLmNwdVR1cm4oKTsgfVxuICAgIH1cblxuICAgIC8vIFJlbmRlcnMgbW92ZSB0YWtlbiBvbiBwbGF5ZXIgYW5kIHJlc2V0IHNlbGVjdE1vdmVcbiAgICBzdGFydFR1cm4ocmVzdWx0KSB7XG4gICAgICAgIHRoaXMuZ2V0UGxheWVyKCkuZ2V0RGlzcGxheSgpLnVwZGF0ZVN0YXR1cyh0aGlzLnNlbGVjdE1vdmUsIHJlc3VsdCk7XG4gICAgICAgIHRoaXMuc2VsZWN0TW92ZSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gUHJlcGFyZXMgdGhlIHBsYXkgYXJlYSB0byBleGNoYW5nZSBwbGF5ZXJzXG4gICAgc3dpdGNoVHVybihyZXN1bHQpIHtcbiAgICAgICAgY29uc3QgYm9hcmQgPSB0aGlzLmdldEFkdmVyc2FyeSgpLmdldERpc3BsYXkoKTtcbiAgICAgICAgYm9hcmQuY3JlYXRlVHVybkNvdmVyKHRoaXMuZ2V0QWR2ZXJzYXJ5KClcbiAgICAgICAgLmdldE5hbWUoKSlcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGJvYXJkLmNsZWFyVHVybkNvdmVyKCk7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0VHVybihyZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgYm9hcmQuZGlzcGxheUJvYXJkKCk7XG4gICAgICAgIHRoaXMuZ2V0QWR2ZXJzYXJ5KCkuZ2V0RGlzcGxheSgpLnJlbW92ZUJvYXJkKCk7XG4gICAgICAgIHRoaXMudHVybk51bWJlcisrO1xuICAgIH1cblxuICAgIC8vIFNpbXVsYXRlIGFuIGFkdmVyc2FyeSdzIHR1cm5cbiAgICBjcHVUdXJuKCkge1xuICAgICAgICB0aGlzLnNlbGVjdE1vdmUgPSB0aGlzLmdldFBsYXllcigpLmNwdVR1cm4oKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5nZXRQbGF5ZXIoKS50YWtlSGl0KHRoaXMuc2VsZWN0TW92ZSk7XG4gICAgICAgIGlmICh0aGlzLmdldFBsYXllcigpLmlzRGVmZWF0ZWQoKSkgeyBcbiAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVyKCkuZ2V0RGlzcGxheSgpLmNyZWF0ZUdhbWVPdmVyKCdZT1UgTE9TRSEnKTsgXG4gICAgICAgIH0gZWxzZSB7IHRoaXMuc3RhcnRUdXJuKHJlc3VsdCk7IH1cbiAgICB9XG5cbiAgICAvLyBjbGVhciBhbGwgdmFyaWFibGUgdG8gZGVmYXVsdFxuICAgIHJlc2V0R2FtZSgpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyMSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnBsYXllcjIgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllciA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RNb3ZlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMudHVybk51bWJlciA9IDA7XG4gICAgfVxufVxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7R2FtZUNvbnRyb2x9IGZyb20gJy4vZ2FtZUNvbnRyb2wuanMnO1xuXG5jb25zdCBnYW1lID0gbmV3IEdhbWVDb250cm9sKCk7XG5nYW1lLnN0YXJ0R2FtZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9