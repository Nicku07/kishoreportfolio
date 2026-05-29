import { useEffect, useRef, useState } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

export function Scramble({ text, className, trigger = "view" }: { text: string; className?: string; trigger?: "view" | "hover" | "mount" }) {
  const [out, setOut] = useState(text);
  const ref = useRef<HTMLSpanElement>(null);
  const playing = useRef(false);

  const play = () => {
    if (playing.current) return;
    playing.current = true;
    const queue: { from: string; to: string; start: number; end: number; char?: string }[] = [];
    const length = Math.max(out.length, text.length);
    for (let i = 0; i < length; i++) {
      const from = out[i] || "";
      const to = text[i] || "";
      const start = Math.floor(Math.random() * 30);
      const end = start + Math.floor(Math.random() * 30);
      queue.push({ from, to, start, end });
    }
    let frame = 0;
    const update = () => {
      let s = ""; let done = 0;
      for (const q of queue) {
        if (frame >= q.end) { done++; s += q.to; }
        else if (frame >= q.start) {
          if (!q.char || Math.random() < 0.28) q.char = CHARS[Math.floor(Math.random() * CHARS.length)];
          s += `<span style="color:var(--color-primary)">${q.char}</span>`;
        } else s += q.from;
      }
      if (ref.current) ref.current.innerHTML = s;
      if (done < queue.length) { frame++; requestAnimationFrame(update); }
      else { playing.current = false; setOut(text); }
    };
    update();
  };

  useEffect(() => {
    if (trigger === "mount") { play(); return; }
    if (trigger !== "view") return;
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((es) => es.forEach(e => { if (e.isIntersecting) { play(); io.disconnect(); } }), { threshold: 0.4 });
    io.observe(el); return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <span ref={ref} className={className} onMouseEnter={trigger === "hover" ? play : undefined}>{out}</span>;
}
