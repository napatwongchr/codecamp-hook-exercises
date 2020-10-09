import React, { useState, useEffect } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      tick();
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <h1
      style={{
        textAlign: "center",
        fontSize: "60px",
        color: "var(--main-branding-color-500)",
      }}
    >
      {date.toLocaleTimeString()}
    </h1>
  );
}

export default Clock;
