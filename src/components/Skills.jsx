import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaGithub,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiJsonwebtokens,
  SiNextdotjs,
  SiMysql,
} from 'react-icons/si';
import { VscJson } from 'react-icons/vsc';

/* =======================
   SKILLS DATA
======================= */
const skills = [
  { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
  { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
  { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
  { name: 'React', icon: <FaReact />, color: '#61DAFB' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff' },

  { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
  { name: 'Express.js', icon: <SiExpress />, color: '#ffffff' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
  { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },

  { name: 'JWT Auth', icon: <SiJsonwebtokens />, color: '#d63aff' },
  { name: 'REST APIs', icon: <VscJson />, color: '#cfcfcf' },

  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
  { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
  { name: 'GitHub', icon: <FaGithub />, color: '#ffffff' },
  { name: 'Postman', icon: <SiPostman />, color: '#F24E1E' },
  { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
];

/* =======================
   COMPONENT
======================= */
const Skills = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative bg-[#050505] text-white py-32 md:py-64 overflow-hidden border-t border-white/10"
    >
      {/* Background Blurs */}
      <div className="absolute top-1/3 left-0 w-[35vw] h-[35vw] bg-cyan-500/[0.03] blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[30vw] h-[30vw] bg-blue-600/[0.02] blur-[100px] rounded-full" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2 border border-white/10 rounded-full mb-10 bg-white/5 backdrop-blur-sm"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40">
              The Skillset
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[8rem] xl:text-[9rem] font-black tracking-tighter leading-[0.85]"
          >
            TECHNICAL <br />
            <span className="text-stroke">EXPERTISE</span>.
          </motion.h2>
        </div>

        {/* Skills Grid */}
        <motion.div
          style={{ y }}
          className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group relative p-8 rounded-[2rem]
                         bg-white/[0.03] border border-white/10
                         hover:border-white/30
                         transition-all duration-500
                         hover:-translate-y-2
                         backdrop-blur-xl"
            >
              {/* Icon */}
              <div
                className="text-5xl mb-6 transition-transform duration-500 group-hover:scale-110"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold tracking-wide text-white/90">
                {skill.name}
              </h3>

              {/* Hover Line */}
              <span
                className="absolute bottom-0 left-0 h-[2px] w-0
                           bg-gradient-to-r from-cyan-400 to-blue-500
                           group-hover:w-full transition-all duration-700"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Text */}
      <div className="absolute bottom-0 left-0 w-full opacity-[0.015] text-[22vw] font-black uppercase whitespace-nowrap pointer-events-none leading-none select-none tracking-tighter translate-y-1/2">
        Skills & Technologies • Full Stack Developer
      </div>
    </section>
  );
};

export default Skills;
