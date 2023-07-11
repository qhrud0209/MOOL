import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Result.module.css";

function Result() {
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
    console.log("Redirecting...");
  };


  return(

    
  )
}
