import styles from "./Member.module.css"
import img from "../Images/Form2.png"
function Member(props){
    return <div className={styles.card}>
    <div className={styles.imgbox}>
        <img src={img}/>
    </div>
    <div className={styles.content}>
        <div className={styles.details}>
            <h2>{props.name}<br/><span>{props.post}</span></h2>
            <div className={styles.actionBtn}>
                <button>Follow</button>
                <button>Message</button>
            </div>
        </div>
    </div>
</div>
}
export default Member;