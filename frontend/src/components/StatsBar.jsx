import { ShieldCheck, Camera, Sparkles, Star } from "lucide-react";

export default function StatsBar() {
  const stats = [
    {
      value: "95%",
      label: "Analysis Accuracy",
      icon: <ShieldCheck className="w-5 h-5 text-indigo-500" />,
      bg: "bg-indigo-50"
    },
    {
      value: "500K+",
      label: "Scans Completed",
      icon: <Camera className="w-5 h-5 text-purple-500" />,
      bg: "bg-purple-50"
    },
    {
      value: "30+",
      label: "Skin Conditions",
      icon: <Sparkles className="w-5 h-5 text-pink-500" />,
      bg: "bg-pink-50"
    },
    {
      value: "4.9",
      label: "User Rating",
      icon: <Star className="w-5 h-5 text-amber-500 fill-amber-500" />,
      bg: "bg-amber-50"
    }
  ];

  return (
    <section className="w-full bg-white border-y border-gray-100 py-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center">
          {stats.map((stat, idx) => (
            <div 
              key={stat.label} 
              className="flex items-center gap-4 justify-center md:justify-start hover:translate-y-[-2px] transition-transform duration-200"
            >
              {/* Icon */}
              <div className={`w-11 h-11 rounded-xl ${stat.bg} flex items-center justify-center shrink-0 shadow-sm`}>
                {stat.icon}
              </div>
              
              {/* Value / Label */}
              <div className="flex flex-col leading-tight">
                <span className="text-2xl font-bold text-gray-900 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[11px] text-gray-500 font-semibold mt-0.5 tracking-wide">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
