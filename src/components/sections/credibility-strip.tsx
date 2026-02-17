'use client';

import { motion } from 'framer-motion';
import { credentials } from '@/data/portfolio';

export function CredibilityStrip() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-8">Core Expertise</p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {credentials.map((cred, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">{cred.company}</h3>
              {cred.role && <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">{cred.role}</p>}
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{cred.description}</p>
              {cred.tech && <p className="text-xs text-gray-500 dark:text-gray-500 font-mono">{cred.tech}</p>}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
