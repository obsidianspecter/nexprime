import React from "react";
import { StyleSheet, css } from "aphrodite";
import { fadeIn } from "react-animations";
import { FaArrowRight, FaLaptopCode, FaRobot, FaMobileAlt, FaDatabase, FaChartLine, FaCloudUploadAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: "1s"
  }
});

const getColorClasses = (color) => {
  const colorMap = {
    blue: {
      border: "hover:border-blue-500/40",
      bg: "bg-blue-500/20",
      text: "text-blue-400",
      hoverBg: "group-hover:bg-blue-500/30",
      hoverText: "group-hover:text-blue-300"
    },
    purple: {
      border: "hover:border-purple-500/40",
      bg: "bg-purple-500/20",
      text: "text-purple-400",
      hoverBg: "group-hover:bg-purple-500/30",
      hoverText: "group-hover:text-purple-300"
    },
    green: {
      border: "hover:border-green-500/40",
      bg: "bg-green-500/20",
      text: "text-green-400",
      hoverBg: "group-hover:bg-green-500/30",
      hoverText: "group-hover:text-green-300"
    },
    yellow: {
      border: "hover:border-yellow-500/40",
      bg: "bg-yellow-500/20",
      text: "text-yellow-400",
      hoverBg: "group-hover:bg-yellow-500/30",
      hoverText: "group-hover:text-yellow-300"
    },
    red: {
      border: "hover:border-red-500/40",
      bg: "bg-red-500/20",
      text: "text-red-400",
      hoverBg: "group-hover:bg-red-500/30",
      hoverText: "group-hover:text-red-300"
    },
    cyan: {
      border: "hover:border-cyan-500/40",
      bg: "bg-cyan-500/20",
      text: "text-cyan-400",
      hoverBg: "group-hover:bg-cyan-500/30",
      hoverText: "group-hover:text-cyan-300"
    }
  };
  
  return colorMap[color] || colorMap.blue;
};

const ServiceCard = ({ icon: Icon, title, description, color, onClick }) => {
  const colorClasses = getColorClasses(color);
  
  return (
    <motion.div 
      className={`bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-xl border border-gray-800 ${colorClasses.border} group transition-all duration-300`}
      whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={`w-14 h-14 rounded-2xl ${colorClasses.bg} flex items-center justify-center mb-6 ${colorClasses.text} ${colorClasses.hoverBg} transition-all duration-300`}>
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <button 
        onClick={onClick}
        className={`inline-flex items-center ${colorClasses.text} ${colorClasses.hoverText} font-medium bg-transparent border-none cursor-pointer`}
      >
        Learn more <FaArrowRight className="ml-2 text-sm transition-transform group-hover:translate-x-1" />
      </button>
    </motion.div>
  );
};

const ImgBlock = ({ src, alt, scale = 1 }) => {
  return (
    <motion.div 
      className="relative overflow-hidden rounded-xl"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-800/60 to-purple-800/30 mix-blend-overlay z-10"></div>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-auto rounded-xl object-cover transform transition hover:scale-110 duration-700" 
      />
    </motion.div>
  );
};

const ServiceSection = () => {
  const services = [
    {
      icon: FaRobot,
      title: "Generative AI",
      description: "Harness the power of state-of-the-art generative models for content creation, data synthesis, and intelligent automation solutions.",
      color: "blue",
      path: "/services/generative-ai"
    },
    {
      icon: FaLaptopCode,
      title: "Web Development",
      description: "Custom web applications with responsive designs, progressive enhancement, and seamless user experiences across all devices.",
      color: "purple",
      path: "/services/web-development"
    },
    {
      icon: FaChartLine,
      title: "ML & Deep Learning",
      description: "Data-driven insights through advanced machine learning algorithms, neural networks, and predictive modeling for business optimization.",
      color: "green",
      path: "/services/ml-deep-learning"
    },
    {
      icon: FaMobileAlt,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications with intuitive interfaces and seamless performance on iOS and Android devices.",
      color: "yellow",
      path: "/services/mobile-development"
    },
    {
      icon: FaDatabase,
      title: "Database Solutions",
      description: "Scalable database architectures with optimized queries, efficient data models, and robust security measures for reliable data management.",
      color: "red",
      path: "/services/database-solutions"
    },
    {
      icon: FaCloudUploadAlt,
      title: "Cloud Infrastructure",
      description: "Resilient cloud infrastructure with auto-scaling capabilities, containerization, and continuous deployment pipelines for maximum uptime.",
      color: "cyan",
      path: "/services/cloud-infrastructure"
    }
  ];

  // Use this function to navigate to service pages
  const navigateToService = (path) => {
    window.location.href = path;
  };

  return (
    <div id="services" className="w-screen bg-[#00031D] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <img src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1800" alt="Background Lights" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto py-20 px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent inline-block">
            What We Build
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            We craft innovative digital solutions using cutting-edge technologies to solve complex business challenges and deliver exceptional user experiences.
          </p>
          <div className="mt-6">
            <a 
              href="#contactus" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
            >
              Start Your Project <FaArrowRight />
            </a>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              color={service.color}
              onClick={() => navigateToService(service.path)}
            />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <motion.div 
            className="md:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-bold mb-4">Our Technical Expertise</h3>
            <p className="text-gray-400 mb-6">
              With deep expertise across multiple domains, we build solutions that leverage the latest technologies to deliver exceptional value.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="text-white">Machine Learning & Deep Learning</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span className="text-white">Generative AI & Large Language Models</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-white">Modern Web Development (React, Node.js)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <span className="text-white">Mobile App Development (React Native, Flutter)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <span className="text-white">Cloud Infrastructure & DevOps</span>
              </li>
            </ul>
          </motion.div>
          
          <div className="md:col-span-7 grid grid-cols-12 gap-4">
            <motion.div 
              className="col-span-12 md:col-span-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ImgBlock src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1800" alt="Generative AI Services" scale={1.2} />
            </motion.div>
            <motion.div 
              className="col-span-6 md:col-span-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ImgBlock src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1800" alt="Machine Learning Services" />
            </motion.div>
            <motion.div 
              className="col-span-6 md:col-span-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ImgBlock src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1800" alt="Web Development Services" />
            </motion.div>
            <motion.div 
              className="col-span-12 md:col-span-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ImgBlock src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1800" alt="Mobile Development Services" />
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="mt-24 p-8 rounded-2xl bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-800/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Ready to transform your business?</h3>
              <p className="text-gray-400 mb-6">
                Let's discuss how our expertise can help you achieve your business goals through innovative technology solutions.
              </p>
              <a 
                href="#contactus" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-900 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300"
              >
                Schedule a Consultation <FaArrowRight />
              </a>
            </div>
            <div className="flex justify-center md:justify-end">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=500" 
                alt="Business Consultation" 
                className="rounded-xl w-full max-w-xs" 
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceSection;
