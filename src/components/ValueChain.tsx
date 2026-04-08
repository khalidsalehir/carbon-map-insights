import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const steps = [
  { icon: "🏭", label: "Emitters", count: "29,000+", color: "border-stat-orange", textColor: "text-stat-orange" },
  { icon: "⚙️", label: "Capture", count: "1,400+", color: "border-stat-cyan", textColor: "text-stat-cyan" },
  { icon: "🔗", label: "Transport", count: "23 pipelines", color: "border-stat-pink", textColor: "text-stat-pink" },
  { icon: "🏗️", label: "Hubs & Terminals", count: "43", color: "border-stat-orange", textColor: "text-stat-orange" },
  { icon: "💎", label: "Storage", count: "37", color: "border-stat-purple", textColor: "text-stat-purple" },
];

const ValueChain = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            From Emitter to Permanent Storage
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The only platform mapping every step of the CCS value chain.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-stretch gap-3 md:gap-0 relative">
          {steps.map((step, i) => (
            <div key={step.label} className="flex-1 flex items-center">
              <div className={`glass-card p-6 flex-1 border-t-2 ${step.color} hover:scale-105 hover:glow-cyan transition-all duration-300 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-3xl mb-3">{step.icon}</div>
                <div className={`text-xl font-bold font-display ${step.textColor}`}>{step.count}</div>
                <div className="text-sm text-muted-foreground mt-1">{step.label}</div>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block w-8 h-px bg-gradient-to-r from-primary/60 to-secondary/60 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueChain;
