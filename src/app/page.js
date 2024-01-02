"use client";
import Box from "@mui/material/Box";
import * as React from "react";

export default function HomePage() {
  React.useEffect(() => {
    function createFallingStar() {
      const star = document.createElement("div");
      star.classList.add("five-pointed-star");
      return star;
    }

    function createFallingStars() {
      const maxStars = 80; // Limit the stars to 80
      const body = document.querySelector("body");
      const screenWidth = window.innerWidth * 0.9; // Adjusted to 90% of screen width
      const screenHeight = window.innerHeight * 0.9; // Adjusted to 90% of screen height

      for (let i = 0; i < maxStars; i++) {
        const star = createFallingStar();
        const randomX = Math.random();
        const randomY = Math.random();
        star.style.setProperty("--random-x", randomX);
        star.style.setProperty("--random-y", randomY);
        body.appendChild(star);
      }
    }

    const felizElement = document.querySelector(".feliz");

    function handleFelizAnimationEnd() {
      createFallingStars();
      // Remove the event listener to prevent multiple triggerings
      felizElement.removeEventListener("animationend", handleFelizAnimationEnd);
    }

    felizElement.addEventListener("animationend", handleFelizAnimationEnd);

    return () => {
      const stars = document.querySelectorAll(".five-pointed-star");
      stars.forEach((star) => {
        star.parentNode.removeChild(star);
      });
      // Remove the event listener when the component unmounts
      felizElement.removeEventListener("animationend", handleFelizAnimationEnd);
    };
  }, []);
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        className="feliz "
        sx={{
          top: ["20%", "50%"],
        }}
      >
        We got an extra day this year, so let's accomplish something great!
      </Box>
      <Box className="ano_novo">
        <Box>202</Box>
        <Box className="seis">3</Box>
        <Box className="sete">4</Box>
        <Box className="balao"></Box>
      </Box>
    </Box>
  );
}
