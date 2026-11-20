import Link from "next/link";
import React from "react";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-[#FAF8F5] px-4 py-16">
      <div className="max-w-md w-full text-center space-y-4 p-8 rounded-3xl bg-white border-2 border-[#F7DFC7] shadow-xl">
        <div className="w-14 h-14 rounded-2xl bg-[#5B9891] text-white flex items-center justify-center mx-auto shadow-sm">
          <Sparkles className="w-7 h-7 text-[#F7DFC7]" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-[#D98408] bg-[#F7DFC7] px-3 py-1 rounded-full inline-block">
          404 — Page In Development
        </span>
        <h2 className="font-serif text-2xl font-bold text-[#111E28]">
          Page Under Construction
        </h2>
        <p className="text-xs text-stone-600 leading-relaxed">
          This sisterhood page is currently being crafted according to our sacred design guidelines. Please check back shortly or return to the main hub.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D98408] hover:bg-[#B86E04] text-white text-xs font-bold transition-all shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
