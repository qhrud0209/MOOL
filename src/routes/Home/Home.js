import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../../components/Global/Button";
import ImgButton from "../../components/Global/ImgButton";
import styles from "./Home.module.css";
import Title from "../../components/images/Title.jpg";
import ISHS from "../../components/images/ISHSlogo.png";
import ExplainBtn from "../../components/images/ExplainButton.jpg";

function Home() {
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
    console.log("Redirecting...");
  };

  return (
    <div>
      <span>
        <img className={styles.ISHSlogo} src={ISHS}></img>
      </span>
      <span>
        <ImgButton
          onClick={() => navigateTo("/Explain")}
          classname={styles.ExplainBtn}
          imgclassname={styles.ExplainBtnImg}
          imgname={ExplainBtn}
        />
      </span>

      <div className={styles.title}>
        <img className={styles.titleimage} src={Title}></img>
      </div>
      <div className={styles.tomiddle}>
        <Button
          classname={styles.button}
          text="촬영하기"
          onClick={() => navigateTo("/Camera")}
        />
      </div>
    </div>
  );
}

export default Home;
