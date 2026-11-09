import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import { 
  Heart, 
  Sun, 
  Moon, 
  ArrowRight, 
  Plus, 
  Sparkles, 
  ShoppingBag,
  Check,
  CheckCircle2
} from 'lucide-react';
import { useCartWishlist } from '../context/CartWishlistContext';

export default function Routine() {
  const [activeTab, setActiveTab] = useState('morning');
  const [addedAll, setAddedAll] = useState(false);
  const { addToCart } = useCartWishlist();
  const navigate = useNavigate();

  const morningSteps = [
    {
      id: "669528f8019a8201a0120001",
      step: 1,
      category: "Cleanser",
      name: "Daily Gentle Cleanser",
      price: 699,
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: "669528f8019a8201a0120002",
      step: 2,
      category: "Serum",
      name: "Vitamin C Brightening Serum",
      price: 1299,
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: "669528f8019a8201a0120004",
      step: 3,
      category: "Moisturizer",
      name: "Hydrating Barrier Moisturizer",
      price: 899,
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: "669528f8019a8201a0120006",
      step: 4,
      category: "Sunscreen",
      name: "Daily Sunscreen SPF 50+",
      price: 699,
      image: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=400&auto=format&fit=crop"
    }
  ];

  const nightSteps = [
    {
      id: "669528f8019a8201a0120001",
      step: 1,
      category: "Cleanser",
      name: "Daily Gentle Cleanser",
      price: 699,
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: "669528f8019a8201a0120003",
      step: 2,
      category: "Toner",
      name: "Niacinamide Pore Toner",
      price: 799,
      image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: "669528f8019a8201a0120005",
      step: 3,
      category: "Treatment",
      name: "Retinol Collagen Serum",
      price: 1499,
      image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: "669528f8019a8201a0120004",
      step: 4,
      category: "Moisturizer",
      name: "Hydrating Barrier Moisturizer",
      price: 899,
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=400&auto=format&fit=crop"
    }
  ];

  const currentSteps = activeTab === 'morning' ? morningSteps : nightSteps;

  const handleAddAllToCart = () => {
    currentSteps.forEach(step => {
      addToCart({
        id: step.id,
        name: step.name,
        price: step.price,
        image: step.image,
        category: step.category,
        size: "50ml",
        qty: 1
      });
    });
    setAddedAll(true);
    setTimeout(() => setAddedAll(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col font-sans">
      <Nav isSolid={true} activePage="Routine" />

      <main className="flex-grow max-w-[1280px] mx-auto w-full px-5 md:px-8 py-8 md:py-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8B5CF6]">Personalized Regimen</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Your Daily Skincare Routine</h1>
            <p className="text-sm text-gray-500 mt-1">Calibrated specifically for your skin's moisture balance & elasticity.</p>
          </div>
          
          <button 
            onClick={handleAddAllToCart}
            className={`flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm transition-all shadow-sm cursor-pointer ${
              addedAll
                ? "bg-emerald-600 text-white"
                : "bg-[#8B5CF6] hover:bg-[#7C3AED] text-white shadow-purple-500/20"
            }`}
          >
            {addedAll ? (
              <>
                <Check className="w-4 h-4 stroke-[3]" />
                Entire Routine Added!
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                Add All 4 Steps to Cart
              </>
            )}
          </button>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-6 border-b border-gray-200 mb-8">
          <button 
            onClick={() => setActiveTab('morning')}
            className={`flex items-center gap-2 pb-4 px-2 text-[15px] font-bold transition-colors relative cursor-pointer ${
              activeTab === 'morning' ? 'text-[#8B5CF6]' : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            <Sun className={`w-5 h-5 ${activeTab === 'morning' ? 'text-[#8B5CF6]' : 'text-gray-400'}`} />
            Morning Protection (AM)
            {activeTab === 'morning' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8B5CF6] rounded-t-full"></div>
            )}
          </button>
          
          <button 
            onClick={() => setActiveTab('night')}
            className={`flex items-center gap-2 pb-4 px-2 text-[15px] font-bold transition-colors relative cursor-pointer ${
              activeTab === 'night' ? 'text-[#8B5CF6]' : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            <Moon className={`w-5 h-5 ${activeTab === 'night' ? 'text-[#8B5CF6]' : 'text-gray-400'}`} />
            Night Repair (PM)
            {activeTab === 'night' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8B5CF6] rounded-t-full"></div>
            )}
          </button>
        </div>

        {/* Routine Steps Grid */}
        <div className="flex flex-nowrap md:flex-wrap items-center gap-4 md:gap-5 overflow-x-auto pb-6 scrollbar-hide">
          {currentSteps.map((item, idx) => (
            <div key={item.id} className="flex items-center gap-4 md:gap-5 shrink-0">
              {/* Product Step Card */}
              <div className="w-[230px] bg-white rounded-3xl p-5 border border-gray-150 shadow-sm relative flex flex-col items-center hover:border-[#8B5CF6] transition-all">
                <div className="w-full flex items-center justify-between mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#FAF5FF] text-[#8B5CF6] font-bold text-xs flex items-center justify-center">
                    {item.step}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#A855F7]">{item.category}</span>
                </div>
                
                <Link to={`/products/${item.id}`} className="w-[120px] h-[150px] flex items-center justify-center my-3 group">
                  <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform" />
                </Link>
                
                <div className="w-full text-center">
                  <h3 className="font-bold text-gray-900 text-sm mb-1 truncate">{item.name}</h3>
                  <p className="text-sm font-bold text-[#8B5CF6] mb-3">₹{item.price}</p>
                  
                  <button 
                    onClick={() => {
                      addToCart({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        image: item.image,
                        category: item.category,
                        size: "50ml",
                        qty: 1
                      });
                    }}
                    className="w-full py-2 bg-[#FAF5FF] hover:bg-[#F3E8FF] text-[#7C3AED] rounded-xl text-xs font-bold transition-colors cursor-pointer"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Arrow spacer between steps */}
              {idx < currentSteps.length - 1 && (
                <div className="hidden sm:block text-[#A855F7]">
                  <ArrowRight className="w-5 h-5" strokeWidth={2} />
                </div>
              )}
            </div>
          ))}

          {/* Add Custom Step Card */}
          <Link 
            to="/products"
            className="shrink-0 w-[230px] h-[300px] rounded-3xl border-2 border-dashed border-[#D8B4FE] bg-[#FAF5FF]/50 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-[#FAF5FF] transition-colors no-underline"
          >
            <div className="w-12 h-12 rounded-full bg-white border border-[#D8B4FE] flex items-center justify-center text-[#8B5CF6]">
              <Plus className="w-5 h-5" />
            </div>
            <span className="font-bold text-[#8B5CF6] text-xs">Explore More Steps</span>
          </Link>
        </div>

        {/* Bottom Recommendation Banner */}
        <div className="mt-8 bg-white border border-gray-150 shadow-sm rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#FAF5FF] flex items-center justify-center text-[#8B5CF6] shrink-0">
              <Sparkles className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-0.5">Need a tailored adjustment?</h3>
              <p className="text-gray-500 text-xs">Retake your AI facial analysis to adapt this routine to seasonal skin changes.</p>
            </div>
          </div>
          
          <button 
            onClick={() => navigate("/analysis")}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[#D8B4FE] text-[#7C3AED] font-bold text-xs hover:bg-[#FAF5FF] transition-colors shrink-0 cursor-pointer"
          >
            Retake Skin Analysis
          </button>
        </div>
        
      </main>
    </div>
  );
}
