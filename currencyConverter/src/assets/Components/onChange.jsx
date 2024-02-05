import React, { useState } from 'react'
const onChange = () => {
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [address,setAddress] = useState('');
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleAgeChange = (e) => {
        setAge(e.target.value);
    }
    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    }
  return (
    <>
    <input type='text' value={name} placeholder='enter you name' onChange={()=>handleNameChange()}/>
    <p>Name: {name}</p>
    <input type='text' value={age} placeholder='enter you age' onChange={()=>handleAgeChange()}/>
    <p>Age: {age}</p>
    <textarea value={address} placeholder='enter you address' onChange={()=>handleAddressChange()}/>
    <p>Address: {address}</p>
    </>
  )
}

export default onChange