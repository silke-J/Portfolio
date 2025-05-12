import styles from "./Header.module.css";
import billede from "../../../public/portfolio_billede.jpg"
const Header = () => {
  return (
    <>
      <header className={styles.HeaderFlex} id="about">
        <div className={styles.HeaderText}>
          <h2>Hej der!</h2>
          <h1>
            Jeg er <a>silke</a>{" "}
          </h1>
          <p>Webudvirker</p>
          <h3>
            Jeg er mødestabil, pligtopfyldende og imødekommende. Jeg er altid
            klar til at hjælpe, hvis der er behov for det, og jeg yder mit
            bedste i alle opgaver. Jeg har en løsningsorienteret tilgang og går
            målrettet efter at identificere problemer og finde den rette
            løsning.
          </h3>
          <button>

            <a href="Silkes_cv.pdf" download="Silkes-Cv">
              {" "}
              Download CV
            </a>
          </button>
        </div>
        <div className={styles.HeaderImg}>
          <img src={billede} />
        </div>
      </header>
    </>
  );
};

export default Header;
