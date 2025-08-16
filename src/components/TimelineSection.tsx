import React from "react";
import { motion, MotionValue } from "framer-motion";

interface TimelineSectionProps {
  animations: {
    y: MotionValue<number>;
  };
}

const TimelineSection: React.FC<TimelineSectionProps> = ({ animations }) => {
  return (
    <motion.section 
      className="relative min-h-screen z-10 flex flex-col items-center justify-center px-4 py-8 snap-start"
      style={{ y: animations.y }}
    >
      <div className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] boldonse-regular text-black mb-8 md:mb-12 text-center">
        TIMELINE
      </div>
      
      <div className="flex items-center justify-center w-full overflow-x-auto">
        {/* Desktop Timeline - Horizontal */}
        <div className="hidden md:flex items-center justify-center max-w-6xl">
          {/* Timeline Item 1 */}
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 bg-black rounded-full mb-4"></div>
            <div className="text-center">
              <div className="text-[1rem] lg:text-[1.2rem] font-bold text-black">APPLICATION</div>
              <div className="text-[0.9rem] lg:text-[1rem] text-black">OPENS</div>
              <div className="text-[0.7rem] lg:text-[0.8rem] text-black/70 mt-1">19/08/2025</div>
            </div>
          </div>

          {/* Timeline Line */}
          <div className="w-16 lg:w-28 h-1 bg-black mx-4 lg:mx-6"></div>

          {/* Timeline Item 2 */}
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 bg-black rounded-full mb-4"></div>
            <div className="text-center">
              <div className="text-[1rem] lg:text-[1.2rem] font-bold text-black">APPLICATION</div>
              <div className="text-[0.9rem] lg:text-[1rem] text-black">CLOSE</div>
              <div className="text-[0.7rem] lg:text-[0.8rem] text-black/70 mt-1">29/08/2025</div>
            </div>
          </div>

          {/* Timeline Line */}
          <div className="w-16 lg:w-28 h-1 bg-black mx-4 lg:mx-6"></div>

          {/* Timeline Item 3 */}
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 bg-black rounded-full mb-4"></div>
            <div className="text-center">
              <div className="text-[1rem] lg:text-[1.2rem] font-bold text-black">INTERVIEWS</div>
              <div className="text-[0.7rem] lg:text-[0.8rem] text-black/70 mt-1">08/09/2025</div>
            </div>
          </div>

          {/* Timeline Line */}
          <div className="w-16 lg:w-28 h-1 bg-black mx-4 lg:mx-6"></div>

          {/* Timeline Item 4 */}
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 bg-black rounded-full mb-4"></div>
            <div className="text-center">
              <div className="text-[1rem] lg:text-[1.2rem] font-bold text-black">RESULTS</div>
              <div className="text-[0.7rem] lg:text-[0.8rem] text-black/70 mt-1">10/09/2025</div>
            </div>
          </div>
        </div>

        {/* Mobile Timeline - Vertical */}
        <div className="md:hidden flex flex-col items-start max-w-sm w-full">
          {/* Timeline Item 1 */}
          <div className="flex items-start mb-6">
            <div className="flex flex-col items-center mr-6">
              <div className="w-6 h-6 bg-black rounded-full"></div>
              <div className="w-0.5 h-16 bg-black mt-2"></div>
            </div>
            <div>
              <div className="text-[1.1rem] font-bold text-black">APPLICATION OPENS</div>
              <div className="text-[0.8rem] text-black/70 mt-1">19/08/2025</div>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="flex items-start mb-6">
            <div className="flex flex-col items-center mr-6">
              <div className="w-6 h-6 bg-black rounded-full"></div>
              <div className="w-0.5 h-16 bg-black mt-2"></div>
            </div>
            <div>
              <div className="text-[1.1rem] font-bold text-black">APPLICATION CLOSE</div>
              <div className="text-[0.8rem] text-black/70 mt-1">29/08/2025</div>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="flex items-start mb-6">
            <div className="flex flex-col items-center mr-6">
              <div className="w-6 h-6 bg-black rounded-full"></div>
              <div className="w-0.5 h-16 bg-black mt-2"></div>
            </div>
            <div>
              <div className="text-[1.1rem] font-bold text-black">INTERVIEWS</div>
              <div className="text-[0.8rem] text-black/70 mt-1">08/09/2025</div>
            </div>
          </div>

          {/* Timeline Item 4 */}
          <div className="flex items-start">
            <div className="flex flex-col items-center mr-6">
              <div className="w-6 h-6 bg-black rounded-full"></div>
            </div>
            <div>
              <div className="text-[1.1rem] font-bold text-black">RESULTS</div>
              <div className="text-[0.8rem] text-black/70 mt-1">10/09/2025</div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TimelineSection;