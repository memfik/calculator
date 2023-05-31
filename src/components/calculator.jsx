import React, { useState } from 'react';
import s from './calculator.module.css';
const Calculator = () => {
  const [result, setResult] = useState('');
  const clear = () => {
    setResult('');
  };
  const setValue = (e) => {
    setResult(result + e.target.value);
  };
  const decide = () => {
    setResult(eval(result));
  };
  return (
    <div className={s.container}>
      <div className={s.root}>
        <div className={s.result}>{result}</div>
        <div className={s.buttons}>
          <button value="7" onClick={setValue}>
            7
          </button>
          <button value="8" onClick={setValue}>
            8
          </button>
          <button value="9" onClick={setValue}>
            9
          </button>
          <button value="/" onClick={setValue}>
            /
          </button>

          <button value="4" onClick={setValue}>
            4
          </button>
          <button value="5" onClick={setValue}>
            5
          </button>
          <button value="6" onClick={setValue}>
            6
          </button>
          <button value="*" onClick={setValue}>
            *
          </button>
          <button value="1" onClick={setValue}>
            1
          </button>
          <button value="2" onClick={setValue}>
            2
          </button>
          <button value="3" onClick={setValue}>
            3
          </button>
          <button value="+" onClick={setValue}>
            +
          </button>
          <button onClick={clear}>res</button>
          <button value="0" onClick={setValue}>
            0
          </button>
          <button onClick={decide}>=</button>
          <button value="-" onClick={setValue}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
