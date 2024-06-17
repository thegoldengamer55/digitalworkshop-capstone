import React, { useLayoutEffect } from "react";
import "./about.css";

import { animate, motion, useMotionValue } from "framer-motion";

import aboutAsset from "../../assets/about-asset.jpg";
import staff1 from "../../assets/staff1.jpg";
import staff2 from "../../assets/staff2.jpg";
import staff3 from "../../assets/staff3.jpg";
import staff4 from "../../assets/staff4.jpg";
import staff5 from "../../assets/staff5.jpg";
import staff6 from "../../assets/staff6.jpg";
import { NavLink } from "react-router-dom";

const About = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="about-container">
      <div className="about">
        <h1>About Us</h1>
        <h2>
          Welcome to Darren's Music, your ultimate destination for all things
          music and entertainment.
        </h2>
        <div className="mission">
          {/* <div className="mission-text-content">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "60%" }}
              transition={{ duration: 0.5 }}
              className="mission-text"
              whileHover={{ width: "100%" }}
            >
              <h3>Our Mission</h3>
              <h4>Delivering Music Fans Love</h4>
              <p>
                At Darren's Music, we are passionate about bringing you the
                latest and greatest from the world of music and entertainment.
                Our mission is to connect fans with the music they love and
                introduce them to new sounds and artists from around the globe.
              </p>
            </motion.div>
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "80%" }}
              transition={{ duration: 0.5 }}
              className="mission-text"
              whileHover={{ width: "100%" }}
            >
              <h3>Who We Are</h3>
              <h4>Our Background</h4>
              <p>
                Founded in 2024, Darren's Music is a team of dedicated music
                enthusiasts, industry experts, and creative writers who live and
                breathe music. We come from diverse backgrounds but share a
                common goal: to create a vibrant community where music lovers
                can discover, enjoy, and discuss their favorite tunes and
                entertainment news.
              </p>
            </motion.div>
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.5 }}
              className="mission-text"
              whileHover={{ width: "100%" }}
            >
              <h3>Our Mission</h3>
              <h4>Delivering Music Fans Love</h4>
              <p>
                At Darren's Music, we are passionate about bringing you the
                latest and greatest from the world of music and entertainment.
                Our mission is to connect fans with the music they love and
                introduce them to new sounds and artists from around the globe.
              </p>
            </motion.div>
          </div> */}
          <div className="mission-text-content">
            <div className="mission-text">
              <h3>Our Mission</h3>
              <h4>Delivering Music Fans Love</h4>
              <p>
                At Darren's Music, we are passionate about bringing you the
                latest and greatest from the world of music and entertainment.
                Our mission is to connect fans with the music they love and
                introduce them to new sounds and artists from around the globe.
              </p>
            </div>
            <div className="mission-text">
              <h3>Who We Are</h3>
              <h4>Our Background</h4>
              <p>
                Founded in 2024, Darren's Music is a team of dedicated music
                enthusiasts, industry experts, and creative writers who live and
                breathe music. We come from diverse backgrounds but share a
                common goal: to create a vibrant community where music lovers
                can discover, enjoy, and discuss their favorite tunes and
                entertainment news.
              </p>
            </div>
            <div className="mission-text">
              <h3>Emerging Artists</h3>
              <h4>Supporting Emerging Artists</h4>
              <p>
                We support Emerging Artists At Darren's Music and are passionate
                about discovering and promoting new talent. We believe that
                every artist deserves a platform to showcase their music, and we
                are committed to helping emerging artists gain the exposure they
                need to succeed.
              </p>
            </div>
          </div>

          <div className="mission-image">
            <div className="mission-overlay"></div>
            <img src={aboutAsset} alt="Music Image" />
          </div>
        </div>
        <div className="team">
          <h1>Meet the Team</h1>
          <h2>Our key staff that made everything possible.</h2>
          <div className="team-content">
            <div className="staff">
              <img src={staff1} alt="Tom" width={350} />
              <h3>Tom Holland</h3>
              <h4>Owner / Lead Musician</h4>
            </div>
            <div className="staff">
              <img src={staff2} alt="Rob" width={350} />
              <h3>Rob B.</h3>
              <h4>Co-Owner / Website Designer</h4>
            </div>
            <div className="staff">
              <img src={staff3} alt="Melissa" width={350} />
              <h3>Melissa Bellford</h3>
              <h4>Lead Music Producer / Vocalist</h4>
            </div>
            <div className="staff">
              <img src={staff4} alt="Hank" width={350} />
              <h3>Hank Billards</h3>
              <h4>Lead Photographer / DJ</h4>
            </div>
            <div className="staff">
              <img src={staff5} alt="Shelley" width={350} />
              <h3>Shelley Griffith</h3>
              <h4>Co-lead Photographer / Journalist</h4>
            </div>
            <div className="staff">
              <img src={staff6} alt="Demarcus" width={350} />
              <h3>Demarcus Adams</h3>
              <h4>DJ / Pianist</h4>
            </div>
          </div>
          <div className="about-contact">
            <h3>Want music published or have questions?</h3>
            <div className="contact-btn-container">
              <NavLink to="/contact" className="contact-btn">
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
