import { Globe, ChevronDown } from "lucide-react";
import { useState } from "react";

const dataSubLinks = [
  { label: "Capture Installations", href: "#capture" },
  { label: "Storage Sites", href: "#storage" },
  { label: "Transport & Pipelines", href: "#transport" },
  { label: "Hubs & Terminals", href: "#hubs" },
  { label: "Emitters", href: "#emitters" },
];

const Navbar = () => {
  const [dataOpen, setDataOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <Globe className="w-7 h-7 text-primary transition-transform group-hover:rotate-12" />
          <span className="text-lg font-display font-bold text-foreground">CarbonMap</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#platform" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Platform
          </a>

          {/* Data dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDataOpen(true)}
            onMouseLeave={() => setDataOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
              Data
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dataOpen ? "rotate-180" : ""}`} />
            </button>
            {dataOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                <div className="glass-card py-2 min-w-[220px] shadow-xl shadow-black/30">
                  {dataSubLinks.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
        </div>
        <a href="#" className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
          Open Platform →
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
