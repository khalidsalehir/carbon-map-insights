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
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-xs font-medium text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-glow" />
            Live Data · Updated Daily
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight text-foreground">
            See Every Link in<br />the{" "}
            <span className="text-gradient-cyan">CCS Chain.</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            The only platform that maps CO₂ from industrial source to permanent geological storage — emitters, capture projects, transport, hubs, and storage sites in one integrated view.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:info@carbonmap.nl?subject=CarbonMap%20Early%20Access%20Request"
              className="bg-primary text-background px-8 py-3.5 rounded-lg font-body text-base font-semibold hover:opacity-90 transition-all glow-cyan"
            >
              Request Early Access →
            </a>
            <a
              href="mailto:info@carbonmap.nl?subject=CarbonMap%20Demo%20Request"
              className="border border-primary text-primary px-8 py-3.5 rounded-lg font-body text-base font-semibold hover:bg-primary/10 transition-all"
            >
              Watch Demo
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
