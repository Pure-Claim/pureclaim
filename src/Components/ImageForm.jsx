import styles from "./ImageForm.module.css";
import AddImg from "../Images/AddImage.png";
import TextDisplay from "./ocr/TextDisplay";
import { extractText } from "./ocr/textExtractor";
import { useContext, useState } from "react";
import { ContextProvider } from "../Store/ContextProvider";

function ImageForm() {
  const [claimsFile, setClaimsFile] = useState(null);
  const [ingredientsFile, setIngredientsFile] = useState(null);

  const [claimsText, setClaimsText] = useState("");
  const [ingredientsText, setIngredientsText] = useState("");

  const [ClaimLoading, setClaimLoading] = useState(false);
  const [Ingredientsloading, setIngredientsLoading] = useState(false);

  const handleClaimsFileChange = (event) => {
    const file = event.target.files[0];
    setClaimsFile(file);
  };

  const handleIngredientsFileChange = (event) => {
    const file = event.target.files[0];
    setIngredientsFile(file);
  };

  const handleClaimsUpload = () => {
    if (!claimsFile) {
      alert("Select an Image containing Claims");
      return;
    }
    extractText(claimsFile, setClaimsText, setClaimLoading);
  };

  const handleIngredientsUpload = () => {
    if (!ingredientsFile) 
    {
      alert("Select an Image containing Ingredients");
      return;
    }
    extractText(ingredientsFile, setIngredientsText, setIngredientsLoading);
  };

 

  const {handleAnalyse,isAnalyzing}=useContext(ContextProvider);
 

  return (<div className={styles.formContainer}>
 
    <div className={styles.ImageForm}>
      <div className={styles.ImageUploadBox}>
        <div className={styles.MediaUploader}>
          <input
            type="file"
            accept="image/*"
            onChange={handleClaimsFileChange}
            id={styles.claimsFileInput}
          />

          <label
            htmlFor={styles.claimsFileInput}
            className={styles.EnterImgInput}
          >
            <img src={AddImg} className={styles.AddImg} />
            {claimsFile ? claimsFile.name : `Choose Claims File`}
          </label>

          <button className={styles.uploadBtn} onClick={handleClaimsUpload}>
            {claimsText ? "Uploaded" : "Upload Claims"}
          </button>

          {ClaimLoading && claimsFile.name && <p>Extracting claims text...</p>}
          {claimsText && <TextDisplay text="Text Extracted Successfully" />}
        </div>

        <div className={styles.MediaUploader}>
          <input
            type="file"
            accept="image/*"
            onChange={handleIngredientsFileChange}
            id={styles.IngredientsFileInput}
          />
          <label
            htmlFor={styles.IngredientsFileInput}
            className={styles.EnterImgInput}
          >
            <img src={AddImg} className={styles.AddImg} />
            {ingredientsFile ? ingredientsFile.name : `Choose Ingredients File`}
          </label>

          <button
            className={styles.uploadBtn}
            onClick={handleIngredientsUpload}
          >
            {ingredientsText ? "Uploaded" : "Upload Ingredients"}
          </button>

          {Ingredientsloading && ingredientsFile && (
            <p>Extracting ingredients text...</p>
          )}
          {ingredientsText && (
            <TextDisplay text="Text Extracted Successfully" />
          )}
        </div>
      </div>

      <button
        className={styles.ImgAnalyzebtn}
        onClick={()=>handleAnalyse(claimsText,ingredientsText)}
        disabled={isAnalyzing}
      >
        {" "}
        {isAnalyzing ? "Analyzing..." : "Analyze"}
      </button>
    </div>

    </div>
  );
}

export default ImageForm;
