import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DemoVideo from "@/components/DemoVideo";
import StatsBar from "@/components/StatsBar";
import ValueChain from "@/components/ValueChain";
import ThreeMoats from "@/components/ThreeMoats";
import OurMission from "@/components/OurMission";
import Audience from "@/components/Audience";
import WhatWeDo from "@/components/WhatWeDo";
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
    <ValueChain />
    <SectionDivider />
    <ThreeMoats />
    <SectionDivider />
    <OurMission />
    <SectionDivider />
    <Audience />
    <SectionDivider />
    <WhatWeDo />
    <SectionDivider />
    <FinalCTA />
    <Footer />
  </div>
);

export default Index;
