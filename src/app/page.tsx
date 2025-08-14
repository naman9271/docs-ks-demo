"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GitHubLogoIcon, SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import HowItWorks from "../components/HowItWorks";
import UseCases from "../components/UseCases";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import SpaceBackground from "../components/SpaceBackground";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      {/* Enhanced Space Background */}
      <SpaceBackground />
      
      <div className="min-h-screen relative overflow-hidden">
        {/* Enhanced cosmic background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/3 rounded-full blur-3xl animate-spin" style={{ animationDuration: '30s' }}></div>
          {/* Nebula effects */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-violet-500/10 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-2xl"></div>
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
                    width={200} 
                    height={55}
                    // className="w-8 h-8"
                  /></Link>
                <div className="hidden md:flex space-x-8">
                  <Link href="#about" className="text-gray-300 hover:text-white transition-all duration-200 hover:scale-105">About</Link>
                  <Link href="#how-it-works" className="text-gray-300 hover:text-white transition-all duration-200 hover:scale-105">How It Works</Link>
                  <Link href="#use-cases" className="text-gray-300 hover:text-white transition-all duration-200 hover:scale-105">Use Cases</Link>
                  <Link href="/programs" className="text-gray-300 hover:text-white transition-all duration-200 hover:scale-105">Programs</Link>
                  <Link href="/blog" className="text-gray-300 hover:text-white transition-all duration-200 hover:scale-105">Blog</Link>
                  <Link href="#docs" className="text-gray-300 hover:text-white transition-all duration-200 hover:scale-105">Docs</Link>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 text-gray-300 hover:text-white transition-all duration-200 hover:scale-110"
                >
                  {darkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
                </button>
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

      {/* Hero Section */}
      <div className="relative z-10 flex items-center min-h-[calc(100vh-4rem)] px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium border border-green-500/30"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              READY TO DEPLOY
            </motion.div>
            
            <div className="space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-5xl lg:text-7xl font-bold text-white leading-tight"
              >
                Multi-Cluster
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Kubernetes
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Orchestration
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-xl text-gray-300 max-w-2xl leading-relaxed"
              >
                KubeStellar enables seamless management of workloads across multiple Kubernetes clusters from a single control plane. Deploy, manage, and scale with ease.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-xl shadow-blue-500/25"
              >
                Get Started →
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-slate-800/80 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-700/80 transition-all duration-200 border border-slate-600/50"
              >
                View Documentation
              </motion.button>
            </motion.div>

            {/* Terminal Demo */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="bg-slate-900/80 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 font-mono text-sm shadow-2xl"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 ml-4">terminal</span>
              </div>
              <div className="space-y-2 text-gray-300">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="text-green-400"
                >
                  $ kubectl kubestellar deploy --multi-cluster
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                  className="text-blue-400"
                >
                  INFO Analyzing cluster topology...
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6, duration: 0.5 }}
                  className="text-blue-400"
                >
                  INFO Found 5 connected clusters
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                  className="text-green-400"
                >
                  SUCCESS Workload deployed across all clusters
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 0.5 }}
                  className="text-purple-400"
                >
                  STATUS Monitoring health: ✓ Healthy
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced Cluster Visualization */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[600px]">
              {/* Enhanced background with grid pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)] rounded-3xl"></div>
              
              {/* Central KubeStellar Node */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, duration: 0.8, type: "spring", stiffness: 200 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative">
                  <div className="w-28 h-28 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/30">
                    <Image 
                      src="/KubeStellar-with-Logo-transparent-v2.png" 
                      alt="KubeStellar Logo" 
                      width={48} 
                      height={48}
                      className="w-12 h-12 filter brightness-0 invert"
                    />
                  </div>
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-white font-bold text-sm bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full border border-cyan-500/30">
                    KUBESTELLAR
                  </div>
                  
                  {/* Enhanced pulsing rings */}
                  <div className="absolute inset-0 rounded-full border-2 border-cyan-400/40 animate-ping"></div>
                  <div className="absolute inset-2 rounded-full border border-cyan-400/30 animate-pulse"></div>
                  <div className="absolute -inset-4 rounded-full border border-blue-500/20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </motion.div>

              {/* Enhanced Cluster Nodes with animations */}
              {[
                { position: 'top-12 right-12', color: 'from-green-400 to-emerald-500', label: 'Edge Cluster', delay: 1.4 },
                { position: 'top-1/4 left-8', color: 'from-blue-400 to-indigo-500', label: 'Cloud Cluster', delay: 1.6 },
                { position: 'bottom-1/4 left-16', color: 'from-purple-400 to-violet-500', label: 'On-Prem Cluster', delay: 1.8 },
                { position: 'bottom-12 right-16', color: 'from-orange-400 to-red-500', label: 'Multi-Cloud', delay: 2.0 },
                { position: 'top-16 left-1/2', color: 'from-teal-400 to-cyan-500', label: 'Hybrid Cluster', delay: 2.2 }
              ].map((cluster, index) => (
                <motion.div 
                  key={index} 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: cluster.delay, duration: 0.6, type: "spring" }}
                  className={`absolute ${cluster.position} transform -translate-x-1/2 -translate-y-1/2`}
                >
                  <div className="relative group">
                    <div className={`w-20 h-20 bg-gradient-to-br ${cluster.color} rounded-full flex items-center justify-center shadow-xl backdrop-blur-sm border border-white/20`}>
                      <div className="w-4 h-4 bg-white rounded-full shadow-lg"></div>
                    </div>
                    
                    {/* Enhanced connection lines */}
                    <svg className="absolute top-1/2 left-1/2 w-32 h-32 -z-10 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                      <defs>
                        <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="rgb(34, 211, 238)" stopOpacity="0.6"/>
                          <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.2"/>
                        </linearGradient>
                      </defs>
                      <line 
                        x1="50%" 
                        y1="50%" 
                        x2="50%" 
                        y2="10%" 
                        stroke={`url(#gradient-${index})`} 
                        strokeWidth="2"
                        className="animate-pulse"
                      />
                    </svg>
                    
                    {/* Enhanced hover tooltip */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-900/90 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 border border-slate-700 shadow-xl">
                      {cluster.label}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-slate-900/90"></div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Enhanced Metrics Panel */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.4, duration: 0.6 }}
                className="absolute top-6 right-6 bg-slate-900/80 backdrop-blur-xl rounded-xl p-6 border border-slate-700/50 shadow-2xl"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                  <h3 className="text-cyan-400 font-bold text-sm tracking-wide">CLUSTER METRICS</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">CLUSTERS</span>
                    <span className="text-white font-bold">5 Active</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">WORKLOADS</span>
                    <span className="text-white font-bold">42 Running</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">HEALTH</span>
                    <span className="text-green-400 font-bold flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      98.7%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">LATENCY</span>
                    <span className="text-white font-bold">24ms</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* What is KubeStellar Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 py-24 px-4"
        id="about"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-white">
              What is <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">KubeStellar</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A multi-cluster Kubernetes orchestration platform that simplifies how you manage distributed workloads.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "10x",
                subtitle: "Operational Efficiency",
                description: "Streamline your multi-cluster operations with centralized management and automated deployments.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "Cloud Native",
                subtitle: "CNCF Ecosystem",
                description: "Built on proven cloud-native technologies and fully integrated with the CNCF ecosystem.",
                gradient: "from-cyan-500 to-teal-500"
              },
              {
                title: "Open Source",
                subtitle: "Community Driven",
                description: "Fully open-source with active community contribution and transparent development.",
                gradient: "from-purple-500 to-violet-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white font-bold text-xl">{feature.title.charAt(0)}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-lg text-cyan-400 mb-4">{feature.subtitle}</p>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>

    {/* How It Works Section */}
    <div id="how-it-works">
      <HowItWorks />
    </div>

    {/* Use Cases Section */}
    <div id="use-cases">
      <UseCases />
    </div>

    {/* Call to Action Section */}
    <CallToAction />

    {/* Footer */}
    <Footer />
  </>
  );
}