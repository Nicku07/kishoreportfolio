import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Cinematic scene break: huge editorial word(s) that scroll horizontally
 * across the viewport as the user scrolls past. Used as connective tissue
 * between sections, like film chapter breaks.
 */
export function SceneBreak({
  word,
  caption,
  direction = "left",
  italic,
}: { word: string; caption?: string; direction?: "left" | "right"; italic?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], direction === "left" ? ["20%", "-50%"] : ["-50%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.2, 1, 1, 0.2]);

  return (
    <section ref={ref} className="relative py-16 md:py-28 overflow-hidden border-y border-border/40">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0 noise" />

      {/* chapter meta */}
      <div className="relative max-w-[1500px] mx-auto px-6 md:px-12 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-8">
        <span className="flex items-center gap-3"><span className="size-1.5 rounded-full bg-primary animate-pulse-glow" /> scene break</span>
        {caption && <span className="hidden md:inline text-primary">// {caption}</span>}
        <span>{direction === "left" ? "→→→" : "←←←"}</span>
      </div>

      <motion.div style={{ x, opacity }} className="whitespace-nowrap pointer-events-none">
        <span className={`font-display leading-[0.82] tracking-tight text-[clamp(5rem,18vw,22rem)] ${italic ? "font-serif italic" : ""}`}>
          {word}<span className="text-primary">.</span>{" "}
          <span className="text-outline">{word}</span><span className="text-primary">.</span>{" "}
          {word}<span className="text-primary">.</span>
        </span>
      </motion.div>
    </section>
  );
}
