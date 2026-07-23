"use client";

interface OverlapPanelProps {
  children: React.ReactNode;
  z: number;
  bg: string;
  sticky?: boolean;
  overlap?: boolean;
}

export default function OverlapPanel({ children, z, bg, sticky = false, overlap = true }: OverlapPanelProps) {
  return (
    <div
      className={overlap ? "overlap-panel has-overlap" : "overlap-panel"}
      style={{
        position: sticky ? "sticky" : "relative",
        top: sticky ? 0 : undefined,
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
