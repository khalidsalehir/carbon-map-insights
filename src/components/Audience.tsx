import { Pickaxe, Landmark, Scale, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const audiences = [
  { icon: Pickaxe, title: "CCS Project Developers", desc: "Identify optimal sites, benchmark against peers, and track competitive landscape in real time." },
  { icon: Landmark, title: "Investors & Banks", desc: "Due diligence on CCS assets, portfolio monitoring, and market intelligence for capital allocation." },
  { icon: Scale, title: "Policy Makers & Regulators", desc: "National CCS progress tracking, infrastructure gap analysis, and cross-border project monitoring." },
  { icon: Users, title: "Consultants & Advisors", desc: "Client-ready data, market sizing, and project benchmarking for advisory engagements." },
];

const Audience = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">Who Uses CarbonMap</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {audiences.map((a, i) => (
            <div key={a.title}
              className={`glass-card p-8 hover:border-primary/30 transition-all duration-300 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 0.1}s` }}>
              <a.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;
