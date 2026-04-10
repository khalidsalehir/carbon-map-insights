import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { TrendingUp, Brain, Wrench, ShieldCheck } from "lucide-react";

const cards = [
  {
    icon: TrendingUp,
    title: "Carbon Market Intelligence",
    text: "Live EU ETS, UK ETS, California & RGGI pricing. Built-in CCS business case calculator with real emitter data.",
    color: "text-primary",
  },
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    text: "AI project intelligence that cross-references data across the entire value chain. Automated news monitoring across 62 countries.",
    color: "text-secondary",
  },
  {
    icon: Wrench,
    title: "Engineering Tools",
    text: "CO₂ PVT calculator, storage capacity estimator, unit converter, and cost learning curves — built for CCS professionals.",
    color: "text-stat-purple",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Data",
    text: "Three-tier quality system (Verified, Reported, Estimated). Every data point sourced from official registries with clear methodology.",
    color: "text-stat-orange",
  },
];

const PlatformHighlights = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Platform Highlights
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`glass-card p-8 space-y-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <card.icon className={`w-8 h-8 ${card.color}`} />
              <h3 className="text-lg font-body font-bold text-foreground">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformHighlights;
