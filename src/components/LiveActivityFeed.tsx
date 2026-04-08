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

const categoryColor: Record<string, string> = {
  Storage: "bg-primary/20 text-primary",
  "Hub & Terminal": "bg-stat-orange/20 text-stat-orange",
  Transport: "bg-stat-pink/20 text-stat-pink",
  Capture: "bg-green-500/20 text-green-400",
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
    <section ref={ref} className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className={`container mx-auto px-6 relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Real-Time CCS <span className="text-gradient-cyan">Activity</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The latest developments in carbon capture and storage across Europe.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-3">
          {ordered.slice(0, 5).map((item, i) => (
            <div
              key={`${item.project}-${offset}`}
              className="glass-card px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3 hover:border-primary/30 transition-all"
              style={{ animationDelay: `${i * 0.08}s`, animation: "fade-up 0.4s ease-out forwards", opacity: 0 }}
            >
              <span className="text-xs text-muted-foreground font-mono shrink-0">{item.date}</span>
              <span className="font-semibold text-foreground shrink-0">{item.project}</span>
              <span className="text-sm text-muted-foreground flex-1">{item.desc}</span>
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 ${categoryColor[item.category]}`}>
                {item.category}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="#" className="text-sm text-primary hover:underline">View all activity →</a>
        </div>
      </div>
    </section>
  );
};

export default LiveActivityFeed;
