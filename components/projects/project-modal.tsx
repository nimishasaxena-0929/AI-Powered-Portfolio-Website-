"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Github, CheckCircle2, Shield, Workflow, Cpu, Layers } from "lucide-react";

export interface ProjectData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  stack: string[];
  resumeBullets: string[];
  problem: string;
  solution: string;
  architecture: string[];
  githubUrl: string;
  liveUrl: string;
  accentBg: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0B0D0C]/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
          className="relative w-full max-w-4xl bg-[#121513] border border-[#222724] rounded-2xl shadow-2xl z-10 overflow-hidden my-auto max-h-[90vh] flex flex-col font-sans"
        >
          {/* Modal Header */}
          <div className="p-6 sm:p-8 bg-[#181C19] border-b border-[#222724] relative">
            <button
              suppressHydrationWarning
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-lg bg-[#0B0D0C] border border-[#222724] text-slate-400 hover:text-white hover:border-lime-500 transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3 mb-2 font-mono text-xs text-lime-500">
              <span>PROJ // {project.number}</span>
              <span>•</span>
              <span className="text-slate-400">{project.category}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-[#F2F3EE] tracking-tight">
              {project.title}
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-sans">
              {project.subtitle}
            </p>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-[#0B0D0C] border border-[#222724] text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Resume Accomplishments */}
            <div className="space-y-3">
              <h3 className="font-mono text-xs font-bold text-lime-500 uppercase tracking-widest">
                Resume Technical Accomplishments
              </h3>
              <ul className="space-y-3">
                {project.resumeBullets.map((bullet, i) => (
                  <li key={i} className="flex items-start space-x-3 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2 shrink-0" />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-[#0B0D0C] border border-[#222724]">
                <div className="flex items-center space-x-2 text-slate-300 font-bold font-mono text-xs mb-2 uppercase">
                  <Shield className="w-4 h-4 text-slate-400" />
                  <span>Engineering Problem</span>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#0B0D0C] border border-[#222724]">
                <div className="flex items-center space-x-2 text-lime-500 font-bold font-mono text-xs mb-2 uppercase">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Technical Solution</span>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Architecture Pipeline */}
            <div className="p-6 rounded-xl bg-[#181C19] border border-[#222724] space-y-3 font-mono">
              <div className="flex items-center space-x-2 text-xs font-bold text-slate-300 uppercase">
                <Workflow className="w-4 h-4 text-lime-500" />
                <span>System Architecture Flow</span>
              </div>
              <ol className="space-y-2 text-xs text-slate-300">
                {project.architecture.map((step, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span className="text-lime-500 font-bold">0{idx + 1}.</span>
                    <span className="font-sans text-slate-300">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="p-6 bg-[#0B0D0C] border-t border-[#222724] flex items-center justify-between">
            <div className="flex items-center space-x-3 font-mono text-xs">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[#121513] border border-[#222724] text-slate-300 hover:text-lime-500 transition-colors flex items-center space-x-2"
              >
                <Github className="w-4 h-4" />
                <span>Source Code (Demo)</span>
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-lime-500 text-charcoal-950 font-bold flex items-center space-x-2 hover:bg-lime-400 transition-colors"
              >
                <span>Live Interactive Demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={onClose}
              className="text-xs font-mono text-slate-500 hover:text-slate-300 transition-colors"
            >
              Press ESC to close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
