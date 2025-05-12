import styles from "./WebCards.module.css";
import SC from "../../../public/SimilieCrohet2.png";
import LS from "../../../public/lse-shoes.png";
import BB from "../../../public/blomster_butiken.png";
import bb from "../../../public/Bubblebee-s-blog.png";
import { Link } from "react-router-dom";

const WebCards = () => {
  return (
    <>
      <section className={styles.body}>
        <div className={styles.card}>
          <img src={LS} alt="" />
          <div className={styles.cardContent}>
            <h2>Vanilla LSE Shoes</h2>
            <h3>
              I dette projekt har jeg arbejdet i Vanilla JavaScript. Det var en
              af de første større opgaver, vi lavede i grupper. Min rolle var at
              redigere billeder i Photoshop, skrive tekster og lave
              produktkortene.
            </h3>
            <button>
              <a href=" https://silke-j.github.io/LSE-shoes/">Se projekt</a>
            </button>
          </div>
        </div>

        <div className={styles.card}>
          <img src={bb} alt="" />
          <div className={styles.cardContent}>
            <h2>React bubblebee`s blog</h2>
            <h3>
              I dette projekt har jeg arbejdet i React. Det var en af de større
              opgaver, jeg lavede alene. Jeg valgte at udvikle min egen blog om
              mine rejser og arbejdede især med at få JSON-data til at fungere
              korrekt i projektet.
            </h3>
            <button>
              <a href="https://silke-j.github.io/bubblebee-s-blog/">
                Se projekt
              </a>
            </button>
          </div>
        </div>

        <div className={styles.card}>
          <img src={BB} alt="" />
          <div className={styles.cardContent}>
            <h2>SCSS BlosmerButikken</h2>
            <h3>
              I dette projekt har jeg arbejdet med SCSS. Det er et hobbyprojekt,
              som jeg har valgt at præsentere i skolen for at vise, hvad jeg har
              lavet. Derfor er nogle af knapperne på siden ikke funktionelle, da
              projektet ikke er færdigudviklet.
            </h3>
            <button>
              <a href="https://silke-j.github.io/Blosterbutikken/">
                Se projekt
              </a>
            </button>
          </div>
        </div>

        <div className={styles.card}>
          <img src={SC} alt="" />
          <div className={styles.cardContent}>
            <h2>WordPress Similie Crohet</h2>
            <h3>
              I dette projekt har jeg arbejdet med WordPress. Min makker og jeg
              udarbejdede en produktionsrapport og udviklede en hjemmeside, hvor
              man kan købe produkter og finde information. Vi arbejdede også med
              SEO for at øge synligheden. Da siden kun var online i to uger,
              viser jeg i stedet vores Figma-design, som ligner den færdige
              løsning.
            </h3>

            <button>
              <Link to={"/figma"}>
                <a>Se projekt</a>
              </Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebCards;
