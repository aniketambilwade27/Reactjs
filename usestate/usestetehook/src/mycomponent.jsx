import React,{useState} from "react"
function MyComp(){

const [name, setname]=useState("defaultname");
const [age, setage]=useState(0);

const clearall=()=>{
    setname("")
    setage(0)
}
const updateName=()=>{
    setname("aniket")
}

const increamentAge=()=>{
    setage(age+2)
}

    return (
        <div className="usehook">
          <p>name: {name}</p>
          <button onClick={updateName}>setname</button>
          <p>age:{age}</p>
          <button onClick={increamentAge}>addAge</button>

          <br />
          <button onClick={clearall}>ClearAll</button>
        </div>
    )
}

export default MyComp