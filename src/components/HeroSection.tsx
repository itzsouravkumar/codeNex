import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col justify-start p-4 md:p-1 z-10 snap-start">
      <motion.div
        className="flex flex-col items-center justify-center text-center mt-[10rem] md:mt-[15rem] boldonse-regular text-black gap-3 md:gap-5"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <p className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] leading-tight">RECRUITMENT</p>
        <p className="text-[1rem] sm:text-[1.2rem] md:text-[1.5rem]">CLOSES IN</p>
        <p className="text-[1.2rem] sm:text-[1.5rem] md:text-[2rem]">20D  20H 20M 20S</p>
        <div className="text-[0.6rem] sm:text-[0.7rem] bg-black text-white px-6 py-3 md:p-4 rounded-[20px] md:rounded-[34px] hover:bg-gray-800 transition-colors cursor-pointer">
          APPLY NOW
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;