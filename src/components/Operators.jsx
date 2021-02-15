const Operators = ({ operator, setOperator, inputNumber, setInputNumber }) => {
  const operators = ["+", "-", "/", "x"];

  const operatorActive = (op) => {
    if (inputNumber.search(operator) || operator !== null) {
      setOperator(op);
      setInputNumber(`${inputNumber} ${op} `);
      return;
    }
    console.log("Você não pode fazer várias operações num lugar só!");
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
