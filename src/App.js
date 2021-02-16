import Calculator from "./components/Calculator";
import { useState } from "react";

function App() {
  const [inputNumber, setInputNumber] = useState("0");
  const [operator, setOperator] = useState(null);
  return (
    <Calculator
      inputNumber={inputNumber}
      setInputNumber={setInputNumber}
      operator={operator}
      setOperator={setOperator}
    />
  );
}

export default App;
