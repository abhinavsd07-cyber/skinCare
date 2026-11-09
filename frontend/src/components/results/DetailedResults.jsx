import { Droplet, Wind, Box, Maximize, Sun, Zap, CheckCircle2, ShieldCheck, Asterisk } from "lucide-react";

export default function DetailedResults() {
  const rows = [
    {
      param: "Hydration", icon: <Droplet className="w-3.5 h-3.5 text-blue-500" />, iconBg: "bg-blue-50",
      score: 78,
      status: "Good", statusColor: "text-emerald-600", statusIcon: <CheckCircle2 className="w-3 h-3" />,
      benchmark: 75,
      barColor: "bg-emerald-500"
    },
    {
      param: "Elasticity", icon: <Wind className="w-3.5 h-3.5 text-[#C084FC]" />, iconBg: "bg-[#FAF5FF]",
      score: 72,
      status: "Good", statusColor: "text-emerald-600", statusIcon: <CheckCircle2 className="w-3 h-3" />,
      benchmark: 70,
      barColor: "bg-emerald-500"
    },
    {
      param: "Texture", icon: <Box className="w-3.5 h-3.5 text-amber-500" />, iconBg: "bg-amber-50",
      score: 70,
      status: "Fair", statusColor: "text-amber-500", statusIcon: <Asterisk className="w-3 h-3" />,
      benchmark: 65,
      barColor: "bg-amber-400"
    },
    {
      param: "Pores", icon: <Maximize className="w-3.5 h-3.5 text-rose-500" />, iconBg: "bg-rose-50",
      score: 65,
      status: "Fair", statusColor: "text-amber-500", statusIcon: <Asterisk className="w-3 h-3" />,
      benchmark: 60,
      barColor: "bg-amber-400"
    },
    {
      param: "Radiance", icon: <Sun className="w-3.5 h-3.5 text-orange-500" />, iconBg: "bg-orange-50",
      score: 80,
      status: "Very Good", statusColor: "text-emerald-600", statusIcon: <ShieldCheck className="w-3 h-3" />,
      benchmark: 75,
      barColor: "bg-emerald-600"
    },
    {
      param: "Clarity", icon: <Zap className="w-3.5 h-3.5 text-blue-500" />, iconBg: "bg-blue-50",
      score: 75,
      status: "Good", statusColor: "text-emerald-600", statusIcon: <CheckCircle2 className="w-3 h-3" />,
      benchmark: 70,
      barColor: "bg-emerald-500"
    }
  ];

  return (
    <div className="w-full bg-white rounded-[24px] border border-gray-100 shadow-sm p-6 overflow-hidden">
      <h3 className="text-[15px] font-bold text-gray-900 mb-6">Detailed Results</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[500px]">
          <thead>
            <tr>
              <th className="pb-4 text-[9px] font-bold text-gray-400 uppercase tracking-wider w-[30%]">PARAMETER</th>
              <th className="pb-4 text-[9px] font-bold text-gray-400 uppercase tracking-wider w-[20%] text-center">YOUR SCORE</th>
              <th className="pb-4 text-[9px] font-bold text-gray-400 uppercase tracking-wider w-[20%]">STATUS</th>
              <th className="pb-4 text-[9px] font-bold text-gray-400 uppercase tracking-wider w-[30%]">BENCHMARK</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className="border-t border-gray-50">
                
                {/* Parameter */}
                <td className="py-3.5">
                  <div className="flex items-center gap-3">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${row.iconBg}`}>
                      {row.icon}
                    </div>
                    <span className="text-[11px] font-bold text-gray-900">{row.param}</span>
                  </div>
                </td>
                
                {/* Your Score */}
                <td className="py-3.5 text-center">
                  <span className="text-[11px] font-bold text-gray-900">{row.score}</span>
                  <span className="text-[9px] font-bold text-gray-400">/100</span>
                </td>
                
                {/* Status */}
                <td className="py-3.5">
                  <div className={`flex items-center gap-1.5 ${row.statusColor}`}>
                    {row.statusIcon}
                    <span className="text-[11px] font-bold">{row.status}</span>
                  </div>
                </td>
                
                {/* Benchmark */}
                <td className="py-3.5 pr-2">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden flex">
                      <div className={`h-full ${row.barColor}`} style={{ width: `${row.score}%` }}></div>
                    </div>
                    <span className="text-[10px] font-bold text-gray-500 w-4">{row.benchmark}</span>
                  </div>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
