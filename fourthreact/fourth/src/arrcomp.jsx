import React,{useState} from "react"

function ArrComp(){
const[food, setfood]=useState(["apple","banana", "orange"]);

function handeladdfood(){
    const newfood=document.getElementById("foodinput").value;
    document.getElementById("foodinput").value=""
    setfood([...food, newfood])
}


return(
    <div>
        <h2>List of Food</h2>
        <ul>
            {food.map((food, index)=> <li key={index}>{food}</li>)}
        </ul>

        <input type="text" id="foodinput" placeholder="enter food" />
        <button onClick={handeladdfood}>Add Food</button>
    </div>
)
}

export default ArrComp