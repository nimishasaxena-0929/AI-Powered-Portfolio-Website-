"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  Github,
  Linkedin,
  ArrowRight,
  Copy,
  Check,
  Terminal,
  ShieldCheck,
  Cpu,
  Mail,
  Phone,
  Sparkles,
} from "lucide-react";
import HeroCanvas from "./hero-canvas";

export default function HeroSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("saxenanimisha514@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center border-b border-[#222724]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline, Bio & Action Buttons */}
          <div className="lg:col-span-7 space-y-8 z-10">
            {/* Status Pill Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center space-x-2.5 px-3 py-1 rounded-full bg-[#121513] border border-[#222724] text-xs font-mono text-lime-500"
            >
              <span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse" />
              <span>Full Stack Developer & AI Integration Specialist</span>
            </motion.div>

            {/* Name & Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F2F3EE] leading-[1.05]">
                Nimisha Saxena
              </h1>
              <p className="text-lg sm:text-2xl font-mono text-slate-400 font-medium">
                Building Scalable Web Apps, REST APIs & Gemini LLM Systems
              </p>
            </motion.div>

            {/* Resume Bio */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-sans"
            >
              Full Stack Developer with hands-on experience building responsive, scalable web applications and SaaS platforms using React.js, Next.js 15, TypeScript, Node.js, and Express.js. Skilled in developing RESTful APIs, JWT & RBAC security, real-time WebSockets with Redis, and integrating Google Gemini AI.
            </motion.p>

            {/* Main Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-lg font-mono font-semibold text-xs text-charcoal-950 bg-lime-500 hover:bg-lime-400 transition-all flex items-center space-x-2 shadow-lg shadow-lime-500/10"
              >
                <span>View Selected Work</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              {/* 1-Click Quick Email Copy Button */}
              <button
                suppressHydrationWarning
                onClick={handleCopyEmail}
                className="px-5 py-3.5 rounded-lg font-mono text-xs text-slate-200 bg-[#121513] border border-[#222724] hover:border-lime-500/50 hover:text-white transition-all flex items-center space-x-2"
                title="Copy email to clipboard"
              >
                <Mail className="w-4 h-4 text-lime-500" />
                <span>saxenanimisha514@gmail.com</span>
                {copiedEmail ? (
                  <Check className="w-3.5 h-3.5 text-lime-500 ml-1" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-500 ml-1" />
                )}
              </button>

              {/* Social Buttons */}
              <div className="flex items-center space-x-2">
                <a
                  href="https://github.com/nimishasaxena-0929"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3.5 rounded-lg bg-[#121513] border border-[#222724] text-slate-400 hover:text-lime-500 transition-colors"
                >
                  <Github className="w-4.5 h-4.5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nimishasaxena29"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3.5 rounded-lg bg-[#121513] border border-[#222724] text-slate-400 hover:text-lime-500 transition-colors"
                >
                  <Linkedin className="w-4.5 h-4.5" />
                </a>
              </div>
            </motion.div>

            {/* Quick Metrics & System Specs Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="pt-6 border-t border-[#222724] grid grid-cols-3 gap-6 max-w-xl text-left"
            >
              <div>
                <span className="block text-2xl font-bold font-mono text-lime-500">98+</span>
                <span className="text-xs font-mono text-slate-400">Lighthouse Score</span>
              </div>
              <div>
                <span className="block text-2xl font-bold font-mono text-[#F2F3EE]">8.69</span>
                <span className="text-xs font-mono text-slate-400">BCA CGPA</span>
              </div>
              <div>
                <span className="block text-2xl font-bold font-mono text-[#F2F3EE]">03</span>
                <span className="text-xs font-mono text-slate-400">SaaS Projects</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive System Dashboard Card + 3D Accent */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center space-y-6">
            {/* Live Terminal / System Preview Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full editorial-card p-6 rounded-2xl border border-[#222724] bg-[#121513] space-y-4 font-mono text-xs shadow-2xl relative"
            >
              <div className="flex items-center justify-between border-b border-[#222724] pb-3 text-slate-400">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] text-slate-500 pl-2">SYSTEM_MONITOR.ts</span>
                </div>
                <span className="text-lime-500 text-[10px] uppercase font-bold">ONLINE</span>
              </div>

              <div className="space-y-2 text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-500">ENGINEER:</span>
                  <span className="text-[#F2F3EE] font-bold">Nimisha Saxena</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">ROLE:</span>
                  <span className="text-lime-400">Full Stack & AI</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">STACK:</span>
                  <span className="text-slate-300">Next.js 15, React 19, Express, Redis</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">AI ENGINE:</span>
                  <span className="text-lime-500">Google Gemini 2.5 API</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">CONTAINER:</span>
                  <span className="text-slate-300">Docker Multi-Stage Build</span>
                </div>
              </div>

              <div className="p-3 rounded bg-[#0B0D0C] border border-[#222724] text-[11px] flex items-center space-x-2 text-slate-400">
                <Terminal className="w-4 h-4 text-lime-500 shrink-0" />
                <span className="text-lime-400">$ node server.js --status=ready</span>
              </div>
            </motion.div>

            {/* 3D Canvas */}
            <div className="w-full">
              <HeroCanvas />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
