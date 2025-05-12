import styles from "./Logo.module.css";
import hunde from "../../../public/3hovdehund.png";
import bb from "../../../public/BB-logo.svg";

const Logo = () => {
  return (
    <>
      <section className={styles.logo}>
        <img src={hunde} alt="" />
        <div className={styles.BB}>
          <img src={bb} alt="" />
        </div>
      </section>
    </>
  );
};

export default Logo;