const Input = ({ inputNumber, setInputNumber, setOperator }) => {
  const showSurprise = () => {
    
    setInputNumber('0');
  }
  const getResult = () => {
    try {
      const result = eval(inputNumber).toString();
      if(result === 'Infinity') {
        return showSurprise()
      }
      setInputNumber(result);
      setOperator(null);
    } catch(e) {
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

  return (
    <>
      <input
        type="text"
        value={inputNumber}
        onChange={() => ''}
      />
      <button onClick={() => getResult()}>=</button>
      <button onClick={() => setInputNumber("0")}>C</button>
    </>
  );
};

export default Input;
