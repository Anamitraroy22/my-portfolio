import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full shadow-lg flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-105'>
      <div className='relative w-full h-[230px]'>
        <img
          src={image}
          alt='project_image'
          className='w-full h-full object-cover rounded-2xl'
        />

        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={github}
              alt='source code'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>

      <div className='mt-4 flex flex-wrap items-center gap-3'>
        <div className='flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

        {live_demo_link && (
          <a
            href={live_demo_link}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1 rounded-md border border-red-400 shadow-[0_0_10px_rgba(255,0,0,0.7)] transition-all duration-200'
          >
            <svg
              className='w-3 h-3'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M14 5l7 7m0 0l-7 7m7-7H3' />
            </svg>
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

const Works = () => {
  // State to track the starting index of the projects to be displayed.
  const [startIndex, setStartIndex] = useState(0);

  const totalProjects = projects.length;

  // Function to handle moving to the next set of projects.
  const nextProjects = () => {
    // Increment the start index, and loop back to the beginning if it goes past the end.
    setStartIndex((prev) => (prev + 1) % totalProjects);
  };

  // Function to handle moving to the previous set of projects.
  const prevProjects = () => {
    // Decrement the start index, and loop to the end if it goes below 0.
    setStartIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  // Create an array of three projects to display based on the current startIndex.
  const visibleProjects = [];
  for (let i = 0; i < 3; i++) {
    // Use the modulo operator to continuously loop through the projects array.
    visibleProjects.push(projects[(startIndex + i) % totalProjects]);
  }

  return (
    <div className='relative z-0'>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcase my skills and experience through real-world examples of my work. Each
          project includes a brief description and links to the code repository or live demo. It reflects my
          ability to solve complex problems and build scalable, high-quality applications.
        </motion.p>
      </div>

      {/* Carousel Container for three cards */}
      <div className='mt-20 flex flex-col items-center justify-center relative w-full'>
        <div className="flex flex-wrap justify-center gap-7">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.name}
              index={index}
              {...project}
            />
          ))}
        </div>

        {/* Carousel Navigation Buttons */}
        <div className='flex gap-4 mt-8'>
          <button
            onClick={prevProjects}
            className='p-3 bg-tertiary text-white rounded-full hover:bg-violet-600 transition-colors'
            aria-label="Previous Project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextProjects}
            className='p-3 bg-tertiary text-white rounded-full hover:bg-violet-600 transition-colors'
            aria-label="Next Project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicator Dots */}
        <div className='flex justify-center gap-2 mt-4'>
          {projects.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                index === startIndex ? "bg-secondary" : "bg-gray-700 hover:bg-gray-500"
              }`}
              onClick={() => setStartIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "works");
