"use client";

import { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  /** opacity of the spotlight circle — 0 to 1 */
  spotOpacity?: number;
}

export function SpotlightCard({
  children,
  className,
  spotOpacity = 0.07,
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className={cn("relative overflow-hidden", className)}
      style={
        {
          "--x": `${pos.x}px`,
          "--y": `${pos.y}px`,
          "--opacity": visible ? spotOpacity : 0,
        } as React.CSSProperties
      }
    >
      {/* Spotlight overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 rounded-[inherit]"
        style={{
          background: `radial-gradient(400px circle at var(--x) var(--y), rgba(255,255,255,var(--opacity)), transparent 70%)`,
        }}
      />
      {/* Border glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 rounded-[inherit]"
        style={{
          opacity: visible ? 1 : 0,
          background: `radial-gradient(250px circle at var(--x) var(--y), rgba(255,255,255,0.06), transparent 70%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
