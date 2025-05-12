import styles from "./PortfolioHeader.module.css";

const PortfolioHeader = ({ title }) => {
  return (
    <>
      <section className={styles.PortfolioHeader}>
        <h2>{title}</h2>
        
      </section>
    </>
  );
};

export default PortfolioHeader;