import "../../style/Layout.css";
import { ReactComponent as FooterLogo } from "../../assets/LOGO.svg";

function Footer() {
  return (
    <footer>
      <FooterLogo fill="black" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
