export interface Skill {
  icon: string;
  category: string;
  name: string;
  desc: string;
  tags: string[];
}

export interface LiveProject {
  name: string;
  description: string;
  url: string;
  tags: string[];
  year: string;
}

export const siteConfig = {
  name: "Saiful Faris Riyadi",
  initials: "SR",
  tagline: "Fullstack Dev & Creative",
  location: "Bandung, ID",
  available: true,
  email: "riyadi256789@gmail.com",
  linkedin: "Faris Riyadi",
  instagram: "@xrsdi",
  vercelUrl: "farisriyadiporto.vercel.app",
};

export const stats = [
  { num: "4+", label: "Years exp" },
  { num: "10+", label: "Projects" },
  { num: "6+", label: "Clients" },
  { num: "4", label: "Disciplines" },
];


// TODO: ganti dengan project yang sudah live beneran — ini masih placeholder.
export const liveProjects: LiveProject[] = [
  {
    name: "Nama Project Satu",
    description: "Ganti dengan deskripsi singkat project yang sudah live ini ngapain.",
    url: "#",
    tags: ["Next.js", "PostgreSQL"],
    year: "2026",
  },
  {
    name: "Nama Project Dua",
    description: "Ganti dengan deskripsi singkat project yang sudah live ini ngapain.",
    url: "#",
    tags: ["React Native"],
    year: "2025",
  },
  {
    name: "Nama Project Tiga",
    description: "Ganti dengan deskripsi singkat project yang sudah live ini ngapain.",
    url: "#",
    tags: ["Python", "FastAPI"],
    year: "2025",
  },
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
    desc: "Emosi, opini, dan polaritas.",
    tags: ["SQL", "Excel", "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "Keras", "PyTorch"],
  },
];
