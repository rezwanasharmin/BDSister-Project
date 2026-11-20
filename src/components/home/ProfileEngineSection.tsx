"use client";

import React, { useState } from "react";
import {
  UserCheck,
  Lock,
  Unlock,
  Download,
  ShieldCheck,
  CheckCircle2,
  Briefcase,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SECTION_EXPLAINERS } from "@/data/mockData";
import { SectionHoverInfo } from "@/components/common/SectionHoverInfo";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/common/MotionComponents";

export function ProfileEngineSection() {
  const [showPhone, setShowPhone] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "skills" | "frameworks">(
    "overview"
  );

  return (
    <section
      id="profiles"
      aria-labelledby="profiles-heading"
      className="py-16 bg-white border-b border-[#F7DFC7] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#F7DFC7]/60">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1.5 rounded-lg bg-[#F7DFC7] text-[#111E28] border border-[#F7DFC7]">
                  <UserCheck className="w-4 h-4 text-[#5B9891]" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#111E28]">
                  Identity & Self Discovery
                </span>
              </div>
              <h2
                id="profiles-heading"
                className="font-serif text-2xl sm:text-3xl font-bold text-[#111E28] tracking-tight"
              >
                Discover Yourself: The Sister Profile Engine
              </h2>
              <p className="mt-2 text-sm sm:text-base text-stone-700 max-w-2xl">
                Build your verified portfolio, vocational skill bars, and spiritual development roadmap
                with full field-level privacy sovereignty.
              </p>
            </div>

            <div className="flex-shrink-0">
              <SectionHoverInfo
                explainer={SECTION_EXPLAINERS.profileEngine}
                sectionName="Profile Engine"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* NID / Identity Security Disclaimer */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="mb-8 p-4 rounded-2xl bg-[#F7DFC7] border border-[#F7DFC7] flex items-start gap-3 text-xs text-[#111E28] shadow-xs">
            <ShieldCheck className="w-5 h-5 text-[#5B9891] flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold uppercase tracking-wide text-[#111E28]">
                Mandatory KYC & Identity Privacy Disclaimer:
              </span>
              <p className="text-stone-700 leading-relaxed">
                Registration requires uploading your NID and/or Passport for safe community verification.
                <strong> Disclaimer:</strong> Only vetted female system administrators have access to your
                identity documents. No other member or guest can ever view your government IDs.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Interactive Profile Architecture Demonstration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Simulation Card */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right" delay={0.15}>
              <div className="bg-[#FAF8F5] rounded-2xl border-2 border-[#F7DFC7] p-6 sm:p-8 shadow-md space-y-6">
                {/* Top Bar with Status and PDF Download */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#F7DFC7]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#5B9891] animate-pulse" />
                    <span className="text-xs font-bold text-[#111E28] uppercase tracking-wide">
                      Interactive Profile Builder Demo
                    </span>
                  </div>

                  {/* Profile Download (PDF) Feature */}
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="button"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#111E28] text-[#F7DFC7] hover:bg-[#5B9891] hover:text-white text-xs font-bold transition-colors shadow-2xs border border-[#D98408]/40"
                  >
                    <Download className="w-3.5 h-3.5 text-[#D98408]" />
                    <span>Download Profile (PDF)</span>
                  </motion.button>
                </div>

                {/* Core Member Profile Elements Showcase */}
                <div className="flex flex-col sm:flex-row items-start gap-5">
                  {/* Big Square Profile Picture */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-[#111E28] text-[#F7DFC7] font-serif text-3xl font-bold flex flex-col items-center justify-center flex-shrink-0 shadow-md border-2 border-[#D98408] relative cursor-pointer"
                  >
                    <span>R.A.</span>
                    <span className="text-[10px] uppercase font-sans tracking-widest text-[#F7DFC7]/80 mt-1">
                      Big Square
                    </span>
                    <span className="absolute -bottom-2 -right-2 p-1.5 bg-[#5B9891] rounded-full text-white ring-2 ring-white">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </span>
                  </motion.div>

                  {/* Basic Bio & Location */}
                  <div className="space-y-2 flex-grow">
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-xl font-bold text-[#111E28]">
                        Rayhana Al-Muhsina
                      </h3>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#F7DFC7] text-[#111E28] border border-[#F7DFC7]">
                        Referred & Approved
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 font-medium">
                      Instructional Designer • Artisan Perfumer • Homeschool Educator
                    </p>
                    <p className="text-xs text-[#5B9891] font-semibold">
                      📍 Chittagong, Bangladesh{" "}
                      <span className="text-stone-500 font-normal">
                        (District & Country Only • No Exact Address)
                      </span>
                    </p>
                    <p className="text-xs text-stone-700 leading-relaxed pt-1">
                      &ldquo;Dedicated to facilitating wholesome halal living and Islamic holistic
                      development for children and young sisters.&rdquo;
                    </p>
                  </div>
                </div>

                {/* Field-Level Privacy Simulation (Default Private) */}
                <div className="p-4 rounded-xl bg-white border border-[#F7DFC7] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#111E28] uppercase tracking-wide">
                      Contact Information (Field-Level Privacy)
                    </span>
                    <span className="text-[11px] text-stone-500 italic">
                      *Default setting is always private unless checked
                    </span>
                  </div>

                  {/* Phone Toggle */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF8F5] border border-[#F7DFC7] text-xs">
                    <div className="flex items-center gap-2">
                      {showPhone ? (
                        <Unlock className="w-4 h-4 text-[#5B9891]" />
                      ) : (
                        <Lock className="w-4 h-4 text-stone-400" />
                      )}
                      <span className="font-bold text-[#111E28]">Phone Number:</span>
                      <span className="font-mono text-stone-700 font-medium">
                        {showPhone ? "+880 1711-XXXXXX" : "•••••••••••• (Hidden)"}
                      </span>
                    </div>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={showPhone}
                        onChange={(e) => setShowPhone(e.target.checked)}
                        className="rounded text-[#5B9891] focus:ring-[#5B9891] w-4 h-4 accent-[#5B9891]"
                      />
                      <span className="text-[11px] font-bold text-[#111E28]">Make Public</span>
                    </label>
                  </div>

                  {/* WhatsApp Toggle */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF8F5] border border-[#F7DFC7] text-xs">
                    <div className="flex items-center gap-2">
                      {showWhatsApp ? (
                        <Unlock className="w-4 h-4 text-[#5B9891]" />
                      ) : (
                        <Lock className="w-4 h-4 text-stone-400" />
                      )}
                      <span className="font-bold text-[#111E28]">WhatsApp:</span>
                      <span className="font-mono text-stone-700 font-medium">
                        {showWhatsApp ? "+880 1819-XXXXXX" : "•••••••••••• (Hidden)"}
                      </span>
                    </div>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={showWhatsApp}
                        onChange={(e) => setShowWhatsApp(e.target.checked)}
                        className="rounded text-[#5B9891] focus:ring-[#5B9891] w-4 h-4 accent-[#5B9891]"
                      />
                      <span className="text-[11px] font-bold text-[#111E28]">Make Public</span>
                    </label>
                  </div>
                </div>

                {/* Tabbed Profile Sections with Animated Content */}
                <div className="space-y-4">
                  <div className="flex border-b border-[#F7DFC7] text-xs font-bold">
                    <button
                      type="button"
                      onClick={() => setActiveTab("overview")}
                      className={`py-2 px-4 border-b-2 transition-all ${
                        activeTab === "overview"
                          ? "border-[#5B9891] text-[#111E28]"
                          : "border-transparent text-stone-500 hover:text-[#111E28]"
                      }`}
                    >
                      My Business Brands & Shop
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("skills")}
                      className={`py-2 px-4 border-b-2 transition-all ${
                        activeTab === "skills"
                          ? "border-[#5B9891] text-[#111E28]"
                          : "border-transparent text-stone-500 hover:text-[#111E28]"
                      }`}
                    >
                      Skill Bars & Dropdowns
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("frameworks")}
                      className={`py-2 px-4 border-b-2 transition-all ${
                        activeTab === "frameworks"
                          ? "border-[#5B9891] text-[#111E28]"
                          : "border-transparent text-stone-500 hover:text-[#111E28]"
                      }`}
                    >
                      Private Growth Frameworks
                    </button>
                  </div>

                  <AnimatePresence mode="wait">
                    {/* Tab 1: Business Brands */}
                    {activeTab === "overview" && (
                      <motion.div
                        key="overview"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="p-4 rounded-xl bg-white border border-[#F7DFC7] space-y-3"
                      >
                        <div className="flex items-center justify-between text-xs font-bold text-[#111E28]">
                          <span className="flex items-center gap-1.5">
                            <Briefcase className="w-4 h-4 text-[#5B9891]" />
                            <span>Sister&apos;s Registered Brands (Auto-synced)</span>
                          </span>
                          <span className="text-[#5B9891] font-bold">
                            Linked with Shop
                          </span>
                        </div>
                        <div className="space-y-2">
                          <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#F7DFC7] flex items-center justify-between text-xs">
                            <div>
                              <span className="font-bold text-[#111E28] block">
                                Ittar & Essence Atelier
                              </span>
                              <span className="text-stone-600">
                                Role: Founder & Master Blender (Custom Role)
                              </span>
                            </div>
                            <span className="px-2.5 py-0.5 rounded-full bg-[#F7DFC7] text-[#111E28] text-[10px] font-bold border border-[#F7DFC7]">
                              Published (Paid Sub)
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Tab 2: Skill Bars with smooth animated width filling */}
                    {activeTab === "skills" && (
                      <motion.div
                        key="skills"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="p-4 rounded-xl bg-white border border-[#F7DFC7] space-y-3"
                      >
                        <span className="text-xs font-bold text-[#111E28] block">
                          Vocational & Technical Skill Bars
                        </span>
                        <div className="space-y-3 text-xs">
                          <div>
                            <div className="flex justify-between mb-1 font-semibold">
                              <span className="text-[#111E28]">
                                Arabic Grammar & Classical Translation
                              </span>
                              <span className="text-[#5B9891] font-bold">Advanced (85%)</span>
                            </div>
                            <div className="w-full h-2 rounded-full bg-[#FAF8F5] border border-[#F7DFC7] overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "85%" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="h-full bg-[#111E28] rounded-full"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between mb-1 font-semibold">
                              <span className="text-[#111E28]">
                                Figma & UI Layout Design
                              </span>
                              <span className="text-[#5B9891] font-bold">Intermediate (70%)</span>
                            </div>
                            <div className="w-full h-2 rounded-full bg-[#FAF8F5] border border-[#F7DFC7] overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "70%" }}
                                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                                className="h-full bg-[#D98408] rounded-full"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between mb-1 font-semibold">
                              <span className="text-[#111E28]">
                                Handmade Soap & Cold-Process Formulation
                              </span>
                              <span className="text-[#5B9891] font-bold">Expert (95%)</span>
                            </div>
                            <div className="w-full h-2 rounded-full bg-[#FAF8F5] border border-[#F7DFC7] overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "95%" }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                className="h-full bg-[#5B9891] rounded-full"
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Tab 3: Always Private Frameworks */}
                    {activeTab === "frameworks" && (
                      <motion.div
                        key="frameworks"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="p-5 rounded-2xl bg-[#111E28] text-[#F7DFC7] space-y-3 border-2 border-[#D98408]/40 shadow-inner"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#F7DFC7]">
                            Private-Always Frameworks
                          </span>
                          <span className="px-3 py-1 rounded-full bg-[#5B9891] text-white text-[10px] font-bold">
                            100% Locked from Public
                          </span>
                        </div>
                        <p className="text-xs text-[#F7DFC7]/90">
                          Neither guests nor other members can ever view these personal self-development tools:
                        </p>
                        <div className="grid grid-cols-2 gap-2.5 text-xs">
                          <div className="p-3 rounded-xl bg-black/30 border border-[#D98408]/40">
                            <span className="font-bold text-white block">3. My 80/20 Chart</span>
                            <span className="text-[11px] text-[#F7DFC7]/80">
                              Deep work and spiritual efficiency tracker.
                            </span>
                          </div>
                          <div className="p-3 rounded-xl bg-black/30 border border-[#D98408]/40">
                            <span className="font-bold text-white block">
                              4. Islamized Wheel
                            </span>
                            <span className="text-[11px] text-[#F7DFC7]/80">
                              Holistic development across 8 spiritual facets.
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Platform Rules & Profile Indexing Flow */}
          <div className="lg:col-span-5 space-y-5">
            <ScrollReveal direction="left" delay={0.25}>
              <div className="p-6 rounded-2xl bg-[#FAF8F5] border-2 border-[#F7DFC7] space-y-4 shadow-sm">
                <h3 className="font-serif text-lg font-bold text-[#111E28]">
                  How Profile Review & Publishing Works
                </h3>
                <p className="text-xs text-stone-700 leading-relaxed">
                  Profiles are not automatically made public. Every sister is protected through our
                  multi-step review workflow:
                </p>

                <StaggerContainer staggerDelay={0.08} className="space-y-3 text-xs">
                  <StaggerItem>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#5B9891] text-white border border-[#F2B55D] flex items-center justify-center font-bold flex-shrink-0 text-xs">
                        1
                      </div>
                      <div>
                        <strong className="text-[#111E28] block">Personal Profile (Always Free)</strong>
                        <span className="text-stone-700">
                          Draft your profile, customize visibility, and submit for manual admin review.
                        </span>
                      </div>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#5B9891] text-white border border-[#F2B55D] flex items-center justify-center font-bold flex-shrink-0 text-xs">
                        2
                      </div>
                      <div>
                        <strong className="text-[#111E28] block">Referee Verification</strong>
                        <span className="text-stone-700">
                          Your designated referrer confirms in-person familiarity.
                        </span>
                      </div>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#5B9891] text-white border border-[#F2B55D] flex items-center justify-center font-bold flex-shrink-0 text-xs">
                        3
                      </div>
                      <div>
                        <strong className="text-[#111E28] block">Business Profile Subscription</strong>
                        <span className="text-stone-700">
                          Building business profiles is free, but publishing them requires a verified
                          ZiniPay subscription.
                        </span>
                      </div>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#5B9891] text-white border border-[#F2B55D] flex items-center justify-center font-bold flex-shrink-0 text-xs">
                        4
                      </div>
                      <div>
                        <strong className="text-[#111E28] block">Chronological Indexing</strong>
                        <span className="text-stone-700">
                          Public directory sorts by Name (default), Date Created, or Date Modified.
                        </span>
                      </div>
                    </div>
                  </StaggerItem>
                </StaggerContainer>

                <div className="pt-2 border-t border-[#F7DFC7]">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="#auth-register"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#111E28] hover:bg-[#5B9891] text-[#F7DFC7] hover:text-white text-xs font-bold shadow-md transition-all border border-[#D98408]/50"
                  >
                    <UserCheck className="w-4 h-4 text-[#D98408]" />
                    <span>Start Your Personal Profile Today</span>
                  </motion.a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
