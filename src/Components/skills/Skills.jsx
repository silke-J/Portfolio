import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <>
      <section className={styles.Skills}>
        <div className={styles.row}>
          <div className={styles.circle}>
            <h2>JS</h2>
            <h3>
              Jeg bruger ofte JavaScript i mine projekter og har en god
              forståelse for det, men der er stadig meget, jeg gerne vil lære og
              forbedre.
            </h3>
          </div>

          <div className={styles.circle}>
            <h2>Vanilla </h2>
            <h3>
              Jeg har kendskab til Vanilla JavaScript, da det er grundlaget for
              min læring. Derfor har jeg opnået en god forståelse for sprogets
              opbygning og logik.
            </h3>
          </div>

          <div className={styles.circle}>
            <h2>React</h2>
            <h3>
              Jeg bruger ofte React i mine projekter og har opnået en god
              forståelse for det. Jeg fokuserer på at holde en klar og
              struktureret mappestruktur.
            </h3>
          </div>

          <div className={styles.circle}>
            <h2>Scss</h2>
            <h3>
              Jeg har arbejdet med SCSS og fået en god forståelse for det,
              selvom vi ikke nåede at udvikle hele løsningen som oprindeligt
              planlagt.
            </h3>
          </div>

          <div className={styles.circle}>
            <h2>illustrator</h2>
            <h3>
              Jeg bruger Adobe Illustrator til at designe grafiske elementer,
              især logoer.
            </h3>
          </div>

          <div className={styles.circle}>
            <h2>Photoshop</h2>
            <h3>
              Jeg bruger Photoshop til at redigere billeder og optimere dem til
              web. Det sikrer, at billederne er både flotte og hurtige at
              indlæse online.
            </h3>
          </div>

          <div className={styles.circle}>
            <h2>XD</h2>
            <h3>
              Jeg kan også godt bruger XD til at visualisere idéer, lave layout
              og sikre et klart designgrundlag, før jeg går videre med udvikling
              og kodning af projektet.
            </h3>
          </div>

          <div className={styles.circle}>
            <h2>Figma</h2>
            <h3>
              Jeg bruger Figma til at visualisere idéer, lave layout og sikre et
              klart designgrundlag, før jeg går videre med udvikling og kodning
              af projektet.
            </h3>
          </div>

          <div className={styles.circle}>
            <h2>Wordpress</h2>
            <h3>
              Jeg har arbejdet med WordPress én gang, men har opnået en god
              grundlæggende forståelse for, hvordan systemet fungerer og bruges
              til webudvikling.
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
