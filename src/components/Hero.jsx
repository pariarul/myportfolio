import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Parallax logic
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  // Mouse tracking for magnetic effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 20, stiffness: 100 });
  const springY = useSpring(mouseY, { damping: 20, stiffness: 100 });

  const moveX = useTransform(springX, [0, 1000], [-40, 40]);
  const moveY = useTransform(springY, [0, 1000], [-40, 40]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full h-[110vh] flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-[10%] left-[5%] w-[60vw] h-[60vw] bg-yellow-500/[0.03] blur-[120px] rounded-full"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-[10%] right-[5%] w-[50vw] h-[50vw] bg-blue-600/[0.03] blur-[150px] rounded-full"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:5rem_5rem]" />
      </div>

      {/* Main Content */}
      <motion.div
        style={{ opacity, scale, x: moveX, y: moveY }}
        className="relative z-10 flex flex-col items-center select-none"
      >
        {/* Available Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <motion.div
            whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-3 px-6 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-md overflow-hidden cursor-pointer transition-colors"
          >
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse relative z-10" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/50 group-hover:text-white transition-colors relative z-10">
              Available for hire
            </span>
          </motion.div>
        </motion.div>

        {/* Name Headline */}
        <div className="flex flex-col items-start translate-x-[-5vw]">
          <div className="relative">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-[18vw] md:text-[15vw] font-black leading-[0.75] tracking-tighter text-yellow-400"
            >
              PARI
            </motion.h1>
          </div>
          <div className="relative mt-[-2vw] ml-[15vw]">
            <motion.h1
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[18vw] md:text-[15vw] font-black leading-[0.75] tracking-tighter text-white"
            >
              ARUL
            </motion.h1>
            {/* Decorative Outlined Text */}
            <motion.h1
              style={{ x: useTransform(springX, [0, 1000], [20, -20]) }}
              className="absolute -top-1 -left-1 text-[18vw] md:text-[15vw] font-black leading-[0.75] tracking-tighter text-stroke opacity-30 pointer-events-none"
            >
              ARUL
            </motion.h1>
          </div>
        </div>


      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 group cursor-pointer"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-white/20 group-hover:text-white transition-colors">Scroll</span>
        <div className="relative w-[1px] h-24 bg-white/10 overflow-hidden">
          <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-400 to-transparent"
          />
        </div>
      </motion.div>

      {/* Location Label */}
      <div className="absolute top-1/2 left-10 md:left-20 -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col gap-10">
          <div className="rotate-[270deg] origin-left whitespace-nowrap">
            <p className="text-[10px] uppercase tracking-[0.6em] font-mono text-white/10">Based in Tamil Nadu, IN</p>
          </div>
          <div className="w-[1px] h-20 bg-white/10 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
