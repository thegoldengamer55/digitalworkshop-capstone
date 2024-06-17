import { useLayoutEffect } from "react";
import About from "../components/Home/About/About";
import Featured from "../components/Home/Featured/Featured";
import Hero from "../components/Home/Hero/Hero";
import Music from "../components/Home/Music/Music";

const Home = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Hero />
      <Featured />
      <About />
      <Music />
    </>
  );
};

export default Home;
