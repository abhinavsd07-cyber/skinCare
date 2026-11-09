export default function SkinSnapshot() {
  return (
    <div className="w-full bg-white rounded-[24px] border border-gray-100 shadow-sm p-6 flex flex-col">
      <h3 className="text-[13px] font-bold text-gray-900 mb-4">Your Skin Snapshot</h3>
      
      {/* Face Image */}
      <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden mb-6 bg-gray-100">
        <img 
          src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=600&auto=format&fit=crop" 
          alt="Skin Snapshot" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Meta Stats */}
      <div className="flex flex-col gap-3 mb-6">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-medium text-gray-500">Skin Type</span>
          <span className="text-[11px] font-bold text-gray-900">Combination</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-medium text-gray-500">Skin Age</span>
          <span className="text-[11px] font-bold text-gray-900">25</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-medium text-gray-500">Sensitivity</span>
          <span className="text-[11px] font-bold text-emerald-500">Low</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-medium text-gray-500">Oil Production</span>
          <span className="text-[11px] font-bold text-gray-900">Balanced</span>
        </div>
      </div>
      
      <button className="w-full border border-gray-200 text-[#A855F7] hover:bg-gray-50 font-bold text-[11px] rounded-xl py-2.5 transition-colors shadow-sm">
        View Full Details
      </button>
    </div>
  );
}
