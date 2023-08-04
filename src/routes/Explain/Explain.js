import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../../components/Global/Button";
import ImgButton from "../../components/Global/ImgButton";
import Back from "../../components/images/ToBack.png";
import styles from "./Explain.module.css";

function Explain() {
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
    console.log("Redirecting...");
  };

  return (
    <div>
      <div>
        <ImgButton
          onClick={() => navigateTo("/")}
          imgname={Back}
          imgclassname={styles.imgbackBtn}
          classname={styles.backBtn}
        />
      </div>
      <div className={styles.tomiddle}>
        <h2 className={styles.Title}>이 앱을 제작한 사람들</h2>
        <h2 className={styles.Title}>앱 제작 동기</h2>
      </div>
    </div>
  );
}

export default Explain;
