webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _square__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./square */ "./pages/square.js");






var _jsxFileName = "D:\\Programming\\Dungeon Crawler\\pages\\level.js";



var screen = {
  width: '1000px',
  height: '600px',
  backgroundColor: 'grey',
  margin: '0 auto'
};
var squareContainer = {
  margin: '0 auto',
  position: 'relative',
  top: '10%',
  width: '70%',
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

    _this.board = new _map__WEBPACK_IMPORTED_MODULE_6__["default"]([5, 50], 80, 50);
    _this.pixelSize = 8;
    _this.arr2d = _this.board.contents;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Level, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var squares = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(this.arr2d).map(function (el, i) {
        var offsetY = i * _this2.pixelSize;

        var single = _this2.arr2d[el].map(function (sub_el, j) {
          var offsetX = j * _this2.pixelSize;

          if (sub_el == 'O') {
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_square__WEBPACK_IMPORTED_MODULE_8__["default"], {
              x: offsetX,
              y: offsetY,
              size: _this2.pixelSize,
              color: "white",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              },
              __self: this
            });
          } else {
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_square__WEBPACK_IMPORTED_MODULE_8__["default"], {
              x: offsetX,
              y: offsetY,
              size: _this2.pixelSize,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 47
              },
              __self: this
            });
          }
        });

        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: squareContainer,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, " ", single);
      });

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: screen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, squares);
    }
  }]);

  return Level;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Level);

/***/ })

})
//# sourceMappingURL=index.js.1c6e574e904bb78edb15.hot-update.js.map