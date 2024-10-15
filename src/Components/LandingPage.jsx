import LandingImg from "../Images/Landingimg1.jpeg";
import styles from "./LandingPage.module.css"
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
    <div className={styles.landing}>
      <img src={LandingImg} className="LPimg" />
      <h1 className="LPHeading">UNCOVERING FOOD FACTS</h1>
      <h4>Fact Check Your Food : A simple Guide To Brand Claims</h4>
      <Link className={`${styles.button} mb-5`} to="/ClaimCheckOptions">Check Claims</Link>
    </div>
    <div className={`${styles.objective} w-100 mx-auto p-5`}>
        <div className="fs-1 fw-bold mt-3">
            <center>OUR OBJECTIVE</center>
        </div>
        <div  className="mt-3 text-center ">
          <h3>"Trust What You Eat – Verify with Confidence!"</h3>
          <p class="text-center">Empowering consumers to make informed, confident choices by providing an easy-to-use platform that verifies whether brand claims on edible items align with their ingredients.Our goal is to create a user-friendly space where consumers can easily cut through marketing jargon and confidently assess the authenticity of product claims. We are committed to enhancing awareness of what’s in the food we eat, promoting healthier choices, and supporting brands that prioritize honesty and transparency.</p>
        </div>
      </div>
    </>
  );
}
export default LandingPage;
