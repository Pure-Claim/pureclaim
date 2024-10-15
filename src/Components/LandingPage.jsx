import LandingImg from "../Images/Landingimg1.jpeg";
import styles from "./LandingPage.module.css";
import { Link } from "react-router-dom";
import f1 from "../Images/locker-feature.png";
import f2 from "../Images/significance-feature.png";
import f3 from "../Images/sprout-feature.png";
import FeatureCard from "./FeatureCard";

function LandingPage() {
  const features = [
    {
      img: f1,
      title: "feature-1",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, maxime!",
    },
    {
      img: f2,
      title: "feature-1",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, maxime!",
    },
    {
      img: f3,
      title: "feature-1",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, maxime!",
    },
  ];
  return (
    <>
      <div className={styles.landing}>
        <img src={LandingImg} className="LPimg" />
        <h1 className="LPHeading">UNCOVERING FOOD FACTS</h1>
        <h4>Fact Check Your Food : A simple Guide To Brand Claims</h4>
        <Link className={`${styles.button}`} to="/ClaimCheckOptions">
          Check Claims
        </Link>
      </div>

      <div className="bg-white">
        <div className=" w-50 mx-auto ">
          <div className="fs-3 fw-bold">OUR OBJECTIVE</div>
          <h4>"Trust What You Eat – Verify with Confidence!"</h4>
        </div>
        <div className="bg-white mx-auto w-75 mb-5">
          {" "}
          Empowering consumers to make informed, confident choices by providing
          an easy-to-use platform that verifies whether brand claims on edible
          items align with their ingredients. By providing clear, unbiased
          insights, we aim to help users make better-informed decisions about
          the food they consume, fostering trust and accountability in the
          marketplace. Our goal is to create a user-friendly space where
          consumers can easily cut through marketing jargon and confidently
          assess the authenticity of product claims
        </div>

        <div
          className="w-100"
          style={{ height: "75vh", backgroundColor: "rgb(128 0 128 / 13%)" }}
        >
          {" "}
          <div className="fs-3 fw-bold pt-5">FEATURES</div>
          <div className="d-flex justify-content-evenly mt-4 w-75 mx-auto"> 
            {
              features.map(feature=><FeatureCard val={feature}/> )
            } 
          </div>
        </div>
      </div>
    </>
  );
}
export default LandingPage;
