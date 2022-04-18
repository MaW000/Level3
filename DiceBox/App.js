
import './App.css';
import React from 'react';
import Dicebox from './components/Dicebox';

function App() {
  const [number, setNumbers] = React.useState([1, 2, null, null, null])
  
  const numbers = number.map(num => {
    return (
      <Dicebox num= {num} />
    )
  }) 
  
  function toggle() {
    setNumbers(prev => {
      return prev.map(prev => {
        return Math.floor(Math.random() * 6)
      })
    })
  }

  return (
    <div className="App">
      <header className="App-header">
       
        
          <button onClick={toggle}> Gen</button> 
      
        {numbers}
      </header>
    </div>
  );
}

export default App;
