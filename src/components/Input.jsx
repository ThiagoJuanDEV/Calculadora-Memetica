const Input = ({ inputNumber, setInputNumber, light}) => {
  

  return (
    <>
      <input
        type="text"
        value={inputNumber}
        onChange={(e) => setInputNumber(e.target.value)}
        className={`eval-input ${light ? '' : 'dark-input'}`}
      />
    </>
  );
};

export default Input;
