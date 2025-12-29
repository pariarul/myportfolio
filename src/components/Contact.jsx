import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    const socials = [
        { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/pari-arul-ab874b358/' },
        { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/pariarul' },
        { name: 'Instagram', icon: <FaInstagram />, url: '#' },
    ];

    return (
        <div id='contact' className='bg-black/90 backdrop-blur-xl text-white min-h-[50vh] flex flex-col justify-center px-6 md:px-12 py-24'>
            <div className='max-w-[1200px] mx-auto w-full'>

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className='flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white pb-12 mb-12'
                >
                    <div>
                        <h2 className='text-[8vw] md:text-[6vw] font-bold leading-none tracking-tighter mb-4'>
                            LET'S TALK
                        </h2>
                        <p className='text-xl md:text-2xl text-secondary font-light max-w-xl'>
                            Interested in working together or just want to say hi? Drop me a line.
                        </p>
                    </div>

                    <motion.a
                        href="mailto:pariaarul@gmail.com"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className='mt-8 md:mt-0 inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full border border-white hover:bg-white hover:text-black transition-colors duration-300 text-sm font-bold uppercase tracking-widest'
                    >
                        Email Me
                    </motion.a>
                </motion.div>

                {/* SOCIALS & LOCATION */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    
                    {/* SOCIALS */}
                    <div>
                        <h3 className='text-xs font-mono uppercase text-secondary mb-6'>Socials</h3>
                        <div className='flex flex-col gap-4'>
                            {socials.map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ x: 10, color: '#FACC15' }} // yellow accent on hover
                                    transition={{ type: 'spring', stiffness: 300 }}
                                    className='flex items-center gap-3 text-xl text-white font-medium'
                                >
                                    <span className='text-2xl'>{social.icon}</span>
                                    {social.name}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* LOCATION */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className='text-xs font-mono uppercase text-secondary mb-6'>Location</h3>
                        <p className='text-xl'>
                            Coimbatore<br />Tamil Nadu, India
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
