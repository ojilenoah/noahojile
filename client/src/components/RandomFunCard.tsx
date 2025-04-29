import { useState, useEffect } from "react";
import { funFacts } from "@/data/funFacts";
import { FaSyncAlt } from "react-icons/fa";

export default function RandomFunCard() {
  const [fact, setFact] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  // Initialize with a random fact
  useEffect(() => {
    setFact(funFacts[Math.floor(Math.random() * funFacts.length)]);
  }, []);

  const getNewFact = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // Get a new random fact different from the current one
    let newFact = fact;
    while (newFact === fact) {
      newFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    }
    
    // Fade out, change text, fade in
    setTimeout(() => {
      setFact(newFact);
      setTimeout(() => setIsAnimating(false), 300);
    }, 300);
  };

  return (
    <div 
      className="bg-cardBg p-0 h-full overflow-hidden border border-accent/20 card-rounded"
      style={{ borderColor: 'var(--border-accent-color, rgba(0, 117, 79, 0.25))' }}
    >
      <div 
        className="flex items-center px-4 py-2 border-b"
        style={{ borderColor: 'var(--border-accent-color, rgba(0, 117, 79, 0.25))' }}>
        <h2 className="text-base font-sequel theme-text-primary">FUN FACT</h2>
      </div>
      
      <div className="p-4 flex flex-col h-[calc(100%-38px)]">
        <div 
          className="border p-3 mb-3 flex-grow card-rounded"
          style={{ borderColor: 'var(--border-accent-color, rgba(0, 117, 79, 0.3))' }}>
          <p 
            className={`text-xs font-mono transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
          >
            <span className="theme-text-primary">❯</span> {fact}
          </p>
        </div>
        
        <button 
          onClick={getNewFact}
          className="text-[10px] font-sequel bg-accent/10 hover:bg-accent/15 text-foreground flex items-center justify-center w-full py-1.5 transition-colors card-rounded border border-accent/40"
          style={{ borderColor: 'var(--border-accent-color, rgba(0, 117, 79, 0.4))' }}
        >
          <FaSyncAlt className="mr-1 theme-text-primary" /> NEW FACT
        </button>
      </div>
    </div>
  );
}
