import Navbar from "@/components/sections/Header/Navbar/Navbar";
import Hero from "@/components/sections/Header/Hero/Hero";
import Footer from "@/components/sections/Footer/Footer";
import styles from "./LayoutPrimary.module.css";

const LayoutFirst = ({ children }) => {
  return (
    <>
      {/* <div className="main-container"> */}
        <header className={styles.header}>
          <Navbar />
          <Hero />
        </header>
        {children}
      {/* </div> */}
      <Footer />
    </>
  );
};

export default LayoutFirst;
