import Room from './room'

class Map{
    constructor(boardPosition, boardWidth, boardLength){
        //describes the boards with relative to amount of squares
        this.width = boardWidth;
        this.length = boardLength;
        this.position = boardPosition;
        this.clearedBoard = [];
        //initialize the board with a clear state
        this.clear()
        this.board = this.clearedBoard
    }

    clear(){
        for(var i = 0; i < this.length; i++){
            let arr = []
            for(var j = 0; j < this.width; j++){
                arr.push('-')
            }
            this.clearedBoard.push(arr)
        }
    }
    
    get contents(){
        return this.board;
    }


}

export default Map