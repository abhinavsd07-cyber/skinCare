import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, Search } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 sticky top-0 bg-brand-50/80 backdrop-blur-md z-50 border-b border-brand-200/50">
      {/* Left Menu */}
      <div className="flex gap-6 items-center">
        <button className="text-brand-900 hover:text-brand-600 transition-colors">
          <Menu className="w-5 h-5" />
        </button>
        <div className="hidden md:flex gap-6 text-sm font-medium tracking-widest uppercase text-brand-800">
          <Link to="/products" className="hover:text-brand-500 transition-colors">Shop</Link>
          <Link to="/about" className="hover:text-brand-500 transition-colors">Our Story</Link>
        </div>
      </div>

      {/* Logo */}
      <Link to="/" className="text-2xl font-semibold tracking-[0.2em] uppercase text-brand-900 absolute left-1/2 -translate-x-1/2">
        AURA
      </Link>

      {/* Right Icons */}
      <div className="flex gap-6 items-center">
        <button className="text-brand-900 hover:text-brand-600 transition-colors">
          <Search className="w-5 h-5" />
        </button>
        <button className="text-brand-900 hover:text-brand-600 transition-colors relative">
          <ShoppingBag className="w-5 h-5" />
          <span className="absolute -top-1 -right-2 bg-brand-900 text-brand-50 text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span>
        </button>
      </div>
    </nav>
  );
}
