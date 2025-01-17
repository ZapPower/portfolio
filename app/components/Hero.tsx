'use client'
import React from 'react'
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const container = document.getElementById("asteroid-container");
    if (!container) return;

    const createAsteroid = () => {

      const asteroid = document.createElement("div");
      const size = Math.random() * 90 + 10; // Random size between 20px and 50px
      const yPos = Math.random() * (window.innerHeight + 100) - 100; // Random y-coordinate
      const speed = Math.random() * 5 + 3 + (size / 1.5); // Random speed between 3s and 8s

      asteroid.style.width = `${size}px`;
      asteroid.style.height = `${size}px`;
      asteroid.style.backgroundColor = "gray";
      asteroid.style.borderRadius = "50%";
      asteroid.style.position = "absolute";
      asteroid.style.top = `${yPos}px`;
      asteroid.style.left = "-50px"; // Start off-screen
      asteroid.style.transition = `transform ${speed}s linear`;
    //   asteroid.style.transform = `translateX(${-window.innerWidth - 100}px)`;

      container.appendChild(asteroid);

      // Start animation
      requestAnimationFrame(() => {
        asteroid.style.transform = `translateX(${window.innerWidth + 100}px)`;
      });

      // Remove asteroid after animation
      asteroid.addEventListener("transitionend", () => {
        asteroid.remove();
      });

      // Create a new asteroid every 2-5 seconds
      setTimeout(createAsteroid, Math.random() * 3000);
    };

    createAsteroid();

    return () => {
      container.innerHTML = ""; // Clean up on component unmount
    };
  }, []);

  return (
    <div className="hero min-h-screen bg-black relative overflow-hidden">
      <div className="stars absolute inset-0"></div>
      <div id="asteroid-container" className="absolute inset-0 pointer-events-none"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}