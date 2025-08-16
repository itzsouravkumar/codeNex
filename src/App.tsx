import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import "./App.css";

// Import components
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import EmptySection from "./components/EmptySection";
import DomainsSection from "./components/DomainsSection";
import TimelineSection from "./components/TimelineSection";
import ConnectSection from "./components/ConnectSection";

export default function App() {
  const { scrollY } = useScroll();
  const screenHeight = window.innerHeight;
  const screenWidth = window.innerWidth;
  const charWidth = screenWidth < 768 ? 120 : 200;

  const bgScaleRaw: MotionValue<number> = useTransform(
    scrollY,
    [0, 5 * screenHeight],
    [1, 1.2]
  );
  const bgYRaw: MotionValue<number> = useTransform(
    scrollY,
    [0, 5 * screenHeight],
    [0, -3 * screenHeight]
  );
  const bgScale = useSpring(bgScaleRaw, { stiffness: 80, damping: 30 });
  const bgY = useSpring(bgYRaw, { stiffness: 80, damping: 30 });

  const section2End = 0.2 * screenHeight;
  const section3Start = 0.6 * screenHeight;
  const section3End = 1.2 * screenHeight;
  const section4Start = 1.5 * screenHeight;
  const section4Mid = 2.2 * screenHeight; 
  const section4End = 3.0 * screenHeight;
  const section5End = 4.5 * screenHeight;  

  const maxX = screenWidth < 768 ? (screenWidth / 2) - (charWidth / 2) - 20 : (screenWidth / 2) - (charWidth / 2) - 50; 
  const minX = screenWidth < 768 ? -(screenWidth / 2) + (charWidth / 2) + 20 : -(screenWidth / 2) + (charWidth / 2) + 50; 

  // Character animation
  const charScaleRaw: MotionValue<number> = useTransform(
    scrollY,
    [0, section2End, section3Start, section3End, section4Start, section4End, section5End],
    [1, 1.35, 1.2, 1.2, 1.15, 1.1, 1.05]
  );
  const charYRaw: MotionValue<number> = useTransform(
    scrollY,
    [0, section2End, section3Start, section3End, section4Start, section4Mid, section4End, section5End],
    [320, 0, 0, 0, 0, 0, 0, 250]
  );
  const charXRaw: MotionValue<number> = useTransform(
    scrollY,
    [0, section3Start, section3End, section4Start, section4Mid, section4End, section5End],
    [0, 30, maxX, maxX, minX, minX, 0]
  );

  const charScaleSpring = useSpring(charScaleRaw, { stiffness: 80, damping: 30 });
  const charYSpring = useSpring(charYRaw, { stiffness: 80, damping: 30 });
  const charXSpring = useSpring(charXRaw, { stiffness: 80, damping: 30 });

  // Section-specific animations
  const section3XRaw = useTransform(scrollY, [section3Start, section3End], [screenWidth < 768 ? -screenWidth * 0.6 : -screenWidth * 0.4, screenWidth < 768 ? 0 : -100]);
  const section3OpacityRaw = useTransform(scrollY, [section3Start, section3End], [0, 1]);
  const section3ScaleRaw = useTransform(scrollY, [section3Start, section3End], [0.7, 1]); 
  const section3BlurRaw = useTransform(scrollY, [section3Start, section3End], [8, 0]); 
  
  const section3X = useSpring(section3XRaw, { stiffness: 80, damping: 30 });
  const section3Opacity = useSpring(section3OpacityRaw, { stiffness: 80, damping: 30 });
  const section3Scale = useSpring(section3ScaleRaw, { stiffness: 80, damping: 30 });
  const section3Blur = useSpring(section3BlurRaw, { stiffness: 80, damping: 30 });

  const section4YRaw = useTransform(scrollY, [section4Mid, section4End], [100, 0]);
  const section4Y = useSpring(section4YRaw, { stiffness: 80, damping: 30 });

  const sectionAnimations = {
    section3: {
      x: section3X,
      opacity: section3Opacity,
      scale: section3Scale,
      blur: section3Blur
    },
    section4: {
      y: section4Y
    }
  };

  return (
    <div className="bg-black text-white relative overflow-x-hidden snap-y snap-mandatory">
      {/* Background */}
      <motion.img
        src="/assets/home.jpg"
        alt="bg-img"
        className="w-full h-auto fixed top-0 left-0 z-0"
        style={{ scale: bgScale, y: bgY }}
      />

      {/* Character */}
      <motion.img
        src="/assets/character.png"
        alt="character"
        className="fixed left-1/2 -translate-x-1/2 z-20 pointer-events-none bottom-[-2rem] w-[120px] md:w-auto"
        style={{
          x: charXSpring,
          y: charYSpring,
          scale: charScaleSpring,
        }}
      />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Empty Section */}
      <EmptySection />

      {/* Domains Section */}
      <DomainsSection animations={sectionAnimations.section3} />

      {/* Timeline Section */}
      <TimelineSection animations={sectionAnimations.section4} />
      
      {/* Connect Section */}
      <ConnectSection />
    </div>
  );
}