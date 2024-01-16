import Link from "next/link";
import styles from "./BannerSecond.module.css";
import Image from "next/image";

const BannerSecond = () => {
  return (
    <section className={styles.bannerSecond}>
      <div className={styles.titles}>
        <h2 className={`heading-1 ${styles.title}`}>
          Restaurant Active Process
        </h2>
        <h3 className={`heading-2 ${styles.subtitle}`}>
          <span className="accent">We</span> Document Every Food Bean Process
          untile it is saved
        </h3>
      </div>

      <div className={styles.buttons}>
        <Link href="/" className={styles.link}>
          Ver menú
        </Link>
       <div className={styles.playVideo}>
            <Image src="/icons/play.png" width={60} height={60} className={styles.icon} alt="boton iniciar video"/>
            <span className={styles.iconText}>Play Video</span>
       </div>
      </div>
    </section>
  );
};

export default BannerSecond;
