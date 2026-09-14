"use client";

import { ArrowUp, Github, Linkedin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-[#222724] bg-[#0B0D0C] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#222724]">
          {/* Brand Info */}
          <div className="space-y-2 max-w-md">
            <span className="font-sans font-bold text-lg text-[#F2F3EE]">
              Nimisha Saxena
            </span>
            <p className="text-slate-400 text-xs font-sans leading-relaxed">
              Full Stack Developer & AI Integration Specialist. Engineered with Next.js 15, React 19, TypeScript, Node.js, Express.js, MongoDB, Redis, Docker, and Google Gemini API.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap gap-6 font-mono text-xs text-slate-400">
            <a href="#about" className="hover:text-lime-500 transition-colors">About</a>
            <a href="#skills" className="hover:text-lime-500 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-lime-500 transition-colors">Projects</a>
            <a href="#architecture" className="hover:text-lime-500 transition-colors">How I Build</a>
            <a href="#ai-lab" className="hover:text-lime-500 transition-colors">AI Lab</a>
            <a href="#education" className="hover:text-lime-500 transition-colors">Education</a>
            <a href="#contact" className="hover:text-lime-500 transition-colors">Contact</a>
          </div>

          {/* Back to top */}
          <button
            suppressHydrationWarning
            onClick={scrollToTop}
            className="px-3.5 py-2 rounded bg-[#121513] border border-[#222724] text-slate-300 hover:text-lime-500 font-mono text-xs flex items-center space-x-2 transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5 text-lime-500" />
            <span>Top</span>
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <div suppressHydrationWarning>
            © {new Date().getFullYear()} Nimisha Saxena. All rights reserved. (Demo Profile)
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/nimishasaxena-0929" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors flex items-center space-x-1">
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/nimishasaxena29" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors flex items-center space-x-1">
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
