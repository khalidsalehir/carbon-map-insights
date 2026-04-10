import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import ValueChain from "@/components/ValueChain";
import PlatformHighlights from "@/components/PlatformHighlights";
import ComparisonTable from "@/components/ComparisonTable";
import Audience from "@/components/Audience";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const SectionDivider = () => (
  <div className="h-px w-full bg-gradient-to-r from-transparent via-border/30 to-transparent" />
);

const Index = () => (
  <div className="min-h-screen bg-background noise-overlay">
    <Navbar />
    <HeroSection />
    <SectionDivider />
    <StatsBar />
    <SectionDivider />
    <ValueChain />
    <SectionDivider />
    <PlatformHighlights />
    <SectionDivider />
    <ComparisonTable />
    <SectionDivider />
    <Audience />
    <SectionDivider />
    <FinalCTA />
    <Footer />
  </div>
);

export default Index;
