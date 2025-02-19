import React from "react";
import { useNavigate } from "react-router-dom";
import heroImage from '../assets/hero-image.jpg';
import "../styles.css";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/catalog");
  };

  return (
    <div className="hero-section">
      <img src={heroImage} alt="Hero" className="hero-image" />
      <div className="hero-content">
        <h1>Watch the Latest Movies Anytime, Anywhere</h1>
        <button onClick={handleGetStarted} className="get-started-button">Get Started</button>
      </div>
    </div>
  );
};

export default HeroSection;