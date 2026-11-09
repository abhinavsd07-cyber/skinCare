import { 
  Activity, CircleDot, Zap, Waves, Hexagon, Droplet, Sun, 
  ArrowRight, HeadphonesIcon, ChevronDown, Flame, Search, Fingerprint, Info, ShieldCheck, ShoppingCart, Lock
} from "lucide-react";

const ConcernsHero = () => {
  return (
    <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-8 overflow-hidden flex flex-col md:flex-row items-center justify-between min-h-[240px]">
      
      <div className="flex flex-col z-10 max-w-lg">
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Acne</h1>
          <span className="px-3 py-1 rounded-full bg-rose-50 text-rose-500 text-[10px] font-bold uppercase tracking-wider">
            High Priority
          </span>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed font-medium">
          Acne occurs when hair follicles become clogged with oil and dead skin cells, leading to breakouts.
        </p>
      </div>

      {/* Decorative Image area */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 md:w-[45%] lg:w-[40%] flex justify-end">
        <div className="relative w-full h-full">
           <div className="absolute inset-0 bg-gradient-to-l from-rose-50/50 to-transparent"></div>
           {/* Semi-circle crop effect */}
           <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[120%] aspect-square rounded-full overflow-hidden bg-rose-50/30 -mr-[10%]">
             <img 
               src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop" 
               alt="Face" 
               className="w-full h-full object-cover opacity-90 mix-blend-multiply"
             />
           </div>
        </div>
      </div>
    </div>
  );
};

const ConcernsTabs = () => {
  const tabs = ["Overview", "Causes", "Solutions", "Products", "Progress"];
  return (
    <div className="flex items-center gap-8 border-b border-gray-200 mb-8">
      {tabs.map((tab, idx) => (
        <button 
          key={tab} 
          className={`pb-4 text-sm font-bold transition-colors relative ${
            idx === 0 ? "text-[#A855F7]" : "text-gray-400 hover:text-gray-900"
          }`}
        >
          {tab}
          {idx === 0 && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#A855F7]"></div>
          )}
        </button>
      ))}
    </div>
  );
};

const StatsRow = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      
      {/* Level */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between">
        <h4 className="text-xs font-bold text-gray-900 mb-6">Your Concern Level</h4>
        <div>
          <div className="text-3xl font-bold text-rose-500 mb-2">High</div>
          <div className="flex items-center justify-between mb-2 text-[10px] font-bold text-gray-500">
            <span>Score: 72/100</span>
          </div>
          <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-rose-400 to-rose-500 w-[72%]"></div>
          </div>
        </div>
      </div>

      {/* Detected In */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between">
        <h4 className="text-xs font-bold text-gray-900 mb-6">Detected In</h4>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#FAF5FF] flex items-center justify-center flex-shrink-0">
             <Fingerprint className="w-5 h-5 text-[#A855F7]" />
          </div>
          <span className="text-sm font-bold text-gray-900 leading-snug">Cheeks, Forehead<br/>Chin</span>
        </div>
      </div>

      {/* Main Type */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between">
        <h4 className="text-xs font-bold text-gray-900 mb-6">Main Type</h4>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center flex-shrink-0">
             <Flame className="w-5 h-5 text-rose-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-gray-900">Inflammatory Acne</span>
            <span className="text-[10px] font-medium text-gray-500 mt-1">Red bumps and pimples</span>
          </div>
        </div>
      </div>

      {/* Impact on Score */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between">
        <h4 className="text-xs font-bold text-gray-900 mb-6">Impact on Score</h4>
        <div className="flex flex-col">
          <span className="text-3xl font-bold text-rose-500 mb-1">-18 pts</span>
          <span className="text-[10px] font-medium text-gray-500 leading-relaxed">Affecting your overall skin health</span>
        </div>
      </div>

    </div>
  );
};

const DetailedAnalysis = () => {
  const bars = [
    { label: "Inflammation", val: "High", pct: 85, color: "bg-rose-500" },
    { label: "Active Breakouts", val: "Moderate", pct: 60, color: "bg-amber-400" },
    { label: "Oil Production", val: "High", pct: 80, color: "bg-rose-500" },
    { label: "Clogged Pores", val: "High", pct: 75, color: "bg-rose-500" },
    { label: "Post Acne Marks", val: "Moderate", pct: 55, color: "bg-amber-400" }
  ];

  const causes = [
    { title: "Excess oil production", desc: "Your sebaceous glands are producing more oil than your skin needs." },
    { title: "Clogged pores", desc: "Dead skin cells and oil are clogging your pores, leading to breakouts." },
    { title: "Bacteria buildup", desc: "Bacteria on the skin can cause inflammation and pimple formation." },
    { title: "Hormonal factors", desc: "Hormonal changes can trigger increased oil production and breakouts." }
  ];

  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 mb-8 flex flex-col xl:flex-row items-center gap-12">
      
      {/* Left Bars */}
      <div className="flex-1 w-full">
        <h3 className="text-lg font-bold text-gray-900 mb-2">Your Acne Analysis</h3>
        <p className="text-[11px] font-medium text-gray-500 mb-8 max-w-[200px] leading-relaxed">
          AI analysis shows inflammation, clogged pores, and excess oil production.
        </p>

        <div className="flex flex-col gap-5">
          {bars.map((bar, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
                <Search className="w-3 h-3 text-gray-400" />
              </div>
              <div className="flex flex-col flex-1 gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-gray-900">{bar.label}</span>
                  <span className="text-[10px] font-bold text-gray-900">{bar.val}</span>
                </div>
                <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full ${bar.color}`} style={{ width: `${bar.pct}%` }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Center Image */}
      <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-rose-100 flex items-center justify-center p-4">
           {/* Decorative dots on circle */}
           <div className="absolute top-0 w-2 h-2 rounded-full bg-rose-200"></div>
           <div className="absolute bottom-0 w-2 h-2 rounded-full bg-rose-200"></div>
           <div className="absolute left-0 w-2 h-2 rounded-full bg-rose-200"></div>
           <div className="absolute right-0 w-2 h-2 rounded-full bg-rose-200"></div>
           
           <img 
             src="https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=400&auto=format&fit=crop" 
             alt="Skin Detail" 
             className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
           />
        </div>
      </div>

      {/* Right List */}
      <div className="flex-1 w-full bg-gray-50/50 rounded-2xl p-6">
        <h3 className="text-sm font-bold text-gray-900 mb-6">What's causing your acne?</h3>
        <div className="flex flex-col gap-6">
          {causes.map((cause, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Info className="w-4 h-4 text-rose-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-900 mb-1">{cause.title}</span>
                <p className="text-[10px] font-medium text-gray-500 leading-relaxed max-w-[200px]">
                  {cause.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

const SolutionsProducts = () => {
  const ingredients = [
    { name: "Salicylic Acid", desc: "Unclogs pores and reduces inflammation", icon: <Droplet className="w-4 h-4 text-blue-500" />, bg: "bg-blue-50" },
    { name: "Azelaic Acid", desc: "Reduces redness and prevents breakouts", icon: <Sun className="w-4 h-4 text-amber-500" />, bg: "bg-amber-50" },
    { name: "Niacinamide", desc: "Reduces oil production and soothes skin", icon: <Activity className="w-4 h-4 text-emerald-500" />, bg: "bg-emerald-50" },
    { name: "Zinc PCA", desc: "Controls oil production and reduces shine", icon: <Hexagon className="w-4 h-4 text-cyan-500" />, bg: "bg-cyan-50" },
    { name: "Benzoyl Peroxide", desc: "Kills acne-causing bacteria and reduces inflammation", icon: <Flame className="w-4 h-4 text-rose-500" />, bg: "bg-rose-50" },
    { name: "Tea Tree Oil", desc: "Natural antibacterial and anti-inflammatory", icon: <Zap className="w-4 h-4 text-emerald-500" />, bg: "bg-emerald-50" }
  ];

  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-8">
      
      {/* Recommended Solutions */}
      <div className="flex-1 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
        <h3 className="text-sm font-bold text-gray-900 mb-1">Recommended Solutions</h3>
        <p className="text-[11px] font-medium text-gray-500 mb-6">Scientifically proven ingredients to help treat acne</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
          {ingredients.map((ing, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className={`w-10 h-10 rounded-full ${ing.bg} flex items-center justify-center flex-shrink-0`}>
                {ing.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-900 mb-1">{ing.name}</span>
                <p className="text-[10px] font-medium text-gray-500 leading-tight">
                  {ing.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Product Picks */}
      <div className="flex-[1.2] bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-sm font-bold text-gray-900">Top Product Picks For You</h3>
          <button className="text-[10px] font-bold text-[#A855F7] hover:text-[#9333EA]">View All</button>
        </div>
        <p className="text-[11px] font-medium text-gray-500 mb-6">Curated products that target acne effectively</p>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map(idx => (
            <div key={idx} className="flex flex-col border border-gray-100 rounded-2xl p-3 hover:border-[#A855F7] transition-colors group">
              <div className="w-full h-24 bg-gray-50 rounded-xl mb-3 flex items-center justify-center p-2">
                <img 
                  src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=200&auto=format&fit=crop" 
                  alt="Product" 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform"
                />
              </div>
              <h5 className="text-[10px] font-bold text-gray-900 leading-snug mb-2 flex-grow">
                {idx === 1 ? "Salicylic Acid Cleanser" : idx === 2 ? "Niacinamide Serum" : idx === 3 ? "Oil Control Moisturizer" : "Acne Spot Treatment"}
              </h5>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs font-bold text-gray-900">₹{idx === 1 ? 699 : idx === 2 ? 1199 : idx === 3 ? 899 : 599}</span>
                <button className="w-6 h-6 rounded-md border border-gray-200 flex items-center justify-center text-[#A855F7] hover:bg-[#FAF5FF]">
                  <ShoppingCart className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PromoBannerBottom = () => {
  return (
    <div className="w-full rounded-3xl bg-gradient-to-r from-[#FAF5FF] to-white border border-[#E9D5FF] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute left-0 top-0 w-64 h-64 bg-purple-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="flex items-center gap-8 relative z-10">
        <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 hidden sm:block">
          <img 
            src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=400&auto=format&fit=crop" 
            alt="Products" 
            className="w-full h-full object-contain mix-blend-multiply"
          />
        </div>
        
        <div className="flex flex-col items-start max-w-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to clear your skin?</h3>
          <p className="text-xs font-medium text-gray-600 mb-6 leading-relaxed">
            Get a personalized routine and expert-recommended products to effectively treat acne and prevent future breakouts.
          </p>
          <button className="bg-[#A855F7] hover:bg-[#9333EA] text-white rounded-xl px-8 py-3.5 text-sm font-bold shadow-md transition-all flex items-center gap-2">
            <Lock className="w-4 h-4" />
            Unlock My Acne Routine
          </button>
        </div>
      </div>
      
      <div className="flex flex-col gap-3 relative z-10 w-full sm:w-auto">
        <div className="flex items-center gap-3 bg-white px-5 py-2.5 rounded-xl shadow-sm border border-gray-50">
          <ShieldCheck className="w-4 h-4 text-[#A855F7]" />
          <span className="text-[11px] font-bold text-gray-900">Dermatologist Tested</span>
        </div>
        <div className="flex items-center gap-3 bg-white px-5 py-2.5 rounded-xl shadow-sm border border-gray-50">
          <Activity className="w-4 h-4 text-[#A855F7]" />
          <span className="text-[11px] font-bold text-gray-900">Safe & Effective</span>
        </div>
        <div className="flex items-center gap-3 bg-white px-5 py-2.5 rounded-xl shadow-sm border border-gray-50">
          <Zap className="w-4 h-4 text-[#A855F7]" />
          <span className="text-[11px] font-bold text-gray-900">Results Driven</span>
        </div>
      </div>

    </div>
  );
};

export default function ConcernsContent() {
  return (
    <div className="flex-1 flex flex-col min-w-0">
      <ConcernsHero />
      <ConcernsTabs />
      <StatsRow />
      <DetailedAnalysis />
      <SolutionsProducts />
      <PromoBannerBottom />
    </div>
  );
}
