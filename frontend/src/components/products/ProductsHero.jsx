import { ShieldCheck, Leaf, Droplet } from "lucide-react";

export default function ProductsHero() {
  return (
    <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF5FF] to-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col items-start z-10">
          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-semibold text-gray-900 leading-[1.05] tracking-tight mb-6">
            Skincare that<br />understands you
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-md leading-relaxed">
            Science-backed products, personalized for your unique skin.
          </p>
          
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-transparent border border-[#C084FC]/30">
                <ShieldCheck className="w-5 h-5 text-[#C084FC]" />
              </div>
              <span className="text-sm font-semibold text-gray-700 leading-tight">
                Dermatologist<br/>Tested
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-transparent border border-[#C084FC]/30">
                <Leaf className="w-5 h-5 text-[#C084FC]" />
              </div>
              <span className="text-sm font-semibold text-gray-700 leading-tight">
                Clean & Safe<br/>Ingredients
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-transparent border border-[#C084FC]/30">
                <Droplet className="w-5 h-5 text-[#C084FC]" />
              </div>
              <span className="text-sm font-semibold text-gray-700 leading-tight">
                Suitable for<br/>All Skin Types
              </span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative z-10 flex justify-center lg:justify-end w-full h-[300px] md:h-[400px] lg:h-[500px]">
          <img 
            src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1200&auto=format&fit=crop" 
            alt="Nuvé Skincare Products" 
            className="w-full h-full object-cover object-center rounded-3xl opacity-90 mix-blend-multiply"
          />
        </div>
      </div>
    </section>
  );
}
