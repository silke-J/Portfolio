import styles from "./Contact.module.css";
import { BsEnvelopeFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
const Contact = () => {
  return (
    <>
      <section className={styles.Contact}>
        <div className={styles.mail}>
          <div className={styles.flex}>
            <BsEnvelopeFill  size={20} color="#FFB806" />
            <h2> E-mail</h2>
          </div>
          <h3>silkejohansen13@gmail.com</h3>
        </div>

        <div className={styles.telfonNr}>
          <h2>
            {" "}
            <BsFillTelephoneFill size={20} color="#FFB806" />
            Telfon nummer
          </h2>
          <h3>+45 71 75 79 82</h3>
        </div>
      </section>
    </>
  );
};

export default Contact;