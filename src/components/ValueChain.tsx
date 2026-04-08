import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ArrowRight } from "lucide-react";

const steps = [
  { icon: "🏭", label: "Emitters", count: "29,000+", color: "border-stat-orange", textColor: "text-stat-orange", glowColor: "hsl(25 95% 53% / 0.15)" },
  { icon: "⚙️", label: "Capture", count: "1,400+", color: "border-stat-cyan", textColor: "text-stat-cyan", glowColor: "hsl(187 85% 53% / 0.15)" },
  { icon: "🔗", label: "Transport", count: "23 pipelines", color: "border-stat-pink", textColor: "text-stat-pink", glowColor: "hsl(330 80% 60% / 0.15)" },
  { icon: "🏗️", label: "Hubs & Terminals", count: "43", color: "border-stat-orange", textColor: "text-stat-orange", glowColor: "hsl(25 95% 53% / 0.15)" },
  { icon: "💎", label: "Storage", count: "37", color: "border-stat-purple", textColor: "text-stat-purple", glowColor: "hsl(270 70% 60% / 0.15)" },
];

const ValueChain = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="relative py-32">
      {/* Radial glow behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            From Emitter to Permanent Storage
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The only platform mapping every step of the CCS value chain.
          </p>
        </div>

        {/* Connecting line behind cards */}
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-px -translate-y-1/2">
            <div className="w-full h-full bg-gradient-to-r from-stat-orange/40 via-primary/40 to-stat-purple/40" />
          </div>

          <div className="flex flex-col md:flex-row items-stretch gap-3 md:gap-0 relative">
            {steps.map((step, i) => (
              <div key={step.label} className="flex-1 flex items-center">
                <div
                  className={`glass-card p-6 flex-1 border-t-2 ${step.color} hover:scale-105 transition-all duration-300 relative z-10 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                  style={{
                    animationDelay: `${i * 0.1}s`,
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${step.glowColor}`; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
                >
                  <div className="text-3xl mb-3">{step.icon}</div>
                  <div className={`text-xl font-bold font-display ${step.textColor}`}>{step.count}</div>
                  <div className="text-sm text-muted-foreground mt-1">{step.label}</div>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:flex items-center justify-center w-8 flex-shrink-0">
                    <ArrowRight className="w-4 h-4 text-muted-foreground/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueChain;
