import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { styles } from "../styles";

// Define the tech stack and their corresponding Tailwind CSS colors
const dynamicSkills = [
  { name: "HTML", color: "text-orange-500" },
  { name: "JavaScript", color: "text-yellow-400" },
  { name: "TypeScript", color: "text-blue-400" },
  { name: "CSS", color: "text-blue-600" },
  { name: "React JS", color: "text-cyan-400" },
  { name: "Tailwind CSS", color: "text-teal-400" },
  { name: "Node JS", color: "text-green-600" },
  { name: "Express JS", color: "text-zinc-400" },
  { name: "MongoDB", color: "text-lime-500" },
  { name: "Docker", color: "text-sky-500" },
  { name: "Flutter", color: "text-cyan-300" },
  { name: "AWS", color: "text-orange-400" },
  { name: "MySQL", color: "text-blue-300" },
  { name: "Python", color: "text-yellow-600" },
  { name: "Android Studio", color: "text-green-700" },
  { name: "Tableau", color: "text-purple-500" },
  { name: "PowerBI", color: "text-yellow-200" },
  { name: "Excel", color: "text-green-300" },
  { name: "Three JS", color: "text-gray-400" },
  { name: "Figma", color: "text-pink-500" },
];

const Hero = () => {
  const [techIndex, setTechIndex] = useState(0);

  // Set up the interval for cycling through the skills
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTechIndex((prevIndex) => (prevIndex + 1) % dynamicSkills.length);
    }, 1500); // Change skill every 1.5 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto bg-hero-pattern bg-cover bg-center bg-no-repeat">
      {/* Hero Content */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col justify-between`}
      >
        {/* Left Marker + Text */}
        <div className="flex flex-row items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm{" "}
              <span className="text-[#915EFF]">
                <Typewriter
                  words={["Anamitra Roy"]}
                  loop={false}
                  cursor
                  cursorStyle="/"
                  typeSpeed={100}
                  deleteSpeed={100}
                  delaySpeed={10000}
                />
              </span>
            </h1>

            {/* STATIC SUBTEXT - THIS WILL NOW REMAIN ON THE PAGE */}
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I design and develop websites, user{" "}
              <br className="sm:block hidden" />
              interfaces, and web applications.
            </p>

            {/* DYNAMIC TECH STACK - THIS IS THE NEW ANIMATED SECTION */}
            <div className={`mt-4 ${styles.heroSubText} h-12 sm:h-auto`}>
              <AnimatePresence mode="wait">
                <motion.p
                  key={dynamicSkills[techIndex].name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 20, opacity: 0 }}
                  transition={{
                    type: "tween",
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className={`${dynamicSkills[techIndex].color} font-bold`}
                >
                  <span className="inline-block w-4 h-4 rounded-full bg-current mr-2 animate-pulse" />
                  {dynamicSkills[techIndex].name}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="w-full flex justify-center items-center mb-6 z-10">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-center p-2">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;