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

export default function Main() {
  return (
    <main>
      {repeated.map((n, index) => {
        return <Card index={n} key={index} />;
      })}
    </main>
  );
}
