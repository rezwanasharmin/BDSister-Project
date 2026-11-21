"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  UserCheck,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Unlock,
  Download,
  Briefcase,
  Search,
  Sparkles,
  ArrowRight,
  Eye,
  MapPin,
  Mail,
  Phone,
  MessageSquare,
  Award,
  Layers,
  ChevronRight,
  Filter,
  X,
  Store,
  BookOpen,
  GraduationCap,
  ExternalLink,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SisterSkill {
  name: string;
  level: number; // percentage
}

interface SisterProfile {
  id: string;
  name: string;
  title: string;
  location: string;
  wing: "The Hut Halal Network" | "Circle of Parents" | "The Sacred Path Publications" | "Muhsina Intellectual Dialogue & Journalism" | "Islamic Mentorship & Capacity Building";
  wingCode: "The Hut" | "CoP" | "TSPP" | "MIDJ" | "IMBD";
  isVerifiedMember: boolean;
  profileType: "Personal Profile (Free)" | "Business Profile (Verified)";
  bio: string;
  brandName?: string;
  skills: SisterSkill[];
  interests: string[];
  avatarInitial: string;
  joinedYear: string;
  projectsCompleted: number;
}

const SISTER_DIRECTORY: SisterProfile[] = [
  {
    id: "sis-1",
    name: "Sister Nusrat Jahan",
    title: "Herbal Skincare Formulator & Founder",
    location: "Dhanmondi, Dhaka",
    wing: "The Hut Halal Network",
    wingCode: "The Hut",
    isVerifiedMember: true,
    profileType: "Business Profile (Verified)",
    bio: "Passionate herbalist specializing in steam-distilled organic rose floral mists, plant-based Sunnah cold-processed soaps, and cruelty-free wellness botanicals.",
    brandName: "Rawdah Botanicals",
    skills: [
      { name: "Organic Formulation", level: 95 },
      { name: "Halal Product Packaging", level: 88 },
      { name: "Vendor Logistics & Supply", level: 82 },
    ],
    interests: ["Sunnah Medicine", "Zero-Waste Lifestyle", "Local Artisan Crafts"],
    avatarInitial: "NJ",
    joinedYear: "2024",
    projectsCompleted: 48,
  },
  {
    id: "sis-2",
    name: "Umm Zayd",
    title: "Montessori & Islamic Tarbiyah Specialist",
    location: "Nasirabad, Chittagong",
    wing: "Circle of Parents",
    wingCode: "CoP",
    isVerifiedMember: true,
    profileType: "Business Profile (Verified)",
    bio: "Certified educator guiding Muslim mothers in blending child-centered Montessori exploration with prophetic character development and screen-free routines.",
    brandName: "Fitrah Nurture",
    skills: [
      { name: "Curriculum Design", level: 94 },
      { name: "Early Childhood Tarbiyah", level: 96 },
      { name: "Parent Coaching", level: 90 },
    ],
    interests: ["Homeschooling", "Arabic Tactile Play", "Sensory Development"],
    avatarInitial: "UZ",
    joinedYear: "2023",
    projectsCompleted: 62,
  },
  {
    id: "sis-3",
    name: "Sister Tasnim Rahman",
    title: "Modest Fashion Designer & Creative Director",
    location: "Uttara, Dhaka",
    wing: "The Hut Halal Network",
    wingCode: "The Hut",
    isVerifiedMember: true,
    profileType: "Business Profile (Verified)",
    bio: "Designing breathable chiffon hijabs, wudu-friendly tailored abayas, and modest travel wear suited for humid tropical climates.",
    brandName: "Haya & Co.",
    skills: [
      { name: "Textile Sourcing", level: 92 },
      { name: "Modest Garment Patterning", level: 90 },
      { name: "Brand Identity", level: 85 },
    ],
    interests: ["Ethical Fashion", "Sustainable Fabrics", "Sisterhood Mentorship"],
    avatarInitial: "TR",
    joinedYear: "2023",
    projectsCompleted: 85,
  },
  {
    id: "sis-4",
    name: "Sister Ayesha Siddiqa",
    title: "Islamic Calligrapher & Bookbinder",
    location: "Zindabazar, Sylhet",
    wing: "The Sacred Path Publications",
    wingCode: "TSPP",
    isVerifiedMember: true,
    profileType: "Business Profile (Verified)",
    bio: "Hand-binding bespoke reflection journals and crafting Thuluth and Diwani calligraphy art pieces for contemplative Muslim homes.",
    brandName: "Qalam & Ink Studio",
    skills: [
      { name: "Arabic Thuluth Calligraphy", level: 96 },
      { name: "Hand Bookbinding & Foil", level: 91 },
      { name: "Print Production", level: 84 },
    ],
    interests: ["Quranic Contemplation", "Traditional Arts", "Paper Preservation"],
    avatarInitial: "AS",
    joinedYear: "2024",
    projectsCompleted: 34,
  },
  {
    id: "sis-5",
    name: "Ustadha Hafsa Bint Tariq",
    title: "Quran Tajweed & Hifdh Mentor",
    location: "Mirpur, Dhaka",
    wing: "Islamic Mentorship & Capacity Building",
    wingCode: "IMBD",
    isVerifiedMember: true,
    profileType: "Personal Profile (Free)",
    bio: "Teaching sisters the science of Tajweed, Makharij vocal correction, and structured daily revision routines for memorizing the Quran with melody and understanding.",
    brandName: "Tarteel Sister Circle",
    skills: [
      { name: "Tajweed & Makharij Rules", level: 98 },
      { name: "Hifdh Coaching", level: 95 },
      { name: "Classical Arabic Grammar", level: 86 },
    ],
    interests: ["Qira'at Studies", "Youth Halaqahs", "Spiritual Accountability"],
    avatarInitial: "HB",
    joinedYear: "2022",
    projectsCompleted: 110,
  },
  {
    id: "sis-6",
    name: "Sister Sumayya",
    title: "Investigative Journalist & Essayist",
    location: "Boalia, Rajshahi",
    wing: "Muhsina Intellectual Dialogue & Journalism",
    wingCode: "MIDJ",
    isVerifiedMember: true,
    profileType: "Personal Profile (Free)",
    bio: "Writing analytical essays on Muslim family structures, ethical consumerism, and female scholarship in contemporary Islamic history.",
    brandName: "MIDJ Editorial",
    skills: [
      { name: "Research & Longform Essays", level: 95 },
      { name: "Content Editing", level: 92 },
      { name: "Interviewing & Media Ethics", level: 88 },
    ],
    interests: ["Islamic History", "Sociology of Family", "Literature"],
    avatarInitial: "SM",
    joinedYear: "2023",
    projectsCompleted: 42,
  },
  {
    id: "sis-7",
    name: "Sister Sadia, ACA",
    title: "Chartered Accountant & Halal Wealth Advisor",
    location: "Gulshan, Dhaka",
    wing: "Islamic Mentorship & Capacity Building",
    wingCode: "IMBD",
    isVerifiedMember: true,
    profileType: "Business Profile (Verified)",
    bio: "Helping sisters eliminate interest-bearing debt, calculate precise annual Zakat on multiple asset classes, and build ethical home budgets.",
    brandName: "Amanah Wealth",
    skills: [
      { name: "Zakat & Fiqh of Wealth", level: 96 },
      { name: "Financial Audit & Tax", level: 94 },
      { name: "Spreadsheet Automation", level: 90 },
    ],
    interests: ["Islamic Finance", "Micro-Investments", "Financial Literacy"],
    avatarInitial: "SA",
    joinedYear: "2024",
    projectsCompleted: 29,
  },
  {
    id: "sis-8",
    name: "Sister Humaira Akter",
    title: "Master Pattern Maker & Tailor",
    location: "Kandirpar, Comilla",
    wing: "The Hut Halal Network",
    wingCode: "The Hut",
    isVerifiedMember: true,
    profileType: "Business Profile (Verified)",
    bio: "Running a home cottage garment tailoring unit providing flexible employment and skill training to 8 local sister seamstresses.",
    brandName: "Al-Afiah Modesty",
    skills: [
      { name: "Garment Construction", level: 93 },
      { name: "Apparel Quality Control", level: 89 },
      { name: "Team Leadership", level: 87 },
    ],
    interests: ["Cottage Industries", "Vocational Training", "Mutual Aid"],
    avatarInitial: "HA",
    joinedYear: "2023",
    projectsCompleted: 56,
  },
];

type WingFilter = "All" | "The Hut" | "CoP" | "TSPP" | "MIDJ" | "IMBD";

export default function ProfilesPage() {
  const [activeWing, setActiveWing] = useState<WingFilter>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSister, setSelectedSister] = useState<SisterProfile | null>(null);
  const [clickedButtonId, setClickedButtonId] = useState<string | null>(null);

  // Field-level privacy simulator for modal
  const [revealedPhone, setRevealedPhone] = useState(false);
  const [revealedWhatsApp, setRevealedWhatsApp] = useState(false);

  // Filter sisters
  const filteredSisters = useMemo(() => {
    return SISTER_DIRECTORY.filter((sister) => {
      if (activeWing !== "All" && sister.wingCode !== activeWing) return false;
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchName = sister.name.toLowerCase().includes(q);
        const matchTitle = sister.title.toLowerCase().includes(q);
        const matchBio = sister.bio.toLowerCase().includes(q);
        const matchLocation = sister.location.toLowerCase().includes(q);
        const matchBrand = sister.brandName?.toLowerCase().includes(q);
        const matchSkill = sister.skills.some((s) => s.name.toLowerCase().includes(q));
        if (!matchName && !matchTitle && !matchBio && !matchLocation && !matchBrand && !matchSkill) return false;
      }
      return true;
    });
  }, [activeWing, searchQuery]);

  // Handle arrow button click animation
  const handleButtonClick = (sisterId: string, sister: SisterProfile) => {
    setClickedButtonId(sisterId);
    setSelectedSister(sister);
    setRevealedPhone(false);
    setRevealedWhatsApp(false);
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
            <span className="font-semibold text-[#111E28]">Sister Profiles</span>
          </nav>

          {/* Heading */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7DFC7] text-[#111E28] text-xs font-bold tracking-wide uppercase mb-3 border border-[#F2B55D]/40">
                <UserCheck className="w-3.5 h-3.5 text-[#5B9891]" />
                <span>Muhsina Unified Database • Vetted Member Profiles</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111E28] tracking-tight">
                Sister Profiles: Connect & Collaborate
              </h1>
              <p className="mt-3 text-base sm:text-lg text-stone-700 leading-relaxed">
                Explore verified profiles of Muslim sisters across education, arts, modest commerce, and
                mentorship. Protected with granular <strong>field-level privacy controls</strong> and strict female-only verification.
              </p>
            </div>

            {/* Quick Stat Badge */}
            <div className="flex items-center gap-3 bg-[#FAF8F5] p-3 sm:p-4 rounded-2xl border border-[#F7DFC7] shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-[#5B9891] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                100%
              </div>
              <div>
                <p className="text-xs font-bold text-[#111E28]">Female Admin Verified</p>
                <p className="text-xs text-stone-600">Encrypted NID verification</p>
              </div>
            </div>
          </div>

          {/* Privacy & Governance Features Bar */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-[#F7DFC7]/60 border border-[#F7DFC7] flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white text-[#5B9891] shadow-2xs">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#111E28]">Field-Level Privacy</h4>
                <p className="text-[11px] text-stone-600 mt-0.5">
                  Phone numbers and WhatsApp channels remain masked until sister approval.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F7DFC7]/60 border border-[#F7DFC7] flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white text-[#D98408] shadow-2xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#111E28]">Admin-Only NID Access</h4>
                <p className="text-[11px] text-stone-600 mt-0.5">
                  Identity documents are strictly accessible by female administrative stewards.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F7DFC7]/60 border border-[#F7DFC7] flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white text-[#5B9891] shadow-2xs">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#111E28]">Personal vs Business</h4>
                <p className="text-[11px] text-stone-600 mt-0.5">
                  Free Personal Profiles for community members & Paid verified brand portfolios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. FILTER & SEARCH CONTROLS                                */}
      {/* ========================================================= */}
      <section className="sticky top-20 z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#F7DFC7] py-4 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Wing Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none" role="tablist">
              {[
                { code: "All", label: "All Sisters" },
                { code: "The Hut", label: "The Hut (Makers)" },
                { code: "CoP", label: "CoP (Parenting)" },
                { code: "TSPP", label: "TSPP (Books)" },
                { code: "MIDJ", label: "MIDJ (Journalism)" },
                { code: "IMBD", label: "IMBD (Mentorship)" },
              ].map((tab) => {
                const count =
                  tab.code === "All"
                    ? SISTER_DIRECTORY.length
                    : SISTER_DIRECTORY.filter((i) => i.wingCode === tab.code).length;

                const isActive = activeWing === tab.code;

                return (
                  <button
                    key={tab.code}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveWing(tab.code as WingFilter)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                      isActive
                        ? "bg-[#5B9891] text-white shadow-sm border border-[#5B9891]"
                        : "bg-white text-stone-700 hover:bg-[#F7DFC7]/50 border border-[#F7DFC7]"
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                        isActive ? "bg-white/20 text-white" : "bg-stone-100 text-stone-600"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Live Search */}
            <div className="relative md:w-72">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, skill, district..."
                className="w-full pl-9 pr-3 py-2 text-xs rounded-full bg-white border border-[#F7DFC7] focus:outline-none focus:ring-2 focus:ring-[#5B9891] placeholder:text-stone-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. PROFILE CARDS DIRECTORY GRID                           */}
      {/* ========================================================= */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredSisters.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-[#F7DFC7] p-8 max-w-md mx-auto shadow-2xs">
              <div className="w-16 h-16 rounded-full bg-[#F7DFC7] text-[#D98408] flex items-center justify-center mx-auto mb-4">
                <UserCheck className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#111E28]">No sister profiles found</h3>
              <p className="mt-2 text-xs text-stone-600">
                No profiles match your active search or wing filter. Try resetting.
              </p>
              <button
                onClick={() => {
                  setActiveWing("All");
                  setSearchQuery("");
                }}
                className="mt-5 px-5 py-2 rounded-full bg-[#5B9891] text-white font-bold text-xs hover:bg-[#5B9891]/90 shadow-2xs transition-all"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSisters.map((sister) => {
                const isClicked = clickedButtonId === sister.id;

                return (
                  <motion.div
                    key={sister.id}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="group bg-white rounded-3xl border border-[#F7DFC7] p-6 flex flex-col justify-between hover:shadow-md hover:border-[#5B9891]/40 transition-all duration-300"
                  >
                    <div>
                      {/* Top Header: Avatar + Wing Badge */}
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-2xl bg-[#F7DFC7] border-2 border-[#F2B55D] text-[#D98408] flex items-center justify-center font-serif font-bold text-lg shadow-2xs">
                            {sister.avatarInitial}
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <h3 className="font-serif text-base font-bold text-[#111E28] group-hover:text-[#5B9891] transition-colors leading-snug">
                                {sister.name}
                              </h3>
                              {sister.isVerifiedMember && (
                                <span title="Verified Sister Member">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5B9891]" />
                                </span>
                              )}
                            </div>
                            <p className="text-xs font-medium text-stone-600 line-clamp-1">{sister.title}</p>
                          </div>
                        </div>

                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#FAF8F5] text-[#5B9891] border border-[#F7DFC7] shadow-2xs whitespace-nowrap">
                          {sister.wingCode}
                        </span>
                      </div>

                      {/* Location & Brand */}
                      <div className="flex items-center gap-3 text-[11px] text-stone-500 mb-3">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#D98408]" />
                          {sister.location}
                        </span>
                        {sister.brandName && (
                          <span className="flex items-center gap-1 font-semibold text-stone-700">
                            <Store className="w-3 h-3 text-[#5B9891]" />
                            {sister.brandName}
                          </span>
                        )}
                      </div>

                      {/* Bio */}
                      <p className="text-xs text-stone-600 leading-relaxed line-clamp-3 mb-4">
                        {sister.bio}
                      </p>

                      {/* Dynamic Vocational Skill Bars */}
                      <div className="space-y-2 pt-3 border-t border-[#F7DFC7]/60">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">
                          Verified Vocational Skills
                        </span>
                        {sister.skills.slice(0, 2).map((skill) => (
                          <div key={skill.name}>
                            <div className="flex justify-between text-[11px] mb-0.5">
                              <span className="text-stone-700 font-medium">{skill.name}</span>
                              <span className="text-[#D98408] font-bold">{skill.level}%</span>
                            </div>
                            <div className="w-full h-1.5 bg-[#FAF8F5] rounded-full overflow-hidden border border-[#F7DFC7]/60">
                              <div
                                className="h-full bg-[#5B9891] rounded-full"
                                style={{ width: `${skill.level}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer: Signature Capsule Button with Rotating Arrow */}
                    <div className="mt-5 pt-3 border-t border-[#F7DFC7]/60 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-[#5B9891]">
                        Member since {sister.joinedYear}
                      </span>

                      <button
                        type="button"
                        onClick={() => handleButtonClick(sister.id, sister)}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#F7DFC7] hover:bg-[#F2B55D] text-[#111E28] transition-all duration-200 border border-[#F2B55D]/40 group/btn shadow-2xs"
                      >
                        <span>View Profile</span>
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
            </div>
          )}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. JOIN & CREATE SISTER PROFILE CALLOUT                   */}
      {/* ========================================================= */}
      <section className="py-16 bg-white border-t border-[#F7DFC7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#F7DFC7]/50 via-white to-[#F7DFC7]/30 border border-[#F7DFC7] flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xs">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5B9891]/15 text-[#5B9891] text-xs font-bold uppercase mb-3 border border-[#5B9891]/20">
                <UserCheck className="w-3.5 h-3.5" />
                <span>Build Your Sister Identity</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111E28] tracking-tight">
                Create Your Verified Sister Profile Today
              </h2>
              <p className="mt-2 text-sm sm:text-base text-stone-700 leading-relaxed">
                Enjoy free personal profiles with sovereign field-level privacy controls, or register a verified
                business profile to showcase your brand, skills, and offerings to thousands of sisters.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/who-we-are"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D98408] text-white font-bold text-xs hover:bg-[#D98408]/90 transition-all shadow-sm"
                >
                  <span>Apply for Sister Verification</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="flex items-center gap-2 text-xs font-semibold text-stone-600">
                  <ShieldCheck className="w-4 h-4 text-[#5B9891]" />
                  <span>Free Personal Tier Available Always</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#F7DFC7] shadow-xs text-xs space-y-3 w-full lg:w-80 flex-shrink-0">
              <h4 className="font-bold text-[#111E28] border-b border-[#F7DFC7] pb-2">
                What you get with Verified Profile:
              </h4>
              <ul className="space-y-2 text-stone-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5B9891]" />
                  <span>Verified Sister Badge</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5B9891]" />
                  <span>Downloadable PDF CV / Card</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5B9891]" />
                  <span>Direct Barter & Skill Matching</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5B9891]" />
                  <span>The Hut Vendor Eligibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. FULL PROFILE MODAL WITH FIELD-LEVEL PRIVACY DEMO       */}
      {/* ========================================================= */}
      <AnimatePresence>
        {selectedSister && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              className="bg-white rounded-3xl max-w-2xl w-full border border-[#F7DFC7] shadow-xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-6 border-b border-[#F7DFC7] flex items-center justify-between bg-[#FAF8F5]">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#F7DFC7] text-[#111E28] border border-[#F2B55D]/40">
                    {selectedSister.profileType}
                  </span>
                  <span className="text-xs text-stone-500 font-medium">
                    Sister ID: {selectedSister.id}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedSister(null)}
                  className="p-1.5 rounded-full hover:bg-stone-200 text-stone-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto space-y-6">
                {/* Sister Identity Header */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#F7DFC7] border-2 border-[#F2B55D] text-[#D98408] flex items-center justify-center font-serif font-bold text-2xl shadow-sm flex-shrink-0">
                    {selectedSister.avatarInitial}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#111E28]">
                        {selectedSister.name}
                      </h2>
                      {selectedSister.isVerifiedMember && (
                        <CheckCircle2 className="w-4 h-4 text-[#5B9891]" />
                      )}
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-stone-600">
                      {selectedSister.title}
                    </p>
                    <p className="text-xs text-[#5B9891] font-semibold mt-0.5">
                      Affiliated with {selectedSister.wing} ({selectedSister.wingCode})
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#111E28] mb-1.5">
                    Sisterhood Biography & Mission
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed bg-[#FAF8F5] p-4 rounded-2xl border border-[#F7DFC7]">
                    {selectedSister.bio}
                  </p>
                </div>

                {/* Vocational Skill Bars */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#111E28] mb-2">
                    Verified Vocational Skill Proficiency
                  </h4>
                  <div className="space-y-2.5">
                    {selectedSister.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="font-semibold text-stone-700">{skill.name}</span>
                          <span className="font-bold text-[#D98408]">{skill.level}%</span>
                        </div>
                        <div className="w-full h-2 bg-[#FAF8F5] rounded-full overflow-hidden border border-[#F7DFC7]">
                          <div
                            className="h-full bg-[#5B9891] rounded-full"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Field-Level Privacy Demonstration */}
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#F7DFC7] space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#111E28]">
                      <Lock className="w-4 h-4 text-[#5B9891]" />
                      <span>Sovereign Field-Level Privacy Shield</span>
                    </div>
                    <span className="text-[10px] text-stone-500 font-semibold bg-white px-2 py-0.5 rounded-full border border-[#F7DFC7]">
                      Protected by Default
                    </span>
                  </div>

                  <p className="text-xs text-stone-600">
                    Contact details are never published openly. Click below to simulate sister-to-sister contact request.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {/* Phone field */}
                    <div className="p-3 bg-white rounded-xl border border-[#F7DFC7] flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-stone-500" />
                        <span className="text-stone-700 font-medium">
                          {revealedPhone ? "+880 1711-XXXXXX" : "+880 ••••••••••"}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setRevealedPhone(!revealedPhone)}
                        className="text-[11px] font-bold text-[#5B9891] hover:underline"
                      >
                        {revealedPhone ? "Hide" : "Request"}
                      </button>
                    </div>

                    {/* WhatsApp field */}
                    <div className="p-3 bg-white rounded-xl border border-[#F7DFC7] flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="w-3.5 h-3.5 text-stone-500" />
                        <span className="text-stone-700 font-medium">
                          {revealedWhatsApp ? "wa.me/8801711XXXXXX" : "wa.me/••••••••••"}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setRevealedWhatsApp(!revealedWhatsApp)}
                        className="text-[11px] font-bold text-[#D98408] hover:underline"
                      >
                        {revealedWhatsApp ? "Hide" : "Request"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-6 border-t border-[#F7DFC7] bg-[#FAF8F5] flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedSister(null)}
                  className="px-5 py-2.5 rounded-full border border-stone-300 text-xs font-bold text-stone-700 hover:bg-stone-100 transition-colors"
                >
                  Close Profile
                </button>

                <button
                  type="button"
                  onClick={() => alert(`Downloaded Sister CV summary card for ${selectedSister.name}`)}
                  className="px-5 py-2.5 rounded-full bg-[#5B9891] hover:bg-[#5B9891]/90 text-white text-xs font-bold shadow-2xs transition-all flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Profile Card (PDF)</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
