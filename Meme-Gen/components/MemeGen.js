import React from "react";

export default function MemeGen(props) {

    return (
        <div id={props.id} >
            <div className="meme">
            <img   src={props.randomImage} className="meme--image" alt="meme" />
            <h2 className="meme--text top">{props.a}</h2>
            <h2 className="meme--text bottom">{props.bottomText}</h2>
            </div>
            <div className="editButtons">
            <button 
                    id="button3"
                    className="edit--button"
                    onClick={props.onClick}
            >
                    Edit Meme
            </button>
            <button 
                    id="button3"
                    className="del--button"
                   onClick={props.deleteMeme}
            >
                    Delete Meme
            </button>
            </div>
            <div className="editInput">
            <input id="edit" className={props.isActive && props.id === props.b ? "active" : null} name="topText" onChange={props.generateMeme1}></input>
            <input id="edit" className={props.isActive && props.id === props.b ? "active" : null} name="bottomText" onChange={props.generateMeme1} value={props.meme.savedMemes[props.index].bottomText}></input>
            </div>
        </div>
    )
}
