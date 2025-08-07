import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion for the button animation

import { styles } from "../styles";
import { navLinks } from "../constants";
// REMOVED: import { logo, menu, close } from "public/assets"; // This import is not needed for public folder assets
import { fadeIn } from "../utils/motion"; // Assuming fadeIn is available or define a simple variant if not

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>

        {/* Logo + Name + LinkedIn */}
        <div className='flex items-center gap-3'>
          <Link
            to='/'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
            className='flex items-center gap-2'
          >
            {/* Corrected: Direct reference to logo.svg at the root of the public folder */}
            <img src="/logo.svg" alt='logo' className='w-9 h-9 object-contain' />
            <p className='text-white text-[18px] font-bold cursor-pointer flex items-center'>
              Anamitra Roy <span className='sm:inline hidden'>&nbsp;| Web Developer</span>
            </p>
          </Link>

          {/* LinkedIn Icon */}
          <a
            href='https://www.linkedin.com/in/anamitra-roy-6937a42a5'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
            title='Connect on LinkedIn'
            className='bg-white rounded-full w-7 h-7 flex items-center justify-center hover:scale-110 hover:shadow-md hover:shadow-blue-500/40 transition-all duration-200'
          >
            <FaLinkedinIn className='text-blue-600 w-4 h-4' />
          </a>
        </div>

        {/* Desktop Nav Links */}
        <ul className='list-none hidden sm:flex flex-row gap-10 items-center'> {/* Added items-center for vertical alignment */}
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          {/* Download CV Button for Desktop */}
          <li>
            <motion.a
              variants={fadeIn("", "", 0.2, 1)} // Reusing fadeIn variant
              href="https://github.com/Anamitraroy22/my-cv1/raw/main/Anamitra_Roy___CV.pdf" // Updated with your provided CV link
              target="_blank"
              rel="noopener noreferrer"
              download
              className="px-4 py-2 text-white text-[14px] font-bold border border-cyan-400 rounded-md bg-cyan-500 hover:bg-cyan-600 transition duration-300 animate-glow" // Smaller size and subtle glow
            >
              Download CV
            </motion.a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          {/* Corrected: Direct reference to menu.png and close.png at the root of the public folder */}
          <img
            src={toggle ? "/close.png" : "/menu.png"}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          {/* Mobile Dropdown Menu */}
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              {/* Download CV Button for Mobile */}
              <li>
                <motion.a
                  variants={fadeIn("", "", 0.2, 1)} // Reusing fadeIn variant
                  href="https://github.com/Anamitraroy22/my-cv1/raw/main/Anamitra_Roy___CV.pdf" // Updated with your provided CV link
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="px-4 py-2 text-white text-[14px] font-bold border border-cyan-400 rounded-md bg-cyan-500 hover:bg-cyan-600 transition duration-300 animate-glow w-full text-center" // Smaller size, subtle glow, full width for mobile
                >
                  Download CV
                </motion.a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
