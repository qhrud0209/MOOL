import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Result() {
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
    console.log("Redirecting...");
  };
}

export default Result;
