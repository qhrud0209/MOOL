import imgSource1 from "../images/ExplainButton.jpg";

function ImgButton({ onClick, classname, imgclassname }) {
  let imgSourceObject = imgSource1;
  return (
    <button onClick={onClick} className={classname}>
      <img src={imgSourceObject} className={imgclassname} />
    </button>
  );
}

export default ImgButton;
