import { ShieldCheck, Lock, RefreshCw, Sparkles } from "lucide-react";

export default function FeaturesBanner() {
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#A855F7]" />,
      title: "Dermatologist Reviewed",
      desc: "All recommendations are reviewed by skincare experts."
    },
    {
      icon: <Lock className="w-6 h-6 text-[#A855F7]" />,
      title: "Secure & Private",
      desc: "Your data is encrypted and never shared."
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-[#A855F7]" />,
      title: "Cancel Anytime",
      desc: "Change or cancel your plan anytime, hassle-free."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#A855F7]" />,
      title: "30-Day Guarantee",
      desc: "Not satisfied? Get a full refund within 30 days."
    }
  ];

  return (
    <div className="w-full bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8 mb-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
        {features.map((feat, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF5FF] border border-[#F3E8FF] flex items-center justify-center mb-4">
              {feat.icon}
            </div>
            <h4 className="text-[12px] font-bold text-gray-900 mb-2">{feat.title}</h4>
            <p className="text-[11px] font-medium text-gray-500 leading-relaxed">
              {feat.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
