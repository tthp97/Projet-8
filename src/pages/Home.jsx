import Footer from "../components/Footer/Footer.js";
import Header from "../components/Header/Header.js";
import "../style/Main.css";
import Card from "../components/Card/card.js";
import imgHdp from "../assets/img_haut_de_page.png";
import datas from "../datas/datas.json";

function Home() {
  return (
    <>
      <Header />
      <main className="mainContainer">
        <figure>
          <img src={imgHdp} className="imgHdp" alt="banière haut de page" />
          <figcaption>Chez vous, partout et ailleurs</figcaption>
        </figure>
        <section className="annoncesContainer">
          {datas.map((annonce) => (
            <Card
              key={annonce.id}
              id={annonce.id}
              cover={annonce.cover}
              title={annonce.title}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
