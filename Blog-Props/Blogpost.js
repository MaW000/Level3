


export default function Blogpost(props) {
    
    return (
        
        <div className='post--all'>
           <h1>{props.title}</h1>
           <h2>{props.subTitle}</h2>
           <h3>Posted by {props.author} <span> on {props.date}</span></h3>
           <hr></hr>
       </div> 
    )
}