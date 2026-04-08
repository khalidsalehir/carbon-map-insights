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
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background noise-overlay">
    <Navbar />
    <HeroSection />
    <StatsBar />
    <LiveActivityFeed />
    <ValueChain />
    <WhyCarbonMap />
    <FeaturesGrid />
    <OurMission />
    <Audience />
    <ComparisonTable />
    <Pricing />
    <FinalCTA />
    <Newsletter />
    <Footer />
  </div>
);

export default Index;
