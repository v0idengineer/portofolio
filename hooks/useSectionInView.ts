"use client";

import { useEffect, useState } from "react";

export function useSectionInView(id: string, threshold = 0.35) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = document.getElementById(id);
    if (!el) return;

    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold,
    });
    io.observe(el);
    return () => io.disconnect();
  }, [id, threshold]);

  return inView;
}
