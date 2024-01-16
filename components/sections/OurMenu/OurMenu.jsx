"use client";
import { useState } from "react";
import styles from "./OurMenu.module.css";
import Image from "next/image";

const OurMenu = () => {
  const [activeCategory, setActiveCategory] = useState("breakfast");

  const handleCategory = (category) => {
    setActiveCategory(category);
  };

  return (
    <section className={styles.ourMenu}>
      <div className="main-container">
        <div className={styles.titles}>
          <h2 className={`heading-1 ${styles.title}`}>Choose & pick</h2>
          <h3 className={`heading-2 ${styles.subtitle}`}>
            <span className="accent">Fr</span>om Our Menu
          </h3>
        </div>

        <ul className={styles.menu}>
          <li
            className={`heading-3 ${styles.category} ${
              activeCategory === "breakfast" ? styles.active : ""
            }`}
            onClick={() => handleCategory("breakfast")}
          >
            Breakfast
          </li>
          <li
            className={`heading-3 ${styles.category} ${
              activeCategory === "lunch" ? styles.active : ""
            }`}
            onClick={() => handleCategory("lunch")}
          >
            Lunch
          </li>
          <li
            className={`heading-3 ${styles.category} ${
              activeCategory === "dinner" ? styles.active : ""
            }`}
            onClick={() => handleCategory("dinner")}
          >
            Dinner
          </li>
          <li
            className={`heading-3 ${styles.category} ${
              activeCategory === "dessert" ? styles.active : ""
            }`}
            onClick={() => handleCategory("dessert")}
          >
            Dessert
          </li>
          <li
            className={`heading-3 ${styles.category} ${
              activeCategory === "drink" ? styles.active : ""
            }`}
            onClick={() => handleCategory("drink")}
          >
            Drink
          </li>
          <li
            className={`heading-3 ${styles.category} ${
              activeCategory === "snack" ? styles.active : ""
            }`}
            onClick={() => handleCategory("snack")}
          >
            Snack
          </li>
        </ul>

        <div className={styles.menuContainer}>
       
          <div className={styles.card}>
            <div>
              <Image
                src="/images/ourMenu/img-1.png"
                width={100}
                height={120}
                alt="menu 1"
                className={styles.image}
              />
            </div>
            <div className={styles.info}>
              <h4 className="heading-4">Lettuce leaf</h4>
              <p className="paragraph-small">Lacus nisi, et ac dapibus velit in consequat.</p>
              <span className={`heading-5 ${styles.price}`}>$12.5</span>
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <Image
                src="/images/ourMenu/img-1.png"
                width={100}
                height={120}
                alt="menu 1"
                className={styles.image}
              />
            </div>
            <div className={styles.info}>
              <h4 className="heading-4">Lettuce leaf</h4>
              <p className="paragraph-small">Lacus nisi, et ac dapibus velit in consequat.</p>
              <span className={`heading-5 ${styles.price}`}>$12.5</span>
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <Image
                src="/images/ourMenu/img-1.png"
                width={100}
                height={120}
                alt="menu 1"
                className={styles.image}
              />
            </div>
            <div className={styles.info}>
              <h4 className="heading-4">Lettuce leaf</h4>
              <p className="paragraph-small">Lacus nisi, et ac dapibus velit in consequat.</p>
              <span className={`heading-5 ${styles.price}`}>$12.5</span>
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <Image
                src="/images/ourMenu/img-1.png"
                width={100}
                height={120}
                alt="menu 1"
                className={styles.image}
              />
            </div>
            <div className={styles.info}>
              <h4 className="heading-4">Lettuce leaf</h4>
              <p className="paragraph-small">Lacus nisi, et ac dapibus velit in consequat.</p>
              <span className={`heading-5 ${styles.price}`}>$12.5</span>
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <Image
                src="/images/ourMenu/img-1.png"
                width={100}
                height={120}
                alt="menu 1"
                className={styles.image}
              />
            </div>
            <div className={styles.info}>
              <h4 className="heading-4">Lettuce leaf</h4>
              <p className="paragraph-small">Lacus nisi, et ac dapibus velit in consequat.</p>
              <span className={`heading-5 ${styles.price}`}>$12.5</span>
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <Image
                src="/images/ourMenu/img-1.png"
                width={100}
                height={120}
                alt="menu 1"
                className={styles.image}
              />
            </div>
            <div className={styles.info}>
              <h4 className="heading-4">Lettuce leaf</h4>
              <p className="paragraph-small">Lacus nisi, et ac dapibus velit in consequat.</p>
              <span className={`heading-5 ${styles.price}`}>$12.5</span>
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <Image
                src="/images/ourMenu/img-1.png"
                width={100}
                height={120}
                alt="menu 1"
                className={styles.image}
              />
            </div>
            <div className={styles.info}>
              <h4 className="heading-4">Lettuce leaf</h4>
              <p className="paragraph-small">Lacus nisi, et ac dapibus velit in consequat.</p>
              <span className={`heading-5 ${styles.price}`}>$12.5</span>
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <Image
                src="/images/ourMenu/img-1.png"
                width={100}
                height={120}
                alt="menu 1"
                className={styles.image}
              />
            </div>
            <div className={styles.info}>
              <h4 className="heading-4">Lettuce leaf</h4>
              <p className="paragraph-small">Lacus nisi, et ac dapibus velit in consequat.</p>
              <span className={`heading-5 ${styles.price}`}>$12.5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMenu;
