import React from 'react'

const List = () => {
    let fruits=["Apple","Banana","Mango","Orange","Pineapple","Grapes","Watermelon","Papaya","Guava","Kiwi","Pomegranate","Cherry","Strawberry","Blueberry","Blackberry"];
    let ListItems=fruits.map(fruit=><li>{fruit}</li>)
  return (
    <>
    <div>Fruits List</div>
<ol>{ListItems}</ol>
    </>
  )
}

export default List