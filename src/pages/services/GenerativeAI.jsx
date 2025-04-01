import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaRobot, FaBrain, FaChartLine, FaCode } from "react-icons/fa";

const GenerativeAI = () => {
  return (
    <div className="w-screen min-h-screen bg-[#00031D] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1800" 
            alt="AI Background" 
            className="w-full h-full object-cover opacity-40" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#00031D]/60 to-[#00031D]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto pt-32 pb-20 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Generative AI Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business with state-of-the-art generative AI technologies that drive innovation, automate processes, and create new opportunities.
            </p>
            <a 
              href="#contactus" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg"
            >
              Start Your AI Journey <FaArrowRight />
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="py-20 px-6 bg-blue-900/10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cutting-Edge AI Capabilities</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our generative AI solutions leverage the latest advancements in machine learning and deep neural networks to deliver intelligent systems that learn, adapt, and create.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaRobot />,
                title: "Custom LLM Development",
                description: "Build and deploy customized large language models tailored to your specific business needs and domain expertise."
              },
              {
                icon: <FaBrain />,
                title: "AI Content Generation",
                description: "Automate content creation for marketing, product descriptions, reports, and creative assets with controllable outputs."
              },
              {
                icon: <FaChartLine />,
                title: "Predictive Analytics",
                description: "Leverage generative models to forecast trends, identify patterns, and make data-driven predictions with greater accuracy."
              },
              {
                icon: <FaCode />,
                title: "Automated Code Generation",
                description: "Accelerate development with AI-powered code generation tools that understand intent and produce efficient solutions."
              },
              {
                icon: <FaRobot />,
                title: "Intelligent Automation",
                description: "Create sophisticated automation workflows enhanced by AI reasoning capabilities and natural language processing."
              },
              {
                icon: <FaChartLine />,
                title: "Data Synthesis",
                description: "Generate high-quality synthetic data for testing, training, and augmenting existing datasets while preserving privacy."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-xl border border-gray-800 hover:border-blue-500/40 group transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-500/30 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* How It Works Section */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Build AI Solutions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our proven methodology ensures we deliver AI systems that are effective, reliable, and aligned with your business objectives.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              {[
                {
                  number: "01",
                  title: "Discovery & Planning",
                  description: "We analyze your business needs, data resources, and technical requirements to create a strategic AI implementation plan."
                },
                {
                  number: "02",
                  title: "Model Selection & Development",
                  description: "Our experts select and customize the right AI models and architectures for your specific use case and objectives."
                },
                {
                  number: "03",
                  title: "Data Preparation & Training",
                  description: "We process your data, ensure quality, and train models using advanced techniques to maximize performance."
                },
                {
                  number: "04",
                  title: "Testing & Refinement",
                  description: "Rigorous testing and validation ensure your AI solution performs reliably across various scenarios and edge cases."
                },
                {
                  number: "05",
                  title: "Deployment & Integration",
                  description: "Seamless deployment into your existing infrastructure with API development and system integration."
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6 mb-10"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1800" 
                alt="AI Development Process" 
                className="w-full h-auto rounded-xl" 
              />
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="py-20 px-6 bg-gradient-to-r from-blue-900/30 to-indigo-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Let's discuss how our generative AI solutions can help you innovate, automate, and gain a competitive edge in your industry.
            </p>
            <a 
              href="#contactus" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg text-lg"
            >
              Schedule a Consultation <FaArrowRight />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GenerativeAI; 