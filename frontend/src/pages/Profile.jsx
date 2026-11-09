import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import { 
  User, 
  Lock, 
  ScanFace, 
  SlidersHorizontal, 
  Link as LinkIcon,
  Pencil,
  ChevronDown,
  Check,
  LogOut
} from 'lucide-react';

export default function Profile() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('profile');
  const [savedToast, setSavedToast] = useState(false);

  // Load user data from localStorage
  const [formData, setFormData] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("nuveUser") || "{}");
      return {
        name: stored.name || "Priya Sharma",
        email: stored.email || "priya.sharma@example.com",
        phone: stored.phone || "+91 98765 43210",
        location: stored.location || "Bengaluru, India"
      };
    } catch {
      return {
        name: "Priya Sharma",
        email: "priya.sharma@example.com",
        phone: "+91 98765 43210",
        location: "Bengaluru, India"
      };
    }
  });

  const handleSave = () => {
    try {
      const current = JSON.parse(localStorage.getItem("nuveUser") || "{}");
      const updated = { ...current, ...formData };
      localStorage.setItem("nuveUser", JSON.stringify(updated));
      setSavedToast(true);
      setTimeout(() => setSavedToast(false), 2000);
    } catch (err) {
      console.error("Failed to update user profile", err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("nuveToken");
    localStorage.removeItem("nuveUser");
    navigate("/login");
  };

  const menuItems = [
    { id: 'profile', label: 'Profile Information', icon: <User className="w-5 h-5" /> },
    { id: 'password', label: 'Change Password', icon: <Lock className="w-5 h-5" /> },
    { id: 'skin', label: 'Skin Diagnostic Profile', icon: <ScanFace className="w-5 h-5" /> },
    { id: 'preferences', label: 'Delivery Preferences', icon: <SlidersHorizontal className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col font-sans">
      <Nav isSolid={true} activePage="Profile" />

      <main className="flex-grow max-w-[1240px] mx-auto w-full px-5 md:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          {/* Left Sidebar Menu */}
          <div className="w-full md:w-[280px] shrink-0 flex flex-col gap-2">
            <div className="bg-white rounded-3xl p-4 border border-gray-150 shadow-sm flex flex-col gap-1.5">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveMenu(item.id)}
                  className={`flex items-center gap-3.5 px-5 py-3.5 rounded-2xl transition-all text-[14px] font-bold cursor-pointer text-left ${
                    activeMenu === item.id 
                      ? 'bg-[#FAF5FF] text-[#7C3AED] shadow-sm' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <div className={`${activeMenu === item.id ? 'text-[#7C3AED]' : 'text-gray-400'}`}>
                    {item.icon}
                  </div>
                  {item.label}
                </button>
              ))}

              <div className="my-2 border-t border-gray-100" />

              <button
                onClick={handleLogout}
                className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl text-[14px] font-bold text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer text-left"
              >
                <LogOut className="w-5 h-5" />
                Sign Out
              </button>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="flex-grow w-full bg-white rounded-3xl border border-gray-150 p-6 md:p-10 shadow-sm">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Personal Account Info</h2>
                <p className="text-xs text-gray-500 mt-0.5">Manage your shipping address and contact details.</p>
              </div>

              {savedToast && (
                <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-xl animate-in fade-in">
                  <Check className="w-4 h-4 stroke-[3]" />
                  Saved Changes!
                </div>
              )}
            </div>
            
            <div className="flex flex-col md:flex-row gap-10">
              {/* Profile Avatar Section */}
              <div className="flex flex-col items-center md:items-start gap-4 shrink-0">
                <div className="relative w-32 h-32">
                  <div className="w-full h-full rounded-full bg-[#FAF5FF] border-4 border-[#F3E8FF] flex items-center justify-center text-3xl font-bold text-[#8B5CF6] shadow-sm">
                    {formData.name.charAt(0).toUpperCase()}
                  </div>
                  <button className="absolute bottom-1 right-1 w-8 h-8 bg-[#8B5CF6] text-white rounded-full flex items-center justify-center shadow-md hover:bg-[#7C3AED] transition-colors">
                    <Pencil className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-xs text-gray-400">Account verified</span>
              </div>

              {/* Form Section */}
              <div className="flex-grow max-w-lg">
                <div className="flex flex-col gap-5">
                  
                  {/* Full Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-gray-700">Full Name</label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 text-sm font-medium focus:outline-none focus:border-[#8B5CF6]"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-gray-700">Email Address</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 text-sm font-medium focus:outline-none focus:border-[#8B5CF6]"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-gray-700">Mobile Phone</label>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 text-sm font-medium focus:outline-none focus:border-[#8B5CF6]"
                    />
                  </div>

                  {/* Location */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-gray-700">Default Region</label>
                    <input 
                      type="text" 
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 text-sm font-medium focus:outline-none focus:border-[#8B5CF6]"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 mt-4">
                    <button 
                      onClick={handleSave}
                      className="px-6 py-3 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-bold text-xs rounded-xl transition-colors shadow-sm cursor-pointer"
                    >
                      Save Profile
                    </button>
                    <button 
                      onClick={() => navigate("/")}
                      className="px-6 py-3 bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 font-bold text-xs rounded-xl transition-colors cursor-pointer"
                    >
                      Return Home
                    </button>
                  </div>

                </div>
              </div>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
}
