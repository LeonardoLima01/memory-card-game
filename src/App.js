import "./style.css";
import { useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  let cards = document.querySelectorAll(".card");
  useEffect(() => {
    for (let card of cards) {
      card.addEventListener("click", () => {
        console.log("sas");
      });
    }
  }, [cards]);

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
