import Tesseract from "tesseract.js";

export const extractText = (file, setText, setLoading) => {
  setLoading(true);
  Tesseract.recognize(file, "eng", {
    logger: (m) => console.log(m),
  })
    .then(({ data: { text } }) => {
      setText(text);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Error extracting text:", err);
      setLoading(false);
    });
};
