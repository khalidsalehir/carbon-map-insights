import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/20 py-12">
    <div className="container mx-auto px-6 flex items-center justify-center gap-6">
      <span className="font-body text-sm text-muted-foreground">
        © 2026 CarbonMap · Built in the Netherlands 🇳🇱
      </span>
      <Link to="/platform" className="font-body text-sm text-primary hover:text-primary/80 transition-colors">
        Platform →
      </Link>
    </div>
  </footer>
);

export default Footer;
