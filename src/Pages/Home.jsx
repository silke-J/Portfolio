import Contact from "../Components/contact/Contact";
import Foto from "../Components/Foto/foto";
import Header from "../Components/header/Header";
import Logo from "../Components/logo/Logo";
import PortfolioHeader from "../Components/portfolioheader/PortfolioHeader";
import SetionHeader from "../Components/setionheader/SetionHeader";
import Skills from "../Components/skills/Skills";
import WebCards from "../Components/webcards/WebCards";



const Home = () => {
  return (
    <section>
      
      <section id="about">
        <Header />
      </section>

      <section id="portfolio">
        <SetionHeader title="Portfolio" />
      </section>
      <PortfolioHeader title="Web projekt" />
      <WebCards />
      <PortfolioHeader title="Foto projekt" />
      <Foto />
      <PortfolioHeader title="Logo projekt" />
      <Logo />

      <section id="skills">
        <SetionHeader title="Mine skills" />
      </section>
      <Skills />

      <section id="contact">
        <SetionHeader title="Kontakts" />
      </section>
      <Contact />
    </section>
  );
};
export default Home;
