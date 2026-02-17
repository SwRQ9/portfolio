'use client';

import { motion } from 'framer-motion';

export function AboutSection() {
  const highlights = [
    { title: 'Clean Architecture', description: 'Scalable, modular system design' },
    { title: 'Secure RBAC Systems', description: 'Secure role-based authorization systems' },
    { title: 'Real-Time Applications', description: 'Live data sync and responsive interfaces' },
    { title: 'Performance First', description: 'Optimized code for lightning-fast experiences' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-2">About Me</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">Scalable Web Developer</h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              I'm a full-stack web developer focused on building scalable, production-ready systems. With experience in Laravel, Next.js, and modern web technologies, I create solutions that balance technical excellence with user experience.
            </p>

            <p className="text-gray-600 dark:text-gray-400 mb-8">
              My focus is on clean architecture, secure implementations (especially RBAC systems), and performance-optimized applications. I believe great code is a foundation for great products.
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">{highlight.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-6 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Maintainable Code</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                I write code that's easy to maintain, understand, and extend. Clear naming, proper documentation, and thoughtful architecture are non-negotiable.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Built for Scale</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Every project is built with deployment, scaling, and maintenance in mind. Security and performance aren't afterthoughts.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Problem Solver</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                I focus on understanding your business needs first, then engineer solutions that deliver real value and solve real problems.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
