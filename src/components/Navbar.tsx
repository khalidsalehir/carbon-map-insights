import { Globe } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <Globe className="w-7 h-7 text-primary transition-transform group-hover:rotate-12" />
          <span className="text-lg font-display font-bold text-foreground">CarbonMap</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#hero" className="font-body text-[15px] font-medium text-muted-foreground hover:text-foreground transition-colors">
            Platform
          </a>
          <a href="#features" className="font-body text-[15px] font-medium text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
        </div>
        <a
          href="mailto:info@carbonmap.nl?subject=CarbonMap%20Demo%20Request"
          className="border border-primary text-primary px-5 py-2 rounded-lg font-body text-[15px] font-medium hover:bg-primary/10 transition-all"
        >
          Request Demo →
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
