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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --bg-grid: black;\n    --bg-cell: red;\n    --font-guide-lg: 1.5rem;\n    --font-guide-sm: .7rem;\n    --gap-lg: 3px;\n    --gap-sm: 2px;\n    --button-fg-disable: grey;\n    --button-fg-normal: black;\n    --button-bg-disable: darkgrey;\n    --button-bg-normal: white;\n    --button-font-size: 2rem;\n    --board-hit: darkred;\n    --board-hover: aqua;\n    --board-miss: grey;\n    --board-selected: yellow;\n    --board-ship: green;\n    --side-size: 10;\n}\n\n\nbody, html {\n    margin: 0;\n    height: 100%;\n    width: 100%;\n    /* width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: center; */\n}\n\nbutton {\n    background-color: var(--button-bg-normal);\n    color: var(--button-fg-normal);\n    border: 5px solid var(--button-fg-normal);\n    font-size: var(--button-font-size);\n}\n\nbutton:disabled {\n    background-color: var(--button-bg-disable);\n    color: var(--button-fg-disable);\n    border-color: var(--button-fg-disable);\n}\n\n/* styling for all grid displays */\n.grid-box {\n    font-size: var(--font-guide-lg);\n    aspect-ratio: 1 / 1;\n    background-color: var(--bg-grid);\n    display: grid;\n    grid-template-columns: repeat(var(--side-size), 1fr);\n    gap: var(--gap-lg);\n}\n\n.grid-box > div {\n    user-select: none;\n    background-color: var(--bg-cell);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.guide-top,\n.guide-corner {\n    margin-bottom: calc(var(--gap-lg) * .66);\n}\n\n.guide-left,\n.guide-corner {\n    margin-right: calc(var(--gap-lg) * .66);\n}\n\n.guide-corner {\n    background-color: var(--bg-grid) !important;\n}\n\n/* Styling for all grid icons */\n.ship {\n    background-color: var(--board-ship) !important;\n}\n\n.miss {\n    background-color: var(--board-miss) !important;\n}\n\n.hit {\n    background-color: var(--board-hit) !important;\n}\n\n.selected {\n    background-color: var(--board-selected) !important;\n}\n\n.hover {\n    background-color: yellow !important;\n}\n\n.set {\n    background-color: green !important;\n}\n\n.set.hover {\n    background-color: darkgrey !important;\n}\n\n/* Styling for notifications */\n.gameover-container,\n.turn-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n}\n\n.gameover-container {\n    background-color: transparent;\n}\n\n.turn-container {\n    background-color: white;\n}\n\n.gameover-content,\n.turn-content {\n    text-align: center;\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    padding: 2rem;\n}\n\n#main-container {\n    height: 100%;\n    width: 100vw;\n    min-height: 100%;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    position: relative;\n}\n\n/* Styling for set display */\n#set-container {\n    display: flex;\n    flex-direction: column;\n    flex: 0 1 55vh;\n    gap: 1rem;\n    \n}\n\n/* .set-grid {\n    font-size: var(--font-guide-lg);\n    aspect-ratio: 1 / 1;\n    gap: var(--gap-lg);\n    min-height: 0;\n} */\n\n.set-tray {\n    background-color: lightgrey;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n\n}\n\n.tray-item {\n    position: relative;\n    display: grid;\n    justify-content:left;\n    align-items: center;\n    padding: 1rem;\n}\n\n.icon-piece {\n    position: relative;\n    grid-column: 1 / -1;\n    grid-row: 1 / -1;\n    border: var(--gap-sm) solid black;\n    background-color: black;\n    display: flex;\n    gap: var(--gap-sm);\n}\n\n.icon-piece.icon-disable>div:not(#dragged) {\n    background-color: grey !important;\n}\n\n.icon-cell {\n    background-color: var(--bg-cell);\n    aspect-ratio: 1 / 1;\n}\n\n.drag-cell {\n    opacity: 0.5;\n    background-color: grey;\n}\n\n#dragged {\n    opacity: 0.5;\n    position: absolute !important;\n}\n\n.drag-y {\n    flex-direction: column;\n}\n\n.toggle-rotate {\n    transform: rotate(90deg);\n}\n\n#toggle-bar {\n    display: flex;\n}\n\n#toggle-container {\n    position: relative;\n    margin: 10px;\n}\n\n#toggle-text {\n    user-select: none;\n    position: absolute;\n    left: 50%;\n    top:  50%;\n    transform: translate(-50%, -50%);\n}\n\n#toggle-body {\n    height: 80px;\n    width: 80px;\n    background-color: red;\n    border-radius: 40px;\n}\n\n#toggle-body:after {\n    position: absolute;\n    height: 0;\n    width: 0;\n    top: 20px;\n    left: 70px;\n    content: '';\n    border: 20px solid transparent;\n    border-left-color: red;\n}\n\n/* Styling for play displays */\n.play-container {\n    margin: 0 .5rem;\n    width: 100%;\n    height: min-content;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr;\n    position: relative;\n    gap: 1rem;\n}\n\n.play-status {\n    grid-row: 1 / 2;\n    font-size: var(--font-guide-sm);\n    aspect-ratio: 1 / 1;\n    width: 50%;\n    gap: var(--gap-sm);\n}\n\n.play-status .guide-left {\n    margin-right: calc(var(--gap-sm) * .66);\n}\n\n.play-status .guide-top {\n    margin-bottom: calc(var(--gap-sm) * .66);\n}\n\n.play-area {\n    font-size: var(--font-guide-lg);\n    aspect-ratio: 1 / 1;\n    width: 100%;\n    gap: var(--gap-lg);\n}\n\n.play-area > .open-cell:hover {\n    background-color: var(--board-hover) !important;\n}\n\n.play-button {\n    width: 100%;\n}\n\n/* Styling for wide views of play display  */\n@media (min-width: 570px) {\n    .play-container {\n        max-width: 1000px;\n        display: grid;\n        grid-template-columns: 2fr 1fr;\n        grid-template-rows: 1fr;\n    }\n\n    .play-area {\n        grid-row: 1 / 3;\n        grid-column: 1 / 2;\n    }\n\n    .play-status {\n        grid-row: 1 / 2;\n        grid-column: 2 / 3;\n        width: 100%;\n    }\n\n    .play-button {\n        grid-row: 3 / 4;\n        grid-column: 1 / 2;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --bg-grid: black;\n    --bg-cell: red;\n    --font-guide-lg: 1.5rem;\n    --font-guide-sm: .7rem;\n    --gap-lg: 3px;\n    --gap-sm: 2px;\n    --button-fg-disable: grey;\n    --button-fg-normal: black;\n    --button-bg-disable: darkgrey;\n    --button-bg-normal: white;\n    --button-font-size: 2rem;\n    --board-hit: darkred;\n    --board-hover: aqua;\n    --board-miss: grey;\n    --board-selected: yellow;\n    --board-ship: green;\n    --side-size: 10;\n}\n\n\nbody, html {\n    margin: 0;\n    height: 100%;\n    width: 100%;\n    /* width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: center; */\n}\n\nbutton {\n    background-color: var(--button-bg-normal);\n    color: var(--button-fg-normal);\n    border: 5px solid var(--button-fg-normal);\n    font-size: var(--button-font-size);\n}\n\nbutton:disabled {\n    background-color: var(--button-bg-disable);\n    color: var(--button-fg-disable);\n    border-color: var(--button-fg-disable);\n}\n\n/* styling for all grid displays */\n.grid-box {\n    font-size: var(--font-guide-lg);\n    aspect-ratio: 1 / 1;\n    background-color: var(--bg-grid);\n    display: grid;\n    grid-template-columns: repeat(var(--side-size), 1fr);\n    gap: var(--gap-lg);\n}\n\n.grid-box > div {\n    user-select: none;\n    background-color: var(--bg-cell);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.guide-top,\n.guide-corner {\n    margin-bottom: calc(var(--gap-lg) * .66);\n}\n\n.guide-left,\n.guide-corner {\n    margin-right: calc(var(--gap-lg) * .66);\n}\n\n.guide-corner {\n    background-color: var(--bg-grid) !important;\n}\n\n/* Styling for all grid icons */\n.ship {\n    background-color: var(--board-ship) !important;\n}\n\n.miss {\n    background-color: var(--board-miss) !important;\n}\n\n.hit {\n    background-color: var(--board-hit) !important;\n}\n\n.selected {\n    background-color: var(--board-selected) !important;\n}\n\n.hover {\n    background-color: yellow !important;\n}\n\n.set {\n    background-color: green !important;\n}\n\n.set.hover {\n    background-color: darkgrey !important;\n}\n\n/* Styling for notifications */\n.gameover-container,\n.turn-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n}\n\n.gameover-container {\n    background-color: transparent;\n}\n\n.turn-container {\n    background-color: white;\n}\n\n.gameover-content,\n.turn-content {\n    text-align: center;\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    padding: 2rem;\n}\n\n#main-container {\n    height: 100%;\n    width: 100vw;\n    min-height: 100%;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    position: relative;\n}\n\n/* Styling for set display */\n#set-container {\n    display: flex;\n    flex-direction: column;\n    flex: 0 1 55vh;\n    gap: 1rem;\n    \n}\n\n/* .set-grid {\n    font-size: var(--font-guide-lg);\n    aspect-ratio: 1 / 1;\n    gap: var(--gap-lg);\n    min-height: 0;\n} */\n\n.set-tray {\n    background-color: lightgrey;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n\n}\n\n.tray-item {\n    position: relative;\n    display: grid;\n    justify-content:left;\n    align-items: center;\n    padding: 1rem;\n}\n\n.icon-piece {\n    position: relative;\n    grid-column: 1 / -1;\n    grid-row: 1 / -1;\n    border: var(--gap-sm) solid black;\n    background-color: black;\n    display: flex;\n    gap: var(--gap-sm);\n}\n\n.icon-piece.icon-disable>div:not(#dragged) {\n    background-color: grey !important;\n}\n\n.icon-cell {\n    background-color: var(--bg-cell);\n    aspect-ratio: 1 / 1;\n}\n\n.drag-cell {\n    opacity: 0.5;\n    background-color: grey;\n}\n\n#dragged {\n    opacity: 0.5;\n    position: absolute !important;\n}\n\n.drag-y {\n    flex-direction: column;\n}\n\n.toggle-rotate {\n    transform: rotate(90deg);\n}\n\n#toggle-bar {\n    display: flex;\n}\n\n#toggle-container {\n    position: relative;\n    margin: 10px;\n}\n\n#toggle-text {\n    user-select: none;\n    position: absolute;\n    left: 50%;\n    top:  50%;\n    transform: translate(-50%, -50%);\n}\n\n#toggle-body {\n    height: 80px;\n    width: 80px;\n    background-color: red;\n    border-radius: 40px;\n}\n\n#toggle-body:after {\n    position: absolute;\n    height: 0;\n    width: 0;\n    top: 20px;\n    left: 70px;\n    content: '';\n    border: 20px solid transparent;\n    border-left-color: red;\n}\n\n/* Styling for play displays */\n.play-container {\n    margin: 0 .5rem;\n    width: 100%;\n    height: min-content;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr;\n    position: relative;\n    gap: 1rem;\n}\n\n.play-status {\n    grid-row: 1 / 2;\n    font-size: var(--font-guide-sm);\n    aspect-ratio: 1 / 1;\n    width: 50%;\n    gap: var(--gap-sm);\n}\n\n.play-status .guide-left {\n    margin-right: calc(var(--gap-sm) * .66);\n}\n\n.play-status .guide-top {\n    margin-bottom: calc(var(--gap-sm) * .66);\n}\n\n.play-area {\n    font-size: var(--font-guide-lg);\n    aspect-ratio: 1 / 1;\n    width: 100%;\n    gap: var(--gap-lg);\n}\n\n.play-area > .open-cell:hover {\n    background-color: var(--board-hover) !important;\n}\n\n.play-button {\n    width: 100%;\n}\n\n/* Styling for wide views of play display  */\n@media (min-width: 570px) {\n    .play-container {\n        max-width: 1000px;\n        display: grid;\n        grid-template-columns: 2fr 1fr;\n        grid-template-rows: 1fr;\n    }\n\n    .play-area {\n        grid-row: 1 / 3;\n        grid-column: 1 / 2;\n    }\n\n    .play-status {\n        grid-row: 1 / 2;\n        grid-column: 2 / 3;\n        width: 100%;\n    }\n\n    .play-button {\n        grid-row: 3 / 4;\n        grid-column: 1 / 2;\n    }\n}\n"],"sourceRoot":""}]);
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

// create and display the initial content
function initializeDOM() {
    document.querySelector('body').setAttribute('ondragstart', 'return false;');
    document.querySelector('body').setAttribute('ondrop', 'return false');
    const container = makeElement('div', { id: 'main-container' });
    document.body.appendChild(container);
    const setPlayer = new SetPlayer(10, [5, 4, 3, 3, 2]);
    
    setPlayer.display();
}

// Display for initialziing a player
class SetPlayer {
    constructor(size, pieces) {
        this.SIZE = size;
        this.container = makeElement('div', { id: 'set-container' });
        this.container.appendChild(buildGrid(size));
        this.container.appendChild(this.buildToggleBar());
        this.container.appendChild(this.makeTray(pieces));
        // container for drag information
        this.dragEvent = {
            dragItem: null,
            xOff: 0,
            yOff: 0,
            dragOver: null,
            dragGroup: []
        };
        this.dragMoveHandler = this.dragMove.bind(this);
        this.dragEndHandler = this.dragEnd.bind(this);
        // handle conflicts with mouse leaving window while in drag
        document.querySelector('#main-container').addEventListener('mouseleave', () => {
            return this.dragEndHandler();
        });
    }

    buildToggleBar() {
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

    

    getContainer() { return this.container; }
    getGrid() { return this.getContainer().querySelector('.grid-box'); }
    getTray() { return this.getContainer().querySelector('.set-tray'); }

    // append setplayer to main container, sets initial height of all icon cells
    // binds window resizing to resize icons to match grid size
    display() { 
        document.querySelector('#main-container').appendChild(this.getContainer()); 
        this.setTrayIconSize()
        window.onresize = function() {
            const height = document.querySelector('.grid-box').children.item(11).clientHeight;
            document.querySelectorAll('.icon-cell').forEach(cell => {
                cell.style.height = `${height}px`;
            })
        }
    }

    // clear setplayer
    remove() { document.querySelector('#set-container').remove(); }

    // set the icon's cell size to match the grid's cell size
    setTrayIconSize() {
        document.querySelectorAll('.icon-cell').forEach(cell => {
            cell.style.height = this.GetTrayIconSize();
        })
    }

    GetTrayIconSize() {
        return `${this.getGrid().children.item(adjustToIndex(0, this.SIZE)).clientHeight}px`;
    }

    // container for icons indexes the icons on order added
    makeTray(pieces) {
        const tray = makeElement('div', { class: 'set-tray' });
        let index = 0;
        for (let i = 0, j = Math.floor((pieces.length) / 2); j < pieces.length; i++, j++) {
            if (i < Math.floor(pieces.length / 2)) { 
                tray.appendChild(this.makeTrayItem(pieces[i]));
                tray.lastChild.firstChild.setAttribute('data-tray', `${index++}`);
            }
            tray.appendChild(this.makeTrayItem(pieces[j]));
            tray.lastChild.firstChild.setAttribute('data-tray', `${index++}`);
        }
        return tray;
    }

    // create holder for icons
    makeTrayItem(piece) {
        const item = makeElement('div', { class: 'tray-item' })
        item.appendChild(this.makePieceIcon(piece));
        return item;
    }

    // create icons
    makePieceIcon(size) {
        const icon = makeElement('div', { class: 'icon-piece' });
        for (let i = 0; i < size; i++) {
            const cell = makeElement('div', { class: 'icon-cell' });
            icon.appendChild(cell);
        }
        icon.dataset.size = size;
        icon.addEventListener('mousedown', (e) => this.dragStart(e));
        return icon;
    }

    makeDragIcon(size, vertical, tray) {
        const dragIcon = this.makePieceIcon(Number(size));
        dragIcon.setAttribute('id', 'dragged');
        dragIcon.setAttribute('data-tray', tray);
        if (vertical) { dragIcon.classList.add('drag-y') }
        [...dragIcon.children].forEach(child => {
            child.style.height = this.GetTrayIconSize()
            child.classList.add('drag-cell')
        });
        return dragIcon; 
    }

    // All drag/drop actions to follow

    // creates and appends dragged icon, sets drag bindings
    dragStart(e) {
        const icon = (e.target.classList.contains('icon-cell')) ? e.target.parentNode : e.target;
        const isY = (document.querySelector('#toggle-body').dataset.y === 'true');
        if (icon.classList.contains('icon-disable')) { return }
        icon.classList.add('icon-disable');

        this.dragEvent.dragItem = this.makeDragIcon(Number(icon.dataset.size), isY, icon.dataset.tray);
        this.dragEvent.xOff = e.clientX;
        this.dragEvent.yOff = e.clientY;
        icon.appendChild(this.dragEvent.dragItem);

        const xPos = e.clientX - this.dragEvent.dragItem.getBoundingClientRect().left;
        const left = Math.floor(xPos / this.dragEvent.dragItem.firstChild.clientWidth);
        const right = this.dragEvent.dragItem.childElementCount - left - 1;
        this.dragEvent.dragItem.setAttribute('data-left', left);
        this.dragEvent.dragItem.setAttribute('data-right', right);

        if (this.dragEvent.dragItem.classList.contains('drag-y')) {
            const newX = xPos - (this.dragEvent.dragItem.clientWidth / 2)
            this.dragEvent.dragItem.style.left = `${newX}px`;
            this.dragEvent.xOff -= newX;
        }

        document.querySelector('#main-container').addEventListener('mousemove', this.dragMoveHandler, true);
        document.querySelector('#main-container').addEventListener('mouseup', this.dragEndHandler, true);
    }

    // bound function to handle dragging motion
    dragMove(e) {
        e = e || window.event;
        e.preventDefault();
        const icon = this.dragEvent.dragItem;
        icon.style.top = (e.clientY - this.dragEvent.yOff) + 'px';
        icon.style.left = (e.clientX - this.dragEvent.xOff) + 'px';

        icon.style.visibility = 'hidden';
        let below = document.elementFromPoint(e.clientX, e.clientY);
        icon.style.visibility = 'visible';

        if (below.classList.contains('selectable') 
            && this.dragEvent.dragOver != below) {
                this.clearHover();
                if (this.dragEvent.dragItem.classList.contains('drag-y')) {
                    this.setHoverY(below, this.dragEvent.dragItem.childElementCount);
                } else {
                    this.setHover(below, Number(icon.dataset.left), Number(icon.dataset.right));
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
        if (this.dragEvent.dragItem.childElementCount === this.dragEvent.dragGroup.length) {
            this.dragEvent.dragGroup.forEach(cell => {
                if (cell.classList.contains('set')) { validSet = false;}
            })
        } else { validSet = false; }

        if (validSet) {
            this.dragEvent.dragGroup.forEach(cell => {
                cell.classList.add('set');
            })
        } else {
            document.querySelector('.set-tray')
            .children.item(Number(this.dragEvent.dragItem.dataset.tray))
            .firstChild.classList
            .remove('icon-disable');
        }

        if (this.dragEvent.dragItem) { this.dragEvent.dragItem.remove() };
        this.clearHover();
        document.querySelector('#main-container').removeEventListener('mousemove', this.dragMoveHandler, true);
        document.querySelector('#main-container').removeEventListener('mouseup', this.dragEndHandler, true);
    }

    // Handle adding hover event
    setHover(cell, left, right) {  
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
                toAdd = grid.children.item(adjustToIndex(index + this.SIZE, this.SIZE));
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
        else { gridBox.appendChild(makeElement('div', { class: 'open-cell selectable', 'data-index': cellIndex++ })) };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UyxnRkFBZ0YsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFFBQVEsS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLE9BQU8sT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxjQUFjLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsV0FBVyxNQUFNLFNBQVMsTUFBTSxLQUFLLFlBQVksV0FBVyxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZ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QTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDd0I7O0FBRTdDLGlCQUFpQix3REFBVztBQUM1QiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvRE9NQ29udHJvbC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL1NoaXAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWVDb250cm9sLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1iZy1ncmlkOiBibGFjaztcXG4gICAgLS1iZy1jZWxsOiByZWQ7XFxuICAgIC0tZm9udC1ndWlkZS1sZzogMS41cmVtO1xcbiAgICAtLWZvbnQtZ3VpZGUtc206IC43cmVtO1xcbiAgICAtLWdhcC1sZzogM3B4O1xcbiAgICAtLWdhcC1zbTogMnB4O1xcbiAgICAtLWJ1dHRvbi1mZy1kaXNhYmxlOiBncmV5O1xcbiAgICAtLWJ1dHRvbi1mZy1ub3JtYWw6IGJsYWNrO1xcbiAgICAtLWJ1dHRvbi1iZy1kaXNhYmxlOiBkYXJrZ3JleTtcXG4gICAgLS1idXR0b24tYmctbm9ybWFsOiB3aGl0ZTtcXG4gICAgLS1idXR0b24tZm9udC1zaXplOiAycmVtO1xcbiAgICAtLWJvYXJkLWhpdDogZGFya3JlZDtcXG4gICAgLS1ib2FyZC1ob3ZlcjogYXF1YTtcXG4gICAgLS1ib2FyZC1taXNzOiBncmV5O1xcbiAgICAtLWJvYXJkLXNlbGVjdGVkOiB5ZWxsb3c7XFxuICAgIC0tYm9hcmQtc2hpcDogZ3JlZW47XFxuICAgIC0tc2lkZS1zaXplOiAxMDtcXG59XFxuXFxuXFxuYm9keSwgaHRtbCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJnLW5vcm1hbCk7XFxuICAgIGNvbG9yOiB2YXIoLS1idXR0b24tZmctbm9ybWFsKTtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tYnV0dG9uLWZnLW5vcm1hbCk7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tYnV0dG9uLWZvbnQtc2l6ZSk7XFxufVxcblxcbmJ1dHRvbjpkaXNhYmxlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iZy1kaXNhYmxlKTtcXG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1mZy1kaXNhYmxlKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tZmctZGlzYWJsZSk7XFxufVxcblxcbi8qIHN0eWxpbmcgZm9yIGFsbCBncmlkIGRpc3BsYXlzICovXFxuLmdyaWQtYm94IHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LWd1aWRlLWxnKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctZ3JpZCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLXNpZGUtc2l6ZSksIDFmcik7XFxuICAgIGdhcDogdmFyKC0tZ2FwLWxnKTtcXG59XFxuXFxuLmdyaWQtYm94ID4gZGl2IHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNlbGwpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmd1aWRlLXRvcCxcXG4uZ3VpZGUtY29ybmVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1nYXAtbGcpICogLjY2KTtcXG59XFxuXFxuLmd1aWRlLWxlZnQsXFxuLmd1aWRlLWNvcm5lciB7XFxuICAgIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1nYXAtbGcpICogLjY2KTtcXG59XFxuXFxuLmd1aWRlLWNvcm5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWdyaWQpICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIGFsbCBncmlkIGljb25zICovXFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1zaGlwKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLW1pc3MpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1oaXQpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLXNlbGVjdGVkKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3cgIWltcG9ydGFudDtcXG59XFxuXFxuLnNldCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zZXQuaG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleSAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciBub3RpZmljYXRpb25zICovXFxuLmdhbWVvdmVyLWNvbnRhaW5lcixcXG4udHVybi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uZ2FtZW92ZXItY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi50dXJuLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZ2FtZW92ZXItY29udGVudCxcXG4udHVybi1jb250ZW50IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuI21haW4tY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIHNldCBkaXNwbGF5ICovXFxuI3NldC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OiAwIDEgNTV2aDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBcXG59XFxuXFxuLyogLnNldC1ncmlkIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LWd1aWRlLWxnKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gICAgZ2FwOiB2YXIoLS1nYXAtbGcpO1xcbiAgICBtaW4taGVpZ2h0OiAwO1xcbn0gKi9cXG5cXG4uc2V0LXRyYXkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG5cXG59XFxuXFxuLnRyYXktaXRlbSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OmxlZnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5pY29uLXBpZWNlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBncmlkLXJvdzogMSAvIC0xO1xcbiAgICBib3JkZXI6IHZhcigtLWdhcC1zbSkgc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IHZhcigtLWdhcC1zbSk7XFxufVxcblxcbi5pY29uLXBpZWNlLmljb24tZGlzYWJsZT5kaXY6bm90KCNkcmFnZ2VkKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXkgIWltcG9ydGFudDtcXG59XFxuXFxuLmljb24tY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNlbGwpO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbn1cXG5cXG4uZHJhZy1jZWxsIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4jZHJhZ2dlZCB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kcmFnLXkge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9nZ2xlLXJvdGF0ZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuI3RvZ2dsZS1iYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jdG9nZ2xlLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4jdG9nZ2xlLXRleHQge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRvcDogIDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbiN0b2dnbGUtYm9keSB7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG59XFxuXFxuI3RvZ2dsZS1ib2R5OmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHdpZHRoOiAwO1xcbiAgICB0b3A6IDIwcHg7XFxuICAgIGxlZnQ6IDcwcHg7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBib3JkZXI6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZWQ7XFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIHBsYXkgZGlzcGxheXMgKi9cXG4ucGxheS1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDAgLjVyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ucGxheS1zdGF0dXMge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1ndWlkZS1zbSk7XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGdhcDogdmFyKC0tZ2FwLXNtKTtcXG59XFxuXFxuLnBsYXktc3RhdHVzIC5ndWlkZS1sZWZ0IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLWdhcC1zbSkgKiAuNjYpO1xcbn1cXG5cXG4ucGxheS1zdGF0dXMgLmd1aWRlLXRvcCB7XFxuICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tZ2FwLXNtKSAqIC42Nik7XFxufVxcblxcbi5wbGF5LWFyZWEge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtZ3VpZGUtbGcpO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiB2YXIoLS1nYXAtbGcpO1xcbn1cXG5cXG4ucGxheS1hcmVhID4gLm9wZW4tY2VsbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWhvdmVyKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucGxheS1idXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogU3R5bGluZyBmb3Igd2lkZSB2aWV3cyBvZiBwbGF5IGRpc3BsYXkgICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDU3MHB4KSB7XFxuICAgIC5wbGF5LWNvbnRhaW5lciB7XFxuICAgICAgICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgfVxcblxcbiAgICAucGxheS1hcmVhIHtcXG4gICAgICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgfVxcblxcbiAgICAucGxheS1zdGF0dXMge1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLnBsYXktYnV0dG9uIHtcXG4gICAgICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksU0FBUztJQUNULFlBQVk7SUFDWixXQUFXO0lBQ1g7OzswQkFHc0I7QUFDMUI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsOEJBQThCO0lBQzlCLHlDQUF5QztJQUN6QyxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsK0JBQStCO0lBQy9CLHNDQUFzQztBQUMxQzs7QUFFQSxrQ0FBa0M7QUFDbEM7SUFDSSwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2Isb0RBQW9EO0lBQ3BELGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksd0NBQXdDO0FBQzVDOztBQUVBOztJQUVJLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLDJDQUEyQztBQUMvQzs7QUFFQSwrQkFBK0I7QUFDL0I7SUFDSSw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSxrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxxQ0FBcUM7QUFDekM7O0FBRUEsOEJBQThCO0FBQzlCOztJQUVJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7SUFFbkIsa0JBQWtCO0FBQ3RCOztBQUVBLDRCQUE0QjtBQUM1QjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLFNBQVM7O0FBRWI7O0FBRUE7Ozs7O0dBS0c7O0FBRUg7SUFDSSwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLDhCQUE4Qjs7QUFFbEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlDQUFpQztJQUNqQyx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsc0JBQXNCO0FBQzFCOztBQUVBLDhCQUE4QjtBQUM5QjtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksK0NBQStDO0FBQ25EOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBLDRDQUE0QztBQUM1QztJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYiw4QkFBOEI7UUFDOUIsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsV0FBVztJQUNmOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtJQUN0QjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1iZy1ncmlkOiBibGFjaztcXG4gICAgLS1iZy1jZWxsOiByZWQ7XFxuICAgIC0tZm9udC1ndWlkZS1sZzogMS41cmVtO1xcbiAgICAtLWZvbnQtZ3VpZGUtc206IC43cmVtO1xcbiAgICAtLWdhcC1sZzogM3B4O1xcbiAgICAtLWdhcC1zbTogMnB4O1xcbiAgICAtLWJ1dHRvbi1mZy1kaXNhYmxlOiBncmV5O1xcbiAgICAtLWJ1dHRvbi1mZy1ub3JtYWw6IGJsYWNrO1xcbiAgICAtLWJ1dHRvbi1iZy1kaXNhYmxlOiBkYXJrZ3JleTtcXG4gICAgLS1idXR0b24tYmctbm9ybWFsOiB3aGl0ZTtcXG4gICAgLS1idXR0b24tZm9udC1zaXplOiAycmVtO1xcbiAgICAtLWJvYXJkLWhpdDogZGFya3JlZDtcXG4gICAgLS1ib2FyZC1ob3ZlcjogYXF1YTtcXG4gICAgLS1ib2FyZC1taXNzOiBncmV5O1xcbiAgICAtLWJvYXJkLXNlbGVjdGVkOiB5ZWxsb3c7XFxuICAgIC0tYm9hcmQtc2hpcDogZ3JlZW47XFxuICAgIC0tc2lkZS1zaXplOiAxMDtcXG59XFxuXFxuXFxuYm9keSwgaHRtbCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJnLW5vcm1hbCk7XFxuICAgIGNvbG9yOiB2YXIoLS1idXR0b24tZmctbm9ybWFsKTtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tYnV0dG9uLWZnLW5vcm1hbCk7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tYnV0dG9uLWZvbnQtc2l6ZSk7XFxufVxcblxcbmJ1dHRvbjpkaXNhYmxlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iZy1kaXNhYmxlKTtcXG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1mZy1kaXNhYmxlKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tZmctZGlzYWJsZSk7XFxufVxcblxcbi8qIHN0eWxpbmcgZm9yIGFsbCBncmlkIGRpc3BsYXlzICovXFxuLmdyaWQtYm94IHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LWd1aWRlLWxnKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctZ3JpZCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLXNpZGUtc2l6ZSksIDFmcik7XFxuICAgIGdhcDogdmFyKC0tZ2FwLWxnKTtcXG59XFxuXFxuLmdyaWQtYm94ID4gZGl2IHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNlbGwpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmd1aWRlLXRvcCxcXG4uZ3VpZGUtY29ybmVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1nYXAtbGcpICogLjY2KTtcXG59XFxuXFxuLmd1aWRlLWxlZnQsXFxuLmd1aWRlLWNvcm5lciB7XFxuICAgIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1nYXAtbGcpICogLjY2KTtcXG59XFxuXFxuLmd1aWRlLWNvcm5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWdyaWQpICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIGFsbCBncmlkIGljb25zICovXFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1zaGlwKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLW1pc3MpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1oaXQpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLXNlbGVjdGVkKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3cgIWltcG9ydGFudDtcXG59XFxuXFxuLnNldCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zZXQuaG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleSAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciBub3RpZmljYXRpb25zICovXFxuLmdhbWVvdmVyLWNvbnRhaW5lcixcXG4udHVybi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uZ2FtZW92ZXItY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi50dXJuLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZ2FtZW92ZXItY29udGVudCxcXG4udHVybi1jb250ZW50IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuI21haW4tY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIHNldCBkaXNwbGF5ICovXFxuI3NldC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OiAwIDEgNTV2aDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBcXG59XFxuXFxuLyogLnNldC1ncmlkIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LWd1aWRlLWxnKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gICAgZ2FwOiB2YXIoLS1nYXAtbGcpO1xcbiAgICBtaW4taGVpZ2h0OiAwO1xcbn0gKi9cXG5cXG4uc2V0LXRyYXkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG5cXG59XFxuXFxuLnRyYXktaXRlbSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OmxlZnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5pY29uLXBpZWNlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBncmlkLXJvdzogMSAvIC0xO1xcbiAgICBib3JkZXI6IHZhcigtLWdhcC1zbSkgc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IHZhcigtLWdhcC1zbSk7XFxufVxcblxcbi5pY29uLXBpZWNlLmljb24tZGlzYWJsZT5kaXY6bm90KCNkcmFnZ2VkKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXkgIWltcG9ydGFudDtcXG59XFxuXFxuLmljb24tY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNlbGwpO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbn1cXG5cXG4uZHJhZy1jZWxsIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4jZHJhZ2dlZCB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kcmFnLXkge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9nZ2xlLXJvdGF0ZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuI3RvZ2dsZS1iYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jdG9nZ2xlLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4jdG9nZ2xlLXRleHQge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRvcDogIDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbiN0b2dnbGUtYm9keSB7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG59XFxuXFxuI3RvZ2dsZS1ib2R5OmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHdpZHRoOiAwO1xcbiAgICB0b3A6IDIwcHg7XFxuICAgIGxlZnQ6IDcwcHg7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBib3JkZXI6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZWQ7XFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIHBsYXkgZGlzcGxheXMgKi9cXG4ucGxheS1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDAgLjVyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ucGxheS1zdGF0dXMge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1ndWlkZS1zbSk7XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGdhcDogdmFyKC0tZ2FwLXNtKTtcXG59XFxuXFxuLnBsYXktc3RhdHVzIC5ndWlkZS1sZWZ0IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLWdhcC1zbSkgKiAuNjYpO1xcbn1cXG5cXG4ucGxheS1zdGF0dXMgLmd1aWRlLXRvcCB7XFxuICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tZ2FwLXNtKSAqIC42Nik7XFxufVxcblxcbi5wbGF5LWFyZWEge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtZ3VpZGUtbGcpO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiB2YXIoLS1nYXAtbGcpO1xcbn1cXG5cXG4ucGxheS1hcmVhID4gLm9wZW4tY2VsbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWhvdmVyKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucGxheS1idXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogU3R5bGluZyBmb3Igd2lkZSB2aWV3cyBvZiBwbGF5IGRpc3BsYXkgICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDU3MHB4KSB7XFxuICAgIC5wbGF5LWNvbnRhaW5lciB7XFxuICAgICAgICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgfVxcblxcbiAgICAucGxheS1hcmVhIHtcXG4gICAgICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgfVxcblxcbiAgICAucGxheS1zdGF0dXMge1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLnBsYXktYnV0dG9uIHtcXG4gICAgICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBIZWxwZXIgZnVuY3Rpb24gZm9yIGVhc3kgZWxlbWVudCBjcmVhdGlvblxuLy8gdXNlOiAoPHN0cmluZz4sIDxvYmplY3Q+IG9mIHByb3BlcnRpZXMgYXMgeW91IHdvdWxkIHVzZSBzZXRBdHRyaWJ1dGUsIDxzdHJpbmc+aW5uZXJIVE1MKVxuZnVuY3Rpb24gbWFrZUVsZW1lbnQodHlwZSwgcHJvcGVydGllcyA9IHt9LCBpbm5lciA9IG51bGwpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBmb3IgKGxldCBrZXkgaW4gcHJvcGVydGllcykgeyBlbGVtZW50LnNldEF0dHJpYnV0ZShgJHtrZXl9YCwgYCR7cHJvcGVydGllc1trZXldfWApIH07XG4gICAgaWYgKGlubmVyKSB7IGVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXIgfTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYWRqdXN0VG9JbmRleChpbmRleCwgc2l6ZSkgeyBcbiAgICByZXR1cm4gKHNpemUgKyAxKSAqIChpbmRleCAvIHNpemUgKyAxKSArIDE7XG59XG5cbi8vIGNyZWF0ZSBhbmQgZGlzcGxheSB0aGUgaW5pdGlhbCBjb250ZW50XG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZURPTSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jykuc2V0QXR0cmlidXRlKCdvbmRyYWdzdGFydCcsICdyZXR1cm4gZmFsc2U7Jyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnNldEF0dHJpYnV0ZSgnb25kcm9wJywgJ3JldHVybiBmYWxzZScpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGlkOiAnbWFpbi1jb250YWluZXInIH0pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBjb25zdCBzZXRQbGF5ZXIgPSBuZXcgU2V0UGxheWVyKDEwLCBbNSwgNCwgMywgMywgMl0pO1xuICAgIFxuICAgIHNldFBsYXllci5kaXNwbGF5KCk7XG59XG5cbi8vIERpc3BsYXkgZm9yIGluaXRpYWx6aWluZyBhIHBsYXllclxuZXhwb3J0IGNsYXNzIFNldFBsYXllciB7XG4gICAgY29uc3RydWN0b3Ioc2l6ZSwgcGllY2VzKSB7XG4gICAgICAgIHRoaXMuU0laRSA9IHNpemU7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgaWQ6ICdzZXQtY29udGFpbmVyJyB9KTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRHcmlkKHNpemUpKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5idWlsZFRvZ2dsZUJhcigpKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tYWtlVHJheShwaWVjZXMpKTtcbiAgICAgICAgLy8gY29udGFpbmVyIGZvciBkcmFnIGluZm9ybWF0aW9uXG4gICAgICAgIHRoaXMuZHJhZ0V2ZW50ID0ge1xuICAgICAgICAgICAgZHJhZ0l0ZW06IG51bGwsXG4gICAgICAgICAgICB4T2ZmOiAwLFxuICAgICAgICAgICAgeU9mZjogMCxcbiAgICAgICAgICAgIGRyYWdPdmVyOiBudWxsLFxuICAgICAgICAgICAgZHJhZ0dyb3VwOiBbXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRyYWdNb3ZlSGFuZGxlciA9IHRoaXMuZHJhZ01vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmFnRW5kSGFuZGxlciA9IHRoaXMuZHJhZ0VuZC5iaW5kKHRoaXMpO1xuICAgICAgICAvLyBoYW5kbGUgY29uZmxpY3RzIHdpdGggbW91c2UgbGVhdmluZyB3aW5kb3cgd2hpbGUgaW4gZHJhZ1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZHJhZ0VuZEhhbmRsZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYnVpbGRUb2dnbGVCYXIoKSB7XG4gICAgICAgIGNvbnN0IHRvZ2dsZWJhciA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGlkOiAndG9nZ2xlLWJhcicgfSk7XG4gICAgICAgIGNvbnN0IHRvZ2dsZUNvbnRhaW5lciA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGlkOiAndG9nZ2xlLWNvbnRhaW5lcicgfSlcbiAgICAgICAgY29uc3QgdG9nZ2xlQm9keSA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGlkOiAndG9nZ2xlLWJvZHknLCAnZGF0YS15JzogJ2ZhbHNlJyB9KTtcbiAgICAgICAgY29uc3QgdG9nZ2xlVGV4dCA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGlkOiAndG9nZ2xlLXRleHQnIH0sICdYJyk7XG4gICAgICAgIHRvZ2dsZUJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndG9nZ2xlLXJvdGF0ZScpKSB7XG4gICAgICAgICAgICAgICAgZS50YXJnZXQuc2V0QXR0cmlidXRlKCdkYXRhLXknLCAnZmFsc2UnKTtcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCd0b2dnbGUtcm90YXRlJyk7XG4gICAgICAgICAgICAgICAgdG9nZ2xlVGV4dC5pbm5lckhUTUwgPSAnWCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS15JywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtcm90YXRlJyk7XG4gICAgICAgICAgICAgICAgdG9nZ2xlVGV4dC5pbm5lckhUTUwgPSAnWSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0b2dnbGVDb250YWluZXIuYXBwZW5kQ2hpbGQodG9nZ2xlQm9keSk7XG4gICAgICAgIHRvZ2dsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2dnbGVUZXh0KTtcbiAgICAgICAgdG9nZ2xlYmFyLmFwcGVuZENoaWxkKHRvZ2dsZUNvbnRhaW5lcilcbiAgICAgICAgcmV0dXJuIHRvZ2dsZWJhcjtcbiAgICB9XG5cbiAgICBcblxuICAgIGdldENvbnRhaW5lcigpIHsgcmV0dXJuIHRoaXMuY29udGFpbmVyOyB9XG4gICAgZ2V0R3JpZCgpIHsgcmV0dXJuIHRoaXMuZ2V0Q29udGFpbmVyKCkucXVlcnlTZWxlY3RvcignLmdyaWQtYm94Jyk7IH1cbiAgICBnZXRUcmF5KCkgeyByZXR1cm4gdGhpcy5nZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yKCcuc2V0LXRyYXknKTsgfVxuXG4gICAgLy8gYXBwZW5kIHNldHBsYXllciB0byBtYWluIGNvbnRhaW5lciwgc2V0cyBpbml0aWFsIGhlaWdodCBvZiBhbGwgaWNvbiBjZWxsc1xuICAgIC8vIGJpbmRzIHdpbmRvdyByZXNpemluZyB0byByZXNpemUgaWNvbnMgdG8gbWF0Y2ggZ3JpZCBzaXplXG4gICAgZGlzcGxheSgpIHsgXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKHRoaXMuZ2V0Q29udGFpbmVyKCkpOyBcbiAgICAgICAgdGhpcy5zZXRUcmF5SWNvblNpemUoKVxuICAgICAgICB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkLWJveCcpLmNoaWxkcmVuLml0ZW0oMTEpLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pY29uLWNlbGwnKS5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjbGVhciBzZXRwbGF5ZXJcbiAgICByZW1vdmUoKSB7IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZXQtY29udGFpbmVyJykucmVtb3ZlKCk7IH1cblxuICAgIC8vIHNldCB0aGUgaWNvbidzIGNlbGwgc2l6ZSB0byBtYXRjaCB0aGUgZ3JpZCdzIGNlbGwgc2l6ZVxuICAgIHNldFRyYXlJY29uU2l6ZSgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmljb24tY2VsbCcpLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICBjZWxsLnN0eWxlLmhlaWdodCA9IHRoaXMuR2V0VHJheUljb25TaXplKCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgR2V0VHJheUljb25TaXplKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5nZXRHcmlkKCkuY2hpbGRyZW4uaXRlbShhZGp1c3RUb0luZGV4KDAsIHRoaXMuU0laRSkpLmNsaWVudEhlaWdodH1weGA7XG4gICAgfVxuXG4gICAgLy8gY29udGFpbmVyIGZvciBpY29ucyBpbmRleGVzIHRoZSBpY29ucyBvbiBvcmRlciBhZGRlZFxuICAgIG1ha2VUcmF5KHBpZWNlcykge1xuICAgICAgICBjb25zdCB0cmF5ID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdzZXQtdHJheScgfSk7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBqID0gTWF0aC5mbG9vcigocGllY2VzLmxlbmd0aCkgLyAyKTsgaiA8IHBpZWNlcy5sZW5ndGg7IGkrKywgaisrKSB7XG4gICAgICAgICAgICBpZiAoaSA8IE1hdGguZmxvb3IocGllY2VzLmxlbmd0aCAvIDIpKSB7IFxuICAgICAgICAgICAgICAgIHRyYXkuYXBwZW5kQ2hpbGQodGhpcy5tYWtlVHJheUl0ZW0ocGllY2VzW2ldKSk7XG4gICAgICAgICAgICAgICAgdHJheS5sYXN0Q2hpbGQuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJheScsIGAke2luZGV4Kyt9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cmF5LmFwcGVuZENoaWxkKHRoaXMubWFrZVRyYXlJdGVtKHBpZWNlc1tqXSkpO1xuICAgICAgICAgICAgdHJheS5sYXN0Q2hpbGQuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJheScsIGAke2luZGV4Kyt9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRyYXk7XG4gICAgfVxuXG4gICAgLy8gY3JlYXRlIGhvbGRlciBmb3IgaWNvbnNcbiAgICBtYWtlVHJheUl0ZW0ocGllY2UpIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAndHJheS1pdGVtJyB9KVxuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKHRoaXMubWFrZVBpZWNlSWNvbihwaWVjZSkpO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG5cbiAgICAvLyBjcmVhdGUgaWNvbnNcbiAgICBtYWtlUGllY2VJY29uKHNpemUpIHtcbiAgICAgICAgY29uc3QgaWNvbiA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnaWNvbi1waWVjZScgfSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdpY29uLWNlbGwnIH0pO1xuICAgICAgICAgICAgaWNvbi5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgfVxuICAgICAgICBpY29uLmRhdGFzZXQuc2l6ZSA9IHNpemU7XG4gICAgICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHRoaXMuZHJhZ1N0YXJ0KGUpKTtcbiAgICAgICAgcmV0dXJuIGljb247XG4gICAgfVxuXG4gICAgbWFrZURyYWdJY29uKHNpemUsIHZlcnRpY2FsLCB0cmF5KSB7XG4gICAgICAgIGNvbnN0IGRyYWdJY29uID0gdGhpcy5tYWtlUGllY2VJY29uKE51bWJlcihzaXplKSk7XG4gICAgICAgIGRyYWdJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZHJhZ2dlZCcpO1xuICAgICAgICBkcmFnSWNvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJheScsIHRyYXkpO1xuICAgICAgICBpZiAodmVydGljYWwpIHsgZHJhZ0ljb24uY2xhc3NMaXN0LmFkZCgnZHJhZy15JykgfVxuICAgICAgICBbLi4uZHJhZ0ljb24uY2hpbGRyZW5dLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgY2hpbGQuc3R5bGUuaGVpZ2h0ID0gdGhpcy5HZXRUcmF5SWNvblNpemUoKVxuICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmFkZCgnZHJhZy1jZWxsJylcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkcmFnSWNvbjsgXG4gICAgfVxuXG4gICAgLy8gQWxsIGRyYWcvZHJvcCBhY3Rpb25zIHRvIGZvbGxvd1xuXG4gICAgLy8gY3JlYXRlcyBhbmQgYXBwZW5kcyBkcmFnZ2VkIGljb24sIHNldHMgZHJhZyBiaW5kaW5nc1xuICAgIGRyYWdTdGFydChlKSB7XG4gICAgICAgIGNvbnN0IGljb24gPSAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpY29uLWNlbGwnKSkgPyBlLnRhcmdldC5wYXJlbnROb2RlIDogZS50YXJnZXQ7XG4gICAgICAgIGNvbnN0IGlzWSA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9nZ2xlLWJvZHknKS5kYXRhc2V0LnkgPT09ICd0cnVlJyk7XG4gICAgICAgIGlmIChpY29uLmNsYXNzTGlzdC5jb250YWlucygnaWNvbi1kaXNhYmxlJykpIHsgcmV0dXJuIH1cbiAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdpY29uLWRpc2FibGUnKTtcblxuICAgICAgICB0aGlzLmRyYWdFdmVudC5kcmFnSXRlbSA9IHRoaXMubWFrZURyYWdJY29uKE51bWJlcihpY29uLmRhdGFzZXQuc2l6ZSksIGlzWSwgaWNvbi5kYXRhc2V0LnRyYXkpO1xuICAgICAgICB0aGlzLmRyYWdFdmVudC54T2ZmID0gZS5jbGllbnRYO1xuICAgICAgICB0aGlzLmRyYWdFdmVudC55T2ZmID0gZS5jbGllbnRZO1xuICAgICAgICBpY29uLmFwcGVuZENoaWxkKHRoaXMuZHJhZ0V2ZW50LmRyYWdJdGVtKTtcblxuICAgICAgICBjb25zdCB4UG9zID0gZS5jbGllbnRYIC0gdGhpcy5kcmFnRXZlbnQuZHJhZ0l0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICAgICAgY29uc3QgbGVmdCA9IE1hdGguZmxvb3IoeFBvcyAvIHRoaXMuZHJhZ0V2ZW50LmRyYWdJdGVtLmZpcnN0Q2hpbGQuY2xpZW50V2lkdGgpO1xuICAgICAgICBjb25zdCByaWdodCA9IHRoaXMuZHJhZ0V2ZW50LmRyYWdJdGVtLmNoaWxkRWxlbWVudENvdW50IC0gbGVmdCAtIDE7XG4gICAgICAgIHRoaXMuZHJhZ0V2ZW50LmRyYWdJdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1sZWZ0JywgbGVmdCk7XG4gICAgICAgIHRoaXMuZHJhZ0V2ZW50LmRyYWdJdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1yaWdodCcsIHJpZ2h0KTtcblxuICAgICAgICBpZiAodGhpcy5kcmFnRXZlbnQuZHJhZ0l0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdkcmFnLXknKSkge1xuICAgICAgICAgICAgY29uc3QgbmV3WCA9IHhQb3MgLSAodGhpcy5kcmFnRXZlbnQuZHJhZ0l0ZW0uY2xpZW50V2lkdGggLyAyKVxuICAgICAgICAgICAgdGhpcy5kcmFnRXZlbnQuZHJhZ0l0ZW0uc3R5bGUubGVmdCA9IGAke25ld1h9cHhgO1xuICAgICAgICAgICAgdGhpcy5kcmFnRXZlbnQueE9mZiAtPSBuZXdYO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGFpbmVyJykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5kcmFnTW92ZUhhbmRsZXIsIHRydWUpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5kcmFnRW5kSGFuZGxlciwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLy8gYm91bmQgZnVuY3Rpb24gdG8gaGFuZGxlIGRyYWdnaW5nIG1vdGlvblxuICAgIGRyYWdNb3ZlKGUpIHtcbiAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGljb24gPSB0aGlzLmRyYWdFdmVudC5kcmFnSXRlbTtcbiAgICAgICAgaWNvbi5zdHlsZS50b3AgPSAoZS5jbGllbnRZIC0gdGhpcy5kcmFnRXZlbnQueU9mZikgKyAncHgnO1xuICAgICAgICBpY29uLnN0eWxlLmxlZnQgPSAoZS5jbGllbnRYIC0gdGhpcy5kcmFnRXZlbnQueE9mZikgKyAncHgnO1xuXG4gICAgICAgIGljb24uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICBsZXQgYmVsb3cgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGUuY2xpZW50WCwgZS5jbGllbnRZKTtcbiAgICAgICAgaWNvbi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuXG4gICAgICAgIGlmIChiZWxvdy5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGFibGUnKSBcbiAgICAgICAgICAgICYmIHRoaXMuZHJhZ0V2ZW50LmRyYWdPdmVyICE9IGJlbG93KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckhvdmVyKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZHJhZ0V2ZW50LmRyYWdJdGVtLmNsYXNzTGlzdC5jb250YWlucygnZHJhZy15JykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRIb3ZlclkoYmVsb3csIHRoaXMuZHJhZ0V2ZW50LmRyYWdJdGVtLmNoaWxkRWxlbWVudENvdW50KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEhvdmVyKGJlbG93LCBOdW1iZXIoaWNvbi5kYXRhc2V0LmxlZnQpLCBOdW1iZXIoaWNvbi5kYXRhc2V0LnJpZ2h0KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCFiZWxvdy5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGFibGUnKSkge1xuICAgICAgICAgICAgdGhpcy5jbGVhckhvdmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGdW5jdGlvbiB0byBjbGVhciBkcmFnZ2VkIGFjdGlvbnNcbiAgICBkcmFnRW5kKGUpIHtcbiAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgbGV0IHZhbGlkU2V0ID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuZHJhZ0V2ZW50LmRyYWdJdGVtLmNoaWxkRWxlbWVudENvdW50ID09PSB0aGlzLmRyYWdFdmVudC5kcmFnR3JvdXAubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmRyYWdFdmVudC5kcmFnR3JvdXAuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NldCcpKSB7IHZhbGlkU2V0ID0gZmFsc2U7fVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHsgdmFsaWRTZXQgPSBmYWxzZTsgfVxuXG4gICAgICAgIGlmICh2YWxpZFNldCkge1xuICAgICAgICAgICAgdGhpcy5kcmFnRXZlbnQuZHJhZ0dyb3VwLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzZXQnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0LXRyYXknKVxuICAgICAgICAgICAgLmNoaWxkcmVuLml0ZW0oTnVtYmVyKHRoaXMuZHJhZ0V2ZW50LmRyYWdJdGVtLmRhdGFzZXQudHJheSkpXG4gICAgICAgICAgICAuZmlyc3RDaGlsZC5jbGFzc0xpc3RcbiAgICAgICAgICAgIC5yZW1vdmUoJ2ljb24tZGlzYWJsZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZHJhZ0V2ZW50LmRyYWdJdGVtKSB7IHRoaXMuZHJhZ0V2ZW50LmRyYWdJdGVtLnJlbW92ZSgpIH07XG4gICAgICAgIHRoaXMuY2xlYXJIb3ZlcigpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250YWluZXInKS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmRyYWdNb3ZlSGFuZGxlciwgdHJ1ZSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRhaW5lcicpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmRyYWdFbmRIYW5kbGVyLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgYWRkaW5nIGhvdmVyIGV2ZW50XG4gICAgc2V0SG92ZXIoY2VsbCwgbGVmdCwgcmlnaHQpIHsgIFxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XG4gICAgICAgIHRoaXMuZHJhZ0V2ZW50LmRyYWdPdmVyID0gY2VsbDsgICAgICAgIFxuICAgICAgICB0aGlzLmRyYWdFdmVudC5kcmFnR3JvdXAucHVzaChjZWxsKTtcbiAgICAgICAgdGhpcy5ob3ZlclNpYmxpbmdzKGNlbGwsIGxlZnQsIHRydWUpO1xuICAgICAgICB0aGlzLmhvdmVyU2libGluZ3MoY2VsbCwgcmlnaHQsIGZhbHNlKTsgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICB9XG5cbiAgICBzZXRIb3Zlclkocm9vdCwgbnVtU2liKSB7XG4gICAgICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZC1ib3gnKTtcbiAgICAgICAgbGV0IGluZGV4ID0gTnVtYmVyKHJvb3QuZGF0YXNldC5pbmRleCk7XG4gICAgICAgIGxldCB0b0FkZCA9IHJvb3Q7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtU2liOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0b0FkZCkge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gTnVtYmVyKHRvQWRkLmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ0V2ZW50LmRyYWdHcm91cC5wdXNoKHRvQWRkKTtcbiAgICAgICAgICAgICAgICB0b0FkZC5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xuICAgICAgICAgICAgICAgIHRvQWRkID0gZ3JpZC5jaGlsZHJlbi5pdGVtKGFkanVzdFRvSW5kZXgoaW5kZXggKyB0aGlzLlNJWkUsIHRoaXMuU0laRSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gaGlnaGxpZ2h0IHRoZSBjb3JyZWN0IG5laWdoYm9yaW5nIHNpYmxpbmdzIG9uIGhvdmVyXG4gICAgaG92ZXJTaWJsaW5ncyhyb290LCBudW1TaWIsIGxlZnQpIHtcbiAgICAgICAgbGV0IHRvQWRkID0gcm9vdDtcbiAgICAgICAgbGV0IGluZGV4ID0gTnVtYmVyKHJvb3QuZGF0YXNldC5pbmRleCk7XG4gICAgICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoaW5kZXggLyB0aGlzLlNJWkUpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVNpYjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjaGVjayA9IChsZWZ0KSA/ICgoaW5kZXggLSAoaSArIDEpKSAvIHRoaXMuU0laRSkgOiAoKGluZGV4ICsgKGkgKyAxKSkgLyB0aGlzLlNJWkUpO1xuICAgICAgICAgICAgaWYgKHJvdyA9PT0gTWF0aC5mbG9vcihjaGVjaykpIHtcbiAgICAgICAgICAgICAgICB0b0FkZCA9IChsZWZ0KSA/IHRvQWRkLnByZXZpb3VzU2libGluZyA6IHRvQWRkLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIHRvQWRkLmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7IFxuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ0V2ZW50LmRyYWdHcm91cC5wdXNoKHRvQWRkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJlc2V0cyBzZXQgaG92ZXIgYWN0aW9uc1xuICAgIGNsZWFySG92ZXIoKSB7XG4gICAgICAgIHRoaXMuZHJhZ0V2ZW50LmRyYWdPdmVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5kcmFnRXZlbnQuZHJhZ0dyb3VwLmZvckVhY2goY2VsbCA9PiBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJykpO1xuICAgICAgICB0aGlzLmRyYWdFdmVudC5kcmFnR3JvdXAubGVuZ3RoID0gMDtcbiAgICB9XG59XG5cbi8vIERpc3BsYXkgZm9yIHRoZSBnZW5lcmFsIHBsYXkgYXJlYVxuZXhwb3J0IGNsYXNzIFBsYXlCb2FyZCB7XG4gICAgY29uc3RydWN0b3Ioc2l6ZSwgYWxsU2hpcHMpIHtcbiAgICAgICAgdGhpcy5TSVpFID0gc2l6ZTtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ3BsYXktY29udGFpbmVyJyB9KTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRHcmlkKHNpemUsICdwbGF5LWFyZWEnKSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkR3JpZChzaXplLCAncGxheS1zdGF0dXMnKSlcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2J1dHRvbicsIHsgY2xhc3M6ICdwbGF5LWJ1dHRvbicsIGRpc2FibGVkOiAndHJ1ZScgfSwgJ1NFTEVDVCBUQVJHRVQnKSk7XG4gICAgICAgIGFsbFNoaXBzLmZvckVhY2goaW5kZXggPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0dXMoaW5kZXgsICdzaGlwJyk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIC8vIGdldHRlcnMgZm9yIGJvYXJkIGVsZW1lbnRzXG4gICAgZ2V0Q29udGFpbmVyKCkgeyByZXR1cm4gdGhpcy5jb250YWluZXI7IH1cbiAgICBnZXRQbGF5KCkgeyByZXR1cm4gdGhpcy5nZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yKCcucGxheS1hcmVhJyk7IH1cbiAgICBnZXRTdGF0dXMoKSB7IHJldHVybiB0aGlzLmdldENvbnRhaW5lcigpLnF1ZXJ5U2VsZWN0b3IoJy5wbGF5LXN0YXR1cycpOyB9XG4gICAgZ2V0QnV0dG9uKCkgeyByZXR1cm4gdGhpcy5nZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yKCcucGxheS1idXR0b24nKTsgfVxuICAgIFxuICAgIC8vIEhlbHBlcnMgdG8gaGFuZGxlIHRoZSBkaXNwbGF5ZWQgZ3VpZGVzXG4gICAgZ2V0R3VpZGVJbmRleChpbmRleCkgeyByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIChpbmRleCAlIHRoaXMuU0laRSkpLmNvbmNhdChNYXRoLmZsb29yKGluZGV4IC8gdGhpcy5TSVpFKSArIDEpOyB9XG5cbiAgICBkaXNwbGF5Qm9hcmQoKSB7IGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5nZXRDb250YWluZXIoKSk7IH1cbiAgICByZW1vdmVCb2FyZCgpIHsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXktY29udGFpbmVyJykucmVtb3ZlKCk7IH1cblxuICAgIC8vIHNldCB0aGUgZGlzcGxheSdzIGJ1dHRvbiB0ZXh0IGFuZCBkaXNhYmxlZCBzdGF0dXNcbiAgICBzZXRCdXR0b24oaW5kZXgpIHtcbiAgICAgICAgdGhpcy5nZXRCdXR0b24oKS5kaXNhYmxlZCA9IChpbmRleCkgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgIHRoaXMuZ2V0QnV0dG9uKCkuaW5uZXJIVE1MID0gKGluZGV4KSA/IGBBVFRBQ0sgJHt0aGlzLmdldEd1aWRlSW5kZXgoaW5kZXgpfWAgOiBgU0VMRUNUIFRBUkdFVGA7IFxuICAgIH07XG5cbiAgICAvLyBzd2l0Y2hlcyBhIGNlbGwgZnJvbSBvcGVuIHRvIHNlbGVjdGVkXG4gICAgdG9nZ2xlU2VsZWN0ZWQoaW5kZXgpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuZ2V0UGxheSgpLmNoaWxkcmVuLml0ZW0oYWRqdXN0VG9JbmRleChpbmRleCwgdGhpcy5TSVpFKSk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnRvZ2dsZSgnb3Blbi1jZWxsJyk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcbiAgICB9XG5cbiAgICAvLyBzZXQgY2xhc3MgZm9yIGNlbGwgaW4gdGhlIHBsYXkgZ3JpZFxuICAgIHVwZGF0ZVBsYXkoaW5kZXgsIHRvVXBkYXRlKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmdldFBsYXkoKS5jaGlsZHJlbi5pdGVtKGFkanVzdFRvSW5kZXgoaW5kZXgsIHRoaXMuU0laRSkpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCh0b1VwZGF0ZSk7XG4gICAgfVxuXG4gICAgLy8gc2V0IGNsYXNzIGZvciBjZWxsIGluIHRoZSBzdGF0dXMgZ3JpZFxuICAgIHVwZGF0ZVN0YXR1cyhpbmRleCwgdG9VcGRhdGUpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuZ2V0U3RhdHVzKCkuY2hpbGRyZW4uaXRlbShhZGp1c3RUb0luZGV4KGluZGV4LCB0aGlzLlNJWkUpKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKHRvVXBkYXRlKTtcbiAgICB9XG5cbiAgICAvLyBkaXNwbGF5IGEgcHJpdmFjeSBjb3ZlciBvbiB0dXJuIHN3aXRjaC1vZmZzLCB0YWtlcyBhIHN0cmluZyBmb3IgcGxheWVyJ3MgbmFtZSwgcmV0dXJucyBidXR0b25cbiAgICBjcmVhdGVUdXJuQ292ZXIocGxheWVyKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAndHVybi1jb250YWluZXInIH0pO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gbWFrZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICd0dXJuLWNvbnRlbnQnIH0pO1xuICAgICAgICBjb25zdCBidXR0b24gPSBtYWtlRWxlbWVudCgnYnV0dG9uJywgeyBjbGFzczogJ3R1cm4tYnV0dG9uJyB9LCAnUkVBRFknKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnaDEnLCB7fSwgYCR7cGxheWVyLnRvVXBwZXJDYXNlKCl9J3NgKSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2gxJywge30sICdUVVJOJykpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgICAgdGhpcy5nZXRDb250YWluZXIoKS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH1cblxuICAgIGNsZWFyVHVybkNvdmVyKCkge1xuICAgICAgICB0aGlzLmdldENvbnRhaW5lcigpLnF1ZXJ5U2VsZWN0b3IoJy50dXJuLWNvbnRhaW5lcicpLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIC8vIGRpc3BsYXkgYSBnYW1lb3ZlciBtZXNzYWdlIHdpdGggY3VzdG9uIHJlc3VsdCBzdHJpbmcsIHJldHVybnMgYnV0dG9uIGZvciBiaW5kaW5nXG4gICAgY3JlYXRlR2FtZU92ZXIocmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnZ2FtZW92ZXItY29udGFpbmVyJyB9KTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnZ2FtZW92ZXItY29udGVudCcgfSk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IG1ha2VFbGVtZW50KCdidXR0b24nLCB7IGNsYXNzOiAnZ2FtZW92ZXItYnV0dG9uJyB9LCAnUExBWSBBR0FJTj8nKVxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdoMScsIHt9LCByZXN1bHQpKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9XG59XG5cbi8vIGNyZWF0ZSBhIHZhcmlhYmx5IHNpemVkIGdyaWQgd2l0aCBndWlkZSBtZWFzdXJlcyBvbiB0b3AgYW5kIGxlZnQgaGFuZCBzaWRlXG5mdW5jdGlvbiBidWlsZEdyaWQoc2lkZVNpemUsIGFkZENsYXNzKSB7XG4gICAgY29uc3QgU0laRSA9IE1hdGgucG93KHNpZGVTaXplICsgMSwgMik7XG4gICAgY29uc3QgZ3JpZEJveCA9IG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnZ3JpZC1ib3gnIH0pO1xuICAgIGlmIChhZGRDbGFzcykgeyBncmlkQm94LmNsYXNzTGlzdC5hZGQoYWRkQ2xhc3MpOyB9XG4gICAgbGV0IGNvbFZhbHVlID0gNjU7XG4gICAgbGV0IHJvd1ZhbHVlID0gMTtcbiAgICBsZXQgY2VsbEluZGV4ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IFNJWkU7IGkrKykgeyBcbiAgICAgICAgaWYgKGkgPT09IDApIHsgZ3JpZEJveC5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2d1aWRlLWNvcm5lcicgfSkpIH1cbiAgICAgICAgZWxzZSBpZiAoaSA8PSBzaWRlU2l6ZSkgeyBncmlkQm94LmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnZ3VpZGUtdG9wJyB9LCBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvbFZhbHVlKyspKSkgfVxuICAgICAgICBlbHNlIGlmIChpICUgKHNpZGVTaXplICsgMSkgPT09IDApIHsgZ3JpZEJveC5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2d1aWRlLWxlZnQnfSwgcm93VmFsdWUrKykpIH1cbiAgICAgICAgZWxzZSB7IGdyaWRCb3guYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdvcGVuLWNlbGwgc2VsZWN0YWJsZScsICdkYXRhLWluZGV4JzogY2VsbEluZGV4KysgfSkpIH07XG4gICAgfVxuXG4gICAgLy8gRmluZCBhIGJldHRlciBob21lIGZvciB0aGlzXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zaWRlLXNpemUnLCBzaWRlU2l6ZSArIDEpO1xuICAgIFxuICAgIHJldHVybiBncmlkQm94O1xufVxuXG4iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9TaGlwLmpzJztcblxuZXhwb3J0IGNsYXNzIEdhbWVib2FyZCB7XG4gICAgY29uc3RydWN0b3Ioc2l6ZSkge1xuICAgICAgICB0aGlzLlNJWkUgPSBzaXplO1xuICAgICAgICB0aGlzLmFsbFNoaXBzID0gW107XG4gICAgICAgIHRoaXMuYm9hcmQgPSBbXTtcbiAgICAgICAgdGhpcy5hbGxIaXQgPSBbXTtcbiAgICAgICAgdGhpcy5hbGxNaXNzID0gW107XG4gICAgICAgIHRoaXMuYWxsUGxhY2VkID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZSAqIHNpemU7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5ib2FyZC5wdXNoKHtzaGlwOiBudWxsLCBoaXQ6IGZhbHNlfSlcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBnZXRIaXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFsbEhpdDtcbiAgICB9XG5cbiAgICBnZXRNaXNzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hbGxNaXNzO1xuICAgIH1cblxuICAgIGdldFBsYWNlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxsUGxhY2VkO1xuICAgIH1cblxuICAgIGdldFNpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLlNJWkUgKiB0aGlzLlNJWkU7XG4gICAgfVxuXG4gICAgaXNIaXQoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRbaW5kZXhdLmhpdDtcbiAgICB9XG5cbiAgICAvLyBwbGFjZSBuZXcgc2hpcCBvbiBnYW1lYm9hcmQgcmV0dXJucyBzaGlwIG9yIGZhbHNlIGlmIG5vdCBsZWdhbCBwbGFjZW1lbnRcbiAgICBhZGRTaGlwKHNoaXBTaXplLCBoZWFkLCB2ZXJ0aWNhbCA9IGZhbHNlKSB7XG4gICAgICAgIC8vIGRpc2FsbG93IHBsYWNlbWVudCBiZXlvbmQgYm9hcmQncyBib3VuZGFyaWVzXG4gICAgICAgIGlmICghdmVydGljYWwgJiYgKChoZWFkICUgdGhpcy5TSVpFKSArIHNoaXBTaXplID4gdGhpcy5TSVpFKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAodmVydGljYWwgJiYgKE1hdGguZmxvb3IoaGVhZCAvIHRoaXMuU0laRSkpICsgc2hpcFNpemUgPiB0aGlzLlNJWkUpIHJldHVybiBmYWxzZTtcblxuICAgICAgICBjb25zdCB0b1BsYWNlID0gdGhpcy5nZXRJbmRlY2VzKHNoaXBTaXplLCBoZWFkLCB2ZXJ0aWNhbCk7XG4gICAgICAgIFxuICAgICAgICAvLyBpbnNwZWN0IGZvciBhbnkgb3ZlcmxhcHBpbmcgY29uZmxpY3RcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b1BsYWNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZFt0b1BsYWNlW2ldXS5zaGlwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgbmV3U2hpcCA9IG5ldyBTaGlwKHNoaXBTaXplKTtcbiAgICAgICAgdG9QbGFjZS5mb3JFYWNoKGluZGV4ID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWxsUGxhY2VkLnB1c2goaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5ib2FyZFtpbmRleF0uc2hpcCA9IG5ld1NoaXBcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWxsU2hpcHMucHVzaCh0b1BsYWNlKTtcbiAgICAgICAgcmV0dXJuIG5ld1NoaXA7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJucyBhbiBhcnJheSBvZiBhIHNoaXAncyBzZXF1ZW50aWFsIHBvc2l0aW9uaW5nXG4gICAgZ2V0SW5kZWNlcyhzaXplLCBoZWFkLCB2ZXJ0aWNhbCkge1xuICAgICAgICBjb25zdCBpbmRlY2VzID0gW107XG4gICAgICAgIGlmICh2ZXJ0aWNhbCkge1xuICAgICAgICAgICAgd2hpbGUgKHNpemUtLSA+IDApIHtcbiAgICAgICAgICAgICAgICBpbmRlY2VzLnB1c2goaGVhZCk7XG4gICAgICAgICAgICAgICAgaGVhZCArPSB0aGlzLlNJWkU7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2hpbGUgKHNpemUtLSA+IDApIHtcbiAgICAgICAgICAgICAgICBpbmRlY2VzLnB1c2goaGVhZCsrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5kZWNlcztcbiAgICB9XG5cbiAgICAvLyBzZXRzIGF0dGFjayBhY3Rpb25zLCBtdXN0IGJlIGludGVnZXIgYW5kIHdpdGhpbiB0aGUgZ2FtZWJvYXJkLCBpZ25vcmVzIHNwYWNlcyBhbHJlYWR5IGhpdFxuICAgIHJlY2VpdmVBdHRhY2soaW5kZXgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpbmRleCAhPSAnbnVtYmVyJykgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCd2YWx1ZSBtdXN0IGJlIE51bWJlcicpIH07XG4gICAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihpbmRleCkpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignT25seSBpbnRlZ2VyIHZhbHVlcycpIH07XG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5ib2FyZC5sZW5ndGgpIHsgdGhyb3cgbmV3IFJhbmdlRXJyb3IoYHZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAke3RoaXMuYm9hcmQubGVuZ3RoIC0gMX1gKTsgfVxuICAgICAgICBpZiAodGhpcy5ib2FyZFtpbmRleF0uaGl0KSB7IHJldHVybjsgfVxuXG4gICAgICAgIHRoaXMuYm9hcmRbaW5kZXhdLmhpdCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW2luZGV4XS5zaGlwKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW2luZGV4XS5zaGlwLmhpdCgpO1xuICAgICAgICAgICAgdGhpcy5hbGxIaXQucHVzaChpbmRleCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFtpbmRleF0uc2hpcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWxsTWlzcy5wdXNoKGluZGV4KTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gY29uZmlybXMgdGhhdCB0aGUgc2hpcCBhdCBlYWNoIGZyb250IHBvc2l0aW9uIGluIGFsbFNoaXBzIGlzIHN1bmtcbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIGxldCBzdW5rID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbGxTaGlwcy5mb3JFYWNoKHNoaXAgPT4geyBcbiAgICAgICAgICAgIGlmICghdGhpcy5ib2FyZFtzaGlwWzBdXS5zaGlwLmlzU3VuaygpKSB7IHN1bmsgPSBmYWxzZTsgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHN1bms7XG4gICAgfVxufSIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL0dhbWVib2FyZFwiO1xuaW1wb3J0IHsgUGxheUJvYXJkIH0gZnJvbSBcIi4vRE9NQ29udHJvbFwiO1xuLy8gaG9sZHMgcGxheWVyJ3MgZ2FtZWJvYXJkLCBjYW4gZGV0ZXJtaW5lIG5leHQgbW92ZSBpZiBjcHUgXG4vLyBwYXNzIGFuIGFycmF5IG9mIGFycmF5cyBpbiBbc2hpcCBzaXplLCBzaGlwIGluZGV4LCBpcyB2ZXJ0aWNhbCh0cnVlL2ZhbHNlKV0gZm9ybWF0XG4vLyB0byBwb3B1bGF0ZSB0aGUgZ2FtZWJvYXJkXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB0b0FkZCA9IFtdKSB7XG4gICAgICAgIHRoaXMuU0laRSA9IDEwO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEdhbWVib2FyZCh0aGlzLlNJWkUpO1xuICAgICAgICB0aGlzLm5leHRNb3ZlID0gW107XG4gICAgICAgIHRvQWRkLmZvckVhY2goc2hpcCA9PiB0aGlzLmJvYXJkLmFkZFNoaXAoc2hpcFswXSwgc2hpcFsxXSwgc2hpcFsyXSkgKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5ID0gbmV3IFBsYXlCb2FyZCh0aGlzLlNJWkUsIHRoaXMuZ2V0QWxsU2hpcEluZGV4KCkpO1xuICAgIH07XG5cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIGdldERpc3BsYXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpc3BsYXk7XG4gICAgfVxuXG4gICAgZ2V0QWxsU2hpcEluZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZC5nZXRQbGFjZWQoKTtcbiAgICB9XG5cbiAgICBnZXRNaXNzSW5kZXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkLmdldE1pc3MoKTtcbiAgICB9XG5cbiAgICBnZXRIaXRJbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQuZ2V0SGl0KCk7XG4gICAgfVxuXG4gICAgLy8gY29uZmlybXMgaWYgcGxheWVyIGlzIGRlZmVhdGVkXG4gICAgaXNEZWZlYXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQuaXNTdW5rKCk7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJucyBlaXRoZXIgdGhlIGhpdCBzaGlwIG9yIG51bGxcbiAgICB0YWtlSGl0KGluZGV4KSB7XG4gICAgICAgIHJldHVybiAodGhpcy5ib2FyZC5yZWNlaXZlQXR0YWNrKGluZGV4KSkgPyAnaGl0JyA6ICdtaXNzJztcbiAgICB9XG5cbiAgICAvLyBjb25maXJtcyBpZiBhIG1vdmUgaXMgdmFsaWRcbiAgICBpc1ZhbGlkTW92ZShpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMuYm9hcmQuZ2V0U2l6ZSgpKSB7IHJldHVybiBmYWxzZSB9O1xuICAgICAgICByZXR1cm4gIXRoaXMuYm9hcmQuaXNIaXQoaW5kZXgpO1xuICAgIH1cblxuICAgIC8vIHRha2VzIGEgY3B1IHR1cm4gYWdhaW5zdCBwbGF5ZXIsIHJldHVybnMgbW92ZSB0YWtlblxuICAgIGNwdVR1cm4oKSB7XG4gICAgICAgIGxldCBtb3ZlO1xuICAgICAgICBpZiAodGhpcy5uZXh0TW92ZS5sZW5ndGggPT09IDApIHsgbW92ZSA9IHRoaXMucmFuZG9tTW92ZSgpOyB9XG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHRoaXMudGFrZUhpdChtb3ZlKTtcbiAgICAgICAgcmV0dXJuIG1vdmU7XG4gICAgfVxuXG4gICAgLy8gZWxlY3QgYSB2YWxpZCBmcmVlIHNwYWNlIHRvIGF0dGFjayBmcm9tIHRoZSBnYW1lYm9hcmRcbiAgICByYW5kb21Nb3ZlKCkge1xuICAgICAgICBjb25zdCBtb3ZlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5wb3codGhpcy5TSVpFLCAyKSk7XG4gICAgICAgIHJldHVybiAodGhpcy5pc1ZhbGlkTW92ZShtb3ZlKSkgPyBtb3ZlIDogdGhpcy5yYW5kb21Nb3ZlKCk7XG4gICAgfVxufTtcbiIsIi8vIGJhc2ljIHVuaXQgdXNlZCBpbiBnYW1lLCBtdXN0IHBhc3MgaW50ZWdlciB2YWx1ZSB0byBkZXRlcm1pbmUgc2l6ZVxuXG5leHBvcnQgY2xhc3MgU2hpcCB7XG4gICAgLy8gdGVzdHMgdG8gZW5zdXJlIHZhbHVlIGlzIGFuIGludGVnZXIgbnVtYmVyIG92ZXIgMFxuICAgIGNvbnN0cnVjdG9yKHNpemUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzaXplICE9ICdudW1iZXInKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbHVlIG11c3QgYmUgTnVtYmVyJykgfTtcbiAgICAgICAgaWYgKHNpemUgPD0gMCkgeyB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVmFsdWUgbXVzdCBiZSBncmVhdGVyIHRoYW4gMCcpIH07XG4gICAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihzaXplKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdPbmx5IGludGVnZXIgdmFsdWVzJykgfTtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy5oaXRzID0gMDtcbiAgICB9XG5cbiAgICBnZXRIaXRzKCkgeyByZXR1cm4gdGhpcy5oaXRzOyB9XG5cbiAgICAvLyBpbmNyZWFzZXMgc2hpcHMgaGl0IHZhbHVlXG4gICAgaGl0KCkge1xuICAgICAgICB0aGlzLmhpdHMgKz0gMTtcbiAgICB9XG5cbiAgICAvLyBkZXRlcm1pbmVzIHRoZSBzdGF0ZSBvZiB0aGUgc2hpcFxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGl0cyA+PSB0aGlzLnNpemU7XG4gICAgfVxufSIsImltcG9ydCB7IGluaXRpYWxpemVET00gfSBmcm9tIFwiLi9ET01Db250cm9sLmpzXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL1BsYXllci5qcyc7XG5cbmV4cG9ydCBjbGFzcyBHYW1lQ29udHJvbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuU0laRSA9IDEwO1xuICAgICAgICB0aGlzLnBsYXllcjE7XG4gICAgICAgIHRoaXMucGxheWVyMjtcbiAgICAgICAgdGhpcy5tdWx0aXBsYXllciA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNlbGVjdE1vdmUgPSBudWxsO1xuICAgICAgICB0aGlzLnR1cm5OdW1iZXIgPSAwO1xuICAgIH1cblxuICAgIC8vIGJlZ2luIHRoZSBnYW1lbG9vcFxuICAgIHN0YXJ0R2FtZSgpIHtcbiAgICAgICAgaW5pdGlhbGl6ZURPTSgpO1xuXG4gICAgICAgIC8vIHRoaXMuZHVtbXlTZXRQbGF5ZXIoKTtcbiAgICAgICAgLy8gY29uc3QgYm9hcmQgPSB0aGlzLmdldFBsYXllcigpLmdldERpc3BsYXkoKTtcbiAgICAgICAgLy8gaWYgKHRoaXMubXVsdGlwbGF5ZXIpIHtcbiAgICAgICAgLy8gICAgIGJvYXJkLmNyZWF0ZVR1cm5Db3Zlcih0aGlzLmdldFBsYXllcigpXG4gICAgICAgIC8vICAgICAgICAgLmdldE5hbWUoKSlcbiAgICAgICAgLy8gICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gYm9hcmQuY2xlYXJUdXJuQ292ZXIoKSk7XG4gICAgICAgIC8vIH07XG4gICAgICAgIC8vIGJvYXJkLmRpc3BsYXlCb2FyZCgpO1xuICAgIH1cblxuICAgIC8vIHRlc3RpbmcgdmFsdWVzXG4gICAgZHVtbXlTZXRQbGF5ZXIoKSB7XG4gICAgICAgIGNvbnN0IGR1bW15MSA9IFtcbiAgICAgICAgICAgIFs1LCAyNSwgdHJ1ZV0sXG4gICAgICAgICAgICBbNCwgODMsIGZhbHNlXSxcbiAgICAgICAgICAgIFszLCAwLCBmYWxzZV0sXG4gICAgICAgICAgICBbMywgNTEsIHRydWVdLFxuICAgICAgICAgICAgWzIsIDQ4LCBmYWxzZV1cbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgZHVtbXkyID0gW1xuICAgICAgICAgICAgWzUsIDk1LCBmYWxzZV0sXG4gICAgICAgICAgICBbNCwgMTYsIGZhbHNlXSxcbiAgICAgICAgICAgIFszLCA1MywgZmFsc2VdLFxuICAgICAgICAgICAgWzMsIDY4LCB0cnVlXSxcbiAgICAgICAgICAgIFsyLCAxMiwgdHJ1ZV1cbiAgICAgICAgXVxuICAgICAgICB0aGlzLnBsYXllcjEgPSBuZXcgUGxheWVyKCdwbGF5ZXIxJywgZHVtbXkxKTtcbiAgICAgICAgdGhpcy5iaW5kQm9hcmQodGhpcy5wbGF5ZXIxKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIyID0gbmV3IFBsYXllcigncGxheWVyMicsIGR1bW15Mik7XG4gICAgICAgIHRoaXMuYmluZEJvYXJkKHRoaXMucGxheWVyMilcbiAgICB9XG5cbiAgICAvLyBEZXRlcm1pbmUgdGhlIGFjdGl2ZSBwbGF5ZXJcbiAgICBnZXRQbGF5ZXIoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy50dXJuTnVtYmVyICUgMiA9PT0gMCkgPyB0aGlzLnBsYXllcjEgOiB0aGlzLnBsYXllcjI7IFxuICAgIH1cblxuICAgIC8vIERldGVybWluZSB0aGUgY3VycmVudCBub24gcGxheWVyXG4gICAgZ2V0QWR2ZXJzYXJ5KCkge1xuICAgICAgICByZXR1cm4gKHRoaXMudHVybk51bWJlciAlIDIgPT09IDApID8gdGhpcy5wbGF5ZXIyIDogdGhpcy5wbGF5ZXIxO1xuICAgIH1cblxuICAgIC8vIGJpbmRpbmdzIGZvciBwbGF5IGFyZWFcbiAgICBiaW5kQm9hcmQocGxheWVyKSB7XG4gICAgICAgIGNvbnN0IGRpc3BsYXkgPSBwbGF5ZXIuZ2V0RGlzcGxheSgpO1xuICAgICAgICBjb25zdCBidXR0b24gPSBwbGF5ZXIuZ2V0RGlzcGxheSgpLmdldEJ1dHRvbigpO1xuICAgICAgICBcbiAgICAgICAgLy8gYmluZCBjbGlja2FibGUgY2VsbHNcbiAgICAgICAgZGlzcGxheS5nZXRQbGF5KCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4tY2VsbCcpKSB7IHJldHVybiB9O1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0TW92ZSkgeyBkaXNwbGF5LnRvZ2dsZVNlbGVjdGVkKHRoaXMuc2VsZWN0TW92ZSk7IH1cbiAgICAgICAgICAgIGRpc3BsYXkudG9nZ2xlU2VsZWN0ZWQoZS50YXJnZXQuZGF0YXNldC5pbmRleCk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdE1vdmUgPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC5pbmRleCk7XG4gICAgICAgICAgICBkaXNwbGF5LnNldEJ1dHRvbihlLnRhcmdldC5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gYmluZCBhdHRhY2sgYnV0dG9uXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5LnNldEJ1dHRvbigpO1xuICAgICAgICAgICAgdGhpcy50YWtlVHVybigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBGdW5jdGlvbiBmb3IgYWN0aW9uIGJ1dHRvbiwgdGFrZXMgYSBwbGF5ZXIgc2VsZWN0ZWQgdHVyblxuICAgIHRha2VUdXJuKCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmdldEFkdmVyc2FyeSgpLnRha2VIaXQodGhpcy5zZWxlY3RNb3ZlKTtcbiAgICAgICAgdGhpcy5nZXRQbGF5ZXIoKS5nZXREaXNwbGF5KCkudXBkYXRlUGxheSh0aGlzLnNlbGVjdE1vdmUsIHJlc3VsdCk7XG4gICAgICAgIGlmICh0aGlzLmdldEFkdmVyc2FyeSgpLmlzRGVmZWF0ZWQoKSkgeyBcbiAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVyKClcbiAgICAgICAgICAgICAgICAuZ2V0RGlzcGxheSgpXG4gICAgICAgICAgICAgICAgLmNyZWF0ZUdhbWVPdmVyKCdZT1UgV0lOIScpXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXIoKS5nZXREaXNwbGF5KCkucmVtb3ZlQm9hcmQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEdhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcbiAgICAgICAgICAgIH0pOyBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLm11bHRpcGxheWVyKSB7IHRoaXMuc3dpdGNoVHVybihyZXN1bHQpOyB9XG4gICAgICAgIGVsc2UgeyB0aGlzLmNwdVR1cm4oKTsgfVxuICAgIH1cblxuICAgIC8vIFJlbmRlcnMgbW92ZSB0YWtlbiBvbiBwbGF5ZXIgYW5kIHJlc2V0IHNlbGVjdE1vdmVcbiAgICBzdGFydFR1cm4ocmVzdWx0KSB7XG4gICAgICAgIHRoaXMuZ2V0UGxheWVyKCkuZ2V0RGlzcGxheSgpLnVwZGF0ZVN0YXR1cyh0aGlzLnNlbGVjdE1vdmUsIHJlc3VsdCk7XG4gICAgICAgIHRoaXMuc2VsZWN0TW92ZSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gUHJlcGFyZXMgdGhlIHBsYXkgYXJlYSB0byBleGNoYW5nZSBwbGF5ZXJzXG4gICAgc3dpdGNoVHVybihyZXN1bHQpIHtcbiAgICAgICAgY29uc3QgYm9hcmQgPSB0aGlzLmdldEFkdmVyc2FyeSgpLmdldERpc3BsYXkoKTtcbiAgICAgICAgYm9hcmQuY3JlYXRlVHVybkNvdmVyKHRoaXMuZ2V0QWR2ZXJzYXJ5KClcbiAgICAgICAgLmdldE5hbWUoKSlcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGJvYXJkLmNsZWFyVHVybkNvdmVyKCk7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0VHVybihyZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgYm9hcmQuZGlzcGxheUJvYXJkKCk7XG4gICAgICAgIHRoaXMuZ2V0QWR2ZXJzYXJ5KCkuZ2V0RGlzcGxheSgpLnJlbW92ZUJvYXJkKCk7XG4gICAgICAgIHRoaXMudHVybk51bWJlcisrO1xuICAgIH1cblxuICAgIC8vIFNpbXVsYXRlIGFuIGFkdmVyc2FyeSdzIHR1cm5cbiAgICBjcHVUdXJuKCkge1xuICAgICAgICB0aGlzLnNlbGVjdE1vdmUgPSB0aGlzLmdldFBsYXllcigpLmNwdVR1cm4oKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5nZXRQbGF5ZXIoKS50YWtlSGl0KHRoaXMuc2VsZWN0TW92ZSk7XG4gICAgICAgIGlmICh0aGlzLmdldFBsYXllcigpLmlzRGVmZWF0ZWQoKSkgeyBcbiAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVyKCkuZ2V0RGlzcGxheSgpLmNyZWF0ZUdhbWVPdmVyKCdZT1UgTE9TRSEnKTsgXG4gICAgICAgIH0gZWxzZSB7IHRoaXMuc3RhcnRUdXJuKHJlc3VsdCk7IH1cbiAgICB9XG5cbiAgICAvLyBjbGVhciBhbGwgdmFyaWFibGUgdG8gZGVmYXVsdFxuICAgIHJlc2V0R2FtZSgpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyMSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnBsYXllcjIgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllciA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RNb3ZlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMudHVybk51bWJlciA9IDA7XG4gICAgfVxufVxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7R2FtZUNvbnRyb2x9IGZyb20gJy4vZ2FtZUNvbnRyb2wuanMnO1xuXG5jb25zdCBnYW1lID0gbmV3IEdhbWVDb250cm9sKCk7XG5nYW1lLnN0YXJ0R2FtZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9