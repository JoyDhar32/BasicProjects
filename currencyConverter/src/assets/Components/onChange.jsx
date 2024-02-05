import React, { useState } from "react";
const onChange = () => {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handlePayment = (e) => {
    setPayment(e.target.value);
  };
  const handleShipping = (e) => {
    setShipping(e.target.value);
  };
  return (
    <>
      <div className="container mt-4">
        <input
          type="text"
          value={name}
          placeholder="enter you name"
          onChange={(e) => handleNameChange(e)}
          class="form-control"
        />
        <p>Name: {name}</p>
        <input
          type="number"
          value={age}
          placeholder="enter you age"
          onChange={(e) => handleAgeChange(e)}
          class="form-control"
        />
        <p>Age: {age}</p>
        <textarea
          value={address}
          placeholder="enter you address"
          onChange={(e) => handleAddressChange(e)}
          class="form-control"
          rows="5"
        />
        <p>Address: {address}</p>
        <select
          value={payment}
          onChange={(e) => handlePayment(e)}
          class="form-control"
        >
          <option value="" disabled>
            Select Your Payment
          </option>
          <option value="cash">Cash</option>
          <option value="card">Card</option>
          <option value="upi">UPI</option>
          <option value="giftcard">Gift Card</option>
        </select>
        <p> Payment: {payment} </p>
        <label>Shipping: </label>
        <br />{" "}
        <input
          type="radio"
          value="standard"
          onChange={(e) => handleShipping(e)}
          name="shipping"
        />
        Standard <br />
        <input
          type="radio"
          value="express"
          onChange={(e) => handleShipping(e)}
          name="shipping"
        />
        Express
        <br />
        <input
          type="radio"
          value="nextday"
          onChange={(e) => handleShipping(e)}
          name="shipping"
        />
        Next Day
        <br />
        <p>Shipping: {shipping}</p>
      </div>
    </>
  );
};

export default onChange;
