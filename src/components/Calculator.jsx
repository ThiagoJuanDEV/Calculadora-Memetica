import Numbers from "./Numbers";
import Operators from "./Operators";
import Input from "./Input";

const Calculator = ({
  inputNumber,
  setInputNumber,
  operator,
  setOperator,
}) => {
  return (
    <div>
      <input type="range" value="0" onChange={() => ''} /> // Colocar propriedade OnCLick
      <Numbers inputNumber={inputNumber} setInputNumber={setInputNumber} />
      <Operators
        operator={operator}
        setOperator={setOperator}
        inputNumber={inputNumber}
        setInputNumber={setInputNumber}
      />
      <Input
        inputNumber={inputNumber}
        setInputNumber={setInputNumber}
        operator={operator}
        setOperator={setOperator}
      />
    </div>
  );
};

export default Calculator;
