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

const ServiceCard = ({ icon: Icon, title, description, color, slug }) => {
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
      <a href={`#${slug}`} className={`inline-flex items-center ${colorClasses.text} ${colorClasses.hoverText} font-medium`}>
        Learn more <FaArrowRight className="ml-2 text-sm transition-transform group-hover:translate-x-1" />
      </a>
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
      slug: "generative-ai"
    },
    {
      icon: FaLaptopCode,
      title: "Web Development",
      description: "Custom web applications with responsive designs, progressive enhancement, and seamless user experiences across all devices.",
      color: "purple",
      slug: "web-development"
    },
    {
      icon: FaChartLine,
      title: "ML & Deep Learning",
      description: "Data-driven insights through advanced machine learning algorithms, neural networks, and predictive modeling for business optimization.",
      color: "green",
      slug: "ml-deep-learning"
    },
    {
      icon: FaMobileAlt,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications with intuitive interfaces and seamless performance on iOS and Android devices.",
      color: "yellow",
      slug: "mobile-development"
    },
    {
      icon: FaDatabase,
      title: "Database Solutions",
      description: "Scalable database architectures with optimized queries, efficient data models, and robust security measures for reliable data management.",
      color: "red",
      slug: "database-solutions"
    },
    {
      icon: FaCloudUploadAlt,
      title: "Cloud Infrastructure",
      description: "Resilient cloud infrastructure with auto-scaling capabilities, containerization, and continuous deployment pipelines for maximum uptime.",
      color: "cyan",
      slug: "cloud-infrastructure"
    }
  ];

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
              slug={service.slug}
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
      
      {/* Service detail sections with their respective IDs for navigation */}
      <div id="generative-ai" className="py-20 px-6 border-t border-blue-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Generative AI Solutions
              </motion.h2>
              <motion.p 
                className="text-gray-400 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Leverage cutting-edge generative AI models to transform your business operations, content creation, and customer experiences. Our custom generative AI solutions help organizations automate creative processes, generate high-quality content, and develop innovative products.
              </motion.p>
              <motion.ul 
                className="space-y-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                </div>
                  <span className="text-gray-300">Custom large language model fine-tuning and deployment</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <span className="text-gray-300">AI-powered content generation systems for marketing and media</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                </div>
                  <span className="text-gray-300">Generative design tools for product development</span>
                </li>
              </motion.ul>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <a 
                  href="#contactus" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                >
                  Discuss Your AI Project <FaArrowRight />
                </a>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1677442135968-6cb0e01665e5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1800" 
                alt="Generative AI Development" 
                className="w-full h-auto rounded-xl" 
              />
            </motion.div>
          </div>
            </div>
          </div>

      <div id="web-development" className="py-20 px-6 border-t border-blue-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl overflow-hidden md:order-1 order-2"
            >
              <img 
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1800" 
                alt="Web Development" 
                className="w-full h-auto rounded-xl" 
              />
            </motion.div>
            <div className="md:order-2 order-1">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Web Development
              </motion.h2>
              <motion.p 
                className="text-gray-400 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Create stunning, high-performance web applications that deliver exceptional user experiences. Our web development team combines technical expertise with creative design to build solutions that help your business thrive in the digital landscape.
              </motion.p>
              <motion.ul 
                className="space-y-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  </div>
                  <span className="text-gray-300">Custom web application development with React, Next.js, and Vue</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  </div>
                  <span className="text-gray-300">E-commerce platforms and solutions with secure payment integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  </div>
                  <span className="text-gray-300">Progressive Web Apps (PWAs) for cross-platform experiences</span>
                </li>
              </motion.ul>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <a 
                  href="#contactus" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Start Your Web Project <FaArrowRight />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
        </div>

      <div id="ml-deep-learning" className="py-20 px-6 border-t border-blue-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Machine Learning & Deep Learning
              </motion.h2>
              <motion.p 
                className="text-gray-400 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Transform your data into actionable insights with our machine learning and deep learning solutions. We design and implement custom AI systems that solve complex business problems, optimize operations, and unlock new opportunities.
              </motion.p>
              <motion.ul 
                className="space-y-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-300">Predictive analytics for business forecasting and decision making</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-300">Computer vision systems for image analysis and object detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-300">Natural language processing for automated text analysis</span>
                </li>
              </motion.ul>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <a 
                  href="#contactus" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg font-medium hover:from-green-700 hover:to-teal-700 transition-all duration-300"
                >
                  Explore ML Solutions <FaArrowRight />
                </a>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1800" 
                alt="Machine Learning Development" 
                className="w-full h-auto rounded-xl" 
              />
            </motion.div>
          </div>
        </div>
      </div>
      
      <div id="mobile-development" className="py-20 px-6 border-t border-blue-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl overflow-hidden md:order-1 order-2"
            >
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1800" 
                alt="Mobile Development" 
                className="w-full h-auto rounded-xl" 
              />
            </motion.div>
            <div className="md:order-2 order-1">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Mobile Development
              </motion.h2>
              <motion.p 
                className="text-gray-400 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Reach your customers wherever they are with intuitive, high-performance mobile applications. Our mobile development team creates seamless experiences across platforms that engage users and drive business growth.
              </motion.p>
              <motion.ul 
                className="space-y-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  </div>
                  <span className="text-gray-300">Native iOS and Android app development</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  </div>
                  <span className="text-gray-300">Cross-platform solutions with React Native and Flutter</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  </div>
                  <span className="text-gray-300">AR/VR mobile experiences for enhanced engagement</span>
                </li>
              </motion.ul>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <a 
                  href="#contactus" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-600 to-amber-600 rounded-lg font-medium hover:from-yellow-700 hover:to-amber-700 transition-all duration-300"
                >
                  Develop Your Mobile App <FaArrowRight />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      <div id="database-solutions" className="py-20 px-6 border-t border-blue-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Database Solutions
              </motion.h2>
              <motion.p 
                className="text-gray-400 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Build a solid foundation for your applications with our robust database solutions. We design and implement scalable, secure database architectures that ensure data integrity, performance, and reliability.
              </motion.p>
              <motion.ul 
                className="space-y-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  </div>
                  <span className="text-gray-300">SQL and NoSQL database design and implementation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  </div>
                  <span className="text-gray-300">Database performance optimization and scaling</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  </div>
                  <span className="text-gray-300">Data migration and integration services</span>
                </li>
              </motion.ul>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <a 
                  href="#contactus" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-rose-600 rounded-lg font-medium hover:from-red-700 hover:to-rose-700 transition-all duration-300"
                >
                  Improve Your Data Architecture <FaArrowRight />
                </a>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1800" 
                alt="Database Solutions" 
                className="w-full h-auto rounded-xl" 
              />
            </motion.div>
          </div>
          </div>
        </div>

      <div id="cloud-infrastructure" className="py-20 px-6 border-t border-blue-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl overflow-hidden md:order-1 order-2"
            >
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1800" 
                alt="Cloud Infrastructure" 
                className="w-full h-auto rounded-xl" 
              />
            </motion.div>
            <div className="md:order-2 order-1">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Cloud Infrastructure
              </motion.h2>
              <motion.p 
                className="text-gray-400 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Build scalable, secure, and resilient cloud infrastructure for your applications. Our cloud engineering team designs and implements solutions that optimize performance, reduce costs, and ensure high availability.
              </motion.p>
              <motion.ul 
                className="space-y-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  </div>
                  <span className="text-gray-300">AWS, Azure, and Google Cloud platform solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  </div>
                  <span className="text-gray-300">Containerization and Kubernetes orchestration</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  </div>
                  <span className="text-gray-300">CI/CD pipelines and DevOps automation</span>
                </li>
              </motion.ul>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <a 
                  href="#contactus" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-medium hover:from-cyan-700 hover:to-blue-700 transition-all duration-300"
                >
                  Optimize Your Infrastructure <FaArrowRight />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
