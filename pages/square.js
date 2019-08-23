import React from 'react'
import { Z_BLOCK } from 'zlib';

//a 10x10 square when border is included
const squareStyle = {
    border: '0.3px solid black',
    fontSize: 0,
    letterSpacing: '-1px',
    display: 'inline-block'
}

function Square(props){
    const position = {
        left: props.x + 'px',
        top: props.y + 'px',
        width: props.size + 'px',
        height: props.size + 'px',
        backgroundColor: props.color
    }

    const node = props.node

    return(
        <div style={Object.assign(squareStyle, position)}>

        </div>
    )
}

export default Square