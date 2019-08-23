import Map from './map'
import React from 'react'
import Square from './square'


const screen = {
    width: '1000px',
    height: '800px',
    backgroundColor: 'grey',
    margin: '0 auto',
}

const squareContainer = {
    margin: '0 auto',
    position: 'relative',
    length: '100%',
    width: '100%',
    padding: 0,
    border: 0,
    fontSize: 0,
    letterSpacing: '-1px',
}



class Level extends React.Component{
    constructor(props){
        super(props);
        //row col for new map
        this.board = new Map(100, 80);
        this.pixelSize = 8;
        this.arr2d = this.board.contents
        

    }
    componentWillMount(){
        var id = 0
        this.squares = Object.keys(this.arr2d).map((el,i) => {
            var offsetY = i*this.pixelSize;
            var single = this.arr2d[el].map((sub_el,j) => {
                var offsetX = j*this.pixelSize
                //sides
                if(sub_el.type == 'X')
                {
                    {id += 1}
                    return <Square key={id} x={offsetX} y={offsetY} size={this.pixelSize} node={sub_el}/>
                }
                //corner (should be next to clear blocks)
                else if(sub_el.type == 'C')
                {
                    {id += 1}
                    return <Square key={id} x={offsetX} y={offsetY} size={this.pixelSize} node={sub_el}/>
                }
                //the gooey insides
                else if(sub_el.type == 'L')
                {
                    {id += 1}
                    return <Square key={id} x={offsetX} y={offsetY} size={this.pixelSize}  color='red' node={sub_el}/>
                }
                //hallways
                else if(sub_el.type == 'H')
                {
                    {id += 1}
                    return <Square key={id} x={offsetX} y={offsetY} size={this.pixelSize}  color='white' node={sub_el}/>
                }
                //blanks
                else if(sub_el.type == '-')
                {
                    {id += 1}
                    return <Square key={id} x={offsetX} y={offsetY} size={this.pixelSize} node={sub_el}/>
                }
            })
            {id += 1}
            return(
                <div key={id} style={squareContainer}> {single}</div>
            )
         })
    }
    render(){

        return(
            <div style = {screen}>
                {this.squares}
            </div>
        )
    }
}

export default Level
