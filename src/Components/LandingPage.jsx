import LandingImg from "../Images/Landingimg1.jpeg";
import styles from "./LandingPage.module.css"
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className={styles.landing}>
      <img src={LandingImg} className="LPimg" />
      <h1 className="LPHeading">UNCOVERING FOOD FACTS</h1>
      <h4>Fact Check Your Food : A simple Guide To Brand Claims</h4>
      <Link className={`${styles.button} mb-5`} to="/ClaimCheckOptions">Check Claims</Link>
      <div className=" w-50 mx-auto mt-5 ">
        <div className="fs-4 fw-bold">
            OUR OBJECTIVE
        </div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus aperiam eveniet consequuntur, accusantium illum ut. Distinctio dolorem omnis impedit porro debitis quasi provident magnam hic, beatae facilis! Suscipit, nam?</div>
      </div>
    </div>
  );
}
export default LandingPage;
