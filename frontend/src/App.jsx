import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { CartWishlistProvider } from "./context/CartWishlistContext";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Confirmation from "./pages/Confirmation";
import Analysis from "./pages/Analysis";
import Concerns from "./pages/Concerns";
import Ingredients from "./pages/Ingredients";
import Results from "./pages/Results";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyEmail from "./pages/VerifyEmail";
import ResetPassword from "./pages/ResetPassword";
import OrderTracking from "./pages/OrderTracking";
import Wishlist from "./pages/Wishlist";
import Routine from "./pages/Routine";
import Profile from "./pages/Profile";

function App() {
  return (
    <CartWishlistProvider>
      <Router>
      <div className="min-h-screen flex flex-col font-sans text-brand-900 selection:bg-brand-200 selection:text-brand-900 overflow-x-hidden">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/concerns" element={<Concerns />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/results" element={<Results />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/track-order" element={<OrderTracking />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/routine" element={<Routine />} />
            <Route path="/profile" element={<Profile />} />
            {/* Auth routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            {/* Catch-all route redirects to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
    </CartWishlistProvider>
  );
}

export default App;

