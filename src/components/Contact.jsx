import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div id='contact' className='bg-black/90 backdrop-blur-xl text-white min-h-[50vh] flex flex-col justify-center px-6 md:px-12 py-24'>
            <div className='max-w-[1200px] mx-auto w-full'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className='flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white pb-12 mb-12'
                >
                    <div>
                        <h2 className='text-[8vw] md:text-[6vw] font-bold leading-none tracking-tighter mb-4'>
                            LETS TALK
                        </h2>
                        <p className='text-xl md:text-2xl text-secondary font-light max-w-xl'>
                            Interested in working together or just want to say hi? Drop me a line.
                        </p>
                    </div>

                    <a
                        href="mailto:pari.dev@gmail.com"
                        className='mt-8 md:mt-0 inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full border border-white hover:bg-white hover:text-black transition-colors duration-300 text-sm font-bold uppercase tracking-widest'
                    >
                        Email Me
                    </a>
                </motion.div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    <div>
                        <h3 className='text-xs font-mono uppercase text-secondary mb-6'>Socials</h3>
                        <div className='flex flex-col gap-2'>
                            <a href="#" className='text-xl hover:text-secondary transition-colors'>LinkedIn</a>
                            <a href="#" className='text-xl hover:text-secondary transition-colors'>GitHub</a>
                            <a href="#" className='text-xl hover:text-secondary transition-colors'>Instagram</a>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-xs font-mono uppercase text-secondary mb-6'>Location</h3>
                        <p className='text-xl'>Based in the Internet<br />Available Worldwide</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
