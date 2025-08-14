"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { GitHubLogoIcon, SunIcon, MoonIcon, ArrowRightIcon, StarIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import StarField from "../../components/StarField";
import NavHeader from "../../components/nav_header";

interface Program {
  id: string;
  title: string;
  description: string;
  type: "Ambassador" | "Contributor" | "Enterprise" | "Community";
  duration: string;
  participants: number;
  benefits: string[];
  requirements: string[];
  applicationOpen: boolean;
  featured: boolean;
  gradient: string;
  icon: string;
}

const programs: Program[] = [
  {
    id: "gsoc",
    title: "Google Summer of Code",
    description: "Participate in GSoC with KubeStellar. Work on cutting-edge multi-cluster orchestration features with mentorship from core maintainers.",
    type: "Community",
    duration: "3 months",
    participants: 12,
    benefits: [
      "Stipend from Google",
      "Dedicated mentor from KubeStellar team",
      "Real-world open source experience",
      "Certificate and recognition",
      "Potential for long-term involvement",
      "Network with global open source community"
    ],
    requirements: [
      "University student or recent graduate",
      "Strong programming skills in Go",
      "Basic understanding of Kubernetes",
      "Passion for cloud-native technologies",
      "Good English communication skills"
    ],
    applicationOpen: true,
    featured: true,
    gradient: "from-red-500 to-pink-500",
    icon: "☀️"
  },
  {
    id: "lfx",
    title: "LFX Mentorship",
    description: "Join the Linux Foundation's LFX Mentorship program with KubeStellar. Get paid to contribute to open source while learning from industry experts.",
    type: "Community",
    duration: "12 weeks",
    participants: 8,
    benefits: [
      "Paid mentorship stipend",
      "Industry-standard development experience",
      "Direct access to maintainer team",
      "Career guidance and networking",
      "Open source portfolio building",
      "Potential job opportunities"
    ],
    requirements: [
      "Students or early career professionals",
      "Experience with containerization",
      "Knowledge of distributed systems",
      "Git/GitHub proficiency",
      "Available 20+ hours per week"
    ],
    applicationOpen: true,
    featured: true,
    gradient: "from-indigo-500 to-blue-500",
    icon: "🚀"
  },
  {
    id: "esoc",
    title: "European Summer of Code",
    description: "ESoC initiative promoting diversity and open source contribution across Europe. Work on KubeStellar while building an inclusive tech community.",
    type: "Community",
    duration: "10 weeks",
    participants: 15,
    benefits: [
      "Diversity-focused mentorship",
      "Inclusive community environment",
      "Professional development workshops",
      "Networking with underrepresented groups",
      "Certificate and portfolio projects",
      "Follow-up career support"
    ],
    requirements: [
      "From underrepresented groups in tech",
      "Basic programming knowledge",
      "Interest in cloud-native technologies",
      "Commitment to inclusive practices",
      "Willingness to mentor others"
    ],
    applicationOpen: true,
    featured: false,
    gradient: "from-purple-500 to-violet-500",
    icon: "🌈"
  },
  {
    id: "ifos",
    title: "IFOS Internship Program",
    description: "International Free and Open Source Software internship. Contribute to KubeStellar while learning enterprise-grade development practices.",
    type: "Community",
    duration: "6 months",
    participants: 10,
    benefits: [
      "Long-term project involvement",
      "Enterprise development practices",
      "International collaboration experience",
      "Technical writing opportunities",
      "Conference speaking opportunities",
      "Open source leadership development"
    ],
    requirements: [
      "Computer science or related field student",
      "Strong technical foundation",
      "Interest in distributed systems",
      "Good documentation skills",
      "Collaborative mindset"
    ],
    applicationOpen: true,
    featured: false,
    gradient: "from-teal-500 to-green-500",
    icon: "🌍"
  },
  {
    id: "enterprise",
    title: "Enterprise Partner Program",
    description: "Partner with KubeStellar to deliver enterprise-grade multi-cluster solutions. Get technical support, training, and go-to-market resources.",
    type: "Enterprise",
    duration: "12 months",
    participants: 23,
    benefits: [
      "Technical enablement and training",
      "Dedicated technical account manager",
      "Co-marketing opportunities",
      "Early access to enterprise features",
      "Integration support and consulting",
      "Revenue sharing opportunities"
    ],
    requirements: [
      "Established technology consulting business",
      "Kubernetes and cloud-native expertise",
      "Customer base interested in multi-cluster solutions",
      "Sales and marketing capabilities",
      "Commitment to KubeStellar certification"
    ],
    applicationOpen: true,
    featured: false,
    gradient: "from-amber-500 to-orange-500",
    icon: "�"
  },
  {
    id: "community",
    title: "Community Champions",
    description: "Help grow and nurture the KubeStellar community. Organize events, moderate discussions, and help newcomers get started with multi-cluster Kubernetes.",
    type: "Community",
    duration: "6 months",
    participants: 89,
    benefits: [
      "Community leadership recognition",
      "Event planning and hosting support",
      "Access to community metrics and insights",
      "Special community champion badge",
      "Networking with other champions",
      "Invitation to annual community summit"
    ],
    requirements: [
      "Active participation in KubeStellar community",
      "Experience organizing or moderating communities",
      "Strong interpersonal and communication skills",
      "Passion for helping others learn",
      "Regular availability for community activities"
    ],
    applicationOpen: true,
    featured: false,
    gradient: "from-rose-500 to-red-500",
    icon: "👥"
  }
];

export default function ProgramsPage() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <StarField />
      
      {/* Floating Spaceship/UFO Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-5">
        <motion.div
          animate={{
            x: [0, 100, 200, 150, 50, 0],
            y: [0, -50, -100, -150, -80, 0],
            rotate: [0, 10, -10, 5, -5, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 text-9xl opacity-35"
        >
          🛸
        </motion.div>
        
        <motion.div
          animate={{
            x: [0, -80, -160, -120, -40, 0],
            y: [0, 60, 120, 180, 90, 0],
            rotate: [0, -15, 15, -10, 10, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute top-1/2 right-1/3 text-8xl opacity-30"
        >
          🚀
        </motion.div>

        <motion.div
          animate={{
            x: [0, 120, 240, 180, 60, 0],
            y: [0, -80, -160, -200, -100, 0],
            rotate: [0, 20, -20, 15, -15, 0]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10
          }}
          className="absolute bottom-1/3 left-1/2 text-7xl opacity-25"
        >
          🛸
        </motion.div>
      </div>
      
      <div className="min-h-screen relative">
        {/* Enhanced cosmic background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/3 rounded-full blur-3xl animate-spin" style={{ animationDuration: '30s' }}></div>
        </div>

        {/* Navigation Header */}
        <NavHeader currentPage="programs" darkMode={darkMode} setDarkMode={setDarkMode} showThemeToggle={true} />

        {/* Hero Section */}
        <div className="relative z-10 py-24 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 mb-16"
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-white">
                KubeStellar <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Programs</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Join our community programs and help shape the future of multi-cluster Kubernetes orchestration.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="grid md:grid-cols-3 gap-8 mb-16"
            >
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <div className="text-3xl font-bold text-cyan-400 mb-2">284+</div>
                <div className="text-gray-300">Active Participants</div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <div className="text-3xl font-bold text-purple-400 mb-2">6</div>
                <div className="text-gray-300">Program Tracks</div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
                <div className="text-gray-300">Countries Represented</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="relative z-10 px-4 pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                >
                  <Link href={`/programs/${program.id}`}>
                    <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 h-full">
                      <div className={`h-2 bg-gradient-to-r ${program.gradient}`}></div>
                      <div className="p-8">
                        <div className="flex items-center space-x-4 mb-6">
                          <div className={`w-16 h-16 bg-gradient-to-br ${program.gradient} rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                            {program.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                              {program.title}
                            </h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-400">
                              <span>{program.duration}</span>
                              <span>•</span>
                              <span>{program.participants} participants</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {program.description}
                        </p>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-white font-semibold mb-2">Key Benefits:</h4>
                            <ul className="text-gray-300 text-sm space-y-1">
                              {program.benefits.slice(0, 3).map((benefit, i) => (
                                <li key={i} className="flex items-center">
                                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className={`w-3 h-3 rounded-full ${program.applicationOpen ? 'bg-green-400' : 'bg-red-400'}`}></div>
                              <span className="text-sm text-gray-400">
                                {program.applicationOpen ? 'Applications Open' : 'Applications Closed'}
                              </span>
                            </div>
                            
                            <motion.div
                              whileHover={{ x: 5 }}
                              className="flex items-center space-x-2 text-cyan-400 font-semibold"
                            >
                              <span>Learn more</span>
                              <ArrowRightIcon className="w-4 h-4" />
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
