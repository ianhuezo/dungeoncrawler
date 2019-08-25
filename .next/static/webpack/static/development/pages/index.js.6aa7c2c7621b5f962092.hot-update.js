webpackHotUpdate("static\\development\\pages\\index.js",{

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
    this.removedHalls = []; //initialize the board with a clear state

    this.clear();
    this.board = this.clearedBoard;
    this.roomCounter = 8;
    this.createRooms(this.roomCounter);
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
    value: function createRooms(roomNumber) {
      var roomCount = roomNumber;
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
      var randomCount = 8;

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

      t = t - Math.floor(span / 3);
      b = b - Math.floor(span / 3); //update the span

      span = Math.abs(t - b);
      var m = t + Math.floor(span / 2);

      try {
        //if nothing has to be done return the positions as is
        if (board[m][colIdx].filled == true) {
          return null;
        } else if (board[t][colIdx].filled == false && board[b][colIdx].filled == false && //checks if the board is filled there
        board[t][colIdx - 1].type !== 'H' && board[b][colIdx - 1] !== 'H') {
          //checks the bounds to make sure hall is not in the empty spaces
          // console.log('returning original')
          return [t, b];
        } else {
          while ((board[t][colIdx].filled == true || board[b][colIdx].filled == true || board[t][colIdx - 1].type !== 'H' || board[b][colIdx - 1].type !== 'H') && counter < 3 && span > 3) {
            // console.log('reducing')
            //top is occupied, reduce by a quarter of current span, usually just 1 because rooms are small right now
            if (board[t][colIdx].filled == true) {
              t = t + Math.floor(span / 4);
            } //bot is occupied,  reduce by a quarter of current span, usually just 1 because rooms are small right now


            if (board[b][colIdx].filled == true) {
              b = b - Math.floor(span / 4);
            } //return the updated positions if the positions are not filled


            if (board[t][colIdx].filled == false && board[b][colIdx].filled == false && originalT >= t && t < b && span > 3) {
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
        } else if (board[t][colIdx].filled == false && board[b][colIdx].filled == false) {
          //checks the bounds to make sure hall is not in the empty spaces
          // console.log('returning original')
          return [t, b];
        } else {
          while ((board[t][colIdx].filled == true || board[b][colIdx].filled == true || board[t][colIdx + 1].type !== 'H' || board[b][colIdx + 1].type !== 'H') && counter < 3 && span > 3) {
            //console.log('reducing')
            //top is occupied, reduce by a quarter of current span, usually just 1 because rooms are small right now
            if (board[t][colIdx].filled == true) {
              t = t + Math.floor(span / 4);
            } //bot is occupied,  reduce by a quarter of current span, usually just 1 because rooms are small right now


            if (board[b][colIdx].filled == true) {
              b = b - Math.floor(span / 4);
            } //return the updated positions if the positions are not filled


            if (board[t][colIdx].filled == false && board[b][colIdx].filled == false && originalT >= t && t < b && span > 3) {
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
        if (board[rowIdx][l].filled == false && board[rowIdx][r].filled == false) {
          //checks the bounds to make sure hall is not in the empty spaces
          // console.log('returning original')
          return [l, r];
        } else {
          while ((board[l][rowIdx].filled == true || board[r][rowIdx].filled == true || board[rowIdx + 1][l].type !== 'H' || board[rowIdx + 1][r].type !== 'H') && counter < 3 && span > 3) {
            // console.log('reducing')
            //top is occupied, reduce by a quarter of current span, usually just 1 because rooms are small right now
            if (board[rowIdx][l].filled == true) {
              l = l + Math.floor(span / 4);
            } //bot is occupied,  reduce by a quarter of current span, usually just 1 because rooms are small right now


            if (board[rowIdx][r].filled == true) {
              r = r - Math.floor(span / 4);
            } //return the updated positions if the positions are not filled


            if (board[rowIdx][l].filled == false && board[rowIdx][r].filled == false && originalL >= l && l < r && span > 3) {
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
        //if nothing has to be done return the positions as is
        if (board[rowIdx][m].filled == true) {
          return null;
        } else if (board[rowIdx][l].filled == false && board[rowIdx][r].filled == false && board[rowIdx - 1][l].filled == false && board[rowIdx - 1][r].filled == false) {
          //checks the bounds to make sure hall is not in the empty spaces
          // console.log('returning original')
          return [l, r];
        } else {
          while ((board[l][rowIdx].filled == true || board[r][rowIdx].filled == true || board[rowIdx - 1][l].type !== 'H' || board[rowIdx - 1][r].type !== 'H') && counter < 3 && span > 3) {
            // console.log('reducing')
            //top is occupied, reduce by a quarter of current span, usually just 1 because rooms are small right now
            if (board[rowIdx][l].filled == true) {
              l = l + Math.floor(span / 4);
            } //bot is occupied,  reduce by a quarter of current span, usually just 1 because rooms are small right now


            if (board[rowIdx][r].filled == true) {
              r = r - Math.floor(span / 4);
            } //return the updated positions if the positions are not filled


            if (board[rowIdx][l].filled == false && board[rowIdx][r].filled == false && originalL >= l && l < r && span > 3) {
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

      if (rowSize < 4 || colSize < 4) {
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

          if (this.board[row][col].type !== 'H' && this.board[row][col].filled == false) {
            this.board[row][col] = room.contents[i][j];
            this.board[row][col].filled = true;
          } //this will combine the rooms into one bigger room
          else if ((this.board[row][col].type === 'X' || this.board[row][col].type === 'C' || this.board[row][col].type === 'H') && room.contents[i][j].type == 'L') {
              this.board[row][col] = room.contents[i][j];
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
//# sourceMappingURL=index.js.6aa7c2c7621b5f962092.hot-update.js.map