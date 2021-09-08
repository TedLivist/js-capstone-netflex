/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/style.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/style.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: cursive;\r\n  font-weight: 500;\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n  background-color: #f1f1f1;\r\n  color: #333;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nmain {\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n\r\nimg {\r\n  width: 300px;\r\n  height: 400px;\r\n}\r\n\r\n.header {\r\n  background-color: #095e61;\r\n  padding: 1rem 2rem;\r\n}\r\n\r\n.navbar {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  font-size: 14px;\r\n  width: 70%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.logo {\r\n  align-self: flex-start;\r\n  border-radius: 50%;\r\n  border: 2px solid #f1f1f1;\r\n  padding: 0.5rem;\r\n  font-family: cursive;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.links {\r\n  color: #f1f1f1;\r\n  text-decoration: none;\r\n}\r\n\r\n.logo a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.nav-list {\r\n  display: flex;\r\n}\r\n\r\n.like-wrap {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n  column-gap: 2rem;\r\n}\r\n\r\n.shows-list {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  width: 90%;\r\n  margin: 2rem auto;\r\n}\r\n\r\nfooter div {\r\n  width: 75%;\r\n  margin: 25px auto;\r\n}\r\n\r\n.shows-list > div {\r\n  margin: 1rem 0;\r\n  text-align: center;\r\n  justify-content: center;\r\n}\r\n\r\n.comment-popup {\r\n  margin: 1rem 0;\r\n  padding: 0.5rem 1rem;\r\n  background-color: #095e61;\r\n  outline: none;\r\n  border: none;\r\n  border-radius: 5px;\r\n  text-transform: uppercase;\r\n  font-weight: 600;\r\n  font-family: cursive;\r\n  color: #f1f1f1;\r\n}\r\n\r\nfooter {\r\n  background-color: #095e61;\r\n  margin-top: auto;\r\n  padding-left: 50px;\r\n  color: #f1f1f1;\r\n}\r\n\r\n.underlined {\r\n  text-decoration: underline;\r\n  font-style: italic;\r\n}\r\n\r\n.items-title {\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n.container {\r\n  display: none;\r\n  background-color: rgb(0, 0, 0, 1);\r\n  width: 100%;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  height: 100%;\r\n}\r\n\r\n.modal-wrapper {\r\n  background-color: #f1f1f1;\r\n  height: 80%;\r\n  width: 80%;\r\n  margin: 5rem auto 0;\r\n  padding: 1rem;\r\n  overflow: auto;\r\n}\r\n\r\n.wrapper {\r\n  width: 95%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.img-wrapper {\r\n  padding: 1rem;\r\n  text-align: center;\r\n}\r\n\r\n.number {\r\n  margin: 1rem 0;\r\n  text-align: center;\r\n}\r\n\r\n.close {\r\n  font-size: 35px;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  cursor: pointer;\r\n  padding-right: 1rem;\r\n}\r\n\r\n.close:hover {\r\n  color: cadetblue;\r\n}\r\n\r\n.detail-wrap {\r\n  width: 100%;\r\n  margin: 2rem auto;\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  justify-content: space-between;\r\n  row-gap: 1rem;\r\n  column-gap: 1rem;\r\n}\r\n\r\n.list-item {\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n.comment-para {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.summary {\r\n  text-align: left;\r\n  width: 100%;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  row-gap: 1rem;\r\n}\r\n\r\n.user-name {\r\n  height: 40px;\r\n  width: 150px;\r\n  padding: 0 1rem;\r\n}\r\n\r\n.user-msg {\r\n  height: 80px;\r\n  width: 200px;\r\n  padding: 1rem;\r\n}\r\n\r\n.comment-btn {\r\n  margin-bottom: 2rem;\r\n  width: 150px;\r\n  height: 40px;\r\n  background-color: #095e61;\r\n  outline: none;\r\n  border: none;\r\n  border-radius: 5px;\r\n  text-transform: uppercase;\r\n  font-weight: 600;\r\n  font-family: cursive;\r\n  color: #f1f1f1;\r\n}\r\n\r\n.comment-btn:hover,\r\n.comment-popup:hover {\r\n  background-color: cadetblue;\r\n  cursor: pointer;\r\n}\r\n\r\n.bx:hover {\r\n  color: cadetblue;\r\n}\r\n\r\n@media (min-width: 728px) {\r\n  .navbar {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n\r\n  .logo {\r\n    margin-bottom: 0;\r\n    align-self: center;\r\n    justify-self: center;\r\n  }\r\n\r\n  .shows-list {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n\r\n  .detail-wrap {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n}\r\n\r\n@media (min-width: 1100px) {\r\n  .shows-list {\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n  }\r\n\r\n  .navbar {\r\n    width: 87%;\r\n  }\r\n\r\n  .wrapper {\r\n    width: 70%;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .user-name {\r\n    width: 200px;\r\n  }\r\n\r\n  .user-msg {\r\n    width: 300px;\r\n  }\r\n\r\n  .comment-btn {\r\n    width: 200px;\r\n  }\r\n\r\n  footer div {\r\n    width: 95%;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/assets/stylesheets/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: cursive;\r\n  font-weight: 500;\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n  background-color: #f1f1f1;\r\n  color: #333;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nmain {\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n\r\nimg {\r\n  width: 300px;\r\n  height: 400px;\r\n}\r\n\r\n.header {\r\n  background-color: #095e61;\r\n  padding: 1rem 2rem;\r\n}\r\n\r\n.navbar {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  font-size: 14px;\r\n  width: 70%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.logo {\r\n  align-self: flex-start;\r\n  border-radius: 50%;\r\n  border: 2px solid #f1f1f1;\r\n  padding: 0.5rem;\r\n  font-family: cursive;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.links {\r\n  color: #f1f1f1;\r\n  text-decoration: none;\r\n}\r\n\r\n.logo a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.nav-list {\r\n  display: flex;\r\n}\r\n\r\n.like-wrap {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n  column-gap: 2rem;\r\n}\r\n\r\n.shows-list {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  width: 90%;\r\n  margin: 2rem auto;\r\n}\r\n\r\nfooter div {\r\n  width: 75%;\r\n  margin: 25px auto;\r\n}\r\n\r\n.shows-list > div {\r\n  margin: 1rem 0;\r\n  text-align: center;\r\n  justify-content: center;\r\n}\r\n\r\n.comment-popup {\r\n  margin: 1rem 0;\r\n  padding: 0.5rem 1rem;\r\n  background-color: #095e61;\r\n  outline: none;\r\n  border: none;\r\n  border-radius: 5px;\r\n  text-transform: uppercase;\r\n  font-weight: 600;\r\n  font-family: cursive;\r\n  color: #f1f1f1;\r\n}\r\n\r\nfooter {\r\n  background-color: #095e61;\r\n  margin-top: auto;\r\n  padding-left: 50px;\r\n  color: #f1f1f1;\r\n}\r\n\r\n.underlined {\r\n  text-decoration: underline;\r\n  font-style: italic;\r\n}\r\n\r\n.items-title {\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n.container {\r\n  display: none;\r\n  background-color: rgb(0, 0, 0, 1);\r\n  width: 100%;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  height: 100%;\r\n}\r\n\r\n.modal-wrapper {\r\n  background-color: #f1f1f1;\r\n  height: 80%;\r\n  width: 80%;\r\n  margin: 5rem auto 0;\r\n  padding: 1rem;\r\n  overflow: auto;\r\n}\r\n\r\n.wrapper {\r\n  width: 95%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.img-wrapper {\r\n  padding: 1rem;\r\n  text-align: center;\r\n}\r\n\r\n.number {\r\n  margin: 1rem 0;\r\n  text-align: center;\r\n}\r\n\r\n.close {\r\n  font-size: 35px;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  cursor: pointer;\r\n  padding-right: 1rem;\r\n}\r\n\r\n.close:hover {\r\n  color: cadetblue;\r\n}\r\n\r\n.detail-wrap {\r\n  width: 100%;\r\n  margin: 2rem auto;\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  justify-content: space-between;\r\n  row-gap: 1rem;\r\n  column-gap: 1rem;\r\n}\r\n\r\n.list-item {\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n.comment-para {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.summary {\r\n  text-align: left;\r\n  width: 100%;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  row-gap: 1rem;\r\n}\r\n\r\n.user-name {\r\n  height: 40px;\r\n  width: 150px;\r\n  padding: 0 1rem;\r\n}\r\n\r\n.user-msg {\r\n  height: 80px;\r\n  width: 200px;\r\n  padding: 1rem;\r\n}\r\n\r\n.comment-btn {\r\n  margin-bottom: 2rem;\r\n  width: 150px;\r\n  height: 40px;\r\n  background-color: #095e61;\r\n  outline: none;\r\n  border: none;\r\n  border-radius: 5px;\r\n  text-transform: uppercase;\r\n  font-weight: 600;\r\n  font-family: cursive;\r\n  color: #f1f1f1;\r\n}\r\n\r\n.comment-btn:hover,\r\n.comment-popup:hover {\r\n  background-color: cadetblue;\r\n  cursor: pointer;\r\n}\r\n\r\n.bx:hover {\r\n  color: cadetblue;\r\n}\r\n\r\n@media (min-width: 728px) {\r\n  .navbar {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n\r\n  .logo {\r\n    margin-bottom: 0;\r\n    align-self: center;\r\n    justify-self: center;\r\n  }\r\n\r\n  .shows-list {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n\r\n  .detail-wrap {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n}\r\n\r\n@media (min-width: 1100px) {\r\n  .shows-list {\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n  }\r\n\r\n  .navbar {\r\n    width: 87%;\r\n  }\r\n\r\n  .wrapper {\r\n    width: 70%;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .user-name {\r\n    width: 200px;\r\n  }\r\n\r\n  .user-msg {\r\n    width: 300px;\r\n  }\r\n\r\n  .comment-btn {\r\n    width: 200px;\r\n  }\r\n\r\n  footer div {\r\n    width: 95%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
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

/***/ "./src/assets/stylesheets/style.css":
/*!******************************************!*\
  !*** ./src/assets/stylesheets/style.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/style.css");

      
      
      
      
      
      
      
      
      

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



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
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
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
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
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
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
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
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
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/buildShows.js":
/*!***********************************!*\
  !*** ./src/modules/buildShows.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getInvolvement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getInvolvement.js */ "./src/modules/getInvolvement.js");
/* harmony import */ var _postInvolvement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postInvolvement.js */ "./src/modules/postInvolvement.js");
/* harmony import */ var _counters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./counters.js */ "./src/modules/counters.js");
/* eslint-disable no-await-in-loop */





const buildShows = async (showsList, container) => {
  for (let i = 0; i <= showsList.length - 1; i += 1) {
    const showContainer = document.createElement('div');
    showContainer.id = `movie_${showsList[i].id}`;

    const img = document.createElement('img');
    img.src = showsList[i].image.medium;
    img.style.width = '20rem';
    showContainer.appendChild(img);

    const titleLike = document.createElement('div');
    titleLike.classList.add('like-wrap');
    const title = document.createElement('h3');
    const likeBtn = document.createElement('i');
    const likeDisplay = document.createElement('span');
    likeDisplay.innerHTML = '0 likes';

    likeBtn.classList.add('bx');
    likeBtn.classList.add('bx-heart');
    likeBtn.classList.add('bx-sm');
    likeBtn.style.cursor = 'pointer';
    likeBtn.id = `${showContainer.id}`;
    title.textContent = `${showsList[i].name}`;

    titleLike.style.margin = '5px';
    titleLike.style.textAlign = 'center';

    titleLike.appendChild(likeBtn);
    titleLike.appendChild(likeDisplay);
    showContainer.append(title, titleLike);

    const commentBtn = document.createElement('div');
    commentBtn.innerHTML = '<button class="comment-popup">Comment</button>';
    showContainer.appendChild(commentBtn);
    container.appendChild(showContainer);

    const listOfLikes = await (0,_getInvolvement_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)();
    (0,_counters_js__WEBPACK_IMPORTED_MODULE_2__.getLikesCount)(likeBtn, listOfLikes, likeDisplay);

    likeBtn.addEventListener('click', async (e) => {
      await (0,_postInvolvement_js__WEBPACK_IMPORTED_MODULE_1__.postLikes)(e.target.id);
      const getReq = await (0,_getInvolvement_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)();

      (0,_counters_js__WEBPACK_IMPORTED_MODULE_2__.getLikesCount)(e.target, getReq, likeDisplay);
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildShows);

/***/ }),

/***/ "./src/modules/counters.js":
/*!*********************************!*\
  !*** ./src/modules/counters.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLikesCount": () => (/* binding */ getLikesCount),
/* harmony export */   "showsCount": () => (/* binding */ showsCount),
/* harmony export */   "getCommentCount": () => (/* binding */ getCommentCount)
/* harmony export */ });
/* eslint-disable no-unused-expressions */

const getLikesCount = (target, likesArray, likesContainer) => {
  for (let i = 0; i <= likesArray.length - 1; i += 1) {
    if (likesArray[i].item_id === target.id) {
      likesContainer.innerHTML = `${likesArray[i].likes} likes`;
    }
  }
};

const showsCount = (showsList) => showsList.length;

const getCommentCount = (section, lists) => {
  section.textContent = '';
  lists.length >= 1
    ? (section.textContent = `Comments (${lists.length})`)
    : (section.textContent = 'Comments (0)');
};



/***/ }),

/***/ "./src/modules/getInvolvement.js":
/*!***************************************!*\
  !*** ./src/modules/getInvolvement.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLikes": () => (/* binding */ getLikes),
/* harmony export */   "getComments": () => (/* binding */ getComments)
/* harmony export */ });
const getLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jOmvR28ksoZ7GUF5P2Cy/likes');
  return response.json();
};

const getComments = async (button) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jOmvR28ksoZ7GUF5P2Cy/comments?item_id=${button}`);
  return response.json();
};



/***/ }),

/***/ "./src/modules/getShows.js":
/*!*********************************!*\
  !*** ./src/modules/getShows.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getShows = async () => {
  const response = await fetch(' https://api.tvmaze.com/shows');
  return response.json();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getShows);

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _counters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counters.js */ "./src/modules/counters.js");
/* harmony import */ var _getInvolvement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getInvolvement.js */ "./src/modules/getInvolvement.js");
/* harmony import */ var _postInvolvement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postInvolvement.js */ "./src/modules/postInvolvement.js");
/* harmony import */ var _renderComments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderComments.js */ "./src/modules/renderComments.js");
/* eslint-disable no-unused-expressions */






const modalStructure = async (buttons, showsList) => {
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', async () => {
      const modalSection = document.createElement('section');
      modalSection.classList.add('container');
      modalSection.style.display = 'flex';
      const modalWrapper = document.createElement('div');
      modalWrapper.classList.add('modal-wrapper');
      const modalDiv = document.createElement('div');
      modalDiv.classList.add('wrapper');

      const close = document.createElement('div');
      close.classList.add('close');
      close.textContent = 'X';
      close.addEventListener('click', () => {
        modalSection.style.display = 'none';
      });
      const imgWrapper = document.createElement('div');
      imgWrapper.classList.add('img-wrapper');
      const img = document.createElement('img');
      img.setAttribute('src', showsList[i].image.medium);
      const itemNumber = document.createElement('h2');
      itemNumber.classList.add('number');
      itemNumber.textContent = `${showsList[i].name}`;
      const detailWrap = document.createElement('div');
      detailWrap.classList.add('detail-wrap');
      const detail1 = document.createElement('h4');
      detail1.textContent = `Language: ${showsList[i].language}`;

      const detail2 = document.createElement('h4');
      detail2.textContent = 'Movie genres: ';
      const { genres } = showsList[i];
      genres.forEach((genre) => {
        detail2.textContent += `${genre}, `;
      });
      const detail3 = document.createElement('h4');
      detail3.innerHTML = `Estimated time: ${showsList[i].runtime}`;

      const detail4 = document.createElement('h4');
      detail4.textContent = `Rating: ${showsList[i].rating.average}`;

      const detail5 = document.createElement('h4');
      detail5.innerHTML = `Summary: ${showsList[i].summary}`;
      detail5.classList.add('summary');

      const commentSection = document.createElement('h3');
      commentSection.classList.add('number');
      const addComment = document.createElement('h3');
      addComment.textContent = 'Add a comment';
      addComment.style.marginBottom = '1rem';
      addComment.style.textAlign = 'center';
      const commentForm = document.createElement('form');
      commentForm.classList.add('form');
      const userName = document.createElement('input');
      userName.classList.add('user-name');
      userName.placeholder = 'Your name';
      const userMsg = document.createElement('textarea');
      userMsg.classList.add('user-msg');
      userMsg.placeholder = 'Your insights';
      const commentButton = document.createElement('button');
      commentButton.classList.add('comment-btn');
      commentButton.textContent = 'Comment';
      commentButton.id = `movie_cmt_${showsList[i].id}`;

      const commentDiv = document.createElement('div');
      commentDiv.classList.add('list-item');

      const comments = await (0,_getInvolvement_js__WEBPACK_IMPORTED_MODULE_1__.getComments)(commentButton.id);

      (0,_renderComments_js__WEBPACK_IMPORTED_MODULE_3__["default"])(commentDiv, comments);
      comments.length >= 1
        ? (commentSection.textContent = `Comments (${comments.length})`)
        : (commentSection.textContent = 'Comments (0)');

      commentButton.addEventListener('click', async (e) => {
        e.preventDefault();
        await (0,_postInvolvement_js__WEBPACK_IMPORTED_MODULE_2__.postComments)(commentButton.id, userName, userMsg);
        const getCmts = await (0,_getInvolvement_js__WEBPACK_IMPORTED_MODULE_1__.getComments)(commentButton.id);
        (0,_counters_js__WEBPACK_IMPORTED_MODULE_0__.getCommentCount)(commentSection, getCmts);
        (0,_renderComments_js__WEBPACK_IMPORTED_MODULE_3__["default"])(commentDiv, getCmts);
        userName.value = '';
        userMsg.value = '';
      });
      document.body.appendChild(modalSection);
      modalSection.appendChild(modalWrapper);
      modalWrapper.appendChild(modalDiv);
      modalDiv.append(
        close, imgWrapper, itemNumber,
        detailWrap, detail5, commentSection,
        commentDiv, addComment, commentForm,
      );
      detailWrap.append(detail1, detail2, detail3, detail4);
      imgWrapper.appendChild(img);

      commentForm.append(userName, userMsg, commentButton);
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalStructure);

/***/ }),

/***/ "./src/modules/postInvolvement.js":
/*!****************************************!*\
  !*** ./src/modules/postInvolvement.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postLikes": () => (/* binding */ postLikes),
/* harmony export */   "postComments": () => (/* binding */ postComments)
/* harmony export */ });
const postLikes = async (item) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jOmvR28ksoZ7GUF5P2Cy/likes', {
    method: 'POST',
    body: JSON.stringify({ item_id: item }),
    headers: {
      'Content-type': 'application/json; Charset=UTF-8',
    },
  });

  return response.text();
};

const postComments = async (button, userName, comment) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jOmvR28ksoZ7GUF5P2Cy/comments', {
    method: 'POST',
    body: JSON.stringify({
      item_id: button,
      username: userName.value,
      comment: comment.value,
    }),
    headers: {
      'Content-type': 'application/json; Charset=UTF-8',
    },
  });

  return response.text();
};



/***/ }),

/***/ "./src/modules/renderComments.js":
/*!***************************************!*\
  !*** ./src/modules/renderComments.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const renderComments = (commentContainer, list) => {
  if (list.length >= 1) {
    commentContainer.innerHTML = '';
    for (let i = 0; i <= list.length - 1; i += 1) {
      const commentsPara = document.createElement('p');
      commentsPara.classList.add('comment-para');
      commentsPara.innerHTML = `${list[i].creation_date} ${list[i].username}: ${list[i].comment}`;
      commentContainer.appendChild(commentsPara);
    }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderComments);

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_stylesheets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/stylesheets/style.css */ "./src/assets/stylesheets/style.css");
/* harmony import */ var _modules_buildShows_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/buildShows.js */ "./src/modules/buildShows.js");
/* harmony import */ var _modules_counters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/counters.js */ "./src/modules/counters.js");
/* harmony import */ var _modules_getShows_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/getShows.js */ "./src/modules/getShows.js");
/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ "./src/modules/modal.js");






const itemsTitle = document.querySelector('.items-title');
const allShowsContainer = document.querySelector('.shows-list');

window.addEventListener('load', async () => {
  const shows = await (0,_modules_getShows_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const sixShows = shows.slice(0, 20);

  itemsTitle.innerHTML = `TV SHOWS (${(0,_modules_counters_js__WEBPACK_IMPORTED_MODULE_2__.showsCount)(sixShows)})`;
  await (0,_modules_buildShows_js__WEBPACK_IMPORTED_MODULE_1__["default"])(sixShows, allShowsContainer);

  const commentPopup = [...document.querySelectorAll('.comment-popup')];
  (0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__["default"])(commentPopup, sixShows);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFVB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QUFFQSxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7QUMxRzdCO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixlQUFlO0FBQzFDO0FBQ0EseUNBQXlDO0FBQ3pDLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSx5Q0FBeUM7QUFDekMsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0E7QUFDQSxrQ0FBa0MsdUJBQXVCLEVBQUUsaUJBQWlCLElBQUksZ0JBQWdCO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWM7Ozs7OztVQ1o3QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ053QztBQUNTO0FBQ0U7QUFDTjtBQUNHOztBQUVoRDtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLGdFQUFRO0FBQzlCOztBQUVBLHNDQUFzQyxnRUFBVSxXQUFXO0FBQzNELFFBQVEsa0VBQVU7O0FBRWxCO0FBQ0EsRUFBRSw2REFBYztBQUNoQixDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXByb2plY3QvLi9zcmMvYXNzZXRzL3N0eWxlc2hlZXRzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9hc3NldHMvc3R5bGVzaGVldHMvc3R5bGUuY3NzPzdiYjEiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXByb2plY3QvLi9zcmMvbW9kdWxlcy9idWlsZFNob3dzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9tb2R1bGVzL2NvdW50ZXJzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9tb2R1bGVzL2dldEludm9sdmVtZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9tb2R1bGVzL2dldFNob3dzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9tb2R1bGVzL21vZGFsLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9tb2R1bGVzL3Bvc3RJbnZvbHZlbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXByb2plY3QvLi9zcmMvbW9kdWxlcy9yZW5kZXJDb21tZW50cy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIGhlaWdodDogNDAwcHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5NWU2MTtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI2YxZjFmMTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmtzIHtcXHJcXG4gIGNvbG9yOiAjZjFmMWYxO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyBhOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2Utd3JhcCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGNvbHVtbi1nYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5zaG93cy1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBtYXJnaW46IDJyZW0gYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIGRpdiB7XFxyXFxuICB3aWR0aDogNzUlO1xcclxcbiAgbWFyZ2luOiAyNXB4IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5zaG93cy1saXN0ID4gZGl2IHtcXHJcXG4gIG1hcmdpbjogMXJlbSAwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXBvcHVwIHtcXHJcXG4gIG1hcmdpbjogMXJlbSAwO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDk1ZTYxO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxyXFxuICBjb2xvcjogI2YxZjFmMTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwOTVlNjE7XFxyXFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcclxcbiAgY29sb3I6ICNmMWYxZjE7XFxyXFxufVxcclxcblxcclxcbi51bmRlcmxpbmVkIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbXMtdGl0bGUge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAxKTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLXdyYXBwZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXHJcXG4gIGhlaWdodDogODAlO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIG1hcmdpbjogNXJlbSBhdXRvIDA7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi53cmFwcGVyIHtcXHJcXG4gIHdpZHRoOiA5NSU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmltZy13cmFwcGVyIHtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5udW1iZXIge1xcclxcbiAgbWFyZ2luOiAxcmVtIDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZSB7XFxyXFxuICBmb250LXNpemU6IDM1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5jbG9zZTpob3ZlciB7XFxyXFxuICBjb2xvcjogY2FkZXRibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsLXdyYXAge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW46IDJyZW0gYXV0bztcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHJvdy1nYXA6IDFyZW07XFxyXFxuICBjb2x1bW4tZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXBhcmEge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1bW1hcnkge1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcm93LWdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXItbmFtZSB7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICB3aWR0aDogMTUwcHg7XFxyXFxuICBwYWRkaW5nOiAwIDFyZW07XFxyXFxufVxcclxcblxcclxcbi51c2VyLW1zZyB7XFxyXFxuICBoZWlnaHQ6IDgwcHg7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1idG4ge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwOTVlNjE7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcXHJcXG4gIGNvbG9yOiAjZjFmMWYxO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1idG46aG92ZXIsXFxyXFxuLmNvbW1lbnQtcG9wdXA6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYng6aG92ZXIge1xcclxcbiAgY29sb3I6IGNhZGV0Ymx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDcyOHB4KSB7XFxyXFxuICAubmF2YmFyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxvZ28ge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNob3dzLWxpc3Qge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZGV0YWlsLXdyYXAge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxMTAwcHgpIHtcXHJcXG4gIC5zaG93cy1saXN0IHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2YmFyIHtcXHJcXG4gICAgd2lkdGg6IDg3JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC53cmFwcGVyIHtcXHJcXG4gICAgd2lkdGg6IDcwJTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudXNlci1uYW1lIHtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnVzZXItbXNnIHtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnQtYnRuIHtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgZm9vdGVyIGRpdiB7XFxyXFxuICAgIHdpZHRoOiA5NSU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzaGVldHMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsV0FBVztFQUNYLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixjQUFjO0FBQ2hCOztBQUVBOztFQUVFLDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLDhCQUE4QjtFQUNoQztBQUNGOztBQUVBO0VBQ0U7SUFDRSxzQ0FBc0M7RUFDeEM7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBoZWlnaHQ6IDQwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwOTVlNjE7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmMWYxZjE7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5saW5rcyB7XFxyXFxuICBjb2xvcjogI2YxZjFmMTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28gYTpob3ZlciB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5saWtlLXdyYXAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBjb2x1bW4tZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvd3MtbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiAycmVtIGF1dG87XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBkaXYge1xcclxcbiAgd2lkdGg6IDc1JTtcXHJcXG4gIG1hcmdpbjogMjVweCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvd3MtbGlzdCA+IGRpdiB7XFxyXFxuICBtYXJnaW46IDFyZW0gMDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1wb3B1cCB7XFxyXFxuICBtYXJnaW46IDFyZW0gMDtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5NWU2MTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xcclxcbiAgY29sb3I6ICNmMWYxZjE7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDk1ZTYxO1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gIHBhZGRpbmctbGVmdDogNTBweDtcXHJcXG4gIGNvbG9yOiAjZjFmMWYxO1xcclxcbn1cXHJcXG5cXHJcXG4udW5kZXJsaW5lZCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW1zLXRpdGxlIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMSk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC13cmFwcGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxyXFxuICBoZWlnaHQ6IDgwJTtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXJnaW46IDVyZW0gYXV0byAwO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuICB3aWR0aDogOTUlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5pbWctd3JhcHBlciB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubnVtYmVyIHtcXHJcXG4gIG1hcmdpbjogMXJlbSAwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2Uge1xcclxcbiAgZm9udC1zaXplOiAzNXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2U6aG92ZXIge1xcclxcbiAgY29sb3I6IGNhZGV0Ymx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbC13cmFwIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luOiAycmVtIGF1dG87XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICByb3ctZ2FwOiAxcmVtO1xcclxcbiAgY29sdW1uLWdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaXRlbSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1wYXJhIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zdW1tYXJ5IHtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHJvdy1nYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi51c2VyLW5hbWUge1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgcGFkZGluZzogMCAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlci1tc2cge1xcclxcbiAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtYnRuIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuICB3aWR0aDogMTUwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDk1ZTYxO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxyXFxuICBjb2xvcjogI2YxZjFmMTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtYnRuOmhvdmVyLFxcclxcbi5jb21tZW50LXBvcHVwOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ4OmhvdmVyIHtcXHJcXG4gIGNvbG9yOiBjYWRldGJsdWU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA3MjhweCkge1xcclxcbiAgLm5hdmJhciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sb2dvIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zaG93cy1saXN0IHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmRldGFpbC13cmFwIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTEwMHB4KSB7XFxyXFxuICAuc2hvd3MtbGlzdCB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdmJhciB7XFxyXFxuICAgIHdpZHRoOiA4NyU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAud3JhcHBlciB7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnVzZXItbmFtZSB7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC51c2VyLW1zZyB7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50LWJ0biB7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGZvb3RlciBkaXYge1xcclxcbiAgICB3aWR0aDogOTUlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tYXdhaXQtaW4tbG9vcCAqL1xuXG5pbXBvcnQgeyBnZXRMaWtlcyB9IGZyb20gJy4vZ2V0SW52b2x2ZW1lbnQuanMnO1xuaW1wb3J0IHsgcG9zdExpa2VzIH0gZnJvbSAnLi9wb3N0SW52b2x2ZW1lbnQuanMnO1xuaW1wb3J0IHsgZ2V0TGlrZXNDb3VudCB9IGZyb20gJy4vY291bnRlcnMuanMnO1xuXG5jb25zdCBidWlsZFNob3dzID0gYXN5bmMgKHNob3dzTGlzdCwgY29udGFpbmVyKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IHNob3dzTGlzdC5sZW5ndGggLSAxOyBpICs9IDEpIHtcbiAgICBjb25zdCBzaG93Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hvd0NvbnRhaW5lci5pZCA9IGBtb3ZpZV8ke3Nob3dzTGlzdFtpXS5pZH1gO1xuXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLnNyYyA9IHNob3dzTGlzdFtpXS5pbWFnZS5tZWRpdW07XG4gICAgaW1nLnN0eWxlLndpZHRoID0gJzIwcmVtJztcbiAgICBzaG93Q29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgICBjb25zdCB0aXRsZUxpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZUxpa2UuY2xhc3NMaXN0LmFkZCgnbGlrZS13cmFwJyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IGxpa2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgY29uc3QgbGlrZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbGlrZURpc3BsYXkuaW5uZXJIVE1MID0gJzAgbGlrZXMnO1xuXG4gICAgbGlrZUJ0bi5jbGFzc0xpc3QuYWRkKCdieCcpO1xuICAgIGxpa2VCdG4uY2xhc3NMaXN0LmFkZCgnYngtaGVhcnQnKTtcbiAgICBsaWtlQnRuLmNsYXNzTGlzdC5hZGQoJ2J4LXNtJyk7XG4gICAgbGlrZUJ0bi5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgbGlrZUJ0bi5pZCA9IGAke3Nob3dDb250YWluZXIuaWR9YDtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGAke3Nob3dzTGlzdFtpXS5uYW1lfWA7XG5cbiAgICB0aXRsZUxpa2Uuc3R5bGUubWFyZ2luID0gJzVweCc7XG4gICAgdGl0bGVMaWtlLnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInO1xuXG4gICAgdGl0bGVMaWtlLmFwcGVuZENoaWxkKGxpa2VCdG4pO1xuICAgIHRpdGxlTGlrZS5hcHBlbmRDaGlsZChsaWtlRGlzcGxheSk7XG4gICAgc2hvd0NvbnRhaW5lci5hcHBlbmQodGl0bGUsIHRpdGxlTGlrZSk7XG5cbiAgICBjb25zdCBjb21tZW50QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29tbWVudEJ0bi5pbm5lckhUTUwgPSAnPGJ1dHRvbiBjbGFzcz1cImNvbW1lbnQtcG9wdXBcIj5Db21tZW50PC9idXR0b24+JztcbiAgICBzaG93Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbW1lbnRCdG4pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzaG93Q29udGFpbmVyKTtcblxuICAgIGNvbnN0IGxpc3RPZkxpa2VzID0gYXdhaXQgZ2V0TGlrZXMoKTtcbiAgICBnZXRMaWtlc0NvdW50KGxpa2VCdG4sIGxpc3RPZkxpa2VzLCBsaWtlRGlzcGxheSk7XG5cbiAgICBsaWtlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgICAgIGF3YWl0IHBvc3RMaWtlcyhlLnRhcmdldC5pZCk7XG4gICAgICBjb25zdCBnZXRSZXEgPSBhd2FpdCBnZXRMaWtlcygpO1xuXG4gICAgICBnZXRMaWtlc0NvdW50KGUudGFyZ2V0LCBnZXRSZXEsIGxpa2VEaXNwbGF5KTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYnVpbGRTaG93czsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cblxuY29uc3QgZ2V0TGlrZXNDb3VudCA9ICh0YXJnZXQsIGxpa2VzQXJyYXksIGxpa2VzQ29udGFpbmVyKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IGxpa2VzQXJyYXkubGVuZ3RoIC0gMTsgaSArPSAxKSB7XG4gICAgaWYgKGxpa2VzQXJyYXlbaV0uaXRlbV9pZCA9PT0gdGFyZ2V0LmlkKSB7XG4gICAgICBsaWtlc0NvbnRhaW5lci5pbm5lckhUTUwgPSBgJHtsaWtlc0FycmF5W2ldLmxpa2VzfSBsaWtlc2A7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBzaG93c0NvdW50ID0gKHNob3dzTGlzdCkgPT4gc2hvd3NMaXN0Lmxlbmd0aDtcblxuY29uc3QgZ2V0Q29tbWVudENvdW50ID0gKHNlY3Rpb24sIGxpc3RzKSA9PiB7XG4gIHNlY3Rpb24udGV4dENvbnRlbnQgPSAnJztcbiAgbGlzdHMubGVuZ3RoID49IDFcbiAgICA/IChzZWN0aW9uLnRleHRDb250ZW50ID0gYENvbW1lbnRzICgke2xpc3RzLmxlbmd0aH0pYClcbiAgICA6IChzZWN0aW9uLnRleHRDb250ZW50ID0gJ0NvbW1lbnRzICgwKScpO1xufTtcblxuZXhwb3J0IHsgZ2V0TGlrZXNDb3VudCwgc2hvd3NDb3VudCwgZ2V0Q29tbWVudENvdW50IH07IiwiY29uc3QgZ2V0TGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2pPbXZSMjhrc29aN0dVRjVQMkN5L2xpa2VzJyk7XG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59O1xuXG5jb25zdCBnZXRDb21tZW50cyA9IGFzeW5jIChidXR0b24pID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvak9tdlIyOGtzb1o3R1VGNVAyQ3kvY29tbWVudHM/aXRlbV9pZD0ke2J1dHRvbn1gKTtcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn07XG5cbmV4cG9ydCB7IGdldExpa2VzLCBnZXRDb21tZW50cyB9OyIsImNvbnN0IGdldFNob3dzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcgaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cycpO1xuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0U2hvd3M7IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG5cbmltcG9ydCB7IGdldENvbW1lbnRDb3VudCB9IGZyb20gJy4vY291bnRlcnMuanMnO1xuaW1wb3J0IHsgZ2V0Q29tbWVudHMgfSBmcm9tICcuL2dldEludm9sdmVtZW50LmpzJztcbmltcG9ydCB7IHBvc3RDb21tZW50cyB9IGZyb20gJy4vcG9zdEludm9sdmVtZW50LmpzJztcbmltcG9ydCByZW5kZXJDb21tZW50cyBmcm9tICcuL3JlbmRlckNvbW1lbnRzLmpzJztcblxuY29uc3QgbW9kYWxTdHJ1Y3R1cmUgPSBhc3luYyAoYnV0dG9ucywgc2hvd3NMaXN0KSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBtb2RhbFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICBtb2RhbFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gICAgICBtb2RhbFNlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgIGNvbnN0IG1vZGFsV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgbW9kYWxXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ21vZGFsLXdyYXBwZXInKTtcbiAgICAgIGNvbnN0IG1vZGFsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBtb2RhbERpdi5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyJyk7XG5cbiAgICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdjbG9zZScpO1xuICAgICAgY2xvc2UudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbW9kYWxTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGltZ1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGltZ1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaW1nLXdyYXBwZXInKTtcbiAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgc2hvd3NMaXN0W2ldLmltYWdlLm1lZGl1bSk7XG4gICAgICBjb25zdCBpdGVtTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgIGl0ZW1OdW1iZXIuY2xhc3NMaXN0LmFkZCgnbnVtYmVyJyk7XG4gICAgICBpdGVtTnVtYmVyLnRleHRDb250ZW50ID0gYCR7c2hvd3NMaXN0W2ldLm5hbWV9YDtcbiAgICAgIGNvbnN0IGRldGFpbFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRldGFpbFdyYXAuY2xhc3NMaXN0LmFkZCgnZGV0YWlsLXdyYXAnKTtcbiAgICAgIGNvbnN0IGRldGFpbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgZGV0YWlsMS50ZXh0Q29udGVudCA9IGBMYW5ndWFnZTogJHtzaG93c0xpc3RbaV0ubGFuZ3VhZ2V9YDtcblxuICAgICAgY29uc3QgZGV0YWlsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICBkZXRhaWwyLnRleHRDb250ZW50ID0gJ01vdmllIGdlbnJlczogJztcbiAgICAgIGNvbnN0IHsgZ2VucmVzIH0gPSBzaG93c0xpc3RbaV07XG4gICAgICBnZW5yZXMuZm9yRWFjaCgoZ2VucmUpID0+IHtcbiAgICAgICAgZGV0YWlsMi50ZXh0Q29udGVudCArPSBgJHtnZW5yZX0sIGA7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGRldGFpbDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgZGV0YWlsMy5pbm5lckhUTUwgPSBgRXN0aW1hdGVkIHRpbWU6ICR7c2hvd3NMaXN0W2ldLnJ1bnRpbWV9YDtcblxuICAgICAgY29uc3QgZGV0YWlsNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICBkZXRhaWw0LnRleHRDb250ZW50ID0gYFJhdGluZzogJHtzaG93c0xpc3RbaV0ucmF0aW5nLmF2ZXJhZ2V9YDtcblxuICAgICAgY29uc3QgZGV0YWlsNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICBkZXRhaWw1LmlubmVySFRNTCA9IGBTdW1tYXJ5OiAke3Nob3dzTGlzdFtpXS5zdW1tYXJ5fWA7XG4gICAgICBkZXRhaWw1LmNsYXNzTGlzdC5hZGQoJ3N1bW1hcnknKTtcblxuICAgICAgY29uc3QgY29tbWVudFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgY29tbWVudFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbnVtYmVyJyk7XG4gICAgICBjb25zdCBhZGRDb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgIGFkZENvbW1lbnQudGV4dENvbnRlbnQgPSAnQWRkIGEgY29tbWVudCc7XG4gICAgICBhZGRDb21tZW50LnN0eWxlLm1hcmdpbkJvdHRvbSA9ICcxcmVtJztcbiAgICAgIGFkZENvbW1lbnQuc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICBjb25zdCBjb21tZW50Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgIGNvbW1lbnRGb3JtLmNsYXNzTGlzdC5hZGQoJ2Zvcm0nKTtcbiAgICAgIGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIHVzZXJOYW1lLmNsYXNzTGlzdC5hZGQoJ3VzZXItbmFtZScpO1xuICAgICAgdXNlck5hbWUucGxhY2Vob2xkZXIgPSAnWW91ciBuYW1lJztcbiAgICAgIGNvbnN0IHVzZXJNc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgdXNlck1zZy5jbGFzc0xpc3QuYWRkKCd1c2VyLW1zZycpO1xuICAgICAgdXNlck1zZy5wbGFjZWhvbGRlciA9ICdZb3VyIGluc2lnaHRzJztcbiAgICAgIGNvbnN0IGNvbW1lbnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGNvbW1lbnRCdXR0b24uY2xhc3NMaXN0LmFkZCgnY29tbWVudC1idG4nKTtcbiAgICAgIGNvbW1lbnRCdXR0b24udGV4dENvbnRlbnQgPSAnQ29tbWVudCc7XG4gICAgICBjb21tZW50QnV0dG9uLmlkID0gYG1vdmllX2NtdF8ke3Nob3dzTGlzdFtpXS5pZH1gO1xuXG4gICAgICBjb25zdCBjb21tZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb21tZW50RGl2LmNsYXNzTGlzdC5hZGQoJ2xpc3QtaXRlbScpO1xuXG4gICAgICBjb25zdCBjb21tZW50cyA9IGF3YWl0IGdldENvbW1lbnRzKGNvbW1lbnRCdXR0b24uaWQpO1xuXG4gICAgICByZW5kZXJDb21tZW50cyhjb21tZW50RGl2LCBjb21tZW50cyk7XG4gICAgICBjb21tZW50cy5sZW5ndGggPj0gMVxuICAgICAgICA/IChjb21tZW50U2VjdGlvbi50ZXh0Q29udGVudCA9IGBDb21tZW50cyAoJHtjb21tZW50cy5sZW5ndGh9KWApXG4gICAgICAgIDogKGNvbW1lbnRTZWN0aW9uLnRleHRDb250ZW50ID0gJ0NvbW1lbnRzICgwKScpO1xuXG4gICAgICBjb21tZW50QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBhd2FpdCBwb3N0Q29tbWVudHMoY29tbWVudEJ1dHRvbi5pZCwgdXNlck5hbWUsIHVzZXJNc2cpO1xuICAgICAgICBjb25zdCBnZXRDbXRzID0gYXdhaXQgZ2V0Q29tbWVudHMoY29tbWVudEJ1dHRvbi5pZCk7XG4gICAgICAgIGdldENvbW1lbnRDb3VudChjb21tZW50U2VjdGlvbiwgZ2V0Q210cyk7XG4gICAgICAgIHJlbmRlckNvbW1lbnRzKGNvbW1lbnREaXYsIGdldENtdHMpO1xuICAgICAgICB1c2VyTmFtZS52YWx1ZSA9ICcnO1xuICAgICAgICB1c2VyTXNnLnZhbHVlID0gJyc7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWxTZWN0aW9uKTtcbiAgICAgIG1vZGFsU2VjdGlvbi5hcHBlbmRDaGlsZChtb2RhbFdyYXBwZXIpO1xuICAgICAgbW9kYWxXcmFwcGVyLmFwcGVuZENoaWxkKG1vZGFsRGl2KTtcbiAgICAgIG1vZGFsRGl2LmFwcGVuZChcbiAgICAgICAgY2xvc2UsIGltZ1dyYXBwZXIsIGl0ZW1OdW1iZXIsXG4gICAgICAgIGRldGFpbFdyYXAsIGRldGFpbDUsIGNvbW1lbnRTZWN0aW9uLFxuICAgICAgICBjb21tZW50RGl2LCBhZGRDb21tZW50LCBjb21tZW50Rm9ybSxcbiAgICAgICk7XG4gICAgICBkZXRhaWxXcmFwLmFwcGVuZChkZXRhaWwxLCBkZXRhaWwyLCBkZXRhaWwzLCBkZXRhaWw0KTtcbiAgICAgIGltZ1dyYXBwZXIuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgICAgY29tbWVudEZvcm0uYXBwZW5kKHVzZXJOYW1lLCB1c2VyTXNnLCBjb21tZW50QnV0dG9uKTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbW9kYWxTdHJ1Y3R1cmU7IiwiY29uc3QgcG9zdExpa2VzID0gYXN5bmMgKGl0ZW0pID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvak9tdlIyOGtzb1o3R1VGNVAyQ3kvbGlrZXMnLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpdGVtX2lkOiBpdGVtIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgQ2hhcnNldD1VVEYtOCcsXG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbn07XG5cbmNvbnN0IHBvc3RDb21tZW50cyA9IGFzeW5jIChidXR0b24sIHVzZXJOYW1lLCBjb21tZW50KSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2pPbXZSMjhrc29aN0dVRjVQMkN5L2NvbW1lbnRzJywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IGJ1dHRvbixcbiAgICAgIHVzZXJuYW1lOiB1c2VyTmFtZS52YWx1ZSxcbiAgICAgIGNvbW1lbnQ6IGNvbW1lbnQudmFsdWUsXG4gICAgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBDaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xufTtcblxuZXhwb3J0IHsgcG9zdExpa2VzLCBwb3N0Q29tbWVudHMgfTsiLCJjb25zdCByZW5kZXJDb21tZW50cyA9IChjb21tZW50Q29udGFpbmVyLCBsaXN0KSA9PiB7XG4gIGlmIChsaXN0Lmxlbmd0aCA+PSAxKSB7XG4gICAgY29tbWVudENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBsaXN0Lmxlbmd0aCAtIDE7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY29tbWVudHNQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgY29tbWVudHNQYXJhLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnQtcGFyYScpO1xuICAgICAgY29tbWVudHNQYXJhLmlubmVySFRNTCA9IGAke2xpc3RbaV0uY3JlYXRpb25fZGF0ZX0gJHtsaXN0W2ldLnVzZXJuYW1lfTogJHtsaXN0W2ldLmNvbW1lbnR9YDtcbiAgICAgIGNvbW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tbWVudHNQYXJhKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckNvbW1lbnRzOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vYXNzZXRzL3N0eWxlc2hlZXRzL3N0eWxlLmNzcyc7XG5pbXBvcnQgYnVpbGRTaG93cyBmcm9tICcuL21vZHVsZXMvYnVpbGRTaG93cy5qcyc7XG5pbXBvcnQgeyBzaG93c0NvdW50IH0gZnJvbSAnLi9tb2R1bGVzL2NvdW50ZXJzLmpzJztcbmltcG9ydCBnZXRTaG93cyBmcm9tICcuL21vZHVsZXMvZ2V0U2hvd3MuanMnO1xuaW1wb3J0IG1vZGFsU3RydWN0dXJlIGZyb20gJy4vbW9kdWxlcy9tb2RhbC5qcyc7XG5cbmNvbnN0IGl0ZW1zVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbXMtdGl0bGUnKTtcbmNvbnN0IGFsbFNob3dzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3dzLWxpc3QnKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHNob3dzID0gYXdhaXQgZ2V0U2hvd3MoKTtcbiAgY29uc3Qgc2l4U2hvd3MgPSBzaG93cy5zbGljZSgwLCAyMCk7XG5cbiAgaXRlbXNUaXRsZS5pbm5lckhUTUwgPSBgVFYgU0hPV1MgKCR7c2hvd3NDb3VudChzaXhTaG93cyl9KWA7XG4gIGF3YWl0IGJ1aWxkU2hvd3Moc2l4U2hvd3MsIGFsbFNob3dzQ29udGFpbmVyKTtcblxuICBjb25zdCBjb21tZW50UG9wdXAgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1lbnQtcG9wdXAnKV07XG4gIG1vZGFsU3RydWN0dXJlKGNvbW1lbnRQb3B1cCwgc2l4U2hvd3MpO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9