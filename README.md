# Nimisha Saxena — Full Stack Developer & AI Integration

Production-grade, full-stack developer portfolio application engineered with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Framer Motion, Three.js / React Three Fiber, Google Gemini API, Vitest, Playwright, axe-core, and Docker.

---

## Executive Overview

This repository contains the official developer portfolio and engineering showcase for Nimisha Saxena, Full Stack Developer & AI Integration Specialist. Designed with an editorial engineering aesthetic, the application highlights responsive full-stack applications, RESTful microservice architectures, real-time WebSocket communication, role-based access control (RBAC), and Google Gemini LLM API integrations.

---

## Core Technology Stack

- **Frontend Architecture:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Framer Motion
- **3D Graphics Engine:** Three.js, React Three Fiber (R3F), Drei
- **Backend & API Layer:** Node.js, Express.js, RESTful APIs, JWT Authentication, Role-Based Access Control (RBAC), WebSockets, Socket.IO, OpenAPI 3.0
- **Database & Data Stores:** MongoDB, PostgreSQL, SQL Server, Redis, Mongoose, Prisma
- **Asynchronous Task Infrastructure:** BullMQ Redis Worker Queues
- **AI Engine:** Google Gemini 2.5 / 1.5 Flash Model APIs, System Prompt Engineering
- **Testing & Quality Assurance:** Vitest, React Testing Library, Playwright E2E, axe-core Accessibility Audits
- **DevOps & Containerization:** Multi-stage Docker Build, Healthcheck Monitoring, Vercel

---

## Featured Engineering Projects

### 1. AI-Powered Developer Portfolio
- **Technologies:** Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, Three.js, Google Gemini API, Vitest, Playwright, Docker
- **Summary:** Developed a full-stack portfolio application achieving a 98+ Lighthouse performance score with hardware-accelerated 3D WebGL hero accents, serverless Google Gemini API streaming chat routes, Vitest/Playwright test suites, and multi-stage Docker containerization.

### 2. MediFlow — Hospital Management & Appointment SaaS
- **Technologies:** React.js, TypeScript, Node.js, Express.js, MongoDB, Mongoose, Redis, Socket.IO, BullMQ, Docker
- **Summary:** Architected a role-based healthcare management SaaS covering patient appointments, medical histories, prescriptions, and billing workflows. Implemented Redis atomic locks for slot conflict prevention, Socket.IO for real-time queue updates, and BullMQ for automated reminder notifications.

### 3. APIHub — API Management & Developer Portal
- **Technologies:** React.js, TypeScript, Node.js, Express.js, MongoDB, Mongoose, Redis, BullMQ, OpenAPI, Docker
- **Summary:** Built an enterprise API management platform enabling organizations to publish, secure, document, and analyze APIs. Features sub-10ms Redis API key verification, token bucket rate limiting, an interactive OpenAPI Playground, and real-time usage analytics.

---

## Technical Index & Skills

- **Languages:** JavaScript (ES6+), TypeScript, Python, SQL, HTML5, CSS3
- **Frontend:** React.js, Next.js 15, Tailwind CSS, Framer Motion, Three.js, Responsive Web Design
- **Backend:** Node.js, Express.js, RESTful APIs, JWT Authentication, Role-Based Access Control (RBAC), WebSockets, Socket.IO, OpenAPI
- **Databases:** MongoDB, PostgreSQL, SQL Server, Redis, Mongoose, Prisma
- **DevOps & Tools:** Docker, Git, GitHub, Vercel, Postman, npm, VS Code, BullMQ
- **Testing:** Vitest, Playwright, axe-core
- **AI & LLM:** Google Gemini API, LLM APIs, Prompt Engineering, AI Chatbot Development
- **Core Strengths:** Problem-Solving, Debugging, Technical Communication, Team Collaboration

---

## Education & Certifications

- **Master of Computer Application (MCA):** Vikrant University, Gwalior (Aug 2026 – Present)
- **Bachelor of Computer Application (BCA):** Vikrant University, Gwalior (2023 – 2026 Completed) | **CGPA: 8.69**
- **Full Stack React E-Commerce Certification:** GreatStack (Aug 2025)
- **Deloitte Australia Data Analytics Simulation:** Forage (Aug 2025)

---

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── chat/route.ts        # Google Gemini API server route
│   │   ├── contact/route.ts     # Contact form API handler
│   │   └── health/route.ts      # Docker healthcheck endpoint
│   ├── globals.css              # Editorial styling & custom utility classes
│   ├── layout.tsx               # Root layout, fonts, and accessibility skip-links
│   ├── page.tsx                 # Main application page orchestrator
│   ├── robots.ts                # Search engine crawler policies
│   └── sitemap.ts               # Dynamic sitemap generator
├── components/
│   ├── about/                   # Engineering profile & focus area grid
│   ├── ai-lab/                  # Gemini assistant chat interface
│   ├── architecture/            # HOW I BUILD system diagram visualizer
│   ├── contact/                 # Contact form & social credentials
│   ├── education/               # MCA/BCA timeline & certification index
│   ├── footer.tsx               # Footer & navigation links
│   ├── hero/                    # Editorial hero, 3D Canvas, & system monitor
│   ├── navbar.tsx               # Sticky navigation & status indicator
│   ├── projects/                # Tabbed dark-mode browser mockups & case study modal
│   └── tech-stack/              # Skill index matrix with live search filter
├── tests/
│   ├── a11y/                    # axe-core accessibility audit tests
│   ├── e2e/                     # Playwright browser automation tests
│   └── unit/                    # Vitest component unit tests
├── Dockerfile                   # Multi-stage production Docker build
├── next.config.mjs              # Next.js standalone output configuration
├── tailwind.config.ts           # Charcoal & Electric Lime design system
├── tsconfig.json                # TypeScript strict configuration
└── vitest.config.ts             # Vitest test runner configuration
```

---

## Getting Started

### Prerequisites

- Node.js version 20.x or higher
- npm package manager version 10.x or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/nimishasaxena-0929/AI-Powered-Portfolio-Website-.git
cd AI-Powered-Portfolio-Website-
```

2. Install dependencies with legacy peer dependency resolution:
```bash
npm install --legacy-peer-deps
```

3. Configure environment variables:
Create a `.env.local` file in the root directory:
```env
GEMINI_API_KEY=your_google_gemini_api_key_here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Testing & Quality Assurance

### TypeScript Type Checking
```bash
npm run type-check
```

### Component Unit Testing (Vitest)
```bash
npm run test
```

### End-to-End Automation Testing (Playwright)
```bash
npm run test:e2e
```

### Production Build Verification
```bash
npm run build
```

---

## Production Docker Deployment

Build the optimized multi-stage Docker container:
```bash
docker build -t nimisha-portfolio .
```

Run the container on port 3000:
```bash
docker run -p 3000:3000 -e GEMINI_API_KEY="your_api_key" nimisha-portfolio
```

Healthcheck endpoint monitor: `http://localhost:3000/api/health`

---

## Contact & Social Links

- **Email:** saxenanimisha514@gmail.com
- **Phone:** +91 9584841830
- **LinkedIn:** https://www.linkedin.com/in/nimishasaxena29
- **GitHub:** https://github.com/nimishasaxena-0929
- **Location:** Gwalior, India — Remote

---

## License

Copyright © 2026 Nimisha Saxena. All rights reserved.