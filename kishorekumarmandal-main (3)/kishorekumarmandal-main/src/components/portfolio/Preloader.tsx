import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import kishorePortrait from "@/assets/kishore-portrait.png";

const LINES = [
  "aligning grids…",
  "rendering creativity…",
  "moving pixels into place…",
  "loading designer chaos…",
  "warming up the cursor…",
  "cueing the opening shot.",
];

export function Preloader() {
  const [show, setShow] = useState(true);
  const [pct, setPct] = useState(0);
  const [line, setLine] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const dur = 2800;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setPct(Math.floor(p * 100));
      setLine(Math.min(LINES.length - 1, Math.floor(p * LINES.length)));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setShow(false), 450);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 1.1, ease: [0.85, 0, 0.15, 1] }}
          className="fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center px-6 noise overflow-hidden"
        >
          {/* portrait silhouette glow */}
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.35, scale: 1 }}
            transition={{ duration: 2, ease: [0.2, 0.8, 0.2, 1] }}
            className="absolute right-[-6vw] top-1/2 -translate-y-1/2 w-[60vw] max-w-[700px] aspect-[3/4] pointer-events-none"
          >
            <img src={kishorePortrait} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 mix-blend-color" style={{ background: "oklch(0.62 0.24 22 / 0.55)" }} />
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 25%, oklch(0.11 0.005 30 / 0.85) 75%, oklch(0.11 0.005 30) 100%)" }} />
            <div className="absolute inset-0 opacity-[0.10] mix-blend-overlay" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent 0px, transparent 2px, #fff 2px, #fff 3px)" }} />
          </motion.div>

          <div className="absolute inset-0 grid-bg opacity-25" />
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground z-10">
            <span>KKM — Portfolio · 2026</span>
            <span className="hidden md:inline">Loading sequence / 01</span>
            <span>{String(pct).padStart(3, "0")}%</span>
          </div>

          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary mb-6"
            >
              // initializing the scene
            </motion.div>
            <div className="font-display leading-[0.82] text-[clamp(4rem,16vw,16rem)]">
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
                className="inline-block text-outline"
              >KISHORE</motion.span>
              <span className="text-primary">.</span>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="font-serif italic text-2xl md:text-3xl text-muted-foreground -mt-2"
            >
              the designer is loading…
            </motion.div>
          </div>

          <div className="absolute bottom-10 left-6 right-6 max-w-3xl mx-auto z-10">
            <div className="flex items-baseline justify-between font-mono text-xs text-muted-foreground mb-3">
              <span className="text-foreground">{LINES[line]}<span className="animate-blink">_</span></span>
              <span className="text-primary">{pct}%</span>
            </div>
            <div className="h-px w-full bg-border overflow-hidden">
              <motion.div
                className="h-full bg-primary glow-red origin-left"
                style={{ scaleX: pct / 100, width: "100%" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
