import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";

function Header({loggedIn}) {


  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src={logo} alt="Логотип" />
      </Link>
      {loggedIn && (
        <button className="header__burger link" >
          <div className="header__burger-line"></div>
          <div className="header__burger-line"></div>
          <div className="header__burger-line"></div>
        </button>
      )}
      <Navigation loggedIn={loggedIn}  />
    </header>
  );
}

export default Header;
