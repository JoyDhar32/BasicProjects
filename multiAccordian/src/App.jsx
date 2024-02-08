import React, { useState } from "react";
import Data from "./Data";
const App = () => {
  const [selected, setSelected] = useState(null);
  return (
    <div className="container">
      <h1 className="text-center mb-4">React Accordian</h1>
      <div className="row text-center">
        <div className="accordian">
          {Data && Data.length > 0 ? (
            Data.map((item, index) => {
              return (
                <div className="accordian-item" key={index}>
                  <div className="accordian-title">
                    <h2>{item.question}</h2>
                  </div>
                  <div className="accordian-content">
                    <p>{item.answer}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <div>No Data found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
