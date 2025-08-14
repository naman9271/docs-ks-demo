"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { GitHubLogoIcon, ArrowLeftIcon, CheckIcon, CalendarIcon, PersonIcon } from "@radix-ui/react-icons";
import StarField from "../../../components/StarField";
import NavHeader from "../../../components/nav_header";

export default function IFOSProgramPage() {
  return (
    <>
      <StarField />
      
      {/* Floating Spaceship/UFO Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-5">
        <motion.div
          animate={{
            x: [0, 88, 176, 132, 44, 0],
            y: [0, -52, -104, -130, -65, 0],
            rotate: [0, 14, -14, 9, -9, 0]
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 text-9xl opacity-35"
        >
          🛸
        </motion.div>
        
        <motion.div
          animate={{
            x: [0, -82, -164, -123, -41, 0],
            y: [0, 68, 136, 170, 85, 0],
            rotate: [0, -18, 18, -12, 12, 0]
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-1/4 right-1/4 text-8xl opacity-30"
        >
          🚀
        </motion.div>

        <motion.div
          animate={{
            x: [0, 58, 116, 87, 29, 0],
            y: [0, -38, -76, -95, -47, 0],
            rotate: [0, 10, -10, 6, -6, 0]
          }}
          transition={{
            duration: 20,
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
            x: [0, -48, -96, -72, -24, 0],
            y: [0, 78, 156, 195, 97, 0],
            rotate: [0, -16, 16, -10, 10, 0]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 7
          }}
          className="absolute bottom-1/6 left-1/6 text-6xl opacity-22"
        >
          🚀
        </motion.div>
      </div>
      
      <div className="min-h-screen relative">
        {/* Enhanced cosmic background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/3 rounded-full blur-3xl animate-spin" style={{ animationDuration: '30s' }}></div>
        </div>

        {/* Navigation Header */}
        <NavHeader currentPage="programs" />


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
                <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-green-500 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-8">
                  🌍
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-white">
                  IFOS <span className="bg-gradient-to-r from-teal-400 via-green-500 to-emerald-500 bg-clip-text text-transparent">Internship</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  International Free and Open Source Software internship. Contribute to KubeStellar while learning enterprise-grade development practices.
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
                  <CalendarIcon className="w-8 h-8 text-teal-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">6 Months</div>
                  <div className="text-gray-300">Program Duration</div>
                </div>
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                  <PersonIcon className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">10</div>
                  <div className="text-gray-300">Interns Selected</div>
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
              
              {/* Benefits & Program Focus */}
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
                      "Long-term project involvement",
                      "Enterprise development practices",
                      "International collaboration experience",
                      "Technical writing opportunities",
                      "Conference speaking opportunities",
                      "Open source leadership development",
                      "Professional networking",
                      "Industry certification pathways"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckIcon className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-teal-500/10 to-green-500/10 rounded-2xl p-6 border border-teal-500/20">
                  <h3 className="text-xl font-semibold text-white mb-3">Global Focus</h3>
                  <p className="text-gray-300 mb-4">
                    IFOS emphasizes international collaboration and cross-cultural learning in the 
                    free and open source software ecosystem.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Work with global development teams</li>
                    <li>• Learn international best practices</li>
                    <li>• Cultural exchange and diversity</li>
                    <li>• Multi-timezone collaboration skills</li>
                  </ul>
                </div>
              </motion.div>

              {/* Requirements & Application */}
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
                      "Computer science or related field student",
                      "Strong technical foundation",
                      "Interest in distributed systems",
                      "Good documentation skills",
                      "Collaborative mindset",
                      "English proficiency for global communication",
                      "Commitment to full program duration"
                    ].map((requirement, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{requirement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                  <h3 className="text-2xl font-bold text-white mb-4">Internship Tracks</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
                      <div>
                        <div className="text-white font-semibold">Backend Development</div>
                        <div className="text-gray-400 text-sm">Core platform and API development</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <div>
                        <div className="text-white font-semibold">DevOps & Infrastructure</div>
                        <div className="text-gray-400 text-sm">CI/CD, deployment, and monitoring</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                      <div>
                        <div className="text-white font-semibold">Research & Innovation</div>
                        <div className="text-gray-400 text-sm">Next-generation features and algorithms</div>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-6 bg-gradient-to-r from-teal-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-700 hover:to-green-700 transition-all duration-200 shadow-lg shadow-teal-500/25"
                  >
                    Apply for IFOS Internship
                  </motion.button>
                  <p className="text-sm text-gray-400 mt-4 text-center">
                    Rolling applications • Start dates flexible
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
