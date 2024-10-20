import { useState } from "react";
import styles from "./UrlForm.module.css";
import img from "../Images/swiggy1.png";
import zepto from "../Images/Zepto.png";
import amazon from "../Images/amazon.png";
import BigBasket from "../Images/BigBasket.png";
import JioMart from "../Images/JioMart.png";
import Blinkit from "../Images/Blinkit.png";

function UrlForm() {
  const [url, setUrl] = useState("");
  const [selectedWebsite, setSelectedWebsite] = useState("");
  const [error, setError] = useState(null);
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleOptionChange=(e)=>{
    setSelectedWebsite(e.target.value);
    console.log(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Clear previous states and errors
    setError(null);
    setProductData(null);
    setLoading(true); // Set loading to true when starting fetch

    if (!url || !selectedWebsite) {
      setError("Please enter a URL and select a website");
      setLoading(false); // Set loading to false on error
      return;
    }

    try {
      const response = await fetch(
        `https://pure-claim-url-extractor.vercel.app/extract?url=${encodeURIComponent(
          url
        )}&website=${selectedWebsite}`
      );
      const data = await response.json();
      if (response.ok) {
        // Store the extracted data in state
        setProductData(data);
        console.log(data);
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError("An error occurred while fetching data.");
    } finally {
      setLoading(false); // Set loading to false after fetch is complete
    }
  };

  return (
    <div className={styles.URLContainer}>
     
      <div className={styles.UrlForm}>
        <input
          type="url"
          placeholder="Enter product URL and choose the platform whose url you are using"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          className={styles.urlInput}
        />

        <div className={styles.websiteList}>
  
          <label className={`${styles.WebsiteLabel}  ${selectedWebsite=="swiggy-instamart"? styles.selected  : "" }`}>
          <div className={styles.labelimg}>
              <img src={img}  />
            </div>
            <input
              type="radio"
              name="website"
              value="swiggy-instamart"
              checked={selectedWebsite === "swiggy-instamart"}
              onChange={handleOptionChange}
              className={styles.radioBtn}
            />
            Swiggy Instamart
          </label>

          <label className={`${styles.WebsiteLabel}  ${selectedWebsite=="blinkit"? styles.selected  : "" }`}>
          <div className={styles.labelimg}>
              <img src={Blinkit}  />
            </div>
            <input
              type="radio"
              name="website"
              value="blinkit"
              checked={selectedWebsite === "blinkit"}
              onChange={handleOptionChange}
              className={styles.radioBtn}
            />
            Blinkit
          </label>
          <label className={`${styles.WebsiteLabel}  ${selectedWebsite=="zepto"? styles.selected  : "" }`}>
            <div className={styles.labelimg}>
              <img src={zepto}  />
            </div>
            <input
              type="radio"
              name="website"
              value="zepto"
              checked={selectedWebsite === "zepto"}
              onChange={handleOptionChange}
              className={styles.radioBtn}
            />
            <span> Zepto</span>
          </label>


          <label className={`${styles.WebsiteLabel}  ${selectedWebsite=="bigbasket"? styles.selected  : "" }`}>
          <div className={styles.labelimg}>
              <img src={BigBasket}  />
            </div>
            <input
              type="radio"
              name="website"
              value="bigbasket"
              checked={selectedWebsite === "bigbasket"}
              onChange={handleOptionChange}
              className={styles.radioBtn}
            />
            Big Basket
          </label>

          <label className={`${styles.WebsiteLabel}  ${selectedWebsite=="amazon"? styles.selected  : "" }`}>
          <div className={styles.labelimg}>
              <img src={amazon}  />
            </div>
            <input
              type="radio"
              name="website"
              value="amazon"
              checked={selectedWebsite === "amazon"}
              onChange={handleOptionChange}
              className={styles.radioBtn}
            />
            Amazon
          </label>
          <label className={`${styles.WebsiteLabel}  ${selectedWebsite=="jiomart"? styles.selected  : "" }`}>
          <div className={styles.labelimg}>
              <img src={JioMart}  />
            </div>
            <input
              type="radio"
              name="website"
              value="jiomart"
              checked={selectedWebsite === "jiomart"}
              onChange={handleOptionChange}
              className={styles.radioBtn}
            />
            Jio Mart
          </label>

        </div>
        <button
          type="submit"
          disabled={loading}
          onClick={handleSubmit}
          className={styles.submitBtn}
        >
          Submit
        </button>
        {/* Disable button during loading */}

        {loading && <p>Analyzing...</p>}
        
        {error && <p style={{ color: "red" }}>{error}</p>}
        {productData && (
          <div style={{ marginTop: "20px" }}>
            <h3>Extracted Product Data:</h3>
            <p>
              <strong>Product Title:</strong> {productData.productTitle}
            </p>
            <p>
              <strong>Ingredients:</strong> {productData.ingredientsText}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default UrlForm;
