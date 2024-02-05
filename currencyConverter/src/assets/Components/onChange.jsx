import React, { useState } from 'react'
const onChange = () => {
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [address,setAddress] = useState('');
  return (
    <>
    <input type='text' value={name} placeholder='enter you name' onChange={()=>handleNameChange()}/>
    </>
  )
}

export default onChange