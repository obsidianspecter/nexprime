import React, { useState, useEffect } from "react";
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { teamMembers } from '../data/team';

function MeetOurFamily() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    // Simulate loading state for smooth transitions
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.3)",
      transition: { duration: 0.3 }
    },
    exit: {
      scale: 0.9,
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const handleProfileClick = (personId, category) => {
    navigate(`/team/${personId}`, { state: { category } });
  };

  // Enhanced background with more dynamic elements
  const BackgroundCircles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div 
        className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.1, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </div>
  );

  const PersonCard = ({ person, category }) => (
    <motion.div 
      className="relative text-center group cursor-pointer" 
      onClick={() => handleProfileClick(person.id, category)}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      exit="exit"
      viewport={{ once: true, amount: 0.1 }}
      layout
    >
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/30 rounded-full"
            animate={{
              y: [-20, -60],
              x: i * 20,
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeOut"
            }}
            style={{
              left: `${30 + (i * 15)}%`,
              top: "80%"
            }}
          />
        ))}
      </div>

      <div className="relative p-4">
        {/* Image container with new effects */}
        <div className="relative mx-auto mb-8 group/image">
          <div className="relative w-48 h-48 mx-auto">
            {/* Image mask and effects */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20" />
            
            {/* Main image */}
            <motion.img
              src={person.image}
              alt={person.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 rounded-2xl relative z-10"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/400x400?text=Image+Not+Found';
              }}
            />

            {/* Animated border effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl z-0"
              animate={{
                background: [
                  "linear-gradient(0deg, transparent 50%, rgba(59, 130, 246, 0.1) 100%)",
                  "linear-gradient(180deg, transparent 50%, rgba(59, 130, 246, 0.1) 100%)",
                  "linear-gradient(360deg, transparent 50%, rgba(59, 130, 246, 0.1) 100%)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
        </div>

        {/* Content section with new animations */}
        <div className="relative z-10">
          <motion.div 
            className="relative"
            initial={false}
          >
            <motion.h2 
              className="text-2xl font-bold text-white mb-1 relative inline-block"
              layout
            >
              {person.name}
              <motion.div
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-700"
              />
            </motion.h2>
          </motion.div>
          
          <motion.p 
            className="text-blue-300/80 text-sm font-medium mt-3"
            layout
          >
            {person.title}
          </motion.p>
          
          <motion.p 
            className="text-zinc-400/90 text-sm mt-4 line-clamp-3 min-h-[4.5rem] px-4 transition-all duration-500 group-hover:text-zinc-300/90"
            layout
          >
            {person.description}
          </motion.p>

          {/* Interactive view profile link */}
          <motion.div
            className="mt-6 inline-flex items-center gap-2 relative"
          >
            <span className="text-sm font-medium text-white/70 group-hover:text-white/90 transition-colors duration-300">
              View Profile
            </span>
            <motion.div
              className="relative w-6 h-6 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <motion.span
                className="absolute text-blue-400/70 group-hover:text-blue-400"
                animate={{
                  x: [0, 4, 0],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                →
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );

  // Loading animation component
  const LoadingAnimation = () => (
    <div className="fixed inset-0 bg-[#0E0B1E] flex items-center justify-center z-50">
      <motion.div
        className="w-20 h-20 border-4 border-blue-500/20 border-t-blue-500 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingAnimation key="loading" />
      ) : (
        <motion.div 
          key="content"
          className="relative w-screen min-h-screen m-0 p-0 font-inter bg-[#0E0B1E] text-white flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <BackgroundCircles />
          
          <div className="pt-24 px-4 md:px-8 flex-grow relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-white to-purple-400 bg-clip-text text-transparent mb-6"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Meet Our Family
              </motion.h1>
              <motion.p 
                className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mt-4 leading-relaxed px-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                The passionate people behind Nexoris who are driving innovation and creating impact.
              </motion.p>
            </motion.div>

            {/* Founder Section */}
            <motion.div 
              className="mb-24"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent"
                variants={itemVariants}
              >
                Founder
              </motion.h2>
              <div className="flex justify-center px-4">
                <AnimatePresence>
                  {teamMembers.founders.map((founder, index) => (
                    <PersonCard key={founder.id} person={founder} category="founder" />
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Co-Founders Section */}
            <motion.div 
              className="mb-24"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent"
                variants={itemVariants}
              >
                Co-Founders
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto px-4">
                <AnimatePresence>
                  {teamMembers.coFounders.map((coFounder, index) => (
                    <PersonCard key={coFounder.id} person={coFounder} category="cofounder" />
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Team Members Section */}
            {teamMembers.teamMembers.length > 0 && (
              <motion.div 
                className="mb-24"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-400 to-white bg-clip-text text-transparent"
                  variants={itemVariants}
                >
                  Our Team
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto px-4">
                  <AnimatePresence>
                    {teamMembers.teamMembers.map((teamMember, index) => (
                      <PersonCard key={teamMember.id} person={teamMember} category="team" />
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MeetOurFamily; 