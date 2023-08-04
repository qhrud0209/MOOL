import ExplainButton from "../images/ExplainButton.jpg";
import Backward from "../images/ToBack.png";

function ImgButton({ onClick, classname, imgclassname, imgname }) {
  let imgSourceObject = imgname;
  switch (imgname) {
    case "Back":
      imgSourceObject = Backward;
      break;
    case "ExplainBtn":
      imgSourceObject = ExplainButton;
  }

  return (
    <button onClick={onClick} className={classname}>
      <img src={imgSourceObject} className={imgclassname} />
    </button>
  );
}

export default ImgButton;
