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
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Blurred cyan accent glow on the left */}
      <div className="absolute -left-40 top-1/4 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[160px]" />
      <div className={`container mx-auto px-6 relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="grid lg:grid-cols-5 gap-10 items-stretch">
          {/* Left — Quote card */}
          <div className="lg:col-span-2 glass-card p-10 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="text-5xl text-primary/30 font-display leading-none mb-4">"</div>
              <blockquote className="text-lg font-display text-foreground leading-relaxed italic mb-6">
                The success of CCS depends on data, collaboration, and informed decision-making. CarbonMap brings it all together.
              </blockquote>
              <cite className="text-sm text-muted-foreground not-italic">— The CarbonMap Team</cite>
            </div>
          </div>

          {/* Right — Mission + stats */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
                Built for the <span className="text-gradient-cyan">CCS Industry</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed" style={{ lineHeight: '1.8' }}>
                CarbonMap was built by professionals with deep operational experience in CCS project development,
                CO₂ transport infrastructure, energy transition strategy, and subsidy frameworks across Europe.
                We combine hands-on CCUS expertise with advanced data engineering to deliver intelligence that
                actually moves projects forward.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div key={s.value} className={`glass-card p-6 hover:border-primary/30 transition-all ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                  <div className="text-2xl font-display font-bold text-foreground mb-1">{s.value}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
