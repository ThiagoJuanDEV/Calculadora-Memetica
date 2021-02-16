const Result = ({ inputNumber, setInputNumber, operator, setOperator }) => {
  const variableManagment = () => {
    let splitArray = inputNumber.split(" ");

    let numbersToOperate = splitArray.filter((e) => {
      return e !== operator;
    });

    return numbersToOperate.map((number) => {
      return parseInt(number);
    });
  };
  /* Por enquanto não acontece, mas a minha ideia é fazer várias operações numa parte só! */
  const getResult = () => {
    if(inputNumber === '0') {
      return;
    }
    else if(operator === '+') {
      let operate = variableManagment();
      
      let result = 0;
      let number;

      for(number in operate) { // Aqui tem um escopo de como podemos fazer!
        result += operate[number]
      };

      setOperator(null);
      setInputNumber(result.toString())
    }
    else if(operator === '-') {
      let operate = variableManagment();

      setOperator(null);

      setInputNumber((operate[0] - operate[1]).toString())
    }
    else if(operator === '*') {
      let operate = variableManagment();

      let result = 1;
      let number;
      
      for(number in operate) {
        result *= operate[number]
      };

      setOperator(null);

      setInputNumber(result.toString())
    }
    else {
      let operate = variableManagment();

      setOperator(null);

      setInputNumber((operate[0] / operate[1]).toString());
    }

  };
  return <button onClick={() =>  getResult()}>=</button>;
};

export default Result;
