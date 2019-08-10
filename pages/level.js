import Map from './map'
import React from 'react'
import Square from './square'


const screen = {
    width: '1000px',
    height: '600px',
    backgroundColor: 'grey',
    margin: '0 auto',
}

const squareContainer = {
    margin: '0 auto',
    position: 'relative',
    top: '10%',
    width: '70%',
    padding: 0,
    border: 0,
    fontSize: 0,
    letterSpacing: '-1px',
}



class Level extends React.Component{
    constructor(props){
        super(props);
        //row col for new map
        this.board = new Map([5, 50], 80, 50);
        this.pixelSize = 8;
        this.arr2d = this.board.contents
        

    }

    render(){
        var squares = Object.keys(this.arr2d).map((el,i) => {
            var offsetY = i*this.pixelSize;
            var single = this.arr2d[el].map((sub_el,j) => {
                var offsetX = j*this.pixelSize
                if(sub_el == 'O')
                {
                    return <Square x={offsetX} y={offsetY} size={this.pixelSize} color='white'/>
                }
                else{
                    return <Square x={offsetX} y={offsetY} size={this.pixelSize}/>
                }
            })
            return(
                <div style={squareContainer}> {single}</div>
            )
         })

        return(
            <div style = {screen}>
                {squares}
            </div>
        )
    }
}

export default Level
