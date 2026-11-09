import { 
  Search, CheckCircle2, ChevronRight, ChevronDown, 
  Droplet, Sun, Wind, Flame, Zap, ShieldCheck, Asterisk, PlusCircle, Brain, UserCheck, Activity, Waves, Sparkles
} from "lucide-react";

const IngredientsHero = () => {
  return (
    <div className="relative w-full rounded-[2rem] bg-white overflow-hidden mb-8 border border-gray-100 shadow-sm min-h-[300px] flex items-center p-8 md:p-12">
      
      <div className="relative z-10 max-w-lg flex flex-col">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 tracking-tight">
          Ingredients that <br/>transform your skin
        </h1>
        <p className="text-sm font-medium text-gray-600 mb-8 max-w-sm leading-relaxed">
          Discover science-backed ingredients and understand how they work for your unique skin.
        </p>
        
        {/* Search Bar */}
        <div className="relative w-full max-w-md">
          <input 
            type="text" 
            placeholder="Search ingredients (e.g., Niacinamide, Retinol...)" 
            className="w-full bg-white border border-gray-200 text-sm font-medium text-gray-900 rounded-xl pl-4 pr-12 py-3.5 focus:outline-none focus:border-[#A855F7] focus:ring-1 focus:ring-[#A855F7] shadow-sm transition-all placeholder:font-normal placeholder:text-gray-400"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* Decorative Image area */}
      <div className="absolute right-0 top-0 bottom-0 w-[55%] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" style={{ width: '40%' }}></div>
        <img 
          src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=1000&auto=format&fit=crop" 
          alt="Abstract skincare" 
          className="w-full h-full object-cover opacity-90 mix-blend-multiply"
        />
        {/* Synthetic blur overlays to match the soft dreamy feel */}
        <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-purple-100/40 rounded-full blur-3xl mix-blend-multiply"></div>
      </div>
      
    </div>
  );
};

const PopularIngredients = () => {
  const items = [
    { name: "Niacinamide", desc: "Brightening &\nPore refining", status: "Very Safe", icon: <ShieldCheck className="w-3.5 h-3.5" />, color: "text-emerald-500", bg: "bg-emerald-50", border: "border-emerald-100", img: "https://images.unsplash.com/photo-1614859324967-bdf24227918a?q=80&w=200&auto=format&fit=crop" },
    { name: "Hyaluronic Acid", desc: "Intense Hydration\n& Plumping", status: "Very Safe", icon: <ShieldCheck className="w-3.5 h-3.5" />, color: "text-emerald-500", bg: "bg-emerald-50", border: "border-emerald-100", img: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=200&auto=format&fit=crop" },
    { name: "Retinol", desc: "Anti-aging &\nCell renewal", status: "Use with Caution", icon: <Asterisk className="w-3 h-3" />, color: "text-amber-500", bg: "bg-amber-50", border: "border-amber-100", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&auto=format&fit=crop" },
    { name: "Salicylic Acid", desc: "Acne control &\nPore cleansing", status: "Safe", icon: <CheckCircle2 className="w-3 h-3" />, color: "text-emerald-500", bg: "bg-emerald-50", border: "border-emerald-100", img: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=200&auto=format&fit=crop" },
    { name: "Vitamin C", desc: "Brightening &\nAntioxidant", status: "Safe", icon: <CheckCircle2 className="w-3 h-3" />, color: "text-emerald-500", bg: "bg-emerald-50", border: "border-emerald-100", img: "https://images.unsplash.com/photo-1605810730811-6b801a24d271?q=80&w=200&auto=format&fit=crop" }
  ];

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[15px] font-bold text-gray-900">Popular Ingredients</h3>
        <button className="text-[11px] font-bold text-[#A855F7] hover:text-[#9333EA]">View All</button>
      </div>
      
      <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar relative">
        {items.map((item, idx) => (
          <div key={idx} className="flex-shrink-0 w-[140px] flex flex-col items-center text-center group cursor-pointer">
            <div className="w-full aspect-square rounded-2xl bg-white border border-gray-100 shadow-sm mb-3 flex flex-col items-center justify-center p-3 transition-transform group-hover:-translate-y-1 group-hover:border-[#E9D5FF]">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-3 bg-gray-50 p-1 border border-gray-50 shadow-inner">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover rounded-full mix-blend-multiply opacity-80" />
              </div>
              <h5 className="text-[11px] font-bold text-gray-900 leading-tight mb-1">{item.name}</h5>
              <p className="text-[9px] font-medium text-gray-500 leading-tight whitespace-pre-line">{item.desc}</p>
            </div>
            
            <div className={`flex items-center gap-1 ${item.bg} ${item.color} ${item.border} border px-2 py-0.5 rounded text-[9px] font-bold`}>
              {item.icon}
              {item.status}
            </div>
          </div>
        ))}
        {/* Right fade/arrow indicator for carousel */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm w-8 h-16 flex items-center justify-center rounded-l-xl border-l border-y border-gray-100 shadow-sm cursor-pointer z-10">
          <ChevronRight className="w-4 h-4 text-gray-600" />
        </div>
      </div>
    </div>
  );
};

const IngredientsTable = () => {
  const rows = [
    {
      name: "Niacinamide", subtitle: "Vitamin B3", icon: <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center"><Droplet className="w-4 h-4"/></div>,
      benefits: "Brightens skin, minimizes pores, strengthens barrier",
      concerns: ["Pores", "Uneven Tone", "Redness"],
      safety: "Very Safe", safetyIcon: <ShieldCheck className="w-3.5 h-3.5" />, safetyColor: "text-emerald-600",
      availability: "Both"
    },
    {
      name: "Hyaluronic Acid", subtitle: "Humectant", icon: <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center"><Waves className="w-4 h-4"/></div>,
      benefits: "Deep hydration, plumps skin, reduces fine lines",
      concerns: ["Dryness", "Dehydration", "Fine Lines"],
      safety: "Very Safe", safetyIcon: <ShieldCheck className="w-3.5 h-3.5" />, safetyColor: "text-emerald-600",
      availability: "Both"
    },
    {
      name: "Retinol", subtitle: "Vitamin A Derivative", icon: <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center"><Sun className="w-4 h-4"/></div>,
      benefits: "Reduces wrinkles, boosts collagen, cell renewal",
      concerns: ["Aging", "Wrinkles", "Fine Lines"],
      safety: "Use with Caution", safetyIcon: <Asterisk className="w-3.5 h-3.5" />, safetyColor: "text-amber-500",
      availability: "Synthetic"
    },
    {
      name: "Salicylic Acid", subtitle: "BHA", icon: <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center"><PlusCircle className="w-4 h-4"/></div>,
      benefits: "Clears pores, reduces acne, exfoliates dead skin cells",
      concerns: ["Acne", "Pores", "Blackheads"],
      safety: "Safe", safetyIcon: <CheckCircle2 className="w-3.5 h-3.5" />, safetyColor: "text-emerald-500",
      availability: "Synthetic"
    },
    {
      name: "Vitamin C", subtitle: "Ascorbic Acid", icon: <div className="w-8 h-8 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center"><Droplet className="w-4 h-4"/></div>,
      benefits: "Brightens skin, protects from free radicals",
      concerns: ["Dark Spots", "Dullness", "Aging"],
      safety: "Safe", safetyIcon: <CheckCircle2 className="w-3.5 h-3.5" />, safetyColor: "text-emerald-500",
      availability: "Both"
    },
    {
      name: "Ceramides", subtitle: "Lipid Molecules", icon: <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center"><ShieldCheck className="w-4 h-4"/></div>,
      benefits: "Strengthens skin barrier, locks in moisture",
      concerns: ["Dryness", "Sensitivity", "Barrier Repair"],
      safety: "Very Safe", safetyIcon: <ShieldCheck className="w-3.5 h-3.5" />, safetyColor: "text-emerald-600",
      availability: "Both"
    },
    {
      name: "Glycolic Acid", subtitle: "AHA", icon: <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center"><Droplet className="w-4 h-4"/></div>,
      benefits: "Exfoliates skin, improves texture and tone",
      concerns: ["Uneven Tone", "Texture", "Acne Scars"],
      safety: "Use with Caution", safetyIcon: <Asterisk className="w-3.5 h-3.5" />, safetyColor: "text-amber-500",
      availability: "Synthetic"
    },
    {
      name: "Centella Asiatica", subtitle: "Plant Extract", icon: <div className="w-8 h-8 rounded-full bg-green-50 text-green-500 flex items-center justify-center"><Wind className="w-4 h-4"/></div>,
      benefits: "Soothes irritation, reduces redness, promotes healing",
      concerns: ["Redness", "Irritation", "Sensitivity"],
      safety: "Very Safe", safetyIcon: <ShieldCheck className="w-3.5 h-3.5" />, safetyColor: "text-emerald-600",
      availability: "Natural"
    }
  ];

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-8 overflow-hidden">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <h3 className="text-[15px] font-bold text-gray-900">All Ingredients <span className="text-gray-400 font-medium">(132)</span></h3>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-medium text-gray-500">Sort by:</span>
          <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-lg text-[11px] font-bold text-gray-700 bg-white shadow-sm">
            Popular <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] text-left border-collapse">
          <thead>
            <tr>
              <th className="pb-4 border-b border-gray-100 text-[9px] font-bold text-gray-400 uppercase tracking-wider pl-2">Ingredient</th>
              <th className="pb-4 border-b border-gray-100 text-[9px] font-bold text-gray-400 uppercase tracking-wider w-[25%]">Benefits</th>
              <th className="pb-4 border-b border-gray-100 text-[9px] font-bold text-gray-400 uppercase tracking-wider w-[25%]">Skin Concerns</th>
              <th className="pb-4 border-b border-gray-100 text-[9px] font-bold text-gray-400 uppercase tracking-wider w-[12%]">Safety</th>
              <th className="pb-4 border-b border-gray-100 text-[9px] font-bold text-gray-400 uppercase tracking-wider w-[12%] text-right pr-2">Availability</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className="group hover:bg-gray-50/50 transition-colors cursor-pointer border-b border-gray-50 last:border-0">
                
                {/* Ingredient Col */}
                <td className="py-4 pl-2 pr-4 align-top">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">{row.icon}</div>
                    <div className="flex flex-col pt-0.5">
                      <span className="text-xs font-bold text-gray-900 leading-none mb-1">{row.name}</span>
                      <span className="text-[10px] font-medium text-gray-500">{row.subtitle}</span>
                    </div>
                  </div>
                </td>
                
                {/* Benefits Col */}
                <td className="py-4 pr-4 align-top">
                  <p className="text-[11px] font-medium text-gray-600 leading-snug pt-1">
                    {row.benefits}
                  </p>
                </td>
                
                {/* Skin Concerns Col */}
                <td className="py-4 pr-4 align-top">
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {row.concerns.map(c => (
                      <span key={c} className="text-[9px] font-medium text-gray-600 bg-gray-50 border border-gray-100 rounded px-1.5 py-0.5">
                        {c}
                      </span>
                    ))}
                  </div>
                </td>
                
                {/* Safety Col */}
                <td className="py-4 pr-4 align-top">
                  <div className={`flex items-center gap-1.5 ${row.safetyColor} pt-1`}>
                    {row.safetyIcon}
                    <span className="text-[10px] font-bold">{row.safety}</span>
                  </div>
                </td>
                
                {/* Availability Col */}
                <td className="py-4 pr-2 align-top text-right">
                  <div className="flex items-center justify-end gap-2 pt-1 text-gray-600 group-hover:text-gray-900">
                    <span className="text-[11px] font-medium">{row.availability}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  </div>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Load More */}
      <div className="w-full flex justify-center mt-6 pt-4 border-t border-gray-50">
        <button className="flex items-center gap-2 text-[11px] font-bold text-[#A855F7] hover:text-[#9333EA] transition-colors">
          Load More Ingredients <ChevronDown className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};

const IngredientsPromo = () => {
  return (
    <div className="w-full rounded-[2rem] bg-[#FAF5FF] border border-[#F3E8FF] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 mb-8 relative overflow-hidden">
      
      <div className="flex items-center gap-8 relative z-10 w-full md:w-auto">
        <div className="relative w-28 h-28 flex-shrink-0 hidden sm:block">
           <img 
            src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=300&auto=format&fit=crop" 
            alt="Products" 
            className="w-full h-full object-contain mix-blend-multiply"
          />
        </div>
        
        <div className="flex flex-col items-start max-w-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug">Not sure which ingredients are right for you?</h3>
          <p className="text-[11px] font-medium text-gray-600 mb-6 leading-relaxed">
            Get a personalized routine with ingredients that match your skin's unique needs.
          </p>
          <button className="bg-[#A855F7] hover:bg-[#9333EA] text-white rounded-xl px-6 py-3 text-xs font-bold shadow-sm transition-all flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Analyze Your Skin
          </button>
        </div>
      </div>
      
      <div className="flex flex-col gap-5 relative z-10 w-full md:w-auto border-t md:border-t-0 md:border-l border-[#E9D5FF] pt-6 md:pt-0 pl-0 md:pl-10">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-[#F3E8FF]">
            <Brain className="w-4 h-4 text-[#A855F7]" />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-gray-900 mb-0.5">AI-Powered Analysis</span>
            <span className="text-[9px] font-medium text-gray-500">Based on 30+ skin parameters</span>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-[#F3E8FF]">
            <UserCheck className="w-4 h-4 text-[#A855F7]" />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-gray-900 mb-0.5">Expert-Backed</span>
            <span className="text-[9px] font-medium text-gray-500">Reviewed by dermatologists</span>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-[#F3E8FF]">
            <Activity className="w-4 h-4 text-[#A855F7]" />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-gray-900 mb-0.5">Safe & Effective</span>
            <span className="text-[9px] font-medium text-gray-500">Only proven ingredients</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default function IngredientsContent() {
  return (
    <div className="flex-1 flex flex-col min-w-0">
      <IngredientsHero />
      <PopularIngredients />
      <IngredientsTable />
      <IngredientsPromo />
    </div>
  );
}
