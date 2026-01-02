import React from 'react';
import { motion } from 'framer-motion';
import { BsCpu, BsJournalCode } from 'react-icons/bs';
import { HiOutlineLightningBolt } from 'react-icons/hi';
import { MdOutlineArchitecture } from 'react-icons/md';

const AIIntegration = () => {
    const specializations = [
        {
            title: 'Multi-Model Strategy',
            description: 'Expertly selecting and implementing the optimal AI models—including Gemini, GPT-4, and Claude—to match specific project goals and performance requirements.',
            icon: <BsCpu className="text-yellow-400" />,
        },
        {
            title: 'Seamless API Integration',
            description: 'Architecting robust connections between modern web applications and AI APIs, transforming raw intelligence into functional, user-centric features.',
            icon: <HiOutlineLightningBolt className="text-cyan-400" />,
        },
        {
            title: 'Scalable Architecture',
            description: 'Building maintainable and modular AI-driven solutions designed to scale efficiently while ensuring long-term stability and code integrity.',
            icon: <MdOutlineArchitecture className="text-purple-400" />,
        },
        {
            title: 'Professional Documentation',
            description: 'Bridging the gap between complex AI logic and maintainable code with clean, comprehensive technical documentation for seamless handovers.',
            icon: <BsJournalCode className="text-emerald-400" />,
        },
    ];

    return (
        <section id="ai" className="bg-[#050505] text-white py-24 px-6 md:px-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
                        >
                            AI Integration & <span className="text-yellow-400">Development</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-lg md:text-xl text-white/60 font-light leading-relaxed"
                        >
                            I bridge the gap between advanced artificial intelligence and functional web applications,
                            engineering solutions that are as intelligent as they are scalable.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-3 rounded-full"
                    >
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm font-mono uppercase tracking-widest text-white/80">Available for AI Projects</span>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {specializations.map((spec, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300"
                        >
                            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                {spec.icon}
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 tracking-tight group-hover:text-yellow-400 transition-colors">
                                {spec.title}
                            </h3>
                            <p className="text-white/50 leading-relaxed font-light">
                                {spec.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AIIntegration;
