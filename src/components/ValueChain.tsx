import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Factory, Filter, ArrowRight, Network, Database } from "lucide-react";

const stages = [
  { icon: Factory, label: "Industrial Emitters", stat: "29,000+" },
  { icon: Filter, label: "Capture Installations", stat: "1,494" },
  { icon: ArrowRight, label: "Pipeline Transport", stat: "115" },
  { icon: Network, label: "Hubs & Terminals", stat: "43" },
  { icon: Database, label: "Geological Storage", stat: "254" },
];

const FlowConnector = ({ delay }: { delay: number }) => (
  <div className="hidden lg:flex items-center px-1 shrink-0">
    <svg width="32" height="12" viewBox="0 0 32 12" className="block">
      <line x1="0" y1="6" x2="24" y2="6" stroke="#14b8a6" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
      <polygon points="24,2 32,6 24,10" fill="#14b8a6" opacity="0.6">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" begin={`${delay}s`} repeatCount="indefinite" />
      </polygon>
    </svg>
  </div>
);

const ValueChain = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20" style={{ backgroundColor: "hsl(220 40% 4%)" }}>
      <div className="max-w-[1200px] mx-auto px-5">
        <div className={`text-center mb-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="font-display font-semibold text-foreground mb-3" style={{ fontSize: "clamp(26px, 4.5vw, 40px)", letterSpacing: "-0.02em" }}>
            Complete Value Chain Coverage
          </h2>
          <p className="font-body mx-auto" style={{ fontSize: "clamp(14px, 2vw, 17px)", color: "rgba(255,255,255,0.40)", maxWidth: 480 }}>
            Track CO₂ from industrial source to permanent geological storage
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0">
          {stages.map((s, i) => (
            <div key={i} className="contents">
              <div
                className="flex flex-col items-center justify-center rounded-xl px-6 py-8 w-full lg:w-[190px] shrink-0"
                style={{
                  backgroundColor: "#0e1d3c",
                  border: "1px solid rgba(255,255,255,0.06)",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
                }}
              >
                <s.icon size={28} color="#14b8a6" strokeWidth={1.5} className="mb-4" />
                <p className="font-body font-semibold text-foreground text-sm text-center mb-2">{s.label}</p>
                <p className="font-mono font-bold text-lg" style={{ color: "#14b8a6" }}>{s.stat}</p>
              </div>
              {i < stages.length - 1 && <FlowConnector delay={i * 0.4} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueChain;
