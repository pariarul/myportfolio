import React, { useState, useRef, useEffect } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence, useInView } from 'framer-motion';

const ProjectItem = ({ title, category, year, index, image, setActiveProject, tags, tagline }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setActiveProject({ title, image, index })}
            onMouseLeave={() => setActiveProject(null)}
            className='group relative border-t border-white/10 py-12 md:py-24 transition-all duration-700 cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-12 bg-transparent hover:bg-white/[0.02]'
        >
            <div className='flex flex-col md:flex-row md:items-center gap-6 md:gap-20 z-10'>
                <span className='hidden md:block text-xs font-mono text-white/20 group-hover:text-white/60 transition-colors duration-500'>
                    / 0{index + 1}
                </span>
                <div className='flex flex-col'>
                    <h3 className='text-5xl md:text-[7rem] font-bold tracking-tighter group-hover:translate-x-6 transition-transform duration-1000 ease-[0.16,1,0.3,1]'>
                        {title}
                    </h3>
                    <div className='flex flex-wrap gap-2 mt-4 md:translate-x-6 transition-transform duration-1000'>
                        {tags?.map(tag => (
                            <span key={tag} className='text-[10px] font-mono border border-white/10 px-2 py-0.5 rounded-full text-white/30 group-hover:text-white/60 transition-colors'>
                                {tag}
                            </span>
                        ))}
                    </div>
                    <p className='text-xs md:text-sm text-white/40 mt-3 md:translate-x-6 opacity-0 group-hover:opacity-100 transition-all duration-700 hidden md:block max-w-xs'>
                        {tagline}
                    </p>
                </div>
            </div>

            <div className='flex flex-col items-end gap-2 mt-8 md:mt-0 z-10'>
                <span className='uppercase tracking-[0.3em] font-bold text-white/20 group-hover:text-yellow-400 transition-colors duration-700 text-[10px] md:text-sm'>
                    {category}
                </span>
                <span className='font-mono text-white/10 group-hover:text-white/40 transition-colors text-xs md:text-lg'>
                    {year}
                </span>
            </div>

            {/* Massive Background Text */}
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.01] pointer-events-none group-hover:text-white/[0.03] transition-all duration-1000 uppercase select-none hidden xl:block'>
                {title.split(' ')[0]}
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const [activeProject, setActiveProject] = useState(null);
    const containerRef = useRef(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 30, stiffness: 100 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    const works = [
        {
            title: 'LUXE CART',
            category: 'E-Commerce Ecosystem',
            year: '2024',
            tags: ['React', 'Node.js', 'Typescript', 'Reyzerpay', 'Tailwind' ,'Express', 'MongoDB'],
            tagline: 'High-end retail experience with seamless transitions.',
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1200'
        },
        {
            title: 'Zizo Dressing',
            category: 'E-commerce Bobby Dress Brand',
            year: '2025',
            tags: ['Next.js', 'React', 'Tailwind', 'Redux', 'Reyzerpay','Typescript', 'MongoDB'],
            tagline: 'Internal workflow management for high-growth teams.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
        },
        {
            title: 'COBENO',
            category: 'Tech Brand Identity',
            year: '2024',
            tags: ['Three.js', 'WebGL', 'GSAP'],
            tagline: 'Dynamic digital presence for a future-facing consultancy.',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200'
        },
        {
            title: 'NEXUS',
            category: 'Web3 Trading Suite',
            year: '2024',
            tags: ['Solidity', 'Ethers.js', 'Next.js 14'],
            tagline: 'Decentralized asset management with real-time analytics.',
            image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1200'
        },
        {
            title: 'SEYON',
            category: 'Logistics Dashboard',
            year: '2024',
            tags: ['React Native', 'Firebase', 'Maps'],
            tagline: 'Precision tracking for global supply chain operations.',
            image: 'https://images.unsplash.com/photo-1494412574643-ff11b819576a?auto=format&fit=crop&q=80&w=1200'
        },

    ];

    return (
        <section id='projects' ref={containerRef} className='relative bg-[#050505] text-white py-32 md:py-64 overflow-hidden'>
            {/* Background Kinetic Elements */}
            <div className='absolute top-0 right-[-10%] w-[60vw] h-[60vw] bg-yellow-500/[0.02] blur-[150px] rounded-full pointer-events-none' />
            <div className='absolute bottom-0 left-[-10%] w-[60vw] h-[60vw] bg-blue-500/[0.02] blur-[150px] rounded-full pointer-events-none' />

            <div className='max-w-[1400px] mx-auto mb-24 md:mb-56 px-6 md:px-12'>
                <div className='flex flex-col md:flex-row justify-between items-end gap-12'>
                    <div className='relative'>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="inline-block px-4 py-1 border border-white/20 rounded-full text-[10px] uppercase tracking-[0.3em] font-medium mb-8"
                        >
                            Gallery
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className='text-6xl md:text-[10rem] xl:text-[14rem] font-black leading-[0.75] tracking-tighter'
                        >
                            SELECTED <br />
                            <span className='text-stroke'>PROJECTS</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className='text-white/40 max-w-sm text-sm md:text-2xl font-light leading-relaxed mb-6'
                    >
                        Pushing the boundaries of digital interaction through clean code and bold aesthetics.
                    </motion.p>
                </div>
            </div>

            <div className='max-w-[1800px] mx-auto border-y border-white/10 relative'>
                {works.map((work, index) => (
                    <ProjectItem
                        key={index}
                        {...work}
                        index={index}
                        setActiveProject={setActiveProject}
                    />
                ))}
            </div>

            {/* Premium Floating Preview */}
            <AnimatePresence>
                {activeProject && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.7, rotate: 10 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            left: x,
                            top: y,
                            translateX: '-50%',
                            translateY: '-50%',
                        }}
                        className='fixed pointer-events-none z-[100] w-[350px] md:w-[600px] aspect-[16/10] overflow-hidden rounded-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] ring-1 ring-white/20 hidden md:block'
                    >
                        <motion.img
                            key={activeProject.image}
                            initial={{ scale: 1.3 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1.5, ease: 'easeOut' }}
                            src={activeProject.image}
                            alt={activeProject.title}
                            className='w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent' />
                        <div className='absolute bottom-10 left-10 right-10 flex justify-between items-end'>
                            <div>
                                <p className='text-white/40 text-[10px] uppercase tracking-[0.3em] font-mono mb-2'>Project / 0{activeProject.index + 1}</p>
                                <h4 className='text-white text-3xl font-black italic tracking-tighter'>{activeProject.title}</h4>
                            </div>
                            <div className='bg-white text-black text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest'>
                                View Case
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Archive Footer */}
            <div className='mt-32 text-center px-6'>
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/pariarul"
                    className='group relative inline-flex items-center gap-10 border border-white/10 px-16 py-8 rounded-full overflow-hidden transition-all duration-500'
                >
                    <span className='absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]' />
                    <span className='relative z-10 text-xs md:text-sm font-bold uppercase tracking-[0.4em] group-hover:text-black transition-colors duration-700'>
                        Explore the Archive
                    </span>
                    <div className='relative z-10 w-8 h-8 rounded-full bg-white/5 border border-white/10 group-hover:bg-black/10 group-hover:border-black/20 flex items-center justify-center transition-all duration-700 -rotate-45 group-hover:rotate-0'>
                        <svg className="w-4 h-4 text-white group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </motion.a>
            </div>

            {/* Background Scrolling Brand */}
            <div className='absolute bottom-0 left-0 w-full opacity-[0.02] text-[25vw] font-black uppercase whitespace-nowrap pointer-events-none leading-none select-none tracking-tighter translate-y-1/2'>
                GALLERY • GALLERY
            </div>
        </section>
    );
};

export default Projects;
