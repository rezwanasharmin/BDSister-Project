"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Send,
  MessageCircle,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Phone,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  ChevronRight,
  Layers,
  Sparkles,
  Lock,
  Store,
  Baby,
  BookOpen,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "How does the Sister Referral requirement work?",
    answer:
      "To preserve a peaceful, verified sanctuary for Muslim women, every new registrant must provide the name and member ID of an existing verified sister or Muhsina Organization administrator who vouches for her character. If you do not know a sister personally, our female vetting board can conduct a brief private voice verification.",
  },
  {
    question: "Is my NID or Passport safe when submitted?",
    answer:
      "Absolutely. Government identity documents are encrypted immediately upon upload and are stored in an air-gapped system accessible solely by female administrative stewards. No other sister, vendor, or guest can ever view your NID or Passport.",
  },
  {
    question: "Can I sell my handmade products on The Hut Network?",
    answer:
      "Yes! Verified sisters who formulate or craft halal physical products (skincare, modest apparel, journals, Sunnah remedies) or provide professional services can apply for vendor certification under The Hut Network. All vendors must adhere to the BDSisters Fair Price Policy.",
  },
  {
    question: "How does the ZiniPay escrow checkout protect sister buyers?",
    answer:
      "When you purchase through BDSisters, your payment is held securely in an Islamic escrow account managed with ZiniPay. The payment is only released to the seller sister once your parcel is delivered and confirmed in satisfactory condition.",
  },
  {
    question: "Is registration completely free for individual sisters?",
    answer:
      "Yes. Individual Personal Profiles, access to the discussion forums, the entire Curated Resource Library, and community sisterhood halaqahs are 100% free forever for all verified Muslim women.",
  },
];

export default function ContactPage() {
  // Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [sisterStatus, setSisterStatus] = useState("Prospective Sister (New)");
  const [subject, setSubject] = useState("General Sisterhood Inquiry");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // FAQ Accordion State
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(0);

  // Button Click Animation State
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !message) return;
    setIsSubmitting(true);
    setButtonClicked(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setButtonClicked(false);
    }, 600);
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
            <span className="font-semibold text-[#111E28]">Get in Touch</span>
          </nav>

          {/* Heading */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7DFC7] text-[#111E28] text-xs font-bold tracking-wide uppercase mb-3 border border-[#F2B55D]/40">
                <Mail className="w-3.5 h-3.5 text-[#5B9891]" />
                <span>Communication & Inquiries • 100% Female Administrative Stewards</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111E28] tracking-tight">
                Get in Touch with BDSisters
              </h1>
              <p className="mt-3 text-base sm:text-lg text-stone-700 leading-relaxed">
                Have questions about referral verification, vendor onboarding on The Hut, homeschooling circles,
                or wing partnerships? Our female administration will respond with sincere care and confidentiality.
              </p>
            </div>

            {/* Quick Stat Badge */}
            <div className="flex items-center gap-3 bg-[#FAF8F5] p-3 sm:p-4 rounded-2xl border border-[#F7DFC7] shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-[#5B9891] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                24h
              </div>
              <div>
                <p className="text-xs font-bold text-[#111E28]">Sister Care Turnaround</p>
                <p className="text-xs text-stone-600">Confidential female team</p>
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
                <h4 className="text-xs font-bold text-[#111E28]">100% Female Handled</h4>
                <p className="text-[11px] text-stone-600 mt-0.5">
                  Only vetted Muslim sisters review support tickets and verification appeals.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F7DFC7]/60 border border-[#F7DFC7] flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white text-[#D98408] shadow-2xs">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#111E28]">Confidential & Private</h4>
                <p className="text-[11px] text-stone-600 mt-0.5">
                  Your inquiry and contact details are never exposed or shared with third parties.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F7DFC7]/60 border border-[#F7DFC7] flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white text-[#5B9891] shadow-2xs">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#111E28]">Prompt Assistance</h4>
                <p className="text-[11px] text-stone-600 mt-0.5">
                  Official responses dispatched within 24 to 48 business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. CONTACT FORM & COMMUNITY CHANNELS                       */}
      {/* ========================================================= */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 Cols: Interactive Direct Inquiry Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-[#F7DFC7] p-6 sm:p-8 shadow-sm">
              <div className="mb-6">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#111E28]">
                  Send an Official Inquiry
                </h2>
                <p className="text-xs text-stone-600 mt-1">
                  Fill in the details below. Our female administration will follow up promptly via email.
                </p>
              </div>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3"
                >
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="font-serif text-lg font-bold text-emerald-900">
                    Inquiry Received with Care!
                  </h3>
                  <p className="text-xs text-emerald-700 leading-relaxed max-w-md mx-auto">
                    Jazakillahu Khairan, Sister <strong>{fullName}</strong>. Your inquiry regarding{" "}
                    <strong>{subject}</strong> has been logged. Our administrative team will reply to{" "}
                    <strong>{email}</strong> within 24-48 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSuccess(false);
                      setFullName("");
                      setEmail("");
                      setMessage("");
                    }}
                    className="mt-4 px-6 py-2 rounded-full bg-emerald-700 text-white font-bold text-xs hover:bg-emerald-800 transition-colors shadow-2xs"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[#111E28] mb-1">
                        Full Name / Sister Title *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Sister's Full Name"
                        className="w-full p-3 rounded-xl bg-[#FAF8F5] border border-[#F7DFC7] focus:outline-none focus:ring-2 focus:ring-[#5B9891]"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-[#111E28] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your.email@example.com"
                        className="w-full p-3 rounded-xl bg-[#FAF8F5] border border-[#F7DFC7] focus:outline-none focus:ring-2 focus:ring-[#5B9891]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[#111E28] mb-1">
                        Your Current Sister Status
                      </label>
                      <select
                        value={sisterStatus}
                        onChange={(e) => setSisterStatus(e.target.value)}
                        className="w-full p-3 rounded-xl bg-[#FAF8F5] border border-[#F7DFC7] font-medium focus:outline-none focus:ring-2 focus:ring-[#5B9891]"
                      >
                        <option value="Prospective Sister (New)">Prospective Sister (New)</option>
                        <option value="Verified Community Member">Verified Community Member</option>
                        <option value="Halal Artisan / Vendor">Halal Artisan / Vendor</option>
                        <option value="Academic / Scholar Partner">Academic / Scholar Partner</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-[#111E28] mb-1">
                        Inquiry Subject / Wing *
                      </label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full p-3 rounded-xl bg-[#FAF8F5] border border-[#F7DFC7] font-medium focus:outline-none focus:ring-2 focus:ring-[#5B9891]"
                      >
                        <option value="General Sisterhood Inquiry">General Sisterhood Inquiry</option>
                        <option value="Referral & KYC Verification Help">Referral & KYC Verification Help</option>
                        <option value="The Hut Vendor Onboarding">The Hut Vendor Onboarding</option>
                        <option value="CoP Parenting & Homeschooling">CoP Parenting & Homeschooling</option>
                        <option value="TSPP Publication Submission">TSPP Publication Submission</option>
                        <option value="Dispute & Fair Price Grievance">Dispute & Fair Price Grievance</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-[#111E28] mb-1">
                      Your Message / Detailed Question *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your inquiry or question here with as much context as possible..."
                      className="w-full p-3 rounded-xl bg-[#FAF8F5] border border-[#F7DFC7] focus:outline-none focus:ring-2 focus:ring-[#5B9891]"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-[#F7DFC7]/60">
                    <span className="text-[11px] text-stone-500 font-medium flex items-center gap-1">
                      <Lock className="w-3.5 h-3.5 text-[#5B9891]" />
                      Handled confidentially
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold bg-[#D98408] hover:bg-[#D98408]/90 text-white transition-all shadow-sm group/btn"
                    >
                      <span>{isSubmitting ? "Sending..." : "Submit Inquiry"}</span>
                      <span
                        className="inline-flex items-center justify-center transition-transform duration-300 ease-out"
                        style={{
                          transform: buttonClicked ? "rotate(0deg)" : "rotate(-45deg)",
                        }}
                      >
                        <ArrowRight className="w-3.5 h-3.5 text-white" />
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right 5 Cols: Moderated Community Channels & Direct Desks */}
            <div className="lg:col-span-5 space-y-4">
              {/* WhatsApp Broadcast Channel */}
              <div className="p-5 rounded-3xl bg-white border border-[#F7DFC7] shadow-2xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#5B9891]/15 text-[#5B9891] flex items-center justify-center font-bold">
                    WA
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#111E28]">
                      Official WhatsApp Channel
                    </h3>
                    <p className="text-[11px] text-stone-500">
                      Daily announcements, events & member deals
                    </p>
                  </div>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed mb-3">
                  Broadcast-only private channel. Your phone number is shielded and invisible to other members.
                </p>
                <button
                  type="button"
                  onClick={() => alert("Redirecting to WhatsApp Community Circle for verified sisters")}
                  className="w-full py-2 rounded-full bg-[#FAF8F5] hover:bg-[#F7DFC7] border border-[#F7DFC7] text-[#111E28] font-bold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#5B9891]" />
                  <span>Join Verified WhatsApp Circle</span>
                </button>
              </div>

              {/* Telegram Community Channel */}
              <div className="p-5 rounded-3xl bg-white border border-[#F7DFC7] shadow-2xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#D98408]/15 text-[#D98408] flex items-center justify-center font-bold">
                    TG
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#111E28]">
                      Telegram Knowledge Circle
                    </h3>
                    <p className="text-[11px] text-stone-500">
                      Study halaqahs, book clubs & resources
                    </p>
                  </div>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed mb-3">
                  Threaded sisterhood discussions and real-time updates from TSPP and MIDJ contributors.
                </p>
                <button
                  type="button"
                  onClick={() => alert("Redirecting to Telegram Knowledge Circle for verified sisters")}
                  className="w-full py-2 rounded-full bg-[#FAF8F5] hover:bg-[#F7DFC7] border border-[#F7DFC7] text-[#111E28] font-bold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#D98408]" />
                  <span>Join Telegram Circle</span>
                </button>
              </div>

              {/* Weekly Digest Newsletter Card */}
              <div className="p-5 rounded-3xl bg-[#5B9891] text-white shadow-md border border-[#477C76]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F7DFC7] mb-2">
                  <Mail className="w-4 h-4" />
                  <span>Weekly Sisterhood Digest</span>
                </div>
                <h3 className="font-serif text-lg font-bold">
                  Curated Islamic Essays & Deals
                </h3>
                <p className="text-xs text-[#F7DFC7] leading-relaxed mt-1">
                  Receive weekly essays from MIDJ, recommended books from TSPP, and exclusive BDSisters coupons.
                </p>
                <div className="mt-3 flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter sister email..."
                    className="flex-1 px-3 py-2 text-xs rounded-full bg-white/10 border border-white/30 text-white placeholder:text-white/60 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => alert("Subscribed to Weekly Sisterhood Digest!")}
                    className="px-4 py-2 rounded-full bg-[#D98408] hover:bg-[#D98408]/90 text-white text-xs font-bold transition-all shadow-2xs whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. FREQUENTLY ASKED QUESTIONS (ACCORDION)                  */}
      {/* ========================================================= */}
      <section className="py-12 bg-white border-t border-[#F7DFC7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7DFC7] text-[#111E28] text-xs font-bold tracking-wide uppercase mb-2 border border-[#F2B55D]/40">
              <HelpCircle className="w-3.5 h-3.5 text-[#5B9891]" />
              <span>Common Sister Inquiries</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111E28]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              Everything you need to know about verification, safety, vendor rules, and payments.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFAQIndex === idx;

              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#F7DFC7] bg-[#FAF8F5] overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFAQIndex(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-serif text-sm sm:text-base font-bold text-[#111E28] hover:text-[#5B9891] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#D98408] transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-[#F7DFC7]/60 pt-3"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
