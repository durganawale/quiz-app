import React from "react";
import "./Result.css";
function Result({ score, onPlayAgain }) {
  return (
    <div className="result">
      <h1>Quiz Completed! 🎉</h1>

      <h2>Your Score: {score}/5</h2>

      {score >= 4 ? (
        <p>Excellent! 🌟</p>
      ) : score >= 2 ? (
        <p>Good Job! 👏</p>
      ) : (
        <p>Try Again! 💪</p>
      )}

      <button onClick={onPlayAgain}>Play Again</button>
    </div>
  );
}

export default Result;
