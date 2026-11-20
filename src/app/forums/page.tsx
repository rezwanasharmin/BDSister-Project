"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Search,
  Sparkles,
  ArrowRight,
  Eye,
  MessageCircle,
  ThumbsUp,
  Share2,
  Bookmark,
  ChevronRight,
  PlusCircle,
  UserCheck,
  Heart,
  Send,
  X,
  AlertCircle,
  Clock,
  Pin,
  Layers,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ForumReply {
  id: string;
  authorSister: string;
  isVerified: boolean;
  postedAt: string;
  content: string;
  likes: number;
}

interface ForumTopic {
  id: string;
  category: "Faith & Personal Growth" | "Family & Parenting" | "Sisters in Business" | "Health & Wellness" | "Skills Exchange";
  title: string;
  authorSister: string;
  isVerifiedMember: boolean;
  postedAt: string;
  excerpt: string;
  fullContent: string;
  replyCount: number;
  viewsCount: number;
  isModerated: boolean;
  isPinned?: boolean;
  tags: string[];
  replies: ForumReply[];
}

const FORUM_DATA: ForumTopic[] = [
  {
    id: "forum-1",
    category: "Faith & Personal Growth",
    title: "How to maintain spiritual consistency in busy seasons of motherhood and business?",
    authorSister: "Fatima Bint Tariq",
    isVerifiedMember: true,
    postedAt: "2 hours ago",
    excerpt:
      "As sisters managing both household responsibilities and entrepreneurial projects, spiritual burnout can subtly creep in. In this reflection, I want to discuss small, micro-habits of Dhikr and Quran recitation that transformed my routine...",
    fullContent:
      "Assalamu Alaikum wa Rahmatullahi wa Barakatuh dear sisters. Balancing young children with launching a home venture often makes large chunks of dedicated Ibadah difficult. Over the past 6 months, I adopted three micro-habits: 1) Five minutes of Istighfar while prepping breakfast; 2) Listening to Tadabbur podcasts while nursing or driving; 3) Reading just half a page of Quran immediately after Fajr before looking at phone notifications. What daily routines help you preserve your Barakah?",
    replyCount: 27,
    viewsCount: 384,
    isModerated: true,
    isPinned: true,
    tags: ["#Tadabbur", "#BarakahHabits", "#SpiritualGrowth", "#Motherhood"],
    replies: [
      {
        id: "rep-1-1",
        authorSister: "Sister Ayesha Siddiqa",
        isVerified: true,
        postedAt: "1 hour ago",
        content: "Jazakillahu Khairan for this reminder sister. Keeping a digital tasbih ring on my finger whenever I am in the kitchen has kept my tongue continuously moist with SubhanAllah and Alhamdulillah.",
        likes: 14,
      },
      {
        id: "rep-1-2",
        authorSister: "Umm Zayd",
        isVerified: true,
        postedAt: "45 mins ago",
        content: "The half-page Quran rule is transformative. Once you start small, Allah puts immense ease into the remaining hours of the morning.",
        likes: 9,
      },
    ],
  },
  {
    id: "forum-2",
    category: "Family & Parenting",
    title: "Practical approaches to screen-free early childhood routines in urban apartments",
    authorSister: "Umm Maryam",
    isVerifiedMember: true,
    postedAt: "5 hours ago",
    excerpt:
      "Living in urban apartments makes physical active play challenging. Here is how our homeschooling circle created rotating sensory bins and indoor active play corners with local, inexpensive materials...",
    fullContent:
      "Assalamu Alaikum sisters. We live in a 3rd-floor apartment in Dhaka where going outside every single day is not always feasible. To combat screen addiction, we created a monthly toy-rotation system with two other sisters in our building: cardboard playhouse boxes, dry lentil sensory tubs with measuring spoons, and watercolor easels. The children remain deeply engaged for hours without a single screen.",
    replyCount: 34,
    viewsCount: 512,
    isModerated: true,
    tags: ["#Montessori", "#ScreenFreeKids", "#Homeschooling", "#CircleOfParents"],
    replies: [
      {
        id: "rep-2-1",
        authorSister: "Sister Nusrat",
        isVerified: true,
        postedAt: "3 hours ago",
        content: "Cardboard boxes are truly magic! We made an Arabic letter sensory bin with chickpeas and our toddler loves digging out the wooden letters.",
        likes: 12,
      },
    ],
  },
  {
    id: "forum-3",
    category: "Sisters in Business",
    title: "Pricing your artisanal products without compromising MRP or sisterhood fairness",
    authorSister: "Nafisa Chowdhury (Brand Owner)",
    isVerifiedMember: true,
    postedAt: "Yesterday",
    excerpt:
      "Many of us struggle with under-pricing our handmade goods out of shyness. Let us talk about cost-of-goods-sold (COGS), labor calculation, and how BDSisters platform rules ensure our MRP stays competitive while honoring our labor...",
    fullContent:
      "Bismillah. Early on, I was charging only for raw materials and giving my labor away for free. In Islam, fair pricing also requires honoring the craftsman's time and dignity. I built a simple pricing formula: (Raw Materials + Packaging + Hourly Labor + 20% Overhead) x Wholesale Multiplier. Let us discuss how sister entrepreneurs can set prices transparently without undercutting each other.",
    replyCount: 46,
    viewsCount: 780,
    isModerated: true,
    isPinned: true,
    tags: ["#HalalBusiness", "#FairPricing", "#TheHutNetwork", "#ArtisanGuild"],
    replies: [
      {
        id: "rep-3-1",
        authorSister: "Sister Tasnim Rahman",
        isVerified: true,
        postedAt: "Yesterday",
        content: "This is crucial advice Nafisa! The BDSisters Fair Price policy protects all of us by keeping standards high and avoiding a race to the bottom.",
        likes: 19,
      },
    ],
  },
  {
    id: "forum-4",
    category: "Skills Exchange",
    title: "Offering: Graphic Design & Branding Kit | Seeking: Spoken Arabic Conversation Practice",
    authorSister: "Samira K.",
    isVerifiedMember: true,
    postedAt: "2 days ago",
    excerpt:
      "Bismillah. I have 6 years of experience in Figma, Canva Pro, and packaging design. I would love to design brand identity assets for a sister in exchange for weekly Conversational Modern Standard Arabic practice...",
    fullContent:
      "Assalamu Alaikum! I am offering a complete brand package (Logo, color palette, social templates, packaging label) in exchange for 8 hours of live 1-on-1 spoken Arabic coaching via Google Meet. If any sister is a native Arabic speaker or fluent graduate interested in this barter, please reply or message via sisterhood verification.",
    replyCount: 15,
    viewsCount: 290,
    isModerated: true,
    tags: ["#SkillBarter", "#ArabicLearning", "#GraphicDesign", "#Cooperation"],
    replies: [
      {
        id: "rep-4-1",
        authorSister: "Ustadha Hafsa",
        isVerified: true,
        postedAt: "1 day ago",
        content: "Assalamu Alaikum Samira! I teach Arabic morphology and conversation and would love help branding our upcoming online tajweed workbook. Let's connect through admin verification!",
        likes: 8,
      },
    ],
  },
  {
    id: "forum-5",
    category: "Health & Wellness",
    title: "Sunnah Herbal Remedies for Seasonal Respiratory Health in Changing Seasons",
    authorSister: "Sister Mariam Al-Hadi (Holistic Herbalist)",
    isVerifiedMember: true,
    postedAt: "2 days ago",
    excerpt:
      "With weather transitions, seasonal coughs and flu symptoms rise. Here is a compilation of authentic Sunnah prophetic remedies, including black seed infusions, warm raw honey, and olive leaf steam...",
    fullContent:
      "Bismillah. The Prophet (peace be upon him) said regarding black seed: 'There is healing in black mustard seed for all diseases except death.' In our family, when seasons change, we prepare warm water with 1 teaspoon of raw unprocessed honey and 7 crushed black seeds on an empty stomach. We also boil whole cloves and thyme for facial steaming. What natural remedies do you prepare for your household?",
    replyCount: 22,
    viewsCount: 440,
    isModerated: true,
    tags: ["#SunnahHealth", "#BlackSeed", "#NaturalWellness", "#HolisticCare"],
    replies: [
      {
        id: "rep-5-1",
        authorSister: "Sister Humaira",
        isVerified: true,
        postedAt: "1 day ago",
        content: "Adding a slice of fresh ginger to the honey water has worked wonders for our children's night coughs as well.",
        likes: 7,
      },
    ],
  },
  {
    id: "forum-6",
    category: "Faith & Personal Growth",
    title: "Quranic Reflection Circle: Surah Al-Kahf’s teachings on Barakah and Wealth",
    authorSister: "Sister Sumayya (MIDJ Contributor)",
    isVerifiedMember: true,
    postedAt: "3 days ago",
    excerpt:
      "Every Friday we recite Surah Al-Kahf, but the story of the Two Gardeners holds profound ethical frameworks for entrepreneurs: remembering 'Ma Sha Allah, La Quwwata illa Billah'...",
    fullContent:
      "When we contemplate the parable of the two men with the lush gardens in Surah Al-Kahf, the failure of the first man was not his enterprise, but attributing the success to his own cleverness and forgetting the ultimate provider. For Muslim sister entrepreneurs, this reminds us to anchor our businesses in Tawakkul and continuous charity.",
    replyCount: 31,
    viewsCount: 620,
    isModerated: true,
    tags: ["#SurahKahf", "#QuranStudy", "#Tawakkul", "#MIDJJournalism"],
    replies: [
      {
        id: "rep-6-1",
        authorSister: "Fatima Bint Tariq",
        isVerified: true,
        postedAt: "2 days ago",
        content: "A beautiful reflection Sister Sumayya! Success without Barakah is empty, while a small honest livelihood with Barakah nourishes generations.",
        likes: 15,
      },
    ],
  },
  {
    id: "forum-7",
    category: "Family & Parenting",
    title: "Teaching young daughters modesty (Haya) with love, positivity, and confidence",
    authorSister: "Sister Raihana",
    isVerifiedMember: true,
    postedAt: "4 days ago",
    excerpt:
      "How do we foster natural love for the Hijab and Islamic dignity in young girls growing up in a consumer-heavy social media landscape? Shared tips from our Circle of Parents circle...",
    fullContent:
      "Haya is not simply external clothing; it is an internal spiritual sweetness and self-respect that reflects outwards. When our daughters see us wear the Hijab with joy, grace, and pride—rather than framing it purely as a list of restrictions—they naturally aspire to embody it. Let's share positive Tarbiyah milestones that resonated with your children.",
    replyCount: 38,
    viewsCount: 715,
    isModerated: true,
    tags: ["#Haya", "#Tarbiyah", "#ParentingDaughters", "#CircleOfParents"],
    replies: [
      {
        id: "rep-7-1",
        authorSister: "Umm Maryam",
        isVerified: true,
        postedAt: "3 days ago",
        content: "Celebrating their first prayer dress or prayer corner with a special sisterhood tea party made a huge positive impression on my 7-year-old.",
        likes: 11,
      },
    ],
  },
  {
    id: "forum-8",
    category: "Sisters in Business",
    title: "Halal Delivery & Cash on Delivery (COD) Logistics for Dhaka & Outside Dhaka",
    authorSister: "Sister Farhana",
    isVerifiedMember: true,
    postedAt: "5 days ago",
    excerpt:
      "A comparison of courier companies operating across Bangladesh for home-based sister ventures. Handling return rates, parcel tracking, and safe payout cycles...",
    fullContent:
      "Managing cash-on-delivery returns can be nerve-wracking for micro-businesses. Over the past year, we tested 4 major courier services. Here is my breakdown of on-time delivery rates, tracking SMS notifications for customers, and COD commission rates. What couriers have proven most reliable for your fragile items?",
    replyCount: 29,
    viewsCount: 560,
    isModerated: true,
    tags: ["#EcommerceBD", "#Logistics", "#CourierReview", "#SmallBusiness"],
    replies: [
      {
        id: "rep-8-1",
        authorSister: "Nafisa Chowdhury",
        isVerified: true,
        postedAt: "4 days ago",
        content: "Always use double bubble-wrap and take photos before sealing. Courier disputes become much easier to resolve when you have proof of intact dispatch.",
        likes: 10,
      },
    ],
  },
];

type CategoryFilter = "All" | "Faith & Personal Growth" | "Family & Parenting" | "Sisters in Business" | "Health & Wellness" | "Skills Exchange";

export default function ForumsPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<ForumTopic | null>(null);
  const [isNewTopicModalOpen, setIsNewTopicModalOpen] = useState(false);
  const [clickedButtonId, setClickedButtonId] = useState<string | null>(null);

  // New Reply Simulator
  const [replyText, setReplyText] = useState("");
  const [localReplies, setLocalReplies] = useState<Record<string, ForumReply[]>>({});

  // New Topic Form State
  const [newTopicCategory, setNewTopicCategory] = useState<CategoryFilter>("Faith & Personal Growth");
  const [newTopicTitle, setNewTopicTitle] = useState("");
  const [newTopicBody, setNewTopicBody] = useState("");
  const [newTopicAnonymous, setNewTopicAnonymous] = useState(false);
  const [newTopicSuccess, setNewTopicSuccess] = useState(false);

  // Filter topics
  const filteredTopics = useMemo(() => {
    return FORUM_DATA.filter((topic) => {
      if (activeCategory !== "All" && topic.category !== activeCategory) return false;
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchTitle = topic.title.toLowerCase().includes(q);
        const matchExcerpt = topic.excerpt.toLowerCase().includes(q);
        const matchAuthor = topic.authorSister.toLowerCase().includes(q);
        const matchTag = topic.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchTitle && !matchExcerpt && !matchAuthor && !matchTag) return false;
      }
      return true;
    });
  }, [activeCategory, searchQuery]);

  // Handle arrow button click animation
  const handleButtonClick = (topicId: string, topic: ForumTopic) => {
    setClickedButtonId(topicId);
    setSelectedTopic(topic);
    setTimeout(() => {
      setClickedButtonId(null);
    }, 400);
  };

  // Submit reply simulator
  const handleAddReply = (topicId: string) => {
    if (!replyText.trim()) return;
    const newReply: ForumReply = {
      id: `rep-${Date.now()}`,
      authorSister: "You (Verified Sister)",
      isVerified: true,
      postedAt: "Just now",
      content: replyText.trim(),
      likes: 1,
    };
    setLocalReplies((prev) => ({
      ...prev,
      [topicId]: [...(prev[topicId] || []), newReply],
    }));
    setReplyText("");
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
            <span className="font-semibold text-[#111E28]">Discussion Forums</span>
          </nav>

          {/* Header Title with Bismillah Callout */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7DFC7] text-[#111E28] text-xs font-bold tracking-wide uppercase mb-3 border border-[#F2B55D]/40">
                <MessageSquare className="w-3.5 h-3.5 text-[#5B9891]" />
                <span>Uplifting Sisterhood Circles • 100% Female Moderated</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111E28] tracking-tight">
                Forums: Connect & Converse
              </h1>
              <p className="mt-3 text-base sm:text-lg text-stone-700 leading-relaxed">
                A safe, modest sanctuary for meaningful conversations on spirituality, family parenting,
                halal entrepreneurship, and mutual skill exchange—free from public algorithmic toxicity.
              </p>
            </div>

            {/* Action Button: Start Discussion */}
            <div className="flex-shrink-0">
              <button
                type="button"
                onClick={() => setIsNewTopicModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D98408] hover:bg-[#D98408]/90 text-white font-bold text-xs shadow-sm transition-all"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Start New Discussion</span>
              </button>
            </div>
          </div>

          {/* Three Key Sisterhood Adab Guarantees */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-[#F7DFC7]/60 border border-[#F7DFC7] flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white text-[#5B9891] shadow-2xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#111E28]">100% Female Moderation</h4>
                <p className="text-[11px] text-stone-600 mt-0.5">
                  Adheres strictly to Islamic Adab. No trolling or public harassment.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F7DFC7]/60 border border-[#F7DFC7] flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white text-[#D98408] shadow-2xs">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#111E28]">Verified Member Identity</h4>
                <p className="text-[11px] text-stone-600 mt-0.5">
                  Option to post with verified sister badge or post anonymously for sensitive questions.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F7DFC7]/60 border border-[#F7DFC7] flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white text-[#5B9891] shadow-2xs">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#111E28]">Muhsina Wing Integration</h4>
                <p className="text-[11px] text-stone-600 mt-0.5">
                  Direct synergy with CoP (Parenting), TSPP (Books), and IMBD (Mentorship).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. CATEGORY TABS & SEARCH BAR                              */}
      {/* ========================================================= */}
      <section className="sticky top-20 z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#F7DFC7] py-4 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none" role="tablist">
              {[
                { name: "All", label: "All Topics" },
                { name: "Faith & Personal Growth", label: "Faith & Growth" },
                { name: "Family & Parenting", label: "Family & CoP" },
                { name: "Sisters in Business", label: "Business & Commerce" },
                { name: "Health & Wellness", label: "Health & Sunnah" },
                { name: "Skills Exchange", label: "Skill Barter" },
              ].map((tab) => {
                const count =
                  tab.name === "All"
                    ? FORUM_DATA.length
                    : FORUM_DATA.filter((i) => i.category === tab.name).length;

                const isActive = activeCategory === tab.name;

                return (
                  <button
                    key={tab.name}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(tab.name as CategoryFilter)}
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
                placeholder="Search topics, tags, sisters..."
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
      {/* 3. FORUM THREAD LIST WITH INTERACTIVE BUTTONS             */}
      {/* ========================================================= */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {filteredTopics.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-3xl border border-[#F7DFC7] p-8 max-w-md mx-auto shadow-2xs">
                <div className="w-16 h-16 rounded-full bg-[#F7DFC7] text-[#D98408] flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#111E28]">No topics found</h3>
                <p className="mt-2 text-xs text-stone-600">
                  No discussions match your filter or search query. Start a new thread or reset filters.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory("All");
                    setSearchQuery("");
                  }}
                  className="mt-5 px-5 py-2 rounded-full bg-[#5B9891] text-white font-bold text-xs hover:bg-[#5B9891]/90 shadow-2xs transition-all"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              filteredTopics.map((topic) => {
                const isClicked = clickedButtonId === topic.id;
                const extraReplies = localReplies[topic.id] || [];
                const totalReplyCount = topic.replyCount + extraReplies.length;

                return (
                  <motion.div
                    key={topic.id}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="bg-white rounded-3xl border border-[#F7DFC7] p-5 sm:p-6 hover:shadow-md hover:border-[#5B9891]/40 transition-all duration-200"
                  >
                    <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                      {/* Left: Content */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          {topic.isPinned && (
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#D98408] text-white flex items-center gap-1 shadow-2xs">
                              <Pin className="w-3 h-3" /> Pinned
                            </span>
                          )}

                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#F7DFC7] text-[#111E28] border border-[#F2B55D]/40">
                            {topic.category}
                          </span>

                          <span className="text-[11px] text-stone-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {topic.postedAt}
                          </span>
                        </div>

                        {/* Title */}
                        <h3
                          onClick={() => setSelectedTopic(topic)}
                          className="font-serif text-lg sm:text-xl font-bold text-[#111E28] hover:text-[#5B9891] transition-colors cursor-pointer leading-snug"
                        >
                          {topic.title}
                        </h3>

                        {/* Author info */}
                        <div className="mt-1 flex items-center gap-2 text-xs text-stone-500">
                          <span>Started by</span>
                          <span className="font-semibold text-stone-800">{topic.authorSister}</span>
                          {topic.isVerifiedMember && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#5B9891]" title="Verified Sister Member" />
                          )}
                        </div>

                        {/* Excerpt */}
                        <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                          {topic.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="mt-3 flex flex-wrap items-center gap-1.5">
                          {topic.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-medium text-stone-500 bg-[#FAF8F5] px-2 py-0.5 rounded-md border border-[#F7DFC7]/60"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right: Stats & Signature Capsule Button with Rotating Arrow */}
                      <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-4 pt-4 sm:pt-0 border-t sm:border-t-0 border-[#F7DFC7]/60">
                        <div className="flex items-center gap-4 text-xs font-semibold text-stone-500">
                          <span className="flex items-center gap-1.5">
                            <MessageCircle className="w-4 h-4 text-[#5B9891]" />
                            {totalReplyCount} replies
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Eye className="w-4 h-4 text-[#D98408]" />
                            {topic.viewsCount} views
                          </span>
                        </div>

                        {/* Signature Rotating Arrow Button */}
                        <button
                          type="button"
                          onClick={() => handleButtonClick(topic.id, topic)}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-[#F7DFC7] hover:bg-[#F2B55D] text-[#111E28] transition-all duration-200 border border-[#F2B55D]/40 shadow-2xs group/btn flex-shrink-0"
                        >
                          <span>Read Discussion</span>
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
                    </div>
                  </motion.div>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. SISTERHOOD ETIQUETTE & HALAL CODE CALLOUT              */}
      {/* ========================================================= */}
      <section className="py-12 bg-white border-t border-[#F7DFC7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#F7DFC7] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-[#5B9891]">
                <ShieldCheck className="w-4 h-4" />
                <span>Islamic Adab in Communication</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#111E28]">
                Preserving Sacred Spaces: Our Sisterhood Code
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                All forums are strictly monitored to ensure interactions remain sincere, constructive, and
                dignified. Unverified male profiles or un-halal product pitches are permanently barred.
              </p>
            </div>

            <Link
              href="/who-we-are"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#F7DFC7] hover:bg-[#F7DFC7] text-[#111E28] font-bold text-xs shadow-2xs transition-all whitespace-nowrap"
            >
              <span>Learn About Vetting</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. THREAD DETAIL & REPLY MODAL                             */}
      {/* ========================================================= */}
      <AnimatePresence>
        {selectedTopic && (
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
                    {selectedTopic.category}
                  </span>
                  <span className="text-xs text-stone-500 font-medium">
                    Thread ID: {selectedTopic.id}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedTopic(null)}
                  className="p-1.5 rounded-full hover:bg-stone-200 text-stone-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content / Thread Reader */}
              <div className="p-6 overflow-y-auto space-y-6">
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#111E28] leading-tight">
                    {selectedTopic.title}
                  </h2>
                  <div className="mt-2 flex items-center gap-2 text-xs text-stone-500">
                    <span>Started by</span>
                    <span className="font-semibold text-stone-800">{selectedTopic.authorSister}</span>
                    {selectedTopic.isVerifiedMember && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#5B9891]" />
                    )}
                    <span>• {selectedTopic.postedAt}</span>
                  </div>
                </div>

                {/* Main Post Body */}
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#F7DFC7] text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {selectedTopic.fullContent}
                </div>

                {/* Replies Section */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#111E28] flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4 text-[#5B9891]" />
                    <span>
                      Sister Responses (
                      {selectedTopic.replies.length + (localReplies[selectedTopic.id]?.length || 0)})
                    </span>
                  </h4>

                  {/* Seeded Replies */}
                  {selectedTopic.replies.map((reply) => (
                    <div
                      key={reply.id}
                      className="p-4 rounded-2xl bg-white border border-[#F7DFC7]/80 text-xs text-stone-700"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-1.5 font-bold text-[#111E28]">
                          <span>{reply.authorSister}</span>
                          {reply.isVerified && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#5B9891]" />
                          )}
                        </div>
                        <span className="text-[11px] text-stone-400">{reply.postedAt}</span>
                      </div>
                      <p className="leading-relaxed text-stone-600">{reply.content}</p>
                      <div className="mt-2 flex items-center gap-1 text-[11px] font-semibold text-[#5B9891]">
                        <Heart className="w-3 h-3 fill-current" />
                        <span>{reply.likes} sisters found this helpful</span>
                      </div>
                    </div>
                  ))}

                  {/* Newly Added Replies */}
                  {(localReplies[selectedTopic.id] || []).map((reply) => (
                    <div
                      key={reply.id}
                      className="p-4 rounded-2xl bg-[#5B9891]/5 border border-[#5B9891]/30 text-xs text-stone-700 animate-fadeIn"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-1.5 font-bold text-[#5B9891]">
                          <span>{reply.authorSister}</span>
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#5B9891]" />
                        </div>
                        <span className="text-[11px] text-stone-400">{reply.postedAt}</span>
                      </div>
                      <p className="leading-relaxed text-stone-700">{reply.content}</p>
                    </div>
                  ))}
                </div>

                {/* Reply Input Box */}
                <div className="pt-2">
                  <label className="block text-xs font-bold text-[#111E28] mb-1.5">
                    Contribute your thoughts to this circle:
                  </label>
                  <div className="flex gap-2">
                    <textarea
                      rows={2}
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      placeholder="Write your respectful, helpful response here..."
                      className="flex-1 p-3 text-xs rounded-2xl bg-white border border-[#F7DFC7] focus:outline-none focus:ring-2 focus:ring-[#5B9891]"
                    />
                    <button
                      type="button"
                      onClick={() => handleAddReply(selectedTopic.id)}
                      className="px-5 py-2.5 rounded-2xl bg-[#5B9891] hover:bg-[#5B9891]/90 text-white font-bold text-xs flex items-center gap-1.5 shadow-2xs self-end transition-all"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Post</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-[#F7DFC7] bg-[#FAF8F5] flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedTopic(null)}
                  className="px-5 py-2 rounded-full border border-stone-300 text-xs font-bold text-stone-700 hover:bg-stone-100 transition-colors"
                >
                  Close Reader
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================= */}
      {/* 6. CREATE NEW TOPIC MODAL                                  */}
      {/* ========================================================= */}
      <AnimatePresence>
        {isNewTopicModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              className="bg-white rounded-3xl max-w-lg w-full border border-[#F7DFC7] shadow-xl overflow-hidden flex flex-col"
            >
              <div className="p-4 sm:p-6 border-b border-[#F7DFC7] flex items-center justify-between bg-[#FAF8F5]">
                <div className="flex items-center gap-2">
                  <PlusCircle className="w-4 h-4 text-[#D98408]" />
                  <h3 className="font-serif text-base font-bold text-[#111E28]">
                    Start a New Sisterhood Discussion
                  </h3>
                </div>
                <button
                  onClick={() => {
                    setIsNewTopicModalOpen(false);
                    setNewTopicSuccess(false);
                  }}
                  className="p-1.5 rounded-full hover:bg-stone-200 text-stone-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-4 text-xs">
                {newTopicSuccess ? (
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                    <h4 className="font-bold text-sm">Discussion Thread Submitted!</h4>
                    <p className="text-xs">
                      Your discussion is now under instant moderation and will appear in the circle shortly.
                    </p>
                  </div>
                ) : (
                  <>
                    <div>
                      <label className="block font-bold text-[#111E28] mb-1">Select Circle Category</label>
                      <select
                        value={newTopicCategory}
                        onChange={(e) => setNewTopicCategory(e.target.value as CategoryFilter)}
                        className="w-full p-2.5 rounded-xl bg-[#FAF8F5] border border-[#F7DFC7] font-medium focus:outline-none focus:ring-2 focus:ring-[#5B9891]"
                      >
                        <option value="Faith & Personal Growth">Faith & Personal Growth</option>
                        <option value="Family & Parenting">Family & Parenting (CoP)</option>
                        <option value="Sisters in Business">Sisters in Business</option>
                        <option value="Health & Wellness">Health & Wellness</option>
                        <option value="Skills Exchange">Skills Exchange (Ask & Offer)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-[#111E28] mb-1">Topic Title / Question</label>
                      <input
                        type="text"
                        value={newTopicTitle}
                        onChange={(e) => setNewTopicTitle(e.target.value)}
                        placeholder="e.g. Recommendations for halal science curriculum?"
                        className="w-full p-2.5 rounded-xl bg-[#FAF8F5] border border-[#F7DFC7] focus:outline-none focus:ring-2 focus:ring-[#5B9891]"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-[#111E28] mb-1">Full Details / Context</label>
                      <textarea
                        rows={4}
                        value={newTopicBody}
                        onChange={(e) => setNewTopicBody(e.target.value)}
                        placeholder="Provide details so other sisters can share insightful advice..."
                        className="w-full p-2.5 rounded-xl bg-[#FAF8F5] border border-[#F7DFC7] focus:outline-none focus:ring-2 focus:ring-[#5B9891]"
                      />
                    </div>

                    <div className="flex items-center gap-2 p-3 rounded-xl bg-[#F7DFC7]/40 border border-[#F7DFC7]">
                      <input
                        type="checkbox"
                        id="anonCheck"
                        checked={newTopicAnonymous}
                        onChange={(e) => setNewTopicAnonymous(e.target.checked)}
                        className="rounded text-[#5B9891] focus:ring-[#5B9891]"
                      />
                      <label htmlFor="anonCheck" className="text-stone-700 cursor-pointer">
                        Post as <strong>Anonymous Sister</strong> (Protects privacy for personal family/health questions)
                      </label>
                    </div>
                  </>
                )}
              </div>

              <div className="p-4 border-t border-[#F7DFC7] bg-[#FAF8F5] flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsNewTopicModalOpen(false);
                    setNewTopicSuccess(false);
                  }}
                  className="px-4 py-2 rounded-full border border-stone-300 text-xs font-bold text-stone-700 hover:bg-stone-100 transition-colors"
                >
                  Cancel
                </button>

                {!newTopicSuccess && (
                  <button
                    type="button"
                    disabled={!newTopicTitle.trim() || !newTopicBody.trim()}
                    onClick={() => setNewTopicSuccess(true)}
                    className="px-5 py-2 rounded-full bg-[#D98408] disabled:opacity-50 text-white font-bold text-xs shadow-2xs hover:bg-[#D98408]/90 transition-all"
                  >
                    Publish Topic
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
