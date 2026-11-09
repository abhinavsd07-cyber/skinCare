import { Plus } from "lucide-react";

export default function FAQ() {
  const faqs = [
    { q: "How accurate is the AI analysis?" },
    { q: "How long does the analysis take?" },
    { q: "Is my photo and data secure?" }
  ];

  return (
    <section className="w-full bg-white py-24 border-t border-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          
          {/* Header Left */}
          <div className="flex flex-col items-start min-w-[250px]">
            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] text-gray-900 mb-2 block">
              FAQ
            </span>
            <a href="mailto:help@nuve.com" className="text-sm font-semibold text-gray-500 hover:text-black flex items-center gap-1 mt-1 transition-colors no-underline">
              Your questions, email help <span className="text-lg">→</span>
            </a>
          </div>

          {/* FAQ Items Row Right */}
          <div className="flex flex-col md:flex-row items-center flex-grow gap-6 md:gap-8 justify-end w-full">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-between gap-4 py-4 md:py-0 border-b md:border-b-0 border-gray-100 w-full md:w-auto"
              >
                <span className="text-[13px] font-semibold text-gray-700">{faq.q}</span>
                <Plus className="w-4 h-4 text-gray-400" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
