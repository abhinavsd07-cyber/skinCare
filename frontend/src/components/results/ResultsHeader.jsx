import { Calendar, Download } from "lucide-react";

export default function ResultsHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 w-full">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Your Results</h1>
        <p className="text-[13px] font-medium text-gray-500">
          Here's everything we discovered about your skin and how to improve it.
        </p>
        <div className="flex items-center gap-2 text-[11px] font-bold text-gray-400 mt-2">
          <Calendar className="w-3.5 h-3.5" />
          <span>May 20, 2024 • 10:30 AM</span>
        </div>
      </div>
      
      <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[#C084FC] text-[#A855F7] hover:bg-[#FAF5FF] font-bold text-[12px] transition-colors shadow-sm self-start whitespace-nowrap">
        <Download className="w-4 h-4" />
        Download Full Report
      </button>
    </div>
  );
}
