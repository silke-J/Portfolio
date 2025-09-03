import styles from "./WebCards.module.css";
import SC from "../../../public/SimilieCrohet2.png";
import LS from "../../../public/lse-shoes.png";
import BB from "../../../public/blomster_butiken.png";
import bb from "../../../public/Bubblebee-s-blog.png";
import KP from "../../../public/kaffepote.png";
import ML from "../../../public/musikkeliste.png";
import NQ from "../../../public/naturQuiz.png";
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

        <div className={styles.card}>
          <img src={NQ} alt="" />
          <div className={styles.cardContent}>
            <h2>Natur Quiz</h2>
            <h3>
              I dette projekt har jeg arbejdet med Vanilla JavaScript. Det er et
              hobbyprojekt, som jeg lavede for at prøve noget nyt og udfordre
              mig selv. Projektet tog mig cirka en uge at færdiggøre.{" "}
            </h3>
            <button>
              <a href=" https://silke-j.github.io/NaturQuzi/">Se projekt</a>
            </button>
          </div>
        </div>

        <div className={styles.card}>
          <img src={ML} alt="" />
          <div className={styles.cardContent}>
            <h2>Musik list</h2>
            <h3>
              I dette projekt har jeg arbejdet med React. Det er et
              hobbyprojekt, som jeg har lavet for at prøve noget nyt og udfordre
              mig selv. Nogle af navnene på siden er derfor ikke rigtigt, da
              projektet ikke er en stor opgave, men primært en mulighed for at
              lære og eksperimentere med nye teknologier.
            </h3>
            <button>
              <a href=" https://silke-j.github.io/MusikkeListen/">Se projekt</a>
            </button>
          </div>
        </div>

        <div className={styles.card}>
          <img src={KP} alt="" />
          <div className={styles.cardContent}>
            <h2>KaffePote</h2>
            <h3>
              I dette projekt har jeg arbejdet med React. Projektet er lavet som
              en øvelse, hvor jeg forestiller mig, at det er for en kunde eller
              et firma, og jeg har udviklet det som mit eget firma. Projektet
              skulle færdiggøres på en uge, så nogle elementer på siden er ikke
              helt færdige eller optimerede, da projektet ikke er fuldt ud
              udviklet.
            </h3>
            <button>
              <a href="  https://silke-j.github.io/KaffePote/">Se projekt</a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebCards;
