'use client'
import React from 'react'
import { useEffect } from "react";

export default function Hero() {
  // TODO: Create an asteroid 'creation' method that simply returns a new asteroid object
  // TODO: Give asteroids random initial rotation
  // TODO: Populate canvas with asteroids on page load

  useEffect(() => {
    const container = document.getElementById("asteroid-container");
    if (!container) return;

    const createAsteroid = () => {
      const asteroid = document.createElement("img");
      const size = Math.random() * 120 + 20; // Random size between 20px and 120px
      const yPos = Math.random() * (window.innerHeight - size); // Ensure the asteroid is fully visible
      const speed = Math.random() * 5 + 10 + (size / 1.3); // Speed scales with size
      const rotationSpeed = speed * 1.5; // Rotation duration is proportional to speed
  
      // Set properties and styles for the asteroid image
      asteroid.src = "asteroid.png"; // Local image path
      asteroid.alt = "Asteroid";
      asteroid.style.width = `${size}px`;
      asteroid.style.height = "auto"; // Maintain aspect ratio
      asteroid.style.position = "absolute";
      asteroid.style.top = `${yPos}px`;
      asteroid.style.left = "-100px"; // Start off-screen
      asteroid.style.animation = `moveAndRotate ${speed}s linear, rotate ${rotationSpeed}s linear infinite`;

      container.appendChild(asteroid);

      // Remove asteroid after animation
      const removeAsteroid = () => {
        asteroid.remove();
      };
      asteroid.addEventListener("animationend", removeAsteroid);
  
      // Create a new asteroid every 3-8 seconds
      setTimeout(createAsteroid, Math.random() * 5000 + 3000);
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
            <h1 className="mb-5 text-5xl font-bold">About Me</h1>
            <p className="mb-5">
                Sample Text
            </p>
        </div>
      </div>
    </div>
  );
}