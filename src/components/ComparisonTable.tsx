import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Check, Minus } from "lucide-react";

const rows = [
  "Full value chain coverage",
  "29,000+ emitters",
  "Transport/Hub classification",
  "Live EU ETS pricing",
  "AI project analysis",
  "Interactive map",
  "Self-service access",
];

const competitors = [
  { name: "CarbonMap", data: [true, true, true, true, true, true, true] },
  { name: "CaptureMap", data: [false, false, false, false, false, true, true] },
  { name: "CarbonStorage.io", data: [false, false, true, false, false, true, false] },
  { name: "GCCSI Database", data: [false, false, false, false, false, false, false] },
];

const ComparisonTable = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">The Competitive Edge</h2>
        </div>
        <div className={`glass-card overflow-x-auto ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.15s' }}>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/30">
                <th className="text-left p-4 text-muted-foreground font-medium">Feature</th>
                {competitors.map((c) => (
                  <th key={c.name} className={`p-4 text-center font-medium ${c.name === "CarbonMap" ? "text-primary" : "text-muted-foreground"}`}>
                    {c.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={row} className="border-b border-border/20 last:border-0">
                  <td className="p-4 text-foreground">{row}</td>
                  {competitors.map((c) => (
                    <td key={c.name} className={`p-4 text-center ${c.name === "CarbonMap" ? "bg-primary/5" : ""}`}>
                      {c.data[ri] ? <Check className="w-5 h-5 text-primary mx-auto" /> : <Minus className="w-5 h-5 text-muted-foreground/40 mx-auto" />}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
