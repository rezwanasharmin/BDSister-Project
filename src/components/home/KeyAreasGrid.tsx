"use client";

import React, { useState } from "react";
import {
  UserCheck,
  Briefcase,
  ShoppingBag,
  MessageSquare,
  Sparkles,
  GraduationCap,
  ClipboardCheck,
  HeartHandshake,
  CheckCircle,
  ArrowRight,
  Info,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { KEY_AREAS, SECTION_EXPLAINERS } from "@/data/mockData";
import { SectionHoverInfo } from "@/components/common/SectionHoverInfo";
import { KeyAreaItem } from "@/types";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/common/MotionComponents";

const ICONS_LOOKUP: Record<string, React.ReactNode> = {
  UserCheck: <UserCheck className="w-5 h-5" />,
  Briefcase: <Briefcase className="w-5 h-5" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5" />,
  MessageSquare: <MessageSquare className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  GraduationCap: <GraduationCap className="w-5 h-5" />,
  ClipboardCheck: <ClipboardCheck className="w-5 h-5" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5" />,
};

export function KeyAreasGrid() {
  const [selectedArea, setSelectedArea] = useState<KeyAreaItem>(KEY_AREAS[0]);

  return (
    <section
      id="key-areas"
      aria-labelledby="key-areas-title"
      className="py-16 bg-[#FAF8F5] border-b border-[#F7DFC7] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#F7DFC7]/60">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1.5 rounded-lg bg-[#F7DFC7] text-[#111E28] border border-[#F7DFC7]">
                  <Sparkles className="w-4 h-4 text-[#5B9891]" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#111E28]">
                  Platform Architecture
                </span>
              </div>
              <h2
                id="key-areas-title"
                className="font-serif text-2xl sm:text-3xl font-bold text-[#111E28] tracking-tight"
              >
                8 Key Areas That Power BDSisters.org
              </h2>
              <p className="mt-2 text-sm sm:text-base text-stone-700 max-w-2xl">
                An all-in-one ecosystem designed for every stage of a sister’s journey: from spiritual growth and private reflection to thriving halal commerce.
              </p>
            </div>

            <div className="flex-shrink-0">
              <SectionHoverInfo
                explainer={SECTION_EXPLAINERS.keyAreas}
                sectionName="8 Key Areas"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* 8 Areas Cards Grid with Staggered Entrance */}
        <StaggerContainer
          staggerDelay={0.06}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {KEY_AREAS.map((area) => {
            const isSelected = selectedArea.id === area.id;
            const icon = ICONS_LOOKUP[area.icon] || <Sparkles className="w-5 h-5" />;

            return (
              <StaggerItem key={area.id}>
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedArea(area)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSelectedArea(area);
                    }
                  }}
                  className={`h-full text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-white border-[#5B9891] ring-2 ring-[#5B9891]/30 shadow-md"
                      : "bg-white border-[#F7DFC7] hover:border-[#5B9891] hover:shadow-sm"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold font-serif border ${
                          isSelected
                            ? "bg-[#5B9891] text-white border-[#D98408]"
                            : "bg-[#F7DFC7] text-[#111E28] border-[#F7DFC7]"
                        }`}
                      >
                        0{area.id}
                      </span>
                      <span
                        className={`p-2 rounded-xl transition-colors ${
                          isSelected
                            ? "bg-[#5B9891] text-white"
                            : "bg-[#FAF8F5] text-[#111E28] border border-[#F7DFC7]"
                        }`}
                      >
                        {icon}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-[#111E28] leading-snug">
                      {area.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-[#5B9891] mt-0.5">
                      {area.banglaTitle}
                    </p>
                    <p className="text-xs text-stone-600 mt-2 line-clamp-2 leading-relaxed">
                      {area.description}
                    </p>
                  </div>

                  {/* Bottom Row: Original Text on Left + Compact Capsule Button on Right */}
                  <div className="mt-4 pt-3 border-t border-[#F7DFC7] flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-stone-600">
                      {isSelected ? "Currently Viewing" : "View Details"}
                    </span>
                    <div
                      className={`flex-shrink-0 inline-flex items-center gap-2 pl-3.5 pr-1.5 py-1.5 rounded-full transition-all duration-300 shadow-xs ${
                        isSelected
                          ? "bg-[#D98408] text-white shadow-md ring-2 ring-[#D98408]/30"
                          : "bg-white border-2 border-[#D98408] text-[#D98408] group-hover:bg-[#D98408] group-hover:text-white"
                      }`}
                    >
                      <span className="text-xs font-bold tracking-wide">
                        {isSelected ? "Active" : "Explore"}
                      </span>
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isSelected
                            ? "bg-white text-[#D98408]"
                            : "bg-[#D98408] text-white group-hover:bg-white group-hover:text-[#D98408]"
                        }`}
                      >
                        <ArrowRight
                          className="w-3.5 h-3.5 transition-transform duration-300 ease-out"
                          style={{
                            transform: isSelected ? "rotate(0deg)" : "rotate(-45deg)",
                          }}
                        />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Selected Area Interactive Deep Dive Showcase with AnimatePresence */}
        <AnimatePresence mode="wait">
          {selectedArea && (
            <motion.div
              key={selectedArea.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mt-8 rounded-2xl bg-white border-2 border-[#F7DFC7] p-6 sm:p-8 shadow-md"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#111E28] bg-[#F7DFC7] px-3 py-1 rounded-full border border-[#F7DFC7]">
                      Area #0{selectedArea.id} Focus
                    </span>
                    <span className="text-xs text-stone-400">•</span>
                    <span className="text-xs text-[#5B9891] font-bold">
                      {selectedArea.banglaTitle}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#111E28]">
                    {selectedArea.title}
                  </h3>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    {selectedArea.explainer.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {selectedArea.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs font-semibold text-[#111E28] bg-[#FAF8F5] p-3 rounded-xl border border-[#F7DFC7]"
                      >
                        <CheckCircle className="w-4 h-4 text-[#5B9891] flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side: Operational Rules Card */}
                <div className="lg:col-span-5 bg-[#FAF8F5] p-5 rounded-2xl border-2 border-[#F7DFC7] space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#111E28] uppercase tracking-wide">
                    <Info className="w-4 h-4 text-[#5B9891]" />
                    <span>Platform Operational Guidelines</span>
                  </div>

                  <ul className="space-y-2 text-xs text-stone-700">
                    {selectedArea.explainer.howItWorks?.map((rule, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#5B9891] mt-1.5 flex-shrink-0" />
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>

                  {selectedArea.explainer.islamicOrSisterhoodNote && (
                    <div className="pt-2 border-t border-[#F7DFC7] text-[11px] text-[#111E28] font-medium italic">
                      🌸 {selectedArea.explainer.islamicOrSisterhoodNote}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
