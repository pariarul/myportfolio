import React from 'react';
import { motion } from 'framer-motion';
import { BsCpu, BsJournalCode } from 'react-icons/bs';
import { HiOutlineLightningBolt } from 'react-icons/hi';
import { MdOutlineArchitecture } from 'react-icons/md';

const AIIntegration = () => {
    const specializations = [
        {
            title: 'Multi-Model Strategy',
            description:
                'Selecting and orchestrating the right AI models such as GPT-4, Gemini, and Claude to align with product goals, cost efficiency, and performance.',
            icon: <BsCpu />,
            color: 'text-yellow-400',
        },
        {
            title: 'API-Driven Intelligence',
            description:
                'Integrating AI APIs into modern applications, converting raw intelligence into meaningful, production-ready user experiences.',
            icon: <HiOutlineLightningBolt />,
            color: 'text-cyan-400',
        },
        {
            title: 'Scalable AI Architecture',
            description:
                'Designing modular and scalable AI-powered systems that remain maintainable, secure, and performant as products grow.',
            icon: <MdOutlineArchitecture />,
            color: 'text-purple-400',
        },
        {
            title: 'Clean Documentation',
            description:
                'Delivering clear technical documentation that simplifies complex AI logic and ensures seamless collaboration and handover.',
            icon: <BsJournalCode />,
            color: 'text-emerald-400',
        },
    ];

    return (
        <section
            id="ai"
            className="relative bg-[#050505] text-white py-32 md:py-48 overflow-hidden border-t border-white/10"
        >
            {/* Background Blurs */}
            <div className="absolute top-1/3 left-0 w-[40vw] h-[40vw] bg-yellow-500/[0.03] blur-[140px] rounded-full" />
            <div className="absolute bottom-0 right-0 w-[35vw] h-[35vw] bg-cyan-500/[0.02] blur-[120px] rounded-full" />

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

                    {/* LEFT – INTRO */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-3 px-5 py-2 border border-white/10 rounded-full mb-10 bg-white/5 backdrop-blur-sm"
                        >
                            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40">
                                AI Capabilities
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="text-6xl md:text-[7rem] font-black tracking-tighter leading-[0.9] mb-10"
                        >
                            AI <br />
                            <span className="text-stroke">INTEGRATION</span>.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-xl md:text-2xl text-white/40 font-light leading-relaxed max-w-xl"
                        >
                            I help businesses integrate artificial intelligence into real-world
                            products—transforming complex models into scalable, user-focused
                            applications.
                        </motion.p>

                        {/* Availability */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="mt-12 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10"
                        >
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-xs font-mono uppercase tracking-widest text-white/70">
                                Open for AI Projects
                            </span>
                        </motion.div>
                    </div>

                    {/* RIGHT – CARDS */}
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-10">
                        {specializations.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative p-10 rounded-[2.5rem]
                           bg-white/[0.03] border border-white/10
                           hover:border-white/30 hover:bg-white/[0.05]
                           transition-all duration-500 backdrop-blur-xl"
                            >
                                <div
                                    className={`text-5xl mb-8 transition-transform duration-500 group-hover:scale-110 ${item.color}`}
                                >
                                    {item.icon}
                                </div>

                                <h3 className="text-2xl font-semibold mb-4 tracking-tight group-hover:text-white transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-white/45 leading-relaxed font-light">
                                    {item.description}
                                </p>

                                {/* Accent Line */}
                                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-yellow-400 to-cyan-400 group-hover:w-full transition-all duration-700" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Typography */}
            <div className="absolute bottom-0 left-0 w-full opacity-[0.015] text-[22vw] font-black uppercase whitespace-nowrap pointer-events-none leading-none select-none tracking-tighter translate-y-1/2">
                AI Integration • Intelligent Systems
            </div>
        </section>
    );
};

export default AIIntegration;
