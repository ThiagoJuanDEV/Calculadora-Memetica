const Operators = ({ setOperator, inputNumber, setInputNumber }) => {
  const operators = ["+", "-", "/", "*"];

  const operatorActive = (op) => {
    setOperator(op);
    setInputNumber(`${inputNumber} ${op} `);
  };

  return (
    <div>
      {operators.map((operator, index) => {
        return (
          <button key={index} onClick={() => operatorActive(operator)}>
            {operator}
          </button>
        );
      })}
    </div>
  );
};

export default Operators;
