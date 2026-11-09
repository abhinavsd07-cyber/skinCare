import { Truck, ShieldCheck, Lock, RefreshCw } from "lucide-react";

export default function FooterInfoBar() {
  const features = [
    {
      icon: <Truck className="w-5 h-5 text-[#C084FC]" />,
      title: "Free Shipping",
      desc: "On orders above ₹999"
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#C084FC]" />,
      title: "Dermatologist Tested",
      desc: "Safe and effective formulas"
    },
    {
      icon: <Lock className="w-5 h-5 text-[#C084FC]" />,
      title: "Secure Payments",
      desc: "100% secure checkout"
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-[#C084FC]" />,
      title: "30-Day Returns",
      desc: "Hassle-free returns"
    }
  ];

  return (
    <div className="w-full bg-[#FAFAFA] border-t border-gray-100 py-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#FAF5FF] flex flex-shrink-0 items-center justify-center">
              {item.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-gray-900">{item.title}</span>
              <span className="text-xs text-gray-500 font-medium">{item.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
