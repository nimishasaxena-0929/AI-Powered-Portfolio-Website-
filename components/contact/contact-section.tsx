"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Please complete all required fields.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to submit message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred.");
    }
  };

  return (
    <section id="contact" className="py-24 border-b border-[#222724] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs text-lime-500 uppercase tracking-widest block">
              07 / Connect & Collaborate
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F2F3EE]">
              Contact Nimisha
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-sans">
              Available for full-stack engineering roles, SaaS platform development, API architecture consultations, or AI integration projects.
            </p>
          </div>

          <div className="font-mono text-xs text-slate-400">
            [ Demo Contact Environment ]
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Demo Contact Details */}
          <div className="lg:col-span-5 space-y-6 font-mono text-xs">
            <div className="editorial-card p-6 rounded-xl border border-[#222724] bg-[#121513] space-y-5">
              <h3 className="text-sm font-bold text-[#F2F3EE] uppercase tracking-wider">
                Demo Contact Credentials
              </h3>

              <div className="space-y-4 text-slate-300">
                <div className="p-3.5 rounded bg-[#0B0D0C] border border-[#222724] space-y-1">
                  <div className="text-[10px] text-slate-500 uppercase flex items-center space-x-1.5">
                    <Mail className="w-3.5 h-3.5 text-lime-500" />
                    <span>Email Address</span>
                  </div>
                  <a href="mailto:saxenanimisha514@gmail.com" className="text-sm font-bold text-[#F2F3EE] hover:text-lime-500 transition-colors block">
                    saxenanimisha514@gmail.com
                  </a>
                </div>

                <div className="p-3.5 rounded bg-[#0B0D0C] border border-[#222724] space-y-1">
                  <div className="text-[10px] text-slate-500 uppercase flex items-center space-x-1.5">
                    <Phone className="w-3.5 h-3.5 text-lime-500" />
                    <span>Phone Number</span>
                  </div>
                  <a href="tel:9584841830" className="text-sm font-bold text-[#F2F3EE] hover:text-lime-500 transition-colors block">
                    +91 9584841830
                  </a>
                </div>

                <div className="p-3.5 rounded bg-[#0B0D0C] border border-[#222724] space-y-1">
                  <div className="text-[10px] text-slate-500 uppercase flex items-center space-x-1.5">
                    <MapPin className="w-3.5 h-3.5 text-lime-500" />
                    <span>Location</span>
                  </div>
                  <div className="text-sm font-bold text-[#F2F3EE]">
                    Gwalior, India — Remote
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-[#222724] space-y-3">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest block">
                  Professional Networks
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://github.com/nimishasaxena-0929"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded bg-[#0B0D0C] border border-[#222724] text-slate-300 hover:text-lime-500 font-mono text-xs flex items-center justify-center space-x-2 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nimishasaxena29"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded bg-[#0B0D0C] border border-[#222724] text-slate-300 hover:text-lime-500 font-mono text-xs flex items-center justify-center space-x-2 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="editorial-card p-8 rounded-xl border border-[#222724] bg-[#121513] space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-mono text-slate-300">
                    Your Name <span className="text-lime-500">*</span>
                  </label>
                  <input
                    suppressHydrationWarning
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Engineering Manager"
                    className="w-full bg-[#0B0D0C] border border-[#222724] rounded-lg px-4 py-3 text-sm text-[#F2F3EE] placeholder-slate-500 focus:outline-none focus:border-lime-500 transition-colors font-sans"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-mono text-slate-300">
                    Your Email <span className="text-lime-500">*</span>
                  </label>
                  <input
                    suppressHydrationWarning
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="manager@company.com"
                    className="w-full bg-[#0B0D0C] border border-[#222724] rounded-lg px-4 py-3 text-sm text-[#F2F3EE] placeholder-slate-500 focus:outline-none focus:border-lime-500 transition-colors font-sans"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-mono text-slate-300">
                  Subject
                </label>
                <input
                  suppressHydrationWarning
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Full Stack Developer Opportunity"
                  className="w-full bg-[#0B0D0C] border border-[#222724] rounded-lg px-4 py-3 text-sm text-[#F2F3EE] placeholder-slate-500 focus:outline-none focus:border-lime-500 transition-colors font-sans"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-mono text-slate-300">
                  Message <span className="text-lime-500">*</span>
                </label>
                <textarea
                  suppressHydrationWarning
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Inquire about project requirements, technical architecture, or full-stack roles..."
                  className="w-full bg-[#0B0D0C] border border-[#222724] rounded-lg px-4 py-3 text-sm text-[#F2F3EE] placeholder-slate-500 focus:outline-none focus:border-lime-500 transition-colors font-sans resize-none"
                />
              </div>

              {/* Status Notifications */}
              {status === "success" && (
                <div className="p-4 rounded-lg bg-[#0B0D0C] border border-lime-500/40 text-lime-400 text-xs font-mono flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-lime-500" />
                  <span>Message transmitted successfully in demo environment.</span>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 rounded-lg bg-red-950/40 border border-red-500/30 text-red-400 text-xs font-mono flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                suppressHydrationWarning
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-3.5 rounded-lg bg-lime-500 text-charcoal-950 font-mono font-bold text-xs uppercase tracking-wider hover:bg-lime-400 transition-colors disabled:opacity-50 flex items-center justify-center space-x-2"
              >
                <span>{status === "submitting" ? "Transmitting..." : "Send Message"}</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
