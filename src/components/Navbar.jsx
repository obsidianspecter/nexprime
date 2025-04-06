import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/nexoris-logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navItems = ["Home", "About", "Services", "Projects", "Blog", "Meet Our Family", "Contact Us"];

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getLink = (item) => {
        if (item === "Home") return "/";
        if (item === "Meet Our Family") return "/meet-our-family";
        if (item === "Blog") return "/blog";
        return `#${item.toLowerCase().replace(/\s+/g, '-')}`;
    };

    const isRouterLink = (item) => {
        return ["Home", "Meet Our Family", "Blog"].includes(item);
    };

    const handleNavClick = (e, item) => {
        if (!isRouterLink(item)) {
            e.preventDefault();
            if (location.pathname !== "/") {
                // If not on home page, navigate to home first
                window.location.href = `/${getLink(item)}`;
            } else {
                // On home page, scroll to section
                const element = document.querySelector(getLink(item));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    setIsOpen(false);
                }
            }
        } else {
            setIsOpen(false);
        }
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#00031D]/90 backdrop-blur-md' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center group">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center"
                        >
                            <div className="relative w-12 h-12 mr-3 transition-transform duration-300 group-hover:scale-110">
                                <img src={logo} alt="Nexoris" className="w-full h-full" />
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-400/20 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent transition-all duration-300 group-hover:from-blue-300 group-hover:to-cyan-300">
                                NEXORIS
                            </span>
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item, index) => (
                            isRouterLink(item) ? (
                                <Link
                                    key={index}
                                    to={getLink(item)}
                                    className={`text-gray-300 hover:text-white transition-colors duration-300 ${
                                        location.pathname === getLink(item) ? 'text-white font-semibold' : ''
                                    }`}
                                >
                                    {item}
                                </Link>
                            ) : (
                                <a
                                    key={index}
                                    href={getLink(item)}
                                    className="text-gray-300 hover:text-white transition-colors duration-300"
                                    onClick={(e) => handleNavClick(e, item)}
                                >
                                    {item}
                                </a>
                            )
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#00031D]/95 backdrop-blur-md"
                    >
                        <div className="px-4 pt-2 pb-4 space-y-2">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {isRouterLink(item) ? (
                                        <Link
                                            to={getLink(item)}
                                            className="block py-2 text-gray-300 hover:text-white transition-colors duration-300"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item}
                                        </Link>
                                    ) : (
                                        <a
                                            href={getLink(item)}
                                            className="block py-2 text-gray-300 hover:text-white transition-colors duration-300"
                                            onClick={(e) => handleNavClick(e, item)}
                                        >
                                            {item}
                                        </a>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
