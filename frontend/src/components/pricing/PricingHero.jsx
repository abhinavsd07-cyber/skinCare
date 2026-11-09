export default function PricingHero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16 relative">
      
      {/* Left Content */}
      <div className="flex flex-col max-w-lg relative z-10 w-full md:w-1/2">
        <h1 className="text-4xl md:text-[42px] font-bold text-gray-900 leading-tight mb-4 tracking-tight">
          Simple, transparent pricing <br/>for healthy skin
        </h1>
        <p className="text-[14px] font-medium text-gray-600 mb-8 max-w-[320px]">
          Choose the plan that fits your goals. All plans include AI-powered analysis and personalized insights.
        </p>
        
        {/* Toggle */}
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-white border border-gray-200 rounded-full p-1 shadow-sm w-max">
            <button className="bg-[#A855F7] text-white px-6 py-2 rounded-full text-[13px] font-bold transition-all shadow-sm">
              Monthly
            </button>
            <button className="bg-transparent text-gray-500 hover:text-gray-900 px-6 py-2 rounded-full text-[13px] font-bold transition-all">
              Yearly
            </button>
          </div>
          <span className="bg-[#DCFCE7] text-[#166534] text-[9px] font-extrabold uppercase px-2 py-1 rounded-full whitespace-nowrap">
            Save up to 20%
          </span>
        </div>
      </div>
      
      {/* Right Image */}
      <div className="relative z-10 w-full md:w-1/2 flex justify-end">
        <div className="relative w-full max-w-[500px]">
           <img 
            src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop" 
            alt="Nuvé Skincare Products" 
            className="w-full h-auto object-contain mix-blend-multiply"
          />
        </div>
      </div>
      
    </div>
  );
}
