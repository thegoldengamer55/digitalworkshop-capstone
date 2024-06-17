import React from "react";
import "./music.css";
import { motion } from "framer-motion";
import albumcover1 from "../../../assets/albumcover1.jpg";
import albumcover2 from "../../../assets/albumcover2.jpg";
import albumcover3 from "../../../assets/albumcover3.jpg";
import albumcover4 from "../../../assets/albumcover4.jpg";
import { NavLink } from "react-router-dom";

const Music = () => {
  return (
    <div className="home-music-container">
      <div className="home-music">
        <motion.div
          initial={{ opacity: 0, marginTop: -20 }}
          whileInView={{ opacity: 1, marginTop: 0 }}
        >
          <h1>Music</h1>
          <h2>Explore New Sounds and Timeless Classics</h2>
        </motion.div>
        <div className="release-container">
          <div className="release">
            <img src={albumcover1} alt="" />
            <h3>Song Name</h3>
            <h4>by: Artist Name</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis magnam alias soluta illum ratione ut, saepe eius odit
              dolorum libero.
            </p>
          </div>
          <div className="release">
            <img src={albumcover1} alt="" />
            <h3>Song Name</h3>
            <h4>by: Artist Name</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis magnam alias soluta illum ratione ut, saepe eius odit
              dolorum libero.
            </p>
          </div>
          <div className="release">
            <img src={albumcover1} alt="" />
            <h3>Song Name</h3>
            <h4>by: Artist Name</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis magnam alias soluta illum ratione ut, saepe eius odit
              dolorum libero.
            </p>
          </div>
        </div>
        <div className="music-btn-container">
          <NavLink to="/music" className="music-btn">
            View More
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Music;
