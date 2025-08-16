import React from "react";

const Navigation: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-black/77 w-[95%] max-w-[84rem] h-[4rem] md:h-[5rem] flex items-center justify-between rounded-[20px] md:rounded-[34px] mx-auto mt-[0.5rem] px-[1.5rem] md:px-[3rem] z-50">
      <img 
        src="/assets/nav-logo.png" 
        alt="nav-logo" 
        className="w-[5rem] h-[1.2rem] md:w-[7rem] md:h-[1.7rem]" 
      />
      <div className="hidden md:flex items-center gap-[2rem] lg:gap-[4.5rem] text-[0.9rem] lg:text-[1rem] font-thin">
        <a href="#" className="hover:text-gray-300 transition-colors">About</a>
        <a href="#" className="hover:text-gray-300 transition-colors">Domains</a>
        <a href="#" className="hover:text-gray-300 transition-colors">Timeline</a>
        <a href="#" className="hover:text-gray-300 transition-colors">Contact</a>
        <a href="#" className="hover:text-gray-300 transition-colors">Register Now</a>
      </div>
      {/* Mobile menu button */}
      <div className="md:hidden flex items-center">
        <button className="text-white text-xl">☰</button>
      </div>
    </div>
  );
};

export default Navigation;