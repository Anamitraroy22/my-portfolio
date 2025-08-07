// src/components/ResearchCard.jsx
import React from "react";
import { motion } from "framer-motion";

// Assuming you have fadeIn variant in your utils/motion.js
import { fadeIn } from "../utils/motion";

const ResearchCard = ({
  index,
  title,
  authors,
  publication,
  abstract,
  link,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    className='bg-black-200/60 backdrop-blur-md shadow-xl border border-white/10 p-6 rounded-2xl w-full md:w-[30%] flex flex-col justify-between'
  >
    <h3 className='text-white text-[20px] font-bold mb-3 leading-tight'>{title}</h3>

    <p className='text-gray-300 text-[14px] mb-2'>{authors}</p>
    {publication && (
      <p className='text-gray-400 text-[12px] mb-4 italic'>{publication}</p>
    )}

    <p className='text-white tracking-wide text-[16px] flex-grow mb-4'>{abstract}</p>

    {link && (
      <div className='mt-auto'> {/* mt-auto pushes the link to the bottom */}
        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 text-sm'
        >
          View Paper
        </a>
      </div>
    )}
  </motion.div>
);

export default ResearchCard;
