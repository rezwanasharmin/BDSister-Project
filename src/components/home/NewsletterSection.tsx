"use client";

import React, { useState } from "react";
import {
  Mail,
  Send,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHoverInfo } from "@/components/common/SectionHoverInfo";
import { ScrollReveal } from "@/components/common/MotionComponents";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactSubject, setContactSubject] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactSent, setContactSent] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setNewsletterSubscribed(true);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) return;
    setContactSent(true);
  };

  const getInTouchExplainer = {
    title: "Get in Touch & Community Channels",
    description:
      "Reach out to BDSisters administration or join moderated private channels for sisters on WhatsApp and Telegram.",
    howItWorks: [
      "Strict sister-only membership vetting for messaging groups",
      "Official inquiries answered by administration within 24-48 hours",
      "Weekly newsletter with curated articles and marketplace deals",
    ],
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-16 bg-white border-b border-[#E8D0B8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#E8D0B8]/60">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1.5 rounded-lg bg-[#F7DFC7] text-[#173330] border border-[#E8D0B8]">
                  <Mail className="w-4 h-4 text-[#5B9891]" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#173330]">
                  Communication & Inquiries
                </span>
              </div>
              <h2
                id="contact-heading"
                className="font-serif text-2xl sm:text-3xl font-bold text-[#173330] tracking-tight"
              >
                Get in Touch with BDSisters
              </h2>
              <p className="mt-2 text-sm sm:text-base text-stone-700 max-w-2xl">
                Have questions about referral registration, business listing, or wing integrations?
                Send us a direct inquiry or join our curated sister circles.
              </p>
            </div>

            <div className="flex-shrink-0">
              <SectionHoverInfo
                explainer={getInTouchExplainer}
                sectionName="Get in Touch"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Balanced 50/50 Equal Width & Equal Height Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column: Direct Contact Form (Equal 50% width & stretches to match right column height) */}
          <div className="h-full">
            <ScrollReveal direction="right" delay={0.15} className="h-full">
              <div className="h-full bg-[#FAF5EE] rounded-2xl border-2 border-[#E8D0B8] p-6 sm:p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#173330] mb-1">
                    Send an Official Inquiry
                  </h3>
                  <p className="text-xs text-stone-600 mb-6 font-medium">
                    Our female administrative team will respond with sincere care.
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {contactSent ? (
                    <motion.div
                      key="sent"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="my-auto p-6 rounded-2xl bg-[#F7DFC7] border border-[#E8D0B8] text-center space-y-3"
                    >
                      <CheckCircle2 className="w-10 h-10 text-[#5B9891] mx-auto" />
                      <h4 className="text-sm font-bold text-[#173330]">
                        Jazakillahu Khairan! Message Received
                      </h4>
                      <p className="text-xs text-stone-700 max-w-md mx-auto leading-relaxed">
                        Your message has been routed to our admin desk. We will get back to your email
                        at <strong>{contactEmail}</strong> shortly.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setContactSent(false);
                          setContactName("");
                          setContactEmail("");
                          setContactSubject("");
                          setContactMessage("");
                        }}
                        className="mt-2 text-xs font-bold text-[#173330] underline hover:text-[#5B9891]"
                      >
                        Send another inquiry
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onSubmit={handleContactSubmit}
                      className="space-y-4 flex flex-col justify-between flex-grow"
                    >
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-[#173330] mb-1.5">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              required
                              value={contactName}
                              onChange={(e) => setContactName(e.target.value)}
                              placeholder="Sister's Full Name"
                              className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#E8D0B8] bg-white focus:outline-none focus:ring-2 focus:ring-[#5B9891] text-stone-800"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-[#173330] mb-1.5">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              required
                              value={contactEmail}
                              onChange={(e) => setContactEmail(e.target.value)}
                              placeholder="your.email@example.com"
                              className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#E8D0B8] bg-white focus:outline-none focus:ring-2 focus:ring-[#5B9891] text-stone-800"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#173330] mb-1.5">
                            Subject / Area of Interest
                          </label>
                          <select
                            value={contactSubject}
                            onChange={(e) => setContactSubject(e.target.value)}
                            className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#E8D0B8] bg-white focus:outline-none focus:ring-2 focus:ring-[#5B9891] text-stone-800"
                          >
                            <option value="">General Sisterhood Inquiry</option>
                            <option value="referral">Referral & Registration Assistance</option>
                            <option value="business">Business Profile & ZiniPay Subscription</option>
                            <option value="wings">Muhsina Wings Collaboration (CoP/TSPP/MIDJ)</option>
                            <option value="report">Confidential Concern or Moderation Issue</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#173330] mb-1.5">
                            Your Message *
                          </label>
                          <textarea
                            required
                            rows={5}
                            value={contactMessage}
                            onChange={(e) => setContactMessage(e.target.value)}
                            placeholder="Write your thoughts or inquiry here..."
                            className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#E8D0B8] bg-white focus:outline-none focus:ring-2 focus:ring-[#5B9891] resize-none text-stone-800 min-h-[120px]"
                          />
                        </div>
                      </div>

                      <div className="pt-2">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#173330] hover:bg-[#5B9891] text-[#F7DFC7] hover:text-white text-xs font-bold shadow-md transition-all border border-[#D98408]/50"
                        >
                          <Send className="w-3.5 h-3.5 text-[#D98408]" />
                          <span>Send Inquiry</span>
                        </motion.button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: WhatsApp / Telegram Groups & Newsletter (Equal 50% width & height matched) */}
          <div className="h-full flex flex-col justify-between gap-6">
            <ScrollReveal direction="left" delay={0.2} className="flex-1">
              {/* WhatsApp and Telegram Circles */}
              <div className="h-full p-6 sm:p-7 rounded-2xl bg-[#FAF5EE] border-2 border-[#E8D0B8] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="p-2 rounded-xl bg-[#F7DFC7] text-[#173330] border border-[#E8D0B8]">
                      <MessageCircle className="w-5 h-5 text-[#5B9891]" />
                    </span>
                    <div>
                      <h3 className="font-serif text-base font-bold text-[#173330]">
                        Vetted Sisterhood Groups
                      </h3>
                      <p className="text-xs text-stone-600">
                        Join curated WhatsApp & Telegram discussion channels.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-xs mt-4">
                  <motion.a
                    whileHover={{ x: 3 }}
                    href="#whatsapp-group"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#E8D0B8] text-[#173330] hover:border-[#5B9891] transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-8 h-8 rounded-full bg-[#173330] text-[#F7DFC7] flex items-center justify-center font-bold text-xs border border-[#D98408]">
                        WA
                      </span>
                      <div>
                        <span className="font-bold block text-[#173330]">BDSisters Official WhatsApp</span>
                        <span className="text-[11px] text-stone-500">
                          Daily announcements & updates
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-[#173330] bg-[#F7DFC7] px-3 py-1 rounded-full border border-[#E8D0B8] shadow-2xs">
                      Join Channel
                    </span>
                  </motion.a>

                  <motion.a
                    whileHover={{ x: 3 }}
                    href="#telegram-group"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#E8D0B8] text-[#173330] hover:border-[#5B9891] transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-8 h-8 rounded-full bg-[#5B9891] text-white flex items-center justify-center font-bold text-xs border border-[#D98408]">
                        TG
                      </span>
                      <div>
                        <span className="font-bold block text-[#173330]">Telegram Community Circle</span>
                        <span className="text-[11px] text-stone-500">
                          Knowledge shares & study halaqahs
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-[#173330] bg-[#F7DFC7] px-3 py-1 rounded-full border border-[#E8D0B8] shadow-2xs">
                      Join Channel
                    </span>
                  </motion.a>
                </div>
              </div>
            </ScrollReveal>

            {/* Newsletter Sign-up Box in Deep Islamic Green */}
            <ScrollReveal direction="left" delay={0.3} className="flex-1">
              <div className="h-full p-6 sm:p-7 rounded-2xl bg-[#173330] text-[#F7DFC7] shadow-xl border-2 border-[#D98408]/50 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D98408] bg-[#F7DFC7]/15 px-2.5 py-0.5 rounded-full border border-[#D98408]/40 inline-block mb-2">
                    Weekly Digest
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white mb-1.5">
                    Subscribe to The Muhsina Sisterhood Newsletter
                  </h3>
                  <p className="text-xs text-[#F7DFC7]/90 leading-relaxed mb-4">
                    Receive weekly curated essays from MIDJ, recommended books from TSPP, parenting guides from CoP,
                    and exclusive member discounts from BDSisters shop.
                  </p>
                </div>

                <div>
                  {newsletterSubscribed ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-3.5 rounded-xl bg-[#5B9891] border border-[#D98408] text-xs text-white flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#F7DFC7] flex-shrink-0" />
                      <span className="font-bold">Jazakillahu Khairan! You are subscribed.</span>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                      <div className="flex gap-2">
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="flex-grow text-xs px-4 py-2.5 rounded-full bg-black/30 border border-[#D98408]/50 text-white placeholder-[#F7DFC7]/50 focus:outline-none focus:ring-2 focus:ring-[#D98408]"
                        />
                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          type="submit"
                          className="px-5 py-2.5 rounded-full bg-[#5B9891] hover:bg-[#D98408] text-white hover:text-[#173330] text-xs font-bold transition-colors shadow-2xs whitespace-nowrap"
                        >
                          Subscribe
                        </motion.button>
                      </div>
                      <span className="text-[10px] text-[#F7DFC7]/70 block">
                        No spam ever. Unsubscribe anytime with one click.
                      </span>
                    </form>
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
