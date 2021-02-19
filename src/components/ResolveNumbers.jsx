const Numbers = ({ inputNumber, setInputNumber, setOperator, light, setLight }) => {
  const showSurprise = () => {
    setInputNumber("Eu avisei!");
    document.querySelector('#root').classList.add('crazy');
    setLight(false);
  };
  
  const getResult = () => {
    try {
      const result = eval(inputNumber).toString();
      if (result === "Infinity") {
        return showSurprise();
      }
      setInputNumber(result);
      setOperator(null);
    } catch (e) {
      if (e.name === "SyntaxError" && e.message.includes('"0"-prefixed')) {
        setInputNumber("Error: Número iniciou com 0!");
      } else {
        setInputNumber("Error!");
      }
    }
  };

  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const result = numbers.map((number, index) => {
    if (index === numbers.length - 1) {
      return (
        <>
          <button
            onClick={() => setInputNumber("0")}
            className={`${light ? "light-button" : "dark-button"} m-55 button`}
          >
            C
          </button>
          <button
            key={index}
            onClick={() =>
              setInputNumber(
                inputNumber === "0" || parseInt(inputNumber) === false
                  ? number.toString()
                  : inputNumber.concat(number.toString())
              )
            }
            className={`${light ? "light-button" : "dark-button"} m-55 button`}
          >
            {number}
          </button>
          <button
            onClick={() => getResult()}
            className="m-55 equal-button button"
          >
            <i className="fas fa-equals"></i>
          </button>
        </>
      );
    }
    return (
      <button
        key={index}
        onClick={() =>
          setInputNumber(
            inputNumber === "0"
              ? number.toString()
              : inputNumber.concat(number.toString())
          )
        }
        className={`${light ? "light-button" : "dark-button"} m-55 button`}
      >
        {number}
      </button>
    );
  });

  return <div className="number-container">{result}</div>;
};

export default Numbers;
