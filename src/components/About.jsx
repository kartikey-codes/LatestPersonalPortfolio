import React, { useRef, useEffect, useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
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
  const [highlightedLine, setHighlightedLine] = useState(0);
  const pRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (pRef.current) {
        const lines = pRef.current.querySelectorAll("span");
        let highlighted = false;

        lines.forEach((line, index) => {
          const rect = line.getBoundingClientRect();

          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            setHighlightedLine(index);
            highlighted = true;
          }
        });

        if (!highlighted) {
          setHighlightedLine(-1); // No line in viewport
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call initially to set the highlighted line

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 max-w-3xl leading-[30px]'
        ref={pRef}
      >
        {/* Wrap each line in a <span> */}
        {`I'm a dedicated and self-motivated Developer with a strong passion for crafting innovative digital solutions. My approach to development goes beyond code – I see each project as an opportunity to open doors to fresh experiences.
Currently I'm in my 5th semester pursuing a B.Tech in Computer Science Engineering with a specialization in IoT at prestigious Vellore Institute of Technology Vellore, I am committed to continuous growth.
I'm a skilled full-stack developer and currently exploring Data Science. 
My toolkit includes delving into new frameworks, experimenting with emerging technologies, and collaborating on forward-thinking ventures. 
If you're looking to collaborate on projects that push boundaries and explore uncharted territories, I'd be thrilled to connect and discuss opportunities.`.split("\n").map((line, index) => (
          <span
            key={index}
            className={`${
              index === highlightedLine ? "text-[#915EFF]" : "text-secondary"
            } text-[18px] font-medium cursor-pointer`}
          >
            {line}
          </span>
        ))}
      </motion.p>

      {/* <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
