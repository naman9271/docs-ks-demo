"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { GitHubLogoIcon, SunIcon, MoonIcon } from "@radix-ui/react-icons";

interface NavHeaderProps {
  currentPage?: string;
  darkMode?: boolean;
  setDarkMode?: (value: boolean) => void;
  showThemeToggle?: boolean;
}

export default function NavHeader({ 
  currentPage = "", 
  darkMode = true, 
  setDarkMode,
  showThemeToggle = false 
}: NavHeaderProps) {
  return (
    <nav className="relative z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-3">
              <Image 
                src="/KubeStellar-with-Logo-transparent-v2.png" 
                alt="KubeStellar Logo" 
                width={200} 
                height={55}
              />
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link 
                href="/" 
                className={`${currentPage === 'home' ? 'text-cyan-400 font-semibold' : 'text-gray-300 hover:text-white'} transition-all duration-200 hover:scale-105`}
              >
                Home
              </Link>
              <Link 
                href="/programs" 
                className={`${currentPage === 'programs' ? 'text-cyan-400 font-semibold' : 'text-gray-300 hover:text-white'} transition-all duration-200 hover:scale-105`}
              >
                Programs
              </Link>
              <Link 
                href="/blog" 
                className={`${currentPage === 'blog' ? 'text-cyan-400 font-semibold' : 'text-gray-300 hover:text-white'} transition-all duration-200 hover:scale-105`}
              >
                Blog
              </Link>
              <Link 
                href="/#docs" 
                className={`${currentPage === 'docs' ? 'text-cyan-400 font-semibold' : 'text-gray-300 hover:text-white'} transition-all duration-200 hover:scale-105`}
              >
                Docs
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {showThemeToggle && setDarkMode && (
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 text-gray-300 hover:text-white transition-all duration-200 hover:scale-110"
              >
                {darkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
              </button>
            )}
            <Link 
              href="https://github.com/kubestellar/kubestellar" 
              className="text-gray-300 hover:text-white transition-all duration-200 hover:scale-110"
            >
              <GitHubLogoIcon className="w-5 h-5" />
            </Link>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg shadow-blue-500/25"
            >
              Get Started →
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
}