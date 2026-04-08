import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const stats = [
  { value: "10+ years", label: "CCS & energy transition experience" },
  { value: "€500M+", label: "In projects supported" },
  { value: "25+", label: "Countries covered" },
  { value: "Full Stack", label: "Capture to storage" },
];

const OurMission = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className={`container mx-auto px-6 relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
            Built for the <span className="text-gradient-cyan">CCS Industry</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            CarbonMap was built by professionals with deep operational experience in CCS project development,
            CO₂ transport infrastructure, energy transition strategy, and subsidy frameworks across Europe.
            We combine hands-on CCUS expertise with advanced data engineering to deliver intelligence that
            actually moves projects forward.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div key={s.value} className="glass-card p-6 text-center hover:border-primary/30 transition-all">
              <div className="text-2xl font-display font-bold text-foreground mb-2">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMission;
