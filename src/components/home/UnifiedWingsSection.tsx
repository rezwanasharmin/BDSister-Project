"use client";

import React from "react";
import {
  Layers,
  Baby,
  BookOpen,
  PenTool,
  Store,
  Compass,
  ArrowUpRight,
  ShieldCheck,
  Network,
} from "lucide-react";
import { motion } from "framer-motion";
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
                  Muhsina Organization Ecosystem
                </span>
              </div>
              <h2
                id="wings-heading"
                className="font-serif text-2xl sm:text-3xl font-bold text-[#111E28] tracking-tight"
              >
                Importance of a Unified Database
              </h2>
              <p className="mt-2 text-sm sm:text-base text-stone-700 max-w-2xl">
                BDSisters.org serves as the central identity anchor. Once approved, your profile links
                seamlessly across all specialized sister wings without redundant registrations.
              </p>
            </div>

            <div className="flex-shrink-0">
              <SectionHoverInfo
                explainer={SECTION_EXPLAINERS.wings}
                sectionName="Unified Wings"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Central Architecture Highlight Banner in Deep Green & Sand */}
        <ScrollReveal direction="up" delay={0.15}>
          <motion.div
            whileHover={{ scale: 1.008 }}
            transition={{ duration: 0.3 }}
            className="mb-10 rounded-2xl bg-[#5B9891] text-white p-6 sm:p-8 shadow-xl border border-[#477C76] relative overflow-hidden border-2 border-[#D98408]/40"
          >
            <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-72 h-72 bg-[#5B9891]/25 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2 space-y-3">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#F7DFC7] text-[#111E28] border border-[#F7DFC7] inline-block">
                  Master Profile Creation Platform
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif leading-snug text-white">
                  One Verified Profile. Unlimited Sisterhood Synergy.
                </h3>
                <p className="text-xs sm:text-sm text-[#F7DFC7]/90 leading-relaxed">
                  Add the roles you play across all wings—from writing articles on MIDJ to leading homeschooling
                  dialogues on CoP or supplying goods through The Hut Network. All validated under a single referee-backed identity.
                </p>
              </div>
              <div className="bg-[#FAF8F5]/10 backdrop-blur-sm p-4 rounded-xl border border-[#F7DFC7]/30 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#F7DFC7]">
                  <ShieldCheck className="w-4 h-4 text-[#D98408]" />
                  <span>Referee Rule: Strict Security</span>
                </div>
                <p className="text-xs text-[#F7DFC7]/80 leading-relaxed">
                  All profilers must have referees who know them in person before registration is approved by the admin.
                </p>
              </div>
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
            return (
              <StaggerItem key={wing.id}>
                <motion.div
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="group h-full relative rounded-2xl border border-[#F7DFC7] bg-white hover:bg-[#FAF8F5] p-6 transition-all duration-200 hover:shadow-xl hover:border-[#5B9891] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#F7DFC7] text-[#111E28] border border-[#F7DFC7]">
                        {wing.code}
                      </span>
                      <span className="p-2 rounded-xl bg-[#FAF8F5] border border-[#F7DFC7] text-[#111E28] group-hover:text-[#5B9891] group-hover:bg-[#F7DFC7] transition-colors shadow-2xs">
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

                  {/* Capsule Action Button inspired by client reference */}
                  <div className="mt-5 pt-3 border-t border-[#F7DFC7]">
                    <div className="inline-flex items-center justify-between w-full pl-4 pr-1.5 py-1.5 rounded-full bg-white border-2 border-[#D98408] text-[#D98408] group-hover:bg-[#D98408] group-hover:text-white transition-all duration-200 shadow-2xs">
                      <span className="text-xs font-bold tracking-wide">
                        Explore Wing
                      </span>
                      <span className="w-7 h-7 rounded-full bg-[#D98408] group-hover:bg-white text-white group-hover:text-[#D98408] flex items-center justify-center shadow-xs transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}

          {/* Cross-Wing Collective Events Card */}
          <StaggerItem>
            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="h-full rounded-2xl border-2 border-dashed border-[#D98408] bg-[#F7DFC7]/40 p-6 flex flex-col justify-between"
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
              <div className="mt-5 pt-3 border-t border-[#D98408]/30">
                <a
                  href="#who-we-are"
                  className="inline-flex items-center justify-between w-full pl-4 pr-1.5 py-1.5 rounded-full bg-[#D98408] hover:bg-[#B86E04] text-white transition-all shadow-md group/hub"
                >
                  <span className="text-xs font-bold tracking-wide">
                    Explore Governance
                  </span>
                  <span className="w-7 h-7 rounded-full bg-white/25 text-white flex items-center justify-center shadow-xs transition-transform transform group-hover/hub:translate-x-0.5 group-hover/hub:-translate-y-0.5">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </a>
              </div>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
