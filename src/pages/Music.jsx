import React, { useLayoutEffect } from "react";
import Hero from "../components/Music/Hero";
import Albums from "../components/Music/Albums";
import Singles from "../components/Music/Singles";
import Trending from "../components/Music/Trending";

const Music = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <Hero />
      <Albums />
      <Singles />
      <Trending />
    </div>
  );
};

export default Music;
