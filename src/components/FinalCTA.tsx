const FinalCTA = () => (
  <section className="py-32 relative overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
    </div>
    <div className="container mx-auto px-6 relative z-10 text-center">
      <h2 className="text-3xl sm:text-5xl font-display font-bold text-foreground mb-8">
        Ready to See the Full<br />CCS Picture?
      </h2>
      <a href="#" className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-lg text-lg font-medium hover:opacity-90 transition-all glow-cyan-strong">
        Open Platform →
      </a>
    </div>
  </section>
);

export default FinalCTA;
