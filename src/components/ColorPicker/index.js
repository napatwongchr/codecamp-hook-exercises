import React, { useState } from "react";
import "./index.css";

function ColorPicker() {
  const [color, setColor] = useState("");
  return (
    <div className="color-picker-container">
      <h2 className="color-picker-heading" style={{ color: color }}>
        COLORFUL
      </h2>
      <input type="color" onChange={(e) => setColor(e.target.value)} />
    </div>
  );
}

export default ColorPicker;
