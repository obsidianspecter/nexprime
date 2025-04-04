import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaLinkedinIn, FaGithub, FaTwitter, FaArrowLeft } from 'react-icons/fa';
import { motion } from "framer-motion";
import { getTeamMemberById } from '../data/team';
import { getProfileData } from '../data/profiles';
import anvin from '../assets/anwin.jpg';

function TeamMemberProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [person, setPerson] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Get team member data
    const teamMember = getTeamMemberById(id);
    setPerson(teamMember);
    
    // Get profile data
    const profileData = getProfileData(id);
    setProfile(profileData);
    
    // Set loading to false after a delay to allow for animations
    const timer = setTimeout(() => {
      setLoading(false);
    }, id === "anvin" ? 2000 : 1000); // Longer animation for Anvin
    
    return () => clearTimeout(timer);
  }, [id]);
  
  // Helper function to determine if a person is a developer
  const isDeveloper = (id) => {
    return id === "anvin" || id === "harisudhan" || id === "arunmozhi";
  };
  
  // Enhanced 'N' loading component
  const NexorisLoader = () => (
    <div className="w-screen h-screen flex justify-center items-center bg-[#0E0B1E] text-white">
      <div className="relative w-40 h-40">
        {/* The N shape */}
        <motion.div
          className="absolute top-0 left-0"
        >
          <svg width="160" height="160" viewBox="0 0 160 160">
            {/* Background glow */}
            <motion.circle 
              cx="80" 
              cy="80" 
              r="60" 
              fill="none" 
              stroke="rgba(59, 130, 246, 0.1)" 
              strokeWidth="4"
              initial={{ scale: 0.8 }}
              animate={{ 
                scale: [0.8, 1.1, 0.8], 
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            
            {/* N path with draw animation */}
            <motion.path
              d="M 40,40 L 40,120 L 60,120 L 60,80 L 100,120 L 120,120 L 120,40 L 100,40 L 100,80 L 60,40 Z"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
            
            {/* Particles around the N */}
            {[...Array(8)].map((_, i) => (
              <motion.circle
                key={i}
                cx={80 + 70 * Math.cos(2 * Math.PI * i / 8)}
                cy={80 + 70 * Math.sin(2 * Math.PI * i / 8)}
                r="4"
                fill="#3B82F6"
                initial={{ opacity: 0.2, scale: 0.5 }}
                animate={{ 
                  opacity: [0.2, 1, 0.2], 
                  scale: [0.5, 1.2, 0.5],
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  delay: i * 0.15,
                  ease: "easeInOut" 
                }}
              />
            ))}
          </svg>
        </motion.div>
        
        {/* Glowing effect */}
        <motion.div
          animate={{ 
            boxShadow: [
              "0 0 20px 5px rgba(59, 130, 246, 0.3)",
              "0 0 40px 10px rgba(59, 130, 246, 0.5)",
              "0 0 20px 5px rgba(59, 130, 246, 0.3)"
            ]
          }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full"
        />
      </div>
    </div>
  );
  
  // Special loader for Anvin P Shibu
  const AnvinLoader = () => (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Mass Effect N7 inspired logo */}
        <div className="relative w-64 h-64">
          {/* Background shield shape */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <svg width="256" height="256" viewBox="0 0 256 256">
              <motion.path
                d="M128 20 L230 60 L230 196 L128 236 L26 196 L26 60 Z"
                fill="#0A0A0A"
                stroke="#E50000"
                strokeWidth="4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>
          
          {/* N7 Logo */}
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <svg width="170" height="170" viewBox="0 0 170 170">
              {/* The N */}
              <motion.path
                d="M40 40 L40 130 L60 130 L60 70 L100 130 L120 130 L120 40 L100 40 L100 100 L60 40 Z"
                fill="none"
                stroke="#E50000"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
              
              {/* The 7 */}
              <motion.path
                d="M130 40 L150 40 L135 130"
                fill="none"
                stroke="#E50000"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              />
              
              {/* Red stripe */}
              <motion.rect
                x="20" 
                y="142" 
                width="130" 
                height="18"
                fill="#E50000"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 1.6, ease: "easeOut" }}
                style={{ transformOrigin: '0% 50%' }}
              />
            </svg>
          </div>
          
          {/* Scanning effect */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.3, delay: 1.7 }}
          >
            <motion.div
              className="w-full h-2 bg-red-500/70"
              initial={{ y: -10 }}
              animate={{ y: 270 }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                repeatType: "loop",
                ease: "linear" 
              }}
            />
          </motion.div>
          
          {/* Glowing effect */}
          <motion.div
            animate={{ 
              boxShadow: [
                "0 0 20px 5px rgba(229, 0, 0, 0.2)",
                "0 0 40px 10px rgba(229, 0, 0, 0.4)",
                "0 0 20px 5px rgba(229, 0, 0, 0.2)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full"
          />
        </div>
        
        {/* Personal info fade-in */}
        <motion.div
          className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-white">
            Anvin P Shibu
          </h2>
          <p className="text-red-500 text-sm font-mono tracking-widest">SYSTEM ALLIANCE N7</p>
        </motion.div>
        
        {/* Anvin's portrait - small circular inset */}
        <motion.div
          className="absolute top-2 right-2 w-20 h-20 rounded-full overflow-hidden border-2 border-red-600"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
        >
          <img 
            src={anvin} 
            alt="Anvin P Shibu" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
  
  if (loading) {
    // Display Anvin's special loader if it's his profile
    return id === "anvin" ? <AnvinLoader /> : <NexorisLoader />;
  }
  
  if (!person || !profile) {
    return (
      <div className="w-screen min-h-screen m-0 p-0 font-inter bg-[#0E0B1E] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Person not found</h1>
          <button 
            onClick={() => navigate('/meet-our-family')}
            className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Team
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="w-screen min-h-screen m-0 p-0 font-inter bg-[#0E0B1E] text-white flex flex-col">
      <button 
        onClick={() => navigate('/meet-our-family')} 
        className={`fixed top-8 left-8 z-50 flex items-center gap-2 ${
          id === "anvin" 
            ? "bg-red-600/20 hover:bg-red-600/40" 
            : isDeveloper(id)
              ? "bg-blue-600/20 hover:bg-blue-600/40"
              : "bg-emerald-600/20 hover:bg-emerald-600/40"
        } px-4 py-2 rounded-md transition-all duration-300 backdrop-blur-sm`}
      >
        <FaArrowLeft className="text-lg" /> Back
      </button>
      
      <div className="container mx-auto pt-24 px-8 flex-grow">
        {/* Hero section with animated elements */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-16">
          {/* Image with animations */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.div 
              animate={{ 
                boxShadow: profile.theme.glowColors.map(color => `0 0 30px 10px ${color}`)
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className={`w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${profile.theme.borderColor}`}
            >
              {id === "anvin" ? (
                <div className="relative w-full h-full">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded font-mono text-red-500 text-xs tracking-widest border border-red-500">N7</div>
                </div>
              ) : (
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="w-full h-full object-cover"
                />
              )}
            </motion.div>
            
            {/* Floating circles decoration */}
            <motion.div 
              animate={{ 
                y: [0, -10, 0], 
                x: [0, 5, 0],
                rotate: 360,
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute top-0 right-0 w-20 h-20 rounded-full ${
                id === "anvin" 
                  ? "bg-red-500/10" 
                  : isDeveloper(id)
                    ? "bg-blue-500/10"
                    : "bg-emerald-500/10"
              } -z-10`}
            />
            <motion.div 
              animate={{ 
                y: [0, 10, 0], 
                x: [0, -5, 0],
                rotate: -360,
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute bottom-0 left-0 w-16 h-16 rounded-full ${
                id === "anvin" 
                  ? "bg-red-500/10" 
                  : isDeveloper(id)
                    ? "bg-indigo-500/10"
                    : "bg-teal-500/10"
              } -z-10`}
            />
          </motion.div>
          
          {/* Info with animations */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <h1 className={`text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r ${profile.theme.gradientText} bg-clip-text text-transparent`}>
              {person.name}
            </h1>
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className={`text-xl md:text-2xl text-${profile.theme.primary}-500 mb-4`}
            >
              {id === "anvin" ? "SYSTEMS ALLIANCE N7 - " + person.title : person.title}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-zinc-300 max-w-lg mb-6"
            >
              {person.description}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex gap-4 justify-center md:justify-start"
            >
              <motion.a 
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href={person.portfolio.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${profile.theme.buttonBg} p-3 rounded-full text-white`}
              >
                <FaLinkedinIn size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href={person.portfolio.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full text-white"
              >
                <FaGithub size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href={person.portfolio.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${profile.theme.buttonBg} p-3 rounded-full text-white`}
              >
                <FaTwitter size={20} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Additional sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className={`${profile.theme.sectionBg} backdrop-blur-sm rounded-xl p-8`}
          >
            <h2 className={`text-2xl font-bold mb-4 text-${profile.theme.primary}-500`}>
              {isDeveloper(id) ? "Skills & Expertise" : "Academic Expertise"}
            </h2>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill, index) => (
                <motion.span 
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.5 + (index * 0.1) }}
                  className={`px-3 py-1 ${profile.theme.skillBg} rounded-full text-sm`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className={`${profile.theme.sectionBg} backdrop-blur-sm rounded-xl p-8`}
          >
            <h2 className={`text-2xl font-bold mb-4 text-${profile.theme.primary}-500`}>
              {isDeveloper(id) ? "Experience" : "Academic Journey"}
            </h2>
            <ul className="space-y-4">
              {profile.experience.map((exp, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.8 + (index * 0.2) }}
                >
                  <p className="font-semibold">{exp.company}</p>
                  <p className="text-zinc-400 text-sm">{exp.period}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2 }}
          className="mb-16"
        >
          <h2 className={`text-2xl font-bold mb-6 text-${profile.theme.primary}-500 text-center`}>
            {id === "anvin" 
              ? "Service Record" 
              : isDeveloper(id)
                ? "Achievements"
                : "Academic Achievements"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {profile.achievements.map((achievement, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 2.4 + (index * 0.2) }}
                className={`${profile.theme.achievementBg} rounded-xl p-6 text-center`}
              >
                <p className="text-4xl font-bold mb-2 text-white">{achievement.value}</p>
                <p className="text-zinc-400">{achievement.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default TeamMemberProfile; 