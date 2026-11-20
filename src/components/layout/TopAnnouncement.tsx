import React from "react";
import { ShieldAlert, Sparkles, Building2 } from "lucide-react";

export function TopAnnouncement() {
  return (
    <div className="bg-[#5B9891] text-white text-xs border-b border-[#477C76] shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
        {/* Sacred Prefix & Muhsina Organization Umbrella */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3">
          <span className="font-serif italic tracking-wide text-[#F7DFC7] font-semibold text-sm">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </span>
          <span className="hidden sm:inline text-[#F7DFC7]/50">|</span>
          <span className="inline-flex items-center gap-1.5 text-white font-medium">
            <Building2 className="w-3.5 h-3.5 text-[#F2B55D]" />
            <span>A Wing of Muhsina Organization</span>
          </span>
          <span className="hidden md:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/15 text-white border border-white/25 text-[11px] font-semibold">
            <Sparkles className="w-3 h-3 text-[#F2B55D]" /> Unified Database Hub
          </span>
        </div>

        {/* Unified Network & Verification Disclaimer */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] text-white/95">
          <span className="hidden lg:inline text-[#F7DFC7]/90">
            Connects to: <strong className="text-white font-bold">CoP</strong> • <strong className="text-white font-bold">TSPP</strong> • <strong className="text-white font-bold">MIDJ</strong> • <strong className="text-white font-bold">The Hut</strong>
          </span>
          <span className="hidden sm:inline text-white/40">•</span>
          <span className="inline-flex items-center gap-1.5 text-white font-semibold bg-[#D98408] px-3 py-0.5 rounded-full border border-[#F2B55D]/60 shadow-xs">
            <ShieldAlert className="w-3.5 h-3.5 text-white" />
            <span>Referral Required for Registration</span>
          </span>
        </div>
      </div>
    </div>
  );
}
