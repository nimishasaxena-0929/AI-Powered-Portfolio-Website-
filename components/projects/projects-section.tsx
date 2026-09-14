"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./project-card";
import ProjectModal, { ProjectData } from "./project-modal";

const PROJECTS_DATA: ProjectData[] = [
  {
    id: "ai-portfolio",
    number: "01",
    title: "AI-Powered Developer Portfolio",
    subtitle: "Responsive Full-Stack Portfolio with Three.js 3D Accent & Google Gemini API Chatbot",
    category: "Full Stack / AI",
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Three.js",
      "Google Gemini API",
    ],
    resumeBullets: [
      "Developed a responsive full-stack portfolio using Next.js 15, React 19, and TypeScript, achieving a 98+ Lighthouse performance score.",
      "Built an interactive 3D hero animation with Three.js/React Three Fiber and integrated an AI chatbot through custom API routes powered by the Google Gemini API.",
      "Implemented automated testing with Vitest, Playwright, and axe-core, ensuring accessibility and code reliability across desktop and mobile browsers.",
      "Containerized and deployed the application using multi-stage Docker builds with health-check monitoring for production-ready delivery.",
    ],
    problem:
      "Standard developer portfolios lack high-performance 60 FPS WebGL rendering, server-streamed AI assistants, and multi-browser test coverage.",
    solution:
      "Engineered an editorial Next.js 15 web app incorporating React Three Fiber canvas loops, serverless Google Gemini API integration, Vitest/Playwright test suites, and Docker standalone builds.",
    architecture: [
      "Next.js 15 App Router handles static page generation and dynamic server API routes.",
      "React Three Fiber renders hardware-accelerated 3D geometries on an isolated WebGL canvas.",
      "Google Gemini API processes user queries via server-side streaming API routes.",
      "Vitest & Playwright validate component states and end-to-end user flows in CI/CD.",
      "Production multi-stage Docker container packages standalone Next.js build output.",
    ],
    githubUrl: "https://github.com/demo-profile/ai-powered-portfolio",
    liveUrl: "https://nimishasaxena.dev",
    accentBg: "bg-[#181C19]",
  },
  {
    id: "mediflow-saas",
    number: "02",
    title: "MediFlow — Hospital Management & Appointment SaaS",
    subtitle: "Role-Based Healthcare Platform with Doctor Availability, Token Queues & Redis Rate Limiting",
    category: "SaaS / Healthcare",
    stack: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Redis",
      "Socket.IO",
      "BullMQ",
      "Docker",
    ],
    resumeBullets: [
      "Developed a role-based hospital management platform for patients, doctors, receptionists, and administrators, covering appointments, medical records, prescriptions, and billing workflows.",
      "Implemented JWT Authentication and granular RBAC to secure role-specific access across hospital operations and patient data.",
      "Built an appointment scheduling system with doctor availability, conflict prevention, token-based queues, and real-time status updates using Socket.IO.",
      "Integrated Redis for caching and rate limiting and BullMQ for asynchronous tasks such as reminders, and designed RESTful APIs with MongoDB schemas, audit logging, and Docker-based deployment.",
    ],
    problem:
      "Hospital OPD operations suffer from appointment double-booking, patient queue confusion, fragmented medical record access, and high API latency.",
    solution:
      "Architected a role-based SaaS platform utilizing Redis atomic distributed locks for slot conflict prevention, Socket.IO for real-time patient queue updates, and BullMQ for automated reminder jobs.",
    architecture: [
      "React Single Page App communicates with Node/Express REST API gateway over TLS.",
      "JWT authentication & granular RBAC enforce strict access control for 4 user roles.",
      "Redis Mutex Lock prevents appointment double-booking conflicts during peak hours.",
      "Socket.IO broadcasts live queue updates to OPD waiting rooms.",
      "BullMQ background worker processes automated patient SMS/email reminder jobs.",
    ],
    githubUrl: "https://github.com/demo-profile/mediflow-saas",
    liveUrl: "https://mediflow-demo.dev",
    accentBg: "bg-[#181C19]",
  },
  {
    id: "apihub-portal",
    number: "03",
    title: "APIHub — API Management & Developer Portal",
    subtitle: "Centralized Developer Portal for API Publishing, Documentation, Key Rotation & Analytics",
    category: "DevOps / Infrastructure",
    stack: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Redis",
      "BullMQ",
      "OpenAPI",
      "Docker",
    ],
    resumeBullets: [
      "Built a full-stack API management platform enabling organizations to publish, document, secure, and monitor APIs through a centralized developer portal.",
      "Implemented API key authentication, JWT-based dashboard access, RBAC, and key rotation/revocation for secure API consumption.",
      "Developed Redis-based rate limiting and caching to control API usage and reduce unnecessary database operations.",
      "Built an interactive API Playground with OpenAPI-based documentation, versioned endpoints, and usage analytics, using BullMQ for async processing and Docker for deployment.",
    ],
    problem:
      "Enterprise teams lack a unified portal to manage API key access controls, monitor rate limits, analyze endpoint latency, and safely test endpoints in sandbox environments.",
    solution:
      "Built a high-performance API management gateway with Redis-backed rate limiting, automated OpenAPI spec parsing, and an interactive developer testing playground.",
    architecture: [
      "Developer Portal UI allows instant creation, rotation, and revocation of API keys.",
      "Express API Gateway intercepts incoming traffic and validates keys against Redis cache in <10ms.",
      "Token Bucket Rate Limiter dynamically throttles requests exceeding plan quotas.",
      "Interactive API Playground parses OpenAPI specs to enable live request testing.",
      "BullMQ worker aggregates endpoint metrics and writes usage analytics logs to MongoDB.",
    ],
    githubUrl: "https://github.com/demo-profile/apihub-portal",
    liveUrl: "https://apihub-demo.dev",
    accentBg: "bg-[#181C19]",
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <section id="projects" className="py-24 border-b border-[#222724] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs text-lime-500 uppercase tracking-widest block">
              03 / Selected Work
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F2F3EE]">
              Featured Projects
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-sans">
              Production full-stack applications and SaaS engineering projects built by Nimisha Saxena, featuring exact technical accomplishments from her resume.
            </p>
          </div>

          <div className="font-mono text-xs text-slate-400">
            [ 03 Major Projects ]
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((proj) => (
            <ProjectCard
              key={proj.id}
              project={proj}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
