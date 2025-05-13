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
      <Header />
      <div id="portfolio">
        <SetionHeader title="Portfolio"/>
      </div>
      <PortfolioHeader title="Web projekt" />
      <WebCards />
      <PortfolioHeader title="Foto projekt"/>
      <Foto />
      <PortfolioHeader title="Logo projekt" />
      <Logo />

      <div id="skills">
        <SetionHeader title="Mine skills" />
      </div>
      <Skills />

      <div id="contact">
        <SetionHeader title="Kontakts" />
      </div>
      <Contact />
    </section>
  );
};
export default Home;
