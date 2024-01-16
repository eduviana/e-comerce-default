import Image from "next/image";
import styles from "./AboutUs.module.css";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section className={styles.aboutUs}>
      <div className="main-container">
        <div className={styles.wrapper}>
          <div className={styles.textsContainer}>
            <div className={styles.titles}>
              <h2 className={`heading-1 ${styles.title}`}>About Us</h2>
              <h3 className={`heading-2 ${styles.subtitle}`}>
                <span className="accent">We</span> Create the best foody product
              </h3>
            </div>
            <p className={`paragraph-normal ${styles.paragraph}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Image
                  src="/icons/check.svg"
                  alt="check"
                  width={12}
                  height={12}
                  className={styles.check}
                />
                <p className="paragraph-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </li>
              <li className={styles.listItem}>
                <Image
                  src="/icons/check.svg"
                  alt="check"
                  width={12}
                  height={12}
                  className={styles.check}
                />
                <p className="paragraph-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </li>
              <li className={styles.listItem}>
                <Image
                  src="/icons/check.svg"
                  alt="check"
                  width={12}
                  height={12}
                  className={styles.check}
                />
                <p className="paragraph-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </li>

              <Link href="/" className={`button-primary ${styles.linkDesktop}`}>
                Leer Más
              </Link>
            </ul>
          </div>
          <div className={styles.gridContainer}>
            <Image
              src="/images/img-1.png"
              alt="plato 1"
              width={367}
              height={330}
              className={styles.imageFirst}
            />

            <Image
              src="/images/img-2.png"
              alt="plato 2"
              width={176}
              height={194}
              className={styles.imageSecond}
            />

            <Image
              src="/images/img-3.png"
              alt="plato 3"
              width={176}
              height={194}
              className={styles.imageThird}
            />
          </div>
        </div>
        <Link href="/" className={`button-primary ${styles.link}`}>
          Leer Más
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;
