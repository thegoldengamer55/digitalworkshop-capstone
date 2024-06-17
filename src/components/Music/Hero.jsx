import React from "react";
import "./hero.css";
import heroAsset from "../../assets/hero2.jpg";

const Hero = () => {
  return (
    <div>
      <div className="music-hero">
        <h1>Music</h1>
        <h2>Listen and Check out our Albums, Singles, and Trending Music!</h2>
        {/* <p>
          Whether you're a fan of rock, pop, hip-hop, jazz, or any other genre,
          we have something for everyone.
        </p> */}
        <div className="btns">
          <a href="#albums">Albums</a>
          <a href="#singles">Singles</a>
          <a href="#trending">Trending</a>
        </div>
        <div className="music-overlay-section">
          <img src={heroAsset} alt="" />
          <div className="music-overlay" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
