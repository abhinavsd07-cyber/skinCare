import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import image1 from "../assets/image.png";

export default function SkinConcerns() {
  const [sliderPos, setSliderPos] = useState(50);
  const [activeConcern, setActiveConcern] = useState("Acne");
  const sliderRef = useRef(null);
  const isDragging = useRef(false);

  const concerns = [
    { name: "Acne", detail: "Calmed by 84% in 3 weeks" },
    { name: "Wrinkles", detail: "Smoothed by 68% in 4 weeks" },
    { name: "Dark Spots", detail: "Brightened by 74% in 3 weeks" },
    { name: "Dry Skin", detail: "Hydration boosted by 92%" },
    { name: "Pigmentation", detail: "Evenness restored by 79%" },
    { name: "Uneven Tone", detail: "Tone balanced by 82%" }
  ];

  const handleMove = (clientX) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => {
      isDragging.current = false;
    };
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  const activeConcernObj = concerns.find(c => c.name === activeConcern) || concerns[0];

  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden relative" id="concerns">
      {/* Background ambient gradient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-purple-100/50 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* LEFT: Text & Interactive Concern Tags */}
          <div className="flex flex-col items-start w-full lg:w-[460px] flex-shrink-0">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/80 mb-5">
              <Sparkles className="w-3.5 h-3.5 text-[#9333EA]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7E22CE]">
                Skin Concerns We Analyze
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-extrabold tracking-tight text-[#0F172A] leading-[1.12] mb-5">
              We analyze 30+<br />skin concerns
            </h2>

            <p className="text-gray-500 text-sm md:text-base font-normal leading-relaxed mb-8">
              Drag the interactive comparison slider to see how AI-calibrated active formulations transform texture, tone, and skin barrier health.
            </p>

            {/* Tags grid — 3 columns */}
            <div className="grid grid-cols-3 gap-3 mb-6 w-full">
              {concerns.map((item) => {
                const isSelected = activeConcern === item.name;
                return (
                  <button
                    key={item.name}
                    onClick={() => setActiveConcern(item.name)}
                    className={`rounded-2xl px-3 py-3 text-[12px] sm:text-[13px] font-semibold text-center transition-all cursor-pointer whitespace-nowrap ${
                      isSelected
                        ? "bg-[#7E22CE] text-white shadow-md shadow-purple-500/25 scale-[1.03] border border-[#7E22CE]"
                        : "bg-white text-gray-800 border border-gray-200 hover:border-purple-300 hover:bg-purple-50/50 shadow-xs"
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>

            {/* Dynamic Active Concern Progress Banner */}
            <div className="w-full bg-[#FAF5FF] border border-purple-100 rounded-2xl p-4 mb-8 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-bold text-gray-900">
                  Targeted: {activeConcernObj.name}
                </span>
              </div>
              <span className="text-[11px] font-bold text-[#7E22CE] bg-white px-2.5 py-1 rounded-lg border border-purple-100 shadow-2xs">
                {activeConcernObj.detail}
              </span>
            </div>

            <Link
              to="/analysis"
              className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-[#7E22CE] transition-colors group no-underline"
            >
              <span>Analyze your skin concerns</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* RIGHT: The ONLY Interactive Before / After Comparison Slider */}
          <div className="relative w-full lg:w-[620px] xl:w-[680px] flex items-center justify-center">

            {/* The Before / After Comparison Frame */}
            <div 
              ref={sliderRef}
              onMouseDown={() => { isDragging.current = true; }}
              onTouchStart={() => { isDragging.current = true; }}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative w-full max-w-[560px] aspect-[4/4.2] sm:aspect-[4/4] rounded-[36px] overflow-hidden shadow-2xl shadow-purple-900/10 border-4 border-white select-none cursor-ew-resize bg-gray-50"
            >
              {/* Layer 1: AFTER / RENEWED (Full Color, Radiant Skin - Base Canvas) */}
              <div className="absolute inset-0">
                <img 
                  src={image1} 
                  alt="After Clinical Skincare Routine" 
                  className="w-full h-full object-contain object-bottom pointer-events-none filter brightness-[1.03] saturate-[1.05]"
                />

                {/* Floating "AFTER" Pill Badge */}
                <div className="absolute bottom-5 right-5 z-10 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-white/80 shadow-md pointer-events-none">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-gray-900 tracking-wider uppercase">
                    After · Restored
                  </span>
                </div>
              </div>

              {/* Layer 2: BEFORE / RAW SCAN (Clipped by sliderPos) */}
              <div 
                className="absolute inset-0 z-10 overflow-hidden" 
                style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
              >
                <img 
                  src={image1} 
                  alt="Before Treatment Diagnostic Scan" 
                  className="w-full h-full object-contain object-bottom pointer-events-none filter contrast-125 saturate-75 brightness-95"
                />

                {/* Subtle Diagnostic Tint & Matrix Texture */}
                <div className="absolute inset-0 bg-indigo-950/15 mix-blend-multiply pointer-events-none" />

                {/* Subtle Clinical Focus Reticle */}
                <div className="absolute top-[38%] left-[26%] border-2 border-dashed border-rose-400/90 bg-rose-500/15 rounded-2xl w-24 h-20 p-2 flex flex-col justify-between pointer-events-none shadow-sm">
                  <span className="text-[8px] font-mono font-bold text-rose-300 uppercase">Concern Detected</span>
                  <span className="text-[9px] font-bold text-white bg-rose-600/90 px-1.5 py-0.5 rounded-md inline-block self-start">
                    {activeConcern}
                  </span>
                </div>

                {/* Floating "BEFORE" Pill Badge */}
                <div className="absolute bottom-5 left-5 z-20 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 shadow-md pointer-events-none">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  <span className="text-[10px] font-bold text-white tracking-wider uppercase">
                    Before · Active Concern
                  </span>
                </div>
              </div>

              {/* Laser-Cut Divider Line */}
              <div 
                className="absolute top-0 bottom-0 z-30 w-0.5 bg-white cursor-ew-resize shadow-[0_0_12px_rgba(255,255,255,0.95)]"
                style={{ left: `${sliderPos}%` }}
              >
                {/* Glowing Laser Thumb Handle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-2 border-purple-200 flex items-center justify-center shadow-2xl shadow-purple-600/30 ring-4 ring-[#8B5CF6]/30 pointer-events-none transition-transform hover:scale-110">
                  <div className="flex items-center gap-1">
                    <div className="w-0.5 h-3.5 bg-[#7E22CE] rounded-full" />
                    <div className="w-0.5 h-3.5 bg-[#7E22CE] rounded-full" />
                  </div>
                </div>
              </div>

            </div>

            {/* Signature Floating Card 1: Skin Health Score (Top Left) */}
            <div className="hidden sm:flex absolute -top-4 -left-6 md:-left-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-gray-150 flex-col items-center gap-2.5 w-[140px] z-40 pointer-events-none">
              <span className="text-[10px] font-bold text-gray-500 text-center uppercase tracking-wider">
                Skin Health Score
              </span>
              <div className="relative w-[68px] h-[68px] flex items-center justify-center">
                <svg width="68" height="68" viewBox="0 0 36 36" style={{ transform: "rotate(-90deg)", position: "absolute" }}>
                  <path strokeWidth="3" stroke="#F3F4F6" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path strokeWidth="3" strokeDasharray="85, 100" strokeLinecap="round" stroke="#22C55E" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <span className="font-extrabold text-[20px] text-gray-900 z-[1]">85</span>
              </div>
              <div className="flex flex-col items-center leading-tight">
                <span className="text-[13px] font-extrabold text-gray-900">Good</span>
                <span className="text-[10px] text-emerald-600 font-semibold">Keep it up!</span>
              </div>
            </div>

            {/* Signature Floating Card 2: Top Concerns (Bottom Right) */}
            <div className="hidden sm:flex absolute -bottom-5 -right-4 md:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-gray-150 w-[168px] z-40 pointer-events-none flex-col">
              <p className="text-[9px] font-bold text-gray-400 tracking-widest uppercase mb-3">Top Concerns</p>
              <ul className="list-none m-0 p-0 flex flex-col gap-2">
                {["Visible Pores", "Uneven Tone", "Fine Lines"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                    <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}