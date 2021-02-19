import Calculator from "./components/Calculator";
import "./styles/main.css";
import "./styles/media.css";
import { useState } from "react";

function App() {
  const [inputNumber, setInputNumber] = useState("0");
  const [operator, setOperator] = useState(null);
  const [light, setLight] = useState(true);
  return (
    <Calculator
      inputNumber={inputNumber}
      setInputNumber={setInputNumber}
      operator={operator}
      setOperator={setOperator}
      light={light}
      setLight={setLight}
    />
  );
}

export default App;
