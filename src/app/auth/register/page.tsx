"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  UserCheck,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  Upload,
  ChevronRight,
  FileText,
  AlertCircle,
  Eye,
  EyeOff,
  Sparkles,
  Users,
  Check,
  Info,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);

  // Step 1: Personal Details
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [district, setDistrict] = useState("Dhaka");
  const [primaryInterest, setPrimaryInterest] = useState("Circle of Parents (Parenting & Tarbiyah)");

  // Step 2: Referral Information
  const [hasReferral, setHasReferral] = useState(true);
  const [referrerName, setReferrerName] = useState("");
  const [referrerId, setReferrerId] = useState("");
  const [relationship, setRelationship] = useState("Sisterhood Study Circle");

  // Step 3: Identity & KYC
  const [docType, setDocType] = useState<"nid" | "passport" | "smart_card">("nid");
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [agreeAdab, setAgreeAdab] = useState(false);

  // Button Click state
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleNextStep = () => {
    setButtonClicked(true);
    setTimeout(() => {
      setButtonClicked(false);
      setCurrentStep((prev) => (prev < 4 ? ((prev + 1) as any) : prev));
    }, 300);
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => (prev > 1 ? ((prev - 1) as any) : prev));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0].name);
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
            <span className="font-semibold text-[#111E28]">Sisterhood Registration</span>
          </nav>

          {/* Heading */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7DFC7] text-[#111E28] text-xs font-bold tracking-wide uppercase mb-3 border border-[#F2B55D]/40">
                <UserCheck className="w-3.5 h-3.5 text-[#5B9891]" />
                <span>Protected Sanctuary • 3-Step Vetting Pipeline</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111E28] tracking-tight">
                Join BDSisters: Sacred Sisterhood Registration
              </h1>
              <p className="mt-3 text-base sm:text-lg text-stone-700 leading-relaxed">
                A dignified, safe sanctuary exclusively for Muslim women. To preserve safety and purity of intent,
                registration requires member referee verification and confidential NID check by female administrators.
              </p>
            </div>

            {/* Quick Stat Badge */}
            <div className="flex items-center gap-3 bg-[#FAF8F5] p-3 sm:p-4 rounded-2xl border border-[#F7DFC7] shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-[#5B9891] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                100%
              </div>
              <div>
                <p className="text-xs font-bold text-[#111E28]">Female-Only Space</p>
                <p className="text-xs text-stone-600">Zero male access allowed</p>
              </div>
            </div>
          </div>

          {/* Mandatory KYC Privacy Guarantee Callout */}
          <div className="mt-8 p-4 rounded-2xl bg-[#F7DFC7] border border-[#F7DFC7] flex items-start gap-3 text-xs text-[#111E28] shadow-xs">
            <ShieldCheck className="w-5 h-5 text-[#5B9891] flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold uppercase tracking-wide text-[#111E28]">
                Strict KYC & Sovereign Identity Privacy Guarantee:
              </span>
              <p className="text-stone-700 leading-relaxed">
                Registration requires uploading your NID and/or Passport for safe community verification.
                <strong> Disclaimer:</strong> Only vetted female system administrators have access to your
                identity documents. No other member, vendor, or guest can ever view your government IDs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. REGISTRATION PIPELINE & EQUAL 50/50 LAYOUT             */}
      {/* ========================================================= */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Step Progress Tracker (Interactive Clickable Stepper) */}
          <div className="mb-10 max-w-2xl mx-auto">
            <div className="flex items-center justify-between relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-stone-200 -translate-y-1/2 z-0" />
              <div
                className="absolute top-1/2 left-0 h-1 bg-[#5B9891] -translate-y-1/2 z-0 transition-all duration-300"
                style={{
                  width:
                    currentStep === 1
                      ? "15%"
                      : currentStep === 2
                      ? "50%"
                      : currentStep === 3
                      ? "85%"
                      : "100%",
                }}
              />

              {[
                { step: 1, label: "Profile Essentials" },
                { step: 2, label: "Sister Referral" },
                { step: 3, label: "Confidential KYC" },
                { step: 4, label: "Verification Pending" },
              ].map((item) => {
                const isPassed = currentStep > item.step;
                const isCurrent = currentStep === item.step;

                return (
                  <button
                    key={item.step}
                    type="button"
                    onClick={() => setCurrentStep(item.step as any)}
                    className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none"
                    title={`Click to go to Step ${item.step}: ${item.label}`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-200 shadow-md group-hover:scale-110 ${
                        isPassed
                          ? "bg-[#5B9891] text-white group-hover:bg-[#477C76]"
                          : isCurrent
                          ? "bg-[#D98408] text-white ring-4 ring-[#F7DFC7] shadow-lg scale-105"
                          : "bg-white text-stone-600 border-2 border-[#F7DFC7] group-hover:border-[#D98408] group-hover:text-[#D98408]"
                      }`}
                    >
                      {isPassed ? <Check className="w-5 h-5" /> : item.step}
                    </div>
                    <span
                      className={`text-[10px] sm:text-xs font-bold mt-2 whitespace-nowrap transition-colors ${
                        isCurrent
                          ? "text-[#D98408]"
                          : isPassed
                          ? "text-[#5B9891]"
                          : "text-stone-500 group-hover:text-[#D98408]"
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Equal 50/50 Balanced Width & Height Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Left Column: Multi-Step Interactive Form */}
            <div className="h-full bg-white rounded-3xl border border-[#F7DFC7] p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              {/* STEP 1: Personal Profile */}
              {currentStep === 1 && (
                <div className="h-full flex flex-col justify-between space-y-6">
                  <div>
                    <div className="mb-4">
                      <span className="text-[10px] font-bold text-[#5B9891] uppercase tracking-wider block">
                        Step 1 of 3
                      </span>
                      <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#111E28]">
                        Personal & Spiritual Profile
                      </h2>
                      <p className="text-xs text-stone-600 mt-1">
                        Please provide your real name and preferred Islamic title.
                      </p>
                    </div>

                    <div className="space-y-4 text-xs">
                      <div>
                        <label className="block font-bold text-[#111E28] mb-1">
                          Full Name / Sister Title *
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Sister Nusrat Jahan or Umm Zayd"
                          className="w-full p-3 rounded-xl bg-[#FAF8F5] border border-[#F7DFC7] focus:outline-none focus:ring-2 focus:ring-[#5B9891]"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-[#111E28] mb-1">
                          Email Address (for official sister notifications) *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="sister@example.com"
                          className="w-full p-3 rounded-xl bg-[#FAF8F5] border border-[#F7DFC7] focus:outline-none focus:ring-2 focus:ring-[#5B9891]"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-[#111E28] mb-1">
                          Create Secure Password *
                        </label>
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="At least 8 characters..."
                            className="w-full p-3 pr-10 rounded-xl bg-[#FAF8F5] border border-[#F7DFC7] focus:outline-none focus:ring-2 focus:ring-[#5B9891]"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-bold text-[#111E28] mb-1">
                            District / Division in Bangladesh *
                          </label>
                          <select
                            value={district}
                            onChange={(e) => setDistrict(e.target.value)}
                            className="w-full p-3 rounded-xl bg-[#FAF8F5] border border-[#F7DFC7] font-medium focus:outline-none focus:ring-2 focus:ring-[#5B9891]"
                          >
                            <option value="Dhaka">Dhaka Division</option>
                            <option value="Chittagong">Chittagong Division</option>
                            <option value="Sylhet">Sylhet Division</option>
                            <option value="Rajshahi">Rajshahi Division</option>
                            <option value="Khulna">Khulna Division</option>
                            <option value="Barisal">Barisal Division</option>
                            <option value="Mymensingh">Mymensingh Division</option>
                            <option value="Rangpur">Rangpur Division</option>
                          </select>
                        </div>

                        <div>
                          <label className="block font-bold text-[#111E28] mb-1">
                            Primary Sisterhood Interest *
                          </label>
                          <select
                            value={primaryInterest}
                            onChange={(e) => setPrimaryInterest(e.target.value)}
                            className="w-full p-3 rounded-xl bg-[#FAF8F5] border border-[#F7DFC7] font-medium focus:outline-none focus:ring-2 focus:ring-[#5B9891]"
                          >
                            <option value="Circle of Parents (Parenting & Tarbiyah)">CoP (Parenting & Tarbiyah)</option>
                            <option value="The Hut Halal Artisan Guild">The Hut (Halal Artisan Vendor)</option>
                            <option value="TSPP Islamic Literature & Books">TSPP (Publications & Books)</option>
                            <option value="MIDJ Intellectual Dialogue">MIDJ (Essays & Journalism)</option>
                            <option value="IMBD Mentorship & Career">IMBD (Mentorship & Skills)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#F7DFC7]/60 flex items-center justify-between">
                    <span className="text-[11px] text-stone-500 font-medium">
                      Step 1 of 3: Profile Info
                    </span>

                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold bg-[#D98408] hover:bg-[#D98408]/90 text-white transition-all shadow-sm group/btn"
                    >
                      <span>Proceed to Step 2</span>
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
                </div>
              )}

              {/* STEP 2: Sister Referral Check */}
              {currentStep === 2 && (
                <div className="h-full flex flex-col justify-between space-y-6">
                  <div>
                    <div className="mb-4">
                      <span className="text-[10px] font-bold text-[#5B9891] uppercase tracking-wider block">
                        Step 2 of 3
                      </span>
                      <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#111E28]">
                        Sister Referral & Verification
                      </h2>
                      <p className="text-xs text-stone-600 mt-1">
                        To preserve trust and modesty, every sister must have an existing member voucher or request a private voice interview.
                      </p>
                    </div>

                    <div className="space-y-4 text-xs">
                      <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#F7DFC7] space-y-3">
                        <label className="block font-bold text-[#111E28]">
                          Do you have an existing verified BDSisters member who knows you?
                        </label>
                        <div className="flex gap-4">
                          <label className="flex items-center gap-2 cursor-pointer font-medium text-stone-700">
                            <input
                              type="radio"
                              name="referralCheck"
                              checked={hasReferral}
                              onChange={() => setHasReferral(true)}
                              className="text-[#5B9891] focus:ring-[#5B9891]"
                            />
                            <span>Yes, I have a sister referee</span>
                          </label>

                          <label className="flex items-center gap-2 cursor-pointer font-medium text-stone-700">
                            <input
                              type="radio"
                              name="referralCheck"
                              checked={!hasReferral}
                              onChange={() => setHasReferral(false)}
                              className="text-[#5B9891] focus:ring-[#5B9891]"
                            />
                            <span>No, request admin interview</span>
                          </label>
                        </div>
                      </div>

                      {hasReferral ? (
                        <>
                          <div>
                            <label className="block font-bold text-[#111E28] mb-1">
                              Referring Sister's Full Name *
                            </label>
                            <input
                              type="text"
                              required
                              value={referrerName}
                              onChange={(e) => setReferrerName(e.target.value)}
                              placeholder="e.g. Sister Fatima or Umm Maryam"
                              className="w-full p-3 rounded-xl bg-[#FAF8F5] border border-[#F7DFC7] focus:outline-none focus:ring-2 focus:ring-[#5B9891]"
                            />
                          </div>

                          <div>
                            <label className="block font-bold text-[#111E28] mb-1">
                              Referring Sister's Member ID or Phone (Optional)
                            </label>
                            <input
                              type="text"
                              value={referrerId}
                              onChange={(e) => setReferrerId(e.target.value)}
                              placeholder="e.g. BDS-9821 or +88017..."
                              className="w-full p-3 rounded-xl bg-[#FAF8F5] border border-[#F7DFC7] focus:outline-none focus:ring-2 focus:ring-[#5B9891]"
                            />
                          </div>

                          <div>
                            <label className="block font-bold text-[#111E28] mb-1">
                              Relationship / Context to Referrer *
                            </label>
                            <select
                              value={relationship}
                              onChange={(e) => setRelationship(e.target.value)}
                              className="w-full p-3 rounded-xl bg-[#FAF8F5] border border-[#F7DFC7] font-medium focus:outline-none focus:ring-2 focus:ring-[#5B9891]"
                            >
                              <option value="Sisterhood Study Circle">Study Circle / Halaqah Peer</option>
                              <option value="Family / Relative">Family Relative</option>
                              <option value="Circle of Parents (CoP) Group">CoP Parenting Circle Peer</option>
                              <option value="Halal Artisan Vendor Colleague">Halal Artisan Colleague</option>
                              <option value="University / Professional Colleague">University / Professional Colleague</option>
                            </select>
                          </div>
                        </>
                      ) : (
                        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-stone-700 space-y-2">
                          <div className="flex items-center gap-2 font-bold text-amber-900">
                            <Info className="w-4 h-4 text-amber-700" />
                            <span>Female Admin Voice Interview Protocol</span>
                          </div>
                          <p className="text-[11px] text-amber-800 leading-relaxed">
                            No problem! Our female admissions committee will schedule a 5-minute private voice call via WhatsApp or Google Meet to warmly welcome you and complete vetting.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#F7DFC7]/60 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="px-4 py-2 rounded-full border border-stone-300 text-xs font-bold text-stone-700 hover:bg-stone-100 transition-colors"
                    >
                      Back
                    </button>

                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold bg-[#D98408] hover:bg-[#D98408]/90 text-white transition-all shadow-sm group/btn"
                    >
                      <span>Proceed to Step 3</span>
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
                </div>
              )}

              {/* STEP 3: Identity & Document KYC */}
              {currentStep === 3 && (
                <div className="h-full flex flex-col justify-between space-y-6">
                  <div>
                    <div className="mb-4">
                      <span className="text-[10px] font-bold text-[#5B9891] uppercase tracking-wider block">
                        Step 3 of 3
                      </span>
                      <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#111E28]">
                        Confidential Identity Verification (KYC)
                      </h2>
                      <p className="text-xs text-stone-600 mt-1">
                        Upload your National ID or Passport. Strict female-admin encryption applies.
                      </p>
                    </div>

                    <div className="space-y-4 text-xs">
                      <div>
                        <label className="block font-bold text-[#111E28] mb-1">
                          Select Verification Document Type *
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            { id: "nid", label: "National ID" },
                            { id: "smart_card", label: "Smart NID" },
                            { id: "passport", label: "Passport" },
                          ].map((t) => (
                            <button
                              key={t.id}
                              type="button"
                              onClick={() => setDocType(t.id as any)}
                              className={`p-2.5 rounded-xl text-xs font-bold border transition-all text-center ${
                                docType === t.id
                                  ? "bg-[#5B9891] text-white border-[#5B9891] shadow-2xs"
                                  : "bg-[#FAF8F5] text-stone-700 border-[#F7DFC7] hover:bg-[#F7DFC7]/40"
                              }`}
                            >
                              {t.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* File Upload Simulator */}
                      <div>
                        <label className="block font-bold text-[#111E28] mb-1">
                          Upload Document Image or PDF Copy *
                        </label>
                        <div className="p-6 rounded-2xl border-2 border-dashed border-[#F2B55D] bg-[#FAF8F5] text-center hover:bg-[#F7DFC7]/20 transition-colors cursor-pointer relative">
                          <input
                            type="file"
                            onChange={handleFileUpload}
                            accept="image/*,.pdf"
                            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                          />
                          <Upload className="w-8 h-8 text-[#D98408] mx-auto mb-2" />
                          <p className="font-bold text-xs text-[#111E28]">
                            {uploadedFile ? `Selected: ${uploadedFile}` : "Click or drag document file here"}
                          </p>
                          <p className="text-[10px] text-stone-500 mt-0.5">
                            PNG, JPG or PDF up to 10MB (Encrypted on upload)
                          </p>
                        </div>
                      </div>

                      {/* Agreements */}
                      <div className="space-y-2 pt-2 border-t border-[#F7DFC7]/60">
                        <label className="flex items-start gap-2.5 cursor-pointer text-stone-700">
                          <input
                            type="checkbox"
                            checked={agreePrivacy}
                            onChange={(e) => setAgreePrivacy(e.target.checked)}
                            className="mt-0.5 rounded text-[#5B9891] focus:ring-[#5B9891]"
                          />
                          <span className="text-[11px] leading-tight">
                            I understand that my identity documents are strictly accessible exclusively by
                            vetted female administrators and will never be shared.
                          </span>
                        </label>

                        <label className="flex items-start gap-2.5 cursor-pointer text-stone-700">
                          <input
                            type="checkbox"
                            checked={agreeAdab}
                            onChange={(e) => setAgreeAdab(e.target.checked)}
                            className="mt-0.5 rounded text-[#5B9891] focus:ring-[#5B9891]"
                          />
                          <span className="text-[11px] leading-tight">
                            I agree to abide by the BDSisters Islamic Code of Conduct, Modesty (Haya), and
                            sisterhood mutual respect in all forums and transactions.
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#F7DFC7]/60 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="px-4 py-2 rounded-full border border-stone-300 text-xs font-bold text-stone-700 hover:bg-stone-100 transition-colors"
                    >
                      Back
                    </button>

                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold bg-[#D98408] hover:bg-[#D98408]/90 text-white transition-all shadow-sm group/btn"
                    >
                      <span>Submit for Verification</span>
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
                </div>
              )}

              {/* STEP 4: Success & Verification Pending */}
              {currentStep === 4 && (
                <div className="h-full flex flex-col justify-between py-4 text-center space-y-6">
                  <div className="space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <div>
                      <h2 className="font-serif text-2xl font-bold text-[#111E28]">
                        Registration Submitted with Barakah!
                      </h2>
                      <p className="text-xs text-stone-600 mt-1 max-w-md mx-auto">
                        Jazakillahu Khairan, Sister <strong>{fullName}</strong>. Your documents have been safely received in our female administrative queue.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#F7DFC7] max-w-sm mx-auto text-xs space-y-2 text-stone-700 text-left">
                      <div className="flex justify-between border-b border-[#F7DFC7] pb-1.5">
                        <span className="text-stone-500 font-medium">Application Tracking ID:</span>
                        <span className="font-bold text-[#D98408]">BDS-2026-7842</span>
                      </div>
                      <div className="flex justify-between border-b border-[#F7DFC7] pb-1.5">
                        <span className="text-stone-500 font-medium">Vetting Status:</span>
                        <span className="font-bold text-[#5B9891]">Under Female Review</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500 font-medium">Expected Timeline:</span>
                        <span className="font-bold text-[#111E28]">Within 24-48 Hours</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#F7DFC7] flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                      href="/"
                      className="px-6 py-2.5 rounded-full bg-[#5B9891] text-white font-bold text-xs hover:bg-[#5B9891]/90 shadow-2xs transition-all"
                    >
                      Return to Homepage
                    </Link>

                    <Link
                      href="/who-we-are"
                      className="px-6 py-2.5 rounded-full bg-[#FAF8F5] hover:bg-[#F7DFC7] border border-[#F7DFC7] text-[#111E28] font-bold text-xs transition-colors"
                    >
                      Read Vetting Guidelines
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Equal Width & Height Support Information */}
            <div className="h-full flex flex-col justify-between gap-4">
              {/* Card 1: Why We Require Referrals */}
              <div className="p-6 rounded-3xl bg-white border border-[#F7DFC7] shadow-2xs flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D98408] mb-2">
                    <ShieldCheck className="w-4 h-4 text-[#5B9891]" />
                    <span>Sacred Trust (Al-Amanah)</span>
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#111E28]">
                    Why Do We Require Referrals & KYC?
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mt-2">
                    Online platforms are often fraught with anonymity, harassment, and predatory behavior. BDSisters was
                    founded on the principle of <strong>Haya (Modesty)</strong> and mutual accountability.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F7DFC7]/60 space-y-1.5 text-xs text-stone-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5B9891]" />
                    <span>Guarantees 100% verified Muslim sisterhood</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5B9891]" />
                    <span>Protects peer-to-peer commerce from scammers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5B9891]" />
                    <span>Safe environment for children in CoP homeschooling</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Free Personal vs Business Profile */}
              <div className="p-6 rounded-3xl bg-white border border-[#F7DFC7] shadow-2xs flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5B9891] mb-2">
                    <Users className="w-4 h-4" />
                    <span>Sisterhood Membership Tiers</span>
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#111E28]">
                    Personal Profile is 100% Free Forever
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mt-2">
                    Every Muslim sister receives free lifetime access to discussion forums, resource downloads, and sisterhood circles.
                    If you run an ethical brand, you can optionally upgrade to a Business Vendor profile.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F7DFC7]/60 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#5B9891]">Personal Tier: Free</span>
                  <span className="font-bold text-[#D98408]">Vendor Tier: Fair Subsidized</span>
                </div>
              </div>

              {/* Card 3: Already Have an Account? Sign In */}
              <div className="p-6 rounded-3xl bg-[#5B9891] text-white shadow-md border border-[#477C76] flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold">
                    Already a Registered Sister?
                  </h3>
                  <p className="text-xs text-[#F7DFC7] leading-relaxed mt-1">
                    Sign in to manage your profile, view order inquiries, or participate in private discussion circles.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/20">
                  <Link
                    href="/auth/signin"
                    className="w-full py-2.5 rounded-full bg-[#D98408] hover:bg-[#D98408]/90 text-white font-bold text-xs transition-all shadow-2xs flex items-center justify-center gap-2"
                  >
                    <span>Sign In to Your Sister Account</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
