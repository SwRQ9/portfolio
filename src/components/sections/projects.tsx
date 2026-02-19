'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi';
import Link from 'next/link';
import { projects } from '@/data/portfolio';
import { Project } from '@/types';

const isVideoUrl = (url: string): boolean => {
  return url.endsWith('.webm') || url.endsWith('.mp4') || url.endsWith('.mov');
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group cursor-pointer">
      {/* Image Placeholder */}
      <div className="relative h-64 rounded-lg overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 mb-4">
        {project.details.screenshots && project.details.screenshots.length > 0 ? (
          <img
            src={project.details.screenshots[0]}
            alt={`${project.title} showcase`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{project.category}</p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">[Project Showcase]</p>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 dark:group-hover:bg-black/30 transition-colors duration-200" />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{project.shortOutcome}</p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="px-2 py-1 rounded text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && <span className="px-2 py-1 rounded text-xs font-medium text-gray-600 dark:text-gray-400">+{project.tags.length - 3}</span>}
        </div>

        {/* Links */}
        <div className="flex gap-2">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-3 py-2 rounded text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center justify-center gap-1"
            >
              <FiExternalLink className="w-4 h-4" /> {isVideoUrl(project.links.live) ? 'Video Demo' : 'Live'}
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-3 py-2 rounded text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center justify-center gap-1"
            >
              <FiGithub className="w-4 h-4" /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [selectedScreenshot, setSelectedScreenshot] = useState<string | null>(null);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/60 dark:bg-black/80 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white dark:bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="sticky top-0 flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Overview */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Overview</h3>
              <p className="text-gray-600 dark:text-gray-400">{project.details.overview}</p>
            </div>

            {/* Problem & Solution */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Problem</h3>
                <p className="text-gray-600 dark:text-gray-400">{project.details.problem}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Solution</h3>
                <p className="text-gray-600 dark:text-gray-400">{project.details.solution}</p>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Key Features</h3>
              <ul className="grid md:grid-cols-2 gap-2">
                {project.details.keyFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                    <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.details.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Architecture */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Architecture</h3>
              <p className="text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">{project.details.architecture}</p>
            </div>

            {/* Security & Performance */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Security & Performance</h3>
              <p className="text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">{project.details.securityPerformance}</p>
            </div>

            {/* Screenshots */}
            {project.details.screenshots && project.details.screenshots.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Screenshots</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.details.screenshots.map((screenshot, index) => (
                    <div 
                      key={index} 
                      onClick={() => setSelectedScreenshot(screenshot)}
                      className="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 aspect-video cursor-pointer group"
                    >
                      <img
                        src={screenshot}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Lightbox Modal */}
            <AnimatePresence>
              {selectedScreenshot && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedScreenshot(null)}
                  className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                >
                  <motion.div
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.95 }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative max-w-5xl w-full"
                  >
                    <button
                      onClick={() => setSelectedScreenshot(null)}
                      className="absolute -top-12 right-0 p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <FiX className="w-6 h-6 text-white" />
                    </button>
                    <img
                      src={selectedScreenshot}
                      alt="Full size screenshot"
                      className="w-full h-auto rounded-lg"
                    />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Links */}
            <div className="flex gap-3 pt-4">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  <FiExternalLink className="w-4 h-4" /> {isVideoUrl(project.links.live) ? 'Video Demo' : 'View Live'}
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                >
                  <FiGithub className="w-4 h-4" /> View Source
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-2">Featured Work</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">Professional Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Real-world applications built with modern architecture and best practices</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </div>
    </section>
  );
}
