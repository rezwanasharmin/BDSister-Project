"use client";

import React, { useState, useRef, useEffect } from "react";
import { Info, X, ShieldCheck, HeartHandshake } from "lucide-react";
import { SectionExplainer } from "@/types";

interface SectionHoverInfoProps {
  explainer: SectionExplainer;
  sectionName?: string;
  className?: string;
}

export function SectionHoverInfo({
  explainer,
  className = "",
}: SectionHoverInfoProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className={`relative inline-flex items-center ${className}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={`Learn about this section: ${explainer.title}`}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-full bg-[#F7DFC7] text-[#111E28] border border-[#F7DFC7] hover:bg-[#F7DFC7] transition-colors shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#5B9891]"
      >
        <Info className="w-3.5 h-3.5 text-[#5B9891]" aria-hidden="true" />
        <span className="hidden sm:inline">About this section</span>
      </button>

      {/* Popover Card */}
      {isOpen && (
        <div
          role="dialog"
          aria-labelledby="explainer-title"
          className="absolute z-50 left-0 sm:right-0 sm:left-auto top-full mt-2 w-80 sm:w-96 p-4 rounded-2xl bg-white text-stone-800 border-2 border-[#F7DFC7] shadow-2xl transition-all duration-200 animate-in fade-in zoom-in-95"
        >
          <div className="flex items-start justify-between gap-3 border-b border-[#F7DFC7] pb-2.5 mb-2.5">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-[#FAF8F5] text-[#5B9891] border border-[#F7DFC7]">
                <ShieldCheck className="w-4 h-4" />
              </span>
              <h4
                id="explainer-title"
                className="text-sm font-bold text-[#111E28] leading-snug"
              >
                {explainer.title}
              </h4>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-stone-400 hover:text-[#111E28] hover:bg-[#FAF8F5] focus:outline-none"
              aria-label="Close explainer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-stone-700 leading-relaxed mb-3">
            {explainer.description}
          </p>

          {explainer.howItWorks && explainer.howItWorks.length > 0 && (
            <div className="mb-3 bg-[#FAF8F5] p-3 rounded-xl border border-[#F7DFC7]">
              <p className="text-[11px] font-bold text-[#111E28] uppercase tracking-wider mb-1.5">
                Key Guidelines & Rules
              </p>
              <ul className="space-y-1 text-xs text-stone-700">
                {explainer.howItWorks.map((item, index) => (
                  <li key={index} className="flex items-start gap-1.5">
                    <span className="text-[#5B9891] font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {explainer.islamicOrSisterhoodNote && (
            <div className="flex items-start gap-2 bg-[#F7DFC7] p-2.5 rounded-xl border border-[#F7DFC7] text-[11px] text-[#111E28] font-medium">
              <HeartHandshake className="w-3.5 h-3.5 text-[#5B9891] flex-shrink-0 mt-0.5" />
              <span>{explainer.islamicOrSisterhoodNote}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
