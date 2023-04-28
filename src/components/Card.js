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

let imgArr = [
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

let textArr = [
  "ace",
  "white beard",
  "chopper",
  "crocodile",
  "doflamingo",
  "luffy",
  "nami",
  "roger",
  "sabo",
  "sanji",
  "usopp",
  "zoro",
];

export default function Card(props) {
  return (
    <div className="card">
      <img src={imgArr[props.index]} alt="random one piece character" />
      <p>{textArr[props.index]}</p>
    </div>
  );
}
