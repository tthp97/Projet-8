import "../../style/Layout.css";
import logoKasa from "../../assets/logoKasa.png";
import { Link } from "react-router-dom";

function Header() {
  let classAccueil = "Accueil";
  let classAPropos = "APropos";

  const url = window.location.pathname;

  return (
    <header>
      <img src={logoKasa} className="logoHeader" alt="logo du site" />
      <nav className="NavHeader">
        <ul>
          <li className={url === "/projet-8" ? "underline" : ""}>
            <Link className={classAccueil} to="/projet-8">
              Acceuil
            </Link>
          </li>
          <li className={url === "/About" ? "underline" : ""}>
            <Link className={classAPropos} to="/About">
              A propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
