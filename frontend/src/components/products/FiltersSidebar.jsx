import { ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";

const FilterGroup = ({ title, options, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-100 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-sm font-bold text-gray-800"
      >
        {title}
        {isOpen ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
      </button>
      
      {isOpen && (
        <div className="mt-4 flex flex-col gap-3">
          {options.map(opt => (
            <label key={opt} className="flex items-center gap-3 cursor-pointer group">
              <div className="w-4 h-4 rounded border border-gray-300 flex items-center justify-center group-hover:border-[#C084FC] transition-colors bg-white">
                {/* Checkbox checkmark logic goes here */}
              </div>
              <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                {opt}
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default function FiltersSidebar() {
  return (
    <aside className="w-full md:w-[260px] flex-shrink-0 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-gray-900">Filters</h3>
        <button className="text-xs font-semibold text-[#C084FC] hover:text-purple-700 transition-colors">
          Clear all
        </button>
      </div>

      {/* Filter Groups */}
      <FilterGroup 
        title="Skin Concern" 
        options={["Acne & Blemishes", "Dark Spots", "Anti-Aging", "Dryness", "Sensitivity", "Uneven Tone"]} 
      />
      
      <FilterGroup 
        title="Product Type" 
        options={["Cleanser", "Toner", "Serum", "Moisturizer", "Sunscreen", "Treatment", "Mask"]} 
      />

      <FilterGroup 
        title="Ingredients" 
        options={["Niacinamide", "Hyaluronic Acid", "Vitamin C", "Retinol", "Salicylic Acid", "Ceramide"]} 
      />

      <FilterGroup 
        title="Skin Type" 
        options={["Oily", "Dry", "Combination", "Sensitive", "Normal"]} 
      />

      {/* Price Range */}
      <div className="py-6">
        <h4 className="text-sm font-bold text-gray-800 mb-4">Price Range</h4>
        
        {/* Fake Slider Track */}
        <div className="relative w-full h-1 bg-gray-200 rounded-full mb-4">
          <div className="absolute top-0 left-0 w-3/4 h-full bg-[#C084FC] rounded-full"></div>
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-4 h-4 bg-[#C084FC] rounded-full shadow border-2 border-white cursor-pointer"></div>
          <div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-4 h-4 bg-[#C084FC] rounded-full shadow border-2 border-white cursor-pointer"></div>
        </div>
        
        <div className="flex items-center justify-between text-xs font-semibold text-gray-500 mb-6">
          <span>₹0</span>
          <span>₹5000+</span>
        </div>

        <button className="w-full py-3 bg-[#FAF5FF] hover:bg-purple-100 text-[#C084FC] rounded-xl text-sm font-bold transition-colors">
          Apply Filters
        </button>
      </div>
    </aside>
  );
}
