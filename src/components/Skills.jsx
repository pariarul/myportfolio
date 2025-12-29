import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaDocker,
  FaGithub,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiSpringboot,
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

  { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
  { name: 'Express', icon: <SiExpress />, color: '#ffffff' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },

  { name: 'JWT', icon: <SiJsonwebtokens />, color: '#d63aff' },
  { name: 'JSON / REST', icon: <VscJson />, color: '#cfcfcf' },

  { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
  { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
  { name: 'Postman', icon: <SiPostman />, color: '#F24E1E' },

  // New Skills
  { name: 'GitHub', icon: <FaGithub />, color: '#ffffff' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff' },
  { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
];

/* =======================
   COMPONENT
======================= */
const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-black text-white
                 border-t border-white/10 relative"
    >
      {/* TITLE */}
      <div className="pt-24 text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          CAPABILITIES
        </h2>
        <p className="text-white/60 uppercase tracking-widest text-xs mt-3">
          Technologies I work with
        </p>
      </div>

      {/* ================= DESKTOP GRID ================= */}
      <div className="hidden md:grid max-w-7xl mx-auto px-12 py-20
                      grid-cols-4 gap-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group relative p-8 rounded-2xl
                       bg-white/5 border border-white/10
                       hover:border-white/30
                       transition-all duration-300
                       hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* ICON */}
            <div
              className="text-5xl mb-6 transition-transform duration-300
                         group-hover:scale-110"
              style={{ color: skill.color }}
            >
              {skill.icon}
            </div>

            {/* NAME */}
            <h3 className="text-lg font-semibold tracking-wide">
              {skill.name}
            </h3>

            {/* DECOR LINE */}
            <span
              className="absolute bottom-0 left-0 h-[2px] w-0
                         bg-gradient-to-r from-cyan-400 to-blue-500
                         group-hover:w-full transition-all duration-500"
            />
          </div>
        ))}
      </div>

      {/* ================= MOBILE GRID ================= */}
      <div className="md:hidden px-6 py-16 grid grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center
                       p-6 rounded-xl bg-white/5
                       border border-white/10 backdrop-blur-md"
          >
            <div
              className="text-4xl mb-3"
              style={{ color: skill.color }}
            >
              {skill.icon}
            </div>
            <span className="text-sm tracking-wide text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
