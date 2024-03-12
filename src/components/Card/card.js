import "../../style/Main.css";
import { Link } from "react-router-dom";

function Card({ id, title, cover }) {
  return (
    <Link key={id} to={`/projet-8/Annonces/${id}`}>
      <article className="cardAnnonce">
        <img src={cover} alt={title} />
        <div className="CardContent">
          <h4>{title}</h4>
        </div>
      </article>
    </Link>
  );
}
export default Card;
