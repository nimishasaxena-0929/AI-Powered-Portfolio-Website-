"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const TECHNICAL_FOCUS = [
  { title: "Full Stack Development", desc: "Building responsive, modern web interfaces with Next.js 15, React 19, and TypeScript." },
  { title: "SaaS Applications", desc: "Developing multi-tenant web platforms with complex role-based workflows and billing integrations." },
  { title: "RESTful APIs & Node.js", desc: "Architecting backend microservices and high-throughput Express.js controllers." },
  { title: "JWT & RBAC Security", desc: "Implementing secure token-based authentication and granular role access rights." },
  { title: "Real-Time WebSockets", desc: "Building live event channels with Socket.IO, Redis pub/sub, and patient queue updates." },
  { title: "MongoDB & Redis Storage", desc: "Modeling document schemas, aggregation pipelines, and atomic distributed locks." },
  { title: "AI & LLM Integration", desc: "Integrating Google Gemini API, custom system prompts, and multi-turn streaming interfaces." },
  { title: "Docker Containerization", desc: "Packaging full-stack builds with multi-stage Dockerfiles and health monitoring endpoints." },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 border-b border-[#222724] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Statement */}
          <div className="lg:col-span-5 space-y-6">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-xs text-lime-500 uppercase tracking-widest block"
            >
              01 / Engineering Profile
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F3EE] leading-tight"
            >
              Building Scalable Web Applications & AI Model Integrations
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans"
            >
              I am Nimisha Saxena, a Full Stack Developer focused on building production-grade web platforms and SaaS solutions. My background combines modern frontend React ecosystem development with robust Node.js backend infrastructure, relational/document database management, and Google Gemini AI API integrations.
            </motion.p>

            <div className="p-4 rounded-xl bg-[#121513] border border-[#222724] font-mono text-xs text-slate-400 space-y-2">
              <div className="text-lime-500 font-bold">CORE METHODOLOGY</div>
              <p className="text-slate-300 leading-relaxed font-sans">
                Clean code standards, automated testing with Vitest/Playwright, WCAG accessibility compliance, and containerized Docker delivery.
              </p>
            </div>
          </div>

          {/* Right Column: Technical Focus Index */}
          <div className="lg:col-span-7 space-y-4">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-xs text-slate-400 uppercase tracking-widest block mb-4"
            >
              Technical Focus Areas
            </motion.span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TECHNICAL_FOCUS.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="editorial-card p-5 rounded-xl border border-[#222724] bg-[#121513] hover:border-lime-500/40 transition-all"
                >
                  <div className="flex items-center space-x-2.5 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-500" />
                    <h3 className="text-sm font-bold text-[#F2F3EE]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
