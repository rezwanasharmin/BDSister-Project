"use client";

import React, { useState } from "react";
import {
  Layers,
  Baby,
  BookOpen,
  PenTool,
  Store,
  Compass,
  ArrowRight,
  ShieldCheck,
  Network,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SISTER_WINGS, SECTION_EXPLAINERS } from "@/data/mockData";
import { SectionHoverInfo } from "@/components/common/SectionHoverInfo";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/common/MotionComponents";

const ICON_MAP: Record<string, React.ReactNode> = {
  Baby: <Baby className="w-5 h-5" />,
  BookOpen: <BookOpen className="w-5 h-5" />,
  PenTool: <PenTool className="w-5 h-5" />,
  Store: <Store className="w-5 h-5" />,
  Compass: <Compass className="w-5 h-5" />,
};

export function UnifiedWingsSection() {
  const [activeWing, setActiveWing] = useState<string | null>(null);
  const [hubActive, setHubActive] = useState<boolean>(false);

  return (
    <section
      id="unified-wings"
      aria-labelledby="wings-heading"
      className="py-16 bg-[#FAF8F5] border-b border-[#F7DFC7] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#F7DFC7]/60">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1.5 rounded-lg bg-[#F7DFC7] text-[#111E28] border border-[#F7DFC7]">
                  <Network className="w-4 h-4 text-[#5B9891]" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#111E28]">
                  Unified Umbrella of Muhsina Organization
                </span>
              </div>
              <h2
                id="wings-heading"
                className="font-serif text-2xl sm:text-3xl font-bold text-[#111E28] tracking-tight"
              >
                Autonomous Sister Wings Under One Roof
              </h2>
              <p className="mt-2 text-sm sm:text-base text-stone-700 max-w-2xl">
                BDSisters synchronizes verified personal and business profiles across all existing wings of
                Muhsina Organization without fragmenting our sisterhood.
              </p>
            </div>

            <div className="flex-shrink-0">
              <SectionHoverInfo
                explainer={SECTION_EXPLAINERS.wings}
                sectionName="Sister Wings"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Database Hub Central Callout */}
        <ScrollReveal direction="up" delay={0.1}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="mb-10 rounded-2xl bg-[#5B9891] text-white p-6 sm:p-8 shadow-xl border border-[#477C76] relative overflow-hidden"
          >
            <div className="relative z-10 max-w-2xl space-y-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#F7DFC7]" />
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#F7DFC7] text-[#111E28] border border-[#F7DFC7]">
                  Single-Sign-On Vetting Standard
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                One Verification, Complete Sisterhood Access
              </h3>
              <p className="text-xs sm:text-sm text-[#F7DFC7] leading-relaxed">
                When you are verified via NID and referee referral on BDSisters, your credentials automatically
                syndicate across CoP, TSPP, MIDJ, and The Hut network without repeated paperwork.
              </p>
            </div>
            {/* Background Monogram Glow */}
            <div className="absolute right-4 -bottom-6 text-white/10 font-serif text-9xl font-black select-none pointer-events-none hidden sm:block">
              HUB
            </div>
          </motion.div>
        </ScrollReveal>

        {/* The 5 Wings Cards Grid with Staggered Scroll Animation */}
        <StaggerContainer
          staggerDelay={0.09}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SISTER_WINGS.map((wing) => {
            const icon = ICON_MAP[wing.iconName] || <Layers className="w-5 h-5" />;
            const isClicked = activeWing === wing.id;

            return (
              <StaggerItem key={wing.id}>
                <motion.div
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  onClick={() => setActiveWing(isClicked ? null : wing.id)}
                  className={`group h-full relative rounded-2xl border bg-white p-6 transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isClicked
                      ? "border-[#5B9891] ring-2 ring-[#5B9891]/30 shadow-xl bg-[#FAF8F5]"
                      : "border-[#F7DFC7] hover:border-[#5B9891] hover:shadow-xl hover:bg-[#FAF8F5]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#F7DFC7] text-[#111E28] border border-[#F7DFC7]">
                        {wing.code}
                      </span>
                      <span
                        className={`p-2 rounded-xl transition-colors shadow-2xs ${
                          isClicked
                            ? "bg-[#5B9891] text-white"
                            : "bg-[#FAF8F5] border border-[#F7DFC7] text-[#111E28] group-hover:text-[#5B9891] group-hover:bg-[#F7DFC7]"
                        }`}
                      >
                        {icon}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#111E28] group-hover:text-[#5B9891] transition-colors">
                      {wing.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#5B9891] mt-0.5">
                      {wing.tagline}
                    </p>
                    <p className="text-xs text-stone-700 mt-2.5 leading-relaxed">
                      {wing.roleInBDSisters}
                    </p>
                  </div>

                  <div>
                    {/* Bottom Row: Text on Left + Compact Capsule Button on Right */}
                    <div className="mt-5 pt-3 border-t border-[#F7DFC7] flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-stone-600 group-hover:text-[#111E28] transition-colors">
                        Connected via Unified Database
                      </span>

                      {/* Compact Capsule Button (Not full-width, arrow tilts 45deg up and levels to 0deg on click) */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveWing(isClicked ? null : wing.id);
                        }}
                        className={`flex-shrink-0 inline-flex items-center gap-2 pl-3.5 pr-1.5 py-1.5 rounded-full transition-all duration-300 shadow-xs ${
                          isClicked
                            ? "bg-[#D98408] text-white shadow-md ring-2 ring-[#D98408]/30"
                            : "bg-white border-2 border-[#D98408] text-[#D98408] hover:bg-[#D98408] hover:text-white"
                        }`}
                      >
                        <span className="text-xs font-bold tracking-wide">
                          {isClicked ? "Active" : "Explore"}
                        </span>
                        <span
                          className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isClicked
                              ? "bg-white text-[#D98408]"
                              : "bg-[#D98408] text-white group-hover:bg-white group-hover:text-[#D98408]"
                          }`}
                        >
                          <ArrowRight
                            className="w-3.5 h-3.5 transition-transform duration-300 ease-out"
                            style={{
                              transform: isClicked ? "rotate(0deg)" : "rotate(-45deg)",
                            }}
                          />
                        </span>
                      </button>
                    </div>

                    {/* Expandable Integration Summary on Click */}
                    <AnimatePresence>
                      {isClicked && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="mt-3 p-3 rounded-xl bg-white border border-[#5B9891]/30 text-[11px] text-[#111E28] shadow-inner"
                        >
                          <div className="font-bold text-[#5B9891] mb-1 flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-[#5B9891]" />
                            <span>Verified Sister Wing Synchronized</span>
                          </div>
                          <p className="text-stone-600 leading-relaxed">
                            Profiles and resources from <strong>{wing.code}</strong> syndicate into your BDSisters unified hub automatically.
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}

          {/* Cross-Wing Collective Events Card (6th Card) */}
          <StaggerItem>
            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              onClick={() => setHubActive(!hubActive)}
              className={`group h-full rounded-2xl border-2 border-dashed p-6 transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                hubActive
                  ? "border-[#5B9891] bg-white ring-2 ring-[#5B9891]/30 shadow-xl"
                  : "border-[#D98408] bg-[#F7DFC7]/40 hover:bg-white hover:border-[#5B9891]"
              }`}
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#5B9891] text-white">
                    Cross-Wing Hub
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#111E28]">
                  Shared Workshops, Archives & Dialogues
                </h3>
                <p className="text-xs text-stone-700 mt-2 leading-relaxed">
                  Vendor registrations on The Hut Network, publications on TSPP, and contributor bylines on MIDJ seamlessly syndicate into your public BDSisters profile.
                </p>
              </div>

              <div>
                {/* Bottom Row: Text on Left + Compact Capsule Button on Right */}
                <div className="mt-5 pt-3 border-t border-[#D98408]/30 flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-stone-600">
                    Muhsina Governance
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setHubActive(!hubActive);
                    }}
                    className={`flex-shrink-0 inline-flex items-center gap-2 pl-3.5 pr-1.5 py-1.5 rounded-full transition-all duration-300 shadow-xs ${
                      hubActive
                        ? "bg-[#D98408] text-white shadow-md ring-2 ring-[#D98408]/30"
                        : "bg-white border-2 border-[#D98408] text-[#D98408] hover:bg-[#D98408] hover:text-white"
                    }`}
                  >
                    <span className="text-xs font-bold tracking-wide">
                      {hubActive ? "Active" : "Explore"}
                    </span>
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                        hubActive
                          ? "bg-white text-[#D98408]"
                          : "bg-[#D98408] text-white group-hover:bg-white group-hover:text-[#D98408]"
                      }`}
                    >
                      <ArrowRight
                        className="w-3.5 h-3.5 transition-transform duration-300 ease-out"
                        style={{
                          transform: hubActive ? "rotate(0deg)" : "rotate(-45deg)",
                        }}
                      />
                    </span>
                  </button>
                </div>

                <AnimatePresence>
                  {hubActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="mt-3 p-3 rounded-xl bg-[#FAF8F5] border border-[#5B9891]/30 text-[11px] text-[#111E28] shadow-inner"
                    >
                      <p className="text-stone-600 leading-relaxed">
                        Governance protocols ensure transparent decision-making, halal oversight, and unified privacy protections for all sisters.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
