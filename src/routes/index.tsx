import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Cpu, Laptop, MonitorSmartphone, Keyboard, HardDrive, Wrench,
  Star, MapPin, Phone, Clock, Truck, Store, ShoppingBag,
  ArrowUpRight, Quote, ChevronDown, Sparkles
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
  head: () => ({
    meta: [
      { title: "IN-N-OUT Computer Solutions — Custom PCs, Laptops & Repair in Panvel" },
      { name: "description", content: "Top-rated computer shop in Kamothe, Panvel. Custom gaming PCs, laptops, GPUs, components & expert repair. 4.9★ from 464+ reviews. Open till 10pm." },
      { name: "keywords", content: "computer shop Panvel, laptop repair Kamothe, custom gaming PC Navi Mumbai, graphics card, computer store Kamothe, IN-N-OUT Computer Solutions" },
      { property: "og:title", content: "IN-N-OUT Computer Solutions — Custom PCs & Repair, Panvel" },
      { property: "og:description", content: "4.9★ rated. Custom PCs, laptops, components and expert repair in Kamothe, Panvel." },
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
          streetAddress: "Shop No. 10, Shivkalpataru Arcade, Building No. 1, Plot No. 1, near Sunrise Hospital, Sector 17, Kamothe",
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

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", fn); fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = [
    ["Shop", "#shop"], ["Reviews", "#reviews"], ["Visit", "#visit"], ["FAQ", "#faq"],
  ];
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <div className={`mx-auto max-w-6xl px-4`}>
        <div className={`flex items-center justify-between rounded-full px-4 py-2.5 transition-all ${scrolled ? "glass" : ""}`}>
          <a href="#top" className="flex items-center gap-2 font-display font-semibold tracking-tight">
            <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Cpu className="h-4 w-4" />
              <span className="absolute inset-0 rounded-lg bg-primary blur-md opacity-50 -z-10" />
            </span>
            <span className="hidden sm:inline">IN-N-OUT</span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {links.map(([l, h]) => (
              <a key={h} href={h} className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">{l}</a>
            ))}
          </nav>
          <a href="tel:+919167940505" className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
            <Phone className="h-3.5 w-3.5" /> Call
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px] animate-glow" />
      </div>
      <div className="mx-auto max-w-6xl px-4 text-center">
        <div className="animate-fade-up inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground mb-6">
          <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-glow" />
          Rated 4.9 by 464+ customers · Open till 10pm
        </div>
        <h1 className="animate-fade-up text-5xl sm:text-7xl md:text-8xl font-bold gradient-text text-balance" style={{ animationDelay: "0.1s" }}>
          Built for what's next.
        </h1>
        <p className="animate-fade-up mt-6 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground text-balance" style={{ animationDelay: "0.2s" }}>
          Custom gaming PCs, premium laptops, graphics cards and expert repair —
          handpicked components, honest pricing, in Kamothe, Panvel.
        </p>
        <div className="animate-fade-up mt-8 flex flex-wrap items-center justify-center gap-3" style={{ animationDelay: "0.3s" }}>
          <a href="#shop" className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:scale-[1.02] transition ring-glow">
            Explore what we sell <ArrowUpRight className="h-4 w-4" />
          </a>
          <a href="#visit" className="inline-flex items-center gap-1.5 rounded-full glass px-5 py-2.5 text-sm font-medium hover:bg-secondary transition">
            Visit the store
          </a>
        </div>

        <div className="animate-fade-up mt-16 relative" style={{ animationDelay: "0.4s" }}>
          <img
            src={heroPc}
            alt="Custom built gaming PC with cyan RGB lighting"
            width={1920} height={1080}
            className="mx-auto rounded-3xl border border-border max-w-4xl w-full animate-float"
          />
          <div className="absolute inset-x-10 -bottom-6 h-24 bg-primary/30 blur-3xl rounded-full -z-10" />
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["In-store shopping", "Kerbside pickup", "Delivery", "Genuine parts", "Expert repair", "Polite staff", "Women-owned", "LGBTQ+ friendly"];
  return (
    <div className="relative overflow-hidden border-y border-border py-5 mt-20">
      <div className="flex w-max animate-marquee gap-12 px-6">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-3 text-sm text-muted-foreground whitespace-nowrap">
            <Sparkles className="h-4 w-4 text-primary" /> {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function Bento() {
  return (
    <section id="shop" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">What we offer</p>
          <h2 className="text-4xl sm:text-6xl font-bold gradient-text text-balance">
            Every component. Every build.
          </h2>
          <p className="mt-4 text-muted-foreground text-balance">
            From silent productivity rigs to RGB-soaked beasts — and the parts to keep them flying.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[minmax(180px,auto)]">
          <BentoCard className="md:col-span-3 md:row-span-2" img={heroPc} title="Custom PCs" icon={<Cpu />} desc="Hand-built, cable-managed and benchmark-tuned to your needs and budget." />
          <BentoCard className="md:col-span-3" img={laptopImg} title="Laptops" icon={<Laptop />} desc="Apple, gaming, business — sourced with warranty." />
          <BentoCard className="md:col-span-2" img={gpuImg} title="Graphics Cards" icon={<MonitorSmartphone />} desc="NVIDIA & AMD, in stock." />
          <BentoCard className="md:col-span-1" img={keyboardImg} title="Peripherals" icon={<Keyboard />} desc="Keys. Mice. Mats." compact />
          <BentoCard className="md:col-span-2" img={componentsImg} title="Components" icon={<HardDrive />} desc="RAM, SSDs, PSUs, cooling." />
          <BentoCard className="md:col-span-2" img={repairImg} title="Repair" icon={<Wrench />} desc="Board-level laptop & PC service." />
          <BentoCard className="md:col-span-2" img={monitorImg} title="Monitors" icon={<MonitorSmartphone />} desc="From 1080p to ultrawide 4K." />
        </div>
      </div>
    </section>
  );
}

function BentoCard({ className = "", img, title, icon, desc, compact = false }:
  { className?: string; img: string; title: string; icon: React.ReactNode; desc: string; compact?: boolean }) {
  return (
    <article className={`group relative overflow-hidden rounded-3xl border border-border bg-card ${className}`}>
      <img src={img} alt={title} loading="lazy" width={1024} height={768}
        className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className={`relative h-full flex flex-col justify-end ${compact ? "p-4" : "p-6"}`}>
        <div className="flex items-center gap-2 text-primary mb-2">
          <span className="[&>svg]:h-4 [&>svg]:w-4">{icon}</span>
          <span className="text-xs uppercase tracking-widest">{title}</span>
        </div>
        {!compact && <p className="text-sm text-muted-foreground max-w-xs">{desc}</p>}
      </div>
    </article>
  );
}

function Stats() {
  const stats = [
    { v: "4.9", l: "Google rating" },
    { v: "464+", l: "Verified reviews" },
    { v: "10+", l: "Years serving Panvel" },
    { v: "1000+", l: "PCs built" },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.l} className="glass rounded-2xl p-6 text-center">
            <div className="text-4xl sm:text-5xl font-bold gradient-text">{s.v}</div>
            <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const REVIEWS = [
  {
    name: "Yadav E.", when: "4 months ago", rating: 5,
    text: "Visited In and Out Computer Shop for building PC and had a great experience. They built my PC very professionally and delivered it promptly. Staff is active, easily reachable and quick to respond.",
  },
  {
    name: "Satyam Pandey", when: "3 months ago", rating: 5,
    text: "IN-AN-OUT shop is a really excellent store. Products are very affordable and of great quality. Best experience I've ever had at any hardware shop. Polite and professional with customers.",
  },
  {
    name: "Angesh Singh", when: "a year ago", rating: 5,
    text: "Excellent experience. Got a skin applied to my MacBook — applied perfectly and looked great. Staff was very helpful and professional. Highly recommended.",
  },
  {
    name: "Verified Customer", when: "recent", rating: 5,
    text: "Genuine service and product, polite staff and owner, and a really good ambience to walk in to. Felt like an upgrade in every sense.",
  },
];

function Reviews() {
  return (
    <section id="reviews" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Loved in Panvel</p>
            <h2 className="text-4xl sm:text-6xl font-bold gradient-text text-balance">4.9 stars. 464 stories.</h2>
          </div>
          <a href="https://www.google.com/maps/place/IN-N-OUT+Computer+Solutions" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
            View on Google <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {REVIEWS.map((r) => (
            <article key={r.name} className="glass rounded-3xl p-6 sm:p-8 relative overflow-hidden">
              <Quote className="absolute right-6 top-6 h-10 w-10 text-primary/20" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">"{r.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-primary/20 grid place-items-center text-primary font-medium text-sm">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-medium">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.when}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Visit() {
  const services = [
    { icon: <Store className="h-4 w-4" />, l: "In-store shopping" },
    { icon: <ShoppingBag className="h-4 w-4" />, l: "Kerbside pickup" },
    { icon: <Truck className="h-4 w-4" />, l: "Delivery" },
  ];
  return (
    <section id="visit" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 flex flex-col justify-between glass rounded-3xl p-8">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Find us</p>
              <h2 className="text-4xl sm:text-5xl font-bold gradient-text">Step in. Walk out happy.</h2>
              <p className="mt-4 text-muted-foreground">
                Pop by our Kamothe storefront for hands-on demos, custom-build consults and same-day fixes.
              </p>
            </div>
            <div className="mt-10 space-y-5">
              <Row icon={<MapPin className="h-4 w-4 text-primary" />} title="Address"
                value="Shop No. 10, Shivkalpataru Arcade, Sector 17, Kamothe, Panvel, Maharashtra 410209" />
              <Row icon={<Phone className="h-4 w-4 text-primary" />} title="Phone"
                value="091679 40505" href="tel:+919167940505" />
              <Row icon={<Clock className="h-4 w-4 text-primary" />} title="Hours"
                value="Open daily · Closes 10 pm" />
              <div className="flex flex-wrap gap-2 pt-2">
                {services.map((s) => (
                  <span key={s.l} className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
                    {s.icon} {s.l}
                  </span>
                ))}
              </div>
              <a href="https://www.google.com/maps/dir//IN-N-OUT+Computer+Solutions,+Kamothe,+Panvel"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition mt-4">
                Get directions <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 relative rounded-3xl overflow-hidden border border-border min-h-[420px] glass">
            <iframe
              title="IN-N-OUT Computer Solutions location"
              src="https://www.google.com/maps?q=IN-N-OUT+Computer+Solutions,+Shivkalpataru+Arcade,+Sector+17,+Kamothe,+Panvel,+Maharashtra+410209&output=embed"
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg) saturate(0.85) brightness(0.95)" }}
            />
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
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{title}</div>
        <div className="text-sm sm:text-base text-foreground group-hover:text-primary transition">{value}</div>
      </div>
    </Wrapper>
  );
}

function FAQ() {
  const items = [
    { q: "Do you build custom gaming PCs?",
      a: "Yes. Tell us your games, software and budget — we recommend parts, assemble, cable-manage and stress-test before handover. Most builds ship within 2–4 days." },
    { q: "Do you repair laptops and MacBooks?",
      a: "Absolutely. Common services include screen replacement, battery swaps, keyboard repair, motherboard-level diagnostics and data recovery for both Windows laptops and MacBooks." },
    { q: "Are components genuine and under warranty?",
      a: "Every part we sell is sourced through authorised channels and ships with full manufacturer warranty. We provide proper GST invoices." },
    { q: "Do you offer pickup or delivery?",
      a: "Yes — in-store shopping, kerbside pickup and local delivery across Panvel and Navi Mumbai." },
    { q: "What are your hours?",
      a: "We're open every day and close at 10 pm. Saturdays are typically our quietest mornings if you want a relaxed consult." },
  ];
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4">
        <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3 text-center">FAQ</p>
        <h2 className="text-4xl sm:text-5xl font-bold gradient-text text-center text-balance">
          Quick answers.
        </h2>
        <Accordion type="single" collapsible className="mt-10">
          {items.map((it, i) => (
            <AccordionItem key={i} value={`i${i}`} className="border-border">
              <AccordionTrigger className="text-left text-base sm:text-lg hover:no-underline py-5">
                {it.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {it.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="relative overflow-hidden rounded-3xl glass p-10 sm:p-16 text-center grain">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-primary/40 blur-3xl" />
          <h2 className="relative text-4xl sm:text-6xl font-bold gradient-text text-balance">
            Your next build starts here.
          </h2>
          <p className="relative mt-4 text-muted-foreground max-w-xl mx-auto">
            Walk in, call us, or message — we'll spec something that punches above its price.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="tel:+919167940505" className="inline-flex items-center gap-1.5 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:scale-[1.02] transition ring-glow">
              <Phone className="h-4 w-4" /> 091679 40505
            </a>
            <a href="#visit" className="inline-flex items-center gap-1.5 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-secondary transition">
              Visit the store <ChevronDown className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border mt-10">
      <div className="mx-auto max-w-6xl px-4 py-12 grid sm:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 font-display font-semibold">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Cpu className="h-4 w-4" />
            </span>
            IN-N-OUT Computer Solutions
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Kamothe's trusted computer store — custom PCs, laptops, components and expert repair since day one.
          </p>
        </div>
        <div className="text-sm">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Visit</div>
          <p className="text-foreground/80 leading-relaxed">
            Shop No. 10, Shivkalpataru Arcade,<br />Sector 17, Kamothe, Panvel,<br />Maharashtra 410209
          </p>
        </div>
        <div className="text-sm">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Reach</div>
          <a href="tel:+919167940505" className="block hover:text-primary">091679 40505</a>
          <span className="block text-muted-foreground mt-1">Open daily · Closes 10 pm</span>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} IN-N-OUT Computer Solutions. All rights reserved.</span>
          <span>Women-owned · LGBTQ+ friendly · Panvel, MH</span>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <main className="relative">
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
