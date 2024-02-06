import React, { useState } from "react";

const UpdateArray = () => {
  const [fruits, setFruits] = useState([
    "apple",
    "banana",
    "mango",
    "grapes",
    "orange",
  ]);

  let updateFruits = () => {
    let newFood = document.getElementById("add").value;
    document.getElementById("add").value = "";
    if(newFood.length>1)setFruits((f)=>[...f, newFood])
  };
  let deleteFruits = (index) => {
    setFruits(fruits.filter((_,i)=>i!==index))
  };
  return (
    <div className="container mt-">
      <h1>Update Array</h1>
      <ol>
        {fruits.map((fruit, index) => (
          <li key={index} onClick={()=>deleteFruits(index)}>{fruit} </li>
        ))}
      </ol>
      <input
        type="text"
        className="form-control"
        style={{ width: "300px" }}
        placeholder="add fruits"
        id="add"
      />
      <button
        onClick={() => updateFruits()}
        className="btn btn-primary btn-sm mt-2 px-4 text-center"
      >
        Add Fruits
      </button>
    </div>
  );
};

export default UpdateArray;
