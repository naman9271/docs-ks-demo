"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface SpaceObject {
  x: number;
  y: number;
  size: number;
  speed: number;
  type: 'planet' | 'star' | 'galaxy' | 'asteroid';
  color: string;
  opacity: number;
}

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const objectsRef = useRef<SpaceObject[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      if (canvas.width <= 0) canvas.width = 1;
      if (canvas.height <= 0) canvas.height = 1;
    };

    const createSpaceObjects = () => {
      if (!canvas || canvas.width <= 0 || canvas.height <= 0) return;
      
      const objects: SpaceObject[] = [];
      
      // Create fewer, more spaced out stars
      const numStars = Math.floor((canvas.width * canvas.height) / 30000);
      for (let i = 0; i < numStars; i++) {
        objects.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speed: Math.random() * 0.2 + 0.05,
          type: 'star',
          color: 'white',
          opacity: Math.random() * 0.6 + 0.2
        });
      }
      
      // Create planets
      const numPlanets = 3 + Math.floor(canvas.width / 800);
      for (let i = 0; i < numPlanets; i++) {
        const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8'];
        objects.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 40 + 20,
          speed: Math.random() * 0.1 + 0.02,
          type: 'planet',
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.4 + 0.3
        });
      }
      
      // Create galaxies
      const numGalaxies = 2;
      for (let i = 0; i < numGalaxies; i++) {
        objects.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 60 + 40,
          speed: Math.random() * 0.05 + 0.01,
          type: 'galaxy',
          color: '#9370DB',
          opacity: Math.random() * 0.3 + 0.1
        });
      }
      
      // Create asteroids
      const numAsteroids = 8;
      for (let i = 0; i < numAsteroids; i++) {
        objects.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 8 + 3,
          speed: Math.random() * 0.3 + 0.1,
          type: 'asteroid',
          color: '#8B7355',
          opacity: Math.random() * 0.5 + 0.3
        });
      }
      
      objectsRef.current = objects;
    };

    const drawSpaceObject = (obj: SpaceObject) => {
      if (!isFinite(obj.x) || !isFinite(obj.y) || !isFinite(obj.size) || obj.size <= 0) {
        return;
      }

      ctx.save();
      
      switch (obj.type) {
        case 'star':
          ctx.beginPath();
          ctx.arc(obj.x, obj.y, obj.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${obj.opacity})`;
          ctx.fill();
          break;
          
        case 'planet':
          // Planet with gradient
          const planetGradient = ctx.createRadialGradient(
            obj.x - obj.size * 0.3, obj.y - obj.size * 0.3, 0,
            obj.x, obj.y, obj.size
          );
          planetGradient.addColorStop(0, obj.color + 'CC');
          planetGradient.addColorStop(1, obj.color + '33');
          
          ctx.beginPath();
          ctx.arc(obj.x, obj.y, obj.size, 0, Math.PI * 2);
          ctx.fillStyle = planetGradient;
          ctx.fill();
          
          // Add planet rings for some planets
          if (Math.random() < 0.3) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${obj.opacity * 0.3})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.ellipse(obj.x, obj.y, obj.size * 1.5, obj.size * 0.3, 0, 0, Math.PI * 2);
            ctx.stroke();
          }
          break;
          
        case 'galaxy':
          // Spiral galaxy effect
          const galaxyGradient = ctx.createRadialGradient(
            obj.x, obj.y, 0,
            obj.x, obj.y, obj.size
          );
          galaxyGradient.addColorStop(0, `rgba(147, 112, 219, ${obj.opacity})`);
          galaxyGradient.addColorStop(0.5, `rgba(75, 0, 130, ${obj.opacity * 0.6})`);
          galaxyGradient.addColorStop(1, `rgba(147, 112, 219, 0)`);
          
          ctx.beginPath();
          ctx.arc(obj.x, obj.y, obj.size, 0, Math.PI * 2);
          ctx.fillStyle = galaxyGradient;
          ctx.fill();
          
          // Add spiral arms
          ctx.strokeStyle = `rgba(147, 112, 219, ${obj.opacity * 0.4})`;
          ctx.lineWidth = 2;
          for (let i = 0; i < 3; i++) {
            ctx.beginPath();
            ctx.arc(obj.x, obj.y, obj.size * (0.3 + i * 0.2), 0, Math.PI * 1.5);
            ctx.stroke();
          }
          break;
          
        case 'asteroid':
          // Irregular asteroid shape
          ctx.fillStyle = `rgba(139, 115, 85, ${obj.opacity})`;
          ctx.beginPath();
          for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            const radius = obj.size * (0.7 + Math.random() * 0.6);
            const x = obj.x + Math.cos(angle) * radius;
            const y = obj.y + Math.sin(angle) * radius;
            
            if (i === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.closePath();
          ctx.fill();
          break;
      }
      
      ctx.restore();
    };

    const drawShootingStar = () => {
      if (!canvas || !ctx || canvas.width <= 0 || canvas.height <= 0) return;
      
      const startX = Math.random() * canvas.width;
      const startY = Math.random() * canvas.height * 0.3;
      const length = 200 + Math.random() * 300;
      const angle = Math.random() * Math.PI / 4 + Math.PI / 8;
      const endX = startX + Math.cos(angle) * length;
      const endY = startY + Math.sin(angle) * length;
      
      if (!isFinite(startX) || !isFinite(startY) || !isFinite(endX) || !isFinite(endY)) {
        return;
      }
      
      const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
      gradient.addColorStop(0.3, 'rgba(147, 197, 253, 0.7)');
      gradient.addColorStop(1, 'rgba(147, 197, 253, 0)');
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
    };

    const animate = () => {
      if (!canvas || !ctx || canvas.width <= 0 || canvas.height <= 0) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw space objects
      objectsRef.current.forEach(obj => {
        // Slow movement for depth
        obj.x += obj.speed;
        
        // Wrap around screen
        if (obj.x > canvas.width + obj.size) {
          obj.x = -obj.size;
        }
        
        drawSpaceObject(obj);
      });
      
      // Add shooting stars occasionally
      if (Math.random() < 0.003) {
        drawShootingStar();
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createSpaceObjects();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createSpaceObjects();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Canvas for space objects */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full -z-20 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0033 25%, #000428 50%, #004e92 75%, #000428 100%)' }}
      />
      
      {/* Animated floating spaceships and astronauts */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div
          animate={{
            x: [0, 100, 200, 150, 50, 0],
            y: [0, -50, -100, -75, -25, 0],
            rotate: [0, 10, -10, 5, -5, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/6 text-6xl opacity-30"
        >
          🛸
        </motion.div>
        
        <motion.div
          animate={{
            x: [0, -80, -160, -120, -40, 0],
            y: [0, 60, 120, 90, 30, 0],
            rotate: [0, -15, 15, -8, 8, 0]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute bottom-1/3 right-1/4 text-5xl opacity-25"
        >
          👨‍🚀
        </motion.div>

        <motion.div
          animate={{
            x: [0, 70, 140, 105, 35, 0],
            y: [0, -40, -80, -60, -20, 0],
            rotate: [0, 8, -8, 4, -4, 0]
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10
          }}
          className="absolute top-1/2 right-1/6 text-4xl opacity-20"
        >
          🚀
        </motion.div>

        <motion.div
          animate={{
            x: [0, -60, -120, -90, -30, 0],
            y: [0, -70, -140, -105, -35, 0],
            rotate: [0, 12, -12, 6, -6, 0]
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 15
          }}
          className="absolute bottom-1/4 left-1/3 text-7xl opacity-15"
        >
          🪐
        </motion.div>
      </div>
    </>
  );
}
