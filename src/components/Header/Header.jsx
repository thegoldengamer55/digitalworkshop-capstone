import React, { useEffect, useState } from "react";
import "./header.css";
import { motion } from "framer-motion";
import { FaAddressBook, FaBars, FaBook, FaFire } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaCircleQuestion, FaX } from "react-icons/fa6";

const Header = () => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const clickHandler = ({ target }) => {
      const menu = document.getElementById("menu");
      if (menu.contains(target)) return;
      setMenu(false);
    };

    document.addEventListener("click", clickHandler);

    return () => document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (keyCode !== 27) return;
      setMenu(false);
    };
    document.addEventListener("keydown", keyHandler);

    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div>
      <header>
        <div className="header-image">
          <h1>
            <NavLink to="/">Darren's Music</NavLink>
          </h1>
        </div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/music">Music</NavLink>
          </li>
          <li>
            <NavLink to="/faq">FAQ</NavLink>
          </li>
        </ul>
        <div className="empty">
          <li>
            <NavLink to="/contact" className="header-btn">
              Contact
              <FaAddressBook />
            </NavLink>
          </li>
        </div>
      </header>
      <div className="header-small">
        <div className="menu" id="menu">
          <FaBars
            className={`menu-btn ${menu === true ? "hide-menu" : "show-menu"}`}
            onClick={() => setMenu(!menu)}
            // id="menu"
          />
          <FaX
            className={`X-btn ${menu === true ? "show-menu" : "hide-menu"}`}
            onClick={() => setMenu(!menu)}
            // id="menu"
          />
        </div>
        <div
          className={`menu-content  ${
            menu ? "show-menu-content" : "hide-menu-content"
          }`}
        >
          <ul>
            <h1>
              <NavLink to="/" className="small-header-image">
                Darren's Music
              </NavLink>
            </h1>
            <li>
              {/* <a href="/">Home</a> */}
              <NavLink to="/" className="small-link">
                Home
              </NavLink>
            </li>
            <li>
              {/* <a href="about">About</a> */}
              <NavLink to="/about" className="small-link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/music" className="small-link">
                Music
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq" className="small-link">
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="small-link small-link-trending">
                Contact Us <FaAddressBook />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
