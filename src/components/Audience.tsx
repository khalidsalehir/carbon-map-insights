import { LineChart, Handshake, Wrench, Landmark, ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import audStrategy from "@/assets/aud-strategy.jpg";
import audCommercial from "@/assets/aud-commercial.jpg";
import audDeveloper from "@/assets/aud-developer.jpg";
import audPolicy from "@/assets/aud-policy.jpg";

const audiences = [
  {
    icon: LineChart,
    title: "Strategy & BI Teams",
    desc: "Track market developments, identify white spots, and inform strategic decisions with complete CCS value chain data.",
    image: audStrategy,
    color: "#22d3ee",
    tag: "Intelligence",
  },
  {
    icon: Handshake,
    title: "Commercial Teams",
    desc: "Prepare for customer meetings with facility-level data. Cross-check capture potential and qualify new business leads.",
    image: audCommercial,
    color: "#fb923c",
    tag: "Sales",
  },
  {
    icon: Wrench,
    title: "Project Developers",
    desc: "Assess storage availability, transport options, and hub connections. Replace fragmented data sources with one platform.",
    image: audDeveloper,
    color: "#14b8a6",
    tag: "Engineering",
  },
  {
    icon: Landmark,
    title: "Policy & Research",
    desc: "Support policy studies, funding applications, and regulatory analysis with comprehensive data across 150+ countries.",
    image: audPolicy,
    color: "#a78bfa",
    tag: "Research",
  },
];

const Audience = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="py-32 relative overflow-hidden" style={{ backgroundColor: "#080c14" }}>
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-50" style={{ background: "rgba(167,139,250,0.08)" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 max-w-2xl mx-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary/70 mb-4">
            Built for operators, not analysts
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Who works with CarbonMap
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Four workflows. One source of truth for the entire CCS value chain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {audiences.map((a, i) => {
            const Icon = a.icon;
            return (
              <div
                key={a.title}
                className={`group relative overflow-hidden rounded-[6px] transition-all duration-500 hover:-translate-y-1 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
                style={{
                  animationDelay: `${i * 0.1}s`,
                  border: `1px solid ${a.color}26`,
                  background: "rgba(8,12,20,0.5)",
                }}
              >
                {/* Image strip */}
                <div className="relative h-[180px] overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(180deg, ${a.color}1a 0%, rgba(8,12,20,0.2) 50%, rgba(8,12,20,0.95) 100%)`,
                    }}
                  />
                  {/* Tag */}
                  <div
                    className="absolute top-4 left-4 px-2.5 py-1 rounded-[3px] font-mono text-[10px] uppercase tracking-[0.18em] backdrop-blur-md"
                    style={{
                      background: `${a.color}1f`,
                      color: a.color,
                      border: `1px solid ${a.color}40`,
                    }}
                  >
                    {a.tag}
                  </div>
                  {/* Icon badge */}
                  <div
                    className="absolute bottom-4 left-4 w-11 h-11 rounded-[4px] flex items-center justify-center backdrop-blur-md"
                    style={{
                      background: `${a.color}14`,
                      border: `1px solid ${a.color}40`,
                      color: a.color,
                    }}
                  >
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-lg font-display font-semibold text-foreground leading-snug">
                      {a.title}
                    </h3>
                    <ArrowUpRight
                      className="w-4 h-4 mt-1 transition-all duration-300 opacity-30 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      style={{ color: a.color }}
                      strokeWidth={2}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 h-px transition-all duration-500 group-hover:w-full"
                  style={{ width: "30%", background: `linear-gradient(90deg, ${a.color}, transparent)` }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Audience;
