"use client";

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  opacity: number;
  speed: number;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      const stars: Star[] = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 25000); // Much fewer stars
      
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 1000,
          size: Math.random() * 1.5 + 0.3, // Smaller stars
          opacity: Math.random() * 0.4 + 0.1, // Lower opacity
          speed: Math.random() * 0.3 + 0.05 // Slower movement
        });
      }
      
      starsRef.current = stars;
    };

    const drawStar = (star: Star) => {
      const x = star.x;
      const y = star.y;
      const size = star.size * (1000 / (1000 - star.z));
      
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      
      // Create gradient for star glow
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 3);
      gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
      gradient.addColorStop(0.5, `rgba(147, 197, 253, ${star.opacity * 0.5})`);
      gradient.addColorStop(1, 'rgba(147, 197, 253, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Add twinkling effect
      if (Math.random() < 0.01) {
        ctx.beginPath();
        ctx.arc(x, y, size * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 197, 253, ${star.opacity * 0.3})`;
        ctx.fill();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create nebula-like background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height)
      );
      gradient.addColorStop(0, 'rgba(59, 130, 246, 0.03)');
      gradient.addColorStop(0.5, 'rgba(147, 51, 234, 0.02)');
      gradient.addColorStop(1, 'rgba(15, 23, 42, 0.05)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw stars
      starsRef.current.forEach(star => {
        // Move stars
        star.z -= star.speed;
        
        // Reset star if it's too close
        if (star.z <= 0) {
          star.z = 1000;
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
        }
        
        // No twinkling - keep stars static
        
        drawStar(star);
      });
      
      // Add shooting stars more frequently
      if (Math.random() < 0.005) {
        drawShootingStar();
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    const drawShootingStar = () => {
      const startX = Math.random() * canvas.width;
      const startY = Math.random() * canvas.height * 0.3; // Start higher up
      const length = 150 + Math.random() * 250; // Longer trails
      const angle = Math.random() * Math.PI / 3 + Math.PI / 6; // Diagonal movement
      const endX = startX + Math.cos(angle) * length;
      const endY = startY + Math.sin(angle) * length;
      
      // Validate coordinates
      if (!isFinite(startX) || !isFinite(startY) || !isFinite(endX) || !isFinite(endY)) {
        return;
      }
      
      const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
      gradient.addColorStop(0.3, 'rgba(147, 197, 253, 0.7)');
      gradient.addColorStop(0.7, 'rgba(59, 130, 246, 0.4)');
      gradient.addColorStop(1, 'rgba(147, 197, 253, 0)');
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
      
      // Add a bright core
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(startX + Math.cos(angle) * length * 0.3, startY + Math.sin(angle) * length * 0.3);
      ctx.stroke();
    };

    resizeCanvas();
    createStars();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createStars();
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
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
      style={{ background: 'linear-gradient(135deg, #0c0a1e 0%, #1a0b2e 25%, #16213e 50%, #0f3460 75%, #0e1428 100%)' }}
    />
  );
}
