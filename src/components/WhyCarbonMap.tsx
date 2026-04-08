import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const cards = [
  { category: "Market Intelligence", color: "text-primary", title: "Full Value Chain Coverage", desc: "The only platform that maps the complete CCS chain — from 29,000+ emitters through capture, transport, hubs to geological storage. No blind spots." },
  { category: "Live Data", color: "text-green-400", title: "EU ETS Carbon Pricing", desc: "Real-time EU ETS, UK ETS, and RGGI carbon price tracking with 12-month trends and cross-market comparison. Updated daily." },
  { category: "AI-Powered", color: "text-stat-purple", title: "Intelligent Project Analysis", desc: "AI-driven feasibility analysis, competitive landscape mapping, and strategic fit scoring. Upload your project for instant intelligence." },
  { category: "Infrastructure", color: "text-stat-orange", title: "Transport & Hub Mapping", desc: "23 pipeline corridors and 43 hubs & terminals classified, mapped and filterable. See how CO₂ flows from source to sink." },
  { category: "Analytics", color: "text-stat-pink", title: "Emitter Intelligence", desc: "29,000+ industrial CO₂ sources with emission volumes, sector breakdowns, biogenic share, and capturable emissions per facility." },
  { category: "News & Trends", color: "text-primary", title: "CCS News & Activity Feed", desc: "Curated news, project updates, permit filings, and funding announcements. Never miss a development in your market." },
];

const WhyCarbonMap = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className={`container mx-auto px-6 relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            A Smarter Approach to <span className="text-gradient-cyan">CCS Intelligence</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="glass-card p-6 group hover:-translate-y-1 hover:border-primary/40 transition-all duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-muted/30 to-transparent pointer-events-none" />
              <span className={`text-xs font-semibold uppercase tracking-wider ${card.color}`}>{card.category}</span>
              <h3 className="text-lg font-display font-bold text-foreground mt-3 mb-3">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCarbonMap;
