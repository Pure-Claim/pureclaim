import logo from "../Images/logo.png";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          {/* <img src={logo} className={styles.logoImg}></img> */}
        </div>
        <div className={styles.navs}>
            <Link  className={`${styles.links} ${styles.active} `} to="/">Home</Link>
            <Link  className={styles.links} to="/">AboutUs</Link>
            <Link className={styles.links} to="/ClaimCheckOptions">ClaimCheck</Link>
            <Link className={styles.links} to="/">Blogs</Link>
            <Link className={styles.links} to="/">Contact Us</Link>
        </div>
      </div>
    </>
  );
}
export default NavBar;
