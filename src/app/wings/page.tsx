"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Network,
  Baby,
  BookOpen,
  PenTool,
  Store,
  Compass,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Layers,
  ChevronRight,
  X,
  Sparkles,
  Users,
  Calendar,
  ShoppingBag,
  MessageSquare,
  FileText,
  Lock,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DetailedWing {
  id: string;
  code: string;
  name: string;
  banglaTitle: string;
  tagline: string;
  roleInBDSisters: string;
  stewards: string[];
  focusAreas: string[];
  keyInitiatives: string[];
  connectedPages: { name: string; url: string }[];
  statBadge: string;
  iconName: "Baby" | "BookOpen" | "PenTool" | "Store" | "Compass";
}

const ALL_WINGS: DetailedWing[] = [
  {
    id: "cop",
    code: "CoP",
    name: "Circle of Parents",
    banglaTitle: "সার্কেল অফ প্যারেন্টস (অভিভাবকত্ব ও তারবিয়াহ)",
    tagline: "Parenting & Homeschooling Discussions",
    roleInBDSisters: "Synergizes parenting circles, curriculum guidance, and child-rearing forums for intentional Islamic Tarbiyah.",
    stewards: ["Umm Zayd (Fitrah Nurture)", "Dr. Samina Hossain (Child Psychologist)"],
    focusAreas: [
      "Early Childhood Tarbiyah & Moral Foundation",
      "Urban Apartment Homeschooling Routines",
      "Screen-Mindful Montessori Sensory Exploration",
      "Sisterhood Toy & Book Swapping Circles",
    ],
    keyInitiatives: [
      "Preschool to Grade 5 Homeschooling Blueprints",
      "Montessori-Aligned Bangla & Arabic Activity Flashcards",
      "Monthly Virtual Motherhood Halaqahs",
    ],
    connectedPages: [
      { name: "Family & Parenting Forum", url: "/forums" },
      { name: "Homeschooling Kits Library", url: "/resources" },
    ],
    statBadge: "2,400+ Families Supported",
    iconName: "Baby",
  },
  {
    id: "tspp",
    code: "TSPP",
    name: "The Sacred Path Publications",
    banglaTitle: "দ্য সেক্রেড পাথ পাবলিকেশন্স (ইসলামিক সাহিত্য ও প্রকাশনা)",
    tagline: "Publications & Downloadable Resources",
    roleInBDSisters: "Distributes authentic Islamic literature, contemplation workbooks, calligraphy prints, and research papers.",
    stewards: ["Sister Ayesha Siddiqa (Qalam & Ink Studio)", "Editorial Board"],
    focusAreas: [
      "Authentic Islamic Ebooks & Reflective Literature",
      "Classical Arabic Calligraphy & Traditional Bookbinding",
      "Tadabbur Study Workbooks & Daily Habit Journals",
      "Open Access Scholarly Handouts with Zero Paywalls",
    ],
    keyInitiatives: [
      "30-Day Surah Al-Kahf Study Workbook",
      "Holistic Habit Compass & Islamic Development Framework",
      "Traditional Qalam & Manuscript Apprenticeships",
    ],
    connectedPages: [
      { name: "Curated Resource Treasury", url: "/resources" },
      { name: "Handbound Journals in Shop", url: "/shop" },
    ],
    statBadge: "12,000+ Downloads",
    iconName: "BookOpen",
  },
  {
    id: "midj",
    code: "MIDJ",
    name: "Muhsina Intellectual Dialogue & Journalism",
    banglaTitle: "মুহসিনা ইন্টেলেকচুয়াল ডায়ালগ অ্যান্ড জার্নালিজম (বৌদ্ধিক সংলাপ)",
    tagline: "Featured Contributors & Thought Leadership",
    roleInBDSisters: "Showcases opinion pieces, creative writing, investigative journalism, and academic essays by Muslim sisters.",
    stewards: ["Sister Sumayya (Lead Contributor)", "Editorial Advisory Board"],
    focusAreas: [
      "Analytical Commentary on Muslim Society & Culture",
      "Highlighting Muslim Female Scholarship in History",
      "Ethical Media Analysis & Fighting Algorithmic Toxicity",
      "Curating The Weekly Muhsina Sisterhood Digest",
    ],
    keyInitiatives: [
      "The Weekly Muhsina Sisterhood Newsletter",
      "Quarterly Intellectual Symposiums & Essays",
      "Sister Journalist Mentorship Fellowship",
    ],
    connectedPages: [
      { name: "Faith & Dialogue Forum", url: "/forums" },
      { name: "Sisterhood Newsletter Archive", url: "/" },
    ],
    statBadge: "850+ Published Essays",
    iconName: "PenTool",
  },
  {
    id: "hut",
    code: "The Hut Halal Network",
    name: "The Hut Halal Network",
    banglaTitle: "দ্য হাট হালাল নেটওয়ার্ক (কারিগর ও হালাল উৎপাদক গিল্ড)",
    tagline: "Vendor Registrations & Halal Artisan Guild",
    roleInBDSisters: "Empowers home-based makers, modesty couturiers, Sunnah herbal formulators, and women-led ethical suppliers.",
    stewards: ["Sister Nusrat Jahan (Rawdah Botanicals)", "Sister Tasnim Rahman (Haya & Co.)"],
    focusAreas: [
      "Fair Price Rule Certification (MRP Guarantee)",
      "ZiniPay Secured Instant Escrow Checkout",
      "Wholesale & Bulk Supply Distribution for Sister Startups",
      "Eco-Friendly Packaging & Reliable COD Courier Logistics",
    ],
    keyInitiatives: [
      "BDSisters Fair Price Standard Verification",
      "Halal Artisan Guild Directory & Showcase",
      "Nationwide Cottage Industry Vendor Network",
    ],
    connectedPages: [
      { name: "Halal E-Commerce Marketplace", url: "/shop" },
      { name: "Vendor Business Profiles", url: "/profiles" },
    ],
    statBadge: "150+ Verified Sister Brands",
    iconName: "Store",
  },
  {
    id: "imbd",
    code: "IMBD",
    name: "Islamic Mentorship & Capacity Building",
    banglaTitle: "ইসলামিক মেন্টরশিপ অ্যান্ড ক্যাপাসিটি বিল্ডিং (দক্ষতা উন্নয়ন)",
    tagline: "Sisterhood Skills & Development",
    roleInBDSisters: "Connects aspiring sisters with established role models for career guidance, vocational skill bars, and spiritual accountability.",
    stewards: ["Ustadha Hafsa (Tarteel Academy)", "Sister Sadia, ACA (Amanah Wealth)"],
    focusAreas: [
      "Vocational Skill Bars & Portfolio Benchmarking",
      "1-on-1 Quran Tajweed & Makharij Correction Cohorts",
      "Zakat & Halal Personal Financial Planning Roadmaps",
      "Skill Exchange & Barter Matching (Zero Money Barriers)",
    ],
    keyInitiatives: [
      "Interactive Sister Profile Engine & Dynamic Skill Bars",
      "Automated Annual Zakat Valuation Spreadsheet",
      "Sisterhood Skill Barter & Mutual Aid Circles",
    ],
    connectedPages: [
      { name: "Sister Profiles & Skill Bars", url: "/profiles" },
      { name: "Masterclasses & Workshops", url: "/events" },
    ],
    statBadge: "520+ Active Mentorships",
    iconName: "Compass",
  },
];

export default function WingsPage() {
  const [selectedWing, setSelectedWing] = useState<DetailedWing | null>(null);
  const [clickedButtonId, setClickedButtonId] = useState<string | null>(null);

  const getWingIcon = (iconName: string) => {
    switch (iconName) {
      case "Baby":
        return <Baby className="w-6 h-6 text-[#5B9891]" />;
      case "BookOpen":
        return <BookOpen className="w-6 h-6 text-[#D98408]" />;
      case "PenTool":
        return <PenTool className="w-6 h-6 text-[#5B9891]" />;
      case "Store":
        return <Store className="w-6 h-6 text-[#D98408]" />;
      case "Compass":
        return <Compass className="w-6 h-6 text-[#5B9891]" />;
      default:
        return <Layers className="w-6 h-6 text-[#111E28]" />;
    }
  };

  const handleButtonClick = (wingId: string, wing: DetailedWing) => {
    setClickedButtonId(wingId);
    setSelectedWing(wing);
    setTimeout(() => {
      setClickedButtonId(null);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#111E28]">
      {/* ========================================================= */}
      {/* 1. HERO & BREADCRUMB SECTION                               */}
      {/* ========================================================= */}
      <section className="bg-white border-b border-[#F7DFC7] pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 mb-6">
            <Link href="/" className="hover:text-[#5B9891] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="font-semibold text-[#111E28]">Sister Wings</span>
          </nav>

          {/* Heading */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7DFC7] text-[#111E28] text-xs font-bold tracking-wide uppercase mb-3 border border-[#F2B55D]/40">
                <Network className="w-3.5 h-3.5 text-[#5B9891]" />
                <span>Unified Umbrella of Muhsina Organization • 5 Autonomous Wings</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111E28] tracking-tight">
                Sister Wings: The Muhsina Ecosystem
              </h1>
              <p className="mt-3 text-base sm:text-lg text-stone-700 leading-relaxed">
                BDSisters acts as the central digital database synchronizing verified sister profiles, publications,
                artisanal markets, and mentorship across all specialized sister organizations under <strong>Muhsina Organization</strong>.
              </p>
            </div>

            {/* Quick Stat Badge */}
            <div className="flex items-center gap-3 bg-[#FAF8F5] p-3 sm:p-4 rounded-2xl border border-[#F7DFC7] shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-[#5B9891] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                5
              </div>
              <div>
                <p className="text-xs font-bold text-[#111E28]">Unified Wings</p>
                <p className="text-xs text-stone-600">Single Sign-On Database</p>
              </div>
            </div>
          </div>

          {/* Database Hub Central Callout (Loch Blue Banner) */}
          <div className="mt-8 rounded-3xl bg-[#5B9891] text-white p-6 sm:p-8 shadow-xl border border-[#477C76] relative overflow-hidden">
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
                syndicate across CoP, TSPP, MIDJ, The Hut, and IMBD without repeating tedious paperwork.
              </p>
            </div>

            {/* Decorative Monogram */}
            <div className="absolute right-4 -bottom-6 text-white/10 font-serif text-9xl font-black select-none pointer-events-none hidden sm:block">
              HUB
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. THE 5 AUTONOMOUS WINGS DETAILED GRID                    */}
      {/* ========================================================= */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_WINGS.map((wing) => {
              const isClicked = clickedButtonId === wing.id;

              return (
                <motion.div
                  key={wing.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="group bg-white rounded-3xl border border-[#F7DFC7] p-6 flex flex-col justify-between hover:shadow-md hover:border-[#5B9891]/40 transition-all duration-300"
                >
                  <div>
                    {/* Top Bar: Icon + Code Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#F7DFC7] shadow-2xs">
                        {getWingIcon(wing.iconName)}
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#F7DFC7] text-[#111E28] border border-[#F2B55D]/40">
                        {wing.code}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#111E28] group-hover:text-[#5B9891] transition-colors leading-snug">
                      {wing.name}
                    </h3>

                    {/* Bangla Subtitle */}
                    <p className="text-xs text-[#D98408] font-bold mt-1">
                      {wing.banglaTitle}
                    </p>

                    {/* Tagline */}
                    <p className="text-xs text-stone-500 font-medium mt-0.5">
                      {wing.tagline}
                    </p>

                    {/* Description */}
                    <p className="mt-3 text-xs text-stone-600 leading-relaxed">
                      {wing.roleInBDSisters}
                    </p>

                    {/* Focus Areas Bullets */}
                    <div className="mt-4 pt-3 border-t border-[#F7DFC7]/60 space-y-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">
                        Core Focus Areas:
                      </span>
                      {wing.focusAreas.slice(0, 2).map((focus, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs text-stone-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#5B9891] flex-shrink-0" />
                          <span className="line-clamp-1">{focus}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer: Left stat + Right Capsule Button with Rotating Arrow */}
                  <div className="mt-6 pt-3 border-t border-[#F7DFC7]/60 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-[#5B9891]">
                      {wing.statBadge}
                    </span>

                    <button
                      type="button"
                      onClick={() => handleButtonClick(wing.id, wing)}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#F7DFC7] hover:bg-[#F2B55D] text-[#111E28] transition-all duration-200 border border-[#F2B55D]/40 group/btn shadow-2xs"
                    >
                      <span>Explore Wing</span>
                      <span
                        className="inline-flex items-center justify-center transition-transform duration-300 ease-out"
                        style={{
                          transform: isClicked ? "rotate(0deg)" : "rotate(-45deg)",
                        }}
                      >
                        <ArrowRight className="w-3.5 h-3.5 text-[#111E28]" />
                      </span>
                    </button>
                  </div>
                </motion.div>
              );
            })}

            {/* Sixth Card: Cross-Wing Synergy Hub Overview */}
            <div className="bg-gradient-to-br from-[#FAF8F5] to-[#F7DFC7]/40 rounded-3xl border-2 border-dashed border-[#F2B55D] p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-white border border-[#F7DFC7] shadow-2xs">
                    <Sparkles className="w-6 h-6 text-[#D98408]" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#5B9891] text-white">
                    Unified Hub
                  </span>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#111E28]">
                  Cross-Wing Synergies
                </h3>
                <p className="text-xs text-[#D98408] font-bold mt-1">
                  সম্মিলিত উইং সমন্বয়
                </p>
                <p className="mt-3 text-xs text-stone-600 leading-relaxed">
                  Publications on TSPP, parenting discussions on CoP, artisan wares on The Hut, and articles on MIDJ
                  syndicate automatically into your verified BDSisters profile.
                </p>

                <div className="mt-4 pt-3 border-t border-[#F7DFC7] space-y-1.5 text-xs text-stone-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5B9891]" />
                    <span>Single KYC Verification Pipeline</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5B9891]" />
                    <span>Shared Halal Escrow via ZiniPay</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5B9891]" />
                    <span>Unified Calendar of Sister Gatherings</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[#F7DFC7] flex items-center justify-between">
                <span className="text-[11px] font-semibold text-stone-500">
                  5 Wings Connected
                </span>

                <Link
                  href="/who-we-are"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#D98408] text-white hover:bg-[#D98408]/90 transition-all shadow-2xs"
                >
                  <span>Muhsina Governance</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. WING LEADERSHIP & VOLUNTEER CALLOUT                     */}
      {/* ========================================================= */}
      <section className="py-16 bg-white border-t border-[#F7DFC7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#F7DFC7]/50 via-white to-[#F7DFC7]/30 border border-[#F7DFC7] flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xs">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5B9891]/15 text-[#5B9891] text-xs font-bold uppercase mb-3 border border-[#5B9891]/20">
                <Users className="w-3.5 h-3.5" />
                <span>Get Involved in Wing Initiatives</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111E28] tracking-tight">
                Serve as a Wing Volunteer or Sub-Committee Steward
              </h2>
              <p className="mt-2 text-sm sm:text-base text-stone-700 leading-relaxed">
                All 5 wings are led by devoted Muslim sisters volunteering their specialized vocational and
                scholarly skills. Apply to join an active sub-committee or propose an institutional partnership.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/who-we-are"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D98408] text-white font-bold text-xs hover:bg-[#D98408]/90 transition-all shadow-sm"
                >
                  <span>Apply to Volunteer</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="flex items-center gap-2 text-xs font-semibold text-stone-600">
                  <ShieldCheck className="w-4 h-4 text-[#5B9891]" />
                  <span>Transparent Islamic Governance</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#F7DFC7] shadow-xs text-xs space-y-3 w-full lg:w-80 flex-shrink-0">
              <h4 className="font-bold text-[#111E28] border-b border-[#F7DFC7] pb-2">
                Open Wing Roles:
              </h4>
              <ul className="space-y-2 text-stone-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5B9891]" />
                  <span>CoP Parenting Halaqah Moderator</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5B9891]" />
                  <span>TSPP Publication Editorial Reviewer</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5B9891]" />
                  <span>The Hut Artisan Onboarding Lead</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5B9891]" />
                  <span>IMBD Career & Skill Mentor</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. DETAILED WING EXPLORER MODAL                           */}
      {/* ========================================================= */}
      <AnimatePresence>
        {selectedWing && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              className="bg-white rounded-3xl max-w-lg w-full border border-[#F7DFC7] shadow-xl overflow-hidden flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-6 border-b border-[#F7DFC7] flex items-center justify-between bg-[#FAF8F5]">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#F7DFC7] text-[#111E28] border border-[#F2B55D]/40">
                    {selectedWing.code}
                  </span>
                  <span className="text-xs text-stone-500 font-medium">
                    Muhsina Autonomous Wing
                  </span>
                </div>
                <button
                  onClick={() => setSelectedWing(null)}
                  className="p-1.5 rounded-full hover:bg-stone-200 text-stone-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-4 text-xs overflow-y-auto max-h-[75vh]">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#111E28]">
                    {selectedWing.name}
                  </h3>
                  <p className="text-[#D98408] font-bold mt-0.5">
                    {selectedWing.banglaTitle}
                  </p>
                  <p className="text-stone-500 text-[11px] mt-0.5">
                    {selectedWing.tagline}
                  </p>
                </div>

                <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#F7DFC7] space-y-1 text-stone-700">
                  <span className="font-bold text-[#111E28] block">Lead Stewards & Coordinators:</span>
                  <ul className="space-y-0.5 text-stone-600">
                    {selectedWing.stewards.map((steward, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#5B9891]" />
                        <span>{steward}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-[#111E28] mb-1.5 uppercase tracking-wide text-[10px]">
                    Key Initiatives & Synergies
                  </h4>
                  <ul className="space-y-1.5 text-stone-600">
                    {selectedWing.keyInitiatives.map((init, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#5B9891] mt-0.5 flex-shrink-0" />
                        <span>{init}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 border-t border-[#F7DFC7]">
                  <h4 className="font-bold text-[#111E28] mb-2 uppercase tracking-wide text-[10px]">
                    Direct Platform Integrations
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedWing.connectedPages.map((page, idx) => (
                      <Link
                        key={idx}
                        href={page.url}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF8F5] hover:bg-[#F7DFC7] border border-[#F7DFC7] text-[#111E28] font-semibold text-xs transition-colors"
                      >
                        <span>{page.name}</span>
                        <ArrowRight className="w-3 h-3 text-[#5B9891]" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-[#F7DFC7] bg-[#FAF8F5] flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedWing(null)}
                  className="px-4 py-2 rounded-full border border-stone-300 text-xs font-bold text-stone-700 hover:bg-stone-100 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
