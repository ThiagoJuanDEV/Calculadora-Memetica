const Numbers = ({ inputNumber, setInputNumber }) => {
  let numbers = [];
  for (let c = 0; c < 10; c++) {
    numbers.push(c);
  }

  const result = numbers.map((number, index) => {
    return (
      <button
        key={index}
        onClick={() =>
          setInputNumber(
            inputNumber === "0" ? number.toString() : inputNumber.concat(number)
          )
        }
      >
        {number}
      </button>
    );
  });

  return <div>{result}</div>;
};

export default Numbers;
