import React from "react";
import "./hero.css";
import hero from "../../../assets/hero.jpg";
import { motion } from "framer-motion";
import { FaHeadphones } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <h1>Discover the Latest in Music and Entertainment</h1>
        <h2>Your Front Row Seat to Music's Best</h2>
        <div className="hero-sections">
          <div className="section">
            <NavLink to="/music">
              <FaHeadphones className="music-icon" />
              <h1>Music</h1>
              <h5>Discover New Music</h5>
              <p>
                Discover the latest in our music, artist interviews, and curated
                playlists. Click here to explore and immerse yourself in a world
                of melodies and rhythms.
              </p>
            </NavLink>
          </div>
          <div className="section">
            <NavLink to="/music">
              <FaFire className="trending-icon" />
              <h1>Trending</h1>
              <h5>Discover Trending Music</h5>
              <p>
                Discover the latest in our music, artist interviews, and curated
                playlists. Click here to explore and immerse yourself in a world
                of melodies and rhythms.
              </p>
            </NavLink>
          </div>
        </div>

        <div className="contact-container">
          <h3>Want music published or have questions?</h3>
          <div className="contact">
            <NavLink to="/contact" className="contact-btn">
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
