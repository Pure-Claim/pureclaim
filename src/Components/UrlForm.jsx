import { useContext, useState } from "react";
import styles from "./UrlForm.module.css";
import img from "../Images/swiggy1.png";
import zepto from "../Images/Zepto.png";
import amazon from "../Images/amazon.png";
import BigBasket from "../Images/BigBasket.png";
import JioMart from "../Images/JioMart.png";
import Blinkit from "../Images/Blinkit.png";
import { ContextProvider } from "../Store/ContextProvider";
import WebsiteCards from "./WebsiteCards";

function UrlForm() {
  const siteCards = [
    {
      siteName: "Swiggy-instamart",
      imgPath: img,
    },
    {
      siteName: "blinkit",
      imgPath: Blinkit,
    },
    {
      siteName: "zepto",
      imgPath: zepto,
    },
    {
      siteName: "BigBasket",
      imgPath: BigBasket,
    },
    {
      siteName: "Amazon",
      imgPath: amazon,
    },
    {
      siteName: "Jiomart",
      imgPath: JioMart,
    },
  ];
  const [url, setUrl] = useState("");
  const [selectedWebsite, setSelectedWebsite] = useState("");
  const [error, setError] = useState(null);
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { isAnalyzing, handleAnalyse } = useContext(ContextProvider);

  const handleOptionChange = (e) => {
    console.log(e.target.value);
    setSelectedWebsite(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();  
    setError(null);
    setProductData(null);
    setLoading(true);

    if (!url || !selectedWebsite) {
      setError("Please enter a URL and select a website");
      setLoading(false);
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
        setProductData(data);
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError("An error occurred while fetching data.");
    } finally {
      setLoading(false);
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
    {/* All site cards  */}
        <div className={styles.websiteList}>
          {siteCards.map((site) => (
            <WebsiteCards
              siteName={site.siteName}
              imgPath={site.imgPath}
              handleOptionChange={handleOptionChange}
              selectedWebsite={selectedWebsite}
            />
          ))}
        </div>


        {!productData && (
          <button
            type="submit"
            disabled={loading}
            onClick={handleSubmit}
            className={styles.submitBtn}
          >
            Submit
          </button>
        )}
       

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
        {productData && (
          <button
            className={styles.analyzebtn}
            onClick={() => {
              const Claims = productData.productTitle;
              const Ingredients = productData.ingredientsText;
              handleAnalyse(Claims, Ingredients);
            }}
          >
            {isAnalyzing ? "Analyzing..." : "Analyze"}
          </button>
        )}
      </div>
    </div>
  );
}

export default UrlForm;
