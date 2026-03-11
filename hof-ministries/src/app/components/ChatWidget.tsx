"use client";
import { useState, useRef, useEffect } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"form" | "sent">("form");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && panelRef.current) {
      panelRef.current.focus();
    }
  }, [open]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send.");
      setStep("sent");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  function handleClose() {
    setOpen(false);
    setTimeout(() => {
      setStep("form");
      setForm({ name: "", email: "", message: "" });
      setError("");
    }, 300);
  }

  return (
    <>
      {/* Chat Panel */}
      {open && (
        <div
          ref={panelRef}
          tabIndex={-1}
          className="fixed bottom-24 right-5 z-50 w-[340px] max-w-[calc(100vw-2rem)] rounded-2xl shadow-2xl overflow-hidden"
          style={{ background: "#fdf8f2", border: "2px solid #c9a227" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4" style={{ background: "#3b1259" }}>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-lg" style={{ background: "#c9a227" }}>
                ✝
              </div>
              <div>
                <p className="font-bold text-white text-sm leading-tight">House of Faith</p>
                <p className="text-xs" style={{ color: "#e8d5b7" }}>We typically reply by email</p>
              </div>
            </div>
            <button onClick={handleClose} className="text-white/70 hover:text-white text-xl leading-none">✕</button>
          </div>

          {/* Body */}
          <div className="px-5 py-4">
            {step === "form" ? (
              <>
                <p className="text-sm mb-4" style={{ color: "#5a3e28" }}>
                  Hi there! 👋 Have a question or prayer request? Send us a message and we&apos;ll get back to you.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input
                    type="text"
                    placeholder="Your name *"
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full px-3 py-2 rounded-lg text-sm border outline-none"
                    style={{ borderColor: "#e8d5b7", background: "#fff", color: "#2c1810" }}
                  />
                  <input
                    type="email"
                    placeholder="Your email (for our reply)"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="w-full px-3 py-2 rounded-lg text-sm border outline-none"
                    style={{ borderColor: "#e8d5b7", background: "#fff", color: "#2c1810" }}
                  />
                  <textarea
                    placeholder="Your message *"
                    required
                    rows={4}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full px-3 py-2 rounded-lg text-sm border outline-none resize-none"
                    style={{ borderColor: "#e8d5b7", background: "#fff", color: "#2c1810" }}
                  />
                  {error && <p className="text-xs text-red-600">{error}</p>}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2.5 rounded-full font-bold text-sm transition-opacity disabled:opacity-60"
                    style={{ background: "#c9a227", color: "#3b1259" }}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="text-4xl mb-3">🙏</div>
                <h3 className="font-extrabold text-lg mb-2" style={{ color: "#3b1259" }}>Message Received!</h3>
                <p className="text-sm mb-4" style={{ color: "#5a3e28" }}>
                  Thank you, {form.name}! We&apos;ll get back to you at <strong>{form.email || "your email"}</strong> soon.
                </p>
                <button
                  onClick={handleClose}
                  className="px-5 py-2 rounded-full font-bold text-sm"
                  style={{ background: "#3b1259", color: "#e8d5b7" }}
                >
                  Close
                </button>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-5 py-2 text-center" style={{ background: "#e8d5b7" }}>
            <p className="text-xs" style={{ color: "#7c5c3e" }}>
              Or email us directly at{" "}
              <a href="mailto:info@hofmny.com" style={{ color: "#3b1259", fontWeight: "bold" }}>
                info@hofmny.com
              </a>
            </p>
          </div>
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
