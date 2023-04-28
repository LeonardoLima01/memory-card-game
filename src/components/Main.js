import { useEffect } from "react";
import Card from "./Card";

const generateNumber = () => Math.floor(Math.random() * 12);

let repeated;

const getNumbers = () => {
  repeated = [];
  while (repeated.length !== 12) {
    let n = generateNumber();

    while (repeated.includes(n)) {
      n = generateNumber();
    }
    repeated.push(n);
  }
};

getNumbers();

console.log(repeated);

export default function Main() {
  return (
    <main>
      {repeated.map((n) => {
        return <Card index={n} />;
      })}
    </main>
  );
}
