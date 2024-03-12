import "../style/About.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import imgBanAbout from "../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import collapseAbout from "../datas/collapseAbout.json";
import Collapse from "../components/Collapse/Collapse";
function About() {
  return (
    <>
      <Header />
      <main className="aboutMainContainer">
        <img
          className="bannerAbout"
          src={imgBanAbout}
          alt="Bannière page about"
        />
        <section className="principeContainer">
          {collapseAbout.map((collapse) => (
            <Collapse
              key={collapse.id}
              title={collapse.title}
              description={collapse.description}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
export default About;
