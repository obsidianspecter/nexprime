import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { FaLinkedinIn, FaGithub, FaTwitter, FaArrowLeft } from 'react-icons/fa';
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import anvin from '../assets/anwin.jpg';
import arun from '../assets/arun.png';
import harisudhan from '../assets/sudhan.png';

function TeamMemberProfile() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // All people data (in a real app, this would be fetched from an API)
  const allPeople = {
    founders: [
      {
        id: "narendran",
        name: 'Mr. G. NARENDRAN',
        title: 'Founder & CEO',
        image: 'https://srec.ac.in/uploads/resource/src/ikFSitG9nV210720221015422250-narendran-g.jpg',
        description: 'Founded the company and spearheaded its vision for growth and innovation.',
        portfolio: {
          linkedin: 'https://linkedin.com',
          github: 'https://github.com',
          twitter: 'https://twitter.com'
        }
      }
    ],
    coFounders: [
      {
        id: "harisudhan",
        name: 'Harisudhan M',
        title: 'CTO',
        image: harisudhan,
        description: 'CTO of the company, responsible for Technical and scaling operations.',
        portfolio: {
          linkedin: 'https://linkedin.com',
          github: 'https://github.com',
          twitter: 'https://twitter.com'
        }
      },
      {
        id: "anvin",
        name: 'Anvin P Shibu',
        title: 'Chief Operations Officer',
        image: anvin,
        description: 'Chief Operations Officer overseeing day-to-day business operations.',
        portfolio: {
          linkedin: 'https://linkedin.com',
          github: 'https://github.com',
          twitter: 'https://twitter.com'
        }
      },
      {
        id: "rathi",
        name: 'Mrs Rathi',
        title: 'Chief Marketing Officer',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d88e9218df?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3',
        description: 'Leads marketing strategies and brand development initiatives.',
        portfolio: {
          linkedin: 'https://linkedin.com',
          github: 'https://github.com',
          twitter: 'https://twitter.com'
        }
      },
      {
        id: "anuradha",
        name: 'Dr R Anuradha',
        title: 'Chief Research Officer',
        image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3',
        description: 'Heads research and development, driving technological innovation.',
        portfolio: {
          linkedin: 'https://linkedin.com',
          github: 'https://github.com',
          twitter: 'https://twitter.com'
        }
      },
      {
        id: "brighty",
        name: 'Mrs Prince Sahaya Brighty',
        title: 'Chief Product Officer',
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3',
        description: 'Oversees product development and user experience design.',
        portfolio: {
          linkedin: 'https://linkedin.com',
          github: 'https://github.com',
          twitter: 'https://twitter.com'
        }
      },
      {
        id: "alagusundari",
        name: 'Mrs Alagusundari',
        title: 'Chief Financial Officer',
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3',
        description: 'Manages financial operations and strategic business planning.',
        portfolio: {
          linkedin: 'https://linkedin.com',
          github: 'https://github.com',
          twitter: 'https://twitter.com'
        }
      }
    ],
    teamMembers: [
      {
        id: "arunmozhi",
        name: 'Arunmozhi Varman K',
        title: 'Technical Lead',
        image: arun,
        description: 'Technical head of operations, leading core product development and engineering.',
        portfolio: {
          linkedin: 'https://linkedin.com',
          github: 'https://github.com',
          twitter: 'https://twitter.com'
        }
      },
      {
        id: "harisudhan",
        name: 'Harisudhan M',
        title: 'Senior Developer',
        image: harisudhan,
        description: 'Full-stack developer specializing in scalable architecture and performance optimization.',
        portfolio: {
          linkedin: 'https://linkedin.com',
          github: 'https://github.com',
          twitter: 'https://twitter.com'
        }
      },
      {
        id: "anvin",
        name: 'Anvin P Shibu',
        title: 'Project Manager',
        image: anvin,
        description: 'Oversees project execution and ensures client satisfaction through efficient delivery.',
        portfolio: {
          linkedin: 'https://linkedin.com',
          github: 'https://github.com',
          twitter: 'https://twitter.com'
        }
      }
    ]
  };
  
  useEffect(() => {
    // Get the right array based on category
    let category = location.state?.category || "team";
    let dataArray;
    
    switch(category) {
      case "founder":
        dataArray = allPeople.founders;
        break;
      case "cofounder":
        dataArray = allPeople.coFounders;
        break;
      default:
        dataArray = allPeople.teamMembers;
    }
    
    // Find the person with matching id
    const foundPerson = dataArray.find(p => p.id === id);
    setPerson(foundPerson);
    
    // Adding a slight delay for the loading animation
    setTimeout(() => {
      setLoading(false);
    }, id === "anvin" ? 2000 : 1000); // Longer animation for Anvin
  }, [id, location.state]);
  
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
  
  if (!person) {
    return (
      <div className="w-screen h-screen flex flex-col justify-center items-center bg-[#0E0B1E] text-white">
        <h1 className="text-3xl font-bold mb-4">Person not found</h1>
        <button 
          onClick={() => navigate('/meet-our-family')}
          className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Go back to team page
        </button>
      </div>
    );
  }
  
  return (
    <div className="w-screen min-h-screen m-0 p-0 font-inter bg-[#0E0B1E] text-white">
      <button 
        onClick={() => navigate('/meet-our-family')} 
        className={`fixed top-6 left-6 z-50 flex items-center gap-2 ${
          id === "anvin" 
            ? "bg-red-600/20 hover:bg-red-600/40" 
            : "bg-blue-600/20 hover:bg-blue-600/40"
        } px-4 py-2 rounded-md transition-all duration-300`}
      >
        <FaArrowLeft /> Back
      </button>
      
      <div className="container mx-auto pt-24 px-8">
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
                boxShadow: id === "anvin"
                  ? [
                    "0 0 20px 5px rgba(229, 0, 0, 0.3)",
                    "0 0 30px 10px rgba(229, 0, 0, 0.5)",
                    "0 0 20px 5px rgba(229, 0, 0, 0.3)"
                  ]
                  : [
                    "0 0 20px 5px rgba(59, 130, 246, 0.3)",
                    "0 0 30px 10px rgba(59, 130, 246, 0.5)",
                    "0 0 20px 5px rgba(59, 130, 246, 0.3)"
                  ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className={`w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${
                id === "anvin" ? "border-red-500" : "border-blue-500"
              }`}
            >
              {id === "anvin" ? (
                <div className="relative w-full h-full">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="w-full h-full object-cover"
                  />
                  {/* N7 Overlay for Anvin */}
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
                id === "anvin" ? "bg-red-500/10" : "bg-blue-500/10"
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
                id === "anvin" ? "bg-red-500/10" : "bg-indigo-500/10"
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
            <h1 className={`text-4xl md:text-6xl font-bold mb-2 ${
              id === "anvin" 
                ? "bg-gradient-to-r from-red-500 via-white to-red-800 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-blue-400 via-white to-indigo-500 bg-clip-text text-transparent"
            }`}>
              {person.name}
            </h1>
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className={`text-xl md:text-2xl ${id === "anvin" ? "text-red-500" : "text-blue-400"} mb-4`}
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
                className={id === "anvin" ? "bg-[#E50000] p-3 rounded-full text-white" : "bg-[#0077B5] p-3 rounded-full text-white"}
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
                className={id === "anvin" ? "bg-[#E50000] p-3 rounded-full text-white" : "bg-[#1DA1F2] p-3 rounded-full text-white"}
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
            className={`${id === "anvin" ? "bg-black/50 border border-red-500/30" : "bg-white/5"} backdrop-blur-sm rounded-xl p-8`}
          >
            <h2 className={`text-2xl font-bold mb-4 ${id === "anvin" ? "text-red-500" : "text-blue-300"}`}>Skills & Expertise</h2>
            <div className="flex flex-wrap gap-2">
              {(id === "anvin" ? 
                ["Combat", "Tactical Planning", "System Alliance Procedures", "Spectre Certification", "Crisis Management"] : 
                ["Leadership", "Strategic Planning", "Team Management", "Innovation", "Product Development"]
              ).map((skill, index) => (
                <motion.span 
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.5 + (index * 0.1) }}
                  className={`px-3 py-1 ${
                    id === "anvin" ? "bg-red-500/20 border border-red-500/50" : "bg-blue-500/20"
                  } rounded-full text-sm`}
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
            className={`${id === "anvin" ? "bg-black/50 border border-red-500/30" : "bg-white/5"} backdrop-blur-sm rounded-xl p-8`}
          >
            <h2 className={`text-2xl font-bold mb-4 ${id === "anvin" ? "text-red-500" : "text-blue-300"}`}>Experience</h2>
            <ul className="space-y-4">
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.8 }}
              >
                <p className="font-semibold">{id === "anvin" ? "Systems Alliance N7 Special Forces" : "Nexoris"}</p>
                <p className="text-zinc-400 text-sm">2020 - Present</p>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 2 }}
              >
                <p className="font-semibold">{id === "anvin" ? "Citadel Security (C-Sec)" : "Previous Company"}</p>
                <p className="text-zinc-400 text-sm">2015 - 2020</p>
              </motion.li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2 }}
          className="mb-16"
        >
          <h2 className={`text-2xl font-bold mb-6 ${id === "anvin" ? "text-red-500" : "text-blue-300"} text-center`}>
            {id === "anvin" ? "Service Record" : "Achievements"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(id === "anvin" ? [
              { title: "Missions Completed", value: "127" },
              { title: "Years of Service", value: "8+" },
              { title: "Commendations", value: "15" }
            ] : [
              { title: "Projects Completed", value: "150+" },
              { title: "Years of Experience", value: "10+" },
              { title: "Awards & Recognition", value: "12" }
            ]).map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 2.4 + (index * 0.2) }}
                className={id === "anvin" 
                  ? "bg-gradient-to-br from-red-500/20 to-red-900/30 border border-red-500/30 rounded-xl p-6 text-center"
                  : "bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl p-6 text-center"
                }
              >
                <p className="text-4xl font-bold mb-2 text-white">{item.value}</p>
                <p className="text-zinc-400">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
}

export default TeamMemberProfile; 