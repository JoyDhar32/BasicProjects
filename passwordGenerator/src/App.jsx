import { useState,useCallback,useEffect, useRef } from "react";

function App() {
  const [length, setLength]=useState(8);
  const [numberAllowed, setNumberAllowed]=useState(false);
  const [charAllowed, setCharAllowed]=useState(false);
  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center">Generate Your Password</h2>
        <div className="row justify-content-center mt-4 ">
          <div className="col-md-8 p-5 text-white main">
            <div className="input-group mb-3 passwordColor">
              <input type="text" className="form-control" />
              <div className="input-group-append">
                <button className="btn btn-purple" type="button">
                  Copy
                </button>
              </div>
            </div>
            <div className="row">
              <div class="form-group col-md-5">
                <input
                  type="range"
                  class="form-control-range"
                  id="passwordLength" 
                />
                <label for="passwordLength" > Length</label>
              </div>
              <div class="form-group col-md-3">
                <input
                  type="checkbox"
                  class="form-control-range"
                  id="passwordLength"
                />
                 <label htmlFor="number">Numbers</label>
              </div>
              <div class="form-group col-md-4">
                <input
                  type="checkbox"
                  class="form-control-range"
                  id="passwordLength"
                />
                <label htmlFor="charInput">Character</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
