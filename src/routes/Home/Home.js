import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../components/Global/Button";
import ImgButton from "../components/Global/ImgButton";
import styles from "./Home.module.css";

function Home() {
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
    console.log("Redirecting...");
  };

  return (
    <div>
      <div>
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
        <img className={styles.titleimage} src={Logo}></img>
      </div>
    </div>
  );
}

export default Home;
