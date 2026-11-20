"use client";

import React from "react";
import {
  Heart,
  Compass,
  Eye,
  Shield,
  Users,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { SectionHoverInfo } from "@/components/common/SectionHoverInfo";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/common/MotionComponents";

const SISTERHOOD_PRINCIPLES = [
  {
    title: "Amanah (Sacred Trust)",
    desc: "Every sister's privacy, personal data, and business dealings are treated as a sacred divine trust.",
    icon: <Shield className="w-5 h-5 text-[#5B9891]" />,
  },
  {
    title: "Ukhuwwah (Sincere Sisterhood)",
    desc: "A safe space devoid of toxic competition, vanity, or negativity; prioritizing mutual uplift and empathy.",
    icon: <Heart className="w-5 h-5 text-[#111E28]" />,
  },
  {
    title: "Ihsan (Excellence in Craft)",
    desc: "Promoting high-quality workmanship, transparent pricing, and ethical business standards.",
    icon: <Sparkles className="w-5 h-5 text-[#D98408]" />,
  },
  {
    title: "Nasiha (Sincere Counsel)",
    desc: "Constructive feedback and mentorship to help sisters grow their homes, businesses, and intellect.",
    icon: <Users className="w-5 h-5 text-[#5B9891]" />,
  },
];

export function AboutValuesSection() {
  const aboutExplainer = {
    title: "Who We Are & Sisterhood Principles",
    description:
      "BDSisters.org is founded upon Islamic values to empower sisters spiritually, economically, and socially without compromising their dignity or privacy.",
    howItWorks: [
      "Guided by Islamic governance principles",
      "Dedicated wholly to the holistic advancement of Muslim women",
      "Direct oversight by Muhsina Organization",
    ],
  };

  return (
    <section
      id="who-we-are"
      aria-labelledby="about-heading"
      className="py-16 bg-[#FAF8F5] border-b border-[#F7DFC7] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#F7DFC7]/60">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1.5 rounded-lg bg-[#F7DFC7] text-[#111E28] border border-[#F7DFC7]">
                  <Compass className="w-4 h-4 text-[#5B9891]" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#111E28]">
                  Ethos & Governance
                </span>
              </div>
              <h2
                id="about-heading"
                className="font-serif text-2xl sm:text-3xl font-bold text-[#111E28] tracking-tight"
              >
                Who We Are: Mission & Sisterhood Principles
              </h2>
              <p className="mt-2 text-sm sm:text-base text-stone-700 max-w-2xl">
                Empowering Muslim sisters to thrive with dignity, financial independence,
                and authentic sisterhood within an Islamic framework.
              </p>
            </div>

            <div className="flex-shrink-0">
              <SectionHoverInfo
                explainer={aboutExplainer}
                sectionName="Who We Are"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Mission and Vision Grid */}
        <StaggerContainer
          staggerDelay={0.12}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {/* Mission */}
          <StaggerItem>
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="h-full p-8 rounded-2xl bg-white border-2 border-[#F7DFC7] shadow-md relative overflow-hidden"
            >
              <div className="w-11 h-11 rounded-2xl bg-[#F7DFC7] text-[#111E28] flex items-center justify-center mb-4 border border-[#F7DFC7]">
                <Compass className="w-5 h-5 text-[#5B9891]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#111E28] mb-2">
                Our Mission
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed">
                To build a private, verified, and collaborative digital haven where Muslim women can
                safely foster deep sisterhood, exchange vocational skills, nurture homes, and grow
                sustainable halal businesses with mutual respect and spiritual excellence.
              </p>
            </motion.div>
          </StaggerItem>

          {/* Vision */}
          <StaggerItem>
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="h-full p-8 rounded-2xl bg-white border-2 border-[#F7DFC7] shadow-md relative overflow-hidden"
            >
              <div className="w-11 h-11 rounded-2xl bg-[#D98408]/20 text-[#111E28] flex items-center justify-center mb-4 border border-[#D98408]/50">
                <Eye className="w-5 h-5 text-[#5B9891]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#111E28] mb-2">
                Our Vision
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed">
                To become the most trusted unified database and holistic community platform in the region—enabling
                thousands of sisters to express their God-given talents, achieve economic resilience, and build
                strong Muslim homes without compromising modest Islamic boundaries.
              </p>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>

        {/* Sisterhood Principles Grid */}
        <div className="space-y-4">
          <ScrollReveal direction="up">
            <h3 className="font-serif text-lg font-bold text-[#111E28]">
              Core Sisterhood Principles
            </h3>
          </ScrollReveal>

          <StaggerContainer
            staggerDelay={0.08}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {SISTERHOOD_PRINCIPLES.map((principle, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="h-full p-5 rounded-2xl bg-white border border-[#F7DFC7] shadow-sm hover:border-[#5B9891] hover:shadow-md transition-all"
                >
                  <div className="p-2.5 rounded-xl bg-[#FAF8F5] w-fit mb-3 border border-[#F7DFC7]">
                    {principle.icon}
                  </div>
                  <h4 className="text-sm font-bold text-[#111E28] mb-1.5">
                    {principle.title}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {principle.desc}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
