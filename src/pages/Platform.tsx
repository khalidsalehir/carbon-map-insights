import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

/* Update meta tags for /platform page */
const usePlatformMeta = () => {
  useEffect(() => {
    document.title = "CarbonMap Platform — Complete CCS Intelligence Suite";
    const metas: Record<string, string> = {
      "og:title": "CarbonMap Platform — Complete CCS Intelligence Suite",
      "og:description": "Interactive maps, AI analytics, live carbon market pricing, CO₂ engineering tools, and transparent data for CCS professionals.",
      "og:url": "https://carbonmap.nl/platform",
      "og:type": "website",
      "og:image": "https://www.carbonmap.nl/og-preview.png",
      "twitter:card": "summary_large_image",
      "twitter:title": "CarbonMap Platform — Complete CCS Intelligence Suite",
      "twitter:description": "Interactive maps, AI analytics, live carbon market pricing, CO₂ engineering tools, and transparent data for CCS professionals.",
      "twitter:image": "https://www.carbonmap.nl/og-preview.png",
    };
    const original: Record<string, string | null> = {};
    Object.entries(metas).forEach(([key, value]) => {
      const attr = key.startsWith("og:") ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (el) {
        original[key] = el.getAttribute("content");
        el.setAttribute("content", value);
      } else {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        el.setAttribute("content", value);
        document.head.appendChild(el);
        original[key] = null;
      }
    });
    const origTitle = "CarbonMap — Global CCS Intelligence Platform";
    return () => {
      document.title = origTitle;
      Object.entries(original).forEach(([key, orig]) => {
        const attr = key.startsWith("og:") ? "property" : "name";
        const el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
        if (!el) return;
        if (orig === null) el.remove();
        else el.setAttribute("content", orig);
      });
    };
  }, []);
};
import platformGlobalMap from "@/assets/platform-global-map.png";
import platformStorageMap from "@/assets/platform-storage-map.png";
import platformAnalytics from "@/assets/platform-analytics.png";
import platformCarbonMarkets from "@/assets/platform-carbon-markets.png";
import platformEmitterDb from "@/assets/platform-emitter-db.png";
import platformNewsIntel from "@/assets/platform-news-intel.png";
import platformEngineeringTools from "@/assets/platform-engineering-tools.png";
import {
  Bot,
  UserCheck,
  Building2,
  RefreshCw,
  ShieldCheck,
  AlertTriangle,
  HelpCircle,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* ─── Placeholder screenshot ─── */
const PlaceholderImage = ({ label }: { label: string }) => (
  <div className="w-full aspect-video rounded-xl bg-[hsl(220,30%,8%)] border border-border/30 flex items-center justify-center">
    <span className="font-mono text-sm text-muted-foreground">{label}</span>
  </div>
);

/* ─── Feature tags ─── */
const Tags = ({ items }: { items: string[] }) => (
  <div className="flex flex-wrap gap-2 mt-5">
    {items.map((t) => (
      <span
        key={t}
        className="text-xs font-mono px-3 py-1 rounded-full border border-border/40 text-muted-foreground"
      >
        {t}
      </span>
    ))}
  </div>
);

/* ─── Animated section wrapper ─── */
const Section = ({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section
      ref={ref}
      id={id}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </section>
  );
};

/* ─── Metric card ─── */
const Metric = ({ value, label }: { value: string; label: string }) => (
  <div className="glass-card p-6 text-center">
    <p className="font-mono text-3xl font-bold text-primary">{value}</p>
    <p className="text-sm text-muted-foreground mt-1 font-body">{label}</p>
  </div>
);

/* ─── Feature card ─── */
const FeatureCard = ({
  title,
  text,
  icon,
  accent,
}: {
  title: string;
  text: string;
  icon?: React.ReactNode;
  accent?: string;
}) => (
  <div
    className="glass-card p-6 flex flex-col gap-2"
    style={accent ? { borderLeftColor: accent, borderLeftWidth: 3 } : undefined}
  >
    {icon && <div className="text-primary mb-1">{icon}</div>}
    <h4 className="font-display text-lg font-semibold text-foreground">{title}</h4>
    <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
  </div>
);

/* ════════════════════════════════════════════════ */
const Platform = () => {
  usePlatformMeta();
  return (
    <div className="min-h-screen bg-background noise-overlay">
      <Navbar />

      {/* ── 1. Page Header ── */}
      <Section className="pt-28 pb-16">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-5">
            The CarbonMap Platform
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A complete CCS intelligence suite — interactive maps, AI-powered
            analysis, carbon market data, engineering tools, and transparent data
            methodology.
          </p>
        </div>
      </Section>

      {/* ── 2. Interactive Maps ── */}
      <Section className="py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img src={platformGlobalMap} alt="Global CCS Map screenshot" className="w-full rounded-xl object-cover border" style={{ borderColor: 'rgba(255,255,255,0.08)' }} />
          <div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Global CCS Map
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Visualize 30,000+ emitters, 1,400 capture installations, and 105
              infrastructure assets on a single interactive map. Toggle between
              capture, storage, transport, hubs, and emitter layers. Filter by
              project status, sector, country, and capacity.
            </p>
            <Tags
              items={[
                "Multi-layer filtering",
                "Color-coded by sector",
                "Status filtering",
                "Click-to-detail",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* ── 3. CCS Storage Map ── */}
      <Section className="py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              CCS Storage Map
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              113 mapped storage sites with full project detail pages. Each project
              shows capacity, engineering status, timeline, operator, partners,
              transport mode, and CO₂ destination — with AI-generated intelligence
              summaries.
            </p>
            <Tags
              items={[
                "Project timelines",
                "Partner & role mapping",
                "Transport analysis",
                "Public funding tracking",
              ]}
            />
          </div>
          <div className="order-1 md:order-2">
            <img src={platformStorageMap} alt="CCS Storage Map screenshot" className="w-full rounded-xl object-cover border" style={{ borderColor: 'rgba(255,255,255,0.08)' }} />
          </div>
        </div>
      </Section>

      {/* ── 4. Analytics & Intelligence ── */}
      <Section className="py-16">
        <div className="container mx-auto px-6">
          <div className="glass-card p-8 md:p-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-3 text-center">
              Analytics &amp; Intelligence
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
              Real-time tracking and deep analysis of Carbon Capture and Storage
              initiatives worldwide.
            </p>

            <img src={platformAnalytics} alt="Analytics & Intelligence screenshot" className="w-full rounded-xl object-cover border mb-10" style={{ borderColor: 'rgba(255,255,255,0.08)' }} />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <Metric value="627.5 Mtpa" label="Pipeline Capacity" />
              <Metric value="74 Mtpa" label="Operational" />
              <Metric value="1,400" label="Capture Facilities" />
              <Metric value="62" label="Nations Active" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <FeatureCard
                title="Capacity Growth Timeline"
                text="Cumulative capture capacity forecast through 2035, stacked by project status."
              />
              <FeatureCard
                title="Sector Progress to 2030"
                text="Operational capacity vs IEA Net Zero 2030 sectoral targets. See which sectors are on track."
              />
              <FeatureCard
                title="CO₂ Transport Modes"
                text="Pipeline (81.6%), Ship (8.8%), and more — understand how captured CO₂ moves globally."
              />
              <FeatureCard
                title="CO₂ Destination"
                text="Geological storage (74.3%), EOR (13.6%), Utilisation (6.3%) — where does captured CO₂ end up?"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ── 5. Carbon Markets ── */}
      <Section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-display font-bold text-foreground mb-3">
            Carbon Markets
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
            Live ETS pricing, cross-market comparisons, and CCS business case
            analysis.
          </p>

          <img src={platformCarbonMarkets} alt="Carbon Markets screenshot" className="w-full rounded-xl object-cover border mb-10" style={{ borderColor: 'rgba(255,255,255,0.08)' }} />

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              title="Live Carbon Pricing"
              text="Real-time EU ETS price with 12-month trend. Compare EU ETS, UK ETS, California Cap-and-Trade, and RGGI side by side."
            />
            <FeatureCard
              title="CCS Business Case Calculator"
              text="Select any facility from our emitter database, set ETS price and capture rate, get instant payback analysis based on real emissions data."
            />
            <FeatureCard
              title="ETS Policy News"
              text="AI-curated policy developments: CBAM updates, ETS reforms, new regulations — sourced and timestamped."
            />
          </div>
        </div>
      </Section>

      {/* ── 6. Emitter Database ── */}
      <Section className="py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img src={platformEmitterDb} alt="Emitter Database screenshot" className="w-full rounded-xl object-cover border" style={{ borderColor: 'rgba(255,255,255,0.08)' }} />
          <div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Emitter Database
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              26,902 facilities across 73 countries. 22.94 Gt total CO₂ — with
              Fossil, Biogenic, and Capturable breakdown per facility. Filter by
              continent, sector, emissions threshold, and country.
            </p>
            <Tags
              items={[
                "Fossil vs Biogenic split",
                "Capturable CO₂ estimate",
                "Sector classification",
                "Company identification",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* ── 7. News & Intel ── */}
      <Section className="py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              News &amp; Intel
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Real-time CCS industry intelligence. Three feeds: Activity Feed,
              Project News, and Industry Articles. Filter by category — Research,
              Project Update, Policy, New Permit, Acquisition — with date range
              search and source attribution.
            </p>
            <Tags
              items={[
                "AI-curated feed",
                "Category filtering",
                "Source links",
                "Date search",
              ]}
            />
          </div>
          <div className="order-1 md:order-2">
            <img src={platformNewsIntel} alt="News & Intel screenshot" className="w-full rounded-xl object-cover border" style={{ borderColor: 'rgba(255,255,255,0.08)' }} />
          </div>
        </div>
      </Section>

      {/* ── 8. Engineering Tools ── */}
      <Section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-display font-bold text-foreground mb-3">
            CO₂ Engineering Tools
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
            Purpose-built calculators for CCS professionals.
          </p>

          <img src={platformEngineeringTools} alt="CO₂ Engineering Tools screenshot" className="w-full rounded-xl object-cover border mb-10" style={{ borderColor: 'rgba(255,255,255,0.08)' }} />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              title="CO₂ PVT Calculator"
              text="Phase state, density, viscosity, and molar volume at any temperature and pressure. Interactive P-T phase diagram with supercritical, liquid, gas, and two-phase regions."
            />
            <FeatureCard
              title="Storage Capacity Estimator"
              text="Estimate geological CO₂ storage capacity based on reservoir parameters."
            />
            <FeatureCard
              title="Unit Converter"
              text="Convert between CCS-relevant units: tonnes, Mtpa, cubic meters, bar, psi, and more."
            />
            <FeatureCard
              title="Cost Learning Curves"
              text="Track how capture costs evolve with cumulative deployment across technologies and sectors."
            />
          </div>
        </div>
      </Section>

      {/* ── 9. Data Transparency ── */}
      <Section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-foreground mb-3 text-center">
            Data You Can Verify
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            Full transparency on data origins, methodology, and quality levels.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <FeatureCard
              icon={<Bot className="w-6 h-6" />}
              title="AI-Assisted Extraction"
              text="New project announcements, press releases, and regulatory filings are continuously monitored and classified by AI. All AI-extracted data is clearly labelled and queued for human review."
            />
            <FeatureCard
              icon={<UserCheck className="w-6 h-6" />}
              title="Manual Verification"
              text="CCS domain experts manually verify capacity, status, and partner data. Human-verified data includes source URL, verifier initials, and timestamp."
            />
            <FeatureCard
              icon={<Building2 className="w-6 h-6" />}
              title="Official Registries"
              text="EU ETS, E-PRTR, and national environmental registries are pulled automatically on update release. These form the authoritative baseline."
            />
            <FeatureCard
              icon={<RefreshCw className="w-6 h-6" />}
              title="Continuous Updates"
              text="Project status updated within 48 hours of official announcements. Historical data is backdated with confidence intervals."
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<ShieldCheck className="w-6 h-6" />}
              title="Level A — Verified"
              text="Directly verified against EU ETS registry or official government database. Highest confidence."
              accent="hsl(140, 70%, 45%)"
            />
            <FeatureCard
              icon={<AlertTriangle className="w-6 h-6" />}
              title="Level B — Reported"
              text="Facility-reported data, potentially unverified or based on partial EU ETS coverage. Good confidence."
              accent="hsl(45, 90%, 50%)"
            />
            <FeatureCard
              icon={<HelpCircle className="w-6 h-6" />}
              title="Level C — Estimated"
              text="Estimated from proxy data, regional averages, or AI interpolation. Use with caution."
              accent="hsl(0, 70%, 55%)"
            />
          </div>
        </div>
      </Section>

      {/* ── 10. CTA ── */}
      <Section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-foreground mb-6">
              Ready to See the Full Picture?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Request a demo to see how CarbonMap fits your workflow.
            </p>
            <a
              href="https://calendly.com/carbonmap-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-background px-10 py-4 rounded-lg text-lg font-body font-semibold hover:opacity-90 transition-all glow-cyan-strong"
            >
              Request Demo →
            </a>
          </div>
        </div>
      </Section>

      {/* ── 11. FAQ ── */}
      <Section className="py-16 pb-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border/30">
                <AccordionTrigger className="font-body text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

const faqItems = [
  {
    q: "What data does CarbonMap cover?",
    a: "CarbonMap tracks 30,000+ industrial CO₂ emitters, 1,400+ capture installations, 113 storage sites, 41 CCS hubs, and transport infrastructure across 156 countries. Data includes facility-level emissions (fossil, biogenic, capturable), project status, capacity, timelines, operators, and partners.",
  },
  {
    q: "How is the data sourced?",
    a: "We combine AI-assisted extraction from public sources with manual expert verification and official registries (EU ETS, E-PRTR, national databases). Each data point is assigned a quality level (A: Verified, B: Reported, C: Estimated) so you always know the confidence level.",
  },
  {
    q: "How often is data updated?",
    a: "Project status updates are processed within 48 hours of official announcements (FID, groundbreaking, commissioning). Emissions data follows official registry update cycles — annual for EU ETS, triennial for E-PRTR. Carbon market prices are updated daily.",
  },
  {
    q: "How does CarbonMap compare to CaptureMap or other tools?",
    a: "CarbonMap is the only platform that integrates the complete CCS value chain — emitters, capture, transport, hubs, and storage — in a single view. Additionally, we offer carbon market intelligence with live ETS pricing, a CCS business case calculator, CO₂ engineering tools, and an AI-powered news feed. Other tools typically cover only emissions and capture, requiring multiple subscriptions to get the full picture.",
  },
  {
    q: "Is there an API or data export?",
    a: "Data export and API access are available for enterprise subscribers. Contact us for details.",
  },
  {
    q: "What does it cost?",
    a: "CarbonMap is currently in early access. Pricing depends on team size and requirements. Request a demo to discuss options.",
  },
  {
    q: "Who built CarbonMap?",
    a: "CarbonMap was built by professionals with 10+ years of experience in CCS project development, CO₂ transport infrastructure, energy transition strategy, and subsidy frameworks across Europe. We combine hands-on CCUS expertise with advanced data engineering.",
  },
];

export default Platform;
