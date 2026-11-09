import { CheckCircle2, MinusCircle } from "lucide-react";

export default function PricingCards() {
  const plans = [
    {
      name: "Basic",
      desc: "Perfect to get started",
      price: "₹0",
      period: "/month",
      button: "Get Started",
      popular: false,
      features: [
        { name: "1 Skin Analysis / month", included: true },
        { name: "Basic Skin Score", included: true },
        { name: "Key Skin Concerns", included: true },
        { name: "Limited Recommendations", included: true },
        { name: "Email Support", included: true },
        { name: "Personalized Routine", included: false },
        { name: "Product Recommendations", included: false },
        { name: "Progress Tracking", included: false },
        { name: "Ingredient Insights", included: false },
        { name: "Priority Support", included: false }
      ]
    },
    {
      name: "Pro",
      desc: "Everything you need for real results",
      price: "₹499",
      period: "/month",
      button: "Start Pro Plan",
      popular: true,
      features: [
        { name: "Unlimited Skin Analysis", included: true },
        { name: "Advanced Skin Score", included: true },
        { name: "Detailed Skin Concerns", included: true },
        { name: "Personalized Routine Plan", included: true },
        { name: "Product Recommendations", included: true },
        { name: "Progress Tracking", included: true },
        { name: "Ingredient Insights", included: true },
        { name: "Priority Email Support", included: true },
        { name: "1-on-1 Expert Consultation", included: false }
      ]
    },
    {
      name: "Premium",
      desc: "For those who want expert care",
      price: "₹999",
      period: "/month",
      button: "Start Premium Plan",
      popular: false,
      features: [
        { name: "Everything in Pro", included: true },
        { name: "1-on-1 Expert Consultation", included: true },
        { name: "Custom Skincare Plan", included: true },
        { name: "Lifestyle & Habit Tracking", included: true },
        { name: "Early Access to New Features", included: true },
        { name: "Exclusive Product Discounts", included: true },
        { name: "Priority Support (24/7)", included: true }
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 items-start">
      {plans.map((plan, idx) => (
        <div 
          key={idx}
          className={`flex flex-col bg-white rounded-3xl ${
            plan.popular 
              ? "border-2 border-[#A855F7] shadow-lg relative -mt-4 z-10" 
              : "border border-gray-100 shadow-sm mt-4"
          }`}
        >
          {/* Most Popular Banner */}
          {plan.popular && (
            <div className="bg-[#A855F7] text-white text-[11px] font-bold text-center py-2.5 rounded-t-[22px]">
              Most Popular
            </div>
          )}

          <div className="p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
            <p className="text-[12px] font-medium text-gray-500 mb-6">{plan.desc}</p>
            
            <div className="flex items-end gap-1 mb-6">
              <span className="text-4xl font-bold text-gray-900 leading-none">{plan.price}</span>
              <span className="text-[11px] font-medium text-gray-400 mb-1">{plan.period}</span>
            </div>
            
            <button 
              className={`w-full py-3 rounded-xl text-[12px] font-bold transition-all mb-8 ${
                plan.popular
                  ? "bg-[#A855F7] hover:bg-[#9333EA] text-white shadow-sm"
                  : "bg-white border border-[#E9D5FF] text-[#A855F7] hover:bg-[#FAF5FF]"
              }`}
            >
              {plan.button}
            </button>
            
            <ul className="flex flex-col gap-4">
              {plan.features.map((feat, fIdx) => (
                <li key={fIdx} className="flex items-start gap-3">
                  {feat.included ? (
                    <CheckCircle2 className="w-4 h-4 text-[#A855F7] flex-shrink-0 mt-0.5" />
                  ) : (
                    <MinusCircle className="w-4 h-4 text-gray-300 flex-shrink-0 mt-0.5" />
                  )}
                  <span className={`text-[12px] font-medium leading-tight ${feat.included ? "text-gray-700" : "text-gray-400"}`}>
                    {feat.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
