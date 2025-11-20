function Card(props){
return(
    <div className="card">
<img src={props.img} alt="" />
        <h1>{props.name}</h1>
        <p>{props.para}</p>
    </div>
);
}

export default Card;