import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer>
        <div className="logo">
          <NavLink to="/" className="logo-text">
            Darren's Music
          </NavLink>
        </div>
        {/* <div className="links">
          <ul>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div> */}
        <div className="socials">
          <h2>Socials</h2>
          <div className="socials-section">
            <a href="instagram.com">
              <FaInstagram className="social" />
            </a>
            <a href="facebook.com">
              <FaFacebook className="social" />
            </a>
            <a href="x.com">
              <FaXTwitter className="social" />
            </a>
          </div>
        </div>
      </footer>
      <p>Copyright &copy; 2024 Darren's Music</p>
    </div>
  );
};

export default Footer;
