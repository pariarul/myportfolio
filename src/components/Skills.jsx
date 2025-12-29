import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, Html } from '@react-three/drei';
import * as THREE from 'three';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiPostman, } from 'react-icons/si';

const skills = [
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'JS', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Node', icon: <FaNodeJs />, color: '#339933' },
    { name: 'Express', icon: <SiExpress />, color: '#FFFFFF' },
    { name: 'Mongo', icon: <SiMongodb />, color: '#47A248' },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
    { name: 'Postman', icon: <SiPostman />, color: '#F24E1E' },
];

const FloatingIcon = ({ skill, position }) => {
    const mesh = useRef();

    useFrame((state) => {
        if (!mesh.current) return;
        mesh.current.rotation.x = Math.sin(state.clock.elapsedTime / 2) * 0.1;
        mesh.current.rotation.y = Math.sin(state.clock.elapsedTime / 3) * 0.1;
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1} position={position}>
            <group ref={mesh}>
                {/* 3D Text Label */}
                <Text
                    position={[0, -1.2, 0]}
                    fontSize={0.4}
                    color="white"
                    anchorX="center"
                    anchorY="middle"
                    font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
                >
                    {skill.name}
                </Text>

                {/* HTML Icon overlaying a mesh */}
                <Html transform distanceFactor={5}>
                    <div
                        className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:scale-110 transition-transform duration-300"
                        style={{ color: skill.color }}
                    >
                        <div className="text-4xl">
                            {skill.icon}
                        </div>
                    </div>
                </Html>
            </group>
        </Float>
    );
};

const SkillsScale = () => {
    return (
        <group>
            {skills.map((skill, i) => {
                const x = (Math.random() - 0.5) * 15;
                const y = (Math.random() - 0.5) * 8;
                const z = (Math.random() - 0.5) * 5;
                return <FloatingIcon key={i} skill={skill} position={[x, y, z]} />;
            })}
        </group>
    )
}

const Skills = () => {
    return (
        <div id='skills' className='w-full h-screen bg-black relative flex flex-col justify-center items-center overflow-hidden border-t border-white/10'>
            <div className="absolute top-24 left-0 w-full text-center z-10 pointer-events-none">
                <h2 className='text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4'>CAPABILITIES</h2>
                <p className='text-secondary uppercase tracking-widest text-sm'>Drag to explore (Interactive 3D Space)</p>
            </div>

            <div className="w-full h-full absolute top-0 left-0">
                <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
                    <ambientLight intensity={1} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    {/* Hardcoded positions in a sphere-like spread for better look than random */}
                    <FloatingIcon skill={skills[0]} position={[-3, 2, 0]} />     {/* HTML */}
                    <FloatingIcon skill={skills[1]} position={[-1, 3, -1]} />    {/* CSS */}
                    <FloatingIcon skill={skills[2]} position={[2, 2.5, 0]} />    {/* JS */}
                    <FloatingIcon skill={skills[3]} position={[4, 0, 2]} />      {/* React */}
                    <FloatingIcon skill={skills[4]} position={[-4, 0, 2]} />     {/* Node */}
                    <FloatingIcon skill={skills[5]} position={[0, 0, 3]} />      {/* Express */}
                    <FloatingIcon skill={skills[6]} position={[-2, -2.5, 0]} />  {/* Mongo */}
                    <FloatingIcon skill={skills[7]} position={[2, -2.5, 1]} />   {/* Tailwind */}
                    <FloatingIcon skill={skills[8]} position={[4, 2, -1]} />     {/* Git */}
                    <FloatingIcon skill={skills[9]} position={[0, -3.5, -2]} />  {/* Figma */}
                </Canvas>
            </div>
        </div>
    );
};

export default Skills;
