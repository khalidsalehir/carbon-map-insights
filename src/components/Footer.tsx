import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/20 py-16">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 max-w-4xl mx-auto">
        <div>
          <h4 className="font-display text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
            CarbonMap
          </h4>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            The complete CCS intelligence platform for enterprise teams.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
            Contact
          </h4>
          <ul className="space-y-2 font-body text-sm text-muted-foreground">
            <li>
              <a
                href="mailto:info@carbonmap.nl"
                className="hover:text-primary transition-colors"
              >
                info@carbonmap.nl
              </a>
            </li>
            <li>Rotterdam, Netherlands</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
            Legal
          </h4>
          <ul className="space-y-2 font-body text-sm text-muted-foreground">
            <li>
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/cookies" className="hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/20 pt-8 text-center">
        <span className="font-body text-sm text-muted-foreground">
          © 2026 CarbonMap · Rotterdam, NL
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
