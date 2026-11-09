import { ArrowRight } from "lucide-react";

export default function RecommendedNextSteps() {
  const steps = [
    {
      num: 1,
      title: "Follow Your Routine",
      desc: "Stick to your personalized morning & night routine consistently.",
      meta: "Daily",
      color: "text-[#C084FC]",
      bg: "bg-[#FAF5FF]"
    },
    {
      num: 2,
      title: "Focus on Concerns",
      desc: "Use targeted products for pores and dark spots.",
      meta: "Next 4 Weeks",
      color: "text-[#818CF8]",
      bg: "bg-[#EEF2FF]"
    },
    {
      num: 3,
      title: "Track Progress",
      desc: "Retake analysis to see improvement.",
      meta: "In 4 Weeks",
      color: "text-[#F43F5E]",
      bg: "bg-[#FFF1F2]"
    }
  ];

  return (
    <div className="w-full">
      <h3 className="text-[15px] font-bold text-gray-900 mb-1">Recommended Next Steps</h3>
      <p className="text-[11px] font-medium text-gray-500 mb-6">Personalized plan to help you achieve your best skin</p>
      
      <div className="flex flex-col md:flex-row items-center gap-4">
        {steps.map((step, idx) => (
          <div key={idx} className="flex-1 bg-white rounded-[20px] p-6 border border-gray-100 shadow-sm flex flex-col h-full relative">
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-[13px] mb-4 ${step.bg} ${step.color}`}>
              {step.num}
            </div>
            
            <h4 className="text-[13px] font-bold text-gray-900 mb-2">{step.title}</h4>
            <p className="text-[11px] font-medium text-gray-600 leading-relaxed mb-6 flex-grow">
              {step.desc}
            </p>
            
            <div className="text-[10px] font-bold text-gray-400 mt-auto">
              {step.meta}
            </div>
            
            {/* Arrow connecting cards */}
            {idx < steps.length - 1 && (
              <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-gray-300">
                <ArrowRight className="w-5 h-5" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
