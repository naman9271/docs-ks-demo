"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { GitHubLogoIcon, SunIcon, MoonIcon, CalendarIcon, PersonIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import StarField from "../../components/StarField";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  image?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "KubeStellar 0.23.0: Revolutionizing Multi-Cluster Kubernetes Management",
    excerpt: "Discover the latest features in KubeStellar 0.23.0, including enhanced placement policies, improved performance monitoring, and simplified cluster onboarding.",
    content: "...",
    author: "KubeStellar Team",
    date: "2024-08-10",
    readTime: "8 min read",
    tags: ["Release", "Features", "Kubernetes"],
    featured: true,
    image: "/api/placeholder/600/300"
  },
  {
    id: "2",
    title: "Edge Computing with KubeStellar: A Complete Guide",
    excerpt: "Learn how to deploy and manage workloads across edge locations using KubeStellar's powerful orchestration capabilities.",
    content: "...",
    author: "Sarah Chen",
    date: "2024-08-05",
    readTime: "12 min read",
    tags: ["Edge Computing", "Tutorial", "Best Practices"],
    featured: true
  },
  {
    id: "3",
    title: "Multi-Region Compliance Made Simple",
    excerpt: "Ensuring data residency and regulatory compliance across global Kubernetes deployments with KubeStellar placement policies.",
    content: "...",
    author: "Michael Rodriguez",
    date: "2024-07-28",
    readTime: "6 min read",
    tags: ["Compliance", "Security", "Global Deployment"],
    featured: false
  },
  {
    id: "4",
    title: "Performance Optimization for Multi-Cluster Workloads",
    excerpt: "Best practices and techniques for optimizing performance across distributed Kubernetes clusters using KubeStellar.",
    content: "...",
    author: "Alex Thompson",
    date: "2024-07-20",
    readTime: "10 min read",
    tags: ["Performance", "Optimization", "Best Practices"],
    featured: false
  },
  {
    id: "5",
    title: "Getting Started with KubeStellar: From Zero to Production",
    excerpt: "A comprehensive guide to setting up and deploying your first multi-cluster application with KubeStellar.",
    content: "...",
    author: "Jennifer Park",
    date: "2024-07-15",
    readTime: "15 min read",
    tags: ["Getting Started", "Tutorial", "Deployment"],
    featured: false
  },
  {
    id: "6",
    title: "KubeStellar Community Spotlight: Success Stories",
    excerpt: "Hear from organizations using KubeStellar in production and learn how they're solving complex multi-cluster challenges.",
    content: "...",
    author: "Community Team",
    date: "2024-07-10",
    readTime: "5 min read",
    tags: ["Community", "Case Studies", "Success Stories"],
    featured: false
  }
];

const categories = ["All", "Release", "Tutorial", "Best Practices", "Community", "Case Studies"];

export default function BlogPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.tags.includes(selectedCategory));

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <StarField />
      
      <div className="min-h-screen relative">
        {/* Enhanced cosmic background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/3 rounded-full blur-3xl animate-spin" style={{ animationDuration: '30s' }}></div>
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
                  <Link href="/programs" className="text-gray-300 hover:text-white transition-all duration-200 hover:scale-105">Programs</Link>
                  <Link href="/blog" className="text-cyan-400 font-semibold">Blog</Link>
                  <Link href="/#docs" className="text-gray-300 hover:text-white transition-all duration-200 hover:scale-105">Docs</Link>
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
        <div className="relative z-10 py-24 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 mb-16"
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-white">
                KubeStellar <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Blog</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Insights, tutorials, and updates from the KubeStellar team and community. Learn about multi-cluster Kubernetes orchestration, best practices, and real-world implementations.
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex justify-center space-x-4 mb-16 flex-wrap gap-2"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Featured Posts */}
        {selectedCategory === "All" && featuredPosts.length > 0 && (
          <div className="relative z-10 px-4 mb-24">
            <div className="max-w-7xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-white mb-12"
              >
                Featured Posts
              </motion.h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="group cursor-pointer"
                  >
                    <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                      {post.image && (
                        <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                          <span className="text-4xl">🌌</span>
                        </div>
                      )}
                      <div className="p-8">
                        <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                          <div className="flex items-center space-x-1">
                            <PersonIcon className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <CalendarIcon className="w-4 h-4" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <span>{post.readTime}</span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <motion.div
                            whileHover={{ x: 5 }}
                            className="flex items-center space-x-2 text-cyan-400 font-semibold"
                          >
                            <span>Read more</span>
                            <ArrowRightIcon className="w-4 h-4" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts */}
        <div className="relative z-10 px-4 pb-24">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-12"
            >
              {selectedCategory === "All" ? "Latest Posts" : `${selectedCategory} Posts`}
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <PersonIcon className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed flex-grow">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <span className="text-gray-400 text-sm">
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
