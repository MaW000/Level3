import React, {useState} from "react";


function App() {
  const [names, setNames] = useState({listNames: [], userInput: ''})
  
  function handleChange(event) {
    const {name, value} = event.target
    setNames(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    setNames(prev => {
      return {
        listNames: [...prev.listNames, names.userInput],
        userInput: ''
      }
    })
  }

  const nameElements = names.listNames.map(name => {
    return (
      <h1>{name}</h1>
    )
  })


  console.log(names)
  console.log(names.listNames)
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Name"
        name="userInput"
        value={names.userInput}
        onChange={handleChange}
      />
      <button>submit</button>
      </form>
      {nameElements}
    </div>
  );
}

export default App;
