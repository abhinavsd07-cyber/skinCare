import React, { createContext, useContext, useState, useEffect } from "react";

const CartWishlistContext = createContext();

// Helper to load from localStorage safely
const loadFromStorage = (key, fallback) => {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
};

export function CartWishlistProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => loadFromStorage("nuveCart", []));
  const [wishlistItems, setWishlistItems] = useState(() => loadFromStorage("nuveWishlist", []));

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("nuveCart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Persist wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("nuveWishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  // ─── CART ─────────────────────────────────────────────────────────────
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateCartQty = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + delta) }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("nuveCart");
  };

  // ─── WISHLIST ──────────────────────────────────────────────────────────
  const addToWishlist = (product) => {
    setWishlistItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev;
      return [...prev, product];
    });
  };

  const removeFromWishlist = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  const isInWishlist = (id) => wishlistItems.some((item) => item.id === id);

  return (
    <CartWishlistContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateCartQty,
        clearCart,
        cartCount: cartItems.reduce((sum, i) => sum + i.qty, 0),

        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        wishlistCount: wishlistItems.length,
      }}
    >
      {children}
    </CartWishlistContext.Provider>
  );
}

export function useCartWishlist() {
  return useContext(CartWishlistContext);
}
