import { Search, ShieldCheck, Activity } from "lucide-react";

export default function ResultsPromo() {
  return (
    <div className="w-full rounded-[2rem] bg-[#FAF5FF] border border-[#E9D5FF] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
      
      <div className="flex items-center gap-8 relative z-10 w-full md:w-auto">
        <div className="relative w-32 h-32 flex-shrink-0 hidden sm:block">
           <img 
            src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=300&auto=format&fit=crop" 
            alt="Products" 
            className="w-full h-full object-contain mix-blend-multiply"
          />
        </div>
        
        <div className="flex flex-col items-start max-w-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug">Ready to achieve your best skin?</h3>
          <p className="text-[11px] font-medium text-gray-600 mb-6 leading-relaxed">
            Unlock your personalized routine and expert-recommended products based on your results.
          </p>
          <button className="bg-[#A855F7] hover:bg-[#9333EA] text-white rounded-xl px-6 py-3 text-[11px] font-bold shadow-sm transition-all flex items-center gap-2">
            Unlock My Routine
          </button>
        </div>
      </div>
      
      <div className="flex flex-col gap-5 relative z-10 w-full md:w-auto border-t md:border-t-0 md:border-l border-[#E9D5FF] pt-6 md:pt-0 pl-0 md:pl-10">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-[#F3E8FF]">
            <Search className="w-4 h-4 text-[#A855F7]" />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-gray-900 mb-0.5">Personalized Just For You</span>
            <span className="text-[9px] font-medium text-gray-500">Based on your unique skin</span>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-[#F3E8FF]">
            <ShieldCheck className="w-4 h-4 text-[#A855F7]" />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-gray-900 mb-0.5">Dermatologist Reviewed</span>
            <span className="text-[9px] font-medium text-gray-500">Trusted by skincare experts</span>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-[#F3E8FF]">
            <Activity className="w-4 h-4 text-[#A855F7]" />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-gray-900 mb-0.5">Track Real Progress</span>
            <span className="text-[9px] font-medium text-gray-500">See results over time</span>
          </div>
        </div>
      </div>

    </div>
  );
}
