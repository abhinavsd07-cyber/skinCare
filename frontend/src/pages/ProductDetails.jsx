import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Nav from "../components/Nav";
import { 
  ChevronRight, Star, Check, Info, Minus, Plus, ShoppingBag, 
  ShieldCheck, Truck, RefreshCcw, Lock, Heart, Loader2
} from "lucide-react";
import { useCartWishlist } from "../context/CartWishlistContext";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000/api";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, isInWishlist, addToWishlist, removeFromWishlist } = useCartWishlist();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const [size, setSize] = useState("30ml");
  const [qty, setQty] = useState(1);
  const [addedToast, setAddedToast] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${API_BASE}/products/${id}`);
        if (res.data?.data && isMounted) {
          setProduct(res.data.data);
        }
      } catch (err) {
        console.warn("Could not fetch product from backend, using fallback dataset", err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchProduct();
    return () => { isMounted = false; };
  }, [id]);

  // Derived or fallback data
  const currentProduct = product || {
    _id: id || "default-1",
    name: "Hydrating Glow Serum",
    brand: "Nuvé",
    category: "SERUM",
    description: "Deeply hydrates, strengthens the skin barrier, and imparts a natural luminous finish. Infused with pure hyaluronic acid and botanical extracts.",
    price: 1299,
    rating: 4.8,
    numReviews: 980,
    badge: "Bestseller",
    ingredients: ["Hyaluronic Acid", "Niacinamide", "Aloe Vera", "Panthenol", "Glycerin"],
    targetConcerns: ["Dryness", "Dehydration", "Dullness"],
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop"
  };

  const images = [
    currentProduct.image || "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1608248593802-8d82054ff8e0?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571781526291-c477eb69ddc3?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1611077544837-124b893a95dc?q=80&w=800&auto=format&fit=crop"
  ];

  const features = [
    "Dermatologically tested & non-comedogenic",
    "Formulated for all sensitive and normal skin types",
    "Free from parabens, sulfates, and artificial fragrances",
    "Clinically proven 24-hour hydration lock",
    "Cruelty-free & 100% vegan ingredients"
  ];

  const isFavorited = isInWishlist(currentProduct._id || currentProduct.id);

  const handleToggleWishlist = () => {
    const prodId = currentProduct._id || currentProduct.id;
    if (isFavorited) {
      removeFromWishlist(prodId);
    } else {
      addToWishlist({
        id: prodId,
        name: currentProduct.name,
        price: currentProduct.price,
        image: currentProduct.image,
        category: currentProduct.category,
        rating: currentProduct.rating,
        reviews: currentProduct.numReviews
      });
    }
  };

  const handleAddToCart = () => {
    const prodId = currentProduct._id || currentProduct.id;
    addToCart({
      id: prodId,
      name: currentProduct.name,
      price: currentProduct.price,
      image: currentProduct.image,
      category: currentProduct.category,
      size: size,
      qty: qty
    });
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2000);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/checkout");
  };

  const originalPrice = Math.round(currentProduct.price * 1.3);
  const discountPercent = Math.round(((originalPrice - currentProduct.price) / originalPrice) * 100);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 antialiased flex flex-col">
      <Nav isSolid={true} />
      
      <main className="max-w-[1280px] w-full mx-auto px-4 md:px-8 pt-8 pb-16 flex-grow">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 mb-8 text-[13px] font-medium text-gray-500 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="text-gray-500 hover:text-gray-900 no-underline">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <Link to="/products" className="text-gray-500 hover:text-gray-900 no-underline">Products</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <span className="text-[#A855F7] font-semibold">{currentProduct.name}</span>
        </nav>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 gap-4 text-gray-400">
            <Loader2 className="w-10 h-10 animate-spin text-[#A855F7]" />
            <p className="font-medium">Loading product details...</p>
          </div>
        ) : (
          /* 3-Column Layout */
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px_320px] xl:grid-cols-[1.1fr_440px_340px] gap-8 xl:gap-10 items-start mb-16">
            
            {/* COL 1: Images */}
            <div className="flex flex-col sm:flex-row gap-4 bg-[#FAFAFA] rounded-3xl p-4 md:p-6 border border-gray-150 relative">
              {/* Heart floating badge */}
              <button 
                onClick={handleToggleWishlist}
                className="absolute top-6 right-6 z-10 p-2.5 rounded-full bg-white shadow-md hover:scale-110 transition-transform"
                aria-label="Wishlist"
              >
                <Heart className={`w-5 h-5 ${isFavorited ? "fill-rose-500 text-rose-500" : "text-gray-400 hover:text-rose-500"}`} />
              </button>

              {/* Thumbnails */}
              <div className="flex sm:flex-col gap-3 order-2 sm:order-1 overflow-x-auto sm:overflow-visible shrink-0">
                {images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl border-2 overflow-hidden bg-white flex items-center justify-center transition-all ${
                      activeImage === idx ? 'border-[#A855F7] shadow-sm' : 'border-transparent hover:border-gray-200 opacity-80 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumb" className="w-full h-full object-contain mix-blend-multiply p-1" />
                  </button>
                ))}
              </div>
              
              {/* Main Image */}
              <div className="flex-1 flex items-center justify-center relative min-h-[320px] md:min-h-[460px] order-1 sm:order-2">
                <img 
                  src={images[activeImage]} 
                  alt={currentProduct.name} 
                  className="w-full h-full max-h-[420px] md:max-h-[500px] object-contain mix-blend-multiply transition-all duration-300" 
                />
              </div>
            </div>

            {/* COL 2: Product Info */}
            <div className="flex flex-col pt-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#A855F7] mb-2">
                {currentProduct.category}
              </span>

              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">
                {currentProduct.name}
              </h1>
              
              <p className="text-gray-600 font-medium text-[15px] leading-relaxed mb-4">
                {currentProduct.description}
              </p>
              
              {/* Reviews */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex text-amber-400">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                  ))}
                </div>
                <span className="text-[13px] font-semibold text-gray-700">{currentProduct.rating || 4.8}</span>
                <span className="text-[13px] text-gray-400">({currentProduct.numReviews || 980} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[28px] font-bold text-gray-900 tracking-tight">
                  ₹{currentProduct.price.toLocaleString('en-IN')}
                </span>
                <span className="text-[16px] font-medium text-gray-400 line-through">
                  ₹{originalPrice.toLocaleString('en-IN')}
                </span>
                <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-lg">
                  {discountPercent}% OFF
                </span>
              </div>

              {/* Size Selector */}
              <div className="mb-6">
                <h4 className="text-[14px] font-bold text-gray-900 mb-3">Select Size</h4>
                <div className="flex gap-3">
                  {["30ml", "50ml", "100ml"].map((s) => (
                    <button 
                      key={s}
                      onClick={() => setSize(s)}
                      className={`px-5 py-2.5 rounded-xl border text-[13px] font-bold transition-all ${
                        size === s 
                          ? 'border-[#A855F7] bg-[#FAF5FF] text-[#9333EA] shadow-sm' 
                          : 'border-gray-200 text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Feature Bullets */}
              <ul className="flex flex-col gap-3 mb-8">
                {features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#FAF5FF] flex items-center justify-center text-[#A855F7] shrink-0">
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </div>
                    <span className="text-[14px] font-medium text-gray-700">{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 items-stretch">
                {/* Quantity */}
                <div className="flex items-center justify-between border border-gray-200 rounded-xl px-4 py-3 sm:w-28 shrink-0 bg-white">
                  <button 
                    onClick={() => setQty(Math.max(1, qty - 1))} 
                    className="text-gray-500 hover:text-black transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-[14px] font-bold">{qty}</span>
                  <button 
                    onClick={() => setQty(qty + 1)} 
                    className="text-gray-500 hover:text-black transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                
                {/* Add to Cart */}
                <button 
                  onClick={handleAddToCart}
                  className={`flex-1 flex items-center justify-center gap-2 rounded-xl py-3.5 font-bold text-[14px] transition-all shadow-sm ${
                    addedToast 
                      ? "bg-emerald-600 text-white" 
                      : "bg-[#8B5CF6] hover:bg-[#7C3AED] text-white"
                  }`}
                >
                  {addedToast ? (
                    <>
                      <Check className="w-4 h-4 stroke-[3]" />
                      Added {qty} to Cart!
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      Add to Cart
                    </>
                  )}
                </button>
                
                {/* Buy Now */}
                <button 
                  onClick={handleBuyNow}
                  className="flex-1 border-2 border-[#E9D5FF] text-[#7C3AED] hover:bg-[#FAF5FF] rounded-xl py-3.5 font-bold text-[14px] transition-colors"
                >
                  Buy Now
                </button>
              </div>
            </div>

            {/* COL 3: Ingredients & Details Panel */}
            <div className="bg-[#FAFAFA] rounded-3xl border border-gray-150 p-6 md:p-8 flex flex-col self-stretch">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[16px] font-bold text-gray-900">Key Ingredients</h3>
                <Info className="w-5 h-5 text-[#A855F7]" />
              </div>
              
              <div className="flex flex-col gap-4 mb-6">
                {currentProduct.ingredients && currentProduct.ingredients.length > 0 ? (
                  currentProduct.ingredients.map((ing, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-[14px] font-bold text-gray-900">{typeof ing === "string" ? ing : ing.name}</span>
                      <span className="text-[12px] font-medium text-gray-500 mt-0.5">
                        {typeof ing === "object" && ing.desc ? ing.desc : "Nourishes and balances natural skin physiology"}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-gray-500">Pure dermatological grade actives.</p>
                )}
              </div>
              
              <Link to="/ingredients" className="text-[#A855F7] text-[13px] font-bold text-left hover:text-[#9333EA] transition-colors mb-6 no-underline">
                Explore Ingredients Glossary →
              </Link>

              <div className="w-full h-px bg-gray-200 mb-6" />

              <h3 className="text-[16px] font-bold text-gray-900 mb-4">Targeted Concerns</h3>
              <ul className="flex flex-col gap-2.5">
                {(currentProduct.targetConcerns || ["Dryness", "Dullness"]).map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full border border-emerald-500 flex items-center justify-center text-emerald-500 shrink-0">
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </div>
                    <span className="text-[13px] font-medium text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        )}

        {/* Bottom Trust Badges */}
        <div className="w-full bg-[#FAFAFA] rounded-2xl p-6 md:p-8 flex flex-wrap justify-between items-center gap-6 border border-gray-150">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#8B5CF6]" />
            <span className="text-[13px] font-bold text-gray-900">100% Genuine</span>
          </div>
          <div className="flex items-center gap-3">
            <Truck className="w-5 h-5 text-[#8B5CF6]" />
            <span className="text-[13px] font-bold text-gray-900">Free Express Shipping</span>
          </div>
          <div className="flex items-center gap-3">
            <RefreshCcw className="w-5 h-5 text-[#8B5CF6]" />
            <span className="text-[13px] font-bold text-gray-900">Easy 7-Day Returns</span>
          </div>
          <div className="flex items-center gap-3">
            <Lock className="w-5 h-5 text-[#8B5CF6]" />
            <span className="text-[13px] font-bold text-gray-900">Secure Payments</span>
          </div>
        </div>

      </main>
    </div>
  );
}
