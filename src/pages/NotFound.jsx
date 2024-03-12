import Header from "../components/Header/Header";
import { Link } from "react-router-dom";
import "../style/NotFound.css";
import Footer from "../components/Footer/Footer";
function NotFound() {
  return (
    <>
      <Header />
      <main className="mainContainerNotFound">
        <h1>404</h1>
        <h2>La page que vous demandez n'existe pas.</h2>
        <Link to="projet-8">
          <h5>Retournez vers la page d'accueil</h5>
        </Link>
      </main>
      <Footer />
    </>
  );
}
export default NotFound;
