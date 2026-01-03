import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaArrowRight, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';

const Contact = () => {
    const [time, setTime] = useState('');
    const containerRef = useRef(null);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options = {
                timeZone: 'Asia/Kolkata',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true,
            };
            setTime(new Intl.DateTimeFormat('en-US', options).format(now));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const xMove = useTransform(scrollYProgress, [0, 1], [-200, 200]);
    const xMoveReverse = useTransform(scrollYProgress, [0, 1], [200, -200]);

    const socials = [
        { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/pari-arul-ab874b358/' },
        { name: 'Instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/pari_anandha/' },
        { name: 'whatsapp', icon: <FaWhatsapp />, url: 'https://wa.me/919361430865', },
    ];

    return (
        <section
            id='contact'
            ref={containerRef}
            className='relative bg-[#050505] text-white py-32 md:py-64 overflow-hidden'
        >
            {/* Background Kinetic Typography Overlay */}
            <div className='absolute inset-0 flex flex-col justify-center opacity-[0.02] pointer-events-none select-none font-black text-[18vw] md:text-[14vw] leading-none uppercase italic'>
                <motion.div style={{ x: xMove }} className='whitespace-nowrap translate-y-[-10%]'>
                    Contact • Reach Out • Connect • Reach Out • Contact
                </motion.div>
                <motion.div style={{ x: xMoveReverse }} className='whitespace-nowrap translate-y-[10%] text-stroke'>
                    Design • Code • Build • Scale • Design • Code
                </motion.div>
            </div>

            <div className='max-w-[1400px] mx-auto px-6 md:px-12 relative z-10'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40 items-center'>

                    {/* Column 1: Massive Headline & Direct CTA */}
                    <div className='flex flex-col'>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className='inline-flex items-center gap-4 px-5 py-2 border border-white/10 rounded-full w-fit mb-12 bg-white/5 backdrop-blur-sm'
                        >
                            <span className='w-2 h-2 rounded-full bg-yellow-400 animate-pulse' />
                            <span className='text-[10px] uppercase tracking-[0.4em] font-bold text-white/50'>Available for hire</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className='text-6xl md:text-[8rem] font-black tracking-tighter leading-[0.85] mb-16'
                        >
                            LET'S <br />
                            <span className='text-stroke'>IGNITE</span> <br />
                            THE VISION.
                        </motion.h2>

                        <div className='space-y-4 group cursor-pointer w-fit'>
                            <p className='text-[10px] uppercase tracking-[0.5em] text-white/30 font-mono'>Direct Channel</p>
                            <motion.a
                                href="mailto:pariaarul@gmail.com"
                                className='flex items-center gap-6 text-3xl md:text-5xl font-bold tracking-tight'
                            >
                                pariaarul@gmail.com
                                <div className='w-12 h-12 md:w-20 md:h-20 rounded-full bg-white text-black flex items-center justify-center transition-all duration-700 group-hover:bg-yellow-400 group-hover:rotate-45'>
                                    <FaArrowRight className='w-5 h-5 md:w-8 md:h-8' />
                                </div>
                            </motion.a>
                            <div className='h-[1px] w-full bg-white/10 origin-left group-hover:bg-white transition-all duration-700' />
                        </div>
                    </div>

                    {/* Column 2: Details Matrix */}
                    <div className='flex flex-col gap-12 md:gap-20'>

                        {/* Time & Location Row */}
                        <div className='grid grid-cols-2 gap-10 border-t border-white/10 pt-16'>
                            <div className='space-y-4'>
                                <p className='text-[10px] uppercase tracking-[0.4em] text-white/20 font-mono italic'>Local Time</p>
                                <div>
                                    <h4 className='text-2xl md:text-3xl font-light'>{time}</h4>
                                    <p className='text-[10px] text-white/40 uppercase tracking-widest mt-1'>IST / Tamil Nadu, IN</p>
                                </div>
                            </div>
                            <div className='space-y-4'>
                                <p className='text-[10px] uppercase tracking-[0.4em] text-white/20 font-mono italic'>Current Role</p>
                                <div>
                                    <h4 className='text-2xl md:text-3xl font-light'>Open to Work</h4>
                                    <p className='text-[10px] text-white/40 uppercase tracking-widest mt-1'>Freelance & Full-time</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Connect Matrix */}
                        <div className='border-t border-white/10 pt-16'>
                            <p className='text-[10px] uppercase tracking-[0.4em] text-white/20 font-mono italic mb-10'>Connect Directory</p>
                            <div className='grid grid-cols-2 gap-4'>
                                {socials.map((social, i) => (
                                    <motion.a
                                        key={i}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ backgroundColor: 'rgba(255,255,255,0.08)', x: 5 }}
                                        className='flex items-center justify-between p-6 rounded-2xl border border-white/5 bg-white/[0.02] transition-all duration-500 group'
                                    >
                                        <div className='flex items-center gap-4'>
                                            <span className='text-2xl text-white/40 group-hover:text-white transition-colors'>{social.icon}</span>
                                            <span className='font-bold text-sm tracking-tight'>{social.name}</span>
                                        </div>
                                        <span className='text-[10px] opacity-0 group-hover:opacity-100 transition-opacity'>↗</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Location Details */}
                        <div className='border-t border-white/10 pt-16 group'>
                            <div className='flex items-center gap-6'>
                                <div className='w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center bg-white/[0.03] group-hover:bg-yellow-400/10 group-hover:border-yellow-400/20 transition-all'>
                                    <HiOutlineLocationMarker className='text-3xl text-white/40 group-hover:text-yellow-400' />
                                </div>
                                <div>
                                    <h4 className='text-2xl font-bold tracking-tight'>Coimbatore</h4>
                                    <p className='text-[11px] text-white/30 uppercase tracking-[0.2em] mt-1'>Tamil Nadu, India • Global Remote</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Corner Gloom */}
            <div className='absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-white/[0.015] rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none' />
        </section>
    );
};

export default Contact;
