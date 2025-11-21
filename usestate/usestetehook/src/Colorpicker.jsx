import React, {useState} from "react";

function Colorpicker(){
    const [color, setcolor]=useState();
    const helpercolor=(event)=>{
        setcolor(event.target.value);
    }
return (
    <div className="colorpicker">
        <h1>color picker</h1>
        <div className="colordisplay" style={{backgroundColor: color}}>
            <p>selected color: {color }</p>
        </div>
        <input type="color" value={color} onChange={helpercolor} />

    </div>
);
}

export default Colorpicker