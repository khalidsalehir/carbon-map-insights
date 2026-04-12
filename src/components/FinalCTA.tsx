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
          Ready to See the Full<br />Picture?
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          CarbonMap is available for enterprise teams and CCS professionals. Request a demo to see how it fits your workflow.
        </p>
        <a
          href="https://calendly.com/carbonmap-info/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-background px-10 py-4 rounded-lg text-lg font-body font-semibold hover:opacity-90 transition-all glow-cyan-strong"
        >
          Request Demo →
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;
