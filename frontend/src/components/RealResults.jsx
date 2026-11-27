import { useState } from "react";
import { Star, CheckCircle2, Sparkles, Quote, ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";

export default function RealResults() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 0,
      quote: "My stubborn hormonal acne and redness visibly reduced in just 3 weeks. The AI facial scan pinpointed my disrupted barrier immediately, and the customized peptide moisturizer didn't clog my pores at all.",
      user: "Sarah Jenkins",
      role: "Verified Patient · Bangalore",
      concern: "Acne & Redness",
      metric: "84% blemish reduction in 21 days",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
      routine: "Gentle Cleanser + Barrier Peptide Cream"
    },
    {
      id: 1,
      quote: "I struggled with dry flaky patches and uneven sun spots for years. Following the 7-day AM/PM regimen completely normalized my hydration. My foundation glides on seamlessly now.",
      user: "Michael D'Souza",
      role: "Verified Member · Mumbai",
      concern: "Dryness & Hyperpigmentation",
      metric: "92% hydration barrier restored",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      routine: "Hyaluronic Matrix + Ceramide Night Serum"
    },
    {
      id: 2,
      quote: "I was skeptical about computer vision skin analysis, but it accurately caught fine lines around my eyes and forehead congestion that standard salon consultations completely missed.",
      user: "Elena Rodriguez",
      role: "Verified User · Delhi",
      concern: "Fine Lines & Enlarged Pores",
      metric: "72% pore refinement measured",
      rating: 5,
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
      routine: "Niacinamide Elixir + Botanical Night Oil"
    }
  ];

  const current = testimonials[activeTestimonial];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="w-full bg-[#FAFAFC] py-20 md:py-28 border-t border-gray-100 relative overflow-hidden" id="results">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[300px] bg-purple-100/40 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        
        {/* Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Clinical Trust Metrics */}
          <div className="lg:col-span-5 flex flex-col items-start w-full">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/80 mb-5">
              <Sparkles className="w-3.5 h-3.5 text-[#9333EA]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7E22CE]">
                Clinical Proof & Patient Stories
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-[1.12] mb-5">
              Real people, <br />measurable results
            </h2>

            <p className="text-gray-500 text-sm md:text-base font-normal leading-relaxed mb-8 max-w-md">
              Over 9,870 patients have achieved calibrated skin barrier restoration using our precision AI-driven formulations.
            </p>

            {/* Quick Metrics Bento */}
            <div className="grid grid-cols-2 gap-4 w-full mb-8">
              <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-xs">
                <span className="text-2xl sm:text-3xl font-black text-gray-900 block mb-1">
                  95.8%
                </span>
                <span className="text-xs text-gray-500 font-medium leading-snug">
                  Diagnostic agreement with dermatologists
                </span>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-xs">
                <span className="text-2xl sm:text-3xl font-black text-[#7E22CE] block mb-1">
                  21 Days
                </span>
                <span className="text-xs text-gray-500 font-medium leading-snug">
                  Average time to visible barrier renewal
                </span>
              </div>
            </div>

            {/* Overall Rating Pill */}
            <div className="flex items-center gap-3 bg-white border border-gray-200/80 rounded-2xl px-5 py-3 shadow-xs">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
                ))}
              </div>
              <span className="text-xs font-bold text-gray-900">4.9 / 5.0</span>
              <span className="text-xs text-gray-400 font-medium">· 1,240+ verified clinical reviews</span>
            </div>
          </div>

          {/* Right Column: Luxury Testimonial Showcase Card */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-white rounded-[32px] p-8 sm:p-12 border border-gray-200/80 shadow-xl shadow-purple-900/5 relative flex flex-col justify-between min-h-[440px]">
              
              {/* Top Row: Quote Icon & Navigation Buttons */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#7E22CE] flex items-center justify-center">
                  <Quote className="w-6 h-6 fill-[#7E22CE]/20 stroke-[#7E22CE]" />
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full border border-gray-200 hover:border-purple-300 hover:bg-purple-50 text-gray-600 hover:text-[#7E22CE] flex items-center justify-center transition-all cursor-pointer"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full border border-gray-200 hover:border-purple-300 hover:bg-purple-50 text-gray-600 hover:text-[#7E22CE] flex items-center justify-center transition-all cursor-pointer"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Middle: Testimonial Quote */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#7E22CE] bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                    Target: {current.concern}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{current.metric}</span>
                  </div>
                </div>

                <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-800 leading-relaxed italic">
                  "{current.quote}"
                </p>
              </div>

              {/* Bottom: User Info & Routine Tags */}
              <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={current.image}
                    alt={current.user}
                    className="w-13 h-13 rounded-full object-cover border-2 border-purple-200 shadow-sm"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-gray-900 text-sm sm:text-base">
                        {current.user}
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-50" />
                    </div>
                    <span className="text-xs text-gray-500 font-medium block">
                      {current.role}
                    </span>
                  </div>
                </div>

                {/* Routine Tag */}
                <div className="text-left sm:text-right">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-0.5">
                    Personalized Routine
                  </span>
                  <span className="text-xs font-semibold text-gray-700">
                    {current.routine}
                  </span>
                </div>
              </div>

              {/* Indicator Dots */}
              <div className="flex gap-2 justify-center mt-8">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      activeTestimonial === idx ? "bg-[#7E22CE] w-8" : "bg-gray-200 w-2 hover:bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}