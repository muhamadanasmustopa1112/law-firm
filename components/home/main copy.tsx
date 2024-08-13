"use client"; // Add this line to mark this file as a client component

import React, { useState } from "react";
import "./main.css";

function MainHome() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showNewContent, setShowNewContent] = useState(false);

  const handleButtonClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setShowNewContent(true);
      setIsAnimating(false);
    }, 1000); // Durasi animasi fade out
  };

  return (
    <main className="min-h-[80vh] flex justify-between items-center px-32 bg-no-repeat bg-cover bg-right-bottom relative z-10">
      {!showNewContent ? (
        <>
          <div
            className={`flex flex-col gap-2 text-white ${
              isAnimating ? "fade-out-left" : ""
            }`}
          >
            <h1 className="text-[10rem]">IURIS</h1>
            <h2 className="text-6xl italic">of one's own right</h2>
            <button
              className="mt-4 py-2 px-4 bg-white text-black rounded-full"
              onClick={handleButtonClick}
            >
              CAPABILITAS
            </button>
          </div>
          <div
            className={`flex-shrink-0 ${isAnimating ? "fade-out-right" : ""}`}
          >
            <img src="/img/patung.png" alt="Statue" className="max-h-[80vh]" />
          </div>
        </>
      ) : (
        <>
          <button
            onClick={() => setShowNewContent(false)}
            className="text-white absolute top-4 left-4"
          >
            BACK
          </button>
          <div
            className={`flex flex-col gap-2 text-white ${
              isAnimating ? "fade-out-left" : ""
            }`}
          >
            <h1 className="text-[6rem]">Areas of Law</h1>
          </div>
          <div
            className={`flex flex-col gap-2 text-white ${
              isAnimating ? "fade-in" : ""
            }`}
          >
            <ul className="text-white text-2xl list-disc list-inside">
              <li>Penal Law</li>
              <li>Family Law</li>
              <li>Contract Law</li>
              <li>Corporate Law</li>
              <li>Blockchain Law</li>
              <li>Real Estate Law</li>
              <li>International Law</li>
              <li>Intellectual Property</li>
              <li>Patent Law</li>
            </ul>
          </div>
        </>
      )}
    </main>
  );
}

export default MainHome;
