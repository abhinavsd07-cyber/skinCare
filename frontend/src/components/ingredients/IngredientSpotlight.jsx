import { CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

export default function IngredientSpotlight() {
  return (
    <aside className="w-full xl:w-[280px] flex-shrink-0 flex flex-col gap-6">
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col">
        <h4 className="text-[13px] font-bold text-gray-900 mb-6">Ingredient Spotlight</h4>
        
        {/* Spotlight Image */}
        <div className="w-full aspect-square rounded-full overflow-hidden bg-emerald-50 mb-6 p-4 border border-gray-50 shadow-inner">
          <img 
            src="https://images.unsplash.com/photo-1614859324967-bdf24227918a?q=80&w=400&auto=format&fit=crop" 
            alt="Ingredient Macro" 
            className="w-full h-full object-cover rounded-full shadow-sm mix-blend-multiply opacity-90"
          />
        </div>
        
        {/* Title & Badge */}
        <h3 className="text-xl font-bold text-gray-900 mb-1">Niacinamide</h3>
        <p className="text-xs font-medium text-gray-500 mb-4">Vitamin B3</p>
        
        <div className="flex items-center gap-2 mb-8">
          <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-md text-[10px] font-bold border border-emerald-100">
            <ShieldCheck className="w-3.5 h-3.5" />
            Very Safe
          </div>
          <span className="text-[10px] text-gray-400 font-medium">Rating</span>
        </div>

        {/* What it does */}
        <div className="mb-6">
          <h5 className="text-[11px] font-bold text-gray-900 mb-2">What it does</h5>
          <p className="text-[11px] text-gray-600 leading-relaxed font-medium">
            Niacinamide helps improve the skin barrier, minimize pores, even skin tone, and reduce inflammation.
          </p>
        </div>

        {/* Best for */}
        <div className="mb-6">
          <h5 className="text-[11px] font-bold text-gray-900 mb-3">Best for</h5>
          <div className="flex flex-col gap-2.5">
            {["Enlarged pores", "Uneven skin tone", "Acne marks", "Redness"].map(item => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                <span className="text-[11px] text-gray-600 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Works well with */}
        <div className="mb-6">
          <h5 className="text-[11px] font-bold text-gray-900 mb-3">Works well with</h5>
          <div className="flex flex-wrap gap-2">
            {["Hyaluronic Acid", "Zinc", "Ceramides"].map(item => (
              <span key={item} className="px-2.5 py-1 rounded-md bg-gray-50 text-gray-600 text-[10px] font-semibold border border-gray-100">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Avoid combining with */}
        <div className="mb-8">
          <h5 className="text-[11px] font-bold text-gray-900 mb-3">Avoid combining with</h5>
          <div className="flex flex-wrap gap-2">
            {["Vitamin C (High %)", "Direct Acids"].map(item => (
              <span key={item} className="px-2.5 py-1 rounded-md bg-rose-50 text-gray-600 text-[10px] font-semibold border border-rose-100">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Link */}
        <button className="flex items-center justify-start gap-1 text-[11px] font-bold text-[#A855F7] hover:text-[#9333EA] transition-colors">
          View Ingredient Details <ArrowRight className="w-3.5 h-3.5" />
        </button>

      </div>
    </aside>
  );
}
