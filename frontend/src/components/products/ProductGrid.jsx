import { useState, useEffect } from "react";
import axios from "axios";
import FiltersSidebar from "./FiltersSidebar";
import ProductCard from "./ProductCard";
import { ChevronDown, Grid3X3, List, Loader2, PackageOpen } from "lucide-react";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000/api";

export default function ProductGrid() {
  const categories = ["All", "CLEANSER", "SERUM", "TONER", "MOISTURIZER", "SUNSCREEN", "TREATMENT", "MASK"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState("Recommended");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const params = {};
        if (activeCategory !== "All") params.category = activeCategory;
        if (sortBy === "Price: Low to High") params.sort = "price_asc";
        else if (sortBy === "Price: High to Low") params.sort = "price_desc";
        else if (sortBy === "Top Rated") params.sort = "rating";

        const res = await axios.get(`${API_BASE}/products`, { params });
        setProducts(res.data.data || []);
      } catch (err) {
        setError("Failed to load products. Please make sure the backend server is running.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [activeCategory, sortBy]);

  // Map MongoDB product to what ProductCard expects
  const mapProduct = (p) => ({
    id: p._id,
    badge: p.badge,
    category: p.category,
    name: p.name,
    desc: p.description,
    rating: p.rating?.toFixed(1),
    reviews: p.numReviews >= 1000 ? `${(p.numReviews / 1000).toFixed(1)}K` : String(p.numReviews),
    price: p.price.toLocaleString('en-IN'),
    image: p.image
  });

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-gray-100 pb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">All Products</h2>
            <p className="text-gray-500 font-medium">
              {loading ? "Loading..." : `${products.length} curated skincare solutions`}
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 relative">
              <span className="text-sm font-semibold text-gray-500">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none pl-4 pr-8 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-800 hover:border-gray-300 transition-colors bg-white cursor-pointer"
              >
                <option>Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Top Rated</option>
              </select>
              <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 pointer-events-none" />
            </div>
            
            <div className="flex items-center gap-2 border border-gray-200 rounded-xl p-1 bg-white">
              <button className="p-1.5 rounded-lg bg-[#FAF5FF] text-[#C084FC]">
                <Grid3X3 className="w-5 h-5" />
              </button>
              <button className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-50 transition-colors">
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Sidebar */}
          <FiltersSidebar />

          {/* Product Grid Area */}
          <div className="flex-grow flex flex-col min-w-0">
            
            {/* Category Pills */}
            <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-6 no-scrollbar scroll-smooth">
              {categories.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
                    activeCategory === cat
                      ? "bg-[#FAF5FF] text-[#C084FC] border border-[#C084FC]/30" 
                      : "bg-white border border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* States: Loading / Error / Empty / Products */}
            {loading ? (
              <div className="flex flex-col items-center justify-center py-32 gap-4 text-gray-400">
                <Loader2 className="w-10 h-10 animate-spin text-[#C084FC]" />
                <p className="font-medium">Loading products from database...</p>
              </div>
            ) : error ? (
              <div className="flex flex-col items-center justify-center py-32 gap-4 text-red-400">
                <PackageOpen className="w-12 h-12" />
                <p className="font-semibold text-center max-w-sm">{error}</p>
              </div>
            ) : products.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-32 gap-4 text-gray-400">
                <PackageOpen className="w-12 h-12" />
                <p className="font-semibold">No products found in this category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                {products.map(product => (
                  <ProductCard key={product._id} product={mapProduct(product)} />
                ))}
              </div>
            )}

            {/* Promo Banner */}
            {!loading && !error && (
              <div className="w-full rounded-3xl bg-gradient-to-r from-[#FAF5FF] to-[#F3E8FF] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
                <div className="flex items-center gap-8">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
                    <div className="absolute inset-0 bg-white/40 rounded-full blur-2xl"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=400&auto=format&fit=crop" 
                      alt="Product" 
                      className="absolute top-0 left-0 w-24 h-24 object-cover rounded-full border-4 border-white shadow-lg"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=400&auto=format&fit=crop" 
                      alt="Product" 
                      className="absolute bottom-0 right-0 w-28 h-28 object-cover rounded-full border-4 border-white shadow-lg z-10"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Not sure what's right for you?</h3>
                    <p className="text-sm font-medium text-gray-600 max-w-sm">
                      Get personalized product recommendations based on your skin analysis.
                    </p>
                  </div>
                </div>
                <button className="flex-shrink-0 flex items-center gap-2 px-8 py-4 bg-[#A855F7] hover:bg-[#9333EA] text-white rounded-xl font-bold text-sm shadow-md shadow-purple-500/20 transition-all">
                  <span className="text-lg">✨</span>
                  Analyze Your Skin
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
