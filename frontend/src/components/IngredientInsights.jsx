import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";

export default function IngredientInsights() {
  const [search, setSearch] = useState("");

  const allIngredients = [
    {
      name: "Niacinamide",
      benefit: "Brightens / Improves skin barrier",
      color: "bg-emerald-50 text-emerald-800 border-emerald-100",
      graphic: (
        <div className="w-16 h-16 rounded-full bg-emerald-100/50 border border-emerald-200 relative flex items-center justify-center overflow-hidden shrink-0">
          <div className="absolute w-8 h-8 rounded-full bg-emerald-400/20 animate-pulse"></div>
          <div className="absolute w-4 h-4 rounded-full bg-emerald-500/40"></div>
          <span className="text-[10px] font-bold text-emerald-600">B3</span>
        </div>
      )
    },
    {
      name: "Retinol",
      benefit: "Anti-aging / Reduces fine lines",
      color: "bg-amber-50 text-amber-800 border-amber-100",
      graphic: (
        <div className="w-16 h-16 rounded-full bg-amber-100/50 border border-amber-200 relative flex items-center justify-center overflow-hidden shrink-0">
          <div className="absolute w-10 h-10 rounded-full bg-amber-400/20 animate-ping duration-1000"></div>
          <div className="absolute w-6 h-6 rounded-full bg-amber-500/30"></div>
          <span className="text-[10px] font-bold text-amber-600">Vit A</span>
        </div>
      )
    },
    {
      name: "Salicylic Acid",
      benefit: "Acne Control / Deep pore cleansing",
      color: "bg-sky-50 text-sky-800 border-sky-100",
      graphic: (
        <div className="w-16 h-16 rounded-full bg-sky-100/50 border border-sky-200 relative flex items-center justify-center overflow-hidden shrink-0">
          {/* Bubbles */}
          <div className="absolute top-3 left-4 w-3.5 h-3.5 rounded-full bg-sky-400/30"></div>
          <div className="absolute bottom-3 right-4 w-2.5 h-2.5 rounded-full bg-sky-500/40"></div>
          <div className="absolute center w-5 h-5 rounded-full bg-sky-300/20"></div>
          <span className="text-[10px] font-bold text-sky-600">BHA</span>
        </div>
      )
    }
  ];

  const filtered = allIngredients.filter((ing) =>
    ing.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header Grid */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="flex flex-col items-start">
            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] text-[#C084FC] mb-2">
              INGREDIENT INTELLIGENCE
            </span>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 leading-tight">
              Smart ingredient insights
            </h2>
          </div>

          {/* Search bar */}
          <div className="relative w-full max-w-xs shrink-0">
            <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search ingredients..."
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-medium text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#C084FC] focus:ring-1 focus:ring-[#C084FC] transition-all"
            />
          </div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {filtered.length > 0 ? (
            filtered.map((ing) => (
              <div 
                key={ing.name} 
                className={`bg-white border border-gray-100 rounded-3xl p-6 flex items-center justify-between shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_-6px_rgba(192,132,252,0.06)] hover:border-[#C084FC]/30 transition-all duration-300`}
              >
                <div className="flex flex-col items-start pr-4">
                  <h3 className="font-bold text-lg text-gray-800">{ing.name}</h3>
                  <p className="text-xs text-gray-400 mt-2 font-medium leading-relaxed">
                    {ing.benefit}
                  </p>
                </div>
                {ing.graphic}
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-gray-400 text-sm font-medium">
              No ingredients found matching your search.
            </div>
          )}
        </div>

        {/* View all link */}
        <div className="flex justify-end">
          <a href="#ingredients" className="group flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-[#C084FC] transition-colors no-underline">
            View all ingredients
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
