import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Dumbbell } from 'lucide-react';

const AboutMeSection: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        >
          About Me
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg text-center mb-16"
          >
            Hey! I'm a developer who loves diving into new tech challenges. Whether it's building web apps from scratch or exploring the latest in blockchain, I'm always excited to learn something new. When I'm not coding, you'll find me hitting the slopes or at the gym - I believe in keeping both the mind and body active!
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="gradient-border rounded-lg p-[1px]"
            >
              <div className="bg-black p-6 rounded-lg h-full">
                <div className="flex items-center gap-3 mb-4">
                  <Code2 className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                    Technical Interests
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                    Full Stack Development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                    Blockchain Technology & DeFi
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                    AI & Machine Learning
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                    Tech Innovations
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="gradient-border rounded-lg p-[1px]"
            >
              <div className="bg-black p-6 rounded-lg h-full">
                <div className="flex items-center gap-3 mb-4">
                  <Dumbbell className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                    Personal Interests
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                    Snowboarding
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                    Fitness & Gym Training
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                    Technology Exploration
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                    Continuous Learning
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;