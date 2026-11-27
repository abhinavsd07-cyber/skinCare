import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Mail, Send, Award, Heart, Leaf } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    setSubscribed(true);
    try {
      const subs = JSON.parse(localStorage.getItem("nuveSubscribers") || "[]");
      subs.push({ email, date: new Date().toISOString() });
      localStorage.setItem("nuveSubscribers", JSON.stringify(subs));
    } catch {
      // ignore localStorage error
    }
  };

  const navSections = [
    {
      title: "AI Diagnostics",
      links: [
        { label: "Live Face Analysis", href: "/analysis", badge: "Live" },
        { label: "Personalized AM/PM Routine", href: "/routine" },
        { label: "30+ Skin Concerns Index", href: "/#concerns" },
        { label: "Clinical Before / After", href: "/#results" },
        { label: "Diagnostic Methodology", href: "/#how-it-works" }
      ]
    },
    {
      title: "Clinical Formulations",
      links: [
        { label: "All Formulations", href: "/products", badge: "8 Actives" },
        { label: "Peptide Barrier Cream", href: "/products" },
        { label: "Niacinamide 10% Elixir", href: "/products" },
        { label: "AHA/BHA Gentle Cleanser", href: "/products" },
        { label: "Ceramide Night Infusion", href: "/products" }
      ]
    },
    {
      title: "Company & Science",
      links: [
        { label: "About Our Clinical Board", href: "/" },
        { label: "Dermatological Research", href: "/" },
        { label: "Sustainability & Refills", href: "/" },
        { label: "Press & Vogue Feature", href: "/" },
        { label: "Careers", href: "/", badge: "Hiring" }
      ]
    },
    {
      title: "Support & Care",
      links: [
        { label: "Track Your Order", href: "/track-order" },
        { label: "Carbon-Neutral Shipping", href: "/" },
        { label: "30-Day Guarantee Policy", href: "/" },
        { label: "Biometric Data Rights", href: "/" },
        { label: "Medical Concierge", href: "mailto:care@nuve.skin" }
      ]
    }
  ];

  return (
    <footer className="w-full bg-[#0B0F19] text-gray-300 pt-20 pb-12 border-t border-white/10 relative overflow-hidden font-sans">
      
      {/* Background ambient radial glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-blue-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Upper Grid: Brand + 4 Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 pb-16 border-b border-white/10">
          
          {/* Brand Info (Spans 4 columns on desktop) */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-8">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 mb-5 no-underline group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#A855F7] to-[#7E22CE] flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.5 9.5L21 12L13.5 14.5L12 22L10.5 14.5L3 12L10.5 9.5L12 2Z" fill="#FFFFFF"/>
                  <path d="M5 5L9.5 9.5M19 5L14.5 9.5M19 19L14.5 14.5M5 19L9.5 14.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl tracking-tight text-white flex items-center gap-1.5">
                  Nuvé
                  <span className="text-[9px] font-bold tracking-widest uppercase px-1.5 py-0.5 rounded bg-purple-500/20 text-[#C084FC] border border-purple-500/30">
                    Clinical AI
                  </span>
                </span>
              </div>
            </Link>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
              Pioneering precision dermatology with biometric computer vision. Real-time facial telemetry meets clean, biocompatible actives for personalized, clinically proven skin longevity.
            </p>

            {/* Direct Contact info */}
            <div className="space-y-2 mb-8 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Clinical Concierge: <strong className="text-white">care@nuve.skin</strong></span>
              </div>
              <div className="text-gray-500 text-[11px]">
                Research Lab: Bangalore Innovation Hub & ISO 22716 Clean Facility
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-purple-600/20 border border-white/10 hover:border-purple-500/40 flex items-center justify-center text-gray-400 hover:text-[#C084FC] transition-all hover:scale-110"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              {/* LinkedIn */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-purple-600/20 border border-white/10 hover:border-purple-500/40 flex items-center justify-center text-gray-400 hover:text-[#C084FC] transition-all hover:scale-110"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              {/* Twitter / X */}
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Twitter"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-purple-600/20 border border-white/10 hover:border-purple-500/40 flex items-center justify-center text-gray-400 hover:text-[#C084FC] transition-all hover:scale-110"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
              {/* YouTube */}
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-purple-600/20 border border-white/10 hover:border-purple-500/40 flex items-center justify-center text-gray-400 hover:text-[#C084FC] transition-all hover:scale-110"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>

          </div>

          {/* Links Columns (Spans 8 columns on desktop, divided cleanly into 4 distinct columns) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {navSections.map((section) => (
              <div key={section.title} className="flex flex-col items-start">
                <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7]" />
                  {section.title}
                </h4>

                <ul className="space-y-3 list-none p-0 m-0 text-xs font-normal">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("http") || link.href.startsWith("mailto:") ? (
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors no-underline flex items-center gap-1.5"
                        >
                          <span>{link.label}</span>
                          {link.badge && (
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-purple-500/20 text-[#C084FC] border border-purple-500/30">
                              {link.badge}
                            </span>
                          )}
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          className="text-gray-400 hover:text-white transition-colors no-underline flex items-center gap-1.5"
                        >
                          <span>{link.label}</span>
                          {link.badge && (
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-purple-500/20 text-[#C084FC] border border-purple-500/30">
                              {link.badge}
                            </span>
                          )}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Newsletter Showcase Card */}
        <div className="py-12 my-4 border-b border-white/10">
          <div className="bg-gradient-to-r from-white/[0.04] via-purple-900/20 to-white/[0.04] rounded-3xl p-8 md:p-10 border border-white/10 backdrop-blur-md flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            
            <div className="flex flex-col items-start max-w-xl">
              <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-3 py-1 mb-3">
                <Sparkles className="w-3 h-3 text-[#C084FC]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C084FC]">
                  Nuvé Skin Health Club
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-2">
                Join 25,000+ receiving clinical skin intelligence
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Bi-weekly dermatological analyses, early drops of AI diagnostic updates, and an instant <strong>15% voucher</strong> for your first customized formulation routine.
              </p>
            </div>

            {/* Subscribe Form */}
            <div className="w-full lg:max-w-md">
              {subscribed ? (
                <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400" />
                  <div className="text-xs">
                    <span className="font-bold block text-white">Welcome to the Skin Health Club!</span>
                    <span>Your 15% discount code has been sent to your inbox.</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                  <div className="flex items-center bg-white/5 border border-white/15 rounded-2xl p-1.5 focus-within:border-purple-400 focus-within:ring-2 focus-within:ring-purple-500/20 transition-all">
                    <Mail className="w-4 h-4 text-gray-400 ml-3 mr-2 flex-shrink-0" />
                    <input
                      id="newsletter-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      aria-label="Email address for skin health club newsletter"
                      className="bg-transparent text-white text-xs focus:outline-none flex-grow min-w-0 px-1 py-2 placeholder-gray-500"
                    />
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-[#A855F7] to-[#7E22CE] hover:from-[#9333EA] hover:to-[#6B21A8] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md shadow-purple-600/30 hover:scale-[1.02] active:scale-95 flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                    >
                      <span>Claim 15%</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  {error && (
                    <span className="text-[11px] text-rose-400 font-medium pl-2">{error}</span>
                  )}
                  <span className="text-[10px] text-gray-500 pl-2">
                    🔒 Zero spam. High-grade clinical insights only. Unsubscribe with 1 click anytime.
                  </span>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* Bottom Legal & Telemetry Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-500">
          
          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© 2026 Nuvé Skin Technologies Inc. All rights reserved.</span>
            <span className="hidden sm:inline text-gray-700">•</span>
            <span className="text-gray-400">Precision Skincare Powered by Biometric AI</span>
          </div>

          {/* System Status Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-gray-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>AI Neural Inference: <strong>Operational (24ms)</strong></span>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-[11px]">
            <a href="#" className="hover:text-white transition-colors no-underline">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors no-underline">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors no-underline">Biometric Disclosure</a>
            <a href="#" className="hover:text-white transition-colors no-underline">Cookie Settings</a>
          </div>

        </div>

      </div>
    </footer>
  );
}