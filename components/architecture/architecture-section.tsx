"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Server, ShieldCheck, Cpu, Database, Layers, Bot, X } from "lucide-react";

interface PipelineNode {
  id: string;
  step: string;
  name: string;
  category: string;
  tech: string[];
  latency: string;
  description: string;
  icon: any;
}

const PIPELINE_NODES: PipelineNode[] = [
  {
    id: "frontend",
    step: "01",
    name: "Frontend Layer",
    category: "Presentation & Web UI",
    tech: ["React.js", "Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
    latency: "< 16ms (60 FPS)",
    description:
      "Responsive user interface built with Next.js 15 App Router, React 19 concurrent state, and client-side WebGL canvas accents.",
    icon: Globe,
  },
  {
    id: "apigateway",
    step: "02",
    name: "API Layer",
    category: "Ingress & Routing",
    tech: ["Node.js", "Express.js", "RESTful APIs", "OpenAPI"],
    latency: "< 5ms",
    description:
      "Express.js backend gateway managing endpoint routes, payload validation, CORS security, and OpenAPI documentation contracts.",
    icon: Server,
  },
  {
    id: "auth",
    step: "03",
    name: "Authentication / RBAC",
    category: "Access & Rate Limiting",
    tech: ["JWT", "RBAC", "Redis Token Bucket", "API Keys"],
    latency: "< 10ms",
    description:
      "Role-Based Access Control (RBAC) protecting endpoints for patients, doctors, and admins alongside Redis token bucket rate limiters.",
    icon: ShieldCheck,
  },
  {
    id: "business",
    step: "04",
    name: "Business Logic",
    category: "Domain Controllers",
    tech: ["Express Controllers", "Mongoose Schemas", "Conflict Engines"],
    latency: "< 25ms",
    description:
      "Core domain services managing appointment slot scheduling, medical record attachments, prescription workflows, and API key generation.",
    icon: Cpu,
  },
  {
    id: "database",
    step: "05",
    name: "MongoDB / Redis",
    category: "Data Store & Caching",
    tech: ["MongoDB", "Redis", "Mongoose", "PostgreSQL", "Prisma"],
    latency: "< 12ms",
    description:
      "MongoDB document storage paired with Redis in-memory caching, distributed locks for appointment concurrency, and query optimization.",
    icon: Database,
  },
  {
    id: "asyncjobs",
    step: "06",
    name: "Async Jobs",
    category: "Worker Infrastructure",
    tech: ["BullMQ", "Socket.IO", "WebSockets"],
    latency: "Background Queue",
    description:
      "BullMQ Redis worker queues for asynchronous patient appointment reminders, PDF billing generation, and real-time Socket.IO broadcasts.",
    icon: Layers,
  },
  {
    id: "aiservices",
    step: "07",
    name: "AI Services",
    category: "Cognitive Intelligence",
    tech: ["Google Gemini API", "LLM APIs", "Prompt Engineering"],
    latency: "< 400ms TTFT",
    description:
      "Server-side Next.js route integration with Google Gemini API for multi-turn assistant queries, document parsing, and natural language response generation.",
    icon: Bot,
  },
];

export default function ArchitectureSection() {
  const [selectedNode, setSelectedNode] = useState<PipelineNode | null>(null);

  return (
    <section id="architecture" className="py-24 border-b border-[#222724] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs text-lime-500 uppercase tracking-widest block">
              04 / Architecture Diagram
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F2F3EE]">
              HOW I BUILD
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-sans">
              System architecture pipeline illustrating end-to-end data processing from frontend client interactions down to async BullMQ background queues and Google Gemini AI services.
            </p>
          </div>

          <div className="font-mono text-xs text-slate-400">
            [ 07 System Pipeline Nodes ]
          </div>
        </div>

        {/* System Diagram Grid */}
        <div className="editorial-card p-8 rounded-xl border border-[#222724] bg-[#121513] space-y-6">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-4 border-b border-[#222724]">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse" />
              <span>SYSTEM_DATA_FLOW // ACTIVE</span>
            </div>
            <span>Click any node to inspect details</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {PIPELINE_NODES.map((node, idx) => {
              const Icon = node.icon;
              return (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setSelectedNode(node)}
                  className="p-5 rounded-lg border border-[#222724] bg-[#0B0D0C] hover:border-lime-500/50 cursor-pointer transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 font-mono text-xs">
                      <span className="text-lime-500 font-bold">{node.step}</span>
                      <span className="text-slate-500">{node.latency}</span>
                    </div>

                    <div className="flex items-center space-x-2.5 mb-2">
                      <Icon className="w-4 h-4 text-slate-300 group-hover:text-lime-500 transition-colors shrink-0" />
                      <h3 className="text-sm font-bold text-[#F2F3EE] group-hover:text-lime-500 transition-colors">
                        {node.name}
                      </h3>
                    </div>

                    <p className="text-[11px] font-mono text-slate-400 mb-3">
                      {node.category}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#222724] flex flex-wrap gap-1 font-mono text-[10px]">
                    {node.tech.slice(0, 2).map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-[#181C19] text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Node Detail Drawer */}
      <AnimatePresence>
        {selectedNode && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNode(null)}
              className="fixed inset-0 bg-[#0B0D0C]/85 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              className="relative w-full max-w-lg bg-[#121513] border border-lime-500/40 rounded-xl p-6 shadow-2xl z-10 space-y-6 font-sans"
            >
              <div className="flex items-center justify-between border-b border-[#222724] pb-4">
                <div className="flex items-center space-x-3">
                  <selectedNode.icon className="w-5 h-5 text-lime-500" />
                  <div>
                    <h3 className="text-lg font-bold text-[#F2F3EE]">{selectedNode.name}</h3>
                    <span className="text-xs font-mono text-slate-400">{selectedNode.category}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedNode(null)}
                  className="p-1 rounded text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <p>{selectedNode.description}</p>

                <div>
                  <h4 className="font-mono text-xs font-bold text-lime-500 mb-2 uppercase">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2 font-mono text-xs">
                    {selectedNode.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded bg-[#0B0D0C] border border-[#222724] text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded bg-[#0B0D0C] border border-[#222724] font-mono text-xs flex justify-between">
                  <span className="text-slate-400">Target Latency:</span>
                  <span className="text-lime-500 font-bold">{selectedNode.latency}</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
