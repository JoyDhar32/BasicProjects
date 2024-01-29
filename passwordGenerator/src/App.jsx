import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);
  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };
  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center">Generate Your Password</h2>
        <div className="row justify-content-center mt-4 ">
          <div className="col-md-8 p-5 text-white main">
            <div className="input-group mb-3 passwordColor">
              <input type="text" className="form-control" placeholder="Password" readOnly ref={passwordRef} />
              <div className="input-group-append">
                <button className="btn btn-purple" type="button" onClick={copyPasswordToClipboard}>
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
                  min={6} max={20} value={length} onChange={(e) => setLength(e.target.value)}
                />
                <label for="passwordLength"> Length {length}</label>
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
