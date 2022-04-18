import logo from './logo.svg';
import './App.css';
import axios from "axios"
import React from 'react';
function App() {
  const [color, setColor] = React.useState('')
  
  function getColor() {axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
  .then(res => {
    setColor(res.data.colors[0].hex)
  })}

  return (
    <div className="App" style={{backgroundColor: `#${color}`}}>
      <button onClick={getColor}></button>
      <h1>{color}</h1>
    </div>
  );
}

export default App;
