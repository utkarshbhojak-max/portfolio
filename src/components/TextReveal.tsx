import React from 'react';
import { motion } from 'motion/react';

interface TextRevealProps {
  children: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
  delay?: number;
  mode?: 'word' | 'char';
}

export const TextReveal: React.FC<TextRevealProps> = ({
  children,
  as: Component = 'h2',
  className = '',
  delay = 0,
  mode = 'word',
}) => {
  const isReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (isReducedMotion) {
    return <Component className={className}>{children}</Component>;
  }

  if (mode === 'char') {
    const characters = Array.from(children);
    return (
      <Component className={`inline-block ${className}`}>
        {characters.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.45,
              delay: delay + index * 0.02,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            className="inline-block whitespace-pre"
          >
            {char}
          </motion.span>
        ))}
      </Component>
    );
  }

  // Word splitting
  const words = children.split(' ');

  return (
    <Component className={`inline-block overflow-hidden ${className}`}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden mr-[0.26em] last:mr-0">
          <motion.span
            initial={{ opacity: 0, y: '100%', filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: '0%', filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              duration: 0.6,
              delay: delay + index * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
};
