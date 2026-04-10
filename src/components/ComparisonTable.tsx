import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const rows = [
  { feature: "Emitter tracking", typical: "Select regions", carbonmap: "29,000+ facilities globally" },
  { feature: "Capture projects", typical: "Basic project list", carbonmap: "1,400 projects with AI analysis" },
  { feature: "Storage & transport", typical: "Not available or beta", carbonmap: "113 storage sites + 41 hubs + transport networks" },
  { feature: "Carbon markets", typical: "Not included", carbonmap: "Live ETS pricing + business case calculator" },
  { feature: "Engineering tools", typical: "Not included", carbonmap: "PVT calculator, storage estimator, cost curves" },
  { feature: "Value chain view", typical: "Fragmented across tools", carbonmap: "Complete source-to-sink in one platform" },
  { feature: "Platform", typical: "Requires Power BI license", carbonmap: "Modern web app, any browser" },
];

const ComparisonTable = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="py-32 relative" style={{ backgroundColor: "hsl(218 40% 7%)" }}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">The Competitive Edge</h2>
        </div>
        <div className={`glass-card overflow-x-auto max-w-[900px] mx-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.15s" }}>
          <table className="w-full text-[13px]">
            <thead>
              <tr className="border-b border-border/30">
                <th className="text-left px-5 py-3 text-muted-foreground font-medium">Feature</th>
                <th className="px-5 py-3 text-center text-muted-foreground font-medium">Typical CCS Tools</th>
                <th className="px-5 py-3 text-center text-primary font-medium">CarbonMap</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature} className="border-b border-border/20 last:border-0">
                  <td className="px-5 py-3 text-foreground font-medium">{row.feature}</td>
                  <td className="px-5 py-3 text-center text-muted-foreground/60">{row.typical}</td>
                  <td className="px-5 py-3 text-center text-foreground bg-primary/5">{row.carbonmap}</td>
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
