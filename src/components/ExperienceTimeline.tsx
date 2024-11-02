import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Tech Advisor',
    company: 'Heitkamp & Hülscher',
    period: 'October 2023 - Present',
    description: 'Working as a technical advisor, providing expertise and guidance on technology solutions.'
  },
  {
    title: 'Full Stack Developer',
    company: 'Topicus',
    period: 'April 2024 - July 2024',
    description: 'Worked as a full stack developer in a team of 6 to develop a multi-tenant application that serves municipalities across the Netherlands'
  },
  {
    title: 'Software Developer',
    company: 'Myshop',
    period: 'November 2023 - February 2024',
    description: 'Developed a full stack return management system in a team of 5'
  },
  {
    title: 'Student Assistant',
    company: 'Saxion University',
    period: 'December 2022 - October 2023',
    description: 'Helped international students integrate into their new environment and succeed in their program by providing guidance and support'
  },
  {
    title: 'Kitchen Staff',
    company: 'Hotel Pillows',
    period: 'July 2023 - February 2024',
    description: 'Helped chefs in the kitchen. Improved Dutch language skills through daily communication'
  }
];

const ExperienceTimeline: React.FC = () => {
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
          Professional Experience
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 experience-timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="mb-12 relative"
              >
                <div className="absolute -left-6 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Briefcase size={20} />
                </div>
                <div className="gradient-border rounded-lg">
                  <div className="bg-black rounded-lg p-6">
                    <h3 className="text-xl font-bold text-blue-400">{exp.title}</h3>
                    <p className="text-purple-400 mb-2">{exp.company}</p>
                    <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;