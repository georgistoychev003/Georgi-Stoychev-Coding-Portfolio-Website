import React from 'react';
import { motion } from 'framer-motion';

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    skills: ["Java", "JavaScript", "Python"]
  },
  {
    title: "DevOps & Infrastructure",
    skills: ["Ubuntu servers", "DevOps", "Docker", "JUnit testing"]
  },
  {
    title: "Web Development",
    skills: ["Svelte", "Angular", "Node.js", "Express", "SQLite", "PostgreSQL"]
  },
  {
    title: "Soft Skills",
    skills: ["Team Work", "Clear Communication", "Leadership", "Proactiveness", "Microsoft Office"]
  }
];

const SkillsSection: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-blue-500/5 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur-xl transition-all duration-300 group-hover:blur-2xl" />
              <div className="relative p-6 rounded-lg border border-blue-500/20 bg-black/50 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      className="flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                      <span className="text-gray-300">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;