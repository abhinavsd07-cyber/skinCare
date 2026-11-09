import { useNavigate } from "react-router-dom";
import { Download, ChevronDown, Lock, Sparkles, RefreshCw } from "lucide-react";

const OverallScore = ({ score }) => {
  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-150 mb-8 flex flex-col md:flex-row items-center justify-between gap-8">
      
      {/* Left text */}
      <div className="flex flex-col flex-1">
        <h3 className="text-sm font-bold text-gray-900 mb-2">Overall Skin Health Score</h3>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-6xl font-bold text-gray-900 tracking-tighter">{score || 84}</span>
          <span className="text-xl font-bold text-gray-400">/100</span>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
          <span className="text-sm font-bold text-emerald-600">Optimal Vitality</span>
        </div>
        <p className="text-xs text-gray-500 font-medium leading-relaxed max-w-[260px]">
          Your skin barrier is in healthy condition. Follow the personalized routine below to target hydration and pore clarity.
        </p>
      </div>

      {/* Middle circular progress */}
      <div className="relative w-40 h-40 shrink-0 flex flex-col items-center justify-center">
        <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#F3E8FF" strokeWidth="8" />
          <circle 
            cx="50" cy="50" r="40" 
            fill="none" 
            stroke="#8B5CF6" 
            strokeWidth="8" 
            strokeDasharray="251.2" 
            strokeDashoffset={251.2 * (1 - (score || 84) / 100)} 
            strokeLinecap="round" 
          />
        </svg>
        <span className="text-4xl font-bold text-gray-900 z-10 tracking-tighter mt-1">{score || 84}</span>
        <span className="text-xs font-bold text-gray-400 z-10">/100</span>
      </div>

      {/* Right score history */}
      <div className="flex flex-col flex-1 w-full gap-4 pl-0 md:pl-8 border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0">
        <h4 className="text-xs font-bold text-gray-900">Score Timeline</h4>
        
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs font-medium text-gray-500 w-16">Today</span>
          <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-[#8B5CF6] rounded-full" style={{ width: `${score || 84}%` }}></div>
          </div>
          <span className="text-xs font-bold text-gray-900 w-6 text-right">{score || 84}</span>
        </div>
        
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs font-medium text-gray-500 w-16">1 Month Ago</span>
          <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-[#C084FC]" style={{ width: '78%' }}></div>
          </div>
          <span className="text-xs font-bold text-gray-900 w-6 text-right">78</span>
        </div>
        
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs font-medium text-gray-500 w-16">2 Months Ago</span>
          <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-[#D8B4FE]" style={{ width: '72%' }}></div>
          </div>
          <span className="text-xs font-bold text-gray-900 w-6 text-right">72</span>
        </div>
      </div>
      
    </div>
  );
};

const SkinConcerns = ({ concernsData }) => {
  const defaultConcerns = [
    { name: "Visible Pores", score: 26, severity: "Mild", color: "text-emerald-500" },
    { name: "Dehydration", score: 32, severity: "Mild", color: "text-amber-500" },
    { name: "Fine Lines", score: 18, severity: "Very Mild", color: "text-emerald-500" },
    { name: "Uneven Tone", score: 22, severity: "Mild", color: "text-emerald-500" },
    { name: "Sun Spots", score: 20, severity: "Mild", color: "text-emerald-500" }
  ];
  
  const concerns = concernsData || defaultConcerns;

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-150 mb-8 overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-base font-bold text-gray-900">AI Diagnosed Concerns</h3>
          <p className="text-xs text-gray-500 font-medium mt-0.5">Parameters measured across 31 facial zones</p>
        </div>
        <span className="text-xs font-bold text-[#8B5CF6] bg-[#FAF5FF] px-3.5 py-1.5 rounded-xl border border-purple-100">
          5 Detected
        </span>
      </div>
      
      <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
        {concerns.map((item, idx) => (
          <div key={idx} className="shrink-0 w-[140px] border border-gray-150 rounded-2xl p-4 flex flex-col items-center text-center bg-white hover:border-[#8B5CF6] transition-colors">
            <div className="w-10 h-10 rounded-full bg-[#FAF5FF] text-[#8B5CF6] flex items-center justify-center mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-gray-900 mb-1">{item.name}</h4>
            <span className={`text-[11px] font-bold ${item.color || "text-emerald-600"} mb-3`}>{item.severity || "Mild"}</span>
            <div className="w-full">
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden mb-1.5">
                <div className="h-full bg-amber-400 rounded-full" style={{ width: `${item.score}%` }}></div>
              </div>
              <span className="text-[10px] text-gray-400 font-medium">Score: {item.score}/100</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const DetailedAnalysis = ({ metrics }) => {
  const params = [
    { label: "Hydration", val: metrics?.hydration || 76, status: "Good", color: "bg-[#8B5CF6]" },
    { label: "Elasticity", val: metrics?.elasticity || 82, status: "Optimal", color: "bg-[#A855F7]" },
    { label: "Texture", val: metrics?.texture || 74, status: "Good", color: "bg-emerald-500" },
    { label: "Pores", val: metrics?.pores || 68, status: "Mild Concern", color: "bg-amber-400" },
    { label: "Radiance", val: metrics?.radiance || 80, status: "Very Good", color: "bg-emerald-500" }
  ];

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-150 mb-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-base font-bold text-gray-900">In-Depth Metrics</h3>
          <p className="text-xs text-gray-500 font-medium mt-0.5">Biomarker distribution breakdown</p>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Radar Chart Visual */}
        <div className="relative w-full max-w-[260px] mx-auto md:mx-0 h-[240px] shrink-0">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {[20, 40, 60, 80, 100].map(r => (
               <polygon 
                 key={r}
                 points={`50,${50-r/2} ${50+r/2.1},${50-r/6.5} ${50+r/3.2},${50+r/2.5} ${50-r/3.2},${50+r/2.5} ${50-r/2.1},${50-r/6.5}`}
                 fill="none" 
                 stroke="#f1f5f9" 
                 strokeWidth="1.2"
               />
            ))}
            <line x1="50" y1="50" x2="50" y2="0" stroke="#f1f5f9" strokeWidth="1" />
            <line x1="50" y1="50" x2="97" y2="34" stroke="#f1f5f9" strokeWidth="1" />
            <line x1="50" y1="50" x2="80" y2="90" stroke="#f1f5f9" strokeWidth="1" />
            <line x1="50" y1="50" x2="20" y2="90" stroke="#f1f5f9" strokeWidth="1" />
            <line x1="50" y1="50" x2="3" y2="34" stroke="#f1f5f9" strokeWidth="1" />
            
            <polygon 
              points="50,12 85,38 72,78 30,76 12,34" 
              fill="rgba(192, 132, 252, 0.25)" 
              stroke="#8B5CF6" 
              strokeWidth="2.5"
            />
            <circle cx="50" cy="12" r="2.5" fill="#8B5CF6" />
            <circle cx="85" cy="38" r="2.5" fill="#8B5CF6" />
            <circle cx="72" cy="78" r="2.5" fill="#8B5CF6" />
            <circle cx="30" cy="76" r="2.5" fill="#8B5CF6" />
            <circle cx="12" cy="34" r="2.5" fill="#8B5CF6" />
          </svg>
        </div>

        {/* Right Bars */}
        <div className="flex flex-col w-full gap-5">
          {params.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gray-900">{item.label}</span>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-gray-900">{item.val}%</span>
                  <span className="text-[10px] font-semibold text-gray-500 w-20 text-right">{item.status}</span>
                </div>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className={`h-full ${item.color} rounded-full transition-all duration-700`} style={{ width: `${item.val}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function MainContent({ data, onRetake }) {
  const navigate = useNavigate();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex-1 flex flex-col min-w-0 w-full">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">Skin Diagnostic Report</h1>
          <p className="text-xs font-medium text-gray-500">Scan timestamp: {new Date().toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
        <div className="flex items-center gap-2">
          {onRetake && (
            <button 
              onClick={onRetake}
              className="flex items-center gap-1.5 px-4 py-2.5 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 rounded-xl text-xs font-bold shadow-sm transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Retake Scan
            </button>
          )}
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2.5 bg-white border border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#FAF5FF] rounded-xl text-xs font-bold shadow-sm transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            Print Report
          </button>
        </div>
      </div>

      <OverallScore score={data?.overallScore} />
      <SkinConcerns concernsData={data?.concerns} />
      <DetailedAnalysis metrics={data?.metrics} />
      
      {/* Promo & Routine CTA */}
      <div className="w-full rounded-3xl bg-gradient-to-r from-[#FAF5FF] to-[#F3E8FF] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#E9D5FF] mb-8">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#8B5CF6] shrink-0">
            <Sparkles className="w-8 h-8" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 mb-1">Unlock Your 7-Day Custom Routine</h3>
            <p className="text-xs font-medium text-gray-600 max-w-sm">
              We have customized a step-by-step Morning & Night regimen targeting your skin analysis scores.
            </p>
          </div>
        </div>
        <button 
          onClick={() => navigate("/routine")}
          className="shrink-0 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-xl px-6 py-3.5 text-xs font-bold shadow-md shadow-purple-500/20 transition-all flex items-center gap-2 cursor-pointer"
        >
          <Lock className="w-4 h-4" />
          View My Custom Routine
        </button>
      </div>
      
    </div>
  );
}
