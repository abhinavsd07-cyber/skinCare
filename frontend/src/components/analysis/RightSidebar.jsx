import { Calendar, Clock, Smartphone, Sun, RefreshCw, Droplet, Sparkles } from "lucide-react";

export default function RightSidebar() {
  return (
    <aside className="w-full lg:w-[280px] flex-shrink-0 flex flex-col gap-6">
      
      {/* Your Analysis Card */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
        <h4 className="text-sm font-bold text-gray-900 mb-4">Your Analysis</h4>
        
        <div className="w-full h-48 rounded-xl overflow-hidden mb-6 bg-gray-100">
          <img 
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=600&auto=format&fit=crop" 
            alt="Analyzed Face" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <h5 className="text-xs font-bold text-gray-900 mb-3">Analysis Info</h5>
        
        <ul className="flex flex-col gap-3 mb-6">
          <li className="flex items-center gap-3 text-xs font-medium text-gray-600">
            <Calendar className="w-4 h-4 text-gray-400" /> May 20, 2024
          </li>
          <li className="flex items-center gap-3 text-xs font-medium text-gray-600">
            <Clock className="w-4 h-4 text-gray-400" /> 10:30 AM
          </li>
          <li className="flex items-center gap-3 text-xs font-medium text-gray-600">
            <Smartphone className="w-4 h-4 text-gray-400" /> iPhone 14 Pro
          </li>
          <li className="flex items-center gap-3 text-xs font-medium text-gray-600">
            <Sun className="w-4 h-4 text-gray-400" /> Good Lighting
          </li>
        </ul>
        
        <button className="w-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 rounded-lg py-2.5 text-sm font-bold transition-colors flex items-center justify-center gap-2">
          <RefreshCw className="w-4 h-4" />
          Retake Analysis
        </button>
      </div>

      {/* How it works Card */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
        <h4 className="text-sm font-bold text-gray-900 mb-6">How it works</h4>
        
        <div className="flex flex-col gap-6 relative">
          {/* Vertical line connecting steps */}
          <div className="absolute left-[15px] top-[24px] bottom-[24px] w-[2px] bg-gray-100"></div>
          
          <div className="flex items-start gap-4 relative z-10">
            <div className="w-8 h-8 rounded-full bg-[#FAF5FF] text-[#A855F7] text-xs font-bold flex items-center justify-center flex-shrink-0">1</div>
            <div>
              <h5 className="text-xs font-bold text-gray-900">AI Scans</h5>
              <p className="text-[11px] text-gray-500 font-medium leading-relaxed mt-1">Our AI scans 30+ facial parameters</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 relative z-10">
            <div className="w-8 h-8 rounded-full bg-[#FAF5FF] text-[#A855F7] text-xs font-bold flex items-center justify-center flex-shrink-0">2</div>
            <div>
              <h5 className="text-xs font-bold text-gray-900">Deep Analysis</h5>
              <p className="text-[11px] text-gray-500 font-medium leading-relaxed mt-1">Advanced algorithms analyze your skin</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 relative z-10">
            <div className="w-8 h-8 rounded-full bg-[#FAF5FF] text-[#A855F7] text-xs font-bold flex items-center justify-center flex-shrink-0">3</div>
            <div>
              <h5 className="text-xs font-bold text-gray-900">Personalized Results</h5>
              <p className="text-[11px] text-gray-500 font-medium leading-relaxed mt-1">Get a custom report and routine</p>
            </div>
          </div>
        </div>
        
        <button className="mt-6 text-[11px] font-bold text-[#A855F7] hover:text-[#9333EA] flex items-center gap-1 transition-colors self-start">
          Learn more about our technology →
        </button>
      </div>

      {/* Personalized Tips Card */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
        <h4 className="text-sm font-bold text-gray-900 mb-6">Personalized Tips</h4>
        
        <div className="flex flex-col gap-5 mb-6">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#FAF5FF] flex items-center justify-center flex-shrink-0 mt-0.5">
              <Droplet className="w-3.5 h-3.5 text-[#A855F7]" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-gray-900">Focus on hydration</h5>
              <p className="text-[11px] text-gray-500 font-medium leading-relaxed mt-1">Your skin needs more hydration. Use hydrating serums and moisturizers.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#FAF5FF] flex items-center justify-center flex-shrink-0 mt-0.5">
              <Sun className="w-3.5 h-3.5 text-[#A855F7]" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-gray-900">Sun protection</h5>
              <p className="text-[11px] text-gray-500 font-medium leading-relaxed mt-1">Use SPF 50+ daily to prevent further damage and dark spots.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#FAF5FF] flex items-center justify-center flex-shrink-0 mt-0.5">
              <Sparkles className="w-3.5 h-3.5 text-[#A855F7]" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-gray-900">Exfoliate gently</h5>
              <p className="text-[11px] text-gray-500 font-medium leading-relaxed mt-1">Exfoliate 1-2 times a week to improve texture and reduce pores.</p>
            </div>
          </div>
        </div>
        
        <button className="w-full bg-[#A855F7] hover:bg-[#9333EA] text-white rounded-lg py-2.5 text-xs font-bold shadow-sm transition-colors flex items-center justify-center">
          View Full Routine
        </button>
      </div>

    </aside>
  );
}
