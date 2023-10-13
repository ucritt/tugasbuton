import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function tambah() {
    if (count < 10) { // Maksimal 10
      setCount(count + 1);
    }
  }

  function kurang() {
    if (count > 0) { // Minimum 0
      setCount(count - 1);
    }
  }

  function reset() {
    setCount(0);
  }

  return (
    <>
      <div className="container w-50 vh-100 d-flex justify-content-center align-items-center flex-column">
        <h1 className="text-center fw-bold">{count}</h1>
        <div className="d-flex justify-content-center align-items-center gap-3">
          <button className="btn btn-primary" onClick={kurang}>
            Kurang
          </button>
          <button className="btn btn-secondary" onClick={reset}>
            Reset
          </button>
          <button className="btn btn-success" onClick={tambah}>
            Tambah
          </button>
        </div>
      </div>
    </>
  );
}

export default App;