import React, { useState } from 'react';
import './birthdays.css';
import PhotoReveal from './photoreveal';
import confetti from 'canvas-confetti';


const BirthdayCards = () => {
  const [showPhotos, setShowPhotos] = useState(false); // default to false
  const handleButtonClick = () => {
    if (!showPhotos) {
      // 🎉 Run confetti for 2 seconds
      const duration = 5 * 1000;
      const end = Date.now() + duration;
  
      (function frame() {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
        });
  
        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    }
  
    setShowPhotos(!showPhotos);
  };
  return (
    <div className="card-container">
      <h1 className="animated-text">🎂 Happy Birthday! 🎉</h1>
      <p className="message">Wishing you joy, love, and laughter on your special day!</p>
      <p className="message"> To my little cute sister 😍 </p>
      <button className="reveal-button" onClick={handleButtonClick}>
        {showPhotos ? "Hide Memories" : "Show Memories 📸"}
      </button>

      {/* Only shows when button is clicked */}
      {showPhotos && <PhotoReveal />}
    </div>
  );
};

export default BirthdayCards;
