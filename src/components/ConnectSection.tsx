import React from "react";

const ConnectSection: React.FC = () => {
  return (
    <section className="relative min-h-screen z-10 p-4 flex flex-col items-center justify-center mt-6 md:mt-10 snap-start">
      <div className="flex text-[2rem] sm:text-[2.5rem] md:text-[3rem] boldonse-regular text-center mb-6 md:mb-0">
        CONNECT WITH US
      </div>
      
      {/* Social Icons */}
      <div className="flex justify-center items-center mt-6 md:mt-10 gap-3 md:gap-2 flex-wrap">
        <img src="/assets/icons8-instagram-50.png" alt="Instagram" className="w-10 h-10 md:w-12 md:h-12 mx-1 md:mx-2 hover:opacity-80 transition-opacity cursor-pointer" />
        <div className="w-0.5 h-10 md:h-14 bg-black mx-1 md:mx-2" />
        <img src="/assets/icons8-x-50.png" alt="Twitter" className="w-10 h-10 md:w-12 md:h-12 mx-1 md:mx-2 hover:opacity-80 transition-opacity cursor-pointer" />
        <div className="w-0.5 h-10 md:h-14 bg-black mx-1 md:mx-2" />
        <img src="/assets/icons8-mail-50.png" alt="Email" className="w-10 h-10 md:w-12 md:h-12 mx-1 md:mx-2 hover:opacity-80 transition-opacity cursor-pointer" />
        <div className="w-0.5 h-10 md:h-14 bg-black mx-1 md:mx-2" />
        <img src="/assets/icons8-whatsapp-50.png" alt="WhatsApp" className="w-10 h-10 md:w-12 md:h-12 mx-1 md:mx-2 hover:opacity-80 transition-opacity cursor-pointer" />
        <div className="w-0.5 h-10 md:h-14 bg-black mx-1 md:mx-2" />
        <img src="/assets/icons8-call-50.png" alt="Call" className="w-10 h-10 md:w-12 md:h-12 mx-1 md:mx-2 hover:opacity-80 transition-opacity cursor-pointer" />
      </div>
      
      {/* Large CODENEX text */}
      <div className="flex text-[4rem] sm:text-[5rem] md:text-[7rem] boldonse-regular mt-12 md:mt-16 mb-6 md:mb-8 opacity-40 text-center">
        CODENEX
      </div>
      
      {/* Divider line */}
      <div className="w-[90%] max-w-[64rem] h-0.5 bg-black mx-2 mb-6 md:mb-8" />
      
      {/* Footer text */}
      <div className="flex text-[0.4rem] sm:text-[0.5rem] boldonse-regular font-light self-start md:mr-[58rem]">
        @RECRUITMENT
      </div>
    </section>
  );
};

export default ConnectSection;
