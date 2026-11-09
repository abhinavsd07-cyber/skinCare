import React from 'react';
import Nav from '../components/Nav';
import { ShoppingBag, Heart, Star, X } from 'lucide-react';
import { useCartWishlist } from '../context/CartWishlistContext';

export default function Wishlist() {
  const { wishlistItems, removeFromWishlist, addToCart } = useCartWishlist();
  const products = wishlistItems;

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col font-sans">
      <Nav isSolid={true} />

      <main className="flex-grow max-w-[1280px] mx-auto w-full px-5 md:px-8 py-8 md:py-12">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0F172A]">My Wishlist ({products.length})</h1>
          
          <button 
            onClick={() => { products.forEach(p => addToCart(p)); }}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-purple-200 text-purple-600 font-semibold hover:bg-purple-50 transition-colors bg-white shadow-sm shrink-0">
            <ShoppingBag className="w-5 h-5" />
            Move All to Cart
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.length === 0 ? (
            <div className="col-span-4 py-24 text-center text-gray-400 font-medium">
              Your wishlist is empty. Browse products and add your favorites!
            </div>
          ) : (
            products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm relative flex flex-col hover:shadow-md transition-shadow">
              
              {/* Remove from Wishlist */}
              <button 
                onClick={() => removeFromWishlist(product.id)}
                className="absolute top-4 right-4 z-10 p-1 text-[#7C3AED] hover:text-red-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              {/* Product Image */}
              <div className="w-full h-[240px] flex items-center justify-center bg-gray-50 rounded-xl mb-5 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover mix-blend-multiply" 
                />
              </div>
              
              {/* Product Details */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-[17px] font-semibold text-gray-900 leading-tight mb-2">{product.name}</h3>
                
                <div className="flex items-center gap-1.5 mb-4">
                  <Star fill="#F59E0B" className="text-[#F59E0B] w-4 h-4" />
                  <span className="text-[14px] font-bold text-gray-700">{product.rating}</span>
                  <span className="text-[14px] text-gray-400">({product.reviews})</span>
                </div>
                
                <div className="text-[20px] font-bold text-gray-900 mt-auto mb-5">
                  ₹{product.price}
                </div>
                
                <button 
                  onClick={() => addToCart(product)}
                  className="w-full py-3 rounded-xl border border-purple-200 text-purple-600 font-semibold flex items-center justify-center gap-2 hover:bg-purple-50 transition-colors">
                  <ShoppingBag className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))
          )}
        </div>
        
      </main>
    </div>
  );
}
