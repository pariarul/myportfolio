import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import profileImg from '../assets/hero.jpeg';

const About = () => {
    return (
        <div id='about' className='bg-black/80 backdrop-blur-xl text-white py-24 px-6 md:px-12'>
            <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center'>

                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className='relative aspect-[3/4] md:aspect-square bg-[#111] overflow-hidden'
                >
                    <img src={profileImg} alt="Pari" className='w-full h-full object-cover hover:grayscale-0 transition-all duration-700' />
                </motion.div>

                {/* Content Side */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className='text-3xl md:text-5xl font-bold mb-8 tracking-tight'
                    >
                        I'm Pari, a creative developer based in the digital world.
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className='space-y-6 text-secondary text-lg font-light leading-relaxed'
                    >
                        <p>
                            I combine code and design to create digital experiences that people love. With a background in Full Stack Development, I understand the technical constraints of the web but refuse to let them limit creative expression.
                        </p>
                        <p>
                            Specializing in React, Node.js, and modern CSS, I build websites that are fast, accessible, and visually stunning. I believe that good design is as much about how something works as it is about how it looks.
                        </p>
                    </motion.div>

                    {/* Stats / Skills Simple List */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className='grid grid-cols-2 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/10'
                    >
                        <div className='flex flex-col'>
                            <span className='text-3xl font-bold'>3+</span>
                            <span className='text-sm text-secondary uppercase tracking-wider mt-2'>Years Exp.</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-3xl font-bold'>20+</span>
                            <span className='text-sm text-secondary uppercase tracking-wider mt-2'>Projects</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-3xl font-bold'>100%</span>
                            <span className='text-sm text-secondary uppercase tracking-wider mt-2'>Committed</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
