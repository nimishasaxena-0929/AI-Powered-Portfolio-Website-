"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, RotateCcw, Copy, Check, AlertCircle, Bot, User, HelpCircle } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

const SUGGESTED_PROMPTS = [
  "What projects has Nimisha built?",
  "What technologies does she use?",
  "Tell me about MediFlow.",
  "How does she use AI?",
  "What is her backend experience?",
];

export default function AiLabSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      role: "assistant",
      content:
        "Hello. I am Nimisha Saxena's AI Assistant powered by Google Gemini. Ask me about Nimisha's full-stack skills, SaaS architecture experience, education, or projects.",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || isLoading) return;

    setErrorMsg(null);

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to communicate with AI Assistant");
      }

      const data = await response.json();

      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.content,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err: any) {
      console.error(err);
      setErrorMsg("Network error contacting AI service. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: Date.now().toString(),
        role: "assistant",
        content: "Conversation reset. Feel free to ask another question about Nimisha's profile.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
    setErrorMsg(null);
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="ai-lab" className="py-24 border-b border-[#222724] relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs text-lime-500 uppercase tracking-widest block">
              05 / Interactive Assistant
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F2F3EE]">
              AI Lab — Gemini Assistant
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-sans">
              Ask real-time questions about Nimisha's software engineering background, full-stack tech stack, and SaaS project architectures.
            </p>
          </div>

          <div className="font-mono text-xs text-slate-400">
            [ Gemini 2.5 API ]
          </div>
        </div>

        {/* Chat Feed Box */}
        <div className="editorial-card rounded-xl border border-[#222724] bg-[#121513] overflow-hidden flex flex-col h-[580px]">
          {/* Top Bar */}
          <div className="px-6 py-4 bg-[#181C19] border-b border-[#222724] flex items-center justify-between font-mono text-xs">
            <div className="flex items-center space-x-2.5">
              <span className="w-2 h-2 rounded-full bg-lime-500" />
              <span className="font-bold text-[#F2F3EE]">Nimisha Saxena Developer Assistant</span>
            </div>

            <button
              onClick={handleReset}
              className="px-3 py-1 rounded bg-[#0B0D0C] border border-[#222724] text-slate-400 hover:text-white flex items-center space-x-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4 font-sans text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-start space-x-3 ${
                  msg.role === "user" ? "flex-row-reverse space-x-reverse" : ""
                }`}
              >
                <div
                  className={`w-7 h-7 rounded flex items-center justify-center shrink-0 font-mono text-xs border ${
                    msg.role === "user"
                      ? "bg-[#181C19] border-slate-700 text-lime-500"
                      : "bg-[#0B0D0C] border-[#222724] text-slate-300"
                  }`}
                >
                  {msg.role === "user" ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                </div>

                <div
                  className={`max-w-[80%] rounded-xl p-4 border relative group ${
                    msg.role === "user"
                      ? "bg-[#181C19] border-slate-700 text-[#F2F3EE]"
                      : "bg-[#0B0D0C] border-[#222724] text-slate-300"
                  }`}
                >
                  <div className="whitespace-pre-wrap leading-relaxed">
                    {msg.content}
                  </div>

                  <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                    <span>{msg.timestamp}</span>

                    {msg.role === "assistant" && (
                      <button
                        onClick={() => copyToClipboard(msg.content, msg.id)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity p-1 text-slate-500 hover:text-lime-500"
                        title="Copy to clipboard"
                      >
                        {copiedId === msg.id ? (
                          <Check className="w-3 h-3 text-lime-500" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center space-x-3">
                <div className="w-7 h-7 rounded bg-[#0B0D0C] border border-[#222724] text-lime-500 flex items-center justify-center font-mono text-xs">
                  <Bot className="w-3.5 h-3.5 animate-spin" />
                </div>
                <div className="p-3 rounded-xl bg-[#0B0D0C] border border-[#222724] font-mono text-xs text-lime-500 flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse" />
                  <span>Gemini 2.5 is formulating response...</span>
                </div>
              </div>
            )}

            {errorMsg && (
              <div className="p-3 rounded-lg bg-red-950/40 border border-red-500/30 text-red-400 text-xs font-mono flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Prompts Banner */}
          <div className="px-6 py-2.5 bg-[#181C19] border-t border-[#222724] flex items-center space-x-2 overflow-x-auto font-mono text-xs">
            <span className="text-slate-500 shrink-0 flex items-center space-x-1">
              <HelpCircle className="w-3 h-3 text-lime-500" />
              <span>Suggested:</span>
            </span>
            {SUGGESTED_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSend(prompt)}
                disabled={isLoading}
                className="px-3 py-1 rounded bg-[#0B0D0C] border border-[#222724] text-slate-400 hover:text-lime-500 shrink-0 transition-colors disabled:opacity-50"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-4 bg-[#0B0D0C] border-t border-[#222724] flex items-center space-x-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Nimisha's full-stack experience, MediFlow SaaS, or AI integrations..."
              disabled={isLoading}
              className="flex-1 bg-[#121513] border border-[#222724] rounded-lg px-4 py-3 text-sm text-[#F2F3EE] placeholder-slate-500 focus:outline-none focus:border-lime-500 transition-colors font-sans"
            />

            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="px-5 py-3 rounded-lg bg-lime-500 text-charcoal-950 font-mono font-bold text-xs uppercase tracking-wider hover:bg-lime-400 disabled:opacity-50 transition-colors flex items-center space-x-2 shrink-0"
            >
              <span>Ask</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
