import React, { useEffect, useRef } from 'react';

function StarCanvas({ visible }) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let stars = [];
    let meteors = [];
    let bigElements = [];
    
    const STAR_COUNT = 260;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Initialize regular stars with some size variety
    const createStars = () => {
      stars = Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        // 90% small, 10% slightly bigger for depth
        r: Math.random() > 0.9 ? Math.random() * 1.5 + 0.8 : Math.random() * 0.8 + 0.2,
        opacity: Math.random() * 0.6 + 0.4, // Increased base opacity for brighter stars
        twinkleSpeed: Math.random() * 0.008 + 0.003,
        twinkleOffset: Math.random() * Math.PI * 2,
        driftX: (Math.random() - 0.5) * 0.03,
        driftY: (Math.random() - 0.5) * 0.03,
      }));
    };
    createStars();

    // Create a new meteor (shooting star)
    const spawnMeteor = () => {
      // Pick a random starting edge (0: top, 1: right, 2: left)
      const edge = Math.floor(Math.random() * 3);
      let x, y, angle;

      if (edge === 0) { // Top edge
        x = Math.random() * canvas.width;
        y = -50;
        // Angle downwards (between 45 deg and 135 deg)
        angle = Math.PI * 0.25 + Math.random() * (Math.PI * 0.5); 
      } else if (edge === 1) { // Right edge
        x = canvas.width + 50;
        y = Math.random() * (canvas.height * 0.6);
        // Angle down-left
        angle = Math.PI * 0.75 + Math.random() * (Math.PI * 0.25);
      } else { // Left edge
        x = -50;
        y = Math.random() * (canvas.height * 0.6);
        // Angle down-right
        angle = Math.random() * (Math.PI * 0.25);
      }
      
      // Slower speed (was 10-22, now 4-10)
      const speed = Math.random() * 6 + 4; 
      
      meteors.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        len: Math.random() * 60 + 30, // Slightly shorter tail for slower speed
        thickness: Math.random() * 1.5 + 0.5,
        life: 1.0, 
        decay: Math.random() * 0.01 + 0.005 // slower fade to match slower speed
      });
    };

    // Create a new big element (comet/planet/nebula wisp)
    const spawnBigElement = () => {
      // Come from edges
      const isLeft = Math.random() > 0.5;
      const x = isLeft ? -50 : canvas.width + 50;
      const y = Math.random() * canvas.height;
      const vx = (isLeft ? 1 : -1) * (Math.random() * 0.2 + 0.05);
      const vy = (Math.random() - 0.5) * 0.1;
      
      bigElements.push({
        x, y, vx, vy,
        r: Math.random() * 3 + 2, // 2 to 5 px radius
        opacity: Math.random() * 0.4 + 0.2,
        glow: Math.random() * 12 + 8
      });
    };

    let tick = 0;
    const draw = () => {
      tick += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Randomly spawn meteors and big elements
      if (Math.random() < 0.0015) spawnMeteor(); // Rare meteor (roughly 1 every ~11 seconds at 60fps)
      if (Math.random() < 0.002 && bigElements.length < 4) spawnBigElement(); // Max 4 big elements

      // 1. Draw regular stars
      stars.forEach(star => {
        const alpha = star.opacity + Math.sin(tick * star.twinkleSpeed + star.twinkleOffset) * 0.2;
        star.x += star.driftX;
        star.y += star.driftY;
        
        // Wrap around
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        // Lighter, brighter gold/white color for higher visibility
        ctx.fillStyle = `rgba(220, 195, 160, ${Math.max(0, Math.min(1, alpha))})`;
        ctx.fill();
      });

      // 2. Draw big drifting elements (with glow)
      for (let i = bigElements.length - 1; i >= 0; i--) {
        let b = bigElements[i];
        b.x += b.vx;
        b.y += b.vy;
        
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        // Soft glowing effect
        ctx.shadowBlur = b.glow;
        ctx.shadowColor = `rgba(149, 116, 82, ${b.opacity * 1.5})`;
        ctx.fillStyle = `rgba(149, 116, 82, ${b.opacity})`;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
        
        // Remove if way off screen
        if (b.x < -100 || b.x > canvas.width + 100 || b.y < -100 || b.y > canvas.height + 100) {
          bigElements.splice(i, 1);
        }
      }

      // 3. Draw meteors (shooting stars)
      for (let i = meteors.length - 1; i >= 0; i--) {
        let m = meteors[i];
        m.x += m.vx;
        m.y += m.vy;
        m.life -= m.decay;

        if (m.life <= 0 || m.x < -100 || m.y > canvas.height + 100) {
          meteors.splice(i, 1);
          continue;
        }

        // Draw meteor streak
        const tailX = m.x - (m.vx / Math.hypot(m.vx, m.vy)) * m.len;
        const tailY = m.y - (m.vy / Math.hypot(m.vx, m.vy)) * m.len;

        const grad = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${m.life})`);
        grad.addColorStop(0.1, `rgba(149, 116, 82, ${m.life * 0.8})`);
        grad.addColorStop(1, 'rgba(149, 116, 82, 0)');

        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = grad;
        ctx.lineWidth = m.thickness;
        ctx.lineCap = 'round';
        ctx.stroke();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    if (visible) draw();

    return () => {
      window.removeEventListener('resize', resize);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [visible]);

  useEffect(() => {
    if (!visible) {
      if (animRef.current) {
        cancelAnimationFrame(animRef.current);
        animRef.current = null;
      }
    }
  }, [visible]);

  return (
    <canvas
      ref={canvasRef}
      className={`star-canvas${visible ? ' visible' : ''}`}
    />
  );
}

export default StarCanvas;
