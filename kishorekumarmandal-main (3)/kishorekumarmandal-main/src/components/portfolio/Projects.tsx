import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Search, ShoppingBag, Leaf, Star, Calendar, Stethoscope, Wifi, Compass, Heart, Play } from "lucide-react";
import { useRef, type CSSProperties } from "react";

export type Scene =
  | "ecommerce" | "grocery" | "hospitality" | "edu"
  | "doctor" | "patient" | "broadband" | "reway";

export type Project = {
  n: string;
  title: string;
  category: string;
  desc: string;
  link: string;        // Figma file
  prototype: string;   // Figma prototype link
  tags: string[];
  scene: Scene;
  hue: string;
  device: "phone" | "laptop" | "duo";
  role: string;
  duration: string;
  team: string;
  tools: string[];
  problem: string;
  goal: string;
  persona: string;
  insight: string;
  solution: string;
  outcomes: string[];
};

export const PROJECTS: Project[] = [
  { n: "01", title: "InKart — eCommerce", category: "eCommerce / Product Design", scene: "ecommerce", hue: "#ff4d6d", device: "duo",
    desc: "A conversion-engineered storefront. Discovery rebuilt like a film reel, checkout choreographed to disappear, design system tuned to scale across SKUs.",
    link: "https://www.figma.com/design/csQxcTt6K7yQa3k96CCXsg/InKart?node-id=428-2&t=LbAttbke3qixPeMY-1",
    prototype: "https://www.figma.com/proto/csQxcTt6K7yQa3k96CCXsg/InKart?node-id=241-3654&viewport=417%2C449%2C0.1&t=XghM1cBD71L4mR0t-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=241%3A3654&page-id=4%3A22",
    tags: ["UX", "Design System", "Mobile"],
    role: "Lead UI/UX Designer", duration: "6 Weeks", team: "Solo + 1 PM",
    tools: ["Figma", "Photoshop", "Illustrator"],
    problem: "Existing storefront buried products under noisy navigation and a 5-step checkout that lost users at payment.",
    goal: "Rebuild discovery and checkout into a single, calm flow that scales across 200+ SKUs.",
    persona: "Aanya, 26 — urban shopper buying on mobile during commute. Wants speed, trust, and zero friction.",
    insight: "Most test users abandoned at address entry; the PLP made it hard to tell brand from price at a glance.",
    solution: "Editorial PLP grid, sticky filters, a 2-step checkout with smart defaults, and a token-driven UI kit for new categories.",
    outcomes: ["Reduced checkout steps from 5 → 2", "Improved product discovery clarity", "Scalable design system across 200+ SKUs"] },

  { n: "02", title: "FreshKart — Grocery", category: "Grocery Commerce", scene: "grocery", hue: "#7be495", device: "phone",
    desc: "Fresh produce, frictionless flow. Browsing rhythm tuned to the thumb, a checkout that vanishes, a hierarchy that lets food breathe on screen.",
    link: "https://www.figma.com/design/LNAhJM4ZzmEXL0N0mTK5YL/Freshkart?node-id=1-12&t=mvoaJHSLkkdFIruU-1",
    prototype: "https://www.figma.com/proto/LNAhJM4ZzmEXL0N0mTK5YL/Freshkart?node-id=243-3370&viewport=45%2C397%2C0.18&t=uZUljxVX8VVb7tLU-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=243%3A3370&page-id=1%3A16",
    tags: ["Commerce", "Mobile-first", "UX"],
    role: "UI/UX Designer", duration: "4 Weeks", team: "Solo",
    tools: ["Figma", "Illustrator"],
    problem: "Daily grocery apps overwhelm with categories. Users wanted a 10-minute reorder, not a hunt.",
    goal: "Design a thumb-first flow that gets repeat buyers to checkout in under 60 seconds.",
    persona: "Rohan, 32 — busy parent reordering staples 3× a week. Values speed and reliable freshness.",
    insight: "Repeat purchases dominated, yet 'Reorder' was buried 3 taps deep.",
    solution: "Reorder-first home, category chips above the fold, single-screen cart, calm green-on-near-black palette for produce clarity.",
    outcomes: ["Repeat-order flow reduced to 3 taps", "Cleaner produce hierarchy & legibility", "Reusable category & cart components"] },

  { n: "03", title: "Chokhi Dhani Sonipat", category: "Luxury Hospitality", scene: "hospitality", hue: "#f1b24a", device: "laptop",
    desc: "An editorial-grade hospitality story — cultural texture, cinematic rhythm, a booking system as warm as the lobby it stands for.",
    link: "https://www.figma.com/design/V4RVj2F9av5B8QykhBj5Cw/chokhi-dhani-sonipat?node-id=0-1&t=qs4fxQqhXNYw4iXM-1",
    prototype: "https://www.figma.com/proto/V4RVj2F9av5B8QykhBj5Cw/chokhi-dhani-sonipat?node-id=0-1",
    tags: ["Hospitality", "Web", "Storytelling"],
    role: "UI/UX & Visual Designer", duration: "5 Weeks", team: "2 (Designer + Content)",
    tools: ["Figma", "Photoshop"],
    problem: "Heritage resort was being judged by a dated site — premium guests bounced before reaching booking.",
    goal: "Translate the on-property warmth into an editorial, cinematic web experience that converts.",
    persona: "Meera, 38 — planning a weekend retreat. Decides in 90 seconds whether a property feels real.",
    insight: "Guests valued story and ambience over feature lists; current site led with grids of amenities.",
    solution: "Hero storytelling, candlelit color system, calm reservation flow with clear room narratives and trust cues.",
    outcomes: ["Storytelling-led narrative replaces feature dump", "Booking flow simplified to 3 clear steps", "Cohesive brand voice across web surfaces"] },

  { n: "04", title: "English Learning Platform", category: "EdTech Experience", scene: "edu", hue: "#8b9cff", device: "laptop",
    desc: "A modern classroom redrawn. Student-first navigation, dashboards that motivate, accessibility woven through every micro-interaction.",
    link: "https://www.figma.com/design/ia8HUYOKJ9jTYsg9oNWcxS/English-learning-website?node-id=0-1&t=uygQ6ArKellDLTH6-1",
    prototype: "https://www.figma.com/proto/ia8HUYOKJ9jTYsg9oNWcxS/English-learning-website?node-id=0-1",
    tags: ["EdTech", "Dashboard", "Web"],
    role: "UI/UX Designer", duration: "5 Weeks", team: "Solo",
    tools: ["Figma", "Illustrator"],
    problem: "Learners dropped off after lesson 3 — progress was invisible and lessons felt isolated.",
    goal: "Make progress feel earned and the next step always obvious.",
    persona: "Ishita, 19 — undergrad improving for IELTS. Studies in short bursts on a laptop between classes.",
    insight: "Motivation collapses when learners can't see momentum; streaks and visible mastery move retention.",
    solution: "Progress-led dashboard, lesson cards with unit mastery bars, contextual practice, AA-compliant color & type.",
    outcomes: ["Clear lesson → practice → test loop", "Accessibility baseline (WCAG AA contrast)", "Reusable EdTech component library"] },

  { n: "05", title: "Swaasth — Doctor", category: "Healthcare Product", scene: "doctor", hue: "#5dd1ff", device: "phone",
    desc: "Built for the white coat. Schedules, patients, records — engineered for trust, clarity, and as close to zero cognitive load as a screen can get.",
    link: "https://www.figma.com/design/MlwmbLkAJ8iB9euohZkkWu/Swaasth-app-for-doctors?node-id=0-1&t=kvfr03nOWYiMLS3J-1",
    prototype: "https://www.figma.com/proto/MlwmbLkAJ8iB9euohZkkWu/Swaasth-app-for-doctors?node-id=167-2947&viewport=704%2C-207%2C0.15&t=RndfS0tdEygz5Sun-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=167%3A2972&show-proto-sidebar=1&page-id=0%3A1",
    tags: ["Health", "App", "Systems"],
    role: "Product Designer", duration: "6 Weeks", team: "Solo + Clinician advisor",
    tools: ["Figma", "Notion"],
    problem: "Doctors juggle 20+ patients/day across paper, SMS and EMRs. Context-switching costs minutes per consult.",
    goal: "Give a clinician a single-glance view of their day — patient, time, action.",
    persona: "Dr. Mehta, 41 — GP in a busy clinic. Needs information in seconds, not screens.",
    insight: "Schedule and 'next patient' were always the first taps. Everything else was secondary.",
    solution: "Schedule-first home, large 'Next at…' card, prescription flow in 4 taps, calm clinical-blue system.",
    outcomes: ["Reduced cognitive load on the daily schedule", "Prescription flow simplified to 4 taps", "Trust-led color & typography system"] },

  { n: "06", title: "Swaasth — Patient", category: "Healthcare Mobile", scene: "patient", hue: "#60a5fa", device: "phone",
    desc: "Healthcare without the friction. Appointments, prescriptions, follow-ups — wrapped in a calm, accessible mobile architecture.",
    link: "https://www.figma.com/design/SOUWi3Omdtcjc0dUHbUCNm/Swaasth-app-PATIENCE?node-id=0-1&t=WGIREcb2iBSnky9L-1",
    prototype: "https://www.figma.com/proto/SOUWi3Omdtcjc0dUHbUCNm/Swaasth-app-PATIENCE?node-id=482-891&viewport=1186%2C577%2C0.24&t=uF2zSc08Vnx0wWgU-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=482%3A898&page-id=0%3A1",
    tags: ["Health", "Mobile", "UX"],
    role: "UI/UX Designer", duration: "4 Weeks", team: "Solo",
    tools: ["Figma"],
    problem: "Patients abandoned booking when symptom inputs and doctor search felt clinical and intimidating.",
    goal: "Make booking, reminders and follow-ups feel as easy as messaging a friend.",
    persona: "Kavya, 29 — first-time user post a routine check-up. Anxious, mobile-first, wants reassurance.",
    insight: "Friendly micro-copy and a visible 'next appointment' lowered anxiety more than feature density.",
    solution: "Next-appointment hero, vitals tiles, prescription tracker, plain-language copy, AA color contrast.",
    outcomes: ["Appointment booking in under 60s", "Visible 'next visit' reduces anxiety", "Accessibility-first mobile architecture"] },

  { n: "07", title: "Broadband Web Platform", category: "Modern Web Platform", scene: "broadband", hue: "#e879f9", device: "laptop",
    desc: "A conversion-first landing system with surgical hierarchy and a responsive grid that holds its line at every breakpoint.",
    link: "https://www.figma.com/design/qIgMspBcoiyyXjfid7IUT9/broadband-Website-design-design?node-id=0-1&t=161x8QwQ1SoqTF01-1",
    prototype: "https://www.figma.com/proto/qIgMspBcoiyyXjfid7IUT9/broadband-Website-design-design?node-id=0-1",
    tags: ["Web", "Landing", "Brand"],
    role: "UI/UX & Brand Designer", duration: "3 Weeks", team: "Solo",
    tools: ["Figma", "Illustrator"],
    problem: "ISP site dumped 12 plans on the homepage. Users couldn't tell which plan fit them.",
    goal: "Lead with one decision — speed — then surface the right plan in two clicks.",
    persona: "Arjun, 34 — comparing fiber providers for WFH. Wants 'best plan for my house', not a spec sheet.",
    insight: "Plans needed framing (Basic / Pro / Ultra) and a hero that sold speed as benefit, not number.",
    solution: "Single-decision hero, 3-tier plan grid, sticky CTA, fluid grid down to 360px.",
    outcomes: ["Plan choice reduced from 12 → 3 tiers", "Single-decision hero increases clarity", "Responsive grid stable to 360px"] },

  { n: "08", title: "Reway — Mobile App", category: "Mobile Product Design", scene: "reway", hue: "#a78bfa", device: "phone",
    desc: "Futuristic mobile interface with a scalable UX architecture. Interactions that anticipate, components that scale, motion that means something.",
    link: "https://www.figma.com/design/pFPrwzkTT7KH7PqLBVNd7n/Reway-App-Design--project?node-id=0-1&t=7pgWq9TTWTuM4qRi-1",
    prototype: "https://www.figma.com/proto/pFPrwzkTT7KH7PqLBVNd7n/Reway-App-Design--project?node-id=2421-4795&viewport=12%2C642%2C0.2&t=TXxM1WkoaPU8LiFJ-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2421%3A4831&page-id=2417%3A4223",
    tags: ["Mobile", "Systems", "Motion"],
    role: "Product Designer", duration: "5 Weeks", team: "Solo",
    tools: ["Figma", "After Effects"],
    problem: "Navigation apps overload the screen with metrics. Riders only need: where, how long, what next.",
    goal: "Reduce on-screen information substantially while keeping every critical signal.",
    persona: "Vihaan, 24 — commuter who glances at the screen between traffic. Cannot read text-heavy UI.",
    insight: "Glanceable hierarchy (one metric at a time) felt safer and more confident in user testing.",
    solution: "Map-first hero, ETA as the headline, supporting metrics as small tiles, micro-motion for state changes.",
    outcomes: ["On-screen information substantially reduced", "Glanceable ETA-first hierarchy", "Reusable motion + component system"] },
];

/* ─────────────────────────────  MOCK SCENES  ───────────────────────────── */

function PhoneFrame({ children, style }: { children: React.ReactNode; style?: CSSProperties }) {
  return (
    <div style={style} className="relative w-[180px] md:w-[200px] aspect-[9/19] rounded-[28px] bg-black border border-white/15 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] p-1.5 overflow-hidden">
      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full bg-black z-20" />
      <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-[#0a0a0a]">
        {children}
      </div>
    </div>
  );
}

function LaptopFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full max-w-[440px]">
      <div className="relative rounded-[14px] bg-zinc-900 border border-white/15 p-2 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)]">
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 size-1 rounded-full bg-white/30" />
        <div className="relative aspect-[16/10] rounded-md overflow-hidden bg-[#0a0a0a]">
          {children}
        </div>
      </div>
      <div className="mx-auto h-1.5 w-[110%] -ml-[5%] rounded-b-2xl bg-zinc-800 border-x border-b border-white/10" />
    </div>
  );
}

const Scene = ({ scene, hue }: { scene: Scene; hue: string }) => {
  const style = { ["--h" as any]: hue } as CSSProperties;
  switch (scene) {
    case "ecommerce":
      return (
        <div style={style} className="absolute inset-0 p-3 flex flex-col gap-2 bg-gradient-to-b from-zinc-950 to-black text-white text-[7px]">
          <div className="flex items-center justify-between"><span className="font-display tracking-tight text-[10px]">InKart</span><ShoppingBag className="size-2.5" /></div>
          <div className="flex items-center gap-1 rounded-md bg-white/5 px-1.5 py-1"><Search className="size-2" /><span className="opacity-60">search products…</span></div>
          <div className="rounded-md p-2 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${hue}55, transparent)` }}>
            <div className="text-[6px] opacity-70">DROP / 24</div>
            <div className="font-display text-[12px] leading-none mt-0.5">Winter<br/>Capsule.</div>
            <div className="absolute right-1 bottom-1 rounded-full px-1.5 py-0.5 text-[6px]" style={{ background: hue, color: "#000" }}>Shop</div>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {[1,2,3,4].map(i => (
              <div key={i} className="rounded-md bg-white/5 p-1.5">
                <div className="aspect-square rounded" style={{ background: `linear-gradient(135deg, ${hue}40, #222)` }} />
                <div className="mt-1 h-1 w-2/3 bg-white/20 rounded" />
                <div className="mt-0.5 h-1 w-1/3 rounded" style={{ background: hue }} />
              </div>
            ))}
          </div>
        </div>
      );
    case "grocery":
      return (
        <div style={style} className="absolute inset-0 p-3 flex flex-col gap-2 bg-[#0d130d] text-white text-[7px]">
          <div className="flex items-center justify-between"><span className="font-display text-[10px]">FreshKart</span><Leaf className="size-2.5" style={{ color: hue }} /></div>
          <div className="rounded-lg p-2" style={{ background: `linear-gradient(135deg, ${hue}33, transparent)` }}>
            <div className="text-[6px] opacity-70">deliver in 10 min</div>
            <div className="font-display text-[11px] leading-tight mt-0.5">Farm-fresh,<br/>door-fast.</div>
          </div>
          <div className="flex gap-1 overflow-hidden">
            {["fruits","dairy","bakery","meat"].map(c => (
              <div key={c} className="rounded-full bg-white/5 px-1.5 py-0.5 text-[6px]">{c}</div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-1">
            {Array.from({length:6}).map((_,i) => (
              <div key={i} className="rounded bg-white/5 p-1">
                <div className="aspect-square rounded-full" style={{ background: `radial-gradient(circle at 30% 30%, ${hue}, #1a3a1a)` }} />
                <div className="mt-0.5 h-0.5 w-2/3 bg-white/30 rounded" />
              </div>
            ))}
          </div>
        </div>
      );
    case "hospitality":
      return (
        <div style={style} className="absolute inset-0 bg-zinc-950 text-white">
          <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at top, ${hue}40, transparent 60%), linear-gradient(180deg, #1a1208, #050505)` }} />
          <div className="relative p-3 flex flex-col h-full text-[7px]">
            <div className="flex justify-between items-center"><span className="font-display tracking-[0.2em] text-[8px]">CHOKHI DHANI</span><div className="flex gap-2 opacity-60"><span>Stay</span><span>Dine</span><span>Story</span></div></div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="text-[6px] uppercase tracking-[0.3em] opacity-60">Sonipat · est. 1989</div>
              <div className="font-serif italic text-[20px] leading-[0.95] mt-1">A village,<br/>under <span style={{ color: hue }}>candlelight</span>.</div>
              <div className="mt-2 inline-flex items-center gap-1 self-start rounded-full px-2 py-0.5 text-[6px]" style={{ background: hue, color: "#000" }}><Calendar className="size-2"/>Reserve</div>
            </div>
            <div className="grid grid-cols-3 gap-1">
              {Array.from({length:3}).map((_,i) => (
                <div key={i} className="aspect-[4/3] rounded" style={{ background: `linear-gradient(${i*45}deg, ${hue}55, #2a1a08)` }} />
              ))}
            </div>
          </div>
        </div>
      );
    case "edu":
      return (
        <div style={style} className="absolute inset-0 p-3 bg-[#0a0c1a] text-white text-[7px] flex flex-col gap-2">
          <div className="flex justify-between"><span className="font-display text-[9px]">Lexico</span><div className="flex gap-1"><div className="size-2 rounded-full bg-white/20"/><div className="size-2 rounded-full" style={{ background: hue }}/></div></div>
          <div className="grid grid-cols-5 gap-2 flex-1">
            <div className="col-span-1 space-y-1">
              {["Home","Lessons","Practice","Tests","Stats"].map(s => <div key={s} className="text-[6px] opacity-60">{s}</div>)}
            </div>
            <div className="col-span-4 space-y-1.5">
              <div className="rounded p-2" style={{ background: `linear-gradient(135deg, ${hue}33, transparent)` }}>
                <div className="text-[6px] opacity-70">today · lesson 12</div>
                <div className="font-display text-[11px] leading-tight">Conditional<br/>tenses.</div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                {Array.from({length:3}).map((_,i) => (
                  <div key={i} className="rounded bg-white/5 p-1">
                    <div className="h-1 w-full rounded-full bg-white/10 mb-1"><div className="h-full rounded-full" style={{ background: hue, width: `${30+i*25}%` }}/></div>
                    <div className="text-[5px] opacity-70">Unit 0{i+1}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    case "doctor":
      return (
        <div style={style} className="absolute inset-0 p-3 bg-[#06121a] text-white text-[7px] flex flex-col gap-1.5">
          <div className="flex justify-between items-center"><div><div className="opacity-60 text-[6px]">good morning</div><div className="font-display text-[10px]">Dr. Mehta</div></div><Stethoscope className="size-3" style={{ color: hue }}/></div>
          <div className="rounded-md p-2" style={{ background: `linear-gradient(135deg, ${hue}33, transparent)` }}>
            <div className="text-[6px] opacity-70">today · 12 patients</div>
            <div className="font-display text-[14px] leading-none mt-0.5">Next: <span style={{ color: hue }}>10:30</span></div>
            <div className="text-[6px] mt-0.5 opacity-80">Aanya R. · follow-up</div>
          </div>
          <div className="text-[6px] uppercase tracking-wider opacity-60">Schedule</div>
          {["09:00 · S. Khan","10:30 · A. Rao","11:15 · M. Iyer","12:00 · K. Sharma"].map(s => (
            <div key={s} className="flex justify-between items-center rounded bg-white/5 px-1.5 py-1">
              <span>{s}</span>
              <div className="size-1 rounded-full" style={{ background: hue }}/>
            </div>
          ))}
        </div>
      );
    case "patient":
      return (
        <div style={style} className="absolute inset-0 p-3 bg-[#06101a] text-white text-[7px] flex flex-col gap-1.5">
          <div className="flex justify-between items-center"><span className="font-display text-[10px]">Swaasth</span><div className="size-3 rounded-full" style={{ background: hue }}/></div>
          <div className="rounded-lg p-2" style={{ background: `linear-gradient(135deg, ${hue}40, transparent)` }}>
            <div className="text-[6px] opacity-70">your next appointment</div>
            <div className="font-display text-[11px] leading-tight mt-0.5">Dr. R. Mehta<br/>Tue · 10:30 AM</div>
          </div>
          <div className="grid grid-cols-3 gap-1">
            {[{i:Heart,l:"BPM"},{i:Calendar,l:"Visits"},{i:Star,l:"Score"}].map(({i:I,l},k) => (
              <div key={l} className="rounded bg-white/5 p-1.5">
                <I className="size-2" style={{ color: hue }}/>
                <div className="font-display text-[10px] mt-0.5">{[72,18,4.9][k]}</div>
                <div className="text-[5px] opacity-60">{l}</div>
              </div>
            ))}
          </div>
          <div className="rounded bg-white/5 p-1.5">
            <div className="text-[6px] opacity-70">Prescriptions · 2 active</div>
            <div className="mt-1 h-1 rounded-full bg-white/10"><div className="h-full rounded-full" style={{ background: hue, width: "65%" }}/></div>
          </div>
        </div>
      );
    case "broadband":
      return (
        <div style={style} className="absolute inset-0 bg-zinc-950 text-white">
          <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 80% 20%, ${hue}33, transparent 50%)` }} />
          <div className="relative p-3 h-full flex flex-col text-[7px]">
            <div className="flex justify-between"><span className="font-display text-[9px] flex items-center gap-1"><Wifi className="size-2.5" style={{color:hue}}/> Velocity</span><div className="rounded-full px-1.5 py-0.5 text-[6px]" style={{ background: hue, color: "#000" }}>Plans</div></div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="text-[6px] uppercase tracking-[0.3em] opacity-60">fiber · 1 gbps</div>
              <div className="font-display text-[22px] leading-[0.9] mt-1">Internet<br/>that <span style={{ color: hue }}>flies</span>.</div>
              <div className="mt-2 flex gap-1">
                <div className="rounded px-1.5 py-1 text-[6px]" style={{ background: hue, color: "#000" }}>Get fiber</div>
                <div className="rounded px-1.5 py-1 text-[6px] border border-white/20">See plans</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-1">
              {[["199","Basic"],["399","Pro"],["699","Ultra"]].map(([p,l]) => (
                <div key={l} className="rounded p-1.5 bg-white/5">
                  <div className="font-display text-[10px]">₹{p}</div>
                  <div className="text-[5px] opacity-60">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    case "reway":
      return (
        <div style={style} className="absolute inset-0 p-3 bg-[#0a0612] text-white text-[7px] flex flex-col gap-1.5">
          <div className="flex justify-between items-center"><span className="font-display text-[10px]">Reway</span><Compass className="size-2.5" style={{ color: hue }}/></div>
          <div className="rounded-lg overflow-hidden relative aspect-[4/3]" style={{ background: `radial-gradient(circle at 30% 40%, ${hue}55, #1a0a2e 70%)` }}>
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
              {Array.from({length:36}).map((_,i)=> <div key={i} className="border border-white/[0.04]"/>)}
            </div>
            <div className="absolute top-1/2 left-1/3 size-1.5 rounded-full" style={{ background: hue, boxShadow: `0 0 8px ${hue}` }}/>
            <div className="absolute bottom-2 left-2 text-[6px]"><div className="opacity-60">en route</div><div className="font-display text-[10px]">12 min</div></div>
            <div className="absolute top-1 right-1 rounded-full p-1" style={{ background: hue }}><Play className="size-2 text-black" /></div>
          </div>
          <div className="grid grid-cols-2 gap-1">
            <div className="rounded bg-white/5 p-1.5"><div className="text-[5px] opacity-60">distance</div><div className="font-display text-[10px]">4.8 km</div></div>
            <div className="rounded bg-white/5 p-1.5"><div className="text-[5px] opacity-60">speed</div><div className="font-display text-[10px]">42 km/h</div></div>
          </div>
        </div>
      );
  }
};

/* ─────────────────────────────  CARD  ───────────────────────────── */

export function ProjectCard({ p, i }: { p: Project; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0); const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-1, 1], [6, -6]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [-1, 1], [-6, 6]), { stiffness: 120, damping: 18 });
  const tx = useSpring(useTransform(mx, [-1, 1], [-12, 12]), { stiffness: 120, damping: 18 });
  const ty = useSpring(useTransform(my, [-1, 1], [-12, 12]), { stiffness: 120, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 2);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 2);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  const Meta = ({ k, v }: { k: string; v: string }) => (
    <div>
      <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">{k}</div>
      <div className="mt-1 text-sm text-foreground">{v}</div>
    </div>
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, delay: (i % 2) * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
      className="group relative block overflow-hidden rounded-2xl border border-border bg-card"
      style={{ perspective: 1200 }}
    >
      {/* STAGE */}
      <motion.div
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="relative aspect-[16/11] overflow-hidden"
      >
        <div className="absolute inset-0" style={{
          background: `radial-gradient(ellipse at 30% 20%, ${p.hue}25, transparent 55%), radial-gradient(ellipse at 80% 90%, ${p.hue}18, transparent 60%), linear-gradient(180deg, #0a0a0a, #050505)`
        }} />
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="absolute inset-0 noise opacity-80" />

        <motion.div
          className="absolute -inset-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ x: tx, y: ty, background: `radial-gradient(circle at center, ${p.hue}25, transparent 40%)` }}
        />

        <div
          className="absolute -top-4 -left-2 font-display leading-[0.78] text-[clamp(8rem,18vw,16rem)] select-none pointer-events-none"
          style={{ WebkitTextStroke: `1.5px ${p.hue}99`, color: "transparent", mixBlendMode: "screen" }}
        >{p.n}</div>

        <div className="absolute inset-0 flex items-center justify-center" style={{ transform: "translateZ(40px)" }}>
          {p.device === "phone" && (
            <motion.div style={{ x: tx, y: ty }}>
              <PhoneFrame><Scene scene={p.scene} hue={p.hue}/></PhoneFrame>
            </motion.div>
          )}
          {p.device === "laptop" && (
            <motion.div style={{ x: tx, y: ty }} className="w-[78%]">
              <LaptopFrame><Scene scene={p.scene} hue={p.hue}/></LaptopFrame>
            </motion.div>
          )}
          {p.device === "duo" && (
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.div style={{ x: useTransform(tx, v => v * -0.6), y: useTransform(ty, v => v * -0.6) }} className="absolute left-[8%] top-1/2 -translate-y-1/2 w-[55%] rotate-[-4deg]">
                <LaptopFrame><Scene scene={p.scene} hue={p.hue}/></LaptopFrame>
              </motion.div>
              <motion.div style={{ x: tx, y: ty }} className="absolute right-[10%] top-1/2 -translate-y-1/2 rotate-[6deg]">
                <PhoneFrame><Scene scene={p.scene} hue={p.hue}/></PhoneFrame>
              </motion.div>
            </div>
          )}
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 h-0 group-hover:h-6 bg-black transition-all duration-500" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0 group-hover:h-6 bg-black transition-all duration-500" />

        <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-white/60 z-10">
          <span className="flex items-center gap-2"><span className="size-1.5 rounded-full animate-pulse-glow" style={{ background: p.hue, boxShadow: `0 0 10px ${p.hue}` }}/>case study · {p.n}</span>
          <span className="hidden md:inline">{p.role}</span>
        </div>
      </motion.div>

      {/* CASE STUDY META */}
      <div className="p-6 md:p-8 space-y-6 relative">
        <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.3em]">
          <span className="flex items-center gap-2 text-muted-foreground"><span className="size-1.5 rounded-full" style={{ background: p.hue }}/>{p.category}</span>
          <span className="text-muted-foreground">// 0{i+1} of 0{PROJECTS.length}</span>
        </div>
        <h3 className="font-display text-3xl md:text-5xl leading-[0.9] tracking-tight">{p.title}</h3>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{p.desc}</p>

        {/* fact strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl border border-border bg-background/40">
          <Meta k="Role" v={p.role} />
          <Meta k="Duration" v={p.duration} />
          <Meta k="Team" v={p.team} />
          <Meta k="Tools" v={p.tools.join(" · ")} />
        </div>

        {/* case study story */}
        <div className="grid md:grid-cols-2 gap-x-6 gap-y-4 text-sm">
          <div>
            <div className="font-mono text-[9px] uppercase tracking-[0.3em]" style={{ color: p.hue }}>// Problem</div>
            <p className="mt-1.5 text-muted-foreground leading-relaxed">{p.problem}</p>
          </div>
          <div>
            <div className="font-mono text-[9px] uppercase tracking-[0.3em]" style={{ color: p.hue }}>// Goal</div>
            <p className="mt-1.5 text-muted-foreground leading-relaxed">{p.goal}</p>
          </div>
          <div>
            <div className="font-mono text-[9px] uppercase tracking-[0.3em]" style={{ color: p.hue }}>// Persona</div>
            <p className="mt-1.5 text-muted-foreground leading-relaxed">{p.persona}</p>
          </div>
          <div>
            <div className="font-mono text-[9px] uppercase tracking-[0.3em]" style={{ color: p.hue }}>// Research Insight</div>
            <p className="mt-1.5 text-muted-foreground leading-relaxed">{p.insight}</p>
          </div>
          <div className="md:col-span-2">
            <div className="font-mono text-[9px] uppercase tracking-[0.3em]" style={{ color: p.hue }}>// Solution</div>
            <p className="mt-1.5 text-muted-foreground leading-relaxed">{p.solution}</p>
          </div>
        </div>

        {/* impact */}
        <div className="rounded-xl border border-border bg-background/40 p-4">
          <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">// Impact & Outcomes</div>
          <ul className="mt-3 grid sm:grid-cols-3 gap-3">
            {p.outcomes.map((o) => (
              <li key={o} className="flex gap-2 text-sm leading-snug">
                <span className="mt-1.5 size-1.5 rounded-full shrink-0" style={{ background: p.hue }} />
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* tags + CTAs */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border">
          <div className="flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border border-border text-muted-foreground">{t}</span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <a href={p.prototype} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition-all hover:scale-[1.02]"
              style={{ color: p.hue, borderColor: `${p.hue}66`, background: `${p.hue}10` }}>
              <Play className="size-3.5" /> View Prototype
            </a>
            <a href={p.link} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium glass-strong hover:bg-white/5 transition-colors">
              View Project <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700 ease-out" style={{ background: `linear-gradient(90deg, transparent, ${p.hue}, transparent)` }} />
    </motion.div>
  );
}
