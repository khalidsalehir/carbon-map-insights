import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Route, TrendingUp, Network, Calculator } from "lucide-react";

const tiles = [
  {
    icon: Route,
    color: "#22d3ee",
    tag: "Routing",
    title: "Interactive route optimization",
    desc: "Click any emitter. See the cheapest realistic path to storage, factoring distance, transport mode, hub availability, and known infrastructure constraints.",
    metric: { value: "~12s", label: "to optimal route" },
  },
  {
    icon: TrendingUp,
    color: "#fb923c",
    tag: "Economics",
    title: "Live carbon market economics",
    desc: "Every project's business case recalculates as EU ETS, UK ETS, California, and RGGI prices move. Real numbers, not assumptions.",
    metric: { value: "4 markets", label: "integrated live" },
  },
  {
    icon: Network,
    color: "#f472b6",
    tag: "Infrastructure",
    title: "Hub-first infrastructure mapping",
    desc: "Porthos, Aramis, Delta Rhine, Northern Lights modeled as first-class entities — with capacity, timeline, operator, and connection logic baked in.",
    metric: { value: "45+ hubs", label: "fully modeled" },
  },
  {
    icon: Calculator,
    color: "#a78bfa",
    tag: "Cluster Math",
    title: "Volume scaling economics",
    desc: "Know exactly what a 2 Mtpa project costs versus 20 Mtpa. Cluster modeling shows the ~65% savings that make or break FID.",
    metric: { value: "−65%", label: "at full cluster" },
  },
];

const WhatWeDo = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section
      ref={ref}
      className="py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #080c14 0%, #0a1118 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full blur-[140px] opacity-40" style={{ background: "rgba(251,146,60,0.06)" }} />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[140px] opacity-40" style={{ background: "rgba(244,114,182,0.06)" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 max-w-2xl mx-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary/70 mb-4">
            Capability differentiators
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            What we do that others don't
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The capabilities that matter when you're actually building CCS projects — not just reading about them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {tiles.map((t, i) => {
            const Icon = t.icon;
            return (
              <div
                key={t.title}
                className={`group relative overflow-hidden rounded-[6px] p-7 transition-all duration-500 hover:-translate-y-1 flex flex-col ${isVisible ? "animate-fade-up" : "opacity-0"}`}
                style={{
                  animationDelay: `${0.15 + i * 0.1}s`,
                  background: `linear-gradient(160deg, ${t.color}10 0%, rgba(8,12,20,0.7) 70%)`,
                  border: `1px solid ${t.color}33`,
                  minHeight: 340,
                }}
              >
                {/* Corner glow */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-25 group-hover:opacity-50 transition-opacity duration-500"
                  style={{ background: t.color, transform: "translate(30%, -30%)" }}
                />

                {/* Top: icon + tag */}
                <div className="relative flex items-start justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-[5px] flex items-center justify-center"
                    style={{
                      background: `${t.color}1a`,
                      border: `1px solid ${t.color}40`,
                      color: t.color,
                      boxShadow: `0 8px 24px -8px ${t.color}40`,
                    }}
                  >
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <span
                    className="font-mono text-[10px] uppercase tracking-[0.18em] px-2 py-1 rounded-[3px]"
                    style={{ background: `${t.color}14`, color: t.color, border: `1px solid ${t.color}33` }}
                  >
                    {t.tag}
                  </span>
                </div>

                {/* Title + desc */}
                <h3 className="relative text-lg font-display font-semibold text-foreground mb-3 leading-snug">
                  {t.title}
                </h3>
                <p className="relative text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  {t.desc}
                </p>

                {/* Metric chip */}
                <div className="relative flex items-baseline gap-2 pt-4 border-t" style={{ borderColor: `${t.color}26` }}>
                  <span className="font-mono text-2xl font-semibold tracking-tight" style={{ color: t.color }}>
                    {t.metric.value}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                    {t.metric.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
