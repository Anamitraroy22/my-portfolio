import React, { useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import Earth from "./canvas/Earth";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();

  const githubUrl = "https://github.com/YourGitHubProfile";
  const linkedinUrl = "https://linkedin.com/in/YourLinkedInProfile";

  return (
    <section
      id="contact"
      className="relative z-0 flex flex-col md:flex-row justify-between px-6 md:px-16 py-20 gap-10 bg-transparent"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="md:w-[45%] w-full bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/10 flex flex-col"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} className="mt-8 flex flex-col gap-5">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Name</span>
            <input
              type="text"
              name="name"
              placeholder="What's your good name?"
              className="p-3 rounded bg-white/20 text-white placeholder-white outline-none border border-white/10"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Email</span>
            <input
              type="email"
              name="email"
              placeholder="What's your web address?"
              className="p-3 rounded bg-white/20 text-white placeholder-white outline-none border border-white/10"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Message</span>
            <textarea
              rows={5}
              name="message"
              placeholder="What do you want to say?"
              className="p-3 rounded bg-white/20 text-white placeholder-white outline-none border border-white/10 resize-none"
            />
          </label>
          <button
            type="submit"
            className="bg-[#915EFF] py-3 rounded-lg text-white font-bold hover:opacity-90 transition-all shadow-md shadow-primary"
          >
            Send
          </button>

          <div className="flex flex-row gap-4 mt-6 justify-center">
    <a
      href={"https://github.com/Anamitraroy22"} // Corrected href syntax
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-5 py-3 bg-[#24292e] rounded-lg text-white font-semibold hover:bg-[#1c1e22] transition-all"
    >
      <FaGithub size={18} /> GitHub
    </a>

    <a
      href={"https://www.linkedin.com/in/anamitra-roy-6937a42a5/"} // Corrected href syntax and removed typo
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-5 py-3 bg-[#0A66C2] rounded-lg text-white font-semibold hover:bg-[#004182] transition-all"
    >
      <FaLinkedin size={18} /> LinkedIn
    </a>
</div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="md:w-[50%] w-full h-[400px] md:h-auto flex justify-center items-center mt-10 md:mt-0"
      >
        <div className="w-full h-full">
          <Earth />
        </div>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");
