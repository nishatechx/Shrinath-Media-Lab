import React, { useEffect, useRef } from 'react';

export const Particles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let mouse = { x: -1000, y: -1000 };

    let scrollY = 0;
    
    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    // Initial scroll position
    scrollY = window.scrollY;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      baseX: number;
      baseY: number;

      constructor() {
        this.x = Math.random() * (canvas?.width || 0);
        this.y = Math.random() * (canvas?.height || 0);
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
      }

      getDrawY() {
        if (!canvas) return this.y;
        let drawY = (this.y - scrollY * 0.5) % canvas.height;
        if (drawY < 0) drawY += canvas.height;
        return drawY;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > (canvas?.width || 0)) this.x = 0;
        else if (this.x < 0) this.x = canvas?.width || 0;

        if (this.y > (canvas?.height || 0)) this.y = 0;
        else if (this.y < 0) this.y = canvas?.height || 0;

        // Interaction with mouse (mouse interacts with draw position)
        const drawY = this.getDrawY();
        const dx = mouse.x - this.x;
        const dy = mouse.y - drawY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 200;
        
        if (distance < maxDist) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (maxDist - distance) / maxDist;
          const directionX = forceDirectionX * force * 2;
          const directionY = forceDirectionY * force * 2;
          this.x -= directionX;
          this.y -= directionY; // modifies real y, not draw Y, but it's fine for simple effect
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = 'rgba(56, 189, 248, 0.6)'; // cyan-400 equivalent
        ctx.beginPath();
        ctx.arc(this.x, this.getDrawY(), this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const numberOfParticles = Math.floor((window.innerWidth * window.innerHeight) / 10000);
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    const connect = () => {
      if (!ctx) return;
      const maxDistance = 160;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const pb = particles[b];
          const pa = particles[a];
          
          const paxy = { x: pa.x, y: pa.getDrawY() };
          const pbxy = { x: pb.x, y: pb.getDrawY() };

          const dx = paxy.x - pbxy.x;
          const dy = paxy.y - pbxy.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            ctx.strokeStyle = `rgba(56, 189, 248, ${opacity * 0.4})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(paxy.x, paxy.y);
            ctx.lineTo(pbxy.x, pbxy.y);
            ctx.stroke();
          }
        }
        
        // Connect to mouse
        const pa_drawY = particles[a].getDrawY();
        const dxMouse = particles[a].x - mouse.x;
        const dyMouse = pa_drawY - mouse.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < 200) {
          const opacity = 1 - (distMouse / 200);
          ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.5})`; // blue-500 equivalent
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, pa_drawY);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
    };

    const animate = () => {
      if (!canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
};
