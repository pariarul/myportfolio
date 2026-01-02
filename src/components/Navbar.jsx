import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollYProgress } = useScroll();

    // Progress bar spring
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Works', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-yellow-400 origin-left z-[100]"
                style={{ scaleX }}
            />

            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'py-4' : 'py-8'}`}>
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">

                    {/* Logo: Magnetic feel */}
                    <motion.a
                        href="#home"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-3 group relative z-[100]"
                    >
                        <div className="relative w-10 h-10 flex items-center justify-center">
                            <div className="absolute inset-0 bg-white rotate-45 group-hover:rotate-90 transition-transform duration-500 rounded-lg" />
                            <span className="relative z-10 font-black text-xl text-black">P</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-black tracking-tighter text-white leading-none">PARI ARUL</span>
                            <span className="text-[8px] uppercase tracking-[0.4em] text-white/40 leading-none mt-1">Portfolio </span>
                        </div>
                    </motion.a>

                    {/* Desktop Navigation Pill */}
                    <div className="hidden lg:flex items-center gap-2">
                        <div className={`flex items-center gap-1 px-2 py-1.5 rounded-full border transition-all duration-700 ${isScrolled ? 'bg-black/40 backdrop-blur-2xl border-white/10' : 'bg-transparent border-transparent'}`}>
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="px-5 py-2 text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 hover:text-white transition-all relative group"
                                >
                                    <span className="relative z-10">{link.name}</span>
                                    <motion.span
                                        className="absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                        layoutId="nav-hover"
                                    />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Right Action: Hire Me + Toggle */}
                    <div className="flex items-center gap-6">
                        <motion.a
                            href="#contact"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden md:flex bg-white text-black px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-yellow-400 transition-colors shadow-xl shadow-white/5"
                        >
                            Hire Me
                        </motion.a>

                        {/* Hamburger Button */}
                        <button
                            className="relative z-[100] w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <div className={`w-6 h-[2px] bg-white transition-all duration-500 ${isMobileMenuOpen ? 'rotate-45 translate-y-[4px]' : 'group-hover:w-8'}`} />
                            <div className={`w-6 h-[2px] bg-white transition-all duration-500 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[4px]' : 'w-4 group-hover:w-8'}`} />
                        </button>
                    </div>

                    {/* Full-Screen Mobile Overlay */}
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, clipPath: 'circle(0% at 90% 10%)' }}
                                animate={{ opacity: 1, clipPath: 'circle(150% at 90% 10%)' }}
                                exit={{ opacity: 0, clipPath: 'circle(0% at 90% 10%)' }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="fixed inset-0 bg-[#050505] z-[90] flex items-center justify-center overflow-hidden"
                            >
                                {/* Background Decorative Text */}
                                <div className="absolute inset-0 flex flex-col justify-center opacity-[0.02] pointer-events-none select-none font-black text-[20vw] leading-none uppercase italic">
                                    <div className="whitespace-nowrap translate-x-[-10%]">Navigation • Menu</div>
                                    <div className="whitespace-nowrap translate-x-[10%] text-stroke">Portfolio • 2026</div>
                                </div>

                                <div className="relative z-10 flex flex-col items-center gap-8">
                                    {navLinks.map((link, i) => (
                                        <motion.a
                                            key={link.name}
                                            href={link.href}
                                            initial={{ opacity: 0, y: 50, rotate: 5 }}
                                            animate={{ opacity: 1, y: 0, rotate: 0 }}
                                            transition={{ delay: 0.3 + (i * 0.1), duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="text-6xl md:text-8xl font-black tracking-tighter text-white/20 hover:text-white hover:italic transition-all duration-500 group"
                                        >
                                            <span className="inline-block group-hover:translate-x-4 transition-transform">{link.name}</span>
                                        </motion.a>
                                    ))}

                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1 }}
                                        className="mt-20 flex flex-col items-center gap-4"
                                    >
                                        <p className="text-[10px] uppercase tracking-[0.5em] text-white/20 font-mono">Get in touch</p>
                                        <a href="mailto:pariaarul@gmail.com" className="text-xl font-light hover:text-yellow-400 transition-colors">pariaarul@gmail.com</a>
                                    </motion.div>
                                </div>

                                <div className="absolute bottom-12 left-12 right-12 flex justify-between items-center text-[10px] uppercase font-mono tracking-[0.3em] text-white/10 uppercase">
                                    <span>Coimbatore, IN</span>
                                    <span>© 2026</span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
