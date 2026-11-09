import { ArrowRight } from "lucide-react";
import image1 from "../assets/image.png";

export default function SkinConcerns() {
  const concerns = [
    "Acne", "Wrinkles", "Dark Spots",
    "Dry Skin", "Pigmentation", "Uneven Tone"
  ];

  return (
    <section className="w-full bg-white py-10 md:py-16 overflow-hidden">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-10 lg:gap-10">

          {/* LEFT: Text & Tags */}
          <div className="flex flex-col items-start w-full lg:w-[420px] flex-shrink-0 pb-0 lg:pb-16">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#8B5CF6] mb-5">
              SKIN CONCERNS WE ANALYZE
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold tracking-tight text-[#0F172A] leading-[1.15] mb-9">
              We analyze 30+<br />skin concerns
            </h2>

            {/* Tags grid — 3 columns */}
            <div className="grid grid-cols-3 gap-3 mb-9 w-full">
              {concerns.map((tag) => (
                <div
                  key={tag}
                  className="bg-white border border-[#E2E8F0] rounded-full px-3 py-3 text-[12px] sm:text-[13px] font-semibold text-[#1E293B] text-center shadow-sm hover:scale-105 hover:border-[#C084FC] transition-all cursor-pointer whitespace-nowrap"
                >
                  {tag}
                </div>
              ))}
            </div>

            <a
              href="#all-concerns"
              className="flex items-center gap-1.5 text-[14px] font-bold text-[#0F172A] no-underline hover:translate-x-1 transition-transform duration-200"
            >
              View all concerns
              <ArrowRight size={15} strokeWidth={2.5} />
            </a>
          </div>

          {/* RIGHT: Image + floating overlays — hidden on mobile to avoid overflow */}
          <div className="hidden md:flex relative flex-shrink-0 w-full lg:w-[600px] xl:w-[650px] items-end">

            {/* Model image */}
            <img
              src={image1}
              alt="Skin Analysis Model"
              className="w-full object-contain object-center-bottom rounded-t-3xl block z-[1]"
              style={{ height: "440px", objectPosition: "center bottom" }}
            />

            {/* Skin Health Score Card */}
            <div className="absolute top-[120px] -left-4 md:-left-8 bg-white rounded-[20px] p-5 shadow-lg flex flex-col items-center gap-3 w-[148px] z-10">
              <span className="text-[11px] font-semibold text-gray-500 text-center">Skin Health Score</span>
              <div className="relative w-[76px] h-[76px] flex items-center justify-center">
                <svg width="76" height="76" viewBox="0 0 36 36" style={{ transform: "rotate(-90deg)", position: "absolute" }}>
                  <path strokeWidth="2.5" stroke="#F3F4F6" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path strokeWidth="2.5" strokeDasharray="85, 100" strokeLinecap="round" stroke="#22C55E" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <span className="font-extrabold text-[21px] text-gray-900 z-[1]">85</span>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <span className="text-[15px] font-extrabold text-gray-900">Good</span>
                <span className="text-[11px] text-gray-400 font-medium">Keep it up!</span>
              </div>
            </div>

            {/* Top Concerns Card */}
            <div className="absolute bottom-10 -right-4 md:-right-6 bg-white rounded-[18px] p-5 shadow-lg w-[176px] z-10">
              <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-4">Top Concerns</p>
              <ul className="list-none m-0 p-0 flex flex-col gap-3">
                {["Visible Pores", "Uneven Tone", "Fine Lines"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[13px] font-semibold text-gray-700">
                    <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full flex-shrink-0 inline-block" />
                    {item}
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
