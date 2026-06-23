import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Products() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Radiance Serum', price: 48.00, image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800', category: 'Serum' },
    { id: 2, name: 'Gentle Cleanser', price: 32.00, image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800', category: 'Cleanser' },
    { id: 3, name: 'Daily Moisture', price: 45.00, image: 'https://images.unsplash.com/photo-1571781926291-c477eb31f7d5?auto=format&fit=crop&q=80&w=800', category: 'Moisturizer' },
    { id: 4, name: 'Night Renewal', price: 65.00, image: 'https://images.unsplash.com/photo-1608248593842-8021c640e70e?auto=format&fit=crop&q=80&w=800', category: 'Cream' },
    { id: 5, name: 'Purifying Mask', price: 38.00, image: 'https://images.unsplash.com/photo-1590156546946-ce55a12a6a1d?auto=format&fit=crop&q=80&w=800', category: 'Mask' },
    { id: 6, name: 'Balancing Toner', price: 28.00, image: 'https://images.unsplash.com/photo-1615397323281-22cba2b528be?auto=format&fit=crop&q=80&w=800', category: 'Toner' },
  ]);

  return (
    <div className="py-24 px-8 max-w-7xl mx-auto w-full min-h-screen">
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-light tracking-wide text-brand-900 mb-4">Shop All Products</h1>
        <p className="text-brand-600 max-w-2xl mx-auto font-light">Elevate your skincare routine with our complete collection of natural, effective formulations designed for all skin types.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Filters sidebar */}
        <div className="w-full md:w-64 flex-shrink-0">
          <h3 className="font-medium text-brand-900 mb-6 uppercase tracking-widest text-sm">Categories</h3>
          <ul className="space-y-4 text-brand-700 font-light">
            <li><button className="hover:text-brand-900 transition-colors">All Products</button></li>
            <li><button className="hover:text-brand-900 transition-colors">Cleansers</button></li>
            <li><button className="hover:text-brand-900 transition-colors">Serums</button></li>
            <li><button className="hover:text-brand-900 transition-colors">Moisturizers</button></li>
            <li><button className="hover:text-brand-900 transition-colors">Masks</button></li>
          </ul>
        </div>

        {/* Product Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] bg-brand-200 rounded-2xl overflow-hidden mb-6 relative">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-full bg-brand-900/90 backdrop-blur text-brand-50 py-3 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-brand-900 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
              <h3 className="text-lg font-medium text-brand-900">{product.name}</h3>
              <p className="text-brand-600 mt-1">${product.price.toFixed(2)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
