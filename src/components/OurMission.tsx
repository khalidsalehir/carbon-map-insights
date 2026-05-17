import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Linkedin } from "lucide-react";
import industrialScene from "@/assets/industrial-scene.png";

const stats = [
  { value: "25+ yrs", label: "Combined CCS + energy experience" },
  { value: "€1B+", label: "In projects supported" },
  { value: "NL · UK · NO · DE", label: "Primary coverage markets" },
  { value: "Operator DNA", label: "Built by people who've shipped" },
];

// Placeholder founders — replace with real names/roles/photos when ready.
// `initials` is used as the avatar fallback so the section ships without photos.
const founders = [
  { initials: "JD", name: "Founder 1", role: "Co-founder · CCS infrastructure", linkedin: "#" },
  { initials: "MV", name: "Founder 2", role: "Co-founder · Energy markets", linkedin: "#" },
  { initials: "RK", name: "Founder 3", role: "Lead engineer · Platform & data", linkedin: "#" },
];

// "Past experience" wordmarks — text-only, greyscale. Replace with real SVG logos when licensing is sorted.
const pastExperience = ["Gasunie", "Vopak", "Shell", "EBN", "TNO", "Big 4"];

const OurMission = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute -left-40 top-1/4 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[160px]" />
      <div className={`container mx-auto px-6 relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        {/* Eyebrow */}
        <div className="text-xs font-mono uppercase tracking-[0.25em] text-primary/80 mb-4 text-center">
          The team behind the data
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-stretch mb-16">
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
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-6 leading-[1.05] tracking-tight">
                Built by <span className="text-gradient-cyan">CCS operators</span>, not data vendors.
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-[58ch]" style={{ lineHeight: '1.8' }}>
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
                  <div className="text-2xl font-display font-bold text-foreground mb-1 tabular-nums">{s.value}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Founders strip */}
        <div className="border-t border-border/30 pt-12 mb-12">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6">
            Founders
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {founders.map((f, i) => (
              <a
                key={f.name}
                href={f.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-card p-5 flex items-center gap-4 hover:border-primary/40 transition-all group ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${0.5 + i * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/30 to-secondary/20 border border-primary/30 flex items-center justify-center text-foreground font-display font-semibold text-lg shrink-0">
                  {f.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-base font-display font-semibold text-foreground truncate">{f.name}</div>
                  <div className="text-xs text-muted-foreground truncate">{f.role}</div>
                </div>
                <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </a>
            ))}
          </div>
        </div>

        {/* Past experience wordmarks */}
        <div className="border-t border-border/30 pt-10">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6">
            Past experience of our founders
          </div>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4 opacity-60">
            {pastExperience.map((co) => (
              <div
                key={co}
                className="font-display text-xl sm:text-2xl text-muted-foreground/80 tracking-wide grayscale hover:opacity-100 hover:text-foreground transition-all"
              >
                {co}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
