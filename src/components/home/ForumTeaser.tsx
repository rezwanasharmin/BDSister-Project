"use client";

import React, { useState } from "react";
import {
  MessageSquare,
  Lock,
  Unlock,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FORUM_PREVIEWS, SECTION_EXPLAINERS } from "@/data/mockData";
import { SectionHoverInfo } from "@/components/common/SectionHoverInfo";
import { ForumTopicPreview } from "@/types";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/common/MotionComponents";

const FORUM_CATEGORIES = [
  { name: "Faith & Personal Growth", count: "128 Topics" },
  { name: "Family & Parenting", count: "94 Topics" },
  { name: "Sisters in Business", count: "156 Topics" },
  { name: "Health & Wellness", count: "72 Topics" },
  { name: "Skills Exchange (Ask & Offer)", count: "89 Topics" },
];

export function ForumTeaser() {
  const [isGuestMode, setIsGuestMode] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState<ForumTopicPreview>(
    FORUM_PREVIEWS[0]
  );

  return (
    <section
      id="forums"
      aria-labelledby="forums-heading"
      className="py-16 bg-[#FAF7EF] border-b border-[#DFCFA5] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#DFCFA5]/60">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1.5 rounded-lg bg-[#EFE3C2] text-[#123524] border border-[#DFCFA5]">
                  <MessageSquare className="w-4 h-4 text-[#3E7B27]" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#123524]">
                  Constructive Sisterhood Circles
                </span>
              </div>
              <h2
                id="forums-heading"
                className="font-serif text-2xl sm:text-3xl font-bold text-[#123524] tracking-tight"
              >
                Forums: Connect & Converse
              </h2>
              <p className="mt-2 text-sm sm:text-base text-stone-700 max-w-2xl">
                Safe, moderated spaces for uplifting dialogues on spirituality, family, business,
                and vocational exchange—free from public toxicity.
              </p>
            </div>

            <div className="flex-shrink-0">
              <SectionHoverInfo
                explainer={SECTION_EXPLAINERS.forums}
                sectionName="Discussion Forums"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* View Mode Switcher Simulator */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="mb-8 p-3 rounded-2xl bg-white border border-[#DFCFA5] shadow-xs flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#123524]">
              <span>Experience Forum View as:</span>
              <div className="inline-flex rounded-full p-1 bg-[#FAF7EF] border border-[#DFCFA5]">
                <button
                  type="button"
                  onClick={() => setIsGuestMode(true)}
                  className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all ${
                    isGuestMode
                      ? "bg-[#123524] text-[#EFE3C2] shadow-xs border border-[#85A947]/40"
                      : "text-stone-600 hover:text-[#123524]"
                  }`}
                >
                  Guest View (Gated)
                </button>
                <button
                  type="button"
                  onClick={() => setIsGuestMode(false)}
                  className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all ${
                    !isGuestMode
                      ? "bg-[#3E7B27] text-white shadow-xs"
                      : "text-stone-600 hover:text-[#123524]"
                  }`}
                >
                  Member View (Full Access)
                </button>
              </div>
            </div>

            <div className="text-xs text-stone-700 font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#3E7B27]" />
              <span>Moderated Safe Sanctuary</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Categories Bar */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="flex flex-wrap gap-2 mb-8">
            {FORUM_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="px-3.5 py-2 rounded-xl bg-white border border-[#DFCFA5] text-xs font-bold text-[#123524] flex items-center gap-2 shadow-2xs hover:border-[#3E7B27] transition-colors"
              >
                <span>{cat.name}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#EFE3C2] text-[#123524] font-bold border border-[#DFCFA5]">
                  {cat.count}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Forums Showcase Grid: Balanced 50/50 Equal Width & Equal Height Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Topics List: Stretched evenly to match right preview height */}
          <StaggerContainer
            staggerDelay={0.08}
            className="h-full flex flex-col justify-between gap-3.5"
          >
            {FORUM_PREVIEWS.map((topic) => {
              const isSelected = selectedTopic.id === topic.id;
              return (
                <StaggerItem key={topic.id} className="flex-1 flex flex-col">
                  <motion.div
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    onClick={() => setSelectedTopic(topic)}
                    className={`h-full flex-1 p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? "bg-white border-[#3E7B27] ring-2 ring-[#3E7B27]/25 shadow-md"
                        : "bg-white border-[#DFCFA5] hover:border-[#3E7B27] hover:shadow-xs"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-[11px] mb-2">
                        <span className="font-bold text-[#123524] uppercase tracking-wide bg-[#EFE3C2] px-2.5 py-0.5 rounded-full border border-[#DFCFA5]">
                          {topic.category}
                        </span>
                        <span className="text-stone-500 font-medium">{topic.postedAt}</span>
                      </div>

                      <h3 className="text-base font-bold text-[#123524] leading-snug hover:text-[#3E7B27] transition-colors">
                        {topic.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-stone-600 mt-3 pt-2.5 border-t border-[#DFCFA5]/40">
                      <span className="font-bold text-[#3E7B27]">
                        By {topic.authorSister}
                      </span>
                      <span>•</span>
                      <span>{topic.replyCount} Replies</span>
                      <span>•</span>
                      <span>{topic.viewsCount} Views</span>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Active Post Preview: Equal Height Container */}
          <div className="h-full">
            <ScrollReveal direction="left" delay={0.2} className="h-full">
              <div className="h-full bg-white rounded-2xl border-2 border-[#DFCFA5] p-6 sm:p-7 shadow-md relative flex flex-col justify-between">
                {/* Top Section: Meta + Title + Excerpt */}
                <div>
                  <div className="border-b border-[#DFCFA5] pb-3 mb-4 flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                      {isGuestMode ? "Guest Perspective Preview" : "Verified Member Reader"}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#EFE3C2] text-[#123524] font-bold border border-[#DFCFA5]">
                      {selectedTopic.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#123524] mb-2 leading-snug">
                    {selectedTopic.title}
                  </h3>

                  <div className="text-xs text-stone-600 mb-4 flex items-center gap-2">
                    <span className="font-bold text-[#3E7B27]">
                      {selectedTopic.authorSister}
                    </span>
                    <span>•</span>
                    <span>{selectedTopic.postedAt}</span>
                  </div>

                  {/* Post Introduction */}
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-4">
                    {selectedTopic.excerpt}
                  </p>
                </div>

                {/* Middle Section: GUEST VIEW GATE vs MEMBER FULL VIEW with AnimatePresence */}
                <div className="my-auto py-2">
                  <AnimatePresence mode="wait">
                    {isGuestMode ? (
                      <motion.div
                        key="guest"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.3 }}
                        className="relative pt-6 pb-2 text-center border-t border-dashed border-[#DFCFA5]"
                      >
                        <div className="absolute inset-x-0 -top-6 h-8 bg-gradient-to-b from-transparent to-white pointer-events-none" />

                        <div className="p-5 rounded-2xl bg-[#EFE3C2] border border-[#DFCFA5] text-[#123524] space-y-3">
                          <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-[#123524]">
                            <Lock className="w-4 h-4 text-[#3E7B27]" />
                            <span>Member Only Discussion</span>
                          </div>
                          <p className="text-xs text-stone-700 leading-relaxed">
                            Guests can only read a brief introduction. To access the complete conversation,
                            participate, or reply, create your free sisterhood account.
                          </p>

                          {/* EXACT REQUIRED BUTTON */}
                          <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href="#auth-register"
                            className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-full bg-[#123524] hover:bg-[#3E7B27] text-[#EFE3C2] hover:text-white text-xs font-bold shadow-md transition-all border border-[#85A947]/50"
                          >
                            <span>Be a member to read the post. It&apos;s Free</span>
                            <ArrowRight className="w-3.5 h-3.5 text-[#85A947]" />
                          </motion.a>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="member"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.3 }}
                        className="p-5 rounded-2xl bg-[#FAF7EF] border border-[#DFCFA5] space-y-3 text-xs text-stone-700"
                      >
                        <div className="flex items-center gap-1.5 text-[#123524] font-bold">
                          <Unlock className="w-4 h-4 text-[#3E7B27]" />
                          <span>Full Community Thread Unlocked</span>
                        </div>
                        <p className="leading-relaxed">{selectedTopic.fullContentSample}</p>
                        <div className="pt-2 border-t border-[#DFCFA5] flex items-center justify-between">
                          <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            type="button"
                            className="px-4 py-2 rounded-full bg-[#123524] text-[#EFE3C2] hover:bg-[#3E7B27] hover:text-white font-bold text-xs transition-colors"
                          >
                            Post a Sisterly Reply
                          </motion.button>
                          <span className="text-[11px] text-stone-500 font-medium">
                            Subscription: Paid Member to create topics
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom Section: Membership Tier Breakdown Notice */}
                <div className="pt-4 border-t border-[#DFCFA5] grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-3 rounded-xl bg-[#FAF7EF] border border-[#DFCFA5]">
                    <span className="font-bold text-[#123524] block">Free Member</span>
                    <span className="text-stone-600">Read all posts, participate in free events.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAF7EF] border border-[#DFCFA5]">
                    <span className="font-bold text-[#123524] block">Paid Member</span>
                    <span className="text-stone-600">Create new topics, ask questions, post comments.</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
