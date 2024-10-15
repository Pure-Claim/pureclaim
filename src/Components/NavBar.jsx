import logo from "../Images/Logo.png";
import styles from "./NavBar.module.css";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  return (
    <div
      style={{
        backgroundColor: location.pathname === "/" ? "white" : "transparent",
      }}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img src={logo} className={styles.logoImg} alt="Logo" />
          <div className="fw-bold">PureClaim</div>
        </div>
        <div className={styles.navs}>
          <Link
            className={`${styles.links}
            // Only apply when path is "/" else none
            ${location.pathname === "/" ? styles.active : ""}`}
            to="/">
            Home
          </Link>
          <Link
            className={`${styles.links} 
            // only apply when path is "/about"
            ${location.pathname === "/about" ? styles.active : ""}`}
            to="/about">
            About Us
          </Link>
          <Link
            className={`${styles.links} 
            // only apply when path is "/ClaimCheckOptions"
            ${location.pathname === "/ClaimCheckOptions" ? styles.active : ""}`}
            to="/ClaimCheckOptions">
            Claim Check
          </Link>
          <Link
            className={`${styles.links}
            // Only apply when path is "/blogs"
            ${location.pathname === "/blogs" ? styles.active : ""}`}
            to="/blogs">
            Blogs
          </Link>
          <Link
            className={`${styles.links}
            // Only apply when path is "/contact"
            ${location.pathname === "/contact" ? styles.active : ""}`}
            to="/contact">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
