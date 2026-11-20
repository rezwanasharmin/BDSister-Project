"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  User,
  Ticket,
  Video,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Search,
  Sparkles,
  MapPin,
  ChevronRight,
  X,
  Share2,
  Layers,
  Heart,
  CalendarPlus,
  PlayCircle,
  FileText,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface EventItemFull {
  id: string;
  title: string;
  wing: string;
  wingCode: "MIDJ" | "The Hut" | "CoP" | "IMBD" | "TSPP";
  date: string;
  time: string;
  type: "Sisterhood Halaqah" | "Business Masterclass" | "Online Workshop" | "Skill Sharing";
  speaker: string;
  speakerRole: string;
  seatsLeft: number;
  totalSeats: number;
  isFree: boolean;
  price?: number;
  location: string;
  description: string;
  keyTopics: string[];
  isPast?: boolean;
}

const ALL_EVENTS: EventItemFull[] = [
  {
    id: "event-1",
    title: "Tadabbur for Busy Sisters: Connecting with Surah Al-Kahf",
    wing: "MIDJ Journalism & Dialogue Wing",
    wingCode: "MIDJ",
    date: "Saturday, 28 Nov 2026",
    time: "4:00 PM - 5:30 PM (BST)",
    type: "Sisterhood Halaqah",
    speaker: "Ustadha Rubaba Khan",
    speakerRole: "Islamic Scholar & Quran Contemplation Teacher",
    seatsLeft: 14,
    totalSeats: 100,
    isFree: true,
    location: "Live via Zoom (Private Link)",
    description: "An intimate contemplation circle exploring the 4 stories of Surah Al-Kahf with practical applications for personal resilience, Barakah, and guarding the heart in times of consumer distraction.",
    keyTopics: [
      "The Youth of the Cave: Guarding Faith in Modernity",
      "The Two Gardens: Antidote to Materialistic Pride",
      "Musa & Khidr: Patience with Unfolding Qadr",
      "Dhul-Qarnayn: Power Married with Humility & Justice",
    ],
  },
  {
    id: "event-2",
    title: "Halal E-Commerce Masterclass: From Home Kitchen to Brand Registry",
    wing: "The Hut Halal Network",
    wingCode: "The Hut",
    date: "Friday, 04 Dec 2026",
    time: "7:30 PM - 9:30 PM (BST)",
    type: "Business Masterclass",
    speaker: "Sister Farzana Haque",
    speakerRole: "E-Commerce Founder & BDSisters Vendor Lead",
    seatsLeft: 8,
    totalSeats: 50,
    isFree: false,
    price: 500,
    location: "Live Interactive Masterclass (Recording provided)",
    description: "Step-by-step masterclass for home-based maker sisters on packaging aesthetics, calculating fair MRP, BSTI/trade license navigation, and courier COD logistics.",
    keyTopics: [
      "Cost of Goods Sold (COGS) & Fair Pricing Formula",
      "Eco-Friendly Packaging Sourcing in Bangladesh",
      "Managing Return Orders & Cash-on-Delivery (COD)",
      "BDSisters Verified Vendor Certification",
    ],
  },
  {
    id: "event-3",
    title: "Parenting in the Digital Era: Building Children's Moral Immune System",
    wing: "Circle of Parents (CoP)",
    wingCode: "CoP",
    date: "Sunday, 13 Dec 2026",
    time: "10:30 AM - 12:30 PM (BST)",
    type: "Online Workshop",
    speaker: "Dr. Samina Hossain",
    speakerRole: "Child Psychologist & Tarbiyah Consultant",
    seatsLeft: 22,
    totalSeats: 120,
    isFree: true,
    location: "Live via Zoom + CoP Q&A Circle",
    description: "Equipping mothers with psychological and spiritual tools to nurture resilient, screen-mindful children who find joy in real-world tactile exploration and authentic Islamic identity.",
    keyTopics: [
      "Dopamine Management & Screen-Free Routines",
      "Teaching Haya & Critical Thinking Regarding Online Media",
      "Age-Appropriate Islamic Habit Trackers",
      "Open Parent Q&A Session with Dr. Samina",
    ],
  },
  {
    id: "event-4",
    title: "Vocational Design Sprint: Figma & Modest Brand Packaging Essentials",
    wing: "Islamic Mentorship & Capacity Building",
    wingCode: "IMBD",
    date: "Saturday, 19 Dec 2026",
    time: "3:00 PM - 5:00 PM (BST)",
    type: "Skill Sharing",
    speaker: "Sister Samira K.",
    speakerRole: "Senior UI & Packaging Designer",
    seatsLeft: 12,
    totalSeats: 40,
    isFree: true,
    location: "Hands-on Online Workshop",
    description: "A fast-paced vocational tutorial teaching beginner sisters how to use Figma for designing jar labels, hijab tags, and elegant thank-you cards without expensive software licenses.",
    keyTopics: [
      "Figma Workspace Setup & Grid System",
      "Color Harmonies & Halal Typography Choices",
      "Preparing Print-Ready CMYK PDF Files",
      "Free Template Library Download Included",
    ],
  },
  {
    id: "event-5",
    title: "Annual Zakat & Halal Asset Calculation Workshop",
    wing: "Islamic Mentorship & Capacity Building",
    wingCode: "IMBD",
    date: "Tuesday, 22 Dec 2026",
    time: "8:00 PM - 9:30 PM (BST)",
    type: "Online Workshop",
    speaker: "Sister Sadia, ACA",
    speakerRole: "Chartered Accountant & Wealth Advisor",
    seatsLeft: 30,
    totalSeats: 150,
    isFree: false,
    price: 300,
    location: "Live Webinar + Automated Excel Calculator",
    description: "Clear, authoritative breakdown of Zakat calculation across gold jewelry, cash savings, business inventory, provident funds, and joint family accounts according to Islamic jurisprudence.",
    keyTopics: [
      "Determining Nisab with Current Gold/Silver Rates",
      "Zakat on Personal Adornment vs Commercial Jewelry",
      "Deducting Short-Term vs Long-Term Business Liabilities",
      "Live Calculation Walkthrough with Participant Scenarios",
    ],
  },
  {
    id: "event-6",
    title: "Authentic Arabic Calligraphy & Manuscript Restoration Intro",
    wing: "The Sacred Path Publications",
    wingCode: "TSPP",
    date: "Friday, 08 Jan 2027",
    time: "4:30 PM - 6:00 PM (BST)",
    type: "Skill Sharing",
    speaker: "Sister Ayesha Siddiqa",
    speakerRole: "Master Calligrapher, Qalam & Ink Studio",
    seatsLeft: 16,
    totalSeats: 45,
    isFree: true,
    location: "Live Virtual Studio Session",
    description: "Learn the foundational sacred geometry of the Qalam, traditional ink preparation with soot and gum arabic, and contemplative Diwani script strokes.",
    keyTopics: [
      "Tools: Reed Pens (Qalam), Likka & Silk Thread",
      "Basic Proportions of Alif & Nuqtah Grid",
      "Contemplation through the Sacred Art of Writing",
      "TSPP Artisan Guild Apprenticeship Pathways",
    ],
  },
  {
    id: "event-7",
    title: "Sunnah Herbal Remedies & Cold-Pressed Wellness Formulations",
    wing: "The Hut Halal Network",
    wingCode: "The Hut",
    date: "Sunday, 17 Jan 2027",
    time: "11:00 AM - 1:00 PM (BST)",
    type: "Business Masterclass",
    speaker: "Sister Nusrat Jahan",
    speakerRole: "Founder, Rawdah Botanicals",
    seatsLeft: 20,
    totalSeats: 60,
    isFree: true,
    location: "Virtual Herbarium & Lab Walkthrough",
    description: "Practical guide to preparing seasonal immune boosters, therapeutic steam tonics, and cold-pressed botanical infusions using indigenous Bangladeshi herbs and prophetic ingredients.",
    keyTopics: [
      "Quality Testing for Pure Raw Honey & Black Seed Oil",
      "Steam Distillation Basics for Rose & Mint Hydrosols",
      "Formulating Alcohol-Free Sunnah Sprays",
      "Hut Artisan Network Vendor Criteria",
    ],
  },
  {
    id: "event-8",
    title: "Tarbiyah for Toddlers: Sensory Bins & Bangla Arabic Activity Mats",
    wing: "Circle of Parents (CoP)",
    wingCode: "CoP",
    date: "Saturday, 23 Jan 2027",
    time: "3:30 PM - 5:00 PM (BST)",
    type: "Online Workshop",
    speaker: "Umm Zayd",
    speakerRole: "Homeschooling Lead, Fitrah Nurture",
    seatsLeft: 25,
    totalSeats: 80,
    isFree: true,
    location: "Live Interactive Parent Circle",
    description: "Hands-on demonstration of creating budget-friendly Montessori tactile materials that introduce preschool toddlers to the Arabic alphabet and Islamic virtues through everyday sensory play.",
    keyTopics: [
      "DIY Sensory Tubs with Lentils, Chickpeas & Rice",
      "Arabic Letter Tracing with Kinetic Sand",
      "Gentle Habit Formation for 2-5 Year Olds",
      "CoP Printable Activity Sheet Download",
    ],
  },
];

type EventTypeFilter = "All" | "Sisterhood Halaqah" | "Business Masterclass" | "Online Workshop" | "Skill Sharing";

export default function EventsPage() {
  const [activeType, setActiveType] = useState<EventTypeFilter>("All");
  const [selectedWing, setSelectedWing] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<EventItemFull | null>(null);
  const [clickedButtonId, setClickedButtonId] = useState<string | null>(null);

  // Registration simulator
  const [regSuccess, setRegSuccess] = useState(false);
  const [sisterName, setSisterName] = useState("");
  const [sisterEmail, setSisterEmail] = useState("");

  // Filter events
  const filteredEvents = useMemo(() => {
    return ALL_EVENTS.filter((event) => {
      if (activeType !== "All" && event.type !== activeType) return false;
      if (selectedWing !== "All" && event.wingCode !== selectedWing) return false;
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchTitle = event.title.toLowerCase().includes(q);
        const matchSpeaker = event.speaker.toLowerCase().includes(q);
        const matchWing = event.wing.toLowerCase().includes(q);
        const matchDesc = event.description.toLowerCase().includes(q);
        if (!matchTitle && !matchSpeaker && !matchWing && !matchDesc) return false;
      }
      return true;
    });
  }, [activeType, selectedWing, searchQuery]);

  // Handle arrow button click animation
  const handleButtonClick = (eventId: string, event: EventItemFull) => {
    setClickedButtonId(eventId);
    setSelectedEvent(event);
    setRegSuccess(false);
    setTimeout(() => {
      setClickedButtonId(null);
    }, 400);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sisterName.trim() || !sisterEmail.trim()) return;
    setRegSuccess(true);
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
            <span className="font-semibold text-[#111E28]">Events & Workshops</span>
          </nav>

          {/* Header Title with Bismillah Callout */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7DFC7] text-[#111E28] text-xs font-bold tracking-wide uppercase mb-3 border border-[#F2B55D]/40">
                <Calendar className="w-3.5 h-3.5 text-[#5B9891]" />
                <span>Cross-Wing Learning & Gatherings • Sisterhood Halaqahs</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111E28] tracking-tight">
                Events, Masterclasses & Halaqahs
              </h1>
              <p className="mt-3 text-base sm:text-lg text-stone-700 leading-relaxed">
                Participate in live virtual halaqahs, entrepreneurship bootcamps, and parenting circles
                organized across all <strong>Muhsina sisterhood wings</strong>. Dedicated to spiritual renewal and vocational growth.
              </p>
            </div>

            {/* Quick Stat Badge */}
            <div className="flex items-center gap-3 bg-[#FAF8F5] p-3 sm:p-4 rounded-2xl border border-[#F7DFC7] shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-[#5B9891] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                100%
              </div>
              <div>
                <p className="text-xs font-bold text-[#111E28]">Women-Only Sanctuary</p>
                <p className="text-xs text-stone-600">Secure private Zoom rooms</p>
              </div>
            </div>
          </div>

          {/* Event Pillars Bar */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-[#F7DFC7]/60 border border-[#F7DFC7] flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white text-[#5B9891] shadow-2xs">
                <Video className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#111E28]">Live & Interactive</h4>
                <p className="text-[11px] text-stone-600 mt-0.5">
                  Real-time Q&A with certified scholars, educators, and industry leaders.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F7DFC7]/60 border border-[#F7DFC7] flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white text-[#D98408] shadow-2xs">
                <Ticket className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#111E28]">Free & Halal Subsidized</h4>
                <p className="text-[11px] text-stone-600 mt-0.5">
                  Most community halaqahs are free; masterclasses carry nominal fair pricing.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F7DFC7]/60 border border-[#F7DFC7] flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white text-[#5B9891] shadow-2xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#111E28]">Recording & Handouts</h4>
                <p className="text-[11px] text-stone-600 mt-0.5">
                  Registered sisters receive playback access and downloadable resource decks.
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
            {/* Event Type Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none" role="tablist">
              {[
                "All",
                "Sisterhood Halaqah",
                "Business Masterclass",
                "Online Workshop",
                "Skill Sharing",
              ].map((tab) => {
                const count =
                  tab === "All"
                    ? ALL_EVENTS.length
                    : ALL_EVENTS.filter((i) => i.type === tab).length;

                const isActive = activeType === tab;

                return (
                  <button
                    key={tab}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveType(tab as EventTypeFilter)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                      isActive
                        ? "bg-[#5B9891] text-white shadow-sm border border-[#5B9891]"
                        : "bg-white text-stone-700 hover:bg-[#F7DFC7]/50 border border-[#F7DFC7]"
                    }`}
                  >
                    <span>{tab}</span>
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
                placeholder="Search events, speakers, wings..."
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
              Filter by Organizing Wing:
            </span>
            {["All", "MIDJ", "The Hut", "CoP", "IMBD", "TSPP"].map((w) => {
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
      {/* 3. EVENTS GRID CARDS                                      */}
      {/* ========================================================= */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-[#F7DFC7] p-8 max-w-md mx-auto shadow-2xs">
              <div className="w-16 h-16 rounded-full bg-[#F7DFC7] text-[#D98408] flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#111E28]">No events found</h3>
              <p className="mt-2 text-xs text-stone-600">
                No workshops or halaqahs match your filter or search query.
              </p>
              <button
                onClick={() => {
                  setActiveType("All");
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
              {filteredEvents.map((event) => {
                const isClicked = clickedButtonId === event.id;

                return (
                  <motion.div
                    key={event.id}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="group bg-white rounded-3xl border border-[#F7DFC7] p-6 flex flex-col justify-between hover:shadow-md hover:border-[#5B9891]/40 transition-all duration-300"
                  >
                    <div>
                      {/* Top Bar: Wing Badge + Type */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#F7DFC7] text-[#111E28] border border-[#F2B55D]/40">
                          {event.wingCode}
                        </span>
                        <span className="text-xs font-semibold text-[#5B9891]">
                          {event.type}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-base sm:text-lg font-bold text-[#111E28] group-hover:text-[#5B9891] transition-colors leading-snug">
                        {event.title}
                      </h3>

                      {/* Instructor / Speaker */}
                      <div className="mt-3 flex items-center gap-2 text-xs text-stone-700">
                        <User className="w-4 h-4 text-[#5B9891] flex-shrink-0" />
                        <div>
                          <span className="font-bold">{event.speaker}</span>
                          <span className="block text-[11px] text-stone-500">{event.speakerRole}</span>
                        </div>
                      </div>

                      {/* Date & Time Box */}
                      <div className="mt-4 p-3 rounded-2xl bg-[#FAF8F5] border border-[#F7DFC7] space-y-1.5 text-xs text-stone-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 text-[#D98408]" />
                          <span className="font-semibold text-stone-800">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-[#5B9891]" />
                          <span>{event.time}</span>
                        </div>
                      </div>

                      {/* Short Description */}
                      <p className="mt-3 text-xs text-stone-600 leading-relaxed line-clamp-2">
                        {event.description}
                      </p>
                    </div>

                    {/* Card Footer: Left seats/price + Right Capsule Button */}
                    <div className="mt-5 pt-3 border-t border-[#F7DFC7]/60 flex items-center justify-between">
                      <div>
                        {event.isFree ? (
                          <span className="text-xs font-bold text-[#5B9891] flex items-center gap-1">
                            <Ticket className="w-3.5 h-3.5" />
                            Community Free
                          </span>
                        ) : (
                          <span className="text-xs font-bold text-[#D98408] flex items-center gap-1">
                            ৳{event.price} (Subsidized)
                          </span>
                        )}
                        <span className="text-[10px] text-stone-400 block">
                          {event.seatsLeft} seats remaining
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleButtonClick(event.id, event)}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#F7DFC7] hover:bg-[#F2B55D] text-[#111E28] transition-all duration-200 border border-[#F2B55D]/40 group/btn shadow-2xs"
                      >
                        <span>Register Seat</span>
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
      {/* 4. CALL TO ACTION: PROPOSE A HALAQAH OR WORKSHOP          */}
      {/* ========================================================= */}
      <section className="py-16 bg-white border-t border-[#F7DFC7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#F7DFC7]/50 via-white to-[#F7DFC7]/30 border border-[#F7DFC7] flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xs">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5B9891]/15 text-[#5B9891] text-xs font-bold uppercase mb-3 border border-[#5B9891]/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Sisterhood Instructor Network</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111E28] tracking-tight">
                Want to Host a Halaqah or Vocational Masterclass?
              </h2>
              <p className="mt-2 text-sm sm:text-base text-stone-700 leading-relaxed">
                If you are a verified sister with subject-matter expertise in Islamic sciences, family parenting,
                or practical business vocations, submit your session proposal to our academic board.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/who-we-are"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D98408] text-white font-bold text-xs hover:bg-[#D98408]/90 transition-all shadow-sm"
                >
                  <span>Propose a Session</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="flex items-center gap-2 text-xs font-semibold text-stone-600">
                  <ShieldCheck className="w-4 h-4 text-[#5B9891]" />
                  <span>Peer-Reviewed by Muhsina Academic Board</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#F7DFC7] shadow-xs text-xs space-y-3 w-full lg:w-80 flex-shrink-0">
              <h4 className="font-bold text-[#111E28] border-b border-[#F7DFC7] pb-2">
                Organizer Benefits:
              </h4>
              <ul className="space-y-2 text-stone-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5B9891]" />
                  <span>Dedicated Private Zoom Room</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5B9891]" />
                  <span>Automated Sister Registration System</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5B9891]" />
                  <span>Recording Archive on Resource Library</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5B9891]" />
                  <span>Honorarium or Subsidized Ticketing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. REGISTRATION MODAL                                     */}
      {/* ========================================================= */}
      <AnimatePresence>
        {selectedEvent && (
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
                    {selectedEvent.wingCode}
                  </span>
                  <span className="text-xs text-stone-500 font-medium">
                    {selectedEvent.type}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="p-1.5 rounded-full hover:bg-stone-200 text-stone-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-4 text-xs overflow-y-auto max-h-[75vh]">
                {regSuccess ? (
                  <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                    <h4 className="font-bold text-base">Seat Successfully Reserved!</h4>
                    <p className="text-xs leading-relaxed text-emerald-700">
                      Jazakillahu Khairan, Sister <strong>{sisterName}</strong>. Your registration confirmation
                      and private Zoom link have been sent to <strong>{sisterEmail}</strong>.
                    </p>
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => alert("Added to calendar!")}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-emerald-800 border border-emerald-300 font-bold text-xs shadow-2xs hover:bg-emerald-100 transition-colors"
                      >
                        <CalendarPlus className="w-3.5 h-3.5" />
                        <span>Add to Google Calendar</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#111E28]">
                        {selectedEvent.title}
                      </h3>
                      <p className="text-stone-600 mt-1">
                        Instructor: <strong>{selectedEvent.speaker}</strong> ({selectedEvent.speakerRole})
                      </p>
                    </div>

                    <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#F7DFC7] space-y-1 text-stone-700">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-[#D98408]" />
                        <span className="font-semibold">{selectedEvent.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#5B9891]" />
                        <span>{selectedEvent.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Video className="w-3.5 h-3.5 text-[#5B9891]" />
                        <span>{selectedEvent.location}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-[#111E28] mb-1.5 uppercase tracking-wide text-[10px]">
                        Session Highlights & Syllabus
                      </h4>
                      <ul className="space-y-1.5 text-stone-600">
                        {selectedEvent.keyTopics.map((topic, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#5B9891] mt-0.5 flex-shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <form onSubmit={handleRegister} className="pt-2 border-t border-[#F7DFC7] space-y-3">
                      <div>
                        <label className="block font-bold text-[#111E28] mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          value={sisterName}
                          onChange={(e) => setSisterName(e.target.value)}
                          placeholder="Sister's Name"
                          className="w-full p-2.5 rounded-xl bg-[#FAF8F5] border border-[#F7DFC7] focus:outline-none focus:ring-2 focus:ring-[#5B9891]"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-[#111E28] mb-1">Email Address for Zoom Link *</label>
                        <input
                          type="email"
                          required
                          value={sisterEmail}
                          onChange={(e) => setSisterEmail(e.target.value)}
                          placeholder="your.email@example.com"
                          className="w-full p-2.5 rounded-xl bg-[#FAF8F5] border border-[#F7DFC7] focus:outline-none focus:ring-2 focus:ring-[#5B9891]"
                        />
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xs font-bold text-[#D98408]">
                          {selectedEvent.isFree ? "Free Registration" : `Fee: ৳${selectedEvent.price}`}
                        </span>

                        <button
                          type="submit"
                          className="px-6 py-2.5 rounded-full bg-[#D98408] hover:bg-[#D98408]/90 text-white font-bold text-xs shadow-sm transition-all"
                        >
                          Confirm & Book Seat
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-[#F7DFC7] bg-[#FAF8F5] flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedEvent(null)}
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
