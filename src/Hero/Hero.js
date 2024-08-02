import React from "react";
import "./Hero.css";
import hand_icon from "../Components/Assets/hand_icon.png"
import arrow_icon from "../Components/Assets/arrow.png"
import hero_image from "../Components/Assets/hero_image.png"

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className="hand-icon">
                <p>New</p>
                <img src={hand_icon} alt="Hand Icon" />
            </div>
            <p>Collection</p>
            <p>For Everyone</p>
        </div>
        <div className="hero-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="Arrow Icon" />
        </div>
      </div>

      <div className="hero-right">
       <img src={hero_image} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
