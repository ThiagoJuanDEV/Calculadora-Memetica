const Numbers = ({ inputNumber, setInputNumber, setOperator, light }) => {
  const showSurprise = () => {
    setInputNumber("0");
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
      /* if(e.name === 'SyntaxError' && e.message.includes('"0"-prefixed')) {
        let expression = inputNumber.split(' ');
        let str = '';
        expression.forEach((e) => {
          let splitExp = e.split('')
          if(splitExp.length > 1 && splitExp[0] === '0') {
            expression.splice(splitExp.slice(1));
            return str.concat(` ${e}`);
          }
          str.concat(` ${e}`);
        });

        console.log(str);
      } */
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
                inputNumber === "0"
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
