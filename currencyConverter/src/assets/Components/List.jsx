import React from 'react'

const List = () => {
    let fruits=["Apple","Banana","Mango","Orange","Pineapple","Grapes","Watermelon","Papaya","Guava","Kiwi","Pomegranate","Cherry","Strawberry","Blueberry","Blackberry"];
   fruits.sort();
    let ListItems=fruits.map(fruit=><li>{fruit}</li>)
    let numbers= [1,2,3,4,5,6,7,8,9,10];
    numbers.sort((a,b)=>(b-a));
 let output=numbers.map(number=><p>{number}</p>)
// create an array object of car haing Id , name, model and price
let cars=[
  {id:1,name:"Audi",model:"A4",price:40000},
  {id:2,name:"BMW",model:"X5",price:50000},
  {id:3,name:"Mercedes",model:"C200",price:60000},
  {id:4,name:"Toyota",model:"Corolla",price:20000},
  {id:5,name:"Honda",model:"Civic",price:25000},
  {id:6,name:"Suzuki",model:"Alto",price:15000},
  {id:7,name:"Hyundai",model:"Accent",price:18000},
  {id:8,name:"Kia",model:"Sportage",price:30000},
  {id:9,name:"Nissan",model:"Sunny",price:22000},
  {id:10,name:"Mitsubishi",model:"Lancer",price:23000}
];

// sort array via name
cars.sort((a,b)=>(a.name>b.name)?1:-1);

let carList = cars.map((car)=><li key={car.id}>CarName: <span style={{color:'purple'}}> {car.name}</span>  &nbsp; Model:<span style={{color:'blue'}}>  {car.model} </span>&nbsp;   Price: <span style={{color:'red'}}>{car.price} </span></li>)
let lowPrice=cars.filter((car)=>car.price<=25000);
let lowPriceCars=lowPrice.map((car)=><li key={car.id}>CarName: <span style={{color:'purple'}}> {car.name}</span>  &nbsp; Model:<span style={{color:'blue'}}>  {car.model} </span> &nbsp; Price:<span style={{color:'red'}}>  {car.price} </span></li>)
  return (
    <>
    <div>Fruits List</div>
<ol>{ListItems}</ol>
<p>{output}</p>
<ol>{carList}</ol>
<p>Low Price Cars</p>
<ol>{lowPriceCars}</ol>
    </>
  )
}

export default List