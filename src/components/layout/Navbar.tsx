"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Search,
  ShoppingBag,
  Sparkles,
  ChevronDown,
  Calendar,
  BookOpen,
  Mail,
  Network,
  LogIn,
} from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMoreDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setMoreDropdownOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#F7DFC7] shadow-2xs transition-all w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-2 sm:gap-4">
          {/* ========================================================= */}
          {/* 1. BRAND LOGO + SUBTITLE (Loch Blue + Bright Gold)        */}
          {/* ========================================================= */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-[#5B9891] rounded-xl p-1 flex-shrink-0"
          >
            {/* The BD Monogram Squircle in Loch Blue with Paper Heart BD */}
            <div className="w-11 h-11 rounded-2xl bg-[#5B9891] flex items-center justify-center text-[#F7DFC7] shadow-xs border border-[#F2B55D]/50 group-hover:bg-[#D98408] group-hover:text-white group-hover:scale-105 transition-all flex-shrink-0">
              <span className="font-serif text-2xl font-bold tracking-tighter">
                BD
              </span>
            </div>

            {/* Brand Title & Centered Subtitle */}
            <div className="flex flex-col justify-center">
              <span className="font-serif text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight text-[#111E28] group-hover:text-[#5B9891] transition-colors leading-none">
                BDSisters<span className="text-[#D98408] font-sans">.org</span>
              </span>

              {/* Tagline: Line 1 + Line 2 "SISTERS" centered */}
              <div className="mt-1 text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase text-center leading-tight">
                <span className="block text-center text-stone-500 whitespace-nowrap">
                  Commerce + Community For
                </span>
                <span className="block text-center text-[#5B9891] font-bold tracking-widest">
                  Sisters
                </span>
              </div>
            </div>
          </Link>

          {/* ========================================================= */}
          {/* 2. REFINED CAPSULE NAV (Paper Heart pill background)     */}
          {/* ========================================================= */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-0.5 bg-[#F7DFC7]/40 p-1.5 rounded-full border border-[#F7DFC7] shadow-2xs flex-shrink-0"
          >
            <Link
              href="/"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#111E28] hover:bg-white hover:text-[#5B9891] hover:shadow-2xs transition-all whitespace-nowrap"
            >
              Home
            </Link>

            <Link
              href="/who-we-are"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#111E28] hover:bg-white hover:text-[#5B9891] hover:shadow-2xs transition-all whitespace-nowrap"
            >
              Who We Are
            </Link>

            <a
              href="#shop"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#111E28] hover:bg-white hover:text-[#5B9891] hover:shadow-2xs transition-all whitespace-nowrap flex items-center gap-1.5"
            >
              <span>Shop</span>
              <span className="px-1.5 py-0.2 text-[8px] font-bold rounded-full bg-[#D98408] text-white uppercase shadow-2xs">
                Halal
              </span>
            </a>

            <a
              href="#forums"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#111E28] hover:bg-white hover:text-[#5B9891] hover:shadow-2xs transition-all whitespace-nowrap"
            >
              Forums
            </a>

            <a
              href="#profiles"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#111E28] hover:bg-white hover:text-[#5B9891] hover:shadow-2xs transition-all whitespace-nowrap"
            >
              Sister Profiles
            </a>

            {/* 'More' HOVER-ACTIVATED Dropdown Menu */}
            <div
              ref={moreRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1 focus:outline-none ${
                  moreDropdownOpen
                    ? "bg-white text-[#5B9891] shadow-2xs"
                    : "text-[#111E28] hover:bg-white hover:text-[#5B9891]"
                }`}
                aria-expanded={moreDropdownOpen}
                aria-haspopup="true"
              >
                <span>More</span>
                <ChevronDown
                  className={`w-3 h-3 text-[#111E28]/70 transition-transform duration-200 ${
                    moreDropdownOpen ? "rotate-180 text-[#5B9891]" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu Card */}
              {moreDropdownOpen && (
                <div className="absolute left-0 sm:right-0 sm:left-auto top-full pt-1.5 w-60 z-50">
                  <div className="rounded-2xl bg-white border border-[#F7DFC7] shadow-xl p-2 space-y-1 animate-in fade-in zoom-in-95">
                    <a
                      href="#events"
                      onClick={() => setMoreDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-medium text-stone-800 hover:bg-[#F7DFC7]/40 hover:text-[#5B9891] transition-colors"
                    >
                      <span className="p-1 rounded-lg bg-[#5B9891]/15 text-[#5B9891]">
                        <Calendar className="w-3.5 h-3.5" />
                      </span>
                      <div>
                        <span className="font-bold block text-[#111E28]">Events & Workshops</span>
                        <span className="text-[10px] text-stone-500">
                          Live sessions & calendar
                        </span>
                      </div>
                    </a>

                    <a
                      href="#resources"
                      onClick={() => setMoreDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-medium text-stone-800 hover:bg-[#F7DFC7]/40 hover:text-[#5B9891] transition-colors"
                    >
                      <span className="p-1 rounded-lg bg-[#F2B55D]/25 text-[#D98408]">
                        <BookOpen className="w-3.5 h-3.5" />
                      </span>
                      <div>
                        <span className="font-bold block text-[#111E28]">Resource Library</span>
                        <span className="text-[10px] text-stone-500">
                          Guides, kits & downloads
                        </span>
                      </div>
                    </a>

                    <a
                      href="#unified-wings"
                      onClick={() => setMoreDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-medium text-stone-800 hover:bg-[#F7DFC7]/40 hover:text-[#5B9891] transition-colors"
                    >
                      <span className="p-1 rounded-lg bg-[#5B9891]/20 text-[#5B9891]">
                        <Network className="w-3.5 h-3.5" />
                      </span>
                      <div>
                        <span className="font-bold block text-[#111E28]">Sister Wings</span>
                        <span className="text-[10px] text-stone-500">
                          CoP, TSPP, MIDJ & The Hut
                        </span>
                      </div>
                    </a>

                    <div className="border-t border-[#F7DFC7] my-1"></div>

                    <a
                      href="#contact"
                      onClick={() => setMoreDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-medium text-stone-800 hover:bg-[#F7DFC7]/40 hover:text-[#5B9891] transition-colors"
                    >
                      <span className="p-1 rounded-lg bg-[#F7DFC7] text-[#111E28]">
                        <Mail className="w-3.5 h-3.5" />
                      </span>
                      <div>
                        <span className="font-bold block text-[#111E28]">Get in Touch</span>
                        <span className="text-[10px] text-stone-500">
                          Direct inquiry & groups
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* ========================================================= */}
          {/* 3. RIGHT ACTIONS (Sign In + Join as Sister in Bright Gold)*/}
          {/* ========================================================= */}
          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            {/* Search Trigger or Compact Input */}
            {searchOpen ? (
              <div className="flex items-center gap-1.5 bg-white p-1 rounded-full border border-[#F7DFC7] shadow-xs animate-in fade-in">
                <Search className="w-3.5 h-3.5 text-stone-400 ml-2" />
                <input
                  type="search"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-32 text-xs py-1 px-1 bg-transparent focus:outline-none text-stone-800 placeholder-stone-400"
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="p-1 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100"
                  aria-label="Close search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-full text-[#111E28] hover:bg-[#F7DFC7]/50 hover:text-[#5B9891] transition-colors"
                aria-label="Search BDSisters"
                title="Search BDSisters"
              >
                <Search className="w-4 h-4" />
              </button>
            )}

            {/* Shop Cart Icon */}
            <a
              href="#shop"
              className="relative p-2 rounded-full text-[#111E28] hover:bg-[#F7DFC7]/50 hover:text-[#5B9891] transition-colors"
              aria-label="E-commerce Shop"
              title="Shop Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#D98408] ring-2 ring-white"></span>
            </a>

            {/* Sign In Button with Loch Blue Border */}
            <a
              href="#auth-signin"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[#5B9891] bg-white hover:bg-[#F7DFC7]/40 text-[#5B9891] text-xs font-bold transition-all shadow-2xs whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#5B9891]"
            >
              <LogIn className="w-3.5 h-3.5 text-[#5B9891]" />
              <span>Sign In</span>
            </a>

            {/* Primary Action Button: "Join as Sister" in Bright Gold */}
            <a
              href="#auth-register"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#D98408] hover:bg-[#B86E04] text-white text-xs font-bold shadow-sm transition-all whitespace-nowrap border border-[#F2B55D] focus:outline-none focus:ring-2 focus:ring-[#D98408]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F7DFC7]" />
              <span>Join as Sister</span>
            </a>
          </div>

          {/* ========================================================= */}
          {/* 4. MOBILE / TABLET MENU TRIGGER (< lg)                    */}
          {/* ========================================================= */}
          <div className="flex items-center gap-1 lg:hidden">
            <a
              href="#shop"
              className="p-2 text-[#111E28] hover:bg-[#F7DFC7]/50 rounded-full"
              aria-label="Shop"
            >
              <ShoppingBag className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#111E28] hover:bg-[#F7DFC7]/40 focus:outline-none focus:ring-2 focus:ring-[#5B9891]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 5. MOBILE DRAWER MENU                                     */}
      {/* ========================================================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#F7DFC7] px-5 pt-4 pb-8 shadow-2xl animate-in slide-in-from-top-3">
          <div className="mb-4">
            <div className="flex items-center bg-[#FAF8F5] border border-[#F7DFC7] rounded-xl px-3 py-2">
              <Search className="w-4 h-4 text-stone-400 mr-2" />
              <input
                type="search"
                placeholder="Search products, sisters, forums..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs bg-transparent focus:outline-none text-stone-800"
              />
            </div>
          </div>

          <div className="space-y-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-[#111E28] hover:bg-[#F7DFC7]/40 hover:text-[#5B9891]"
            >
              Home
            </Link>
            <Link
              href="/who-we-are"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-[#111E28] hover:bg-[#F7DFC7]/40 hover:text-[#5B9891]"
            >
              Who We Are
            </Link>
            <a
              href="#shop"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-[#111E28] hover:bg-[#F7DFC7]/40 hover:text-[#5B9891]"
            >
              <span>Shop Halal Goods</span>
              <span className="px-2 py-0.5 text-[9px] font-bold rounded-full bg-[#D98408] text-white">
                HALAL
              </span>
            </a>
            <a
              href="#forums"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-[#111E28] hover:bg-[#F7DFC7]/40 hover:text-[#5B9891]"
            >
              Discussion Forums
            </a>
            <a
              href="#profiles"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-[#111E28] hover:bg-[#F7DFC7]/40 hover:text-[#5B9891]"
            >
              Sister Profiles
            </a>
            <a
              href="#events"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-[#111E28] hover:bg-[#F7DFC7]/40 hover:text-[#5B9891]"
            >
              Events & Workshops
            </a>
            <a
              href="#resources"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-[#111E28] hover:bg-[#F7DFC7]/40 hover:text-[#5B9891]"
            >
              Resource Library
            </a>
            <a
              href="#unified-wings"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-[#111E28] hover:bg-[#F7DFC7]/40 hover:text-[#5B9891]"
            >
              Sister Wings (CoP, TSPP, MIDJ, The Hut)
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-[#111E28] hover:bg-[#F7DFC7]/40 hover:text-[#5B9891]"
            >
              Contact & Inquiries
            </a>
          </div>

          <div className="pt-4 border-t border-[#F7DFC7] mt-4 flex flex-col gap-2">
            <a
              href="#auth-signin"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-xl border border-[#5B9891] text-[#5B9891] text-xs font-bold text-center hover:bg-[#F7DFC7]/40"
            >
              Sign In
            </a>
            <a
              href="#auth-register"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-xl bg-[#D98408] text-white text-xs font-bold text-center shadow-md border border-[#F2B55D]"
            >
              Join as Sister (Referral Required)
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
