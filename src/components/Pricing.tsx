import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const tiers = [
  {
    name: "Explorer",
    price: "Free",
    period: "",
    desc: "Get started with map access and basic data.",
    features: ["Interactive CCS map", "Basic project data", "Public news feed", "Community access"],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "€199",
    period: "/mo",
    desc: "Full intelligence for CCS professionals.",
    features: ["Everything in Explorer", "Full emitter database (29K+)", "AI project analysis", "EU ETS market data", "Data export (CSV/Excel)", "Priority support"],
    cta: "Start Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For teams needing API access and white-label solutions.",
    features: ["Everything in Professional", "REST API access", "White-label embedding", "Dedicated account manager", "Custom data feeds", "SSO & compliance"],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const Pricing = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="pricing" ref={ref} className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">Pricing</h2>
          <p className="text-muted-foreground text-lg">Simple, transparent pricing for every team size.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier, i) => (
            <div key={tier.name}
              className={`glass-card p-8 flex flex-col relative ${tier.highlighted ? 'border-primary/50 glow-cyan-strong' : ''} ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 0.1}s` }}>
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-display font-semibold text-foreground">{tier.name}</h3>
                <div className="mt-3">
                  <span className="text-4xl font-display font-bold text-foreground">{tier.price}</span>
                  <span className="text-muted-foreground">{tier.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{tier.desc}</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5">✓</span> {f}
                  </li>
                ))}
              </ul>
              <a href="#"
                className={`block text-center py-3 rounded-lg font-medium transition-all ${
                  tier.highlighted
                    ? 'bg-primary text-primary-foreground hover:opacity-90 glow-cyan'
                    : 'border border-border text-foreground hover:bg-muted/50'
                }`}>
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
