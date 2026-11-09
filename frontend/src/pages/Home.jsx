import { useEffect, useRef, useState } from "react";
import girlVideo from "../assets/girl.mp4";
import Nav from "../components/Nav";
import FeaturedIn from "../components/FeaturedIn";
import HowItWorks from "../components/HowItWorks";
import SkinConcerns from "../components/SkinConcerns";
import AIDemo from "../components/AIDemo";
import RealResults from "../components/RealResults";
import StatsBar from "../components/StatsBar";
import FAQ from "../components/FAQ";
import FooterInfoBar from "../components/FooterInfoBar";
import Footer from "../components/Footer";

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

// ── Hero ───────────────────────────────────────────────────────────────────────
export function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden">

      {/* Background: Video centered with seamless radial blending */}
      <div className="absolute inset-0 w-full h-full flex justify-center items-center pointer-events-none z-0">
        <div className="relative w-full max-w-[900px] h-[90vh] max-h-[900px] flex justify-center items-center">
          <video
            src={girlVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{ 
              maskImage: "radial-gradient(ellipse 65% 85% at 50% 50%, black 40%, transparent 80%)", 
              WebkitMaskImage: "radial-gradient(ellipse 65% 85% at 50% 50%, black 40%, transparent 80%)" 
            }}
          />
        </div>
      </div>

      {/* Content on top of background */}
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

          <a href="/analysis" className="bg-[#F3E8FF] text-[#5B21B6] font-semibold text-[15px] px-8 py-4 rounded-xl hover:bg-[#EDE9FE] transition-colors no-underline">
            Analyze Skin
          </a>
        </div>

        {/* Center: empty spacer for desktop */}
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

// ── Root ───────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="w-full bg-white font-sans text-gray-900 antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <Nav activePage="Home" />
      <Hero />
      <FeaturedIn />
      <HowItWorks />
      <SkinConcerns />
      <StatsBar />
      <AIDemo />
      <RealResults />
      <FAQ />
      <FooterInfoBar />
      <Footer />
    </div>
  );
}