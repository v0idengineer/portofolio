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
  image?: string;
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


export const liveProjects: LiveProject[] = [
  {
    name: "Raka Aditya",
    description: "Portofolio fotografer potret & jalanan asal Jakarta — dibuat oleh temanku.",
    url: "https://ddporto.vercel.app",
    image: "/live/ddporto.jpg",
    tags: ["Next.js", "Photography"],
    year: "2026",
  },
  {
    name: "Ahmad Dzakwan Ar-Rofif",
    description: "Portofolio technical & architectural drafter, cost estimator, dan content creator.",
    url: "https://portoahmadzakwan.netlify.app/",
    image: "/live/ahmadzakwan.jpg",
    tags: ["Portfolio", "Netlify"],
    year: "2025",
  },
  {
    // TODO: ganti dengan project live berikutnya.
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
