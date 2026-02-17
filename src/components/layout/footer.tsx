'use client';

import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-sm text-gray-400">
            <p>&copy; {currentYear} Sultan Bahasan. Built with Next.js & Tailwind CSS.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
