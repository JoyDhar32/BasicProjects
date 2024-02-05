import React, { useState } from 'react'
const onChange = () => {
    const [name,setName] = useState("Guest");
    const [age,setAge] = useState('');
    const [address,setAddress] = useState('');
    const [payment,setPayment] = useState('')
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleAgeChange = (e) => {
        setAge(e.target.value);
    }
    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    }
    const handlePayment=(e) =>{
 setPayment(e.target.value);
    }
  return (
    <>
    <div className="container mt-4">
    <input type='text' value={name} placeholder='enter you name' onChange={(e)=>handleNameChange(e)} class="form-control"/>
    <p>Name: {name}</p>
    <input type='number' value={age} placeholder='enter you age' onChange={(e)=>handleAgeChange(e)}class="form-control" />
    <p>Age: {age}</p>
    <textarea value={address} placeholder='enter you address' onChange={(e)=>handleAddressChange(e)} class="form-control"rows="5"  />
    <p>Address: {address}</p>
    </div>
    </>
  )
}

export default onChange