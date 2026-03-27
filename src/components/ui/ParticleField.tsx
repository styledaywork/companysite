"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  shape: "circle" | "square" | "triangle";
}

interface ParticleFieldProps {
  count?: number;
  className?: string;
}

export function ParticleField({ count = 12, className = "" }: ParticleFieldProps) {
  const particles: Particle[] = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 3,
      opacity: Math.random() * 0.12 + 0.02,
      duration: Math.random() * 25 + 25,
      delay: Math.random() * 10,
      shape: (["circle", "square", "triangle"] as const)[Math.floor(Math.random() * 3)],
    }));
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -8, 3, -5, 0],
            x: [0, 4, -3, 5, 0],
            rotate: [0, 30, 60, 90, 120],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        >
          {p.shape === "circle" && (
            <div className="w-full h-full rounded-full bg-brand-secondary/30" />
          )}
          {p.shape === "square" && (
            <div className="w-full h-full rounded-sm bg-brand-primary/30 rotate-45" />
          )}
          {p.shape === "triangle" && (
            <div
              className="w-0 h-0"
              style={{
                borderLeft: `${p.size / 2}px solid transparent`,
                borderRight: `${p.size / 2}px solid transparent`,
                borderBottom: `${p.size}px solid rgba(108, 99, 255, 0.15)`,
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
