"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Heart,
  Sparkles,
  Users,
  Building2,
  CheckCircle2,
  Lock,
  ArrowRight,
  BookOpen,
  Award,
  Compass,
  FileCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/common/MotionComponents";
import { SISTER_WINGS } from "@/data/mockData";

export default function WhoWeArePage() {
  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* ========================================================= */}
      {/* 1. HERO BANNER: Who We Are & Sacred Mission               */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden pt-12 pb-20 border-b border-[#F7DFC7] bg-gradient-to-b from-[#FAF8F5] via-white to-[#FAF8F5]">
        {/* Soft Ambient Background Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#5B9891]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#F7DFC7]/60 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs font-semibold text-stone-500">
              <li>
                <Link href="/" className="hover:text-[#5B9891] transition-colors">
                  Home
                </Link>
              </li>
              <li>•</li>
              <li className="text-[#D98408] font-bold" aria-current="page">
                Who We Are
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7DFC7] text-[#111E28] text-xs font-bold border border-[#F7DFC7] shadow-2xs">
              <Building2 className="w-3.5 h-3.5 text-[#5B9891]" />
              <span>A Dedicated Wing of Muhsina Organization</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111E28] leading-[1.18] tracking-tight">
              Rooted in Faith, Dignity & <br />
              <span className="text-[#5B9891]">Sisterhood Empowerment</span>
            </h1>

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal pt-2">
              BDSisters.org is an exclusive online sanctuary established under the umbrella of{" "}
              <strong className="text-[#111E28]">Muhsina Organization</strong>. We exist to protect,
              connect, and uplift Muslim sisters through verified personal profiles, authentic halal
              commerce, peer-reviewed resources, and safe community forums.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. OUR SACRED ETHICAL PILLARS (4 Islamic Tenets)          */}
      {/* ========================================================= */}
      <section className="py-16 border-b border-[#F7DFC7] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="p-1.5 rounded-lg bg-[#F7DFC7] text-[#111E28] text-xs font-bold uppercase tracking-wider px-3 inline-block mb-3 border border-[#F7DFC7]">
                Islamic Core Principles
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111E28]">
                Four Values Guiding Every Interaction
              </h2>
              <p className="mt-2 text-sm text-stone-600">
                Our organization is not just a digital platform; it is a sacred trust (Amanah) honoring
                the modesty and self-sufficiency of women in Islam.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer
            staggerDelay={0.1}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Pillar 1: Al-Amanah */}
            <StaggerItem>
              <div className="h-full rounded-2xl bg-[#FAF8F5] border border-[#F7DFC7] p-6 hover:border-[#5B9891] hover:shadow-lg transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#5B9891] text-white flex items-center justify-center mb-4 shadow-sm">
                    <ShieldCheck className="w-6 h-6 text-[#F7DFC7]" />
                  </div>
                  <span className="text-[11px] font-bold text-[#D98408] uppercase tracking-wider block mb-1">
                    Pillar 01
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#111E28] mb-2">
                    Al-Amanah (Sacred Trust)
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Personal data, NID identity documents, and communication privacy are treated with strict
                    Islamic responsibility and reviewed solely by verified female administrators.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#F7DFC7] text-[11px] font-bold text-[#5B9891]">
                  Zero commercial data sharing
                </div>
              </div>
            </StaggerItem>

            {/* Pillar 2: Al-Haya */}
            <StaggerItem>
              <div className="h-full rounded-2xl bg-[#FAF8F5] border border-[#F7DFC7] p-6 hover:border-[#5B9891] hover:shadow-lg transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#D98408] text-white flex items-center justify-center mb-4 shadow-sm">
                    <Lock className="w-6 h-6 text-[#F7DFC7]" />
                  </div>
                  <span className="text-[11px] font-bold text-[#D98408] uppercase tracking-wider block mb-1">
                    Pillar 02
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#111E28] mb-2">
                    Al-Haya (Dignified Privacy)
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Direct phone and WhatsApp numbers are protected by default. Locations are recorded at
                    district-level only, safeguarding sisters from harassment or unwanted exposure.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#F7DFC7] text-[11px] font-bold text-[#D98408]">
                  Field-level privacy controls
                </div>
              </div>
            </StaggerItem>

            {/* Pillar 3: Al-Ihsan */}
            <StaggerItem>
              <div className="h-full rounded-2xl bg-[#FAF8F5] border border-[#F7DFC7] p-6 hover:border-[#5B9891] hover:shadow-lg transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#5B9891] text-white flex items-center justify-center mb-4 shadow-sm">
                    <Award className="w-6 h-6 text-[#F7DFC7]" />
                  </div>
                  <span className="text-[11px] font-bold text-[#D98408] uppercase tracking-wider block mb-1">
                    Pillar 03
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#111E28] mb-2">
                    Al-Ihsan (Excellence in Trade)
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Our marketplace enforces a strict Fair-Pricing Rule: listed MRP must equal or beat open
                    markets. We ban predatory pricing, gouging, and counterfeit artisan goods.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#F7DFC7] text-[11px] font-bold text-[#5B9891]">
                  BDSisters Fair Price Guarantee
                </div>
              </div>
            </StaggerItem>

            {/* Pillar 4: At-Ta'awun */}
            <StaggerItem>
              <div className="h-full rounded-2xl bg-[#FAF8F5] border border-[#F7DFC7] p-6 hover:border-[#5B9891] hover:shadow-lg transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#D98408] text-white flex items-center justify-center mb-4 shadow-sm">
                    <Heart className="w-6 h-6 text-[#F7DFC7]" />
                  </div>
                  <span className="text-[11px] font-bold text-[#D98408] uppercase tracking-wider block mb-1">
                    Pillar 04
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#111E28] mb-2">
                    At-Ta&apos;awun (Mutual Aid)
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Through non-monetary skill exchange, homeschooling curricula, emergency relief funds,
                    and Islamic mentorship, sisters actively assist one another without barriers.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#F7DFC7] text-[11px] font-bold text-[#D98408]">
                  Community welfare & sadaqah
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. THE MUHSINA UMBRELLA ECOSYSTEM                         */}
      {/* ========================================================= */}
      <section className="py-16 border-b border-[#F7DFC7] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#111E28] bg-[#F7DFC7] px-3.5 py-1.5 rounded-full border border-[#F7DFC7] inline-block">
                Unified Ecosystem
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111E28]">
                How BDSisters Connects With Muhsina Wings
              </h2>
              <p className="text-sm text-stone-700 leading-relaxed">
                Rather than creating disconnected groups across social media, Muhsina Organization established
                a centralized database hub where sister initiatives collaborate harmoniously.
              </p>
              <div className="p-4 rounded-2xl bg-white border border-[#F7DFC7] space-y-2 text-xs">
                <div className="font-bold text-[#5B9891] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5B9891]" />
                  <span>One Unified Single-Sign-On Account</span>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  A single verified profile on BDSisters grants verified access to publications from TSPP,
                  dialogues on MIDJ, parenting support in CoP, and artisan supplier catalogs on The Hut.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SISTER_WINGS.map((wing) => (
                  <div
                    key={wing.id}
                    className="p-5 rounded-2xl bg-white border border-[#F7DFC7] hover:border-[#5B9891] hover:shadow-md transition-all space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#F7DFC7] text-[#111E28]">
                        {wing.code}
                      </span>
                      <span className="text-[11px] font-bold text-[#5B9891]">Active Wing</span>
                    </div>
                    <h3 className="font-serif text-base font-bold text-[#111E28]">
                      {wing.name}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {wing.roleInBDSisters}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. VERIFICATION PIPELINE (Transparency for Sisters)       */}
      {/* ========================================================= */}
      <section className="py-16 border-b border-[#F7DFC7] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#111E28] bg-[#F7DFC7] px-3.5 py-1.5 rounded-full border border-[#F7DFC7] inline-block mb-3">
              Sacred Vetting Pipeline
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111E28]">
              Why We Require Referral & NID
            </h2>
            <p className="mt-2 text-sm text-stone-600">
              Unlike public social networks where pseudonyms and bad actors proliferate, BDSisters maintains
              a clean, safe, and accountable environment for every woman.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#F7DFC7] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#5B9891] text-white flex items-center justify-center font-serif text-lg font-bold">
                1
              </div>
              <h3 className="font-serif text-base font-bold text-[#111E28]">
                Mandatory Existing Member Referral
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Every registrant must provide the Member ID of a verified sister who knows her in person.
                This organic trust chain guarantees accountability before registration begins.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#F7DFC7] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#D98408] text-white flex items-center justify-center font-serif text-lg font-bold">
                2
              </div>
              <h3 className="font-serif text-base font-bold text-[#111E28]">
                NID / Passport Encrypted Upload
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Identity documents are encrypted at rest with military-grade standards. They are accessible
                exclusively to designated female verification officers and never displayed to peers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#F7DFC7] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#5B9891] text-white flex items-center justify-center font-serif text-lg font-bold">
                3
              </div>
              <h3 className="font-serif text-base font-bold text-[#111E28]">
                Sisterhood Directory Certification
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Once approved, members receive their official Sisterhood Badge, allowing them to engage
                in forums, list products on the marketplace, and participate in peer skill exchanges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. CALL TO ACTION: Join or Inquire                        */}
      {/* ========================================================= */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#5B9891] text-white shadow-xl border-2 border-[#477C76] space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#111E28] bg-[#F2B55D] px-3.5 py-1.5 rounded-full inline-block">
              Become Part of Our Sanctuary
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Ready to Join the BDSisters Ecosystem?
            </h2>
            <p className="text-xs sm:text-sm text-[#F7DFC7] max-w-xl mx-auto leading-relaxed">
              If you have a referral ID from an existing member, begin your free verification today. If you have questions regarding our vetting policies, reach out to our team.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href="/auth/register"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#D98408] hover:bg-[#B86E04] text-white text-xs font-bold shadow-md transition-all border border-[#F2B55D]"
              >
                <Sparkles className="w-4 h-4 text-[#F7DFC7]" />
                <span>Join as a Sister (Referral Required)</span>
              </Link>

              <Link
                href="/#shop"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white text-[#111E28] hover:bg-[#F7DFC7] text-xs font-bold transition-all border border-[#F7DFC7] shadow-xs"
              >
                <span>Browse Halal Marketplace</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#5B9891]" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
