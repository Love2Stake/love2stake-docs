import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css';

const BlockchainAnimation = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const connectionsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let connections = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    // Particle class representing blockchain nodes
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.offsetWidth;
        this.y = Math.random() * canvas.offsetHeight;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 3 + 2;
        this.opacity = Math.random() * 0.5 + 0.5;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.offsetWidth) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.offsetHeight) this.vy *= -1;

        // Keep within bounds
        this.x = Math.max(0, Math.min(canvas.offsetWidth, this.x));
        this.y = Math.max(0, Math.min(canvas.offsetHeight, this.y));

        // Update pulse
        this.pulsePhase += this.pulseSpeed;
      }

      draw(ctx) {
        const pulse = Math.sin(this.pulsePhase) * 0.3 + 0.7;
        const currentRadius = this.radius * pulse;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(144, 235, 175, ${this.opacity * pulse})`;
        ctx.fill();
        
        // Add glow effect
        ctx.beginPath();
        ctx.arc(this.x, this.y, currentRadius * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(144, 235, 175, ${this.opacity * 0.1 * pulse})`;
        ctx.fill();
      }
    }

    // Initialize particles
    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(50, Math.floor(canvas.offsetWidth / 20));
      
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    // Find connections between nearby particles
    const updateConnections = () => {
      connections = [];
      const maxDistance = 120;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            connections.push({
              p1: particles[i],
              p2: particles[j],
              distance: distance,
              opacity: (maxDistance - distance) / maxDistance
            });
          }
        }
      }
    };

    // Draw connections between particles
    const drawConnections = (ctx) => {
      connections.forEach(connection => {
        ctx.beginPath();
        ctx.moveTo(connection.p1.x, connection.p1.y);
        ctx.lineTo(connection.p2.x, connection.p2.y);
        ctx.strokeStyle = `rgba(144, 235, 175, ${connection.opacity * 0.3})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Update particles
      particles.forEach(particle => particle.update());

      // Update connections
      updateConnections();

      // Draw connections first (behind particles)
      drawConnections(ctx);

      // Draw particles
      particles.forEach(particle => particle.draw(ctx));

      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    initParticles();
    animate();

    // Handle resize
    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.animationContainer}>
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        aria-hidden="true"
      />
    </div>
  );
};

export default BlockchainAnimation;