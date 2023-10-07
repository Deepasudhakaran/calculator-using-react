import React, { useState } from 'react'
import './calcu.css'

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
  
    const handleInput = (value) => {
      setInput(input + value);
    };
  
    const clearInput = () => {
      setInput('');
      setResult('');
    };
    const handledelete=()=>{
        setInput(input.slice(0,-1))
    }
  
    const calculateResult = () => {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    };
  return (
    <div>
        <div className="calculator">
      <div className="input">{input}{result}</div>
     
      <div className="buttons">
      <button style={{color:'red',fontSize:'bold'}} onClick={clearInput}>C</button>
      <button style={{color:'red',fontSize:'bold'}} onClick={handledelete}>AC</button>
      <button onClick={() => handleInput('%')}>%</button>
      <button onClick={() => handleInput('/')}>/</button>
        <button onClick={() => handleInput('7')}>7</button>
        <button onClick={() => handleInput('8')}>8</button>
        <button onClick={() => handleInput('9')}>9</button>
        <button onClick={() => handleInput('*')}>*</button>
        <button onClick={() => handleInput('4')}>4</button>
        <button onClick={() => handleInput('5')}>5</button>
        <button onClick={() => handleInput('6')}>6</button>
        <button onClick={() => handleInput('+')}>+</button>
        <button onClick={() => handleInput('1')}>1</button>
        <button onClick={() => handleInput('2')}>2</button>
        <button onClick={() => handleInput('3')}>3</button>
        <button onClick={() => handleInput('-')}>-</button>
        <button onClick={() => handleInput('0')}>0</button>
        <button onClick={() => handleInput('00')}>00</button>
        <button onClick={() => handleInput('.')}>.</button>
        
        
        
        
        <button onClick={calculateResult}>=</button>
        
        </div>
        </div>

  
    </div>
  )
}

export default Calculator