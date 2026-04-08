import { Globe } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/20 py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Globe className="w-5 h-5 text-primary" />
          <span className="text-sm text-muted-foreground">
            © 2026 CarbonMap · HY Ventures BV · Built in the Netherlands 🇳🇱
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
