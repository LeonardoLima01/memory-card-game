import Card from "./Card";

export default function Main(props) {
  let repeated = [];

  let randomIndex = Math.floor(Math.random() * 12);
  while (repeated.length !== 12) {
    while (repeated.includes(randomIndex)) {
      randomIndex = Math.floor(Math.random() * 12);
    }
    repeated.push(randomIndex);
  }

  return (
    <main>
      {repeated.map((i, key) => {
        return (
          <Card
            index={i}
            key={key}
            score={props.score}
            setScore={props.setScore}
            highScore={props.highScore}
            setHighScore={props.setHighScore}
          />
        );
      })}
    </main>
  );
}
