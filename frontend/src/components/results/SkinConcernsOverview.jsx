import { Droplet, Sun, Wind, CheckCircle2, Zap } from "lucide-react";

export default function SkinConcernsOverview() {
  const concerns = [
    {
      name: "Visible Pores",
      status: "Mild",
      statusColor: "text-emerald-500",
      icon: <Droplet className="w-5 h-5 text-[#C084FC]" />,
      score: 22,
      progressColor: "bg-[#C084FC]"
    },
    {
      name: "Uneven Tone",
      status: "Mild",
      statusColor: "text-emerald-500",
      icon: <Sun className="w-5 h-5 text-[#F43F5E]" />,
      score: 28,
      progressColor: "bg-[#818CF8]"
    },
    {
      name: "Fine Lines",
      status: "Mild",
      statusColor: "text-emerald-500",
      icon: <Wind className="w-5 h-5 text-[#818CF8]" />,
      score: 25,
      progressColor: "bg-[#818CF8]"
    },
    {
      name: "Acne",
      status: "Very Mild",
      statusColor: "text-emerald-500",
      icon: <CheckCircle2 className="w-5 h-5 text-rose-400" />,
      score: 15,
      progressColor: "bg-emerald-400"
    },
    {
      name: "Dark Spots",
      status: "Mild",
      statusColor: "text-emerald-500",
      icon: <Zap className="w-5 h-5 text-[#C084FC]" />,
      score: 30,
      progressColor: "bg-[#818CF8]"
    }
  ];

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[15px] font-bold text-gray-900">Skin Concerns Overview</h3>
        <button className="text-[10px] font-bold text-[#A855F7] border border-[#E9D5FF] px-2 py-1 rounded-md hover:bg-[#FAF5FF]">
          View All
        </button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {concerns.map((item, idx) => (
          <div key={idx} className="bg-white rounded-[20px] p-4 border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
            <div className="w-10 h-10 rounded-full bg-[#FAF5FF] flex items-center justify-center mb-3">
              {item.icon}
            </div>
            
            <h5 className="text-[11px] font-bold text-gray-900 mb-0.5">{item.name}</h5>
            <span className={`text-[10px] font-bold ${item.statusColor} mb-4`}>{item.status}</span>
            
            <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden mb-2">
              <div className={`h-full ${item.progressColor}`} style={{ width: `${item.score}%` }}></div>
            </div>
            
            <span className="text-[10px] font-bold text-gray-900">{item.score}/100</span>
          </div>
        ))}
      </div>
    </div>
  );
}
