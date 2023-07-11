import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../components/Global/Button";
import ImgButton from "../components/Global/ImgButton";

import styles from "./Explain.module.css";

function Camera() {
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
    console.log("Redirecting...");
  };
}
