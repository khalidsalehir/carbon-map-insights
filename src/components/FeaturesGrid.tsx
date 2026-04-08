import { Map, TrendingUp, Search, Factory, Brain, Newspaper } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const features = [
  {
    icon: Map, title: "Interactive Global Map",
    desc: "Multi-layer filtering across the entire CCS value chain with real-time project status.",
    pattern: (
      <svg className="w-full h-full" viewBox="0 0 200 100" fill="none">
        <path d="M0 70 Q50 30 100 60 T200 50" stroke="hsl(187 85% 53% / 0.15)" strokeWidth="1.5" fill="none" />
        <path d="M0 80 Q60 40 120 70 T200 60" stroke="hsl(187 85% 53% / 0.1)" strokeWidth="1" fill="none" />
        <circle cx="50" cy="50" r="3" fill="hsl(187 85% 53% / 0.2)" />
        <circle cx="120" cy="60" r="2" fill="hsl(187 85% 53% / 0.15)" />
        <circle cx="160" cy="45" r="4" fill="hsl(187 85% 53% / 0.2)" />
      </svg>
    )
  },
  {
    icon: TrendingUp, title: "EU ETS Market Data",
    desc: "Live carbon pricing, historical trends, and forward curves integrated into every analysis.",
    pattern: (
      <svg className="w-full h-full" viewBox="0 0 200 100" fill="none">
        <path d="M10 80 L40 65 L70 70 L100 45 L130 50 L160 30 L190 20" stroke="hsl(187 85% 53% / 0.2)" strokeWidth="2" fill="none" />
        <path d="M10 80 L40 65 L70 70 L100 45 L130 50 L160 30 L190 20 V100 H10 Z" fill="hsl(187 85% 53% / 0.03)" />
        {[40,70,100,130,160,190].map((x,i) => <circle key={i} cx={x} cy={[65,70,45,50,30,20][i]} r="2" fill="hsl(187 85% 53% / 0.3)" />)}
      </svg>
    )
  },
  {
    icon: Search, title: "Project Deep-Dives",
    desc: "Detailed profiles with capacity data, timelines, stakeholders, and regulatory status.",
    pattern: (
      <svg className="w-full h-full" viewBox="0 0 200 100" fill="none">
        {[[60,30],[140,40],[100,70],[40,60],[170,65]].map(([cx,cy],i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="6" stroke="hsl(270 70% 60% / 0.2)" strokeWidth="1" fill="none" />
            {i < 4 && <line x1={cx} y1={cy} x2={[140,100,40,170][i]} y2={[40,70,60,65][i]} stroke="hsl(270 70% 60% / 0.1)" strokeWidth="0.5" />}
          </g>
        ))}
      </svg>
    )
  },
  {
    icon: Factory, title: "Emitter Intelligence",
    desc: "29,000+ industrial sources mapped with emissions data and capture potential.",
    pattern: (
      <svg className="w-full h-full" viewBox="0 0 200 100" fill="none">
        {Array.from({length: 30}, (_,i) => (
          <circle key={i} cx={20 + (i % 10) * 18} cy={20 + Math.floor(i/10) * 25} r={1 + Math.random() * 2.5}
            fill={`hsl(25 95% 53% / ${0.1 + Math.random() * 0.15})`} />
        ))}
      </svg>
    )
  },
  {
    icon: Brain, title: "AI Project Analysis",
    desc: "Automated feasibility scoring and project benchmarking powered by machine learning.",
    pattern: (
      <svg className="w-full h-full" viewBox="0 0 200 100" fill="none">
        {[[50,25],[150,25],[100,50],[50,75],[150,75]].map(([cx,cy],i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="4" stroke="hsl(270 70% 60% / 0.25)" strokeWidth="1" fill="hsl(270 70% 60% / 0.05)" />
            {i < 4 && <line x1={cx} y1={cy} x2={100} y2={50} stroke="hsl(270 70% 60% / 0.1)" strokeWidth="0.5" strokeDasharray="3 3" />}
          </g>
        ))}
      </svg>
    )
  },
  {
    icon: Newspaper, title: "CCS News Feed",
    desc: "Curated industry news, policy updates, and deal flow from 200+ sources.",
    pattern: (
      <svg className="w-full h-full" viewBox="0 0 200 100" fill="none">
        {[20,40,60,80].map((y,i) => (
          <g key={i}>
            <rect x="30" y={y} width={80 + i * 15} height="6" rx="3" fill={`hsl(168 76% 40% / ${0.06 + i * 0.03})`} />
          </g>
        ))}
      </svg>
    )
  },
];

const FeaturesGrid = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="features" ref={ref} className="relative py-32">
      {/* Dot grid pattern */}
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
              {/* Abstract visual area */}
              <div className="h-32 relative bg-gradient-to-b from-muted/30 to-transparent">
                <div className="absolute inset-0 p-4">{f.pattern}</div>
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
