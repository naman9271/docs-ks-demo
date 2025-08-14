"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      step: "1",
      title: "Define Workloads",
      description: "Create Kubernetes resources in the KubeStellar control plane using familiar tools and manifests. Tag resources with placement constraints and policies.",
      code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: example-app
  annotations:
    kubestellar.io/placement: "region=us-east,tier=prod"`,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      step: "2",
      title: "Configure Distribution",
      description: "Set up placement policies and distribution rules. Define which workloads should go to which clusters based on your requirements.",
      code: `apiVersion: control.kubestellar.io/v1beta1
kind: BindingPolicy
metadata:
  name: example-policy
spec:
  clusterSelectors:
    - matchLabels:
        region: us-east`,
      gradient: "from-purple-500 to-violet-500"
    },
    {
      step: "3",
      title: "Deploy & Monitor",
      description: "KubeStellar automatically distributes your workloads across the selected clusters and provides real-time monitoring and health checks.",
      code: `$ kubectl apply -f workload.yaml
✓ Workload distributed to 3 clusters
✓ Health checks: All passing
✓ Status: Running successfully`,
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="py-24 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            How It <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            KubeStellar orchestrates your multi-cluster environment with a simple, powerful architecture.
          </p>
        </motion.div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-xl flex items-center justify-center text-white font-bold text-xl`}>
                    {step.step}
                  </div>
                  <h3 className="text-3xl font-bold text-white">{step.title}</h3>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Code/Visual */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 shadow-2xl">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-400 ml-4 text-sm">terminal</span>
                  </div>
                  <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
                    <code>{step.code}</code>
                  </pre>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
