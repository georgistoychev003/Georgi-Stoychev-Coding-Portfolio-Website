import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Calendar } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-20 relative" id="contact">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-blue-500/5 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        >
          Let's Connect
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-gray-300 mb-8"
          >
            I'm currently looking for Software Engineering internship opportunities. Feel free to reach out if you'd like to discuss potential collaborations or just want to connect!
          </motion.p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:gstoichev003@gmail.com"
              className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <Mail size={20} className="social-icon" />
              <span>Email Me</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://calendly.com/gstoichev003/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg transition-all duration-300 hover:shadow-lg hover:from-gray-700 hover:to-gray-600"
            >
              <Calendar size={20} className="social-icon" />
              <span>Schedule a Call</span>
            </motion.a>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6 mt-8"
          >
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://github.com/georgistoychev003?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors social-icon"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.linkedin.com/in/george-stoychev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors social-icon"
            >
              <Linkedin size={24} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;