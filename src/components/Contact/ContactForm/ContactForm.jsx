import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaPhone,
} from "react-icons/fa";
import "./contactform.css";
import { BsMailbox } from "react-icons/bs";
import { FaCircleQuestion, FaX, FaXTwitter } from "react-icons/fa6";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const ContactForm = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bb9fea5c-f0fb-4dff-b030-414b239b38bb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <div className="contact-form">
        <div className="social-blocks">
          <div className="contact-social">
            <FaLocationArrow className="contact-icon" />
            <h3>OUR STUDIO</h3>
            <h4>1234 Broadway St Greeley, CO</h4>
          </div>
          <div className="contact-social">
            <FaPhone className="contact-icon" />
            <h3>PHONE NUMBER</h3>
            <h4>Office: (970) 123-4567</h4>
            <h4>Owner: (970) 999-1234</h4>
          </div>
          <div className="contact-social">
            <FaEnvelope className="contact-icon" />
            <h3>EMAIL</h3>
            <h4>darrenhh2016@gmail.com</h4>
          </div>
          <div className="contact-social">
            <NavLink to="/faq" style={{ color: "black" }}>
              <FaCircleQuestion className="contact-icon" />
              <h3>FAQ</h3>
              <h4>
                Check out our <NavLink to="/faq">FAQ</NavLink> for quick answers
                to common questions.
              </h4>
            </NavLink>
          </div>
        </div>
        <div className="form-section">
          <div className="form">
            <form onSubmit={onSubmit}>
              <h5>Name</h5>
              <input
                type="text"
                placeholder="Enter your Name"
                name="name"
                required
              />

              <h5>Email</h5>
              <input
                type="email"
                name="email"
                placeholder="Enter a valid email address"
                required
              />

              <h5>Message</h5>
              <textarea
                name="message"
                placeholder="Enter your message"
                required
              ></textarea>
              <button type="submit">SUBMIT</button>
            </form>
          </div>
          <div className="side-form">
            <h3>Get in touch!</h3>
            <p>
              Whether you have a question, a suggestion, or just want to chat
              about music, we're here for you. Send a message today!
            </p>
            <p>
              We will also review and publish any requested music that you want
              on our website.
            </p>
            <p>Don't forget to check out our socials!</p>
            <div className="side-form-socials">
              <a href="https://instagram.com">
                <FaInstagram className="form-social" />
              </a>
              <a href="https://facebook.com">
                <FaFacebook className="form-social" />
              </a>
              <a href="https://x.com">
                <FaXTwitter className="form-social" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
