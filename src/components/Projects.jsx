import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ProjectItem = ({ title, category, year, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className='group relative border-t border-white/20 py-12 md:py-16 hover:bg-white/5 transition-colors cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-8'
        >
            <div className='flex items-baseline gap-4 md:gap-12'>
                <span className='hidden md:block text-sm font-mono text-secondary'>0{index + 1}</span>
                <h3 className='text-3xl md:text-5xl font-bold tracking-tight group-hover:translate-x-4 transition-transform duration-500 ease-out'>
                    {title}
                </h3>
            </div>

            <div className='flex items-center gap-8 mt-4 md:mt-0 text-sm md:text-base font-light text-secondary'>
                <span className='uppercase tracking-widest'>{category}</span>
                <span className='font-mono'>{year}</span>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const works = [
        { title: 'E-Commerce Platform', category: 'Development', year: '2024' },
        { title: 'Admin Dashboard', category: 'Internal Tool', year: '2024' },
        { title: 'Portfolio Pro', category: 'Design & Code', year: '2025' },
        { title: 'Task Master App', category: 'Product', year: '2023' },
    ];

    return (
        <div id='projects' className='bg-black/80 backdrop-blur-xl text-white py-24 md:py-32 section-padding px-6 md:px-12'>
            <div className='max-w-[1400px] mx-auto mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end'>
                <h2 className='text-6xl md:text-[8rem] font-bold leading-none tracking-tighter opacity-20 md:opacity-100'>
                    WORK
                </h2>
                <p className='text-secondary max-w-sm text-lg mt-8 md:mt-0'>
                    A selection of projects that showcase my passion for building robust and scalable applications.
                </p>
            </div>

            <div className='max-w-[1400px] mx-auto border-b border-white/20'>
                {works.map((work, index) => (
                    <ProjectItem key={index} {...work} index={index} />
                ))}
            </div>

            <div className='mt-16 text-center'>
                <a href="https://github.com/pari" className='inline-block border border-white/30 px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm'>
                    View All Archives
                </a>
            </div>
        </div>
    );
};

export default Projects;
