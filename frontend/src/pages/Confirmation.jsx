import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import { Check, Package, ArrowRight, Truck } from "lucide-react";

export default function Confirmation() {
  const location = useLocation();
  const navigate = useNavigate();

  const [order, setOrder] = useState(() => {
    if (location.state?.order) return location.state.order;
    try {
      const stored = localStorage.getItem("nuveLastOrder");
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.warn("Could not load last order", e);
    }
    return {
      id: "NUV001585",
      date: new Date().toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' }),
      items: [
        {
          id: "669528f8019a8201a0120002",
          name: "Vitamin C Serum",
          price: 1299,
          qty: 1,
          image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=150&auto=format&fit=crop"
        }
      ],
      total: 1299,
      address: {
        name: "Priya Sharma",
        street: "123, 4th Main, Koramangala",
        cityState: "Bengaluru, Karnataka - 560034"
      }
    };
  });

  const items = order.items || [];
  const total = order.total || 0;

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-gray-900 antialiased flex flex-col">
      <Nav isSolid={true} />
      
      <main className="flex-1 max-w-[1140px] w-full mx-auto px-4 md:px-8 pt-8 pb-16">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 tracking-tight">
          Order Confirmation
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* LEFT COL: Success Message */}
          <div className="flex-1 w-full bg-white rounded-3xl border border-gray-150 p-8 md:p-12 shadow-sm flex flex-col justify-between">
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 mb-8">
              
              {/* Animated checkmark circle */}
              <div className="relative w-28 h-28 flex items-center justify-center shrink-0">
                <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="44" fill="none" stroke="#E9D5FF" strokeWidth="8" />
                  <circle 
                    cx="50" cy="50" r="44" 
                    fill="none" 
                    stroke="#7C3AED" 
                    strokeWidth="8" 
                    strokeDasharray="276" 
                    strokeDashoffset="0" 
                    strokeLinecap="round" 
                  />
                </svg>
                <div className="bg-white rounded-full p-2 z-10">
                  <Check className="w-12 h-12 text-[#7C3AED]" strokeWidth={3.5} />
                </div>
              </div>

              <div className="flex flex-col text-center md:text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-[#7C3AED] mb-1">Payment Successful</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Thank you for your order!
                </h2>
                <p className="text-[14px] text-gray-600 font-medium leading-relaxed max-w-md">
                  Your skincare routine is being prepared. We have dispatched a confirmation email with complete order tracking details.
                </p>
              </div>

            </div>

            <div className="pt-6 border-t border-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-xs text-gray-500 font-medium">
                  Deliver to recipient:
                </p>
                <p className="text-sm font-bold text-gray-900">
                  {order.address?.name || "Priya Sharma"} • {order.address?.cityState || "Bengaluru, India"}
                </p>
              </div>
              <div className="flex items-center gap-2 bg-[#FAF5FF] px-4 py-2 rounded-xl">
                <span className="text-xs font-semibold text-gray-600">Order ID:</span>
                <span className="text-sm font-bold text-[#7C3AED]">#{order.id}</span>
              </div>
            </div>

          </div>

          {/* RIGHT COL: Order Summary */}
          <div className="w-full lg:w-[380px] xl:w-[420px] bg-white rounded-3xl border border-gray-150 p-6 md:p-8 shadow-sm shrink-0 flex flex-col">
            <h2 className="text-[18px] font-bold text-gray-900 mb-6">Purchased Items</h2>
            
            {/* Items List */}
            <div className="flex flex-col gap-4 mb-6 max-h-[260px] overflow-y-auto pr-1">
              {items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center p-1.5 shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <h3 className="text-[13px] font-bold text-gray-900 leading-tight truncate">{item.name}</h3>
                    <span className="text-xs text-gray-500">Qty: {item.qty || 1}</span>
                  </div>
                  <div className="font-bold text-[14px] text-gray-900 shrink-0">
                    ₹{(Number(item.price) * (item.qty || 1)).toLocaleString('en-IN')}
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full h-px bg-gray-100 mb-6" />

            <div className="flex items-center justify-between mb-6">
              <span className="text-[16px] font-bold text-gray-900">Total Paid</span>
              <span className="text-[22px] font-bold text-[#7C3AED]">₹{total.toLocaleString('en-IN')}</span>
            </div>

            <div className="flex items-center gap-3 p-3.5 bg-emerald-50 rounded-2xl text-emerald-800 text-xs font-semibold mb-6">
              <Truck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Estimated Delivery: 3 to 4 business days</span>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-auto">
              <Link 
                to="/products"
                className="w-full border border-gray-200 text-gray-700 hover:bg-gray-50 flex items-center justify-center py-3.5 rounded-xl font-bold text-xs transition-colors no-underline text-center"
              >
                Back to Shop
              </Link>
              <button 
                onClick={() => navigate(`/track-order?id=${order.id}`)}
                className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white flex items-center justify-center py-3.5 rounded-xl font-bold text-xs transition-colors shadow-sm cursor-pointer"
              >
                Track Order
              </button>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
}
