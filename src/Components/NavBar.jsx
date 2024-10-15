import logo from "../Images/Logo.png";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
function NavBar() {
  const location = useLocation();

  // Check if the current route is "/"
  const isHome = location.pathname === "/";
  return (
    <div style={{
      backgroundColor:isHome?'white':'transparent'
    }}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img src={logo} className={styles.logoImg}></img>
          <div className="fw-bold">PureClaim</div>
        </div>
        <div className={styles.navs}>
            <Link  className={`${styles.links} ${styles.active} `} to="/">Home</Link>
            <Link  className={styles.links} to="/">AboutUs</Link>
            <Link className={styles.links} to="/ClaimCheckOptions">ClaimCheck</Link>
            <Link className={styles.links} to="/">Blogs</Link>
            <Link className={styles.links} to="/">Contact Us</Link>
        </div>
      </div>
    </div >
  );
}
export default NavBar;
