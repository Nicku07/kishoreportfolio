import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  ArrowUpRight, ArrowDown, Sparkles, Layers, Palette, Smartphone,
  Globe, Component, PenTool, Monitor, Compass, Mail, MapPin, Linkedin,
  Search, Lightbulb, PenLine, Boxes, Play, FlaskConical, Rocket,
  Coffee, Headphones, Moon, Zap, Eye, Heart, Loader2, Check, AlertCircle,
} from "lucide-react";
import logo from "@/assets/logo.png";
import kishorePortrait from "@/assets/kishore-portrait.png";
import { Cursor } from "@/components/portfolio/Cursor";
import { Magnetic } from "@/components/portfolio/Magnetic";
import { Reveal } from "@/components/portfolio/Reveal";
import { PROJECTS, ProjectCard } from "@/components/portfolio/Projects";
import { Preloader } from "@/components/portfolio/Preloader";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";
import { Scramble } from "@/components/portfolio/Scramble";
import { SceneBreak } from "@/components/portfolio/SceneBreak";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kishore Kumar Mandal — UI/UX Designer & Product Designer" },
      { name: "description", content: "UI/UX Designer crafting cinematic digital experiences, user-centered interfaces, product design systems, and immersive web experiences with modern interaction design." },
      { name: "keywords", content: "UI/UX Designer, Product Designer, Figma Designer, UX Case Study, Portfolio Website, Web Designer, Interaction Designer, Responsive Design, Design Systems, Creative Developer" },
      { name: "author", content: "Kishore Kumar Mandal" },
      { property: "og:title", content: "Kishore Kumar Mandal — UI/UX Designer & Product Designer" },
      { property: "og:description", content: "UI/UX & product designer crafting cinematic, user-centered digital experiences — case studies, design systems, and interaction design." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://kishorekumarmandal.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Kishore Kumar Mandal — UI/UX Designer & Product Designer" },
      { name: "twitter:description", content: "UI/UX & product designer crafting cinematic, user-centered digital experiences." },
    ],
    links: [
      { rel: "canonical", href: "https://kishorekumarmandal.lovable.app/" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Kishore Kumar Mandal",
        jobTitle: "UI/UX Designer & Product Designer",
        url: "https://kishorekumarmandal.lovable.app/",
        sameAs: ["https://www.linkedin.com/in/kishore-kumar-mandal-129788280/"],
        email: "mailto:nickuedito07@gmail.com",
        address: { "@type": "PostalAddress", addressLocality: "Jaipur", addressCountry: "IN" },
        knowsAbout: ["UI/UX Design", "Product Design", "Design Systems", "Figma", "Interaction Design", "Responsive Web Design"],
      }),
    }],
  }),
  component: Portfolio,
});

const SERVICES = [
  { icon: Layers, t: "UI / UX Design", d: "Human-first interfaces — researched, prototyped, polished into things people remember.", micro: "no lorem, no ipsum" },
  { icon: Component, t: "Product Design", d: "End-to-end product thinking, from problem framing to ship-ready systems.", micro: "0 → 1, then 1 → 100" },
  { icon: Monitor, t: "Web Design", d: "Editorial, motion-forward web experiences on disciplined grids.", micro: "swiss but make it cinematic" },
  { icon: Smartphone, t: "Mobile App Design", d: "Native-feeling journeys with gesture-aware interaction and meaningful motion.", micro: "thumb-zone obsessed" },
  { icon: Boxes, t: "Design Systems", d: "Component libraries and tokens that turn brand DNA into engineered consistency.", micro: "tokens or it didn't happen" },
  { icon: Palette, t: "Branding & Identity", d: "Visual systems with conviction — logo, type, color, tone that earn attention.", micro: "fonts have feelings" },
  { icon: PenTool, t: "Wireframing & Prototyping", d: "Low-to-high fidelity flows that de-risk decisions before code.", micro: "fail fast, ship slow" },
  { icon: Globe, t: "Responsive Design", d: "Fluid layouts engineered for every breakpoint, every device.", micro: "yes, the iPad mini too" },
  { icon: Compass, t: "Creative Direction", d: "Holistic art direction tying strategy, story and surface into one voice.", micro: "vibes, but defensible" },
];


const PROCESS = [
  { icon: Search, t: "Research", d: "User interviews, competitor teardown, journey mapping. The brief is where listening begins, not where decisions end.", out: "Insights · personas · pain map" },
  { icon: Lightbulb, t: "Strategy", d: "Translate insight into a product hypothesis with sharp intent — what to build, what to cut, what to prove first.", out: "Problem framing · north star" },
  { icon: PenLine, t: "Wireframing", d: "Low-fidelity speed runs — information architecture, flow trees, and structural choices before any pixel commits.", out: "IA · user flows · wires" },
  { icon: Boxes, t: "Systems", d: "Tokens, components, rules. Type, color, spacing and motion engineered for consistency at scale.", out: "Design system · tokens · kit" },
  { icon: Play, t: "Prototyping", d: "High-fidelity prototypes in Figma — micro-interactions and motion treated as part of the thinking, not the polish.", out: "Clickable prototype · motion specs" },
  { icon: FlaskConical, t: "Testing", d: "Usability sessions, heuristic reviews, and iteration cycles. Decisions backed by evidence, not opinion.", out: "Findings · iterations · validated UX" },
  { icon: Rocket, t: "Ship & Learn", d: "Hand-off ready specs, dev pairing, and post-launch reviews. Ship, watch, refine — the loop never closes.", out: "Specs · QA · learnings" },
];

const BRAND = [
  { title: "EdTech Brand Identity", short: "ed.", category: "Education · Identity System", year: "2025",
    desc: "A learning brand reimagined — type-led identity, motion-friendly logo grid, editorial color tuned for the modern classroom.",
    deliverables: ["Logo system", "Type & color tokens", "Editorial layout kit", "Motion-ready marks"],
    link: "https://www.figma.com/design/It8hYJ3caHnimPv08MeDHw/ed.-tech-Design?node-id=0-1&t=2LddWUlcUOiz5jQm-1",
    hue: "#8b9cff", surface: "#101426" },
  { title: "Mist Tecno India", short: "MT.", category: "Industrial · Futuristic Brand", year: "2024",
    desc: "Industrial-meets-futuristic brand identity. Sharp marks, mechanical typography, a language built to scale across product, print and packaging.",
    deliverables: ["Master mark", "Packaging system", "Mechanical type voice", "Brand guideline book"],
    link: "https://www.figma.com/design/2idqYXTMpPL1rdc3IxK6mU/MIST-TECNO-INDIA---FREELANCE---FINAL?node-id=0-1&t=8S199vVQONSZM1ji-1",
    hue: "#ff4d6d", surface: "#180a0e" },
];

const CONCEPTS = [
  { t: "Moodboard — Spatial Systems", d: "Visual exploration across interface, environment and motion.", link: "https://www.figma.com/slides/VQS8fUYkcCy7Zdkq0uORBE" },
  { t: "Concept — Product Narratives", d: "Storyboard-led product thinking for emerging surfaces.", link: "https://www.figma.com/slides/hkLSOJ1M8cthGjKF6iN2lN" },
  { t: "Studio Deck — Creative Direction", d: "An exploration of art direction, type and editorial rhythm.", link: "https://www.figma.com/deck/Gxe2lw5xj39diKkI3eY3Nm" },
  { t: "Studio Deck — Futuristic Thinking", d: "Speculative interfaces, future scenarios, sensory metaphors.", link: "https://www.figma.com/deck/AVcMPKNpD2FNl7c4TGNDxN" },
  { t: "Studio Deck — Storytelling Systems", d: "Narrative architecture across decks, brand and product.", link: "https://www.figma.com/deck/f9JmRWXMZojx2M51v4Oik1" },
];

const TESTIMONIALS = [
  { q: "Kishore reads briefs the way good directors read scripts — he finds the story inside the spec. The prototypes felt finished from review one.", a: "Product Lead, early-stage SaaS" },
  { q: "Rare to find a designer who balances aesthetic instinct with system-level rigor. Our library finally feels like infrastructure, not decoration.", a: "Engineering Manager, fintech" },
  { q: "The hospitality redesign moved metrics, but more importantly — it moved people. Guests started screenshotting the site.", a: "Marketing Director, hospitality" },
  { q: "Calm, opinionated, and unusually fast. Kishore unblocked our roadmap and left us with a design language we still ship against.", a: "Co-founder, healthtech" },
];

const STATS = [
  { n: "30+", l: "Projects Shipped" },
  { n: "3+", l: "Years Designing" },
  { n: "12+", l: "Brands Served" },
  { n: "∞", l: "Pixels Nudged" },
];

const MICRO_MARQUEE = [
  "Available for new work — Q1 2026",
  "Yes, I moved that button 3px",
  "Figma is open 25 hours a day",
  "Pixel-perfection survivor",
  "Dark mode enthusiast",
  "Probably redesigning this section again",
  "Currently shipping from Jaipur, IN",
];

function Portfolio() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const { scrollYProgress: pageProgress } = useScroll();
  const progressX = useTransform(pageProgress, [0, 1], ["0%", "100%"]);

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <Preloader />
      <SmoothScroll />
      <Cursor />
      <Nav />

      {/* progress bar */}
      <motion.div style={{ scaleX: pageProgress }} className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[60] origin-left glow-red" />

      {/* HERO */}
      <section ref={heroRef} id="home" className="relative min-h-screen flex flex-col px-6 md:px-12 pt-32 pb-24 noise overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-40 size-[500px] rounded-full bg-primary/15 blur-[140px] animate-pulse-glow" />
          <div className="absolute bottom-0 -right-40 size-[600px] rounded-full bg-accent/15 blur-[160px] animate-pulse-glow" />
        </div>

        {/* CINEMATIC FLOATING PORTRAIT — desktop only */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="hidden lg:block absolute right-[3vw] top-1/2 -translate-y-1/2 z-[5] w-[34vw] max-w-[520px] aspect-[3/4] pointer-events-none"
        >
          <div className="absolute inset-0 rounded-[2px] overflow-hidden border border-primary/20 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.9)]">
            <img src={kishorePortrait} alt="Kishore Kumar Mandal — portrait" className="absolute inset-0 w-full h-full object-cover scale-[1.04]" />
            {/* duotone wash */}
            <div className="absolute inset-0 mix-blend-color" style={{ background: "linear-gradient(180deg, oklch(0.62 0.24 22 / 0.25), oklch(0.11 0.005 30 / 0.35))" }} />
            {/* vignette + bottom fade into background */}
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 40%, oklch(0.11 0.005 30 / 0.7) 100%)" }} />
            <div className="absolute inset-x-0 bottom-0 h-1/2" style={{ background: "linear-gradient(180deg, transparent, oklch(0.11 0.005 30) 95%)" }} />
            {/* scanlines */}
            <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent 0px, transparent 2px, #fff 2px, #fff 3px)" }} />
            <div className="absolute inset-0 noise" />
          </div>
          {/* film meta corners */}
          <div className="absolute -top-6 left-0 font-mono text-[9px] uppercase tracking-[0.35em] text-primary/80 flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-primary animate-pulse-glow" />REEL · 01 / SUBJECT_01
          </div>
          <div className="absolute -bottom-6 right-0 font-mono text-[9px] uppercase tracking-[0.35em] text-muted-foreground">
            35mm · 24fps · A-CAM
          </div>
          <div className="absolute top-3 right-3 size-2 rounded-full bg-primary glow-red" />
          <div className="absolute bottom-3 left-3 font-mono text-[8px] uppercase tracking-[0.3em] text-white/60">
            ◉ rec · {`>>`}
          </div>
        </motion.div>

        {/* corner meta — editorial */}
        <div className="absolute top-28 left-6 md:left-12 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden md:block">
          <div>N° 2026 / 001</div>
          <div className="mt-1 text-primary">// portfolio.vol.01</div>
        </div>
        <div className="absolute top-28 right-6 md:right-12 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground text-right hidden md:block">
          <div>Jaipur — 26.9°N 75.8°E</div>
          <div className="mt-1">UI / UX · Product · Creative</div>
        </div>

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 flex-1 flex flex-col justify-center max-w-[1500px] mx-auto w-full">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }}
            className="flex items-center gap-3 mb-8 font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary animate-pulse-glow" />
            Kishore Kumar Mandal — Designer & Creative Technologist
          </motion.div>

          <h1 className="font-display leading-[0.82] tracking-tight text-[clamp(3.5rem,13vw,15rem)] lg:max-w-[62vw]">
            <span className="block">
              {"Designing".split("").map((c, i) => (
                <motion.span key={i} initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }} className="inline-block">{c}</motion.span>
              ))}
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
                className="text-outline ml-4 md:ml-8">interfaces</motion.span>
            </span>
            <span className="block font-serif italic text-[clamp(2.5rem,11vw,13rem)] leading-[0.9] text-muted-foreground">
              with <span className="text-foreground">chaos,</span>{" "}
              <span className="text-primary not-italic font-display">emotion</span>
              <span className="text-foreground">,</span>
            </span>
            <span className="block">
              <span className="text-outline-primary">&amp;</span>{" "}
              <motion.span initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.1, duration: 0.9 }}
                className="inline-block">precision<span className="text-primary">.</span></motion.span>
            </span>
          </h1>

          <div className="mt-12 grid md:grid-cols-12 gap-8 items-end">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.8 }}
              className="md:col-span-5 text-base md:text-lg text-muted-foreground leading-relaxed text-balance">
              A UI/UX, product & creative designer building digital experiences that feel <span className="text-foreground italic font-serif">inevitable</span> in the user's hand. Currently shipping from Jaipur — open to studios, startups & strange briefs worldwide.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6, duration: 0.8 }}
              className="md:col-span-4 md:col-start-9 flex flex-wrap gap-3 md:justify-end">
              <Magnetic>
                <a href="#works" className="group relative inline-flex items-center gap-2 px-7 py-4 rounded-full bg-primary text-primary-foreground font-medium glow-red overflow-hidden">
                  <span className="relative z-10">View Works</span>
                  <ArrowUpRight className="size-4 relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Magnetic>
              <Magnetic>
                <a href="#contact" className="inline-flex items-center gap-2 px-7 py-4 rounded-full glass-strong font-medium hover:bg-white/5 transition-colors">
                  Let's Talk
                </a>
              </Magnetic>
            </motion.div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground z-20">
          <span>Scroll the cinema</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
            <ArrowDown className="size-4" />
          </motion.div>
        </motion.div>
      </section>


      <Marquee items={["UI / UX DESIGN", "PRODUCT DESIGN", "BRAND SYSTEMS", "MOTION", "DESIGN SYSTEMS", "CREATIVE DIRECTION"]} />
      <SceneBreak word="chapter / about" caption="who's behind the cursor" direction="left" italic />

      {/* ABOUT */}
      <section id="about" className="relative py-32 px-6 md:px-12">
        <div className="max-w-[1500px] mx-auto grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-4 md:sticky md:top-32 self-start">
            <SectionLabel n="01" t="About" />
            <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.88] tracking-tight">
              A designer<br />who treats<br /><span className="font-serif italic text-primary">interfaces</span><br />like cinema.
            </h2>
          </Reveal>
          <div className="md:col-span-7 md:col-start-6 space-y-10">
            <Reveal>
              <p className="font-serif text-3xl md:text-5xl leading-[1.1] tracking-tight text-balance">
                I'm <span className="italic">Kishore</span> — a <span className="text-primary italic">UI/UX & Product Designer</span> building digital products that feel <span className="italic">inevitable</span>. My work lives at the intersection of research, systems and story.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Currently pursuing my <span className="text-foreground">BCA at Manipal University Jaipur</span> and <span className="text-foreground">Google UX Design Certified</span>. I design responsive web and mobile products, build scalable design systems in Figma, and care obsessively about typographic rhythm, interaction timing, and the choreography of a single tap.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                My philosophy is simple — <span className="text-foreground italic">great design is invisible in use and unforgettable in memory.</span> I'm looking for studios and product teams where I can ship serious UX, grow alongside great engineers, and turn ambiguous briefs into experiences people actually remember.
              </p>
            </Reveal>

            {/* Role chips — recruiter-friendly */}
            <Reveal delay={0.15}>
              <div className="flex flex-wrap gap-2">
                {[
                  "UI/UX Designer", "Product Designer", "Figma Expert",
                  "Design Systems", "Responsive Design", "Interaction Design",
                  "Wireframing & Prototyping", "BCA Student",
                ].map(r => (
                  <span key={r} className="text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-foreground">{r}</span>
                ))}
              </div>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-border">
              {STATS.map((s, i) => (
                <Reveal key={s.l} delay={i * 0.08}>
                  <div className="space-y-1">
                    <div className="font-display text-4xl md:text-6xl text-gradient-red leading-none">{s.n}</div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">{s.l}</div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <div className="pt-6 flex flex-wrap gap-2">
                {["Figma", "Framer", "Adobe XD", "Photoshop", "Illustrator", "After Effects", "Webflow", "Notion"].map(t => (
                  <span key={t} className="text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors">{t}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <SceneBreak word="live · operator · online" caption="the designer's OS" direction="right" />
      <LiveSpace />
      <SceneBreak word="now showing — works" caption="reel 01 / 08 scenes" direction="left" italic />

      {/* WORKS */}
      <section id="works" className="relative py-32 px-6 md:px-12">
        <div className="max-w-[1500px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <Reveal>
              <SectionLabel n="03" t="Selected Works" />
              <h2 className="mt-4 font-display text-5xl md:text-8xl leading-[0.88] tracking-tight">
                Work that ships.<br /><span className="font-serif italic text-primary">stories that scale.</span>
              </h2>
            </Reveal>
            <Reveal>
              <p className="max-w-xs text-sm text-muted-foreground font-mono uppercase tracking-[0.2em]">
                — eight selected projects.<br />— product, web, mobile.<br />— each, a study in clarity & motion.
              </p>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {PROJECTS.map((p, i) => <ProjectCard key={p.n} p={p} i={i} />)}
          </div>
        </div>
      </section>

      <SceneBreak word="craft · process · ship" caption="how the work happens" direction="right" />


      {/* SERVICES */}
      <section id="services" className="relative py-32 px-6 md:px-12">
        <div className="max-w-[1500px] mx-auto">
          <Reveal>
            <SectionLabel n="04" t="Services" />
            <h2 className="mt-4 font-display text-5xl md:text-8xl leading-[0.88] tracking-tight">
              What I <span className="font-serif italic text-primary">build.</span>
            </h2>
          </Reveal>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.t} delay={(i % 3) * 0.08}>
                <div className="group relative h-full p-8 rounded-2xl border border-border bg-card overflow-hidden ring-hover">
                  <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />
                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div className="size-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:glow-red transition-all">
                        <s.icon className="size-5 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <span className="font-mono text-[10px] text-muted-foreground">0{i + 1}</span>
                    </div>
                    <h3 className="mt-6 font-display text-3xl tracking-tight">{s.t}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                    <div className="mt-5 pt-4 border-t border-border font-mono text-[10px] uppercase tracking-[0.2em] text-primary/80 italic">
                      // {s.micro}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="relative py-32 px-6 md:px-12">
        <div className="max-w-[1500px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <Reveal>
              <SectionLabel n="05" t="UX Process" />
              <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.88] tracking-tight">
                How I think,<br />before I <span className="font-serif italic text-primary">design.</span>
              </h2>
            </Reveal>
            <Reveal>
              <p className="max-w-sm text-sm text-muted-foreground font-mono uppercase tracking-[0.2em]">
                — research → strategy → wireframe<br />— prototype → testing → ship<br />— a loop, not a line.
              </p>
            </Reveal>
          </div>

          {/* flow strip */}
          <Reveal>
            <div className="mt-12 hidden md:flex items-center gap-2 overflow-x-auto pb-2">
              {PROCESS.map((p, i) => (
                <div key={p.t} className="flex items-center gap-2 shrink-0">
                  <span className="px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground">{String(i+1).padStart(2,"0")} · {p.t}</span>
                  {i < PROCESS.length - 1 && <span className="h-px w-6 bg-border" />}
                </div>
              ))}
            </div>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.t} delay={(i % 4) * 0.06}>
                <div className="relative h-full p-6 rounded-2xl glass ring-hover flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className="font-mono text-[10px] text-primary tracking-[0.3em]">0{i + 1} / 07</div>
                    <p.icon className="size-5 text-primary" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl tracking-tight">{p.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{p.d}</p>
                  <div className="mt-5 pt-4 border-t border-border font-mono text-[10px] uppercase tracking-[0.2em] text-primary/80 italic">
                    // {p.out}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* impact strip */}
          <Reveal>
            <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { n: "5 → 2", l: "Avg. checkout steps reduced" },
                { n: "60s", l: "Mobile booking target time" },
                { n: "WCAG AA", l: "Color & type accessibility" },
                { n: "1 system", l: "Tokens across 200+ SKUs" },
              ].map((m) => (
                <div key={m.l} className="p-5 rounded-2xl border border-border bg-card">
                  <div className="font-display text-3xl md:text-4xl text-gradient-red leading-none">{m.n}</div>
                  <div className="mt-2 text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">{m.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>


      {/* BRANDING */}
      <section id="branding" className="relative py-32 px-6 md:px-12">
        <div className="max-w-[1500px] mx-auto">
          <Reveal>
            <SectionLabel n="06" t="Branding & Creative" />
            <h2 className="mt-4 font-display text-5xl md:text-8xl leading-[0.88] tracking-tight">
              Identity systems with <span className="font-serif italic text-primary">conviction.</span>
            </h2>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-2 gap-6 md:gap-8">
            {BRAND.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.1}>
                <a href={b.link} target="_blank" rel="noopener noreferrer"
                  className="group relative block overflow-hidden rounded-2xl border border-border bg-card ring-hover">
                  {/* CINEMATIC COVER */}
                  <div className="relative aspect-[16/11] overflow-hidden" style={{ background: b.surface }}>
                    <div className="absolute inset-0" style={{
                      background: `radial-gradient(ellipse at 20% 10%, ${b.hue}40, transparent 55%), radial-gradient(ellipse at 80% 100%, ${b.hue}25, transparent 60%)`
                    }} />
                    <div className="absolute inset-0 grid-bg opacity-20" />
                    <div className="absolute inset-0 noise" />
                    {/* giant outline mark */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="font-display leading-none text-[clamp(8rem,22vw,18rem)] select-none"
                        style={{ WebkitTextStroke: `1.5px ${b.hue}88`, color: "transparent", mixBlendMode: "screen" }}>
                        {b.short}
                      </div>
                    </div>
                    {/* floating "billboard" card */}
                    <div className="absolute left-6 bottom-6 w-[42%] rotate-[-4deg] rounded-md p-3 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.7)] border border-white/10 backdrop-blur-md"
                      style={{ background: `linear-gradient(135deg, ${b.hue}55, ${b.surface}cc)` }}>
                      <div className="text-[8px] font-mono uppercase tracking-[0.3em] text-white/70">brand · mark</div>
                      <div className="font-display text-3xl text-white mt-1 leading-none">{b.short}</div>
                      <div className="mt-2 grid grid-cols-4 gap-0.5">
                        {[1, 0.7, 0.45, 0.2].map((o, k) => (
                          <div key={k} className="h-3 rounded-sm" style={{ background: b.hue, opacity: o }} />
                        ))}
                      </div>
                    </div>
                    {/* floating "packaging" tile */}
                    <div className="absolute right-6 top-8 w-[28%] rotate-[6deg] rounded-md aspect-[3/4] border border-white/10 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.7)] overflow-hidden">
                      <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${b.hue}, ${b.surface})` }} />
                      <div className="absolute inset-0 noise opacity-50" />
                      <div className="absolute inset-x-2 top-2 font-mono text-[7px] uppercase tracking-[0.3em] text-white/80">{b.short}</div>
                      <div className="absolute inset-x-2 bottom-2 font-serif italic text-[9px] text-white/90 leading-tight">{b.category.split("·")[0]}</div>
                    </div>
                    {/* top meta */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-white/70 z-10">
                      <span className="flex items-center gap-2"><span className="size-1.5 rounded-full animate-pulse-glow" style={{ background: b.hue, boxShadow: `0 0 10px ${b.hue}` }} />brand system · 0{i + 1}</span>
                      <span>{b.year}</span>
                    </div>
                    {/* film bars on hover */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-0 group-hover:h-5 bg-black transition-all duration-500" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0 group-hover:h-5 bg-black transition-all duration-500" />
                  </div>

                  {/* META */}
                  <div className="p-6 md:p-8 space-y-5">
                    <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.3em]">
                      <span className="flex items-center gap-2 text-muted-foreground"><span className="size-1.5 rounded-full" style={{ background: b.hue }} />{b.category}</span>
                      <span className="text-muted-foreground">// 0{i + 1} of 0{BRAND.length}</span>
                    </div>
                    <h3 className="font-display text-3xl md:text-5xl leading-[0.9] tracking-tight">{b.title}</h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{b.desc}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {b.deliverables.map(d => (
                        <span key={d} className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border border-border text-muted-foreground">{d}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">brand · identity · system</span>
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: b.hue }}>
                        View Project <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700 ease-out" style={{ background: `linear-gradient(90deg, transparent, ${b.hue}, transparent)` }} />
                </a>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* CONCEPTS */}
      <section id="concepts" className="relative py-32 px-6 md:px-12">
        <div className="max-w-[1500px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <Reveal>
              <SectionLabel n="07" t="Studio / Concepts" />
              <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.88] tracking-tight">
                Experiments &<br /><span className="font-serif italic text-primary">moodboards.</span>
              </h2>
            </Reveal>
            <Reveal><p className="max-w-sm text-muted-foreground">Explorations in product concepts, storytelling systems and creative direction. Where the weird ideas live before they're tamed.</p></Reveal>
          </div>
          <div className="space-y-3">
            {CONCEPTS.map((c, i) => (
              <Reveal key={c.t} delay={i * 0.05}>
                <a href={c.link} target="_blank" rel="noopener noreferrer"
                  className="group relative flex items-center justify-between gap-6 p-6 md:p-10 rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-all">
                  <div className="absolute left-0 top-0 h-full w-0 bg-primary/10 group-hover:w-full transition-all duration-700 ease-out" />
                  <div className="relative flex items-center gap-6 md:gap-10 min-w-0">
                    <span className="font-mono text-[10px] text-primary tracking-[0.3em]">0{i + 1}</span>
                    <div className="min-w-0">
                      <h3 className="font-display text-2xl md:text-5xl tracking-tight truncate group-hover:text-primary transition-colors">
                        <Scramble text={c.t} trigger="hover" />
                      </h3>
                      <p className="font-serif italic text-sm md:text-base text-muted-foreground mt-1 hidden md:block">{c.d}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="relative size-5 md:size-7 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all duration-500 shrink-0" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="words" className="relative py-32 px-6 md:px-12">
        <div className="max-w-[1500px] mx-auto">
          <Reveal>
            <SectionLabel n="08" t="Kind Words" />
            <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.88] tracking-tight">
              What teams <span className="font-serif italic text-primary">say.</span>
            </h2>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={(i % 2) * 0.1}>
                <div className="h-full p-8 md:p-10 rounded-2xl glass ring-hover">
                  <Sparkles className="size-5 text-primary" />
                  <p className="mt-6 font-serif text-2xl md:text-3xl leading-[1.2] text-balance">"{t.q}"</p>
                  <div className="mt-6 pt-6 border-t border-border text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">— {t.a}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Marquee items={MICRO_MARQUEE} small />

      <SceneBreak word="end credits — let's talk" caption="roll the brief" direction="right" italic />
      <Contact />
      <Footer />
    </main>
  );
}

function SectionLabel({ n, t }: { n: string; t: string }) {
  return (
    <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.4em] text-muted-foreground">
      <span className="text-primary">{n}</span>
      <span className="h-px w-12 bg-border" />
      {t}
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const items = [
    { l: "Works", h: "#works" }, { l: "About", h: "#about" }, { l: "Live Space", h: "#live" },
    { l: "Services", h: "#services" }, { l: "Contact", h: "#contact" },
  ];
  return (
    <motion.header initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 3 }}
      className="fixed top-4 inset-x-4 z-50 max-w-[1500px] mx-auto">
      <div className="glass-strong rounded-full px-4 md:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5">
          <img src={logo} alt="Kishore Kumar Mandal" className="size-7" />
          <span className="font-display text-lg tracking-wide hidden sm:inline">KISHORE<span className="text-primary">.</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-1">
          {items.map(i => (
            <a key={i.h} href={i.h} className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">{i.l}</a>
          ))}
        </nav>
        <Magnetic>
          <a href="#contact" className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium">
            Let's Talk <ArrowUpRight className="size-3.5" />
          </a>
        </Magnetic>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground" aria-label="Menu">
          <div className="space-y-1.5">
            <span className={`block h-px w-5 bg-current transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`block h-px w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-5 bg-current transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </div>
        </button>
      </div>
      {open && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 glass-strong rounded-2xl p-4 space-y-1">
          {items.map(i => (
            <a key={i.h} href={i.h} onClick={() => setOpen(false)} className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground">{i.l}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="block px-3 py-2 text-sm text-primary font-medium">Let's Talk →</a>
        </motion.div>
      )}
    </motion.header>
  );
}

function Marquee({ items, small }: { items: string[]; small?: boolean }) {
  return (
    <div className={`relative ${small ? "py-6" : "py-12"} border-y border-border overflow-hidden`}>
      <div className={`flex whitespace-nowrap ${small ? "animate-marquee-slow" : "animate-marquee"}`}>
        {[...Array(2)].map((_, k) => (
          <div key={k} className="flex items-center gap-10 pr-10">
            {items.map((w, i) => (
              <div key={`${k}-${i}`} className="flex items-center gap-10">
                <span className={`${small ? "font-mono uppercase tracking-[0.3em] text-sm text-muted-foreground" : "font-display text-5xl md:text-7xl tracking-tight text-foreground/80"}`}>{w}</span>
                <span className={`${small ? "size-1.5" : "size-3"} rounded-full bg-primary glow-red shrink-0`} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────
   LIVE SPACE — personal creative zone
   ──────────────────────────────────────────────────────────────────── */
function LiveSpace() {
  const [time, setTime] = useState(new Date());
  useEffect(() => { const t = setInterval(() => setTime(new Date()), 1000); return () => clearInterval(t); }, []);
  const ist = time.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false, timeZone: "Asia/Kolkata" });
  const hh = Number(ist.slice(0, 2));
  const phase = hh < 6 ? "night shift" : hh < 12 ? "morning sprint" : hh < 18 ? "deep work" : hh < 23 ? "studio hours" : "night shift";

  const PRINCIPLES = [
    "clarity over cleverness.",
    "motion is meaning, not decoration.",
    "whitespace is a feature.",
    "design the empty state first.",
    "if it needs a tooltip, redesign it.",
  ];

  const INSPIRATIONS = ["Awwwards", "Read.cv", "Linear", "Vercel", "Rauno", "MoMA Design", "Studio Brutto", "It's Nice That"];

  return (
    <section id="live" className="relative py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 size-[800px] rounded-full bg-primary/10 blur-[180px]" />

      <div className="relative max-w-[1500px] mx-auto">
        {/* OS HEADER BAR */}
        <Reveal>
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground border border-border rounded-full px-5 py-2.5 glass-strong">
            <span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-green-500 animate-pulse-glow" /> kkm.os — v.2026.1</span>
            <span className="hidden md:inline">// {phase}</span>
            <span className="text-primary">{ist} IST</span>
          </div>
        </Reveal>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <Reveal>
            <SectionLabel n="02" t="Live Space / OS" />
            <h2 className="mt-4 font-display text-5xl md:text-8xl leading-[0.88] tracking-tight">
              Inside the<br /><span className="font-serif italic text-primary">designer's OS.</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="max-w-sm font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              // a live look at the operating system<br />// currently running my brain — windows, tabs,<br />// obsessions, principles, all of it.
            </p>
          </Reveal>
        </div>

        {/* ROW 1 — operator + clock + status strip */}
        <div className="grid md:grid-cols-12 gap-4 md:gap-5">
          <Reveal className="md:col-span-7 md:row-span-2">
            <div className="relative aspect-[4/5] md:aspect-auto md:h-full rounded-2xl overflow-hidden border border-border group">
              <img src={kishorePortrait} alt="Kishore Kumar Mandal" className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] contrast-[1.05] group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent 0px, transparent 2px, #fff 2px, #fff 3px)" }} />
              <div className="absolute inset-0 noise" />
              <div className="absolute top-5 left-5 right-5 flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-white/80">
                <div>
                  <div className="text-primary flex items-center gap-1.5"><span className="size-1.5 rounded-full bg-primary animate-pulse-glow" /> REC</div>
                  <div className="mt-1">subject_01 · operator</div>
                </div>
                <div className="text-right">
                  <div>23MM • F/1.9</div>
                  <div>ISO_567 · CAM-A</div>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-2">// the operator</div>
                <div className="font-display text-3xl md:text-5xl leading-[0.95] text-white">
                  Kishore Kumar<br />Mandal<span className="text-primary">.</span>
                </div>
                <div className="font-serif italic text-base text-white/70 mt-2">"i probably moved that button 3px. again."</div>
              </div>
              <div className="absolute top-1/2 -right-3 md:right-5 px-3 py-1.5 rounded-full glass-strong text-[10px] font-mono uppercase tracking-[0.2em] text-primary flex items-center gap-2 animate-float">
                <span className="size-1.5 rounded-full bg-primary animate-pulse-glow" /> live
              </div>
            </div>
          </Reveal>

          {/* CLOCK */}
          <Reveal className="md:col-span-5">
            <div className="relative h-full p-6 rounded-2xl glass-strong overflow-hidden">
              <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 80% 20%, oklch(0.62 0.24 22 / 0.4), transparent 60%)" }} />
              <div className="relative">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground flex justify-between">
                  <span>// local_time</span><span className="text-primary">IST · jaipur</span>
                </div>
                <div className="font-display text-6xl md:text-8xl tracking-tight mt-3 text-gradient-red tabular-nums">{ist}</div>
                <div className="font-serif italic text-sm text-muted-foreground mt-2">
                  {phase} — {hh < 6 || hh > 22 ? "yes, still designing." : "deep in figma."}
                </div>
              </div>
            </div>
          </Reveal>

          {/* CURRENTLY DESIGNING */}
          <Reveal className="md:col-span-5">
            <div className="relative h-full p-6 rounded-2xl border border-primary/30 bg-card overflow-hidden">
              <div className="absolute -top-20 -right-20 size-60 rounded-full bg-primary/20 blur-[80px]" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary flex items-center gap-2"><span className="size-1.5 rounded-full bg-primary animate-pulse-glow" /> currently designing</div>
                  <span className="text-[10px] font-mono text-muted-foreground">/ wip</span>
                </div>
                <div className="font-display text-2xl md:text-3xl mt-3 leading-[1]">
                  A fintech onboarding<br /><span className="font-serif italic text-primary">that respects your time.</span>
                </div>
                <div className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  <span className="h-1 flex-1 bg-border rounded overflow-hidden"><span className="block h-full w-[68%] bg-primary glow-red" /></span>
                  <span>68%</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ROW 2 — small status grid */}
        <div className="mt-4 md:mt-5 grid md:grid-cols-12 gap-4 md:gap-5">
          <Reveal className="md:col-span-3">
            <div className="h-full p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors">
              <Headphones className="size-5 text-primary" />
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-4">now playing</div>
              <div className="font-display text-xl mt-1">Lo-fi Beats</div>
              <div className="font-serif italic text-xs text-muted-foreground">to design (and overthink) to</div>
              <div className="mt-4 flex gap-1 items-end h-7">
                {[14, 22, 10, 28, 16, 24, 12, 20, 18, 26].map((h, i) => (
                  <div key={i} className="w-1 bg-primary/60 rounded-full animate-pulse-glow" style={{ height: h, animationDelay: `${i * 0.15}s` }} />
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="md:col-span-2">
            <div className="h-full p-6 rounded-2xl border border-border bg-card">
              <Zap className="size-5 text-primary" />
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-4">mood</div>
              <div className="font-display text-2xl mt-1">focused.</div>
              <div className="font-serif italic text-xs text-muted-foreground">caffeinated.</div>
            </div>
          </Reveal>

          <Reveal className="md:col-span-2">
            <div className="h-full p-6 rounded-2xl glass">
              <Coffee className="size-5 text-primary" />
              <div className="font-display text-5xl text-gradient-red mt-3">04</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">cups · today</div>
            </div>
          </Reveal>

          <Reveal className="md:col-span-5">
            <div className="h-full p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors">
              <div className="flex items-center justify-between">
                <Eye className="size-5 text-primary" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">currently obsessed with</span>
              </div>
              <div className="font-display text-3xl md:text-4xl mt-4 leading-[0.95]">
                Kinetic typography,<br /><span className="font-serif italic text-primary">editorial brutalism</span>,<br />and motion that means something.
              </div>
            </div>
          </Reveal>
        </div>

        {/* ROW 3 — terminal + principles */}
        <div className="mt-4 md:mt-5 grid md:grid-cols-12 gap-4 md:gap-5">
          <Reveal className="md:col-span-7">
            <div className="h-full p-6 rounded-2xl bg-black/40 border border-border font-mono text-sm">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                <div className="flex gap-1.5"><span className="size-2.5 rounded-full bg-red-500/70" /><span className="size-2.5 rounded-full bg-yellow-500/70" /><span className="size-2.5 rounded-full bg-green-500/70" /></div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">~ /designer/thoughts.log</span>
              </div>
              <div className="space-y-1.5 text-muted-foreground">
                <div><span className="text-primary">$</span> grep -r "great_design" /life</div>
                <div className="pl-4 text-foreground">→ "invisible in use, unforgettable in memory."</div>
                <div><span className="text-primary">$</span> status --current</div>
                <div className="pl-4 text-foreground">→ figma open. spotify open. heart open.</div>
                <div><span className="text-primary">$</span> believe --in</div>
                <div className="pl-4 text-foreground">→ grids. whitespace. one more nudge.</div>
                <div><span className="text-primary">$</span> hot_take --design</div>
                <div className="pl-4 text-foreground">→ "dark mode is a personality trait."</div>
                <div><span className="text-primary">$</span> <span className="text-foreground">_</span><span className="animate-blink text-foreground">|</span></div>
              </div>
            </div>
          </Reveal>

          <Reveal className="md:col-span-5">
            <div className="h-full p-6 rounded-2xl glass-strong">
              <div className="flex items-center justify-between">
                <Sparkles className="size-5 text-primary" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">design · principles</span>
              </div>
              <ul className="mt-5 space-y-3">
                {PRINCIPLES.map((p, k) => (
                  <li key={p} className="flex items-baseline gap-3 font-serif text-lg md:text-xl leading-snug">
                    <span className="font-mono text-[10px] text-primary tracking-[0.3em] shrink-0">0{k + 1}</span>
                    <span className="italic">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* ROW 4 — workflow + inspirations + workspace + manifesto */}
        <div className="mt-4 md:mt-5 grid md:grid-cols-12 gap-4 md:gap-5">
          {/* WORKFLOW */}
          <Reveal className="md:col-span-5">
            <div className="h-full p-6 rounded-2xl border border-border bg-card">
              <div className="flex items-center justify-between">
                <Compass className="size-5 text-primary" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">workflow · philosophy</span>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 font-mono text-[10px] uppercase tracking-[0.2em]">
                {[
                  ["08:00", "coffee · research"],
                  ["10:30", "figma · build"],
                  ["14:00", "review · iterate"],
                  ["17:30", "ship · sketch"],
                  ["22:00", "moodboards · read"],
                  ["01:00", "one · more · nudge"],
                ].map(([t, l]) => (
                  <div key={t} className="flex items-center gap-2 border border-border rounded-md px-2.5 py-2 bg-background/40">
                    <span className="text-primary">{t}</span>
                    <span className="text-muted-foreground truncate">{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* INSPIRATIONS */}
          <Reveal className="md:col-span-4">
            <div className="h-full p-6 rounded-2xl glass overflow-hidden relative">
              <div className="flex items-center justify-between">
                <Heart className="size-5 text-primary" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">inspiration · feed</span>
              </div>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {INSPIRATIONS.map(t => (
                  <span key={t} className="text-[10px] font-mono uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors">{t}</span>
                ))}
              </div>
              <div className="mt-5 font-serif italic text-sm text-muted-foreground border-t border-border pt-4">
                "i steal like an artist — and credit like a designer."
              </div>
            </div>
          </Reveal>

          {/* WORKSPACE */}
          <Reveal className="md:col-span-3">
            <div className="h-full p-6 rounded-2xl border border-border bg-card overflow-hidden relative">
              <div className="absolute -bottom-10 -right-10 size-32 rounded-full bg-primary/15 blur-[40px]" />
              <Moon className="size-5 text-primary" />
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-4">workspace</div>
              <div className="font-display text-2xl mt-1">dark mode<br /><span className="font-serif italic text-primary">always.</span></div>
              <div className="font-serif italic text-xs text-muted-foreground mt-3">light mode is for cowards.</div>
            </div>
          </Reveal>
        </div>

        {/* ROW 5 — stack + manifesto */}
        <div className="mt-4 md:mt-5 grid md:grid-cols-12 gap-4 md:gap-5">
          <Reveal className="md:col-span-8">
            <div className="h-full p-6 rounded-2xl glass">
              <div className="flex items-center justify-between">
                <Boxes className="size-5 text-primary" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">daily · stack</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {["figma", "framer", "notion", "spotify", "linear", "raycast", "arc", "miro", "after effects", "principle"].map(t => (
                  <span key={t} className="text-[10px] font-mono uppercase tracking-[0.2em] px-2 py-1 rounded-full border border-border text-muted-foreground">{t}</span>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-border font-serif italic text-sm text-muted-foreground">
                "tools don't make the designer — but the right ones get out of the way."
              </div>
            </div>
          </Reveal>

          <Reveal className="md:col-span-4">
            <a href="#contact" className="group h-full p-6 rounded-2xl bg-primary text-primary-foreground flex flex-col justify-between hover:glow-red transition-all overflow-hidden relative">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent 0 10px, rgba(255,255,255,0.08) 10px 11px)" }} />
              <div className="relative font-mono text-[10px] uppercase tracking-[0.3em] opacity-80">// manifesto</div>
              <div className="relative font-display text-2xl leading-[0.95] mt-4">
                Design the thing<br /><span className="font-serif italic">you wish existed.</span>
              </div>
              <div className="relative mt-4 inline-flex items-center gap-1.5 text-sm font-medium">
                build it with me <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


/* ────────────────────────────────────────────────────────────────────
   CONTACT — EmailJS
   ──────────────────────────────────────────────────────────────────── */
type Status = "idle" | "sending" | "sent" | "error";

function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const validate = (data: Record<string, string>) => {
    const e: Record<string, string> = {};
    if (!data.name?.trim() || data.name.length > 100) e.name = "name required (≤100 chars)";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || "") || data.email.length > 255) e.email = "valid email required";
    if (!data.message?.trim() || data.message.length > 1500) e.message = "message required (≤1500 chars)";
    return e;
  };

  const onSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const form = formRef.current!;
    const fd = new FormData(form);
    const data = Object.fromEntries(Array.from(fd.entries()).map(([k, v]) => [k, String(v).trim()])) as Record<string, string>;
    const e = validate(data); setErrors(e);
    if (Object.keys(e).length) return;
    setStatus("sending");
    try {
      await emailjs.send("service_gh9f75z", "template_7bs85wl",
        { from_name: data.name, reply_to: data.email, project_type: data.type || "—", budget: data.budget || "—", message: data.message },
        "oD1ZFs8lLsd6MWhEq");
      setStatus("sent"); form.reset();
      setTimeout(() => setStatus("idle"), 6000);
    } catch (err) { console.error(err); setStatus("error"); }
  };

  return (
    <section id="contact" className="relative py-32 px-6 md:px-12">
      <div className="max-w-[1500px] mx-auto">
        <div className="relative grid md:grid-cols-12 gap-12 p-8 md:p-16 rounded-3xl glass-strong overflow-hidden noise">
          <div className="absolute -top-40 -right-40 size-[500px] rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 size-[400px] rounded-full bg-accent/15 blur-[120px]" />

          <div className="md:col-span-5 relative">
            <SectionLabel n="09" t="Contact" />
            <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.88] tracking-tight">
              Let's build<br />something<br /><span className="font-serif italic text-primary">exceptional.</span>
            </h2>
            <p className="mt-6 font-serif italic text-xl text-muted-foreground leading-relaxed max-w-md">
              A brief, a problem, or a half-formed idea — send it. I reply within 48 hours, usually faster, usually with too many questions.
            </p>
            <div className="mt-10 space-y-3 text-sm">
              <a href="mailto:nickuedito07@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="size-4" /> nickuedito07@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/kishore-kumar-mandal-129788280/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="size-4" /> /in/kishore-kumar-mandal
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="size-4" /> Jaipur, IN — remote worldwide
              </div>
            </div>
            <div className="mt-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">
              <span className="size-1.5 rounded-full bg-green-500 animate-pulse-glow" /> open for Q1 2026
            </div>
          </div>

          <form ref={formRef} onSubmit={onSubmit} noValidate className="md:col-span-7 relative grid sm:grid-cols-2 gap-5">
            <Field label="Name" name="name" error={errors.name} />
            <Field label="Email" name="email" type="email" error={errors.email} />
            <Field label="Project Type" name="type" />
            <Field label="Budget (optional)" name="budget" />
            <div className="sm:col-span-2">
              <Field label="The brief" name="message" textarea error={errors.message} />
            </div>
            <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-4 pt-2">
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-2">
                {status === "sent" && <><Check className="size-3.5 text-green-500" /> message landed — talk soon.</>}
                {status === "error" && <><AlertCircle className="size-3.5 text-primary" /> something broke. email me directly.</>}
                {status === "idle" && "// encrypted in spirit"}
                {status === "sending" && <><Loader2 className="size-3.5 animate-spin" /> sending…</>}
              </p>
              <Magnetic>
                <button type="submit" disabled={status === "sending"}
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-primary text-primary-foreground font-medium glow-red disabled:opacity-60 disabled:cursor-not-allowed transition-all">
                  {status === "sending" ? <>Sending <Loader2 className="size-4 animate-spin" /></>
                    : status === "sent" ? <>Sent <Check className="size-4" /></>
                    : <>Send Message <ArrowUpRight className="size-4" /></>}
                </button>
              </Magnetic>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", textarea, error }: { label: string; name: string; type?: string; textarea?: boolean; error?: string }) {
  const [focus, setFocus] = useState(false);
  const cls = `peer w-full bg-transparent border-b ${error ? "border-primary" : "border-border focus:border-primary"} outline-none py-3 text-foreground transition-colors placeholder-transparent`;
  return (
    <div className="relative">
      {textarea ? (
        <textarea id={name} name={name} placeholder={label} rows={4} maxLength={1500}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} className={cls} />
      ) : (
        <input id={name} name={name} type={type} placeholder={label} maxLength={255}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} className={cls} />
      )}
      <label htmlFor={name}
        className={`absolute left-0 text-[10px] font-mono uppercase tracking-[0.3em] transition-all pointer-events-none ${focus || error ? "-top-1 text-primary" : "top-3 text-muted-foreground"}`}>
        {error || label}
      </label>
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-border overflow-hidden">
      {/* CINEMATIC ENDING SHOT */}
      <div className="relative w-full h-[60vh] min-h-[480px] overflow-hidden">
        <img src={kishorePortrait} alt="" className="absolute inset-0 w-full h-full object-cover object-top opacity-50 scale-105" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 0%, oklch(0.11 0.005 30 / 0.7) 60%, oklch(0.11 0.005 30) 100%)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute inset-0 noise" />
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent 0px, transparent 2px, #fff 2px, #fff 3px)" }} />

        <div className="relative h-full max-w-[1500px] mx-auto px-6 md:px-12 flex flex-col justify-between py-12">
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
            <span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-primary animate-pulse-glow" /> end credits</span>
            <span>fade to black · 00:00</span>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary mb-4">// the final scene</div>
            <h2 className="font-display leading-[0.82] tracking-tight text-[clamp(3.5rem,14vw,16rem)]">
              <span className="block">until <span className="font-serif italic text-primary">next</span></span>
              <span className="block text-outline">frame<span className="text-primary not-italic">.</span></span>
            </h2>
            <p className="mt-6 font-serif italic text-xl md:text-2xl text-muted-foreground max-w-xl">
              "the credits roll, the cursor blinks, the next pixel is already calling."
            </p>
          </div>
        </div>
      </div>

      <div className="relative px-6 md:px-12 py-16 border-t border-border">
        <div className="max-w-[1500px] mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img src={logo} alt="" className="size-9" />
              <span className="font-display text-2xl tracking-wide">KISHORE KUMAR MANDAL<span className="text-primary">.</span></span>
            </div>
            <p className="mt-6 font-serif italic text-lg text-muted-foreground max-w-sm leading-relaxed">
              Designing digital experiences that feel alive — crafted with intent, shipped with conviction.
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-4">Navigate</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[["Works", "#works"], ["Live Space", "#live"], ["About", "#about"], ["Services", "#services"], ["Contact", "#contact"]].map(([l, h]) => (
                <li key={h}><a href={h} className="hover:text-foreground transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-4">Elsewhere</div>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/kishore-kumar-mandal-129788280/" target="_blank" rel="noopener noreferrer"
                className="size-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                <Linkedin className="size-4" />
              </a>
              <a href="mailto:nickuedito07@gmail.com"
                className="size-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                <Mail className="size-4" />
              </a>
            </div>
            <div className="mt-6 font-serif italic text-sm text-muted-foreground">
              "if you scrolled this far, we should probably talk."
            </div>
          </div>
        </div>
        <div className="max-w-[1500px] mx-auto mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-3 text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">
          <div>© 2026 Kishore Kumar Mandal. all rights reserved.</div>
          <div>crafted in figma · shipped from Jaipur, IN</div>
        </div>
      </div>
    </footer>
  );
}

