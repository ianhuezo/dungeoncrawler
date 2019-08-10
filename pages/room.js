class Node{
    //how the room itself views the node
    //will eventually put how the level itself views the
    constructor(roomWalls, position){
        this.type = null;
        this.roomView = roomWalls
        //position is [row, col] based
        this.position = position
        this.nextPosition = null
        this.filled = false

        if(this.roomView == 'H'){
            //means its a hallway/cooridor
            this.type = 'H';
        }
        else if(this.roomView.corner){
            //corner
            this.type = 'C';
        }
        //I don't allow corners to have rooms
        else if(this.roomView.left || this.roomView.right || this.roomView.bottom || this.roomView.top){
            //
            this.type = 'X';
        }
        else{
            this.type = 'O';
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
                this.fillNone()
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
    length = 10;
    width = 10;
    constructor(length = m_length, width = m_width, parentCooridor = null){
        //startingPoint is the [row, col]
        this.length = length;
        this.width = width;

        //the cooridor will decide starting position if there is a parent node with a cooridor being input
        //will overwrite the parents left, right, bottom, or top x and c's depending 
        this.parent = parentCooridor;
        if(this.parentCooridor != null){

        }
        //a list of all the nodes that can put a cooridor
        this.viableSides = {
            left : [],
            right: [],
            top: [],
            bottom: []
        }
        //construct the room with all of its nodes
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
            for(var j = 0; j < this.length; j++)//col
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
            if(wall.left){
                this.viableSides.left.push(position)
            }
            else if(wall.right){
                this.viableSides.right.push(position)
            }
            else if(wall.top){
                this.viableSides.top.push(position)
            }
            else if(wall.bottom){
                this.viableSides.bottom.push(position)
            }

        }
    }

    isWall(row, col){
        //all directions walls are in
        const isLeft = (col == 0 && row < this.length);
        const isRight = (col == this.length-1 && row < this.width);
        const isTop = (row == 0);
        const isBottom = (row == this.length - 1);
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

    buildCooridor(direction){
        //direction is the input from map that will 
        //determine where to put something
        //builds a cooridor where the x was
        //choose from random position
        var randomPosition = null
        switch(direction){
            case 'l':
                randomPosition = this.viableSides.left.random()
            case 'r':
                randomPosition = this.viableSides.right.random()
            case 't':
                randomPosition = this.viableSides.top.random()
            case 'b':
                randomPosition = this.viableSides.bottom.random()
            default:
                break
        }
        var row = randomPosition[0]
        var col = randomPosition[1]
        console.log("The random position is ", row, col)
        //take the roomView attribute of the node
        var cooridorNode = new Node('H', [row,col])
        cooridorNode.createCooridor(direction)
        //changes the x to become a cooridor, H
        this.roomContents[col][row] = cooridorNode
    }
    //rooms could be different size, so go off the smaller room for merging
    mergeRoom(){

    }

}
//from https://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array, because looked simple and elegant
Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
  }

export default Room