webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _room__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./room */ "./pages/room.js");
/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./level */ "./pages/level.js");
var _jsxFileName = "D:\\Programming\\Dungeon Crawler\\pages\\index.js";




function Home() {
  var room = new _room__WEBPACK_IMPORTED_MODULE_1__["default"](10, 10);
  room.buildCooridor('l');
  console.log(room.contents);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_level__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./pages/room.js":
/*!***********************!*\
  !*** ./pages/room.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");




var Node =
/*#__PURE__*/
function () {
  //how the room itself views the node
  //will eventually put how the level itself views the
  function Node(roomWalls, position) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Node);

    this.type = null;
    this.roomView = roomWalls; //position is [row, col] based

    this.position = position;
    this.nextPosition = null;
    this.filled = false;

    if (this.roomView == 'H') {
      //means its a hallway/cooridor
      this.type = 'H';
    } else if (this.roomView.corner) {
      //corner
      this.type = 'C';
    } //I don't allow corners to have rooms
    else if (this.roomView.left || this.roomView.right || this.roomView.bottom || this.roomView.top) {
        //
        this.type = 'X';
      } else {
        this.type = 'O';
      }

    this.left = false;
    this.right = false;
    this.top = false;
    this.bottom = false;
    this.determineBarriers();
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Node, [{
    key: "determineBarriers",
    value: function determineBarriers() {
      switch (this.type) {
        case 'O':
          this.fillAll();
          break;

        case 'X':
          this.fillNone();

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
    }
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
    var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : m_length;
    var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : m_width;
    var parentCooridor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Room);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "length", 10);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "width", 10);

    //startingPoint is the [row, col]
    this.length = length;
    this.width = width; //the cooridor will decide starting position if there is a parent node with a cooridor being input
    //will overwrite the parents left, right, bottom, or top x and c's depending 

    this.parent = parentCooridor;

    if (this.parentCooridor != null) {} //a list of all the nodes that can put a cooridor


    this.viableSides = {
      left: [],
      right: [],
      top: [],
      bottom: [] //construct the room with all of its nodes

    };
    this.roomContents = this.constructRoom();
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Room, [{
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

        for (var j = 0; j < this.length; j++) //col
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
        if (wall.left) {
          this.viableSides.left.push(position);
        } else if (wall.right) {
          this.viableSides.right.push(position);
        } else if (wall.top) {
          this.viableSides.top.push(position);
        } else if (wall.bottom) {
          this.viableSides.bottom.push(position);
        }
      }
    }
  }, {
    key: "isWall",
    value: function isWall(row, col) {
      //all directions walls are in
      var isLeft = col == 0 && row < this.length;
      var isRight = col == this.length - 1 && row < this.width;
      var isTop = row == 0;
      var isBottom = row == this.length - 1; //corner cases

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

        case 'r':
          randomPosition = this.viableSides.right.random();

        case 't':
          randomPosition = this.viableSides.top.random();

        case 'b':
          randomPosition = this.viableSides.bottom.random();

        default:
          break;
      }

      var row = randomPosition[0];
      var col = randomPosition[1];
      console.log("The random position is ", row, col); //take the roomView attribute of the node

      var cooridorNode = new Node('H', [row, col]);
      cooridorNode.createCooridor(direction); //changes the x to become a cooridor, H

      this.roomContents[col][row] = cooridorNode;
    } //rooms could be different size, so go off the smaller room for merging

  }, {
    key: "mergeRoom",
    value: function mergeRoom() {}
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

/* harmony default export */ __webpack_exports__["default"] = (Room);

/***/ })

})
//# sourceMappingURL=index.js.006b030f2e26cfc52780.hot-update.js.map