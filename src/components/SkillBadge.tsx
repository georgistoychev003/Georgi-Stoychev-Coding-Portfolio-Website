import React from 'react';
import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="skill-card rounded-lg p-4 backdrop-blur-sm hover:glow"
    >
      <motion.div 
        className="flex items-center justify-center h-full"
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <span className="text-lg font-medium bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          {name}
        </span>
      </motion.div>
    </motion.div>
  );
};

export default SkillBadge;