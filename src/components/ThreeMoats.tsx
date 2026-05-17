import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ArrowUpRight } from "lucide-react";
import pipelineNetwork from "@/assets/pipeline-network.png";
import moatEts from "@/assets/moat-ets.jpg";
import moatHub from "@/assets/moat-hub.jpg";

const ThreeMoats = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, hsl(220 40% 5%) 0%, hsl(220 35% 7%) 50%, hsl(220 40% 5%) 100%)",
      }}
    >
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute -left-40 top-1/3 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[160px]" />

      <div
        className={`container mx-auto px-6 relative z-10 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-primary/80 mb-4">
            Why teams choose CarbonMap
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 leading-tight">
            Three things we do <span className="text-gradient-cyan">better than anyone</span>.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Built by people who've worked the infrastructure, not just mapped it.
          </p>
        </div>

        {/* Asymmetric grid */}
        <div className="grid lg:grid-cols-2 gap-5 max-w-6xl mx-auto">
          {/* Tile 1 — Large left */}
          <div
            className={`relative overflow-hidden rounded-[4px] hover:border-primary/40 transition-all duration-300 group lg:row-span-2 min-h-[480px] ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.15s", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <img
              src={pipelineNetwork}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(8,12,20,0.3) 0%, rgba(8,12,20,0.55) 60%, rgba(8,12,20,0.7) 100%)",
              }}
            />
            <div className="relative z-10 p-10 flex flex-col justify-end h-full min-h-[480px]">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-stat-cyan mb-5">
                European Infrastructure
              </div>
              <h3 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-5 leading-[1.15]">
                The backbone, from the inside.
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                Porthos injection wells. Aramis FID timelines. Delta Rhine corridor approvals.
                Northern Lights capacity. Mapped by people who've actually worked these projects —
                not scraped from press releases.
              </p>
              <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-[3px] border border-stat-cyan/30 bg-stat-cyan/5">
                <span className="w-1.5 h-1.5 rounded-full bg-stat-cyan animate-pulse" />
                <span className="text-xs font-mono text-stat-cyan tracking-wider">
                  NL · UK · NO · DE · BE coverage
                </span>
              </div>
            </div>
          </div>

          {/* Tile 2 — Top right */}
          <div
            className={`relative rounded-[4px] hover:border-primary/40 transition-all duration-300 p-10 group min-h-[230px] overflow-hidden ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{
              animationDelay: "0.3s",
              border: "1px solid rgba(255,255,255,0.08)",
              background:
                "linear-gradient(135deg, rgba(20,184,166,0.04) 0%, rgba(8,12,20,0.4) 100%)",
            }}
          >
            <img
              src={moatEts}
              alt=""
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-40 transition-opacity duration-700"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(8,12,20,0.85) 0%, rgba(8,12,20,0.7) 50%, rgba(8,12,20,0.9) 100%)",
              }}
            />
            <div className="relative z-10">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-stat-orange mb-4">
              Live ETS Economics
            </div>
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-4 leading-tight">
              Today's price. Your project. Now.
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              EU ETS, UK ETS, California, RGGI — integrated directly into every project's business
              case. When carbon moves, your model updates. The only platform that does this.
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-border/30">
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                EU ETS
              </div>
              <div className="font-mono text-2xl font-semibold text-foreground tracking-tight">
                €89.42
              </div>
              <div className="flex items-center gap-1 text-xs font-mono text-stat-cyan">
                <ArrowUpRight className="w-3 h-3" strokeWidth={2.5} />
                +2.3%
              </div>
            </div>
          </div>

          {/* Tile 3 — Bottom right */}
          <div
            className={`relative rounded-[4px] hover:border-primary/40 transition-all duration-300 p-10 group min-h-[230px] overflow-hidden ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{
              animationDelay: "0.45s",
              border: "1px solid rgba(255,255,255,0.08)",
              background:
                "linear-gradient(135deg, rgba(251,146,60,0.04) 0%, rgba(8,12,20,0.4) 100%)",
            }}
          >
            <img
              src={moatHub}
              alt=""
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-40 transition-opacity duration-700"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(8,12,20,0.85) 0%, rgba(8,12,20,0.7) 50%, rgba(8,12,20,0.9) 100%)",
              }}
            />
            <div className="relative z-10">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-stat-pink mb-4">
              Hub Cluster Economics
            </div>
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-4 leading-tight">
              65% cheaper. With the right hub.
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              A single emitter costs 2.5× baseline. Twenty emitters clustered through one hub costs
              0.35×. We model the full math so you know which projects to build first.
            </p>
            <div className="flex items-center gap-4 pt-4 border-t border-border/30">
              <svg viewBox="0 0 140 40" className="h-10 w-auto" fill="none">
                {[0, 1, 2, 3, 4].map((i) => (
                  <g key={i}>
                    <circle cx="8" cy={6 + i * 7} r="2.5" fill="hsl(var(--stat-pink))" opacity="0.7" />
                    <line
                      x1="11"
                      y1={6 + i * 7}
                      x2="68"
                      y2="20"
                      stroke="hsl(var(--stat-pink))"
                      strokeWidth="0.5"
                      opacity="0.4"
                    />
                  </g>
                ))}
                <circle cx="72" cy="20" r="7" fill="none" stroke="hsl(var(--stat-cyan))" strokeWidth="1.5" />
                <circle cx="72" cy="20" r="3" fill="hsl(var(--stat-cyan))" />
                <line x1="79" y1="20" x2="120" y2="20" stroke="hsl(var(--stat-cyan))" strokeWidth="1" opacity="0.5" />
                <text x="124" y="23" fill="hsl(var(--stat-cyan))" fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="600">
                  −65%
                </text>
              </svg>
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground leading-tight">
                20 emitters →<br />1 shared hub
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeMoats;
