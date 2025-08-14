"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { GitHubLogoIcon, ArrowLeftIcon, CheckIcon, CalendarIcon, PersonIcon } from "@radix-ui/react-icons";
import StarField from "../../../components/StarField";
import NavHeader from "../../../components/nav_header";

export default function ESoCProgramPage() {
  return (
    <>
      <StarField />
      
      {/* Floating Spaceship/UFO Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-5">
        <motion.div
          animate={{
            x: [0, 120, 240, 180, 60, 0],
            y: [0, -80, -160, -200, -100, 0],
            rotate: [0, 15, -15, 10, -10, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 text-9xl opacity-30"
        >
          🛸
        </motion.div>
        
        <motion.div
          animate={{
            x: [0, -100, -200, -150, -50, 0],
            y: [0, 80, 160, 200, 100, 0],
            rotate: [0, -20, 20, -15, 15, 0]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8
          }}
          className="absolute bottom-1/4 right-1/4 text-8xl opacity-25"
        >
          🚀
        </motion.div>

        <motion.div
          animate={{
            x: [0, 80, 160, 120, 40, 0],
            y: [0, -60, -120, -150, -75, 0],
            rotate: [0, 12, -12, 8, -8, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute top-1/3 right-1/6 text-7xl opacity-22"
        >
          🛸
        </motion.div>
      </div>
      
      <div className="min-h-screen relative">
        {/* Enhanced cosmic background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/3 rounded-full blur-3xl animate-spin" style={{ animationDuration: '30s' }}></div>
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
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-violet-500 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-8">
                  🌈
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-white">
                  European <span className="bg-gradient-to-r from-purple-400 via-violet-500 to-purple-500 bg-clip-text text-transparent">Summer of Code</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  ESoC initiative promoting diversity and open source contribution across Europe. Work on KubeStellar while building an inclusive tech community.
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
                  <CalendarIcon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">10 Weeks</div>
                  <div className="text-gray-300">Program Duration</div>
                </div>
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                  <PersonIcon className="w-8 h-8 text-violet-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">15</div>
                  <div className="text-gray-300">Participants</div>
                </div>
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mx-auto mb-2"></div>
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
                      "Diversity-focused mentorship",
                      "Inclusive community environment",
                      "Professional development workshops",
                      "Networking with underrepresented groups",
                      "Certificate and portfolio projects",
                      "Follow-up career support",
                      "European tech community integration",
                      "Cross-cultural collaboration"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckIcon className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500/10 to-violet-500/10 rounded-2xl p-6 border border-purple-500/20">
                  <h3 className="text-xl font-semibold text-white mb-3">European Diversity Focus</h3>
                  <p className="text-gray-300 mb-4">
                    ESoC promotes diversity and inclusion in the European tech ecosystem, 
                    creating opportunities for underrepresented groups in open source.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Gender diversity initiatives</li>
                    <li>• Support for minority communities</li>
                    <li>• Accessibility and inclusion focus</li>
                    <li>• Multilingual support and resources</li>
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
                  <h2 className="text-3xl font-bold text-white mb-6">Eligibility</h2>
                  <div className="space-y-4">
                    {[
                      "From underrepresented groups in tech",
                      "European residency or strong European ties",
                      "Basic programming knowledge",
                      "Interest in cloud-native technologies",
                      "Commitment to inclusive practices",
                      "Willingness to mentor others",
                      "Available for 10-week commitment"
                    ].map((requirement, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{requirement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                  <h3 className="text-2xl font-bold text-white mb-4">Focus Areas</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                      <div>
                        <div className="text-white font-semibold">UI/UX Design</div>
                        <div className="text-gray-400 text-sm">User experience and interface design</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-violet-400 rounded-full"></div>
                      <div>
                        <div className="text-white font-semibold">Documentation</div>
                        <div className="text-gray-400 text-sm">Technical writing and documentation</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <div>
                        <div className="text-white font-semibold">Community Building</div>
                        <div className="text-gray-400 text-sm">Outreach and community engagement</div>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-6 bg-gradient-to-r from-purple-600 to-violet-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-violet-700 transition-all duration-200 shadow-lg shadow-purple-500/25"
                  >
                    Apply for European Summer of Code
                  </motion.button>
                  <p className="text-sm text-gray-400 mt-4 text-center">
                    Applications open • Rolling admissions
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