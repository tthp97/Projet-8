import "../style/AnnoncePage.css";
import { Navigate, useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Tags from "../components/Tags/Tags.js";
import datas from "../datas/datas.json";
import Collapse from "../components/Collapse/Collapse";
import Stars from "../components/Stars/Stars";
import AnnonceProfil from "../components/AnnonceProfil/AnnonceProfil";
import Gallery from "../components/Gallery/Gallery";

function AnnoncePage() {
  const { id } = useParams();
  const infoAnnonce = datas.find((annonce) => annonce.id === id);
  if (!infoAnnonce) {
    return <Navigate to="*" />;
  } else {
    return (
      <>
        <Header />
        <main className="annoncePageMC">
          <section className="annonceContent">
            <Gallery pictures={infoAnnonce.pictures} />
            <div className="profilInfoWithStars">
              <div className="titleAnnonce">
                <h1>{infoAnnonce.title}</h1>
                <h3>{infoAnnonce.location}</h3>
                <div className="allTags">
                  {infoAnnonce.tags.map((tag, index) => (
                    <Tags key={`${infoAnnonce.id}+${index++}`} tags={tag} />
                  ))}
                </div>
              </div>
              <div className="profilWithRate">
                <AnnonceProfil
                  name={infoAnnonce.host.name}
                  picture={infoAnnonce.host.picture}
                />
                <Stars id={id} rating={infoAnnonce.rating} />
              </div>
            </div>

            <div className="collapseContainer">
              <Collapse
                title={"Description"}
                description={infoAnnonce.description}
                id={id}
              />
              <Collapse
                title={"Equipement"}
                equipements={infoAnnonce.equipments}
                id={id}
              />
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}
export default AnnoncePage;
