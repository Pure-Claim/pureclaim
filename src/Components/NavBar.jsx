import styles from "./NavBar.module.css";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  return (
    <div className={styles.navbar}>
      <p className={styles.PureClaim}>PureClaim</p>
      <div className={styles.navs}>
        <Link
          className={`${styles.links}
            ${location.pathname === "/" ? styles.active : ""}`}
          to="/"
        >
          Home
        </Link>
        <Link
          className={`${styles.links} 
           
            ${location.pathname === "/about" ? styles.active : ""}`}
          to="/"
        >
          About Us
        </Link>
        <Link
          className={`${styles.links} 
           
            ${
              location.pathname === "/ClaimCheckOptions" ||
              location.pathname === "/ClaimCheckOptions/Manualform" ||
              location.pathname === "/ClaimCheckOptions/ImageForm" ||
              location.pathname === "/ClaimCheckOptions/UrlForm"
                ? styles.active
                : ""
            }`}
          to="/ClaimCheckOptions"
        >
          Claim Check
        </Link>
        <Link
          className={`${styles.links}
        
            ${location.pathname === "/blogs" ? styles.active : ""}`}
          to="/blogs"
        >
          Blogs
        </Link>
        <Link
          className={`${styles.links}
          
            ${location.pathname === "/contact" ? styles.active : ""}`}
          to="/contact"
        >
          Contact Us
        </Link>
      </div>
    </div>
    // </div >
  );
}

export default NavBar;
