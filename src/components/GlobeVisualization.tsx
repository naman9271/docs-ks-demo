"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Globe, Folder, Server, Cloud, Database, Network } from 'lucide-react';

interface GlobeVisualizationProps {
  className?: string;
}

export default function GlobeVisualization({ className = "" }: GlobeVisualizationProps) {
  const globeRef = useRef<HTMLDivElement>(null);

  const clusters = [
    { 
      id: 1, 
      name: 'US-East', 
      position: { top: '30%', left: '25%' }, 
      color: 'from-blue-400 to-indigo-500',
      icon: Cloud,
      folders: 8,
      delay: 0.2
    },
    { 
      id: 2, 
      name: 'EU-West', 
      position: { top: '25%', left: '50%' }, 
      color: 'from-green-400 to-emerald-500',
      icon: Server,
      folders: 12,
      delay: 0.4
    },
    { 
      id: 3, 
      name: 'Asia-Pacific', 
      position: { top: '45%', left: '75%' }, 
      color: 'from-purple-400 to-violet-500',
      icon: Database,
      folders: 6,
      delay: 0.6
    },
    { 
      id: 4, 
      name: 'Edge-Cluster', 
      position: { top: '60%', left: '35%' }, 
      color: 'from-orange-400 to-red-500',
      icon: Network,
      folders: 4,
      delay: 0.8
    },
    { 
      id: 5, 
      name: 'Multi-Cloud', 
      position: { top: '70%', left: '65%' }, 
      color: 'from-teal-400 to-cyan-500',
      icon: Globe,
      folders: 10,
      delay: 1.0
    }
  ];

  return (
    <div className={`relative w-full h-96 lg:h-[600px] ${className}`}>
      {/* Enhanced background with grid pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)] rounded-3xl"></div>
      
      {/* Globe wireframe background */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="relative w-80 h-80 lg:w-96 lg:h-96">
          {/* Globe wireframe circles */}
          <div className="absolute inset-0 border-2 border-cyan-400/20 rounded-full"></div>
          <div className="absolute inset-4 border border-cyan-400/15 rounded-full"></div>
          <div className="absolute inset-8 border border-cyan-400/10 rounded-full"></div>
          
          {/* Latitude lines */}
          <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent rounded-full"></div>
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent rounded-full"></div>
          <div className="absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent rounded-full"></div>
          
          {/* Longitude lines */}
          <div className="absolute left-1/4 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent rounded-full"></div>
          <div className="absolute left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent rounded-full"></div>
          <div className="absolute left-3/4 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent rounded-full"></div>
        </div>
      </motion.div>

      {/* Central KubeStellar Hub */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, duration: 0.8, type: "spring", stiffness: 200 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <div className="relative">
          <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/30">
            <Globe className="w-8 h-8 text-white" />
          </div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white font-bold text-xs bg-slate-900/80 backdrop-blur-sm px-2 py-1 rounded-full border border-cyan-500/30">
            KUBESTELLAR
          </div>
          
          {/* Pulsing rings */}
          <div className="absolute inset-0 rounded-full border-2 border-cyan-400/40 animate-ping"></div>
          <div className="absolute inset-2 rounded-full border border-cyan-400/30 animate-pulse"></div>
        </div>
      </motion.div>

      {/* Regional Clusters with Folder Animations */}
      {clusters.map((cluster) => (
        <motion.div
          key={cluster.id}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: cluster.delay, duration: 0.6, type: "spring" }}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{ top: cluster.position.top, left: cluster.position.left }}
        >
          <div className="relative group">
            {/* Main cluster node */}
            <div className={`w-16 h-16 bg-gradient-to-br ${cluster.color} rounded-full flex items-center justify-center shadow-xl border border-white/20`}>
              <cluster.icon className="w-6 h-6 text-white" />
            </div>
            
            {/* Floating folder animations around each cluster */}
            {Array.from({ length: cluster.folders }).map((_, folderIndex) => {
              const angle = (folderIndex / cluster.folders) * 360;
              const radius = 40;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              
              return (
                <motion.div
                  key={folderIndex}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [0, 1, 0.8, 1],
                    opacity: [0, 1, 0.7, 1],
                    x: [0, x * 0.5, x],
                    y: [0, y * 0.5, y],
                  }}
                  transition={{
                    delay: cluster.delay + folderIndex * 0.1,
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 2 + folderIndex * 0.2,
                    ease: "easeInOut"
                  }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    zIndex: 5
                  }}
                >
                  <div className="relative">
                    <Folder 
                      className="w-4 h-4 text-yellow-400 drop-shadow-lg" 
                      fill="currentColor"
                    />
                    {/* Folder data animation */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: folderIndex * 0.3
                      }}
                      className="absolute -inset-1 bg-yellow-400/20 rounded-sm"
                    />
                  </div>
                </motion.div>
              );
            })}

            {/* Connection lines to center */}
            <svg className="absolute top-1/2 left-1/2 w-32 h-32 -z-10 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <defs>
                <linearGradient id={`gradient-${cluster.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgb(34, 211, 238)" stopOpacity="0.6"/>
                  <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.2"/>
                </linearGradient>
              </defs>
              <line 
                x1="50%" 
                y1="50%" 
                x2="50%" 
                y2="10%" 
                stroke={`url(#gradient-${cluster.id})`} 
                strokeWidth="2"
                className="animate-pulse"
              />
            </svg>
            
            {/* Cluster info tooltip */}
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-slate-900/90 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 border border-slate-700 shadow-xl">
              <div className="font-semibold text-cyan-400">{cluster.name}</div>
              <div className="text-gray-300">{cluster.folders} workloads</div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-slate-900/90"></div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Data flow animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute inset-0"
      >
        {clusters.map((cluster, index) => (
          <motion.div
            key={`flow-${cluster.id}`}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            style={{ 
              top: cluster.position.top, 
              left: cluster.position.left,
              transform: 'translate(-50%, -50%)'
            }}
            animate={{
              x: [0, -100, -200],
              y: [0, -50, -100],
              scale: [1, 0.5, 0],
              opacity: [1, 0.5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.5,
              ease: "easeOut"
            }}
          />
        ))}
      </motion.div>

      {/* Enhanced Metrics Panel */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.4, duration: 0.6 }}
        className="absolute top-6 right-6 bg-slate-900/80 backdrop-blur-xl rounded-xl p-6 border border-slate-700/50 shadow-2xl z-20"
      >
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          <h3 className="text-cyan-400 font-bold text-sm tracking-wide">GLOBAL METRICS</h3>
        </div>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-gray-400 flex items-center">
              <Globe className="w-3 h-3 mr-2" />
              REGIONS
            </span>
            <span className="text-white font-bold">5 Active</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 flex items-center">
              <Folder className="w-3 h-3 mr-2" />
              WORKLOADS
            </span>
            <span className="text-white font-bold">40 Deployed</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 flex items-center">
              <Server className="w-3 h-3 mr-2" />
              HEALTH
            </span>
            <span className="text-green-400 font-bold flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              98.7%
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 flex items-center">
              <Network className="w-3 h-3 mr-2" />
              LATENCY
            </span>
            <span className="text-white font-bold">24ms</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
