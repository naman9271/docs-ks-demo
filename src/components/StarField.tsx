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
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Validate dimensions
      if (isFinite(width) && isFinite(height) && width > 0 && height > 0) {
        canvas.width = width;
        canvas.height = height;
      } else {
        // Fallback to safe dimensions
        canvas.width = 1920;
        canvas.height = 1080;
      }
    };

    const createStars = () => {
      const stars: Star[] = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 25000); // Much fewer stars
      
      for (let i = 0; i < numStars; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const z = Math.random() * 1000;
        const size = Math.random() * 1.5 + 0.3;
        const opacity = Math.random() * 0.4 + 0.1;
        const speed = Math.random() * 0.3 + 0.05;
        
        // Only add star if all values are finite
        if (isFinite(x) && isFinite(y) && isFinite(z) && isFinite(size) && isFinite(opacity) && isFinite(speed)) {
          stars.push({
            x,
            y,
            z,
            size,
            opacity,
            speed
          });
        }
      }
      
      starsRef.current = stars;
    };

    const drawStar = (star: Star) => {
      const x = star.x;
      const y = star.y;
      const zDistance = Math.max(1, 1000 - star.z); // Prevent division by zero/negative
      const size = Math.max(0.1, star.size * (1000 / zDistance));
      
      // Validate all values are finite
      if (!isFinite(x) || !isFinite(y) || !isFinite(size) || size <= 0) {
        return;
      }
      
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      
      // Create gradient for star glow with validated radius
      const gradientRadius = Math.max(1, size * 3);
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, gradientRadius);
      gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
      gradient.addColorStop(0.5, `rgba(147, 197, 253, ${star.opacity * 0.5})`);
      gradient.addColorStop(1, 'rgba(147, 197, 253, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Add twinkling effect
      if (Math.random() < 0.01) {
        const twinkleRadius = size * 2;
        if (isFinite(twinkleRadius) && twinkleRadius > 0) {
          ctx.beginPath();
          ctx.arc(x, y, twinkleRadius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(147, 197, 253, ${star.opacity * 0.3})`;
          ctx.fill();
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create nebula-like background with validation
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxRadius = Math.max(canvas.width, canvas.height);
      
      if (isFinite(centerX) && isFinite(centerY) && isFinite(maxRadius) && maxRadius > 0) {
        const gradient = ctx.createRadialGradient(
          centerX, centerY, 0,
          centerX, centerY, maxRadius
        );
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.03)');
        gradient.addColorStop(0.5, 'rgba(147, 51, 234, 0.02)');
        gradient.addColorStop(1, 'rgba(15, 23, 42, 0.05)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      
      // Update and draw stars
      starsRef.current.forEach(star => {
        // Move stars
        star.z -= star.speed;
        
        // Reset star if it's too close
        if (star.z <= 0) {
          star.z = 1000;
          const newX = Math.random() * canvas.width;
          const newY = Math.random() * canvas.height;
          
          // Validate new positions
          if (isFinite(newX) && isFinite(newY)) {
            star.x = newX;
            star.y = newY;
          } else {
            // Fallback to safe positions
            star.x = canvas.width / 2;
            star.y = canvas.height / 2;
          }
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
