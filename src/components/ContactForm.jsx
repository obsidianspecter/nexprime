import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";
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
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
    phone: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
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
      setSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setSubmitted(false);
        setFormState({
          name: "",
          email: "",
          message: "",
          subject: "",
          phone: ""
        });
      }, 3000);
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: "contact@nexoris.com",
      link: "mailto:contact@nexoris.com"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Office",
      details: "123 Innovation Drive, Tech City, CA 94043",
      link: "https://maps.google.com"
    }
  ];

  return (
    <div id="contactus" className="w-screen min-h-screen bg-[#00031D] text-white py-16 px-6 relative overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-blue-700/10 blur-[100px] filter z-0"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-purple-700/10 blur-[100px] filter z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm sm:text-base text-blue-400 uppercase tracking-wider mb-3">Get in Touch</h2>
          <h3 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-zinc-400 via-white to-zinc-400 bg-clip-text text-transparent mb-6">
            Let's Build Something Amazing Together
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or curious about our services? Reach out to us and let's start the conversation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div 
            className="lg:col-span-1 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index}
                className="p-6 bg-[#010830] rounded-xl border border-blue-900/30 shadow-lg relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-start space-x-4 relative z-10">
                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{info.title}</h4>
                    <a 
                      href={info.link} 
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {info.details}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2 p-8 bg-[#010830] rounded-xl border border-blue-900/30 shadow-lg relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Form glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
            
            {submitted ? (
              <motion.div 
                className="text-center py-16"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <FaPaperPlane className="text-4xl text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-400">We'll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0E1139] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0E1139] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0E1139] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      placeholder="+1 (123) 456-7890"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0E1139] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      placeholder="Project Inquiry"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0E1139] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="Tell us about your project or inquiry..."
                    required
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium text-white transition-all duration-300 shadow-lg shadow-blue-600/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <FaPaperPlane className="ml-2" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
