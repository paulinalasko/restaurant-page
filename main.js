/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --font-one: 'Julee', cursive;\\n    --font-two: 'Hind', sans-serif;\\n\\n    --text-color: rgb(166, 4, 4);\\n    --content-color: rgb(170, 65, 65);\\n    --nav-bar-color: rgb(83, 2, 2);\\n    --header-bar-gradient: rgb(255, 255, 255);\\n}\\n\\nhtml {\\n    padding: 0;\\n    margin: 0;\\n    box-sizing: border-box;\\n    scroll-behavior: smooth;\\n}\\n\\n.sticky {\\n    position: fixed;\\n    top: 0;\\n    width: 100%;\\n}\\n\\n.stickyNav {\\n    position: fixed;\\n    top: 10px;\\n    width: 100%;\\n}\\n\\n.container {\\n    display: flex;\\n    flex-direction: column;\\n    height: 100%;\\n}\\n\\n.header {\\n    display: flex;\\n    justify-content: space-evenly;\\n    align-items: center;\\n    padding: 10px;\\n    height: 160px;\\n    margin: -10px;\\n    background: var(--header-bar-gradient);\\n}\\n\\n.logoText {\\n    color: var(--text-color);\\n    font-size: 50px;\\n    font-family: var(--font-one);\\n}\\n\\n.logo {\\n    border-radius: 100px;\\n    width: 150px;\\n    height: 160px;\\n}\\n\\n.navBar {\\n    display: flex;\\n    justify-content: space-evenly;\\n    align-items: center;\\n    height: 75px;\\n    margin-top: 160px;\\n    margin-left: -10px;\\n    margin-right: -10px;\\n    background-color: var(--nav-bar-color)\\n}\\n\\n.navText {\\n    font-family: var(--font-one);\\n    font-size: 20px;\\n    background: none;\\n    border: none;\\n    color: rgba(255, 254, 254, 0.8);\\n}\\n\\n#main, .main-content {\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: center;\\n    margin-top: 130px;\\n    width: 100vw;\\n}\\n\\n.column {\\n    display: flex;\\n    flex-direction: column;\\n    flex: 1;\\n    flex-wrap: wrap;\\n}\\n\\n.background-image-home {\\n    height: 90vh;\\n}\\n\\n.background-image-about {\\n    height: 80vh;\\n}\\n\\n.info-box {\\n    display: flex;\\n    align-items: center;\\n    background-color: rgb(255, 255, 255);\\n}\\n\\n.text-box {\\n    margin-top: 20px;\\n    text-align: start;\\n    background-color: black;\\n    padding: 20px;\\n    width: 350px;\\n    height: 70px;\\n    border-radius: 20px;\\n}\\n\\n.text-box-about {\\n    margin-top: 20px;\\n    text-align: start;\\n    background-color: black;\\n    padding: 20px;\\n    width: 350px;\\n    border-radius: 20px;\\n}\\n\\n.info-text {\\n    color: white;\\n    font-family: var(--font-two);\\n    font-size: 18px;\\n}\\n\\n.info-box-bottom {\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: space-around;\\n    gap: 20px;\\n}\\n\\n.hours-box, .updates-box {\\n    margin-top: 30px;\\n    border-radius: 5px 20px;\\n    width: 200px;\\n    font-weight: 200;\\n    padding: 10px;\\n    text-align: center;\\n    line-height: 35px;\\n}\\n\\n.hours-box {\\n    color: black;\\n    font-family: var(--font-two);\\n    height: 350px;\\n    background-color: var(--content-color);\\n}\\n\\n\\n.updates-box {\\n    color: white;\\n    height: 320px;\\n    background-color: black;\\n}\\n\\n\\n.location-box {\\n    margin-top: 130px;\\n    border-radius: 5px 20px;\\n    background-color: var(--content-color);\\n    padding: 10px;\\n    width: 50vw;\\n    height: fit-content;\\n    color: black;\\n    font-weight: 200;\\n    font-size: 20px;\\n    text-align: center;\\n    line-height: 35px;\\n}\\n\\n.menu-content {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    margin-top: 80px;\\n    width: 100vw;\\n}\\n\\n.header-menu {\\n    display: flex;\\n    justify-content: center;\\n    color: black;\\n    font-size: 50px;\\n    font-family: var(--font-one);\\n}\\n\\n.menu-list {\\n    display: grid;\\n    grid-template-columns: 1fr 1fr;\\n    gap: 10px;\\n    padding: 5px;\\n    justify-content: center;\\n}\\n\\n.left-column, .right-column {\\n    padding: 10px;\\n}\\n\\n.left-column {\\n    grid-column: 1/2;\\n    margin-left: 20px;\\n}\\n\\n.right-column {\\n    grid-column: 2/3;\\n    margin-right: 20px;\\n}\\n\\n.menu-design {\\n    font-family: var(--font-two);\\n    font-size: 20px;\\n    color: black;\\n}\\n\\n/* PSEUDO-CLASSES */\\n\\n.navText:hover {\\n    transform: scale(1.1);\\n}\\n\\n.header:hover {\\n    cursor: pointer;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/images/hand-drawn-ramen.jpg":
/*!*****************************************!*\
  !*** ./src/images/hand-drawn-ramen.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"e965d2bf860f762ebee1361098ea05fc.jpg\");\n\n//# sourceURL=webpack://webpack-demo/./src/images/hand-drawn-ramen.jpg?");

/***/ }),

/***/ "./src/images/pexels-katerina-holmes.jpg":
/*!***********************************************!*\
  !*** ./src/images/pexels-katerina-holmes.jpg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"41010db261b43221138454c2248b2594.jpg\");\n\n//# sourceURL=webpack://webpack-demo/./src/images/pexels-katerina-holmes.jpg?");

/***/ }),

/***/ "./src/images/pexels-valeria-boltneva.jpg":
/*!************************************************!*\
  !*** ./src/images/pexels-valeria-boltneva.jpg ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"9a338eb31ff405e0c47d3971362fbd65.jpg\");\n\n//# sourceURL=webpack://webpack-demo/./src/images/pexels-valeria-boltneva.jpg?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_pexels_valeria_boltneva_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/pexels-valeria-boltneva.jpg */ \"./src/images/pexels-valeria-boltneva.jpg\");\n\n\nconst createAbout = function () {\n  // Main Content\n  const aboutMain = document.createElement('div')\n  aboutMain.classList.add('main-content')\n\n  const aboutImageContainer = document.createElement('div')\n  aboutImageContainer.classList.add('column')\n\n  const aboutBackground = new Image()\n  aboutBackground.src = _images_pexels_valeria_boltneva_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  aboutBackground.classList.add('background-image-about')\n  aboutBackground.setAttribute('alt', 'Sushi')\n\n  const infoContainer = document.createElement('div')\n  infoContainer.classList.add('info-box')\n  infoContainer.classList.add('column')\n  \n  const info = document.createElement('div')\n  info.classList.add('text-box-about')\n\n  const infoOne = document.createElement('p')\n  infoOne.classList.add('info-text')\n  const infoTextOne = document.createTextNode('Growing up as an immigrant of Japanese/Korean descent. I was exposed to delicious and nutritious food that I would like to share with the world. Ea ducimus quod rem quibusdam voluptates non blanditiis distinctio ad architecto distinctio ab nesciunt exercitationem sit tempore sequi. A consequatur veniam eos tempore illo id saepe temporibus. Ea ducimus quod rem quibusdam voluptates non blanditiis distinctio ad architecto distinctio ab nesciunt exercitationem sit tempore sequi. A consequatur veniam eos tempore illo id saepe temporibus. ')\n  infoOne.appendChild(infoTextOne)\n  info.appendChild(infoOne)\n  infoContainer.appendChild(info)\n  aboutMain.appendChild(infoContainer)\n\n  aboutImageContainer.appendChild(aboutBackground)\n  aboutMain.appendChild(aboutImageContainer)\n    \n  return aboutMain\n}\n\nfunction loadAbout() {\n  const main = document.getElementById('main')\n  main.innerHTML = '';\n  main.appendChild(createAbout())\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);\n\n//# sourceURL=webpack://webpack-demo/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_pexels_katerina_holmes_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/pexels-katerina-holmes.jpg */ \"./src/images/pexels-katerina-holmes.jpg\");\n\n\nconst createHome = function () {\n  const home = document.createElement('div')\n  home.classList.add('main-content')\n\n  const imageContainer = document.createElement('div')\n  imageContainer.classList.add('column')\n\n  const background = new Image()\n  background.src = _images_pexels_katerina_holmes_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  background.classList.add('background-image-home')\n  background.setAttribute('alt', 'Yummy bowl of ramen')\n  imageContainer.appendChild(background)\n  home.appendChild(imageContainer)\n\n  const infoContainer = document.createElement('div')\n  infoContainer.classList.add('info-box')\n  infoContainer.classList.add('column')\n  \n  const info = document.createElement('div')\n  info.classList.add('text-box')\n\n  const infoOne = document.createElement('p')\n  infoOne.classList.add('info-text')\n  const infoTextOne = document.createTextNode('Japanese, Korean fusion comfort food made with our finest ingredients. ')\n  infoOne.appendChild(infoTextOne)\n  info.appendChild(infoOne)\n  infoContainer.appendChild(info)\n  home.appendChild(infoContainer)\n\n  const infoChildContainer = document.createElement('div')\n  infoChildContainer.classList.add('info-box-bottom')\n\n  const hoursBox = document.createElement('div')\n  hoursBox.classList.add('hours-box')\n  hoursBox.classList.add('info-text')\n\n  const updatesBox = document.createElement('div')\n  updatesBox.classList.add('updates-box')\n  updatesBox.classList.add('info-text')\n\n  infoContainer.appendChild(infoChildContainer)\n  infoChildContainer.appendChild(hoursBox)\n  infoChildContainer.appendChild(updatesBox)\n  home.appendChild(infoContainer)\n\n  hoursBox.appendChild(document.createTextNode('Hours'))\n  hoursBox.appendChild(document.createElement('br'))\n  hoursBox.appendChild(document.createTextNode('Monday - Friday'))\n  hoursBox.appendChild(document.createElement('br'))\n  hoursBox.appendChild(document.createTextNode('11:30am - 3:00pm'))\n  hoursBox.appendChild(document.createElement('br'))\n  hoursBox.appendChild(document.createTextNode('4:30pm - 9:30pm'))\n  hoursBox.appendChild(document.createElement('br'))\n  hoursBox.appendChild(document.createTextNode('Saturday'))\n  hoursBox.appendChild(document.createElement('br'))\n  hoursBox.appendChild(document.createTextNode('11:30am - 3:00pm'))\n  hoursBox.appendChild(document.createElement('br'))\n  hoursBox.appendChild(document.createTextNode('4:30pm - 10:00pm'))\n  hoursBox.appendChild(document.createElement('br'))\n  hoursBox.appendChild(document.createTextNode('Sunday'))\n  hoursBox.appendChild(document.createElement('br'))\n  hoursBox.appendChild(document.createTextNode('Closed for Lunch'))\n  hoursBox.appendChild(document.createElement('br'))\n  hoursBox.appendChild(document.createTextNode('4:30pm - 9:30pm'))\n\n  updatesBox.appendChild(document.createTextNode('DUE TO THE SUDDEN PRICE INCREASES IN COMMODITIES, CERTAIN PRICES HAVE BEEN INCREASED AND MAY NOT MATCH CURRENT MENU PRICES-PLEASE CHECK WITH YOUR SERVER.'))\n\n  return home\n}\n\nfunction loadHome() {\n  const main = document.getElementById('main');\n  main.innerHTML = '';\n  main.appendChild(createHome());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://webpack-demo/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n/* eslint-disable semi */\n\n\n(0,_website__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/locations.js":
/*!**************************!*\
  !*** ./src/locations.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction createLocation() {\n    const location = document.createElement('div')\n    \n    const locationContainer = document.createElement('div')\n    locationContainer.classList.add('location-box')\n\n    const locationText = document.createElement('div')\n    locationContainer.classList.add('location-text')\n    locationContainer.appendChild(locationText)\n    location.appendChild(locationContainer)\n\n    locationText.appendChild(document.createTextNode('Yardley'))\n    locationText.appendChild(document.createElement('br'))\n    locationText.appendChild(document.createTextNode('888 Main Street Road, Yardley PA 19078'))\n    locationText.appendChild(document.createElement('br'))\n    locationText.appendChild(document.createElement('br'))\n    locationText.appendChild(document.createTextNode('Newtown'))\n    locationText.appendChild(document.createElement('br'))\n    locationText.appendChild(document.createTextNode('1000 Bear Road, Newtown PA 19079'))\n    locationText.appendChild(document.createElement('br'))\n    locationText.appendChild(document.createElement('br'))\n    locationText.appendChild(document.createTextNode('Princeton'))\n    locationText.appendChild(document.createElement('br'))\n    locationText.appendChild(document.createTextNode('600 Jersey Blvd, Princeton NJ 90239'))\n\n\n    return location\n}\n\nfunction loadLocation() {\n  const main = document.getElementById('main');\n  main.innerHTML = '';\n  main.appendChild(createLocation());\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadLocation);\n\n//# sourceURL=webpack://webpack-demo/./src/locations.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu() {\n    const menu = document.createElement('div')\n    menu.classList.add('menu-content')\n\n    const header = document.createElement('p')\n    const headerText = document.createTextNode('Dinner')\n    header.appendChild(headerText)\n    header.classList.add('header-menu')\n    menu.appendChild(header)\n\n    const menuList = document.createElement('div')\n    menuList.classList.add('menu-list')\n    \n    const leftColumn = document.createElement('div')\n    leftColumn.classList.add('menu-design')\n    leftColumn.classList.add('left-column')\n\n    leftColumn.appendChild(document.createTextNode('Yakisoba Noodles'))\n    leftColumn.appendChild(document.createElement('br'))\n    leftColumn.appendChild(document.createTextNode('Stir-fried noodles and vegetables in a mild brown garlic sauce.'))\n    leftColumn.appendChild(document.createElement('br'))\n    leftColumn.appendChild(document.createElement('br'))\n    leftColumn.appendChild(document.createTextNode('Gochujiang Bowl'))\n    leftColumn.appendChild(document.createElement('br'))\n    leftColumn.appendChild(document.createTextNode('Stir fried vegetables over a fresh bed of rice. Topped with pickled radish, sesame seeds, shiitake mushrooms and a fried egg.'))\n    leftColumn.appendChild(document.createElement('br'))\n    leftColumn.appendChild(document.createElement('br'))\n    leftColumn.appendChild(document.createTextNode('Udon'))\n    leftColumn.appendChild(document.createElement('br'))\n    leftColumn.appendChild(document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt.'))\n    leftColumn.appendChild(document.createElement('br'))\n    leftColumn.appendChild(document.createElement('br'))\n    \n    menuList.appendChild(leftColumn)\n\n    const rightColumn = document.createElement('div')\n    rightColumn.classList.add('menu-design')\n    rightColumn.classList.add('right-column')\n\n    rightColumn.appendChild(document.createTextNode('Yakisoba Noodles'))\n    rightColumn.appendChild(document.createElement('br'))\n    rightColumn.appendChild(document.createTextNode('Stir-fried noodles and vegetables in a mild brown garlic sauce.'))\n    rightColumn.appendChild(document.createElement('br'))\n    rightColumn.appendChild(document.createElement('br'))\n    rightColumn.appendChild(document.createTextNode('Gochujiang Bowl'))\n    rightColumn.appendChild(document.createElement('br'))\n    rightColumn.appendChild(document.createTextNode('Stir fried vegetables over a fresh bed of rice. Topped with pickled radish, sesame seeds, shiitake mushrooms and a fried egg.'))\n    rightColumn.appendChild(document.createElement('br'))\n    rightColumn.appendChild(document.createElement('br'))\n    rightColumn.appendChild(document.createTextNode('Udon'))\n    rightColumn.appendChild(document.createElement('br'))\n    rightColumn.appendChild(document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt.'))\n    rightColumn.appendChild(document.createElement('br'))\n    rightColumn.appendChild(document.createElement('br'))\n    \n    menuList.appendChild(rightColumn)\n\n    menu.appendChild(menuList)\n\n    return menu\n}\n\nfunction loadMenu() {\n  const main = document.getElementById('main');\n  main.innerHTML = '';\n  main.appendChild(createMenu());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://webpack-demo/./src/menu.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _images_hand_drawn_ramen_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/hand-drawn-ramen.jpg */ \"./src/images/hand-drawn-ramen.jpg\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _locations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locations */ \"./src/locations.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\n\n\n\n // Header\nconst createHeader = function () {\n  const header = document.createElement('div')\n  header.classList.add('header')\n  header.classList.add('sticky')\n\n  const logoLeft = document.createElement('div')\n  logoLeft.classList.add('logoLeftDiv')\n  const logoLeftText = document.createElement('p')\n  const node = document.createTextNode('RAMEN')\n  logoLeftText.appendChild(node)\n  logoLeftText.classList.add('logoText')\n\n  const logoRight = document.createElement('div')\n  logoRight.classList.add('logoRightDiv')\n  const logoRightText = document.createElement('p')\n  const nodeTwo = document.createTextNode('IZAKAYA')\n  logoRightText.appendChild(nodeTwo)\n  logoRightText.classList.add('logoText')\n\n  const logoIcon = new Image()\n  logoIcon.src = _images_hand_drawn_ramen_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  logoIcon.classList.add('logo')\n  logoIcon.setAttribute('alt', 'Bowl of ramen')\n  logoIcon.setAttribute('title', 'Image by pikisuperstar on Freepik')\n\n  header.appendChild(logoLeft)\n  logoLeft.appendChild(logoLeftText)\n  header.appendChild(logoIcon)\n  header.appendChild(logoRight)\n  logoRight.appendChild(logoRightText)\n\n  header.appendChild(createNavBar())\n\n  header.addEventListener(\"click\", (e) => {\n    ;(0,_home__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  });\n\n  return header;\n}\n// Nav Bar\nconst createNavBar = function () {\n  const navBar = document.createElement('div')\n  navBar.classList.add('navBar')\n  navBar.classList.add('stickyNav')\n\n  const menuButton = document.createElement('button')\n  const aboutButton = document.createElement('button')\n  const locationButton = document.createElement('button')\n\n  menuButton.classList.add('button-nav')\n  aboutButton.classList.add('button-nav')\n  locationButton.classList.add('button-nav')\n\n  menuButton.classList.add('navText')\n  aboutButton.classList.add('navText')\n  locationButton.classList.add('navText')\n\n  const textNodeOne = document.createTextNode('MENU')\n  const textNodeTwo = document.createTextNode('ABOUT US')\n  const textNodeThree = document.createTextNode('LOCATIONS')\n\n  menuButton.appendChild(textNodeOne)\n  aboutButton.appendChild(textNodeTwo)\n  locationButton.appendChild(textNodeThree)\n\n  menuButton.addEventListener(\"click\", (e) => {\n    if (e.target.classList.contains(\"active\")) return;\n    setActiveButton(menuButton);\n    (0,_menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  });\n\n  aboutButton.addEventListener(\"click\", (e) => {\n    if (e.target.classList.contains(\"active\")) return;\n    setActiveButton(aboutButton);\n    (0,_about__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  });\n\n  locationButton.addEventListener(\"click\", (e) => {\n    if (e.target.classList.contains(\"active\")) return;\n    setActiveButton(locationButton);\n    (0,_locations__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  });\n\n  navBar.appendChild(menuButton)\n  navBar.appendChild(aboutButton)\n  navBar.appendChild(locationButton)\n\n  return navBar\n} \n\nfunction setActiveButton(button) {\n  const buttons = document.querySelectorAll('.button-nav');\n\n  buttons.forEach((button) => {\n    if (button !== this) {\n      button.classList.remove('active');\n    }\n  });\n  button.classList.add('active');\n}\n\nfunction createMain() {\n  const main = document.createElement('main');\n  main.setAttribute('id', 'main')\n  return main;\n}\n\nfunction loadWebsite() {\n  const container = document.getElementById('content')\n  container.classList.add('container')\n  document.body.appendChild(container)\n\n  container.appendChild(createHeader())\n  container.appendChild(createNavBar())\n  container.appendChild(createMain())\n\n  setActiveButton(document.querySelector('.button-nav'));\n  (0,_home__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadWebsite);\n\n//# sourceURL=webpack://webpack-demo/./src/website.js?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;