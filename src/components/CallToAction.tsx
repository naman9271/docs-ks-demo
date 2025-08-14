"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function CallToAction() {
  return (
    <div className="py-32 px-4 bg-gradient-to-br from-blue-950 via-purple-950 to-slate-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-5xl lg:text-7xl font-bold text-white">
            Ready to Get <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Started?</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join the growing community of KubeStellar users and contributors.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {/* Quick Installation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">📦</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quick Installation</h3>
              <p className="text-gray-300 mb-6">
                Get up and running with KubeStellar in minutes using our simple installation guide.
              </p>
              <div className="bg-slate-950/80 rounded-lg p-4 font-mono text-sm text-gray-300 mb-6">
                kubectl apply -f https://github.com/kubestellar/kubestellar/releases/latest/download/kubestellar.yaml
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200"
              >
                View installation guide →
              </motion.button>
            </motion.div>

            {/* Join Community */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Join the Community</h3>
              <p className="text-gray-300 mb-6">
                Connect with other users, contributors, and maintainers through Slack, forums, and community calls.
              </p>
              <div className="space-y-3 mb-6">
                <Link 
                  href="#" 
                  className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
                >
                  <span>💬 Slack</span>
                </Link>
                <Link 
                  href="#" 
                  className="flex items-center justify-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-lg transition-colors"
                >
                  <GitHubLogoIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </Link>
              </div>
            </motion.div>

            {/* Explore Documentation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">📚</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Explore Documentation</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive guides, tutorials, and API references to help you master KubeStellar&apos;s capabilities.
              </p>
              <div className="space-y-3 mb-6">
                <div className="bg-slate-950/80 rounded-lg p-3 text-sm">
                  <div className="text-cyan-400 font-semibold">Getting Started</div>
                  <div className="text-gray-400">Tutorials</div>
                  <div className="text-gray-400">API Reference</div>
                </div>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200"
              >
                Browse docs →
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
