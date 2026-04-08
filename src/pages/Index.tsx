import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import ValueChain from "@/components/ValueChain";
import FeaturesGrid from "@/components/FeaturesGrid";
import Audience from "@/components/Audience";
import ComparisonTable from "@/components/ComparisonTable";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background noise-overlay">
    <Navbar />
    <HeroSection />
    <StatsBar />
    <ValueChain />
    <FeaturesGrid />
    <Audience />
    <ComparisonTable />
    <Pricing />
    <FinalCTA />
    <Footer />
  </div>
);

export default Index;
