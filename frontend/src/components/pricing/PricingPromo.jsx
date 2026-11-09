import { Sparkles } from "lucide-react";

export default function PricingPromo() {
  return (
    <div className="w-full rounded-[2rem] bg-[#FAF5FF] border border-[#E9D5FF] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden mb-8">
      
      {/* Left Image (Products) */}
      <div className="relative w-full md:w-1/2 flex justify-start items-center relative z-10">
        <div className="relative w-full max-w-[400px]">
           <img 
            src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop" 
            alt="Nuvé Skincare Routine" 
            className="w-full h-auto object-contain mix-blend-multiply"
          />
        </div>
      </div>
      
      {/* Right Content */}
      <div className="flex flex-col items-start w-full md:w-1/2 relative z-10">
        <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-snug tracking-tight">
          Ready to unlock your best skin?
        </h3>
        <p className="text-[13px] font-medium text-gray-600 mb-8 leading-relaxed max-w-sm">
          Join thousands of users who trust Nuvé for personalized skincare that delivers results.
        </p>
        <button className="bg-[#A855F7] hover:bg-[#9333EA] text-white rounded-xl px-8 py-3.5 text-[13px] font-bold shadow-sm transition-all flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          Analyze Your Skin
        </button>
      </div>

    </div>
  );
}
