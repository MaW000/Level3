import React from "react";
import MemeGen from "./MemeGen";
export default function ListMemes(props) {
    let meme = props.meme
    let setMeme = props.setMeme
    const [isActive, setActive] = React.useState(false);
    const [b, setB] = React.useState(1)
    const [index, setIndex] = React.useState(0)
    const ToggleClass = (e) => {
        setB(parseInt(e.target.parentElement.parentElement.id))
        console.log(e.target.parentElement.parentElement.id)
        let x = parseInt(e.target.parentElement.parentElement.id)
        const index = meme.savedMemes.map((item, index) => {
            if (x === item.imgId.id) {
                return index
            } 
            
        })
        const indexN = index.filter(Element => {
            return Element !== undefined;
        })
        setIndex(indexN)
        
        setActive(!isActive);
      
      
     };

    
    const generateMeme1 = (e) => {
        let x = parseInt(e.target.parentElement.parentElement.id)
        
        const {name, value} = e.target
        const newList = meme.savedMemes.map((item, index) => {
            if (x === item.imgId.id) {
                console.log(index)
                return {
                    
                    ...item,
                    [name]: value
                }
                } else {
                    return item
                }
            })
            setMeme(prev => ({
                savedMemes: newList,
                new: {...prev.new}
            }))
     };

    const deleteMeme = (e) => {
        let x = parseInt(e.target.parentElement.parentElement.id)
        
        const index = meme.savedMemes.map((item, index) => {
            if (x === item.imgId.id) {
                return index
            } 
            
        })
        const indexN = index.filter(Element => {
            return Element !== undefined;
        })
        console.log(parseInt(indexN))
        let p = meme.savedMemes.splice(parseInt(indexN),1)
        
    }

    const memeList = meme.savedMemes.map(prev => {
        return (
            <MemeGen 
                a = {prev.topText}
                bottomText = {prev.bottomText}
                randomImage = {prev.randomImage}    
                key = {prev.imgId.id}
                id = {prev.imgId.id}
                onClick={ToggleClass}
                isActive={isActive}
                b = {b}
                generateMeme1 = {generateMeme1}
                deleteMeme= {deleteMeme}
                index={index}
                meme={meme}
            />
        )
    })
  
    return (
        <div>
            <div className="heading1">
                <h4 className="heading">Saved Memes</h4>
            </div>
            {memeList}
        </div>
    )

}
