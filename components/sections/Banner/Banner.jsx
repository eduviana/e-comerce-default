import Image from "next/image";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.items}>
        <div className={styles.item}>
           <Image src="/images/banner/chefs.png" width={120} height={120} alt="image 1" className={styles.image}/>
           <h5 className="paragraph-normal">Professional Chefs</h5>
           <span className="heading-4">420</span>
        </div>
        <div className={styles.item}>
           <Image src="/images/banner/food.png" width={120} height={120} alt="image 1" className={styles.image}/>
           <h5 className="paragraph-normal">Items of Food</h5>
           <span className="heading-4">320</span>
        </div>
        <div className={styles.item}>
           <Image src="/images/banner/experienced.png" width={120} height={120} alt="image 1" className={styles.image}/>
           <h5 className="paragraph-normal">Years of Experienced</h5>
           <span className="heading-4">30+</span>
        </div>
        <div className={styles.item}>
           <Image src="/images/banner/customers.png" width={120} height={120} alt="image 1" className={styles.image}/>
           <h5 className="paragraph-normal">Happy Customers</h5>
           <span className="heading-4">220</span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
