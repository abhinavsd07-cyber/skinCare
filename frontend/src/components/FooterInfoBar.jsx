import { Truck, ShieldCheck, Lock, RefreshCw } from "lucide-react";

export default function FooterInfoBar() {
  const items = [
    {
      icon: <Truck className="w-5 h-5 text-[#7E22CE]" />,
      title: "Free Express Shipping",
      desc: "On orders above ₹999"
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#7E22CE]" />,
      title: "Dermatologist Tested",
      desc: "100% clean & hypoallergenic"
    },
    {
      icon: <Lock className="w-5 h-5 text-[#7E22CE]" />,
      title: "Secure Payments",
      desc: "256-bit encrypted checkout"
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-[#7E22CE]" />,
      title: "30-Day Guarantee",
      desc: "Hassle-free 100% refund"
    }
  ];

  return (
    <div className="w-full bg-[#FAFAFC] border-y border-gray-150 py-10">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-2xl bg-purple-50 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-900 tracking-tight">
                  {item.title}
                </span>
                <span className="text-xs text-gray-500 font-medium mt-0.5">
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}