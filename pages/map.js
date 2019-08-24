import {Room, Node} from './room'

class Map{
    constructor(boardWidth, boardlength){
        //describes the boards with relative to amount of squares
        this.width = boardWidth;
        this.height = boardlength;
        this.clearedBoard = [];
        //initialize the board with a clear state
        this.clear()
        this.board = this.clearedBoard
        this.roomCounter = 8
        this.createRooms(this.roomCounter)
    }

    clear(){
        for(var i = 0; i < this.height; i++){
            let arr = []
            for(var j = 0; j < this.width; j++){
                var emptyNodes = new Node('-', [i,j])
                arr.push(emptyNodes)
            }
            this.clearedBoard.push(arr)
        }
    }
    
    createRooms(roomNumber){

        var roomCount = roomNumber
        var randomSize = [5,7]
        var roomNode = new Room(randomSize[0], randomSize[1])
        // //create some halls
        var halls = this.generateHalls(2)
        //initialize queue
        var position = [25,40]
        var halls = this.generateHalls(2)
        for(var i = 0; i < halls.length; i++){
            roomNode.buildCooridor(halls[i])
        }
        roomNode.changePosition(position)
        roomNode.visited = true

        this.placeRoom(roomNode)

        var queue = []
        queue.push(roomNode)
        var randomCount = 5
        while(queue.length){
            var node = queue.shift(0)
            if(node)
            {
                var rooms = this.generateRooms(node)
                for(var i = 0; i < rooms.length; i++){
                    this.placeRoom(rooms[i])
                    queue.push(rooms[i])
                }
            }
            return
        }


    }
//methods for the right
    rightColPositions(callback){
        var colSpan = arguments[0]
        var rowIdx = arguments[1]
        var board = arguments[2]
        var l = colSpan[0]
        var r = colSpan[1]

        try{
            if(board[rowIdx][r].filled == false){
                return [l,r]
            }
            else{
                return null
            }
        }
        catch(e){
            console.log('column position is null with',l,r)
        }
    }
    //shared method for both left and right
    rightRowPositions(callback){
        var rowSpan = arguments[0]
        var colIdx = arguments[1] + 1
        var board = arguments[2]
        //get top and bottom
        var t = rowSpan[0]
        var b = rowSpan[1]
        //create copies to check reduction bounds
        var originalT = t

        var counter = 0

        var span = Math.abs(t-b)
        //reduce by more than a half because of offsets
        t = t - Math.floor((span/3))
        b = b - Math.floor(span/3)
        //update the span
        span = Math.abs(t - b)
        board[24][45].filled = true
        board[25][45].filled = true
        board[26][45].filled = true
        try{
            //if nothing has to be done return the positions as is
            if(board[t][colIdx].filled == false && board[b][colIdx].filled == false &&//checks if the board is filled there
                board[t][colIdx-1].type !== 'H' && board[b][colIdx-1] !== 'H'){//checks the bounds to make hall is not in the empty spaces
                console.log('returning original')
                return [t,b]
            }
            else{
                while(((board[t][colIdx].filled == true || board[b][colIdx].filled == true) ||
                      (board[t][colIdx-1].type !== 'H' || board[b][colIdx-1].type !== 'H')) && 
                      counter < 3){
                    console.log('reducing')
                    //top is occupied, reduce by a quarter, usually just 1 because rooms are small right now
                    if(board[t][colIdx].filled == true){
                        t = t + Math.floor(span/4)
                    }
                    //bot is occupied, reduce by a quarter, usually just 1 because rooms are small right now
                    if(board[b][colIdx].filled == true){
                        b = b - Math.floor(span/4)
                    }
                    //return the updated positions if the positions are not filled
                    if(board[t][colIdx].filled == false && board[b][colIdx].filled == false && originalT >= t && t < b){
                        return [t,b]
                    }
                    //update the span
                    span = Math.abs(t-b)
                    //update counter
                    counter += 1
                }
            }

        }
        catch(e){
            console.log('row position is null with top:${t} and bottom: ${b}')
            return null
        }
        return null
    }

    //goes to generateRoom for generateRooms()
    generateRoom(rowcallback, colcallback, rowSpan, colSpan, direction){
        var board = this.board
        const rowPosition = rowcallback(rowSpan, colSpan[0], board)
        const colPosition = colcallback(colSpan, rowSpan[0], board)
        if(rowPosition == null || colPosition == null){
            console.log('The positions are ', rowPosition, colPosition)
            return null
        }

        const rowSize = Math.abs(rowPosition[1] - rowPosition[0])
        const colSize = Math.abs(colPosition[1] - colPosition[0])
        const position = [rowPosition[0], colPosition[0]]

        const room = new Room(rowSize, colSize)
        const halls = this.generateHalls(2)
        for(var i = 0; i < halls.length; i++){
            if(halls[i] == direction ){
                continue
            }
            room.buildCooridor(halls[i])
        }

        room.changePosition(position)
        return room

    }



//where all rooms are generatred and created, the first room generated will have a large impact on the other rooms created
    generateRooms(node){
        const halls = node.halls
        const len = halls.length
        var rooms = []
        let newRoom = null
        for(var i = 0; i < len; i++){
            let roomSize = this.randomSize(5,7)
            let rowStart = halls[i].position[0]
            let colStart =  halls[i].position[1]
            switch(halls[i].direction){
                case 'r':
                    //the -1 is to offset the side on the top
                    var rowSpan = [rowStart - 1, rowStart + roomSize[0] - 1]
                    //dont need to offset the col because the hall connect what would be the blank space
                    var colSpan = [colStart , colStart + roomSize[1]]
                    try{
                        newRoom = this.generateRoom(this.rightRowPositions, this.rightColPositions, rowSpan, colSpan, 'l')
                        if(newRoom == null){
                            continue
                        }
                        rooms.push(newRoom)
                    }
                    catch(e){
                        console.log('room is null')
                    }
                    break
                case 'l':

                    break
                case 't':

                    break
                case 'b':

                    break
                default:
                    break
            }
        }
        return rooms
    }

    generateHalls(num){
        var hallDirections = ['l','r','t','b']
        var randomDirs = []
        var counter = num
        while(counter > -1){
            var idx = Math.floor((Math.random() * (hallDirections.length)) + 0)
            randomDirs.push(hallDirections[idx])
            hallDirections.splice(idx, 1)
            counter -= 1
        }
        return randomDirs
    }

    randomSize(min, max){
        var length = Math.floor((Math.random() * max) + min);
        var width = Math.floor((Math.random() * max) + min);
        const arr = [length, width]
        return arr
    }
    
    placeRoom(room){
        //where position is based on row, col for map
        var rowLength = room.width
        var colLength = room.height
        for(var i = 0; i < rowLength; i++){
            for(var j = 0; j < colLength; j++){
                var row = room.contents[i][j].position[0]
                var col = room.contents[i][j].position[1]
                if(this.board[row][col].type !== 'H')
                {
                    this.board[row][col] = room.contents[i][j]
                    this.board[row][col].filled = true
                }
                else{
                    this.board[row][col].filled = true
                }
            }
        }
    }

    get contents(){
        return this.board;
    }


}

export default Map