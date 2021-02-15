const Result = ({ inputNumber, setInputNumber, operator, setOperator }) => {
  const getResult = () => {
    if (operator === "+") {
      let toResult = inputNumber.split(" ");
      let changed = toResult.filter((e) => {
        return e !== "+";
      });

      console.log(changed);

      let another = changed.map((e) => {
        return parseInt(e);
      });
      console.log(another);

      let c = 0;
      for (let number in another) {
        c += another[number];
      }

      setInputNumber(c);
      setOperator(null);
    }
  };

  return <button onClick={() => getResult()}>=</button>;
};

export default Result;
