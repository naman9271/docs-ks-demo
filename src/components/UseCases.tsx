"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function UseCases() {
  const useCases = [
    {
      title: "Edge Computing",
      description: "Deploy applications across edge locations with centralized management. Ideal for retail, manufacturing, and telecom with distributed infrastructure.",
      features: ["Low-latency deployments", "Offline resilience", "Centralized monitoring"],
      gradient: "from-blue-500 to-cyan-500",
      icon: "🌐"
    },
    {
      title: "Multi-Region Compliance",
      description: "Deploy applications with specific regional compliance requirements. Ensure data residency and regulatory compliance across global operations.",
      features: ["Data sovereignty", "Regulatory compliance", "Regional policies"],
      gradient: "from-purple-500 to-violet-500",
      icon: "🔒"
    },
    {
      title: "Hybrid/Multi-Cloud",
      description: "Seamlessly manage workloads across multiple cloud providers and on-premises infrastructure with unified policies and consistent experiences.",
      features: ["Cloud portability", "Vendor independence", "Cost optimization"],
      gradient: "from-green-500 to-emerald-500",
      icon: "⚡"
    }
  ];

  return (
    <div className="py-24 px-4 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Use <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Cases</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how organizations leverage KubeStellar for their multi-cluster needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="h-full bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 overflow-hidden">
                {/* Header with gradient */}
                <div className={`h-2 bg-gradient-to-r ${useCase.gradient}`}></div>
                
                <div className="p-8">
                  {/* Icon and Title */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${useCase.gradient} rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                      {useCase.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{useCase.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {useCase.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {useCase.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${useCase.gradient} rounded-full`}></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <motion.button 
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors group"
                  >
                    <span className="font-semibold">Learn more</span>
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
