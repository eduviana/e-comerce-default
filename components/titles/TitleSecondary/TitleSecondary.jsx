import styles from "./TitleSecondary.module.css";

const TitleSecondary = ({ title }) => {
  const firstTwoLetters = title.substring(0, 2);
  const restOfTitle = title.substring(2);

  return (
    <div className={`heading-2 ${styles.titleSecondary}`}>
      <span className={styles.highlight}>{firstTwoLetters}</span>
      {restOfTitle}
    </div>
  );
};

export default TitleSecondary;
