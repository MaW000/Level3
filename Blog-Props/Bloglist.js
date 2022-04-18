import React from 'react'
import data from './data'
import Blogpost from './Blogpost'

export default function Bloglist() {
    const posts = data.map(item => {
     return (
       <Blogpost 
            title={item.title}
            subTitle={item.subTitle}
            author={item.author}
            date={item.date}
        />
    )
     })
    return (
        <div>
            {posts}
        </div>
    )
}
