// src/components/Tech.jsx
import React from "react";
import { BallCanvas } from "./canvas"; // Correct import path for BallCanvas
import { SectionWrapper } from "../hoc"; // Assuming SectionWrapper is correctly imported
import { technologies } from "../constants"; // Assuming 'technologies' array is defined here

const Tech = () => {
  return (
    // Reverted background to original or removed it
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          {/* Render BallCanvas for each technology icon */}
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
