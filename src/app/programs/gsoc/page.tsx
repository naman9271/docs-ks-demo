"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { GitHubLogoIcon, ArrowLeftIcon, CheckIcon, CalendarIcon, PersonIcon } from "@radix-ui/react-icons";
import StarField from "../../../components/StarField";

export default function GSoCProgramPage() {
  return (
    <>
      <StarField />
      
      {/* Floating Spaceship/UFO Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-5">
        <motion.div
          animate={{
            x: [0, 100, 200, 150, 50, 0],
            y: [0, -60, -120, -150, -75, 0],
            rotate: [0, 16, -16, 11, -11, 0]
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 text-9xl opacity-35"
        >
          🛸
        </motion.div>
        
        <motion.div
          animate={{
            x: [0, -90, -180, -135, -45, 0],
            y: [0, 75, 150, 187, 93, 0],
            rotate: [0, -20, 20, -14, 14, 0]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute bottom-1/4 right-1/4 text-8xl opacity-30"
        >
          🚀
        </motion.div>

        <motion.div
          animate={{
            x: [0, 65, 130, 97, 32, 0],
            y: [0, -45, -90, -112, -56, 0],
            rotate: [0, 12, -12, 8, -8, 0]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/3 right-1/5 text-7xl opacity-25"
        >
          🛸
        </motion.div>
      </div>
      
      <div className="min-h-screen relative">
        {/* Enhanced cosmic background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/3 rounded-full blur-3xl animate-spin" style={{ animationDuration: '30s' }}></div>
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
                  className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:from-red-700 hover:to-pink-700 transition-all duration-200 shadow-lg shadow-red-500/25"
                >
                  Apply for GSoC →
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
                <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-pink-500 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-8">
                  ☀️
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-white">
                  Google <span className="bg-gradient-to-r from-red-400 via-pink-500 to-orange-500 bg-clip-text text-transparent">Summer of Code</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Participate in GSoC with KubeStellar. Work on cutting-edge multi-cluster orchestration features with mentorship from core maintainers.
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
                  <CalendarIcon className="w-8 h-8 text-red-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">3 Months</div>
                  <div className="text-gray-300">Program Duration</div>
                </div>
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                  <PersonIcon className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">12</div>
                  <div className="text-gray-300">Students Selected</div>
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
              
              {/* Benefits & What You'll Work On */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">What You'll Get</h2>
                  <div className="space-y-4">
                    {[
                      "Stipend from Google ($1,500 - $6,600)",
                      "Dedicated mentor from KubeStellar team", 
                      "Real-world open source experience",
                      "Certificate and recognition",
                      "Potential for long-term involvement",
                      "Network with global open source community",
                      "Hands-on experience with Kubernetes",
                      "Technical writing and documentation skills"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckIcon className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-2xl p-6 border border-red-500/20">
                  <h3 className="text-xl font-semibold text-white mb-3">Project Ideas for 2025</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Enhanced multi-cluster workload placement algorithms</li>
                    <li>• Improved monitoring and observability features</li>
                    <li>• Advanced networking policies for edge clusters</li>
                    <li>• Performance optimization and benchmarking tools</li>
                    <li>• Integration with service mesh technologies</li>
                  </ul>
                </div>
              </motion.div>

              {/* Requirements & Timeline */}
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
                      "University student or recent graduate",
                      "Strong programming skills in Go",
                      "Basic understanding of Kubernetes",
                      "Passion for cloud-native technologies",
                      "Good English communication skills",
                      "Available for 12+ weeks during summer",
                      "Previous open source contributions (preferred)"
                    ].map((requirement, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{requirement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                  <h3 className="text-2xl font-bold text-white mb-4">GSoC 2025 Timeline</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <div>
                        <div className="text-white font-semibold">January - February</div>
                        <div className="text-gray-400 text-sm">Organization applications</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                      <div>
                        <div className="text-white font-semibold">March - April</div>
                        <div className="text-gray-400 text-sm">Student application period</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <div>
                        <div className="text-white font-semibold">May - August</div>
                        <div className="text-gray-400 text-sm">Coding period</div>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-6 bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-pink-700 transition-all duration-200 shadow-lg shadow-red-500/25"
                  >
                    View Project Ideas
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
