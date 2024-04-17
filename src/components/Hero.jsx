import React, { useState } from "react";
import "./Hero.css";

const Hero = ({ scrollToAbout }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="hero-background">
      <div className="hero-content">
        <div className="name-title">Tereza Petrovičová</div>
        <div className="role-title">junior web/software developer</div>
        <button
          className={`hero-button ${isHovered ? "hovered" : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={scrollToAbout}
          data-front="Get to know me"
          data-back="GREAT !"
        >
          {isHovered ? "GREAT !" : "Get to know me"}
        </button>
      </div>
    </div>
  );
};

export default Hero;
