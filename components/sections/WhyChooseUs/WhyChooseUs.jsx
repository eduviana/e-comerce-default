import Image from "next/image";
import styles from "./WhyChooseUs.module.css";

const WhyChooseUs = () => {
  return (
    <section className={styles.whyChooseUs}>
      <div className="main-container">
        <div className={styles.prueba}>
          <div className={styles.wrapper}>
            <div className={styles.titles}>
              <h2 className={`heading-1 ${styles.title}`}>Why Choose Us</h2>
              <h3 className={`heading-2 ${styles.subtitle}`}>
                <span className="accent">Ex</span>traordinary taste And
                Experienced
              </h3>
            </div>
            <p className={`paragraph-normal ${styles.paragraph}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.
            </p>

            <div className={styles.categories}>
              <div className={styles.category}>
                <Image
                  src="/images/whyChooseUs/categories/fast-food.png"
                  width={86}
                  height={76}
                  className={styles.icon}
                  alt="categoria comida rápida"
                />
                <h5 className="heading-6">Fast Food</h5>
              </div>
              <div className={styles.category}>
                <Image
                  src="/images/whyChooseUs/categories/lunch.png"
                  width={86}
                  height={76}
                  className={styles.icon}
                  alt="categoria desayuno"
                />
                <h5 className="heading-6">Lunch</h5>
              </div>
              <div className={styles.category}>
                <Image
                  src="/images/whyChooseUs/categories/dinner.png"
                  width={86}
                  height={76}
                  className={styles.icon}
                  alt="categoria comida rápida"
                />
                <h5 className="heading-6">Dinner</h5>
              </div>
            </div>
            <div className={styles.experiencedDesktop}>
              <div className={styles.yearsContainer}>
                <span className={`heading-2 ${styles.years}`}>30+</span>
                <span className={`heading-5 ${styles.text}`}>Experienced</span>
              </div>
            </div>
          </div>

          <div className={styles.galleriesContainer}>
            <div className={styles.galleryFirst}>
              <Image
                src="/images/whyChooseUs/gallery/first.png"
                width={194}
                height={354}
                className={styles.first}
                alt="imagen 1"
              />
              <Image
                src="/images/whyChooseUs/gallery/second.png"
                width={194}
                height={172}
                className={styles.second}
                alt="imagen 1"
              />
              <Image
                src="/images/whyChooseUs/gallery/third.png"
                width={194}
                height={172}
                className={styles.third}
                alt="imagen 1"
              />
            </div>
            <div className={styles.gallerySecond}>
              <Image
                src="/images/whyChooseUs/gallery/fourth.png"
                width={194}
                height={172}
                className={styles.fourth}
                alt="imagen 1"
              />
              <Image
                src="/images/whyChooseUs/gallery/fifth.png"
                width={194}
                height={354}
                className={styles.fifth}
                alt="imagen 1"
              />
              <Image
                src="/images/whyChooseUs/gallery/sixth.png"
                width={194}
                height={172}
                className={styles.sixth}
                alt="imagen 1"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.experienced}>
        <div className={styles.yearsContainer}>
          <span className={`heading-2 ${styles.years}`}>30+</span>
          <span className={`heading-5 ${styles.text}`}>Experienced</span>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
