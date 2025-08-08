// src/components/Feedbacks.jsx 
import React, { useState, useEffect } from "react"; // Import useEffect
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import { testimonials, researchPapers } from "../constants";
import ResearchCard from "./ResearchCard";

// Re-using FeedbackCard as it is
const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    className='bg-black-200/60 backdrop-blur-md shadow-xl border border-white/10 p-6 rounded-2xl w-full md:w-[30%] flex flex-col justify-between'
  >
    <p className='text-white text-[40px] leading-none font-bold mb-4'>“</p>

    <p className='text-white tracking-wide text-[16px] flex-grow'>{testimonial}</p>

    <div className='mt-6 flex justify-between items-center gap-3'>
      <div className='flex flex-col'>
        <p className='text-white font-semibold text-[14px]'>
          <span className='text-blue-400'>@</span>{name}
        </p>
        <p className='text-gray-400 text-[12px]'>
          {designation} at {company}
        </p>
      </div>
      <img
        src={image}
        alt={`feedback_by-${name}`}
        className='w-10 h-10 rounded-full object-cover border border-white/20'
      />
    </div>
  </motion.div>
);


const Feedbacks = () => {
  // State to manage which content is currently displayed: 0 for testimonials, 1 for research papers
  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  // Define the content arrays
  const contentArrays = [
    { type: 'testimonials', data: testimonials, title: 'Testimonials.', subText: 'What others say' },
    { type: 'research', data: researchPapers, title: 'Research Papers.', subText: 'My Academic Contributions' },
  ];

  const currentContent = contentArrays[currentContentIndex];

  // Effect to handle automatic carousel rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContentIndex((prevIndex) =>
        (prevIndex + 1) % contentArrays.length // Loop back to the start
      );
    }, 7000); // Change every 7 seconds

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, [contentArrays.length]); // Re-run effect if contentArrays length changes (unlikely)

  return (
    <div className='mt-16 bg-black-100 rounded-[20px]'>
      {/* Heading */}
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>{currentContent.subText}</p>
          <h2 className={styles.sectionHeadText}>{currentContent.title}</h2>
        </motion.div>
      </div>

      {/* Cards & Carousel Logic */}
      <div className={`-mt-24 pb-16 ${styles.paddingX} relative`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentContent.type}
            variants={staggerContainer(0.3, 0)}
            initial="hidden"
            animate="show"
            exit="hidden"
            viewport={{ once: true, amount: 0.2 }}
            className={`flex flex-wrap justify-center gap-6`}
          >
            {currentContent.type === 'testimonials' ? (
              currentContent.data.map((testimonial, index) => (
                <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
              ))
            ) : (
              currentContent.data.map((paper, index) => (
                <ResearchCard key={paper.title} index={index} {...paper} />
              ))
            )}
          </motion.div>
        </AnimatePresence>

        {/* Carousel Navigation Dots */}
        <div className="flex justify-center mt-8 gap-3">
          {contentArrays.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentContentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentContentIndex === index ? 'bg-blue-500' : 'bg-gray-600 hover:bg-gray-500'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
 