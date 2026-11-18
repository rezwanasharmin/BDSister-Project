import React from "react";
import {
  ShieldCheck,
  Heart,
  Building2,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#123524] text-[#EFE3C2] text-xs border-t border-[#85A947]/30">
      {/* Top Banner inside Footer: Wings Directory */}
      <div className="border-b border-[#3E7B27]/40 bg-black/25 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#85A947]" />
              <span className="font-bold text-white text-xs">
                Muhsina Organization Wing Ecosystem:
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-[#EFE3C2]/80 text-xs font-medium">
              <span className="hover:text-white transition-colors cursor-pointer">
                CoP (Parenting & Homeschooling)
              </span>
              <span className="text-[#85A947]/60">•</span>
              <span className="hover:text-white transition-colors cursor-pointer">
                TSPP (Publications)
              </span>
              <span className="text-[#85A947]/60">•</span>
              <span className="hover:text-white transition-colors cursor-pointer">
                MIDJ (Journalism & Dialogues)
              </span>
              <span className="text-[#85A947]/60">•</span>
              <span className="hover:text-white transition-colors cursor-pointer">
                The Hut Network (Halal Artisans)
              </span>
              <span className="text-[#85A947]/60">•</span>
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
              <div className="w-10 h-10 rounded-2xl bg-[#3E7B27] text-[#EFE3C2] flex items-center justify-center font-serif text-xl font-bold border border-[#85A947]/60 shadow-sm">
                BD
              </div>
              <span className="font-serif text-xl font-bold text-white">
                BDSisters<span className="text-[#85A947]">.org</span>
              </span>
            </div>
            <p className="text-[#EFE3C2]/85 leading-relaxed text-xs max-w-sm">
              The unified database, digital community, and halal commerce platform dedicated
              to supporting Muslim sisters with modesty, dignity, and economic empowerment.
            </p>
            <div className="p-4 rounded-xl bg-black/30 border border-[#85A947]/40 text-[11px] text-[#EFE3C2]/90 space-y-1">
              <div className="flex items-center gap-1.5 text-[#85A947] font-bold">
                <ShieldCheck className="w-4 h-4" />
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
            <ul className="space-y-2 text-[#EFE3C2]/80">
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
            <ul className="space-y-2 text-[#EFE3C2]/80">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Referral Rules & Vetting
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-white transition-colors">
                  Fair MRP Guarantee Policy
                </a>
              </li>
              <li>
                <a href="#who-we-are" className="hover:text-white transition-colors">
                  Sisterhood Principles (Amanah)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Report a Concern / Moderation
                </a>
              </li>
              <li>
                <span className="text-[#85A947] font-semibold">ZiniPay Payment Gateway Secured</span>
              </li>
            </ul>
          </div>

          {/* Resources & Support */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">
              Resources & Connect
            </h4>
            <ul className="space-y-2 text-[#EFE3C2]/80">
              <li>
                <a href="#events" className="hover:text-white transition-colors">
                  Events & Workshops Calendar
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-white transition-colors">
                  Downloadable Study Kits
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Official WhatsApp & Telegram
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Direct Inquiries & Helpdesk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#3E7B27]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#EFE3C2]/70">
          <p>
            © {new Date().getFullYear()} BDSisters.org — An autonomous initiative under{" "}
            <strong className="text-white font-bold">Muhsina Organization</strong>. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-[#EFE3C2]">
            <span>Built with Amanah, Ihsan & Sincere Sisterhood</span>
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-current ml-0.5" />
          </div>
        </div>
      </div>
    </footer>
  );
}
