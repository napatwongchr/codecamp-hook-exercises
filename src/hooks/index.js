import { useState, useEffect } from "react";

export function useFormInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  function handleValueChange(e) {
    setValue(e.target.value);
  }

  return {
    value: value,
    handleValueChange: handleValueChange,
    setValue: setValue,
  };
}

export function useWindowResize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // track no state

  function handleResize() {
    setWidth(window.innerWidth);
  }

  return width;
}

export function useDocumentTitle(firstname, lastname) {
  useEffect(() => {
    document.title = `${firstname.value} ${lastname.value}`;
  }); // track all states
}
