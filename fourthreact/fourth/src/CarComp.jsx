import React, { useState } from "react"

function CarComp() {
    const [car, setcar] = useState([])
    const [caryear, setyear] = useState(new Date().getFullYear())
    const [carmake, setmake] = useState("")
    const [carmodel, setmodel] = useState("")

    function handeladdcar() {
        const newcar = { year: caryear, make: carmake, model: carmodel }
        setcar(car => [...car, newcar])

        setyear(new Date().getFullYear())
        setmake("")
        setmodel("")
    }

    function handelremovecar(index) {
            setcar(c=> c.filter((_, i)=>i !==index))
    }
    function handelyearchange(event) {
        setyear(event.target.value)
    }
    function handelmakechange(event) {
        setmake(event.target.value)
    }
    function handelmodelchange(event) {
        setmodel(event.target.value)
    }

    return (
        <div>

            <ul>
                {car.map((car, index)=>
                <li key={index} onClick={()=>handelremovecar(index)}> 
                {car.year} {car.make} {car.model}
                </li>
                )}
            </ul>
            <br />
            <input type="number" value={caryear} placeholder="year" onChange={handelyearchange} /><br />
            <input type="text" value={carmake} placeholder="enter make" onChange={handelmakechange} /> <br />
            <input type="text" value={carmodel} placeholder="enter model" onChange={handelmodelchange} /> <br />
            <button onClick={handeladdcar}>Add_Car</button>
        </div>
    )
}

export default CarComp