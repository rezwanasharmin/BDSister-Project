import React from "react";
import {
  ShieldCheck,
  Heart,
  Building2,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0B151D] text-stone-300 text-xs border-t border-[#5B9891]/30">
      {/* Top Banner inside Footer: Wings Directory */}
      <div className="border-b border-[#5B9891]/25 bg-[#070E14] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#F2B55D]" />
              <span className="font-bold text-white text-xs">
                Muhsina Organization Wing Ecosystem:
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-[#F7DFC7]/85 text-xs font-medium">
              <span className="hover:text-white transition-colors cursor-pointer">
                CoP (Parenting & Homeschooling)
              </span>
              <span className="text-stone-600">•</span>
              <span className="hover:text-white transition-colors cursor-pointer">
                TSPP (Publications)
              </span>
              <span className="text-stone-600">•</span>
              <span className="hover:text-white transition-colors cursor-pointer">
                MIDJ (Journalism & Dialogues)
              </span>
              <span className="text-stone-600">•</span>
              <span className="hover:text-white transition-colors cursor-pointer">
                The Hut Network (Halal Artisans)
              </span>
              <span className="text-stone-600">•</span>
              <span className="hover:text-white transition-colors cursor-pointer">
                IMBD (Mentorship)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#5B9891] text-[#F7DFC7] flex items-center justify-center font-serif text-xl font-bold border border-[#F2B55D]/60 shadow-sm">
                BD
              </div>
              <span className="font-serif text-xl font-bold text-white">
                BDSisters<span className="text-[#D98408]">.org</span>
              </span>
            </div>
            <p className="text-[#F7DFC7]/85 leading-relaxed text-xs max-w-sm">
              The unified database, digital community, and halal commerce platform dedicated
              to supporting Muslim sisters with modesty, dignity, and economic empowerment.
            </p>
            <div className="p-4 rounded-xl bg-[#12202B] border border-[#5B9891]/40 text-[11px] text-[#F7DFC7]/90 space-y-1">
              <div className="flex items-center gap-1.5 text-[#F2B55D] font-bold">
                <ShieldCheck className="w-4 h-4 text-[#5B9891]" />
                <span>KYC Data Protection Guarantee</span>
              </div>
              <p className="leading-relaxed">
                NID & Passport verification documents are encrypted and accessible exclusively by
                female administrators. No public or peer access is ever permitted.
              </p>
            </div>
          </div>

          {/* Core Areas */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">
              Platform Areas
            </h4>
            <ul className="space-y-2 text-[#F7DFC7]/80">
              <li>
                <a href="#profiles" className="hover:text-white transition-colors">
                  Personal Profiles (Free)
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-white transition-colors">
                  Business Profiles (Paid)
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-white transition-colors">
                  Halal E-Commerce Shop
                </a>
              </li>
              <li>
                <a href="#forums" className="hover:text-white transition-colors">
                  Discussion Forums
                </a>
              </li>
              <li>
                <a href="#key-areas" className="hover:text-white transition-colors">
                  Skill Exchange & Barter
                </a>
              </li>
            </ul>
          </div>

          {/* Membership & Ethics */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">
              Governance & Safety
            </h4>
            <ul className="space-y-2 text-[#F7DFC7]/80">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Referral Rules & Vetting
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-white transition-colors">
                  Fair Price Guarantee Policy
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Sisterhood Code of Conduct
                </a>
              </li>
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Field-Level Privacy Controls
                </a>
              </li>
              <li>
                <a href="#newsletter" className="hover:text-white transition-colors">
                  Vetted Telegram & WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Sister Wings Connected */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">
              Sister Organizations
            </h4>
            <ul className="space-y-2 text-[#F7DFC7]/80">
              <li>
                <a href="#unified-wings" className="hover:text-white transition-colors">
                  Circle of Parents (CoP)
                </a>
              </li>
              <li>
                <a href="#unified-wings" className="hover:text-white transition-colors">
                  The Sacred Path Publications
                </a>
              </li>
              <li>
                <a href="#unified-wings" className="hover:text-white transition-colors">
                  MIDJ Journalism Wing
                </a>
              </li>
              <li>
                <a href="#unified-wings" className="hover:text-white transition-colors">
                  The Hut Artisan Guild
                </a>
              </li>
              <li>
                <a href="#unified-wings" className="hover:text-white transition-colors">
                  Muhsina Organization Main Hub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Sacred Sign-off */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-400">
          <div className="flex items-center gap-1 text-center sm:text-left">
            <span>© {new Date().getFullYear()} BDSisters.org — Dedicated with</span>
            <Heart className="w-3.5 h-3.5 text-[#D98408] inline fill-current" />
            <span>for Muslim Sisters Worldwide.</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="text-[#5B9891] font-bold">
              Umbrella of Muhsina Organization
            </span>
            <span>•</span>
            <span className="text-[#F2B55D] font-medium">Halal Secured by ZiniPay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
