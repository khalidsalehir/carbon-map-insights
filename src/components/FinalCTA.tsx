import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const FinalCTA = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[700px] rounded-full bg-primary/10 blur-[140px]" />
      </div>
      <div className={`container mx-auto px-6 relative z-10 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-foreground mb-6">
          Stop Piecing Together<br />the CCS Puzzle
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Enterprise teams spend tens of thousands on multiple subscriptions and still don't see the full picture. CarbonMap gives you complete value chain intelligence in one platform.
        </p>
        <a
          href="mailto:info@carbonmap.nl?subject=CarbonMap%20Early%20Access%20Request"
          className="inline-block bg-primary text-background px-10 py-4 rounded-lg text-lg font-body font-semibold hover:opacity-90 transition-all glow-cyan-strong"
        >
          Request Early Access →
        </a>
        <p className="text-sm text-muted-foreground mt-4">
          Currently onboarding select enterprise teams. Spots are limited.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
