"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Architecture", href: "#architecture" },
  { name: "AI Lab", href: "#ai-lab" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const currentPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= currentPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B0D0C]/90 backdrop-blur-md border-b border-[#222724] py-3.5 shadow-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#"
            className="group flex items-center space-x-3 text-slate-100 focus:outline-none focus:ring-1 focus:ring-lime-500 rounded p-1"
          >
            <span className="font-sans font-bold text-base tracking-tight text-[#F2F3EE] group-hover:text-lime-500 transition-colors">
              NIMISHA SAXENA
            </span>
            <span className="hidden sm:inline-block text-xs font-mono text-slate-400 pl-2 border-l border-slate-700">
              Full Stack & AI
            </span>
          </a>

          {/* Center Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center space-x-1 px-4 py-1.5 rounded-full bg-[#121513] border border-[#222724]"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 py-1 text-xs font-mono transition-colors rounded-full focus:outline-none focus:ring-1 focus:ring-lime-500 ${
                    isActive
                      ? "text-lime-500 font-semibold"
                      : "text-slate-400 hover:text-slate-100"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavTag"
                      className="absolute inset-0 bg-lime-500/10 border border-lime-500/30 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Status Indicator */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-[#121513] border border-[#222724] text-[11px] font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse" />
              <span>Available for opportunities</span>
            </div>
            <a
              href="#contact"
              className="px-3.5 py-1.5 rounded-lg font-mono text-xs text-[#0B0D0C] bg-lime-500 hover:bg-lime-400 font-semibold transition-all flex items-center space-x-1"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#121513] border border-[#222724] text-slate-300 hover:text-white focus:outline-none focus:ring-1 focus:ring-lime-500"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-lime-500" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0B0D0C] border-t border-b border-[#222724] px-6 py-6"
          >
            <div className="flex flex-col space-y-4 font-mono text-sm">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-slate-300 hover:text-lime-500 transition-colors flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <span className="text-slate-600">→</span>
                </a>
              ))}
              <div className="pt-4 border-t border-[#222724] flex flex-col space-y-3">
                <div className="flex items-center space-x-2 text-xs text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-lime-500" />
                  <span>Available for opportunities</span>
                </div>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-lg bg-lime-500 text-charcoal-950 font-bold text-xs uppercase tracking-wider"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
