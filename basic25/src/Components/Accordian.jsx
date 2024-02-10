import React, { useState } from "react";
import "./style.css";
import Data from ".././Data.json";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const activeAccordian = (e, getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };
  return (
    <div className="container">
      <h1 className="text-center mb-4">React Accordian</h1>
      <div className="row text-center">
        <button className="btn btn-primary btn-sm">
          Enable MultiSelection
        </button>
        <div className="accordian">
          {Data && Data.length > 0 ? (
            Data.map((item, index) => {
              return (
                <div className="accordian-item" key={index}>
                  <div
                    className="accordian-title"
                    onClick={(e) => activeAccordian(e, item.id)}
                  >
                    <h2>{item.question}</h2>
                  </div>
                  <div className="accordian-content">
                    <p>
                      {selected === item.id ? (
                        <div className="content">{item.answer}</div>
                      ) : null}{" "}
                    </p>
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

export default Accordian;

//✅ Completed Accordian
