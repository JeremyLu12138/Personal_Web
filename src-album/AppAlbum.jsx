import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, ArrowLeft, Maximize2, LayoutTemplate, Grid3X3, PanelsTopLeft, GalleryVertical, Info } from "lucide-react";

const LAYOUT_CONTENT = {
  masonry: {
    themeTitle: "Ocean Pulse",
    themeIntro: "Is the ocean bright or dark? Australia is surrounded by the sea, but in what form should such a vast ocean be recorded?",
    items: [
      { id: "M-01", title: "Sea House", tag: "Green with Blue", src: "photos/sea_house.jpg" },
      { id: "M-02", title: "Lone Boat", tag: "One in Ocean", src: "photos/sea_ship3.jpg" },
      { id: "M-03", title: "Lone Tree", tag: "One in Ocean", src: "photos/sea_tree.jpg" },
      { id: "M-04", title: "No Fishing", tag: "The Sea At Dusk", src: "photos/sea_house4.jpg" },
      { id: "M-05", title: "Surfing", tag: "Human Life", src: "photos/sea_surfing.jpg" },
      { id: "M-06", title: "Pigeon", tag: "Animals On The Sea", src: "photos/sea_pigeon.jpg" },
      { id: "M-07", title: "Sea", tag: "Dark Sea", src: "photos/sea.jpg" },
      { id: "M-08", title: "Beach Volleyball", tag: "Human Story", src: "photos/sea_volleyball.jpg" },
      { id: "M-09", title: "Seaside city", tag: "Human, House, Sea", src: "photos/sea_house1.jpg" },
      { id: "M-10", title: "Mirror", tag: "Mirror of the Sea", src: "photos/sea_house3.jpg" },
    ],
  },
  story: {
    themeTitle: "Editorial Journey",
    themeIntro: "Here, I visited many mountains. What are mountains? Are they barren or inhabited?",
    items: [
      { id: "S-01", title: "Glacier hiking", tag: "Main Story", src: "photos/mountain5.jpg" },
      { id: "S-02", title: "Couples", tag: "Chapter I", src: "photos/mountain3.jpg" },
      { id: "S-03", title: "Oneself", tag: "Chapter II", src: "photos/mountain4.jpg" },
      { id: "S-04", title: "Rainbow", tag: "Chapter III", src: "photos/mountain2.jpg" },
      { id: "S-05", title: "Cliff", tag: "Final ? ", src: "photos/mountain1.jpg" },
    ],
  },
  film: {
    themeTitle: "Human, Street, Life",
    themeIntro: "The street is the most beautiful expression of human life; it is here that the true pulse of the city can be felt.",
    items: [
      { id: "F-01", title: "Street", tag: "Roll 01", src: "photos/qvb_coffeeShop1.jpg" },
      { id: "F-02", title: "Car", tag: "Roll 01", src: "photos/street_life1.jpg" },
      { id: "F-03", title: "Lawn, City", tag: "Roll 01", src: "photos/street_life2.jpg" },
      { id: "F-04", title: "City", tag: "Roll 01", src: "photos/street_life3.jpg" },
      { id: "F-05", title: "Pigeon", tag: "Roll 02", src: "photos/street_life4.jpg" },
      { id: "F-06", title: "Evening", tag: "Roll 02", src: "photos/street_life5.jpg" },
      { id: "F-07", title: "Shop", tag: "Roll 02", src: "photos/street_life.jpg" },
      { id: "F-08", title: "Performer", tag: "Roll 02", src: "photos/qvb_performer.jpg" },
      { id: "F-09", title: "Light", tag: "Roll 03", src: "photos/human_life2.jpg" },
    ],
  },
  magazine: {
    themeTitle: "Objects Discovery",
    themeIntro: "The most creative and dynamic creatures in the world.",
    items: [
      { id: "G-01", title: "Beach", tag: "Human, Beach, Light", src: "photos/human_life1.jpg" },
      { id: "G-02", title: "Koala", tag: "Zoo", src: "photos/human_life3.jpg" },
      { id: "G-03", title: "Dog", tag: "Dogs Party", src: "photos/dog_party1.jpg" },
      { id: "G-04", title: "Mountain", tag: "Climbing", src: "photos/mountain.jpg" },
      { id: "G-05", title: "Food", tag: "Eating", src: "photos/food.jpg" },
      { id: "G-06", title: "Driver", tag: "Train", src: "photos/human_life.jpg" },
    ],
  },
};

const LAYOUTS = [
  { id: "masonry", label: "Masonry", icon: LayoutTemplate },
  { id: "story", label: "Editorial", icon: PanelsTopLeft },
  { id: "film", label: "Film Grid", icon: Grid3X3 },
  { id: "magazine", label: "Magazine", icon: GalleryVertical },
];

function TechGridBg() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(6,182,212,0.08),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:120px_120px]" />
    </div>
  );
}

function Frame({ item, onOpen, className = "", showTag = true, mediaClass = "h-[260px] sm:h-[300px]" }) {
  return (
    <motion.div
      layout
      className={`group relative flex flex-col overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-cyan-500/50 ${className}`}
    >
      <button
        type="button"
        onClick={() => onOpen(item)}
        className={`relative block w-full overflow-hidden ${mediaClass}`}
      >
        <img 
          src={item.src} 
          alt={item.title} 
          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
        
        {/* Overlay UI */}
        <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex justify-between items-start">
             <div className="rounded-full bg-black/40 px-2 py-1 text-[9px] backdrop-blur-md border border-white/20">{item.id}</div>
             <Maximize2 size={14} className="text-white/80" />
          </div>
          <div className="translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
             <div className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">{item.tag}</div>
             <div className="mt-1 text-sm font-light text-white">{item.title}</div>
          </div>
        </div>
      </button>

      {showTag && (
        <div className="flex items-center justify-between border-t border-white/10 bg-black/40 px-3 py-2 text-[9px] tracking-[0.15em] text-white/40">
           <span>{item.id} // ARCHIVE</span>
           <span className="hidden sm:inline">ISO 400 - 1/125s</span>
        </div>
      )}
    </motion.div>
  );
}

// 1. Masonry 瀑布流布局
function MasonryLayout({ items, onOpen }) {
  const heights = [
    "h-[220px]",
    "h-[340px]",
    "h-[260px]",
    "h-[300px]",
    "h-[240px]",
    "h-[360px]",
    "h-[230px]",
    "h-[320px]",
    "h-[250px]",
  ];

  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
      {items.map((item, idx) => (
        <div key={item.id} className="mb-4 break-inside-avoid">
          <Frame
            item={item}
            onOpen={onOpen}
            className="rounded-lg"
            mediaClass={`${heights[idx % heights.length]} sm:${heights[(idx + 3) % heights.length]}`}
          />
        </div>
      ))}
    </div>
  );
}

// 2. Editorial 故事叙述布局
function StoryLayout({ items, onOpen, themeIntro }) {
  const mainItem = items[0];
  const sideItems = items.slice(1, 4);

  return (
    <section className="flex flex-col gap-6 lg:flex-row">
      <div className="flex-1">
        <div className="relative overflow-hidden rounded-2xl border border-white/10">
          <img src={mainItem.src} className="aspect-[16/9] w-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent p-8 flex flex-col justify-end">
            <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-6xl">{mainItem.title}</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">{themeIntro}</p>
            <button 
              onClick={() => onOpen(mainItem)}
              className="mt-6 flex w-fit items-center gap-2 border border-cyan-500/50 bg-cyan-500/10 px-6 py-2 text-xs uppercase tracking-widest text-cyan-300 transition hover:bg-cyan-500 hover:text-black"
            >
              Examine Frame
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:w-[350px] lg:grid-cols-1">
        {sideItems.map((item) => (
          <Frame key={item.id} item={item} onOpen={onOpen} className="rounded-xl" mediaClass="h-[180px]" showTag={false} />
        ))}
      </div>
    </section>
  );
}

// 3. Film Grid 经典胶片网格
function FilmGridLayout({ items, onOpen }) {
  return (
    <section className="grid grid-cols-2 gap-px bg-white/10 p-px sm:grid-cols-3 lg:grid-cols-5">
      {items.map((item) => (
        <div key={item.id} className="relative h-48 bg-black overflow-hidden group sm:h-56 lg:h-64">
          <button onClick={() => onOpen(item)} className="h-full w-full">
            <img src={item.src} className="h-full w-full object-cover opacity-60 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0" />
            <div className="absolute top-2 left-2 text-[8px] font-mono text-white/40">{item.id}</div>
          </button>
        </div>
      ))}
      <div className="flex h-48 items-center justify-center bg-zinc-900 border border-white/5 sm:h-56 lg:h-64">
        <p className="text-[10px] text-center text-zinc-600 uppercase tracking-tighter">End of<br/>Roll 024</p>
      </div>
    </section>
  );
}

// 4. Magazine 杂志排版布局
function SplitLayout({ items, onOpen, themeTitle, themeIntro }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
      <div className="md:col-span-4 sticky top-24">
        <h3 className="text-xs uppercase tracking-[0.5em] text-cyan-400 mb-4 flex items-center gap-2">
          <Info size={12}/> Perspective Vol.1
        </h3>
        <h2 className="text-5xl font-black leading-none mb-6 uppercase">{themeTitle}</h2>
        <div className="space-y-4 text-sm text-white/40 leading-relaxed border-l border-cyan-500/30 pl-6">
          <p>{themeIntro}</p>
          <p>Curated by Jeremy Lu, 2024 Archive.</p>
        </div>
      </div>
      <div className="md:col-span-8 grid grid-cols-2 gap-6">
        {items.map((item, idx) => (
          <div key={item.id} className={idx % 3 === 0 ? "col-span-2" : "col-span-1"}>
            <Frame
              item={item}
              onOpen={onOpen}
              className="rounded-md"
              mediaClass={idx % 3 === 0 ? "h-[300px] sm:h-[360px]" : "h-[220px] sm:h-[260px]"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState(null);
  const [layout, setLayout] = useState("masonry");

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const currentContent = LAYOUT_CONTENT[layout] || LAYOUT_CONTENT.masonry;
  const currentItems = currentContent.items;
  const currentThemeTitle = currentContent.themeTitle;
  const currentThemeIntro = currentContent.themeIntro;

  const layoutView = useMemo(() => {
    switch(layout) {
      case "story": return <StoryLayout items={currentItems} onOpen={setActive} themeIntro={currentThemeIntro} />;
      case "film": return <FilmGridLayout items={currentItems} onOpen={setActive} />;
      case "magazine": return <SplitLayout items={currentItems} onOpen={setActive} themeTitle={currentThemeTitle} themeIntro={currentThemeIntro} />;
      default: return <MasonryLayout items={currentItems} onOpen={setActive} />;
    }
  }, [layout, currentItems, currentThemeIntro, currentThemeTitle]);

  const handleBackToRoot = () => {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-[#020202] font-mono text-[#dfdfdf] selection:bg-cyan-500 selection:text-black">
      <TechGridBg />

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/5 bg-black/40 backdrop-blur-xl px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative h-8 w-8 flex items-center justify-center border border-cyan-500/50 rounded-full">
              <Camera size={14} className="text-cyan-400" />
              <div className="absolute inset-0 animate-ping rounded-full bg-cyan-400/20" />
            </div>
            <div>
               <h1 className="text-[10px] font-bold uppercase tracking-[0.2em] leading-none text-white">Jeremy Lu</h1>
               <span className="text-[8px] text-cyan-500/60 uppercase tracking-[0.1em]">Archive Core v2.5</span>
            </div>
          </div>
          <button
            type="button"
            onClick={handleBackToRoot}
            className="hidden sm:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] uppercase tracking-widest text-white/60 hover:bg-white/10 transition"
          >
            <ArrowLeft size={10} /> Terminal Root
          </button>
        </div>
      </header>

      <main className="relative z-20 mx-auto max-w-7xl px-6 pt-32 pb-24">
        {/* Sub Header */}
        <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <div className="inline-block rounded-sm bg-cyan-500/10 px-2 py-1 text-[9px] font-bold text-cyan-400 mb-3 border border-cyan-500/20">
              QUERY: LIFE_RECORD_2024
            </div>
            <h2 className="text-5xl font-black uppercase tracking-tighter md:text-7xl leading-[0.9]">
              Visual <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>Synthesis</span>
            </h2>
          </div>
          <div className="flex items-center gap-6">
             <div className="text-right">
                <div className="text-[10px] text-white/30 uppercase tracking-widest">Status</div>
                <div className="text-xs text-green-400 flex items-center gap-2 justify-end">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" /> Live Upload
                </div>
             </div>
             <div className="h-12 w-px bg-white/10" />
             <div className="text-right">
                <div className="text-[10px] text-white/30 uppercase tracking-widest">Count</div>
                <div className="text-xs text-white/80">{currentItems.length} Frames</div>
             </div>
          </div>
        </div>

        {/* Layout Switcher */}
        <div className="mb-10 flex flex-wrap items-center gap-1.5 rounded-xl border border-white/5 bg-white/[0.02] p-1 w-fit">
          {LAYOUTS.map((mode) => {
            const Icon = mode.icon;
            const activeMode = layout === mode.id;
            return (
              <button
                key={mode.id}
                onClick={() => setLayout(mode.id)}
                className={`relative flex items-center gap-2 rounded-lg px-4 py-2 text-[11px] uppercase tracking-[0.15em] transition-all ${
                  activeMode ? "bg-white/10 text-cyan-300 shadow-xl" : "text-white/40 hover:text-white/70 hover:bg-white/5"
                }`}
              >
                {activeMode && <motion.div layoutId="nav-bg" className="absolute inset-0 rounded-lg bg-white/10" />}
                <Icon size={14} className={activeMode ? "text-cyan-400" : ""} /> 
                <span className="relative z-10">{mode.label}</span>
              </button>
            );
          })}
        </div>

        {(layout === "masonry" || layout === "film") && (
          <div className="mb-8 max-w-3xl border-l border-cyan-500/30 pl-4">
            <p className="text-[10px] uppercase tracking-[0.28em] text-cyan-400/80">{currentThemeTitle}</p>
            <p className="mt-2 text-sm leading-relaxed text-white/55">{currentThemeIntro}</p>
          </div>
        )}

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={layout} 
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }} 
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} 
            exit={{ opacity: 0, filter: "blur(10px)", y: -20 }} 
            transition={{ duration: 0.4, ease: "circOut" }}
          >
            {layoutView}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Modal / Fullview */}
      <AnimatePresence>
        {active && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-2xl" 
            onClick={() => setActive(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row">
                <div className="flex-1 bg-black p-2 flex items-center justify-center min-h-[50vh] md:min-h-[80vh]">
                  <img src={active.src} alt={active.title} className="max-h-[75vh] w-full object-contain" />
                </div>
                <div className="w-full md:w-80 border-l border-white/10 p-8 flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] text-cyan-500 uppercase tracking-[0.3em] mb-4">Metadata Analysis</div>
                    <h3 className="text-3xl font-light mb-2">{active.title}</h3>
                    <p className="text-xs text-white/40 leading-relaxed uppercase tracking-widest mb-8">{active.tag}</p>
                    
                    <div className="space-y-4">
                       <div className="flex justify-between border-b border-white/5 pb-2">
                         <span className="text-[10px] text-white/30 uppercase">Resolution</span>
                         <span className="text-[10px]">1800 x 2400</span>
                       </div>
                       <div className="flex justify-between border-b border-white/5 pb-2">
                         <span className="text-[10px] text-white/30 uppercase">Equipment</span>
                         <span className="text-[10px]">LEICA Q3</span>
                       </div>
                       <div className="flex justify-between border-b border-white/5 pb-2">
                         <span className="text-[10px] text-white/30 uppercase">Exposure</span>
                         <span className="text-[10px]">F1.7 1/500 ISO 100</span>
                       </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => setActive(null)}
                    className="mt-12 w-full border border-white/10 py-4 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                  >
                    Close Terminal
                  </button>
                </div>
              </div>
              <button onClick={() => setActive(null)} className="absolute top-4 right-4 h-10 w-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition sm:hidden">
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="border-t border-white/5 py-12 text-center">
         <p className="text-[10px] uppercase tracking-[0.5em] text-white/20">All rights reserved // JL Studio 2024</p>
      </footer>
    </div>
  );
}
