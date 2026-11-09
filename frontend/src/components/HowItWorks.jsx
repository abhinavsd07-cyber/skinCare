const GradientCamera = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="url(#camera-grad)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <defs>
      <linearGradient id="camera-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#818cf8" />
      </linearGradient>
    </defs>
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
    <circle cx="12" cy="13" r="3"/>
  </svg>
);

const GradientBrain = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="url(#brain-grad)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <defs>
      <linearGradient id="brain-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a78bfa" />
        <stop offset="100%" stopColor="#6366f1" />
      </linearGradient>
    </defs>
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>
    <path d="M12 13h4"/>
    <path d="M12 13H8"/>
  </svg>
);

const GradientDroplet = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="url(#drop-grad)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <defs>
      <linearGradient id="drop-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#818cf8" />
        <stop offset="100%" stopColor="#38bdf8" />
      </linearGradient>
    </defs>
    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>
  </svg>
);

export default function HowItWorks() {
  const steps = [
    { number: "01", title: "Upload Selfie", desc: "Take a clear selfie and upload it in seconds.", icon: <GradientCamera />, iconBg: "#F5F3FB" },
    { number: "02", title: "AI Analysis", desc: "Our AI scans 30+ skin parameters with advanced technology.", icon: <GradientBrain />, iconBg: "#F3F3FC" },
    { number: "03", title: "Personalized Routine", desc: "Get your custom routine and product recommendations.", icon: <GradientDroplet />, iconBg: "#F0F6FD" },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400 block mb-3">
            HOW IT WORKS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#0F172A] leading-snug">
            Science meets skincare
          </h2>
        </div>

        {/* Steps — stack on mobile, row on md+ */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col md:flex-row items-center w-full md:w-auto">

              {/* Card */}
              <div
                className="bg-white border border-[#F1F5F9] rounded-[20px] p-6 flex items-center gap-5 w-full md:w-[300px] lg:w-[320px] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer"
              >
                <div style={{ width: "64px", height: "64px", flexShrink: 0, borderRadius: "16px", backgroundColor: step.iconBg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {step.icon}
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="text-[11px] font-bold text-[#A78BFA] mb-1 tracking-wider">{step.number}</span>
                  <h3 className="text-[17px] font-bold text-[#0F172A] mb-1 leading-snug">{step.title}</h3>
                  <p className="text-[13px] text-gray-500 leading-snug">{step.desc}</p>
                </div>
              </div>

              {/* Arrow connector — only between items, hidden on mobile */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex w-9 h-9 rounded-full border border-[#E2E8F0] bg-white items-center justify-center mx-2 flex-shrink-0 shadow-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              )}

              {/* Down arrow on mobile between steps */}
              {index < steps.length - 1 && (
                <div className="flex md:hidden w-9 h-9 rounded-full border border-[#E2E8F0] bg-white items-center justify-center my-2 flex-shrink-0 shadow-sm rotate-90">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
