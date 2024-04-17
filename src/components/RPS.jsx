import React, { useState } from "react";
import "./RPS.css";

const options = ["rock", "paper", "scissors"];

const RPS = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);

  const determineWinner = (user, computer) => {
    if (user === computer) {
      return "It's a tie!";
    } else if (
      (user === "rock" && computer === "scissors") ||
      (user === "scissors" && computer === "paper") ||
      (user === "paper" && computer === "rock")
    ) {
      setScore(score + 1);
      return "You win!";
    } else {
      return "You lose!";
    }
  };

  const play = (choice) => {
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    setUserChoice(choice);
    setComputerChoice(computerChoice);
    const result = determineWinner(choice, computerChoice);
    setResult(result);
  };

  return (
    <div className="game">
      <div className="game-header">
        <h1 className="game-title">Rock Paper Scissors</h1>
        <div className="game-score">Score: {score}</div>
      </div>
      <div className="game-options">
        {options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => play(option)}
            className={`option option-${option}`}
          >
            <span className={`icon icon-${option}`}></span>
          </button>
        ))}
      </div>
      <div className="game-result">
        <p>{result}</p>
        {result && (
          <>
            <p>Your choice: {userChoice}</p>
            <p>Computer's choice: {computerChoice}</p>
          </>
        )}
      </div>
      <button className="game-rules">RULES</button>
    </div>
  );
};

export default RPS;
