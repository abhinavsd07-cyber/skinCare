import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import { 
  Truck, CreditCard, CheckCircle, MapPin, Check,
  ShieldCheck, RefreshCcw, HeadphonesIcon, Rocket, ArrowRight, ShoppingBag
} from "lucide-react";
import { useCartWishlist } from "../context/CartWishlistContext";

export default function Checkout() {
  const navigate = useNavigate();
  const { cartItems } = useCartWishlist();

  // If user has stored profile, populate shipping address
  const [address, setAddress] = useState(() => {
    try {
      const savedUser = JSON.parse(localStorage.getItem("nuveUser") || "{}");
      return {
        name: savedUser.name || "Priya Sharma",
        street: "123, 4th Main, Koramangala",
        cityState: "Bengaluru, Karnataka - 560034",
        country: "India",
        phone: "+91 98765 43210"
      };
    } catch {
      return {
        name: "Priya Sharma",
        street: "123, 4th Main, Koramangala",
        cityState: "Bengaluru, Karnataka - 560034",
        country: "India",
        phone: "+91 98765 43210"
      };
    }
  });

  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState("standard");

  // Dynamic calculations from actual cart items
  const items = cartItems;
  const subtotal = items.reduce((sum, item) => sum + (Number(item.price) * (item.qty || 1)), 0);
  const shipping = items.length === 0 ? 0 : (deliveryMethod === "standard" ? 0 : 149);
  const discount = subtotal > 1000 ? 200 : 0;
  const total = Math.max(0, subtotal + shipping - discount);

  const handleProceedToPayment = () => {
    if (items.length === 0) return;
    const checkoutData = {
      items,
      address,
      deliveryMethod,
      subtotal,
      shipping,
      discount,
      total
    };
    sessionStorage.setItem("nuveCheckoutData", JSON.stringify(checkoutData));
    navigate("/payment", { state: checkoutData });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-gray-900 antialiased flex flex-col">
      <Nav isSolid={true} />
      
      <main className="flex-1 max-w-[1240px] w-full mx-auto px-4 md:px-8 pt-8 pb-16">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 tracking-tight">
          Checkout
        </h1>

        {items.length === 0 ? (
          <div className="bg-white rounded-3xl border border-gray-150 p-12 text-center max-w-xl mx-auto shadow-sm flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#FAF5FF] text-[#A855F7] flex items-center justify-center mb-4">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Your Cart is Empty</h2>
            <p className="text-sm text-gray-500 mb-6">
              Add your personalized skincare essentials to your cart before proceeding to checkout.
            </p>
            <Link 
              to="/products"
              className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold text-sm px-8 py-3.5 rounded-xl transition-colors no-underline"
            >
              Browse Skincare Products
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
            
            {/* LEFT COL: Checkout Steps */}
            <div className="flex-1 w-full flex flex-col gap-6">
              
              {/* Stepper */}
              <div className="flex items-center gap-4 py-2 px-2 md:px-8 mb-2 max-w-[600px] w-full overflow-x-auto no-scrollbar">
                {/* Step 1: Shipping (Active) */}
                <div className="flex items-center gap-3 shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#8B5CF6] text-white flex items-center justify-center shadow-md shadow-purple-500/20">
                    <Truck className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-[15px] text-[#8B5CF6]">Shipping</span>
                </div>

                <div className="flex-1 h-px bg-gray-300 min-w-[30px]"></div>

                {/* Step 2: Payment */}
                <div className="flex items-center gap-3 shrink-0">
                  <div className="w-10 h-10 rounded-full border-2 border-gray-300 text-gray-400 flex items-center justify-center bg-white">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-[15px] text-gray-400">Payment</span>
                </div>

                <div className="flex-1 h-px bg-gray-300 min-w-[30px]"></div>

                {/* Step 3: Review */}
                <div className="flex items-center gap-3 shrink-0">
                  <div className="w-10 h-10 rounded-full border-2 border-gray-300 text-gray-400 flex items-center justify-center bg-white">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-[15px] text-gray-400">Review</span>
                </div>
              </div>

              {/* Main Form Card */}
              <div className="bg-white rounded-3xl border border-gray-150 p-6 md:p-8 shadow-sm">
                
                {/* Shipping Address Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-[18px] font-bold text-gray-900">Shipping Address</h2>
                  <button 
                    onClick={() => setIsEditingAddress(!isEditingAddress)}
                    className="text-[#8B5CF6] hover:text-[#7C3AED] font-bold text-[14px] transition-colors"
                  >
                    {isEditingAddress ? "Save" : "Change"}
                  </button>
                </div>

                {isEditingAddress ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-semibold text-gray-600">Full Name</label>
                      <input 
                        type="text" 
                        value={address.name}
                        onChange={(e) => setAddress({...address, name: e.target.value})}
                        className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-semibold text-gray-600">Phone</label>
                      <input 
                        type="text" 
                        value={address.phone}
                        onChange={(e) => setAddress({...address, phone: e.target.value})}
                        className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm"
                      />
                    </div>
                    <div className="sm:col-span-2 flex flex-col gap-1">
                      <label className="text-xs font-semibold text-gray-600">Street Address</label>
                      <input 
                        type="text" 
                        value={address.street}
                        onChange={(e) => setAddress({...address, street: e.target.value})}
                        className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm"
                      />
                    </div>
                    <div className="sm:col-span-2 flex flex-col gap-1">
                      <label className="text-xs font-semibold text-gray-600">City, State & PIN</label>
                      <input 
                        type="text" 
                        value={address.cityState}
                        onChange={(e) => setAddress({...address, cityState: e.target.value})}
                        className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start gap-4 md:gap-5 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-[#FAF5FF] flex items-center justify-center text-[#8B5CF6] shrink-0 mt-0.5">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col text-[14px] text-gray-600 leading-relaxed">
                      <span className="font-bold text-[16px] text-gray-900 mb-1">{address.name}</span>
                      <span>{address.street}</span>
                      <span>{address.cityState}</span>
                      <span>{address.country}</span>
                      <span className="mt-1 font-semibold text-gray-800">{address.phone}</span>
                    </div>
                  </div>
                )}

                <div className="w-full h-px bg-gray-100 mb-8" />

                {/* Delivery Method */}
                <h2 className="text-[18px] font-bold text-gray-900 mb-5">Delivery Method</h2>
                
                <div className="flex flex-col gap-4">
                  {/* Standard */}
                  <label className={`relative flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-colors ${
                    deliveryMethod === "standard" ? "border-[#8B5CF6] bg-[#FAF5FF]/40" : "border-gray-200 hover:border-gray-300 bg-white"
                  }`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        deliveryMethod === "standard" ? "border-[#8B5CF6]" : "border-gray-300"
                      }`}>
                        {deliveryMethod === "standard" && <div className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6]" />}
                      </div>
                      
                      <div className="w-10 h-10 rounded-xl bg-[#F5F3FF] flex items-center justify-center text-[#8B5CF6]">
                        <Truck className="w-5 h-5" />
                      </div>
                      
                      <div>
                        <span className="font-bold text-[14px] text-gray-900 block">Standard Delivery (3-5 business days)</span>
                        <span className="text-xs text-gray-500">Delivered via Bluedart / Delhivery</span>
                      </div>
                    </div>
                    <span className="font-bold text-[14px] text-emerald-600">FREE</span>
                    
                    <input 
                      type="radio" 
                      name="delivery" 
                      value="standard" 
                      checked={deliveryMethod === "standard"}
                      onChange={() => setDeliveryMethod("standard")}
                      className="hidden" 
                    />
                  </label>

                  {/* Express */}
                  <label className={`relative flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-colors ${
                    deliveryMethod === "express" ? "border-[#8B5CF6] bg-[#FAF5FF]/40" : "border-gray-200 hover:border-gray-300 bg-white"
                  }`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        deliveryMethod === "express" ? "border-[#8B5CF6]" : "border-gray-300"
                      }`}>
                        {deliveryMethod === "express" && <div className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6]" />}
                      </div>
                      
                      <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                        <Rocket className="w-5 h-5" />
                      </div>
                      
                      <div>
                        <span className="font-bold text-[14px] text-gray-900 block">Priority Express (1-2 days)</span>
                        <span className="text-xs text-gray-500">Fast-tracked courier dispatch</span>
                      </div>
                    </div>
                    <span className="font-bold text-[14px] text-gray-900">₹149</span>
                    
                    <input 
                      type="radio" 
                      name="delivery" 
                      value="express" 
                      checked={deliveryMethod === "express"}
                      onChange={() => setDeliveryMethod("express")}
                      className="hidden" 
                    />
                  </label>
                </div>

              </div>

              {/* Bottom Trust Badges */}
              <div className="bg-white rounded-3xl p-6 flex flex-wrap justify-center md:justify-between items-center gap-4 border border-gray-150 shadow-sm">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-[#8B5CF6]" />
                  <span className="text-[12px] font-bold text-gray-800 leading-tight">100% Secure<br/>Encrypted</span>
                </div>
                <div className="hidden md:block w-px h-8 bg-gray-100" />
                <div className="flex items-center gap-3">
                  <Truck className="w-6 h-6 text-[#8B5CF6]" />
                  <span className="text-[12px] font-bold text-gray-800 leading-tight">Free Delivery<br/>Across India</span>
                </div>
                <div className="hidden md:block w-px h-8 bg-gray-100" />
                <div className="flex items-center gap-3">
                  <RefreshCcw className="w-6 h-6 text-[#8B5CF6]" />
                  <span className="text-[12px] font-bold text-gray-800 leading-tight">Hassle-Free<br/>7-Day Returns</span>
                </div>
                <div className="hidden lg:block w-px h-8 bg-gray-100" />
                <div className="flex items-center gap-3">
                  <HeadphonesIcon className="w-6 h-6 text-[#8B5CF6]" />
                  <span className="text-[12px] font-bold text-gray-800 leading-tight">24/7 Dermatologist<br/>Support</span>
                </div>
              </div>

            </div>

            {/* RIGHT COL: Dynamic Order Summary */}
            <div className="w-full lg:w-[380px] xl:w-[420px] bg-white rounded-3xl border border-gray-150 p-6 md:p-8 shadow-sm shrink-0 self-start">
              <h2 className="text-[20px] font-bold text-gray-900 mb-6">Order Summary</h2>
              
              {/* Dynamic Items List */}
              <div className="flex flex-col gap-4 mb-6 max-h-[300px] overflow-y-auto pr-1">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center p-1.5 shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      <h3 className="text-[13px] font-bold text-gray-900 leading-tight truncate">{item.name}</h3>
                      <span className="text-[12px] text-gray-500">Qty: {item.qty || 1} • {item.size || "50ml"}</span>
                    </div>
                    <div className="font-bold text-[14px] text-gray-900 shrink-0">
                      ₹{(Number(item.price) * (item.qty || 1)).toLocaleString('en-IN')}
                    </div>
                  </div>
                ))}
              </div>

              <div className="w-full h-px bg-gray-100 mb-6" />

              <div className="flex flex-col gap-4 text-[14px] mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-medium">Subtotal ({items.reduce((sum, i) => sum + (i.qty || 1), 0)} items)</span>
                  <span className="font-bold text-gray-900">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-medium">Shipping</span>
                  {shipping === 0 ? (
                    <span className="font-bold text-emerald-600">FREE</span>
                  ) : (
                    <span className="font-bold text-gray-900">₹{shipping.toLocaleString('en-IN')}</span>
                  )}
                </div>
                
                {discount > 0 && (
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-medium">Welcome Discount</span>
                    <span className="font-bold text-emerald-600">-₹{discount.toLocaleString('en-IN')}</span>
                  </div>
                )}
              </div>

              <div className="w-full h-px bg-gray-100 mb-6" />

              <div className="flex items-center justify-between mb-8">
                <span className="text-[18px] font-bold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-gray-900">₹{total.toLocaleString('en-IN')}</span>
              </div>

              <button 
                onClick={handleProceedToPayment}
                className="w-full flex items-center justify-center gap-2 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white py-4 rounded-2xl font-bold text-[15px] transition-colors shadow-sm shadow-purple-500/20 mb-4 cursor-pointer"
              >
                Continue to Payment
                <ArrowRight className="w-4 h-4" />
              </button>
              
              {discount > 0 && (
                <div className="w-full bg-[#ECFDF5] rounded-xl p-3 flex items-center justify-center gap-2 text-[#059669]">
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span className="text-[13px] font-bold">
                    You saved ₹{discount.toLocaleString('en-IN')} on this order!
                  </span>
                </div>
              )}
              
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
