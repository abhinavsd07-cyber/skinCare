import { useEffect, useRef, useState } from "react";
import girlVideo from "../../assets/girl.mp4";

// Custom hook for scroll-triggered animations
export function useFadeIn() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

export function FadeSection({ children, className = "" }) {
  const [ref, visible] = useFadeIn();
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

// ── Nav ────────────────────────────────────────────────────────────────────────
export function Nav() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-transparent">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L13.5 9.5L21 12L13.5 14.5L12 22L10.5 14.5L3 12L10.5 9.5L12 2Z" fill="#C084FC"/>
          <path d="M5 5L9.5 9.5M19 5L14.5 9.5M19 19L14.5 14.5M5 19L9.5 14.5" stroke="#C084FC" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
        <span className="font-semibold text-2xl tracking-tight text-gray-900">
          Nuvé
        </span>
      </div>

      {/* Center Links */}
      <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0 font-medium text-[14px] text-gray-700">
        {["Explore", "Your Skin", "Transformations", "AI Guidance", "Philosophy"].map((item) => (
          <li key={item}>
            <a href="#" className="hover:text-purple-600 transition-colors no-underline text-gray-700">
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Right Buttons */}
      <div className="flex items-center gap-3">
        <button className="px-5 py-2.5 rounded-xl border border-gray-300 text-[14px] font-medium text-gray-900 hover:bg-gray-50 transition-colors bg-white">
          Contact Us
        </button>
        <button className="px-5 py-2.5 rounded-xl bg-[#1A1A1A] text-white text-[13px] font-medium flex items-center gap-2 hover:bg-black transition-colors leading-tight">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 mt-0.5">
            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.33-.85 3.73-.78 1.44.06 2.53.64 3.28 1.6-3.32 1.83-2.67 5.75.52 6.94-1.12 2.05-2.12 3.65-2.61 4.41zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
          </svg>
          <span>
            Download on the<br/>
            <span className="text-[11px] font-semibold">App Store</span>
          </span>
        </button>
      </div>
    </nav>
  );
}

// ── Hero ───────────────────────────────────────────────────────────────────────
export function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden">

      {/* Background: video centered, with strong white fade on left so text stays clean */}
      <div className="absolute inset-0">
        {/* White base so anything not covered by video is white */}
        <div className="absolute inset-0 bg-white" />
        <video
          src={girlVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-contain object-center"
          style={{
            maskImage: "linear-gradient(to bottom, black 72%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 72%, transparent 100%)"
          }}
        />
        {/* Strong left-side white fade so headline text sits on clean white, not over the face */}
        <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-white via-white to-transparent" style={{ width: "38%" }} />
        {/* Right-side gentle fade for stats legibility */}
        <div className="absolute inset-y-0 right-0 bg-gradient-to-l from-white/75 to-transparent" style={{ width: "26%" }} />
      </div>

      {/* Content flexbox on top of background */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 min-h-screen flex flex-col lg:flex-row items-center justify-between pt-32 lg:pt-24 pb-16 gap-12 lg:gap-8">

        {/* Left: Text Content */}
        <div className="flex flex-col items-start justify-center w-full lg:max-w-[500px] mt-10 lg:mt-0">
          {/* Trust Badge */}
          <div className="flex items-center gap-2 bg-white rounded-full border border-gray-800 py-1.5 px-3 mb-8 shadow-sm">
            <div className="flex -space-x-1.5">
              <img src="https://i.pravatar.cc/100?img=1" alt="User" className="w-5 h-5 rounded-full border-2 border-white" />
              <img src="https://i.pravatar.cc/100?img=2" alt="User" className="w-5 h-5 rounded-full border-2 border-white" />
              <img src="https://i.pravatar.cc/100?img=3" alt="User" className="w-5 h-5 rounded-full border-2 border-white" />
            </div>
            <span className="text-[11px] font-medium text-gray-600">
              Trusted by <strong className="text-gray-900">9,876+ users</strong>
            </span>
          </div>

          <h1 className="text-3xl md:text-[4.5rem] leading-[0.95] tracking-tight font-medium text-gray-900 mb-6">
            Unlock <br/>your skin's <br/>potential
          </h1>

          <p className="text-gray-500 text-base max-w-[280px] mb-10 font-normal leading-relaxed">
            Our AI scans your face and shows what can be improved
          </p>

          <button className="bg-[#F3E8FF] text-[#5B21B6] font-semibold text-[15px] px-8 py-4 rounded-xl hover:bg-[#EDE9FE] transition-colors">
            Analyze Skin
          </button>
        </div>

        {/* Center: empty spacer for desktop to allow video to show through clearly */}
        <div className="hidden lg:block w-[100px] xl:w-[250px] flex-shrink-0 pointer-events-none"></div>

        {/* Right: Stats */}
        <div className="flex flex-row lg:flex-col justify-center lg:justify-center items-start lg:items-end gap-8 lg:gap-12 w-full lg:w-auto flex-wrap lg:pr-4">
          {/* Stat 1 */}
          <div className="flex items-center gap-4 lg:gap-5">
            <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-gray-400">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div className="text-left">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-0.5">95%</div>
              <div className="text-[11px] lg:text-[12px] text-gray-500 leading-tight">accurate skin<br/>analysis</div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-4 lg:gap-5">
            <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-gray-400">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="8" r="5"/><circle cx="12" cy="16" r="5"/>
              </svg>
            </div>
            <div className="text-left">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-0.5">30+</div>
              <div className="text-[11px] lg:text-[12px] text-gray-500 leading-tight">skin concerns<br/>analyzed</div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-4 lg:gap-5">
            <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-gray-400">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <line x1="3" y1="9" x2="21" y2="9"/>
                <line x1="9" y1="21" x2="9" y2="9"/>
              </svg>
            </div>
            <div className="text-left">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-0.5">7-day</div>
              <div className="text-[11px] lg:text-[12px] text-gray-500 leading-tight">personalized<br/>routine</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// ── AI Skincare Section ────────────────────────────────────────────────────────
export function AISkincare() {
  return (
    <section className="w-full bg-[#F5F5F5] py-8 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto bg-white rounded-[2rem] overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">

        {/* Left Image with dots */}
        <div className="relative w-full h-[600px] md:h-auto bg-[#EBEBEB]">
          <img
            src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=1200"
            alt="Applying skincare"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-[25%] left-[60%] flex flex-col items-center gap-1">
            <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
            <span className="text-white text-[9px] tracking-widest font-bold uppercase drop-shadow-md">SLEEP WELL</span>
          </div>
          <div className="absolute top-[55%] left-[30%] flex flex-col items-center gap-1">
            <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
            <span className="text-white text-[9px] tracking-widest font-bold uppercase drop-shadow-md">HYDRATE</span>
          </div>
          <div className="absolute bottom-[20%] right-[35%] flex flex-col items-center gap-1">
            <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
            <span className="text-white text-[9px] tracking-widest font-bold uppercase drop-shadow-md">LESS STRESS</span>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full bg-gradient-to-b from-[#FAF5FF] to-white flex flex-col items-center justify-center p-12 text-center relative overflow-hidden">
          <FadeSection>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              AI Skincare
            </h2>
            <p className="text-[13px] text-gray-600 max-w-md mx-auto leading-relaxed mb-16">
              AI doesn't promise perfection — it observes, learns, and adapts.
              Every scan interprets the natural passage of your skin's time,
              highlighting areas for thoughtful care and balance.
            </p>
          </FadeSection>

          <div className="flex flex-col items-center my-8 opacity-40">
            <div className="w-px h-32 bg-gradient-to-b from-purple-300 to-purple-600 mb-1"></div>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9333ea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </div>

          <FadeSection>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6 mt-8">
              Mindful Beauty
            </h2>
            <p className="text-[13px] text-gray-500 max-w-sm mx-auto leading-relaxed">
              Meaning: we can't stop aging, but we can guide it with
              awareness, insight, and gentle personalization.
            </p>
          </FadeSection>
        </div>

      </div>
    </section>
  );
}

// ── Root ───────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="w-full bg-white font-sans text-gray-900 antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <Nav />
      <Hero />
      <AISkincare />
    </div>
  );
}