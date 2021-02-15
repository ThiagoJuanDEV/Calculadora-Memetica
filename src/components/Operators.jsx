const Operators = ({ operator, setOperator, inputNumber, setInputNumber }) => {
  const operators = ["+", "-", "/", "*"];

  const operatorActive = (op) => {
    if  (operator === null) {
      setOperator(op);
      setInputNumber(`${inputNumber} ${op} `);
    } else {
      return;
    }
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
