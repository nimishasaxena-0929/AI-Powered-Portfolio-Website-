"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Code2 } from "lucide-react";

interface SkillCategory {
  title: string;
  skills: string[];
}

const SKILL_INDEX: SkillCategory[] = [
  {
    title: "LANGUAGES",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "FRONTEND",
    skills: [
      "React.js",
      "Next.js 15",
      "Tailwind CSS",
      "Framer Motion",
      "Three.js",
      "Responsive Web Design",
    ],
  },
  {
    title: "BACKEND",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "JWT Authentication",
      "Role-Based Access Control (RBAC)",
      "WebSockets",
      "Socket.IO",
      "OpenAPI",
    ],
  },
  {
    title: "DATABASES",
    skills: ["MongoDB", "PostgreSQL", "SQL Server", "Redis", "Mongoose", "Prisma"],
  },
  {
    title: "CLOUD / DEVOPS / TOOLS",
    skills: ["Docker", "Git", "GitHub", "Vercel", "Postman", "npm", "VS Code", "BullMQ"],
  },
  {
    title: "TESTING",
    skills: ["Vitest", "Playwright", "axe-core"],
  },
  {
    title: "AI / INTEGRATION",
    skills: [
      "Google Gemini API",
      "LLM APIs",
      "Prompt Engineering",
      "AI Chatbot Development",
    ],
  },
  {
    title: "CORE STRENGTHS",
    skills: [
      "Problem-Solving",
      "Debugging",
      "Technical Communication",
      "Team Collaboration",
    ],
  },
];

export default function TechStackSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCat, setSelectedCat] = useState<string>("ALL");

  const filteredCategories = SKILL_INDEX.filter((cat) => {
    if (selectedCat !== "ALL" && cat.title !== selectedCat) return false;
    if (!searchQuery) return true;
    return (
      cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  return (
    <section id="skills" className="py-24 border-b border-[#222724] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs text-lime-500 uppercase tracking-widest block">
              02 / Technical Skill Matrix
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F2F3EE]">
              Skills & Tooling
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-sans">
              Interactive technology index matching all skills from Nimisha Saxena's resume across languages, frontend, backend, databases, cloud tooling, testing, and AI integrations.
            </p>
          </div>

          {/* Interactive Search Bar */}
          <div className="relative w-full md:w-72 font-mono text-xs">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Docker, Redis)..."
              className="w-full bg-[#121513] border border-[#222724] rounded-lg pl-10 pr-4 py-2.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-lime-500 transition-colors"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8 font-mono text-xs">
          <button
            onClick={() => setSelectedCat("ALL")}
            className={`px-3.5 py-1.5 rounded-full border transition-all ${
              selectedCat === "ALL"
                ? "bg-lime-500 text-charcoal-950 font-bold border-lime-500"
                : "bg-[#121513] border-[#222724] text-slate-400 hover:text-slate-200"
            }`}
          >
            ALL (8)
          </button>
          {SKILL_INDEX.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setSelectedCat(cat.title)}
              className={`px-3.5 py-1.5 rounded-full border transition-all ${
                selectedCat === cat.title
                  ? "bg-lime-500 text-charcoal-950 font-bold border-lime-500"
                  : "bg-[#121513] border-[#222724] text-slate-400 hover:text-slate-200"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skill Index Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="editorial-card p-6 rounded-xl border border-[#222724] bg-[#121513] flex flex-col justify-between hover:border-lime-500/40 transition-all group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#222724] mb-4">
                    <h3 className="font-mono text-xs font-bold text-lime-500 tracking-wider uppercase">
                      {cat.title}
                    </h3>
                    <span className="font-mono text-[10px] text-slate-500">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#0B0D0C] border border-[#222724] text-slate-300 group-hover:border-slate-700 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
