import React, { useState, useEffect } from 'react';
import { FaArrowUpLong, FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import mountain from '../assets/mountain.webp';
import BlinkingStars from './BlinkingStars';

function HeroSection() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [scrollPosition, setScrollPosition] = useState(0);
    const [typewriterText, setTypewriterText] = useState('');
    const fullText = "New Heights";
    const [typewriterIndex, setTypewriterIndex] = useState(0);

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

    useEffect(() => {
        if (typewriterIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setTypewriterText(prevText => prevText + fullText[typewriterIndex]);
                setTypewriterIndex(prevIndex => prevIndex + 1);
            }, 150);
            
            return () => clearTimeout(timeout);
        }
    }, [typewriterIndex, fullText]);

    const calculateParallax = () => {
        const mouseParallax = (mousePosition.y - window.innerHeight / 1) / 20;
        const scrollParallax = scrollPosition * 0.2;
        return {
            transform: `translate3d(0, ${mouseParallax + scrollParallax, 0}px, 0)`,
        };
    };

    return (
        <div id='home' className="w-screen h-screen bg-[#00031D] flex flex-col justify-center items-center text-center text-white overflow-hidden">
            <div className='w-full flex flex-col items-center justify-center relative z-[60] xl:-top-12 md:-top-10'>
                <h1 className='select-none text-4xl md:text-6xl xl:text-6xl font-bold text-transparent bg-gradient-to-r from-zinc-500 via-white to-zinc-500 bg-clip-text mb-4'>
                    Grow Your Business To <br /> 
                    <span className="inline-block">
                        {typewriterText}
                        <span className="animate-pulse">_</span>
                    </span>
                </h1>
                <p className='select-none w-[320px] sm:w-[400px] text-[10px] text-xs md:text-lg'>
                    Vertex partners with businesses to design tools that simplify processes, empower teams, and deliver results.
                </p>
                
                <div className="flex gap-6 mt-8">
                    <motion.a 
                        href="#contactus" 
                        className="px-6 py-3 bg-blue-600 rounded-full font-medium hover:bg-blue-700 flex items-center gap-2 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get Started <FaArrowRight />
                    </motion.a>
                    
                    <motion.a 
                        href="#services" 
                        className="px-6 py-3 bg-transparent border border-white/30 backdrop-blur-sm rounded-full font-medium hover:bg-white/10 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Our Services
                    </motion.a>
                </div>
                
                <motion.a 
                    href="#about" 
                    className='p-2 m-3 border-2 rounded-full hover:scale-110 transition-all ease-in-out mt-8'
                    animate={{ 
                        y: [0, 10, 0],
                    }}
                    transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut" 
                    }}
                >
                    <FaArrowUpLong className='rotate-45' />
                </motion.a>
            </div>
            
            <BlinkingStars />
            
            <motion.img
                src={mountain}
                className="move-in absolute z-30 left-0 bottom-0 translate-y-10 md:translate-y-32 xl:translate-y-72 select-none"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            />
            
            {/* Floating elements */}
            <motion.div 
                className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-blue-500/20 blur-xl"
                animate={{
                    x: [0, 30, 0],
                    y: [0, -30, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            
            <motion.div 
                className="absolute bottom-1/3 right-1/3 w-32 h-32 rounded-full bg-purple-500/10 blur-xl"
                animate={{
                    x: [0, -40, 0],
                    y: [0, 40, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    );
}

export default HeroSection;