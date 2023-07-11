import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../../components/Global/Button";
import ImgButton from "../../components/Global/ImgButton";
import styles from "./Home.module.css";
import Title from "../../components/images/Title.jpg";
import ISHS from "../../components/images/ISHSlogo.png";

function Home() {
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
    console.log("Redirecting...");
  };

  return (
    <div>
      <div className={styles.Imgbuttonloca}>
        <ImgButton
          onClick={() => navigateTo("/Explain")}
          classname={styles.imgbutton}
          imgclassname={styles.img}
        />
      </div>
      <div>
        <Button
          classname={styles.button}
          text="촬영하기"
          onClick={() => navigateTo("/Camera")}
        />
      </div>
      <div className={styles.title}>
        <img className={styles.titleimage} src={Title}></img>
      </div>
      <div>
        <img className={styles.ISHSlogo} src={ISHS}></img>
      </div>
    </div>
  );
}

export default Home;
