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
    <section ref={ref} className="py-16" style={{ backgroundColor: 'hsl(220 40% 4%)' }}>
      <div className="max-w-[1200px] mx-auto px-5">
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-[40px] font-display font-bold text-foreground mb-4">
            Complete Value Chain Coverage
          </h2>
          <p className="text-muted-foreground text-[17px] max-w-[650px] mx-auto font-body">
            Track CO₂ from industrial source to permanent geological storage
          </p>
        </div>

        <div
          className={`mb-6 rounded-2xl overflow-hidden ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.15s', boxShadow: '0 8px 32px rgba(34, 211, 238, 0.12)' }}
        >
          <img
            src={valueChainFlow}
            alt="CCS value chain: from industrial emitters through capture, transport, and hubs to geological storage"
            className="w-full block object-cover max-h-[280px]"
          />
        </div>

        <div className={`grid grid-cols-5 gap-4 text-center ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.25s' }}>
          {stages.map((label) => (
            <span key={label} className="font-body text-sm font-medium tracking-wide text-accent uppercase">
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueChain;
