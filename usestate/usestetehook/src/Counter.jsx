import React,{useState} from "react"

function Counter(){
    const [count, setcount]=useState(0);



    const addcount=()=>{
        
        setcount(count+1)
    }

    const subcount=()=>{
        if (count==0){
            return
        }
        setcount(count-1)
    }

    const clearcount=()=>{
        setcount(0)
    }

    return (
        <div className="counter">
        <p>count: {count}</p>
        <button onClick={addcount}> Add </button>
        <button onClick={subcount}> Sub </button>
        <button onClick={clearcount}> clear </button>
        </div>
    );
}

export default Counter