import VerificationCard from "./VerificationCard";
import Vurl from "../Images/URL1.png";
import Vtext from "../Images/clipboard.png";
import Vimage from "../Images/camera.png";
import sideImg from "../Images/Form2.png";
import "../App.css";
import styles from "./ClaimCheckOptions.module.css";

function ClaimCheckOptions() {
  const methods = [
    {
      path: "/ClaimCheckOptions/UrlForm",
      img: Vurl,
      head: "Url Verification",
      text: "Paste the URL of the product page, and we'll cross-check the claims and ingredients automatically.",
    },
    {
      path: "/ClaimCheckOptions/Manualform",
      img: Vtext,
      head: "Manual Verification",
      text: "Verify the brand's claims by manually entering the ingredients and product details...",
    },
    {
      path: "/ClaimCheckOptions/ImageForm",
      img: Vimage,
      head: "Image Verification",
      text: "Snap a picture of the product's packaging or label,for verification. Fast and simple!",
    },
  ];

  return (
    <section className={styles.VerificationMethods}>
      {/* <h2 className={styles.Heading}>Select Verification Method</h2> */}
      {/* <div className={styles.SideImg}>
        <img src={sideImg}/>
      </div> */}

      <div className={styles.cardContainer}>
        {methods.map((item) => (
          <VerificationCard key={item.text} val={item} />
        ))}
      </div>
    </section>
  );
}
export default ClaimCheckOptions;
