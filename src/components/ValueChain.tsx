import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useRef, useState } from "react";

/* ── colour per node ── */
const palette = ["#22d3ee", "#14b8a6", "#f472b6", "#fb923c", "#a78bfa"];

const stages = [
  { label: "Industrial Emitters", stat: "29,000+" },
  { label: "Capture Installations", stat: "1,494" },
  { label: "Pipeline Transport", stat: "115" },
  { label: "Hubs & Terminals", stat: "43" },
  { label: "Geological Storage", stat: "254" },
];

/* ── custom SVG icons ── */
const Icons: React.FC<{ index: number; color: string }>[] = [
  // Factory smokestacks
  ({ color }) => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="6" y="22" width="8" height="14" rx="1" stroke={color} strokeWidth="1.5" />
      <rect x="16" y="18" width="8" height="18" rx="1" stroke={color} strokeWidth="1.5" />
      <rect x="26" y="22" width="8" height="14" rx="1" stroke={color} strokeWidth="1.5" />
      <line x1="10" y1="22" x2="10" y2="12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="20" y1="18" x2="20" y2="8" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="30" y1="22" x2="30" y2="14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="10" r="2" fill={color} opacity="0.3" />
      <circle cx="20" cy="6" r="2.5" fill={color} opacity="0.3" />
      <circle cx="30" cy="12" r="2" fill={color} opacity="0.3" />
    </svg>
  ),
  // Funnel / filter
  ({ color }) => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M8 8h24l-8 12v10l-8 2V20L8 8z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="10" y1="12" x2="30" y2="12" stroke={color} strokeWidth="1" opacity="0.3" />
      <line x1="13" y1="16" x2="27" y2="16" stroke={color} strokeWidth="1" opacity="0.3" />
    </svg>
  ),
  // Pipeline
  ({ color }) => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M4 20h32" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M4 14h32" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      <path d="M4 26h32" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      <circle cx="12" cy="20" r="3" stroke={color} strokeWidth="1.5" fill="none" />
      <circle cx="28" cy="20" r="3" stroke={color} strokeWidth="1.5" fill="none" />
      <polygon points="34,17 38,20 34,23" fill={color} opacity="0.6" />
    </svg>
  ),
  // Hub / junction
  ({ color }) => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="6" stroke={color} strokeWidth="1.5" />
      <circle cx="20" cy="20" r="2.5" fill={color} opacity="0.4" />
      <line x1="20" y1="6" x2="20" y2="14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="20" y1="26" x2="20" y2="34" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="6" y1="20" x2="14" y2="20" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="26" y1="20" x2="34" y2="20" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="20" cy="6" r="2" stroke={color} strokeWidth="1" opacity="0.4" />
      <circle cx="20" cy="34" r="2" stroke={color} strokeWidth="1" opacity="0.4" />
      <circle cx="6" cy="20" r="2" stroke={color} strokeWidth="1" opacity="0.4" />
      <circle cx="34" cy="20" r="2" stroke={color} strokeWidth="1" opacity="0.4" />
    </svg>
  ),
  // Underground reservoir
  ({ color }) => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M4 18h32" stroke={color} strokeWidth="1.5" strokeDasharray="3 2" opacity="0.4" />
      <path d="M8 18v6c0 4 5 8 12 8s12-4 12-8v-6" stroke={color} strokeWidth="1.5" />
      <ellipse cx="20" cy="28" rx="8" ry="3" fill={color} opacity="0.15" />
      <line x1="20" y1="4" x2="20" y2="18" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <polygon points="17,10 20,4 23,10" fill={color} opacity="0.4" />
      <circle cx="16" cy="26" r="1" fill={color} opacity="0.3" />
      <circle cx="24" cy="25" r="1" fill={color} opacity="0.3" />
      <circle cx="20" cy="28" r="1" fill={color} opacity="0.3" />
    </svg>
  ),
];

/* ── floating particles background ── */
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 12}s`,
    duration: `${12 + Math.random() * 10}s`,
    size: 1.5 + Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-float-particle"
          style={{
            left: p.left,
            bottom: "-4px",
            width: p.size,
            height: p.size,
            backgroundColor: "#22d3ee",
            opacity: 0,
            "--delay": p.delay,
            "--duration": p.duration,
            animationDelay: p.delay,
            animationDuration: p.duration,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

/* ── pipeline connector (desktop horizontal) ── */
const PipelineConnector = ({ color, nextColor, delay }: { color: string; nextColor: string; delay: number }) => (
  <div className="hidden lg:flex items-center" style={{ width: 64, flexShrink: 0 }}>
    <svg width="64" height="24" viewBox="0 0 64 24" className="block w-full">
      <defs>
        <linearGradient id={`pipe-${delay}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={color} stopOpacity="0.5" />
          <stop offset="100%" stopColor={nextColor} stopOpacity="0.5" />
        </linearGradient>
      </defs>
      {/* base line */}
      <line x1="0" y1="12" x2="64" y2="12" stroke={`url(#pipe-${delay})`} strokeWidth="2" />
      {/* glow line */}
      <line x1="0" y1="12" x2="64" y2="12" stroke={color} strokeWidth="1" opacity="0.2" filter="blur(2px)" />
      {/* travelling particle */}
      <circle r="3" fill={color} opacity="0.9">
        <animateMotion dur="2s" begin={`${delay * 0.3}s`} repeatCount="indefinite" path="M0,12 L64,12" />
        <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin={`${delay * 0.3}s`} repeatCount="indefinite" />
      </circle>
      <circle r="6" fill={color} opacity="0.2">
        <animateMotion dur="2s" begin={`${delay * 0.3}s`} repeatCount="indefinite" path="M0,12 L64,12" />
      </circle>
    </svg>
  </div>
);

/* ── pipeline connector (mobile vertical) ── */
const PipelineConnectorVertical = ({ color, nextColor, delay }: { color: string; nextColor: string; delay: number }) => (
  <div className="lg:hidden flex justify-center" style={{ height: 48 }}>
    <svg width="24" height="48" viewBox="0 0 24 48" className="block">
      <defs>
        <linearGradient id={`vpipe-${delay}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.5" />
          <stop offset="100%" stopColor={nextColor} stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <line x1="12" y1="0" x2="12" y2="48" stroke={`url(#vpipe-${delay})`} strokeWidth="2" />
      <circle r="3" fill={color} opacity="0.9">
        <animateMotion dur="1.5s" begin={`${delay * 0.3}s`} repeatCount="indefinite" path="M12,0 L12,48" />
        <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" begin={`${delay * 0.3}s`} repeatCount="indefinite" />
      </circle>
    </svg>
  </div>
);

/* ── single node card ── */
const NodeCard = ({
  stage,
  index,
  color,
  isVisible,
}: {
  stage: (typeof stages)[0];
  index: number;
  color: string;
  isVisible: boolean;
}) => {
  const IconComponent = Icons[index];

  return (
    <div
      className="flex flex-col items-center w-full lg:w-[180px] shrink-0 group"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
      }}
    >
      {/* step indicator */}
      <div
        className="relative mb-4 flex items-center justify-center"
        style={{ width: 32, height: 32 }}
      >
        <div
          className="absolute inset-0 rounded-full animate-pulse-glow"
          style={{ backgroundColor: color, opacity: 0.15, filter: "blur(8px)" }}
        />
        <div
          className="relative z-10 w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold"
          style={{ border: `1.5px solid ${color}`, color, backgroundColor: `${color}10` }}
        >
          {index + 1}
        </div>
      </div>

      {/* card */}
      <div
        className="relative rounded-xl p-5 w-full flex flex-col items-center text-center backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1"
        style={{
          background: "rgba(14,29,60,0.7)",
          border: `1px solid ${color}20`,
          boxShadow: `0 0 0 0 ${color}00`,
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.border = `1px solid ${color}50`;
          (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${color}20, 0 8px 32px rgba(0,0,0,0.4)`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.border = `1px solid ${color}20`;
          (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${color}00`;
        }}
      >
        {/* icon */}
        <div className="mb-3">
          <IconComponent index={index} color={color} />
        </div>

        {/* label */}
        <p className="font-body font-semibold text-sm text-foreground mb-2 leading-tight">
          {stage.label}
        </p>

        {/* stat */}
        <p
          className="font-mono font-bold text-xl"
          style={{
            background: `linear-gradient(135deg, ${color}, ${color}aa)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {stage.stat}
        </p>
      </div>
    </div>
  );
};

/* ── main section ── */
const ValueChain = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="relative py-24 overflow-hidden" style={{ backgroundColor: "#080c14" }}>
      {/* grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      {/* radial glows */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "20%",
          left: "10%",
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "10%",
          right: "15%",
          width: 350,
          height: 350,
          background: "radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%)",
        }}
      />

      {/* floating particles */}
      <FloatingParticles />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5">
        {/* heading */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2
            className="font-display font-semibold text-foreground mb-3"
            style={{ fontSize: "clamp(26px, 4.5vw, 40px)", letterSpacing: "-0.02em" }}
          >
            Complete Value Chain Coverage
          </h2>
          <p
            className="font-body mx-auto"
            style={{ fontSize: "clamp(14px, 2vw, 17px)", color: "rgba(255,255,255,0.40)", maxWidth: 480 }}
          >
            Track CO₂ from industrial source to permanent geological storage
          </p>
        </div>

        {/* nodes row */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-0 gap-0">
          {stages.map((stage, i) => (
            <div key={i} className="contents">
              <NodeCard stage={stage} index={i} color={palette[i]} isVisible={isVisible} />
              {i < stages.length - 1 && (
                <>
                  <PipelineConnector color={palette[i]} nextColor={palette[i + 1]} delay={i} />
                  <PipelineConnectorVertical color={palette[i]} nextColor={palette[i + 1]} delay={i} />
                </>
              )}
            </div>
          ))}
        </div>

        {/* stats bar */}
        <div
          className={`mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationDelay: "0.8s" }}
        >
          {["156 Countries", "5 Asset Classes", "Real-time Data Updates"].map((text, i) => (
            <span key={i} className="font-body text-sm" style={{ color: "rgba(255,255,255,0.30)" }}>
              {text}
              {i < 2 && <span className="ml-8" style={{ color: "rgba(255,255,255,0.12)" }}>·</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueChain;
