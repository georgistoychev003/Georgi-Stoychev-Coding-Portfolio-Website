import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Github, Mail, Linkedin, Calendar, FileText } from 'lucide-react';
import ProjectCard, { ProjectSkeleton } from './components/ProjectCard';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import FloatingIcons from './components/FloatingIcons';
import AboutMeSection from './components/AboutMeSection';
import ThankYouPopup from './components/ThankYouPopup';
import { useGitHubProjects } from './hooks/useGitHubProjects';

function App() {
  const { projects, loading, error } = useGitHubProjects();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
        <FloatingIcons />
        <div className="aurora-bg" />
        <div className="hero-glow" />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent pointer-events-none"
        />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 relative"
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="w-40 h-40 mx-auto mb-8 relative"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse" style={{ padding: '3px' }}>
                  <motion.img
                    src="https://i.postimg.cc/ZKhnHKWh/Snimka-Za-Foto.png"
                    alt="Georgi Stoychev"
                    className="w-full h-full object-cover rounded-full border-4 border-black"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
              </motion.div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">
                <Typewriter
                  options={{
                    strings: ['Hello, I\'m Georgi Stoychev', 'I\'m a Full Stack Developer', 'I\'m a DevOps Engineer'],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 80,
                  }}
                />
              </h1>
              <motion.p 
                className="text-2xl bg-gradient-to-r from-blue-300 to-purple-300 text-transparent bg-clip-text mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Full Stack Developer & DevOps Engineer
              </motion.p>
              <motion.p 
                className="text-lg text-gray-400 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Passionate about building scalable applications and implementing DevOps practices for efficient development workflows.
              </motion.p>
            </motion.div>
            <motion.div 
              className="mt-12 space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a 
                href="https://jmp.sh/s/lGYOxCmBQqzzRTPrtBDA" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText size={20} />
                <span>View CV</span>
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/george-stoychev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg transition-all duration-300 hover:shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(147, 51, 234, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </header>

      <AboutMeSection />
      <SkillsSection />
      <ExperienceTimeline />

      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
          >
            Featured Projects
          </motion.h2>
          {error && (
            <div className="text-red-400 text-center mb-8">
              Failed to load projects. Please try again later.
            </div>
          )}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {loading ? (
              <>
                <ProjectSkeleton />
                <ProjectSkeleton />
                <ProjectSkeleton />
              </>
            ) : (
              projects.slice(0, 6).map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.name}
                  description={project.description}
                  tags={project.topics.length > 0 ? project.topics : [project.language || 'JavaScript']}
                  githubUrl={project.html_url}
                  liveUrl={project.homepage}
                  language={project.language}
                />
              ))
            )}
          </div>
        </div>
      </section>

      <ContactSection />
      <ThankYouPopup />
    </div>
  );
}

export default App;