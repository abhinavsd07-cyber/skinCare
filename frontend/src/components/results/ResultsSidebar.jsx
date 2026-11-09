import { 
  FileText, Activity, Search, Target, TrendingUp, Calendar, Box, Heart, MessageCircle, RefreshCw
} from "lucide-react";

export default function ResultsSidebar() {
  const navItems = [
    { name: "Summary", icon: <FileText className="w-4 h-4" />, active: true },
    { name: "Skin Score", icon: <Activity className="w-4 h-4" /> },
    { name: "Key Findings", icon: <Search className="w-4 h-4" /> },
    { name: "Skin Concerns", icon: <Target className="w-4 h-4" /> },
    { name: "Progress Timeline", icon: <TrendingUp className="w-4 h-4" /> },
    { name: "Routine Plan", icon: <Calendar className="w-4 h-4" /> },
    { name: "Product Recommendations", icon: <Box className="w-4 h-4" /> },
    { name: "Lifestyle Tips", icon: <Heart className="w-4 h-4" /> },
  ];

  return (
    <aside className="w-full xl:w-[240px] flex-shrink-0 flex flex-col gap-6">
      
      {/* Results Overview Nav */}
      <div className="bg-white rounded-[24px] p-4 shadow-sm border border-gray-100 flex flex-col">
        <h4 className="text-[13px] font-bold text-gray-900 mb-4 px-3 pt-2">Results Overview</h4>
        
        <nav className="flex flex-col gap-1">
          {navItems.map((item, idx) => (
            <button
              key={idx}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${
                item.active 
                  ? "bg-[#FAF5FF] text-[#A855F7]" 
                  : "hover:bg-gray-50 text-gray-500 hover:text-gray-900"
              }`}
            >
              <div className={item.active ? "text-[#A855F7]" : "text-gray-400"}>
                {item.icon}
              </div>
              <span className={`text-[12px] font-medium ${item.active ? 'font-bold' : ''}`}>
                {item.name}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Expert Advice CTA */}
      <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex flex-col">
        <h4 className="text-[13px] font-bold text-gray-900 mb-2">Need Expert Advice?</h4>
        <p className="text-[11px] font-medium text-gray-500 leading-relaxed mb-5">
          Chat with our dermatology experts for personalized guidance.
        </p>
        
        <button className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white flex items-center justify-center gap-2 rounded-xl py-3 text-[12px] font-bold transition-colors shadow-sm mb-4">
          <MessageCircle className="w-4 h-4" />
          Chat with Expert
        </button>
        
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60" alt="Expert" className="w-6 h-6 rounded-full border-2 border-white object-cover" />
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=60" alt="Expert" className="w-6 h-6 rounded-full border-2 border-white object-cover" />
            <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&auto=format&fit=crop&q=60" alt="Expert" className="w-6 h-6 rounded-full border-2 border-white object-cover" />
          </div>
          <span className="text-[9px] font-medium text-gray-500">
            9,876+ consultations
          </span>
        </div>
      </div>

      {/* Analysis Meta */}
      <div className="bg-transparent flex flex-col gap-4 px-2">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-medium text-gray-400">Analysis ID</span>
          <span className="text-[11px] font-bold text-gray-900">NUVE-2024-05-20-1030</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-medium text-gray-400">Device</span>
          <span className="text-[11px] font-bold text-gray-900">iPhone 14 Pro</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-medium text-gray-400">Lighting</span>
          <span className="text-[11px] font-bold text-gray-900">Good Lighting</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-medium text-gray-400">Environment</span>
          <span className="text-[11px] font-bold text-gray-900">Indoor</span>
        </div>
        
        <button className="mt-2 w-full flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900 rounded-xl py-2.5 text-[11px] font-bold transition-colors shadow-sm">
          <RefreshCw className="w-3.5 h-3.5" />
          Retake Analysis
        </button>
      </div>

    </aside>
  );
}
