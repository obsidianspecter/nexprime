import React from 'react';
import { IoBookOutline, IoPeopleOutline } from "react-icons/io5";
import { LuSquareArrowUpRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo1 from '../assets/logo-1.png';
import logo2 from '../assets/logo-2.png';
import logo3 from '../assets/logo-3.png';
import logo4 from '../assets/logo-4.png';

function AboutSection() {
  const stats = [
    { name: "Customers", value: "5M+", color: "from-blue-500 to-blue-600" },
    { name: "Earnings", value: "450M+", color: "from-purple-500 to-purple-600" },
    { name: "Retention Rate", value: "22%", color: "from-pink-500 to-pink-600" },
    { name: "Coverage", value: "80%", color: "from-indigo-500 to-indigo-600" }
  ];

  return (
    <div id='about' className='w-screen min-h-screen overflow-clip bg-[#00031D] relative z-20 pt-32 text-white flex flex-col justify-between'>
      {/* Logo slider section - moved to top */}
      <div className="overflow-hidden bg-gradient-to-r from-[#00031D] via-[#000420] to-[#00031D] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.p 
            className="text-center text-gray-400 mb-8 text-sm uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Trusted by Industry Leaders
          </motion.p>
        </div>
        
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#00031D] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#00031D] to-transparent z-10"></div>
          
          <motion.div 
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ 
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear"
              }
            }}
            className="flex gap-24 justify-start items-center py-8"
          >
            {[...Array(2)].map((_, setIndex) => (
              <React.Fragment key={setIndex}>
                <motion.img 
                  src={logo1} 
                  className='h-12 md:h-16 w-auto grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300' 
                  alt="Logo 1"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.img 
                  src={logo2} 
                  className='h-12 md:h-16 w-auto grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300' 
                  alt="Logo 2"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.img 
                  src={logo3} 
                  className='h-12 md:h-16 w-auto grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300' 
                  alt="Logo 3"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.img 
                  src={logo4} 
                  className='h-12 md:h-16 w-auto grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300' 
                  alt="Logo 4"
                  whileHover={{ scale: 1.05 }}
                />
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>

      {/* About section */}
      <div className='mb-24 mt-auto flex flex-col md:flex-row justify-evenly items-center w-screen h-full'>

        {/* Left Column - About Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='md:w-1/2 w-full flex flex-col items-start md:items-center justify-start md:justify-center pl-12 md:pl-12 mb-10 md:mb-0'
        >
          <div>
            <div className='flex gap-2 items-center text-xs md:text-lg'>
              <div className='h-[1px] w-[40px] bg-gradient-to-r from-blue-500 to-purple-500'></div>
              <p className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">About</p>
              <div className='h-[1px] w-[40px] bg-gradient-to-r from-purple-500 to-blue-500'></div>
            </div>
            <h1 className='text-4xl xl:text-5xl font-semibold xl:mb-4'>
              Who we are <br /> and <span className='bg-gradient-to-r from-blue-400 to-purple-400 rounded-md text-transparent bg-clip-text'>What we do.</span>
            </h1>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              className='flex items-center cursor-pointer mt-2 group'
            >
              <div className='rounded-full md:text-3xl border-2 border-blue-500/30 p-2 m-1 flex items-center group-hover:border-blue-500/60 transition-all duration-300'>
                <IoBookOutline className='text-blue-400 group-hover:text-blue-300' />
              </div>
              <div className='flex flex-col md:text-xl md:ml-3'>
                Know more about our <div className='flex items-center gap-2 text-blue-400 group-hover:text-blue-300'>company <LuSquareArrowUpRight /></div>
              </div>
            </motion.a>
            <motion.div
              whileHover={{ scale: 1.05 }}
            >
              <Link to="/meet-our-family" className='flex items-center cursor-pointer mt-4 group'>
                <div className='rounded-full md:text-3xl border-2 border-purple-500/30 p-2 m-1 flex items-center group-hover:border-purple-500/60 transition-all duration-300'>
                  <IoPeopleOutline className='text-purple-400 group-hover:text-purple-300' />
                </div>
                <div className='flex flex-col md:text-xl md:ml-3'>
                  Meet our family <div className='flex items-center gap-2 text-purple-400 group-hover:text-purple-300'>team <LuSquareArrowUpRight /></div>
                </div>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column - Description and Stats */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='md:w-1/2 px-12 md:px-0 md:text-left text-left w-full flex flex-col justify-center gap-3 md:pr-12 xl:pr-32 pr-12'
        >
          <p className='text-sm md:text-lg xl:text-xl font-semibold text-gray-300'>
            We are a company focused on empowering businesses and individuals in the digital age. Our mission is to create visually appealing and functional digital pages tailored to each client's needs.
          </p>
          <p className='font-thin text-sm md:text-lg xl:text-xl text-gray-400'>
            We offer a range of services, including website design, development, and innovative solutions to enhance brand identity and user engagement. We also build platforms that promote learning and skill development, connecting technology with education. Whether you're a startup, established business, or learner, we're here to help you succeed in the digital world.
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 mt-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-6 rounded-xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300"
              >
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </h3>
                <p className="text-gray-400 text-sm">{stat.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutSection;
