import { useScrollAnimation, useCountUp } from "@/hooks/use-scroll-animation";

const stats = [
  { value: 30000, suffix: "+", label: "Emitters", color: "text-primary" },
  { value: 1500, suffix: "+", label: "Capture Projects", color: "text-primary" },
  { value: 113, suffix: "", label: "Storage Sites", color: "text-primary" },
  { value: 45, suffix: "+", label: "CCS Hubs", color: "text-primary" },
  { value: 150, suffix: "+", label: "Countries", color: "text-primary" },
];

const StatItem = ({ stat, isVisible }: { stat: typeof stats[0]; isVisible: boolean }) => {
  const count = useCountUp(stat.value, 2000, isVisible);
  return (
    <div className="text-center space-y-1">
      <div className={`text-3xl sm:text-4xl font-display font-bold ${stat.color}`}>
        {count.toLocaleString()}{stat.suffix}
      </div>
      <div className="text-sm text-muted-foreground">{stat.label}</div>
    </div>
  );
};

const StatsBar = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="relative py-12">
      <div className="container mx-auto px-6">
        <div className="glass-card p-8 grid grid-cols-2 md:grid-cols-5 gap-8 glow-cyan" style={{ background: 'linear-gradient(135deg, hsl(220 35% 8% / 0.8), hsl(215 40% 10% / 0.6))' }}>
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
