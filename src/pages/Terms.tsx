import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => (
  <div className="min-h-screen bg-background noise-overlay">
    <Navbar />
    <main className="pt-28 pb-24">
      <article className="container mx-auto px-6 max-w-[800px]">
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-3">
          Terms of Service
        </h1>
        <p className="text-sm text-muted-foreground mb-12 font-mono">
          Last updated: 17 April 2026
        </p>

        <div className="prose prose-invert max-w-none font-body text-muted-foreground leading-relaxed space-y-6">
          <p>
            These Terms of Service ("Terms") govern your access to and use of the
            CarbonMap platform, website, and related services (collectively, the
            "Service"), operated by CarbonMap B.V., a company registered in
            Rotterdam, the Netherlands.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using the Service, you agree to be bound by these
            Terms. If you are using the Service on behalf of an organisation,
            you represent that you have authority to bind that organisation.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">
            2. Use of the Service
          </h2>
          <p>
            CarbonMap grants you a limited, non-exclusive, non-transferable, and
            revocable licence to use the Service for your internal business
            purposes during the term of your subscription. The Service is intended
            for professional use within the carbon capture and storage industry.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">
            3. Acceptable Use
          </h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Reverse engineer, decompile, or attempt to derive source code from the Service.</li>
            <li>Resell, sublicense, or redistribute the data or platform to third parties.</li>
            <li>Use automated systems (scrapers, bots) to extract data beyond rate limits.</li>
            <li>Upload malicious code or attempt to disrupt the Service.</li>
            <li>Use the Service in violation of any applicable law or regulation.</li>
            <li>Misrepresent your identity or affiliation when using the Service.</li>
          </ul>

          <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">
            4. Intellectual Property
          </h2>
          <p>
            All content, datasets, software, and trademarks made available through
            the Service are the property of CarbonMap or its licensors and are
            protected by copyright and other intellectual property laws. No rights
            are granted to you other than those expressly set out in these Terms.
            Aggregated data outputs you generate using the Service may be used
            internally; redistribution requires our prior written consent.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">
            5. Subscriptions and Payment
          </h2>
          <p>
            Paid subscriptions are billed in advance on a recurring basis as
            agreed in your order form. Fees are exclusive of VAT and other
            applicable taxes. Late payments may result in suspension of access.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">
            6. Disclaimers
          </h2>
          <p>
            The Service is provided on an "as is" and "as available" basis.
            CarbonMap data is compiled from public sources, official registries,
            and AI-assisted extraction; while we strive for accuracy, we make no
            warranties as to completeness, reliability, or fitness for a
            particular purpose. Investment, regulatory, or operational decisions
            based on the Service are made at your own risk.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">
            7. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by law, CarbonMap shall not be liable
            for any indirect, incidental, special, consequential, or punitive
            damages, including loss of profits, revenue, data, or goodwill.
            Our total aggregate liability for any claim arising out of these
            Terms shall not exceed the fees paid by you in the twelve months
            preceding the claim.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">
            8. Termination
          </h2>
          <p>
            We may suspend or terminate your access to the Service immediately if
            you breach these Terms. Either party may terminate a subscription at
            the end of its term with 30 days' written notice.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">
            9. Governing Law and Jurisdiction
          </h2>
          <p>
            These Terms are governed by the laws of the Netherlands. Any dispute
            arising in connection with these Terms shall be subject to the
            exclusive jurisdiction of the competent courts in Rotterdam, the
            Netherlands.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">
            10. Changes to These Terms
          </h2>
          <p>
            We may revise these Terms from time to time. Material changes will be
            communicated to subscribers in advance. Continued use of the Service
            after changes take effect constitutes acceptance of the revised Terms.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">
            11. Contact
          </h2>
          <p>
            For questions about these Terms, contact{" "}
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

export default Terms;
