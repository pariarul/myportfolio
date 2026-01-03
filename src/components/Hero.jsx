import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame } from 'framer-motion';
import { FaReact, FaNodeJs, FaChevronRight } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript } from 'react-icons/si';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Parallax logic
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  // Background Marquee Transform
  const marqueeX = useTransform(scrollY, [0, 1000], [0, -500]);

  // Mouse tracking for magnetic effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 20, stiffness: 100 });
  const springY = useSpring(mouseY, { damping: 20, stiffness: 100 });

  const moveX = useTransform(springX, [0, 1000], [-30, 30]);
  const moveY = useTransform(springY, [0, 1000], [-30, 30]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX - innerWidth / 2);
      mouseY.set(e.clientY - innerHeight / 2);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const techIcons = [
    { Icon: FaReact, color: '#61DAFB', top: '15%', left: '10%', delay: 0 },
    { Icon: FaNodeJs, color: '#339933', top: '20%', right: '12%', delay: 0.2 },
    { Icon: SiMongodb, color: '#47A248', bottom: '20%', left: '15%', delay: 0.4 },
    { Icon: SiJavascript, color: '#F7DF1E', bottom: '30%', right: '10%', delay: 0.6 },
  ];

  const nameVariants = {
    initial: { y: 100, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 1.2, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }
    })
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 text-white">
        {/* Grain/Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-overlay noise" />

        <motion.div
          style={{ y: y1 }}
          className="absolute top-[10%] left-[5%] w-[60vw] h-[60vw] bg-yellow-500/[0.03] blur-[120px] rounded-full"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-[10%] right-[5%] w-[50vw] h-[50vw] bg-blue-600/[0.03] blur-[150px] rounded-full"
        />

        {/* Background Marquee Text */}
        <motion.div
          style={{ x: marqueeX }}
          className="absolute top-[40%] left-0 whitespace-nowrap opacity-[0.02] select-none pointer-events-none"
        >
          <span className="text-[25vw] font-black tracking-tighter uppercase italic">
            Full Stack Developer • MERN Stack • React Expert •
          </span>
          <span className="text-[25vw] font-black tracking-tighter uppercase italic">
            Full Stack Developer • MERN Stack • React Expert •
          </span>
        </motion.div>

        {/* Floating Icons */}
        {techIcons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 1, delay: item.delay }}
            style={{
              position: 'absolute',
              top: item.top,
              left: item.left,
              right: item.right,
              bottom: item.bottom,
              x: useTransform(springX, [0, 1000], [index % 2 ? 30 : -30, index % 2 ? -30 : 30]),
              y: useTransform(springY, [0, 1000], [index % 2 ? -30 : 30, index % 2 ? 30 : -30])
            }}
            className="text-4xl md:text-6xl"
          >
            <item.Icon color={item.color} />
          </motion.div>
        ))}

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:5rem_5rem]" />
      </div>

      {/* Main Content */}
      <motion.div
        style={{ opacity, scale, x: useTransform(springX, [-500, 500], [-15, 15]), y: useTransform(springY, [-500, 500], [-15, 15]) }}
        className="relative z-10 flex flex-col items-center w-full px-6"
      >


        {/* Name Headline - Optimized for Mobile */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left relative">
          {/* Subtle Glow behind name */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/[0.02] blur-[100px] rounded-full pointer-events-none" />

          <div className="relative overflow-hidden">
            <motion.h1
              custom={0}
              initial="initial"
              animate="animate"
              variants={nameVariants}
              className="text-[20vw] md:text-[14vw] font-black leading-none tracking-tighter text-yellow-400 drop-shadow-[0_0_30px_rgba(250,204,21,0.1)]"
            >
              PARI
            </motion.h1>
          </div>
          <div className="relative mt-[-2vw] md:ml-[10vw] flex items-center">
            <div className="relative overflow-hidden">
              <motion.h1
                custom={1}
                initial="initial"
                animate="animate"
                variants={nameVariants}
                className="text-[20vw] md:text-[14vw] font-black leading-none tracking-tighter text-white"
              >
                ARUL
              </motion.h1>
            </div>
            {/* Outline Echo Effect */}
            <motion.h1
              style={{ x: useTransform(springX, [-500, 500], [20, -20]) }}
              className="absolute -top-1 -left-1 text-[20vw] md:text-[14vw] font-black leading-none tracking-tighter text-stroke opacity-15 pointer-events-none hidden md:block"
            >
              ARUL
            </motion.h1>
          </div>
        </div>

        {/* Roles & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-10 md:mt-16 flex flex-col items-center gap-8 md:gap-12 w-full max-w-2xl"
        >
          {/* Roles */}
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 text-white/40 font-mono text-[9px] md:text-sm tracking-[0.2em] uppercase">
            <span className="hover:text-yellow-400 transition-colors cursor-default">Full Stack</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="hover:text-yellow-400 transition-colors cursor-default">React Specialist</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="hover:text-yellow-400 transition-colors cursor-default">MERN Stack</span>
          </div>

          {/* Primary CTA with Magnetic feel */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ x: useTransform(springX, [-500, 500], [-5, 5]), y: useTransform(springY, [-500, 500], [-5, 5]) }}
              className="group relative flex items-center gap-3 px-10 md:px-14 py-4 md:py-5 bg-white text-black text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] rounded-full overflow-hidden shadow-[0_20px_50px_rgba(255,255,255,0.1)] transition-shadow hover:shadow-[0_20px_50px_rgba(250,204,21,0.2)]"
            >
              <div className="absolute inset-0 bg-yellow-400 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 transition-colors group-hover:text-black">Discover Work</span>
              <FaChevronRight className="relative z-10 text-[8px] group-hover:translate-x-2 transition-transform" />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ x: 5, color: '#FACC15' }}
              className="group flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-white/40 hover:text-white transition-all py-2"
            >
              <span className="w-8 h-[1px] bg-white/10 group-hover:w-12 group-hover:bg-yellow-400 transition-all" />
              Start a Conversation
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="relative w-[1px] h-16 md:h-24 bg-white/5 overflow-hidden">
          <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-400 to-transparent"
          />
        </div>
      </motion.div>

      {/* Side Label - Desktop Only */}
      <div className="absolute top-1/2 left-8 md:left-12 -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col gap-12 items-center">
          <div className="rotate-270 whitespace-nowrap">
            <p className="text-[9px] uppercase tracking-[0.5em] font-medium text-white/10 [writing-mode:vertical-lr]">Portfolio © 2024</p>
          </div>
          <div className="w-[1px] h-32 bg-gradient-to-b from-white/10 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
