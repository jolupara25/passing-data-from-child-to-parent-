import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

export default function Child({ setUIColor, UIColor }) {
  //// set default color UIColor to put the color inside the input
  const [activeColor, setActiveColor] = useState(UIColor);

  const handleChange = (e) => {
    const { value } = e.target;
    setActiveColor(value);
    setUIColor(value);
  };

  return (
    <input
      type="text"
      id="input"
      aria-label="input"
      onChange={handleChange}
      value={activeColor}
      style={{ textAlign: "center" }}
    />
  );
}
