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
            Jeg er en engageret og løsningsorienteret webudvikler, der skaber
            funktionelle og brugervenlige løsninger. Jeg arbejder med frontend
            (React/JS) og backend (Node.js/Express) og har erfaring med at bygge
            komplette webløsninger, hvor frontend og backend fungerer
            gnidningsfrit sammen.
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
