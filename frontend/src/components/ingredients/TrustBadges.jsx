import { ShieldCheck, Activity, Search, Leaf } from "lucide-react";

export default function TrustBadges() {
  const badges = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#A855F7]" />,
      title: "Clean & Safe Ingredients",
      desc: "Dermatologist approved"
    },
    {
      icon: <Activity className="w-5 h-5 text-[#A855F7]" />,
      title: "Science-Backed Formulas",
      desc: "Proven results"
    },
    {
      icon: <Search className="w-5 h-5 text-[#A855F7]" />,
      title: "Transparent & Honest",
      desc: "No hidden ingredients"
    },
    {
      icon: <Leaf className="w-5 h-5 text-[#A855F7]" />,
      title: "Sustainable Beauty",
      desc: "Kind to skin & planet"
    }
  ];

  return (
    <div className="w-full bg-white rounded-[2rem] border border-gray-100 shadow-sm px-6 py-8 sm:px-10 lg:py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {badges.map((badge, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#FAF5FF] flex items-center justify-center flex-shrink-0 border border-[#F3E8FF]">
              {badge.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-gray-900 mb-0.5">{badge.title}</span>
              <span className="text-[10px] font-medium text-gray-500">{badge.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
