import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Importing icons
import educationIcon from "../assets/company/education.png";
import workIcon from "../assets/company/work.png";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836", // Individual timeline element background, not covering the whole section
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const workExperiences = experiences.filter(exp => exp.type === "work");
  const educationExperiences = experiences.filter(exp => exp.type === "education");

  return (
    // Main wrapper for the Experience section. No explicit background, so stars should show.
    <> 
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far?
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
         Work Experience & Education
        </h2>
      </motion.div>

      <div className='mt-20'>
        <div className='flex items-center gap-3 mb-6'>
          <img src={workIcon} alt='Work Icon' className='w-8 h-8 object-contain' />
          <h3 className='text-white text-[20px] font-bold'>Work Experience</h3>
        </div>
        <VerticalTimeline>
          {workExperiences.map((experience, index) => (
            <ExperienceCard
              key={`work-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>

      <div className='mt-20'>
        <div className='flex items-center gap-3 mb-6'>
          <img src={educationIcon} alt='Education Icon' className='w-8 h-8 object-contain' />
          <h3 className='text-white text-[20px] font-bold'>Education </h3>
        </div>
        <VerticalTimeline>
          {educationExperiences.map((experience, index) => (
            <ExperienceCard
              key={`education-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");