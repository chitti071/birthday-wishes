import React from "react";
import './birthdays.css';

const images = [
    //'/images/sai1.jpg',
    '/images/sai3.jpg',
    '/images/sai2.jpg'
  ];
  
  const PhotoReveal = () => {
    return (
      <div className="photo-grid">
        {images.map((src, index) => (
          <img key={index} src={src}  className="photo" />
        ))}
      </div>
    );
  };
  export default PhotoReveal;
  