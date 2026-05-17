import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ArrowUpRight } from "lucide-react";
import industrialScene from "@/assets/industrial-scene.png";

const stats = [
  { value: "25+ years", label: "Combined CCS + energy experience" },
  { value: "€1B+", label: "In projects supported" },
  { value: "NL · UK · NO · DE", label: "Primary coverage markets" },
  { value: "Operator DNA", label: "Built by people who've shipped" },
];

const OurMission = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute -left-40 top-1/4 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[160px]" />
      <div className={`container mx-auto px-6 relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="grid lg:grid-cols-5 gap-10 items-stretch">
          {/* Left — Quote card with industrial background */}
          <div className="lg:col-span-2 glass-card p-10 flex flex-col justify-center relative overflow-hidden rounded-xl" style={{ border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>
            <img src={industrialScene} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: 'rgba(8,12,20,0.82)' }} />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="text-5xl text-primary/30 font-display leading-none mb-4">"</div>
              <blockquote className="text-lg font-display text-foreground leading-relaxed italic mb-6">
                CCS succeeds when the people mapping it have also operated it. We started this platform because the public data was missing the operational reality — and the operational reality was missing the data. We built the bridge.
              </blockquote>
              <cite className="text-sm text-muted-foreground not-italic">— The CarbonMap team</cite>
            </div>
          </div>

          {/* Right — Mission + stats */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
                Built by <span className="text-gradient-cyan">CCS operators</span>, not data vendors.
              </h2>
              <p className="text-muted-foreground leading-relaxed" style={{ lineHeight: '1.8' }}>
                A team with 25+ years combined inside European energy infrastructure — Gasunie,
                Vopak, solar manufacturing, Big 4 advisory. We've seen how carbon markets evolve,
                how ETS regulations reshape project economics, how CCS technology matures, and how
                infrastructure actually gets permitted and built. CCS is the same game scaled — and
                we built the map we wished existed.
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

            <a
              href="mailto:info@carbonmap.nl?subject=Team%20inquiry"
              className="inline-flex items-center gap-2 self-start text-sm font-body text-muted-foreground hover:text-primary transition-colors group"
            >
              <span>Meet the team — names on request</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
