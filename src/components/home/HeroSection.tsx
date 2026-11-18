"use client";

import React from "react";
import {
  ShieldCheck,
  ShoppingBag,
  Users,
  Sparkles,
  ArrowRight,
  Lock,
  FileCheck,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { SectionHoverInfo } from "@/components/common/SectionHoverInfo";
import { SECTION_EXPLAINERS } from "@/data/mockData";
import { ScrollReveal } from "@/components/common/MotionComponents";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-gradient-to-b from-[#FAF7EF] via-[#FAF7EF] to-[#EFE3C2]/30 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-[#DFCFA5]"
    >
      {/* Decorative Background Glows with gentle breathing animation */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.12, 0.2, 0.12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#85A947]/20 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.5, 0.75, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#EFE3C2]/80 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Hover Explainer Button */}
        <ScrollReveal direction="down" duration={0.5}>
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE3C2] text-[#123524] text-xs font-bold tracking-wide border border-[#DFCFA5] shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#3E7B27]" />
              <span>Unified Database of Muhsina Organization</span>
            </div>

            <SectionHoverInfo
              explainer={SECTION_EXPLAINERS.hero}
              sectionName="Hero Section"
            />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, Subhead, Highlights, CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#123524] bg-[#EFE3C2] px-3.5 py-1.5 rounded-full border border-[#DFCFA5] inline-block shadow-2xs">
                  A Collaborative Sisterhood Ecosystem
                </span>
                <h1
                  id="hero-title"
                  className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#123524] leading-[1.18] tracking-tight"
                >
                  Commerce + Community <br />
                  <span className="text-[#3E7B27]">
                    Exclusively for Sisters
                  </span>
                </h1>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-2xl font-normal">
                A dignified, member-based online haven connecting verified personal profiles,
                women-owned halal businesses, safe discussion forums, and skill exchange—anchored
                under the unified umbrella of <strong className="text-[#123524] font-bold">Muhsina Organization</strong>.
              </p>
            </ScrollReveal>

            {/* Core Verification Badges (Referral + NID Vetting) */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="p-5 rounded-2xl bg-white border-2 border-[#DFCFA5] shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#123524] uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-[#3E7B27]" />
                  <span>Our Sacred Trust & Vetting Guarantee</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-stone-700">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3E7B27] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#123524]">Referral Mandatory:</strong> Existing member must know you in person.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3E7B27] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#123524]">NID/Passport Verified:</strong> Reviewed privately by female admins only.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3E7B27] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#123524]">Free Personal Profile:</strong> Create & publish your profile for free.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3E7B27] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#123524]">Field-Level Privacy:</strong> Phone & WhatsApp hidden by default.
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Call to Actions */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#auth-register"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#123524] hover:bg-[#3E7B27] text-[#EFE3C2] hover:text-white font-bold text-sm shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#3E7B27] border border-[#85A947]/50"
                >
                  <span>Join as a Sister (Referral Required)</span>
                  <ArrowRight className="w-4 h-4 text-[#85A947]" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#shop"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white text-[#123524] font-bold text-sm border border-[#DFCFA5] hover:bg-[#EFE3C2] shadow-2xs transition-all focus:outline-none focus:ring-2 focus:ring-[#3E7B27]"
                >
                  <ShoppingBag className="w-4 h-4 text-[#3E7B27]" />
                  <span>Shop Halal Goods & Services</span>
                </motion.a>

                <a
                  href="#forums"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-full text-[#123524] hover:text-[#3E7B27] font-bold text-xs transition-colors"
                >
                  <Users className="w-4 h-4 text-[#3E7B27]" />
                  <span>Preview Forums</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left" delay={0.25} distance={40}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="relative mx-auto max-w-md rounded-2xl bg-white p-6 shadow-xl border-2 border-[#DFCFA5]"
              >
                {/* Top Card Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-[#DFCFA5]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#3E7B27] animate-pulse" />
                    <span className="text-xs font-bold text-[#123524]">
                      Unified Profile Preview
                    </span>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#EFE3C2] text-[#123524] border border-[#DFCFA5]">
                    Status: Approved & Verified
                  </span>
                </div>

                {/* Sample Sister Profile Card */}
                <div className="mt-5 space-y-4">
                  <div className="flex items-start gap-4">
                    {/* Square Profile Picture */}
                    <div className="w-20 h-20 rounded-2xl bg-[#123524] text-[#EFE3C2] flex items-center justify-center flex-shrink-0 shadow-inner font-serif text-2xl font-bold border-2 border-[#85A947]">
                      S.A.
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-[#123524] leading-tight">
                        Dr. Samira Ahmed
                      </h3>
                      <p className="text-xs text-stone-600 font-medium">
                        Physician • Natural Wellness Artisan • CoP Member
                      </p>
                      <p className="text-xs text-[#3E7B27] font-bold">
                        📍 Dhaka, Bangladesh (District Level Only)
                      </p>
                    </div>
                  </div>

                  {/* Privacy Indicators */}
                  <div className="bg-[#FAF7EF] p-3 rounded-xl border border-[#DFCFA5] space-y-2 text-xs">
                    <div className="flex items-center justify-between text-stone-700">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Lock className="w-3.5 h-3.5 text-stone-400" />
                        <span>Phone & WhatsApp</span>
                      </span>
                      <span className="text-[11px] font-bold text-stone-700 bg-white px-2.5 py-0.5 rounded border border-[#DFCFA5]">
                        Private (Protected)
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-stone-700">
                      <span className="flex items-center gap-1.5 font-medium">
                        <FileCheck className="w-3.5 h-3.5 text-[#3E7B27]" />
                        <span>ID Verification (NID)</span>
                      </span>
                      <span className="text-[11px] font-bold text-[#123524] bg-[#EFE3C2] px-2.5 py-0.5 rounded border border-[#DFCFA5]">
                        Admin Verified
                      </span>
                    </div>
                  </div>

                  {/* Connected Brands */}
                  <div className="pt-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#123524] block mb-1.5">
                      Registered Sister Brands (2)
                    </span>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-[#FAF7EF] border border-[#DFCFA5] text-xs font-bold text-[#123524]">
                        🌿 PureTadabbur Botanicals
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-[#FAF7EF] border border-[#DFCFA5] text-xs font-bold text-[#123524]">
                        📖 Fitrah Wellness Consulting
                      </span>
                    </div>
                  </div>

                  {/* Sample Vocational Skill Bar */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex justify-between text-xs font-semibold text-[#123524]">
                      <span>Herbal Formulation & Naturopathy</span>
                      <span className="text-[#3E7B27] font-bold">Level 5 / Master</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#FAF7EF] border border-[#DFCFA5] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "90%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        className="h-full bg-[#3E7B27] rounded-full"
                      />
                    </div>
                  </div>

                  {/* Unified Wings Cross-link pill */}
                  <div className="pt-2 text-center">
                    <span className="text-[11px] text-[#3E7B27] font-medium italic">
                      🔗 Unified with CoP & The Hut Network Profiles
                    </span>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
