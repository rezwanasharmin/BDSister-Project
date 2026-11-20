import React from "react";
import { ShieldAlert, Sparkles, Building2 } from "lucide-react";

export function TopAnnouncement() {
  return (
    <div className="bg-[#173330] text-[#F7DFC7] text-xs border-b border-[#224844] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
        {/* Sacred Prefix & Muhsina Organization Umbrella */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3">
          <span className="font-serif italic tracking-wide text-[#F7DFC7] font-semibold text-sm">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </span>
          <span className="hidden sm:inline text-[#D98408]/60">|</span>
          <span className="inline-flex items-center gap-1.5 text-[#F7DFC7] font-medium">
            <Building2 className="w-3.5 h-3.5 text-[#D98408]" />
            <span>A Wing of Muhsina Organization</span>
          </span>
          <span className="hidden md:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#5B9891]/40 text-[#F7DFC7] border border-[#D98408]/50 text-[11px] font-semibold">
            <Sparkles className="w-3 h-3 text-[#F7DFC7]" /> Unified Database Hub
          </span>
        </div>

        {/* Unified Network & Verification Disclaimer */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] text-[#F7DFC7]/90">
          <span className="hidden lg:inline">
            Connects to: <strong className="text-white font-bold">CoP</strong> • <strong className="text-white font-bold">TSPP</strong> • <strong className="text-white font-bold">MIDJ</strong> • <strong className="text-white font-bold">The Hut</strong>
          </span>
          <span className="hidden sm:inline text-[#D98408]/60">•</span>
          <span className="inline-flex items-center gap-1.5 text-[#F7DFC7] font-semibold bg-[#5B9891]/60 px-2.5 py-0.5 rounded-full border border-[#D98408]/60">
            <ShieldAlert className="w-3.5 h-3.5 text-[#F7DFC7]" />
            <span>Referral Required for Registration</span>
          </span>
        </div>
      </div>
    </div>
  );
}
