import React from "react";
import { useEffect } from "react";
import ace from "./../images/ace.png";
import whiteBeard from "./../images/whiteBeard.png";
import chopper from "./../images/chopper.png";
import crocodile from "./../images/crocodile.png";
import doflamingo from "./../images/doflamingo.png";
import luffy from "./../images/luffy.png";
import nami from "./../images/nami.png";
import roger from "./../images/roger.png";
import sabo from "./../images/sabo.png";
import sanji from "./../images/sanji.png";
import usopp from "./../images/usopp.png";
import zoro from "./../images/zoro.png";

const imgArr = [
  ace,
  whiteBeard,
  chopper,
  crocodile,
  doflamingo,
  luffy,
  nami,
  roger,
  sabo,
  sanji,
  usopp,
  zoro,
];

let clicked = {
  ace: false,
  whiteBeard: false,
  chopper: false,
  crocodile: false,
  doflamingo: false,
  luffy: false,
  nami: false,
  roger: false,
  sabo: false,
  sanji: false,
  usopp: false,
  zoro: false,
};

let setAllFalse = (obj) => {
  for (let i in obj) obj[i] = false;
};

function Card(props) {
  const handleClick = (e) => {
    let name = e.target.src.split("/").pop().split(".")[0];
    if (!clicked[name]) props.setScore((prevScore) => prevScore + 1);
    else {
      if (props.score > props.highScore) props.setHighScore(props.score);
      props.setScore(0);
      setAllFalse(clicked);
      return;
    }
    clicked[name] = !clicked.name;
  };

  useEffect(() => {
    const cardElement = document.querySelector(`.card-${props.index}`);
    cardElement.addEventListener("click", handleClick);
    return () => {
      cardElement.removeEventListener("click", handleClick);
    };
  }, [props.index]);

  const randomImg = imgArr[props.index];
  const imageName = randomImg.split("/").pop().split(".")[0];
  return (
    <div className={`card card-${props.index}`}>
      <img src={randomImg} alt="random one piece character" />
      <p>{imageName}</p>
    </div>
  );
}

export default Card;
