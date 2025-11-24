import React, {useState} from "react";

function MyComp(){
const[count, setcount]=useState(0)
function helperdec(){
setcount(count-1)
}
function helperinc(){
setcount(c=>c+1)
setcount(c=>c+1)
}
function helperres(){
setcount(0)
}

return(
    <div>
        <p>
            count:{count}
        </p>
        <button onClick={helperdec}>decrement</button>
        <button onClick={helperres}>reset</button>
        <button onClick={helperinc}>increment</button>
        
    </div>
);
}

export default MyComp