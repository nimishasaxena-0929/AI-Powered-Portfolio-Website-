"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const EDUCATION = [
  {
    degree: "Master of Computer Application (MCA)",
    institution: "Vikrant University, Gwalior",
    period: "Aug 2026 – Present",
    status: "In Progress",
    desc: "Advanced postgraduate studies focusing on distributed systems, full-stack enterprise architecture, and artificial intelligence integration.",
  },
  {
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Vikrant University, Gwalior",
    period: "2023 – 2026",
    status: "Completed",
    cgpa: "CGPA: 8.69",
    desc: "Undergraduate degree in computer applications covering software engineering, database management systems, data structures, algorithms, and web development.",
  },
];

const CERTIFICATIONS = [
  {
    title: "Full Stack React E-Commerce Project",
    issuer: "GreatStack",
    date: "Aug 2025",
    desc: "Comprehensive certification covering full-stack React.js application development, state management, payment integrations, and responsive design.",
  },
  {
    title: "Deloitte Australia Data Analytics Job Simulation",
    issuer: "Forage",
    date: "Aug 2025",
    desc: "Completed practical job simulation tasks involving data analysis, visualization, business intelligence insights, and technical reporting.",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-24 border-b border-[#222724] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs text-lime-500 uppercase tracking-widest block">
              06 / Education & Certifications
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F2F3EE]">
              Academic & Credentials
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-sans">
              Formal degree qualifications and industry certifications completed by Nimisha Saxena, as stated in her resume.
            </p>
          </div>

          <div className="font-mono text-xs text-slate-400">
            [ 02 Degrees • 02 Certifications ]
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Education Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-mono text-xs font-bold text-lime-500 uppercase tracking-widest flex items-center space-x-2">
              <GraduationCap className="w-4 h-4" />
              <span>Degree Education</span>
            </h3>

            <div className="space-y-6">
              {EDUCATION.map((edu, idx) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="editorial-card p-6 rounded-xl border border-[#222724] bg-[#121513] space-y-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#222724] pb-3">
                    <div>
                      <h4 className="text-lg font-bold text-[#F2F3EE]">
                        {edu.degree}
                      </h4>
                      <span className="text-xs font-mono text-slate-400 flex items-center space-x-1 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-lime-500" />
                        <span>{edu.institution}</span>
                      </span>
                    </div>

                    <div className="flex flex-col items-end font-mono text-xs">
                      <span className="text-lime-500 font-semibold">{edu.period}</span>
                      {edu.cgpa && (
                        <span className="px-2 py-0.5 rounded bg-[#0B0D0C] border border-lime-500/30 text-lime-400 text-[11px] mt-1 font-bold">
                          {edu.cgpa}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {edu.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-mono text-xs font-bold text-lime-500 uppercase tracking-widest flex items-center space-x-2">
              <Award className="w-4 h-4" />
              <span>Industry Certifications</span>
            </h3>

            <div className="space-y-6">
              {CERTIFICATIONS.map((cert, idx) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="editorial-card p-6 rounded-xl border border-[#222724] bg-[#121513] space-y-3"
                >
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-lime-500 font-bold">{cert.issuer}</span>
                    <span className="text-slate-500 flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{cert.date}</span>
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[#F2F3EE]">
                    {cert.title}
                  </h4>

                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    {cert.desc}
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
