const Input = ({ inputNumber, setInputNumber, operator, previousNumber }) => {
  return (
    <>
      <input type="text" value={inputNumber} />
      <button onClick={() => setInputNumber('0')}>C</button>
    </>
  );
};

export default Input;
