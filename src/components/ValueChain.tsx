import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const stages = [
  {
    label: "Industrial\nEmitters",
    color: "#22d3ee",
    stat: "29,000+",
    sub: "tracked globally",
    icon: (
      <g>
        <rect x="-10" y="-4" width="8" height="12" rx="1" fill="currentColor" fillOpacity={0.7} />
        <rect x="2" y="2" width="8" height="6" rx="1" fill="currentColor" fillOpacity={0.7} />
        <polygon points="-6,-4 -6,-10 -4,-4" fill="currentColor" fillOpacity={0.5} />
        <polygon points="6,2 6,-4 8,2" fill="currentColor" fillOpacity={0.5} />
      </g>
    ),
  },
  {
    label: "Capture\nInstallation",
    color: "#14b8a6",
    stat: "1,494",
    sub: "installations",
    icon: (
      <g>
        <polygon points="0,-12 -10,4 10,4" fill="none" stroke="currentColor" strokeWidth="1.2" opacity={0.7} />
        <line x1="-6" y1="-2" x2="6" y2="-2" stroke="currentColor" strokeWidth="0.8" opacity={0.5} />
        <line x1="-8" y1="1" x2="8" y2="1" stroke="currentColor" strokeWidth="0.8" opacity={0.5} />
      </g>
    ),
  },
  {
    label: "Pipeline\nTransport",
    color: "#a78bfa",
    stat: "115",
    sub: "infrastructure",
    icon: (
      <g>
        <line x1="-11" y1="-3" x2="11" y2="-3" stroke="currentColor" strokeWidth="1.2" opacity={0.7} />
        <line x1="-11" y1="3" x2="11" y2="3" stroke="currentColor" strokeWidth="1.2" opacity={0.7} />
        <circle cx="-5" cy="-3" r="1.5" fill="currentColor" fillOpacity={0.6} />
        <circle cx="5" cy="3" r="1.5" fill="currentColor" fillOpacity={0.6} />
      </g>
    ),
  },
  {
    label: "Hub &\nTerminal",
    color: "#fb923c",
    stat: "43",
    sub: "active hubs",
    icon: (
      <g>
        <circle cx="0" cy="-6" r="2" fill="currentColor" fillOpacity={0.7} />
        <circle cx="-7" cy="5" r="2" fill="currentColor" fillOpacity={0.7} />
        <circle cx="7" cy="5" r="2" fill="currentColor" fillOpacity={0.7} />
        <line x1="0" y1="-6" x2="-7" y2="5" stroke="currentColor" strokeWidth="0.8" opacity={0.4} />
        <line x1="0" y1="-6" x2="7" y2="5" stroke="currentColor" strokeWidth="0.8" opacity={0.4} />
        <line x1="-7" y1="5" x2="7" y2="5" stroke="currentColor" strokeWidth="0.8" opacity={0.4} />
      </g>
    ),
  },
  {
    label: "Geological\nStorage",
    color: "#f472b6",
    stat: "254",
    sub: "storage projects",
    icon: (
      <g>
        <ellipse cx="0" cy="-6" rx="10" ry="3" fill="none" stroke="currentColor" strokeWidth="0.8" opacity={0.7} />
        <ellipse cx="0" cy="0" rx="10" ry="3" fill="none" stroke="currentColor" strokeWidth="0.8" opacity={0.7} />
        <ellipse cx="0" cy="6" rx="10" ry="3" fill="none" stroke="currentColor" strokeWidth="0.8" opacity={0.7} />
      </g>
    ),
  },
];

const NODE_R = 34;
const SPACING = 160;
const SVG_W = SPACING * 4 + NODE_R * 2 + 40;
const SVG_H = NODE_R * 2 + 20;
const CY = NODE_R + 10;

const nodeX = (i: number) => NODE_R + 20 + i * SPACING;

const ConnectorDots = ({ x1, x2, y, color }: { x1: number; x2: number; y: number; color: string }) => (
  <g>
    <line
      x1={x1 + NODE_R + 4}
      y1={y}
      x2={x2 - NODE_R - 4}
      y2={y}
      stroke="rgba(255,255,255,0.2)"
      strokeWidth={0.5}
      strokeDasharray="4 4"
    />
    {[0, 1, 2].map((dot) => (
      <circle key={dot} r={2.5} cy={y} fill={color} opacity={0}>
        <animate
          attributeName="cx"
          from={x1 + NODE_R + 8}
          to={x2 - NODE_R - 8}
          dur="2.4s"
          begin={`${dot * 0.6}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;0.6;0.6;0"
          dur="2.4s"
          begin={`${dot * 0.6}s`}
          repeatCount="indefinite"
        />
      </circle>
    ))}
  </g>
);

const ValueChain = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20" style={{ backgroundColor: "hsl(220 40% 4%)" }}>
      {/* Subtle center glow */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(34,211,238,0.05) 0%, transparent 70%)",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-5 relative">
        {/* Header */}
        <div
          className={`text-center mb-[52px] ${isVisible ? "animate-fade-up" : "opacity-0"}`}
        >
          <h2
            className="font-display font-semibold text-foreground mb-3"
            style={{
              fontSize: "clamp(26px, 4.5vw, 40px)",
              letterSpacing: "-0.02em",
            }}
          >
            Complete Value Chain Coverage
          </h2>
          <p
            className="font-body mx-auto"
            style={{
              fontSize: "clamp(14px, 2vw, 17px)",
              color: "rgba(255,255,255,0.40)",
              maxWidth: 480,
            }}
          >
            Track CO₂ from industrial source to permanent geological storage
          </p>
        </div>

        {/* SVG Flow */}
        <div className="flex justify-center overflow-x-auto">
          <div style={{ minWidth: SVG_W }}>
            <svg
              viewBox={`0 0 ${SVG_W} ${SVG_H}`}
              width="100%"
              height="auto"
              className="block"
            >
              {/* Connectors */}
              {stages.slice(0, -1).map((s, i) => (
                <ConnectorDots
                  key={i}
                  x1={nodeX(i)}
                  x2={nodeX(i + 1)}
                  y={CY}
                  color={s.color}
                />
              ))}

              {/* Nodes */}
              {stages.map((s, i) => {
                const cx = nodeX(i);
                return (
                  <g
                    key={i}
                    style={{
                      color: s.color,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateY(0)" : "translateY(10px)",
                      transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
                    }}
                  >
                    {/* Outer ring */}
                    <circle
                      cx={cx}
                      cy={CY}
                      r={NODE_R + 8}
                      fill="none"
                      stroke={s.color}
                      strokeWidth={0.3}
                      opacity={0.12}
                    />
                    {/* Main circle */}
                    <circle
                      cx={cx}
                      cy={CY}
                      r={NODE_R}
                      fill={s.color}
                      fillOpacity={0.06}
                      stroke={s.color}
                      strokeWidth={0.5}
                      opacity={0.8}
                    />
                    {/* Icon */}
                    <g transform={`translate(${cx}, ${CY})`}>{s.icon}</g>
                  </g>
                );
              })}
            </svg>

            {/* Labels below */}
            <div
              className="grid grid-cols-5"
              style={{ paddingTop: 16 }}
            >
              {stages.map((s, i) => (
                <div
                  key={i}
                  className="text-center"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(10px)",
                    transition: `opacity 0.5s ease ${i * 0.1 + 0.2}s, transform 0.5s ease ${i * 0.1 + 0.2}s`,
                  }}
                >
                  <p
                    className="font-body font-medium whitespace-pre-line"
                    style={{ fontSize: 12.5, color: "rgba(255,255,255,0.75)", lineHeight: 1.3 }}
                  >
                    {s.label}
                  </p>
                  <p
                    className="font-mono font-semibold mt-1.5"
                    style={{ fontSize: 15, color: s.color }}
                  >
                    {s.stat}
                  </p>
                  <p
                    className="font-body"
                    style={{ fontSize: 10, color: "rgba(255,255,255,0.30)" }}
                  >
                    {s.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueChain;
