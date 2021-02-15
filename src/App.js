import Calculator from "./components/Calculator";
import { useState } from "react";

function App() {
  const [inputNumber, setInputNumber] = useState("0");
  const [operator, setOperator] = useState(null);
  const [previousNumber, setPreviousNumber] = useState(null);
  const [nextNumber, setNextNumber] = useState(null);
  return (
    <Calculator
      inputNumber={inputNumber}
      setInputNumber={setInputNumber}
      operator={operator}
      setOperator={setOperator}
      previousNumber={previousNumber}
      setPreviousNumber={setPreviousNumber}
      nextNumber={nextNumber}
      setNextNumber={setNextNumber}
    />
  );
}

export default App;
