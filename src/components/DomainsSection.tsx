import React from "react";
import { motion, useTransform, MotionValue } from "framer-motion";

interface DomainsSectionProps {
  animations: {
    x: MotionValue<number>;
    opacity: MotionValue<number>;
    scale: MotionValue<number>;
    blur: MotionValue<number>;
  };
}

const DomainsSection: React.FC<DomainsSectionProps> = ({ animations }) => {
  return (
    <motion.section
      className="relative flex flex-col items-center z-[3] snap-start px-4 py-8"
      style={{ 
        x: animations.x, 
        opacity: animations.opacity,
        scale: animations.scale,
        filter: useTransform(animations.blur, (blur) => `blur(${blur}px)`)
      }}
    >
      <div className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] boldonse-regular text-black mb-6 md:mb-8 text-center">
        OUR DOMAINS
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 w-full max-w-6xl">
        <div className="relative w-[280px] h-[350px] sm:w-[320px] sm:h-[380px] md:w-[20rem] md:h-[30rem]">
          <img src="/assets/cartel.png" alt="" className="w-full h-full object-cover rounded-lg" />
          <span className="absolute top-1/2 left-1/2 text-black text-[1.2rem] sm:text-[1.5rem] md:text-[1.8rem] font-bold transform -translate-x-1/2 -translate-y-1/2 text-center">
            CREATIVES
          </span>
        </div>
        <div className="relative w-[280px] h-[350px] sm:w-[320px] sm:h-[380px] md:w-[20rem] md:h-[30rem]">
          <img src="/assets/cartel.png" alt="" className="w-full h-full object-cover rounded-lg" />
          <span className="absolute top-1/2 left-1/2 text-black text-[1.2rem] sm:text-[1.5rem] md:text-[1.8rem] font-bold transform -translate-x-1/2 -translate-y-1/2 text-center">
            TECHNICAL
          </span>
        </div>
        <div className="relative w-[280px] h-[350px] sm:w-[320px] sm:h-[380px] md:w-[20rem] md:h-[30rem]">
          <img src="/assets/cartel.png" alt="" className="w-full h-full object-cover rounded-lg" />
          <span className="absolute top-1/2 left-1/2 text-black text-[1.2rem] sm:text-[1.5rem] md:text-[1.8rem] font-bold transform -translate-x-1/2 -translate-y-1/2 text-center">
            NON-TECH
          </span>
        </div>
      </div>
    </motion.section>
  );
};

export default DomainsSection;