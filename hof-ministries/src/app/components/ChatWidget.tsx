"use client";
import { useState, useRef, useEffect } from "react";

type Message = {
  from: "bot" | "user";
  text: string;
  chips?: string[];
  showForm?: "contact" | "prayer";
};

type ContactForm = { name: string; email: string; phone: string; message: string };
type PrayerForm = { name: string; email: string; request: string };

// ── Knowledge base ─────────────────────────────────────────────────────────────
const KB: { keywords: string[]; answer: string; chips?: string[] }[] = [
  {
    keywords: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening", "start", "help"],
    answer: "👋 Hi! Welcome to House of Faith Ministries. How can I help you today?",
    chips: ["Service times", "Location & address", "Ministries", "Give / Tithe", "Prayer request", "Contact us"],
  },
  {
    keywords: ["service time", "service", "sunday", "worship", "when", "schedule", "what time", "times"],
    answer:
      "🕐 Here are our weekly services:\n\n• **Sunday School** — 9:00 AM (Main Sanctuary)\n• **Sunday Worship** — 10:00 AM (Main Sanctuary)\n• **Morning Prayer** — Mon–Sat, 5:00–6:00 AM (Online)\n• **Bible Study** — Wednesdays, 8:00–9:00 PM (Online)\n• **Women's Fellowship** — Biweekly Thursdays, 9:00–10:00 PM (Online)\n• **Evening Prayer** — Fridays, 9:00–10:00 PM (Online)\n\nWould you like directions or more info?",
    chips: ["Location & address", "Ministries", "Contact us"],
  },
  {
    keywords: ["location", "address", "where", "directions", "find", "map", "bronx"],
    answer:
      "📍 We are located at:\n\n**467 E 138th St, Bronx, NY 10454**\n(Corner of St Ann's Ave & E 138th)\n\nWe'd love to see you on Sunday! 🙏",
    chips: ["Service times", "Parking", "Contact us"],
  },
  {
    keywords: ["parking", "park", "drive"],
    answer:
      "🚗 Street parking is available on E 138th St and the surrounding area. We recommend arriving a few minutes early on Sundays.\n\nFor public transit, we are accessible by the 6 train (138th St – Grand Concourse station).",
    chips: ["Location & address", "Service times"],
  },
  {
    keywords: ["give", "tithe", "offering", "donate", "donation", "online giving", "pay"],
    answer:
      "💛 Thank you for your heart to give! You can give securely through our Church Hub portal:\n\n👉 churchy.base44.app\n\nYou can also give in person during any service. Every gift advances the Kingdom!",
    chips: ["Service times", "Contact us"],
  },
  {
    keywords: ["ministry", "ministries", "join", "get involved", "volunteer", "group", "youth", "women", "men", "children", "worship"],
    answer:
      "🌟 We have ministries for everyone:\n\n• Worship & Arts\n• Children's Ministry\n• Youth Ministry (13–17)\n• Young Adults (18–35)\n• Men's Ministry\n• Women's Ministry\n• Community Outreach\n• Bible Study & Discipleship\n• Leadership Development\n\nVisit our Ministries page or contact us to find your fit!",
    chips: ["Location & address", "Service times", "Contact us"],
  },
  {
    keywords: ["pastor", "leader", "leadership", "senior pastor", "who"],
    answer:
      "👨‍⚖️ House of Faith is led by our Senior Pastor and a dedicated team of leaders committed to serving God and our community with excellence.\n\nVisit our Leadership page for more details about our pastoral team.",
    chips: ["Service times", "Contact us"],
  },
  {
    keywords: ["sermon", "sermons", "message", "preach", "preaching", "past service", "replay", "recording", "listen"],
    answer:
      "🎙️ You can find past sermons on our Sermons page. We post audio and video recordings of messages to keep you inspired throughout the week.",
    chips: ["Service times", "Location & address", "Contact us"],
  },
  {
    keywords: ["prayer", "pray", "prayer request", "intercession", "need prayer"],
    answer:
      "🙏 We would be honoured to pray with you. Please share your prayer request and our team will stand in agreement with you.",
    chips: [],
    // showForm is injected dynamically below
  },
  {
    keywords: ["contact", "email", "phone", "call", "reach", "speak", "talk", "message"],
    answer:
      "📬 You can reach us at:\n\n📧 info@hofmny.com\n📍 467 E 138th St, Bronx, NY 10454\n\nOr fill in the form below and we'll get back to you!",
    chips: [],
  },
  {
    keywords: ["baptism", "baptize", "baptised", "water baptism"],
    answer:
      "💧 We celebrate water baptism as a public declaration of faith! If you'd like to be baptized or learn more, please contact us and a team member will guide you through the next steps.",
    chips: ["Contact us", "Service times"],
  },
  {
    keywords: ["new", "visitor", "first time", "visit", "newcomer", "new here"],
    answer:
      "🎉 Welcome! We are so glad you're considering joining us. Sunday service starts at 10:00 AM at 467 E 138th St, Bronx, NY 10454. Come as you are — you are loved here!",
    chips: ["Service times", "Location & address", "Ministries"],
  },
];

const FALLBACK: Message = {
  from: "bot",
  text: "I'm not sure about that, but I'd love to connect you with our team who can help! 😊",
  chips: ["Service times", "Location & address", "Contact us", "Prayer request"],
};

function getBotResponse(input: string): Message {
  const lower = input.toLowerCase();
  for (const entry of KB) {
    if (entry.keywords.some((kw) => lower.includes(kw))) {
      const isPrayer = entry.keywords.includes("prayer");
      const isContact = entry.keywords.includes("contact");
      return {
        from: "bot",
        text: entry.answer,
        chips: entry.chips,
        showForm: isPrayer ? "prayer" : isContact ? "contact" : undefined,
      };
    }
  }
  return FALLBACK;
}

// ── Component ──────────────────────────────────────────────────────────────────
export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "👋 Hi! Welcome to House of Faith Ministries. How can I help you today?",
      chips: ["Service times", "Location & address", "Ministries", "Give / Tithe", "Prayer request", "Contact us"],
    },
  ]);
  const [input, setInput] = useState("");
  const [contactForm, setContactForm] = useState<ContactForm>({ name: "", email: "", phone: "", message: "" });
  const [prayerForm, setPrayerForm] = useState<PrayerForm>({ name: "", email: "", request: "" });
  const [formLoading, setFormLoading] = useState(false);
  const [formSent, setFormSent] = useState<"contact" | "prayer" | null>(null);
  const [formError, setFormError] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  function sendUserMessage(text: string) {
    const userMsg: Message = { from: "user", text };
    const botMsg = getBotResponse(text);
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
    setFormSent(null);
    setFormError("");
  }

  function handleInputSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    sendUserMessage(input.trim());
  }

  async function handleContactSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormLoading(true);
    setFormError("");
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: contactForm.name,
          email: contactForm.email,
          message: `Phone: ${contactForm.phone || "N/A"}\n\n${contactForm.message}`,
          subject: "Contact enquiry",
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setFormSent("contact");
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: `✅ Thank you, ${contactForm.name}! Your message has been sent to our team. We'll be in touch soon. 🙏` },
      ]);
      setContactForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setFormError("Something went wrong. Please email us directly at info@hofmny.com");
    } finally {
      setFormLoading(false);
    }
  }

  async function handlePrayerSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormLoading(true);
    setFormError("");
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: prayerForm.name,
          email: prayerForm.email,
          message: prayerForm.request,
          subject: "Prayer request",
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setFormSent("prayer");
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: `🙏 Thank you, ${prayerForm.name}. Our prayer team will lift you up in prayer. God bless you!` },
      ]);
      setPrayerForm({ name: "", email: "", request: "" });
    } catch {
      setFormError("Something went wrong. Please email us directly at info@hofmny.com");
    } finally {
      setFormLoading(false);
    }
  }

  function handleClose() {
    setOpen(false);
  }

  const inputStyle = {
    borderColor: "#e8d5b7",
    background: "#fff",
    color: "#2c1810",
  };

  return (
    <>
      {/* Chat Panel */}
      {open && (
        <div
          className="fixed bottom-24 right-5 z-50 w-[350px] max-w-[calc(100vw-2rem)] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          style={{ background: "#fdf8f2", border: "2px solid #c9a227", maxHeight: "82vh" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 shrink-0" style={{ background: "#3b1259" }}>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-lg font-bold" style={{ background: "#c9a227", color: "#3b1259" }}>
                ✝
              </div>
              <div>
                <p className="font-bold text-white text-sm leading-tight">HOF Assistant</p>
                <p className="text-xs flex items-center gap-1" style={{ color: "#e8d5b7" }}>
                  <span className="inline-block w-2 h-2 rounded-full bg-green-400"></span> Online
                </p>
              </div>
            </div>
            <button onClick={handleClose} className="text-white/70 hover:text-white text-xl leading-none">✕</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3" style={{ minHeight: 0 }}>
            {messages.map((msg, i) => (
              <div key={i}>
                {/* Bubble */}
                <div className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.from === "bot" && (
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mr-2 mt-1" style={{ background: "#c9a227", color: "#3b1259" }}>
                      ✝
                    </div>
                  )}
                  <div
                    className="max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-snug whitespace-pre-line"
                    style={
                      msg.from === "bot"
                        ? { background: "#fff", color: "#2c1810", border: "1px solid #e8d5b7", borderBottomLeftRadius: 4 }
                        : { background: "#3b1259", color: "#e8d5b7", borderBottomRightRadius: 4 }
                    }
                    dangerouslySetInnerHTML={{
                      __html: msg.text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                    }}
                  />
                </div>

                {/* Quick chips */}
                {msg.chips && msg.chips.length > 0 && i === messages.length - 1 && (
                  <div className="flex flex-wrap gap-2 mt-2 ml-9">
                    {msg.chips.map((chip) => (
                      <button
                        key={chip}
                        onClick={() => sendUserMessage(chip)}
                        className="px-3 py-1 rounded-full text-xs font-semibold border transition-colors"
                        style={{ borderColor: "#c9a227", color: "#3b1259", background: "#fff" }}
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                )}

                {/* Inline prayer form */}
                {msg.showForm === "prayer" && i === messages.length - 1 && formSent !== "prayer" && (
                  <form onSubmit={handlePrayerSubmit} className="mt-3 ml-9 flex flex-col gap-2">
                    <input required placeholder="Your name *" value={prayerForm.name} onChange={e => setPrayerForm(f => ({ ...f, name: e.target.value }))} className="w-full px-3 py-1.5 rounded-lg text-xs border outline-none" style={inputStyle} />
                    <input type="email" placeholder="Your email (optional)" value={prayerForm.email} onChange={e => setPrayerForm(f => ({ ...f, email: e.target.value }))} className="w-full px-3 py-1.5 rounded-lg text-xs border outline-none" style={inputStyle} />
                    <textarea required rows={3} placeholder="Share your prayer request *" value={prayerForm.request} onChange={e => setPrayerForm(f => ({ ...f, request: e.target.value }))} className="w-full px-3 py-1.5 rounded-lg text-xs border outline-none resize-none" style={inputStyle} />
                    {formError && <p className="text-xs text-red-600">{formError}</p>}
                    <button type="submit" disabled={formLoading} className="px-4 py-1.5 rounded-full text-xs font-bold disabled:opacity-60" style={{ background: "#c9a227", color: "#3b1259" }}>
                      {formLoading ? "Sending..." : "Submit Prayer Request 🙏"}
                    </button>
                  </form>
                )}

                {/* Inline contact form */}
                {msg.showForm === "contact" && i === messages.length - 1 && formSent !== "contact" && (
                  <form onSubmit={handleContactSubmit} className="mt-3 ml-9 flex flex-col gap-2">
                    <input required placeholder="Your name *" value={contactForm.name} onChange={e => setContactForm(f => ({ ...f, name: e.target.value }))} className="w-full px-3 py-1.5 rounded-lg text-xs border outline-none" style={inputStyle} />
                    <input type="email" placeholder="Your email *" required value={contactForm.email} onChange={e => setContactForm(f => ({ ...f, email: e.target.value }))} className="w-full px-3 py-1.5 rounded-lg text-xs border outline-none" style={inputStyle} />
                    <input placeholder="Your phone (optional)" value={contactForm.phone} onChange={e => setContactForm(f => ({ ...f, phone: e.target.value }))} className="w-full px-3 py-1.5 rounded-lg text-xs border outline-none" style={inputStyle} />
                    <textarea required rows={3} placeholder="Your message *" value={contactForm.message} onChange={e => setContactForm(f => ({ ...f, message: e.target.value }))} className="w-full px-3 py-1.5 rounded-lg text-xs border outline-none resize-none" style={inputStyle} />
                    {formError && <p className="text-xs text-red-600">{formError}</p>}
                    <button type="submit" disabled={formLoading} className="px-4 py-1.5 rounded-full text-xs font-bold disabled:opacity-60" style={{ background: "#3b1259", color: "#e8d5b7" }}>
                      {formLoading ? "Sending..." : "Send Message ✉️"}
                    </button>
                  </form>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleInputSubmit} className="px-4 py-3 flex gap-2 shrink-0 border-t" style={{ borderColor: "#e8d5b7", background: "#fff" }}>
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type a question..."
              className="flex-1 px-3 py-2 rounded-full text-sm border outline-none"
              style={{ borderColor: "#c9a227", color: "#2c1810" }}
            />
            <button
              type="submit"
              className="w-9 h-9 rounded-full flex items-center justify-center text-lg shrink-0"
              style={{ background: "#c9a227", color: "#3b1259" }}
            >
              ➤
            </button>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-2xl transition-transform hover:scale-110"
        style={{ background: "#3b1259", color: "#c9a227", border: "3px solid #c9a227" }}
        aria-label="Open chat"
      >
        {open ? "✕" : "💬"}
      </button>
    </>
  );
}
