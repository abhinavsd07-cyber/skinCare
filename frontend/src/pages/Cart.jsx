import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { Minus, Plus, Trash2, ArrowLeft, Info, Check } from "lucide-react";
import { useCartWishlist } from "../context/CartWishlistContext";

export default function Cart() {
  const { cartItems, removeFromCart, updateCartQty } = useCartWishlist();
  const items = cartItems;

  const removeItem = (id) => removeFromCart(id);

  const updateQty = (id, delta) => updateCartQty(id, delta);

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const discount = items.length > 0 ? 200 : 0;
  const total = subtotal - discount;

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 antialiased flex flex-col">
      <Nav />
      
      <main className="flex-1 max-w-[1100px] w-full mx-auto px-4 md:px-8 pt-24 pb-16">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 tracking-tight">
          Shopping Cart
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* LEFT COL: Cart Items */}
          <div className="flex-1 bg-white rounded-2xl border border-gray-150 p-6 md:p-8 shadow-sm w-full">
            
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-[1fr_120px_140px_100px_40px] gap-4 pb-4 border-b border-gray-100 text-[13px] font-semibold text-gray-500">
              <div>Product</div>
              <div className="text-center">Price</div>
              <div className="text-center">Quantity</div>
              <div className="text-right">Total</div>
              <div></div>
            </div>

            {/* Cart Items List */}
            <div className="flex flex-col divide-y divide-gray-100">
              {items.map((item) => (
                <div key={item.id} className="py-6 flex flex-col md:grid md:grid-cols-[1fr_120px_140px_100px_40px] gap-4 md:items-center">
                  
                  {/* Product */}
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-50 rounded-xl flex items-center justify-center p-2 flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-[14px] font-bold text-gray-900 mb-1">{item.name}</h3>
                      <span className="text-[13px] text-gray-500">{item.size}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="hidden md:block text-center font-bold text-[14px] text-gray-900">
                    ₹{item.price.toLocaleString('en-IN')}
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center justify-between md:justify-center mt-4 md:mt-0">
                    <div className="flex items-center justify-between border border-gray-200 rounded-lg px-3 py-2 w-[110px]">
                      <button onClick={() => updateQty(item.id, -1)} className="text-gray-500 hover:text-black">
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-[13px] font-bold">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, 1)} className="text-gray-500 hover:text-black">
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Total & Delete (Mobile flexed, Desktop grid) */}
                  <div className="flex items-center justify-between md:contents mt-2 md:mt-0">
                    <div className="md:text-right font-bold text-[15px] text-gray-900">
                      ₹{(item.price * item.qty).toLocaleString('en-IN')}
                    </div>
                    
                    <div className="md:flex md:justify-end">
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 p-2 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  
                </div>
              ))}

              {items.length === 0 && (
                <div className="py-12 text-center text-gray-500 font-medium">
                  Your cart is empty.
                </div>
              )}
            </div>

            {/* Continue Shopping Link */}
            <div className="pt-8">
              <Link to="/products" className="inline-flex items-center gap-2 text-[#8B5CF6] hover:text-[#7C3AED] font-bold text-[14px] transition-colors no-underline">
                <ArrowLeft className="w-4 h-4" />
                Continue Shopping
              </Link>
            </div>
            
          </div>

          {/* RIGHT COL: Order Summary */}
          <div className="w-full lg:w-[340px] xl:w-[380px] bg-white rounded-2xl border border-gray-150 p-6 md:p-8 shadow-sm flex-shrink-0 self-start">
            <h2 className="text-[18px] font-bold text-gray-900 mb-6">Order Summary</h2>
            
            <div className="flex flex-col gap-4 text-[14px] mb-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 font-medium">Subtotal ({items.reduce((sum, i) => sum + i.qty, 0)} items)</span>
                <span className="font-bold text-gray-800">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-gray-600 font-medium">
                  Shipping
                  <Info className="w-4 h-4 text-gray-400" />
                </div>
                <span className="font-bold text-green-600">Free</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-600 font-medium">Discount</span>
                <span className="font-bold text-green-600">-₹{discount.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="w-full h-px bg-gray-100 mb-6" />

            <div className="flex items-center justify-between mb-8">
              <span className="text-[18px] font-bold text-gray-900">Total</span>
              <span className="text-2xl font-bold text-gray-900">₹{total.toLocaleString('en-IN')}</span>
            </div>

            <Link to="/checkout" className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white py-4 rounded-xl font-bold text-[15px] transition-colors shadow-sm mb-4 flex items-center justify-center no-underline">
              Proceed to Checkout
            </Link>
            
            {discount > 0 && (
              <div className="w-full bg-[#ECFDF5] rounded-xl p-3 flex items-center justify-center gap-2 text-[#059669]">
                <div className="w-4 h-4 rounded-full border-2 border-current flex items-center justify-center">
                  <Check className="w-2.5 h-2.5" strokeWidth={3} />
                </div>
                <span className="text-[13px] font-bold">
                  You saved ₹{discount.toLocaleString('en-IN')} on this order!
                </span>
              </div>
            )}
            
          </div>
        </div>
      </main>
    </div>
  );
}
