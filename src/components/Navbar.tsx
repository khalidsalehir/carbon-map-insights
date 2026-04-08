import { Globe } from "lucide-react";

const navLinks = ["Platform", "Data", "Features", "Pricing"];

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
    <div className="container mx-auto px-6 h-16 flex items-center justify-between">
      <a href="#" className="flex items-center gap-2 group">
        <Globe className="w-7 h-7 text-primary transition-transform group-hover:rotate-12" />
        <span className="text-lg font-display font-bold text-foreground">CarbonMap</span>
      </a>
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {link}
          </a>
        ))}
      </div>
      <a href="#" className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
        Open Platform →
      </a>
    </div>
  </nav>
);

export default Navbar;
