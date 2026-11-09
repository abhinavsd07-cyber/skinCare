import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";

const EyeOpen = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
  </svg>
);
const EyeClosed = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

export default function ResetPassword() {
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <h1 className="text-[26px] font-bold text-gray-900 mb-1 leading-tight">Reset Password</h1>
      <p className="text-[13px] text-gray-500 mb-1">Create new password</p>
      <p className="text-[12px] text-gray-400 mb-7 leading-relaxed">
        Enter your new password below.
      </p>

      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => { e.preventDefault(); navigate("/login"); }}
      >
        {/* New password */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[12px] font-semibold text-gray-700">New password</label>
          <div className="relative">
            <input
              type={showNew ? "text" : "password"}
              placeholder="Enter new password"
              className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-[13px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#7C3AED] transition-colors bg-white pr-10"
            />
            <button
              type="button"
              onClick={() => setShowNew(!showNew)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showNew ? <EyeClosed /> : <EyeOpen />}
            </button>
          </div>
        </div>

        {/* Confirm password */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[12px] font-semibold text-gray-700">Confirm password</label>
          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm new password"
              className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-[13px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#7C3AED] transition-colors bg-white pr-10"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showConfirm ? <EyeClosed /> : <EyeOpen />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-[14px] py-3 rounded-lg transition-colors shadow-sm mt-1"
        >
          Reset Password
        </button>
      </form>

      <p className="text-center text-[12px] text-gray-500 mt-6">
        <Link to="/login" className="font-medium text-gray-600 hover:text-gray-900 no-underline">
          Back to Login
        </Link>
      </p>
    </AuthLayout>
  );
}
