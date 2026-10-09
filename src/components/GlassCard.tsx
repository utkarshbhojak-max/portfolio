import React, { useRef, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  enableTilt?: boolean;
  enableRefraction?: boolean;
  variant?: 'default' | 'subtle' | 'glow';
  tiltMaxAngle?: number;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  enableTilt = false,
  enableRefraction = false,
  variant = 'default',
  tiltMaxAngle = 8,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for tilt physics
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [0, 1], [tiltMaxAngle, -tiltMaxAngle]);
  const rotateY = useTransform(smoothMouseX, [0, 1], [-tiltMaxAngle, tiltMaxAngle]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    mouseX.set(x);
    mouseY.set(y);

    cardRef.current.style.setProperty('--mouse-x', `${(x * 100).toFixed(1)}%`);
    cardRef.current.style.setProperty('--mouse-y', `${(y * 100).toFixed(1)}%`);
  }, [mouseX, mouseY]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const variantClass = {
    default: 'liquid-glass',
    subtle: 'liquid-glass-subtle',
    glow: 'liquid-glass border-cyan-500/30 shadow-[0_0_35px_rgba(6,182,212,0.15)]',
  }[variant];

  const content = (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-2xl overflow-hidden ${variantClass} ${enableRefraction ? 'backdrop-filter-[url(#liquid-glass-disp)]' : ''} ${className}`}
      {...props}
    >
      {/* Specular pointer-following shine */}
      <div
        className={`absolute inset-0 specular-shine transition-opacity duration-300 pointer-events-none ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      />

      {/* Subtle border perimeter highlight */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none ring-1 ring-inset ring-white/10 dark:ring-white/10"
        aria-hidden="true"
      />

      {/* Actual Children Content */}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );

  if (!enableTilt) {
    return content;
  }

  return (
    <div style={{ perspective: 1000 }} className="w-full h-full">
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="w-full h-full"
      >
        {content}
      </motion.div>
    </div>
  );
};
