
import React , {useState} from "react";

function MyComp2(){
    const[car,setcar]=useState(
        {year:2024,
        make:"FORD",
        model:"Mustang"} )
        
        function handelyearchange(event){
                setcar(car=>({...car,year:event.target.value}))
        }
        function handelmakechange(event){
                setcar(car=>({...car, make: event.target.value}))
        }
        function handelmodelchange(event){
                setcar(car=>({...car, model:event.target.value}))
        }

return(
    <div>
        <p>your favourite car is: {car.year} {car.make} {car.model}</p>

        <input type="number" value={car.year} onChange={handelyearchange} />
        <br />
        <input type="text" value={car.make} onChange={handelmakechange} />
        <br />
        <input type="text" value={car.model} onChange={handelmodelchange}/>
    </div>
)
}

export default MyComp2