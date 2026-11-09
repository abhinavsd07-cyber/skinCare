import { useState } from "react";
import { Heart, Star, ShoppingCart, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useCartWishlist } from "../../context/CartWishlistContext";

export default function ProductCard({ product }) {
  const { addToCart, wishlistItems, addToWishlist, removeFromWishlist, isInWishlist } = useCartWishlist();
  const [added, setAdded] = useState(false);

  const numericPrice = typeof product.price === "string" 
    ? parseInt(product.price.replace(/,/g, ""), 10) 
    : Number(product.price);

  const isFavorited = isInWishlist(product.id);

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFavorited) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: numericPrice,
        image: product.image,
        category: product.category,
        rating: product.rating,
        reviews: product.reviews
      });
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: numericPrice,
      image: product.image,
      category: product.category,
      size: "50ml",
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="flex flex-col rounded-3xl border border-gray-150 p-4 bg-white hover:border-[#C084FC] hover:shadow-lg transition-all duration-300 group h-full relative">
      
      {/* Badges */}
      {product.badge && (
        <span className={`absolute top-7 left-7 z-10 text-[10px] font-bold uppercase px-2.5 py-1 rounded-full tracking-wider ${
          product.badge === "Bestseller" 
            ? "bg-[#FAF5FF] text-[#C084FC]" 
            : "bg-blue-50 text-blue-500"
        }`}>
          {product.badge}
        </span>
      )}

      {/* Heart / Wishlist Toggle */}
      <button 
        onClick={handleToggleWishlist}
        aria-label={isFavorited ? "Remove from wishlist" : "Add to wishlist"}
        className={`absolute top-7 right-7 z-10 p-1.5 rounded-full bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-200 ${
          isFavorited ? "text-rose-500 scale-110" : "text-gray-400 hover:text-rose-500"
        }`}
      >
        <Heart className={`w-5 h-5 ${isFavorited ? "fill-rose-500" : ""}`} />
      </button>

      {/* Clickable Area for the Link */}
      <Link to={`/products/${product.id}`} className="flex flex-col flex-grow no-underline">
        {/* Image Area */}
        <div className="relative aspect-square rounded-2xl bg-gray-50 flex items-center justify-center p-6 mb-4 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        {/* Content Area */}
        <div className="flex flex-col flex-grow text-left">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A855F7] mb-1.5">
            {product.category}
          </span>
          <h3 className="font-semibold text-gray-900 leading-snug mb-1 group-hover:text-[#9333EA] transition-colors">
            {product.name}
          </h3>
          <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-3">
            {product.desc}
          </p>
          
          <div className="flex items-center gap-1.5 mt-auto mb-4">
            <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
            <span className="text-xs font-semibold text-gray-700">{product.rating}</span>
            <span className="text-xs text-gray-400">({product.reviews})</span>
          </div>

          <div className="flex items-center justify-between mt-auto">
            <span className="text-lg font-bold text-gray-900 tracking-tight">
              ₹{numericPrice.toLocaleString('en-IN')}
            </span>
          </div>
        </div>
      </Link>
      
      {/* Add to Cart Button */}
      <button 
        onClick={handleAddToCart}
        className={`mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-200 z-10 relative ${
          added
            ? "bg-emerald-50 border-emerald-300 text-emerald-600"
            : "border-gray-200 text-gray-700 hover:border-[#C084FC] hover:text-[#C084FC] hover:bg-[#FAF5FF] bg-white"
        }`}
      >
        {added ? (
          <>
            <Check className="w-4 h-4 stroke-[2.5]" />
            Added to Cart!
          </>
        ) : (
          <>
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </>
        )}
      </button>
      
    </div>
  );
}
