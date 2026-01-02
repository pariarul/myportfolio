import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        { name: 'Home', href: '#home' },
        { name: 'AI', href: '#ai' },
        { name: 'Work', href: '#projects' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center bg-black/20 backdrop-blur-md border-b border-white/5"
            >
                <a href="#home" className='text-xl md:text-2xl font-bold tracking-tight text-white hover:text-gray-300 transition-colors z-[60]'>
                    PARI
                </a>

                {/* Desktop Links */}
                <div className='hidden md:flex gap-12'>
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className='text-sm font-medium uppercase tracking-widest text-white relative group hover:text-yellow-400 transition-colors'
                        >
                            {link.name}
                            <span className='absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full'></span>
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div
                    onClick={() => setNav(!nav)}
                    className='md:hidden cursor-pointer text-white z-[60] hover:text-gray-300'
                >
                    {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {nav && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className='fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center'
                    >
                        <div className='flex flex-col gap-8 text-center'>
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setNav(false)}
                                    className='text-4xl font-light text-white tracking-widest hover:text-gray-400 transition-colors'
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
