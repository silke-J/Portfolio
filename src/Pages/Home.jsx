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
      <SetionHeader title="Portfolio" id="portfolio" />
      <PortfolioHeader title="Web projekt" />
      <WebCards />
      <PortfolioHeader title="Foto projekt" />
       <Foto/>
      <PortfolioHeader title="Logo projekt" />
      <Logo />
      <SetionHeader title="Mine skills" id="skill" />
      <Skills />

      <SetionHeader title="Kontakts" id="contact" />
      <Contact />
    </section>
  );
};
export default Home;
