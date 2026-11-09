import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import { 
  ChevronRight, CreditCard, Building, Wallet, Smartphone, Check, Lock, ShieldCheck
} from "lucide-react";
import { useCartWishlist } from "../context/CartWishlistContext";

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCartWishlist();

  // Retrieve checkout details from navigation state or sessionStorage
  const [checkoutData, setCheckoutData] = useState(() => {
    if (location.state && location.state.items?.length > 0) {
      return location.state;
    }
    try {
      const stored = sessionStorage.getItem("nuveCheckoutData");
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.warn("Could not load stored checkout data", e);
    }
    const subtotal = cartItems.reduce((sum, item) => sum + (Number(item.price) * (item.qty || 1)), 0);
    return {
      items: cartItems,
      address: {
        name: "Priya Sharma",
        street: "123, 4th Main, Koramangala",
        cityState: "Bengaluru, Karnataka - 560034",
        country: "India",
        phone: "+91 98765 43210"
      },
      deliveryMethod: "standard",
      subtotal: subtotal,
      shipping: 0,
      discount: subtotal > 1000 ? 200 : 0,
      total: Math.max(0, subtotal - (subtotal > 1000 ? 200 : 0))
    };
  });

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [saveCard, setSaveCard] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  // Form states
  const [cardNumber, setCardNumber] = useState("4532 •••• •••• 8821");
  const [cardHolder, setCardHolder] = useState(checkoutData.address?.name || "Priya Sharma");
  const [expiry, setExpiry] = useState("12/28");
  const [cvv, setCvv] = useState("•••");
  const [upiId, setUpiId] = useState("");

  const items = checkoutData.items || [];
  const total = checkoutData.total || 0;

  const paymentOptions = [
    { id: "card", label: "Credit / Debit Card", icon: <CreditCard className="w-5 h-5" /> },
    { id: "upi", label: "UPI (GPay / PhonePe / Paytm)", icon: <Smartphone className="w-5 h-5" /> },
    { id: "netbanking", label: "Net Banking", icon: <Building className="w-5 h-5" /> },
    { id: "wallets", label: "Wallets", icon: <Wallet className="w-5 h-5" /> },
  ];

  const handlePay = () => {
    setIsProcessing(true);

    setTimeout(() => {
      const orderId = "NUV" + Math.floor(100000 + Math.random() * 900000);
      const newOrder = {
        id: orderId,
        date: new Date().toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' }),
        time: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
        items: items,
        address: checkoutData.address,
        subtotal: checkoutData.subtotal,
        shipping: checkoutData.shipping,
        discount: checkoutData.discount,
        total: checkoutData.total,
        paymentMethod: paymentMethod === "card" ? "Credit/Debit Card" : paymentMethod.toUpperCase(),
        status: "Confirmed",
        courier: "Delhivery Express",
        trackingId: "1234567890" + Math.floor(100 + Math.random() * 900)
      };

      // Save order to localStorage
      try {
        localStorage.setItem("nuveLastOrder", JSON.stringify(newOrder));
        const pastOrders = JSON.parse(localStorage.getItem("nuveOrders") || "[]");
        localStorage.setItem("nuveOrders", JSON.stringify([newOrder, ...pastOrders]));
      } catch (err) {
        console.error("Failed to save order to localStorage", err);
      }

      // Clear shopping cart
      clearCart();
      sessionStorage.removeItem("nuveCheckoutData");

      setIsProcessing(false);
      navigate("/confirmation", { state: { order: newOrder } });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-gray-900 antialiased flex flex-col">
      <Nav isSolid={true} />
      
      <main className="flex-1 max-w-[1240px] w-full mx-auto px-4 md:px-8 pt-8 pb-16">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 tracking-tight">
          Select Payment Method
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* LEFT COL: Payment Methods Sidebar */}
          <div className="w-full lg:w-[320px] flex flex-col gap-3 shrink-0">
            <h2 className="text-[16px] font-bold text-gray-900 mb-2">Payment Options</h2>
            
            {paymentOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setPaymentMethod(option.id)}
                className={`flex items-center justify-between p-4.5 rounded-2xl border-2 transition-all cursor-pointer text-left ${
                  paymentMethod === option.id 
                    ? "border-[#8B5CF6] bg-[#FAF5FF] shadow-sm" 
                    : "border-gray-200 hover:border-gray-300 bg-white"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    paymentMethod === option.id ? "border-[#8B5CF6]" : "border-gray-300"
                  }`}>
                    {paymentMethod === option.id && <div className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6]" />}
                  </div>

                  <span className={`font-bold text-[14px] ${paymentMethod === option.id ? "text-gray-900" : "text-gray-600"}`}>
                    {option.label}
                  </span>
                </div>
                {paymentMethod === option.id && (
                  <ChevronRight className="w-5 h-5 text-[#8B5CF6]" />
                )}
              </button>
            ))}

            <div className="mt-4 p-4 rounded-2xl bg-white border border-gray-150 flex items-center gap-3 text-xs text-gray-500">
              <ShieldCheck className="w-8 h-8 text-emerald-600 shrink-0" />
              <span>Payments are encrypted with 256-bit SSL security protocol.</span>
            </div>
          </div>

          {/* MIDDLE COL: Payment Details Form */}
          <div className="flex-1 w-full bg-white rounded-3xl border border-gray-150 p-6 md:p-8 shadow-sm">
            
            {paymentMethod === "card" && (
              <div className="flex flex-col gap-5 max-w-[500px]">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <h3 className="font-bold text-gray-900 text-lg">Card Details</h3>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xs text-blue-800 italic">VISA</span>
                    <span className="font-bold text-xs text-amber-600 italic">Mastercard</span>
                    <span className="font-bold text-xs text-blue-600 italic">RuPay</span>
                  </div>
                </div>

                {/* Card Number */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-semibold text-gray-700">Card Number</label>
                  <input 
                    type="text" 
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="4321 0000 0000 1234"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-900 font-medium focus:outline-none focus:border-[#8B5CF6]"
                  />
                </div>

                {/* Cardholder Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-semibold text-gray-700">Cardholder Name</label>
                  <input 
                    type="text" 
                    value={cardHolder}
                    onChange={(e) => setCardHolder(e.target.value)}
                    placeholder="Priya Sharma"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-900 font-medium focus:outline-none focus:border-[#8B5CF6]"
                  />
                </div>

                {/* Expiry and CVV */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-semibold text-gray-700">Expiry Date</label>
                    <input 
                      type="text" 
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      placeholder="MM / YY" 
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-900 font-medium focus:outline-none focus:border-[#8B5CF6]"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-semibold text-gray-700">CVV / CVC</label>
                    <input 
                      type="password" 
                      maxLength="4"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      placeholder="123"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-900 font-medium tracking-widest focus:outline-none focus:border-[#8B5CF6]"
                    />
                  </div>
                </div>

                {/* Save Card Checkbox */}
                <label className="flex items-center gap-3 cursor-pointer mt-1 group">
                  <input 
                    type="checkbox" 
                    checked={saveCard}
                    onChange={(e) => setSaveCard(e.target.checked)}
                    className="w-4 h-4 rounded text-[#8B5CF6] focus:ring-[#8B5CF6]"
                  />
                  <span className="text-[13px] font-medium text-gray-700">Save card securely for 1-click future checkout</span>
                </label>

                {/* Pay Button */}
                <button 
                  onClick={handlePay}
                  disabled={isProcessing}
                  className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] disabled:opacity-60 text-white py-4 rounded-2xl font-bold text-[15px] transition-all shadow-md shadow-purple-500/20 mt-4 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Lock className="w-4 h-4" />
                  {isProcessing ? "Authorizing Payment..." : `Pay ₹${total.toLocaleString('en-IN')}`}
                </button>
              </div>
            )}

            {paymentMethod === "upi" && (
              <div className="flex flex-col gap-5 max-w-[480px]">
                <h3 className="font-bold text-gray-900 text-lg">Instant UPI Payment</h3>
                <p className="text-sm text-gray-500">
                  Enter your Virtual Payment Address (VPA) or scan QR code on the next screen.
                </p>
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-semibold text-gray-700">UPI ID / VPA</label>
                  <input 
                    type="text" 
                    placeholder="username@okhdfcbank" 
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#8B5CF6]"
                  />
                </div>
                <button 
                  onClick={handlePay}
                  disabled={isProcessing}
                  className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] disabled:opacity-60 text-white py-4 rounded-2xl font-bold text-[15px] transition-all shadow-md shadow-purple-500/20 mt-4 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Lock className="w-4 h-4" />
                  {isProcessing ? "Processing UPI Request..." : `Verify & Pay ₹${total.toLocaleString('en-IN')}`}
                </button>
              </div>
            )}

            {paymentMethod === "netbanking" && (
              <div className="flex flex-col gap-5 max-w-[480px]">
                <h3 className="font-bold text-gray-900 text-lg">Select Bank</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["HDFC Bank", "ICICI Bank", "State Bank of India", "Axis Bank", "Kotak Bank", "Punjab National Bank"].map((bank, i) => (
                    <button 
                      key={i}
                      className="p-3 border border-gray-200 rounded-xl text-xs font-bold text-gray-800 hover:border-[#8B5CF6] hover:bg-[#FAF5FF] transition-colors text-left"
                    >
                      {bank}
                    </button>
                  ))}
                </div>
                <button 
                  onClick={handlePay}
                  disabled={isProcessing}
                  className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] disabled:opacity-60 text-white py-4 rounded-2xl font-bold text-[15px] transition-all shadow-md shadow-purple-500/20 mt-4 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Lock className="w-4 h-4" />
                  {isProcessing ? "Connecting to Bank..." : `Proceed to NetBanking ₹${total.toLocaleString('en-IN')}`}
                </button>
              </div>
            )}

            {paymentMethod === "wallets" && (
              <div className="flex flex-col gap-5 max-w-[480px]">
                <h3 className="font-bold text-gray-900 text-lg">Select Wallet</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Amazon Pay", "Paytm Wallet", "Mobikwik", "Freecharge"].map((w, i) => (
                    <button 
                      key={i}
                      className="p-3.5 border border-gray-200 rounded-xl text-xs font-bold text-gray-800 hover:border-[#8B5CF6] hover:bg-[#FAF5FF] transition-colors text-left"
                    >
                      {w}
                    </button>
                  ))}
                </div>
                <button 
                  onClick={handlePay}
                  disabled={isProcessing}
                  className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] disabled:opacity-60 text-white py-4 rounded-2xl font-bold text-[15px] transition-all shadow-md shadow-purple-500/20 mt-4 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Lock className="w-4 h-4" />
                  {isProcessing ? "Opening Wallet..." : `Pay ₹${total.toLocaleString('en-IN')}`}
                </button>
              </div>
            )}

          </div>

          {/* RIGHT COL: Dynamic Order Summary */}
          <div className="w-full lg:w-[360px] xl:w-[400px] bg-white rounded-3xl border border-gray-150 p-6 md:p-8 shadow-sm shrink-0 self-start">
            <h2 className="text-[20px] font-bold text-gray-900 mb-6">Order Summary</h2>
            
            <div className="flex flex-col gap-4 mb-6 max-h-[260px] overflow-y-auto pr-1">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center p-1.5 shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <h3 className="text-[13px] font-bold text-gray-900 leading-tight truncate">{item.name}</h3>
                    <span className="text-[12px] text-gray-500">Qty: {item.qty || 1}</span>
                  </div>
                  <div className="font-bold text-[14px] text-gray-900 shrink-0">
                    ₹{(Number(item.price) * (item.qty || 1)).toLocaleString('en-IN')}
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full h-px bg-gray-100 mb-6" />

            <div className="flex flex-col gap-3 text-[14px] mb-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 font-medium">Subtotal</span>
                <span className="font-bold text-gray-900">₹{(checkoutData.subtotal || 0).toLocaleString('en-IN')}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-600 font-medium">Shipping</span>
                {checkoutData.shipping === 0 ? (
                  <span className="font-bold text-emerald-600">FREE</span>
                ) : (
                  <span className="font-bold text-gray-900">₹{checkoutData.shipping}</span>
                )}
              </div>
              
              {(checkoutData.discount || 0) > 0 && (
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-medium">Discount</span>
                  <span className="font-bold text-emerald-600">-₹{checkoutData.discount}</span>
                </div>
              )}
            </div>

            <div className="w-full h-px bg-gray-100 mb-6" />

            <div className="flex items-center justify-between mb-2">
              <span className="text-[18px] font-bold text-gray-900">Total</span>
              <span className="text-2xl font-bold text-gray-900">₹{total.toLocaleString('en-IN')}</span>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
}
