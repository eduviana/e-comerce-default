import styles from "./Paragraph.module.css";


const Paragraph = ({ text }) => {
  return (
    <p className={`paragraph-normal ${styles.paragraph}`}>{text}</p>
  )
}

export default Paragraph