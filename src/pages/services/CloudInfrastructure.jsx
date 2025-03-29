import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCloud, FaCode, FaLock, FaServer, FaSyncAlt, FaTachometerAlt } from "react-icons/fa";

const CloudInfrastructure = () => {
  return (
    <div className="w-screen min-h-screen bg-[#00031D] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1800" 
            alt="Cloud Infrastructure Background" 
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
              Cloud Infrastructure
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Scalable, secure, and cost-effective cloud solutions that modernize your infrastructure and enable your business to innovate with agility.
            </p>
            <a 
              href="#contactus" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-medium hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 shadow-lg"
            >
              Transform Your Infrastructure <FaArrowRight />
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Cloud Services Section */}
      <div className="py-20 px-6 bg-cyan-900/10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cloud Services We Deliver</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive cloud infrastructure solutions designed to optimize performance, enhance security, and reduce operational costs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaCloud />,
                title: "Cloud Migration",
                description: "Seamless transition of applications, data, and workloads from on-premises infrastructure to optimized cloud environments."
              },
              {
                icon: <FaCode />,
                title: "Infrastructure as Code",
                description: "Automated infrastructure provisioning and management using code to ensure consistency, scalability, and compliance."
              },
              {
                icon: <FaServer />,
                title: "Multi-Cloud Strategy",
                description: "Strategic implementation of services across multiple cloud providers to optimize cost, performance, and reliability."
              },
              {
                icon: <FaTachometerAlt />,
                title: "Serverless Architecture",
                description: "Event-driven computing solutions that eliminate infrastructure management and provide automatic scaling."
              },
              {
                icon: <FaSyncAlt />,
                title: "DevOps Integration",
                description: "Cloud-native CI/CD pipelines and automation to accelerate software delivery and improve operational efficiency."
              },
              {
                icon: <FaLock />,
                title: "Cloud Security",
                description: "Comprehensive security solutions for cloud environments, including identity management, encryption, and compliance."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-xl border border-gray-800 hover:border-cyan-500/40 group transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400 group-hover:bg-cyan-500/30 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Benefits Section */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of Our Cloud Infrastructure Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience transformative business advantages with our tailored cloud infrastructure solutions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1561414927-6d86591d0c4f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=700",
                title: "Cost Optimization",
                description: "Reduce capital expenditure and transition to a flexible pay-as-you-go model with optimized resource utilization.",
                points: [
                  "Eliminate hardware investment and maintenance costs",
                  "Right-size resources based on actual usage patterns",
                  "Automated scaling to match demand fluctuations",
                  "Detailed cost monitoring and optimization recommendations"
                ]
              },
              {
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=700",
                title: "Scalability & Performance",
                description: "Instantly scale your infrastructure to meet changing business demands without service disruption.",
                points: [
                  "Elastic resources that adapt to workload requirements",
                  "Global content delivery for reduced latency",
                  "High availability and fault tolerance architecture",
                  "Performance optimization through infrastructure tuning"
                ]
              },
              {
                image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=700",
                title: "Security & Compliance",
                description: "Enterprise-grade security and compliance controls that protect your data and applications in the cloud.",
                points: [
                  "Advanced threat protection and monitoring",
                  "Identity and access management with least privilege",
                  "Data encryption at rest and in transit",
                  "Compliance with industry regulations (GDPR, HIPAA, SOC2, etc.)"
                ]
              },
              {
                image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=700",
                title: "Business Agility",
                description: "Accelerate innovation and reduce time-to-market with flexible, on-demand infrastructure resources.",
                points: [
                  "Rapid deployment of new applications and services",
                  "Quick infrastructure provisioning for development teams",
                  "Easy testing and staging environments",
                  "Fast feature rollout and experimentation capabilities"
                ]
              }
            ].map((benefit, index) => (
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
                    src={benefit.image} 
                    alt={benefit.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white">{benefit.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-400 mb-4">{benefit.description}</p>
                  <ul className="space-y-2">
                    {benefit.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2"></div>
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
      
      {/* Implementation Methodology */}
      <div className="py-20 px-6 bg-cyan-900/10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Cloud Implementation Methodology</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We follow a structured approach to ensure successful cloud implementation and migration with minimal disruption to your business operations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              {
                number: "01",
                title: "Discovery & Assessment",
                description: "Comprehensive evaluation of your current infrastructure, applications, and business objectives."
              },
              {
                number: "02",
                title: "Architecture Design",
                description: "Creating a tailored cloud architecture that aligns with your technical requirements and business goals."
              },
              {
                number: "03",
                title: "Migration Planning",
                description: "Detailed planning for data, application, and workload migration with minimal business disruption."
              },
              {
                number: "04",
                title: "Implementation & Migration",
                description: "Executing the migration strategy with rigorous testing and validation at each step."
              },
              {
                number: "05",
                title: "Optimization",
                description: "Fine-tuning performance, security, and cost efficiency based on actual usage patterns."
              },
              {
                number: "06",
                title: "Ongoing Management",
                description: "Continuous monitoring, maintenance, and optimization of your cloud infrastructure."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-xl border border-gray-800 relative group"
              >
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold border border-cyan-500/50">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold mb-3 text-white pt-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Cloud Technology Stack</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We work with industry-leading cloud platforms and technologies to provide the best solutions for your business needs.
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
              <h3 className="text-xl font-bold mb-4 text-cyan-400">AWS</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span className="text-gray-300">EC2 & ECS/EKS</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span className="text-gray-300">S3 & CloudFront</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span className="text-gray-300">RDS & DynamoDB</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span className="text-gray-300">Lambda & API Gateway</span>
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
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Azure</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span className="text-gray-300">Virtual Machines & AKS</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span className="text-gray-300">Blob Storage & CDN</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span className="text-gray-300">SQL Database & Cosmos DB</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span className="text-gray-300">Functions & Logic Apps</span>
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
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Google Cloud</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span className="text-gray-300">Compute Engine & GKE</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span className="text-gray-300">Cloud Storage & CDN</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span className="text-gray-300">Cloud SQL & Firestore</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span className="text-gray-300">Cloud Functions & Run</span>
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
              <h3 className="text-xl font-bold mb-4 text-cyan-400">DevOps & Automation</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span className="text-gray-300">Terraform & CloudFormation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span className="text-gray-300">Docker & Kubernetes</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span className="text-gray-300">GitHub Actions & Azure DevOps</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span className="text-gray-300">Jenkins & ArgoCD</span>
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
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Security & Compliance</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span className="text-gray-300">IAM & SSO Solutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span className="text-gray-300">WAF & DDoS Protection</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span className="text-gray-300">Key Management Systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span className="text-gray-300">Security Monitoring & SIEM</span>
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
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Cloud-Native Development</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span className="text-gray-300">Serverless Frameworks</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span className="text-gray-300">Microservices Architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span className="text-gray-300">Event-Driven Architectures</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span className="text-gray-300">Service Mesh & API Management</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="py-20 px-6 bg-gradient-to-r from-cyan-900/30 to-blue-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Contact us today to discuss how our cloud infrastructure expertise can help your business become more agile, secure, and cost-effective.
            </p>
            <a 
              href="#contactus" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-medium hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 shadow-lg text-lg"
            >
              Schedule a Consultation <FaArrowRight />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CloudInfrastructure; 