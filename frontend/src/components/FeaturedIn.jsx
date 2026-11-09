export default function FeaturedIn() {
  const logos = [
    { name: "VOGUE", style: { fontFamily: "'Didot', 'Bodoni MT', 'Playfair Display', 'Times New Roman', serif", fontSize: "clamp(18px, 4vw, 28px)", fontWeight: 900, letterSpacing: "0.06em", color: "#1a1a1a" } },
    { name: "ELLE", style: { fontFamily: "'Didot', 'Bodoni MT', 'Playfair Display', 'Times New Roman', serif", fontSize: "clamp(16px, 3.5vw, 26px)", fontWeight: 400, letterSpacing: "0.35em", color: "#1a1a1a" } },
    { name: "Forbes", style: { fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: "clamp(18px, 4vw, 30px)", fontWeight: 700, letterSpacing: "-0.01em", color: "#1a1a1a" } },
  ];

  return (
    <section className="w-full bg-white py-6">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="bg-[#F8F9FB] rounded-2xl py-8 px-6 md:px-10 flex flex-col items-center shadow-sm">
          <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gray-400 mb-6">
            AS FEATURED IN
          </span>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 w-full">
            {logos.map((logo) => (
              <span key={logo.name} style={logo.style}>{logo.name}</span>
            ))}

            {/* BAZAAR */}
            <div className="flex flex-col items-center leading-none gap-[1px]">
              <span style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: "7px", fontWeight: 500, letterSpacing: "0.22em", color: "#1a1a1a", textTransform: "uppercase" }}>
                Harper's
              </span>
              <span style={{ fontFamily: "'Didot', 'Bodoni MT', 'Playfair Display', 'Times New Roman', serif", fontSize: "clamp(16px, 3.5vw, 26px)", fontWeight: 400, letterSpacing: "0.18em", color: "#1a1a1a" }}>
                BAZAAR
              </span>
            </div>

            {/* AAD */}
            <div className="flex items-center gap-2">
              <span style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: "clamp(18px, 4vw, 30px)", fontWeight: 700, letterSpacing: "0.04em", color: "#1a1a1a" }}>
                AAD
              </span>
              <div className="flex flex-col leading-[1.35]">
                <span style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: "8px", fontWeight: 400, color: "#555555" }}>American Academy</span>
                <span style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: "8px", fontWeight: 400, color: "#555555" }}>of Dermatology</span>
                <span style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: "8px", fontWeight: 400, color: "#555555" }}>Association</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
