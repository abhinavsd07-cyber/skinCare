import { Link } from "react-router-dom";

// Shared right-panel features list
const features = [
  {
    title: "AI-Powered Analysis",
    desc: "Get deep insights about your skin",
  },
  {
    title: "Personalized Routines",
    desc: "Customised routine just for you",
  },
  {
    title: "Expert Recommended",
    desc: "Backed by dermatologists",
  },
];

// Nuvé logo mark
function LogoMark({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L13.5 9.5L21 12L13.5 14.5L12 22L10.5 14.5L3 12L10.5 9.5L12 2Z"
        fill="#7C3AED"
      />
      <path
        d="M5 5L9.5 9.5M19 5L14.5 9.5M19 19L14.5 14.5M5 19L9.5 14.5"
        stroke="#7C3AED"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Feature bullet with circular icon
function FeatureBullet({ title, desc }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-full border border-[#C4B5FD] flex items-center justify-center flex-shrink-0 mt-0.5 bg-white/60">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L13.5 9.5L21 12L13.5 14.5L12 22L10.5 14.5L3 12L10.5 9.5L12 2Z" fill="#7C3AED" fillOpacity="0.2"/>
          <circle cx="12" cy="12" r="3" stroke="#7C3AED" strokeWidth="1.5" fill="none"/>
        </svg>
      </div>
      <div>
        <p className="text-[13px] font-semibold text-gray-800 leading-tight">{title}</p>
        <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">{desc}</p>
      </div>
    </div>
  );
}

export default function AuthLayout({ children, fullCenter = false }) {
  return (
    <div
      className="min-h-screen w-full flex flex-col"
      style={{ background: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 40%, #e0e7ff 100%)" }}
    >
      {/* ── Top Nav ────────────────────────────────────────── */}
      <nav className="w-full flex items-center gap-8 px-6 md:px-10 py-4 bg-transparent">
        <Link to="/" className="flex items-center gap-2 no-underline">
          <LogoMark size={22} />
          <span className="font-bold text-xl tracking-tight text-gray-900">Nuvé</span>
        </Link>

        <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0 ml-6">
          {["Products", "Skin Analysis", "Concerns", "Ingredients", "Results", "Pricing"].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase().replace(" ", "-")}`}
                className="text-[13px] font-medium text-gray-600 hover:text-gray-900 transition-colors no-underline"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── Main content area ─────────────────────────────── */}
      {fullCenter ? (
        /* Verification / email-check screens: full centered layout */
        <div className="flex-1 flex items-center justify-center px-4 py-10">
          {children}
        </div>
      ) : (
        /* Login / Signup / Password screens: 3-column layout */
        <div className="flex-1 flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-[1050px] grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-10 items-center">

            {/* LEFT: Form card */}
            <div className="bg-white rounded-2xl shadow-sm border border-white/80 p-8 md:p-10 w-full max-w-[380px] mx-auto lg:mx-0">
              {children}
            </div>

            {/* MIDDLE: Product image */}
            <div className="hidden lg:flex justify-center items-center relative w-[240px] xl:w-[280px] flex-shrink-0">
              {/* Soft glow blob */}
              <div
                className="absolute inset-0 rounded-full opacity-50"
                style={{
                  background: "radial-gradient(ellipse at 50% 50%, #ddd6fe 0%, transparent 70%)",
                  transform: "scale(1.4)",
                }}
              />
              {/* Decorative circles */}
              <div className="absolute top-0 left-4 w-16 h-16 rounded-full border-2 border-[#C4B5FD]/40" />
              <div className="absolute top-10 right-2 w-8 h-8 rounded-full border border-[#C4B5FD]/30" />
              <div className="absolute bottom-10 left-0 w-6 h-6 rounded-full border border-[#C4B5FD]/25" />
              <img
                src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop"
                alt="Nuvé Skincare Products"
                className="relative z-10 w-full object-contain"
                style={{ maxHeight: "320px", mixBlendMode: "multiply" }}
              />
            </div>

            {/* RIGHT: Feature bullets */}
            <div className="hidden lg:flex flex-col gap-6 pl-2">
              {features.map((f) => (
                <FeatureBullet key={f.title} title={f.title} desc={f.desc} />
              ))}
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
