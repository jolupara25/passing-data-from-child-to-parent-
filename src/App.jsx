import { useState } from "react";
import "./App.css";
import Child from "./Child";

function App() {
  //// set default color "red"
  const [UIColor, setUIColor] = useState("red");

  return (
    <div className="App">
      <div>
        <div className="square" style={{ backgroundColor: `${UIColor}` }}></div>
        {/* pass setUIColor to child component to modify the color and UIColor is the default variable */}
        <Child setUIColor={setUIColor} UIColor={UIColor} />
      </div>
    </div>
  );
}

export default App;
