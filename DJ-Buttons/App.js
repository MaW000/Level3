import React from 'react'
import Box from './components/Box'
import boxes from './data'
import Input from './components/Input'
export default function App() {
  const [squares, setSquares] = React.useState(boxes)
  
function djSmall1() {
  setSquares(prevSquares => {
    if (prevSquares[0].color === 'white') {
      return prevSquares.map((square) => {
        return {...square, color: 'black'}
      })
    } else {
      return prevSquares.map((square) => {
        return {...square, color: 'white'}
      })
    }
  })
}

  function djSmall2() {
    setSquares(prevSquares => {
      return prevSquares.map((square) => {
        return square.id === 1 || square.id === 2 ? {...square, color: 'purple'} : square 
      })
    })
  }

  function djSmall3() {
    setSquares(prevSquares => {
      return prevSquares.map((square) => {
        return square.id === 3 ? {...square, color: 'blue'} : square 
      })
    })
  }
  function djSmall4() {
    setSquares(prevSquares => {
      return prevSquares.map((square) => {
        return square.id === 4 ? {...square, color: 'blue'} : square 
      })
    })
  }

  function djSmall5() {
    setSquares(prevSquares => {
      return prevSquares.map((square) => {
        return square.id === 3 ? {...square, color: 'yellow'} : square 
      })
    })
  }

  function djSmall6() {
    setSquares(prevSquares => {
      return prevSquares.map((square) => {
        return square.id === 3 ? {...square, color: 'green'} : square 
      })
    })
  }


  return (
    <main>
      <Box squares={squares}/>
      <Input squares={squares} djSmall1 = {djSmall1} djSmall2 = {djSmall2} djSmall3 = {djSmall3} djSmall4 = {djSmall4} djSmall5 = {djSmall5}  djSmall6 = {djSmall6}/>
    </main>
  )
}

// export default function App() {
//     const [squares, setSquares] = React.useState(boxes)
    
//     console.log(1)

//  const squareElements = squares.map(square => {
//          return (
//              <Grid
//                  key={square.id}
//                  on={square.on}
//                  color={square.color}
//              />
//         )
//          })
//     /**
//      * Challenge part 1:
//      * 1. Initialize state with the default value of the
//      *    array pulled in from boxes.js
//      * 2. Map over that state array and display each one
//      *    as an empty square (black border, transparent bg color)
//      *    (Don't worry about using the "on" property yet)
//      */
//     return (
//         <main>
            
//         </main>
//     )
// }




