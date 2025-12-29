import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div id="home" className="relative w-full h-screen bg-transparent flex flex-col justify-center overflow-hidden">
      <motion.div className="max-w-[1600px] w-full mx-auto z-10 px-6 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-[15vw] leading-[0.8] font-bold tracking-tighter text-white"
        >
          PARI
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="text-[15vw] leading-[0.8] font-bold tracking-tighter text-white ml-[10vw]"
        >
          ARUL
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end border-t border-white/20 pt-8 mt-12"
        >
          <p className="text-xl md:text-2xl text-white max-w-xl font-light leading-snug">
            I'm a <span className="font-bold">Full Stack Developer</span>,{' '}
            <span className="font-bold">Designer</span>, and{' '}
            <span className="font-bold">Problem Solver</span>.
          </p>
          <div className="flex gap-4 mt-8 md:mt-0 items-center text-white">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="font-mono text-xs uppercase tracking-widest">
              mongodb, expressjs, reactjs, nodejs
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
