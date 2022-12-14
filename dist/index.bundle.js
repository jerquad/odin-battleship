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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --bg-grid: black;\n    --bg-cell: red;\n    --font-guide-lg: 1.5rem;\n    --font-guide-sm: .7rem;\n    --gap-lg: 3px;\n    --gap-sm: 2px;\n    --button-fg-disable: grey;\n    --button-fg-normal: black;\n    --button-bg-disable: darkgrey;\n    --button-bg-normal: white;\n    --button-font-size: 2rem;\n    --board-hit: darkred;\n    --board-hover: aqua;\n    --board-miss: grey;\n    --board-selected: yellow;\n    --board-ship: green;\n    --side-size: 10;\n}\n\n\nbody, html {\n    margin: 0;\n    height: 100%;\n    width: 100%;\n}\n\nbutton {\n    background-color: var(--button-bg-normal);\n    color: var(--button-fg-normal);\n    border: 5px solid var(--button-fg-normal);\n    font-size: var(--button-font-size);\n    width: 100%;\n}\n\nbutton:disabled {\n    background-color: var(--button-bg-disable);\n    color: var(--button-fg-disable);\n    border-color: var(--button-fg-disable);\n}\n\n/* styling for all grid displays */\n.grid-box {\n    font-size: var(--font-guide-lg);\n    aspect-ratio: 1 / 1;\n    background-color: var(--bg-grid);\n    display: grid;\n    grid-template-columns: repeat(var(--side-size), 1fr);\n    gap: var(--gap-lg);\n}\n\n.grid-box > div {\n    position: relative;\n    user-select: none;\n    background-color: var(--bg-cell);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.guide-top,\n.guide-corner {\n    margin-bottom: calc(var(--gap-lg) * .66);\n}\n\n.guide-left,\n.guide-corner {\n    margin-right: calc(var(--gap-lg) * .66);\n}\n\n.guide-corner {\n    background-color: var(--bg-grid) !important;\n}\n\n/* Styling for all grid icons */\n.ship {\n    background-color: var(--board-ship) !important;\n}\n\n.miss {\n    background-color: var(--board-miss) !important;\n}\n\n.hit {\n    background-color: var(--board-hit) !important;\n}\n\n.selected {\n    background-color: var(--board-selected) !important;\n}\n\n.hover {\n    background-color: yellow !important;\n}\n\n.set {\n    background-color: green !important;\n}\n\n.set.hover {\n    background-color: darkgrey !important;\n}\n\n/* Styling for notifications */\n.gameover-container,\n.turn-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n}\n\n.gameover-container {\n    background-color: transparent;\n}\n\n.turn-container {\n    background-color: white;\n}\n\n.gameover-content,\n.turn-content {\n    text-align: center;\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    padding: 2rem;\n}\n\n#main-container {\n    height: 100%;\n    width: 100vw;\n    min-height: 100%;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    position: relative;\n}\n\n/* Styling for set display */\n#set-container {\n    display: flex;\n    flex-direction: column;\n    flex: 0 1 55vh;\n    gap: 1rem;\n    \n}\n\n/* .set-grid {\n    font-size: var(--font-guide-lg);\n    aspect-ratio: 1 / 1;\n    gap: var(--gap-lg);\n    min-height: 0;\n} */\n\n.set-tray {\n    background-color: lightgrey;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n\n}\n\n.tray-item {\n    position: relative;\n    display: grid;\n    justify-content:left;\n    align-items: center;\n    padding: 1rem;\n}\n\n.icon-piece {\n    position: relative;\n    grid-column: 1 / -1;\n    grid-row: 1 / -1;\n    border: var(--gap-sm) solid black;\n    background-color: black;\n    display: flex;\n    gap: var(--gap-sm);\n}\n\n.icon-piece.icon-disable>div:not(#dragged) {\n    background-color: grey !important;\n}\n\n.icon-cell {\n    background-color: var(--bg-cell);\n    aspect-ratio: 1 / 1;\n}\n\n.drag-cell {\n    opacity: 0.5;\n    background-color: grey;\n}\n\n#dragged {\n    z-index: 9;\n    opacity: 0.5;\n    position: absolute !important;\n}\n\n.drag-y {\n    flex-direction: column;\n}\n\n.toggle-rotate {\n    transform: rotate(90deg);\n}\n\n#toggle-bar {\n    display: flex;\n}\n\n#toggle-container {\n    position: relative;\n    margin: 10px;\n}\n\n#toggle-text {\n    user-select: none;\n    position: absolute;\n    left: 50%;\n    top:  50%;\n    transform: translate(-50%, -50%);\n}\n\n#toggle-body {\n    height: 80px;\n    width: 80px;\n    background-color: red;\n    border-radius: 40px;\n}\n\n#toggle-body:after {\n    position: absolute;\n    height: 0;\n    width: 0;\n    top: 20px;\n    left: 70px;\n    content: '';\n    border: 20px solid transparent;\n    border-left-color: red;\n}\n\n#submit-bar {\n    display: flex;\n}\n\n#submit-bc {\n    width: 100%;\n}\n\n#submit-mc {\n    width: min-content;\n}\n\n/* Styling for play displays */\n.play-container {\n    margin: 0 .5rem;\n    width: 100%;\n    height: min-content;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr;\n    position: relative;\n    gap: 1rem;\n}\n\n.play-status {\n    grid-row: 1 / 2;\n    font-size: var(--font-guide-sm);\n    aspect-ratio: 1 / 1;\n    width: 50%;\n    gap: var(--gap-sm);\n}\n\n.play-status .guide-left {\n    margin-right: calc(var(--gap-sm) * .66);\n}\n\n.play-status .guide-top {\n    margin-bottom: calc(var(--gap-sm) * .66);\n}\n\n.play-area {\n    font-size: var(--font-guide-lg);\n    aspect-ratio: 1 / 1;\n    width: 100%;\n    gap: var(--gap-lg);\n}\n\n.play-area > .open-cell:hover {\n    background-color: var(--board-hover) !important;\n}\n\n.play-button {\n    width: 100%;\n}\n\n/* Styling for wide views of play display  */\n@media (min-width: 570px) {\n    .play-container {\n        max-width: 1000px;\n        display: grid;\n        grid-template-columns: 2fr 1fr;\n        grid-template-rows: 1fr;\n    }\n\n    .play-area {\n        grid-row: 1 / 3;\n        grid-column: 1 / 2;\n    }\n\n    .play-status {\n        grid-row: 1 / 2;\n        grid-column: 2 / 3;\n        width: 100%;\n    }\n\n    .play-button {\n        grid-row: 3 / 4;\n        grid-column: 1 / 2;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --bg-grid: black;\n    --bg-cell: red;\n    --font-guide-lg: 1.5rem;\n    --font-guide-sm: .7rem;\n    --gap-lg: 3px;\n    --gap-sm: 2px;\n    --button-fg-disable: grey;\n    --button-fg-normal: black;\n    --button-bg-disable: darkgrey;\n    --button-bg-normal: white;\n    --button-font-size: 2rem;\n    --board-hit: darkred;\n    --board-hover: aqua;\n    --board-miss: grey;\n    --board-selected: yellow;\n    --board-ship: green;\n    --side-size: 10;\n}\n\n\nbody, html {\n    margin: 0;\n    height: 100%;\n    width: 100%;\n}\n\nbutton {\n    background-color: var(--button-bg-normal);\n    color: var(--button-fg-normal);\n    border: 5px solid var(--button-fg-normal);\n    font-size: var(--button-font-size);\n    width: 100%;\n}\n\nbutton:disabled {\n    background-color: var(--button-bg-disable);\n    color: var(--button-fg-disable);\n    border-color: var(--button-fg-disable);\n}\n\n/* styling for all grid displays */\n.grid-box {\n    font-size: var(--font-guide-lg);\n    aspect-ratio: 1 / 1;\n    background-color: var(--bg-grid);\n    display: grid;\n    grid-template-columns: repeat(var(--side-size), 1fr);\n    gap: var(--gap-lg);\n}\n\n.grid-box > div {\n    position: relative;\n    user-select: none;\n    background-color: var(--bg-cell);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.guide-top,\n.guide-corner {\n    margin-bottom: calc(var(--gap-lg) * .66);\n}\n\n.guide-left,\n.guide-corner {\n    margin-right: calc(var(--gap-lg) * .66);\n}\n\n.guide-corner {\n    background-color: var(--bg-grid) !important;\n}\n\n/* Styling for all grid icons */\n.ship {\n    background-color: var(--board-ship) !important;\n}\n\n.miss {\n    background-color: var(--board-miss) !important;\n}\n\n.hit {\n    background-color: var(--board-hit) !important;\n}\n\n.selected {\n    background-color: var(--board-selected) !important;\n}\n\n.hover {\n    background-color: yellow !important;\n}\n\n.set {\n    background-color: green !important;\n}\n\n.set.hover {\n    background-color: darkgrey !important;\n}\n\n/* Styling for notifications */\n.gameover-container,\n.turn-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n}\n\n.gameover-container {\n    background-color: transparent;\n}\n\n.turn-container {\n    background-color: white;\n}\n\n.gameover-content,\n.turn-content {\n    text-align: center;\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    padding: 2rem;\n}\n\n#main-container {\n    height: 100%;\n    width: 100vw;\n    min-height: 100%;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    position: relative;\n}\n\n/* Styling for set display */\n#set-container {\n    display: flex;\n    flex-direction: column;\n    flex: 0 1 55vh;\n    gap: 1rem;\n    \n}\n\n/* .set-grid {\n    font-size: var(--font-guide-lg);\n    aspect-ratio: 1 / 1;\n    gap: var(--gap-lg);\n    min-height: 0;\n} */\n\n.set-tray {\n    background-color: lightgrey;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n\n}\n\n.tray-item {\n    position: relative;\n    display: grid;\n    justify-content:left;\n    align-items: center;\n    padding: 1rem;\n}\n\n.icon-piece {\n    position: relative;\n    grid-column: 1 / -1;\n    grid-row: 1 / -1;\n    border: var(--gap-sm) solid black;\n    background-color: black;\n    display: flex;\n    gap: var(--gap-sm);\n}\n\n.icon-piece.icon-disable>div:not(#dragged) {\n    background-color: grey !important;\n}\n\n.icon-cell {\n    background-color: var(--bg-cell);\n    aspect-ratio: 1 / 1;\n}\n\n.drag-cell {\n    opacity: 0.5;\n    background-color: grey;\n}\n\n#dragged {\n    z-index: 9;\n    opacity: 0.5;\n    position: absolute !important;\n}\n\n.drag-y {\n    flex-direction: column;\n}\n\n.toggle-rotate {\n    transform: rotate(90deg);\n}\n\n#toggle-bar {\n    display: flex;\n}\n\n#toggle-container {\n    position: relative;\n    margin: 10px;\n}\n\n#toggle-text {\n    user-select: none;\n    position: absolute;\n    left: 50%;\n    top:  50%;\n    transform: translate(-50%, -50%);\n}\n\n#toggle-body {\n    height: 80px;\n    width: 80px;\n    background-color: red;\n    border-radius: 40px;\n}\n\n#toggle-body:after {\n    position: absolute;\n    height: 0;\n    width: 0;\n    top: 20px;\n    left: 70px;\n    content: '';\n    border: 20px solid transparent;\n    border-left-color: red;\n}\n\n#submit-bar {\n    display: flex;\n}\n\n#submit-bc {\n    width: 100%;\n}\n\n#submit-mc {\n    width: min-content;\n}\n\n/* Styling for play displays */\n.play-container {\n    margin: 0 .5rem;\n    width: 100%;\n    height: min-content;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr;\n    position: relative;\n    gap: 1rem;\n}\n\n.play-status {\n    grid-row: 1 / 2;\n    font-size: var(--font-guide-sm);\n    aspect-ratio: 1 / 1;\n    width: 50%;\n    gap: var(--gap-sm);\n}\n\n.play-status .guide-left {\n    margin-right: calc(var(--gap-sm) * .66);\n}\n\n.play-status .guide-top {\n    margin-bottom: calc(var(--gap-sm) * .66);\n}\n\n.play-area {\n    font-size: var(--font-guide-lg);\n    aspect-ratio: 1 / 1;\n    width: 100%;\n    gap: var(--gap-lg);\n}\n\n.play-area > .open-cell:hover {\n    background-color: var(--board-hover) !important;\n}\n\n.play-button {\n    width: 100%;\n}\n\n/* Styling for wide views of play display  */\n@media (min-width: 570px) {\n    .play-container {\n        max-width: 1000px;\n        display: grid;\n        grid-template-columns: 2fr 1fr;\n        grid-template-rows: 1fr;\n    }\n\n    .play-area {\n        grid-row: 1 / 3;\n        grid-column: 1 / 2;\n    }\n\n    .play-status {\n        grid-row: 1 / 2;\n        grid-column: 2 / 3;\n        width: 100%;\n    }\n\n    .play-button {\n        grid-row: 3 / 4;\n        grid-column: 1 / 2;\n    }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTZCLHNCQUFzQixPQUFPLHNCQUFzQiwwQkFBMEIsNkJBQTZCLE9BQU8sR0FBRyxTQUFTLGdGQUFnRixZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsUUFBUSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxPQUFPLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGNBQWMsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxXQUFXLE1BQU0sU0FBUyxNQUFNLEtBQUssWUFBWSxXQUFXLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxV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QUNBLDZEQUE2RDtBQUM3RCxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxxQ0FBcUM7QUFDckMsZUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLE9BQU87QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3RLQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN3Qjs7QUFFN0MsaUJBQWlCLHdEQUFXO0FBQzVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9ET01Db250cm9sLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9ET01IZWxwZXJzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9EcmFnRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL1NldFBsYXllci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvU2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZUNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWJnLWdyaWQ6IGJsYWNrO1xcbiAgICAtLWJnLWNlbGw6IHJlZDtcXG4gICAgLS1mb250LWd1aWRlLWxnOiAxLjVyZW07XFxuICAgIC0tZm9udC1ndWlkZS1zbTogLjdyZW07XFxuICAgIC0tZ2FwLWxnOiAzcHg7XFxuICAgIC0tZ2FwLXNtOiAycHg7XFxuICAgIC0tYnV0dG9uLWZnLWRpc2FibGU6IGdyZXk7XFxuICAgIC0tYnV0dG9uLWZnLW5vcm1hbDogYmxhY2s7XFxuICAgIC0tYnV0dG9uLWJnLWRpc2FibGU6IGRhcmtncmV5O1xcbiAgICAtLWJ1dHRvbi1iZy1ub3JtYWw6IHdoaXRlO1xcbiAgICAtLWJ1dHRvbi1mb250LXNpemU6IDJyZW07XFxuICAgIC0tYm9hcmQtaGl0OiBkYXJrcmVkO1xcbiAgICAtLWJvYXJkLWhvdmVyOiBhcXVhO1xcbiAgICAtLWJvYXJkLW1pc3M6IGdyZXk7XFxuICAgIC0tYm9hcmQtc2VsZWN0ZWQ6IHllbGxvdztcXG4gICAgLS1ib2FyZC1zaGlwOiBncmVlbjtcXG4gICAgLS1zaWRlLXNpemU6IDEwO1xcbn1cXG5cXG5cXG5ib2R5LCBodG1sIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmctbm9ybWFsKTtcXG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1mZy1ub3JtYWwpO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1idXR0b24tZmctbm9ybWFsKTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1idXR0b24tZm9udC1zaXplKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJ1dHRvbjpkaXNhYmxlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iZy1kaXNhYmxlKTtcXG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1mZy1kaXNhYmxlKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tZmctZGlzYWJsZSk7XFxufVxcblxcbi8qIHN0eWxpbmcgZm9yIGFsbCBncmlkIGRpc3BsYXlzICovXFxuLmdyaWQtYm94IHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LWd1aWRlLWxnKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctZ3JpZCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLXNpZGUtc2l6ZSksIDFmcik7XFxuICAgIGdhcDogdmFyKC0tZ2FwLWxnKTtcXG59XFxuXFxuLmdyaWQtYm94ID4gZGl2IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY2VsbCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ3VpZGUtdG9wLFxcbi5ndWlkZS1jb3JuZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLWdhcC1sZykgKiAuNjYpO1xcbn1cXG5cXG4uZ3VpZGUtbGVmdCxcXG4uZ3VpZGUtY29ybmVyIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLWdhcC1sZykgKiAuNjYpO1xcbn1cXG5cXG4uZ3VpZGUtY29ybmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctZ3JpZCkgIWltcG9ydGFudDtcXG59XFxuXFxuLyogU3R5bGluZyBmb3IgYWxsIGdyaWQgaWNvbnMgKi9cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLXNoaXApICFpbXBvcnRhbnQ7XFxufVxcblxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtbWlzcykgIWltcG9ydGFudDtcXG59XFxuXFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWhpdCkgIWltcG9ydGFudDtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtc2VsZWN0ZWQpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdyAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc2V0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW4gIWltcG9ydGFudDtcXG59XFxuXFxuLnNldC5ob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5ICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIG5vdGlmaWNhdGlvbnMgKi9cXG4uZ2FtZW92ZXItY29udGFpbmVyLFxcbi50dXJuLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5nYW1lb3Zlci1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnR1cm4tY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5nYW1lb3Zlci1jb250ZW50LFxcbi50dXJuLWNvbnRlbnQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4jbWFpbi1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLyogU3R5bGluZyBmb3Igc2V0IGRpc3BsYXkgKi9cXG4jc2V0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDAgMSA1NXZoO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIFxcbn1cXG5cXG4vKiAuc2V0LWdyaWQge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtZ3VpZGUtbGcpO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICBnYXA6IHZhcigtLWdhcC1sZyk7XFxuICAgIG1pbi1oZWlnaHQ6IDA7XFxufSAqL1xcblxcbi5zZXQtdHJheSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcblxcbn1cXG5cXG4udHJheS1pdGVtIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6bGVmdDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmljb24tcGllY2Uge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGdyaWQtcm93OiAxIC8gLTE7XFxuICAgIGJvcmRlcjogdmFyKC0tZ2FwLXNtKSBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogdmFyKC0tZ2FwLXNtKTtcXG59XFxuXFxuLmljb24tcGllY2UuaWNvbi1kaXNhYmxlPmRpdjpub3QoI2RyYWdnZWQpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaWNvbi1jZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY2VsbCk7XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxufVxcblxcbi5kcmFnLWNlbGwge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbiNkcmFnZ2VkIHtcXG4gICAgei1pbmRleDogOTtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcXG59XFxuXFxuLmRyYWcteSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b2dnbGUtcm90YXRlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4jdG9nZ2xlLWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiN0b2dnbGUtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbiN0b2dnbGUtdGV4dCB7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdG9wOiAgNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuI3RvZ2dsZS1ib2R5IHtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbn1cXG5cXG4jdG9nZ2xlLWJvZHk6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIHRvcDogMjBweDtcXG4gICAgbGVmdDogNzBweDtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJvcmRlcjogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHJlZDtcXG59XFxuXFxuI3N1Ym1pdC1iYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jc3VibWl0LWJjIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNzdWJtaXQtbWMge1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIHBsYXkgZGlzcGxheXMgKi9cXG4ucGxheS1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDAgLjVyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ucGxheS1zdGF0dXMge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1ndWlkZS1zbSk7XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGdhcDogdmFyKC0tZ2FwLXNtKTtcXG59XFxuXFxuLnBsYXktc3RhdHVzIC5ndWlkZS1sZWZ0IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLWdhcC1zbSkgKiAuNjYpO1xcbn1cXG5cXG4ucGxheS1zdGF0dXMgLmd1aWRlLXRvcCB7XFxuICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tZ2FwLXNtKSAqIC42Nik7XFxufVxcblxcbi5wbGF5LWFyZWEge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtZ3VpZGUtbGcpO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiB2YXIoLS1nYXAtbGcpO1xcbn1cXG5cXG4ucGxheS1hcmVhID4gLm9wZW4tY2VsbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWhvdmVyKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucGxheS1idXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogU3R5bGluZyBmb3Igd2lkZSB2aWV3cyBvZiBwbGF5IGRpc3BsYXkgICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDU3MHB4KSB7XFxuICAgIC5wbGF5LWNvbnRhaW5lciB7XFxuICAgICAgICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgfVxcblxcbiAgICAucGxheS1hcmVhIHtcXG4gICAgICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgfVxcblxcbiAgICAucGxheS1zdGF0dXMge1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLnBsYXktYnV0dG9uIHtcXG4gICAgICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksU0FBUztJQUNULFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsOEJBQThCO0lBQzlCLHlDQUF5QztJQUN6QyxrQ0FBa0M7SUFDbEMsV0FBVztBQUNmOztBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLCtCQUErQjtJQUMvQixzQ0FBc0M7QUFDMUM7O0FBRUEsa0NBQWtDO0FBQ2xDO0lBQ0ksK0JBQStCO0lBQy9CLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLG9EQUFvRDtJQUNwRCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSx3Q0FBd0M7QUFDNUM7O0FBRUE7O0lBRUksdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksMkNBQTJDO0FBQy9DOztBQUVBLCtCQUErQjtBQUMvQjtJQUNJLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLGtEQUFrRDtBQUN0RDs7QUFFQTtJQUNJLG1DQUFtQztB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Y2s7XFxuICAgIC0tYmctY2VsbDogcmVkO1xcbiAgICAtLWZvbnQtZ3VpZGUtbGc6IDEuNXJlbTtcXG4gICAgLS1mb250LWd1aWRlLXNtOiAuN3JlbTtcXG4gICAgLS1nYXAtbGc6IDNweDtcXG4gICAgLS1nYXAtc206IDJweDtcXG4gICAgLS1idXR0b24tZmctZGlzYWJsZTogZ3JleTtcXG4gICAgLS1idXR0b24tZmctbm9ybWFsOiBibGFjaztcXG4gICAgLS1idXR0b24tYmctZGlzYWJsZTogZGFya2dyZXk7XFxuICAgIC0tYnV0dG9uLWJnLW5vcm1hbDogd2hpdGU7XFxuICAgIC0tYnV0dG9uLWZvbnQtc2l6ZTogMnJlbTtcXG4gICAgLS1ib2FyZC1oaXQ6IGRhcmtyZWQ7XFxuICAgIC0tYm9hcmQtaG92ZXI6IGFxdWE7XFxuICAgIC0tYm9hcmQtbWlzczogZ3JleTtcXG4gICAgLS1ib2FyZC1zZWxlY3RlZDogeWVsbG93O1xcbiAgICAtLWJvYXJkLXNoaXA6IGdyZWVuO1xcbiAgICAtLXNpZGUtc2l6ZTogMTA7XFxufVxcblxcblxcbmJvZHksIGh0bWwge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iZy1ub3JtYWwpO1xcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWZnLW5vcm1hbCk7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLWJ1dHRvbi1mZy1ub3JtYWwpO1xcbiAgICBmb250LXNpemU6IHZhcigtLWJ1dHRvbi1mb250LXNpemUpO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYnV0dG9uOmRpc2FibGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJnLWRpc2FibGUpO1xcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWZnLWRpc2FibGUpO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1mZy1kaXNhYmxlKTtcXG59XFxuXFxuLyogc3R5bGluZyBmb3IgYWxsIGdyaWQgZGlzcGxheXMgKi9cXG4uZ3JpZC1ib3gge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtZ3VpZGUtbGcpO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1ncmlkKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tc2lkZS1zaXplKSwgMWZyKTtcXG4gICAgZ2FwOiB2YXIoLS1nYXAtbGcpO1xcbn1cXG5cXG4uZ3JpZC1ib3ggPiBkaXYge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jZWxsKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ndWlkZS10b3AsXFxuLmd1aWRlLWNvcm5lciB7XFxuICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tZ2FwLWxnKSAqIC42Nik7XFxufVxcblxcbi5ndWlkZS1sZWZ0LFxcbi5ndWlkZS1jb3JuZXIge1xcbiAgICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tZ2FwLWxnKSAqIC42Nik7XFxufVxcblxcbi5ndWlkZS1jb3JuZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1ncmlkKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciBhbGwgZ3JpZCBpY29ucyAqL1xcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtc2hpcCkgIWltcG9ydGFudDtcXG59XFxuXFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1taXNzKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtaGl0KSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1zZWxlY3RlZCkgIWltcG9ydGFudDtcXG59XFxuXFxuLmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zZXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbiAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc2V0LmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXkgIWltcG9ydGFudDtcXG59XFxuXFxuLyogU3R5bGluZyBmb3Igbm90aWZpY2F0aW9ucyAqL1xcbi5nYW1lb3Zlci1jb250YWluZXIsXFxuLnR1cm4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmdhbWVvdmVyLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4udHVybi1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmdhbWVvdmVyLWNvbnRlbnQsXFxuLnR1cm4tY29udGVudCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbiNtYWluLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciBzZXQgZGlzcGxheSAqL1xcbiNzZXQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMCAxIDU1dmg7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgXFxufVxcblxcbi8qIC5zZXQtZ3JpZCB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1ndWlkZS1sZyk7XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuICAgIGdhcDogdmFyKC0tZ2FwLWxnKTtcXG4gICAgbWluLWhlaWdodDogMDtcXG59ICovXFxuXFxuLnNldC10cmF5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuXFxufVxcblxcbi50cmF5LWl0ZW0ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDpsZWZ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uaWNvbi1waWVjZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAtMTtcXG4gICAgYm9yZGVyOiB2YXIoLS1nYXAtc20pIHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiB2YXIoLS1nYXAtc20pO1xcbn1cXG5cXG4uaWNvbi1waWVjZS5pY29uLWRpc2FibGU+ZGl2Om5vdCgjZHJhZ2dlZCkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5pY29uLWNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jZWxsKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG59XFxuXFxuLmRyYWctY2VsbCB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuI2RyYWdnZWQge1xcbiAgICB6LWluZGV4OiA5O1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZHJhZy15IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZ2dsZS1yb3RhdGUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbiN0b2dnbGUtYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3RvZ2dsZS1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuI3RvZ2dsZS10ZXh0IHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0b3A6ICA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4jdG9nZ2xlLWJvZHkge1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxufVxcblxcbiN0b2dnbGUtYm9keTphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gICAgdG9wOiAyMHB4O1xcbiAgICBsZWZ0OiA3MHB4O1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYm9yZGVyOiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItbGVmdC1jb2xvcjogcmVkO1xcbn1cXG5cXG4jc3VibWl0LWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNzdWJtaXQtYmMge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3N1Ym1pdC1tYyB7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG59XFxuXFxuLyogU3R5bGluZyBmb3IgcGxheSBkaXNwbGF5cyAqL1xcbi5wbGF5LWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMCAuNXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5wbGF5LXN0YXR1cyB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LWd1aWRlLXNtKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZ2FwOiB2YXIoLS1nYXAtc20pO1xcbn1cXG5cXG4ucGxheS1zdGF0dXMgLmd1aWRlLWxlZnQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tZ2FwLXNtKSAqIC42Nik7XFxufVxcblxcbi5wbGF5LXN0YXR1cyAuZ3VpZGUtdG9wIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1nYXAtc20pICogLjY2KTtcXG59XFxuXFxuLnBsYXktYXJlYSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1ndWlkZS1sZyk7XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IHZhcigtLWdhcC1sZyk7XFxufVxcblxcbi5wbGF5LWFyZWEgPiAub3Blbi1jZWxsOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtaG92ZXIpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wbGF5LWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciB3aWRlIHZpZXdzIG9mIHBsYXkgZGlzcGxheSAgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNTcwcHgpIHtcXG4gICAgLnBsYXktY29udGFpbmVyIHtcXG4gICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICB9XFxuXFxuICAgIC5wbGF5LWFyZWEge1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICB9XFxuXFxuICAgIC5wbGF5LXN0YXR1cyB7XFxuICAgICAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAucGxheS1idXR0b24ge1xcbiAgICAgICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IG1ha2VFbGVtZW50LCBhZGp1c3RUb0luZGV4LCBidWlsZEdyaWQgfSBmcm9tICcuL0RPTUhlbHBlcnMuanMnO1xuaW1wb3J0IHsgU2V0UGxheWVyIH0gZnJvbSAnLi9TZXRQbGF5ZXIuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZURPTSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jykuc2V0QXR0cmlidXRlKCdvbmRyYWdzdGFydCcsICdyZXR1cm4gZmFsc2U7Jyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnNldEF0dHJpYnV0ZSgnb25kcm9wJywgJ3JldHVybiBmYWxzZScpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGlkOiAnbWFpbi1jb250YWluZXInIH0pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAvLyBjb25zdCBzZXRQbGF5ZXIgPSBuZXcgU2V0UGxheWVyKDEwLCBbNSwgNCwgMywgMywgMl0pO1xuICAgIC8vIHNldFBsYXllci5kaXNwbGF5KCk7XG59XG5cbi8vIERpc3BsYXkgZm9yIHRoZSBnZW5lcmFsIHBsYXkgYXJlYVxuZXhwb3J0IGNsYXNzIFBsYXlCb2FyZCB7XG4gICAgY29uc3RydWN0b3Ioc2l6ZSwgYWxsU2hpcHMpIHtcbiAgICAgICAgdGhpcy5TSVpFID0gc2l6ZTtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ3BsYXktY29udGFpbmVyJyB9KTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRHcmlkKHNpemUsICdwbGF5LWFyZWEnKSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkR3JpZChzaXplLCAncGxheS1zdGF0dXMnKSlcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2J1dHRvbicsIHsgY2xhc3M6ICdwbGF5LWJ1dHRvbicsIGRpc2FibGVkOiAndHJ1ZScgfSwgJ1NFTEVDVCBUQVJHRVQnKSk7XG4gICAgICAgIGFsbFNoaXBzLmZvckVhY2goaW5kZXggPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0dXMoaW5kZXgsICdzaGlwJyk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIC8vIGdldHRlcnMgZm9yIGJvYXJkIGVsZW1lbnRzXG4gICAgZ2V0Q29udGFpbmVyKCkgeyByZXR1cm4gdGhpcy5jb250YWluZXI7IH1cbiAgICBnZXRQbGF5KCkgeyByZXR1cm4gdGhpcy5nZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yKCcucGxheS1hcmVhJyk7IH1cbiAgICBnZXRTdGF0dXMoKSB7IHJldHVybiB0aGlzLmdldENvbnRhaW5lcigpLnF1ZXJ5U2VsZWN0b3IoJy5wbGF5LXN0YXR1cycpOyB9XG4gICAgZ2V0QnV0dG9uKCkgeyByZXR1cm4gdGhpcy5nZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yKCcucGxheS1idXR0b24nKTsgfVxuICAgIFxuICAgIC8vIEhlbHBlcnMgdG8gaGFuZGxlIHRoZSBkaXNwbGF5ZWQgZ3VpZGVzXG4gICAgZ2V0R3VpZGVJbmRleChpbmRleCkgeyByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIChpbmRleCAlIHRoaXMuU0laRSkpLmNvbmNhdChNYXRoLmZsb29yKGluZGV4IC8gdGhpcy5TSVpFKSArIDEpOyB9XG5cbiAgICBkaXNwbGF5Qm9hcmQoKSB7IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKHRoaXMuZ2V0Q29udGFpbmVyKCkpOyB9XG4gICAgcmVtb3ZlQm9hcmQoKSB7IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5LWNvbnRhaW5lcicpLnJlbW92ZSgpOyB9XG5cbiAgICAvLyBzZXQgdGhlIGRpc3BsYXkncyBidXR0b24gdGV4dCBhbmQgZGlzYWJsZWQgc3RhdHVzXG4gICAgc2V0QnV0dG9uKGluZGV4KSB7XG4gICAgICAgIHRoaXMuZ2V0QnV0dG9uKCkuZGlzYWJsZWQgPSAoaW5kZXgpID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICB0aGlzLmdldEJ1dHRvbigpLmlubmVySFRNTCA9IChpbmRleCkgPyBgQVRUQUNLICR7dGhpcy5nZXRHdWlkZUluZGV4KGluZGV4KX1gIDogYFNFTEVDVCBUQVJHRVRgOyBcbiAgICB9O1xuXG4gICAgLy8gc3dpdGNoZXMgYSBjZWxsIGZyb20gb3BlbiB0byBzZWxlY3RlZFxuICAgIHRvZ2dsZVNlbGVjdGVkKGluZGV4KSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmdldFBsYXkoKS5jaGlsZHJlbi5pdGVtKGFkanVzdFRvSW5kZXgoaW5kZXgsIHRoaXMuU0laRSkpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4tY2VsbCcpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XG4gICAgfVxuXG4gICAgLy8gc2V0IGNsYXNzIGZvciBjZWxsIGluIHRoZSBwbGF5IGdyaWRcbiAgICB1cGRhdGVQbGF5KGluZGV4LCB0b1VwZGF0ZSkge1xuICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5nZXRQbGF5KCkuY2hpbGRyZW4uaXRlbShhZGp1c3RUb0luZGV4KGluZGV4LCB0aGlzLlNJWkUpKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQodG9VcGRhdGUpO1xuICAgIH1cblxuICAgIC8vIHNldCBjbGFzcyBmb3IgY2VsbCBpbiB0aGUgc3RhdHVzIGdyaWRcbiAgICB1cGRhdGVTdGF0dXMoaW5kZXgsIHRvVXBkYXRlKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmdldFN0YXR1cygpLmNoaWxkcmVuLml0ZW0oYWRqdXN0VG9JbmRleChpbmRleCwgdGhpcy5TSVpFKSk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCh0b1VwZGF0ZSk7XG4gICAgfVxuXG4gICAgLy8gZGlzcGxheSBhIHByaXZhY3kgY292ZXIgb24gdHVybiBzd2l0Y2gtb2ZmcywgdGFrZXMgYSBzdHJpbmcgZm9yIHBsYXllcidzIG5hbWUsIHJldHVybnMgYnV0dG9uXG4gICAgY3JlYXRlVHVybkNvdmVyKHBsYXllcikge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ3R1cm4tY29udGFpbmVyJyB9KTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAndHVybi1jb250ZW50JyB9KTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gbWFrZUVsZW1lbnQoJ2J1dHRvbicsIHsgY2xhc3M6ICd0dXJuLWJ1dHRvbicgfSwgJ1JFQURZJyk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2gxJywge30sIGAke3BsYXllci50b1VwcGVyQ2FzZSgpfSdzYCkpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdoMScsIHt9LCAnVFVSTicpKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9XG5cbiAgICBjbGVhclR1cm5Db3ZlcigpIHtcbiAgICAgICAgdGhpcy5nZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yKCcudHVybi1jb250YWluZXInKS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICAvLyBkaXNwbGF5IGEgZ2FtZW92ZXIgbWVzc2FnZSB3aXRoIGN1c3RvbiByZXN1bHQgc3RyaW5nLCByZXR1cm5zIGJ1dHRvbiBmb3IgYmluZGluZ1xuICAgIGNyZWF0ZUdhbWVPdmVyKHJlc3VsdCkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2dhbWVvdmVyLWNvbnRhaW5lcicgfSk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2dhbWVvdmVyLWNvbnRlbnQnIH0pO1xuICAgICAgICBjb25zdCBidXR0b24gPSBtYWtlRWxlbWVudCgnYnV0dG9uJywgeyBjbGFzczogJ2dhbWVvdmVyLWJ1dHRvbicgfSwgJ1BMQVkgQUdBSU4/JylcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnaDEnLCB7fSwgcmVzdWx0KSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICB0aGlzLmdldENvbnRhaW5lcigpLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgIHJldHVybiBidXR0b247XG4gICAgfVxufSIsIi8vIEhlbHBlciBmdW5jdGlvbiBmb3IgZWFzeSBlbGVtZW50IGNyZWF0aW9uXG4vLyB1c2U6ICg8c3RyaW5nPiwgPG9iamVjdD4gb2YgcHJvcGVydGllcyBhcyB5b3Ugd291bGQgdXNlIHNldEF0dHJpYnV0ZSwgPHN0cmluZz5pbm5lckhUTUwpXG5leHBvcnQgZnVuY3Rpb24gbWFrZUVsZW1lbnQodHlwZSwgcHJvcGVydGllcyA9IHt9LCBpbm5lciA9IG51bGwpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBmb3IgKGxldCBrZXkgaW4gcHJvcGVydGllcykgeyBlbGVtZW50LnNldEF0dHJpYnV0ZShgJHtrZXl9YCwgYCR7cHJvcGVydGllc1trZXldfWApIH07XG4gICAgaWYgKGlubmVyKSB7IGVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXIgfTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkanVzdFRvSW5kZXgoaW5kZXgsIHNpemUpIHsgXG4gICAgcmV0dXJuIChzaXplICsgMSkgKiAoaW5kZXggLyBzaXplICsgMSkgKyAxO1xufVxuXG4vLyBjcmVhdGUgYSB2YXJpYWJseSBzaXplZCBncmlkIHdpdGggZ3VpZGUgbWVhc3VyZXMgb24gdG9wIGFuZCBsZWZ0IGhhbmQgc2lkZVxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkR3JpZChzaWRlU2l6ZSwgYWRkQ2xhc3MpIHtcbiAgICBjb25zdCBTSVpFID0gTWF0aC5wb3coc2lkZVNpemUgKyAxLCAyKTtcbiAgICBjb25zdCBncmlkQm94ID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdncmlkLWJveCcgfSk7XG4gICAgaWYgKGFkZENsYXNzKSB7IGdyaWRCb3guY2xhc3NMaXN0LmFkZChhZGRDbGFzcyk7IH1cbiAgICBsZXQgY29sVmFsdWUgPSA2NTtcbiAgICBsZXQgcm93VmFsdWUgPSAxO1xuICAgIGxldCBjZWxsSW5kZXggPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgU0laRTsgaSsrKSB7IFxuICAgICAgICBpZiAoaSA9PT0gMCkgeyBncmlkQm94LmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnZ3VpZGUtY29ybmVyJyB9KSkgfVxuICAgICAgICBlbHNlIGlmIChpIDw9IHNpZGVTaXplKSB7IGdyaWRCb3guYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdndWlkZS10b3AnIH0sIFN0cmluZy5mcm9tQ2hhckNvZGUoY29sVmFsdWUrKykpKSB9XG4gICAgICAgIGVsc2UgaWYgKGkgJSAoc2lkZVNpemUgKyAxKSA9PT0gMCkgeyBncmlkQm94LmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnZ3VpZGUtbGVmdCd9LCByb3dWYWx1ZSsrKSkgfVxuICAgICAgICBlbHNlIHsgZ3JpZEJveC5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ29wZW4tY2VsbCBzZWxlY3RhYmxlJywgJ2RhdGEtaW5kZXgnOiBjZWxsSW5kZXgrKyB9KSkgfTtcbiAgICB9XG5cbiAgICAvLyBGaW5kIGEgYmV0dGVyIGhvbWUgZm9yIHRoaXNcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6cm9vdCcpLnN0eWxlLnNldFByb3BlcnR5KCctLXNpZGUtc2l6ZScsIHNpZGVTaXplICsgMSk7XG4gICAgXG4gICAgcmV0dXJuIGdyaWRCb3g7XG59XG5cbi8vIHNldFBsYXllciBET00gYnVpbGRlcnNcblxuLy8gY29udGFpbmVyIGZvciBpY29ucyBpbmRleGVzIHRoZSBpY29ucyBvbiBvcmRlciBhZGRlZFxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkU2V0UGxheWVyKHNpemUsIHBpZWNlcykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGlkOiAnc2V0LWNvbnRhaW5lcicgfSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkR3JpZChzaXplKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkVG9nZ2xlQmFyKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWtlVHJheShwaWVjZXMpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRTdWJtaXRCYXIoKSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gYnVpbGRTdWJtaXRCYXIoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgaWQ6ICdzdWJtaXQtYmFyJyB9KTtcbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBpZDogJ3N1Ym1pdC1iYycgfSk7XG4gICAgY29uc3QgbXVsdGlDb250YWluZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBpZDogJ3N1Ym1pdC1tYycgfSk7XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdidXR0b24nLCB7IGlkOiAnc3VibWl0LWJ0bicsIGRpc2FibGVkOiAndHJ1ZScgfSwgJ0NPTlRJTlVFJykpO1xuICAgIG11bHRpQ29udGFpbmVyLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdpbnB1dCcsIHsgdHlwZTogJ2NoZWNrYm94JywgaWQ6ICdzdWJtaXQtY2hrJyB9KSlcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobXVsdGlDb250YWluZXIpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkVG9nZ2xlQmFyKCkge1xuICAgIGNvbnN0IHRvZ2dsZWJhciA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGlkOiAndG9nZ2xlLWJhcicgfSk7XG4gICAgY29uc3QgdG9nZ2xlQ29udGFpbmVyID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgaWQ6ICd0b2dnbGUtY29udGFpbmVyJyB9KVxuICAgIGNvbnN0IHRvZ2dsZUJvZHkgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBpZDogJ3RvZ2dsZS1ib2R5JywgJ2RhdGEteSc6ICdmYWxzZScgfSk7XG4gICAgY29uc3QgdG9nZ2xlVGV4dCA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGlkOiAndG9nZ2xlLXRleHQnIH0sICdYJyk7XG4gICAgdG9nZ2xlQm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZ2dsZS1yb3RhdGUnKSkge1xuICAgICAgICAgICAgZS50YXJnZXQuc2V0QXR0cmlidXRlKCdkYXRhLXknLCAnZmFsc2UnKTtcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3RvZ2dsZS1yb3RhdGUnKTtcbiAgICAgICAgICAgIHRvZ2dsZVRleHQuaW5uZXJIVE1MID0gJ1gnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZS50YXJnZXQuc2V0QXR0cmlidXRlKCdkYXRhLXknLCAndHJ1ZScpO1xuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgndG9nZ2xlLXJvdGF0ZScpO1xuICAgICAgICAgICAgdG9nZ2xlVGV4dC5pbm5lckhUTUwgPSAnWSc7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB0b2dnbGVDb250YWluZXIuYXBwZW5kQ2hpbGQodG9nZ2xlQm9keSk7XG4gICAgdG9nZ2xlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZ2dsZVRleHQpO1xuICAgIHRvZ2dsZWJhci5hcHBlbmRDaGlsZCh0b2dnbGVDb250YWluZXIpXG4gICAgcmV0dXJuIHRvZ2dsZWJhcjtcbn1cblxuZnVuY3Rpb24gbWFrZVRyYXkocGllY2VzKSB7XG4gICAgY29uc3QgdHJheSA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnc2V0LXRyYXknIH0pO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDAsIGogPSBNYXRoLmZsb29yKChwaWVjZXMubGVuZ3RoKSAvIDIpOyBqIDwgcGllY2VzLmxlbmd0aDsgaSsrLCBqKyspIHtcbiAgICAgICAgaWYgKGkgPCBNYXRoLmZsb29yKHBpZWNlcy5sZW5ndGggLyAyKSkgeyBcbiAgICAgICAgICAgIHRyYXkuYXBwZW5kQ2hpbGQobWFrZVRyYXlJdGVtKHBpZWNlc1tpXSkpO1xuICAgICAgICAgICAgdHJheS5sYXN0Q2hpbGQuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJheScsIGAke2luZGV4Kyt9YCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJheS5hcHBlbmRDaGlsZChtYWtlVHJheUl0ZW0ocGllY2VzW2pdKSk7XG4gICAgICAgIHRyYXkubGFzdENoaWxkLmZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKCdkYXRhLXRyYXknLCBgJHtpbmRleCsrfWApO1xuICAgIH1cbiAgICByZXR1cm4gdHJheTtcbn1cblxuLy8gY3JlYXRlIGhvbGRlciBmb3IgaWNvbnNcbmZ1bmN0aW9uIG1ha2VUcmF5SXRlbShwaWVjZSkge1xuICAgIGNvbnN0IGl0ZW0gPSBtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ3RyYXktaXRlbScgfSlcbiAgICBpdGVtLmFwcGVuZENoaWxkKG1ha2VQaWVjZUljb24ocGllY2UpKTtcbiAgICByZXR1cm4gaXRlbTtcbn1cblxuLy8gY3JlYXRlIGljb25zXG5mdW5jdGlvbiBtYWtlUGllY2VJY29uKHNpemUpIHtcbiAgICBjb25zdCBpY29uID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdpY29uLXBpZWNlJyB9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICBjb25zdCBjZWxsID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdpY29uLWNlbGwnIH0pO1xuICAgICAgICBpY29uLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIH1cbiAgICBpY29uLmRhdGFzZXQuc2l6ZSA9IHNpemU7XG4gICAgLy8gaWNvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4gdGhpcy5kcmFnU3RhcnQoZSkpO1xuICAgIHJldHVybiBpY29uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZURyYWdJY29uKHNpemUsIHZlcnRpY2FsLCB0cmF5LCBjZWxsU2l6ZSkge1xuICAgIGNvbnN0IGRyYWdJY29uID0gbWFrZVBpZWNlSWNvbihOdW1iZXIoc2l6ZSkpO1xuICAgIGRyYWdJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZHJhZ2dlZCcpO1xuICAgIGRyYWdJY29uLnNldEF0dHJpYnV0ZSgnZGF0YS10cmF5JywgdHJheSk7XG4gICAgaWYgKHZlcnRpY2FsKSB7IGRyYWdJY29uLmNsYXNzTGlzdC5hZGQoJ2RyYWcteScpIH1cbiAgICBbLi4uZHJhZ0ljb24uY2hpbGRyZW5dLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICBjaGlsZC5zdHlsZS5oZWlnaHQgPSBjZWxsU2l6ZTtcbiAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmFkZCgnZHJhZy1jZWxsJylcbiAgICB9KTtcbiAgICByZXR1cm4gZHJhZ0ljb247IFxufSIsImxldCBlbGVtZW50O1xubGV0IHhPZmY7XG5sZXQgeU9mZjtcbmNvbnN0IG1vdmVIYW5kbGVyID0gbW92ZS5iaW5kKHRoaXMpO1xuY29uc3QgZW5kSGFuZGxlciA9IGVuZC5iaW5kKHRoaXMpO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBEcmFnRWxlbWVudChlLCB4LCB5KSB7XG4gICAgZWxlbWVudCA9IGU7XG4gICAgeE9mZiA9IHg7XG4gICAgeU9mZiA9IHk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdmVIYW5kbGVyLCB0cnVlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGVuZEhhbmRsZXIsIHRydWUpO1xufVxuXG5cbmZ1bmN0aW9uIG1vdmUoZSkge1xuICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZWxlbWVudC5zdHlsZS50b3AgPSAoZS5jbGllbnRZIC0geU9mZikgKyAncHgnO1xuICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IChlLmNsaWVudFggLSB4T2ZmKSArICdweCc7XG59XG5cbmZ1bmN0aW9uIGVuZChlKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdmVIYW5kbGVyLCB0cnVlKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGVuZEhhbmRsZXIsIHRydWUpO1xufSIsImltcG9ydCB7IFNoaXAgfSBmcm9tICcuL1NoaXAuanMnO1xuXG5leHBvcnQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihzaXplKSB7XG4gICAgICAgIHRoaXMuU0laRSA9IHNpemU7XG4gICAgICAgIHRoaXMuYWxsU2hpcHMgPSBbXTtcbiAgICAgICAgdGhpcy5ib2FyZCA9IFtdO1xuICAgICAgICB0aGlzLmFsbEhpdCA9IFtdO1xuICAgICAgICB0aGlzLmFsbE1pc3MgPSBbXTtcbiAgICAgICAgdGhpcy5hbGxQbGFjZWQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplICogc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkLnB1c2goe3NoaXA6IG51bGwsIGhpdDogZmFsc2V9KVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGdldEhpdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxsSGl0O1xuICAgIH1cblxuICAgIGdldE1pc3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFsbE1pc3M7XG4gICAgfVxuXG4gICAgZ2V0UGxhY2VkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hbGxQbGFjZWQ7XG4gICAgfVxuXG4gICAgZ2V0U2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuU0laRSAqIHRoaXMuU0laRTtcbiAgICB9XG5cbiAgICBpc0hpdChpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFtpbmRleF0uaGl0O1xuICAgIH1cblxuICAgIC8vIHBsYWNlIG5ldyBzaGlwIG9uIGdhbWVib2FyZCByZXR1cm5zIHNoaXAgb3IgZmFsc2UgaWYgbm90IGxlZ2FsIHBsYWNlbWVudFxuICAgIGFkZFNoaXAoc2hpcFNpemUsIGhlYWQsIHZlcnRpY2FsID0gZmFsc2UpIHtcbiAgICAgICAgLy8gZGlzYWxsb3cgcGxhY2VtZW50IGJleW9uZCBib2FyZCdzIGJvdW5kYXJpZXNcbiAgICAgICAgaWYgKCF2ZXJ0aWNhbCAmJiAoKGhlYWQgJSB0aGlzLlNJWkUpICsgc2hpcFNpemUgPiB0aGlzLlNJWkUpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICh2ZXJ0aWNhbCAmJiAoTWF0aC5mbG9vcihoZWFkIC8gdGhpcy5TSVpFKSkgKyBzaGlwU2l6ZSA+IHRoaXMuU0laRSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHRvUGxhY2UgPSB0aGlzLmdldEluZGVjZXMoc2hpcFNpemUsIGhlYWQsIHZlcnRpY2FsKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGluc3BlY3QgZm9yIGFueSBvdmVybGFwcGluZyBjb25mbGljdFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvUGxhY2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3RvUGxhY2VbaV1dLnNoaXApIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBuZXdTaGlwID0gbmV3IFNoaXAoc2hpcFNpemUpO1xuICAgICAgICB0b1BsYWNlLmZvckVhY2goaW5kZXggPT4ge1xuICAgICAgICAgICAgdGhpcy5hbGxQbGFjZWQucHVzaChpbmRleCk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW2luZGV4XS5zaGlwID0gbmV3U2hpcFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hbGxTaGlwcy5wdXNoKHRvUGxhY2UpO1xuICAgICAgICByZXR1cm4gbmV3U2hpcDtcbiAgICB9XG5cbiAgICAvLyByZXR1cm5zIGFuIGFycmF5IG9mIGEgc2hpcCdzIHNlcXVlbnRpYWwgcG9zaXRpb25pbmdcbiAgICBnZXRJbmRlY2VzKHNpemUsIGhlYWQsIHZlcnRpY2FsKSB7XG4gICAgICAgIGNvbnN0IGluZGVjZXMgPSBbXTtcbiAgICAgICAgaWYgKHZlcnRpY2FsKSB7XG4gICAgICAgICAgICB3aGlsZSAoc2l6ZS0tID4gMCkge1xuICAgICAgICAgICAgICAgIGluZGVjZXMucHVzaChoZWFkKTtcbiAgICAgICAgICAgICAgICBoZWFkICs9IHRoaXMuU0laRTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aGlsZSAoc2l6ZS0tID4gMCkge1xuICAgICAgICAgICAgICAgIGluZGVjZXMucHVzaChoZWFkKyspO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbmRlY2VzO1xuICAgIH1cblxuICAgIC8vIHNldHMgYXR0YWNrIGFjdGlvbnMsIG11c3QgYmUgaW50ZWdlciBhbmQgd2l0aGluIHRoZSBnYW1lYm9hcmQsIGlnbm9yZXMgc3BhY2VzIGFscmVhZHkgaGl0XG4gICAgcmVjZWl2ZUF0dGFjayhpbmRleCkge1xuICAgICAgICBpZiAodHlwZW9mIGluZGV4ICE9ICdudW1iZXInKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbHVlIG11c3QgYmUgTnVtYmVyJykgfTtcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKGluZGV4KSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdPbmx5IGludGVnZXIgdmFsdWVzJykgfTtcbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLmJvYXJkLmxlbmd0aCkgeyB0aHJvdyBuZXcgUmFuZ2VFcnJvcihgdmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kICR7dGhpcy5ib2FyZC5sZW5ndGggLSAxfWApOyB9XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW2luZGV4XS5oaXQpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgdGhpcy5ib2FyZFtpbmRleF0uaGl0ID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbaW5kZXhdLnNoaXApIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbaW5kZXhdLnNoaXAuaGl0KCk7XG4gICAgICAgICAgICB0aGlzLmFsbEhpdC5wdXNoKGluZGV4KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkW2luZGV4XS5zaGlwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hbGxNaXNzLnB1c2goaW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjb25maXJtcyB0aGF0IHRoZSBzaGlwIGF0IGVhY2ggZnJvbnQgcG9zaXRpb24gaW4gYWxsU2hpcHMgaXMgc3Vua1xuICAgIGlzU3VuaygpIHtcbiAgICAgICAgbGV0IHN1bmsgPSB0cnVlO1xuICAgICAgICB0aGlzLmFsbFNoaXBzLmZvckVhY2goc2hpcCA9PiB7IFxuICAgICAgICAgICAgaWYgKCF0aGlzLmJvYXJkW3NoaXBbMF1dLnNoaXAuaXNTdW5rKCkpIHsgc3VuayA9IGZhbHNlOyB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc3VuaztcbiAgICB9XG59IiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vR2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBQbGF5Qm9hcmQgfSBmcm9tIFwiLi9ET01Db250cm9sXCI7XG4vLyBob2xkcyBwbGF5ZXIncyBnYW1lYm9hcmQsIGNhbiBkZXRlcm1pbmUgbmV4dCBtb3ZlIGlmIGNwdSBcbi8vIHBhc3MgYW4gYXJyYXkgb2YgYXJyYXlzIGluIFtzaGlwIHNpemUsIHNoaXAgaW5kZXgsIGlzIHZlcnRpY2FsKHRydWUvZmFsc2UpXSBmb3JtYXRcbi8vIHRvIHBvcHVsYXRlIHRoZSBnYW1lYm9hcmRcbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHRvQWRkID0gW10pIHtcbiAgICAgICAgdGhpcy5TSVpFID0gMTA7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgR2FtZWJvYXJkKHRoaXMuU0laRSk7XG4gICAgICAgIHRoaXMubmV4dE1vdmUgPSBbXTtcbiAgICAgICAgdG9BZGQuZm9yRWFjaChzaGlwID0+IHRoaXMuYm9hcmQuYWRkU2hpcChzaGlwWzBdLCBzaGlwWzFdLCBzaGlwWzJdKSApO1xuICAgICAgICB0aGlzLmRpc3BsYXkgPSBuZXcgUGxheUJvYXJkKHRoaXMuU0laRSwgdGhpcy5nZXRBbGxTaGlwSW5kZXgoKSk7XG4gICAgfTtcblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgZ2V0RGlzcGxheSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzcGxheTtcbiAgICB9XG5cbiAgICBnZXRBbGxTaGlwSW5kZXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkLmdldFBsYWNlZCgpO1xuICAgIH1cblxuICAgIGdldE1pc3NJbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQuZ2V0TWlzcygpO1xuICAgIH1cblxuICAgIGdldEhpdEluZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZC5nZXRIaXQoKTtcbiAgICB9XG5cbiAgICAvLyBjb25maXJtcyBpZiBwbGF5ZXIgaXMgZGVmZWF0ZWRcbiAgICBpc0RlZmVhdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZC5pc1N1bmsoKTtcbiAgICB9XG5cbiAgICAvLyByZXR1cm5zIGVpdGhlciB0aGUgaGl0IHNoaXAgb3IgbnVsbFxuICAgIHRha2VIaXQoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmJvYXJkLnJlY2VpdmVBdHRhY2soaW5kZXgpKSA/ICdoaXQnIDogJ21pc3MnO1xuICAgIH1cblxuICAgIC8vIGNvbmZpcm1zIGlmIGEgbW92ZSBpcyB2YWxpZFxuICAgIGlzVmFsaWRNb3ZlKGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5ib2FyZC5nZXRTaXplKCkpIHsgcmV0dXJuIGZhbHNlIH07XG4gICAgICAgIHJldHVybiAhdGhpcy5ib2FyZC5pc0hpdChpbmRleCk7XG4gICAgfVxuXG4gICAgLy8gdGFrZXMgYSBjcHUgdHVybiBhZ2FpbnN0IHBsYXllciwgcmV0dXJucyBtb3ZlIHRha2VuXG4gICAgY3B1VHVybigpIHtcbiAgICAgICAgbGV0IG1vdmU7XG4gICAgICAgIGlmICh0aGlzLm5leHRNb3ZlLmxlbmd0aCA9PT0gMCkgeyBtb3ZlID0gdGhpcy5yYW5kb21Nb3ZlKCk7IH1cbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0gdGhpcy50YWtlSGl0KG1vdmUpO1xuICAgICAgICByZXR1cm4gbW92ZTtcbiAgICB9XG5cbiAgICAvLyBlbGVjdCBhIHZhbGlkIGZyZWUgc3BhY2UgdG8gYXR0YWNrIGZyb20gdGhlIGdhbWVib2FyZFxuICAgIHJhbmRvbU1vdmUoKSB7XG4gICAgICAgIGNvbnN0IG1vdmUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLnBvdyh0aGlzLlNJWkUsIDIpKTtcbiAgICAgICAgcmV0dXJuICh0aGlzLmlzVmFsaWRNb3ZlKG1vdmUpKSA/IG1vdmUgOiB0aGlzLnJhbmRvbU1vdmUoKTtcbiAgICB9XG59O1xuIiwiaW1wb3J0IHsgRHJhZ0VsZW1lbnQgfSBmcm9tICcuL0RyYWdFbGVtZW50LmpzJztcbmltcG9ydCB7IGFkanVzdFRvSW5kZXgsIGJ1aWxkU2V0UGxheWVyLCBtYWtlRHJhZ0ljb24gfSBmcm9tICcuL0RPTUhlbHBlcnMuanMnO1xuXG4vLyBEaXNwbGF5IGZvciBpbml0aWFsemlpbmcgYSBwbGF5ZXJcbmV4cG9ydCBjbGFzcyBTZXRQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKHNpemUsIHBpZWNlcykge1xuICAgICAgICB0aGlzLlNJWkUgPSBzaXplO1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGJ1aWxkU2V0UGxheWVyKHNpemUsIHBpZWNlcyk7XG4gICAgICAgIHRoaXMuYmluZFRyYXkoKTtcbiAgICAgICAgdGhpcy5kcmFnRXZlbnQgPSB7XG4gICAgICAgICAgICBkcmFnT3ZlcjogbnVsbCxcbiAgICAgICAgICAgIGRyYWdHcm91cDogW11cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRJdGVtID0gW107XG4gICAgICAgIHRoaXMuZHJhZ1BpY2tVcFN0YXJ0SGFuZGxlciA9IHRoaXMuZHJhZ1BpY2tVcFN0YXJ0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhZ01vdmVIYW5kbGVyID0gdGhpcy5kcmFnTW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYWdFbmRIYW5kbGVyID0gdGhpcy5kcmFnRW5kLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgYmluZFRyYXkoKSB7XG4gICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkucXVlcnlTZWxlY3RvckFsbCgnLmljb24tcGllY2UnKS5mb3JFYWNoKGljb24gPT4ge1xuICAgICAgICAgICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4gdGhpcy5kcmFnU3RhcnQoZSkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRDb250YWluZXIoKSB7IHJldHVybiB0aGlzLmNvbnRhaW5lcjsgfVxuICAgIGdldEdyaWQoKSB7IHJldHVybiB0aGlzLmdldENvbnRhaW5lcigpLnF1ZXJ5U2VsZWN0b3IoJy5ncmlkLWJveCcpOyB9XG4gICAgZ2V0VHJheSgpIHsgcmV0dXJuIHRoaXMuZ2V0Q29udGFpbmVyKCkucXVlcnlTZWxlY3RvcignLnNldC10cmF5Jyk7IH1cbiAgICBnZXRCdXR0b24oKSB7IHJldHVybiB0aGlzLmdldENvbnRhaW5lcigpLnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtYnRuJyk7IH1cbiAgICBnZXRNdWx0aSgpIHsgcmV0dXJuIHRoaXMuZ2V0Q29udGFpbmVyKCkucXVlcnlTZWxlY3RvcignI3N1Ym1pdC1jaGsnKS5jaGVja2VkIH1cbiAgICBnZXREYXRhKCkge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgbXVsdGk6IHRoaXMuZ2V0TXVsdGkoKSxcbiAgICAgICAgICAgIGJvYXJkOiBbXVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0SXRlbS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgY29uc3QgYWRkID0gW107XG4gICAgICAgICAgICBhZGQucHVzaChpdGVtLnNpemUpO1xuICAgICAgICAgICAgYWRkLnB1c2goaXRlbS5oZWFkKTtcbiAgICAgICAgICAgIGFkZC5wdXNoKGl0ZW0uc2V0WSk7XG4gICAgICAgICAgICBkYXRhLmJvYXJkLnB1c2goYWRkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIC8vIGFwcGVuZCBzZXRwbGF5ZXIgdG8gbWFpbiBjb250YWluZXIsIHNldHMgaW5pdGlhbCBoZWlnaHQgb2YgYWxsIGljb24gY2VsbHNcbiAgICAvLyBiaW5kcyB3aW5kb3cgcmVzaXppbmcgdG8gcmVzaXplIGljb25zIHRvIG1hdGNoIGdyaWQgc2l6ZVxuICAgIGRpc3BsYXkoKSB7IFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250YWluZXInKS5hcHBlbmRDaGlsZCh0aGlzLmdldENvbnRhaW5lcigpKTsgXG4gICAgICAgIHRoaXMuc2V0VHJheUljb25TaXplKClcbiAgICAgICAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZC1ib3gnKS5jaGlsZHJlbi5pdGVtKDExKS5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaWNvbi1jZWxsJykuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBjbGVhciBzZXRwbGF5ZXJcbiAgICByZW1vdmUoKSB7IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZXQtY29udGFpbmVyJykucmVtb3ZlKCk7IH1cblxuICAgIC8vIHNldCB0aGUgaWNvbidzIGNlbGwgc2l6ZSB0byBtYXRjaCB0aGUgZ3JpZCdzIGNlbGwgc2l6ZVxuICAgIHNldFRyYXlJY29uU2l6ZSgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmljb24tY2VsbCcpLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICBjZWxsLnN0eWxlLmhlaWdodCA9IHRoaXMuR2V0VHJheUljb25TaXplKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIEdldFRyYXlJY29uU2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZ2V0R3JpZCgpLmNoaWxkcmVuLml0ZW0oYWRqdXN0VG9JbmRleCgwLCB0aGlzLlNJWkUpKS5jbGllbnRIZWlnaHR9cHhgO1xuICAgIH1cblxuICAgIC8vIEFsbCBkcmFnL2Ryb3AgYWN0aW9ucyB0byBmb2xsb3dcbiAgICAvLyBjcmVhdGVzIGFuZCBhcHBlbmRzIGRyYWdnZWQgaWNvbiwgc2V0cyBkcmFnIGJpbmRpbmdzXG4gICAgZHJhZ1N0YXJ0KGUpIHtcbiAgICAgICAgY29uc3QgaWNvbiA9IChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ljb24tY2VsbCcpKSA/IGUudGFyZ2V0LnBhcmVudE5vZGUgOiBlLnRhcmdldDtcbiAgICAgICAgaWYgKGljb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdpY29uLWRpc2FibGUnKSkgeyByZXR1cm4gfVxuICAgICAgICBjb25zdCBkcmFnSWNvbiA9IG1ha2VEcmFnSWNvbihcbiAgICAgICAgICAgIE51bWJlcihpY29uLmRhdGFzZXQuc2l6ZSksXG4gICAgICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZ2dsZS1ib2R5JykuZGF0YXNldC55ID09PSAndHJ1ZScpLFxuICAgICAgICAgICAgaWNvbi5kYXRhc2V0LnRyYXksXG4gICAgICAgICAgICB0aGlzLkdldFRyYXlJY29uU2l6ZSgpXG4gICAgICAgICAgICApO1xuICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ2ljb24tZGlzYWJsZScpO1xuICAgICAgICBpY29uLmFwcGVuZENoaWxkKGRyYWdJY29uKTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gKGRyYWdJY29uLmNsYXNzTGlzdC5jb250YWlucygnZHJhZy15JykpXG4gICAgICAgICAgICA/IHRoaXMuZ2V0WW9mZnNldChkcmFnSWNvbiwgZS5jbGllbnRYIC0gZHJhZ0ljb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdClcbiAgICAgICAgICAgIDogMDtcbiAgICAgICAgaWYgKCFkcmFnSWNvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2RyYWcteScpKSB7IFxuICAgICAgICAgICAgdGhpcy5zZXRYQXR0cmlidXRlKGRyYWdJY29uLCBlLmNsaWVudFggLSBkcmFnSWNvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KTsgXG4gICAgICAgIH07XG4gICAgICAgIERyYWdFbGVtZW50KGRyYWdJY29uLCBlLmNsaWVudFggLSBvZmZzZXQsIGUuY2xpZW50WSk7IFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5kcmFnRW5kSGFuZGxlcik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZHJhZ01vdmVIYW5kbGVyLCB0cnVlKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGFpbmVyJykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuZHJhZ0VuZEhhbmRsZXIsIHRydWUpO1xuICAgIH1cblxuICAgIGRyYWdQaWNrVXBTdGFydChlKSB7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIHdoaWxlICh0aGlzLnNldEl0ZW1baW5kZXhdLnRyYXkgIT0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQuZ2V0dHJheSkpIHsgaW5kZXgrKzsgfVxuICAgICAgICBjb25zdCBzZWxlY3QgPSB0aGlzLnNldEl0ZW1baW5kZXhdO1xuICAgICAgICBjb25zdCBkcmFnSXRlbSA9IG1ha2VEcmFnSWNvbihcbiAgICAgICAgICAgIHNlbGVjdC5zaXplLFxuICAgICAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2dnbGUtYm9keScpLmRhdGFzZXQueSA9PT0gJ3RydWUnKSxcbiAgICAgICAgICAgIHNlbGVjdC50cmF5LFxuICAgICAgICAgICAgdGhpcy5HZXRUcmF5SWNvblNpemUoKVxuICAgICAgICApXG4gICAgICAgIGUudGFyZ2V0LmFwcGVuZENoaWxkKGRyYWdJdGVtKTtcbiAgICAgICAgdGhpcy5jb25maWdQaWNrVXAoZHJhZ0l0ZW0sIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9nZ2xlLWJvZHknKS5kYXRhc2V0LnkgPT09ICd0cnVlJykpO1xuICAgICAgICBEcmFnRWxlbWVudChkcmFnSXRlbSwgZS5jbGllbnRYLCBlLmNsaWVudFkpO1xuICAgICAgICB0aGlzLnJlbW92ZVBsYWNlZChzZWxlY3QuaGVhZCwgc2VsZWN0LnNpemUsIHNlbGVjdC5zZXRZKTtcbiAgICAgICAgdGhpcy5zZXRJdGVtLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmRyYWdFbmRIYW5kbGVyKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGFpbmVyJykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5kcmFnTW92ZUhhbmRsZXIsIHRydWUpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5kcmFnRW5kSGFuZGxlciwgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5nZXRCdXR0b24oKS5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gQ29uZmlndXJlIHBvc2l0aW9uIGFuZCBkYXRhIGF0dHJpYnV0ZXMgd2hlbiBwaWNraW5nIHVwIGZyb20gdGhlIGJvYXJkXG4gICAgY29uZmlnUGlja1VwKGVsZW1lbnQsIGlzWSkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICAgICAgdGhpcy5zZXRYQXR0cmlidXRlKGVsZW1lbnQsIDApO1xuICAgIH1cblxuICAgIC8vIGNsZWFycyBhbGwgY2VsbHMgb2YgcGxhY2VkIG9iamVjdCdzIGJpbmRpbmdzXG4gICAgcmVtb3ZlUGxhY2VkKGhlYWRJbmRleCwgbGVuZ3RoLCBpc1kpIHtcbiAgICAgICAgbGV0IGNlbGwgPSB0aGlzLmdldEdyaWQoKS5jaGlsZHJlbi5pdGVtKGFkanVzdFRvSW5kZXgoaGVhZEluZGV4LCB0aGlzLlNJWkUpKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdzZXQnKTtcbiAgICAgICAgICAgIGNlbGwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWdldHRyYXknKTtcbiAgICAgICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5kcmFnUGlja1VwU3RhcnRIYW5kbGVyLCB0cnVlKTtcbiAgICAgICAgICAgIGNvbnN0IG5leHRDZWxsID0gKGlzWSkgXG4gICAgICAgICAgICAgICAgPyBOdW1iZXIoY2VsbC5kYXRhc2V0LmluZGV4KSArIHRoaXMuU0laRSBcbiAgICAgICAgICAgICAgICA6IE51bWJlcihjZWxsLmRhdGFzZXQuaW5kZXgpICsgMTtcbiAgICAgICAgICAgIGNlbGwgPSB0aGlzLmdldEdyaWQoKS5jaGlsZHJlbi5pdGVtKGFkanVzdFRvSW5kZXgobmV4dENlbGwsIHRoaXMuU0laRSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0WEF0dHJpYnV0ZShlbGVtZW50LCB4UG9zKSB7XG4gICAgICAgIGNvbnN0IGxlZnQgPSBNYXRoLmZsb29yKHhQb3MgLyBlbGVtZW50LmZpcnN0Q2hpbGQuY2xpZW50V2lkdGgpO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1sZWZ0JywgbGVmdCk7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXJpZ2h0JywgZWxlbWVudC5jaGlsZEVsZW1lbnRDb3VudCAtIGxlZnQgLSAxKTtcbiAgICB9XG5cbiAgICBnZXRZb2Zmc2V0KGVsZW1lbnQsIHhQb3MpIHtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0geFBvcyAtIChlbGVtZW50LmNsaWVudFdpZHRoIC8gMilcbiAgICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7b2Zmc2V0fXB4YDtcbiAgICAgICAgcmV0dXJuIG9mZnNldDtcbiAgICB9XG5cbiAgICAvLyBvbiBkcmFnIGludmVzdGlnYXRlIGlmIGVsZW1lbnQgYmVsb3cgY3Vyc29yIGlzIGEgdmFsaWQgaG92ZXIgdGFyZ2V0XG4gICAgLy8gYW5kIGFkanVzdCBkaXNwbGF5ZWQgaG92ZXIgdGFyZ2V0c1xuICAgIGRyYWdNb3ZlKGUpIHtcbiAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHJhZ2dlZCcpO1xuICAgICAgICBpY29uLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgbGV0IGJlbG93ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChlLmNsaWVudFgsIGUuY2xpZW50WSk7XG4gICAgICAgIGljb24uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgaWYgKGJlbG93LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0YWJsZScpIFxuICAgICAgICAgICAgJiYgdGhpcy5kcmFnRXZlbnQuZHJhZ092ZXIgIT0gYmVsb3cpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFySG92ZXIoKTtcbiAgICAgICAgICAgICAgICBpZiAoaWNvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2RyYWcteScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SG92ZXJZKFxuICAgICAgICAgICAgICAgICAgICAgICAgYmVsb3csXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uLmNoaWxkRWxlbWVudENvdW50KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEhvdmVyWChcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlbG93LCBcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihpY29uLmRhdGFzZXQubGVmdCksXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoaWNvbi5kYXRhc2V0LnJpZ2h0KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCFiZWxvdy5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGFibGUnKSkge1xuICAgICAgICAgICAgdGhpcy5jbGVhckhvdmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGdW5jdGlvbiB0byBjbGVhciBkcmFnZ2VkIGFjdGlvbnNcbiAgICBkcmFnRW5kKGUpIHtcbiAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCB2YWxpZFNldCA9IHRydWU7XG4gICAgICAgIGNvbnN0IGRyYWdJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RyYWdnZWQnKTtcbiAgICAgICAgaWYgKGRyYWdJdGVtLmNoaWxkRWxlbWVudENvdW50ID09PSB0aGlzLmRyYWdFdmVudC5kcmFnR3JvdXAubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmRyYWdFdmVudC5kcmFnR3JvdXAuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NldCcpKSB7IHZhbGlkU2V0ID0gZmFsc2U7fVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHsgdmFsaWRTZXQgPSBmYWxzZTsgfVxuICAgICAgICBpZiAodmFsaWRTZXQpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhZ0V2ZW50LmRyYWdHcm91cC5mb3JFYWNoKGNlbGwgPT4geyBcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NldCcpOyBcbiAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS1nZXR0cmF5JywgZHJhZ0l0ZW0uZGF0YXNldC50cmF5KTtcbiAgICAgICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuZHJhZ1BpY2tVcFN0YXJ0SGFuZGxlciwgdHJ1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuc2V0SXRlbS5wdXNoKHtcbiAgICAgICAgICAgICAgICB0cmF5OiBOdW1iZXIoZHJhZ0l0ZW0uZGF0YXNldC50cmF5KSxcbiAgICAgICAgICAgICAgICBoZWFkOiAoZHJhZ0l0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdkcmFnLXknKSkgXG4gICAgICAgICAgICAgICAgICAgID8gTnVtYmVyKHRoaXMuZHJhZ0V2ZW50LmRyYWdHcm91cFswXS5kYXRhc2V0LmluZGV4KSBcbiAgICAgICAgICAgICAgICAgICAgOiBOdW1iZXIodGhpcy5kcmFnRXZlbnQuZHJhZ0dyb3VwWzBdLmRhdGFzZXQuaW5kZXggLSBkcmFnSXRlbS5kYXRhc2V0LmxlZnQpLFxuICAgICAgICAgICAgICAgIHNldFk6IGRyYWdJdGVtLmNsYXNzTGlzdC5jb250YWlucygnZHJhZy15JyksXG4gICAgICAgICAgICAgICAgc2l6ZTogZHJhZ0l0ZW0uY2hpbGRFbGVtZW50Q291bnRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0LXRyYXknKVxuICAgICAgICAgICAgLmNoaWxkcmVuLml0ZW0oTnVtYmVyKGRyYWdJdGVtLmRhdGFzZXQudHJheSkpXG4gICAgICAgICAgICAuZmlyc3RDaGlsZC5jbGFzc0xpc3RcbiAgICAgICAgICAgIC5yZW1vdmUoJ2ljb24tZGlzYWJsZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0VHJheSgpLmNoaWxkRWxlbWVudENvdW50ID09PSB0aGlzLnNldEl0ZW0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmdldEJ1dHRvbigpLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdldEJ1dHRvbigpLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcmFnZ2VkJykucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMuY2xlYXJIb3ZlcigpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250YWluZXInKS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5kcmFnRW5kSGFuZGxlcik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRhaW5lcicpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZHJhZ01vdmVIYW5kbGVyLCB0cnVlKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGFpbmVyJykucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuZHJhZ0VuZEhhbmRsZXIsIHRydWUpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBhZGRpbmcgaG92ZXIgZXZlbnRcbiAgICBzZXRIb3ZlclgoY2VsbCwgbGVmdCwgcmlnaHQpIHsgIFxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XG4gICAgICAgIHRoaXMuZHJhZ0V2ZW50LmRyYWdPdmVyID0gY2VsbDsgICAgICAgIFxuICAgICAgICB0aGlzLmRyYWdFdmVudC5kcmFnR3JvdXAucHVzaChjZWxsKTtcbiAgICAgICAgdGhpcy5ob3ZlclNpYmxpbmdzKGNlbGwsIGxlZnQsIHRydWUpO1xuICAgICAgICB0aGlzLmhvdmVyU2libGluZ3MoY2VsbCwgcmlnaHQsIGZhbHNlKTsgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICB9XG5cbiAgICBzZXRIb3Zlclkocm9vdCwgbnVtU2liKSB7XG4gICAgICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZC1ib3gnKTtcbiAgICAgICAgbGV0IGluZGV4ID0gTnVtYmVyKHJvb3QuZGF0YXNldC5pbmRleCk7XG4gICAgICAgIGxldCB0b0FkZCA9IHJvb3Q7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtU2liOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0b0FkZCkge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gTnVtYmVyKHRvQWRkLmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ0V2ZW50LmRyYWdHcm91cC5wdXNoKHRvQWRkKTtcbiAgICAgICAgICAgICAgICB0b0FkZC5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xuICAgICAgICAgICAgICAgIHRvQWRkID0gZ3JpZC5jaGlsZHJlbi5pdGVtKGFkanVzdFRvSW5kZXgoaW5kZXggKyB0aGlzLlNJWkUsIHRoaXMuU0laRSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byBoaWdobGlnaHQgdGhlIGNvcnJlY3QgbmVpZ2hib3Jpbmcgc2libGluZ3Mgb24gaG92ZXJcbiAgICBob3ZlclNpYmxpbmdzKHJvb3QsIG51bVNpYiwgbGVmdCkge1xuICAgICAgICBsZXQgdG9BZGQgPSByb290O1xuICAgICAgICBsZXQgaW5kZXggPSBOdW1iZXIocm9vdC5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihpbmRleCAvIHRoaXMuU0laRSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtU2liOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrID0gKGxlZnQpID8gKChpbmRleCAtIChpICsgMSkpIC8gdGhpcy5TSVpFKSA6ICgoaW5kZXggKyAoaSArIDEpKSAvIHRoaXMuU0laRSk7XG4gICAgICAgICAgICBpZiAocm93ID09PSBNYXRoLmZsb29yKGNoZWNrKSkge1xuICAgICAgICAgICAgICAgIHRvQWRkID0gKGxlZnQpID8gdG9BZGQucHJldmlvdXNTaWJsaW5nIDogdG9BZGQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgdG9BZGQuY2xhc3NMaXN0LmFkZCgnaG92ZXInKTsgXG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnRXZlbnQuZHJhZ0dyb3VwLnB1c2godG9BZGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmVzZXRzIHNldCBob3ZlciBhY3Rpb25zXG4gICAgY2xlYXJIb3ZlcigpIHtcbiAgICAgICAgdGhpcy5kcmFnRXZlbnQuZHJhZ092ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmRyYWdFdmVudC5kcmFnR3JvdXAuZm9yRWFjaChjZWxsID0+IGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKSk7XG4gICAgICAgIHRoaXMuZHJhZ0V2ZW50LmRyYWdHcm91cC5sZW5ndGggPSAwO1xuICAgIH1cblxuICAgIFxufSIsIi8vIGJhc2ljIHVuaXQgdXNlZCBpbiBnYW1lLCBtdXN0IHBhc3MgaW50ZWdlciB2YWx1ZSB0byBkZXRlcm1pbmUgc2l6ZVxuXG5leHBvcnQgY2xhc3MgU2hpcCB7XG4gICAgLy8gdGVzdHMgdG8gZW5zdXJlIHZhbHVlIGlzIGFuIGludGVnZXIgbnVtYmVyIG92ZXIgMFxuICAgIGNvbnN0cnVjdG9yKHNpemUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzaXplICE9ICdudW1iZXInKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbHVlIG11c3QgYmUgTnVtYmVyJykgfTtcbiAgICAgICAgaWYgKHNpemUgPD0gMCkgeyB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVmFsdWUgbXVzdCBiZSBncmVhdGVyIHRoYW4gMCcpIH07XG4gICAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihzaXplKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdPbmx5IGludGVnZXIgdmFsdWVzJykgfTtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy5oaXRzID0gMDtcbiAgICB9XG5cbiAgICBnZXRIaXRzKCkgeyByZXR1cm4gdGhpcy5oaXRzOyB9XG5cbiAgICAvLyBpbmNyZWFzZXMgc2hpcHMgaGl0IHZhbHVlXG4gICAgaGl0KCkge1xuICAgICAgICB0aGlzLmhpdHMgKz0gMTtcbiAgICB9XG5cbiAgICAvLyBkZXRlcm1pbmVzIHRoZSBzdGF0ZSBvZiB0aGUgc2hpcFxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGl0cyA+PSB0aGlzLnNpemU7XG4gICAgfVxufSIsImltcG9ydCB7IGluaXRpYWxpemVET00gfSBmcm9tIFwiLi9ET01Db250cm9sLmpzXCI7XG5pbXBvcnQgeyBTZXRQbGF5ZXIgfSBmcm9tIFwiLi9TZXRQbGF5ZXIuanNcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vUGxheWVyLmpzJztcblxuZXhwb3J0IGNsYXNzIEdhbWVDb250cm9sIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5TSVpFID0gMTA7XG4gICAgICAgIHRoaXMucGxheWVyMSA9IG51bGw7XG4gICAgICAgIHRoaXMucGxheWVyMiA9IG51bGw7XG4gICAgICAgIHRoaXMubXVsdGlwbGF5ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZWxlY3RNb3ZlID0gbnVsbDtcbiAgICAgICAgdGhpcy50dXJuTnVtYmVyID0gMDtcbiAgICB9XG5cbiAgICAvLyBiZWdpbiB0aGUgZ2FtZWxvb3BcbiAgICBzdGFydEdhbWUoKSB7XG4gICAgICAgIGluaXRpYWxpemVET00oKTtcbiAgICAgICAgdGhpcy5jcmVhdGVQbGF5ZXIoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGluaXRpYWxpemVET00oKTtcblxuICAgICAgICAvLyB0aGlzLmR1bW15U2V0UGxheWVyKCk7XG4gICAgICAgIC8vIGNvbnN0IGJvYXJkID0gdGhpcy5nZXRQbGF5ZXIoKS5nZXREaXNwbGF5KCk7XG4gICAgICAgIC8vIGlmICh0aGlzLm11bHRpcGxheWVyKSB7XG4gICAgICAgIC8vICAgICBib2FyZC5jcmVhdGVUdXJuQ292ZXIodGhpcy5nZXRQbGF5ZXIoKVxuICAgICAgICAvLyAgICAgICAgIC5nZXROYW1lKCkpXG4gICAgICAgIC8vICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGJvYXJkLmNsZWFyVHVybkNvdmVyKCkpO1xuICAgICAgICAvLyB9O1xuICAgICAgICAvLyBib2FyZC5kaXNwbGF5Qm9hcmQoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVQbGF5ZXIoKSB7XG4gICAgICAgIGNvbnN0IHNldFBsYXllciA9IG5ldyBTZXRQbGF5ZXIoMTAsIFs1LCA0LCAzLCAzLCAyXSk7XG4gICAgICAgIHNldFBsYXllci5nZXRCdXR0b24oKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gc2V0UGxheWVyLmdldERhdGEoKTtcbiAgICAgICAgICAgIHNldFBsYXllci5yZW1vdmUoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllcjEpIHsgXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIyID0gbmV3IFBsYXllcigncGxheWVyMicsIGRhdGEuYm9hcmQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvYXJkID0gdGhpcy5nZXRQbGF5ZXIoKS5nZXREaXNwbGF5KCk7XG4gICAgICAgICAgICAgICAgYm9hcmQuY3JlYXRlVHVybkNvdmVyKHRoaXMuZ2V0UGxheWVyKClcbiAgICAgICAgICAgICAgICAuZ2V0TmFtZSgpKVxuICAgICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBib2FyZC5jbGVhclR1cm5Db3ZlcigpKTtcbiAgICAgICAgICAgICAgICBib2FyZC5kaXNwbGF5Qm9hcmQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5tdWx0aSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyMSA9IG5ldyBQbGF5ZXIoJ3BsYXllcjEnLCBkYXRhLmJvYXJkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRCb2FyZCh0aGlzLnBsYXllcjEpO1xuICAgICAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlUGxheWVyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyMSA9IG5ldyBQbGF5ZXIoJ3BsYXllcjEnLCBkYXRhLmJvYXJkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRCb2FyZCh0aGlzLnBsYXllcjEpO1xuICAgICAgICAgICAgICAgIHRoaXMuZHVtbXlTZXRQbGF5ZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllcigpLmdldERpc3BsYXkoKS5kaXNwbGF5Qm9hcmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHNldFBsYXllci5kaXNwbGF5KCk7XG4gICAgfVxuXG4gICAgLy8gdGVzdGluZyB2YWx1ZXNcbiAgICBkdW1teVNldFBsYXllcigpIHtcbiAgICAgICAgY29uc3QgZHVtbXkxID0gW1xuICAgICAgICAgICAgWzUsIDI1LCB0cnVlXSxcbiAgICAgICAgICAgIFs0LCA4MywgZmFsc2VdLFxuICAgICAgICAgICAgWzMsIDAsIGZhbHNlXSxcbiAgICAgICAgICAgIFszLCA1MSwgdHJ1ZV0sXG4gICAgICAgICAgICBbMiwgNDgsIGZhbHNlXVxuICAgICAgICBdO1xuICAgICAgICBjb25zdCBkdW1teTIgPSBbXG4gICAgICAgICAgICBbNSwgOTUsIGZhbHNlXSxcbiAgICAgICAgICAgIFs0LCAxNiwgZmFsc2VdLFxuICAgICAgICAgICAgWzMsIDUzLCBmYWxzZV0sXG4gICAgICAgICAgICBbMywgNjgsIHRydWVdLFxuICAgICAgICAgICAgWzIsIDEyLCB0cnVlXVxuICAgICAgICBdXG4gICAgICAgIC8vIHRoaXMucGxheWVyMSA9IG5ldyBQbGF5ZXIoJ3BsYXllcjEnLCBkdW1teTEpO1xuICAgICAgICAvLyB0aGlzLmJpbmRCb2FyZCh0aGlzLnBsYXllcjEpO1xuICAgICAgICB0aGlzLnBsYXllcjIgPSBuZXcgUGxheWVyKCdwbGF5ZXIyJywgZHVtbXkyKTtcbiAgICAgICAgdGhpcy5iaW5kQm9hcmQodGhpcy5wbGF5ZXIyKVxuICAgIH1cblxuICAgIC8vIERldGVybWluZSB0aGUgYWN0aXZlIHBsYXllclxuICAgIGdldFBsYXllcigpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnR1cm5OdW1iZXIgJSAyID09PSAwKSA/IHRoaXMucGxheWVyMSA6IHRoaXMucGxheWVyMjsgXG4gICAgfVxuXG4gICAgLy8gRGV0ZXJtaW5lIHRoZSBjdXJyZW50IG5vbiBwbGF5ZXJcbiAgICBnZXRBZHZlcnNhcnkoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy50dXJuTnVtYmVyICUgMiA9PT0gMCkgPyB0aGlzLnBsYXllcjIgOiB0aGlzLnBsYXllcjE7XG4gICAgfVxuXG4gICAgLy8gYmluZGluZ3MgZm9yIHBsYXkgYXJlYVxuICAgIGJpbmRCb2FyZChwbGF5ZXIpIHtcbiAgICAgICAgY29uc3QgZGlzcGxheSA9IHBsYXllci5nZXREaXNwbGF5KCk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IHBsYXllci5nZXREaXNwbGF5KCkuZ2V0QnV0dG9uKCk7XG4gICAgICAgIFxuICAgICAgICAvLyBiaW5kIGNsaWNrYWJsZSBjZWxsc1xuICAgICAgICBkaXNwbGF5LmdldFBsYXkoKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnb3Blbi1jZWxsJykpIHsgcmV0dXJuIH07XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RNb3ZlKSB7IGRpc3BsYXkudG9nZ2xlU2VsZWN0ZWQodGhpcy5zZWxlY3RNb3ZlKTsgfVxuICAgICAgICAgICAgZGlzcGxheS50b2dnbGVTZWxlY3RlZChlLnRhcmdldC5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0TW92ZSA9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgICAgIGRpc3BsYXkuc2V0QnV0dG9uKGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBiaW5kIGF0dGFjayBidXR0b25cbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXkuc2V0QnV0dG9uKCk7XG4gICAgICAgICAgICB0aGlzLnRha2VUdXJuKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEZ1bmN0aW9uIGZvciBhY3Rpb24gYnV0dG9uLCB0YWtlcyBhIHBsYXllciBzZWxlY3RlZCB0dXJuXG4gICAgdGFrZVR1cm4oKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZ2V0QWR2ZXJzYXJ5KCkudGFrZUhpdCh0aGlzLnNlbGVjdE1vdmUpO1xuICAgICAgICB0aGlzLmdldFBsYXllcigpLmdldERpc3BsYXkoKS51cGRhdGVQbGF5KHRoaXMuc2VsZWN0TW92ZSwgcmVzdWx0KTtcbiAgICAgICAgaWYgKHRoaXMuZ2V0QWR2ZXJzYXJ5KCkuaXNEZWZlYXRlZCgpKSB7IFxuICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXIoKVxuICAgICAgICAgICAgICAgIC5nZXREaXNwbGF5KClcbiAgICAgICAgICAgICAgICAuY3JlYXRlR2FtZU92ZXIoJ1lPVSBXSU4hJylcbiAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllcigpLmdldERpc3BsYXkoKS5yZW1vdmVCb2FyZCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0R2FtZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xuICAgICAgICAgICAgfSk7IFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMubXVsdGlwbGF5ZXIpIHsgdGhpcy5zd2l0Y2hUdXJuKHJlc3VsdCk7IH1cbiAgICAgICAgZWxzZSB7IHRoaXMuY3B1VHVybigpOyB9XG4gICAgfVxuXG4gICAgLy8gUmVuZGVycyBtb3ZlIHRha2VuIG9uIHBsYXllciBhbmQgcmVzZXQgc2VsZWN0TW92ZVxuICAgIHN0YXJ0VHVybihyZXN1bHQpIHtcbiAgICAgICAgdGhpcy5nZXRQbGF5ZXIoKS5nZXREaXNwbGF5KCkudXBkYXRlU3RhdHVzKHRoaXMuc2VsZWN0TW92ZSwgcmVzdWx0KTtcbiAgICAgICAgdGhpcy5zZWxlY3RNb3ZlID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBQcmVwYXJlcyB0aGUgcGxheSBhcmVhIHRvIGV4Y2hhbmdlIHBsYXllcnNcbiAgICBzd2l0Y2hUdXJuKHJlc3VsdCkge1xuICAgICAgICBjb25zdCBib2FyZCA9IHRoaXMuZ2V0QWR2ZXJzYXJ5KCkuZ2V0RGlzcGxheSgpO1xuICAgICAgICBib2FyZC5jcmVhdGVUdXJuQ292ZXIodGhpcy5nZXRBZHZlcnNhcnkoKVxuICAgICAgICAuZ2V0TmFtZSgpKVxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgYm9hcmQuY2xlYXJUdXJuQ292ZXIoKTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRUdXJuKHJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgICAgICBib2FyZC5kaXNwbGF5Qm9hcmQoKTtcbiAgICAgICAgdGhpcy5nZXRBZHZlcnNhcnkoKS5nZXREaXNwbGF5KCkucmVtb3ZlQm9hcmQoKTtcbiAgICAgICAgdGhpcy50dXJuTnVtYmVyKys7XG4gICAgfVxuXG4gICAgLy8gU2ltdWxhdGUgYW4gYWR2ZXJzYXJ5J3MgdHVyblxuICAgIGNwdVR1cm4oKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0TW92ZSA9IHRoaXMuZ2V0UGxheWVyKCkuY3B1VHVybigpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmdldFBsYXllcigpLnRha2VIaXQodGhpcy5zZWxlY3RNb3ZlKTtcbiAgICAgICAgaWYgKHRoaXMuZ2V0UGxheWVyKCkuaXNEZWZlYXRlZCgpKSB7IFxuICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXIoKS5nZXREaXNwbGF5KCkuY3JlYXRlR2FtZU92ZXIoJ1lPVSBMT1NFIScpOyBcbiAgICAgICAgfSBlbHNlIHsgdGhpcy5zdGFydFR1cm4ocmVzdWx0KTsgfVxuICAgIH1cblxuICAgIC8vIGNsZWFyIGFsbCB2YXJpYWJsZSB0byBkZWZhdWx0XG4gICAgcmVzZXRHYW1lKCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIxID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMucGxheWVyMiA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdE1vdmUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy50dXJuTnVtYmVyID0gMDtcbiAgICB9XG59XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtHYW1lQ29udHJvbH0gZnJvbSAnLi9nYW1lQ29udHJvbC5qcyc7XG5cbmNvbnN0IGdhbWUgPSBuZXcgR2FtZUNvbnRyb2woKTtcbmdhbWUuc3RhcnRHYW1lKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=