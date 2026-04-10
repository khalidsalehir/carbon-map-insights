import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Map, Database, BarChart3, TrendingUp, Factory, FlaskConical,
  Newspaper, Wrench, ShieldCheck, Layers, Ship, Target,
  Search, Filter, Calendar, Link as LinkIcon, Thermometer,
  Scale, Calculator, GitBranch
} from "lucide-react";

const SectionDivider = () => (
  <div className="h-px w-full bg-gradient-to-r from-transparent via-border/30 to-transparent" />
);

const ScreenshotPlaceholder = ({ label }: { label: string }) => (
  <div className="w-full rounded-xl border border-border/20 flex items-center justify-center aspect-video"
    style={{ backgroundColor: "hsl(218 40% 7%)" }}>
    <span className="text-muted-foreground/40 font-body text-sm">{label}</span>
  </div>
);

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
    {children}
  </li>
);

const MetricCard = ({ value, label }: { value: string; label: string }) => (
  <div className="glass-card p-6 text-center">
    <div className="text-2xl sm:text-3xl font-mono font-bold text-primary">{value}</div>
    <div className="text-xs text-muted-foreground mt-1">{label}</div>
  </div>
);

/* ── Module: alternating image + text ── */
const ModuleSection = ({ title, description, bullets, screenshotLabel, reverse, children }: {
  title: string; description: string; bullets: string[]; screenshotLabel: string; reverse?: boolean; children?: React.ReactNode;
}) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-6">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className={reverse ? "lg:order-2" : ""}>
            <ScreenshotPlaceholder label={screenshotLabel} />
          </div>
          <div className={`space-y-6 ${reverse ? "lg:order-1" : ""}`}>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">{title}</h2>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
            <ul className="space-y-3">{bullets.map((b) => <Bullet key={b}>{b}</Bullet>)}</ul>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── Tool Card ── */
const ToolCard = ({ icon: Icon, title, text }: { icon: React.ElementType; title: string; text: string }) => (
  <div className="glass-card p-6 space-y-3">
    <Icon className="w-6 h-6 text-primary" />
    <h4 className="text-sm font-body font-bold text-foreground">{title}</h4>
    <p className="text-xs text-muted-foreground leading-relaxed">{text}</p>
  </div>
);

/* ── Quality Card ── */
const QualityCard = ({ level, label, text, accent }: { level: string; label: string; text: string; accent: string }) => (
  <div className="glass-card p-6 space-y-3">
    <div className="flex items-center gap-2">
      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: accent }} />
      <span className="text-sm font-body font-bold text-foreground">{level} — {label}</span>
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
  </div>
);

const PlatformPage = () => {
  const heroAnim = useScrollAnimation();
  const analyticsAnim = useScrollAnimation();
  const marketsAnim = useScrollAnimation();
  const newsAnim = useScrollAnimation();
  const toolsAnim = useScrollAnimation();
  const transparencyAnim = useScrollAnimation();
  const ctaAnim = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background noise-overlay">
      <Navbar />

      {/* HERO */}
      <section ref={heroAnim.ref} className="pt-32 pb-16 relative">
        <div className={`container mx-auto px-6 text-center ${heroAnim.isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            The CarbonMap <span className="text-gradient-cyan">Platform</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A complete CCS intelligence suite — from interactive maps to AI-powered analysis, carbon market data, and engineering tools.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* MODULE 1: Interactive Maps */}
      <ModuleSection
        title="Global CCS Map"
        description="Visualize 29,000+ emitters, 1,400 capture installations, and 105 infrastructure assets on a single interactive map. Filter by value chain stage, project status, sector, country, and capacity."
        bullets={[
          "Layer controls for capture, storage, transport, hubs, and emitters",
          "Color-coded by sector (Power, Chemicals, Cement, Iron & Steel, etc.)",
          "Status filtering: Operational, Construction, Planning, Hold, Cancelled",
          "Click any project for instant detail view",
        ]}
        screenshotLabel="Global CCS Map"
      />

      <SectionDivider />

      {/* MODULE 2: Storage Map */}
      <ModuleSection
        title="CCS Storage Map"
        description="113 mapped storage sites across Europe and beyond. Each project shows capacity, engineering status, operator, partners, timeline, transport mode, and CO₂ destination — with AI-generated intelligence summaries."
        bullets={[
          "Project detail pages with full partner lists and role descriptions",
          "Timeline visualization: Announced → FID → Operations",
          "Transport & destination analysis per project",
          "Key info cards: public funding, transport scope, destination scope",
        ]}
        screenshotLabel="CCS Storage Map"
        reverse
      />

      <SectionDivider />

      {/* MODULE 3: Analytics */}
      <section ref={analyticsAnim.ref} className="py-24" style={{ backgroundColor: "hsl(218 40% 5%)" }}>
        <div className="container mx-auto px-6">
          <div className={`text-center mb-12 ${analyticsAnim.isVisible ? "animate-fade-up" : "opacity-0"}`}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">Analytics & Intelligence</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Real-time tracking and deep analysis of CCS worldwide.</p>
          </div>

          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 ${analyticsAnim.isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.15s" }}>
            <MetricCard value="627.5 Mtpa" label="Total Pipeline Capacity" />
            <MetricCard value="74 Mtpa" label="Operational Capacity" />
            <MetricCard value="1,400" label="Total Capture Facilities" />
            <MetricCard value="62" label="Active Countries" />
          </div>

          <div className={`grid md:grid-cols-2 gap-6 mb-6 ${analyticsAnim.isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.25s" }}>
            <div className="glass-card p-6">
              <h3 className="font-body font-bold text-foreground mb-2">Capacity Growth Timeline</h3>
              <p className="text-sm text-muted-foreground">Cumulative capture capacity forecast through 2035, broken down by project status (Operational, Construction, Planning).</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-body font-bold text-foreground mb-2">Sector Progress to 2030</h3>
              <p className="text-sm text-muted-foreground">Track operational capacity against IEA Net Zero 2030 sectoral targets. See which sectors are on track — and which are falling behind.</p>
            </div>
          </div>

          <div className={`grid md:grid-cols-2 gap-6 ${analyticsAnim.isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.35s" }}>
            <div className="glass-card p-6">
              <h3 className="font-body font-bold text-foreground mb-2">CO₂ Transport Modes</h3>
              <p className="text-sm text-muted-foreground">Pipeline (81.6%), Ship (8.8%), Pipeline and/or Ship (5.7%), Road, Rail — see how captured CO₂ moves.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-body font-bold text-foreground mb-2">CO₂ Destination</h3>
              <p className="text-sm text-muted-foreground">Geological Storage (74.3%), EOR (13.6%), Utilisation (6.3%) — understand where CO₂ ends up.</p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* MODULE 4: Carbon Markets */}
      <section ref={marketsAnim.ref} className="py-24">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-12 ${marketsAnim.isVisible ? "animate-fade-up" : "opacity-0"}`}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">Carbon Markets</h2>
            <p className="text-muted-foreground">Live ETS pricing, market comparisons, and CCS business case analysis.</p>
          </div>
          <div className={`grid md:grid-cols-3 gap-6 max-w-4xl mx-auto ${marketsAnim.isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.15s" }}>
            <div className="glass-card p-6 space-y-3">
              <TrendingUp className="w-6 h-6 text-primary" />
              <h3 className="font-body font-bold text-foreground text-sm">Live Carbon Pricing</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">Real-time EU ETS CO₂ price with 12-month history. Compare across EU ETS, UK ETS, California Cap-and-Trade, and RGGI.</p>
            </div>
            <div className="glass-card p-6 space-y-3">
              <Calculator className="w-6 h-6 text-secondary" />
              <h3 className="font-body font-bold text-foreground text-sm">CCS Business Case Calculator</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">Select any facility from our emitter database. Input ETS price and capture rate. Get instant payback analysis based on real emissions data.</p>
            </div>
            <div className="glass-card p-6 space-y-3">
              <Newspaper className="w-6 h-6 text-stat-orange" />
              <h3 className="font-body font-bold text-foreground text-sm">ETS Policy News</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">AI-curated policy developments affecting carbon markets: CBAM updates, ETS reforms, new permit regulations.</p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* MODULE 5: Emitter Database */}
      <ModuleSection
        title="Emitter Database"
        description="26,902 facilities across 73 countries. 22.94 Gt total CO₂ emissions — broken down into Fossil, Biogenic, and Capturable."
        bullets={[
          "Filter by continent, sector, minimum emissions, country",
          "Fossil vs. Biogenic vs. Capturable CO₂ split per facility",
          "Company and operator identification",
          "Sortable by total emissions, capturable potential, sector",
        ]}
        screenshotLabel="Emitter Database"
      />

      <SectionDivider />

      {/* MODULE 6: Capture Installations */}
      <ModuleSection
        title="Capture Installation Database"
        description="1,400 projects, 627.5 Mtpa total capacity. Search, filter, and drill into any capture project worldwide."
        bullets={[
          "Filter by status: Operational (428), Construction (79), Planning (843)",
          "Search by name, country, operator, technology",
          "Capacity, start year, sector, and status at a glance",
          "Click through to full project detail pages",
        ]}
        screenshotLabel="Capture Installations"
        reverse
      />

      <SectionDivider />

      {/* MODULE 7: News & Intel */}
      <section ref={newsAnim.ref} className="py-24">
        <div className="container mx-auto px-6">
          <div className={`max-w-2xl mx-auto text-center ${newsAnim.isVisible ? "animate-fade-up" : "opacity-0"}`}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">News & Intel</h2>
            <p className="text-muted-foreground mb-8">Real-time CCS industry intelligence — project updates, policy changes, and market activity.</p>
            <ul className="space-y-3 text-left max-w-md mx-auto">
              <Bullet>Three feeds: Activity Feed, Project News, Industry Articles</Bullet>
              <Bullet>Filter by category: Research, Project Update, Policy, New Permit, Acquisition</Bullet>
              <Bullet>Date range filtering and search</Bullet>
              <Bullet>Source attribution with direct links to original publications</Bullet>
            </ul>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* MODULE 8: Engineering Tools */}
      <section ref={toolsAnim.ref} className="py-24" style={{ backgroundColor: "hsl(218 40% 5%)" }}>
        <div className="container mx-auto px-6">
          <div className={`text-center mb-12 ${toolsAnim.isVisible ? "animate-fade-up" : "opacity-0"}`}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">CO₂ Engineering Tools</h2>
            <p className="text-muted-foreground">Purpose-built calculators for CCS professionals.</p>
          </div>
          <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto ${toolsAnim.isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.15s" }}>
            <ToolCard icon={Thermometer} title="CO₂ PVT Calculator" text="Calculate phase state, density, viscosity, and molar volume at any temperature and pressure. Interactive P-T phase diagram." />
            <ToolCard icon={Database} title="Storage Capacity" text="Estimate geological storage capacity based on reservoir parameters." />
            <ToolCard icon={Scale} title="Unit Converter" text="Convert between CCS-relevant units: tonnes, Mtpa, cubic meters, pressures." />
            <ToolCard icon={GitBranch} title="Cost Learning Curves" text="Track how capture costs evolve with deployment scale across technologies." />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* MODULE 9: Data Transparency */}
      <section ref={transparencyAnim.ref} className="py-24">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-12 ${transparencyAnim.isVisible ? "animate-fade-up" : "opacity-0"}`}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">Data You Can Verify</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Full transparency on data origins, update schedules, and quality levels.</p>
          </div>
          <div className={`grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8 ${transparencyAnim.isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.15s" }}>
            <QualityCard level="Level A" label="Verified" accent="hsl(142 70% 50%)" text="Data directly verified against EU ETS registry or official government database. Highest confidence." />
            <QualityCard level="Level B" label="Reported" accent="hsl(45 90% 55%)" text="Facility-reported data, potentially unverified or based on partial EU ETS coverage. Good confidence." />
            <QualityCard level="Level C" label="Estimated" accent="hsl(0 80% 60%)" text="Estimated from proxy data, regional averages, or AI interpolation. Use with caution." />
          </div>
          <p className={`text-center text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed ${transparencyAnim.isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.25s" }}>
            Our methodology combines AI-assisted extraction, manual expert verification, official registries, and continuous monitoring. Project status is updated within 48 hours of official announcements.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* MODULE 10: CTA */}
      <section ref={ctaAnim.ref} className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[700px] h-[700px] rounded-full bg-primary/10 blur-[140px]" />
        </div>
        <div className={`container mx-auto px-6 relative z-10 text-center transition-all duration-700 ${ctaAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-foreground mb-6">Ready to See the Full Picture?</h2>
          <a
            href="mailto:info@carbonmap.nl?subject=CarbonMap%20Early%20Access%20Request"
            className="inline-block bg-primary text-background px-10 py-4 rounded-lg text-lg font-body font-semibold hover:opacity-90 transition-all glow-cyan-strong"
          >
            Request Early Access →
          </a>
          <p className="text-sm text-muted-foreground mt-4">Includes full platform access during early access period.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlatformPage;
