import React, { useState } from "react";
import Score from "./components/Score";
import Header from "./components/Header";
import Cards from "./components/Cards";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [resetCards, setResetCards] = useState(false);

  function incrementScore() {
    if (score + 1 > bestScore) {
      setBestScore(score + 1);
    }
    setScore(score + 1);
    setResetCards(false);
  }

  function endCurrentStage() {
    setScore(0);
    setResetCards(true);
  }

  return (
    <div className="container">
      <Score score={score} bestScore={bestScore} />
      <Header />
      <Cards incrementScore={incrementScore} endCurrentStage={endCurrentStage} resetCards={resetCards}/>
    </div>
  );
}

export default App;
