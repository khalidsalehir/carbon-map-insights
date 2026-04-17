import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Check, Minus } from "lucide-react";

const rows = [
  "Full value chain coverage",
  "30,000+ emitters globally",
  "Storage sites & transport networks",
  "45+ CCS hubs tracked",
  "Live carbon market pricing (EU ETS, UK ETS, RGGI)",
  "CCS business case calculator",
  "CO₂ engineering tools (PVT, cost curves)",
  "AI-powered project analysis",
  "Real-time news & intel feed",
  "Interactive map with layer filtering",
  "Modern web platform (no Power BI needed)",
  "Sector progress vs IEA 2030 targets",
];

const competitors = [
  { name: "CarbonMap", data: [true, true, true, true, true, true, true, true, true, true, true, true] },
  { name: "Traditional Databases", data: [false, false, false, false, false, false, false, false, false, false, false, false] },
  { name: "Regional Tools", data: [false, false, true, false, false, false, false, false, false, true, true, false] },
  { name: "Industry Reports", data: [false, false, false, false, false, false, false, false, true, false, false, true] },
];

const ComparisonTable = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="py-32 relative" style={{ backgroundColor: 'hsl(218 40% 7%)' }}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">The Competitive Edge</h2>
        </div>
        <div className={`glass-card overflow-x-auto max-w-[1000px] mx-auto ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.15s' }}>
          <table className="w-full text-[13px]">
            <thead>
              <tr className="border-b border-border/30">
                <th className="text-left px-4 py-2 text-muted-foreground font-medium">Feature</th>
                {competitors.map((c) => (
                  <th key={c.name} className={`px-4 py-2 text-center font-medium ${c.name === "CarbonMap" ? "text-primary" : "text-muted-foreground"}`}>
                    {c.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={row} className="border-b border-border/20 last:border-0">
                  <td className="px-4 py-2 text-foreground">{row}</td>
                  {competitors.map((c) => (
                    <td key={c.name} className={`px-4 py-2 text-center ${c.name === "CarbonMap" ? "bg-primary/5" : ""}`}>
                      {c.data[ri] ? <Check className="w-4 h-4 text-primary mx-auto" /> : <Minus className="w-4 h-4 text-muted-foreground/40 mx-auto" />}
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
