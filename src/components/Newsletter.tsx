import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState } from "react";

const Newsletter = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [email, setEmail] = useState("");

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className={`container mx-auto px-6 relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Stay Ahead of the <span className="text-gradient-cyan">CCS Market</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Weekly intelligence on CCS projects, policy changes, and market developments. No spam, unsubscribe anytime.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="flex gap-3 max-w-md mx-auto mb-6">
            <input
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 rounded-lg border border-border bg-muted/50 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-6 h-12 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity glow-cyan"
            >
              Subscribe
            </button>
          </form>

          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <span>📬 Weekly CCS briefing</span>
            <span>🚫 No spam, ever</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
