import React, {useActionState, useState} from "react";

function OnEvent(){
    const [name, setname]=useState("Guest")
    const [comment, setcomment]= useState("")

    const handelNameChange=(event)=>{
            setname(event.target.value)
    }
    const handelcommentChange=(event)=>{
        setcomment(event.target.value)
    }

    return(
        <div className="event">
            <input value={name} onChange={handelNameChange}/>
            <p>Name: {name}</p>
            <textarea type={comment} onChange={handelcommentChange} placeholder="enter commend here"/>
            <p>Comment: {comment}</p>
        </div>
    );
}

export default OnEvent