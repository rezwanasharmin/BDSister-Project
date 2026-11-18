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
  Home,
  Compass,
  Store,
  MessageSquare,
  UserCheck,
  Calendar,
  BookOpen,
  Mail,
  Network,
  ArrowRight,
  ShieldCheck,
  LogIn,
} from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Smooth hover handlers
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
      className="sticky top-0 z-40 bg-[#FAF7EF]/95 backdrop-blur-md border-b border-[#DFCFA5] shadow-xs transition-all w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-2 sm:gap-4">
          {/* ========================================================= */}
          {/* 1. BRAND LOGO + BALANCED SUBTITLE (Centered "SISTERS") */}
          {/* ========================================================= */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-[#3E7B27] rounded-xl p-1 flex-shrink-0"
          >
            {/* The BD Monogram Squircle with exact #123524 and #EFE3C2 */}
            <div className="w-11 h-11 rounded-2xl bg-[#123524] flex items-center justify-center text-[#EFE3C2] shadow-sm border border-[#85A947]/50 group-hover:bg-[#3E7B27] group-hover:scale-105 transition-all flex-shrink-0">
              <span className="font-serif text-2xl font-bold tracking-tighter">
                BD
              </span>
            </div>

            {/* Brand Title & Centered Subtitle */}
            <div className="flex flex-col justify-center">
              <span className="font-serif text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight text-[#123524] group-hover:text-[#3E7B27] transition-colors leading-none">
                BDSisters<span className="text-[#3E7B27] font-sans">.org</span>
              </span>

              {/* Tagline: Line 1 + Line 2 "SISTERS" centered */}
              <div className="mt-1 text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase text-center leading-tight">
                <span className="block text-center text-stone-500 whitespace-nowrap">
                  Commerce + Community For
                </span>
                <span className="block text-center text-[#123524] font-bold tracking-widest">
                  Sisters
                </span>
              </div>
            </div>
          </Link>

          {/* ========================================================= */}
          {/* 2. REFINED CAPSULE NAV (Hover-Activated 'More' Dropdown) */}
          {/* ========================================================= */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-0.5 bg-[#EFE3C2]/40 p-1.5 rounded-full border border-[#DFCFA5] shadow-2xs flex-shrink-0"
          >
            <a
              href="#hero"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#123524] hover:bg-white hover:shadow-2xs transition-all whitespace-nowrap"
            >
              Home
            </a>

            <a
              href="#who-we-are"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#123524] hover:bg-white hover:shadow-2xs transition-all whitespace-nowrap"
            >
              Who We Are
            </a>

            <a
              href="#shop"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#123524] hover:bg-white hover:shadow-2xs transition-all whitespace-nowrap flex items-center gap-1.5"
            >
              <span>Shop</span>
              <span className="px-1.5 py-0.2 text-[8px] font-bold rounded-full bg-[#85A947]/30 text-[#123524] uppercase border border-[#85A947]/50">
                Halal
              </span>
            </a>

            <a
              href="#forums"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#123524] hover:bg-white hover:shadow-2xs transition-all whitespace-nowrap"
            >
              Forums
            </a>

            <a
              href="#profiles"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#123524] hover:bg-white hover:shadow-2xs transition-all whitespace-nowrap"
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
                    ? "bg-white text-[#123524] shadow-2xs"
                    : "text-[#123524] hover:bg-white"
                }`}
                aria-expanded={moreDropdownOpen}
                aria-haspopup="true"
              >
                <span>More</span>
                <ChevronDown
                  className={`w-3 h-3 text-[#123524]/70 transition-transform duration-200 ${
                    moreDropdownOpen ? "rotate-180 text-[#3E7B27]" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu Card */}
              {moreDropdownOpen && (
                <div className="absolute left-0 sm:right-0 sm:left-auto top-full pt-1.5 w-60 z-50">
                  <div className="rounded-2xl bg-white border border-[#DFCFA5] shadow-xl p-2 space-y-1 animate-in fade-in zoom-in-95">
                    <a
                      href="#events"
                      onClick={() => setMoreDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-medium text-stone-800 hover:bg-[#EFE3C2]/40 hover:text-[#123524] transition-colors"
                    >
                      <span className="p-1 rounded-lg bg-[#3E7B27]/15 text-[#3E7B27]">
                        <Calendar className="w-3.5 h-3.5" />
                      </span>
                      <div>
                        <span className="font-bold block text-[#123524]">Events & Workshops</span>
                        <span className="text-[10px] text-stone-500">
                          Live sessions & calendar
                        </span>
                      </div>
                    </a>

                    <a
                      href="#resources"
                      onClick={() => setMoreDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-medium text-stone-800 hover:bg-[#EFE3C2]/40 hover:text-[#123524] transition-colors"
                    >
                      <span className="p-1 rounded-lg bg-[#EFE3C2] text-[#123524]">
                        <BookOpen className="w-3.5 h-3.5" />
                      </span>
                      <div>
                        <span className="font-bold block text-[#123524]">Resource Library</span>
                        <span className="text-[10px] text-stone-500">
                          Guides, kits & downloads
                        </span>
                      </div>
                    </a>

                    <a
                      href="#unified-wings"
                      onClick={() => setMoreDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-medium text-stone-800 hover:bg-[#EFE3C2]/40 hover:text-[#123524] transition-colors"
                    >
                      <span className="p-1 rounded-lg bg-[#85A947]/20 text-[#3E7B27]">
                        <Network className="w-3.5 h-3.5" />
                      </span>
                      <div>
                        <span className="font-bold block text-[#123524]">Sister Wings</span>
                        <span className="text-[10px] text-stone-500">
                          CoP, TSPP, MIDJ & The Hut
                        </span>
                      </div>
                    </a>

                    <div className="border-t border-[#DFCFA5]/40 my-1"></div>

                    <a
                      href="#contact"
                      onClick={() => setMoreDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-medium text-stone-800 hover:bg-[#EFE3C2]/40 hover:text-[#123524] transition-colors"
                    >
                      <span className="p-1 rounded-lg bg-stone-100 text-stone-700">
                        <Mail className="w-3.5 h-3.5" />
                      </span>
                      <div>
                        <span className="font-bold block text-[#123524]">Get in Touch</span>
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
          {/* 3. RIGHT ACTIONS (Sign In Button + Join as Sister Button) */}
          {/* ========================================================= */}
          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            {/* Search Trigger or Compact Input */}
            {searchOpen ? (
              <div className="flex items-center gap-1.5 bg-white p-1 rounded-full border border-[#DFCFA5] shadow-sm animate-in fade-in">
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
                className="p-2 rounded-full text-[#123524] hover:bg-[#EFE3C2]/50 transition-colors"
                aria-label="Search BDSisters"
                title="Search BDSisters"
              >
                <Search className="w-4 h-4" />
              </button>
            )}

            {/* Shop Cart Icon */}
            <a
              href="#shop"
              className="relative p-2 rounded-full text-[#123524] hover:bg-[#EFE3C2]/50 transition-colors"
              aria-label="E-commerce Shop"
              title="Shop Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#3E7B27] ring-2 ring-white"></span>
            </a>

            {/* Sign In Button Styled with Palette */}
            <a
              href="#auth-signin"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[#DFCFA5] bg-white hover:bg-[#EFE3C2]/50 text-[#123524] text-xs font-bold transition-all shadow-2xs whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#3E7B27]"
            >
              <LogIn className="w-3.5 h-3.5 text-[#3E7B27]" />
              <span>Sign In</span>
            </a>

            {/* Primary Action Button: "Join as Sister" with #123524 and #EFE3C2 sparkles */}
            <a
              href="#auth-register"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#123524] hover:bg-[#3E7B27] text-[#EFE3C2] hover:text-white text-xs font-bold shadow-sm transition-all whitespace-nowrap border border-[#85A947]/60 focus:outline-none focus:ring-2 focus:ring-[#3E7B27]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#EFE3C2]" />
              <span>Join as Sister</span>
            </a>
          </div>

          {/* ========================================================= */}
          {/* 4. MOBILE / TABLET MENU TRIGGER (< lg) */}
          {/* ========================================================= */}
          <div className="flex items-center gap-1 lg:hidden">
            <a
              href="#shop"
              className="p-2 text-[#123524] hover:bg-[#EFE3C2]/50 rounded-full"
              aria-label="Shop"
            >
              <ShoppingBag className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#123524] hover:bg-[#EFE3C2]/40 focus:outline-none focus:ring-2 focus:ring-[#3E7B27]"
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
      {/* 5. LUXURY MOBILE DRAWER MENU */}
      {/* ========================================================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#DFCFA5] px-5 pt-4 pb-8 shadow-2xl animate-in slide-in-from-top-3">
          {/* Search */}
          <div className="mb-4">
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#EFE3C2]/30 border border-[#DFCFA5] text-stone-700">
              <Search className="w-4 h-4 text-stone-400" />
              <input
                type="search"
                placeholder="Search products, sisters, forums..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs bg-transparent focus:outline-none text-stone-900"
              />
            </div>
          </div>

          {/* Links with Icons */}
          <div className="space-y-1 mb-5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 px-3 block mb-1">
              Main Menu
            </span>

            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-stone-800 hover:bg-[#EFE3C2]/40 hover:text-[#123524]"
            >
              <div className="flex items-center gap-2.5">
                <span className="p-1 rounded-md bg-[#EFE3C2] text-[#123524]">
                  <Home className="w-3.5 h-3.5" />
                </span>
                <span>Home</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-stone-300" />
            </a>

            <a
              href="#who-we-are"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-stone-800 hover:bg-[#EFE3C2]/40 hover:text-[#123524]"
            >
              <div className="flex items-center gap-2.5">
                <span className="p-1 rounded-md bg-[#EFE3C2] text-[#123524]">
                  <Compass className="w-3.5 h-3.5" />
                </span>
                <span>Who We Are</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-stone-300" />
            </a>

            <a
              href="#shop"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-stone-800 hover:bg-[#EFE3C2]/40 hover:text-[#123524]"
            >
              <div className="flex items-center gap-2.5">
                <span className="p-1 rounded-md bg-[#EFE3C2] text-[#123524]">
                  <Store className="w-3.5 h-3.5" />
                </span>
                <span>Shop with Us</span>
              </div>
              <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#85A947]/30 text-[#123524] border border-[#85A947]/50">
                Halal
              </span>
            </a>

            <a
              href="#forums"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-stone-800 hover:bg-[#EFE3C2]/40 hover:text-[#123524]"
            >
              <div className="flex items-center gap-2.5">
                <span className="p-1 rounded-md bg-[#EFE3C2] text-[#123524]">
                  <MessageSquare className="w-3.5 h-3.5" />
                </span>
                <span>Discussion Forums</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-stone-300" />
            </a>

            <a
              href="#profiles"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-stone-800 hover:bg-[#EFE3C2]/40 hover:text-[#123524]"
            >
              <div className="flex items-center gap-2.5">
                <span className="p-1 rounded-md bg-[#EFE3C2] text-[#123524]">
                  <UserCheck className="w-3.5 h-3.5" />
                </span>
                <span>Sister Profiles</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-stone-300" />
            </a>

            <a
              href="#events"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-stone-800 hover:bg-[#EFE3C2]/40 hover:text-[#123524]"
            >
              <div className="flex items-center gap-2.5">
                <span className="p-1 rounded-md bg-[#EFE3C2] text-[#123524]">
                  <Calendar className="w-3.5 h-3.5" />
                </span>
                <span>Events & Workshops</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-stone-300" />
            </a>

            <a
              href="#resources"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-stone-800 hover:bg-[#EFE3C2]/40 hover:text-[#123524]"
            >
              <div className="flex items-center gap-2.5">
                <span className="p-1 rounded-md bg-[#EFE3C2] text-[#123524]">
                  <BookOpen className="w-3.5 h-3.5" />
                </span>
                <span>Resource Library</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-stone-300" />
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-stone-800 hover:bg-[#EFE3C2]/40 hover:text-[#123524]"
            >
              <div className="flex items-center gap-2.5">
                <span className="p-1 rounded-md bg-[#EFE3C2] text-[#123524]">
                  <Mail className="w-3.5 h-3.5" />
                </span>
                <span>Get in Touch</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-stone-300" />
            </a>
          </div>

          {/* Referral Notice & Buttons */}
          <div className="pt-4 border-t border-[#DFCFA5]/40 space-y-3">
            <div className="flex items-center gap-2 p-3 rounded-xl bg-[#EFE3C2]/40 text-[#123524] text-xs border border-[#DFCFA5]">
              <ShieldCheck className="w-4 h-4 text-[#3E7B27] flex-shrink-0" />
              <span className="text-[11px] font-medium leading-tight">
                Registration requires an existing member referral
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <a
                href="#auth-signin"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 px-3 rounded-xl border border-[#DFCFA5] text-xs font-bold text-[#123524] hover:bg-[#EFE3C2]/40 flex items-center justify-center gap-1.5 bg-white"
              >
                <LogIn className="w-3.5 h-3.5 text-[#3E7B27]" />
                <span>Sign In</span>
              </a>
              <a
                href="#auth-register"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 px-3 rounded-xl bg-[#123524] text-xs font-bold text-white hover:bg-[#3E7B27] shadow-sm flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#EFE3C2]" />
                <span>Join as Sister</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </motion.header>
  );
}
