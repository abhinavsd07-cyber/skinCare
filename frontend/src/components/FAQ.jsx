import { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";

export default function FAQ() {
  const [openId, setOpenId] = useState(0);

  const faqs = [
    {
      id: 0,
      question: "How accurate is the AI skin analysis?",
      answer: "Our AI scans 30+ facial biomarkers with 95% clinical accuracy, matching dermatological benchmarks to recommend the exact actives your skin needs."
    },
    {
      id: 1,
      question: "How long does the face scan take?",
      answer: "Less than 5 seconds. Simply snap or upload a clear selfie, and our AI instantly evaluates your skin barrier, hydration, and pore health."
    },
    {
      id: 2,
      question: "Is my photo and facial data secure?",
      answer: "Completely. Your photos are encrypted end-to-end and processed privately. We never sell or share biometric data, and you can delete your records anytime."
    },
    {
      id: 3,
      question: "Are the formulas safe for sensitive or acne-prone skin?",
      answer: "Yes, 100%. Every formulation is dermatologist-tested, hypoallergenic, fragrance-free, and customized to your specific skin tolerance."
    },
    {
      id: 4,
      question: "What is your 30-day happiness guarantee?",
      answer: "If you don't love your personalized routine within 30 days, we'll adjust your formula or issue a full refund with no questions asked."
    }
  ];

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-white py-20 md:py-24 border-t border-gray-100" id="faq">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Minimal Header */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7E22CE] mb-3">
              FAQ
            </span>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight mb-4">
              Frequently asked<br className="hidden sm:inline" /> questions
            </h2>

            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm">
              Quick answers about our AI diagnostics, personalized routines, and clean formulations.
            </p>

            <a
              href="mailto:care@nuve.skin"
              className="inline-flex items-center gap-2 text-xs font-bold text-gray-900 hover:text-[#7E22CE] transition-colors group no-underline"
            >
              <span>Have more questions? Email our specialists</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right Column: Sleek Minimalist Accordion */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-gray-100 border-t border-b border-gray-100">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className="py-5 transition-colors">
                  <button
                    onClick={() => toggle(faq.id)}
                    className="w-full flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none group"
                    aria-expanded={isOpen}
                  >
                    <span className={`text-[15px] sm:text-base font-semibold transition-colors ${
                      isOpen ? "text-[#7E22CE]" : "text-gray-900 group-hover:text-[#7E22CE]"
                    }`}>
                      {faq.question}
                    </span>

                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      isOpen 
                        ? "bg-[#7E22CE] text-white rotate-180" 
                        : "bg-gray-100 text-gray-500 group-hover:bg-purple-100 group-hover:text-[#7E22CE]"
                    }`}>
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="pt-3 pr-8 text-sm text-gray-500 leading-relaxed font-normal animate-fadeIn">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}