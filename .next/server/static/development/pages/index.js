module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./level */ "./pages/level.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./map */ "./pages/map.js");
/* harmony import */ var _square__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./square */ "./pages/square.js");





var _jsxFileName = "D:\\Programming\\Dungeon Crawler\\pages\\index.js";





var Game =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Game, _React$Component);

  function Game(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Game);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Game).call(this, props)); //row col for new map

    _this.map = new _map__WEBPACK_IMPORTED_MODULE_7__["default"](70, 80);
    var playerPositions = _this.map.playerSquares;
    _this.randomPosition = playerPositions[0];
    console.log(_this.randomPosition);
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Game, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_level__WEBPACK_IMPORTED_MODULE_5__["default"], {
        map: this.map,
        pixelSize: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }));
    }
  }]);

  return Game;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./pages/level.js":
/*!************************!*\
  !*** ./pages/level.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map */ "./pages/map.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _square__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./square */ "./pages/square.js");






var _jsxFileName = "D:\\Programming\\Dungeon Crawler\\pages\\level.js";



var screen = {
  width: '50%',
  height: '100%',
  backgroundColor: 'black'
};
var squareContainer = {
  margin: '0 auto',
  position: 'relative',
  length: '100%',
  width: '100%',
  padding: 0,
  border: 0,
  fontSize: 0,
  letterSpacing: '-1px'
};

var Level =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Level, _React$Component);

  function Level(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Level);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Level).call(this, props)); //row col for new map

    _this.board = _this.props.map; // this.board = new Map(this.props.rows, this.props.cols);

    _this.pixelSize = _this.props.pixelSize;
    _this.arr2d = _this.board.contents;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Level, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      var id = 0;
      this.squares = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(this.arr2d).map(function (el, i) {
        var offsetY = i * _this2.pixelSize;

        var single = _this2.arr2d[el].map(function (sub_el, j) {
          var offsetX = j * _this2.pixelSize; //sides

          if (sub_el.type == 'X') {
            {
              id += 1;
            }
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_square__WEBPACK_IMPORTED_MODULE_8__["default"], {
              key: id,
              x: offsetX,
              y: offsetY,
              size: _this2.pixelSize,
              node: sub_el,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              },
              __self: this
            });
          } //corner (should be next to clear blocks)
          else if (sub_el.type == 'C') {
              {
                id += 1;
              }
              return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_square__WEBPACK_IMPORTED_MODULE_8__["default"], {
                key: id,
                x: offsetX,
                y: offsetY,
                size: _this2.pixelSize,
                node: sub_el,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 52
                },
                __self: this
              });
            } //the gooey insides
            else if (sub_el.type == 'L') {
                {
                  id += 1;
                }
                return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_square__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  key: id,
                  x: offsetX,
                  y: offsetY,
                  size: _this2.pixelSize,
                  color: "white",
                  node: sub_el,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                  },
                  __self: this
                });
              } //hallways
              else if (sub_el.type == 'H') {
                  {
                    id += 1;
                  }
                  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_square__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    key: id,
                    x: offsetX,
                    y: offsetY,
                    size: _this2.pixelSize,
                    color: "white",
                    node: sub_el,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 64
                    },
                    __self: this
                  });
                } //blanks
                else if (sub_el.type == '-') {
                    {
                      id += 1;
                    }
                    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_square__WEBPACK_IMPORTED_MODULE_8__["default"], {
                      key: id,
                      x: offsetX,
                      y: offsetY,
                      size: _this2.pixelSize,
                      node: sub_el,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 70
                      },
                      __self: this
                    });
                  }
        });

        {
          id += 1;
        }
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          key: id,
          style: squareContainer,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, " ", single);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: screen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, this.squares);
    }
  }]);

  return Level;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Level);

/***/ }),

/***/ "./pages/map.js":
/*!**********************!*\
  !*** ./pages/map.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _room__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./room */ "./pages/room.js");
/* harmony import */ var _room__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_room__WEBPACK_IMPORTED_MODULE_2__);




var Map =
/*#__PURE__*/
function () {
  //map will work most of the times, however, doesn't check every position 
  function Map(boardWidth, boardlength) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Map);

    //describes the boards with relative to amount of squares
    this.width = boardWidth;
    this.height = boardlength;
    this.clearedBoard = [];
    this.removedHalls = [];
    this.playerMovable = []; //initialize the board with a clear state

    this.clear();
    this.board = this.clearedBoard;
    this.createRooms();
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Map, [{
    key: "clear",
    value: function clear() {
      for (var i = 0; i < this.height; i++) {
        var arr = [];

        for (var j = 0; j < this.width; j++) {
          var emptyNodes = new _room__WEBPACK_IMPORTED_MODULE_2__["Node"]('-', [i, j]);
          arr.push(emptyNodes);
        }

        this.clearedBoard.push(arr);
      }
    }
  }, {
    key: "createRooms",
    value: function createRooms() {
      var randomSize = [5, 7];
      var roomNode = new _room__WEBPACK_IMPORTED_MODULE_2__["Room"](randomSize[0], randomSize[1]); // //create some halls

      var halls = this.generateHalls(2); //initialize queue

      var position = [30, 40];
      var halls = this.generateHalls(2);

      for (var i = 0; i < halls.length; i++) {
        roomNode.buildCooridor(halls[i]);
      }

      roomNode.changePosition(position);
      roomNode.visited = true;
      this.placeRoom(roomNode);
      var queue = [];
      queue.push(roomNode);

      while (queue.length) {
        var node = queue.shift(0);

        if (node) {
          var rooms = this.generateRooms(node);

          for (var i = 0; i < rooms.length; i++) {
            this.placeRoom(rooms[i]);
            queue.push(rooms[i]);
          }
        }
      }

      for (var i = 0; i < this.removedHalls.length; i++) {
        var row = this.removedHalls[i].position[0];
        var col = this.removedHalls[i].position[1];

        if (this.board[row][col].type == 'H') {
          this.board[row][col] = this.removedHalls[i];
        }
      }
    } //methods for the right

  }, {
    key: "rightColPositions",
    value: function rightColPositions(callback) {
      var colSpan = arguments[0];
      var rowIdx = arguments[1];
      var board = arguments[2];
      var l = colSpan[0];
      var r = colSpan[1];
      var span = Math.abs(l - r); //checks mid as an extra check

      var m = r + Math.floor(span / 2);
      var counter = 0;

      try {
        if (board[rowIdx][l + 1].filled == true) {
          return null;
        } else if (board[rowIdx][m].filled == true) {
          return null;
        } else if (board[rowIdx][r].filled == false) {
          return [l, r];
        } else {
          while (board[rowIdx][r].filled == true && counter < 3 && span > 3) {
            //reduce r by a quarter of current span each time
            // console.log('reducing')
            r = r - Math.floor(span / 4);

            if (board[rowIdx][r].filled == false) {
              return [l, r];
            }

            span = Math.abs(l - r);
            counter += 1;
          }
        }
      } catch (e) {
        console.log('column position is null with', l, r);
      }

      return null;
    }
  }, {
    key: "rightRowPositions",
    value: function rightRowPositions(callback) {
      var rowSpan = arguments[0];
      var colIdx = arguments[1] + 1; //get offset so not looking at hall

      var board = arguments[2]; //get top and bottom

      var t = rowSpan[0];
      var b = rowSpan[1]; //create copies to check reduction bounds

      var originalT = t; //counter for a quit if the room cannot be created with the max amount of tries

      var counter = 0;
      var span = Math.abs(t - b); //reduce by more than a half because of offsets

      t = t - Math.floor(span / 4);
      b = b - Math.floor(span / 4); //update the span

      span = Math.abs(t - b);
      var m = t + Math.floor(span / 2);

      try {
        //if nothing has to be done return the positions as is
        if (board[m][colIdx].filled == true) {
          return null;
        } else if (board[t][colIdx].filled == true) {
          return null;
        } else if (board[t][colIdx].filled == false && board[b][colIdx].filled == false && //checks if the board is filled there
        board[t][colIdx - 1].type !== 'H' && board[b][colIdx - 1] !== 'H') {
          //checks the bounds to make sure hall is not in the empty spaces
          // console.log('returning original')
          return [t, b];
        } else {
          while ((board[t][colIdx].filled == true || board[b][colIdx].filled == true || board[t][colIdx - 1].type !== 'H' && board[b][colIdx - 1].type !== 'H') && counter < 3 && span > 3) {
            // console.log('reducing')
            //top is occupied, reduce by a quarter of current span, usually just 1 because rooms are small right now
            if (board[t][colIdx].filled == true) {
              t = t + 1;
            } //bot is occupied,  reduce by a quarter of current span, usually just 1 because rooms are small right now


            if (board[b][colIdx].filled == true) {
              b = b - 1;
            } //return the updated positions if the positions are not filled


            if (board[t][colIdx].filled == false && board[b][colIdx].filled == false && originalT >= t && t < b && span > 3 && board[t][colIdx - 1].type !== 'H' && board[b][colIdx - 1].type !== 'H') {
              return [t, b];
            } //update the span


            span = Math.abs(t - b); //update counter

            counter += 1;
          }
        }
      } catch (e) {
        console.log('row position is null with top:${t} and bottom: ${b}');
        return null;
      }

      return null;
    } //methods for the left

  }, {
    key: "leftColPositions",
    value: function leftColPositions(callback) {
      var colSpan = arguments[0];
      var rowIdx = arguments[1];
      var board = arguments[2];
      var l = colSpan[0]; //l would be what would change

      var r = colSpan[1]; //r would be the starting position

      var counter = 0;
      var span = Math.abs(l - r);
      var m = l + Math.floor(span / 2);

      try {
        if (board[rowIdx][m].filled == true) {
          return null;
        } else if (board[rowIdx][r - 2].type == 'H') {
          return null;
        } else if (board[rowIdx][l].filled == false) {
          return [l, r];
        } else {
          while (board[rowIdx][l].filled == true && counter < 3 && span > 3) {
            //reduce l by a quarter of current span each time
            l = l + Math.floor(span / 4);

            if (board[rowIdx][l].filled == false && span > 3) {
              return [l, r];
            }

            span = Math.abs(l - r);
            counter += 1;
          }
        }
      } catch (e) {
        console.log('column position is null with', l, r);
      }

      return null;
    }
  }, {
    key: "leftRowPositions",
    value: function leftRowPositions(callback) {
      var rowSpan = arguments[0];
      var colIdx = arguments[1] - 1; //get offset so not looking at hall

      var board = arguments[2]; //get top and bottom

      var t = rowSpan[0];
      var b = rowSpan[1]; //create copies to check reduction bounds

      var originalT = t; //counter for a quit if the room cannot be created with the max amount of tries

      var counter = 0;
      var span = Math.abs(t - b); //reduce by more than a half because of offsets

      t = t - Math.floor(span / 3);
      b = b - Math.floor(span / 3); //update the span

      span = Math.abs(t - b);
      var m = t + Math.floor(span / 2);

      try {
        //if nothing has to be done return the positions as is
        if (board[m][colIdx].filled == true) {
          return null;
        } else if (board[t][colIdx].filled == true) {
          return null;
        } else if (board[t][colIdx].filled == false && board[b][colIdx].filled == false && board[t][colIdx + 1].type !== 'H' && board[b][colIdx + 1].type !== 'H') {
          //checks the bounds to make sure hall is not in the empty spaces
          // console.log('returning original')
          return [t, b];
        } else {
          while ((board[t][colIdx].filled == true || board[b][colIdx].filled == true || board[t][colIdx + 1].type !== 'H' || board[b][colIdx + 1].type !== 'H') && counter < 3 && span > 3) {
            //console.log('reducing')
            //top is occupied, reduce by a quarter of current span, usually just 1 because rooms are small right now
            if (board[t][colIdx].filled == true) {
              t = t + 1;
            } //bot is occupied,  reduce by a quarter of current span, usually just 1 because rooms are small right now


            if (board[b][colIdx].filled == true) {
              b = b - 1;
            } //return the updated positions if the positions are not filled


            if (board[t][colIdx].filled == false && board[b][colIdx].filled == false && originalT >= t && t < b && span > 3 && board[t][colIdx + 1].type !== 'H' && board[b][colIdx + 1].type !== 'H') {
              return [t, b];
            } //update the span


            span = Math.abs(t - b); //update counter

            counter += 1;
          }
        }
      } catch (e) {
        console.log('row position is null with top:${t} and bottom: ${b}');
        return null;
      }

      return null;
    } //methods for the top

  }, {
    key: "topColPositions",
    value: function topColPositions(callback) {
      var colSpan = arguments[0];
      var rowIdx = arguments[1] - 1; //get offset so not looking at hall

      var board = arguments[2]; //get top and bottom

      var l = colSpan[0];
      var r = colSpan[1]; //create copies to check reduction bounds

      var originalL = l; //counter for a quit if the room cannot be created with the max amount of tries

      var counter = 0;
      var span = Math.abs(l - r); //reduce by more than a half because of offsets

      l = l - Math.floor(span / 3);
      r = r - Math.floor(span / 3); //update the span

      span = Math.abs(l - r);

      try {
        if (board[rowIdx + 1][l].type == 'H' || board[rowIdx + 1][r].type == 'H') {
          return null;
        } else if (board[rowIdx][l].filled == false && board[rowIdx][r].filled == false && board[rowIdx + 1][l].type != 'H' && board[rowIdx + 1][r].filled != 'H') {
          //checks the bounds to make sure hall is not in the empty spaces
          // console.log('returning original')
          return [l, r];
        } else {
          while ((board[l][rowIdx].filled == true || board[r][rowIdx].filled == true || board[rowIdx + 1][l].type !== 'H' || board[rowIdx + 1][r].type !== 'H') && counter < 3 && span > 3) {
            // console.log('reducing')
            //top is occupied, reduce by a quarter of current span, usually just 1 because rooms are small right now
            if (board[rowIdx][l].filled == true) {
              l = l + 1;
            } //bot is occupied,  reduce by a quarter of current span, usually just 1 because rooms are small right now


            if (board[rowIdx][r].filled == true) {
              r = r - 1;
            } //return the updated positions if the positions are not filled


            if (board[rowIdx][l].filled == false && board[rowIdx][r].filled == false && originalL >= l && l < r && span > 3 && board[rowIdx + 1][l].type != 'H' && board[rowIdx + 1][r].filled != 'H') {
              return [l, r];
            } //update the span


            span = Math.abs(l - r); //update counter

            counter += 1;
          }
        }
      } catch (e) {
        console.log('row position is null with top:${t} and bottom: ${b}');
        return null;
      }

      return null;
    }
  }, {
    key: "topRowPositions",
    value: function topRowPositions(callback) {
      var rowSpan = arguments[0];
      var colIdx = arguments[1];
      var board = arguments[2];
      var t = rowSpan[0]; //l would be what would change

      var b = rowSpan[1]; //r would be the starting position

      var counter = 0;
      var span = Math.abs(t - b);

      try {
        if (board[b - 2][colIdx].filled == true) {
          return null;
        } else if (board[t][colIdx].filled == false) {
          return [t, b];
        } else {
          while (board[t][colIdx].filled == true && counter < 3 && span > 3) {
            // console.log('reducing')
            //reduce l by a quarter of current span each time
            t = t + Math.floor(span / 4);

            if (board[t][colIdx].filled == false && span > 3) {
              return [t, b];
            }

            span = Math.abs(t - b);
            counter += 1;
          }
        }
      } catch (e) {
        console.log('column position is null with', t, b);
        return null;
      }

      return null;
    } //methods for the bottom

  }, {
    key: "botColPositions",
    value: function botColPositions(callback) {
      var colSpan = arguments[0];
      var rowIdx = arguments[1] + 1; //get offset so not looking at hall

      var board = arguments[2]; //get top and bottom

      var l = colSpan[0];
      var r = colSpan[1]; //create copies to check reduction bounds

      var originalL = l; //counter for a quit if the room cannot be created with the max amount of tries

      var counter = 0;
      var span = Math.abs(l - r); //reduce by more than a half because of offsets

      l = l - Math.floor(span / 3);
      r = r - Math.floor(span / 3); //update the span

      span = Math.abs(l - r);
      var m = l + Math.floor(span / 2);

      try {
        if (board[rowIdx][m].filled == true) {
          return null;
        } else if (board[rowIdx][l].filled == false && board[rowIdx][r].filled == false && board[rowIdx - 1][l].type != 'H' && board[rowIdx - 1][r].filled != 'H') {
          //checks the bounds to make sure hall is not in the empty spaces
          // console.log('returning original')
          return [l, r];
        } else {
          while ((board[l][rowIdx].filled == true || board[r][rowIdx].filled == true) && board[rowIdx - 1][l].type !== 'H' && board[rowIdx - 1][r].type !== 'H' && counter < 3 && span > 4) {
            // console.log('reducing')
            //top is occupied, reduce by a quarter of current span, usually just 1 because rooms are small right now
            if (board[rowIdx][l].filled == true) {
              l = l + 1;
            } //bot is occupied,  reduce by a quarter of current span, usually just 1 because rooms are small right now


            if (board[rowIdx][r].filled == true) {
              r = r - 1;
            } //return the updated positions if the positions are not filled


            if (board[rowIdx][l].filled == false && board[rowIdx][r].filled == false && originalL >= l && l < r && span > 4 && board[rowIdx - 1][l].type != 'H' && board[rowIdx - 1][r].filled != 'H') {
              return [l, r];
            } //update the span


            span = Math.abs(l - r); //update counter

            counter += 1;
          }
        }
      } catch (e) {
        console.log('Stopped creating rows');
        return null;
      }

      return null;
    }
  }, {
    key: "botRowPositions",
    value: function botRowPositions(callback) {
      var rowSpan = arguments[0];
      var colIdx = arguments[1];
      var board = arguments[2];
      var t = rowSpan[0]; //l would be what would change

      var b = rowSpan[1]; //r would be the starting position

      var counter = 0;
      var span = Math.abs(t - b);
      var m = t + Math.floor(span / 2);

      try {
        if (board[m][colIdx].filled == true) {
          return null;
        }

        if (board[t + 1][colIdx].filled == true) {
          return null;
        } else if (board[b][colIdx].filled == false) {
          return [t, b];
        } else {
          while (board[b][colIdx].filled == true && counter < 3 && span > 3) {
            // console.log('reducing')
            //reduce l by a quarter of current span each time
            b = b - Math.floor(span / 4);

            if (board[b][colIdx].filled == false && span > 3) {
              return [t, b];
            }

            span = Math.abs(t - b);
            counter += 1;
          }
        }
      } catch (e) {
        console.log('column position is null with', t, b);
        return null;
      }

      return null;
    } //goes to generateRoom for generateRooms()

  }, {
    key: "generateRoom",
    value: function generateRoom(rowcallback, colcallback, rowSpan, colSpan, direction) {
      var board = this.board; //Generation of the rows and columns

      var rowPosition = rowcallback(rowSpan, colSpan[0], board);
      var colPosition = colcallback(colSpan, rowSpan[0], board);

      if (rowPosition == null || colPosition == null) {
        return null;
      }

      var rowSize = Math.abs(rowPosition[1] - rowPosition[0]);
      var colSize = Math.abs(colPosition[1] - colPosition[0]);

      if (rowSize < 5 || colSize < 5) {
        return null;
      }

      var position = [rowPosition[0], colPosition[0]];
      var room = new _room__WEBPACK_IMPORTED_MODULE_2__["Room"](colSize, rowSize);
      var halls = this.generateHalls(1);

      for (var i = 0; i < halls.length; i++) {
        if (halls[i] == direction) {
          continue;
        }

        room.buildCooridor(halls[i]);
      }

      room.changePosition(position);
      return room;
    } //where all rooms are generatred and created, the first room generated will have a large impact on the other rooms created

  }, {
    key: "generateRooms",
    value: function generateRooms(node) {
      var halls = node.halls;
      var len = halls.length;
      var rooms = [];
      var newRoom = null;
      var removedHalls = [];

      for (var i = 0; i < len; i++) {
        var roomSize = this.randomSize(5, 7);
        var rowStart = halls[i].position[0];
        var colStart = halls[i].position[1];

        switch (halls[i].direction) {
          case 'r':
            //the -1 is to offset the side on the top
            var rowSpan = [rowStart - 1, rowStart + roomSize[0] - 1]; //dont need to offset the col because the hall connect what would be the blank space

            var colSpan = [colStart, colStart + roomSize[1]];

            try {
              newRoom = this.generateRoom(this.rightRowPositions, this.rightColPositions, rowSpan, colSpan, 'l');

              if (newRoom == null) {
                removedHalls.push(halls[i]);
                continue;
              }

              rooms.push(newRoom);
            } catch (e) {
              console.log('room is null');
            }

            break;

          case 'l':
            //the -1 is to offset the side on the top
            var rowSpan = [rowStart - 1, rowStart + roomSize[0] - 1]; //dont need to offset the col because the hall connect what would be the blank space

            var colSpan = [colStart - roomSize[1] + 1, colStart + 1];

            try {
              newRoom = this.generateRoom(this.leftRowPositions, this.leftColPositions, rowSpan, colSpan, 'r');

              if (newRoom == null) {
                removedHalls.push(halls[i]);
                continue;
              }

              rooms.push(newRoom);
            } catch (e) {
              console.log('room is null');
            }

            break;

          case 't':
            // the -1 is to offset the side on the top
            var rowSpan = [rowStart - roomSize[0] + 1, rowStart + 1]; //dont need to offset the col because the hall connect what would be the blank space

            var colSpan = [colStart - 1, colStart + roomSize[1] - 1];

            try {
              newRoom = this.generateRoom(this.topRowPositions, this.topColPositions, rowSpan, colSpan, 'b');

              if (newRoom == null) {
                removedHalls.push(halls[i]);
                continue;
              }

              rooms.push(newRoom);
            } catch (e) {
              console.log('room is null');
            }

            break;

          case 'b':
            //the -1 is to offset the side on the top
            var rowSpan = [rowStart, rowStart + roomSize[0]]; //dont need to offset the col because the hall connect what would be the blank space

            var colSpan = [colStart - 1, colStart + roomSize[1] - 1];

            try {
              newRoom = this.generateRoom(this.botRowPositions, this.botColPositions, rowSpan, colSpan, 't');

              if (newRoom == null) {
                removedHalls.push(halls[i]);
                continue;
              }

              rooms.push(newRoom);
            } catch (e) {
              console.log('room is null');
            }

            break;

          default:
            break;
        }
      }

      for (var i = 0; i < removedHalls.length; i++) {
        this.removedHalls.push(new _room__WEBPACK_IMPORTED_MODULE_2__["Node"]('-', removedHalls[i].position));
      }

      return rooms;
    }
  }, {
    key: "generateHalls",
    value: function generateHalls(num) {
      var hallDirections = ['l', 'r', 't', 'b'];
      var randomDirs = [];
      var counter = num;

      while (counter > -1) {
        var idx = Math.floor(Math.random() * hallDirections.length + 0);
        randomDirs.push(hallDirections[idx]);
        hallDirections.splice(idx, 1);
        counter -= 1;
      }

      return randomDirs;
    }
  }, {
    key: "randomSize",
    value: function randomSize(min, max) {
      var length = Math.floor(Math.random() * max + min);
      var width = Math.floor(Math.random() * max + min);
      var arr = [length, width];
      return arr;
    }
  }, {
    key: "placeRoom",
    value: function placeRoom(room) {
      //where position is based on row, col for map
      var rowLength = room.width;
      var colLength = room.height;

      for (var i = 0; i < rowLength; i++) {
        for (var j = 0; j < colLength; j++) {
          var row = room.contents[i][j].position[0];
          var col = room.contents[i][j].position[1];

          if (this.board[row][col].filled == false) {
            this.board[row][col] = room.contents[i][j];
            this.board[row][col].filled = true;

            if (room.contents[i][j].type == 'L' || room.contents[i][j].type == 'H') {
              this.playerMovable.push([row, col]);
            }
          } //this will combine the rooms into one bigger room
          else if ((this.board[row][col].type === 'X' || this.board[row][col].type === 'C' || this.board[row][col].type === 'H') && room.contents[i][j].type == 'L') {
              this.board[row][col] = room.contents[i][j];
              this.playerMovable.push([row, col]);
              this.board[row][col].filled = true;
            }
        }
      }
    }
  }, {
    key: "playerSquares",
    get: function get() {
      return this.playerMovable;
    }
  }, {
    key: "contents",
    get: function get() {
      return this.board;
    }
  }]);

  return Map;
}();

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ }),

/***/ "./pages/room.js":
/*!***********************!*\
  !*** ./pages/room.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"));

var Node =
/*#__PURE__*/
function () {
  //how the room itself views the node
  //will eventually put how the level itself views the
  function Node(roomWalls, position) {
    (0, _classCallCheck2["default"])(this, Node);
    this.type = null;
    this.roomView = roomWalls; //position is [row, col] based

    this.position = position;
    this.filled = false; //only used for a subset of the nodes, the hallways

    this.direction = '';
    this.unit = ''; //empty tile

    if (this.roomView == '-') {
      this.type = '-';
    } //means its a hallway/cooridor
    else if (this.roomView == 'H') {
        this.type = 'H';
      } else if (this.roomView.corner) {
        //corner
        this.type = 'C';
      } //sides of the room
      else if (this.roomView.left || this.roomView.right || this.roomView.bottom || this.roomView.top) {
          //
          this.type = 'X';
        } //the middle of the room
        else {
            this.type = 'L';
          }

    this.left = false;
    this.right = false;
    this.top = false;
    this.bottom = false;
    this.determineBarriers();
  }

  (0, _createClass2["default"])(Node, [{
    key: "determineBarriers",
    value: function determineBarriers() {
      switch (this.type) {
        case 'O':
          this.fillAll();
          break;

        case 'X':
          this.fillAll();

        case 'C':
          this.fillAll();

        default:
          this.fillNone();
      }
    }
  }, {
    key: "fillAll",
    value: function fillAll() {
      this.left = true;
      this.right = true;
      this.bottom = true;
      this.top = true;
      this.filled = true;
    }
  }, {
    key: "fillNone",
    value: function fillNone() {
      this.left = false;
      this.right = false;
      this.bottom = false;
      this.top = false;
      this.filled = false;
    } //the room itself will create a cooridor from the nodes

  }, {
    key: "createCooridor",
    value: function createCooridor(direction) {
      //input is char for the direction 
      switch (direction) {
        case 'l':
          this.left = false;
          this.right = true;
          this.bottom = true;
          this.top = true;
          this.filled = false;

        case 'r':
          this.left = true;
          this.right = false;
          this.bottom = true;
          this.top = true;
          this.filled = false;

        case 't':
          this.left = true;
          this.right = true;
          this.bottom = true;
          this.top = false;
          this.filled = false;

        case 'b':
          this.left = true;
          this.right = true;
          this.bottom = false;
          this.top = true;
          this.filled = false;

        default:
          break;
      }
    }
  }]);
  return Node;
}();

var Room =
/*#__PURE__*/
function () {
  //default values for length and height
  function Room() {
    var height = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
    var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
    var parentHall = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    (0, _classCallCheck2["default"])(this, Room);
    //startingPoint is the [row, col]
    this.height = height;
    this.width = width; //the cooridor will decide starting position if there is a parent node with a cooridor being input
    //will overwrite the parents left, right, bottom, or top x and c's depending 

    this.parentHall = parentHall;

    if (this.parentCooridor != null) {} //a list of all the nodes that can put a cooridor


    this.viableSides = {
      left: [],
      right: [],
      top: [],
      bottom: []
    };
    this.visited = false; //construct the room with halls

    this.halls = [];
    this.removedHalls = [];
    this.roomContents = this.constructRoom();
  }

  (0, _createClass2["default"])(Room, [{
    key: "constructRoom",
    value: function constructRoom() {
      var roomArea = [];
      this.constructFirstRoom(roomArea);
      return roomArea;
    }
  }, {
    key: "constructFirstRoom",
    value: function constructFirstRoom(area) {
      for (var i = 0; i < this.width; i++) //row
      {
        var roomRow = [];

        for (var j = 0; j < this.height; j++) //col
        {
          //get all the logic for the walls
          var wallBooleans = this.isWall(i, j); //assign viable indices to reference later when buildling cooridors

          this.buildViableCooridors(wallBooleans, [i, j]); //create roomnodes that are 

          var roomNode = new Node(wallBooleans, [i, j]);
          roomRow.push(roomNode);
        }

        area.push(roomRow);
      }
    } //record indices that can place a cooridor in the room

  }, {
    key: "buildViableCooridors",
    value: function buildViableCooridors(wall, position) {
      if (!wall.corner) {
        if (wall.top) {
          this.viableSides.top.push(position);
        } else if (wall.bottom) {
          this.viableSides.bottom.push(position);
        } else if (wall.right) {
          this.viableSides.right.push(position);
        } else if (wall.left) {
          this.viableSides.left.push(position);
        }
      }
    }
  }, {
    key: "isWall",
    value: function isWall(row, col) {
      //all directions walls are in
      // const isLeft = (col == 0 && row < this.width)
      // const isRight = (col == this.height - 1 && row < this.width)
      // const isTop = (col < this.height - 1 && row == 0)
      // const isBottom = (row == this.height)
      var isTop = row == 0;
      var isBottom = row == this.width - 1;
      var isLeft = col == 0;
      var isRight = col == this.height - 1; //corner cases

      var isTopLeft = isLeft && isTop;
      var isTopRight = isRight && isTop;
      var isBottomLeft = isLeft && isBottom;
      var isBottomRight = isRight && isBottom;
      var isCorner = isTopLeft || isTopRight || isBottomLeft || isBottomRight;
      return {
        right: isRight,
        left: isLeft,
        top: isTop,
        bottom: isBottom,
        topLeft: isTopLeft,
        topRight: isTopRight,
        bottomLeft: isBottomLeft,
        bottomRight: isBottomRight,
        corner: isCorner,
        cooridor: false
      };
    }
  }, {
    key: "updatePosition",
    value: function updatePosition(position) {
      for (var i = 0; i < this.width; i++) {
        for (var j = 0; j < this.height; j++) {
          this.roomContents[i][j].position = [this.roomContents[i][j].position[0] + position[0], this.roomContents[i][j].position[1] + position[1]];
        }
      }
    }
  }, {
    key: "updateSide",
    value: function updateSide(key, position) {
      var newArr = [];

      for (var ele in this.viableSides[key]) {
        newArr.push([ele[0] + position[0], ele[1] + position[1]]);
      }

      this.viableSides[key] = newArr;
    }
  }, {
    key: "changePosition",
    value: function changePosition(position) {
      //where position is the position of the whole map wanted, will be from top left starting
      this.updatePosition(position);
    }
  }, {
    key: "buildCooridor",
    value: function buildCooridor(direction) {
      //direction is the input from map that will 
      //determine where to put something
      //builds a cooridor where the x was
      //choose from random position
      var randomPosition = null;

      switch (direction) {
        case 'l':
          randomPosition = this.viableSides.left.random();
          break;

        case 'r':
          randomPosition = this.viableSides.right.random();
          break;

        case 't':
          randomPosition = this.viableSides.top.random();
          break;

        case 'b':
          randomPosition = this.viableSides.bottom.random();
          break;

        default:
          break;
      }

      if (randomPosition == null) {
        return;
      }

      var row = randomPosition[0];
      var col = randomPosition[1]; //take the roomView attribute of the node
      //create the node and reference which direction it is to the room

      var cooridorNode = new Node('H', [row, col]);
      cooridorNode.createCooridor(direction);
      cooridorNode.direction = direction;
      this.halls.push(cooridorNode); //assign back to the room

      this.roomContents[row][col] = cooridorNode;
    } //rooms could be different size, so go off the smaller room for merging

  }, {
    key: "contents",
    get: function get() {
      return this.roomContents;
    }
  }]);
  return Room;
}(); //from https://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array, because looked simple and elegant


Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

module.exports = {
  Room: Room,
  Node: Node
};

/***/ }),

/***/ "./pages/square.js":
/*!*************************!*\
  !*** ./pages/square.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\Programming\\Dungeon Crawler\\pages\\square.js";
 //a 10x10 square when border is included

var squareStyle = {
  fontSize: 0,
  letterSpacing: '-1px',
  display: 'inline-block'
};

function Square(props) {
  var position = {
    left: props.x + 'px',
    top: props.y + 'px',
    width: props.size + 'px',
    height: props.size + 'px',
    position: props.pos || 'static',
    backgroundColor: props.color
  };
  var node = props.node;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(squareStyle, position),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Square);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Programming\Dungeon Crawler\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map