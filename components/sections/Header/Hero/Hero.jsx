import TitlePrimary from "@/components/titles/TitlePrimary/TitlePrimary";
import styles from "./Hero.module.css";
import TitleSecondary from "@/components/titles/TitleSecondary/TitleSecondary";
import Paragraph from "@/components/paragraph/Paragraph";
import ButtonPrimary from "@/components/buttons/ButtonPrimary/ButtonPrimary";
import Link from "next/link";

const Hero = () => {
  return (
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
  );
};

export default Hero;
