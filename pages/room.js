class Node{
    //how the room itself views the node
    //will eventually put how the level itself views the
    constructor(roomWalls, position){
        this.type = null;
        this.roomView = roomWalls
        //position is [row, col] based
        this.position = position
        this.filled = false
        //only used for a subset of the nodes, the hallways
        this.direction = ''
        
        //empty tile
        if(this.roomView == '-'){
            this.type = '-'
        }
        //means its a hallway/cooridor
        else if(this.roomView == 'H'){
            this.type = 'H';
        }
        else if(this.roomView.corner){
            //corner
            this.type = 'C';
        }
        //sides of the room
        else if(this.roomView.left || this.roomView.right || this.roomView.bottom || this.roomView.top){
            //
            this.type = 'X';
        }
        //the middle of the room
        else{
            this.type = 'L';
        }
        this.left = false;
        this.right = false;
        this.top = false;
        this.bottom = false;

        this.determineBarriers();

    }
    determineBarriers(){
        switch (this.type){
            case 'O':
                this.fillAll()
                break
            case 'X':
                this.fillAll()
            case 'C':
                this.fillAll()
            default:
                this.fillNone()
        }
    }

    fillAll(){
        this.left = true
        this.right = true
        this.bottom = true
        this.top = true
        this.filled = true
    }

    fillNone(){
        this.left = false
        this.right = false
        this.bottom = false
        this.top = false
        this.filled = false
    }
    //the room itself will create a cooridor from the nodes
    createCooridor(direction){
        //input is char for the direction 
        switch(direction){
            case 'l':
                this.left = false
                this.right = true
                this.bottom = true
                this.top = true
                this.filled = false
            case 'r':
                this.left = true
                this.right = false
                this.bottom = true
                this.top = true
                this.filled = false
            case 't':
                this.left = true
                this.right = true
                this.bottom = true
                this.top = false
                this.filled = false
            case 'b':
                this.left = true
                this.right = true
                this.bottom = false
                this.top = true
                this.filled = false
            default:
                break
        }
    }

}


class Room{
    //default values for length and height
    constructor(height = 10, width = 10,parentHall = null){
        //startingPoint is the [row, col]
        this.height = height;
        this.width = width;

        //the cooridor will decide starting position if there is a parent node with a cooridor being input
        //will overwrite the parents left, right, bottom, or top x and c's depending 
        this.parentHall = parentHall;
        if(this.parentCooridor != null){

        }
        //a list of all the nodes that can put a cooridor
        this.viableSides = {
            left : [],
            right: [],
            top: [],
            bottom: []
        }
        this.visited = false
        //construct the room with halls
        this.halls = []
        this.removedHalls = []
        this.roomContents = this.constructRoom();
    }
    constructRoom(){
       
        let roomArea = [];
        this.constructFirstRoom(roomArea)
        return roomArea;
    }

    get contents(){
        return this.roomContents;
    }


    constructFirstRoom(area){
        for (var i = 0; i < this.width; i++)//row
        {
            let roomRow = [];
            for(var j = 0; j < this.height; j++)//col
            {
                //get all the logic for the walls
                let wallBooleans = this.isWall(i, j);
                //assign viable indices to reference later when buildling cooridors
                this.buildViableCooridors(wallBooleans, [i,j])
                //create roomnodes that are 
                let roomNode = new Node(wallBooleans, [i,j])
                roomRow.push(roomNode);
            }
            area.push(roomRow);
        }
    }
    //record indices that can place a cooridor in the room
    buildViableCooridors(wall, position){
        if(!wall.corner){
            if(wall.top){
                this.viableSides.top.push(position)
            }
            else if(wall.bottom){
                this.viableSides.bottom.push(position)
            }
            else if(wall.right){
                this.viableSides.right.push(position)
            }
            else if(wall.left){
                this.viableSides.left.push(position)
            }

        }
    }

    isWall(row, col){
        //all directions walls are in
        // const isLeft = (col == 0 && row < this.width)
        // const isRight = (col == this.height - 1 && row < this.width)
        // const isTop = (col < this.height - 1 && row == 0)
        // const isBottom = (row == this.height)
        const isTop = (row == 0)
        const isBottom = (row == this.width - 1)
        const isLeft = (col == 0)
        const isRight = (col == this.height - 1)
        //corner cases
        const isTopLeft = isLeft && isTop;
        const isTopRight = isRight && isTop;
        const isBottomLeft = isLeft && isBottom;
        const isBottomRight = isRight && isBottom;
        const isCorner = (isTopLeft || isTopRight || isBottomLeft || isBottomRight);
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
        }
    }

    updatePosition(position){
        for(var i = 0; i < this.width; i++){
            for(var j = 0; j < this.height; j++){
                this.roomContents[i][j].position = [this.roomContents[i][j].position[0] + position[0],this.roomContents[i][j].position[1] + position[1]]
            }
        }
    }

    updateSide(key, position){
        var newArr = []
        for(var ele in this.viableSides[key]){
            newArr.push([ele[0] + position[0], ele[1] + position[1]])
        }
        this.viableSides[key] = newArr
    }

    changePosition(position){
        //where position is the position of the whole map wanted, will be from top left starting
        this.updatePosition(position)
    }


    buildCooridor(direction){
        //direction is the input from map that will 
        //determine where to put something
        //builds a cooridor where the x was
        //choose from random position
        var randomPosition = null
        switch(direction){
            case 'l':
                randomPosition = this.viableSides.left.random()
                break;
            case 'r':
                randomPosition = this.viableSides.right.random()
                break;
            case 't':
                randomPosition = this.viableSides.top.random()
                break;
            case 'b':
                randomPosition = this.viableSides.bottom.random()
                break;
            default:
                break
        }
        if(randomPosition == null){
            return
        }
        const row = randomPosition[0]
        const col = randomPosition[1]
        //take the roomView attribute of the node

        //create the node and reference which direction it is to the room
        var cooridorNode = new Node('H', [row,col])
        cooridorNode.createCooridor(direction)
        cooridorNode.direction = direction
        this.halls.push(cooridorNode)
        //assign back to the room
        this.roomContents[row][col] = cooridorNode
    }
    //rooms could be different size, so go off the smaller room for merging

}
//from https://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array, because looked simple and elegant
Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
  }

  module.exports = {
      Room,
      Node
  }