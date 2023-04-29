import "./style.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  let [score, setScore] = useState(0);
  let [highScore, setHighScore] = useState(0);

  return (
    <div className="App">
      <Header score={score} highScore={highScore} />
      <Main
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
      />
    </div>
  );
}

export default App;
