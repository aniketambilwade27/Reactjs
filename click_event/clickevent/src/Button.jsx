function Button(){
    const clickfun=(e)=> e.target.textContent="Ouch!! 😮";
return(
    <div>
        <button onDoubleClick={(e)=>clickfun(e)}>click me 🥸</button>
    </div>
);
}

export default Button