"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Terminal, Code, Cpu, Layers } from "lucide-react";
import { ProjectData } from "./project-modal";

interface ProjectCardProps {
  project: ProjectData;
  onSelect: (project: ProjectData) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "features">("overview");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="editorial-card rounded-2xl border border-[#222724] bg-[#121513] overflow-hidden flex flex-col justify-between group hover:border-lime-500/40 transition-all duration-300 shadow-xl"
    >
      {/* Interactive Dark-Mode Browser Header */}
      <div className="bg-[#181C19] border-b border-[#222724] p-4 flex flex-col space-y-3">
        <div className="flex items-center justify-between">
          {/* Mac Dots & URL Bar */}
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
            <span className="font-mono text-[10px] text-slate-500 pl-2">
              https://demo.dev/{project.id}
            </span>
          </div>

          <span className="font-mono text-xs text-lime-500 font-bold">
            PROJ // {project.number}
          </span>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center space-x-1 font-mono text-[11px]">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-3 py-1 rounded transition-colors ${
              activeTab === "overview"
                ? "bg-[#0B0D0C] text-lime-500 font-bold border border-[#222724]"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("architecture")}
            className={`px-3 py-1 rounded transition-colors ${
              activeTab === "architecture"
                ? "bg-[#0B0D0C] text-lime-500 font-bold border border-[#222724]"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Architecture
          </button>
          <button
            onClick={() => setActiveTab("features")}
            className={`px-3 py-1 rounded transition-colors ${
              activeTab === "features"
                ? "bg-[#0B0D0C] text-lime-500 font-bold border border-[#222724]"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Features
          </button>
        </div>
      </div>

      {/* Interactive Mockup Body Content based on Active Tab */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
        <div>
          <h3 className="text-xl font-bold text-[#F2F3EE] tracking-tight group-hover:text-lime-500 transition-colors mb-1">
            {project.title}
          </h3>
          <p className="text-slate-400 text-xs font-sans mb-4">
            {project.subtitle}
          </p>

          {/* Dynamic Content View */}
          {activeTab === "overview" && (
            <div className="p-4 rounded-xl bg-[#0B0D0C] border border-[#222724] space-y-3 font-sans text-xs">
              <div className="flex items-center space-x-2 text-lime-500 font-mono text-[11px] font-bold">
                <Terminal className="w-3.5 h-3.5" />
                <span>Resume Accomplishment Highlights</span>
              </div>
              <ul className="space-y-2 text-slate-300">
                {project.resumeBullets.slice(0, 2).map((bullet, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-lime-500 font-bold">•</span>
                    <span className="line-clamp-2">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "architecture" && (
            <div className="p-4 rounded-xl bg-[#0B0D0C] border border-[#222724] space-y-2 font-mono text-[11px]">
              <div className="text-slate-400 uppercase text-[10px] font-bold">Pipeline Steps</div>
              <ol className="space-y-1 text-slate-300">
                {project.architecture.slice(0, 3).map((step, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-lime-500 font-bold">0{idx + 1}.</span>
                    <span className="line-clamp-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {activeTab === "features" && (
            <div className="p-4 rounded-xl bg-[#0B0D0C] border border-[#222724] space-y-2 font-sans text-xs">
              <div className="text-lime-500 font-mono text-[11px] font-bold flex items-center space-x-1.5">
                <Cpu className="w-3.5 h-3.5" />
                <span>Key Capabilities</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          )}
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
          {project.stack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded bg-[#0B0D0C] border border-[#222724] text-slate-300"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 5 && (
            <span className="px-2 py-1 rounded bg-[#0B0D0C] border border-[#222724] text-lime-500 font-bold">
              +{project.stack.length - 5}
            </span>
          )}
        </div>

        {/* Action Row */}
        <div className="pt-4 border-t border-[#222724] flex items-center justify-between gap-3 font-mono text-xs">
          <button
            onClick={() => onSelect(project)}
            className="flex-1 py-2.5 px-4 rounded-lg bg-[#0B0D0C] border border-[#222724] text-slate-200 hover:text-white hover:border-lime-500 flex items-center justify-center space-x-2 transition-colors"
          >
            <span>Full Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-lime-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub repository for ${project.title}`}
            className="p-2.5 rounded-lg bg-[#0B0D0C] border border-[#222724] text-slate-400 hover:text-lime-500 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
