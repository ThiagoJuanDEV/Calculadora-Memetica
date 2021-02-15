import Numbers from "./Numbers";
import Operators from "./Operators";
import Input from "./Input";
import Result from "./Result";

const Calculator = ({
  inputNumber,
  setInputNumber,
  operator,
  setOperator,
  previousNumber,
  setPreviousNumber,
  nextNumber,
  setNextNumber,
}) => {
  const cleanupInput = () => {
    setInputNumber("0");
  };

  return (
    <div>
      <Numbers inputNumber={inputNumber} setInputNumber={setInputNumber} />
      <Operators
        operator={operator}
        setOperator={setOperator}
        inputNumber={inputNumber}
        setInputNumber={setInputNumber}
      />
      <Result
        operator={operator}
        setOperator={setOperator}
        inputNumber={inputNumber}
        previousNumber={previousNumber}
        setInputNumber={setInputNumber}
        setPreviousNumber={setPreviousNumber}
      />
      <Input
        inputNumber={inputNumber}
        operator={operator}
        previousNumber={previousNumber}
      />
    </div>
  );
};

export default Calculator;
