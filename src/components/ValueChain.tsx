import { useEffect, useRef, useState } from "react";

/* ── Palette & data ── */
const palette = ["#22d3ee", "#14b8a6", "#f472b6", "#fb923c", "#a78bfa"];
const paletteLight = ["#67e8f9", "#5eead4", "#f9a8d4", "#fdba74", "#c4b5fd"];

const stages = [
  { label: "Industrial\nEmitters", stat: "30,000+" },
  { label: "Capture\nInstallations", stat: "1,500+" },
  { label: "Pipeline\nTransport", stat: "115" },
  { label: "Hubs &\nTerminals", stat: "45+" },
  { label: "Geological\nStorage", stat: "113" },
];

/* ── Canvas particle system ── */
const ParticleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number; color: string }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    // seed particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.3 + 0.05,
        color: palette[Math.floor(Math.random() * palette.length)],
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.offsetWidth;
        if (p.x > canvas.offsetWidth) p.x = 0;
        if (p.y < 0) p.y = canvas.offsetHeight;
        if (p.y > canvas.offsetHeight) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-[1]" />;
};

/* ── SVG Icons ── */
const NodeIcons = [
  // Factory
  (color: string) => (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <rect x="6" y="28" width="12" height="18" rx="2" stroke={color} strokeWidth="1.5" fill="none" />
      <rect x="20" y="22" width="12" height="24" rx="2" stroke={color} strokeWidth="1.5" fill="none" />
      <rect x="34" y="28" width="12" height="18" rx="2" stroke={color} strokeWidth="1.5" fill="none" />
      <line x1="12" y1="28" x2="12" y2="14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="26" y1="22" x2="26" y2="8" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="40" y1="28" x2="40" y2="16" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="11" r="3" fill={color} opacity="0.2"><animate attributeName="opacity" values="0.1;0.35;0.1" dur="3s" repeatCount="indefinite" /></circle>
      <circle cx="26" cy="5" r="3.5" fill={color} opacity="0.2"><animate attributeName="opacity" values="0.1;0.35;0.1" dur="4s" repeatCount="indefinite" /></circle>
      <circle cx="40" cy="13" r="3" fill={color} opacity="0.2"><animate attributeName="opacity" values="0.1;0.35;0.1" dur="3.5s" repeatCount="indefinite" /></circle>
    </svg>
  ),
  // Filter / Funnel
  (color: string) => (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <path d="M8 8h36L32 24v16l-12 4V24L8 8z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      <line x1="12" y1="14" x2="40" y2="14" stroke={color} strokeWidth="1" opacity="0.2" />
      <line x1="16" y1="20" x2="36" y2="20" stroke={color} strokeWidth="1" opacity="0.2" />
      <circle cx="26" cy="34" r="2" fill={color} opacity="0.3"><animate attributeName="r" values="1.5;3;1.5" dur="3s" repeatCount="indefinite" /></circle>
    </svg>
  ),
  // Pipeline
  (color: string) => (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <path d="M4 26h44" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M4 18h44" stroke={color} strokeWidth="1.5" opacity="0.15" strokeLinecap="round" />
      <path d="M4 34h44" stroke={color} strokeWidth="1.5" opacity="0.15" strokeLinecap="round" />
      <circle cx="16" cy="26" r="4" stroke={color} strokeWidth="1.5" fill="none" />
      <circle cx="36" cy="26" r="4" stroke={color} strokeWidth="1.5" fill="none" />
      <polygon points="44,22 50,26 44,30" fill={color} opacity="0.5"><animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" /></polygon>
    </svg>
  ),
  // Hub / junction
  (color: string) => (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <circle cx="26" cy="26" r="8" stroke={color} strokeWidth="1.5" fill="none" />
      <circle cx="26" cy="26" r="3" fill={color} opacity="0.25"><animate attributeName="opacity" values="0.15;0.4;0.15" dur="3s" repeatCount="indefinite" /></circle>
      <line x1="26" y1="6" x2="26" y2="18" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="26" y1="34" x2="26" y2="46" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="6" y1="26" x2="18" y2="26" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="34" y1="26" x2="46" y2="26" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="26" cy="6" r="2.5" stroke={color} strokeWidth="1" opacity="0.3" fill="none" />
      <circle cx="26" cy="46" r="2.5" stroke={color} strokeWidth="1" opacity="0.3" fill="none" />
      <circle cx="6" cy="26" r="2.5" stroke={color} strokeWidth="1" opacity="0.3" fill="none" />
      <circle cx="46" cy="26" r="2.5" stroke={color} strokeWidth="1" opacity="0.3" fill="none" />
    </svg>
  ),
  // Geological storage
  (color: string) => (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <path d="M4 22h44" stroke={color} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.3" />
      <path d="M10 22v8c0 5 7 10 16 10s16-5 16-10v-8" stroke={color} strokeWidth="1.5" fill="none" />
      <ellipse cx="26" cy="34" rx="10" ry="4" fill={color} opacity="0.1" />
      <line x1="26" y1="4" x2="26" y2="22" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <polygon points="22,12 26,4 30,12" fill={color} opacity="0.3" />
      <circle cx="20" cy="32" r="1.5" fill={color} opacity="0.2"><animate attributeName="opacity" values="0.1;0.35;0.1" dur="4s" repeatCount="indefinite" /></circle>
      <circle cx="32" cy="31" r="1.5" fill={color} opacity="0.2"><animate attributeName="opacity" values="0.1;0.35;0.1" dur="3.5s" repeatCount="indefinite" /></circle>
      <circle cx="26" cy="36" r="1.5" fill={color} opacity="0.2"><animate attributeName="opacity" values="0.1;0.35;0.1" dur="3s" repeatCount="indefinite" /></circle>
    </svg>
  ),
];

/* ── Chevron connector SVG ── */
const ChevronConnector = ({ index }: { index: number }) => {
  const c = palette[index];
  const c2 = palette[index + 1];
  return (
    <svg width="24" height="40" viewBox="0 0 24 40" fill="none" className="hidden lg:block">
      <defs>
        <linearGradient id={`chev-${index}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={c} stopOpacity="0.4" />
          <stop offset="100%" stopColor={c2} stopOpacity="0.4" />
        </linearGradient>
      </defs>
      <path d="M6 8 L16 20 L6 32" stroke={`url(#chev-${index})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M6 8 L16 20 L6 32" stroke={c} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.15" filter="url(#blur)" />
    </svg>
  );
};

/* ── Main component ── */
const ValueChain = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#080c14", padding: "80px 40px", minHeight: "100vh" }}
    >
      {/* ── Background layers ── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(34,211,238,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.025) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Topographic curves */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute" style={{ width: "120%", height: "120%", top: "-10%", left: "-10%", opacity: 0.04 }} viewBox="0 0 1400 900" fill="none">
          <path d="M0 400 Q350 200 700 400 T1400 400" stroke="#22d3ee" strokeWidth="1" fill="none" />
          <path d="M0 450 Q350 250 700 450 T1400 450" stroke="#14b8a6" strokeWidth="0.8" fill="none" />
          <path d="M0 500 Q350 300 700 500 T1400 500" stroke="#a78bfa" strokeWidth="0.6" fill="none" />
          <path d="M0 350 Q400 150 800 350 T1400 350" stroke="#f472b6" strokeWidth="0.5" fill="none" />
          <path d="M0 550 Q300 350 600 550 T1400 550" stroke="#fb923c" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      {/* Radial glows */}
      <div className="absolute pointer-events-none rounded-full" style={{ top: "5%", left: "5%", width: 500, height: 500, background: "rgba(34,211,238,0.07)", filter: "blur(80px)" }} />
      <div className="absolute pointer-events-none rounded-full" style={{ bottom: "10%", right: "10%", width: 400, height: 400, background: "rgba(244,114,182,0.05)", filter: "blur(80px)" }} />
      <div className="absolute pointer-events-none rounded-full" style={{ top: "40%", left: "45%", width: 600, height: 300, background: "rgba(167,139,250,0.04)", filter: "blur(80px)" }} />

      {/* Particle canvas */}
      <ParticleCanvas />

      {/* ── Header ── */}
      <div
        className="text-center relative z-[2]"
        style={{
          marginBottom: 72,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
        }}
      >
        <p className="font-mono text-xs uppercase tracking-[0.25em] mb-4" style={{ color: "#22d3ee", opacity: 0.7 }}>
          Full CCS Coverage
        </p>
        <h2 className="font-display font-semibold text-foreground mb-4" style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)", letterSpacing: "-0.02em" }}>
          Complete Value Chain Coverage
        </h2>
        <p className="font-body text-muted-foreground font-light mx-auto" style={{ fontSize: "clamp(0.95rem, 2vw, 1.15rem)", maxWidth: 480, lineHeight: 1.6 }}>
          Track CO₂ from industrial source to permanent geological storage
        </p>
      </div>

      {/* ── Chain container ── */}
      <div className="relative w-full z-[2]" style={{ maxWidth: 1300 }}>

        {/* Flow line (behind cards, desktop only) */}
        <div
          className="absolute hidden lg:block"
          style={{
            top: "50%", left: 24, right: 24, height: 4,
            transform: "translateY(-50%)", zIndex: 0,
            opacity: isVisible ? 1 : 0,
            transition: "opacity 1s ease 0.4s",
          }}
        >
          <div className="absolute inset-0 rounded" style={{
            background: "linear-gradient(90deg, #22d3ee, #14b8a6 25%, #f472b6 50%, #fb923c 75%, #a78bfa)",
            opacity: 0.08,
          }} />
          <div className="absolute rounded-lg" style={{
            top: -8, left: 0, right: 0, height: 20,
            background: "linear-gradient(90deg, rgba(34,211,238,0.06), rgba(20,184,166,0.06) 25%, rgba(244,114,182,0.06) 50%, rgba(251,146,60,0.06) 75%, rgba(167,139,250,0.06))",
            filter: "blur(8px)",
          }} />
          {/* Flow particles */}
          {[
            { color: "#22d3ee", delay: "0s", width: 40 },
            { color: "#f472b6", delay: "2s", width: 40 },
            { color: "#a78bfa", delay: "3s", width: 30 },
          ].map((fp, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                top: -3, width: fp.width, height: 10,
                background: `linear-gradient(90deg, transparent, ${fp.color}, transparent)`,
                filter: "blur(1px)",
                animation: `flowMove 4s linear infinite`,
                animationDelay: fp.delay,
              }}
            />
          ))}
        </div>

        {/* Connector chevrons (positioned absolutely, desktop only) */}
        <div className="absolute inset-0 hidden lg:block pointer-events-none" style={{ zIndex: 3 }}>
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="absolute"
              style={{
                top: "50%", transform: "translateY(-50%)",
                left: `${(i + 1) * 20}%`, marginLeft: -12,
                opacity: isVisible ? 1 : 0,
                transition: `opacity 0.5s ease ${0.6 + i * 0.2}s, transform 0.5s ease ${0.6 + i * 0.2}s`,
              }}
            >
              <ChevronConnector index={i} />
            </div>
          ))}
        </div>

        {/* Nodes */}
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-5 lg:gap-0 relative z-[2]" style={{ maxWidth: 360, margin: "0 auto" }} id="vc-nodes">
          {stages.map((stage, i) => (
            <NodeCard key={i} stage={stage} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div
        className="flex flex-wrap justify-center items-center gap-5 relative z-[2]"
        style={{
          marginTop: 72,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.8s ease 1.5s, transform 0.8s ease 1.5s",
        }}
      >
        <StatItem value="150+" label="Countries" />
        <div className="hidden sm:block self-center" style={{ width: 1, height: 40, background: "linear-gradient(180deg, transparent, rgba(34,211,238,0.15), transparent)" }} />
        <StatItem value="5" label="Asset Classes" />
        <div className="hidden sm:block self-center" style={{ width: 1, height: 40, background: "linear-gradient(180deg, transparent, rgba(34,211,238,0.15), transparent)" }} />
        <StatItem value="Real-time" label="Data Updates" />
      </div>

      {/* Keyframe styles */}
      <style>{`
        @keyframes flowMove {
          0% { left: -40px; opacity: 0; }
          5% { opacity: 1; }
          95% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        @keyframes ringPulse {
          0%, 100% { transform: scale(1); opacity: 0.12; }
          50% { transform: scale(1.1); opacity: 0.25; }
        }
        #vc-nodes {
          max-width: 100% !important;
        }
        @media (max-width: 1024px) {
          #vc-nodes { max-width: 360px !important; margin: 0 auto !important; }
        }
      `}</style>
    </section>
  );
};

/* ── Node card ── */
const NodeCard = ({ stage, index, isVisible }: { stage: typeof stages[0]; index: number; isVisible: boolean }) => {
  const color = palette[index];
  const colorLight = paletteLight[index];
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex-1 flex flex-col items-center relative rounded-[20px] backdrop-blur-md cursor-default"
      style={{
        padding: "48px 20px 40px",
        margin: "0 12px",
        background: "linear-gradient(180deg, rgba(14,29,60,0.6) 0%, rgba(8,12,20,0.4) 100%)",
        border: `1px solid ${hovered ? `${color}26` : "rgba(34,211,238,0.08)"}`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? (hovered ? "translateY(-8px)" : "translateY(0)") : "translateY(30px)",
        transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: isVisible ? `${0.3 + index * 0.2}s` : "0s",
        boxShadow: hovered
          ? `0 24px 80px rgba(0,0,0,0.4), 0 0 60px ${color}14`
          : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Gradient border overlay on hover */}
      <div
        className="absolute inset-[-1px] rounded-[20px] pointer-events-none"
        style={{
          padding: 1,
          background: `linear-gradient(180deg, ${color}33 0%, transparent 60%)`,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.5s",
        }}
      />

      {/* Step badge */}
      <div
        className="absolute flex items-center justify-center font-mono text-xs font-semibold rounded-full"
        style={{
          top: -16, left: "50%", transform: "translateX(-50%)",
          width: 32, height: 32,
          background: color,
          color: "#080c14",
          boxShadow: `0 0 24px ${color}80, 0 0 8px ${color}4d`,
          zIndex: 5,
        }}
      >
        {index + 1}
      </div>

      {/* Icon with rings */}
      <div className="relative flex items-center justify-center mb-6" style={{ width: 88, height: 88 }}>
        <div
          className="absolute rounded-full"
          style={{
            inset: -4,
            border: `1px solid ${color}`,
            opacity: 0.15,
            animation: "ringPulse 4s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            inset: -16,
            border: `1px solid ${color}`,
            opacity: 0.06,
            animation: "ringPulse 4s ease-in-out 1s infinite",
          }}
        />
        <div className="relative z-[2]">
          {NodeIcons[index](color)}
        </div>
      </div>

      {/* Label */}
      <p className="font-body text-sm font-medium text-muted-foreground text-center mb-3.5 min-h-[44px] flex items-center justify-center whitespace-pre-line leading-snug">
        {stage.label}
      </p>

      {/* Number */}
      <p
        className="font-mono font-semibold text-4xl"
        style={{
          letterSpacing: "-0.02em",
          backgroundImage: `linear-gradient(135deg, ${color}, ${colorLight})`,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {stage.stat}
      </p>
    </div>
  );
};

/* ── Stat item ── */
const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <p className="font-mono text-xl font-semibold" style={{ color: "#22d3ee" }}>{value}</p>
    <p className="text-xs uppercase tracking-widest font-medium mt-1.5" style={{ color: "#475569" }}>{label}</p>
  </div>
);

export default ValueChain;
