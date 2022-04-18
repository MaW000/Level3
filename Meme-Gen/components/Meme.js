import React from "react"

export default function Meme(props) {
    const meme = props.meme
    const setMeme= props.setMeme
    const allMemes = props.allMemes
    const setAllMemes= props.setAllMemes

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    },)

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        const id = (Math.floor(Math.random() * allMemes.length))
        setMeme(prevMeme => ({
            savedMemes: [...prevMeme.savedMemes],
            new: {...prevMeme.new, randomImage: url, imgId: {id}}
        }))
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        const id = (Math.floor(Math.random() * allMemes.length))
        setMeme(prevMeme => ({
            savedMemes: [...prevMeme.savedMemes],
            new: {...prevMeme.new, [name]: value, imgId: {id}}
        }))
    }

    function generateMeme() {
        setMeme(prevMeme => ({
            savedMemes: [...prevMeme.savedMemes, meme.new],
            new: {...prevMeme.new}
        }))
    }
    




    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.new.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.new.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.new.randomImage} className="meme--image" alt="meme" />
                <h2 className="meme--text top">{meme.new.topText}</h2>
                <h2 className="meme--text bottom">{meme.new.bottomText}</h2>
            </div>
            <button 
                    id="button2"
                    className="form--button"
                    onClick={generateMeme}
            >
                    Save Meme
            </button>
        </main>
    )
}

