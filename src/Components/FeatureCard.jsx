import styles from "./FeatureCard.module.css"
const FeatureCard=({val})=>{
    return(
        <div className={styles.card} style={{width:"275px"}}>
        <img src={val.img} width={"100"} className="mb-2" alt="feature" />
        <div className="fs-4 fw-bolder">{val.title}</div>
        <p>{val.text}</p>
        </div>
    )
}

export default FeatureCard;