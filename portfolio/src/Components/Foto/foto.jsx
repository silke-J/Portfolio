import styles from "./foto.module.css";
import EC from "../../../public/engle-c.jpg";

import CP from "../../../public/cute-par.jpg";


const Foto = () => {
  return (
    <>
      <section className={styles.body}>
        <img className={styles.cute} src={CP} alt="" />
        <img className={styles.engle} src={EC} alt="" />
      </section>
    </>
  );
};

export default Foto;
