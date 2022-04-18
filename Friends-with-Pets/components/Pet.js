import React from "react";

export default function Pet(props) {
    return(
    <div className="pets--info">
        <h3 className="pets--name">{props.name}</h3>
        <h4 className="pets--age"> The {props.breed}</h4>
    </div>)
}