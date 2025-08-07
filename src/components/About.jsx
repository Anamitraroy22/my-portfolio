// src/components/About.jsx
import React, { useState, useEffect, useRef } from "react"; // Import useState, useEffect, useRef
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


// New TypewriterHeading component
const TypewriterHeading = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 100); // Typing speed in ms

      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <h2 className={styles.sectionHeadText}>Overview.</h2>
   );
};

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    tiltMaxAngleX={20}
    tiltMaxAngleY={20}
    scale={1.05}
    transitionSpeed={400}
    className='xs:w-[250px] w-full'
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className="relative bg-transparent">
      <motion.div variants={textVariant()}>
  <p className={styles.sectionSubText}>Introduction</p>
  <TypewriterHeading text="Overview." />
</motion.div>
<motion.p
  variants={fadeIn("", "", 0.1, 1)}
  className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
>
  I’m a passionate, results-driven software developer with a strong foundation in TypeScript, JavaScript, and frameworks like React, Node.js, and Three.js.{" "}
  I specialize in building dynamic, responsive, and immersive web applications — from full-stack platforms to interactive 3D experiences.{" "}
  Known for being a fast learner and effective communicator, I thrive in collaborative environments where innovation meets functionality.{" "}
  I’m committed to crafting scalable, user-focused solutions that solve real-world problems. Whether designing seamless front-ends or engineering robust back-ends, I bring ideas to life with precision and creativity.
</motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");