import VerificationCard from "./VerificationCard";
import Vurl from "../Images/approved.png";
import Vtext from "../Images/clipboard.png";
import Vimage from "../Images/camera.png";
import "../App.css";
import styles from "./ClaimCheckOptions.module.css"


function ClaimCheckOptions() {
  const methods = [
    {
      path: "/ClaimCheckOptions/urlform",
      img: Vurl,
      head: "Url Verification",
      text:"Verify the brand's claims by manually entering the ingredients and product details...",
    },
    {
      path: "/ClaimCheckOptions/Manualform",
      img: Vtext,
      head: "Manual Verification",
      text:"Snap a picture of the product's packaging or label,for verification. Fast and simple!",
    },
    {
      path: "/ClaimCheckOptions/ImageForm",
      img: Vimage,
      head: "Image Verification",
      text:"Paste the URL of the product page, and we'll cross-check the claims and ingredients automatically.",
    },
  ];

  return (
    <section className={styles.VerificationMethods}>
      {/* <h2 className={styles.Heading}>Select Verification Method</h2> */}

      <div className={styles.cardContainer}>
        {methods.map((item) => (
          <VerificationCard key={item.text} val={item} />
        ))}
      </div>
    </section>
  );
}
export default ClaimCheckOptions;
