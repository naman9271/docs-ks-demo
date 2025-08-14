"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { GitHubLogoIcon, ArrowLeftIcon, CheckIcon, CalendarIcon, PersonIcon } from "@radix-ui/react-icons";
import StarField from "../../../components/StarField";
import NavHeader from "../../../components/nav_header";

export default function CommunityChampionsPage() {
  return (
    <>
      <StarField />
      
      {/* Floating Spaceship/UFO Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-5">
        <motion.div
          animate={{
            x: [0, 105, 210, 157, 52, 0],
            y: [0, -65, -130, -162, -81, 0],
            rotate: [0, 17, -17, 12, -12, 0]
          }}
          transition={{
            duration: 27,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 text-9xl opacity-35"
        >
          🛸
        </motion.div>
        
        <motion.div
          animate={{
            x: [0, -95, -190, -142, -47, 0],
            y: [0, 80, 160, 200, 100, 0],
            rotate: [0, -21, 21, -15, 15, 0]
          }}
          transition={{
            duration: 31,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 7
          }}
          className="absolute bottom-1/4 right-1/4 text-8xl opacity-30"
        >
          🚀
        </motion.div>

        <motion.div
          animate={{
            x: [0, 70, 140, 105, 35, 0],
            y: [0, -50, -100, -125, -62, 0],
            rotate: [0, 13, -13, 9, -9, 0]
          }}
          transition={{
            duration: 23,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute top-1/3 right-1/5 text-7xl opacity-25"
        >
          🛸
        </motion.div>
      </div>
      
      <div className="min-h-screen relative">
        {/* Enhanced cosmic background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-500/3 rounded-full blur-3xl animate-spin" style={{ animationDuration: '30s' }}></div>
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
                <div className="w-24 h-24 bg-gradient-to-br from-rose-500 to-red-500 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-8">
                  👥
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-white">
                  Community <span className="bg-gradient-to-r from-rose-400 via-red-500 to-rose-500 bg-clip-text text-transparent">Champions</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Help grow and nurture the KubeStellar community. Organize events, moderate discussions, and help newcomers get started with multi-cluster Kubernetes.
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
                  <CalendarIcon className="w-8 h-8 text-rose-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">6 Months</div>
                  <div className="text-gray-300">Champion Term</div>
                </div>
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                  <PersonIcon className="w-8 h-8 text-red-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">89</div>
                  <div className="text-gray-300">Active Champions</div>
                </div>
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                  <div className="w-3 h-3 bg-rose-400 rounded-full mx-auto mb-2"></div>
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
                  <h2 className="text-3xl font-bold text-white mb-6">Champion Benefits</h2>
                  <div className="space-y-4">
                    {[
                      "Community leadership recognition",
                      "Event planning and hosting support",
                      "Access to community metrics and insights",
                      "Special community champion badge",
                      "Networking with other champions",
                      "Invitation to annual community summit",
                      "Direct access to core maintainers",
                      "Champion-exclusive resources and tools"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckIcon className="w-5 h-5 text-rose-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-rose-500/10 to-red-500/10 rounded-2xl p-6 border border-rose-500/20">
                  <h3 className="text-xl font-semibold text-white mb-3">Community Leadership</h3>
                  <p className="text-gray-300 mb-4">
                    Community Champions are the heart of the KubeStellar ecosystem, fostering 
                    collaboration and helping newcomers navigate the world of multi-cluster Kubernetes.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Organize community events and meetups</li>
                    <li>• Moderate discussions and forums</li>
                    <li>• Create educational content and tutorials</li>
                    <li>• Mentor new contributors and users</li>
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
                  <h2 className="text-3xl font-bold text-white mb-6">Champion Requirements</h2>
                  <div className="space-y-4">
                    {[
                      "Active participation in KubeStellar community",
                      "Experience organizing or moderating communities",
                      "Strong interpersonal and communication skills",
                      "Passion for helping others learn",
                      "Regular availability for community activities",
                      "Understanding of Kubernetes fundamentals",
                      "Commitment to community guidelines and values"
                    ].map((requirement, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{requirement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                  <h3 className="text-2xl font-bold text-white mb-4">Champion Activities</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-rose-400 rounded-full"></div>
                      <div>
                        <div className="text-white font-semibold">Event Organization</div>
                        <div className="text-gray-400 text-sm">Host meetups, workshops, and conferences</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div>
                        <div className="text-white font-semibold">Community Moderation</div>
                        <div className="text-gray-400 text-sm">Guide discussions and maintain community standards</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
                      <div>
                        <div className="text-white font-semibold">Mentorship</div>
                        <div className="text-gray-400 text-sm">Help newcomers learn and contribute</div>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-6 bg-gradient-to-r from-rose-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-rose-700 hover:to-red-700 transition-all duration-200 shadow-lg shadow-rose-500/25"
                  >
                    Apply to Become a Community Champion
                  </motion.button>
                  <p className="text-sm text-gray-400 mt-4 text-center">
                    Rolling applications • Quarterly reviews
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
