const Operators = ({ setOperator, inputNumber, setInputNumber, light }) => {
  const operators = ["+", "-", "/", "*"];

  const operatorActive = (op) => {
    setOperator(op);
    setInputNumber(`${inputNumber} ${op} `);
  };

  return (
    <div>
      {operators.map((operator, index) => {
        return (
          <button key={index} onClick={() => operatorActive(operator)} className={`${light ? 'light-button' : 'dark-button'} m-55 button`}>
            {operator}
          </button>
        );
      })}
    </div>
  );
};

export default Operators;
