"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  ShoppingBag,
  Star,
  ShieldCheck,
  CheckCircle2,
  BadgePercent,
  Search,
  SlidersHorizontal,
  Box,
  Truck,
  Heart,
  Eye,
  ArrowRight,
  Sparkles,
  Store,
  Layers,
  X,
  CreditCard,
  Lock,
  ChevronRight,
  Filter,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Comprehensive Catalog of Sisterhood Products & Services
interface ShopProduct {
  id: string;
  title: string;
  sellerSister: string;
  brandName: string;
  brandVerified: boolean;
  mrpPrice: number;
  specialDiscountPrice: number;
  category: "Physical Products" | "Sister Services";
  subCategory: string;
  isWholesaleEligible: boolean;
  wholesaleMinQuantity?: number;
  wholesaleUnitPrice?: number;
  rating: number;
  totalReviews: number;
  imageUrl: string;
  inStock: boolean;
  description: string;
  features: string[];
  wingAffiliation?: string;
}

const ALL_SHOP_ITEMS: ShopProduct[] = [
  {
    id: "shop-1",
    title: "Premium Organic Rose Infused Herbal Facial Mist",
    sellerSister: "Sister Nusrat Jahan",
    brandName: "Rawdah Botanicals",
    brandVerified: true,
    mrpPrice: 850,
    specialDiscountPrice: 720,
    category: "Physical Products",
    subCategory: "Halal Skincare & Wellness",
    isWholesaleEligible: true,
    wholesaleMinQuantity: 12,
    wholesaleUnitPrice: 550,
    rating: 4.9,
    totalReviews: 38,
    imageUrl: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
    inStock: true,
    description: "100% natural, alcohol-free toner steam-distilled from organic damask rose petals. Alcohol-free Sunnah wellness care.",
    features: ["100% Organic certified petals", "Alcohol & chemical free", "Glass amber bottle with atomizer", "Made in Bangladesh"],
    wingAffiliation: "The Hut Halal Network",
  },
  {
    id: "shop-2",
    title: "Modest Luxury Chiffon Hijab Collection (Set of 3)",
    sellerSister: "Sister Tasnim Rahman",
    brandName: "Haya & Co.",
    brandVerified: true,
    mrpPrice: 1650,
    specialDiscountPrice: 1390,
    category: "Physical Products",
    subCategory: "Modest Clothing & Hijab",
    isWholesaleEligible: true,
    wholesaleMinQuantity: 10,
    wholesaleUnitPrice: 1050,
    rating: 5.0,
    totalReviews: 64,
    imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    inStock: true,
    description: "Ultra-soft, breathable luxury chiffon hijabs in signature earthy pastel tones. Non-slip, wrinkle-resistant and fully opaque when layered.",
    features: ["3 Earthy Sunnah tones", "Generous 180cm x 75cm drape", "Machine washable high durability", "Comes in gift giftbox"],
    wingAffiliation: "The Hut Halal Network",
  },
  {
    id: "shop-3",
    title: "1-on-1 Islamic Homeschooling Curriculum Strategy (1 Month)",
    sellerSister: "Umm Zayd (Certified Educator)",
    brandName: "Fitrah Nurture",
    brandVerified: true,
    mrpPrice: 3500,
    specialDiscountPrice: 2800,
    category: "Sister Services",
    subCategory: "Consulting & Mentorship",
    isWholesaleEligible: false,
    rating: 4.95,
    totalReviews: 29,
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    inStock: true,
    description: "Customized 4-week structured homeschool syllabus for children aged 4-10, combining authentic Islamic Tarbiyah with modern curriculum.",
    features: ["4 Weekly 60-min private Zoom calls", "Custom PDF weekly schedules", "Tarbiyah & Character habit tracker", "WhatsApp support during office hours"],
    wingAffiliation: "Circle of Parents (CoP)",
  },
  {
    id: "shop-4",
    title: "Handbound Islamic Daily Reflection & Tadabbur Journal",
    sellerSister: "Sister Ayesha Siddiqa",
    brandName: "Qalam & Ink Studio",
    brandVerified: true,
    mrpPrice: 950,
    specialDiscountPrice: 799,
    category: "Physical Products",
    subCategory: "Stationery & Publications",
    isWholesaleEligible: true,
    wholesaleMinQuantity: 15,
    wholesaleUnitPrice: 580,
    rating: 4.88,
    totalReviews: 42,
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    inStock: true,
    description: "Hardcover handstitched notebook with gold-foiled calligraphy, Quranic contemplation prompts, daily Salah checklists, and Barakah goal planners.",
    features: ["120gsm bleed-proof cream paper", "Thread-bound lay-flat binding", "Silk bookmark ribbon", "Quarterly habit reflections"],
    wingAffiliation: "The Sacred Path Publications (TSPP)",
  },
  {
    id: "shop-5",
    title: "Cold-Pressed Ethiopian Black Seed & Organic Raw Honey Elixir",
    sellerSister: "Sister Mariam Al-Hadi",
    brandName: "Shifaa Holistic",
    brandVerified: true,
    mrpPrice: 1350,
    specialDiscountPrice: 1150,
    category: "Physical Products",
    subCategory: "Halal Skincare & Wellness",
    isWholesaleEligible: true,
    wholesaleMinQuantity: 10,
    wholesaleUnitPrice: 850,
    rating: 4.96,
    totalReviews: 53,
    imageUrl: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
    inStock: true,
    description: "Therapeutic blend of premium Nigella Sativa oil and wild forest Sundarban honey. Authentic Sunnah prophetic remedy for wellness and vitality.",
    features: ["100% Pure unfiltered cold-press", "Lab tested zero adulteration", "Rich in Thymoquinone (TQ)", "Food-grade UV protection bottle"],
    wingAffiliation: "The Hut Halal Network",
  },
  {
    id: "shop-6",
    title: "Halal Brand Identity & Modest Packaging Design (Sister-to-Sister)",
    sellerSister: "Sister Sumayya (Creative Lead)",
    brandName: "Noor Studio",
    brandVerified: true,
    mrpPrice: 3200,
    specialDiscountPrice: 2450,
    category: "Sister Services",
    subCategory: "Consulting & Mentorship",
    isWholesaleEligible: true,
    wholesaleMinQuantity: 3,
    wholesaleUnitPrice: 1950,
    rating: 4.92,
    totalReviews: 31,
    imageUrl: "https://images.unsplash.com/photo-1542744094-3a31727221eb?auto=format&fit=crop&w=800&q=80",
    inStock: true,
    description: "Complete visual identity package tailored for women-led halal enterprises. Includes logo design, color guidelines, and packaging layout.",
    features: ["3 Custom concept directions", "Print-ready packaging templates", "Typography & color master system", "Social media kit included"],
    wingAffiliation: "MIDJ Journalism & Creative Wing",
  },
  {
    id: "shop-7",
    title: "Breathable Premium Linen Batwing Abaya & Matching Khimar Set",
    sellerSister: "Sister Humaira Akter",
    brandName: "Al-Afiah Modesty",
    brandVerified: true,
    mrpPrice: 2850,
    specialDiscountPrice: 2400,
    category: "Physical Products",
    subCategory: "Modest Clothing & Hijab",
    isWholesaleEligible: true,
    wholesaleMinQuantity: 8,
    wholesaleUnitPrice: 1850,
    rating: 4.98,
    totalReviews: 47,
    imageUrl: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80",
    inStock: true,
    description: "Flowy, modest, opaque cut tailored specifically for tropical Bangladeshi climates. Built-in wudu-friendly zipped sleeves and deep pockets.",
    features: ["Pure breathable linen-cotton blend", "Hidden wudu-friendly zip cuffs", "Full coverage ankle length", "Comes with matching maxi khimar"],
    wingAffiliation: "The Hut Halal Network",
  },
  {
    id: "shop-8",
    title: "Sisterhood Quranic Tajweed & Hifdh Correction (10-Week Cohort)",
    sellerSister: "Ustadha Hafsa (IMBD Mentor)",
    brandName: "Tarteel Academy",
    brandVerified: true,
    mrpPrice: 4200,
    specialDiscountPrice: 3600,
    category: "Sister Services",
    subCategory: "Consulting & Mentorship",
    isWholesaleEligible: false,
    rating: 5.0,
    totalReviews: 58,
    imageUrl: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=800&q=80",
    inStock: true,
    description: "Intimate women-only small group classes focusing on Makharij articulation points, melodious recitation, and practical Tajweed rules.",
    features: ["Max 6 sisters per live batch", "Recorded playback library", "Individual pronunciation review", "Ijazah-track foundational assessment"],
    wingAffiliation: "IMBD Mentorship Wing",
  },
  {
    id: "shop-9",
    title: "Hand-Poured Halal Oud & White Amber Soy Wax Candle",
    sellerSister: "Sister Zubaida",
    brandName: "Barakah Scents",
    brandVerified: true,
    mrpPrice: 750,
    specialDiscountPrice: 620,
    category: "Physical Products",
    subCategory: "Artisan & Handcrafted",
    isWholesaleEligible: true,
    wholesaleMinQuantity: 20,
    wholesaleUnitPrice: 450,
    rating: 4.87,
    totalReviews: 23,
    imageUrl: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
    inStock: true,
    description: "Eco-friendly non-toxic soy wax infused with authentic Dehn Al Oud and warm Madagascar amber. Slow burning and peaceful.",
    features: ["100% Natural soy wax & cotton wick", "Phthalate-free pure fragrance oils", "45-hour clean burn time", "Re-usable ceramic jar"],
    wingAffiliation: "The Hut Halal Network",
  },
  {
    id: "shop-10",
    title: "Halal Home Budgeting & Barakah Finance Roadmap (Digital Toolkit)",
    sellerSister: "Sister Sadia (Chartered Accountant)",
    brandName: "Amanah Wealth",
    brandVerified: true,
    mrpPrice: 1800,
    specialDiscountPrice: 1290,
    category: "Sister Services",
    subCategory: "Consulting & Mentorship",
    isWholesaleEligible: true,
    wholesaleMinQuantity: 5,
    wholesaleUnitPrice: 950,
    rating: 4.94,
    totalReviews: 36,
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    inStock: true,
    description: "Excel and Google Sheets automated financial tracking template built around Islamic Zakat calculations, emergency funds, and halal debt elimination.",
    features: ["Automatic Zakat & Sadaqah calculator", "Halal emergency fund tracker", "Pre-built monthly expense dashboard", "15-minute video tutorial walkthrough"],
    wingAffiliation: "IMBD Mentorship Wing",
  },
  {
    id: "shop-11",
    title: "Handmade Natural Olive & Laurel Oil Aleppo Soap Bar",
    sellerSister: "Sister Fatema-tuz-Zohra",
    brandName: "Sakinah Organics",
    brandVerified: true,
    mrpPrice: 480,
    specialDiscountPrice: 390,
    category: "Physical Products",
    subCategory: "Artisan & Handcrafted",
    isWholesaleEligible: true,
    wholesaleMinQuantity: 25,
    wholesaleUnitPrice: 280,
    rating: 4.91,
    totalReviews: 19,
    imageUrl: "https://images.unsplash.com/photo-1607006314605-618a806ddae7?auto=format&fit=crop&w=800&q=80",
    inStock: true,
    description: "Traditional cold-processed soap made with 80% Palestinian cold-pressed olive oil and 20% laurel berry oil. Zero sulfates or parabens.",
    features: ["9-month cured authentic bar", "Ultra-gentle on sensitive skin", "Biodegradable paper packaging", "Supports artisan soapmakers"],
    wingAffiliation: "The Hut Halal Network",
  },
  {
    id: "shop-12",
    title: "Islamic Children's Arabic Alphabet Wooden Puzzle Board",
    sellerSister: "Sister Raihana",
    brandName: "Noor Little Learners",
    brandVerified: true,
    mrpPrice: 1450,
    specialDiscountPrice: 1200,
    category: "Physical Products",
    subCategory: "Stationery & Publications",
    isWholesaleEligible: true,
    wholesaleMinQuantity: 10,
    wholesaleUnitPrice: 880,
    rating: 4.97,
    totalReviews: 51,
    imageUrl: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80",
    inStock: true,
    description: "Chunky wooden peg puzzle featuring all 28 Arabic letters in cheerful non-toxic pastel dyes. Encourages tactile fine-motor learning.",
    features: ["Solid smooth-sanded beechwood", "Non-toxic child-safe water-based paint", "Conforms to international toy safety", "Includes storage cotton pouch"],
    wingAffiliation: "Circle of Parents (CoP)",
  },
];

type MainTab = "All" | "Physical Products" | "Sister Services" | "Wholesale Ready";

export default function ShopPage() {
  const [activeTab, setActiveTab] = useState<MainTab>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("All");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "rating">("featured");
  const [selectedProduct, setSelectedProduct] = useState<ShopProduct | null>(null);
  const [clickedButtonId, setClickedButtonId] = useState<string | null>(null);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  // Filter and sort items
  const filteredProducts = useMemo(() => {
    return ALL_SHOP_ITEMS.filter((item) => {
      // 1. Tab Filter
      if (activeTab === "Physical Products" && item.category !== "Physical Products") return false;
      if (activeTab === "Sister Services" && item.category !== "Sister Services") return false;
      if (activeTab === "Wholesale Ready" && !item.isWholesaleEligible) return false;

      // 2. Subcategory Filter
      if (selectedSubCategory !== "All" && item.subCategory !== selectedSubCategory) return false;

      // 3. Search Query
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(query);
        const matchBrand = item.brandName.toLowerCase().includes(query);
        const matchSeller = item.sellerSister.toLowerCase().includes(query);
        const matchSub = item.subCategory.toLowerCase().includes(query);
        if (!matchTitle && !matchBrand && !matchSeller && !matchSub) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.specialDiscountPrice - b.specialDiscountPrice;
      if (sortBy === "price-desc") return b.specialDiscountPrice - a.specialDiscountPrice;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0; // featured
    });
  }, [activeTab, selectedSubCategory, searchQuery, sortBy]);

  // Handle arrow button click animation
  const handleButtonClick = (productId: string, product: ShopProduct) => {
    setClickedButtonId(productId);
    setSelectedProduct(product);
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
            <span className="font-semibold text-[#111E28]">Shop with Us</span>
          </nav>

          {/* Heading with Brand Badge */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7DFC7] text-[#111E28] text-xs font-bold tracking-wide uppercase mb-3 border border-[#F2B55D]/40">
                <ShoppingBag className="w-3.5 h-3.5 text-[#5B9891]" />
                <span>Halal E-Commerce • The Hut Artisan Network</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111E28] tracking-tight">
                Shop with Us: Sisterhood Commerce
              </h1>
              <p className="mt-3 text-base sm:text-lg text-stone-700 leading-relaxed">
                Buy directly from verified Muslim sisters and trusted women-led brands. Every listing is protected
                by the <strong>BDSisters Fair-Price Rule</strong>, member discounts, and transparent wholesale channels.
              </p>
            </div>

            {/* Quick stats badge */}
            <div className="flex items-center gap-3 bg-[#FAF8F5] p-3 sm:p-4 rounded-2xl border border-[#F7DFC7] shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-[#5B9891] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                100%
              </div>
              <div>
                <p className="text-xs font-bold text-[#111E28]">Halal & Fair-Priced</p>
                <p className="text-xs text-stone-600">Zero price gouging guarantee</p>
              </div>
            </div>
          </div>

          {/* Guarantee Banners Bar (Loch Blue & Paper Heart accents) */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-[#F7DFC7]/60 border border-[#F7DFC7] flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white text-[#5B9891] shadow-2xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#111E28]">BDSisters Fair Price Rule</h4>
                <p className="text-[11px] text-stone-600 mt-0.5">
                  MRP listed must be equal or lower than any other online platform.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F7DFC7]/60 border border-[#F7DFC7] flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white text-[#D98408] shadow-2xs">
                <BadgePercent className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#111E28]">ZiniPay Secured Instant Checkout</h4>
                <p className="text-[11px] text-stone-600 mt-0.5">
                  Halal escrow protection for peer-to-peer sister transactions.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F7DFC7]/60 border border-[#F7DFC7] flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white text-[#5B9891] shadow-2xs">
                <Store className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#111E28]">The Hut Halal Network</h4>
                <p className="text-[11px] text-stone-600 mt-0.5">
                  Synergized directly with verified home-based maker sisters.
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
            {/* Primary Category Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none" role="tablist">
              {(["All", "Physical Products", "Sister Services", "Wholesale Ready"] as MainTab[]).map((tab) => {
                const count =
                  tab === "All"
                    ? ALL_SHOP_ITEMS.length
                    : tab === "Wholesale Ready"
                    ? ALL_SHOP_ITEMS.filter((i) => i.isWholesaleEligible).length
                    : ALL_SHOP_ITEMS.filter((i) => i.category === tab).length;

                const isActive = activeTab === tab;

                return (
                  <button
                    key={tab}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => {
                      setActiveTab(tab);
                      setSelectedSubCategory("All");
                    }}
                    className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
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

            {/* Search Input & Sort Selector */}
            <div className="flex items-center gap-3">
              <div className="relative flex-1 md:w-64">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products, sisters..."
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

              <div className="flex items-center gap-1.5 bg-white px-3 py-2 rounded-full border border-[#F7DFC7] text-xs">
                <SlidersHorizontal className="w-3.5 h-3.5 text-stone-500" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent text-xs text-[#111E28] font-medium focus:outline-none cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>
          </div>

          {/* Subcategory Filter Pills */}
          <div className="mt-3 flex items-center gap-2 overflow-x-auto pb-1 text-xs scrollbar-none">
            <span className="text-stone-500 font-medium text-[11px] whitespace-nowrap flex items-center gap-1">
              <Filter className="w-3 h-3 text-[#5B9891]" /> Filter by genre:
            </span>
            {[
              "All",
              "Halal Skincare & Wellness",
              "Modest Clothing & Hijab",
              "Consulting & Mentorship",
              "Stationery & Publications",
              "Artisan & Handcrafted",
            ].map((sub) => {
              const isSelected = selectedSubCategory === sub;
              return (
                <button
                  key={sub}
                  onClick={() => setSelectedSubCategory(sub)}
                  className={`px-3 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all ${
                    isSelected
                      ? "bg-[#D98408] text-white shadow-2xs"
                      : "bg-[#F7DFC7]/40 text-stone-700 hover:bg-[#F7DFC7] border border-[#F7DFC7]/60"
                  }`}
                >
                  {sub}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. PRODUCT CATALOG GRID (Cards with Rotating Arrow Button) */}
      {/* ========================================================= */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-[#F7DFC7] p-8 max-w-md mx-auto shadow-2xs">
              <div className="w-16 h-16 rounded-full bg-[#F7DFC7] text-[#D98408] flex items-center justify-center mx-auto mb-4">
                <Box className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#111E28]">No listings found</h3>
              <p className="mt-2 text-xs text-stone-600">
                No items match your active filters. Try resetting the search or category filters.
              </p>
              <button
                onClick={() => {
                  setActiveTab("All");
                  setSelectedSubCategory("All");
                  setSearchQuery("");
                }}
                className="mt-5 px-5 py-2 rounded-full bg-[#5B9891] text-white font-bold text-xs hover:bg-[#5B9891]/90 shadow-2xs transition-all"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => {
                const isClicked = clickedButtonId === product.id;

                return (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-white rounded-3xl border border-[#F7DFC7] overflow-hidden flex flex-col justify-between hover:shadow-md hover:border-[#5B9891]/40 transition-all duration-300"
                  >
                    {/* Top Image Banner */}
                    <div className="relative h-52 w-full overflow-hidden bg-stone-100">
                      <img
                        src={product.imageUrl}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#FAF8F5]/90 backdrop-blur-md text-[#111E28] border border-[#F7DFC7] shadow-2xs">
                          {product.subCategory}
                        </span>

                        {product.isWholesaleEligible && (
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#D98408] text-white shadow-2xs flex items-center gap-1">
                            <Box className="w-3 h-3" />
                            Wholesale Ready
                          </span>
                        )}
                      </div>

                      {/* Quick View Button overlay on hover */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button
                          onClick={() => setSelectedProduct(product)}
                          className="px-4 py-2 rounded-full bg-white text-[#111E28] text-xs font-bold shadow-md hover:bg-[#F7DFC7] transition-all flex items-center gap-1.5"
                        >
                          <Eye className="w-3.5 h-3.5 text-[#5B9891]" />
                          Quick View
                        </button>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Seller & Verification */}
                        <div className="flex items-center justify-between text-xs text-stone-600 mb-2">
                          <div className="flex items-center gap-1.5">
                            <span className="font-semibold text-[#111E28]">{product.brandName}</span>
                            {product.brandVerified && (
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#5B9891]" title="Verified Sister Brand" />
                            )}
                          </div>
                          <div className="flex items-center gap-1 text-[#D98408] font-bold text-[11px]">
                            <Star className="w-3 h-3 fill-current" />
                            <span>{product.rating}</span>
                            <span className="text-stone-400 font-normal">({product.totalReviews})</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="font-serif text-base font-bold text-[#111E28] group-hover:text-[#5B9891] transition-colors line-clamp-2 leading-snug">
                          {product.title}
                        </h3>

                        {/* Seller Sister & Affiliation */}
                        <p className="mt-1 text-[11px] text-stone-500">
                          By <span className="font-medium text-stone-700">{product.sellerSister}</span>
                          {product.wingAffiliation && (
                            <span className="text-[#5B9891] ml-1.5">({product.wingAffiliation})</span>
                          )}
                        </p>

                        {/* Pricing Block */}
                        <div className="mt-4 pt-3 border-t border-[#F7DFC7]/60 flex items-baseline justify-between">
                          <div>
                            <div className="flex items-baseline gap-2">
                              <span className="text-lg font-bold text-[#D98408]">
                                ৳{product.specialDiscountPrice}
                              </span>
                              <span className="text-xs text-stone-400 line-through">
                                ৳{product.mrpPrice}
                              </span>
                            </div>
                            <span className="text-[10px] text-[#5B9891] font-semibold">
                              Sister Member Price (BDSisters Exclusive)
                            </span>
                          </div>

                          {product.isWholesaleEligible && (
                            <div className="text-right">
                              <span className="text-xs font-bold text-[#111E28]">
                                ৳{product.wholesaleUnitPrice}/pc
                              </span>
                              <p className="text-[10px] text-stone-500">
                                Min {product.wholesaleMinQuantity} pcs
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* ========================================================= */}
                      {/* CARD FOOTER: Left Label + Right Compact Capsule Button   */}
                      {/* Interactive Rotating Arrow (45° up -> 0° level on click)  */}
                      {/* ========================================================= */}
                      <div className="mt-5 pt-3 border-t border-[#F7DFC7]/60 flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-stone-600 flex items-center gap-1">
                          <Truck className="w-3.5 h-3.5 text-[#5B9891]" />
                          {product.category === "Physical Products" ? "Nationwide Delivery" : "Online Instant Booking"}
                        </span>

                        <button
                          type="button"
                          onClick={() => handleButtonClick(product.id, product)}
                          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#F7DFC7] hover:bg-[#F2B55D] text-[#111E28] transition-all duration-200 border border-[#F2B55D]/40 group/btn shadow-2xs"
                        >
                          <span>Order Details</span>
                          <span
                            className="inline-flex items-center justify-center transition-transform duration-300 ease-out"
                            style={{
                              transform: isClicked ? "rotate(0deg)" : "rotate(-45deg)",
                            }}
                          >
                            <ArrowRight className="w-3.5 h-3.5 text-[#111E28] transition-colors" />
                          </span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. SISTER VENDOR REGISTRATION CALLOUT (Golden Hour/Paper)  */}
      {/* ========================================================= */}
      <section className="py-16 bg-white border-t border-[#F7DFC7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#F7DFC7]/50 via-white to-[#F7DFC7]/30 border border-[#F7DFC7] relative overflow-hidden shadow-2xs">
            <div className="max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5B9891]/15 text-[#5B9891] text-xs font-bold uppercase mb-4 border border-[#5B9891]/20">
                <Store className="w-3.5 h-3.5" />
                <span>Sell on BDSisters Halal Marketplace</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111E28] tracking-tight">
                Are you a Muslim Sister with a Halal Brand or Service?
              </h2>
              <p className="mt-3 text-sm sm:text-base text-stone-700 leading-relaxed">
                Join 150+ verified sister entrepreneurs on the BDSisters platform. Enjoy zero hidden commission
                charges, an ethical sisterhood audience, and direct escrow integration with ZiniPay.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/who-we-are"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D98408] text-white font-bold text-xs hover:bg-[#D98408]/90 transition-all shadow-sm"
                >
                  <span>Apply for Vendor Verification</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="flex items-center gap-2 text-xs font-semibold text-stone-600">
                  <ShieldCheck className="w-4 h-4 text-[#5B9891]" />
                  <span>NID & Female-Admin Verification Required</span>
                </div>
              </div>
            </div>

            {/* Subtle decorative background watermarks */}
            <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 opacity-10 pointer-events-none">
              <ShoppingBag className="w-72 h-72 text-[#5B9891]" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. PRODUCT DETAILS & CHECKOUT MODAL                        */}
      {/* ========================================================= */}
      <AnimatePresence>
        {selectedProduct && (
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
                    {selectedProduct.category}
                  </span>
                  <span className="text-xs text-stone-500 font-medium">
                    Listing ID: {selectedProduct.id}
                  </span>
                </div>
                <button
                  onClick={() => {
                    setSelectedProduct(null);
                    setCheckoutSuccess(false);
                  }}
                  className="p-1.5 rounded-full hover:bg-stone-200 text-stone-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto space-y-6">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="w-full sm:w-1/2 h-56 rounded-2xl overflow-hidden bg-stone-100 flex-shrink-0">
                    <img
                      src={selectedProduct.imageUrl}
                      alt={selectedProduct.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#5B9891] mb-1">
                        <span>{selectedProduct.brandName}</span>
                        {selectedProduct.brandVerified && (
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        )}
                      </div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#111E28]">
                        {selectedProduct.title}
                      </h3>
                      <p className="mt-1 text-xs text-stone-500">
                        Owner: {selectedProduct.sellerSister}
                      </p>

                      <div className="mt-3 flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-[#D98408]">
                          ৳{selectedProduct.specialDiscountPrice}
                        </span>
                        <span className="text-sm text-stone-400 line-through">
                          ৳{selectedProduct.mrpPrice}
                        </span>
                      </div>
                    </div>

                    {selectedProduct.isWholesaleEligible && (
                      <div className="mt-3 p-3 rounded-xl bg-[#F7DFC7]/60 border border-[#F7DFC7] text-xs">
                        <span className="font-bold text-[#111E28] block">Wholesale Supply Rate:</span>
                        <span className="text-[#D98408] font-bold">
                          ৳{selectedProduct.wholesaleUnitPrice}/unit
                        </span>{" "}
                        (Min order {selectedProduct.wholesaleMinQuantity} units)
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#111E28] mb-2">
                    Description & Specifications
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {selectedProduct.description}
                  </p>

                  <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600">
                    {selectedProduct.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#5B9891] flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ZiniPay Escrow Notice */}
                <div className="p-4 rounded-2xl bg-[#5B9891]/10 border border-[#5B9891]/20 flex items-start gap-3">
                  <Lock className="w-4 h-4 text-[#5B9891] mt-0.5 flex-shrink-0" />
                  <div className="text-xs text-stone-700">
                    <p className="font-bold text-[#111E28]">100% Halal Escrow via ZiniPay</p>
                    <p className="mt-0.5 text-stone-600">
                      Payment is held securely and only disbursed to the sister seller after order confirmation
                      and mutual satisfaction.
                    </p>
                  </div>
                </div>

                {checkoutSuccess && (
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Demo order placed successfully! In production, this redirects to the secure ZiniPay gateway.</span>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-6 border-t border-[#F7DFC7] bg-[#FAF8F5] flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProduct(null);
                    setCheckoutSuccess(false);
                  }}
                  className="px-5 py-2.5 rounded-full border border-stone-300 text-xs font-bold text-stone-700 hover:bg-stone-100 transition-colors"
                >
                  Close
                </button>

                <button
                  type="button"
                  onClick={() => setCheckoutSuccess(true)}
                  className="px-6 py-2.5 rounded-full bg-[#D98408] hover:bg-[#D98408]/90 text-white text-xs font-bold shadow-sm transition-all flex items-center gap-2"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Instant Checkout with ZiniPay</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
