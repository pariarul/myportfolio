import React from 'react';
import { motion } from 'framer-motion';

/* =======================
   ANIMATION VARIANTS
======================= */
const nameVariant = {
  hidden: { y: 100, opacity: 0 },
  visible: (i = 1) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.3, type: 'spring', stiffness: 100 },
  }),
};

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: 'easeOut' },
  }),
};

const dotVariant = {
  animate: {
    scale: [1, 1.5, 1],
    rotate: [0, 45, 0],
    transition: { repeat: Infinity, duration: 1.5, ease: 'easeInOut' },
  },
};

const Hero = () => {
  return (
    <div id="home" className="relative w-full h-screen flex items-center overflow-hidden mt-10">
      <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12">

        {/* ====== NAME ====== */}
        <motion.h1
          custom={0}
          variants={nameVariant}
          initial="hidden"
          animate="visible"
          className="text-[15vw] leading-[0.8] font-bold tracking-tighter text-yellow-400"
        >
          PARI
        </motion.h1>

        <motion.h1
          custom={1}
          variants={nameVariant}
          initial="hidden"
          animate="visible"
          className="text-[15vw] leading-[0.8] font-bold tracking-tighter text-white ml-[10vw]"
        >
          ARUL
        </motion.h1>

        {/* ====== DESCRIPTION ====== */}
        <div className="flex flex-col md:flex-row justify-between items-end  pt-8 mt-12">
          {/* Description text */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={textVariant}
            custom={0}
            className="text-xl md:text-2xl text-white max-w-xl font-light leading-snug"
          >
            I'm a <span className="font-bold">Full Stack Developer</span>,{' '}
            <span className="font-bold">Designer</span>, and{' '}
            <span className="font-bold">Problem Solver</span>.
          </motion.p>

          {/* Tech stack dots */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariant}
            custom={1}
            className="flex gap-4 mt-8 md:mt-0 items-center text-white"
          >
            {['mongodb', 'expressjs', 'reactjs', 'nodejs'].map((tech, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2"
                animate={{
                  y: [0, -6, 0],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  delay: i * 0.2,
                  repeat: Infinity,
                  duration: 1.5,
                  ease: 'easeInOut',
                }}
              >
                <motion.div
                  className="w-2 h-2 bg-yellow-400 rounded-full shadow-lg"
                  variants={dotVariant}
                  animate="animate"
                />
                <span className="font-mono text-xs uppercase tracking-widest text-white/70 hover:text-yellow-400 transition-colors duration-300">
                  {tech}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ====== FLOATING BACKGROUND EFFECT ====== */}
        <motion.div
          className="absolute top-10 left-0 w-full h-full pointer-events-none"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        />

      </div>
    </div>
  );
};

export default Hero;
