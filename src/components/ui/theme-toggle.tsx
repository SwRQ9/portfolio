'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const { setTheme } = useTheme();

  useEffect(() => {
    // Check if client is mounted and get initial theme from HTML class
    setMounted(true);
    const htmlElement = document.documentElement;
    setIsDark(htmlElement.classList.contains('dark'));

    // Listen for class changes on HTML element
    const observer = new MutationObserver(() => {
      setIsDark(htmlElement.classList.contains('dark'));
    });

    observer.observe(htmlElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  if (!mounted) {
    return (
      <button aria-hidden className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200" />
    );
  }

  const toggle = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setTheme(newTheme);
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-200 hover:bg-gray-300 dark:hover:bg-gray-700"
      aria-label="Toggle theme"
      aria-pressed={isDark}
    >
      {isDark ? <BiSun className="w-5 h-5" /> : <BiMoon className="w-5 h-5" />}
    </button>
  );
}
