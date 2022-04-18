import React from 'react'

export default function Input(props) { 
    
    return(
        <div className='input'>
            <button className='input--bt' onClick={props.djSmall1}>DJ Small</button>
            <button className='input--bt' onClick={props.djSmall2}>Party DJ</button>
            <button className='input--bt' onClick={props.djSmall3}>Party DJ</button>
            <button className='input--bt' onClick={props.djSmall4}>Partay DJ</button>
            <button className='input--bt' onClick={props.djSmall5}>Party DJ</button>
            <button className='input--bt' onClick={props.djSmall6}>Party DJ</button>
        </div>
    )



}

// (4) [{…}, {…}, {…}, {…}]
// 0: {id: 'box1', on: true, color: 'white'}
// 1: {id: 'box2', on: false, color: 'green'}
// 2: {id: 'box3', on: true, color: 'red'}
// 3: {id: 'box4', on: true, color: 'blue'}
// length: 4
// [[Prototype]]: Array(0)