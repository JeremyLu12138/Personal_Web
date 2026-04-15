import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Cpu, Globe, Terminal, Shield, Activity, Share2 } from 'lucide-react';

const TECH_WORKS = [
  { id: '01', title: 'NEURAL CORE', category: 'AI INFRASTRUCTURE', img: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=800' },
  { id: '02', title: 'QUANTUM OS', category: 'SYSTEM ARCHITECTURE', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800' },
  { id: '03', title: 'DATA VORTEX', category: 'CYBER SECURITY', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800' },
  { id: '04', title: 'Computer Vision', category: 'AI INFRASTRUCTURE', img: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=800' },
  { id: '05', title: 'GRID SYNC', category: 'BLOCKCHAIN NODE', img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800' },
  { id: '06', title: 'Photographer', category: 'Life record', img: 'https://images.unsplash.com/photo-1531746790731-6c307f8fb51e?q=80&w=800' },
];

const PROJECT_URL_BY_ID = {
  '01': '/project.html?project=neural-core',
  '02': '/project.html?project=quantum-os',
  '03': '/project.html?project=data-vortex',
  '04': '/project.html?project=retinal-semantic-segmentation',
  '05': '/project.html?project=grid-sync',
};

const CORE_SKILLS = [
  {
    id: '01',
    title: 'Full-Stack Development',
    desc: 'Build complete products across frontend, backend, APIs, database, and deployment.',
  },
  {
    id: '02',
    title: 'Web Design',
    desc: 'Design responsive, user-focused interfaces with clear hierarchy and interaction flow.',
  },
  {
    id: '03',
    title: 'AI Integration',
    desc: 'Integrate LLM capabilities, AI workflows, and automation into real-world web applications.',
  },
];

const TechBackground = () => (
  <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.05),transparent)]" />
    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#ffffff11 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
  </div>
);

function getCardTargetUrl(workId) {
  if (workId === '06') return '/album.html';
  return PROJECT_URL_BY_ID[workId] || '#';
}

const App = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });

  const [dataStream, setDataStream] = useState('');
  useEffect(() => {
    const interval = setInterval(() => {
      setDataStream(Math.random().toString(16).substring(2, 10).toUpperCase());
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#050505] text-[#e0e0e0] selection:bg-cyan-500 selection:text-black min-h-[400vh] font-mono lowercase" ref={containerRef}>
      <TechBackground />

      <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-start mix-blend-difference">
        <div className="flex flex-col gap-1">
          <div className="font-black text-2xl tracking-tighter flex items-center gap-2">
            <Cpu size={20} className="text-cyan-400" />
            <span className="uppercase">J.LU_V2.0</span>
          </div>
          <div className="text-[10px] text-cyan-400/50 flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            SYSTEM_STATUS: OPERATIONAL // {dataStream}
          </div>
        </div>

        <div className="hidden md:flex flex-col items-end gap-2 text-[10px] uppercase tracking-tighter">
          <div className="flex gap-6 border-b border-white/10 pb-2">
            <a href="#" className="hover:text-cyan-400 transition-colors">/index</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">/repository</a>
            <a href="/project.html" className="hover:text-cyan-400 transition-colors">/project</a>
            <a href="/album.html" className="hover:text-cyan-400 transition-colors">/album</a>
          </div>
          <div className="text-white/30 text-[9px]">33.8688 S, 151.2093 E // UTC+10</div>
        </div>
      </nav>

      <section className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div
          style={{
            opacity: useTransform(smoothProgress, [0, 0.2, 0.4], [1, 0.5, 0]),
            scale: useTransform(smoothProgress, [0, 0.4], [1, 1.1]),
          }}
          className="absolute z-20 text-center pointer-events-none"
        >
          <h1 className="text-[10vw] font-black leading-none uppercase italic tracking-tighter">
            Architecting
            <br />
            <span className="text-cyan-500 underline decoration-1 underline-offset-8">The Future</span>
          </h1>
          <div className="mt-8 flex justify-center gap-12 text-[10px] text-white/40 uppercase tracking-[0.3em]">
            <span>Full-stack designer</span>
            <span className="text-cyan-500">*</span>
            <span>Creative technologist</span>
          </div>
        </motion.div>

        <div className="relative z-10 w-full h-full flex justify-center items-center gap-8 px-4 opacity-40">
          {[0, 1, 2, 3].map((colIndex) => (
            <motion.div
              key={colIndex}
              style={{ y: useTransform(smoothProgress, [0, 0.6], [colIndex % 2 === 0 ? '80%' : '-80%', '0%']) }}
              className="flex flex-col gap-8 w-40 md:w-56"
            >
              {TECH_WORKS.slice(colIndex, colIndex + 2).map((work, i) => (
                <div key={`${work.id}-${i}`} className="relative group aspect-[4/5] bg-neutral-900 border border-white/5 rounded-lg overflow-hidden">
                  <img src={work.img} className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" alt="tech-asset" />
                  <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-2 left-2 text-[8px] opacity-0 group-hover:opacity-100 transition-opacity text-cyan-300">
                    LOAD_ASSET_{work.id}
                    <br />
                    RENDER_MODE: PBR_CYCLES
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-20 px-6 py-32 bg-[#080808] border-y border-white/5 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-6">
            <div>
              <div className="text-cyan-500 text-[10px] mb-4 flex items-center gap-2">
                <Terminal size={12} /> // ACTIVE_PROJECTS
              </div>
              <h2 className="text-7xl font-black uppercase tracking-tighter">Protocol<br />Archives</h2>
            </div>
            <motion.div
              whileHover={{ x: 5 }}
              className="px-6 py-3 border border-cyan-500/30 text-cyan-400 text-xs flex items-center gap-4 cursor-pointer hover:bg-cyan-500/10 transition-all"
            >
              ACCESS_DATABASE <ArrowRight size={14} />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 px-1 bg-white/5 border border-white/5">
            {TECH_WORKS.map((work, i) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                onClick={() => {
                  window.location.href = getCardTargetUrl(work.id);
                }}
                onKeyDown={(e) => {
                  if (e.key !== 'Enter' && e.key !== ' ') return;
                  e.preventDefault();
                  window.location.href = getCardTargetUrl(work.id);
                }}
                role="link"
                tabIndex={0}
                className={`group relative bg-[#0a0a0a] p-8 min-h-[400px] flex flex-col justify-between hover:bg-cyan-950/20 transition-all duration-500 overflow-hidden cursor-pointer ${work.id === '06' ? 'ring-1 ring-cyan-500/20 hover:ring-cyan-400/50' : ''}`}
              >
                <div className="absolute top-0 right-0 p-4 text-[10px] text-white/10 group-hover:text-cyan-500/30 font-mono transition-colors">#{work.id}</div>

                <div className="relative z-10">
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/20 mb-8 group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-all">
                    {i % 2 === 0 ? <Globe size={18} /> : <Shield size={18} />}
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-2 group-hover:text-cyan-400 transition-colors">{work.title}</h3>
                  <p className="text-white/30 text-[10px] tracking-widest uppercase">{work.category}</p>
                </div>

                <div className="relative z-10 mt-12 flex justify-between items-end">
                  <div className="h-px flex-1 bg-white/10 group-hover:bg-cyan-500/30 transition-all" />
                  <div className="pl-6">
                    <Activity size={16} className="text-white/10 group-hover:text-cyan-400 group-hover:animate-pulse" />
                  </div>
                </div>

                {work.id === '06' ? (
                  <div className="absolute left-4 bottom-4 text-[10px] uppercase tracking-[0.2em] text-cyan-300">open album</div>
                ) : null}

                <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-500/50 -translate-y-full group-hover:animate-scanline" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-20 py-35 px-6 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full border border-cyan-500/20 flex items-center justify-center mb-12 relative">
            <Share2 size={24} className="text-cyan-400" />
            <div className="absolute inset-0 border border-cyan-400 rounded-full animate-ping opacity-20" />
          </div>

          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12">
            Sync with<br />the <span className="text-cyan-500">grid</span>
          </h2>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 mb-14 text-left">
            {CORE_SKILLS.map((skill) => (
              <article key={skill.id} className="border border-white/10 bg-[#0a0a0a] p-5 hover:border-cyan-500/40 transition-colors">
                <div className="text-[10px] text-white/30 tracking-[0.24em] uppercase mb-2">#{skill.id}</div>
                <h3 className="text-base font-bold uppercase tracking-[0.08em] mb-2">{skill.title}</h3>
                <p className="text-sm text-white/55 leading-6">{skill.desc}</p>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-16 pt-20 border-t border-white/5">
            <div className="text-left space-y-4">
              <div className="text-[10px] text-white/30">/COMMUNICATION_PORT</div>
              <a href="#" className="text-xl font-bold hover:text-cyan-400 block transition-colors tracking-tight">ENCRYPTED_MAIL: luckylu221118@gmail.com</a>
            </div>
            <div className="text-left space-y-4">
              <div className="text-[10px] text-white/30">/SOCIAL_NODES</div>
              <div className="flex gap-6 font-bold uppercase text-sm">
                <a href="https://github.com/JeremyLu12138" className="hover:text-cyan-400">GH</a>
                <a href="https://www.linkedin.com/in/zheng-lu-23bb93328" className="hover:text-cyan-400">LI</a>
                <a href="#" className="hover:text-cyan-400">TW</a>
              </div>
            </div>
            <div className="text-right flex flex-col justify-end">
              <div className="text-[9px] text-white/20 uppercase leading-relaxed">
                Encryption: AES-256-GCM<br />
                Design: Jeremy Lu<br />
                c 2026 all bits reserved.
              </div>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400px); }
        }
        .animate-scanline {
          animation: scanline 2s linear infinite;
        }
      ` }} />
    </div>
  );
};

export default App;
