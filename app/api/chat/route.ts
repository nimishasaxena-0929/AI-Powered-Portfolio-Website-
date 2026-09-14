import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const SYSTEM_PROMPT = `You are Nimisha Saxena's professional AI Assistant embedded directly inside her developer portfolio.
Your role is to answer questions accurately, technically, and professionally regarding Nimisha Saxena's resume, full-stack skills, SaaS architecture experience, AI integrations, projects, and educational achievements.

NIMISHA SAXENA'S PROFILE (SINGLE SOURCE OF TRUTH FROM RESUME):
- Title: Full Stack Developer | AI Integration
- Summary: Full Stack Developer with hands-on experience building responsive, scalable web applications and SaaS platforms using React.js, Next.js, TypeScript, Node.js, and Express.js. Skilled in developing RESTful APIs, implementing JWT Authentication and Role-Based Access Control (RBAC), and building real-time features with WebSockets and Socket.IO on MongoDB and Redis. Experienced integrating AI and LLM APIs, including the Google Gemini API, and deploying containerized applications with Docker.
- Technical Skills:
  - Languages: JavaScript (ES6+), TypeScript, Python, SQL, HTML5, CSS3
  - Frontend: React.js, Next.js 15, Tailwind CSS, Framer Motion, Three.js, Responsive Web Design
  - Backend: Node.js, Express.js, RESTful APIs, JWT Authentication, Role-Based Access Control (RBAC), WebSockets, Socket.IO, OpenAPI
  - Databases: MongoDB, PostgreSQL, SQL Server, Redis, Mongoose, Prisma
  - Cloud / DevOps / Tools: Docker, Git, GitHub, Vercel, Postman, npm, VS Code, BullMQ
  - Testing: Vitest, Playwright, axe-core
  - AI / Integration: Google Gemini API, LLM APIs, Prompt Engineering, AI Chatbot Development
  - Core Strengths: Problem-Solving, Debugging, Technical Communication, Team Collaboration

RESUME PROJECTS:
1. AI-Powered Developer Portfolio (Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, Three.js, Google Gemini API):
   - 98+ Lighthouse performance score.
   - Interactive 3D hero animation with Three.js/R3F and Gemini AI chatbot integration.
   - Vitest, Playwright, axe-core automated testing.
   - Multi-stage Docker builds with health-check monitoring.

2. MediFlow — Hospital Management & Appointment SaaS (React.js, TypeScript, Node.js, Express.js, MongoDB, Mongoose, Redis, Socket.IO, BullMQ, Docker):
   - Role-based platform for patients, doctors, receptionists, administrators (appointments, medical records, prescriptions, billing).
   - JWT Auth & granular RBAC.
   - Appointment scheduling with doctor availability, conflict prevention, token queues, Socket.IO real-time updates.
   - Redis caching & rate limiting, BullMQ reminders, Docker deployment.

3. APIHub — API Management & Developer Portal (React.js, TypeScript, Node.js, Express.js, MongoDB, Mongoose, Redis, BullMQ, OpenAPI, Docker):
   - Full-stack API management portal to publish, document, secure, and monitor APIs.
   - API key authentication, JWT dashboard access, RBAC, key rotation/revocation.
   - Redis rate limiting and caching.
   - Interactive API Playground with OpenAPI specs, versioned endpoints, usage analytics, BullMQ async processing, Docker deployment.

EDUCATION & CERTIFICATIONS:
- Master of Computer Application (MCA), Aug 2026 – Present, Vikrant University, Gwalior
- Bachelor of Computer Application (BCA), 2023 – 2026 (Completed), Vikrant University, Gwalior | CGPA: 8.69
- Certifications: Full Stack React E-Commerce Project — GreatStack (Aug 2025), Deloitte Australia Data Analytics Job Simulation — Forage (Aug 2025).

CONTACT DETAILS:
Email: saxenanimisha514@gmail.com | Phone: 9584841830 | GitHub: https://github.com/nimishasaxena-0929 | LinkedIn: https://www.linkedin.com/in/nimishasaxena29 | Location: Gwalior, India — Remote

GUIDELINES FOR YOUR RESPONSES:
- Be professional, concise, technical, and helpful to recruiters and hiring managers.
- Always remain strictly grounded in Nimisha's resume.
`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid messages format" },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;

    // Fallback mode if GEMINI_API_KEY is not configured
    if (!apiKey || apiKey === "your_gemini_api_key_here") {
      const lastUserMsg = messages[messages.length - 1]?.content?.toLowerCase() || "";

      let fallbackText = "Nimisha Saxena is a Full Stack Developer specializing in Next.js 15, React 19, Node.js, Express.js, RESTful APIs, JWT/RBAC security, Redis caching, and Google Gemini AI integrations.";

      if (lastUserMsg.includes("project") || lastUserMsg.includes("mediflow") || lastUserMsg.includes("apihub") || lastUserMsg.includes("built")) {
        fallbackText = `Nimisha has built 3 flagship engineering projects:
1. **AI-Powered Developer Portfolio**: Next.js 15, React 19, Three.js, Gemini API, Vitest/Playwright CI, 98+ Lighthouse score.
2. **MediFlow Hospital SaaS**: Role-based management system with Redis locks, doctor availability scheduling, Socket.IO queue, and BullMQ reminders.
3. **APIHub Developer Portal**: API key gateway, Redis token-bucket rate limiter, OpenAPI Playground, and analytics dashboard.`;
      } else if (lastUserMsg.includes("skill") || lastUserMsg.includes("tech") || lastUserMsg.includes("use")) {
        fallbackText = `Nimisha's technical stack includes:
- **Languages**: JavaScript (ES6+), TypeScript, Python, SQL, HTML5, CSS3.
- **Frontend**: React.js, Next.js 15, Tailwind CSS, Framer Motion, Three.js.
- **Backend**: Node.js, Express.js, RESTful APIs, JWT Auth, RBAC, WebSockets, Socket.IO, OpenAPI.
- **Databases**: MongoDB, PostgreSQL, SQL Server, Redis, Mongoose, Prisma.
- **DevOps & QA**: Docker, Vitest, Playwright, axe-core accessibility.`;
      } else if (lastUserMsg.includes("ai") || lastUserMsg.includes("gemini")) {
        fallbackText = "Nimisha integrates Google Gemini API, LLM APIs, custom system prompts, multi-turn streaming interfaces, and autonomous agent workflows directly into full-stack web applications.";
      } else if (lastUserMsg.includes("education") || lastUserMsg.includes("degree") || lastUserMsg.includes("bca") || lastUserMsg.includes("mca")) {
        fallbackText = "Nimisha is currently pursuing her MCA (Aug 2026 – Present) at Vikrant University, Gwalior. She completed her BCA (2023 – 2026) from Vikrant University with a CGPA of 8.69.";
      }

      return NextResponse.json({
        content: fallbackText + "\n\n*(Running in local demo mode. Configure GEMINI_API_KEY in .env.local for live Gemini 2.5 API inference)*",
      });
    }

    // Live Google Gemini API call
    const contents = [
      {
        role: "user",
        parts: [{ text: SYSTEM_PROMPT }],
      },
      ...messages.map((m: { role: string; content: string }) => ({
        role: m.role === "user" ? "user" : "model",
        parts: [{ text: m.content }],
      })),
    ];

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents,
          generationConfig: {
            temperature: 0.6,
            maxOutputTokens: 1000,
          },
        }),
      }
    );

    if (!response.ok) {
      const errData = await response.json();
      console.error("Gemini API Error:", errData);
      return NextResponse.json(
        { error: "Gemini API request failed" },
        { status: 500 }
      );
    }

    const data = await response.json();
    const replyText =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I am here to assist with information regarding Nimisha Saxena's software engineering profile.";

    return NextResponse.json({ content: replyText });
  } catch (err: any) {
    console.error("Chat route error:", err);
    return NextResponse.json(
      { error: err.message || "Internal server error" },
      { status: 500 }
    );
  }
}
