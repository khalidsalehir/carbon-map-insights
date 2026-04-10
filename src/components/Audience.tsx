import { Pickaxe, Landmark, Scale, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import ccsDevelopers from "@/assets/ccs-developers.png";
import investorsBanks from "@/assets/investors-banks.png";
import policyRegulators from "@/assets/policy-regulators.png";
import consultantsAdvisors from "@/assets/consultants-advisors.png";

const audiences = [
  { icon: Pickaxe, title: "Strategy & BI Teams", desc: "Track market developments, identify white spots, and inform strategic decisions with complete CCS value chain data.", image: ccsDevelopers },
  { icon: Landmark, title: "Commercial Teams", desc: "Prepare for customer meetings with facility-level data. Cross-check capture potential and qualify new business leads.", image: investorsBanks },
  { icon: Scale, title: "Project Developers", desc: "Assess storage availability, transport options, and hub connections. Replace multiple fragmented data sources with one platform.", image: policyRegulators },
  { icon: Users, title: "Policy & Research", desc: "Support policy studies, funding applications, and regulatory analysis with comprehensive, transparent CCS data across 156 countries.", image: consultantsAdvisors },
];

const Audience = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">Who Uses CarbonMap</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {audiences.map((a, i) => (
            <div key={a.title}
              className={`rounded-xl border border-white/10 bg-card overflow-hidden hover:border-primary/30 transition-all duration-300 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="h-[160px] w-full overflow-hidden">
                <img src={a.image} alt={a.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <a.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;
