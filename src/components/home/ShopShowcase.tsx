"use client";

import React, { useState } from "react";
import {
  ShoppingBag,
  Star,
  ShieldCheck,
  CheckCircle2,
  BadgePercent,
  Layers,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FEATURED_PRODUCTS, SECTION_EXPLAINERS } from "@/data/mockData";
import { SectionHoverInfo } from "@/components/common/SectionHoverInfo";
import { ProductItem } from "@/types";
import { ScrollReveal } from "@/components/common/MotionComponents";

type FilterCategory = "All" | "Products" | "Services" | "Wholesale";

export function ShopShowcase() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");
  const [products] = useState<ProductItem[]>(FEATURED_PRODUCTS);

  const filteredProducts = products.filter((item) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Wholesale") return item.isWholesaleEligible;
    return item.category === activeCategory;
  });

  return (
    <section
      id="shop"
      aria-labelledby="shop-heading"
      className="py-16 bg-white border-b border-[#F7DFC7] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#F7DFC7]/60">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1.5 rounded-lg bg-[#F7DFC7] text-[#111E28] border border-[#F7DFC7]">
                  <ShoppingBag className="w-4 h-4 text-[#5B9891]" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#111E28]">
                  Halal E-Commerce Marketplace
                </span>
              </div>
              <h2
                id="shop-heading"
                className="font-serif text-2xl sm:text-3xl font-bold text-[#111E28] tracking-tight"
              >
                Shop with Us: Sisterhood Commerce
              </h2>
              <p className="mt-2 text-sm sm:text-base text-stone-700 max-w-2xl">
                Buy directly from verified Muslim sisters and trusted brands. Protected with our
                strict fair-pricing policies, member discounts, and wholesale channels.
              </p>
            </div>

            <div className="flex-shrink-0">
              <SectionHoverInfo
                explainer={SECTION_EXPLAINERS.shop}
                sectionName="Shop with Us"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* MRP & Sisterhood Pricing Policy Bar in Warm Sand */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="mb-8 p-4 rounded-2xl bg-[#F7DFC7] border border-[#F7DFC7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#111E28] shadow-xs">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#5B9891] flex-shrink-0" />
              <span>
                <strong>BDSisters Fair Price Rule:</strong> The MRP listed here must be equal or lower than other online platforms.
              </span>
            </div>
            <div className="flex items-center gap-2 font-bold bg-white/70 px-3 py-1 rounded-full border border-[#F7DFC7]">
              <BadgePercent className="w-4 h-4 text-[#5B9891]" />
              <span>ZiniPay Secured Instant Checkout</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Category Filters */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap items-center gap-2" role="tablist">
              {(["All", "Products", "Services", "Wholesale"] as FilterCategory[]).map(
                (cat) => (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={activeCategory === cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                      activeCategory === cat
                        ? "bg-[#5B9891] text-white shadow-sm border border-[#5B9891]"
                        : "bg-[#FAF8F5] text-[#111E28] hover:bg-[#F7DFC7] border border-[#F7DFC7]"
                    }`}
                  >
                    {cat === "All"
                      ? "All Listings"
                      : cat === "Products"
                      ? "Physical Products"
                      : cat === "Services"
                      ? "Sister Services"
                      : "Wholesale Ready"}
                  </button>
                )
              )}
            </div>

            <div className="flex items-center gap-2 text-xs text-stone-600 font-semibold">
              <span>Shop by:</span>
              <a href="#brands" className="underline hover:text-[#5B9891]">
                Brand Profiles
              </a>
              <span>•</span>
              <a href="#sisters" className="underline hover:text-[#5B9891]">
                Sisters&apos; Profiles
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Products Grid with Smooth Reorder & Layout Animation */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[420px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => {
              const discountPercent = Math.round(
                ((product.mrpPrice - product.specialDiscountPrice) /
                  product.mrpPrice) *
                  100
              );

              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: -16 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="group h-full rounded-2xl border border-[#F7DFC7] bg-white hover:shadow-xl hover:border-[#5B9891] transition-colors flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    {/* Product Image Box */}
                    <div className="relative h-48 w-full bg-[#FAF8F5] overflow-hidden">
                      <img
                        src={product.imageUrl}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src =
                            "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80";
                        }}
                      />

                      {/* Category & Discount Badges */}
                      <div className="absolute top-2 left-2 flex flex-col gap-1">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#5B9891] text-white backdrop-blur-xs border border-[#D98408]/40">
                          {product.category}
                        </span>
                        {discountPercent > 0 && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#5B9891] text-white shadow-xs">
                            Save {discountPercent}%
                          </span>
                        )}
                      </div>

                      {/* Wholesale Availability Badge */}
                      <div className="absolute bottom-2 right-2">
                        {product.isWholesaleEligible ? (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#F7DFC7] text-[#111E28] border border-[#D98408] shadow-xs flex items-center gap-1">
                            <Layers className="w-3 h-3 text-[#D98408]" /> Wholesale Ready
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded-full text-[9px] font-medium bg-[#5B9891]/90 text-white backdrop-blur-xs border border-white/20">
                            Retail Only
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content Info */}
                    <div className="p-4 space-y-2">
                      {/* Brand and Sister Seller */}
                      <div className="flex items-center justify-between text-[11px] text-stone-600">
                        <span className="font-bold text-[#111E28] flex items-center gap-1">
                          {product.brandName}
                          {product.brandVerified && (
                            <CheckCircle2 className="w-3 h-3 text-[#5B9891] inline" />
                          )}
                        </span>
                        <span className="font-medium">By {product.sellerSister}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-sm font-bold text-[#111E28] line-clamp-2 group-hover:text-[#5B9891] transition-colors leading-snug">
                        {product.title}
                      </h3>

                      {/* Ratings */}
                      <div className="flex items-center gap-1.5 text-xs">
                        <div className="flex items-center text-[#F2B55D] fill-[#F2B55D]">
                          <Star className="w-3.5 h-3.5 fill-current" />
                        </div>
                        <span className="font-bold text-stone-800">
                          {product.rating}
                        </span>
                        <span className="text-[11px] text-stone-500">
                          ({product.totalReviews} reviews)
                        </span>
                      </div>

                      {/* Price Block */}
                      <div className="pt-2 border-t border-[#F7DFC7]/50 flex items-baseline gap-2">
                        <span className="text-base font-extrabold text-[#111E28] font-serif">
                          ৳{product.specialDiscountPrice.toLocaleString()}
                        </span>
                        <span className="text-xs text-stone-400 line-through">
                          MRP ৳{product.mrpPrice.toLocaleString()}
                        </span>
                      </div>

                      {/* Wholesale Price Info if Eligible */}
                      {product.isWholesaleEligible && product.wholesaleUnitPrice && (
                        <div className="p-2 rounded-xl bg-[#FAF8F5] border border-[#F7DFC7] text-[11px] text-[#111E28]">
                          Wholesale: <strong>৳{product.wholesaleUnitPrice}</strong> / pc (Min {product.wholesaleMinQuantity} pcs)
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="p-4 pt-0">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      className="w-full py-2.5 px-3 rounded-xl bg-[#5B9891] hover:bg-[#477C76] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs border border-[#5B9891]"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-[#D98408]" />
                      <span>View & Purchase</span>
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View All Marketplace CTA */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="mt-10 text-center">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#full-marketplace"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#D98408] hover:bg-[#B86E04] text-white text-xs font-bold transition-all shadow-md border border-[#F2B55D]"
            >
              <span>Explore All Products & Services in Directory</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
