import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaMobileAlt, FaAppStore, FaGooglePlay, FaCode, FaReact, FaBolt } from "react-icons/fa";

const MobileDevelopment = () => {
  return (
    <div className="w-screen min-h-screen bg-[#00031D] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1800" 
            alt="Mobile Development Background" 
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
              Mobile App Development
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Create powerful, intuitive mobile experiences that engage users and drive growth across iOS, Android, and cross-platform environments.
            </p>
            <a 
              href="#contactus" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-600 to-amber-600 rounded-lg font-medium hover:from-yellow-700 hover:to-amber-700 transition-all duration-300 shadow-lg"
            >
              Start Your Mobile Project <FaArrowRight />
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="py-20 px-6 bg-yellow-900/10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Mobile Solutions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We deliver end-to-end mobile app development services that transform your ideas into market-ready applications with exceptional user experiences.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaAppStore />,
                title: "iOS Development",
                description: "Native iOS applications built with Swift and SwiftUI that leverage the full capabilities of Apple's ecosystem."
              },
              {
                icon: <FaGooglePlay />,
                title: "Android Development",
                description: "Native Android apps developed with Kotlin and Jetpack Compose for optimal performance and user experience."
              },
              {
                icon: <FaReact />,
                title: "Cross-Platform",
                description: "Efficient development with React Native and Flutter to create apps that work seamlessly across multiple platforms."
              },
              {
                icon: <FaMobileAlt />,
                title: "UI/UX Design",
                description: "Intuitive, beautiful user interfaces that follow platform-specific design guidelines and best practices."
              },
              {
                icon: <FaCode />,
                title: "Backend Integration",
                description: "Robust API development and integration with existing systems, databases, and third-party services."
              },
              {
                icon: <FaBolt />,
                title: "Maintenance & Updates",
                description: "Ongoing support, performance optimization, and regular updates to keep your app relevant and secure."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-xl border border-gray-800 hover:border-yellow-500/40 group transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-yellow-500/20 flex items-center justify-center mb-6 text-yellow-400 group-hover:bg-yellow-500/30 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* App Showcase */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Types of Apps We Build</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From consumer-facing applications to enterprise solutions, we develop mobile apps across diverse categories and industries.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=700",
                title: "E-commerce & Retail",
                description: "Mobile shopping experiences with seamless checkout, product discovery, and personalization features."
              },
              {
                image: "https://images.unsplash.com/photo-1565944825262-af889203d862?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=700",
                title: "Health & Fitness",
                description: "Wellness tracking, telehealth, medical records, and fitness applications with wearable integrations."
              },
              {
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=700",
                title: "Finance & Banking",
                description: "Secure mobile banking, investment platforms, payment solutions, and financial management tools."
              },
              {
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=700",
                title: "Enterprise & Productivity",
                description: "Business automation, team collaboration, project management, and workplace productivity tools."
              },
              {
                image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=700",
                title: "Social & Communication",
                description: "Community platforms, messaging apps, and social networks with real-time features."
              },
              {
                image: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=700",
                title: "Travel & Hospitality",
                description: "Booking systems, travel guides, accommodation apps, and location-based services."
              }
            ].map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl overflow-hidden group"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={app.image} 
                    alt={app.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">{app.title}</h3>
                  <p className="text-gray-400">{app.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Development Process */}
      <div className="py-20 px-6 bg-yellow-900/10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our App Development Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We follow a proven methodology to transform your idea into a successful mobile application.
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="absolute left-1/2 -ml-px h-full w-0.5 bg-yellow-500/20 hidden md:block"></div>
            
            {[
              {
                number: "01",
                title: "Discovery & Planning",
                description: "We define your app's goals, target audience, and key features to create a comprehensive development roadmap.",
                image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=700"
              },
              {
                number: "02",
                title: "UI/UX Design",
                description: "Our designers create wireframes, prototypes, and visual designs that ensure intuitive navigation and engaging experiences.",
                image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=700"
              },
              {
                number: "03",
                title: "Development",
                description: "We build the app using efficient coding practices, modular architecture, and rigorous code reviews.",
                image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=700"
              },
              {
                number: "04",
                title: "Testing & QA",
                description: "Thorough quality assurance across devices, operating systems, and network conditions to ensure reliability.",
                image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=700"
              },
              {
                number: "05",
                title: "Deployment",
                description: "App store submission, approval management, and successful launch to your target audience.",
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=700"
              },
              {
                number: "06",
                title: "Maintenance & Growth",
                description: "Ongoing support, performance optimization, feature additions, and analytics to drive app growth.",
                image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=700"
              }
            ].map((step, index) => (
              <div 
                key={index}
                className={`relative mb-16 md:mb-0 ${index % 2 === 0 ? 'md:pr-10 md:ml-0 md:mr-auto md:text-right' : 'md:pl-10 md:ml-auto md:mr-0'} md:w-1/2`}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center mb-4 md:mb-0"
                >
                  <div className={`relative flex items-center ${index % 2 === 0 ? 'md:justify-end' : ''} w-full h-full`}>
                    <div className={`${index % 2 === 0 ? 'md:ml-auto' : ''} flex md:absolute md:top-6 ${index % 2 === 0 ? 'md:right-0 md:translate-x-1/2' : 'md:left-0 md:-translate-x-1/2'} z-10`}>
                      <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 font-bold">
                        {step.number}
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-xl border border-gray-800 md:mt-10">
                      <div className="md:h-40 h-48 overflow-hidden rounded-lg mb-4">
                        <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Technology Stack */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mobile Technology Stack</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We leverage the latest technologies and frameworks to build high-performance, scalable mobile applications.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-xl border border-gray-800"
            >
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Native Development</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2 text-white">iOS</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <span className="text-gray-300">Swift</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <span className="text-gray-300">SwiftUI</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <span className="text-gray-300">UIKit</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <span className="text-gray-300">Core Data</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-white">Android</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <span className="text-gray-300">Kotlin</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <span className="text-gray-300">Jetpack Compose</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <span className="text-gray-300">Android SDK</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <span className="text-gray-300">Room Database</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-xl border border-gray-800"
            >
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Cross-Platform Development</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2 text-white">React Native</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <span className="text-gray-300">JavaScript/TypeScript</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <span className="text-gray-300">Redux</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <span className="text-gray-300">React Navigation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <span className="text-gray-300">Native Modules</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-white">Flutter</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <span className="text-gray-300">Dart</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <span className="text-gray-300">Bloc/Provider</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <span className="text-gray-300">Material Design</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <span className="text-gray-300">Firebase Integration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="py-20 px-6 bg-gradient-to-r from-yellow-900/30 to-amber-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Mobile App?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Let's discuss how we can bring your mobile app idea to life with a development strategy tailored to your specific needs and goals.
            </p>
            <a 
              href="#contactus" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-600 to-amber-600 rounded-lg font-medium hover:from-yellow-700 hover:to-amber-700 transition-all duration-300 shadow-lg text-lg"
            >
              Get a Free Consultation <FaArrowRight />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MobileDevelopment; 