import { 
  Activity, CircleDot, Zap, Waves, Hexagon, Droplet, Sun, 
  ArrowRight, HeadphonesIcon 
} from "lucide-react";

export default function ConcernsSidebar() {
  const concernsList = [
    { id: 1, name: "Acne", level: "High", icon: <Activity className="w-4 h-4 text-rose-500" />, active: true },
    { id: 2, name: "Dark Spots", level: "Moderate", icon: <CircleDot className="w-4 h-4 text-amber-500" /> },
    { id: 3, name: "Wrinkles", level: "Mild", icon: <Waves className="w-4 h-4 text-purple-500" /> },
    { id: 4, name: "Uneven Tone", level: "Moderate", icon: <Sun className="w-4 h-4 text-amber-500" /> },
    { id: 5, name: "Enlarged Pores", level: "High", icon: <Hexagon className="w-4 h-4 text-cyan-500" /> },
    { id: 6, name: "Dryness", level: "Mild", icon: <Droplet className="w-4 h-4 text-blue-500" /> },
    { id: 7, name: "Sensitivity", level: "Mild", icon: <Zap className="w-4 h-4 text-emerald-500" /> }
  ];

  return (
    <aside className="w-full lg:w-[240px] flex-shrink-0 flex flex-col gap-4 lg:gap-6">
      
      {/* All Concerns List */}
      <div className="flex flex-col">
        <h4 className="text-sm font-bold text-gray-900 mb-1 px-3">All Concerns</h4>
        <p className="text-[11px] font-medium text-gray-500 mb-4 px-3">Explore and manage your skin concerns</p>
        
        <nav className="flex flex-row flex-wrap lg:flex-col gap-1">
          {concernsList.map((item) => (
            <button
              key={item.id}
              className={`flex items-center justify-between p-3 rounded-xl transition-colors ${
                item.active 
                  ? "bg-[#FAF5FF] shadow-sm" 
                  : "hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${item.active ? 'bg-white' : 'bg-gray-50'}`}>
                  {item.icon}
                </div>
                <div className="flex flex-col items-start">
                  <span className={`text-xs font-bold ${item.active ? 'text-gray-900' : 'text-gray-700'}`}>
                    {item.name}
                  </span>
                  <span className="text-[10px] font-medium text-gray-500">
                    {item.level}
                  </span>
                </div>
              </div>
              {item.active && <ArrowRight className="w-4 h-4 text-[#A855F7]" />}
            </button>
          ))}
        </nav>
      </div>

      {/* Promo Card */}
      <div className="bg-[#FAF5FF] rounded-2xl p-5 shadow-sm border border-[#F3E8FF] flex flex-col items-start mt-4">
        <h4 className="text-sm font-bold text-gray-900 mb-2 leading-snug">
          Want to improve all concerns together?
        </h4>
        <p className="text-xs font-medium text-gray-600 mb-4 leading-relaxed">
          Get a personalized routine that addresses all your skin concerns.
        </p>
        <button className="w-full bg-white border border-[#A855F7] text-[#A855F7] hover:bg-purple-50 rounded-lg py-2.5 text-xs font-bold transition-colors">
          View Full Routine
        </button>
      </div>

      {/* Help Card */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col items-start">
        <h4 className="text-sm font-bold text-gray-900 mb-2">Need help?</h4>
        <p className="text-xs font-medium text-gray-500 mb-4 leading-relaxed">
          Our skincare experts are here for you.
        </p>
        <button className="w-full bg-white border border-gray-200 text-[#A855F7] hover:border-[#A855F7] hover:bg-[#FAF5FF] rounded-lg py-2 text-xs font-bold transition-colors flex items-center justify-center gap-2">
          <HeadphonesIcon className="w-4 h-4" />
          Chat with Expert
        </button>
      </div>

    </aside>
  );
}
