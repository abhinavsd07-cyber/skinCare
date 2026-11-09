import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCartWishlist } from '../context/CartWishlistContext';
import { User, LogOut, Package, Sparkles, ChevronDown, Heart, ShoppingBag, Menu, X } from 'lucide-react';

export default function Nav({ activePage = "Home", isSolid = false }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const { cartCount, wishlistCount } = useCartWishlist();

  // Read auth state from localStorage
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("nuveUser");
      const token = localStorage.getItem("nuveToken");
      if (token && storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(null);
      }
    } catch {
      setUser(null);
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("nuveToken");
    localStorage.removeItem("nuveUser");
    setUser(null);
    setProfileDropdownOpen(false);
    navigate("/");
  };

  const navItems = [
    { label: "Products", route: "/products" },
    { label: "Skin Analysis", route: "/analysis" },
    { label: "Routine", route: "/routine" },
    { label: "Concerns", route: "/concerns" },
    { label: "Ingredients", route: "/ingredients" },
    { label: "Pricing", route: "/pricing" },
  ];

  return (
    <>
      <nav className={`z-50 flex items-center justify-between px-5 md:px-12 py-4 md:py-5 ${isSolid ? 'relative bg-white border-b border-gray-150' : 'relative bg-white/90 backdrop-blur-md border-b border-gray-100'}`}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer no-underline">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L13.5 9.5L21 12L13.5 14.5L12 22L10.5 14.5L3 12L10.5 9.5L12 2Z" fill="#8B5CF6"/>
            <path d="M5 5L9.5 9.5M19 5L14.5 9.5M19 19L14.5 14.5M5 19L9.5 14.5" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          <span className="font-bold text-2xl tracking-tight text-gray-900">
            Nuvé
          </span>
        </Link>

        {/* Center Links (Desktop) */}
        <ul className="hidden lg:flex items-center gap-7 list-none m-0 p-0 font-medium text-[14px] text-gray-600">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.route}
                className={`transition-colors no-underline font-semibold ${
                  activePage === item.label ? "text-[#8B5CF6] border-b-2 border-[#8B5CF6] pb-1" : "hover:text-gray-900"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Actions (Desktop) */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Wishlist Link */}
          <Link to="/wishlist" className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors" aria-label="Wishlist">
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute top-0 right-0 bg-[#8B5CF6] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Cart Link */}
          <Link to="/cart" className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors" aria-label="Cart">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-[#8B5CF6] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Auth State Button */}
          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="flex items-center gap-2 cursor-pointer p-1.5 rounded-full hover:bg-gray-100 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#FAF5FF] border border-purple-200 text-[#7C3AED] font-bold text-xs flex items-center justify-center">
                  {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                </div>
                <span className="text-xs font-bold text-gray-800 max-w-[100px] truncate">{user.name || "My Account"}</span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
              </button>

              {/* Profile Dropdown Menu */}
              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-150 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-xs font-bold text-gray-900 truncate">{user.name}</p>
                    <p className="text-[11px] text-gray-500 truncate">{user.email}</p>
                  </div>
                  
                  <Link 
                    to="/profile" 
                    onClick={() => setProfileDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold text-gray-700 hover:bg-[#FAF5FF] hover:text-[#7C3AED] transition-colors no-underline"
                  >
                    <User className="w-4 h-4" />
                    Profile Details
                  </Link>

                  <Link 
                    to="/routine" 
                    onClick={() => setProfileDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold text-gray-700 hover:bg-[#FAF5FF] hover:text-[#7C3AED] transition-colors no-underline"
                  >
                    <Sparkles className="w-4 h-4" />
                    My Skincare Routine
                  </Link>

                  <Link 
                    to="/track-order" 
                    onClick={() => setProfileDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold text-gray-700 hover:bg-[#FAF5FF] hover:text-[#7C3AED] transition-colors no-underline"
                  >
                    <Package className="w-4 h-4" />
                    Track Orders
                  </Link>

                  <div className="my-1 border-t border-gray-100" />

                  <button 
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-colors text-left cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link 
                to="/login"
                className="text-xs font-bold text-gray-700 hover:text-gray-900 px-3 py-2 no-underline"
              >
                Sign In
              </Link>
              <Link 
                to="/signup"
                className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors no-underline shadow-sm shadow-purple-500/20"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Right: Cart + Hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <Link to="/cart" className="relative p-2 text-gray-700" aria-label="Cart">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-[#8B5CF6] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">{cartCount}</span>
            )}
          </Link>
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 text-gray-700 hover:text-black transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col">
          <div className="flex items-center justify-between px-5 py-5 border-b border-gray-100">
            <Link to="/" className="flex items-center gap-2 no-underline" onClick={() => setMobileOpen(false)}>
              <span className="font-bold text-xl text-gray-900">Nuvé</span>
            </Link>
            <button onClick={() => setMobileOpen(false)} className="p-2 text-gray-700" aria-label="Close menu">
              <X className="w-6 h-6" />
            </button>
          </div>

          <ul className="flex flex-col list-none m-0 p-0 px-5 pt-6 gap-1 flex-1 overflow-y-auto">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.route}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3.5 rounded-2xl text-[15px] font-bold no-underline transition-colors ${
                    activePage === item.label
                      ? "bg-[#FAF5FF] text-[#8B5CF6]"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            
            <li className="pt-2">
              <Link 
                to="/wishlist" 
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between px-4 py-3.5 rounded-2xl text-[15px] font-bold text-gray-700 hover:bg-gray-50 no-underline"
              >
                <span>My Wishlist</span>
                {wishlistCount > 0 && <span className="text-xs bg-[#FAF5FF] text-[#8B5CF6] px-2 py-0.5 rounded-full">{wishlistCount}</span>}
              </Link>
            </li>
          </ul>

          <div className="p-6 border-t border-gray-100 flex flex-col gap-3">
            {user ? (
              <>
                <div className="flex items-center gap-3 mb-2 px-1">
                  <div className="w-10 h-10 rounded-full bg-[#FAF5FF] text-[#7C3AED] font-bold flex items-center justify-center">
                    {user.name?.charAt(0) || "U"}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                </div>
                <button 
                  onClick={() => { handleLogout(); setMobileOpen(false); }}
                  className="w-full py-3 bg-rose-50 text-rose-600 rounded-xl font-bold text-sm cursor-pointer"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <Link 
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="w-full py-3 border border-gray-200 text-gray-800 text-center rounded-xl font-bold text-sm no-underline"
                >
                  Sign In
                </Link>
                <Link 
                  to="/signup"
                  onClick={() => setMobileOpen(false)}
                  className="w-full py-3 bg-[#8B5CF6] text-white text-center rounded-xl font-bold text-sm no-underline shadow-sm"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
