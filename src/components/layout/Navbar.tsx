"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import { navLinks, personalInfo } from "../../data/personal";
import SocialLinks from "../ui/SocialLinks";
import { useActiveSection } from "../../hooks/useActiveSection";
import { headerScrolled, navLinkActive } from "../../lib/styles";
import { cn } from "../../lib/utils";

const sectionIds = navLinks.map((link) => link.sectionId);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        className={cn(
          "sticky top-0.5 z-50 border-b border-white/[0.06] backdrop-blur-xl transition-all duration-300",
          scrolled ? headerScrolled : "bg-[#0a0f1a]/80"
        )}
      >
        <Container className="flex items-center justify-between gap-4 py-4">
          <a
            href="#home"
            className="font-display text-lg font-bold text-slate-50 transition-opacity hover:opacity-80 md:text-xl"
          >
            {personalInfo.shortName}
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
                  activeSection === link.sectionId
                    ? cn(navLinkActive, "bg-teal-400/10")
                    : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <SocialLinks />
          </div>

          <button
            type="button"
            className="rounded-lg border border-white/10 p-2 text-slate-300 transition-colors hover:border-teal-400/30 hover:bg-white/5 lg:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </Container>

        <div
          className={cn(
            "grid overflow-hidden border-t border-white/[0.06] bg-[#0a0f1a] transition-all duration-300 lg:hidden",
            mobileOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          )}
        >
          <div className="min-h-0 overflow-hidden px-4">
            <nav className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  className={cn(
                    "rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                    activeSection === link.sectionId
                      ? "bg-teal-400/10 text-teal-300"
                      : "text-slate-400 hover:bg-white/5"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center justify-between border-t border-white/[0.06] py-4">
              <SocialLinks />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
