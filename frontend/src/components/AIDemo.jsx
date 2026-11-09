import { ArrowRight, Sparkles } from "lucide-react";

export default function AIDemo() {
  const steps = [
    {
      id: 0,
      title: "Before",
      status: "Asymmetrical skin model",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
      overlay: null
    },
    {
      id: 1,
      title: "Processing",
      status: "Scanning 31 parameters...",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
      overlay: (
        <div className="absolute inset-0 flex flex-col justify-between overflow-hidden">
          {/* Deep blue/purple overall tint */}
          <div className="absolute inset-0 bg-[#0c002b]/70 backdrop-brightness-50 mix-blend-multiply"></div>
          {/* Neon purple glow overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#6366f1]/20 to-[#a855f7]/40 backdrop-saturate-150 mix-blend-color"></div>
          {/* Matrix mesh overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(168,85,247,0.4)_1px,_transparent_1px)] bg-[size:12px_12px] opacity-40"></div>
          
          <div className="absolute bottom-4 left-4 text-white/50 text-[10px] font-mono">
            01
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Results",
      status: "Analysis complete",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
      overlay: (
        <div className="absolute inset-0 bg-transparent font-sans">
          <div className="absolute inset-0 bg-white/5"></div>
          
          {/* Diagnostic Box 1 */}
          <div className="absolute top-[35%] left-[25%] border border-white/60 bg-white/10 w-[70px] h-[55px] flex items-end p-1">
            <span className="text-[6px] text-white/90">Pores</span>
          </div>
          
          {/* Diagnostic Box 2 */}
          <div className="absolute top-[45%] right-[25%] border border-white/60 bg-white/10 w-[45px] h-[60px] flex items-end p-1">
            <span className="text-[6px] text-white/90">Wrinkles</span>
          </div>
          
          {/* Graphic Lines overlay simulating tech UI */}
          <div className="absolute top-[20%] right-[10%] w-[30px] h-[30px] border-t border-r border-white/40"></div>
          <div className="absolute bottom-[20%] left-[10%] w-[30px] h-[30px] border-b border-l border-white/40"></div>
        </div>
      )
    }
  ];

  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12">
        <div className="w-full bg-[#0A0D14] text-white py-16 md:py-24 overflow-hidden rounded-[40px] relative">
          <div className="px-8 md:px-14 flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-8 w-full">
            
            {/* Left column info */}
            <div className="w-full xl:w-[25%] flex flex-col items-start shrink-0">
              <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-rose-500 mb-3">
                AI ANALYSIS DEMO
              </span>
              <h2 className="text-4xl md:text-[42px] font-semibold tracking-tight text-white leading-tight">
                See AI in action
              </h2>
            </div>

            {/* Right column: 3 state cards */}
            <div className="w-full xl:w-[75%] flex flex-col md:flex-row items-center justify-end gap-3 md:gap-4 relative xl:pr-10">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div 
                    className="w-full md:w-[220px] lg:w-[240px] aspect-[4/2.6] bg-[#111625] rounded-[20px] overflow-hidden relative group"
                  >
                    {/* Image Background */}
                    <img
                      src={step.image}
                      alt={step.title}
                      className="absolute inset-0 w-full h-full object-cover grayscale-[20%]"
                    />
                    {step.overlay}

                    {/* Dark Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>

                    {/* Card Header Content */}
                    <div className="absolute top-0 left-0 p-4 md:p-5 flex flex-col z-10 w-full h-full">
                      <div className="flex items-center gap-1.5 mb-1 text-white">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-90">
                          <path d="M12 2L2 22l10-4 10 4L12 2z" />
                        </svg>
                        <span className="text-[13px] font-semibold tracking-wide">
                          {step.title}
                        </span>
                      </div>
                      <span className="text-[9px] text-white/60 font-medium tracking-wide">
                        {step.status}
                      </span>
                    </div>
                  </div>

                  {/* Connecting Arrow */}
                  {index < steps.length - 1 && (
                    <div className="mx-2 md:mx-3 text-rose-500/80 hidden md:block">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" strokeWidth={2.5} />
                    </div>
                  )}
                </div>
              ))}

              {/* Decorative Sparkle Graphic */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-0 hidden md:block">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-[#1c2438]">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                </svg>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
