import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.container}>
          <p className="heading-6">
            Copyright © 2022 by Ayeman.
            <br /> All Rights Reserved.
          </p>
          <div className={styles.socialMedia}>
            <div className={styles.square}>
              <Image
                src="/icons/facebook.svg"
                width={20}
                height={20}
                alt="facebook"
                className={styles.icon}
              />
            </div>
            <div className={styles.square}>
              <Image
                src="/icons/twitter.svg"
                width={20}
                height={20}
                alt="facebook"
                className={styles.icon}
              />
            </div>
            <div className={styles.square}>
              <Image
                src="/icons/instagram.svg"
                width={20}
                height={20}
                alt="facebook"
                className={styles.icon}
              />
            </div>
            <div className={styles.square}>
              <Image
                src="/icons/youtube.svg"
                width={20}
                height={20}
                alt="facebook"
                className={styles.icon}
              />
            </div>
            <div className={styles.square}>
              <Image
                src="/icons/pinterest.svg"
                width={20}
                height={20}
                alt="facebook"
                className={styles.icon}
              />
            </div>
          </div>
        </div>
    </div>
  );
};

export default Footer;
