import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Route, TrendingUp, Network, Calculator } from "lucide-react";

const tiles = [
  {
    icon: Route,
    accent: "text-stat-cyan",
    border: "hover:border-stat-cyan/40",
    glow: "group-hover:shadow-[0_0_40px_-10px_hsl(var(--stat-cyan)/0.4)]",
    title: "Interactive route optimization",
    desc: "Click any emitter. See the cheapest realistic path to storage, factoring distance, transport mode, hub availability, and known infrastructure constraints.",
  },
  {
    icon: TrendingUp,
    accent: "text-stat-orange",
    border: "hover:border-stat-orange/40",
    glow: "group-hover:shadow-[0_0_40px_-10px_hsl(var(--stat-orange)/0.4)]",
    title: "Live carbon market economics",
    desc: "Every project's business case recalculates as EU ETS, UK ETS, California, and RGGI prices move. Real numbers, not assumptions.",
  },
  {
    icon: Network,
    accent: "text-stat-pink",
    border: "hover:border-stat-pink/40",
    glow: "group-hover:shadow-[0_0_40px_-10px_hsl(var(--stat-pink)/0.4)]",
    title: "Hub-first infrastructure mapping",
    desc: "Porthos, Aramis, Delta Rhine, Northern Lights modeled as first-class entities — with capacity, timeline, operator, and connection logic baked in.",
  },
  {
    icon: Calculator,
    accent: "text-stat-purple",
    border: "hover:border-stat-purple/40",
    glow: "group-hover:shadow-[0_0_40px_-10px_hsl(var(--stat-purple)/0.4)]",
    title: "Volume scaling economics",
    desc: "Know exactly what a 2 Mtpa project costs versus 20 Mtpa. Cluster modeling shows the ~65% savings that make or break FID.",
  },
];

const WhatWeDo = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="py-32 relative" style={{ backgroundColor: "hsl(218 40% 7%)" }}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 max-w-2xl mx-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
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
                className={`group glass-card p-7 transition-all duration-300 ${t.border} ${t.glow} hover:-translate-y-1 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${0.15 + i * 0.1}s` }}
              >
                <div className={`w-11 h-11 rounded-lg flex items-center justify-center mb-5 bg-foreground/5 ${t.accent}`}>
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h3 className="text-base font-display font-semibold text-foreground mb-3 leading-snug">
                  {t.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
