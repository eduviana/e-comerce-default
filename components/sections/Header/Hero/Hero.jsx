import Link from "next/link";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
   <div className="main-container">
     <div className={styles.hero}>
      <div className={styles.container}>
        <h2 className={`heading-1 ${styles.title}`}>Its Quick & Amusing!</h2>
        <h3 className={`heading-2 ${styles.subtitle}`}>
          <span className="accent">The</span> Art of speed food Quality
        </h3>
        <p className={`paragraph-normal ${styles.paragraph}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Varius sed
          pharetra dictum neque massa congue
        </p>
        <Link href="/" className={`button-primary ${styles.link}`}>
          Ver menú
        </Link>
      </div>
      <div className={styles.background} />
    </div>
   </div>
  );
};

export default Hero;
