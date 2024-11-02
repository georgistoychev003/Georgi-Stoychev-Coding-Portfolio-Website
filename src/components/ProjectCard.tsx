import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string | null;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  language?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
  language
}) => {
  const formattedTitle = title.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="gradient-border rounded-lg overflow-hidden hover:glow cursor-pointer"
      onClick={() => window.open(githubUrl, '_blank')}
    >
      <div className="bg-black p-6">
        <div className="flex justify-between items-start mb-4">
          <motion.h3 
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
            whileHover={{ scale: 1.05 }}
          >
            {formattedTitle}
          </motion.h3>
          {language && (
            <motion.span 
              whileHover={{ scale: 1.1 }}
              className="text-sm px-2 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 rounded"
            >
              {language}
            </motion.span>
          )}
        </div>
        <p className="text-gray-300 mb-4 min-h-[3rem]">
          {description || 'An awesome project in development'}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.1 }}
              className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 rounded-full text-sm"
            >
              {tag}
            </motion.span>
          ))}
        </div>
        <div className="flex gap-4">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors social-icon"
            onClick={(e) => {
              e.stopPropagation();
              window.open(githubUrl, '_blank');
            }}
          >
            <Github size={20} />
            <span>Code</span>
          </motion.a>
          {liveUrl && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors social-icon"
              onClick={(e) => {
                e.stopPropagation();
                window.open(liveUrl, '_blank');
              }}
            >
              <ExternalLink size={20} />
              <span>Live Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectSkeleton: React.FC = () => (
  <div className="gradient-border rounded-lg overflow-hidden animate-pulse">
    <div className="bg-black p-6">
      <div className="h-6 bg-gray-800 rounded mb-2 w-3/4" />
      <div className="h-16 bg-gray-800 rounded mb-4" />
      <div className="flex flex-wrap gap-2 mb-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-6 w-16 bg-gray-800 rounded-full" />
        ))}
      </div>
      <div className="flex gap-4">
        <div className="h-8 w-24 bg-gray-800 rounded" />
      </div>
    </div>
  </div>
);

export default ProjectCard;