import React, { useState, useEffect } from 'react';
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import mountain from '../assets/mountain.webp';
import BlinkingStars from './BlinkingStars';

function HeroSection() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const calculateParallax = () => {
        const mouseParallax = (mousePosition.y - window.innerHeight / 1) / 20;
        const scrollParallax = scrollPosition * 0.2;
        return {
            transform: `translate3d(0, ${mouseParallax + scrollParallax}px, 0)`,
        };
    };

    return (
        <div id='home' className="w-screen h-screen bg-[#00031D] flex flex-col justify-center items-center text-center text-white overflow-hidden relative">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/20 to-pink-900/20 animate-gradient-x"></div>
            
            <div className='w-full flex flex-col items-center justify-center relative z-[60] xl:-top-12 md:-top-10'>
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className='select-none text-4xl md:text-6xl xl:text-7xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text mb-4'
                >
                    Grow Your Business To <br /> 
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text">
                        New Heights
                    </span>
                </motion.h1>
                
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className='select-none w-[320px] sm:w-[400px] text-[10px] text-xs md:text-lg text-gray-300'
                >
                    Nexoris partners with businesses to design tools that simplify processes, empower teams, and deliver results.
                </motion.p>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-8"
                >
                    <a 
                        href="#contact" 
                        className='group p-4 border-2 border-purple-500/30 rounded-full hover:border-purple-500/60 transition-all duration-300 hover:scale-110'
                    >
                        <FaArrowUpLong className='rotate-45 text-purple-400 group-hover:text-purple-300 transition-colors duration-300' />
                    </a>
                </motion.div>
            </div>
            
            <BlinkingStars />
            
            <motion.img
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                src={mountain}
                className="move-in absolute z-30 left-0 bottom-0 translate-y-10 md:translate-y-32 xl:translate-y-72 select-none"
                style={calculateParallax()}
            />
            
            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#00031D] to-transparent z-40"></div>
        </div>
    );
}

export default HeroSection;