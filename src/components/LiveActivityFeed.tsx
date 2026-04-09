import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useState } from "react";

const activities = [
  { date: "2026-04-08", project: "Northern Lights", desc: "First commercial CO₂ shipment received at Øygarden terminal", category: "Storage" },
  { date: "2026-04-05", project: "Antwerp@C", desc: "Phase 1 EPC contract awarded to Air Liquide/Fluxys JV", category: "Hub & Terminal" },
  { date: "2026-04-02", project: "Delta Rhine Corridor", desc: "German federal planning approval granted", category: "Transport" },
  { date: "2026-03-28", project: "ACCSION Aalborg", desc: "EU Innovation Fund grant agreement signed (€220M)", category: "Capture" },
  { date: "2026-03-25", project: "Smeaheia", desc: "Equinor confirms early 2030s pipeline onstream target", category: "Storage" },
  { date: "2026-03-20", project: "Dunkerque Terminal", desc: "D'Artagnan project receives €160M CEF-E funding", category: "Hub & Terminal" },
  { date: "2026-03-15", project: "CO2 Highway Europe", desc: "Offshore pipeline routing survey completed by Fugro", category: "Transport" },
  { date: "2026-03-10", project: "Porthos Rotterdam", desc: "Injection well drilling campaign started", category: "Storage" },
];

const categoryColor: Record<string, { badge: string; border: string }> = {
  Storage: { badge: "bg-primary/20 text-primary", border: "border-l-primary" },
  "Hub & Terminal": { badge: "bg-stat-orange/25 text-stat-orange", border: "border-l-stat-orange" },
  Transport: { badge: "bg-stat-pink/25 text-stat-pink", border: "border-l-stat-pink" },
  Capture: { badge: "bg-green-500/25 text-green-400", border: "border-l-green-400" },
};

const LiveActivityFeed = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setOffset((o) => (o + 1) % activities.length), 3500);
    return () => clearInterval(timer);
  }, []);

  const ordered = [...activities.slice(offset), ...activities.slice(0, offset)];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden" style={{ backgroundColor: 'hsl(220 35% 7%)' }}>
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className={`container mx-auto px-6 relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Real-Time CCS <span className="text-gradient-cyan">Activity</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The latest developments in carbon capture and storage across Europe.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="space-y-3">
            {ordered.slice(0, 5).map((item, i) => {
              const colors = categoryColor[item.category];
              return (
                <div
                  key={`${item.project}-${offset}`}
                  className={`glass-card px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3 border-l-2 ${colors.border} transition-all ${i === 0 ? 'animate-pulse-glow' : ''}`}
                  style={{ animationDelay: `${i * 0.08}s`, animation: `fade-up 0.4s ${i * 0.08}s ease-out forwards`, opacity: 0 }}
                >
                  <span className="text-xs text-muted-foreground font-mono shrink-0">{item.date}</span>
                  <span className="font-semibold text-foreground shrink-0">{item.project}</span>
                  <span className="text-sm text-muted-foreground flex-1" style={{ lineHeight: '1.8' }}>{item.desc}</span>
                  <span className={`text-xs font-semibold px-3 py-1.5 rounded-full shrink-0 ${colors.badge}`}>
                    {item.category}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Fade overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[hsl(220_35%_7%)] to-transparent pointer-events-none" />
          <div className="text-center mt-10 relative z-10">
            <span className="text-sm text-primary font-medium opacity-50 cursor-not-allowed inline-flex items-center gap-2">
              View all activity →
              <span className="text-xs text-muted-foreground font-body">Coming soon</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveActivityFeed;
