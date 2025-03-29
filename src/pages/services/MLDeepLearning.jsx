import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaBrain, FaDatabase, FaRobot, FaChartLine, FaNetworkWired, FaEye } from "react-icons/fa";

const MLDeepLearning = () => {
  return (
    <div className="w-screen min-h-screen bg-[#00031D] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1800" 
            alt="ML & Deep Learning Background" 
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
              ML & Deep Learning
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Harness the power of advanced machine learning and deep neural networks to unlock insights, automate processes, and create intelligent systems that learn and adapt.
            </p>
            <a 
              href="#contactus" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg"
            >
              Start Your ML Journey <FaArrowRight />
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Capabilities Section */}
      <div className="py-20 px-6 bg-purple-900/10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our ML & Deep Learning Capabilities</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We develop custom machine learning solutions that solve complex business problems and create competitive advantages through intelligent automation and data insights.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaChartLine />,
                title: "Predictive Analytics",
                description: "Forecast trends, customer behavior, and business outcomes with sophisticated predictive models."
              },
              {
                icon: <FaNetworkWired />,
                title: "Neural Networks",
                description: "Develop deep learning solutions for complex pattern recognition and cognitive computing tasks."
              },
              {
                icon: <FaEye />,
                title: "Computer Vision",
                description: "Implement image recognition, object detection, and visual data processing systems."
              },
              {
                icon: <FaRobot />,
                title: "Natural Language Processing",
                description: "Create text analysis, sentiment detection, and conversational AI applications."
              },
              {
                icon: <FaBrain />,
                title: "Reinforcement Learning",
                description: "Build self-learning systems that optimize performance through trial and error."
              },
              {
                icon: <FaDatabase />,
                title: "MLOps & Deployment",
                description: "Streamline ML model deployment, monitoring, and continuous improvement processes."
              }
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-xl border border-gray-800 hover:border-purple-500/40 group transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6 text-purple-400 group-hover:bg-purple-500/30 transition-all duration-300">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{capability.title}</h3>
                <p className="text-gray-400">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Applications Section */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Applications</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our ML solutions create transformative impact across various industries, addressing specific challenges and unlocking new opportunities.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=700",
                title: "Healthcare",
                applications: [
                  "Medical imaging analysis and diagnosis assistance",
                  "Patient outcome prediction and risk assessment",
                  "Drug discovery and development acceleration",
                  "Personalized treatment recommendation systems"
                ]
              },
              {
                image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=700",
                title: "Financial Services",
                applications: [
                  "Fraud detection and prevention systems",
                  "Algorithmic trading and portfolio optimization",
                  "Credit scoring and risk assessment",
                  "Customer segmentation and personalization"
                ]
              },
              {
                image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=700",
                title: "Retail",
                applications: [
                  "Demand forecasting and inventory optimization",
                  "Personalized recommendation engines",
                  "Customer behavior analysis and prediction",
                  "Visual search and product recognition"
                ]
              },
              {
                image: "https://images.unsplash.com/photo-1565514020179-026b92b4a5b0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=700",
                title: "Manufacturing",
                applications: [
                  "Predictive maintenance and equipment failure prediction",
                  "Quality control and defect detection",
                  "Supply chain optimization",
                  "Production process automation and optimization"
                ]
              }
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl overflow-hidden group"
              >
                <div className="h-60 overflow-hidden relative">
                  <img 
                    src={industry.image} 
                    alt={industry.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white">{industry.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {industry.applications.map((app, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                        <span className="text-gray-300">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Development Process */}
      <div className="py-20 px-6 bg-purple-900/10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our ML Development Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We follow a structured methodology to develop machine learning solutions that deliver measurable business value.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              {
                number: "01",
                title: "Business Understanding",
                description: "Identifying business challenges and defining clear objectives for ML implementation."
              },
              {
                number: "02",
                title: "Data Assessment & Collection",
                description: "Evaluating data availability and quality, planning data acquisition strategies."
              },
              {
                number: "03",
                title: "Data Preparation & Engineering",
                description: "Cleaning, transforming, and enriching data to make it suitable for machine learning."
              },
              {
                number: "04",
                title: "Model Development & Training",
                description: "Developing and training algorithms on historical data to learn patterns and make predictions."
              },
              {
                number: "05",
                title: "Evaluation & Refinement",
                description: "Testing model performance, iteratively improving and optimizing algorithms."
              },
              {
                number: "06",
                title: "Deployment & Monitoring",
                description: "Implementing models in production and establishing continuous monitoring systems."
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
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-purple-500/30 flex items-center justify-center text-purple-400 font-bold border border-purple-500/50">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our ML Technology Stack</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We utilize cutting-edge tools, frameworks, and platforms to build scalable, high-performance machine learning solutions.
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
              <h3 className="text-xl font-bold mb-4 text-purple-400">Frameworks & Libraries</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">TensorFlow / Keras</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">PyTorch</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">Scikit-learn</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">XGBoost / LightGBM</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">Hugging Face Transformers</span>
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
              <h3 className="text-xl font-bold mb-4 text-purple-400">Languages & Tools</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">Python</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">R</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">Jupyter Notebooks</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">Pandas / NumPy</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">Matplotlib / Seaborn</span>
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
              <h3 className="text-xl font-bold mb-4 text-purple-400">Cloud & MLOps</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">AWS SageMaker</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">Google AI Platform</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">Azure ML</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">MLflow / Kubeflow</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">Docker / Kubernetes</span>
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
              <h3 className="text-xl font-bold mb-4 text-purple-400">Big Data Technologies</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">Apache Spark</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">Hadoop</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">Kafka</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">Databricks</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">BigQuery / Redshift</span>
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
              <h3 className="text-xl font-bold mb-4 text-purple-400">Computer Vision</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">OpenCV</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">YOLO</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">Detectron2</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">TensorFlow Object Detection</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">MediaPipe</span>
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
              <h3 className="text-xl font-bold mb-4 text-purple-400">NLP Technologies</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">BERT / RoBERTa</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">GPT / LLM Models</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">spaCy / NLTK</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">Word2Vec / GloVe</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-300">Langchain</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="py-20 px-6 bg-gradient-to-r from-purple-900/30 to-indigo-900/30">
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
              Let's discuss how our machine learning expertise can help solve your business challenges and create intelligent systems that drive growth.
            </p>
            <a 
              href="#contactus" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg text-lg"
            >
              Schedule a Consultation <FaArrowRight />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MLDeepLearning; 