import { LayoutDashboard, Target, AlertCircle, BarChart2, Activity, ListChecks, Lock, HeadphonesIcon } from "lucide-react";

export default function AnalysisSidebar() {
  const menuItems = [
    { icon: <LayoutDashboard className="w-4 h-4" />, label: "Overview", active: true },
    { icon: <Target className="w-4 h-4" />, label: "Skin Score" },
    { icon: <AlertCircle className="w-4 h-4" />, label: "Skin Concerns" },
    { icon: <BarChart2 className="w-4 h-4" />, label: "Detailed Analysis" },
    { icon: <Activity className="w-4 h-4" />, label: "Compare Progress" },
    { icon: <ListChecks className="w-4 h-4" />, label: "Recommendations" }
  ];

  return (
    <aside className="w-full lg:w-[240px] flex-shrink-0 flex flex-col gap-6 lg:gap-8">
      
      {/* Navigation Menu */}
      <div className="flex flex-col">
        <h4 className="text-sm font-bold text-gray-900 mb-3 px-3">Analysis Overview</h4>
        <nav className="flex flex-row flex-wrap lg:flex-col gap-1">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                item.active 
                  ? "bg-[#FAF5FF] text-[#A855F7]" 
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Promo Card */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col items-start">
        <h4 className="text-sm font-bold text-gray-900 mb-2">Unlock Deeper Insights</h4>
        <p className="text-xs font-medium text-gray-500 mb-4 leading-relaxed">
          Get a complete personalized routine and product recommendations.
        </p>
        <button className="w-full bg-[#A855F7] hover:bg-[#9333EA] text-white rounded-lg py-2.5 text-sm font-bold shadow-sm transition-colors flex items-center justify-center gap-2 mb-4">
          <Lock className="w-4 h-4" />
          Unlock Full Report
        </button>
        {/* Mock Graphic */}
        <div className="w-full h-24 bg-gradient-to-br from-[#FAF5FF] to-white rounded-lg border border-[#F3E8FF] flex items-center justify-center opacity-80 mix-blend-multiply">
           <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C084FC" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
             <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
             <line x1="9" y1="3" x2="9" y2="21"></line>
             <path d="M13 8h4"></path>
             <path d="M13 12h4"></path>
           </svg>
        </div>
      </div>

      {/* Help Card */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col items-start">
        <h4 className="text-sm font-bold text-gray-900 mb-2">Need Help?</h4>
        <p className="text-xs font-medium text-gray-500 mb-4 leading-relaxed">
          Our dermatology experts are here for you.
        </p>
        <button className="w-full bg-white border border-[#A855F7] text-[#A855F7] hover:bg-[#FAF5FF] rounded-lg py-2 text-sm font-bold transition-colors flex items-center justify-center gap-2">
          <HeadphonesIcon className="w-4 h-4" />
          Chat with Expert
        </button>
      </div>

    </aside>
  );
}
