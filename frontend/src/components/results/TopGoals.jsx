import { Droplet, Sun, Wind, Zap } from "lucide-react";

export default function TopGoals() {
  const goals = [
    { name: "Minimize Pores", value: 60, icon: <Droplet className="w-3.5 h-3.5 text-[#C084FC]" />, color: "bg-[#C084FC]" },
    { name: "Even Skin Tone", value: 50, icon: <Sun className="w-3.5 h-3.5 text-amber-400" />, color: "bg-amber-400" },
    { name: "Improve Texture", value: 45, icon: <Wind className="w-3.5 h-3.5 text-amber-500" />, color: "bg-amber-500" },
    { name: "Reduce Dark Spots", value: 40, icon: <Zap className="w-3.5 h-3.5 text-rose-400" />, color: "bg-rose-400" }
  ];

  return (
    <div className="w-full bg-white rounded-[24px] border border-gray-100 shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-[13px] font-bold text-gray-900">Top Goals For You</h3>
        <button className="text-[10px] font-bold text-[#A855F7] border border-[#E9D5FF] px-2 py-1 rounded-md hover:bg-[#FAF5FF]">
          Customize Goals
        </button>
      </div>
      
      <div className="flex flex-col gap-5">
        {goals.map((goal, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 border border-gray-100">
                  {goal.icon}
                </div>
                <span className="text-[11px] font-bold text-gray-900">{goal.name}</span>
              </div>
              <span className="text-[10px] font-bold text-gray-500">{goal.value}%</span>
            </div>
            
            <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden flex pl-8">
              <div className={`h-full ${goal.color}`} style={{ width: `${goal.value}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
