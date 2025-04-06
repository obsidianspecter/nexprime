import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ast1 from '../assets/ast1.webp';
import { FaArrowRight, FaArrowLeft, FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';

const ProductCard = ({ product, isActive, onClick }) => (
  <motion.div 
    className={`relative overflow-hidden rounded-xl shadow-2xl ${isActive ? 'h-[500px] md:h-[600px]' : 'h-[400px] cursor-pointer'}`}
    layout
    onClick={onClick}
    whileHover={{ scale: isActive ? 1 : 1.02 }}
    transition={{ duration: 0.3 }}
  >
    <div className="absolute inset-0 w-full h-full">
      <img 
        src={product.image} 
        alt={product.title} 
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80"></div>
      
      {/* Glowing effect for active card */}
      {isActive && (
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
          animate={{ 
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </div>
    
    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
      <motion.h3 
        className="text-2xl md:text-3xl font-bold mb-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {product.title}
      </motion.h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {product.technologies.map((tech, index) => (
          <motion.span 
            key={index} 
            className="px-2 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
      
      {isActive && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-zinc-300 mb-6 line-clamp-4 md:line-clamp-none">
            {product.description}
          </p>
          <div className="flex flex-wrap gap-4">
            {product.links.map((link, index) => (
              <motion.a 
                key={index}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {link.type === 'github' ? <FaGithub /> : <FaExternalLinkAlt />}
                <span>{link.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  </motion.div>
);

const ProjectSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const autoplayRef = useRef(null);
  
  const products = [
    {
      title: "Firm AI",
      description: "An artificial intelligence-powered legal education platform designed to transform the way law students and professionals learn and practice. The system features advanced natural language processing to analyze case law, interactive learning modules, and a comprehensive database of legal precedents. Users can practice with simulated cases, receive instant feedback, and track their progress over time.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1800",
      technologies: ["AI/ML", "NLP", "React", "Node.js", "MongoDB"],
      links: [
        { type: "live", label: "View Demo", url: "#" },
        { type: "github", label: "Source Code", url: "#" }
      ]
    },
    {
      title: "ATS Enterprise",
      description: "A comprehensive attendance tracking and HR management system that streamlines workforce management. The platform includes facial recognition for touchless check-in, real-time attendance monitoring, automated payroll integration, and advanced analytics for workforce optimization. The system also features customizable reporting, leave management, and mobile access for employees to check their records and apply for time off.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1800",
      technologies: ["React", "Firebase", "Computer Vision", "TypeScript", "Material UI"],
      links: [
        { type: "live", label: "Live Site", url: "#" },
        { type: "github", label: "GitHub Repo", url: "#" }
      ]
    },
    {
      title: "Smart POS System",
      description: "A next-generation point of sale system designed for versatility across retail, hospitality, and service industries. The system seamlessly integrates inventory management, customer relationship management, and sales analytics in a unified interface. Features include contactless payment options, real-time inventory tracking, customer loyalty programs, and detailed sales performance dashboards that help businesses make data-driven decisions.",
      image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1800",
      technologies: ["Flutter", "Django", "PostgreSQL", "GraphQL", "AWS"],
      links: [
        { type: "live", label: "Product Page", url: "#" },
        { type: "github", label: "View Code", url: "#" }
      ]
    },
    {
      title: "Vision QC",
      description: "An advanced machine vision system for industrial quality control that detects surface anomalies and manufacturing defects with unprecedented accuracy. Using deep learning algorithms trained on thousands of product images, the system can identify microscopic imperfections that would be missed by human inspectors. The solution integrates seamlessly with existing production lines and provides real-time alerts and comprehensive quality metrics through an intuitive dashboard.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1800",
      technologies: ["Computer Vision", "PyTorch", "TensorFlow", "Edge Computing", "React"],
      links: [
        { type: "live", label: "Case Study", url: "#" },
        { type: "github", label: "Documentation", url: "#" }
      ]
    },
    {
      title: "Nexoris Analytics",
      description: "A comprehensive business intelligence platform that transforms raw data into actionable insights. The system connects to multiple data sources, including databases, spreadsheets, and third-party APIs, to create a unified analytics environment. Users can create customized dashboards, generate detailed reports, and set up automated alerts based on key performance indicators. The platform's predictive analytics features help businesses forecast trends and make proactive decisions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1800",
      technologies: ["D3.js", "Python", "Tableau", "BigQuery", "Machine Learning"],
      links: [
        { type: "live", label: "Demo Dashboard", url: "#" },
        { type: "github", label: "Repository", url: "#" }
      ]
    }
  ];
  
  useEffect(() => {
    if (autoplay && !isHovered) {
      autoplayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % products.length);
      }, 5000);
    }
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay, products.length, isHovered]);
  
  const handleProductClick = (index) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
    setAutoplay(false);
  };
  
  const handlePrevious = () => {
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
    setAutoplay(false);
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % products.length);
    setAutoplay(false);
  };
  
  const getGridPosition = (index, active) => {
    // Default grid positions
    if (products.length <= 3) {
      return "col-span-12 md:col-span-4";
    }
    
    // When we have more than 3 products
    if (index === active) {
      return "col-span-12 md:col-span-8";
    }
    
    // For non-active items, distribute the remaining 4 columns
    return "col-span-6 md:col-span-4";
  };

  return (
    <div id="projects" className="w-screen min-h-screen bg-[#00031D] text-white py-16 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-purple-500/5 blur-3xl"></div>
      </div>
      
      <hr className="border-blue-300 w-full mb-12 opacity-40" />
      
      <motion.div 
        className="max-w-7xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="text-center mb-16">
          <div className="flex flex-row justify-center items-center gap-2">
            <motion.img 
              src={ast1} 
              className="w-12 invert mb-3 rotate-180" 
              alt=""
              animate={{ rotate: -190 }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Products
            </h1>
            <motion.img 
              src={ast1} 
              className="w-12 invert mb-3" 
              alt=""
              animate={{ rotate: 10 }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
          </div>
          <p className="text-zinc-400 max-w-2xl mx-auto mt-4">
            Explore our portfolio of innovative digital solutions designed to transform businesses and enhance user experiences. Each product is crafted with cutting-edge technology and meticulous attention to detail.
          </p>
        </div>
        
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <AnimatePresence mode="wait">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  layout
                  className={getGridPosition(index, activeIndex)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                >
                  <ProductCard 
                    product={product} 
                    isActive={index === activeIndex}
                    onClick={() => handleProductClick(index)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          <div className="flex justify-between mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-600/40 hover:to-purple-600/40 text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
              onClick={handlePrevious}
            >
              <FaArrowLeft />
            </motion.button>
            
            <div className="flex gap-2">
              {products.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "bg-gradient-to-r from-blue-500 to-purple-500 w-8" : "bg-white/30 hover:bg-white/50"
                  }`}
                  onClick={() => {
                    setActiveIndex(index);
                    setAutoplay(false);
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 hover:from-purple-600/40 hover:to-blue-600/40 text-white transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
              onClick={handleNext}
            >
              <FaArrowRight />
            </motion.button>
          </div>
          
          {/* Autoplay indicator */}
          <motion.div 
            className="absolute top-4 right-4 flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <FaStar className={`text-yellow-400 ${autoplay ? 'animate-pulse' : ''}`} />
            <span>{autoplay ? 'Autoplay On' : 'Autoplay Off'}</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectSection;
