import React from "react";
import "./Home.css";

function Home({ onStart }) {
  return (
    <div className="homepage">
      <h1 className="Hedding">Quiz App</h1>
      <p className="quizpara">Test your knowledge with our quiz!</p>
      <button className="btn" onClick={onStart}>
        Start Quiz
      </button>
    </div>
  );
}

export default Home;
