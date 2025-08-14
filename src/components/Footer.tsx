"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { GitHubLogoIcon, TwitterLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
  const footerSections = [
    {
      title: "PRODUCT",
      links: [
        { label: "Features", href: "#" },
        { label: "Use Cases", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "Roadmap", href: "#" }
      ]
    },
    {
      title: "RESOURCES",
      links: [
        { label: "Documentation", href: "#" },
        { label: "Tutorials", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Community", href: "#" }
      ]
    },
    {
      title: "COMPANY",
      links: [
        { label: "About", href: "#" },
        { label: "Team", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800/50">
      {/* Contact Section */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-white mb-6">
                Get in <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                Have questions about KubeStellar? We're here to help!
              </p>
              
              {/* Contact Cards */}
              <div className="space-y-4">
                <Link href="mailto:info@kubestellar.io" className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-colors group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email Us</div>
                    <div className="text-cyan-400">info@kubestellar.io</div>
                  </div>
                </Link>
                
                <Link href="#" className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-colors group">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">💬</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Join Our Community</div>
                    <div className="text-purple-400">kubestellar.slack.com</div>
                  </div>
                </Link>
                
                <Link href="https://github.com/kubestellar" className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-colors group">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <GitHubLogoIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">GitHub</div>
                    <div className="text-green-400">github.com/kubestellar</div>
                  </div>
                </Link>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
            >
              <h4 className="text-2xl font-bold text-white mb-6">Send us a message</h4>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
                <select className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors">
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Partnership</option>
                  <option>Press Inquiry</option>
                </select>
                <textarea
                  rows={4}
                  placeholder="Your message"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                ></textarea>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="privacy" className="rounded" />
                  <label htmlFor="privacy" className="text-sm text-gray-400">
                    I agree to the <Link href="#" className="text-cyan-400 hover:text-cyan-300">privacy policy</Link>
                  </label>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <Image 
                  src="/KubeStellar-with-Logo-transparent-v2.png" 
                  alt="KubeStellar Logo" 
                  width={200} 
                  height={55}
                /> </Link>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Multi-cluster Kubernetes orchestration platform that simplifies distributed workload management across diverse infrastructure.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors">
                  <TwitterLogoIcon className="w-5 h-5 text-gray-400 hover:text-white" />
                </Link>
                <Link href="#" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors">
                  <LinkedInLogoIcon className="w-5 h-5 text-gray-400 hover:text-white" />
                </Link>
                <Link href="#" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors">
                  <GitHubLogoIcon className="w-5 h-5 text-gray-400 hover:text-white" />
                </Link>
                <Link href="#" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors">
                  <span className="text-gray-400 hover:text-white text-sm">💬</span>
                </Link>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="text-white font-bold text-sm tracking-wide mb-6">{section.title}</h4>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-bold text-sm tracking-wide mb-6">STAY UPDATED</h4>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                >
                  Subscribe →
                </motion.button>
                <p className="text-xs text-gray-500">
                  We respect your privacy. No spam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/50 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2023 KubeStellar. All rights reserved. Apache 2.0 License.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
