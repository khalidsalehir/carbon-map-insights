import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DemoVideo from "@/components/DemoVideo";
import StatsBar from "@/components/StatsBar";
import LiveActivityFeed from "@/components/LiveActivityFeed";
import ValueChain from "@/components/ValueChain";
import WhyCarbonMap from "@/components/WhyCarbonMap";
import OurMission from "@/components/OurMission";
import Audience from "@/components/Audience";
import ComparisonTable from "@/components/ComparisonTable";
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
    <DemoVideo />
    <SectionDivider />
    <StatsBar />
    <SectionDivider />
    <LiveActivityFeed />
    <SectionDivider />
    <ValueChain />
    <SectionDivider />
    <WhyCarbonMap />
    <SectionDivider />
    <OurMission />
    <SectionDivider />
    <Audience />
    <SectionDivider />
    <ComparisonTable />
    <SectionDivider />
    <FinalCTA />
    <Footer />
  </div>
);

export default Index;
