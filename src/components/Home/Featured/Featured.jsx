import React, { useEffect, useState } from "react";
import "./featured.css";

import Carousel from "react-bootstrap/Carousel";

import { animate, motion, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";

import { images } from "../../../constants";

const Featured = () => {
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <div>
      <div className="featured">
        <motion.div
          initial={{ opacity: 0, marginTop: -60 }}
          whileInView={{ opacity: 1, marginTop: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h1>Featured Albums</h1>
        </motion.div>
        <div className="featured-images-container">
          <motion.div
            className="featured-images"
            ref={ref}
            style={{ x: xTranslation }}
          >
            {images.map((item) => (
              <img src={item.url} alt="Album Image" />
            ))}
            {images.map((item) => (
              <img src={item.url} alt="Album Image" />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
