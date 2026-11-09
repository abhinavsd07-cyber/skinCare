import { useState, useRef, useEffect } from "react";
import { Star } from "lucide-react";

export default function RealResults() {
  const [sliderPos, setSliderPos] = useState(50);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sliderRef = useRef(null);
  const isDragging = useRef(false);

  const testimonials = [
    {
      quote: "My acne reduced in just 3 weeks. The AI analysis was super accurate!",
      user: "Sarah J.",
      role: "Verified User",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
    },
    {
      quote: "The personalized routine completely fixed my dry patches. Highly recommend Nuvé!",
      user: "Michael D.",
      role: "Verified Member",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
    },
    {
      quote: "I was skeptical about AI scanning, but it detected my exact concerns and set a perfect routine.",
      user: "Elena R.",
      role: "Verified User",
      rating: 5,
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=100&auto=format&fit=crop"
    }
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

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Title & Before/After Slider */}
        <div className="lg:col-span-6 flex flex-col items-start w-full">
          <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] text-gray-500 mb-2">
            REAL RESULTS
          </span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-8 max-w-sm leading-tight">
            Visible results, real stories
          </h2>

          {/* Interactive Before/After Image Slider */}
          <div 
            ref={sliderRef}
            onMouseDown={() => { isDragging.current = true; }}
            onTouchStart={() => { isDragging.current = true; }}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative w-full max-w-[500px] aspect-[4/3] rounded-3xl overflow-hidden shadow-md select-none cursor-ew-resize bg-gray-200"
          >
            {/* Before image (Background) */}
            <div className="absolute inset-0 grayscale contrast-[1.05] brightness-90">
              <img 
                src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop" 
                alt="Before" 
                className="w-full h-full object-cover pointer-events-none"
              />
              <span className="absolute bottom-4 left-4 bg-black/60 text-white font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm z-20">
                Before
              </span>
            </div>

            {/* After image (Foreground, clipped) */}
            <div 
              className="absolute inset-0 z-10" 
              style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
            >
              <img 
                src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop" 
                alt="After" 
                className="w-full h-full object-cover pointer-events-none"
              />
              <span className="absolute bottom-4 right-4 bg-[#C084FC]/90 text-white font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm z-20">
                After
              </span>
            </div>

            {/* Slide bar */}
            <div 
              className="absolute top-0 bottom-0 z-20 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.3)]"
              style={{ left: `${sliderPos}%` }}
            >
              {/* Handle thumb */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-gray-250 flex items-center justify-center shadow-lg pointer-events-none">
                <span className="flex gap-0.5 text-gray-400">
                  <span className="w-0.5 h-3 bg-gray-300 rounded-full"></span>
                  <span className="w-0.5 h-3 bg-gray-300 rounded-full"></span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Testimonials Card */}
        <div className="lg:col-span-6 flex flex-col justify-center bg-white border border-gray-100/60 rounded-3xl p-8 md:p-12 shadow-[0_6px_30px_-6px_rgba(0,0,0,0.02)] min-h-[350px]">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-6 block">
            WHAT OUR USERS SAY
          </span>

          {/* Dynamic Testimonial block */}
          <div className="flex-grow flex flex-col justify-between">
            <div>
              <p className="text-xl md:text-2xl font-light text-gray-800 leading-relaxed italic mb-8">
                "{testimonials[activeTestimonial].quote}"
              </p>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
                ))}
              </div>
            </div>

            {/* Author */}
            <div className="flex items-center justify-between border-t border-gray-50 pt-6">
              <div className="flex items-center gap-3.5">
                <img 
                  src={testimonials[activeTestimonial].image} 
                  alt={testimonials[activeTestimonial].user} 
                  className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-gray-900 text-sm">
                    {testimonials[activeTestimonial].user}
                  </span>
                  <span className="text-xs text-[#C084FC] font-semibold mt-0.5">
                    {testimonials[activeTestimonial].role}
                  </span>
                </div>
              </div>

              {/* Slider dots */}
              <div className="flex gap-2 shrink-0">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeTestimonial === idx ? "bg-[#C084FC] w-6" : "bg-gray-200"
                    }`}
                    aria-label={`Testimonial slide ${idx + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
