import globeHero from "@/assets/globe-hero.jpg";

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  duration: `${12 + Math.random() * 18}s`,
  delay: `${Math.random() * 10}s`,
  size: Math.random() * 3 + 1,
}));

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
    {/* Grid pattern */}
    <div className="absolute inset-0 grid-pattern opacity-40" />
    {/* Noise overlay */}
    <div className="absolute inset-0 noise-overlay pointer-events-none" />
    {/* Radial glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />

    {/* Particles */}
    {particles.map((p) => (
      <div key={p.id} className="absolute animate-float-particle rounded-full bg-primary/60 pointer-events-none"
        style={{ left: p.left, bottom: '-10px', width: p.size, height: p.size, '--duration': p.duration, '--delay': p.delay } as React.CSSProperties} />
    ))}

    <div className="container mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="space-y-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-xs font-medium text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-glow" />
            Live Data · Updated Daily
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight text-foreground">
            See every CCS<br />project on{" "}
            <span className="text-gradient-cyan">Earth.</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            The most comprehensive CCS intelligence platform. Track emitters, capture installations,
            transport networks, and storage sites — powered by AI analytics and real-time market data.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-all glow-cyan">
              Explore the Map →
            </a>
            <a href="#" className="border border-border text-foreground px-8 py-3 rounded-lg font-medium hover:bg-muted/50 transition-all">
              Watch Demo
            </a>
          </div>
        </div>

        {/* Right — Globe image */}
        <div className="relative flex justify-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative w-full max-w-lg">
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl scale-75" />
            <img src={globeHero} alt="Global CCS project map visualization" width={800} height={800}
              className="relative w-full h-auto rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
