import React from 'react'
const ClickEvent = () => {

let handleClick = () => {
    console.log('Button clicked')
    }
let sum = (a, b) => {
    console.log(a + b)
    }


  return (
    <>
    <div>ClickEvent</div>
    <button onClick={handleClick}>Click me</button>
    <button onClick={() => sum(2, 3)}>Sum</button>
    </>
  )
}

export default ClickEvent