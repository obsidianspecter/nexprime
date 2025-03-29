import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaUsers, FaLaptopCode, FaCalendarCheck, FaStar } from 'react-icons/fa';

const StatisticsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const stats = [
    { 
      icon: <FaUsers className="text-3xl md:text-4xl text-blue-400" />,
      value: 500,
      label: 'Happy Clients',
      suffix: '+',
      color: 'from-blue-400 to-blue-600'
    },
    { 
      icon: <FaLaptopCode className="text-3xl md:text-4xl text-purple-400" />,
      value: 875,
      label: 'Projects Completed',
      suffix: '+',
      color: 'from-purple-400 to-purple-600'
    },
    { 
      icon: <FaCalendarCheck className="text-3xl md:text-4xl text-green-400" />,
      value: 10,
      label: 'Years Experience',
      suffix: '+',
      color: 'from-green-400 to-green-600'
    },
    { 
      icon: <FaStar className="text-3xl md:text-4xl text-yellow-400" />,
      value: 98,
      label: 'Client Satisfaction',
      suffix: '%',
      color: 'from-yellow-400 to-yellow-600'
    }
  ];

  return (
    <div className="w-screen py-16 bg-gradient-to-b from-[#00031D] to-[#010426] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-sm sm:text-base text-blue-400 uppercase tracking-wider mb-3">Our Impact</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-zinc-400 via-white to-zinc-500 bg-clip-text text-transparent">
            Delivering Results That Matter
          </h3>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard 
              key={index} 
              stat={stat} 
              isInView={isInView} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ stat, isInView, index }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // Animation duration in ms
      const end = stat.value;
      const increment = end / (duration / 16); // 16ms per frame
      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, stat.value]);
  
  return (
    <motion.div 
      className="bg-[#010830] p-6 rounded-xl shadow-lg border border-blue-900/30 flex flex-col items-center justify-center h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="p-3 rounded-full bg-gradient-to-br from-blue-900/30 to-purple-900/30 mb-4">
        {stat.icon}
      </div>
      <div className="flex items-baseline justify-center">
        <span className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
          {count}
        </span>
        <span className={`text-2xl md:text-3xl ml-1 font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
          {stat.suffix}
        </span>
      </div>
      <p className="mt-2 text-gray-400 text-center">{stat.label}</p>
    </motion.div>
  );
};

export default StatisticsSection; 