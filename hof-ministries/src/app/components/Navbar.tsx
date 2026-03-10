"use client";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/sermons", label: "Sermons" },
  { href: "/leadership", label: "Leadership" },
  { href: "/ministries", label: "Ministries" },
  { href: "/schedule", label: "Schedule" },
  { href: "/volunteers", label: "Volunteer" },
  { href: "/give", label: "Give" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{ background: "#3b1259" }} className="sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/images/logo.png"
              alt="House of Faith Ministries Logo"
              className="h-16 w-auto drop-shadow-lg"
              style={{ display: "block", maxHeight: 64 }}
            />
            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-base tracking-wide">House of Faith</span>
              <span className="text-xs" style={{ color: "#e8d5b7" }}>
                Bronx, NY
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded text-sm font-medium transition-colors"
                style={{ color: "#e8d5b7" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#c9a227";
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#e8d5b7";
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://churchy.base44.app"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 rounded-full text-sm font-bold shadow transition-colors"
              style={{ background: "#c9a227", color: "#3b1259" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#e8c547";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#c9a227";
              }}
            >
              Church Hub ↗
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md"
            style={{ color: "#e8d5b7" }}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "#2e0d46" }} className="lg:hidden border-t border-purple-800">
          <div className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded text-sm font-medium"
                style={{ color: "#e8d5b7" }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://churchy.base44.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-4 py-2 rounded-full text-sm font-bold text-center"
              style={{ background: "#c9a227", color: "#3b1259" }}
            >
              Church Hub ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
