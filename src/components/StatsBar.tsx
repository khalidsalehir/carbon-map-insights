import { Factory, Filter, GitBranch, Anchor, Globe2 } from "lucide-react";
import { useScrollAnimation, useCountUp } from "@/hooks/use-scroll-animation";

const stats = [
  { value: 30000, suffix: "+", label: "Industrial Emitters", sub: "Tracked globally", icon: Factory, color: "#22d3ee" },
  { value: 1500, suffix: "+", label: "Capture Projects", sub: "Operational & planned", icon: Filter, color: "#14b8a6" },
  { value: 113, suffix: "", label: "Storage Sites", sub: "Geological reservoirs", icon: Anchor, color: "#f472b6" },
  { value: 45, suffix: "+", label: "CCS Hubs", sub: "Cluster terminals", icon: GitBranch, color: "#fb923c" },
  { value: 150, suffix: "+", label: "Countries", sub: "Coverage scope", icon: Globe2, color: "#a78bfa" },
];

const StatCard = ({ stat, isVisible, index }: { stat: typeof stats[0]; isVisible: boolean; index: number }) => {
  const count = useCountUp(stat.value, 2000, isVisible);
  const Icon = stat.icon;
  return (
    <div
      className="group relative overflow-hidden rounded-[6px] p-6 transition-all duration-500 hover:-translate-y-1"
      style={{
        background: `linear-gradient(160deg, ${stat.color}0d 0%, rgba(8,12,20,0.6) 60%)`,
        border: `1px solid ${stat.color}26`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${index * 0.08}s, transform 0.6s ease ${index * 0.08}s`,
      }}
    >
      {/* Corner accent */}
      <div
        className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"
        style={{ background: stat.color, transform: "translate(40%, -40%)" }}
      />
      {/* Top row: icon + ticker dot */}
      <div className="relative flex items-start justify-between mb-5">
        <div
          className="w-9 h-9 rounded-[4px] flex items-center justify-center"
          style={{ background: `${stat.color}1a`, color: stat.color, border: `1px solid ${stat.color}33` }}
        >
          <Icon className="w-4 h-4" strokeWidth={1.75} />
        </div>
        <div className="flex items-center gap-1.5">
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: stat.color, boxShadow: `0 0 6px ${stat.color}` }}
          />
          <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: stat.color }}>
            Live
          </span>
        </div>
      </div>
      {/* Value */}
      <div
        className="relative font-mono font-semibold text-4xl lg:text-[2.6rem] leading-none tracking-tight mb-2"
        style={{ color: stat.color }}
      >
        {count.toLocaleString()}
        <span className="text-2xl opacity-70">{stat.suffix}</span>
      </div>
      {/* Label + sub */}
      <div className="relative">
        <div className="text-sm font-display font-semibold text-foreground/90 leading-tight">
          {stat.label}
        </div>
        <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground/70 mt-1">
          {stat.sub}
        </div>
      </div>
    </div>
  );
};

const StatsBar = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="relative py-20" style={{ backgroundColor: "#080c14" }}>
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-10 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary/70 mb-3">
            Platform Coverage
          </p>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
            The numbers behind the map
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} isVisible={isVisible} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
