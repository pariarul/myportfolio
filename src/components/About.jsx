import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/hero.jpeg';

const About = () => {
  return (
    <section
      id="about"
      className="bg-black/90 backdrop-blur-xl text-white py-20 px-5 md:px-12"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-24 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full max-w-sm mx-auto md:max-w-none aspect-[3/4] md:aspect-square bg-[#111] overflow-hidden rounded-2xl"
        >
          <img
            src={profileImg}
            alt="Pari"
            className="w-full h-full object-cover transition-all duration-700"
          />
        </motion.div>

        {/* CONTENT */}
        <div className="text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            I'm Pari, a creative full-stack developer.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-5 text-white/70 text-base sm:text-lg font-light leading-relaxed"
          >
            <p>
              I combine <span className="text-white">code</span> and
              <span className="text-white"> design</span> to build digital
              experiences that are fast, functional, and visually engaging.
            </p>
            <p>
              With expertise in React, Node.js, and modern CSS, I focus on
              performance, accessibility, and clean UI systems that scale.
            </p>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/10"
          >
            <Stat value="3+" label="Years Exp" />
            <Stat value="20+" label="Projects" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ value, label }) => (
  <div className="flex flex-col items-center md:items-start">
    <span className="text-2xl md:text-3xl font-bold">{value}</span>
    <span className="text-xs md:text-sm text-white/60 uppercase tracking-wider mt-1">
      {label}
    </span>
  </div>
);

export default About;
