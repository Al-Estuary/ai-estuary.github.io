// Slideshow.js
import React, { useState, useEffect } from 'react';
import '../css/Slideshow.css'; // Import the CSS file for styling
import skelly from "../assets/SkellyChair.png";
import teaserchair from "../assets/Teaser_chair.png";
import teasermesh from "../assets/Teaser_mesh.png";
import teasermeta from "../assets/Teaser_meta.png";

const images = [
    skelly,
    teaserchair,
    teasermesh,
    teasermeta,
];
const descs=[
    "desc1",
    "desc2",
    "desc3",
    "desc4",
]
const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

  
    useEffect(() => {
        const interval = setInterval(() => {
            if(!isHovered){
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }
        }, 3000); // Change image every 3 seconds
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="slideshow" 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <div className="slide-container">
          <img
            src={images[currentIndex]}
            className="slide active"
            alt="Current slide"
          />
          <div className="desc">
            {descs[currentIndex]}
          </div>
        </div>
      </div>
    );
  };
  
  export default Slideshow;