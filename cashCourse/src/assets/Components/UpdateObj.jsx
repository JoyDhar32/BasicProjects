import React , {useState} from 'react'

const UpdateObj = () => {
    const [car,setCar] = useState({make: 'Ford', model: 'Fiesta', year: 1997})
    let changeYear = (e)=>{
        setCar(c=>({...c,year:e.target.value}))
    }
  return (
    <div className="container mt-5 p-4">
    <p> My favourite car is = {car.make}- {car.model}- {car.year}</p>
    <div className="card">
        <input type="text" value={car.make} onChange={(e) => setCar({...car, make: e.target.value})} placeholder="change model" className="form-control mb-4"/>
        <input type="text" value={car.model} onChange={(e)=>setCar(car=>({...car, model:e.target.value}))} placeholder="change model" className="form-control mb-4"/>
        <input type="number" value={car.year} onChange={(e)=>changeYear(e)} placeholder="change year" className="form-control"/>
    
    </div>
    </div>
  )
}

export default UpdateObj;