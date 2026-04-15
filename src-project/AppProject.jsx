import React, { useMemo } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";

const PROJECTS = [
  {
    slug: "neural-core",
    id: "01",
    name: "NEURAL CORE",
    role: "AI INFRASTRUCTURE",
    summary:
      "A scalable AI-ready architecture for deploying model-powered features with stable observability and low-latency APIs.",
    challenge:
      "Needed a structure that supports rapid feature growth while keeping deployment predictable and maintainable.",
    solution:
      "Built a modular frontend/backend workflow with clean service boundaries, reusable UI patterns, and CI-friendly project organization.",
    stack: ["React", "Vite", "Tailwind", "Framer Motion", "Node"],
    result: "Faster iteration speed and cleaner project extension path for future AI features.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1600",
  },
  {
    slug: "quantum-os",
    id: "02",
    name: "QUANTUM OS",
    role: "SYSTEM ARCHITECTURE",
    summary:
      "A system-level web architecture focused on consistency, scalability, and developer velocity.",
    challenge:
      "Cross-page consistency and component duplication were slowing development.",
    solution:
      "Designed a shared architecture pattern and utility layer to reduce duplicated logic and styling drift.",
    stack: ["React", "Design Tokens", "Component Architecture", "Vite"],
    result: "Reduced repeated implementation work and improved long-term maintainability.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600",
  },
  {
    slug: "data-vortex",
    id: "03",
    name: "DATA VORTEX",
    role: "CYBER SECURITY",
    summary:
      "A secure data interaction layer with clear user flows and risk-aware interface design.",
    challenge:
      "Needed to communicate security-heavy workflows without hurting usability.",
    solution:
      "Used progressive disclosure UI and explicit status feedback for security-sensitive actions.",
    stack: ["Frontend Security UX", "State Flow Design", "Audit-friendly UI"],
    result: "Higher trust and fewer user errors in sensitive operations.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600",
  },
  {
    slug: "bio-link",
    id: "04",
    name: "BIO LINK",
    role: "HCI INTERFACE",
    summary:
      "An interaction-focused interface project balancing clarity, speed, and emotional feel.",
    challenge:
      "The product needed stronger interaction rhythm and visual readability.",
    solution:
      "Refined spacing, motion timing, and content hierarchy for more intuitive human-computer interaction.",
    stack: ["Interaction Design", "Motion", "Responsive UI"],
    result: "More fluid user journeys and improved task completion confidence.",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1600",
  },
  {
    slug: "grid-sync",
    id: "05",
    name: "GRID SYNC",
    role: "BLOCKCHAIN NODE",
    summary:
      "A dashboard-style project for representing distributed status and node behavior in real time.",
    challenge:
      "Complex state needed to be readable at a glance.",
    solution:
      "Introduced high-signal UI blocks with prioritized metrics, status color semantics, and compact layouts.",
    stack: ["Dashboard UI", "Data Visualization", "Realtime UX"],
    result: "Improved monitoring efficiency and better operational decision speed.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1600",
  },
];

function getCurrentProject() {
  const pathParts = window.location.pathname.split("/").filter(Boolean);
  const slugFromPath = pathParts[0] === "project" ? pathParts[1] : "";
  const params = new URLSearchParams(window.location.search);
  const slugFromQuery = params.get("project") || "";
  const slug = slugFromPath || slugFromQuery || "neural-core";
  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  return idx >= 0 ? idx : 0;
}

export default function AppProject() {
  const currentIndex = useMemo(() => getCurrentProject(), []);
  const project = PROJECTS[currentIndex];
  const prev = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <div className="min-h-screen bg-[#050505] font-mono text-[#e0e0e0] selection:bg-cyan-500 selection:text-black">
      <header className="border-b border-white/10 px-6 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-400">Project Briefing</p>
            <h1 className="mt-1 text-2xl font-bold uppercase tracking-tight">Jeremy Lu // {project.name}</h1>
          </div>
          <a href="/" className="inline-flex items-center gap-2 border border-white/20 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-white/70 transition hover:border-cyan-400/50 hover:text-cyan-300">
            <ArrowLeft size={12} /> Back Home
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">
        <section className="overflow-hidden border border-white/10 bg-[#0a0a0a]">
          <img src={project.image} alt={project.name} className="h-[340px] w-full object-cover" />
          <div className="p-6">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/35">#{project.id} // {project.role}</p>
            <h2 className="mt-2 text-4xl font-black uppercase tracking-tight">{project.name}</h2>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-white/60">{project.summary}</p>
          </div>
        </section>

        <section className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <article className="border border-white/10 bg-[#0a0a0a] p-6">
            <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-400">Challenge</p>
            <p className="mt-3 text-sm leading-7 text-white/65">{project.challenge}</p>
          </article>
          <article className="border border-white/10 bg-[#0a0a0a] p-6">
            <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-400">Solution</p>
            <p className="mt-3 text-sm leading-7 text-white/65">{project.solution}</p>
          </article>
        </section>

        <section className="mt-4 border border-white/10 bg-[#0a0a0a] p-6">
          <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-400">Tech Stack</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="border border-white/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-white/75">{tech}</span>
            ))}
          </div>
          <p className="mt-4 text-sm text-white/65"><span className="text-white/40 uppercase text-[10px] tracking-[0.2em] mr-2">Outcome</span>{project.result}</p>
        </section>

        <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <a href={`/project.html?project=${prev.slug}`} className="inline-flex items-center justify-center gap-2 border border-white/15 bg-[#0a0a0a] px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-white/70 hover:text-cyan-300 hover:border-cyan-400/40 transition"><ChevronLeft size={12} /> Prev Project</a>
          <a href="https://github.com/JeremyLu12138" className="inline-flex items-center justify-center gap-2 border border-white/15 bg-[#0a0a0a] px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-white/70 hover:text-cyan-300 hover:border-cyan-400/40 transition"><Github size={12} /> GitHub</a>
          <a href={`/project.html?project=${next.slug}`} className="inline-flex items-center justify-center gap-2 border border-white/15 bg-[#0a0a0a] px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-white/70 hover:text-cyan-300 hover:border-cyan-400/40 transition">Next Project <ChevronRight size={12} /></a>
        </section>

        <footer className="mt-8 border-t border-white/10 pt-5">
          <a href="#" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/45 hover:text-cyan-300"><ExternalLink size={12} /> Case Study Link</a>
        </footer>
      </main>
    </div>
  );
}
