import { CheckCircle2, Sun, Zap } from "lucide-react";

export default function KeyFindings() {
  const findings = [
    {
      title: "Strong Points",
      desc: "Good hydration, balanced oil production, and healthy skin barrier.",
      meta: "5 areas",
      icon: <CheckCircle2 className="w-4 h-4" />,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-100"
    },
    {
      title: "Needs Improvement",
      desc: "Focus on pores, texture, and uneven tone.",
      meta: "3 areas",
      icon: <Sun className="w-4 h-4" />,
      color: "text-amber-500",
      bg: "bg-amber-50",
      border: "border-amber-100"
    },
    {
      title: "Priority Concerns",
      desc: "Visible pores and mild dark spots.",
      meta: "2 concerns",
      icon: <Zap className="w-4 h-4" />,
      color: "text-[#A855F7]",
      bg: "bg-[#FAF5FF]",
      border: "border-[#F3E8FF]"
    }
  ];

  return (
    <div className="w-full">
      <h3 className="text-[15px] font-bold text-gray-900 mb-4">Key Findings</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {findings.map((item, idx) => (
          <div key={idx} className="bg-white rounded-[20px] p-5 border border-gray-100 shadow-sm flex flex-col h-full hover:border-gray-200 transition-colors">
            <div className="flex items-start gap-3 mb-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${item.bg} ${item.color}`}>
                {item.icon}
              </div>
              <h4 className="text-[13px] font-bold text-gray-900 pt-1">{item.title}</h4>
            </div>
            
            <p className="text-[11px] font-medium text-gray-600 leading-relaxed mb-4 flex-grow">
              {item.desc}
            </p>
            
            <div className="text-[10px] font-bold text-gray-400">
              {item.meta}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
