import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-l-part">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <div></div>
          <span>the best fitness club in the town</span>
        </div>
        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body to
              live up your life to fullest
            </span>
          </div>
        </div>
        {/* Figures */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* 2 Hero BUttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="hero-r-part">
        <button className="btn">Join Now</button>

        <div className="heart-rate">
          <img src={Heart} alt="Heart Img" className="heartRate"/>
          <span>Heart Rate</span><span>116 bpm</span>
        </div>
        {/* Hero Images */}
        <img src={hero_image} alt="hero-image" className="hero-image"/>
        <img src={hero_image_back} alt="hero-image-back" className="hero-image-back"/>
        {/* Calories  */}
        <div className="calories">
          <img src={Calories} alt="caloreies" />
          <div><span>Calories Burned</span><span>220 kcal</span></div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;