"use client";

import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  ChevronDown,
} from "lucide-react";

// Social Icon SVGs (Lucide doesn't include brand icons)
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-1 2.17-2.31 3.48c.11 5.37-1.84 10.37-6.19 13.01-4.35 2.65-10.45 1.51-12.5-3.5 1.34.17 3.32-.06 4.5-1.01-3.69-.32-4.91-2.45-5.11-4.14.7.11 1.72.03 2.5-.18-4.04-1.12-4.39-4.83-4.04-5.32 1.38.74 2.84.86 3.43.76C1.41 6.13 2.14 1.4 6.7 3.52 8.7 4.52 11.23 6.01 13.1 6.56c-.08-1.57.48-3.41 1.9-4.56C16.42.85 18.25 1 19.38 2.05c1.13-.15 2.1-.55 3-.98-.38 1.18-1.14 1.95-2.14 2.56 1.1-.13 1.96-.39 2.76-.63z"></path>
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.46-5.58z"></path>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);


export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        "Browse Jobs",
        "Contract Talent",
        "Permanent Talent",
        "Consulting Solutions",
      ],
    },
    {
      title: "Areas of Expertise",
      links: [
        "Finance & Accounting",
        "Technology",
        "Marketing & Creative",
        "Legal",
        "Administrative & Customer Support",
      ],
    },
    {
      title: "Resources & Tools",
      links: [
        "Discover Insights",
        "Invoice",
        "Job Directory",
        "Salary Guide",
        "Time Reports",
        "Create a job alert",
        "Contact Us",
      ],
    },
    {
      title: "About",
      links: [
        "About HCTPL",
        "Leadership",
        "Careers With Us",
        "Locations",
        "Investor Center",
        "Press",
        "Our Brands",
        "Supplier Relations",
      ],
    },
  ];

  const socialIcons = [
    { Icon: FacebookIcon, href: "#" },
    { Icon: LinkedinIcon, href: "#" },
    { Icon: TwitterIcon, href: "#" },
    { Icon: YoutubeIcon, href: "#" },
    { Icon: InstagramIcon, href: "#" },
  ];


  return (
    <footer className="relative bg-[#0F172A] text-slate-300 pt-20 pb-10 overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-16">
          {footerSections.map((section, idx) => (
            <div key={idx} className="space-y-6">
              <h4 className="text-white font-extrabold text-base uppercase tracking-widest">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href="#"
                      className="text-sm text-slate-400 hover:text-brand-primary transition-all duration-300 font-bold block hover:translate-x-1"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* LOGO AND SOCIALS ROW */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 py-12 border-y border-white/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full md:w-auto">
            <div className="relative h-10 w-36">
              <Image
                src="/hctpl-logo.png"
                alt="HCTPL Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="hidden sm:block h-8 w-px bg-white/10" />
            <div className="flex items-center gap-6">
              {socialIcons.map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="text-slate-400 hover:text-brand-primary transition-all duration-300 transform hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* REGION SELECTOR MOCKUP */}
          <div className="w-full sm:w-auto flex items-center justify-between sm:justify-start gap-4 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 hover:border-brand-primary/30 transition-all duration-300 group">
            <div className="flex items-center gap-3">
              <Globe className="w-4 h-4 text-brand-primary group-hover:animate-pulse" />
              <span className="text-sm font-bold text-white tracking-wide">United States (English)</span>
            </div>
            <ChevronDown className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          <div className="space-y-6 max-w-3xl">
            <p className="text-[11px] text-slate-500 font-bold leading-relaxed tracking-wider uppercase">
              © {currentYear} HCTPL Inc. An Equal Opportunity Employer M/F/Disability/Veterans.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {["Fraud Alert", "Government Notice", "Privacy Notice", "Terms of Use", "Cookies Settings"].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-[11px] text-slate-500 hover:text-white transition-colors font-extrabold uppercase tracking-widest"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          <div className="text-xs text-slate-500 font-bold italic border-l-2 border-brand-primary/30 pl-4 py-1">
            Leading the future of AI-powered recruitment and digital transformation.
          </div>
        </div>
      </div>


      {/* Decorative background blur */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />
    </footer>
  );
}