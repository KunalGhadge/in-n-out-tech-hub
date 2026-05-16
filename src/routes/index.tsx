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
import bgVideo from "@/assets/bg-loop.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IN-N-OUT Computer Solutions — Luxury Custom PCs & Repair in Panvel" },
      { name: "description", content: "Kamothe's most loved computer atelier. Bespoke gaming PCs, premium laptops, graphics cards & expert repair. 4.9★ from 464+ reviews. Open till 10pm." },
      { name: "keywords", content: "computer shop Panvel, laptop repair Kamothe, custom gaming PC Navi Mumbai, graphics card, computer store Kamothe, IN-N-OUT Computer Solutions" },
      { name: "theme-color", content: "#F6F2EE" },
      { property: "og:title", content: "IN-N-OUT Computer Solutions — Bespoke PCs & Repair, Panvel" },
      { property: "og:description", content: "4.9★ in Kamothe. Custom PCs, laptops, components and expert repair, crafted with care." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ComputerStore",
        name: "IN-N-OUT Computer Solutions",
        image: "/og.jpg",
        telephone: "+91 91679 40505",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Shop No. 10, Shivkalpataru Arcade, Sector 17, Kamothe",
          addressLocality: "Panvel",
          addressRegion: "Maharashtra",
          postalCode: "410209",
          addressCountry: "IN",
        },
        geo: { "@type": "GeoCoordinates", latitude: 19.0259, longitude: 73.0986 },
        openingHours: "Mo-Su 10:00-22:00",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "464" },
        priceRange: "₹₹",
      }),
    }],
  }),
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
        <div className={`flex items-center justify-between rounded-full px-5 py-3 transition-all ${scrolled ? "glass shadow-[0_8px_30px_-12px_rgba(76,102,99,0.18)]" : ""}`}>
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
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay muted loop playsInline preload="auto"
          className="absolute inset-0 h-full w-full object-cover animate-drift"
        >
          <source src={bgVideo.url} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/70 via-[var(--background)]/40 to-[var(--background)]" />
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

        <h1 className="animate-fade-up text-[clamp(2.75rem,8vw,7.5rem)] leading-[0.95] font-display font-light text-[var(--granite)] text-balance">
          Computers,
          <br />
          <span className="italic-serif text-[var(--granite)]/90">crafted</span>{" "}
          <span className="gradient-text">with care.</span>
        </h1>

        <p className="animate-fade-up mt-8 max-w-xl mx-auto text-base sm:text-lg text-[var(--granite)]/70 text-balance leading-relaxed" style={{ animationDelay: "0.15s" }}>
          A quiet atelier in Kamothe building bespoke PCs, sourcing premium laptops
          and reviving tired machines — for over a decade.
        </p>

        <div className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-3" style={{ animationDelay: "0.3s" }}>
          <a href="#shop" className="group inline-flex items-center gap-2 rounded-full bg-[var(--granite)] px-6 py-3 text-sm font-medium text-[var(--background)] hover:bg-[var(--granite)]/90 transition shadow-[0_20px_40px_-15px_rgba(76,102,99,0.5)]">
            Explore the atelier
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>
          <a href="#visit" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-[var(--granite)] hover:bg-white/70 transition">
            Visit the store
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

          {/* floating chips */}
          <div className="hidden md:flex absolute -left-4 top-10 glass rounded-2xl px-4 py-3 items-center gap-3 animate-float" style={{ animationDelay: "1s" }}>
            <Sparkles className="h-4 w-4 text-[var(--celadon)]" />
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-widest text-[var(--granite)]/60">Hand-built</div>
              <div className="text-sm font-medium text-[var(--granite)]">Cable managed</div>
            </div>
          </div>
          <div className="hidden md:flex absolute -right-4 bottom-16 glass rounded-2xl px-4 py-3 items-center gap-3 animate-float" style={{ animationDelay: "2s" }}>
            <Star className="h-4 w-4 fill-[var(--celadon)] text-[var(--celadon)]" />
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-widest text-[var(--granite)]/60">4.9 / 5</div>
              <div className="text-sm font-medium text-[var(--granite)]">464+ reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- MARQUEE ---------- */
function Marquee() {
  const items = ["In-store shopping", "Kerbside pickup", "Delivery", "Genuine parts", "Expert repair", "Polite staff", "Women-owned", "LGBTQ+ friendly", "GST invoices", "Same-day fixes"];
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
    <section id="shop" className="relative py-28 sm:py-40">
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
          <BentoCard className="md:col-span-3 md:row-span-2 bg-[var(--thistle)]/30" img={heroPc} title="Custom PCs" icon={<Cpu />} desc="Hand-built, cable-managed and benchmark-tuned to your needs and budget. From idea to first boot in days." featured />
          <BentoCard className="md:col-span-3 bg-[var(--periwinkle)]/40" img={laptopImg} title="Laptops" icon={<Laptop />} desc="Apple, gaming, business — sourced with full warranty." />
          <BentoCard className="md:col-span-2 bg-[var(--frost)]/40" img={gpuImg} title="Graphics Cards" icon={<MonitorSmartphone />} desc="NVIDIA & AMD, in stock." />
          <BentoCard className="md:col-span-1 bg-[var(--celadon)]/30" img={keyboardImg} title="Peripherals" icon={<Keyboard />} desc="Keys. Mice. Mats." compact />
          <BentoCard className="md:col-span-2 bg-[var(--thistle)]/30" img={componentsImg} title="Components" icon={<HardDrive />} desc="RAM, SSDs, PSUs, cooling." />
          <BentoCard className="md:col-span-2 bg-[var(--periwinkle)]/30" img={repairImg} title="Repair" icon={<Wrench />} desc="Board-level laptop & PC service." />
          <BentoCard className="md:col-span-2 bg-[var(--frost)]/30" img={monitorImg} title="Monitors" icon={<MonitorSmartphone />} desc="From 1080p to ultrawide 4K." />
        </div>
      </div>
    </section>
  );
}

function BentoCard({ className = "", img, title, icon, desc, compact = false, featured = false }:
  { className?: string; img: string; title: string; icon: React.ReactNode; desc: string; compact?: boolean; featured?: boolean }) {
  return (
    <article className={`group relative overflow-hidden rounded-[1.75rem] border border-[var(--border)] ${className} transition-all duration-700 hover:shadow-[0_30px_60px_-20px_rgba(76,102,99,0.25)] hover:-translate-y-1`}>
      <img src={img} alt={title} loading="lazy" width={1024} height={768}
        className="absolute inset-0 h-full w-full object-cover opacity-80 transition-all duration-[1200ms] group-hover:scale-110 group-hover:opacity-95" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--granite)]/85 via-[var(--granite)]/30 to-transparent" />
      <div className={`relative h-full flex flex-col justify-end ${compact ? "p-5" : "p-7"}`}>
        <div className="flex items-center gap-2 text-[var(--frost)] mb-3">
          <span className="[&>svg]:h-3.5 [&>svg]:w-3.5">{icon}</span>
          <span className="text-[10px] uppercase tracking-[0.25em]">{title}</span>
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
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 grid grid-cols-2 md:grid-cols-4 gap-3">
        {stats.map((s, i) => (
          <div key={s.l} className="glass rounded-[1.75rem] p-8 text-center hover:bg-white/70 transition-all duration-500 hover:-translate-y-1 animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
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
    <section id="reviews" className="py-28 sm:py-40">
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
    <section id="visit" className="py-28 sm:py-40">
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
    <section id="faq" className="py-28 sm:py-40">
      <div className="mx-auto max-w-3xl px-4">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--granite)]/60 mb-4 text-center">FAQ</p>
        <h2 className="text-5xl sm:text-6xl font-display font-light text-[var(--granite)] text-center text-balance leading-[0.95]">
          Quick <span className="italic-serif">answers.</span>
        </h2>
        <Accordion type="single" collapsible className="mt-14 space-y-3">
          {items.map((it, i) => (
            <AccordionItem key={i} value={`i${i}`} className="border border-[var(--border)] rounded-2xl px-6 bg-white/50 backdrop-blur-md">
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
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="relative overflow-hidden rounded-[2rem] p-12 sm:p-20 text-center grain bg-gradient-to-br from-[var(--thistle)]/60 via-[var(--periwinkle)]/50 to-[var(--frost)]/60 border border-[var(--border)]">
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
    <footer className="mt-12 bg-[var(--granite)] text-[var(--background)] rounded-t-[2rem]">
      <div className="mx-auto max-w-6xl px-6 py-16 grid sm:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2.5 font-display text-base">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--background)] text-[var(--granite)] italic">in</span>
            IN-N-OUT
          </div>
          <p className="mt-5 text-sm text-[var(--background)]/65 max-w-xs leading-relaxed">
            Kamothe's trusted computer atelier — custom PCs, laptops, components and expert repair since day one.
          </p>
        </div>
        <div className="text-sm">
          <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--background)]/50 mb-4">Visit</div>
          <p className="text-[var(--background)]/85 leading-relaxed">
            Shop No. 10, Shivkalpataru Arcade,<br />Sector 17, Kamothe, Panvel,<br />Maharashtra 410209
          </p>
        </div>
        <div className="text-sm">
          <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--background)]/50 mb-4">Reach</div>
          <a href="tel:+919167940505" className="block hover:text-[var(--celadon)] transition">091679 40505</a>
          <span className="block text-[var(--background)]/60 mt-1.5">Open daily · Closes 10 pm</span>
          <div className="flex gap-2 mt-5">
            {["Women-owned", "LGBTQ+ friendly"].map((t) => (
              <span key={t} className="inline-flex items-center text-[10px] uppercase tracking-widest rounded-full border border-white/20 px-2.5 py-1">{t}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
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
    </main>
  );
}
