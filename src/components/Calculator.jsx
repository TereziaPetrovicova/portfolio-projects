import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleButtonClick = (value) => {
    if (value === "C") {
      setInput("");
      setResult(null);
      return;
    }

    if (value === "=") {
      if (input) {
        try {
          setResult(eval(input));
        } catch (error) {
          setResult("Error");
        }
      }
      return;
    }

    setInput(input + value);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-900">
      <div className="calculator shadow-2xl">
        <div className="screen bg-gray-800 text-white">
          {result !== null ? <div className="result">{result}</div> : null}
          <div className="input">{input || "0"}</div>
        </div>
        <div className="buttons">
          {[
            "C",
            "+/-",
            "%",
            "/",
            "7",
            "8",
            "9",
            "*",
            "4",
            "5",
            "6",
            "-",
            "1",
            "2",
            "3",
            "+",
            "0",
            ".",
            "=",
          ].map((buttonValue) => (
            <button
              key={buttonValue}
              onClick={() => handleButtonClick(buttonValue)}
              className={`button ${buttonValue === "0" ? "zero" : ""} ${
                buttonValue === "=" ? "equals" : ""
              }`}
            >
              {buttonValue}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
