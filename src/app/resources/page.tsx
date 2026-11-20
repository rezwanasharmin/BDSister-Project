"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  BookOpen,
  FileDown,
  Video,
  FileSpreadsheet,
  Download,
  Search,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Eye,
  ChevronRight,
  Filter,
  X,
  Layers,
  FileText,
  Clock,
  Printer,
  ExternalLink,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ResourceFull {
  id: string;
  title: string;
  category: "PDF Guides & Ebooks" | "Parenting & Homeschool Kits" | "Business & Finance Spreadsheets" | "Vocational Video Lectures";
  type: "PDF Guide" | "Interactive Sheet" | "Video Lecture" | "Printable Kit";
  curatedBySister: string;
  wing: string;
  wingCode: "TSPP" | "CoP" | "The Hut" | "MIDJ" | "IMBD";
  downloadsOrReads: number;
  fileSizeOrDuration: string;
  description: string;
  tableOfContents: string[];
  tags: string[];
  isFeatured?: boolean;
}

const ALL_RESOURCES: ResourceFull[] = [
  {
    id: "res-1",
    title: "The Holistic Islamic Development Framework: Sister's Habit Compass",
    category: "PDF Guides & Ebooks",
    type: "PDF Guide",
    curatedBySister: "Editorial Board, BDSisters & IMBD",
    wing: "Islamic Mentorship & Capacity Building",
    wingCode: "IMBD",
    downloadsOrReads: 1420,
    fileSizeOrDuration: "2.4 MB (Printable PDF)",
    description: "A comprehensive daily and weekly self-development matrix balancing spiritual devotions (Salah, Quran, Dhikr), household harmony, physical energy, and vocational barakah.",
    tableOfContents: [
      "The 80/20 Spiritual Micro-Habit Framework",
      "Islamized Wheel of Life Self-Assessment Grid",
      "Morning & Evening Adhkar Printable Checklists",
      "Quarterly Reflection & Barakah Audit Guide",
    ],
    tags: ["#Barakah", "#SpiritualHabits", "#SelfDevelopment", "#IMBD"],
    isFeatured: true,
  },
  {
    id: "res-2",
    title: "Halal Business Compliance Checklist & Fair MRP Calculation Guide",
    category: "Business & Finance Spreadsheets",
    type: "Interactive Sheet",
    curatedBySister: "The Hut Network Commerce Team",
    wing: "The Hut Halal Network",
    wingCode: "The Hut",
    downloadsOrReads: 980,
    fileSizeOrDuration: "Google Sheets / Excel Template",
    description: "An automated pricing calculator for home-based sister artisans. Input raw material costs, packaging, and hourly labor to automatically generate equitable retail and wholesale prices.",
    tableOfContents: [
      "Cost of Goods Sold (COGS) Formula Breakdown",
      "BDSisters Fair Price Policy Guidelines",
      "Wholesale Multiplier & Bulk MOQ Estimator",
      "Courier Return Margin Buffer Calculator",
    ],
    tags: ["#HalalBusiness", "#FairPricing", "#Spreadsheet", "#TheHut"],
    isFeatured: true,
  },
  {
    id: "res-3",
    title: "Preschool to Grade 5 Homeschooling Routine Blueprints & Activity Kits",
    category: "Parenting & Homeschool Kits",
    type: "Printable Kit",
    curatedBySister: "Circle of Parents (CoP)",
    wing: "Circle of Parents",
    wingCode: "CoP",
    downloadsOrReads: 2310,
    fileSizeOrDuration: "5.1 MB (Full Printable Kit)",
    description: "Structured daily schedules for urban apartment homeschooling. Blends child-centered Montessori exploration with prophetic character stories, nature journaling, and sensory tactile play.",
    tableOfContents: [
      "Age-by-Age Daily Rhythm Schedules (Ages 3-10)",
      "Screen-Free Rainy Day Indoor Activity Index",
      "Montessori Sensory Bins with Kitchen Ingredients",
      "Weekly Tarbiyah Quran Contemplation Prompts",
    ],
    tags: ["#Homeschooling", "#Montessori", "#CircleOfParents", "#ScreenFree"],
    isFeatured: true,
  },
  {
    id: "res-4",
    title: "Mastering Vocational Skill Bars & Professional Portfolio Presentation",
    category: "Vocational Video Lectures",
    type: "Video Lecture",
    curatedBySister: "Sister A. Siddiqa (Tech Wing)",
    wing: "The Sacred Path Publications",
    wingCode: "TSPP",
    downloadsOrReads: 1840,
    fileSizeOrDuration: "42 Mins Video + Presentation Deck",
    description: "Video masterclass teaching sisters how to benchmark their vocational skills, build a high-converting profile card, and prepare an elegant PDF portfolio for clients.",
    tableOfContents: [
      "Defining Your Core Vocational Competencies",
      "Sovereign Field-Level Privacy in Professional Networking",
      "Exporting Clean Digital CVs via BDSisters Engine",
      "Sister-to-Sister Barter & Skill Matching",
    ],
    tags: ["#VocationalSkills", "#Portfolio", "#VideoClass", "#TechWing"],
  },
  {
    id: "res-5",
    title: "Automated Annual Zakat & Halal Asset Valuation Spreadsheet",
    category: "Business & Finance Spreadsheets",
    type: "Interactive Sheet",
    curatedBySister: "Sister Sadia, ACA (Amanah Wealth)",
    wing: "Islamic Mentorship & Capacity Building",
    wingCode: "IMBD",
    downloadsOrReads: 1650,
    fileSizeOrDuration: "Excel / Google Sheets Template",
    description: "Dynamic financial spreadsheet with live Nisab gold/silver input. Calculates accurate annual Zakat across personal savings, gold jewelry, business inventory, and provident funds.",
    tableOfContents: [
      "Current Nisab Benchmark Input Sheet",
      "Gold & Silver Karat Weight Calculator",
      "Business Trade Inventory & Accounts Receivable",
      "Deductible Liabilities & Final Zakat Due",
    ],
    tags: ["#ZakatCalculator", "#IslamicFinance", "#ExcelTemplate", "#Amanah"],
  },
  {
    id: "res-6",
    title: "Tadabbur Quran Journal: 30-Day Surah Al-Kahf Study Workbook",
    category: "PDF Guides & Ebooks",
    type: "PDF Guide",
    curatedBySister: "Editorial Board, MIDJ & TSPP",
    wing: "Muhsina Intellectual Dialogue & Journalism",
    wingCode: "MIDJ",
    downloadsOrReads: 1190,
    fileSizeOrDuration: "3.8 MB (Printable Workbook)",
    description: "A printable 30-day journaling workbook focusing on the linguistic gems, thematic links, and ethical leadership principles of Surah Al-Kahf.",
    tableOfContents: [
      "Day 1-7: The Cave & Preserving Faith in Modernity",
      "Day 8-15: The Two Gardens & True Barakah vs Mirage",
      "Day 16-22: Musa & Khidr - Embracing Divine Wisdom",
      "Day 23-30: Dhul-Qarnayn - Justice, Power & Humility",
    ],
    tags: ["#SurahKahf", "#Tadabbur", "#Workbook", "#MIDJ"],
  },
  {
    id: "res-7",
    title: "Montessori-Aligned Bangla & Arabic Alphabet Sensory Flashcards",
    category: "Parenting & Homeschool Kits",
    type: "Printable Kit",
    curatedBySister: "Umm Zayd (Fitrah Nurture)",
    wing: "Circle of Parents",
    wingCode: "CoP",
    downloadsOrReads: 2890,
    fileSizeOrDuration: "4.2 MB (Print & Cut Cards)",
    description: "High-resolution printable flashcards featuring textured stroke guidelines for both Bangla letters and Arabic Makharij articulation points for early learners.",
    tableOfContents: [
      "28 Arabic Alphabet Tactile Sandpaper Cards",
      "Bangla Bornomala Sensory Tracing Sheets",
      "Color-Coded Vowel & Harakat Cards",
      "Lamination & Ring-Binding Instructions",
    ],
    tags: ["#Flashcards", "#ArabicLearning", "#BanglaAlphabets", "#CoP"],
  },
  {
    id: "res-8",
    title: "The Halal Home Apothecary: Sunnah Prophetic Herbs Reference Guide",
    category: "PDF Guides & Ebooks",
    type: "PDF Guide",
    curatedBySister: "Sister Nusrat Jahan (Rawdah Botanicals)",
    wing: "The Hut Halal Network",
    wingCode: "The Hut",
    downloadsOrReads: 1540,
    fileSizeOrDuration: "1.8 MB (Handy Pocket Guide)",
    description: "An illustrated reference guide to black seed, raw honey, olive leaf, costus root (Qist al-Hindi), and sidr leaves with traditional preparation recipes.",
    tableOfContents: [
      "Prophetic Medicine Hadith Citations & Fiqh",
      "Black Seed Infusion Proportions for Children & Adults",
      "Steam Inhalation Blends for Seasonal Respiratory Care",
      "Ethical Sourcing Guide for Indigenous BD Herbs",
    ],
    tags: ["#SunnahHealth", "#Herbalism", "#RawdahBotanicals", "#TheHut"],
  },
  {
    id: "res-9",
    title: "Modest Garment Sizing & Patterning Standards Manual for Bangladeshi Climate",
    category: "PDF Guides & Ebooks",
    type: "PDF Guide",
    curatedBySister: "Sister Tasnim Rahman (Haya & Co.)",
    wing: "The Hut Halal Network",
    wingCode: "The Hut",
    downloadsOrReads: 870,
    fileSizeOrDuration: "2.9 MB (Illustrated Manual)",
    description: "Standardized size charts and wudu-friendly cuff patterns developed specifically for modest apparel designers and cottage seamstresses in Bangladesh.",
    tableOfContents: [
      "Standard Asian Abaya & Maxi Dress Sizing Chart",
      "Wudu-Friendly Hidden Zipper Pattern Specifications",
      "Fabric Breathability Index for Tropical Climates",
      "Quality Inspection Checklist for Cottage Workshops",
    ],
    tags: ["#ModestFashion", "#PatternMaking", "#AbayaSizing", "#TheHut"],
  },
  {
    id: "res-10",
    title: "The Sister Entrepreneur's COD & Courier Logistics Playbook",
    category: "Business & Finance Spreadsheets",
    type: "PDF Guide",
    curatedBySister: "Sister Farzana Haque (The Hut Network)",
    wing: "The Hut Halal Network",
    wingCode: "The Hut",
    downloadsOrReads: 1120,
    fileSizeOrDuration: "1.5 MB (Quick Strategy Guide)",
    description: "A battle-tested playbook on selecting couriers, reducing return parcel rates, handling customer tracking inquiries, and automating cash settlements.",
    tableOfContents: [
      "Courier Performance Comparison Matrix (Dhaka & Outside)",
      "Pre-Dispatch Verification Call Scripts",
      "Packaging Guidelines for Fragile Glass Bottles",
      "Resolving Damaged Parcel Claims with Couriers",
    ],
    tags: ["#CourierBD", "#EcommerceLogistics", "#CODManagement", "#TheHut"],
  },
];

type CategoryFilter = "All" | "PDF Guides & Ebooks" | "Parenting & Homeschool Kits" | "Business & Finance Spreadsheets" | "Vocational Video Lectures";

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const [selectedWing, setSelectedWing] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedResource, setSelectedResource] = useState<ResourceFull | null>(null);
  const [clickedButtonId, setClickedButtonId] = useState<string | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Filter resources
  const filteredResources = useMemo(() => {
    return ALL_RESOURCES.filter((res) => {
      if (activeCategory !== "All" && res.category !== activeCategory) return false;
      if (selectedWing !== "All" && res.wingCode !== selectedWing) return false;
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchTitle = res.title.toLowerCase().includes(q);
        const matchAuthor = res.curatedBySister.toLowerCase().includes(q);
        const matchDesc = res.description.toLowerCase().includes(q);
        const matchTag = res.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchTitle && !matchAuthor && !matchDesc && !matchTag) return false;
      }
      return true;
    });
  }, [activeCategory, selectedWing, searchQuery]);

  // Handle arrow button click animation
  const handleButtonClick = (resId: string, res: ResourceFull) => {
    setClickedButtonId(resId);
    setSelectedResource(res);
    setDownloadSuccess(false);
    setTimeout(() => {
      setClickedButtonId(null);
    }, 400);
  };

  const getFormatIcon = (type: string) => {
    switch (type) {
      case "PDF Guide":
        return <FileDown className="w-5 h-5 text-[#5B9891]" />;
      case "Interactive Sheet":
        return <FileSpreadsheet className="w-5 h-5 text-[#D98408]" />;
      case "Video Lecture":
        return <Video className="w-5 h-5 text-[#5B9891]" />;
      case "Printable Kit":
        return <Printer className="w-5 h-5 text-[#D98408]" />;
      default:
        return <BookOpen className="w-5 h-5 text-[#111E28]" />;
    }
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
            <span className="font-semibold text-[#111E28]">Resource Library</span>
          </nav>

          {/* Header Title with Bismillah Callout */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7DFC7] text-[#111E28] text-xs font-bold tracking-wide uppercase mb-3 border border-[#F2B55D]/40">
                <BookOpen className="w-3.5 h-3.5 text-[#5B9891]" />
                <span>Knowledge Treasury & TSPP Publications • 100% Free Access</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111E28] tracking-tight">
                Curated Resource Library
              </h1>
              <p className="mt-3 text-base sm:text-lg text-stone-700 leading-relaxed">
                An open treasury of authentic Islamic guides, parenting blueprints, halal business toolkits,
                and vocational lecture decks. Curated by verified sisters across all <strong>Muhsina Organization wings</strong>.
              </p>
            </div>

            {/* Quick Stat Badge */}
            <div className="flex items-center gap-3 bg-[#FAF8F5] p-3 sm:p-4 rounded-2xl border border-[#F7DFC7] shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-[#5B9891] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                100%
              </div>
              <div>
                <p className="text-xs font-bold text-[#111E28]">Open Knowledge</p>
                <p className="text-xs text-stone-600">Zero paywalls for sisters</p>
              </div>
            </div>
          </div>

          {/* Pillars Bar */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-[#F7DFC7]/60 border border-[#F7DFC7] flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white text-[#5B9891] shadow-2xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#111E28]">Peer-Reviewed Quality</h4>
                <p className="text-[11px] text-stone-600 mt-0.5">
                  Every guide is vetted by educators, scholars, and vocational specialists.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F7DFC7]/60 border border-[#F7DFC7] flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white text-[#D98408] shadow-2xs">
                <FileDown className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#111E28]">Ready to Print & Use</h4>
                <p className="text-[11px] text-stone-600 mt-0.5">
                  High-resolution PDFs and pre-formulated spreadsheets for instant application.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F7DFC7]/60 border border-[#F7DFC7] flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white text-[#5B9891] shadow-2xs">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#111E28]">Direct Wing Synergies</h4>
                <p className="text-[11px] text-stone-600 mt-0.5">
                  Materials originated directly from CoP, TSPP, MIDJ, and The Hut Network.
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
            {/* Category Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none" role="tablist">
              {[
                { key: "All", label: "All Resources" },
                { key: "PDF Guides & Ebooks", label: "PDF Guides & Ebooks" },
                { key: "Parenting & Homeschool Kits", label: "Parenting & CoP" },
                { key: "Business & Finance Spreadsheets", label: "Business & Spreadsheets" },
                { key: "Vocational Video Lectures", label: "Video Lectures" },
              ].map((tab) => {
                const count =
                  tab.key === "All"
                    ? ALL_RESOURCES.length
                    : ALL_RESOURCES.filter((i) => i.category === tab.key).length;

                const isActive = activeCategory === tab.key;

                return (
                  <button
                    key={tab.key}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(tab.key as CategoryFilter)}
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
                placeholder="Search guides, spreadsheets, tags..."
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

          {/* Wing Sub-Filter Pills */}
          <div className="mt-3 flex items-center gap-2 overflow-x-auto pb-1 text-xs scrollbar-none">
            <span className="text-stone-500 font-medium text-[11px] whitespace-nowrap">
              Curated by Wing:
            </span>
            {["All", "TSPP", "CoP", "The Hut", "IMBD", "MIDJ"].map((w) => {
              const isSelected = selectedWing === w;
              return (
                <button
                  key={w}
                  onClick={() => setSelectedWing(w)}
                  className={`px-3 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all ${
                    isSelected
                      ? "bg-[#D98408] text-white shadow-2xs"
                      : "bg-[#F7DFC7]/40 text-stone-700 hover:bg-[#F7DFC7] border border-[#F7DFC7]/60"
                  }`}
                >
                  {w === "All" ? "All Wings" : w}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. RESOURCES GRID CARDS                                   */}
      {/* ========================================================= */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredResources.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-[#F7DFC7] p-8 max-w-md mx-auto shadow-2xs">
              <div className="w-16 h-16 rounded-full bg-[#F7DFC7] text-[#D98408] flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#111E28]">No resources found</h3>
              <p className="mt-2 text-xs text-stone-600">
                No guides or spreadsheets match your filter or search query.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSelectedWing("All");
                  setSearchQuery("");
                }}
                className="mt-5 px-5 py-2 rounded-full bg-[#5B9891] text-white font-bold text-xs hover:bg-[#5B9891]/90 shadow-2xs transition-all"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((res) => {
                const isClicked = clickedButtonId === res.id;

                return (
                  <motion.div
                    key={res.id}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="group bg-white rounded-3xl border border-[#F7DFC7] p-6 flex flex-col justify-between hover:shadow-md hover:border-[#5B9891]/40 transition-all duration-300"
                  >
                    <div>
                      {/* Top Bar: Format Icon + Type Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-2.5 rounded-2xl bg-[#FAF8F5] border border-[#F7DFC7] shadow-2xs">
                          {getFormatIcon(res.type)}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#F7DFC7] text-[#111E28] border border-[#F2B55D]/40">
                            {res.wingCode}
                          </span>
                          <span className="text-[11px] font-bold text-[#5B9891]">
                            {res.type}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-base sm:text-lg font-bold text-[#111E28] group-hover:text-[#5B9891] transition-colors leading-snug">
                        {res.title}
                      </h3>

                      {/* Author / Wing */}
                      <p className="text-xs text-stone-500 mt-1">
                        Curated by <span className="font-semibold text-stone-700">{res.curatedBySister}</span>
                      </p>

                      {/* Description */}
                      <p className="mt-3 text-xs text-stone-600 leading-relaxed line-clamp-3">
                        {res.description}
                      </p>

                      {/* File Details Box */}
                      <div className="mt-4 p-3 rounded-2xl bg-[#FAF8F5] border border-[#F7DFC7] flex items-center justify-between text-xs text-stone-600">
                        <span className="font-medium">{res.fileSizeOrDuration}</span>
                        <span className="font-bold text-[#D98408]">
                          {res.downloadsOrReads.toLocaleString()} downloads
                        </span>
                      </div>
                    </div>

                    {/* Card Footer: Signature Capsule Button with Rotating Arrow */}
                    <div className="mt-5 pt-3 border-t border-[#F7DFC7]/60 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-[#5B9891] flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Free Community Download
                      </span>

                      <button
                        type="button"
                        onClick={() => handleButtonClick(res.id, res)}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#F7DFC7] hover:bg-[#F2B55D] text-[#111E28] transition-all duration-200 border border-[#F2B55D]/40 group/btn shadow-2xs"
                      >
                        <span>Download Kit</span>
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
      {/* 4. SUBMIT A RESOURCE CALLOUT (TSPP Synergy)                */}
      {/* ========================================================= */}
      <section className="py-16 bg-white border-t border-[#F7DFC7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#F7DFC7]/50 via-white to-[#F7DFC7]/30 border border-[#F7DFC7] flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xs">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5B9891]/15 text-[#5B9891] text-xs font-bold uppercase mb-3 border border-[#5B9891]/20">
                <BookOpen className="w-3.5 h-3.5" />
                <span>TSPP Publications • Sister Contributors</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111E28] tracking-tight">
                Author or Curate a Sisterhood Resource
              </h2>
              <p className="mt-2 text-sm sm:text-base text-stone-700 leading-relaxed">
                Have you authored an authentic Islamic guide, designed a homeschooling syllabus, or formulated
                a halal business spreadsheet? Submit your work to The Sacred Path Publications (TSPP) for community distribution.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/who-we-are"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D98408] text-white font-bold text-xs hover:bg-[#D98408]/90 transition-all shadow-sm"
                >
                  <span>Submit to TSPP Editorial</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="flex items-center gap-2 text-xs font-semibold text-stone-600">
                  <ShieldCheck className="w-4 h-4 text-[#5B9891]" />
                  <span>Full Author Attribution & Barakah Sadaqah Jariyah</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#F7DFC7] shadow-xs text-xs space-y-3 w-full lg:w-80 flex-shrink-0">
              <h4 className="font-bold text-[#111E28] border-b border-[#F7DFC7] pb-2">
                Accepted Resource Formats:
              </h4>
              <ul className="space-y-2 text-stone-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5B9891]" />
                  <span>PDF Guides & Contemplation Ebooks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5B9891]" />
                  <span>Printable Homeschooling Kits (CoP)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5B9891]" />
                  <span>Halal Excel Financial Templates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5B9891]" />
                  <span>Vocational Video Masterclass Decks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. RESOURCE DOWNLOAD & DETAILS MODAL                       */}
      {/* ========================================================= */}
      <AnimatePresence>
        {selectedResource && (
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
                    {selectedResource.wingCode}
                  </span>
                  <span className="text-xs text-stone-500 font-medium">
                    {selectedResource.type}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedResource(null)}
                  className="p-1.5 rounded-full hover:bg-stone-200 text-stone-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-4 text-xs overflow-y-auto max-h-[75vh]">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#111E28]">
                    {selectedResource.title}
                  </h3>
                  <p className="text-stone-600 mt-1">
                    Curated by <strong>{selectedResource.curatedBySister}</strong> ({selectedResource.wing})
                  </p>
                </div>

                <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#F7DFC7] flex items-center justify-between text-stone-700">
                  <span className="font-semibold">{selectedResource.fileSizeOrDuration}</span>
                  <span className="text-[#D98408] font-bold">
                    {selectedResource.downloadsOrReads.toLocaleString()} total downloads
                  </span>
                </div>

                <div>
                  <h4 className="font-bold text-[#111E28] mb-1.5 uppercase tracking-wide text-[10px]">
                    Description & Learning Objectives
                  </h4>
                  <p className="text-stone-700 leading-relaxed">
                    {selectedResource.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#111E28] mb-1.5 uppercase tracking-wide text-[10px]">
                    Included Sections & Handouts
                  </h4>
                  <ul className="space-y-1.5 text-stone-600">
                    {selectedResource.tableOfContents.map((section, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#5B9891] mt-0.5 flex-shrink-0" />
                        <span>{section}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {downloadSuccess ? (
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center space-y-2">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto" />
                    <h5 className="font-bold text-xs">Download Initiated!</h5>
                    <p className="text-[11px] text-emerald-700">
                      Your file has been prepared. Thank you for utilizing the Muhsina Sisterhood Treasury.
                    </p>
                  </div>
                ) : (
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setDownloadSuccess(true)}
                      className="w-full py-3 rounded-full bg-[#D98408] hover:bg-[#D98408]/90 text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download File Instantly (Free)</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-[#F7DFC7] bg-[#FAF8F5] flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedResource(null)}
                  className="px-4 py-2 rounded-full border border-stone-300 text-xs font-bold text-stone-700 hover:bg-stone-100 transition-colors"
                >
                  Close Reader
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
