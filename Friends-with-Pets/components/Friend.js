import React from "react";
import Pet from "./Pet";


export default function Friend(props) {
   
   let x = props.pets
   
    const Pa = x[0].map(pet => {
        console.log(pet.name)
        return(
        <Pet
            name={pet.name}
            breed={pet.breed}
        />
    )
})

    console.log(Pa)
    return (
        <div className="fri--info">
            <h1 className="fri--name">{props.name}</h1>
            <h2 className="fri--age">{props.age}</h2>
            {Pa}
        </div>
    )
} 
