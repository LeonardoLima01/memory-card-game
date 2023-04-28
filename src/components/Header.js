import logo from "./../images/logo.png";

export default function Header() {
  return (
    <header>
      <img id="logo" src={logo} alt="one piece logo" />
      <span id="logo-text">Memory Piece</span>
    </header>
  );
}
