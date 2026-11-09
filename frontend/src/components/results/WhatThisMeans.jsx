export default function WhatThisMeans() {
  const percentage = 85;
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="w-full bg-[#FAF5FF] rounded-[24px] border border-[#F3E8FF] shadow-sm p-6 flex flex-col items-center text-center">
      <h3 className="text-[13px] font-bold text-gray-900 mb-2 w-full text-left">What This Means</h3>
      
      <p className="text-[10px] font-medium text-gray-500 leading-relaxed mb-6 text-left w-full">
        Your skin is generally healthy with good hydration and elasticity. 
        A consistent routine with targeted products can help improve pores, texture, and uneven tone.
      </p>
      
      {/* Circular Progress */}
      <div className="relative w-32 h-32 mb-6">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle 
            cx="50" cy="50" r={radius} 
            fill="transparent" 
            stroke="#E9D5FF" 
            strokeWidth="8" 
          />
          {/* Progress circle */}
          <circle 
            cx="50" cy="50" r={radius} 
            fill="transparent" 
            stroke="#A855F7" 
            strokeWidth="8" 
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        
        {/* Inner Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-gray-900 tracking-tighter leading-none">{percentage}%</span>
          <span className="text-[8px] font-bold text-[#A855F7] uppercase mt-1">Overall Health</span>
        </div>
      </div>
      
      <p className="text-[10px] font-medium text-gray-500 leading-relaxed max-w-[200px]">
        Your skin is healthier than <br/>
        <span className="font-bold text-gray-900 text-[11px]">{percentage}%</span> <br/>
        of people in your age group
      </p>
    </div>
  );
}
