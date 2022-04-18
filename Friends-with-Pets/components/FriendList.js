import React from "react";
import Friend from "./Friend"

import data from '../data'



export default function FriendList() {
    const Friends = data.map(friend => {
        return(
            <Friend
                
                name={friend.name}
                age={friend.age}
                pets={[friend.pets]}
            />
        )
    })
    console.log(Friends)

    

    
    
    return (
        <div className="friend--list">
            {Friends}
            
        </div>
    )
}