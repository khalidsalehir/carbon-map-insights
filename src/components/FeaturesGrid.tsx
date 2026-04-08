import { Map, TrendingUp, Search, Factory, Brain, Newspaper } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const features = [
  { icon: Map, title: "Interactive Global Map", desc: "Multi-layer filtering across the entire CCS value chain with real-time project status." },
  { icon: TrendingUp, title: "EU ETS Market Data", desc: "Live carbon pricing, historical trends, and forward curves integrated into every analysis." },
  { icon: Search, title: "Project Deep-Dives", desc: "Detailed profiles with capacity data, timelines, stakeholders, and regulatory status." },
  { icon: Factory, title: "Emitter Intelligence", desc: "29,000+ industrial sources mapped with emissions data and capture potential." },
  { icon: Brain, title: "AI Project Analysis", desc: "Automated feasibility scoring and project benchmarking powered by machine learning." },
  { icon: Newspaper, title: "CCS News Feed", desc: "Curated industry news, policy updates, and deal flow from 200+ sources." },
];

const FeaturesGrid = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="features" ref={ref} className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">Platform Features</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Enterprise-grade intelligence tools for the CCS industry.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={f.title}
              className={`glass-card p-8 group hover:border-primary/40 transition-all duration-300 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 0.08}s` }}>
              <f.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
