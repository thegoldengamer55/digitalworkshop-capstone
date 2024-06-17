import React, { useLayoutEffect } from "react";
import About from "../components/About/About";

const AboutPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <About />
    </div>
  );
};

export default About;
