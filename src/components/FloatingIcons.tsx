import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Server, Terminal, Cpu } from 'lucide-react';

const icons = [
  { Icon: Code2, color: '#3b82f6', delay: 0 },
  { Icon: Database, color: '#8b5cf6', delay: 0.2 },
  { Icon: Globe, color: '#06b6d4', delay: 0.4 },
  { Icon: Server, color: '#6366f1', delay: 0.6 },
  { Icon: Terminal, color: '#ec4899', delay: 0.8 },
  { Icon: Cpu, color: '#14b8a6', delay: 1 }
];

const FloatingIcon: React.FC<{ icon: typeof icons[0]; x: number; y: number }> = ({ icon, x, y }) => {
  const { Icon, color, delay } = icon;
  
  return (
    <motion.div
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay,
        duration: 0.8,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 2
      }}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative"
      >
        <div className="absolute inset-0 blur-xl" style={{ color }}>
          <Icon size={30} />
        </div>
        <Icon size={30} style={{ color }} />
      </motion.div>
    </motion.div>
  );
};

const FloatingIcons: React.FC = () => {
  const positions = [
    { x: 15, y: 20 },
    { x: 85, y: 30 },
    { x: 25, y: 80 },
    { x: 75, y: 70 },
    { x: 45, y: 40 },
    { x: 60, y: 85 }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon, index) => (
        <FloatingIcon
          key={index}
          icon={icon}
          x={positions[index].x}
          y={positions[index].y}
        />
      ))}
    </div>
  );
};

export default FloatingIcons;