function WebsiteCards({
  siteName,
  imgPath,
  handleOptionChange,
  selectedWebsite,
}) {
  return (
    <label
      className={`WebsiteLabel  ${
        selectedWebsite == siteName && "selected" 
      }`}
    >
      <div className="labelimg">
        <img src={imgPath} />
      </div>
      <input
        type="radio"
        name="website"
        value={siteName}
        checked={selectedWebsite == siteName}
        onChange={handleOptionChange}
        className="radioBtn"
      />
      {siteName}
    </label>
  );
}
export default WebsiteCards;
// ${
//     selectedWebsite == "swiggy-instamart" ? styles.selected : ""
//   }`
