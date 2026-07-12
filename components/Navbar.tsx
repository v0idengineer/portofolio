"use client";
import { siteConfig } from "@/data/projects";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-10 py-5 border-b border-white/[0.07] bg-[rgba(10,10,11,0.92)] backdrop-blur-md gap-4">
      <div className="font-display font-extrabold text-xl tracking-tight text-[#f0ede8]" style={{ fontFamily: 'Syne, sans-serif' }}>
        {siteConfig.initials.slice(0, -1)}
        <span className="text-[#e8c96a]">{siteConfig.initials.slice(-1)}</span>
      </div>
      <ul className="hidden md:flex gap-8 list-none">
        <li><a href="#about" className="text-[#888880] text-xs tracking-widest uppercase hover:text-[#f0ede8] transition-colors no-underline">about</a></li>
        <li><a href="#work" className="text-[#888880] text-xs tracking-widest uppercase hover:text-[#f0ede8] transition-colors no-underline">work</a></li>
        <li><a href="#contact" className="text-[#888880] text-xs tracking-widest uppercase hover:text-[#f0ede8] transition-colors no-underline">contact</a></li>
      </ul>
      
        href="mailto:riyadi256789@gmail.com"
        className="bg-[#e8c96a] text-[#0a0a0b] px-5 py-2 text-xs font-medium tracking-wider rounded-sm no-underline hover:opacity-85 transition-opacity whitespace-nowrap"
        style={{ fontFamily: 'DM Mono, monospace' }}
      >
        hire me ↗
      </a>
    </nav>
  );
}