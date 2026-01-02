import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="relative bg-[#050505] text-white py-20 md:py-28 overflow-hidden border-t border-white/10">

            {/* Background Blur */}
            <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-blue-500/[0.03] blur-[120px] rounded-full" />

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center">

                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center md:text-left"
                    >
                        <h3 className="text-3xl font-black tracking-tight">
                            PARI ARUL
                        </h3>
                        <p className="mt-3 text-sm text-white/50 tracking-wide">
                            Full Stack Developer
                        </p>
                    </motion.div>

                    {/* Navigation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex justify-center gap-10"
                    >
                        {[
                            { label: 'GitHub', href: 'https://github.com/pariarul' },
                            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pari-arul-ab874b358/' },
                            { label: 'Email', href: 'mailto:pariaarul@gmail.com' },
                        ].map(link => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative text-xs uppercase tracking-[0.35em] text-white/70 hover:text-white transition-colors"
                            >
                                {link.label}
                                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white group-hover:w-full transition-all duration-500" />
                            </a>
                        ))}
                    </motion.div>

                    {/* Copyright */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-center md:text-right text-xs font-mono text-white/40"
                    >
                        © {new Date().getFullYear()} Pari Arul
                    </motion.div>
                </div>
            </div>

            {/* Background Typography */}
            <div className="absolute bottom-0 left-0 w-full opacity-[0.02] text-[18vw] font-black uppercase whitespace-nowrap pointer-events-none leading-none select-none tracking-tighter translate-y-1/2">
                Full Stack Developer
            </div>
        </footer>
    );
};

export default Footer;
