'use client'
import React from 'react'
import { useEffect } from "react";

export default function Hero() {
  // TODO: Create an asteroid 'creation' method that simply returns a new asteroid object
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
      const initialRotation = Math.random() * 360; // Random initial rotation angle

      // Set properties and styles for the asteroid image
      asteroid.src = "asteroid.png"; // Local image path
      asteroid.alt = "Asteroid";
      asteroid.style.width = `${size}px`;
      asteroid.style.height = "auto"; // Maintain aspect ratio
      asteroid.style.position = "absolute";
      asteroid.style.top = `${yPos}px`;
      asteroid.style.left = "-100px"; // Start off-screen
      asteroid.style.zIndex = `${Math.round(size)}`; // Larger size -> Higher z-index, keeps larger asteroids above smaller ones
      
      // Pass the random initial rotation as a CSS variable
      asteroid.style.setProperty("--initial-rotation", `${initialRotation}deg`);
      // Begin animation
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

  // TODO: add profile icon that is proper size
  // TODO: fill out About Me section and make it look a little better
  return (
    <div className="hero min-h-screen bg-black relative overflow-hidden">
      <div className="stars absolute inset-0"></div>
      <div id="asteroid-container" className="absolute inset-0 pointer-events-none z-0"></div>
      <div className="hero-content text-center text-white z-10">
        <div className="max-w-md flex flex-col">
            <h1 className="mb-5 text-5xl font-bold p-2 bg-teal-800 rounded-xl">About Me</h1>
            <p className="mb-5 p-2 bg-teal-800 rounded-xl">
                Sample Text
            </p>
        </div>
        <div className='btn-circle overflow-hidden'>
          <img src="testprofile.png" alt="Picture" />
        </div>
      </div>
    </div>
  );
}