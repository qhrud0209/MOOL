import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

function Camera() {
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
    console.log("Redirecting...");
  };

  const [Image, setImage] = useState("");

  const isFirstLoaded = useRef(true);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const drawToCanvas = () => {
    try {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx !== null && videoRef.current) {
        ctx.drawImage(videoRef.current, 0, 0, 300, 400);
      }
    } catch (err) {
      console.log(err);
    }
  };
}

export default Camera;
