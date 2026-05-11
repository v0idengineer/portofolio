export interface Skill {
  icon: string;
  category: string;
  name: string;
  desc: string;
  tags: string[];
}

export const siteConfig = {
  name: "Saiful Faris Riyadi",         
  initials: "SR",            // ← ganti
  tagline: "Fullstack Dev & Creative",
  location: "Bandung, ID",
  available: true,
  email: "riyadi256789@gmail.com",   // ← ganti
  linkedin: "Faris Riyadi",      // ← ganti
  instagram: "@xrsdi",    // ← ganti
  vercelUrl: "farisriyadiporto.vercel.app", // ← ganti
};

export const stats = [
  { num: "4+", label: "Years exp" },
  { num: "10+", label: "Projects" },
  { num: "6+", label: "Clients" },
  { num: "4", label: "Disciplines" },
];


export const skills: Skill[] = [
  {
    icon: "⟨/⟩",
    category: "Frontend",
    name: "Web Dev",
    desc: "Build antarmuka yang cepat, responsif, dan bersih.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    icon: "⚙",
    category: "Backend",
    name: "Server & API",
    desc: "REST, database, deploy — semua ditangani sendiri.",
    tags: ["Node.js", "PostgreSQL", "Docker"],
  },
  {
    icon: "▶",
    category: "Post Production",
    name: "Video Editing",
    desc: "Storytelling visual dari footage mentah ke konten siap tayang.",
    tags: ["Premiere Pro", "After Effects"],
  },
  {
    icon: "◉",
    category: "Visual",
    name: "Creative",
    desc: "Video & Photo Generative AI",
    tags: ["Image FX", "Google Flow"],
  },
  {
    icon: "✦",
    category: "Design",
    name: "UI/UX",
    desc: "Desain yang fungsional sekaligus enak dilihat.",
    tags: ["Figma", "Canva", "Illustrator"],
  },
  {
    icon: "◈",
    category: "Data Science",
    name: "Sentiment Analysis",
    desc: "Setup kerja yang efisien dari solo sampai tim besar.",
    tags: ["SQL", "Excel", "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "Keras", "PyTorch"],
  },
];
