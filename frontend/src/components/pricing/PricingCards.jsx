import { useNavigate } from "react-router-dom";
import { CheckCircle2, MinusCircle } from "lucide-react";

export default function PricingCards() {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Basic",
      desc: "Perfect to get started with facial analysis",
      price: "₹0",
      period: "/month",
      button: "Get Started Free",
      action: () => navigate("/analysis"),
      popular: false,
      features: [
        { name: "1 AI Skin Analysis / month", included: true },
        { name: "Basic Skin Health Score", included: true },
        { name: "Key Skin Concerns Breakdown", included: true },
        { name: "Standard Product Recommendations", included: true },
        { name: "Community Support", included: true },
        { name: "Customized AM/PM Routine", included: false },
        { name: "Progress Tracking History", included: false },
        { name: "Ingredients Safety Radar", included: false },
        { name: "Priority Support (24/7)", included: false }
      ]
    },
    {
      name: "Pro",
      desc: "Everything you need for visible, lasting skin results",
      price: "₹499",
      period: "/month",
      button: "Start Pro Plan",
      action: () => navigate("/checkout"),
      popular: true,
      features: [
        { name: "Unlimited AI Skin Analyses", included: true },
        { name: "Advanced 31-Zone Skin Score", included: true },
        { name: "Detailed Biomarker Diagnostics", included: true },
        { name: "Personalized 7-Day Routine Plan", included: true },
        { name: "Curated Product Recommendations", included: true },
        { name: "Progress Tracking & Comparison", included: true },
        { name: "Full Ingredients Safety Insights", included: true },
        { name: "Priority Email & Chat Support", included: true },
        { name: "1-on-1 Dermatologist Consultation", included: false }
      ]
    },
    {
      name: "Premium",
      desc: "For those who want dedicated expert dermatological care",
      price: "₹999",
      period: "/month",
      button: "Start Premium Care",
      action: () => navigate("/checkout"),
      popular: false,
      features: [
        { name: "Everything included in Pro Plan", included: true },
        { name: "1-on-1 Expert Dermatologist Consultation", included: true },
        { name: "Hand-Crafted Custom Skincare Formulations", included: true },
        { name: "Seasonal Climate & Lifestyle Adjustment", included: true },
        { name: "Early Access to New Launches", included: true },
        { name: "Flat 20% Discount Across All Products", included: true },
        { name: "24/7 Dedicated Skincare Concierge", included: true }
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
              ? "border-2 border-[#8B5CF6] shadow-xl relative -mt-3 z-10" 
              : "border border-gray-150 shadow-sm mt-3"
          }`}
        >
          {/* Most Popular Banner */}
          {plan.popular && (
            <div className="bg-[#8B5CF6] text-white text-[11px] font-bold text-center py-2.5 rounded-t-[22px] uppercase tracking-wider">
              Most Popular Choice
            </div>
          )}

          <div className="p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
            <p className="text-[12px] font-medium text-gray-500 mb-6">{plan.desc}</p>
            
            <div className="flex items-end gap-1 mb-6">
              <span className="text-4xl font-bold text-gray-900 leading-none">{plan.price}</span>
              <span className="text-[12px] font-semibold text-gray-400 mb-1">{plan.period}</span>
            </div>
            
            <button 
              onClick={plan.action}
              className={`w-full py-3.5 rounded-2xl text-[13px] font-bold transition-all mb-8 cursor-pointer ${
                plan.popular
                  ? "bg-[#8B5CF6] hover:bg-[#7C3AED] text-white shadow-md shadow-purple-500/20"
                  : "bg-white border border-[#E9D5FF] text-[#7C3AED] hover:bg-[#FAF5FF]"
              }`}
            >
              {plan.button}
            </button>
            
            <ul className="flex flex-col gap-3.5">
              {plan.features.map((feat, fIdx) => (
                <li key={fIdx} className="flex items-start gap-3">
                  {feat.included ? (
                    <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] shrink-0 mt-0.5" />
                  ) : (
                    <MinusCircle className="w-4 h-4 text-gray-300 shrink-0 mt-0.5" />
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
