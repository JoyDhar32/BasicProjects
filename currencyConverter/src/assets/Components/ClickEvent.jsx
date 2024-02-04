import React from "react";
const ClickEvent = () => {
  let handleClick = () => {
    console.log("Button clicked");
  };
  let sum = (a, b) => {
    console.log(a + b);
  };
  let change = (e) => {
    e.target.textContent = "Changed Text😊";
  };

  return (
    <>
      <div>ClickEvent</div>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => sum(2, 3)}>Sum </button> &nbsp;
      <button onClick={(e) => change(e)}>Change</button>
    </>
  );
};

export default ClickEvent;
