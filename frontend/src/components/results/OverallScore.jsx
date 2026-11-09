import { ChevronDown, ArrowUp } from "lucide-react";
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, 
  LineChart, Line, XAxis, Tooltip, ResponsiveContainer
} from 'recharts';

export default function OverallScore() {
  const radarData = [
    { subject: 'Hydration', A: 78, fullMark: 100 },
    { subject: 'Elasticity', A: 72, fullMark: 100 },
    { subject: 'Texture', A: 70, fullMark: 100 },
    { subject: 'Pores', A: 65, fullMark: 100 },
    { subject: 'Clarity', A: 75, fullMark: 100 },
  ];

  const lineData = [
    { name: 'Mar 20', score: 72 },
    { name: 'Apr 20', score: 78 },
    { name: 'May 20', score: 85 },
  ];

  return (
    <div className="w-full bg-white rounded-[24px] border border-gray-100 shadow-sm overflow-hidden flex flex-col lg:flex-row">
      
      {/* Left: Overall Score */}
      <div className="p-8 lg:w-1/3 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-100">
        <h3 className="text-[13px] font-bold text-gray-900 mb-6">Overall Skin Score</h3>
        
        <div className="flex items-baseline gap-1 mb-3">
          <span className="text-6xl font-bold text-gray-900 tracking-tighter">85</span>
          <span className="text-xl font-bold text-gray-400">/100</span>
        </div>
        
        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          <span className="text-[13px] font-bold text-emerald-500">Good</span>
        </div>
        
        {/* Gradient progress bar */}
        <div className="w-full h-2 rounded-full bg-gray-100 mb-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-[#C084FC] to-[#818CF8]" style={{ width: '85%' }}></div>
        </div>
        
        <p className="text-[11px] font-medium text-gray-500 leading-relaxed">
          Your skin is healthy! Keep following your routine and focus on improving the areas highlighted below.
        </p>
      </div>
      
      {/* Middle: Radar Chart */}
      <div className="p-6 lg:w-1/3 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-100 min-h-[250px]">
        <ResponsiveContainer width="100%" height={220}>
          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
            <PolarGrid stroke="#f3f4f6" />
            <PolarAngleAxis 
              dataKey="subject" 
              tick={{ fill: '#4b5563', fontSize: 9, fontWeight: 'bold' }} 
            />
            <Radar 
              name="Skin" 
              dataKey="A" 
              stroke="#A855F7" 
              strokeWidth={2}
              fill="#C084FC" 
              fillOpacity={0.4} 
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      
      {/* Right: Score History Line Chart */}
      <div className="p-8 lg:w-1/3 flex flex-col justify-center">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-[13px] font-bold text-gray-900">Score History</h3>
          <div className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-2.5 py-1 cursor-pointer hover:bg-gray-50 transition-colors">
            <span className="text-[10px] font-bold text-gray-600">Last 3 Months</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
          </div>
        </div>
        
        <div className="h-[120px] w-full mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData} margin={{ top: 20, right: 10, left: 10, bottom: 0 }}>
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#6b7280', fontSize: 10, fontWeight: 500 }} 
                dy={10}
              />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                itemStyle={{ color: '#9333EA', fontWeight: 'bold', fontSize: '12px' }}
                labelStyle={{ color: '#6b7280', fontSize: '10px' }}
              />
              <Line 
                type="monotone" 
                dataKey="score" 
                stroke="#A855F7" 
                strokeWidth={2}
                dot={{ r: 4, fill: '#A855F7', strokeWidth: 0 }}
                activeDot={{ r: 6, fill: '#9333EA' }}
                label={{ position: 'top', fill: '#111827', fontSize: 10, fontWeight: 'bold', dy: -10 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1 text-emerald-500">
            <ArrowUp className="w-3.5 h-3.5" />
            <span className="text-[11px] font-bold">13 pts improvement</span>
          </div>
          <p className="text-[10px] font-medium text-gray-500">
            Great job! Your skin is getting better.
          </p>
        </div>
      </div>
      
    </div>
  );
}
