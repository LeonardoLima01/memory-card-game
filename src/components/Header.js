import logo from "./../images/logo.png";

export default function Header(props) {
  return (
    <header>
      <img id="logo" src={logo} alt="one piece logo" />
      <span id="logo-text">Memory Piece</span>
      <h3>Score: {props.score}</h3>
      <h3>High Score: {props.highScore}</h3>
    </header>
  );
}
