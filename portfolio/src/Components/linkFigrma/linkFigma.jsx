import styles from "./linkFigma.module.css";

const LinkFigma = () => {
  return (
    <section className={styles.link}>
      <h1> WordPress Similie Crohet</h1>
      <p>Vent et øjeblik og se magi på skærmen !!</p>
      <div className={styles.linkFigma}>
        <iframe
          src="https://embed.figma.com/design/SJKGWfRQsA5lfrk84kHE0P/Untitled?node-id=0-1&embed-host=share"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
};

export default LinkFigma; 