import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-black text-white py-12 px-6 md:px-12 border-t border-white/10'>
            <div className='max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6'>
                <div className='text-center md:text-left'>
                    <h3 className='text-xl font-bold tracking-tight'>PARI</h3>
                    <p className='text-sm text-secondary mt-2'>Full Stack Developer.</p>
                </div>

                <div className='flex gap-8'>
                    <a href="https://github.com/pari" className='text-sm uppercase tracking-widest hover:underline decoration-1 underline-offset-4'>GitHub</a>
                    <a href="https://linkedin.com/in/pari" className='text-sm uppercase tracking-widest hover:underline decoration-1 underline-offset-4'>LinkedIn</a>
                    <a href="mailto:pari.dev@gmail.com" className='text-sm uppercase tracking-widest hover:underline decoration-1 underline-offset-4'>Email</a>
                </div>

                <div className='text-xs text-secondary font-mono'>
                    © {new Date().getFullYear()} Pari.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
