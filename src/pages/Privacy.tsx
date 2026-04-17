import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => (
  <div className="min-h-screen bg-background noise-overlay">
    <Navbar />
    <main className="pt-28 pb-24">
      <article className="container mx-auto px-6 max-w-[800px]">
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-3">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-12 font-mono">
          Last updated: 17 April 2026
        </p>

        <div className="prose prose-invert max-w-none font-body text-muted-foreground leading-relaxed space-y-6">
          <p>
            CarbonMap ("we", "our", or "us") respects your privacy and is committed
            to protecting your personal data. This privacy policy explains how we
            collect, use, and safeguard information when you visit carbonmap.nl or
            use our intelligence platform.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">
            1. Data We Collect
          </h2>
          <p>
            We collect the following categories of personal data:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-foreground">Contact information:</strong> name, email address, company, and job title submitted through demo requests or correspondence.</li>
            <li><strong className="text-foreground">Account data:</strong> credentials, preferences, and usage logs when you access the platform.</li>
            <li><strong className="text-foreground">Technical data:</strong> IP address, browser type, device information, and pages visited via standard web analytics.</li>
            <li><strong className="text-foreground">Communications:</strong> emails, meeting notes, and support tickets you exchange with our team.</li>
          </ul>

          <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">
            2. How We Use Your Data
          </h2>
          <p>We process personal data to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, maintain, and improve the CarbonMap platform.</li>
            <li>Respond to demo requests, sales inquiries, and customer support tickets.</li>
            <li>Send service-related communications and, where permitted, marketing updates you may opt out of at any time.</li>
            <li>Comply with legal, accounting, and regulatory obligations under Dutch and EU law.</li>
            <li>Detect, prevent, and address technical issues, fraud, or abuse.</li>
          </ul>

          <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">
            3. Legal Basis for Processing
          </h2>
          <p>
            We rely on the following legal bases under the EU General Data
            Protection Regulation (GDPR): performance of a contract, our
            legitimate interests in operating and growing the platform, your
            consent (where applicable), and compliance with legal obligations.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">
            4. Third-Party Services
          </h2>
          <p>
            We share limited personal data with carefully selected processors
            that help us deliver the service:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-foreground">Calendly:</strong> meeting scheduling for demo bookings.</li>
            <li><strong className="text-foreground">Resend:</strong> transactional and newsletter email delivery.</li>
            <li><strong className="text-foreground">Vercel Analytics:</strong> aggregated, privacy-friendly traffic measurement.</li>
            <li><strong className="text-foreground">Cloud hosting providers:</strong> infrastructure within the EU/EEA.</li>
          </ul>
          <p>
            Each processor is bound by a Data Processing Agreement and processes
            data only on our documented instructions.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">
            5. Data Retention
          </h2>
          <p>
            We retain personal data only for as long as necessary to fulfil the
            purposes for which it was collected, including legal, accounting, or
            reporting requirements. Inactive marketing contacts are deleted after
            24 months. Account data is retained for the duration of your
            subscription plus 12 months.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">
            6. International Transfers
          </h2>
          <p>
            Where data is transferred outside the European Economic Area, we
            ensure appropriate safeguards are in place, such as Standard
            Contractual Clauses approved by the European Commission.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">
            7. Your Rights Under GDPR
          </h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access the personal data we hold about you.</li>
            <li>Request correction of inaccurate or incomplete data.</li>
            <li>Request erasure of your data ("right to be forgotten").</li>
            <li>Restrict or object to specific processing activities.</li>
            <li>Receive your data in a portable, machine-readable format.</li>
            <li>Withdraw consent where processing is based on consent.</li>
            <li>Lodge a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens).</li>
          </ul>

          <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">
            8. Security
          </h2>
          <p>
            We implement appropriate technical and organisational measures to
            protect personal data against unauthorised access, alteration,
            disclosure, or destruction. This includes encryption in transit and
            at rest, role-based access control, and regular security reviews.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">
            9. Changes to This Policy
          </h2>
          <p>
            We may update this privacy policy from time to time. Material changes
            will be communicated via email or a prominent notice on the platform.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground mt-10 mb-4">
            10. Contact
          </h2>
          <p>
            For questions about this policy or to exercise your rights, contact{" "}
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

export default Privacy;
