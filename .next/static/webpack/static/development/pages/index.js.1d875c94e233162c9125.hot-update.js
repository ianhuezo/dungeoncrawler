webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/map.js":
/*!**********************!*\
  !*** ./pages/map.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _room__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./room */ "./pages/room.js");
/* harmony import */ var _room__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_room__WEBPACK_IMPORTED_MODULE_3__);





var Map =
/*#__PURE__*/
function () {
  function Map(boardWidth, boardlength) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Map);

    //describes the boards with relative to amount of squares
    this.width = boardWidth;
    this.height = boardlength;
    this.clearedBoard = []; //initialize the board with a clear state

    this.clear();
    this.board = this.clearedBoard;
    this.roomCounter = 8;
    this.createRooms(this.roomCounter);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Map, [{
    key: "clear",
    value: function clear() {
      for (var i = 0; i < this.height; i++) {
        var arr = [];

        for (var j = 0; j < this.width; j++) {
          var emptyNodes = new _room__WEBPACK_IMPORTED_MODULE_3__["Node"]('-', [i, j]);
          arr.push(emptyNodes);
        }

        this.clearedBoard.push(arr);
      }
    }
  }, {
    key: "createRooms",
    value: function createRooms(roomNumber) {
      var roomCount = roomNumber;
      var randomSize = this.randomSize(5, 7);
      var roomNode = new _room__WEBPACK_IMPORTED_MODULE_3__["Room"](randomSize[0], randomSize[1]); // //create some halls

      var halls = this.generateHalls(2); //initialize queue

      var position = [25, 40];
      var halls = this.generateHalls(2);

      for (var i = 0; i < halls.length; i++) {
        roomNode.buildCooridor(halls[i]);
      }

      roomNode.changePosition(position);
      roomNode.visited = true;
      this.placeRoom(roomNode);
      var queue = [];
      queue.push(roomNode);
      var randomCount = 5;

      while (queue.length) {
        var node = queue.shift(0);

        if (node) {
          var rooms = this.generateRooms(node);

          for (var i = 0; i < rooms.length; i++) {
            this.placeRoom(rooms[i]);
            queue.push(rooms[i]);
          }

          randomCount -= 1;
        }

        randomCount -= 1;
      }
    } //methods for the right

  }, {
    key: "searchRightColPosition",
    value: function searchRightColPosition(rowIdx, colSpan) {
      var l = colSpan[0];
      var r = colSpan[1];
      var span = r - l;
      var counter = 0; //if the index is not filled then you're fine, return r

      if (this.board[rowIdx][r].filled == false) {
        return [l, r];
      } //else if its a bad index binary search for a good one unless there isn't one
      else {
          while (this.board[rowIdx][r].filled == true && counter < 3) {
            var half = Math.floor(span / 2 + l);
            console.log('Right col is readjusting...');

            if (this.board[rowIdx][half].filled == false) {
              return [l, half];
            } else {
              span = half - 1;
            }

            counter += 1;
          }
        }

      return null;
    } //shared method for both left and right

  }, {
    key: "searchTopBottomRowPosition",
    value: function searchTopBottomRowPosition(rowSpan, colIdx) {
      //returns an array of the top and bottom indices for the rows
      var t = rowSpan[0] + 1;
      var b = rowSpan[1] + 1; //the span of the rows

      var span = Math.abs(t - b); //offset by half

      t = t - Math.floor(span / 3);

      if (t < 0) {
        t = 0;
      }

      b = b - Math.floor(span / 3);
      var counter = 0; //search both top and bottom for a good offset

      if (this.board[t][colIdx].filled == false && this.board[b][colIdx].filled == false) {
        return [t, b];
      } //quarters
      else {
          while (this.board[t][colIdx].filled == false && this.board[b][colIdx].filled == false && counter < 3) {
            console.log('Top Bottom is readjusting...');
            var topQuartile = Math.ceil(span / 4 + t); //because bottom is lower in count...

            var bottomQuartile = Math.ceil(b - span / 4);

            if (this.board[topQuartile][colIdx].filled == true && this.board[bottomQuartile][colIdx].filled == true) {
              return [topQuartile, bottomQuartile];
            } //could be more complex statements  depending on the dungeon I decide
            else {
                t = Math.ceil(span / 4 + t) + 1;
                b = Math.ceil(b - span / 4) - 1;
              }

            counter += 1;
          }
        }

      return null;
    }
  }, {
    key: "placeRight",
    value: function placeRight(pos, dir) {
      //need to account for the offset from the non filled room
      pos = [pos[0] - 1, pos[1]];
      var roomSize = this.randomSize(5, 7);
      var rowSpan = [pos[0], pos[0] + roomSize[0]];
      var colSpan = [pos[1], pos[1] + roomSize[1]]; //the positions returned are the span of the element indices

      var colPosition = this.searchRightColPosition(pos[0], colSpan); //add 1 to cols to avoid looking at the hall's positions

      var rowPosition = this.searchTopBottomRowPosition(rowSpan, pos[1] + 1);

      if (rowSize < 4 || colSize < 4 || rowPosition == null || colPosition == null) {
        return null;
      } //position from the top left


      var rowSize = Math.abs(rowPosition[1] - rowPosition[0]);
      var colSize = Math.abs(colPosition[1] - colPosition[0]);
      var room = new _room__WEBPACK_IMPORTED_MODULE_3__["Room"](rowSize, colSize); //position the room

      var newPosition = [rowPosition[0], colPosition[0]];
      var halls = this.generateHalls(2);

      for (var i = 0; i < halls.length; i++) {
        if (halls[i] == dir || this.roomCounter == 0) {
          continue;
        }

        room.buildCooridor(halls[i]);
        this.roomCounter -= 1;
      }

      room.changePosition(newPosition);
      return room;
    } //Methods for the left

  }, {
    key: "searchLeftColPosition",
    value: function searchLeftColPosition(rowIdx, colSpan) {
      var l = Math.abs(Math.floor(colSpan[0]));
      var r = Math.abs(Math.floor(colSpan[1]));
      var span = Math.abs(r - l);
      var counter = 0; //if the index at l is not filled then you're fine, return

      try {
        if (this.board[rowIdx][l].filled == false) {
          return [l, r];
        } //else if its a bad index binary search for a good one unless there isn't one
        else {
            while (this.board[rowIdx][r].filled == true && counter < 3) {
              var half = Math.floor(span / 4 + l);
              console.log('Left col is readjusting...');

              if (this.board[rowIdx][half].filled == false) {
                return [l, half];
              } else {
                span = (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("span"), half - 1);
              }

              counter += 1;
            }
          }

        return null;
      } catch (e) {
        console.log(rowIdx, l, r);
      }
    }
  }, {
    key: "placeLeft",
    value: function placeLeft(pos, dir) {
      //create the offsets for position and create the roomsize
      var offset = [pos[0] - 1, pos[1]];
      var roomSize = this.randomSize(5, 7);
      var rowSpan = [offset[0], offset[0] + roomSize[1]];
      var colSpan = [offset[1] - roomSize[1] + 1, offset[1]]; //the positions returned are the span of the element indices

      var colPosition = this.searchLeftColPosition(rowSpan[0], colSpan);
      var rowPosition = this.searchTopBottomRowPosition(rowSpan, pos[1] + 1);

      if (rowSize < 4 || colSize < 4 || rowPosition == null || colPosition == null) {
        return null;
      }

      var rowSize = Math.abs(rowPosition[1] - rowPosition[0]);
      var colSize = Math.abs(colPosition[1] - colPosition[0]); //create and place the final room

      var room = new _room__WEBPACK_IMPORTED_MODULE_3__["Room"](rowSize, colSize);
      var position = [rowPosition[0], colPosition[0]];
      var halls = this.generateHalls(2);

      for (var i = 0; i < halls.length; i++) {
        if (halls[i] == dir || this.roomCounter == 0) {
          continue;
        }

        room.buildCooridor(halls[i]);
        this.roomCounter -= 1;
      }

      room.changePosition(position);
      return room;
    } //top logic 

  }, {
    key: "placeTop",
    value: function placeTop(pos, dir) {
      //create the offsets for position and create the roomsize
      var offset = [pos[0] + 1, pos[1]];
      var roomSize = this.randomSize(5, 7);
      var rowSpan = [offset[0] - roomSize[1], offset[0]];
      var colSpan = [offset[1], offset[1] + roomSize[1]]; //the positions returned are the span of the element indices

      var rowPosition = this.searchTopRowPosition(colSpan[0], rowSpan);
      var colPosition = this.searchLeftRightPosition(colSpan, rowSpan[0]);

      if (rowSize < 4 || colSize < 4 || rowPosition == null || colPosition == null) {
        return null;
      }

      var rowSize = Math.abs(rowPosition[1] - rowPosition[0]);
      var colSize = Math.abs(colPosition[1] - colPosition[0]);
      var room = new _room__WEBPACK_IMPORTED_MODULE_3__["Room"](rowSize, colSize);
      var halls = this.generateHalls(2);

      for (var i = 0; i < halls.length; i++) {
        if (halls[i] == dir || this.roomCounter == 0) {
          continue;
        }

        room.buildCooridor(halls[i]);
        this.roomCounter -= 1;
      }

      room.changePosition([rowPosition[0], colPosition[0]]);
      return room;
    }
  }, {
    key: "searchLeftRightPosition",
    value: function searchLeftRightPosition(colSpan, rowIdx) {
      var t = Math.abs(colSpan[0]);
      var b = Math.abs(colSpan[1]); //the span of the rows

      var span = Math.abs(t - b); //offset by half

      t = t - Math.floor(span / 3);
      b = b - Math.floor(span / 3);
      t = Math.abs(t);
      b = Math.abs(b);
      rowIdx = Math.abs(rowIdx);
      var counter = 0; //search both top and bottom for a good offset

      if (this.board[rowIdx][t].filled == false && this.board[rowIdx][b].filled == false) {
        return [t, b];
      } //quarters
      else {
          while (this.board[rowIdx][t].filled == false && this.board[rowIdx][b].filled == false && counter < 3) {
            var topQuartile = Math.ceil(span / 4 + t); //because bottom is lower in count...

            var bottomQuartile = Math.ceil(b - span / 4);

            if (this.board[rowIdx][topQuartile].filled == true && this.board[rowIdx][bottomQuartile].filled == true) {
              return [topQuartile, bottomQuartile];
            } //could be more complex statements  depending on the dungeon I decide
            else {
                t = Math.ceil(span / 4 + t) + 1;
                b = Math.ceil(b - span / 4) - 1;
              }

            counter += 1;
          }
        }

      return null;
    }
  }, {
    key: "searchTopRowPosition",
    value: function searchTopRowPosition(colIndex, rowSpan) {
      var l = Math.abs(Math.floor(rowSpan[0]));
      var r = Math.abs(Math.floor(rowSpan[1]));
      var span = Math.abs(l - r);
      var counter = 0; //if the index at l is not filled then you're fine, return 

      if (this.board[l][colIndex].filled == false) {
        return [l, r];
      } //else if its a bad index binary search for a good one unless there isn'l one
      else {
          while (this.board[l][colIndex].filled == true && counter < 3) {
            console.log('Top row is readjusting...');
            var half = Math.floor(l + span / 4);

            if (this.board[half][colIndex].filled == false) {
              return [half, r];
            } else {
              span = half + 1;
            }

            counter += 1;
          }
        }

      return null;
    }
  }, {
    key: "searchBottomRowPosition",
    value: function searchBottomRowPosition(colIndex, rowSpan) {
      var l = rowSpan[0];
      var r = rowSpan[1];
      var span = Math.abs(l - r);
      var counter = 0; //if the index at l is not filled then you're fine, return 

      if (this.board[r][colIndex].filled == false) {
        return [l, r];
      } //else if its a bad index binary search for a good one unless there isn'l one
      else {
          while (this.board[l][colIndex].filled == true && counter < 3) {
            var half = Math.floor(r - span / 4);
            console.log('Bottom row is readjusting...');

            if (this.board[half][colIndex].filled == false) {
              return [half, r];
            } else {
              span = half - 1;
            }

            counter += 1;
          }
        }

      return null;
    } //bottom room logic

  }, {
    key: "placeBottom",
    value: function placeBottom(pos, dir) {
      //create the offsets for position and create the roomsize
      var offset = [pos[0], pos[1]];
      var roomSize = this.randomSize(5, 7);
      var rowSpan = [offset[0], offset[0] + roomSize[0]];
      var colSpan = [offset[1], offset[1] + roomSize[1]]; //the positions returned are the span of the element indices

      var rowPosition = this.searchTopRowPosition(colSpan[0], rowSpan);
      var colPosition = this.searchLeftRightPosition(colSpan, rowSpan[0]);

      if (rowSize < 4 || colSize < 4 || rowPosition == null || colPosition == null) {
        return null;
      }

      var rowSize = Math.abs(rowPosition[1] - rowPosition[0]);
      var colSize = Math.abs(colPosition[1] - colPosition[0]);
      var room = new _room__WEBPACK_IMPORTED_MODULE_3__["Room"](rowSize, colSize);
      var halls = this.generateHalls(2);

      for (var i = 0; i < halls.length; i++) {
        if (halls[i] == dir || this.roomCounter == 0) {
          continue;
        }

        room.buildCooridor(halls[i]);
        this.roomCounter -= 1;
      }

      room.changePosition([rowPosition[0], colPosition[0]]);
      return room;
    } //where all rooms are generatred and created, the first room generated will have a large impact on the other rooms created

  }, {
    key: "generateRooms",
    value: function generateRooms(node) {
      var halls = node.halls;
      var len = halls.length;
      var rooms = [];
      var newRoom = null;

      for (var i = 0; i < len; i++) {
        switch (halls[i].direction) {
          case 'r':
            newRoom = this.placeRight(halls[i].position, 'l');

            if (newRoom) {
              newRoom.parentHall = halls[i];
              rooms.push(newRoom);
            } // else{
            //     //remove the cooridor because it's not viable
            //     this.roomCounter += 1
            //     node.removeCooridor(halls[i].direction)
            //     this.placeRoom(node)
            // }


            break;

          case 'l':
            newRoom = this.placeLeft(halls[i].position, 'r');

            if (newRoom) {
              newRoom.parentHall = halls[i];
              rooms.push(newRoom);
            } // else{
            //     //remove the cooridor because it's not viable
            //     this.roomCounter += 1
            //     node.removeCooridor(halls[i].direction)
            //     this.placeRoom(node)
            // }


            break;

          case 't':
            newRoom = this.placeTop(halls[i].position, 'b');

            if (newRoom) {
              newRoom.parentHall = halls[i];
              rooms.push(newRoom);
            } // else{
            //     //remove the cooridor because it's not viable
            //     this.roomCounter += 1
            //     node.removeCooridor(halls[i].direction)
            //     this.placeRoom(node)
            // }


            break;

          case 'b':
            newRoom = this.placeBottom(halls[i].position, 't');

            if (newRoom) {
              newRoom.parentHall = halls[i];
              rooms.push(newRoom);
            } // else{
            //     //remove the cooridor because it's not viable
            //     this.roomCounter += 1
            //     node.removeCooridor(halls[i].direction)
            //     this.placeRoom(node)
            // }


            break;

          default:
            break;
        }
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

          if (this.board[row][col].type !== 'H') {
            this.board[row][col] = room.contents[i][j];
            this.board[row][col].filled = true;
          } else {
            this.board[row][col].filled = true;
          }
        }
      }
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

/***/ })

})
//# sourceMappingURL=index.js.1d875c94e233162c9125.hot-update.js.map