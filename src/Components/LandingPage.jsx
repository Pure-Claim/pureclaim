import styles from "./LandingPage.module.css";
import Banner from "../Images/Food.png";

function LandingPage() {
  return (
    <>
      <div className={styles.LandingPage}>
        <div className={styles.BannerContent}>
          <h1 className={styles.BannerHead}>
            <span>UNCOVERING </span>FOOD FACTS
          </h1>
          <span className={styles.BannerTitle}>
            <span>Fact Check Your Food :</span> A simple Guide To Brand Claims
          </span>
        </div>

        <div className={styles.BannerImageBox}>
          <img src={Banner} className={styles.BannerImage} />
        </div>
      </div>

      <div className={styles.Objectives}>
        <h1 className={styles.ObjHeading}>Our Objectives</h1>

        <p className={styles.ObjTitle}>
          Trust What You Eat : Verify with Confidence!
        </p>
        <div className={styles.ObjBox}>
          {/* <div className={styles.ObjImg}>
            <img src={obj} />
          </div> */}
          <p className={styles.ObjContent}>
            Empowering consumers to make informed, confident choices by
            providing an easy-to-use platform that verifies whether brand claims
            on edible items align with their ingredients.Our goal is to create a
            user-friendly space where consumers can easily cut through marketing
            jargon and confidently assess the authenticity of product claims. We
            are committed to enhancing awareness of what’s in the food we eat,
            promoting healthier choices, and supporting brands that prioritize
            honesty and transparency.
          </p>
        </div>
      </div>

      <div > 

      </div>
    </>
  );
}
export default LandingPage;
