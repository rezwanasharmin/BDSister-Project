"use client";

import React from "react";
import {
  BookOpen,
  FileDown,
  Video,
  FileSpreadsheet,
  Download,
} from "lucide-react";
import { motion } from "framer-motion";
import { CURATED_RESOURCES, SECTION_EXPLAINERS } from "@/data/mockData";
import { SectionHoverInfo } from "@/components/common/SectionHoverInfo";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/common/MotionComponents";

const RESOURCE_ICON_MAP: Record<string, React.ReactNode> = {
  "PDF Guide": <FileDown className="w-5 h-5 text-[#3E7B27]" />,
  "Video Lecture": <Video className="w-5 h-5 text-[#85A947]" />,
  Worksheet: <FileSpreadsheet className="w-5 h-5 text-[#3E7B27]" />,
  "Curated Article": <BookOpen className="w-5 h-5 text-[#123524]" />,
};

export function ResourceLibraryPreview() {
  return (
    <section
      id="resources"
      aria-labelledby="resources-heading"
      className="py-16 bg-white border-b border-[#DFCFA5] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#DFCFA5]/60">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1.5 rounded-lg bg-[#EFE3C2] text-[#123524] border border-[#DFCFA5]">
                  <BookOpen className="w-4 h-4 text-[#3E7B27]" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#123524]">
                  Knowledge Treasury & TSPP
                </span>
              </div>
              <h2
                id="resources-heading"
                className="font-serif text-2xl sm:text-3xl font-bold text-[#123524] tracking-tight"
              >
                Curated Resource Library
              </h2>
              <p className="mt-2 text-sm sm:text-base text-stone-700 max-w-2xl">
                Authentic articles, downloadable study materials, and practical tools curated by sisters
                and scholars across Muhsina Organization wings.
              </p>
            </div>

            <div className="flex-shrink-0">
              <SectionHoverInfo
                explainer={SECTION_EXPLAINERS.resources}
                sectionName="Resource Library"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Resources Cards Grid with Staggered Entrance */}
        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {CURATED_RESOURCES.map((item) => (
            <StaggerItem key={item.id}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="h-full bg-[#FAF7EF] rounded-2xl border border-[#DFCFA5] p-5 flex flex-col justify-between hover:bg-white hover:shadow-xl hover:border-[#3E7B27] transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="p-2 rounded-xl bg-white border border-[#DFCFA5] shadow-2xs">
                      {RESOURCE_ICON_MAP[item.type] || (
                        <BookOpen className="w-5 h-5 text-[#123524]" />
                      )}
                    </span>
                    <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-[#EFE3C2] text-[#123524] border border-[#DFCFA5]">
                      {item.type}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-[#123524] leading-snug line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#3E7B27] font-semibold mt-2">
                    By {item.curatedBySister}
                  </p>

                  <div className="mt-3 pt-3 border-t border-[#DFCFA5]/60 flex items-center justify-between text-[11px] text-stone-500 font-medium">
                    <span>{item.fileSizeOrDuration}</span>
                    <span>{item.downloadsOrReads.toLocaleString()} reads</span>
                  </div>
                </div>

                <div className="mt-4 pt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    className="w-full py-2.5 px-3 rounded-full bg-white border border-[#DFCFA5] hover:bg-[#123524] hover:text-[#EFE3C2] hover:border-[#123524] text-[#123524] text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <Download className="w-3.5 h-3.5 text-[#3E7B27]" />
                    <span>Download Resource</span>
                  </motion.button>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
