import React from 'react'

const List = () => {
    let fruits=["Apple","Banana","Mango","Orange","Pineapple","Grapes","Watermelon","Papaya","Guava","Kiwi","Pomegranate","Cherry","Strawberry","Blueberry","Blackberry"];
   fruits.sort();
    let ListItems=fruits.map(fruit=><li>{fruit}</li>)
    let numbers= [1,2,3,4,5,6,7,8,9,10];
    numbers.sort((a,b)=>(b-a));
 let output=numbers.map(number=><p>{number}</p>)
// create an array object of car haing Id , name and model
let cars=[
  {id:1,name:"Toyota",model:"Corolla"},
  {id:2,name:"Honda",model:"Civic"},
  {id:3,name:"Suzuki",model:"Mehran"},
  {id:4,name:"Kia",model:"Sportage"},
  {id:5,name:"Hyundai",model:"Tucson"},
  {id:6,name:"Audi",model:"A4"},
  {id:7,name:"BMW",model:"X5"},
  {id:8,name:"Mercedes",model:"C-Class"},
  {id:9,name:"Lamborghini",model:"Aventador"},
  {id:10,name:"Ferrari",model:"F8 Tributo"}
]


  return (
    <>
    <div>Fruits List</div>
<ol>{ListItems}</ol>
<p>{output}</p>
    </>
  )
}

export default List