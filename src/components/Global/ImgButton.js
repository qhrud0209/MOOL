function ImgButton({ onClick, classname, imgclassname, imgSource }) {
  let imgSourceObject = imgSource;
  return (
    <button onClick={onClick} className={classname}>
      <img src={imgSourceObject} className={imgclassname} />
    </button>
  );
}

export default ImgButton;
