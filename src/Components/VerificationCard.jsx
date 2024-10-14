import { Link } from "react-router-dom";
import styles from "./VerificationCard.module.css";
function VerificationCard({ val }) {
  return (
    <Link to={val.path} className={styles.Card}>
      <div className={styles.CardImg}>
        <img src={val.img} ></img>
      </div>
        <span className={styles.cardHead}>{val.head}</span>
        <p className={styles.cardContent}>{val.text}</p>
        
    </Link>
  );
}
export default VerificationCard;