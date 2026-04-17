import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cookies = () => (
  <div className="min-h-screen bg-background noise-overlay">
    <Navbar />
    <main className="pt-28 pb-24">
      <article className="container mx-auto px-6 max-w-[800px]">
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-3">
          Cookie Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-12 font-mono">
          Last updated: 17 April 2026
        </p>

        <div className="prose prose-invert max-w-none font-body text-muted-foreground leading-relaxed space-y-6">
          <p>
            This Cookie Policy explains how CarbonMap uses cookies and similar
            tracking technologies on carbonmap.nl and within the CarbonMap
            platform. It should be read alongside our Privacy Policy.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">
            1. What Are Cookies?
          </h2>
          <p>
            Cookies are small text files placed on your device when you visit a
            website. They allow the site to remember your preferences, maintain
            sessions, and gather aggregated usage data. Similar technologies
            include local storage, pixels, and session identifiers.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">
            2. Types of Cookies We Use
          </h2>
          <h3 className="text-lg font-display font-semibold text-foreground mt-6 mb-2">
            Strictly Necessary Cookies
          </h3>
          <p>
            These cookies are essential for the platform to function. They enable
            authentication, session management, security features, and load
            balancing. The Service cannot operate without them, and they do not
            require consent.
          </p>

          <h3 className="text-lg font-display font-semibold text-foreground mt-6 mb-2">
            Analytics Cookies
          </h3>
          <p>
            We use privacy-friendly analytics (Vercel Analytics) to understand
            aggregated traffic patterns — pages viewed, devices used, and
            referral sources. These cookies do not identify individual visitors
            and no data is sold to advertisers.
          </p>

          <h3 className="text-lg font-display font-semibold text-foreground mt-6 mb-2">
            Functional Cookies
          </h3>
          <p>
            These remember preferences such as theme, language, and recently
            viewed projects to improve your experience.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">
            3. Third-Party Cookies
          </h2>
          <p>
            Some cookies are set by third-party services we embed:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-foreground">Vercel Analytics:</strong> aggregated traffic measurement.</li>
            <li><strong className="text-foreground">Calendly:</strong> set when you open the demo booking widget.</li>
            <li><strong className="text-foreground">Cloud infrastructure providers:</strong> session and security cookies for platform stability.</li>
          </ul>
          <p>
            These third parties have their own privacy and cookie policies, which
            we recommend reviewing.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">
            4. How to Manage Cookies
          </h2>
          <p>
            Most browsers allow you to control cookies through their settings —
            you can block, delete, or be notified before cookies are set.
            Disabling strictly necessary cookies may impair platform functionality.
            Useful links:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Chrome: Settings → Privacy and security → Cookies and other site data</li>
            <li>Firefox: Preferences → Privacy & Security → Cookies and Site Data</li>
            <li>Safari: Preferences → Privacy → Manage Website Data</li>
            <li>Edge: Settings → Cookies and site permissions</li>
          </ul>

          <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">
            5. Do Not Track
          </h2>
          <p>
            Our analytics provider respects browser-level "Do Not Track" signals
            and does not collect identifying information from visitors who have
            this setting enabled.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">
            6. Changes to This Policy
          </h2>
          <p>
            We may update this Cookie Policy as our practices evolve. Material
            changes will be communicated through the platform or via email.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">
            7. Contact
          </h2>
          <p>
            For questions about this policy, contact{" "}
            <a href="mailto:info@carbonmap.nl" className="text-primary hover:underline">
              info@carbonmap.nl
            </a>.
          </p>
        </div>
      </article>
    </main>
    <Footer />
  </div>
);

export default Cookies;
