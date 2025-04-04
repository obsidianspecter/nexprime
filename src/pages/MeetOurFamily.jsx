import React from "react";
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { teamMembers } from '../data/team';

function MeetOurFamily() {
  const navigate = useNavigate();

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
    }
  };

  const handleProfileClick = (personId, category) => {
    navigate(`/team/${personId}`, { state: { category } });
  };

  const PersonCard = ({ person, category }) => (
    <motion.div 
      className="text-center p-4 cursor-pointer" 
      onClick={() => handleProfileClick(person.id, category)}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="relative mx-auto">
        <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-gray-600 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/50">
          <img
            src={person.image}
            alt={person.name}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
          <a 
            href={person.portfolio.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#0077B5] p-2 rounded-full text-white hover:scale-110 transition-transform"
            onClick={(e) => e.stopPropagation()}
          >
            <FaLinkedinIn />
          </a>
          <a 
            href={person.portfolio.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-gray-800 p-2 rounded-full text-white hover:scale-110 transition-transform"
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub />
          </a>
          <a 
            href={person.portfolio.twitter} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#1DA1F2] p-2 rounded-full text-white hover:scale-110 transition-transform"
            onClick={(e) => e.stopPropagation()}
          >
            <FaTwitter />
          </a>
        </div>
      </div>
      <div className="mt-6 p-4">
        <h2 className="text-xl font-semibold">{person.name}</h2>
        <p className="text-zinc-400 text-sm">{person.title}</p>
        <p className="text-zinc-500 text-sm mt-2">{person.description}</p>
      </div>
    </motion.div>
  );

  return (
    <motion.div 
      className="w-screen min-h-screen m-0 p-0 font-inter bg-[#0E0B1E] text-white flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="pt-24 px-8 flex-grow">
        <motion.div 
          className="text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-zinc-700 via-white to-zinc-800 bg-clip-text text-transparent">
            Meet Our Family
          </h1>
          <p className="text-zinc-400 max-w-lg mx-auto mt-4">
            The passionate people behind Nexoris who are driving innovation and creating impact.
          </p>
        </motion.div>

        {/* Founder Section */}
        <motion.div 
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-8 text-center"
            variants={itemVariants}
          >
            Founder
          </motion.h2>
          <div className="flex justify-center">
            {teamMembers.founders.map((founder, index) => (
              <PersonCard key={index} person={founder} category="founder" />
            ))}
          </div>
        </motion.div>

        {/* Co-Founders Section */}
        <motion.div 
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-8 text-center"
            variants={itemVariants}
          >
            Co-Founders
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {teamMembers.coFounders.map((coFounder, index) => (
              <PersonCard key={index} person={coFounder} category="cofounder" />
            ))}
          </div>
        </motion.div>

        {/* Team Members Section - Only show if there are team members */}
        {teamMembers.teamMembers.length > 0 && (
          <motion.div 
            className="mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.h2 
              className="text-3xl font-bold mb-8 text-center"
              variants={itemVariants}
            >
              Our Team
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {teamMembers.teamMembers.map((teamMember, index) => (
                <PersonCard key={index} person={teamMember} category="team" />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default MeetOurFamily; 