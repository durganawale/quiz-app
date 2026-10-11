import React, { useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import Question from "./Components/Question";
import Result from "./Components/Result";

function App() {
  const [page, setPage] = useState("home");
  const [score, setScore] = useState(0);

  return (
    <>
      {page === "home" && <Home onStart={() => setPage("quiz")} />}

      {page === "quiz" && (
        <Question
          onFinish={(finalScore) => {
            setScore(finalScore);
            setPage("result");
          }}
        />
      )}

      {page === "result" && (
        <Result score={score} onPlayAgain={() => setPage("home")} />
      )}
    </>
  );
}

export default App;
