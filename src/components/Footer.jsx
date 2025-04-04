import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub, FaArrowRight, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <footer className="bg-gradient-to-t from-black to-[#050815] text-white pt-20 pb-6 overflow-hidden relative">
      {/* Glowing orbs in background */}
      <div className="absolute top-10 left-10 w-56 h-56 rounded-full bg-blue-500/5 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-purple-500/5 blur-3xl"></div>
      
      {/* Container */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-6"
      >
        {/* Top section with logo and newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 border-b border-gray-800 pb-16">
          <motion.div variants={itemVariants} className="max-w-md">
            <div className="mb-6">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent inline-block">NEXORIS</h1>
            </div>
            <p className="text-gray-400 mb-8">
              Empowering businesses with innovative digital solutions and cutting-edge technology. We build visually stunning and functionally powerful applications to transform your ideas into reality.
            </p>
            <div className="flex gap-5">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 text-gray-300 hover:text-white transition-all duration-300"
              >
                <FaFacebookF />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-400 text-gray-300 hover:text-white transition-all duration-300"
              >
                <FaTwitter />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-700 text-gray-300 hover:text-white transition-all duration-300"
              >
                <FaLinkedinIn />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gradient-to-br from-purple-600 to-pink-500 text-gray-300 hover:text-white transition-all duration-300"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-300"
              >
                <FaGithub />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="lg:ml-auto max-w-md">
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for the latest updates, insights, and exclusive offers.
            </p>
            
            {subscribed ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500/20 border border-green-500/30 rounded-lg p-4"
              >
                <h4 className="text-green-400 font-medium">Thank you for subscribing!</h4>
                <p className="text-sm text-gray-300">You're now on our list for updates and news.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-gray-800/70 border border-gray-700 rounded-l-lg px-4 py-3 w-full focus:outline-none focus:border-blue-500 transition-colors duration-300"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 rounded-r-lg px-5 text-white transition-colors duration-300 flex items-center"
                >
                  <FaArrowRight />
                </button>
              </form>
            )}
          </motion.div>
        </div>
        
        {/* Main footer links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-white relative inline-block">
              Company
              <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-blue-500"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <a href="/#about" className="text-gray-400 hover:text-white transition-colors duration-200 inline-block">
                  About Us
                </a>
              </li>
              <li>
                <Link to="/meet-our-family" className="text-gray-400 hover:text-white transition-colors duration-200 inline-block">
                  Our Team
                </Link>
              </li>
              <li>
                <a href="/#services" className="text-gray-400 hover:text-white transition-colors duration-200 inline-block">
                  Services
                </a>
              </li>
            </ul>
          </motion.div>
          
          {/* Projects */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-white relative inline-block">
              Projects
              <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-blue-500"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/#projects" className="text-gray-400 hover:text-white transition-colors duration-200 inline-block">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/#projects" className="text-gray-400 hover:text-white transition-colors duration-200 inline-block">
                  Recent Work
                </a>
              </li>
              <li>
                <a href="/#projects" className="text-gray-400 hover:text-white transition-colors duration-200 inline-block">
                  Web Applications
                </a>
              </li>
              <li>
                <a href="/#projects" className="text-gray-400 hover:text-white transition-colors duration-200 inline-block">
                  Mobile Apps
                </a>
              </li>
            </ul>
          </motion.div>
          
          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-white relative inline-block">
              Resources
              <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-blue-500"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/#blog" className="text-gray-400 hover:text-white transition-colors duration-200 inline-block">
                  Blog
                </a>
              </li>
              <li>
                <a href="/#resources" className="text-gray-400 hover:text-white transition-colors duration-200 inline-block">
                  Documentation
                </a>
              </li>
              <li>
                <a href="/#resources" className="text-gray-400 hover:text-white transition-colors duration-200 inline-block">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="/#faqs" className="text-gray-400 hover:text-white transition-colors duration-200 inline-block">
                  FAQs
                </a>
              </li>
            </ul>
          </motion.div>
          
          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-white relative inline-block">
              Contact Us
              <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-blue-500"></div>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="text-blue-500 mt-1"><FaMapMarkerAlt /></div>
                <span className="text-gray-400">
                  Coimbatore-641022, <br />Tamilnadu, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="text-blue-500"><FaPhone /></div>
                <a href="tel:+919788818448" className="text-gray-400 hover:text-white transition-colors duration-200">
                  +91 97888 18448
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="text-blue-500"><FaEnvelope /></div>
                <a href="mailto:contact@nexoris.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                  contact@nexoris.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 pt-8 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Nexoris. All Rights Reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="/#terms" className="text-sm text-gray-500 hover:text-white transition-colors duration-200">Terms of Service</a>
            <a href="/#privacy" className="text-sm text-gray-500 hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="/#cookies" className="text-sm text-gray-500 hover:text-white transition-colors duration-200">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
