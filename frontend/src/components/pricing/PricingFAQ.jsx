import { Plus } from "lucide-react";

export default function PricingFAQ() {
  const faqs = [
    "Can I change my plan later?",
    "Is my payment information secure?",
    "Can I cancel my subscription?",
    "What payment methods do you accept?"
  ];

  return (
    <div className="flex flex-col md:flex-row items-start gap-12 mb-20 w-full">
      <div className="w-full md:w-1/3">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight max-w-[250px]">
          Frequently asked questions
        </h2>
      </div>
      
      <div className="w-full md:w-2/3 flex flex-col">
        {faqs.map((faq, idx) => (
          <div 
            key={idx} 
            className="flex items-center justify-between py-5 border-b border-gray-100 cursor-pointer group hover:bg-gray-50/50 transition-colors px-2 rounded-lg"
          >
            <span className="text-[14px] font-bold text-gray-900 group-hover:text-[#A855F7] transition-colors">{faq}</span>
            <Plus className="w-5 h-5 text-gray-400 group-hover:text-[#A855F7] transition-colors" />
          </div>
        ))}
      </div>
    </div>
  );
}
