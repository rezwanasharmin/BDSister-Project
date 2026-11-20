"use client";

import React from "react";
import {
  Calendar,
  Clock,
  User,
  Ticket,
  Video,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { UPCOMING_EVENTS, SECTION_EXPLAINERS } from "@/data/mockData";
import { SectionHoverInfo } from "@/components/common/SectionHoverInfo";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/common/MotionComponents";

export function EventsPreview() {
  return (
    <section
      id="events"
      aria-labelledby="events-heading"
      className="py-16 bg-[#FAF5EE] border-b border-[#E8D0B8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#E8D0B8]/60">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1.5 rounded-lg bg-[#F7DFC7] text-[#173330] border border-[#E8D0B8]">
                  <Calendar className="w-4 h-4 text-[#5B9891]" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#173330]">
                  Cross-Wing Learning & Gatherings
                </span>
              </div>
              <h2
                id="events-heading"
                className="font-serif text-2xl sm:text-3xl font-bold text-[#173330] tracking-tight"
              >
                Events & Workshops Calendar
              </h2>
              <p className="mt-2 text-sm sm:text-base text-stone-700 max-w-2xl">
                Engage in live virtual halaqahs, entrepreneurship masterclasses, and parenting workshops
                organized across all Muhsina sisterhood wings.
              </p>
            </div>

            <div className="flex-shrink-0">
              <SectionHoverInfo
                explainer={SECTION_EXPLAINERS.events}
                sectionName="Events Calendar"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Events Grid with Staggered Entrance */}
        <StaggerContainer
          staggerDelay={0.09}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {UPCOMING_EVENTS.map((event) => (
            <StaggerItem key={event.id}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="h-full bg-white rounded-2xl border border-[#E8D0B8] p-5 flex flex-col justify-between hover:shadow-xl hover:border-[#5B9891] transition-all duration-200"
              >
                <div>
                  {/* Wing & Type Tag */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide bg-[#F7DFC7] text-[#173330] border border-[#E8D0B8]">
                      {event.wing}
                    </span>
                    <span className="text-xs font-semibold text-[#5B9891]">
                      {event.type}
                    </span>
                  </div>

                  {/* Event Title */}
                  <h3 className="text-base font-bold text-[#173330] leading-snug hover:text-[#5B9891] transition-colors">
                    {event.title}
                  </h3>

                  {/* Speaker */}
                  <div className="mt-3 flex items-center gap-2 text-xs text-stone-700 font-semibold">
                    <User className="w-4 h-4 text-[#5B9891]" />
                    <span>Instructor: {event.speaker}</span>
                  </div>

                  {/* Time & Date */}
                  <div className="mt-2 space-y-1 text-xs text-stone-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-stone-400" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-stone-400" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer: Pricing and Ticket Action */}
                <div className="mt-5 pt-4 border-t border-[#E8D0B8]/60 flex items-center justify-between">
                  <div>
                    {event.isFree ? (
                      <span className="text-xs font-bold text-[#173330] bg-[#D98408]/30 border border-[#D98408]/60 px-2.5 py-0.5 rounded-full">
                        Free Entry
                      </span>
                    ) : (
                      <span className="text-xs font-bold text-[#173330] bg-[#F7DFC7] px-2.5 py-0.5 rounded-full border border-[#E8D0B8]">
                        Paid Ticket
                      </span>
                    )}
                    <span className="text-[10px] text-stone-500 block mt-1">
                      {event.seatsLeft} seats remaining
                    </span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    type="button"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#173330] text-[#F7DFC7] hover:bg-[#5B9891] hover:text-white text-xs font-bold transition-colors shadow-2xs border border-[#D98408]/40"
                  >
                    <Ticket className="w-3.5 h-3.5 text-[#D98408]" />
                    <span>Register</span>
                  </motion.button>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Past Archive Teaser */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="mt-8 p-4 rounded-2xl bg-white border border-[#E8D0B8] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-[#F7DFC7] text-[#173330] border border-[#E8D0B8]">
                <Video className="w-4 h-4 text-[#5B9891]" />
              </span>
              <div>
                <span className="font-bold text-[#173330] block">
                  Missed a live session?
                </span>
                <span className="text-stone-600">
                  Explore our past event archives including lecture recordings, slides, and summary notes.
                </span>
              </div>
            </div>
            <a
              href="#past-events"
              className="inline-flex items-center gap-1.5 font-bold text-[#173330] hover:text-[#5B9891] flex-shrink-0"
            >
              <span>Browse Event Archive</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#5B9891]" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
