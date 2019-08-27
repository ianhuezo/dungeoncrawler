webpackHotUpdate("static\\development\\pages\\index.js",{

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

/***/ })

})
//# sourceMappingURL=index.js.23f1e964c9739388d5fc.hot-update.js.map