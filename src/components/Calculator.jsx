import Numbers from "./ResolveNumbers";
import Operators from "./Operators";
import Input from "./Input";

import {useRef} from 'react';

const Calculator = ({
  inputNumber,
  setInputNumber,
  operator,
  setOperator,
  light,
  setLight
}) => {
  const input = useRef(null);
  
  const mode = () => {
    input.current.classList.toggle('dark');

    if(input.current.classList.contains('dark')) {

      setLight(false);
      document.querySelector("#root").style.backgroundColor = '#383838';
      
      return;
    }

    setLight(true);
    document.querySelector("#root").style.backgroundColor = '#E5E5E5';
  }

  return (
    <>
      <div className={`calculator ${light ? '' : 'dark-calc'}`}>
        <h4>Não divida por 0!</h4>
        <Input
          inputNumber={inputNumber}
          setInputNumber={setInputNumber}
          light={light}
        />
        <div className="buttons">
          <Numbers inputNumber={inputNumber} setInputNumber={setInputNumber} setOperator={setOperator} light={light} setLight={setLight} light={light}/>
          <Operators
            operator={operator}
            setOperator={setOperator}
            inputNumber={inputNumber}
            setInputNumber={setInputNumber}
            light={light}
            setLight={setLight}
          />
        </div>
      </div>
      <div className="mode-container" onClick={() => mode()}>
       <input type="range" min="0" value={light ? "0" : "100"} max="100"  className="mode" ref={input}/>
       <i className="fas fa-sun"></i>
       <i className="fas fa-moon"></i>
      </div>
     </> 
  );
};

export default Calculator;
