import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Cpu, Laptop, MonitorSmartphone, Keyboard, HardDrive, Wrench,
  Star, MapPin, Phone, Clock, Truck, Store, ShoppingBag,
  ArrowUpRight, Quote, Sparkles, Menu, X,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import heroPc from "@/assets/hero-pc.jpg";
import laptopImg from "@/assets/laptop.jpg";
import gpuImg from "@/assets/gpu.jpg";
import keyboardImg from "@/assets/keyboard.jpg";
import componentsImg from "@/assets/components.jpg";
import repairImg from "@/assets/repair.jpg";
import monitorImg from "@/assets/monitor.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

/* ---------- NAV ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", fn); fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = [["Atelier", "#shop"], ["Voices", "#reviews"], ["Visit", "#visit"], ["FAQ", "#faq"]];
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-5"}`}>
      <div className="mx-auto max-w-6xl px-4">
        <div className={`flex items-center justify-between rounded-full px-5 py-3 transition-all ${scrolled ? "nav-glass shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)]" : ""}`}>
          <a href="#top" className="flex items-center gap-2.5 font-display text-base tracking-tight">
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--granite)] text-[var(--background)]">
              <span className="font-display italic text-sm">in</span>
            </span>
            <span className="hidden sm:inline font-medium">IN-N-OUT</span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {links.map(([l, h]) => (
              <a key={h} href={h} className="px-4 py-1.5 text-sm text-[var(--granite)]/80 hover:text-[var(--granite)] transition-colors story-link">
                {l}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href="tel:+919167940505" className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[var(--granite)] px-4 py-2 text-sm font-medium text-[var(--background)] hover:bg-[var(--granite)]/90 transition">
              <Phone className="h-3.5 w-3.5" /> Call us
            </a>
            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full glass">
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden mt-2 glass rounded-3xl p-4 animate-fade-up">
            {links.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="block px-3 py-3 text-sm">{l}</a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="top" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay muted loop playsInline preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ willChange: "transform" }}
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-circuit-board-details-4404-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/60 via-[var(--background)]/30 to-[var(--background)]" />
        <div className="absolute inset-0 mix-blend-soft-light opacity-60"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 20% 20%, #D4C5E2 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 80% 30%, #A7E2E3 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 50% 90%, #80CFA9 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 text-center pt-28 pb-16">
        <div className="animate-fade-up inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs tracking-wide text-[var(--granite)] mb-8">
          <span className="marker" />
          <span>Rated 4.9 by 464+ patrons · Open till 10pm</span>
        </div>

        <h1 className="animate-fade-up text-[clamp(2.75rem,8vw,7.5rem)] leading-[0.95] font-display font-light text-[var(--foreground)] text-balance">
          Custom Gaming PCs,
          <br />
          <span className="italic-serif text-[var(--granite)]/90">crafted</span>{" "}
          <span className="gradient-text">in Panvel.</span>
        </h1>

        <p className="animate-fade-up mt-8 max-w-xl mx-auto text-base sm:text-lg text-[var(--foreground)]/70 text-balance leading-relaxed" style={{ animationDelay: "0.15s" }}>
          The atelier for bespoke gaming rigs, premium laptops and expert computer repairs. 
          Building with care in Kamothe for over a decade.
        </p>

        <div className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-3" style={{ animationDelay: "0.3s" }}>
          <a href="#shop" className="group inline-flex items-center gap-2 rounded-full bg-[var(--granite)] px-6 py-3 text-sm font-medium text-[var(--background)] hover:bg-black transition shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
            Explore Custom Builds
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>
          <a href="https://wa.me/919167940505?text=Hi%20IN-N-OUT%2C%20I'm%20interested%20in%20a%20new%20PC.%20Can%20you%20help%3F" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-[var(--granite)] hover:bg-white/80 transition">
            Request a Quote
          </a>
        </div>

        {/* hero plate */}
        <div className="animate-fade-up mt-20 relative" style={{ animationDelay: "0.45s" }}>
          <div className="relative mx-auto max-w-4xl">
            <img
              src={heroPc}
              alt="Custom built gaming PC with refined lighting"
              width={1920} height={1080}
              className="mx-auto rounded-[2rem] border border-[var(--border)] w-full animate-float shadow-[0_40px_120px_-30px_rgba(76,102,99,0.35)]"
            />
            <div className="absolute -inset-x-8 -bottom-10 h-32 bg-[var(--celadon)]/40 blur-3xl rounded-full -z-10" />
          </div>

          {/* floating chips with parallax effect */}
          <div className="hidden md:flex absolute -left-4 top-10 bg-white/90 backdrop-blur-xl rounded-2xl px-4 py-3 items-center gap-3 animate-float shadow-xl border border-black/5 transition-transform duration-300 ease-out" 
            style={{ animationDelay: "1s", transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)` }}>
            <Sparkles className="h-4 w-4 text-[var(--celadon)]" />
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-widest text-black/80 font-bold">Hand-built</div>
              <div className="text-sm font-semibold text-black">Cable managed</div>
            </div>
          </div>
          <div className="hidden md:flex absolute -right-4 bottom-16 bg-white/90 backdrop-blur-xl rounded-2xl px-4 py-3 items-center gap-3 animate-float shadow-xl border border-black/5 transition-transform duration-300 ease-out" 
            style={{ animationDelay: "2s", transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)` }}>
            <Star className="h-4 w-4 fill-[var(--celadon)] text-[var(--celadon)]" />
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-widest text-black/80 font-bold">4.9 / 5</div>
              <div className="text-sm font-semibold text-black">464+ reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- MARQUEE ---------- */
function Marquee() {
  const items = ["In-store shopping", "Kerbside pickup", "Delivery", "Genuine parts", "Expert repair", "Polite staff", "Women-owned", "GST invoices", "Same-day fixes"];
  return (
    <div className="relative overflow-hidden border-y border-[var(--border)] py-6 bg-white/40 backdrop-blur-sm">
      <div className="flex w-max animate-marquee gap-14 px-6">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-3 text-sm text-[var(--granite)]/70 whitespace-nowrap font-display italic">
            <span className="h-1 w-1 rounded-full bg-[var(--celadon)]" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- BENTO ---------- */
function Bento() {
  return (
    <section id="shop" className="relative py-28 sm:py-40 section-divider">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--granite)]/60 mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--granite)]/40" /> The Atelier
          </p>
          <h2 className="text-5xl sm:text-7xl font-display font-light text-[var(--granite)] text-balance leading-[0.95]">
            Every component. <span className="italic-serif">Every build.</span>
          </h2>
          <p className="mt-6 text-[var(--granite)]/70 text-balance text-lg leading-relaxed">
            From whisper-silent productivity rigs to RGB-soaked beasts — and the parts to keep them flying.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[minmax(200px,auto)]">
          <BentoCard className="md:col-span-3 md:row-span-2 bg-[var(--thistle)]/50" img={heroPc} title="Custom PCs" icon={<Cpu />} desc="Hand-built, cable-managed and benchmark-tuned to your needs and budget. From idea to first boot in days." featured />
          <BentoCard className="md:col-span-3 bg-[var(--periwinkle)]/60" img={laptopImg} title="Laptops" icon={<Laptop />} desc="Apple, gaming, business — sourced with full warranty." />
          <BentoCard className="md:col-span-2 bg-[var(--frost)]/60" img={gpuImg} title="Graphics Cards" icon={<MonitorSmartphone />} desc="NVIDIA & AMD, in stock." />
          <BentoCard className="md:col-span-1 bg-[var(--celadon)]/50" img={keyboardImg} title="Peripherals" icon={<Keyboard />} desc="Keys. Mice. Mats." compact />
          <BentoCard className="md:col-span-2 bg-[var(--thistle)]/50" img={componentsImg} title="Components" icon={<HardDrive />} desc="RAM, SSDs, PSUs, cooling." />
          <BentoCard className="md:col-span-2 bg-[var(--periwinkle)]/50" img={repairImg} title="Repair" icon={<Wrench />} desc="Board-level laptop & PC service." />
          <BentoCard className="md:col-span-2 bg-[var(--frost)]/50" img={monitorImg} title="Monitors" icon={<MonitorSmartphone />} desc="From 1080p to ultrawide 4K." />
        </div>
      </div>
    </section>
  );
}

function BentoCard({ className = "", img, title, icon, desc, compact = false, featured = false }:
  { className?: string; img: string; title: string; icon: React.ReactNode; desc: string; compact?: boolean; featured?: boolean }) {
  return (
    <article className={`group relative overflow-hidden rounded-[1.75rem] border border-[var(--border)] ${className} transition-all duration-700 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.3)] hover:-translate-y-1`}>
      <img src={img} alt={title} loading="lazy" width={1024} height={768}
        className="absolute inset-0 h-full w-full object-cover transition-all duration-[1200ms] group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--granite)]/95 via-[var(--granite)]/40 to-transparent" />
      <div className={`relative h-full flex flex-col justify-end ${compact ? "p-5" : "p-7"}`}>
        <div className="flex items-center gap-2 text-[var(--celadon)] mb-3 drop-shadow-md">
          <span className="[&>svg]:h-3.5 [&>svg]:w-3.5">{icon}</span>
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold">{title}</span>
        </div>
        {!compact && (
          <h3 className={`font-display text-[var(--background)] mb-2 ${featured ? "text-3xl sm:text-4xl" : "text-xl"}`}>
            {title}
          </h3>
        )}
        {!compact && <p className="text-sm text-[var(--background)]/80 max-w-xs leading-relaxed">{desc}</p>}
        <ArrowUpRight className="absolute top-5 right-5 h-5 w-5 text-[var(--background)]/70 transition-all duration-500 group-hover:rotate-45 group-hover:text-[var(--celadon)]" />
      </div>
    </article>
  );
}

/* ---------- STATS ---------- */
function Stats() {
  const stats = [
    { v: "4.9", l: "Google rating" },
    { v: "464+", l: "Verified reviews" },
    { v: "10+", l: "Years in Panvel" },
    { v: "1000+", l: "PCs built" },
  ];
  return (
    <section className="py-20 bg-black/5 section-divider">
      <div className="mx-auto max-w-6xl px-4 grid grid-cols-2 md:grid-cols-4 gap-3">
        {stats.map((s, i) => (
          <div key={s.l} className="glass rounded-[1.75rem] p-8 text-center hover:bg-white/80 transition-all duration-500 hover:-translate-y-1 animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="font-display text-5xl sm:text-6xl text-[var(--granite)] font-light">{s.v}</div>
            <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-[var(--granite)]/60">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- REVIEWS ---------- */
const REVIEWS = [
  { name: "Yadav E.", when: "4 months ago", rating: 5, tint: "var(--thistle)",
    text: "Visited In and Out Computer Shop for building a PC and had a great experience. They built my PC very professionally and delivered it promptly. Staff is active, easily reachable and quick to respond." },
  { name: "Satyam Pandey", when: "3 months ago", rating: 5, tint: "var(--periwinkle)",
    text: "An excellent store. Products are very affordable and of great quality. Best experience I've ever had at any hardware shop. Polite and professional with customers." },
  { name: "Angesh Singh", when: "a year ago", rating: 5, tint: "var(--frost)",
    text: "Got a skin applied to my MacBook — applied perfectly and looked great. Staff was very helpful and professional. Highly recommended." },
  { name: "Verified Customer", when: "recent", rating: 5, tint: "var(--celadon)",
    text: "Genuine service and product, polite staff and owner, and a really good ambience to walk in to. Felt like an upgrade in every sense." },
];

function Reviews() {
  return (
    <section id="reviews" className="py-28 sm:py-40 section-divider">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--granite)]/60 mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--granite)]/40" /> Loved in Panvel
            </p>
            <h2 className="text-5xl sm:text-7xl font-display font-light text-[var(--granite)] text-balance leading-[0.95]">
              4.9 stars. <span className="italic-serif">464 stories.</span>
            </h2>
          </div>
          <a href="https://www.google.com/maps/place/IN-N-OUT+Computer+Solutions" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--granite)]/70 hover:text-[var(--granite)] story-link">
            Read on Google <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {REVIEWS.map((r, i) => (
            <article key={r.name} className="relative rounded-[1.75rem] p-8 sm:p-10 overflow-hidden bg-white/60 backdrop-blur-md border border-[var(--border)] hover:-translate-y-1 transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="absolute -top-16 -right-16 h-44 w-44 rounded-full blur-3xl opacity-50"
                style={{ background: r.tint }} />
              <Quote className="relative h-8 w-8 text-[var(--granite)]/20 mb-5" />
              <div className="relative flex gap-0.5 mb-5">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-[var(--celadon)] text-[var(--celadon)]" />
                ))}
              </div>
              <p className="relative font-display text-lg sm:text-xl text-[var(--granite)] leading-snug font-light">
                "{r.text}"
              </p>
              <div className="relative mt-8 flex items-center gap-3 pt-6 border-t border-[var(--border)]">
                <div className="h-10 w-10 rounded-full grid place-items-center text-[var(--granite)] font-display text-base"
                  style={{ background: r.tint }}>
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-medium text-[var(--granite)]">{r.name}</div>
                  <div className="text-xs text-[var(--granite)]/60">{r.when}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- VISIT ---------- */
function Visit() {
  const services = [
    { icon: <Store className="h-3.5 w-3.5" />, l: "In-store shopping" },
    { icon: <ShoppingBag className="h-3.5 w-3.5" />, l: "Kerbside pickup" },
    { icon: <Truck className="h-3.5 w-3.5" />, l: "Delivery" },
  ];
  return (
    <section id="visit" className="py-28 sm:py-40 bg-black/5 section-divider">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-5 gap-5">
          <div className="lg:col-span-2 flex flex-col justify-between glass-dark rounded-[1.75rem] p-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--frost)]/80 mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--frost)]/50" /> Find us
              </p>
              <h2 className="text-4xl sm:text-5xl font-display font-light text-[var(--background)] leading-[0.95]">
                Step in. <br /><span className="italic-serif text-[var(--celadon)]">Walk out happy.</span>
              </h2>
              <p className="mt-5 text-[var(--background)]/70 leading-relaxed">
                Pop by our Kamothe storefront for hands-on demos, custom-build consults and same-day fixes.
              </p>
            </div>
            <div className="mt-12 space-y-6">
              <Row icon={<MapPin className="h-4 w-4 text-[var(--celadon)]" />} title="Address"
                value="Shop No. 10, Shivkalpataru Arcade, Sector 17, Kamothe, Panvel, Maharashtra 410209" />
              <Row icon={<Phone className="h-4 w-4 text-[var(--celadon)]" />} title="Phone"
                value="091679 40505" href="tel:+919167940505" />
              <Row icon={<Clock className="h-4 w-4 text-[var(--celadon)]" />} title="Hours"
                value="Open daily · Closes 10 pm" />
              <div className="flex flex-wrap gap-2 pt-2">
                {services.map((s) => (
                  <span key={s.l} className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs text-[var(--background)]/90 border border-white/10">
                    {s.icon} {s.l}
                  </span>
                ))}
              </div>
              <a href="https://www.google.com/maps/dir//IN-N-OUT+Computer+Solutions,+Kamothe,+Panvel"
                target="_blank" rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--celadon)] px-6 py-3 text-sm font-medium text-[var(--granite)] hover:bg-[var(--celadon)]/90 transition mt-4">
                Get directions <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 relative rounded-[1.75rem] overflow-hidden border border-[var(--border)] min-h-[480px] bg-white">
            <iframe
              title="IN-N-OUT Computer Solutions location"
              src="https://www.google.com/maps?q=IN-N-OUT+Computer+Solutions,+Shivkalpataru+Arcade,+Sector+17,+Kamothe,+Panvel,+Maharashtra+410209&output=embed"
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
            <div className="absolute top-5 left-5 glass rounded-2xl px-4 py-3 flex items-center gap-3 max-w-[260px]">
              <span className="marker" />
              <div>
                <div className="text-[10px] uppercase tracking-widest text-[var(--granite)]/60">You are invited</div>
                <div className="text-sm font-medium text-[var(--granite)]">Sector 17, Kamothe</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ icon, title, value, href }: { icon: React.ReactNode; title: string; value: string; href?: string }) {
  const Wrapper: React.ElementType = href ? "a" : "div";
  return (
    <Wrapper {...(href ? { href } : {})} className="flex items-start gap-3 group">
      <span className="mt-1">{icon}</span>
      <div>
        <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--background)]/50">{title}</div>
        <div className="text-sm sm:text-base text-[var(--background)]/95 group-hover:text-[var(--celadon)] transition mt-0.5">{value}</div>
      </div>
    </Wrapper>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const items = [
    { q: "Do you build custom gaming PCs?", a: "Yes. Tell us your games, software and budget — we recommend parts, assemble, cable-manage and stress-test before handover. Most builds ship within 2–4 days." },
    { q: "Do you repair laptops and MacBooks?", a: "Absolutely. Common services include screen replacement, battery swaps, keyboard repair, motherboard-level diagnostics and data recovery for both Windows laptops and MacBooks." },
    { q: "Are components genuine and under warranty?", a: "Every part we sell is sourced through authorised channels and ships with full manufacturer warranty. We provide proper GST invoices." },
    { q: "Do you offer pickup or delivery?", a: "Yes — in-store shopping, kerbside pickup and local delivery across Panvel and Navi Mumbai." },
    { q: "What are your hours?", a: "We're open every day and close at 10 pm. Saturdays are typically our quietest mornings if you want a relaxed consult." },
  ];
  return (
    <section id="faq" className="py-28 sm:py-40 section-divider">
      <div className="mx-auto max-w-3xl px-4">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--granite)]/60 mb-4 text-center">FAQ</p>
        <h2 className="text-5xl sm:text-6xl font-display font-light text-[var(--granite)] text-center text-balance leading-[0.95]">
          Quick <span className="italic-serif">answers.</span>
        </h2>
        <Accordion type="single" collapsible className="mt-14 space-y-3">
          {items.map((it, i) => (
            <AccordionItem key={i} value={`i${i}`} className="border border-[var(--border)] rounded-2xl px-6 bg-white/90 shadow-sm">
              <AccordionTrigger className="text-left text-base sm:text-lg hover:no-underline py-6 font-display font-normal text-[var(--granite)]">
                {it.q}
              </AccordionTrigger>
              <AccordionContent className="text-[var(--granite)]/70 text-sm sm:text-base leading-relaxed pb-6">
                {it.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function CTA() {
  return (
    <section className="py-24 section-divider">
      <div className="mx-auto max-w-5xl px-4">
        <div className="relative overflow-hidden rounded-[2rem] p-12 sm:p-20 text-center grain bg-gradient-to-br from-[var(--thistle)]/80 via-[var(--periwinkle)]/70 to-[var(--frost)]/80 border border-[var(--border)]">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-[var(--celadon)]/50 blur-3xl" />
          <p className="relative text-xs uppercase tracking-[0.3em] text-[var(--granite)]/60 mb-4">A new build awaits</p>
          <h2 className="relative text-5xl sm:text-7xl font-display font-light text-[var(--granite)] text-balance leading-[0.95]">
            Your next build <br /><span className="italic-serif">starts here.</span>
          </h2>
          <p className="relative mt-6 text-[var(--granite)]/70 max-w-xl mx-auto leading-relaxed">
            Walk in, call us, or message — we'll spec something that punches well above its price.
          </p>
          <div className="relative mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="tel:+919167940505" className="group inline-flex items-center gap-2 rounded-full bg-[var(--granite)] px-7 py-3.5 text-sm font-medium text-[var(--background)] hover:bg-[var(--granite)]/90 transition shadow-[0_20px_40px_-15px_rgba(76,102,99,0.5)]">
              <Phone className="h-4 w-4" /> 091679 40505
            </a>
            <a href="#visit" className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-medium text-[var(--granite)] hover:bg-white/70 transition">
              Visit the store <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="mt-12 bg-[#1A1F1E] text-[var(--background)] rounded-t-[2rem]">
      <div className="mx-auto max-w-6xl px-6 py-16 grid sm:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2.5 font-display text-base">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--background)] text-[#1A1F1E] italic">in</span>
            IN-N-OUT
          </div>
          <p className="mt-5 text-sm text-[var(--background)]/80 max-w-xs leading-relaxed">
            Kamothe's trusted computer atelier — custom PCs, laptops, components and expert repair since day one.
          </p>
        </div>
        <div className="text-sm">
          <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--background)]/60 mb-4">Visit</div>
          <p className="text-[var(--background)] leading-relaxed">
            Shop No. 10, Shivkalpataru Arcade,<br />Sector 17, Kamothe, Panvel,<br />Maharashtra 410209
          </p>
        </div>
        <div className="text-sm">
          <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--background)]/60 mb-4">Reach</div>
          <a href="tel:+919167940505" className="block text-[var(--background)] hover:text-[var(--celadon)] transition">091679 40505</a>
          <span className="block text-[var(--background)]/70 mt-1.5">Open daily · Closes 10 pm</span>
          <div className="flex gap-2 mt-5">
            {["Women-owned"].map((t) => (
              <span key={t} className="inline-flex items-center text-[10px] uppercase tracking-widest rounded-full border border-white/30 px-2.5 py-1">{t}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--background)]/55">
          <span>© {new Date().getFullYear()} IN-N-OUT Computer Solutions. All rights reserved.</span>
          <span className="font-display italic">Crafted in Panvel, MH</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- HOME ---------- */
function Home() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-up");
          entry.target.classList.remove("opacity-0");
        }
      });
    }, { threshold: 0.1 });

    const sections = ref.current?.querySelectorAll("section, article, .glass");
    sections?.forEach((s) => {
      s.classList.add("opacity-0");
      observer.observe(s);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main ref={ref} className="relative">
      <Nav />
      <Hero />
      <Marquee />
      <Bento />
      <Stats />
      <Reviews />
      <Visit />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919167940505?text=Hi%20IN-N-OUT%2C%20I'm%20interested%20in%20building%20a%20custom%20PC%20%2F%20repairing%20my%20laptop.%20Can%20you%20help%3F"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-8 right-8 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-500 hover:scale-110 hover:-rotate-12 group"
      aria-label="Contact us on WhatsApp"
    >
      <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.139c1.52.907 3.013 1.362 4.43 1.363 5.455.002 9.896-4.44 9.898-9.896.002-5.457-4.442-9.9-9.898-9.9-5.457 0-9.9 4.444-9.901 9.9-.001 1.92.543 3.739 1.574 5.262l-.999 3.648 3.896-1.017zm11.233-3.419c-.312-.156-1.848-.912-2.134-1.017-.286-.104-.494-.156-.701.156-.207.312-.804 1.017-.986 1.226-.182.208-.364.234-.676.078-.312-.156-1.316-.484-2.507-1.547-.926-.826-1.552-1.846-1.733-2.158-.182-.312-.02-.481.136-.636.141-.14.312-.364.468-.547.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.547-.078-.156-.701-1.691-.961-2.316-.253-.609-.51-.527-.701-.537l-.598-.01c-.208 0-.546.078-.832.39-.286.312-1.092 1.067-1.092 2.601 0 1.534 1.118 3.018 1.274 3.226.156.208 2.2 3.361 5.33 4.715.745.322 1.327.514 1.78.658.748.236 1.429.203 1.968.123.6-.09 1.848-.755 2.108-1.485.26-.73.26-1.354.182-1.485-.078-.13-.286-.208-.598-.364z" />
      </svg>
      <span className="absolute -top-12 right-0 scale-0 rounded-lg bg-[var(--granite)] px-3 py-1.5 text-xs text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
}
