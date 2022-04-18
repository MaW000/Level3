import React from "react";

export default function BadgeGen(props) {
   return (
       <div className="input-badge">
           <div className="line1">
                <h1>Name: {props.firstName}</h1>
                <h1>{props.lastName}</h1>  
           </div>
           <div className="line2">
                <h1>{props.email}</h1> 
                <h1>{props.birth}</h1> 
           </div>
           <div className="line3">
                <h1>{props.phone}</h1> 
                <h1>{props.food}</h1> 
           </div>
       </div>
   ) 
}