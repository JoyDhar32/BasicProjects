import { useState } from 'react'

function App() {
  

  return (
    <>
<div className="container mt-5">
      <h2 className="text-center">Generate Your Password</h2>
      <div className="row justify-content-center mt-4">
        <div className="col-md-6 p-5 bg-primary text-white ">
          <div className="input-group mb-3">
            <input type="text" className="form-control" />
            <div className="input-group-append">
              <button className="btn btn-purple" type="button">
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
