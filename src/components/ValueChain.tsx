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
    <section ref={ref} className="py-20" style={{ backgroundColor: 'hsl(220 40% 4%)' }}>
      <div className="max-w-[1400px] mx-auto px-5">
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-[42px] font-display font-bold text-foreground mb-4">
            Complete Value Chain Coverage
          </h2>
          <p className="text-muted-foreground text-lg max-w-[600px] mx-auto font-body">
            Track CO₂ from industrial source to permanent geological storage
          </p>
        </div>

        <div className={`mb-8 rounded-xl overflow-hidden ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.15s' }}>
          <img
            src={valueChainFlow}
            alt="CCS value chain: from industrial emitters through capture, transport, and hubs to geological storage"
            className="w-full h-auto block"
          />
        </div>

        <div className={`grid grid-cols-5 gap-5 text-center ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.25s' }}>
          {stages.map((label) => (
            <span key={label} className="font-body text-[15px] font-medium tracking-wide text-accent">
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueChain;
