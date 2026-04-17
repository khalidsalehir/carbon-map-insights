import { Globe, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const Navbar = () => {
  const location = useLocation();
  const isOnPlatform = location.pathname === "/platform";
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Globe className="w-7 h-7 text-primary transition-transform group-hover:rotate-12" />
          <span className="text-lg font-display font-bold text-foreground">Carbon<span style={{ color: '#22d3ee' }}>Map</span></span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/platform"
            className={`font-body text-[15px] font-medium border border-white/15 rounded-lg px-5 py-2 text-white hover:border-white/30 transition-all ${
              isOnPlatform ? "border-white/30" : ""
            }`}
          >
            Platform
          </Link>
          <a
            href="https://calendly.com/carbonmap-info/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary text-primary px-5 py-2 rounded-lg font-body text-[15px] font-medium hover:bg-primary/10 transition-all"
          >
            Request Demo →
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="p-2 text-foreground" aria-label="Open menu">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-border w-64">
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <div className="flex flex-col gap-6 mt-8">
                <Link
                  to="/platform"
                  onClick={() => setOpen(false)}
                  className={`font-body text-lg font-medium border border-white/15 rounded-lg px-4 py-2 text-center text-white hover:border-white/30 transition-all ${
                    isOnPlatform ? "border-white/30" : ""
                  }`}
                >
                  Platform
                </Link>
                <a
                  href="https://calendly.com/carbonmap-info/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="border border-primary text-primary px-5 py-2 rounded-lg font-body text-base font-medium hover:bg-primary/10 transition-all text-center"
                >
                  Request Demo →
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
