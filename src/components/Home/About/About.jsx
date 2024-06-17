import "./about.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="home-about-container">
      <div className="home-about">
        <motion.div
          initial={{ opacity: 0, marginTop: -20 }}
          whileInView={{ opacity: 1, marginTop: 0 }}
        >
          <h1>About Us</h1>
          <h2>Our story and music taste</h2>
        </motion.div>

        <div className="about-container-content">
          <div className="about-container">
            <h3>Our Story</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate minus tenetur possimus doloremque dolore quia beatae
              esse, dolorum, reiciendis sapiente, facere et aliquam harum
              perferendis illum vel sint fugiat! Fugit.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
              exercitationem animi pariatur inventore iste impedit, iusto
              accusantium eaque, explicabo suscipit repudiandae enim! Ex vel in
              saepe, eos aut quia tempora?
            </p>
          </div>
          <div className="about-container">
            <h3>Our Music Taste</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate minus tenetur possimus doloremque dolore quia beatae
              esse, dolorum, reiciendis sapiente, facere et aliquam harum
              perferendis illum vel sint fugiat! Fugit.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
              exercitationem animi pariatur inventore iste impedit, iusto
              accusantium eaque, explicabo suscipit repudiandae enim! Ex vel in
              saepe, eos aut quia tempora?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
