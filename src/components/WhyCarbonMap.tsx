import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const cards = [
  { category: "Market Intelligence", color: "text-primary", tint: "from-primary/10 to-transparent", title: "Full Value Chain Coverage", desc: "The only platform that maps the complete CCS chain — from 29,000+ emitters through capture, transport, hubs to geological storage. No blind spots.", span: "lg:col-span-3" },
  { category: "Live Data", color: "text-stat-cyan", tint: "from-stat-cyan/10 to-transparent", title: "EU ETS Carbon Pricing", desc: "Real-time EU ETS, UK ETS, and RGGI carbon price tracking with 12-month trends and cross-market comparison. Updated daily.", span: "lg:col-span-2" },
  { category: "AI-Powered", color: "text-stat-purple", tint: "from-stat-purple/10 to-transparent", title: "Intelligent Project Analysis", desc: "AI-driven feasibility analysis, competitive landscape mapping, and strategic fit scoring. Upload your project for instant intelligence.", span: "lg:col-span-2" },
  { category: "Infrastructure", color: "text-stat-orange", tint: "from-stat-orange/10 to-transparent", title: "Transport & Hub Mapping", desc: "23 pipeline corridors and 43 hubs & terminals classified, mapped and filterable. See how CO₂ flows from source to sink.", span: "lg:col-span-3" },
  { category: "Analytics", color: "text-stat-pink", tint: "from-stat-pink/10 to-transparent", title: "Emitter Intelligence", desc: "29,000+ industrial CO₂ sources with emission volumes, sector breakdowns, biogenic share, and capturable emissions per facility.", span: "lg:col-span-2" },
  { category: "News & Trends", color: "text-secondary", tint: "from-secondary/10 to-transparent", title: "CCS News & Activity Feed", desc: "Curated news, project updates, permit filings, and funding announcements. Never miss a development in your market.", span: "lg:col-span-3" },
];

const WhyCarbonMap = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-32 overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(220 40% 5%) 0%, hsl(220 35% 7%) 50%, hsl(220 40% 5%) 100%)' }}>
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className={`container mx-auto px-6 relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            A Smarter Approach to <span className="text-gradient-cyan">CCS Intelligence</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-5">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`${card.span} glass-card p-8 group hover:scale-[1.02] hover:border-primary/40 transition-all duration-300 relative overflow-hidden ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.tint} pointer-events-none`} />
              <div className="relative z-10">
                <span className={`text-xs font-semibold uppercase tracking-wider ${card.color}`}>{card.category}</span>
                <h3 className="text-xl font-display font-bold text-foreground mt-3 mb-3">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCarbonMap;
