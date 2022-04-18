import React from "react";
import Grid from './Grid'

export default function Box(props) { 

    const squareElements = props.squares.map(square => {
       console.log(square.id)
        return (
            <Grid
                color={square.color}
                key={square.id}
                on={square.on}
            />
          )
        })
         
    return(
        <div className="app">
            {squareElements}
        </div>
    )
}