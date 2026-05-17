import { Link } from "react-router-dom";
import globeHero from "@/assets/globe-hero.jpg";

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  duration: `${12 + Math.random() * 18}s`,
  delay: `${Math.random() * 10}s`,
  size: Math.random() * 3 + 1,
}));

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
    <div className="absolute inset-0 grid-pattern opacity-40" />
    <div className="absolute inset-0 noise-overlay pointer-events-none" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />

    {particles.map((p) => (
      <div key={p.id} className="absolute animate-float-particle rounded-full bg-primary/60 pointer-events-none"
        style={{ left: p.left, bottom: '-10px', width: p.size, height: p.size, '--duration': p.duration, '--delay': p.delay } as React.CSSProperties} />
    ))}

    <div className="container mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-glow" />
            Live · European CCS Intelligence
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-display font-bold leading-[1.02] tracking-tight text-foreground">
            Europe's CCS<br />infrastructure,<br />
            <span className="text-gradient-cyan">mapped from the inside.</span>
          </h1>

          <div className="max-w-xl space-y-3">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Real-time intelligence on emitters, capture, transport, storage and hub economics — across the North Sea Basin and beyond.
            </p>
            <p className="text-sm text-muted-foreground/70 font-body">
              Built in Rotterdam by operators who've worked the assets. <span className="text-foreground/70">150+ countries indexed.</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/platform"
              className="bg-primary text-background px-8 py-3.5 rounded-lg font-body text-base font-semibold hover:opacity-90 transition-all glow-cyan inline-flex items-center gap-2"
            >
              Explore the live map →
            </Link>
            <a
              href="https://calendly.com/carbonmap-info/30min?month=2026-04"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-muted-foreground/30 text-foreground px-8 py-3.5 rounded-lg font-body text-base font-semibold hover:border-primary/50 hover:text-primary transition-all"
            >
              Book a 30-min call
            </a>
          </div>
        </div>

        <div className="relative flex justify-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative w-full max-w-lg">
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl scale-75" />
            <img src={globeHero} alt="Global CCS project map visualization" width={800} height={800}
              className="relative w-full h-auto"
              style={{
                mixBlendMode: 'lighten',
                mask: 'radial-gradient(circle, white 30%, transparent 70%)',
                WebkitMask: 'radial-gradient(circle, white 30%, transparent 70%)',
              }} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
