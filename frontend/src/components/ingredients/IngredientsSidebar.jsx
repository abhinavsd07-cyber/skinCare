import { 
  Droplet, Sun, Clock, Target, Wind, Waves, Sparkles, ShieldCheck, Umbrella,
  ChevronDown, Info
} from "lucide-react";

export default function IngredientsSidebar() {
  const categories = [
    { name: "All Ingredients", count: 132, icon: <div className="w-4 h-4 rounded-full border-2 border-purple-400" />, active: true },
    { name: "Hydrating", count: 24, icon: <Droplet className="w-4 h-4 text-blue-400" /> },
    { name: "Brightening", count: 18, icon: <Sun className="w-4 h-4 text-amber-400" /> },
    { name: "Anti-Aging", count: 22, icon: <Clock className="w-4 h-4 text-rose-400" /> },
    { name: "Acne Control", count: 16, icon: <Target className="w-4 h-4 text-emerald-400" /> },
    { name: "Soothing", count: 20, icon: <Wind className="w-4 h-4 text-teal-400" /> },
    { name: "Exfoliating", count: 12, icon: <Waves className="w-4 h-4 text-purple-400" /> },
    { name: "Antioxidants", count: 14, icon: <Sparkles className="w-4 h-4 text-indigo-400" /> },
    { name: "Skin Barrier", count: 10, icon: <ShieldCheck className="w-4 h-4 text-cyan-400" /> },
    { name: "Sunscreen", count: 6, icon: <Umbrella className="w-4 h-4 text-orange-400" /> }
  ];

  return (
    <aside className="w-full xl:w-[240px] flex-shrink-0 flex flex-col gap-6 lg:gap-8">
      
      {/* Ingredient Categories */}
      <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex flex-col">
        <h4 className="text-[13px] font-bold text-gray-900 mb-4 px-2">Ingredient Categories</h4>
        
        <nav className="flex flex-row flex-wrap xl:flex-col gap-1">
          {categories.map((item, idx) => (
            <button
              key={idx}
              className={`flex items-center justify-between px-3 py-2.5 rounded-xl transition-colors ${
                item.active 
                  ? "bg-[#FAF5FF]" 
                  : "hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`flex items-center justify-center ${item.active ? 'opacity-100' : 'opacity-70'}`}>
                  {item.icon}
                </div>
                <span className={`text-[13px] font-medium ${item.active ? 'text-gray-900 font-bold' : 'text-gray-600'}`}>
                  {item.name}
                </span>
              </div>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                item.active ? 'bg-[#E9D5FF] text-[#9333EA]' : 'text-gray-400 bg-gray-50'
              }`}>
                {item.count}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Filters */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-4 px-2">
          <h4 className="text-[13px] font-bold text-gray-900">Filters</h4>
          <button className="text-[11px] font-bold text-[#A855F7] hover:text-[#9333EA]">Clear all</button>
        </div>

        {/* Skin Type */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3 px-2">
            <span className="text-xs font-bold text-gray-900">Skin Type</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex flex-col gap-2.5 px-2">
            {["Oily", "Dry", "Combination", "Sensitive", "Normal"].map(type => (
              <label key={type} className="flex items-center gap-3 cursor-pointer group">
                <div className="w-4 h-4 rounded border border-gray-300 group-hover:border-[#A855F7] flex items-center justify-center transition-colors"></div>
                <span className="text-[13px] text-gray-600 group-hover:text-gray-900">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Skin Concern */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3 px-2 cursor-pointer">
            <span className="text-xs font-bold text-gray-900">Skin Concern</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex flex-col gap-2.5 px-2">
            {["Acne & Blemishes", "Dark Spots", "Wrinkles", "Uneven Tone", "Dryness", "Enlarged Pores", "Redness"].map(concern => (
              <label key={concern} className="flex items-center gap-3 cursor-pointer group">
                <div className="w-4 h-4 rounded border border-gray-300 group-hover:border-[#A855F7] flex items-center justify-center transition-colors"></div>
                <span className="text-[13px] text-gray-600 group-hover:text-gray-900">{concern}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Ingredient Safety */}
        <div className="mb-6">
          <div className="flex items-center gap-1.5 mb-3 px-2">
            <span className="text-xs font-bold text-gray-900">Ingredient Safety</span>
            <Info className="w-3.5 h-3.5 text-gray-400" />
          </div>
          <div className="flex flex-col gap-2.5 px-2">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center p-[3px]">
                 <div className="w-full h-full bg-emerald-500 rounded-full opacity-0"></div>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className="text-[13px] text-emerald-600 font-medium">Very Safe</span>
              </div>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center p-[3px]">
                 <div className="w-full h-full bg-emerald-400 rounded-full opacity-0"></div>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                <span className="text-[13px] text-emerald-500 font-medium">Safe</span>
              </div>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center p-[3px]">
                 <div className="w-full h-full bg-amber-500 rounded-full opacity-0"></div>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                <span className="text-[13px] text-amber-600 font-medium">Use with Caution</span>
              </div>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="w-4 h-4 rounded-full border border-[#ef4444] flex items-center justify-center p-[3px]">
                 <div className="w-full h-full bg-[#ef4444] rounded-full"></div>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#ef4444]"></div>
                <span className="text-[13px] text-[#ef4444] font-medium">Avoid</span>
              </div>
            </label>
          </div>
        </div>

        {/* Availability */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3 px-2">
            <span className="text-xs font-bold text-gray-900">Availability</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex flex-col gap-2.5 px-2">
            {["Natural", "Synthetic", "Both"].map(avail => (
              <label key={avail} className="flex items-center gap-3 cursor-pointer group">
                <div className="w-4 h-4 rounded border border-gray-300 group-hover:border-[#A855F7] flex items-center justify-center transition-colors"></div>
                <span className="text-[13px] text-gray-600 group-hover:text-gray-900">{avail}</span>
              </label>
            ))}
          </div>
        </div>

        <button className="w-full border border-[#E9D5FF] text-[#A855F7] hover:bg-[#FAF5FF] font-bold text-sm rounded-xl py-3 transition-colors shadow-sm">
          Apply Filters
        </button>

      </div>

    </aside>
  );
}
