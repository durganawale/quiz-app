import React, { useState } from "react";
import "./Question.css";
function Question({ onFinish }) {
  const [answers, setAnswers] = useState({});

  const handleAnswer = (question, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: answer,
    }));
  };

  const handleSubmit = () => {
    let total = 0;

    if (answers.q1 === "New Delhi") total++;
    if (answers.q2 === "Mars") total++;
    if (answers.q3 === "7") total++;
    if (answers.q4 === "Pacific Ocean") total++;
    if (answers.q5 === "CSS") total++;

    onFinish(total);
  };

  return (
    <div className="quiz-container">
      <h2>1. What is the capital of India?</h2>
      {["Mumbai", "New Delhi", "Pune", "Chennai"].map((option) => (
        <label key={option}>
          <input
            type="radio"
            name="q1"
            value={option}
            onChange={() => handleAnswer("q1", option)}
          />{" "}
          {option}
          <br />
        </label>
      ))}

      <h2>2. Which planet is known as the Red Planet?</h2>
      {["Earth", "Venus", "Mars", "Jupiter"].map((option) => (
        <label key={option}>
          <input
            type="radio"
            name="q2"
            value={option}
            onChange={() => handleAnswer("q2", option)}
          />{" "}
          {option}
          <br />
        </label>
      ))}

      <h2>3. How many days are there in a week?</h2>
      {["5", "2", "7", "6"].map((option) => (
        <label key={option}>
          <input
            type="radio"
            name="q3"
            value={option}
            onChange={() => handleAnswer("q3", option)}
          />{" "}
          {option}
          <br />
        </label>
      ))}

      <h2>4. Which is the largest ocean in the world?</h2>
      {["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"].map(
        (option) => (
          <label key={option}>
            <input
              type="radio"
              name="q4"
              value={option}
              onChange={() => handleAnswer("q4", option)}
            />{" "}
            {option}
            <br />
          </label>
        ),
      )}

      <h2>5. Which language is used to style web pages?</h2>
      {["HTML", "JAVASCRIPT", "JAVA", "CSS"].map((option) => (
        <label key={option}>
          <input
            type="radio"
            name="q5"
            value={option}
            onChange={() => handleAnswer("q5", option)}
          />{" "}
          {option}
          <br />
        </label>
      ))}

      <br />
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Question;
