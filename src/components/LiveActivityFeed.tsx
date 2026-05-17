import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useState } from "react";
import { Anchor, GitBranch, Truck, Filter as FilterIcon } from "lucide-react";

const activities = [
  { date: "2026-04-08", project: "Northern Lights", desc: "First commercial CO₂ shipment received at Øygarden terminal", category: "Storage", location: "Norway" },
  { date: "2026-04-05", project: "Antwerp@C", desc: "Phase 1 EPC contract awarded to Air Liquide/Fluxys JV", category: "Hub & Terminal", location: "Belgium" },
  { date: "2026-04-02", project: "Delta Rhine Corridor", desc: "German federal planning approval granted", category: "Transport", location: "Germany" },
  { date: "2026-03-28", project: "ACCSION Aalborg", desc: "EU Innovation Fund grant agreement signed (€220M)", category: "Capture", location: "Denmark" },
  { date: "2026-03-25", project: "Smeaheia", desc: "Equinor confirms early 2030s pipeline onstream target", category: "Storage", location: "Norway" },
  { date: "2026-03-20", project: "Dunkerque Terminal", desc: "D'Artagnan project receives €160M CEF-E funding", category: "Hub & Terminal", location: "France" },
  { date: "2026-03-15", project: "CO2 Highway Europe", desc: "Offshore pipeline routing survey completed by Fugro", category: "Transport", location: "North Sea" },
  { date: "2026-03-10", project: "Porthos Rotterdam", desc: "Injection well drilling campaign started", category: "Storage", location: "Netherlands" },
];

const categoryMeta: Record<string, { color: string; icon: typeof Anchor }> = {
  Storage: { color: "#f472b6", icon: Anchor },
  "Hub & Terminal": { color: "#fb923c", icon: GitBranch },
  Transport: { color: "#a78bfa", icon: Truck },
  Capture: { color: "#14b8a6", icon: FilterIcon },
};

const LiveActivityFeed = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setOffset((o) => (o + 1) % activities.length), 4000);
    return () => clearInterval(timer);
  }, []);

  const ordered = [...activities.slice(offset), ...activities.slice(0, offset)].slice(0, 6);

  return (
    <section
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #f5f6f8 0%, #eef0f4 100%)",
      }}
    >
      {/* Subtle light grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full blur-[140px] opacity-40" style={{ background: "rgba(34,211,238,0.18)" }} />

      <div className={`container mx-auto px-6 relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 border" style={{ background: "rgba(15,23,42,0.04)", borderColor: "rgba(15,23,42,0.08)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#0891b2", boxShadow: "0 0 8px #0891b2" }} />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: "#0e7490" }}>
              Live Feed · Updated continuously
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-3" style={{ color: "#0f172a" }}>
            What just moved in European CCS
          </h2>
          <p style={{ color: "#475569" }} className="leading-relaxed">
            Project milestones, financing, regulatory approvals — captured in real time across the value chain.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical timeline rail */}
          <div className="absolute left-[19px] sm:left-[27px] top-2 bottom-2 w-px" style={{ background: "linear-gradient(180deg, transparent, rgba(15,23,42,0.15), transparent)" }} />

          <div className="space-y-3">
            {ordered.map((item, i) => {
              const meta = categoryMeta[item.category];
              const Icon = meta.icon;
              return (
                <div
                  key={`${item.project}-${offset}-${i}`}
                  className="relative pl-12 sm:pl-16 group"
                  style={{
                    animation: `fade-up 0.5s ${i * 0.06}s ease-out forwards`,
                    opacity: 0,
                  }}
                >
                  {/* Timeline node */}
                  <div
                    className="absolute left-0 sm:left-2 top-4 w-10 h-10 rounded-full flex items-center justify-center z-10 transition-transform group-hover:scale-110"
                    style={{
                      background: "#ffffff",
                      border: `2px solid ${meta.color}`,
                      boxShadow: `0 0 0 4px #f5f6f8, 0 4px 12px ${meta.color}40`,
                      color: meta.color,
                    }}
                  >
                    <Icon className="w-4 h-4" strokeWidth={2} />
                    {i === 0 && (
                      <span
                        className="absolute inset-0 rounded-full animate-ping"
                        style={{ background: meta.color, opacity: 0.3 }}
                      />
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className="rounded-[6px] px-5 py-4 transition-all hover:-translate-y-0.5"
                    style={{
                      background: "#ffffff",
                      border: "1px solid rgba(15,23,42,0.08)",
                      boxShadow: "0 1px 2px rgba(15,23,42,0.04), 0 4px 16px rgba(15,23,42,0.04)",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className="font-mono text-xs" style={{ color: "#64748b" }}>{item.date}</span>
                      <span className="w-1 h-1 rounded-full" style={{ background: "#cbd5e1" }} />
                      <span className="font-mono text-xs uppercase tracking-wider" style={{ color: "#64748b" }}>{item.location}</span>
                      <span
                        className="ml-auto text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-[3px]"
                        style={{ background: `${meta.color}14`, color: meta.color, border: `1px solid ${meta.color}33` }}
                      >
                        {item.category}
                      </span>
                    </div>
                    <div className="font-display font-semibold text-base mb-1" style={{ color: "#0f172a" }}>
                      {item.project}
                    </div>
                    <div className="text-sm leading-relaxed" style={{ color: "#475569" }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <span className="text-sm font-medium inline-flex items-center gap-2" style={{ color: "#0e7490" }}>
              View all activity →
              <span className="text-xs font-mono" style={{ color: "#64748b" }}>Coming soon</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveActivityFeed;
