import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Nav from '../components/Nav';
import { 
  Check, 
  Truck, 
  Package, 
  ExternalLink, 
  ShieldCheck, 
  RefreshCcw, 
  Headphones,
  MapPin,
  Clock
} from 'lucide-react';

export default function OrderTracking() {
  const [searchParams] = useSearchParams();
  const queryOrderId = searchParams.get("id");

  const [order, setOrder] = useState(() => {
    try {
      const storedLast = JSON.parse(localStorage.getItem("nuveLastOrder") || "null");
      if (storedLast) {
        if (!queryOrderId || storedLast.id === queryOrderId) return storedLast;
      }
      const allOrders = JSON.parse(localStorage.getItem("nuveOrders") || "[]");
      const matched = allOrders.find(o => o.id === queryOrderId);
      if (matched) return matched;
      if (allOrders.length > 0) return allOrders[0];
    } catch (e) {
      console.warn("Could not load order for tracking", e);
    }
    return {
      id: queryOrderId || "NUV001585",
      date: new Date().toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' }),
      courier: "Delhivery Express",
      trackingId: "1234567890013",
      items: [
        {
          name: "Vitamin C Serum",
          price: 1299,
          qty: 1,
          image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=150&auto=format&fit=crop"
        }
      ],
      address: {
        name: "Priya Sharma",
        street: "123, 4th Main, Koramangala",
        cityState: "Bengaluru, Karnataka - 560034",
        country: "India",
        phone: "+91 98765 43210"
      }
    };
  });

  const statuses = [
    {
      title: "Order Placed",
      date: `${order.date || 'Today'} 10:30 AM`,
      description: "We have received your order request.",
      icon: <Check className="w-5 h-5 text-emerald-600" />,
      completed: true,
    },
    {
      title: "Order Confirmed & Processed",
      date: `${order.date || 'Today'} 11:15 AM`,
      description: "Items packed and quality checked.",
      icon: <Check className="w-5 h-5 text-emerald-600" />,
      completed: true,
    },
    {
      title: "Shipped with Courier",
      date: "In Transit",
      description: `Dispatched via ${order.courier || "Delhivery"}`,
      icon: <Truck className="w-5 h-5 text-[#8B5CF6]" />,
      completed: true,
    },
    {
      title: "Out for Delivery",
      date: "Pending Dispatch",
      description: "Assigned to local delivery partner",
      icon: <Package className="w-5 h-5 text-gray-400" />,
      completed: false,
    },
    {
      title: "Delivered",
      date: "Expected in 3-4 days",
      description: "Package handed to recipient",
      icon: <Check className="w-5 h-5 text-gray-400" />,
      completed: false,
      isLast: true,
    }
  ];

  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-gray-700" />,
      title: "100% Genuine",
      desc: "Original & fresh batches"
    },
    {
      icon: <Truck className="w-6 h-6 text-gray-700" />,
      title: "Free Shipping",
      desc: "Across all pin codes"
    },
    {
      icon: <RefreshCcw className="w-6 h-6 text-gray-700" />,
      title: "Easy Returns",
      desc: "7-day return policy"
    },
    {
      icon: <Headphones className="w-6 h-6 text-gray-700" />,
      title: "Live Support",
      desc: "24/7 skincare assistance"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Nav isSolid={true} />

      <main className="flex-grow max-w-[1240px] mx-auto w-full px-5 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-8 flex items-center gap-2">
          <Link to="/" className="text-gray-500 hover:text-gray-800 no-underline">Home</Link>
          <span>/</span>
          <Link to="/products" className="text-gray-500 hover:text-gray-800 no-underline">Orders</Link>
          <span>/</span>
          <span className="text-[#8B5CF6] font-semibold">Order #{order.id}</span>
        </div>

        {/* Main Content Box */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-150 overflow-hidden flex flex-col lg:flex-row mb-12">
          
          {/* Left Column: Order Status */}
          <div className="flex-1 p-8 md:p-10 lg:border-r border-gray-100 relative">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-gray-900">Delivery Status</h2>
              <span className="text-xs font-bold px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full">
                Active Order
              </span>
            </div>
            
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-[19px] top-[24px] bottom-[32px] w-[2px] bg-[#E9D5FF] z-0"></div>

              <div className="flex flex-col gap-9 relative z-10">
                {statuses.map((status, index) => (
                  <div key={index} className="flex items-start gap-5">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border-4 border-white ${
                      status.completed ? 'bg-emerald-50 text-emerald-600 shadow-sm' : 'bg-gray-100 text-gray-400'
                    }`}>
                      {status.icon}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between w-full pt-0.5 gap-2">
                      <div>
                        <h3 className={`text-[15px] font-bold ${status.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                          {status.title}
                        </h3>
                        {status.description && (
                          <p className="text-xs text-gray-500 mt-0.5">{status.description}</p>
                        )}
                      </div>
                      <span className="text-xs font-semibold text-gray-400 shrink-0">{status.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Details & Address */}
          <div className="w-full lg:w-[420px] p-8 md:p-10 bg-[#FAFAFA] flex flex-col justify-between">
            
            {/* Tracking Details */}
            <div className="mb-8">
              <h2 className="text-lg font-bold text-gray-900 mb-5">Courier Details</h2>
              <div className="flex flex-col gap-3.5 mb-6 text-sm bg-white p-5 rounded-2xl border border-gray-150">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-xs">Courier Partner</span>
                  <span className="text-gray-900 font-bold text-xs">{order.courier || "Delhivery"}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-xs">AWB Tracking ID</span>
                  <span className="text-[#8B5CF6] font-mono font-bold text-xs">{order.trackingId || "1234567890013"}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-xs">Shipping Date</span>
                  <span className="text-gray-900 font-medium text-xs">{order.date || "Today"}</span>
                </div>
              </div>

              {/* Items Purchased in this order */}
              <h3 className="text-sm font-bold text-gray-900 mb-3">Package Contents</h3>
              <div className="flex flex-col gap-3 mb-6">
                {(order.items || []).map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-150">
                    <img src={item.image} alt={item.name} className="w-10 h-10 object-contain mix-blend-multiply rounded-lg" />
                    <div className="flex flex-col flex-1 min-w-0">
                      <span className="text-xs font-bold text-gray-900 truncate">{item.name}</span>
                      <span className="text-[11px] text-gray-500">Qty: {item.qty || 1} • ₹{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white p-5 rounded-2xl border border-gray-150">
              <h2 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#8B5CF6]" />
                Delivery Address
              </h2>
              <div className="text-xs text-gray-600 leading-relaxed flex flex-col gap-0.5">
                <p className="font-bold text-gray-900 text-sm mb-1">{order.address?.name || "Priya Sharma"}</p>
                <p>{order.address?.street || "123, 4th Main, Koramangala"}</p>
                <p>{order.address?.cityState || "Bengaluru, Karnataka - 560034"}</p>
                <p className="mt-1 font-semibold text-gray-800">{order.address?.phone || "+91 98765 43210"}</p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-150 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#FAF5FF] rounded-2xl flex items-center justify-center text-[#8B5CF6] mb-3">
                {feature.icon}
              </div>
              <h3 className="text-gray-900 font-bold text-sm mb-1">{feature.title}</h3>
              <p className="text-gray-500 text-xs">{feature.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
