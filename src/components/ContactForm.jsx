import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

function LabelInput({ labelName, placeHolder, type, name, value, onChange, required = false }) {
  return (
    <div className="flex flex-col justify-start text-white w-full mb-4 relative group">
      <label className="font-normal text-sm text-zinc-400 group-focus-within:text-blue-400 transition-colors duration-200">
        {labelName} {required && <span className="text-red-500">*</span>}
      </label>
      <input 
        name={name} 
        type={type || "text"} 
        placeholder={placeHolder} 
        value={value}
        onChange={onChange}
        required={required}
        className="bg-transparent border-gray-600 border-b-[1px] hover:border-blue-300 focus:border-blue-500 py-2 outline-none transition-all duration-300 mt-1" 
      />
      <div className="h-[2px] bg-blue-500 w-0 group-focus-within:w-full transition-all duration-300 absolute bottom-0 left-0"></div>
    </div>
  );
}

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      
      // Reset form after successful submission
      setTimeout(() => {
        setSubmitStatus(null);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: ""
        });
      }, 3000);
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone",
      details: "+91 12345 67890",
      color: "bg-blue-400"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: "contact@nexoris.com",
      color: "bg-purple-400"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Office",
      details: "Chennai, India",
      color: "bg-red-400"
    }
  ];

  return (
    <section id="contactus" className="bg-[#00031D] min-h-screen text-white py-16 px-6 md:px-10">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <hr className='w-full mb-12 border-blue-300 opacity-40' />
        
        <div className="flex flex-col md:flex-row gap-10">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/3 mb-10 md:mb-0"
          >
            <p className="text-sm md:text-lg tracking-widest text-blue-400 mb-2">CONTACT</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-zinc-400 mb-10">Have a project in mind? Let's collaborate and bring your vision to life!</p>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  className="flex items-start gap-4"
                >
                  <div className={`${info.color} p-3 rounded-lg text-white`}>
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold">{info.title}</h3>
                    <p className="text-zinc-400">{info.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-10">
              <p className="font-mono text-zinc-500 mb-3">-... ..- ... .. -. . ... ...</p>
              <div className="w-24 h-1 bg-blue-500 rounded-full"></div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full md:w-2/3"
          >
            <div className="bg-gray-900/30 shadow-xl rounded-xl p-6 backdrop-filter backdrop-blur-lg border border-gray-800/50">
              <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
              
              {submitStatus === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-center"
                >
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Message Sent!</h3>
                  <p className="text-zinc-300">We've received your message and will get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col justify-start gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                    <LabelInput 
                      labelName="First name" 
                      placeHolder="John" 
                      name="firstName" 
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                    <LabelInput 
                      labelName="Last name" 
                      placeHolder="Doe" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange} 
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                    <LabelInput 
                      labelName="Email" 
                      placeHolder="your@email.com" 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                    <LabelInput 
                      labelName="Subject" 
                      placeHolder="Project Inquiry" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange} 
                    />
                  </div>
                  
                  <div className="relative group mt-2">
                    <label className="font-normal text-sm text-zinc-400 group-focus-within:text-blue-400 transition-colors duration-200">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      name="message" 
                      rows="6" 
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border border-gray-700 rounded-lg p-3 mt-1 focus:border-blue-500 outline-none transition-all duration-300 resize-none"
                    />
                  </div>
                  
                  <motion.button 
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className={`mt-4 flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                      isSubmitting 
                        ? "bg-blue-800/50 cursor-not-allowed" 
                        : "bg-blue-600 hover:bg-blue-700"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <IoIosSend size={18} />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactForm;
