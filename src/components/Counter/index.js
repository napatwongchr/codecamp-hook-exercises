import React, { useState } from "react";
import "./index.css";

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="counter-app">
      <h2 className="counter-value">{counter}</h2>
      <div className="counter-menu">
        <button
          className="button counter-add-button"
          onClick={() => setCounter(counter + 1)}
        >
          +
        </button>
        <button
          className="button counter-subtract-button"
          onClick={() => setCounter(counter - 1)}
        >
          -
        </button>
        <button
          className="button counter-reset-button"
          onClick={() => setCounter(0)}
        >
          reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
