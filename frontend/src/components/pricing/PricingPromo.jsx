import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";

export default function PricingPromo() {
  const navigate = useNavigate();

  return (
    <div className="w-full rounded-[2rem] bg-gradient-to-r from-[#FAF5FF] to-[#F3E8FF] border border-[#E9D5FF] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden mb-8">
      
      {/* Left Image (Products) */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center z-10">
        <div className="relative w-full max-w-[360px]">
          <img 
            src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop" 
            alt="Nuvé Skincare Routine" 
            className="w-full h-auto object-contain mix-blend-multiply drop-shadow-md"
          />
        </div>
      </div>
      
      {/* Right Content */}
      <div className="flex flex-col items-start w-full md:w-1/2 z-10">
        <span className="text-xs font-bold uppercase tracking-wider text-[#8B5CF6] mb-2">Start Today</span>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-snug tracking-tight">
          Ready to unlock your skin's full potential?
        </h3>
        <p className="text-[13px] font-medium text-gray-600 mb-8 leading-relaxed max-w-sm">
          Join thousands of satisfied users who trust Nuvé for personalized skincare that delivers measurable results.
        </p>
        <button 
          onClick={() => navigate("/analysis")}
          className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-2xl px-8 py-4 text-[13px] font-bold shadow-md shadow-purple-500/20 transition-all flex items-center gap-2.5 cursor-pointer"
        >
          <Sparkles className="w-4 h-4" />
          Analyze Your Skin Now
        </button>
      </div>

    </div>
  );
}
