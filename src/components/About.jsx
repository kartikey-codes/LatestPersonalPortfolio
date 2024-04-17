import React, { useRef, useEffect, useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
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
        className="mt-4 max-w-3xl leading-[30px]"
        ref={pRef}
      >
        {/* Wrap each line in a <span> */}
        {`Passionate Developer with a knack for innovation and a love for learning new tech. Currently pursuing a B.Tech in Computer Science Engineering at VIT Vellore, specializing in IoT. Dedicated to continuous growth and exploring new horizons.
Skilled in full-stack development, with a keen interest in AI, ML, and Deep Learning. Experience in DevOps and adept at problem-solving. Proficient in design and adept at motivating and leading teams. Enthusiastic about helping others and envisioning projects based on market trends and team dynamics.
Areas of Interest: Full Stack Development | AI | ML | Deep Learning | DevOps`
          .split("\n")
          .map((line, index) => (
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
