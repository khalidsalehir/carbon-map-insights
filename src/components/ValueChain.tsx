import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import valueChainFlow from "@/assets/value-chain-flow.png";

const stages = [
  "Industrial Emitters",
  "Capture Installation",
  "Pipeline Transport",
  "Hub & Terminal",
  "Geological Storage",
];

const ValueChain = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="relative py-20" style={{ backgroundColor: 'hsl(220 40% 4%)' }}>
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Complete Value Chain Coverage
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Track CO₂ from industrial source to permanent geological storage.
          </p>
        </div>

        <div className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.15s' }}>
          <img
            src={valueChainFlow}
            alt="CCS value chain: from industrial emitters through capture, transport, and hubs to geological storage"
            className="w-full max-w-5xl mx-auto h-auto"
            style={{
              mask: 'linear-gradient(to right, transparent 0%, white 5%, white 95%, transparent 100%)',
              WebkitMask: 'linear-gradient(to right, transparent 0%, white 5%, white 95%, transparent 100%)',
            }}
          />
        </div>

        <div className={`flex justify-between max-w-5xl mx-auto mt-6 px-4 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.25s' }}>
          {stages.map((label) => (
            <span key={label} className="text-xs sm:text-sm font-body text-muted-foreground text-center flex-1">
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueChain;
