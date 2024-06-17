import React, { useState } from "react";
import "./faq.css";
import { FaChevronDown, FaRegQuestionCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const FAQ = () => {
  const [showFAQ, setShowFAQ] = useState(false);
  const [showFAQ2, setShowFAQ2] = useState(false);
  const [showFAQ3, setShowFAQ3] = useState(false);
  const [showFAQ4, setShowFAQ4] = useState(false);

  function ShowFAQ() {
    if (showFAQ === false) {
      setShowFAQ(true);
    } else {
      setShowFAQ(false);
    }
  }
  function ShowFAQ2() {
    if (showFAQ2 === false) {
      setShowFAQ2(true);
    } else {
      setShowFAQ2(false);
    }
  }
  function ShowFAQ3() {
    if (showFAQ3 === false) {
      setShowFAQ3(true);
    } else {
      setShowFAQ3(false);
    }
  }
  function ShowFAQ4() {
    if (showFAQ4 === false) {
      setShowFAQ4(true);
    } else {
      setShowFAQ4(false);
    }
  }

  return (
    <div>
      <div className="faq-container">
        <h1>Frequently Asked Questions</h1>
        <div className="faq-section">
          <div className="faq" onClick={() => ShowFAQ()}>
            <div className="faq-content">
              <div className="faq-left">
                <FaRegQuestionCircle className="faq-icon" />
                <h2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit, eius?
                </h2>
              </div>
              <FaChevronDown className="faq-icon down-arrow" />
            </div>
            <div className={`${showFAQ === true ? "faq-answer" : "faq-hide"}`}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto, eveniet, veniam culpa modi delectus iure, earum illo
                dolores at aliquid id distinctio labore dolorum odio sint? Ab
                optio ratione aspernatur.
              </p>
            </div>
          </div>
          <div className="faq faq-2" onClick={() => ShowFAQ2()}>
            <div className="faq-content">
              <div className="faq-left">
                <FaRegQuestionCircle className="faq-icon" />
                <h2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit, eius?
                </h2>
              </div>
              <FaChevronDown className="faq-icon down-arrow" />
            </div>
            <div className={`${showFAQ2 === true ? "faq-answer" : "faq-hide"}`}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto, eveniet, veniam culpa modi delectus iure, earum illo
                dolores at aliquid id distinctio labore dolorum odio sint? Ab
                optio ratione aspernatur.
              </p>
            </div>
          </div>
          <div className="faq faq-3" onClick={() => ShowFAQ3()}>
            <div className="faq-content">
              <div className="faq-left">
                <FaRegQuestionCircle className="faq-icon" />
                <h2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit, eius?
                </h2>
              </div>
              <FaChevronDown className="faq-icon down-arrow" />
            </div>
            <div className={`${showFAQ3 === true ? "faq-answer" : "faq-hide"}`}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto, eveniet, veniam culpa modi delectus iure, earum illo
                dolores at aliquid id distinctio labore dolorum odio sint? Ab
                optio ratione aspernatur.
              </p>
            </div>
          </div>
          <div className="faq faq-4" onClick={() => ShowFAQ4()}>
            <div className="faq-content">
              <div className="faq-left">
                <FaRegQuestionCircle className="faq-icon" />
                <h2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit, eius?
                </h2>
              </div>
              <FaChevronDown className="faq-icon down-arrow" />
            </div>
            <div className={`${showFAQ4 === true ? "faq-answer" : "faq-hide"}`}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto, eveniet, veniam culpa modi delectus iure, earum illo
                dolores at aliquid id distinctio labore dolorum odio sint? Ab
                optio ratione aspernatur.
              </p>
            </div>
          </div>
        </div>
        <div className="faq-contact-container">
          <h3>Have more questions?</h3>
          <NavLink to="/contact" className="faq-contact">
            Contact Us
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
