import { useNavigate, Link } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";

export default function ForgotPassword() {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <h1 className="text-[26px] font-bold text-gray-900 mb-1 leading-tight">Forgot Password</h1>
      <p className="text-[13px] text-gray-500 mb-1">Reset your password</p>
      <p className="text-[12px] text-gray-400 mb-7 leading-relaxed">
        Enter your email and we'll send you a link to reset password.
      </p>

      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => { e.preventDefault(); navigate("/verify-email"); }}
      >
        <div className="flex flex-col gap-1.5">
          <label className="text-[12px] font-semibold text-gray-700">Email address</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-[13px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#7C3AED] transition-colors bg-white"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-[14px] py-3 rounded-lg transition-colors shadow-sm mt-1"
        >
          Send Reset Link
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
