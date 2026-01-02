import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import profileImg from '../assets/hero.jpeg';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 8]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative bg-[#050505] text-white py-32 md:py-64 overflow-hidden"
    >
      {/* Dynamic Background Blurs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[40vw] h-[40vw] bg-blue-600/[0.03] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[30vw] h-[30vw] bg-yellow-500/[0.02] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-start">

          {/* Left Column: Parallax Portrait */}
          <div className="lg:col-span-12 xl:col-span-5 relative group">
            <motion.div
              style={{ rotate, scale }}
              className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-white/[0.03] border border-white/10"
            >
              <img
                src={profileImg}
                alt="Pari Profile"
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[1.5s] ease-out-expo scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

              {/* Internal tag */}
              <div className="absolute bottom-8 left-8">
                <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/40 mb-1">Status</p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-sm font-bold tracking-tight"> Evolving Daily  </span>
                </div>
              </div>
            </motion.div>

            {/* Floating Philosophy Card */}
            {/* <motion.div
              style={{ y }}
              className="absolute -bottom-16 -right-6 md:-right-20 glass-panel p-8 md:p-12 rounded-[2rem] max-w-[320px] hidden xl:block shadow-2xl shadow-black/50"
            >
              <div className="w-10 h-1 h-px bg-white/20 mb-8" />
              <h4 className="text-xl md:text-2xl font-medium font-serif italic leading-relaxed text-white/90">
                "I build bridges between complex engineering and human intuition."
              </h4>
              <p className="mt-6 text-[10px] font-mono uppercase tracking-[0.3em] text-white/30">Core Philosophy / 01</p>
            </motion.div> */}
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-16 md:space-y-24">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3 px-5 py-2 border border-white/10 rounded-full mb-10 bg-white/5 backdrop-blur-sm"
              >
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40">The Identity</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-[8rem] xl:text-[10rem] font-black tracking-tighter leading-[0.8] mb-12"
              >
                CRAFTING <br />
                DIGITAL <span className="text-stroke">LEGACIES</span>.
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="space-y-10 text-2xl md:text-4xl text-white/40 font-light leading-[1.15] tracking-tight"
            >
              <p>
                Based in <span className="text-white font-medium">Coimbatore</span>, I leverage code as a medium to create immersive, high-performance web ecosystems.
              </p>
              <p>
                My approach synthesizes <span className="text-white font-medium italic underline decoration-blue-500/30 underline-offset-8">technical precision</span> with visceral aesthetic appeal.
              </p>
            </motion.div>

            {/* Experience Matrix */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-20 pt-20 border-t border-white/10">
              <StatItem number="03+" label="Years of XP" sub="Building Web" />
              <StatItem number="20+" label="Projects" sub="Completed" />
              <StatItem number="12+" label="Technologies" sub="Mastered" />
            </div>

            <div className="flex flex-col md:flex-row gap-16 pt-12 md:items-center">
              <div className="space-y-6">
                <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-white/20">The Toolkit</p>
                <div className="flex flex-wrap gap-3">
                  {['React 18', 'Next.js 14', 'Three.js', 'Node/Express', 'Generative AI', 'Web3', 'MongoDB'].map(skill => (
                    <span key={skill} className="px-5 py-2 bg-white/[0.03] border border-white/5 rounded-full text-[11px] font-mono text-white/50 hover:bg-white/10 hover:text-white transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Kinetic Anchor */}
      <div className="absolute bottom-0 left-0 w-full opacity-[0.015] text-[22vw] font-black uppercase whitespace-nowrap pointer-events-none leading-none select-none tracking-tighter translate-y-1/2">
        About Pari Arul • Creative Developer
      </div>
    </section>
  );
};

const StatItem = ({ number, label, sub }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="group"
  >
    <div className="text-5xl md:text-7xl font-bold tracking-tighter mb-3 group-hover:text-blue-500 transition-colors duration-500">
      {number}
    </div>
    <div className="text-[11px] uppercase tracking-[0.3em] font-bold text-white/80">{label}</div>
    <div className="text-[10px] font-mono uppercase tracking-widest text-white/20 mt-1">{sub}</div>
  </motion.div>
);

export default About;
