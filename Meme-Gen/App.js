import React from "react"
import Header from "./components/Header"
import Meme from "./components/Meme"
import ListMemes from "./components/ListMemes"


function App() {
  const [meme, setMeme] = React.useState(
    {
        savedMemes: [],
        new: {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            imgId: "99"
            } 
    })
  const [allMemes, setAllMemes] = React.useState([])
    
  
  return (
    <div className="App">
      <Header />
      <Meme meme={meme} setMeme={setMeme} allMemes={allMemes} setAllMemes={setAllMemes}/>
      <ListMemes meme={meme} setMeme={setMeme} />
    </div>
  );
}


export default App;
