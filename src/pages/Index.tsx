import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import LiveActivityFeed from "@/components/LiveActivityFeed";
import ValueChain from "@/components/ValueChain";
import WhyCarbonMap from "@/components/WhyCarbonMap";
import FeaturesGrid from "@/components/FeaturesGrid";
import OurMission from "@/components/OurMission";
import Audience from "@/components/Audience";
import ComparisonTable from "@/components/ComparisonTable";
import FinalCTA from "@/components/FinalCTA";
import Newsletter from "@/components/Newsletter";
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
    <LiveActivityFeed />
    <SectionDivider />
    <ValueChain />
    <SectionDivider />
    <WhyCarbonMap />
    <SectionDivider />
    <FeaturesGrid />
    <SectionDivider />
    <OurMission />
    <SectionDivider />
    <Audience />
    <SectionDivider />
    <ComparisonTable />
    <SectionDivider />
    <FinalCTA />
    <SectionDivider />
    <Newsletter />
    <Footer />
  </div>
);

export default Index;
