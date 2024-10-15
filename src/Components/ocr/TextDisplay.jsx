import styles from "../ImageForm.module.css";

function TextDisplay({  text }) {
  return (
    text && (
      <div className={styles.ExtractedText}>
        <p>{text}</p>
      </div>
    )
  );
}

export default TextDisplay;
