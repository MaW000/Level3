import React from "react";

export default function Card(props) {
    return (
        <div className="card--body">
            <h1 className="card--title">{props.place}</h1>
            <h2 className="card--place">{props.price}</h2>
            <h3 className="card--timeToGo">{props.timeToGo}</h3>
        </div>
    )
}