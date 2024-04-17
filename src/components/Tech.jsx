import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-6'>
      {technologies.map((technology) => (
        <div className='w-20 h-20 p-1' key={technology.name}>
          <img 
            src={technology.icon} 
            alt={technology.name} 
            className='w-full h-full object-contain cursor-pointer'
            style={{
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "rotate(5deg)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "rotate(0deg)";
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
