import React, { useState } from "react";
import './style.css'


function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [operator, setOperator] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      calculateResult();
    } else if (value === "C") {
      clearInput();
    } else {
      setInput(input + value);
    }
  };

  const calculateResult = () => {
    try {
      const calculatedResult = eval(input);
      setResult(calculatedResult);
      setInput(calculatedResult.toString());
    } catch (error) {
      setResult("Ошибка");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="calc">
      <input type="text" value={input} readOnly />
      <div>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("+")}>+</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("*")}>*</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button onClick={() => handleButtonClick("=")}>=</button>
        <button onClick={() => handleButtonClick("/")}>/</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick("C")}>C</button>
      </div>
      <div>
        <p>Result: {result}</p>
      </div>
    </div>
  );
}

export default Calculator;
