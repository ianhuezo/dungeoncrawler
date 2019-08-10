webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var zlib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zlib */ "./node_modules/browserify-zlib/lib/index.js");
/* harmony import */ var zlib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(zlib__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\Programming\\Dungeon Crawler\\pages\\square.js";

 //a 10x10 square when border is included

var squareStyle = {
  border: '0.3px solid black',
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
    backgroundColor: props.color
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(squareStyle, position),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Square);

/***/ })

})
//# sourceMappingURL=index.js.2e810e7979349a9ebbca.hot-update.js.map