"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { GitHubLogoIcon, ArrowLeftIcon, CheckIcon, CalendarIcon, PersonIcon } from "@radix-ui/react-icons";
import StarField from "../../../components/StarField";

export default function EnterpriseProgramPage() {
  return (
    <>
      <StarField />
      
      {/* Floating Spaceship/UFO Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-5">
        <motion.div
          animate={{
            x: [0, 110, 220, 165, 55, 0],
            y: [0, -70, -140, -175, -87, 0],
            rotate: [0, 18, -18, 12, -12, 0]
          }}
          transition={{
            duration: 28,
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
            y: [0, 85, 170, 210, 105, 0],
            rotate: [0, -22, 22, -16, 16, 0]
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
          className="absolute bottom-1/4 right-1/4 text-8xl opacity-30"
        >
          🚀
        </motion.div>

        <motion.div
          animate={{
            x: [0, 75, 150, 112, 37, 0],
            y: [0, -55, -110, -137, -68, 0],
            rotate: [0, 14, -14, 10, -10, 0]
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute top-1/3 right-1/5 text-7xl opacity-25"
        >
          🛸
        </motion.div>
      </div>
      
      <div className="min-h-screen relative">
        {/* Enhanced cosmic background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/3 rounded-full blur-3xl animate-spin" style={{ animationDuration: '30s' }}></div>
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
                  className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-200 shadow-lg shadow-amber-500/25"
                >
                  Become a Partner →
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
                <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-8">
                  🏢
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-white">
                  Enterprise <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 bg-clip-text text-transparent">Partner Program</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Partner with KubeStellar to deliver enterprise-grade multi-cluster solutions. Get technical support, training, and go-to-market resources.
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
                  <CalendarIcon className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">12 Months</div>
                  <div className="text-gray-300">Partnership Duration</div>
                </div>
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                  <PersonIcon className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">23</div>
                  <div className="text-gray-300">Active Partners</div>
                </div>
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                  <div className="w-3 h-3 bg-amber-400 rounded-full mx-auto mb-2"></div>
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
                  <h2 className="text-3xl font-bold text-white mb-6">Partnership Benefits</h2>
                  <div className="space-y-4">
                    {[
                      "Technical enablement and training",
                      "Dedicated technical account manager",
                      "Co-marketing opportunities",
                      "Early access to enterprise features",
                      "Integration support and consulting",
                      "Revenue sharing opportunities",
                      "Joint solution development",
                      "Priority technical support"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckIcon className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl p-6 border border-amber-500/20">
                  <h3 className="text-xl font-semibold text-white mb-3">Enterprise Focus</h3>
                  <p className="text-gray-300 mb-4">
                    Our Enterprise Partner Program is designed for technology consulting firms and 
                    system integrators looking to deliver KubeStellar solutions to their clients.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Multi-cluster enterprise deployments</li>
                    <li>• Professional services enablement</li>
                    <li>• Custom solution development</li>
                    <li>• Enterprise-grade support SLAs</li>
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
                  <h2 className="text-3xl font-bold text-white mb-6">Partner Requirements</h2>
                  <div className="space-y-4">
                    {[
                      "Established technology consulting business",
                      "Kubernetes and cloud-native expertise",
                      "Customer base interested in multi-cluster solutions",
                      "Sales and marketing capabilities",
                      "Commitment to KubeStellar certification",
                      "Technical team for solution delivery",
                      "Proven track record with enterprise clients"
                    ].map((requirement, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{requirement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                  <h3 className="text-2xl font-bold text-white mb-4">Partnership Tiers</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                      <div>
                        <div className="text-white font-semibold">Silver Partner</div>
                        <div className="text-gray-400 text-sm">Basic enablement and co-marketing</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                      <div>
                        <div className="text-white font-semibold">Gold Partner</div>
                        <div className="text-gray-400 text-sm">Advanced training and dedicated support</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                      <div>
                        <div className="text-white font-semibold">Platinum Partner</div>
                        <div className="text-gray-400 text-sm">Strategic partnership with joint solutions</div>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-200 shadow-lg shadow-amber-500/25"
                  >
                    Apply for Enterprise Partnership
                  </motion.button>
                  <p className="text-sm text-gray-400 mt-4 text-center">
                    Partnership applications reviewed quarterly
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
