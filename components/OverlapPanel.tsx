"use client";

import { useEffect, useRef, useState } from "react";

interface OverlapPanelProps {
  children: React.ReactNode;
  z: number;
  bg: string;
  first?: boolean;
}

export default function OverlapPanel({ children, z, bg, first = false }: OverlapPanelProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [canPin, setCanPin] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const check = () => setCanPin(el.offsetHeight <= window.innerHeight);
    check();

    const ro = new ResizeObserver(check);
    ro.observe(el);
    window.addEventListener("resize", check);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", check);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={first ? "overlap-panel" : "overlap-panel has-overlap"}
      style={{
        position: canPin ? "sticky" : "relative",
        top: canPin ? 0 : undefined,
        zIndex: z,
        background: bg,
      }}
    >
      {children}
      <style jsx>{`
        .overlap-panel {
          position: relative;
        }
        .has-overlap {
          margin-top: -1.75rem;
          border-top-left-radius: 24px;
          border-top-right-radius: 24px;
          box-shadow: 0 -28px 48px rgba(0, 0, 0, 0.4);
        }
        @media (max-width: 480px) {
          .has-overlap {
            margin-top: -1rem;
            border-top-left-radius: 16px;
            border-top-right-radius: 16px;
          }
        }
      `}</style>
    </div>
  );
}
