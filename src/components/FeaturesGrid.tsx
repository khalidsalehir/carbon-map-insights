import { Map, TrendingUp, Search, Factory, Brain, Newspaper } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import europeCcsMap from "@/assets/europe-ccs-map.png";
import etsDashboard from "@/assets/ets-dashboard.png";
import aiRadar from "@/assets/ai-radar.png";
import emitterHeatmap from "@/assets/emitter-heatmap.png";
import newsDashboard from "@/assets/news-dashboard.png";

const features = [
  { icon: Map, title: "Interactive Global Map", desc: "Multi-layer filtering across the entire CCS value chain with real-time project status.", image: europeCcsMap },
  { icon: TrendingUp, title: "EU ETS Market Data", desc: "Live carbon pricing, historical trends, and forward curves integrated into every analysis.", image: etsDashboard },
  { icon: Search, title: "Project Intelligence", desc: "Detailed profiles with capacity data, timelines, stakeholders, and regulatory status.", image: aiRadar },
  { icon: Factory, title: "Emitter Intelligence", desc: "29,000+ industrial sources mapped with emissions data and capture potential.", image: emitterHeatmap },
  { icon: Brain, title: "AI Project Analysis", desc: "Automated feasibility scoring and project benchmarking powered by machine learning.", image: aiRadar },
  { icon: Newspaper, title: "CCS News Feed", desc: "Curated industry news, policy updates, and deal flow from 200+ sources.", image: newsDashboard },
];

const FeaturesGrid = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="features" ref={ref} className="relative py-32">
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle, hsl(220 20% 20% / 0.3) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }} />
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">Platform Features</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Enterprise-grade intelligence tools for the CCS industry.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={f.title}
              className={`glass-card group hover:border-primary/40 transition-all duration-300 overflow-hidden ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 0.1}s` }}>
              {/* Image preview area */}
              <div className="h-44 relative overflow-hidden">
                <img src={f.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(8,12,20,0.3), rgba(8,12,20,0.8))' }} />
              </div>
              <div className="p-8 pt-4">
                <f.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
