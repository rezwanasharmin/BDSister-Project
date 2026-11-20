"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  LogIn,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  Eye,
  EyeOff,
  Sparkles,
  Users,
  ChevronRight,
  KeyRound,
  Mail,
  AlertCircle,
  HelpCircle,
  Layers,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SignInPage() {
  const [emailOrId, setEmailOrId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [forgotModalOpen, setForgotModalOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotSuccess, setForgotSuccess] = useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailOrId.trim() || !password.trim()) return;

    setIsLoading(true);
    setButtonClicked(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setButtonClicked(false);
    }, 600);
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!forgotEmail.trim()) return;
    setForgotSuccess(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#111E28]">
      {/* ========================================================= */}
      {/* 1. HERO & BREADCRUMB SECTION                               */}
      {/* ========================================================= */}
      <section className="bg-white border-b border-[#F7DFC7] pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 mb-6">
            <Link href="/" className="hover:text-[#5B9891] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="font-semibold text-[#111E28]">Sister Sign In</span>
          </nav>

          {/* Heading */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7DFC7] text-[#111E28] text-xs font-bold tracking-wide uppercase mb-3 border border-[#F2B55D]/40">
                <LogIn className="w-3.5 h-3.5 text-[#5B9891]" />
                <span>Muhsina Unified Database • Secure Single Sign-On</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111E28] tracking-tight">
                Sister Account Sign In
              </h1>
              <p className="mt-3 text-base sm:text-lg text-stone-700 leading-relaxed">
                Welcome back, dear sister. Sign in to access your verified profile, participate in moderated
                discussion halaqahs, manage shop inquiries, and access all five <strong>Muhsina Organization wings</strong>.
              </p>
            </div>

            {/* Quick Stat Badge */}
            <div className="flex items-center gap-3 bg-[#FAF8F5] p-3 sm:p-4 rounded-2xl border border-[#F7DFC7] shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-[#5B9891] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                SSO
              </div>
              <div>
                <p className="text-xs font-bold text-[#111E28]">Unified Login</p>
                <p className="text-xs text-stone-600">Access CoP, TSPP & The Hut</p>
              </div>
            </div>
          </div>

          {/* Security Callout */}
          <div className="mt-8 p-4 rounded-2xl bg-[#F7DFC7] border border-[#F7DFC7] flex items-start gap-3 text-xs text-[#111E28] shadow-xs">
            <ShieldCheck className="w-5 h-5 text-[#5B9891] flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold uppercase tracking-wide text-[#111E28]">
                End-to-End Encrypted Sister Authentication:
              </span>
              <p className="text-stone-700 leading-relaxed">
                Your credentials authenticate across our unified database with military-grade 256-bit SSL encryption.
                BDSisters sessions are strictly monitored to uphold modesty and prevent unauthorized male or automated bot access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. SIGN IN FORM & 50/50 BALANCED GRID                      */}
      {/* ========================================================= */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Left 50% Column: Sign In Form Card */}
            <div className="h-full bg-white rounded-3xl border border-[#F7DFC7] p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="mb-6">
                  <span className="text-[10px] font-bold text-[#5B9891] uppercase tracking-wider block">
                    Verified Sister Access
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#111E28]">
                    Enter Your Credentials
                  </h2>
                  <p className="text-xs text-stone-600 mt-1">
                    Use your registered email or Member ID (e.g. BDS-XXXX).
                  </p>
                </div>

                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4"
                  >
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h3 className="font-serif text-lg font-bold text-emerald-900">
                      Welcome Back, Sister!
                    </h3>
                    <p className="text-xs text-emerald-700 leading-relaxed max-w-sm mx-auto">
                      Your session is authenticated. You are now securely signed into the BDSisters Unified Ecosystem.
                    </p>
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <Link
                        href="/profiles"
                        className="px-5 py-2.5 rounded-full bg-[#5B9891] text-white font-bold text-xs hover:bg-[#5B9891]/90 shadow-2xs transition-all"
                      >
                        Go to Sister Profiles
                      </Link>
                      <Link
                        href="/shop"
                        className="px-5 py-2.5 rounded-full bg-[#FAF8F5] hover:bg-[#F7DFC7] border border-[#F7DFC7] text-[#111E28] font-bold text-xs transition-colors"
                      >
                        Explore Marketplace
                      </Link>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSignIn} className="space-y-4 text-xs">
                    <div>
                      <label className="block font-bold text-[#111E28] mb-1">
                        Registered Email Address or Member ID *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={emailOrId}
                          onChange={(e) => setEmailOrId(e.target.value)}
                          placeholder="e.g. sister@example.com or BDS-2026-7842"
                          className="w-full p-3 pl-10 rounded-xl bg-[#FAF8F5] border border-[#F7DFC7] focus:outline-none focus:ring-2 focus:ring-[#5B9891]"
                        />
                        <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="font-bold text-[#111E28]">
                          Password *
                        </label>
                        <button
                          type="button"
                          onClick={() => setForgotModalOpen(true)}
                          className="text-[11px] font-semibold text-[#D98408] hover:underline"
                        >
                          Forgot Password?
                        </button>
                      </div>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter your password..."
                          className="w-full p-3 pl-10 pr-10 rounded-xl bg-[#FAF8F5] border border-[#F7DFC7] focus:outline-none focus:ring-2 focus:ring-[#5B9891]"
                        />
                        <KeyRound className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <label className="flex items-center gap-2 cursor-pointer text-stone-700">
                        <input
                          type="checkbox"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                          className="rounded text-[#5B9891] focus:ring-[#5B9891]"
                        />
                        <span className="text-[11px]">Remember this trusted device for 30 days</span>
                      </label>
                    </div>

                    <div className="pt-4 border-t border-[#F7DFC7]/60 flex items-center justify-between">
                      <span className="text-[11px] text-stone-500 font-medium flex items-center gap-1">
                        <Lock className="w-3.5 h-3.5 text-[#5B9891]" />
                        256-bit SSL Protected
                      </span>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold bg-[#D98408] hover:bg-[#D98408]/90 text-white transition-all shadow-sm group/btn"
                      >
                        <span>{isLoading ? "Authenticating..." : "Sign In to Account"}</span>
                        <span
                          className="inline-flex items-center justify-center transition-transform duration-300 ease-out"
                          style={{
                            transform: buttonClicked ? "rotate(0deg)" : "rotate(-45deg)",
                          }}
                        >
                          <ArrowRight className="w-3.5 h-3.5 text-white" />
                        </span>
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Bottom Card Divider: Not Registered Yet? */}
              <div className="mt-6 pt-4 border-t border-[#F7DFC7]/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <span className="text-stone-600">
                  Not a verified BDSisters member yet?
                </span>
                <Link
                  href="/auth/register"
                  className="font-bold text-[#5B9891] hover:text-[#477C76] flex items-center gap-1"
                >
                  <span>Apply for Sister Registration</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right 50% Column: Equal Width & Height Ecosystem Support Cards */}
            <div className="h-full flex flex-col justify-between gap-4">
              {/* Card 1: One Login Across 5 Wings */}
              <div className="p-6 rounded-3xl bg-white border border-[#F7DFC7] shadow-2xs flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D98408] mb-2">
                    <Layers className="w-4 h-4 text-[#5B9891]" />
                    <span>Single Sign-On (SSO)</span>
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#111E28]">
                    One Login Across All Five Wings
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mt-2">
                    Your BDSisters account seamlessly authenticates you across Circle of Parents (CoP), The Sacred
                    Path Publications (TSPP), MIDJ Journalism, The Hut Halal Network, and IMBD Mentorship.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F7DFC7]/60 space-y-1.5 text-xs text-stone-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5B9891]" />
                    <span>Instant access to private discussion halaqahs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5B9891]" />
                    <span>Manage your vendor orders and ZiniPay settlements</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5B9891]" />
                    <span>Downloadable masterclass recordings & PDF books</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Sovereign Field-Level Privacy */}
              <div className="p-6 rounded-3xl bg-white border border-[#F7DFC7] shadow-2xs flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5B9891] mb-2">
                    <Lock className="w-4 h-4" />
                    <span>Haya & Field-Level Privacy</span>
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#111E28]">
                    Your Privacy Remains Sovereign
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mt-2">
                    Phone numbers, WhatsApp contacts, and NID documents are never shown on your public profile.
                    You retain 100% control over which sisters can view your contact information.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F7DFC7]/60 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#5B9891]">Field Privacy: Always Active</span>
                  <Link href="/who-we-are" className="font-bold text-[#D98408] hover:underline">
                    Read Security Policy →
                  </Link>
                </div>
              </div>

              {/* Card 3: Need Verification Assistance? */}
              <div className="p-6 rounded-3xl bg-[#5B9891] text-white shadow-md border border-[#477C76] flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold">
                    Need Help With Your Account?
                  </h3>
                  <p className="text-xs text-[#F7DFC7] leading-relaxed mt-1">
                    If your account verification is pending or you need to update your referee information, our female administration is here to help.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/20">
                  <Link
                    href="/contact"
                    className="w-full py-2.5 rounded-full bg-[#D98408] hover:bg-[#D98408]/90 text-white font-bold text-xs transition-all shadow-2xs flex items-center justify-center gap-2"
                  >
                    <span>Contact Female Support Desk</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. FORGOT PASSWORD MODAL                                   */}
      {/* ========================================================= */}
      <AnimatePresence>
        {forgotModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              className="bg-white rounded-3xl max-w-md w-full border border-[#F7DFC7] shadow-xl overflow-hidden flex flex-col"
            >
              <div className="p-5 border-b border-[#F7DFC7] bg-[#FAF8F5] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <KeyRound className="w-4 h-4 text-[#D98408]" />
                  <h3 className="font-serif text-base font-bold text-[#111E28]">
                    Reset Sister Account Password
                  </h3>
                </div>
                <button
                  onClick={() => {
                    setForgotModalOpen(false);
                    setForgotSuccess(false);
                  }}
                  className="p-1 rounded-full hover:bg-stone-200 text-stone-600 transition-colors"
                >
                  <ArrowRight className="w-4 h-4 rotate-45" />
                </button>
              </div>

              <div className="p-6 space-y-4 text-xs">
                {forgotSuccess ? (
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                    <h4 className="font-bold text-sm">Reset Link Dispatched!</h4>
                    <p className="text-xs">
                      If an account exists for <strong>{forgotEmail}</strong>, password reset instructions have been sent to your inbox.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleForgotSubmit} className="space-y-4">
                    <p className="text-stone-600 leading-relaxed">
                      Enter your registered email address and we will dispatch a secure one-time password reset link.
                    </p>

                    <div>
                      <label className="block font-bold text-[#111E28] mb-1">
                        Registered Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={forgotEmail}
                        onChange={(e) => setForgotEmail(e.target.value)}
                        placeholder="sister@example.com"
                        className="w-full p-2.5 rounded-xl bg-[#FAF8F5] border border-[#F7DFC7] focus:outline-none focus:ring-2 focus:ring-[#5B9891]"
                      />
                    </div>

                    <div className="pt-2 flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => setForgotModalOpen(false)}
                        className="px-4 py-2 rounded-full border border-stone-300 text-xs font-bold text-stone-700 hover:bg-stone-100 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2 rounded-full bg-[#D98408] text-white font-bold text-xs shadow-2xs hover:bg-[#D98408]/90 transition-all"
                      >
                        Send Reset Link
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
