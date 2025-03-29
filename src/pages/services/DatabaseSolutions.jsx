import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaDatabase, FaServer, FaNetworkWired, FaLock, FaCloud, FaChartLine } from "react-icons/fa";

const DatabaseSolutions = () => {
  return (
    <div className="w-screen min-h-screen bg-[#00031D] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1800" 
            alt="Database Solutions Background" 
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
              Database Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Modern, scalable, and secure database architectures that power your applications with reliable data storage, processing, and analytics capabilities.
            </p>
            <a 
              href="#contactus" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg"
            >
              Explore Database Solutions <FaArrowRight />
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Database Types Section */}
      <div className="py-20 px-6 bg-blue-900/10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Database Technologies We Specialize In</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We help organizations select, design, and implement the right database technologies for their specific needs, from traditional relational systems to cutting-edge NoSQL solutions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaDatabase />,
                title: "Relational Databases",
                description: "Traditional SQL databases with ACID compliance, perfect for structured data with complex relationships and transaction requirements."
              },
              {
                icon: <FaServer />,
                title: "NoSQL Databases",
                description: "Flexible, schema-less databases that excel at handling unstructured data, high throughput, and horizontal scalability."
              },
              {
                icon: <FaNetworkWired />,
                title: "Graph Databases",
                description: "Specialized databases optimized for complex networks of connections, relationships, and hierarchical data structures."
              },
              {
                icon: <FaCloud />,
                title: "Cloud-Native Databases",
                description: "Fully managed database services that provide scalability, high availability, and reduced operational overhead."
              },
              {
                icon: <FaChartLine />,
                title: "In-Memory Databases",
                description: "Ultra-fast data storage and retrieval through memory-first architecture for real-time analytics and caching."
              },
              {
                icon: <FaLock />,
                title: "Database Security",
                description: "Advanced security implementations including encryption, access control, auditing, and compliance mechanisms."
              }
            ].map((database, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-xl border border-gray-800 hover:border-blue-500/40 group transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-500/30 transition-all duration-300">
                  {database.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{database.title}</h3>
                <p className="text-gray-400">{database.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Services Section */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Database Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From initial design to ongoing optimization, we provide comprehensive database services that ensure your data infrastructure meets current needs and future requirements.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=700",
                title: "Database Architecture & Design",
                description: "Expert design of optimized database architectures that balance performance, scalability, and cost-effectiveness.",
                points: [
                  "Schema design and data modeling",
                  "Capacity planning and scaling strategies",
                  "High availability and disaster recovery planning",
                  "Multi-region and global distribution design"
                ]
              },
              {
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=700",
                title: "Migration & Modernization",
                description: "Seamless migration of legacy databases to modern, cloud-native solutions with minimal disruption.",
                points: [
                  "Legacy database analysis and evaluation",
                  "Migration planning and risk assessment",
                  "Data transformation and enrichment",
                  "Cutover strategies with minimal downtime"
                ]
              },
              {
                image: "https://images.unsplash.com/photo-1542903660-4d9abc5983b1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=700",
                title: "Performance Optimization",
                description: "Identification and resolution of performance bottlenecks to ensure your databases operate at peak efficiency.",
                points: [
                  "Query optimization and indexing strategies",
                  "Caching implementations",
                  "Connection pooling and resource management",
                  "Database monitoring and alerting systems"
                ]
              },
              {
                image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=700",
                title: "Security & Compliance",
                description: "Implementation of robust security measures to protect your data while meeting industry compliance requirements.",
                points: [
                  "Data encryption and access control implementation",
                  "Security auditing and vulnerability assessment",
                  "Compliance implementation (GDPR, HIPAA, SOC2, etc.)",
                  "Security monitoring and incident response planning"
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl overflow-hidden group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                        <span className="text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Implementation Process */}
      <div className="py-20 px-6 bg-blue-900/10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Database Implementation Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We follow a structured methodology to ensure successful database implementations that meet your business requirements and technical specifications.
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="absolute left-1/2 -ml-px h-full w-0.5 bg-blue-500/20 hidden md:block"></div>
            
            {[
              {
                number: "01",
                title: "Discovery & Requirements",
                description: "Understanding your business needs, data requirements, access patterns, and performance expectations."
              },
              {
                number: "02",
                title: "Architecture Design",
                description: "Creating a database architecture tailored to your needs, considering scalability, security, and data access patterns."
              },
              {
                number: "03",
                title: "Development & Configuration",
                description: "Setting up database environments, implementing schemas, and configuring backup and recovery processes."
              },
              {
                number: "04",
                title: "Data Migration",
                description: "Carefully migrating your existing data to the new database system with validation and integrity checks."
              },
              {
                number: "05",
                title: "Testing & Optimization",
                description: "Rigorous performance testing, security auditing, and optimization to ensure everything works as expected."
              },
              {
                number: "06",
                title: "Deployment & Monitoring",
                description: "Going live with production implementation and setting up monitoring and maintenance processes."
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
                >
                  <div className="flex items-center mb-4">
                    <div className={`relative flex items-center ${index % 2 === 0 ? 'md:justify-end' : ''} w-full`}>
                      <div className={`${index % 2 === 0 ? 'md:ml-auto' : ''} md:absolute md:top-0 ${index % 2 === 0 ? 'md:right-0 md:translate-x-1/2' : 'md:left-0 md:-translate-x-1/2'} z-10`}>
                        <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                          {step.number}
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-xl border border-gray-800">
                        <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                        <p className="text-gray-400">{step.description}</p>
                      </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Database Technology Stack</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We work with a wide range of database technologies to provide the right solution for your specific requirements.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-xl border border-gray-800"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-400">Relational Databases</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-300">PostgreSQL</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-300">MySQL / MariaDB</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-300">SQL Server</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-300">Oracle</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-xl border border-gray-800"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-400">NoSQL Databases</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-300">MongoDB</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-300">Cassandra</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-300">DynamoDB</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-300">Couchbase</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-xl border border-gray-800"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-400">In-Memory Databases</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-300">Redis</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-300">Memcached</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-300">SAP HANA</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-300">Apache Ignite</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-xl border border-gray-800"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-400">Graph Databases</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-300">Neo4j</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-300">Amazon Neptune</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-300">JanusGraph</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-300">ArangoDB</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-xl border border-gray-800"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-400">Time-Series Databases</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-300">InfluxDB</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-300">TimescaleDB</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-300">Prometheus</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-300">Amazon Timestream</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-xl border border-gray-800"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-400">Cloud Database Services</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-300">AWS RDS / Aurora</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-300">Azure Cosmos DB</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-300">Google Cloud Spanner</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-300">Firebase Realtime Database</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="py-20 px-6 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build a Robust Data Foundation?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Let's discuss how we can help you design, implement, and optimize your database infrastructure to support your current needs and future growth.
            </p>
            <a 
              href="#contactus" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg text-lg"
            >
              Schedule a Consultation <FaArrowRight />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DatabaseSolutions; 