"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { GitHubLogoIcon, ArrowLeftIcon, CheckIcon, CalendarIcon, PersonIcon } from "@radix-ui/react-icons";
import StarField from "../../../components/StarField";

export default function LFXProgramPage() {
  return (
    <>
      <StarField />
      
      {/* Floating Spaceship/UFO Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-5">
        <motion.div
          animate={{
            x: [0, 95, 190, 142, 47, 0],
            y: [0, -55, -110, -137, -68, 0],
            rotate: [0, 15, -15, 10, -10, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 text-9xl opacity-35"
        >
          🛸
        </motion.div>
        
        <motion.div
          animate={{
            x: [0, -85, -170, -127, -42, 0],
            y: [0, 70, 140, 175, 87, 0],
            rotate: [0, -19, 19, -13, 13, 0]
          }}
          transition={{
            duration: 29,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-1/4 right-1/4 text-8xl opacity-30"
        >
          🚀
        </motion.div>

        <motion.div
          animate={{
            x: [0, 60, 120, 90, 30, 0],
            y: [0, -40, -80, -100, -50, 0],
            rotate: [0, 11, -11, 7, -7, 0]
          }}
          transition={{
            duration: 21,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/3 right-1/5 text-7xl opacity-25"
        >
          🛸
        </motion.div>

        <motion.div
          animate={{
            x: [0, -50, -100, -75, -25, 0],
            y: [0, 80, 160, 200, 100, 0],
            rotate: [0, -17, 17, -11, 11, 0]
          }}
          transition={{
            duration: 23,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8
          }}
          className="absolute bottom-1/6 left-1/6 text-6xl opacity-22"
        >
          🚀
        </motion.div>
      </div>
      
      <div className="min-h-screen relative">
        {/* Enhanced cosmic background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/3 rounded-full blur-3xl animate-spin" style={{ animationDuration: '30s' }}></div>
        </div>

        {/* Navigation Header */}
        <nav className="relative z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-8">
                <Link href="/" className="flex items-center space-x-3">
                  <Image 
                    src="/KubeStellar-with-Logo-transparent-v2.png" 
                    alt="KubeStellar Logo" 
                    width={32} 
                    height={32}
                    className="w-8 h-8"
                  />
                  <span className="text-white font-bold text-xl tracking-wide">KUBESTELLAR</span>
                </Link>
                <div className="hidden md:flex space-x-8">
                  <Link href="/" className="text-gray-300 hover:text-white transition-all duration-200 hover:scale-105">Home</Link>
                  <Link href="/programs" className="text-cyan-400 font-semibold">Programs</Link>
                  <Link href="/blog" className="text-gray-300 hover:text-white transition-all duration-200 hover:scale-105">Blog</Link>
                  <Link href="/#docs" className="text-gray-300 hover:text-white transition-all duration-200 hover:scale-105">Docs</Link>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Link 
                  href="https://github.com/kubestellar/kubestellar" 
                  className="text-gray-300 hover:text-white transition-all duration-200 hover:scale-110"
                >
                  <GitHubLogoIcon className="w-5 h-5" />
                </Link>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:from-indigo-700 hover:to-blue-700 transition-all duration-200 shadow-lg shadow-indigo-500/25"
                >
                  Apply for LFX →
                </motion.button>
              </div>
            </div>
          </div>
        </nav>

        {/* Back Button */}
        <div className="relative z-10 pt-8 px-4">
          <div className="max-w-7xl mx-auto">
            <Link href="/programs" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Back to Programs
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative z-10 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-8">
                  🚀
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-white">
                  LFX <span className="bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Mentorship</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Join the Linux Foundation's LFX Mentorship program with KubeStellar. Get paid to contribute to open source while learning from industry experts.
                </p>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="grid md:grid-cols-3 gap-8 mt-12"
              >
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                  <CalendarIcon className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">12 Weeks</div>
                  <div className="text-gray-300">Program Duration</div>
                </div>
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                  <PersonIcon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">8</div>
                  <div className="text-gray-300">Mentees Selected</div>
                </div>
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                  <div className="w-3 h-3 bg-green-400 rounded-full mx-auto mb-2"></div>
                  <div className="text-2xl font-bold text-white mb-1">Open</div>
                  <div className="text-gray-300">Applications</div>
                </div>
              </motion.div>
            </div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Benefits & Program Details */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Program Benefits</h2>
                  <div className="space-y-4">
                    {[
                      "Paid mentorship stipend ($3,000-$6,600)",
                      "Industry-standard development experience",
                      "Direct access to maintainer team",
                      "Career guidance and networking",
                      "Open source portfolio building",
                      "Potential job opportunities",
                      "Linux Foundation certification",
                      "Access to exclusive LF events"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckIcon className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-2xl p-6 border border-indigo-500/20">
                  <h3 className="text-xl font-semibold text-white mb-3">Current Focus Areas</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Multi-cluster policy engine development</li>
                    <li>• Advanced placement algorithms</li>
                    <li>• Edge computing optimizations</li>
                    <li>• Performance monitoring dashboards</li>
                    <li>• API gateway integrations</li>
                  </ul>
                </div>
              </motion.div>

              {/* Requirements & Application Process */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Requirements</h2>
                  <div className="space-y-4">
                    {[
                      "Students or early career professionals",
                      "Experience with containerization",
                      "Knowledge of distributed systems",
                      "Git/GitHub proficiency",
                      "Available 20+ hours per week",
                      "Strong problem-solving skills",
                      "Interest in cloud-native ecosystem"
                    ].map((requirement, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{requirement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                  <h3 className="text-2xl font-bold text-white mb-4">Application Rounds</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-spring-400 rounded-full"></div>
                      <div>
                        <div className="text-white font-semibold">Spring Term</div>
                        <div className="text-gray-400 text-sm">March - June</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-summer-400 rounded-full"></div>
                      <div>
                        <div className="text-white font-semibold">Summer Term</div>
                        <div className="text-gray-400 text-sm">June - September</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-fall-400 rounded-full"></div>
                      <div>
                        <div className="text-white font-semibold">Fall Term</div>
                        <div className="text-gray-400 text-sm">September - December</div>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-6 bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-blue-700 transition-all duration-200 shadow-lg shadow-indigo-500/25"
                  >
                    Apply on LFX Platform
                  </motion.button>
                  <p className="text-sm text-gray-400 mt-4 text-center">
                    Applications open year-round with quarterly cohorts
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
