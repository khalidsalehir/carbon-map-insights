import { Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Globe className="w-7 h-7 text-primary transition-transform group-hover:rotate-12" />
          <span className="text-lg font-display font-bold text-foreground">CarbonMap</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`font-body text-[15px] font-medium transition-colors ${isHome ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
          >
            Home
          </Link>
          <Link
            to="/platform"
            className={`font-body text-[15px] font-medium transition-colors ${!isHome ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
          >
            Platform
          </Link>
        </div>
        <a
          href="mailto:info@carbonmap.nl?subject=CarbonMap%20Early%20Access%20Request"
          className="border border-primary text-primary px-5 py-2 rounded-lg font-body text-[15px] font-medium hover:bg-primary/10 transition-all"
        >
          Request Demo →
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
