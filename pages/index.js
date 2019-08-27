import Level from './level'
import React from 'react'
import Map from './map'
import Square from './square'

class Game extends React.Component{
    constructor(props){
        super(props);
        //row col for new map
        this.map = new Map(70, 80)
        var playerPositions = this.map.playerSquares
        this.randomPosition = playerPositions[0]
        console.log(this.randomPosition)
    }

    render(){
        return(
            <div>
                <Level map={this.map} pixelSize={8}/>
            </div>
           
           
        );
    }

  }
   
  export default Game