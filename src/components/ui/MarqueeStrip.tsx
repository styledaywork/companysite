"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MarqueeStripProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  pauseOnHover?: boolean;
}

export function MarqueeStrip({
  children,
  speed = 30,
  className = "",
  pauseOnHover = true,
}: MarqueeStripProps) {
  return (
    <div
      className={`overflow-hidden relative group ${className}`}
      style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
    >
      <motion.div
        className={`flex gap-10 whitespace-nowrap w-max ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}`}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {/* Duplicate children for seamless loop */}
        {children}
        {children}
      </motion.div>
    </div>
  );
}
