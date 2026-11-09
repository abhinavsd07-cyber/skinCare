import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";

// Envelope SVG illustration matching the screenshot
function EnvelopeIllustration() {
  return (
    <div className="relative w-40 h-40 mb-8 mx-auto">
      {/* Soft glow behind */}
      <div
        className="absolute inset-0 rounded-full"
        style={{ background: "radial-gradient(ellipse at 50% 60%, #ede9fe 0%, transparent 70%)", transform: "scale(1.8)" }}
      />

      {/* Main envelope body */}
      <svg viewBox="0 0 160 130" className="relative z-10 w-full h-full" fill="none">
        {/* Decorative small circles */}
        <circle cx="20" cy="18" r="8" fill="#EDE9FE" opacity="0.7" />
        <circle cx="140" cy="22" r="5" fill="#DDD6FE" opacity="0.6" />
        <circle cx="148" cy="100" r="6" fill="#C4B5FD" opacity="0.4" />

        {/* Envelope shadow */}
        <ellipse cx="80" cy="122" rx="50" ry="6" fill="#DDD6FE" opacity="0.4" />

        {/* Envelope body */}
        <rect x="15" y="38" width="130" height="84" rx="8" fill="#EDE9FE" stroke="#C4B5FD" strokeWidth="1.5" />

        {/* Envelope flap (open) */}
        <path d="M15 38 L80 82 L145 38" fill="none" stroke="#C4B5FD" strokeWidth="1.5" strokeLinejoin="round" />

        {/* Envelope top flap (open/folded back) */}
        <path
          d="M22 34 Q80 -10 138 34 L145 38 L80 82 L15 38 Z"
          fill="#DDD6FE"
          stroke="#C4B5FD"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {/* Letter peeking out */}
        <rect x="50" y="14" width="60" height="50" rx="4" fill="white" stroke="#E9D5FF" strokeWidth="1" />

        {/* Letter lines */}
        <line x1="60" y1="28" x2="100" y2="28" stroke="#C4B5FD" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="60" y1="36" x2="100" y2="36" stroke="#DDD6FE" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="60" y1="44" x2="88" y2="44" stroke="#DDD6FE" strokeWidth="1.5" strokeLinecap="round" />

        {/* Purple pencil / checkmark accent */}
        <path
          d="M105 18 L118 8 L124 14 L111 24 Z"
          fill="#7C3AED"
          opacity="0.85"
        />
        <line x1="105" y1="18" x2="102" y2="26" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default function VerifyEmail() {
  const email = "priya.sharma@example.com";
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (countdown <= 0) { setCanResend(true); return; }
    const t = setTimeout(() => setCountdown(c => c - 1), 1000);
    return () => clearTimeout(t);
  }, [countdown]);

  const handleResend = () => {
    if (!canResend) return;
    setCountdown(60);
    setCanResend(false);
  };

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <AuthLayout fullCenter>
      <div className="flex flex-col items-center text-center max-w-[400px] w-full px-4">
        <EnvelopeIllustration />

        <h1 className="text-[26px] font-bold text-gray-900 mb-2 leading-tight">Check your email</h1>
        <p className="text-[13px] text-gray-500 mb-2">We've sent a verification link to</p>
        <p className="text-[14px] font-bold text-gray-900 mb-4">{email}</p>
        <p className="text-[12px] text-gray-400 mb-8 leading-relaxed max-w-[280px]">
          Click the link in the email to verify your account and get started.
        </p>

        <button
          onClick={handleResend}
          className={`px-6 py-2.5 rounded-xl text-[13px] font-semibold border transition-all ${
            canResend
              ? "border-[#7C3AED] text-[#7C3AED] hover:bg-[#FAF5FF] cursor-pointer"
              : "border-gray-200 text-gray-400 cursor-default"
          }`}
        >
          {canResend
            ? "Resend email"
            : `Resend email (${pad(Math.floor(countdown / 60))}:${pad(countdown % 60)})`}
        </button>

        <p className="text-[11px] text-gray-400 mt-5">
          Didn't receive the email? Check your spam folder.
        </p>
      </div>
    </AuthLayout>
  );
}
