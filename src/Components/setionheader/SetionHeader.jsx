import styles from "./SetionHeader.module.css";
const SetionHeader = ({ title, id }) => {
  return (
    <>
      <section className={styles.SectionHeader}>
        <h2>{title}</h2>
      </section>
    </>
  );
};

export default SetionHeader; 